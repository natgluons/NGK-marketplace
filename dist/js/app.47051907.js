(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0703":function(t,e,a){t.exports=a.p+"img/schnauzer1.e8eeea59.jpg"},"183a":function(t,e,a){t.exports=a.p+"img/logongk.2c746488.jpg"},"1f17":function(t,e,a){t.exports=a.p+"img/schnauzeradult5.08f81e29.jpg"},"1f83":function(t,e,a){t.exports=a.p+"img/shoppingcart.220169b7.svg"},2407:function(t,e,a){t.exports=a.p+"img/account.4c194c93.svg"},"2ec3":function(t,e,a){t.exports=a.p+"img/schnauzer5.41e7bc1f.jpg"},"34e1":function(t,e,a){t.exports=a.p+"img/toypoodle1.22db8161.jpg"},"352b":function(t,e,a){t.exports=a.p+"img/tiktok.f477449e.svg"},"3cf2":function(t,e,a){"use strict";a("47c4")},"3eef":function(t,e,a){t.exports=a.p+"img/schnauzer3.7755938c.jpg"},"3f25":function(t,e,a){t.exports=a.p+"img/toypoodle18.a8a9f672.jpg"},"45bb":function(t,e,a){"use strict";a("f4f2")},"47c4":function(t,e,a){},"509f":function(t,e,a){t.exports=a.p+"img/schnauzeradult8main.24910eae.jpg"},"53b8":function(t,e,a){t.exports=a.p+"img/toypoodle3.9c984f4d.jpg"},"54e6":function(t,e,a){t.exports=a.p+"img/instagram.c4558728.svg"},"553c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"background-color":"#f4f4f4",height:"100%"},attrs:{id:"app"}},[e("div",{staticStyle:{width:"100%","max-width":"500px",height:"100%",position:"fixed",left:"50%",transform:"translateX(-50%)","background-color":"#fff","box-shadow":"0 0 10px rgba(0, 0, 0, 0.1)"}},[e("Header"),e("div",{staticStyle:{height:"calc(100% - 75px)",width:"100%"}},[e("router-view")],1),e("div",{staticStyle:{bottom:"0",position:"fixed",width:"100%"}},[e("NavBar")],1)],1)])},n=[],i=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"header-item",on:{click:t.goBack}},[e("img",{staticClass:"arrow-back",attrs:{src:a("877e"),alt:"Arrow Back"}})]),e("div",{staticClass:"header-item title"},[t._v("NATASHA GADING KENNEL")]),t._m(0)])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-item shopping-cart-container"},[e("img",{staticClass:"shopping-cart",attrs:{src:a("1f83"),alt:"Shopping Cart"}})])}],c={name:"Header",methods:{goBack(){this.$router.go(-1)}}},l=c,u=(a("e5e1"),a("2877")),d=Object(u["a"])(l,i,o,!1,null,"490eb563",null),p=d.exports,m=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar"},t._l(t.navItems,(function(a,s){return e("router-link",{key:s,staticClass:"nav-item",attrs:{to:a.to},on:{click:function(e){return t.setActive(s)}}},[e("img",{class:{active:t.activeIndex===s},attrs:{src:a.icon,alt:a.text}}),e("span",{class:{active:t.activeIndex===s}},[t._v(t._s(a.text))])])})),1)},h=[],f={name:"NavBar",data(){return{activeIndex:null,navItems:[{to:"/",icon:a("86e6"),text:"Home"},{to:"/contact-us",icon:a("7222"),text:"Contact Us"},{to:"/transactions",icon:a("805d"),text:"Transactions"},{to:"/account",icon:a("2407"),text:"Account"}]}},methods:{setActive(t){this.activeIndex=t},updateActiveIndex(){const t=this.$route.path;this.activeIndex=this.navItems.findIndex(e=>e.to===t)}},mounted(){this.updateActiveIndex()},watch:{$route(){this.updateActiveIndex()}}},g=f,v=(a("7411"),Object(u["a"])(g,m,h,!1,null,"2b5bd4a4",null)),b=v.exports,_={name:"App",components:{Header:p,NavBar:b}},x=_,C=(a("d3f8"),Object(u["a"])(x,r,n,!1,null,null,null)),y=C.exports,I=a("8c4f"),w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-page"},[e("div",{staticClass:"div"},[e("div",{staticClass:"carousel-banner"},[e("div",{staticClass:"overlap-2"},[e("div",{staticClass:"carousel-container"},[e("transition-group",{staticClass:"carousel-images",attrs:{name:"fade",tag:"div"}},t._l(t.carouselImages,(function(a,s){return e("img",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex===s,expression:"currentIndex === index"}],key:s,attrs:{src:a.src,alt:a.alt}})})),0),e("button",{staticClass:"prev",on:{click:t.prevSlide}},[t._v("❮")]),e("button",{staticClass:"next",on:{click:t.nextSlide}},[t._v("❯")])],1),e("div",{staticClass:"dots-container"},t._l(t.carouselImages,(function(a,s){return e("div",{key:s,class:["dot",{"dot-active":t.currentIndex===s}]})})),0)]),e("div",{staticClass:"overlap-3"},[e("h2",{staticClass:"section-title"},[t._v("Our Puppies")]),e("div",{staticClass:"our-puppies-carousel"},[e("div",{staticClass:"carousel"},t._l(["Toy Poodle","Schnauzer","Yorkshire"],(function(a){return e("div",{key:a,staticClass:"item"},[e("img",{attrs:{src:t.getBreedImage(a),alt:a}}),e("router-link",{staticClass:"item-text",attrs:{to:{name:"BreedPage",params:{breedName:a}}}},[t._v(" "+t._s(a)+" ")])],1)})),0)]),e("h2",{staticClass:"section-title"},[t._v("The Essentials")]),t._m(0)])])])])},k=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"the-essentials"},[e("div",{staticClass:"carousel"},[e("div",{staticClass:"item"},[e("img",{attrs:{src:a("a500"),alt:"Dog Food"}}),e("div",{staticClass:"item-text"},[t._v("Dog Food")])])])])}],j={name:"HomePage",data(){return{currentIndex:0,carouselImages:[{src:a("183a"),alt:"Image 1"},{src:a("bb8f"),alt:"Image 2"},{src:a("509f"),alt:"Image 3"},{src:a("fc7b"),alt:"Image 4"},{src:a("8ee0"),alt:"Image 5"}],userInteracted:!1,lastInteractionTime:Date.now()}},mounted(){this.startCarousel()},methods:{startCarousel(){setInterval(()=>{Date.now()-this.lastInteractionTime>=5e3&&(this.userInteracted=!1),this.userInteracted||(this.currentIndex=(this.currentIndex+1)%this.carouselImages.length)},5e3)},nextSlide(){this.currentIndex=(this.currentIndex+1)%this.carouselImages.length,this.userInteracted=!0,this.lastInteractionTime=Date.now()},prevSlide(){this.currentIndex=(this.currentIndex-1+this.carouselImages.length)%this.carouselImages.length,this.userInteracted=!0,this.lastInteractionTime=Date.now()},getBreedImage(t){return"Toy Poodle"===t?a("34e1"):"Schnauzer"===t?a("0703"):"Yorkshire"===t?a("ba88"):void 0}}},S=j,T=(a("90c4"),Object(u["a"])(S,w,k,!1,null,"c1b454f0",null)),N=T.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"breed-page"},[e("div",{staticClass:"carousel-container"},[e("div",{staticClass:"carousel"},[t._l(t.breedData.images,(function(a,s){return e("img",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex===s,expression:"currentIndex === index"}],key:s,staticClass:"carousel-image",attrs:{src:a,alt:`${t.breedName} ${s+1}`}})})),e("button",{staticClass:"prev",on:{click:t.prevImage}},[t._v("❮")]),e("button",{staticClass:"next",on:{click:t.nextImage}},[t._v("❯")])],2),e("div",{staticClass:"dots-container"},t._l(t.breedData.images,(function(a,s){return e("div",{key:s,class:["dot",{"dot-active":t.currentIndex===s}],on:{click:function(e){t.currentIndex=s}}})})),0)]),e("div",{staticClass:"description"},[e("div",{staticStyle:{"text-align":"center"}},[e("strong",[t._v(t._s(t.breedName))])]),e("br"),t._v(" Available colors: ")]),e("div",{staticClass:"available-colors"},t._l(t.formattedColors,(function(a){return e("div",{key:a.name,class:a.class},[e("div",{staticClass:"overlap-group-2"},[e("div",{staticClass:"text-wrapper-2"},[t._v(t._s(a.name))]),e("div",{class:a.ellipseClass})])])})),0),e("div",{staticClass:"description"},[t._v(" "+t._s(t.breedData.description)),e("br"),e("br"),t._v(" Price range: "+t._s(t.breedData.price)),e("br"),t._m(0)]),t._m(1)])},P=[function(){var t=this,e=t._self._c;return e("p",[e("strong",[t._v("Why Natasha Gading Kennel?")]),e("br"),t._v(" • Pedigree Completed (Stamboom)"),e("br"),t._v(" • Microchip"),e("br"),t._v(" • E4 Vaccine"),e("br"),t._v(" • Bloodline Imported from Taiwan"),e("br"),t._v(" • Regular Deworming & Vitamins"),e("br"),t._v(" • Flea & Worm-Free"),e("br"),t._v(" • Guaranteed Healthy"),e("br"),e("br"),e("strong",[t._v("Visitation & Shipping")]),e("br"),t._v(" ✓ Visits available by appointment (booking required!). We're located in Kelapa Gading, North Jakarta (3.1km from MKG)"),e("br"),t._v(" ✓ Home delivery available"),e("br"),t._v(" ✓ Shipping throughout Indonesia ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"advertise"},[e("strong",[t._v("Interested in bringing this adorable puppy home?")]),e("br"),e("br"),t._v(" Contact us for pricing, availability, appointment, or shipping information."),e("br"),e("br"),t._v(" ✆ WhatsApp: "),e("a",{attrs:{href:"https://wa.me/6281808600487"}},[t._v("(+62) 8180-860-0487")]),e("br"),e("br"),e("br"),e("br")])}],O={"Toy Poodle":{images:[a("34e1"),a("c4db"),a("3f25"),a("53b8"),a("f2b5"),a("7b45"),a("c4d4"),a("fdc2")],description:"The Toy Poodle is an elegant and lively companion with a hypoallergenic coat.",price:"starts from 5,000,000 IDR",colors:[{name:"Red",class:"red",ellipseClass:"ellipse-6"},{name:"Brown",class:"brown",ellipseClass:"ellipse-5"},{name:"Apricot",class:"apricot",ellipseClass:"ellipse-4"},{name:"Black",class:"black",ellipseClass:"ellipse-3"},{name:"Silver",class:"silver",ellipseClass:"ellipse-2"},{name:"White",class:"white",ellipseClass:"ellipse"}]},Schnauzer:{images:[a("0703"),a("3eef"),a("c91a"),a("2ec3"),a("9e37"),a("1f17")],description:"The Schnauzer is a robust and fearless dog with a charming personality.",price:"starts from 6,000,000 IDR",colors:[{name:"Salt & Pepper",class:"salt-pepper",ellipseClass:"ellipse-10"},{name:"Black",class:"black",ellipseClass:"ellipse-3"},{name:"White",class:"white",ellipseClass:"ellipse"}]},Yorkshire:{images:[a("ba88"),a("66bb"),a("a029"),a("8474"),a("80f4")],description:"The Yorkshire Terrier is a small but brave dog with a silky coat and big personality.",price:"starts from 7,000,000 IDR",colors:[{name:"Black & Tan",class:"black-tan",ellipseClass:"ellipse-8"}]}},A={name:"BreedPage",data(){return{currentIndex:0,breedData:{},breedName:"",userInteracted:!1,lastInteractionTime:Date.now()}},computed:{formattedColors(){return this.breedData.colors||[]}},methods:{prevImage(){this.currentIndex=(this.currentIndex+this.breedData.images.length-1)%this.breedData.images.length,this.userInteracted=!0,this.lastInteractionTime=Date.now()},nextImage(){this.currentIndex=(this.currentIndex+1)%this.breedData.images.length,this.userInteracted=!0,this.lastInteractionTime=Date.now()},fetchBreedData(){const t=this.$route.params.breedName;this.breedName=t,this.breedData=O[t]||{}}},watch:{"$route.params.breedName":"fetchBreedData"},created(){this.fetchBreedData(),setInterval(()=>{Date.now()-this.lastInteractionTime>=5e3&&(this.userInteracted=!1),this.userInteracted||this.nextImage()},5e3)}},B=A,z=(a("9925"),Object(u["a"])(B,D,P,!1,null,"49132071",null)),G=z.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-page"},[e("header",[e("h1",[t._v(t._s(t.productName))])]),e("section",{staticClass:"details"},[e("p",[t._v("[Type] "+t._s(t.productName))]),t._m(0),"Accessories"===t.productName?e("div",{staticClass:"colors"},[e("h3",[t._v("Colors available:")]),t._l(t.colors,(function(t){return e("div",{key:t,staticClass:"color-box",style:{backgroundColor:t}})}))],2):t._e()]),e("section",{staticClass:"purchase"},[e("p",[t._v("Price: Rp XX.XXX")]),e("button",{on:{click:t.addToCart}},[t._v("Add to cart")]),e("button",{on:{click:t.buyNow}},[t._v("Buy Now")])])])},$=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sizes"},[e("h3",[t._v("Sizes available:")]),e("span",[t._v("1.14 kg")]),t._v(" "),e("span",[t._v("4.54 kg")])])}],F={name:"ProductPage",data(){return{colors:["red","blue","green"]}},computed:{productName(){return this.$route.params.productName}},methods:{addToCart(){alert("Added to cart!")},buyNow(){alert("Purchase complete!")}}},R=F,X=(a("a20f"),Object(u["a"])(R,H,$,!1,null,"3e8383dc",null)),Y=X.exports,M=function(){var t=this;t._self._c;return t._m(0)},W=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-us"},[e("h1",[t._v("Contact Us")]),e("br"),e("br"),e("br"),e("h3",[t._v("Find us on:")]),e("h4",[e("img",{staticStyle:{width:"40px",height:"40px","vertical-align":"middle",margin:"0 10px"},attrs:{src:a("54e6"),alt:"Instagram"}}),t._v(" "),e("a",{staticStyle:{"vertical-align":"middle"},attrs:{href:"https://www.instagram.com/natashagadingkennel/"}},[t._v("@natashagadingkennel")])]),e("h4",[e("img",{staticStyle:{width:"40px",height:"40px","vertical-align":"middle",margin:"0 10px"},attrs:{src:a("73dd"),alt:"YouTube"}}),t._v(" "),e("a",{staticStyle:{"vertical-align":"middle"},attrs:{href:"https://www.youtube.com/channel/UCrh3Rw3buz-5cun_Y-zqtEg/search?app=desktop"}},[t._v("@NatashaGadingKennel")])]),e("h4",[e("img",{staticStyle:{width:"40px",height:"40px","vertical-align":"middle",margin:"0 10px"},attrs:{src:a("352b"),alt:"TikTok"}}),t._v(" "),e("a",{staticStyle:{"vertical-align":"middle"},attrs:{href:"https://www.tiktok.com/@natasha_gading_kennel"}},[t._v("@natasha_gading_kennel")])]),e("h4",[e("img",{staticStyle:{width:"40px",height:"40px","vertical-align":"middle",margin:"0 10px"},attrs:{src:a("5a8a"),alt:"X"}}),t._v(" "),e("a",{staticStyle:{"vertical-align":"middle"},attrs:{href:"https://x.com/NatashaGading"}},[t._v("@NatashaGading")])]),e("br"),e("h3",[t._v("For more information, contact us on "),e("a",{attrs:{href:"https://wa.me/6281808600487"}},[t._v("WhatsApp")])])])}],E={name:"Contact Us"},K=E,U=(a("9b12"),Object(u["a"])(K,M,W,!1,null,"5c955f54",null)),V=U.exports,q=function(){var t=this;t._self._c;return t._m(0)},J=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"transaction-page"},[e("h1",[t._v("Transactions")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("h2",[e("span",{staticStyle:{color:"red"}},[t._v("will be available soon")])])])}],L={name:"Transactions"},Q=L,Z=(a("3cf2"),Object(u["a"])(Q,q,J,!1,null,"37872fa2",null)),tt=Z.exports,et=function(){var t=this;t._self._c;return t._m(0)},at=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"account"},[e("h1",[t._v("My Account")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("h2",[e("span",{staticStyle:{color:"red"}},[t._v("will be available soon")])])])}],st={name:"Transactions"},rt=st,nt=(a("45bb"),Object(u["a"])(rt,et,at,!1,null,"d3306878",null)),it=nt.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart-page"},[e("h1",[t._v("Your Cart")]),t.cart.length?e("div",t._l(t.cart,(function(a){return e("div",{key:a.id,staticClass:"cart-item"},[e("span",[t._v(t._s(a.name))]),e("span",[t._v(t._s(a.quantity))]),e("span",[t._v(t._s(a.price))]),e("button",{on:{click:function(e){return t.removeFromCart(a.id)}}},[t._v("Remove")])])})),0):e("div",[e("p",[t._v("Your cart is empty.")])])])},ct=[],lt={name:"CartPage",data(){return{cart:[]}},methods:{removeFromCart(t){this.cart=this.cart.filter(e=>e.id!==t)}}},ut=lt,dt=(a("7844"),Object(u["a"])(ut,ot,ct,!1,null,null,null)),pt=dt.exports;s["a"].config.productionTip=!1,s["a"].use(I["a"]);const mt=[{path:"/",name:"Home",component:N},{path:"/breed/:breedName",name:"BreedPage",component:G},{path:"/product/:productName",name:"ProductPage",component:Y},{path:"/contact-us",name:"ContactUs",component:V},{path:"/transactions",name:"Transactions",component:tt},{path:"/account",name:"Account",component:it},{path:"/cart",name:"Cart",component:pt}],ht=new I["a"]({routes:mt,mode:"history"});new s["a"]({router:ht,render:t=>t(y)}).$mount("#app")},"570f":function(t,e,a){},"5a8a":function(t,e,a){t.exports=a.p+"img/logoX.6d347741.svg"},"66bb":function(t,e,a){t.exports=a.p+"img/yorkie2.bab67366.jpg"},7222:function(t,e,a){t.exports=a.p+"img/contactus.6877d6f0.svg"},"73dd":function(t,e,a){t.exports=a.p+"img/youtube.53df1336.svg"},7411:function(t,e,a){"use strict";a("ae62")},7844:function(t,e,a){"use strict";a("eefb")},"7b45":function(t,e,a){t.exports=a.p+"img/toypoodleadult2.fd3f8f5a.jpg"},"7fd7":function(t,e,a){},"805d":function(t,e,a){t.exports=a.p+"img/transactions.f048ea71.svg"},"80f4":function(t,e,a){t.exports=a.p+"img/yorkie6.32c4e0da.jpg"},"83ba":function(t,e,a){},8474:function(t,e,a){t.exports=a.p+"img/yorkie5.7994972c.jpg"},"86e6":function(t,e,a){t.exports=a.p+"img/home.3d53ae79.svg"},"877e":function(t,e,a){t.exports=a.p+"img/backarrow.13f86cd0.svg"},"8ee0":function(t,e,a){t.exports=a.p+"img/toypoodleadult5main.8d8599a4.jpg"},"90c4":function(t,e,a){"use strict";a("7fd7")},9829:function(t,e,a){},9925:function(t,e,a){"use strict";a("d6de")},"9b12":function(t,e,a){"use strict";a("9829")},"9e37":function(t,e,a){t.exports=a.p+"img/schnauzeradult2.3195f2be.jpg"},a029:function(t,e,a){t.exports=a.p+"img/yorkie4.462aab4f.jpg"},a20f:function(t,e,a){"use strict";a("570f")},a500:function(t,e,a){t.exports=a.p+"img/royalcanin.2e951d70.jpg"},ae62:function(t,e,a){},ba88:function(t,e,a){t.exports=a.p+"img/yorkie1.7b8c59ee.jpg"},bb8f:function(t,e,a){t.exports=a.p+"img/schnauzeradult3main.c602eb15.jpg"},c4d4:function(t,e,a){t.exports=a.p+"img/toypoodleadult3.cdfa26a2.jpg"},c4db:function(t,e,a){t.exports=a.p+"img/toypoodle4.c86dabc5.jpg"},c91a:function(t,e,a){t.exports=a.p+"img/schnauzer8.96696b85.jpg"},d3f8:function(t,e,a){"use strict";a("553c")},d6de:function(t,e,a){},e5e1:function(t,e,a){"use strict";a("83ba")},eefb:function(t,e,a){},f2b5:function(t,e,a){t.exports=a.p+"img/toypoodle11.3b234670.jpg"},f4f2:function(t,e,a){},fc7b:function(t,e,a){t.exports=a.p+"img/toypoodleadult1main.67cbf7f9.jpg"},fdc2:function(t,e,a){t.exports=a.p+"img/toypoodleadult4.68f3bccf.jpg"}});
//# sourceMappingURL=app.47051907.js.map