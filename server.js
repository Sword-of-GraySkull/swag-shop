var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
useNewUrlParser = true;
var db = mongoose.connect('mongodb+srv://swag-shop.mquh0.mongodb.net/swag-shop', { useNewUrlParser: true, useUnifiedTopology: true });

var Product = require('./model/product');
var WishList = require('./model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.post("/product", function( request, response) {
    var product = new Product();
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function(err, savedProduct) {
       if( err) {
           response.status(500).send({error: "Could not save product"});
       } 
       else {
           response.status(200).send(savedProduct);
       }
    });
});

app.post("/wishlist", function( request, response) {
    var wishList = new WishList();
    wishList.title = request.body.title;
    
    wishList.save(function(err, newWishList) {
        if(err) {
            response.status(500).send({error: "Could not save Wishlist"});
        }
        else {
            response.status(200).send( newWishList);
        }
    });
});

app.put('/wishlist/product/add', function(request, response) {
    Product.findOne({_id: request.body.productId}, function(err, product) {
        if(err) {
            response.status(500).send({error:"Could not add item to wishlist"});
        }
        else {
            WishList.update({_id: request.body.wishListId}, {$addToSet: {products: product._id}}, function (err, wishList) {
                if(err) {
                    response.status(500).send({error:"Could not add item to wishlist"});
                }
                else {
                response.send("Successfully added to the Wishlist");
                }   
            })
        }
    })
})

app.get("/wishlist", function( request, response) {
    WishList.find({}).populate({path:'products', model: 'Product'}).exec(function(err, wishlist) {
        if(err) {
            response.status(500).send({error:"Could not get the Wishlist"});
        }
        else {
            response.status(200).send(wishlist);
        }
    })
})

app.get("/product", function( request, response) {
    Product.find({}, function(err, products) {
        if( err) {
            response.status(500).send({error: "Could not fetch products"});
        }
        else {
            response.send(products);
        }
    })
});

app.listen(3001, function() {
    console.log("Swag Shop API running on port 3001!!")
});

