(this["webpackJsonpswag-shop-web"]=this["webpackJsonpswag-shop-web"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/logo.ee7cd8ed.svg"},function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(7),o=n.n(s),c=(n(14),n(1)),r=n(3),l=n(2),u=n(5),d=n(4),h=n(8),m=n.n(h),p=(n(15),n(16),{}),f=null,v=function t(){return Object(c.a)(this,t),this.postNotification=function(t,e){for(var n=p[t],i=0;i<n.length;i++){n[i].callBack(e)}},this.removeObserver=function(t,e){var n=p[e];if(n)for(var i=0;i<n.length;i++)if(t===n[i].observer){n.splice(i,1),p[e]=n,console.log("observer removed");break}},this.addObserver=function(t,e,n){p[t]||(p[t]=[]);var i={observer:e,callBack:n};p[t].push(i),console.log("observer added")},f||(f=this),f},b=new v,g=null,O=[],L=function t(){return Object(c.a)(this,t),this.itemOnWishList=function(t){for(var e=0;e<O.length;e++)if(O[e]._id===t._id)return!0;return!1},this.addWishListItem=function(t){O.push(t),b.postNotification("notif_wishlist_changed",O)},this.removeWishListItem=function(t){for(var e=0;e<O.length;e++)if(O[e]._id===t._id){O.splice(e,1),console.log("item removed"),b.postNotification("notif_wishlist_changed",O);break}},g||(g=this),g},W=new L,w=new v,E=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).onButtonClicked=function(){i.state.onWishList?W.removeWishListItem(i.props.product):W.addWishListItem(i.props.product)},i.state={onWishList:W.itemOnWishList()},i.onButtonClicked=i.onButtonClicked.bind(Object(l.a)(i)),i.onWishListChanged=i.onWishListChanged.bind(Object(l.a)(i)),i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){w.addObserver("notif_wishlist_changed",this,this.onWishListChanged)}},{key:"componentWillUnmount",value:function(){w.removeObserver(this,"notif_wishlist_changed")}},{key:"onWishListChanged",value:function(t){this.setState({onWishList:W.itemOnWishList(this.props.product)})}},{key:"render",value:function(){var t,e=this;return t=this.state.onWishList?"btn btn-danger":"btn btn-primary",a.a.createElement("div",{className:"card product"},a.a.createElement("img",{className:"card-img-top",src:this.props.product.imgUrl,alt:"Product"}),a.a.createElement("div",{className:"card-block"},a.a.createElement("h4",{className:"card-title"},this.props.product.title),a.a.createElement("p",{className:"card-text"},"Price: $",this.props.product.price),a.a.createElement("a",{href:"#wishlist",onClick:function(){return e.onButtonClicked()},className:t},this.state.onWishList?"Remove from WishList":"Add to WishList")))}}]),n}(i.Component),j=(n(17),n(18),new L),k=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).removeProduct=function(){j.removeWishListItem(i.props.product)},i.removeProduct=i.removeProduct.bind(Object(l.a)(i)),i}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("li",{className:"list-group-item pc-condensed"},a.a.createElement("a",{className:"btn btn-outline-danger",onClick:function(){return t.removeProduct()}},"X"),a.a.createElement("p",null,this.props.product.title," |  ",a.a.createElement("b",null,"$",this.props.product.price)))}}]),n}(i.Component),N=new v,C=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).createWishList=function(){return i.state.wishList.map((function(t){return a.a.createElement(k,{product:t,key:t._id})}))},i.state={wishList:[]},i.createWishList=i.createWishList.bind(Object(l.a)(i)),i.onWishListChanged=i.onWishListChanged.bind(Object(l.a)(i)),i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){N.addObserver("notif_wishlist_changed",this,this.onWishListChanged)}},{key:"componentWillUnmount",value:function(){N.removeObserver(this,"notif_wishlist_changed")}},{key:"onWishListChanged",value:function(t){this.setState({wishList:t})}},{key:"render",value:function(){return a.a.createElement("div",{className:"card custom-card"},a.a.createElement("div",{className:"card-block"},a.a.createElement("h4",{className:"card-title"},"Wish List"),a.a.createElement("ul",{className:"list-group"},this.createWishList())))}}]),n}(i.Component),_=(n(19),new function t(){Object(c.a)(this,t),this.getProducts=function(){return new Promise((function(t,e){fetch("http://localhost:3001/product").then((function(e){t(e.json())}))}))}}),y=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).loadData=function(){var t=Object(l.a)(i);_.getProducts().then((function(e){t.setState({products:e})}),(function(t){console.log("there is an error")}))},i.productList=function(){return i.state.products.map((function(t){return a.a.createElement("div",{className:"col-sm-4",key:t._id},a.a.createElement(E,{product:t}))}))},i.state={products:[]},i.loadData=i.loadData.bind(Object(l.a)(i)),i.productList=i.productList.bind(Object(l.a)(i)),i.loadData(),i}return Object(r.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"Welcome to Swag Shop"),a.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),a.a.createElement("div",{className:"container-fluid App-main"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm-8"},a.a.createElement("div",{className:"row"},this.productList())),a.a.createElement("div",{className:"col-sm-4"},a.a.createElement(C,null))))))}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d147dd11.chunk.js.map