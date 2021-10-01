(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{40:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c.n(o),r=c(12),a=c(15),s=c.n(a),i=c(18),b=c(4),l=c(23),j=c(27),d=c.n(j),u=c(28),p=c(9),h=c.n(p),O=c(22),m=c(21),f="bookStore/books/REMOVE_BOOK",x="bookStore/books/FETCH_DATA",k="bookStore/books/SEND_DATA",y=[],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload;case k:return[].concat(Object(O.a)(e),[{item_id:t.payload.item_id,title:t.payload.title,category:t.payload.category}]);case f:return e.filter((function(e){return e.item_id!==t.payload.item_id}));default:return e}},g=Object(l.b)({booksReducer:v}),N=Object(l.c)(g,Object(l.a)(d.a,u.a)),w=(c(40),c(49)),A=c(29),C=c(30),_=c(1),B=function(e){var t=e.book,c=e.removeBook;return Object(_.jsxs)("div",{className:"book shadow-sm bg-white border border-light",children:[Object(_.jsxs)("div",{className:"info",children:[Object(_.jsx)("p",{className:"text-secondary font-weight-bold",children:t.category}),Object(_.jsx)("p",{className:"book-title",children:t.title}),Object(_.jsx)("p",{className:"font-weight-light",children:"Author"}),Object(_.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){!function(e){c(e)}(t)},children:"Delete"})]}),Object(_.jsxs)("div",{className:"completed",children:[Object(_.jsx)(A.a,{icon:C.a,size:"4x",className:"text-primary"}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:"percent",children:"64%"}),Object(_.jsx)("p",{children:"Completed"})]})]}),Object(_.jsxs)("div",{className:"chapter",children:[Object(_.jsx)("p",{className:"text-uppercase text-secondary",children:"Current Chapter"}),Object(_.jsxs)("p",{className:"",children:["Chapter",17]}),Object(_.jsx)("button",{type:"button",className:"btn btn-primary btn-block",children:"Update Info"})]})]})},E=function(e){var t=e.removeBook,c=e.books;return Object(_.jsx)("div",{className:"books-list",children:c.map((function(e){return Object(_.jsx)(B,{book:e,removeBook:t},e.item_id)}))})},R=function(e){var t="",c="";return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("p",{className:"add-title text-secondary font-weight-bold",children:"ADD NEW BOOK"}),Object(_.jsxs)("div",{className:"booksForm",children:[Object(_.jsx)("input",{type:"text",className:"form-control title",placeholder:"title of the book...",onChange:function(e){t=e.target.value}}),Object(_.jsx)("input",{type:"text",className:"form-control category",placeholder:"Category of the book...",onChange:function(e){c=e.target.value}}),Object(_.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){e.addBook(t,c)},children:"Add Book"})]})]})},S=function(){var e=Object(r.c)((function(e){return e.booksReducer})),t=Object(r.b)();return Object(o.useEffect)((function(){t(function(){var e=Object(m.a)(h.a.mark((function e(t){var c,o,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mnWl6zWJHf5Fwk5ARAAR/books");case 2:return c=e.sent,e.next=5,c.json();case 5:o=e.sent,n=Object.entries(o),r=n.map((function(e){return{item_id:e[0],title:Object.assign.apply(Object,Object(O.a)(e[1])).title,category:Object.assign.apply(Object,Object(O.a)(e[1])).category}})),t({type:x,payload:r});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(_.jsxs)("div",{className:"book-page",children:[Object(_.jsx)(E,{className:"book-list",removeBook:function(e){t(function(e){return function(){var t=Object(m.a)(h.a.mark((function t(c){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mnWl6zWJHf5Fwk5ARAAR/books/".concat(e.item_id),{method:"DELETE"}),c({type:f,payload:e});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},books:e}),Object(_.jsx)(R,{addBook:function(e,c){var o,n={item_id:Object(w.a)(),title:e,category:c};t((o=n,function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mnWl6zWJHf5Fwk5ARAAR/books",{method:"POST",body:JSON.stringify({item_id:o.item_id,title:o.title,category:o.category}),headers:{"Content-type":"application/json; charset=UTF-8"}}),t({type:k,payload:o});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}})]})},D=c(16),F=c(17),T=c(20),W=c(19),J=function(e){Object(T.a)(c,e);var t=Object(W.a)(c);function c(){return Object(D.a)(this,c),t.apply(this,arguments)}return Object(F.a)(c,[{key:"render",value:function(){return Object(_.jsx)("div",{children:Object(_.jsx)("h1",{children:"Under construction"})})}}]),c}(o.PureComponent),z=J,H=function(e){Object(T.a)(c,e);var t=Object(W.a)(c);function c(){return Object(D.a)(this,c),t.apply(this,arguments)}return Object(F.a)(c,[{key:"render",value:function(){return Object(_.jsxs)("nav",{className:"header shadow-sm mb-4 bg-white",children:[Object(_.jsx)("div",{className:"logo",children:Object(_.jsx)("h1",{className:"text-primary font-weight-bold",children:"Bookstore CMS"})}),Object(_.jsx)("ul",{className:"list",children:[{id:1,path:"/bookstore",text:"BOOKS"},{id:2,path:"/bookstore/categories",text:"CATEGORIES"}].map((function(e){return Object(_.jsx)("li",{children:Object(_.jsx)(i.b,{to:e.path,className:"active-link",children:e.text})},e.id)}))})]})}}]),c}(o.PureComponent),I=H;c(46);s.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsxs)(i.a,{children:[Object(_.jsx)(I,{}),Object(_.jsxs)(b.c,{children:[Object(_.jsx)(b.a,{exact:!0,path:"/bookstore",children:Object(_.jsx)(r.a,{store:N,children:Object(_.jsx)(S,{})})}),Object(_.jsx)(b.a,{path:"/bookstore/categories",children:Object(_.jsx)(z,{})})]})]})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.9d4fd300.chunk.js.map