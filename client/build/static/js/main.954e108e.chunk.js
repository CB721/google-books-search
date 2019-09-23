(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},131:function(e,t){},133:function(e,t){},143:function(e,t){},145:function(e,t){},160:function(e,t){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),r=a.n(l),c=(a(103),a(95)),i=a(19),s=(a(104),a(25)),m=a(26),u=a(29),d=a(27),h=a(30);function f(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function p(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function v(e){var t=e.size,a=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(105);var g=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:e.cardImage,className:"card-img-top card-img",alt:e.cardTitle}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},e.cardTitle),o.a.createElement("p",{className:"card-text"},e.cardDescription),o.a.createElement("a",{href:e.cardLink,className:"search-btn"},e.cardButton)))},E=a(28),k=a.n(E),b=(a(40),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={cardTitle:"",cardDescription:"",cardLink:"",cardButton:"",cardImage:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(f,{fluid:!0},o.a.createElement("video",{className:"video-background",loop:!0,autoPlay:!0,playsInline:!0,style:{objectFit:"cover",width:"100%",height:"100%"},src:k.a}),o.a.createElement(p,null,o.a.createElement(v,{size:"md-12"},o.a.createElement("div",{className:"head-space"}),o.a.createElement("h1",{className:"google-books-h1"},"Google Books Search"))),o.a.createElement(p,null,o.a.createElement(v,{size:"md-3"}),o.a.createElement(v,{size:"md-3"},o.a.createElement(g,{cardTitle:"Find a book",cardImage:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",cardDescription:"Search to find a book.",cardLink:"/search",cardButton:"Search"})),o.a.createElement(v,{size:"md-3"},o.a.createElement(g,{cardTitle:"Your bookshelf",cardImage:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2653&q=80",cardDescription:"Check out your saved books.",cardLink:"/saved",cardButton:"Bookshelf"})),o.a.createElement(v,{size:"md-3"})),o.a.createElement(p,null,o.a.createElement("div",{className:"foot-space"})))}}]),t}(n.Component)),w=a(52),y=a(36),B=a.n(y),N={getBooks:function(){return B.a.get("/api/books")},deleteBook:function(e){return B.a.delete("/api/books/"+e)},saveBook:function(e){return console.log(e),B.a.post("/api/books",e)},googleBook:function(e){return B.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)}},I=a(93),S=a.n(I);var j=function(e){return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Find a book",id:"search",autoComplete:"off"}),o.a.createElement("div",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn search-btn"},"Search")))};a(166);function C(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function M(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}a(167);var z=function(e){var t=e.title,a=e.author,n=e.description,l=e.cover,r=e.link,c=e.pages,i=e.Button;return o.a.createElement(M,null,o.a.createElement(p,{className:"flex-wrap-reverse"},o.a.createElement(v,{size:"md-8"},o.a.createElement("h3",{className:"font-italic"},t)),o.a.createElement(v,{size:"md-4"},o.a.createElement("div",{className:"btn-container"},o.a.createElement("a",{className:"btn search-btn",target:"_blank",rel:"noopener noreferrer",href:r},"Buy"),i))),o.a.createElement(p,null,o.a.createElement(v,{size:"md-6"},o.a.createElement("p",{className:"font-italic small"},"Written by ",a))),o.a.createElement(p,null,o.a.createElement(v,{size:"12 sm-4 md-2"},o.a.createElement("img",{className:"img-thumbnail img-fluid w-200",src:l,alt:t}),o.a.createElement("p",null,c," pages")),o.a.createElement(v,{size:"12 sm-8 md-10"},o.a.createElement("p",null,n))))},O=a(8),T=a.n(O);a(168);var L=function(e){return o.a.createElement("button",{type:"button",onClick:e.saveAndModal,className:"save-btn"},"Add to Bookshelf")},x=a(94),D=a.n(x),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],search:"",searchValue:"",searchMessage:"Type in a title of a book to begin!",errorStyles:"",show:!1,modalBookTitle:"",modalBookImg:"",placeHolder:"",showPara:"hide-para",uploading:!1},a.searchBooks=function(e){a.setState({uploading:!0}),N.googleBook(e).then(function(e){var t=e.data.items;t.map(function(e){return e={key:e.id,id:e.id,title:e.volumeInfo.title,author:e.volumeInfo.authors,description:e.volumeInfo.description,cover:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink,pages:e.volumeInfo.pageCount,ISBN:e.volumeInfo.industryIdentifiers[0].identifier},t}),a.setState({books:t,errorStyles:"",searchMessage:"",showPara:"hide-para",uploading:!1})}).catch(function(){return a.setState({message:"Please try a different book",errorStyles:"red-error"})})},a.handleInputChange=function(e){var t,n=e.target.value,o=e.target.name;a.setState((t={},Object(w.a)(t,o,n),Object(w.a)(t,"searchValue",n),t));var l=a.state.searchValue,r=[];r.push(l);var c=r.join("");a.wordSuggestion(c)},a.wordSuggestion=function(e){var t="/sug?s="+e;t.length>8&&S.a.request(t).then(function(e){if(t.length>20)a.setState({placeHolder:"That is a long book!"});else if(t.length<10)a.setState({placeHolder:"Find a book",showPara:"hide-para"});else{var n=e[1].word.charAt(0).toUpperCase()+e[1].word.slice(1);a.setState({placeHolder:"Looking for "+n+"?",showPara:""})}})},a.handleFormSubmit=function(e){e.preventDefault(),a.searchBooks(a.state.search),a.setState({showPara:"hide-para"})},a.addToBookshelf=function(e){var t=a.state.books.find(function(t){return t.id===e});N.saveBook({googleID:t.id,title:t.volumeInfo.title,author:t.volumeInfo.authors,description:t.volumeInfo.description,cover:t.volumeInfo.imageLinks.thumbnail,link:t.volumeInfo.infoLink,pages:t.volumeInfo.pageCount}).then(function(){return a.searchBooks()})},a.showModal=function(e,t){a.setState({show:!0,modalBookTitle:e,modalBookImg:t})},a.closeModal=function(){a.setState({show:!1})},a.saveAndModal=function(e,t,n,o){return function(l){l.preventDefault(),console.log(o),a.addToBookshelf(e),a.showModal(t,n)}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(f,{fluid:!0},o.a.createElement("video",{className:"video-background",loop:!0,autoPlay:!0,playsInline:!0,style:{objectFit:"cover",width:"100%",height:"100%"},src:k.a}),o.a.createElement(p,null,o.a.createElement(v,{size:"md-12"},o.a.createElement("div",{className:"head-space"}),o.a.createElement("h1",{className:"google-books-h1"},"Google Books Search"),o.a.createElement("h2",{className:"google-books-h1",id:this.state.errorStyles},this.state.searchMessage)),o.a.createElement(v,{size:"md-3"}),o.a.createElement(v,{size:"md-6"},o.a.createElement("h4",{className:this.state.showPara},this.state.placeHolder),o.a.createElement(j,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,placeHolder:this.state.placeHolder}))),o.a.createElement(p,null,o.a.createElement(v,{size:"md-3"}),o.a.createElement(v,{size:"md-6"},!1===this.state.uploading?o.a.createElement(C,null,this.state.books.map(function(t){return o.a.createElement(z,{key:t.id,_id:t.id,title:t.volumeInfo.title,author:t.volumeInfo.authors,description:t.volumeInfo.description,cover:t.volumeInfo.imageLinks.thumbnail,link:t.volumeInfo.infoLink,pages:t.volumeInfo.pageCount,ISBN:t.volumeInfo.industryIdentifiers[0].identifier,Button:o.a.createElement(L,{key:t.id,saveAndModal:e.saveAndModal(t.id,t.volumeInfo.title,t.volumeInfo.imageLinks.thumbnail,t.volumeInfo.industryIdentifiers[0].identifier)})})})):o.a.createElement(D.a,{animation:"border",size:"lg",id:"spinner"})),o.a.createElement(v,{size:"md-3"})),o.a.createElement(p,null,o.a.createElement("div",{className:"foot-space"})),o.a.createElement(T.a,{show:this.state.show,onHide:this.closeModal,className:"modal-card",variant:"info"},o.a.createElement(T.a.Header,{closeButton:!0},o.a.createElement(T.a.Title,null,"Library Card")),o.a.createElement(T.a.Body,null,"You have added ",this.state.modalBookTitle," to your bookshelf.",o.a.createElement("img",{src:this.state.modalBookImg,alt:this.state.modalBookTitle,className:"modal-img"})),o.a.createElement(T.a.Footer,null,o.a.createElement("button",{className:"btn search-btn",onClick:this.closeModal},"Close"))))}}]),t}(n.Component);a(204);var F=function(e){return o.a.createElement("button",{onClick:e.deleteBook,className:"delete-btn"},"Delete")},A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o))))._isMounted=!1,a.state={books:[],errorStyles:"",modalBookTitle:"",giphyGif:"",show:!1},a.checkBookshelf=function(){N.getBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log("Get request error: "+e)})},a.deleteSequence=function(e,t){return function(n){n.preventDefault(),a.deleteBook(e),a.setState({modalBookTitle:t}),a.showModal()}},a.deleteBook=function(e){N.deleteBook(e).then().catch(function(e){return console.log("Delete error: "+e)}),a.checkBookshelf(),a.setState(a.state)},a.showModal=function(){a.setState({show:!0})},a.closeModal=function(){a.setState({show:!1})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.checkBookshelf()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return this.state.books.length<1?null:o.a.createElement(f,{fluid:!0},o.a.createElement("video",{className:"video-background",loop:!0,autoPlay:!0,muted:!0,playsInline:!0,style:{objectFit:"cover",width:"100%",height:"100%"},src:k.a}),o.a.createElement(p,null,o.a.createElement(v,{size:"md-3"}),o.a.createElement(v,{size:"md-6"},o.a.createElement("div",{className:"head-space"}),o.a.createElement("h1",{className:"google-books-h1"},"Google Books Search"),this.state.books.length>0?o.a.createElement(C,null,this.state.books.map(function(t){return o.a.createElement("div",{key:t.googleID},o.a.createElement(z,{title:t.title,author:t.author.join(", "),description:t.description,cover:t.cover,link:t.link,pages:t.pages,Button:o.a.createElement(F,{key:t.id,deleteBook:e.deleteSequence(t._id,t.title)})}))})):o.a.createElement("h2",{className:"google-books-h1"},"Your bookshelf is empty")),o.a.createElement(v,{size:"md-3"})),o.a.createElement(p,null,o.a.createElement("div",{className:"foot-space"})),o.a.createElement(T.a,{show:this.state.show,onHide:this.closeModal,className:"modal-card",variant:"info"},o.a.createElement(T.a.Header,{closeButton:!0},o.a.createElement(T.a.Title,null,"Library Card")),o.a.createElement(T.a.Body,null,"You have removed ",this.state.modalBookTitle," from your bookshelf.",o.a.createElement("img",{src:"https://media.giphy.com/media/CpE4gXoXpTdII/giphy.gif",alt:"fahrenheit 451 gif",className:"modal-img"})),o.a.createElement(T.a.Footer,null,o.a.createElement("button",{className:"btn search-btn",onClick:this.closeModal},"Close"))))}}]),t}(n.Component);a(205);var P=function(){return o.a.createElement("nav",{className:"navbar"},o.a.createElement("ul",null,o.a.createElement("li",{className:"home"},o.a.createElement("a",{href:"/"},"Home")),o.a.createElement("li",{className:"search"},o.a.createElement("a",{href:"/search"},"Library")),o.a.createElement("li",{className:"saved"},o.a.createElement("a",{href:"/saved"},"Bookshelf"))))};a(206);var W=function(){return o.a.createElement("footer",{className:"footer navbar-fixed-bottom"},o.a.createElement("div",{className:"bottom"},"Google Books Search"),o.a.createElement("span",null,"Copyright \xa9 2019 Clint Brodar"))};var q=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(P,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:b}),o.a.createElement(i.a,{exact:!0,path:"/search",component:H}),o.a.createElement(i.a,{exact:!0,path:"/saved",component:A})),o.a.createElement(W,null)))},G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");G?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):_(e)})}}()},28:function(e,t,a){e.exports=a.p+"static/media/book-footage.a6a6a012.mp4"},40:function(e,t,a){},98:function(e,t,a){e.exports=a(213)}},[[98,1,2]]]);
//# sourceMappingURL=main.954e108e.chunk.js.map