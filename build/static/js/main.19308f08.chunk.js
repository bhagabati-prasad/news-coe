(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{79:function(e,t,n){},81:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(28),r=n.n(s),l=(n(79),n(80),n(63)),i=n(10),o=(n(81),n(6)),j=n(99),d=n(102),h=n(98),b=n(96),O=n(100),u=n(71),x=n(70),g=n(1);var m=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=(t[0],t[1],Object(i.f)()),a=function(e){console.log(e),n.push("/category?q=".concat(e)),window.location.reload(!1)},s=Object(c.useState)(),r=Object(o.a)(s,2),l=r[0],m=r[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(j.a,{fixed:"top",bg:"dark",variant:"dark",expand:"lg",children:Object(g.jsxs)(b.a,{fluid:!0,children:[Object(g.jsxs)(j.a.Brand,{href:"/",children:[Object(g.jsx)("img",{alt:"",src:"https://cdn-icons-png.flaticon.com/512/237/237014.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","News Feed"]}),Object(g.jsx)(j.a.Toggle,{"aria-controls":"navbarScroll"}),Object(g.jsxs)(j.a.Collapse,{id:"navbarScroll",children:[Object(g.jsxs)(d.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(g.jsx)(d.a.Link,{href:"/",children:"Home"}),Object(g.jsx)(d.a.Link,{href:"/all-news",children:"All news"}),Object(g.jsxs)(h.a,{title:"Company",id:"navbarScrollingDropdown",onSelect:a,children:[Object(g.jsx)(h.a.Item,{eventKey:"Tech Mahindra",children:"Tech Mahindra"}),Object(g.jsx)(h.a.Item,{eventKey:"Infosys",children:"Infosys"}),Object(g.jsx)(h.a.Item,{eventKey:"Accenture",children:"Accenture"}),Object(g.jsx)(h.a.Item,{eventKey:"Wipro",children:"Wipro"}),Object(g.jsx)(h.a.Item,{eventKey:"TCS",children:"TCS"}),Object(g.jsx)(h.a.Item,{eventKey:"Infy",children:"Infy"})]}),Object(g.jsxs)(h.a,{title:"Technology",id:"navbarScrollingDropdown",onSelect:a,children:[Object(g.jsx)(h.a.Item,{eventKey:"Blockchain",children:"Blockchain"}),Object(g.jsx)(h.a.Item,{eventKey:"AI",children:"AI"})]}),Object(g.jsxs)(h.a,{title:"Partners",id:"navbarScrollingDropdown",onSelect:a,children:[Object(g.jsx)(h.a.Item,{eventKey:"AWS",children:"AWS"}),Object(g.jsx)(h.a.Item,{eventKey:"Google",children:"Google"}),Object(g.jsx)(h.a.Item,{eventKey:"IBM",children:"IBM"}),Object(g.jsx)(h.a.Item,{eventKey:"Microsoft",children:"Microsoft"})]})]}),Object(g.jsxs)(O.a,{className:"d-flex",children:[Object(g.jsx)(u.a,{value:l,type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",onChange:function(e){var t=e.target.value;m(t),console.log(l)}}),Object(g.jsx)(x.a,{onClick:function(){n.push("/all-news?q=".concat(l)),window.location.reload(!1)},variant:"outline-success",children:"Search"})]})]})]})})})},p=n(97),v=n(72),f=n(103),y=function(e){var t=e.users;console.log("hello",t);var n=Object(c.useState)(!1),s=Object(o.a)(n,2),r=s[0],l=s[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(p.a,{className:"justify-content-md-center w-100",children:Object(g.jsx)(v.a,{xs:12,md:8,children:t&&t.map((function(e,t){var n=null===e||void 0===e?void 0:e.news_article;return Object(g.jsx)(a.a.Fragment,{children:Object(g.jsx)(f.a,{style:{marginLeft:"22px",marginTop:"65px"},children:Object(g.jsx)(b.a,{fluid:!0,children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(v.a,{md:3,children:(null===e||void 0===e?void 0:e.news_image)&&Object(g.jsx)(f.a.Img,{className:"mt-4",width:"100%",height:"150",style:{objectFit:"cover"},src:null===e||void 0===e?void 0:e.news_image})}),Object(g.jsx)(v.a,{md:9,children:Object(g.jsxs)(f.a.Body,{children:[Object(g.jsx)(f.a.Title,{children:null===e||void 0===e?void 0:e.news_headline}),Object(g.jsxs)(f.a.Text,{children:[Object(g.jsxs)("p",{children:[n&&n.length>100?n.substr(0,101):n.substr(0),"..."]}),n&&!!n.length&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("a",{style:{color:"blueviolet",cursor:"pointer"},className:"read-more-link",onClick:function(){l(!r)},href:null===e||void 0===e?void 0:e.news_link,target:"_blank",rel:"noopener",children:Object(g.jsx)("h6",{children:"Read More >>"})})}),Object(g.jsxs)("p",{children:[" Source : ",null===e||void 0===e?void 0:e.news_type]}),Object(g.jsxs)("p",{children:[" Sentiment : ",null===e||void 0===e?void 0:e.sentiment]}),Object(g.jsx)("div",{children:Object.entries(null===e||void 0===e?void 0:e.entity[0]).map((function(e){var t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("p",{children:[n,":",c]})})}))})]})]})})]})})})},t)}))})})})},w=function(){console.log("hello category");var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),l=r[0],i=r[1],j=new URLSearchParams(window.location.search).get("q");return console.log(j),Object(c.useEffect)((function(){i(j),console.log("hello from use",l),fetch("https://newerver.herokuapp.com/all",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({myParam:j})}).then((function(e){return e.json()})).then((function(e){e.length>0?(console.log(e),a(e)):(console.log(e),console.log("somethng went wrong with server , check once  !"))})).catch((function(e){return console.log("something went wrong with server",e.response)}))}),[l]),Object(g.jsx)("div",{children:Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(b.a,{fluid:!0,children:[Object(g.jsx)(p.a,{children:Object(g.jsx)(m,{})}),Object(g.jsx)(p.a,{children:n&&!!n.length&&Object(g.jsx)(y,{users:n})})]})})})},S=n(41),k=n.n(S),I=n(59),F=function(e){var t=e.users;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(p.a,{className:"justify-content-md-center w-100",children:Object(g.jsx)(v.a,{xs:12,md:8,children:t&&t.map((function(e,t){return console.log(e),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(f.a,{style:{marginLeft:"22px",marginTop:"100px"},children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(v.a,{md:3,children:Object(g.jsx)(f.a.Img,{className:"mt-4",width:"100%",height:"150",src:e.urlToImage})}),Object(g.jsx)(v.a,{md:9,children:Object(g.jsxs)(f.a.Body,{children:[Object(g.jsx)(f.a.Title,{children:e.title}),Object(g.jsxs)(f.a.Text,{children:[Object(g.jsxs)("p",{children:[" ",e.content]}),"source : ",e.author]}),Object(g.jsx)(f.a.Link,{href:e.url,children:"Full Story"})]})})]})},t)})}))})})})},N=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(o.a)(s,2),l=r[0],i=r[1];Object(c.useEffect)((function(){console.log("hello");var e=new URLSearchParams(window.location.search).get("q");a(e),j()}),[n]);var j=function(){var e=Object(I.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hello"),e.prev=1,e.next=4,fetch("https://newsapi.org/v2/everything?q=".concat(n,"&sortBy=popularity&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=5&page=1&language=en"));case 4:return t=e.sent,e.next=7,t.json();case 7:t=e.sent,i(t.articles),console.log(t.articles),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("my error is "+e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(b.a,{fluid:!0,children:[Object(g.jsx)(p.a,{children:Object(g.jsx)(m,{})}),Object(g.jsx)(p.a,{children:Object(g.jsx)(F,{users:l})})]})})},C=n(73),T=n.n(C),L=n(101),_=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(L.a,{style:{marginTop:"55px",width:"100%"},children:Object(g.jsx)(L.a.Item,{children:Object(g.jsx)("img",{src:"/image002.png",height:"200px",width:"100%",alt:"Second slide"})})})})},K=function(e){var t=e.users;console.log("hello",t);var n=Object(c.useState)(!1),s=Object(o.a)(n,2),r=s[0],l=s[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(p.a,{className:"justify-content-md-center w-100",children:Object(g.jsx)(v.a,{xs:12,md:8,children:t&&t.map((function(e,t){console.log(null===e||void 0===e?void 0:e.entity[0]);var n=null===e||void 0===e?void 0:e.news_article;return Object(g.jsx)(a.a.Fragment,{children:Object(g.jsx)(f.a,{style:{marginLeft:"22px",marginTop:"65px"},children:Object(g.jsx)(b.a,{fluid:!0,children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(v.a,{md:3,children:(null===e||void 0===e?void 0:e.news_image)&&Object(g.jsx)(f.a.Img,{className:"mt-4",width:"100%",height:"150",style:{objectFit:"cover"},src:null===e||void 0===e?void 0:e.news_image})}),Object(g.jsx)(v.a,{md:9,children:Object(g.jsxs)(f.a.Body,{children:[Object(g.jsx)(f.a.Title,{children:null===e||void 0===e?void 0:e.news_headline}),Object(g.jsxs)(f.a.Text,{children:[Object(g.jsxs)("p",{children:[n&&n.length>100?n.substr(0,101):n.substr(0),"..."]}),n&&!!n.length&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("a",{style:{color:"blueviolet",cursor:"pointer"},className:"read-more-link",onClick:function(){l(!r)},href:null===e||void 0===e?void 0:e.news_link,target:"_blank",rel:"noopener",children:Object(g.jsx)("h6",{children:"Read More >>"})})}),Object(g.jsxs)("p",{children:[" source : ",null===e||void 0===e?void 0:e.news_type]}),Object(g.jsxs)("p",{children:[" Sentiment : ",null===e||void 0===e?void 0:e.label]}),Object(g.jsx)("div",{children:Object.entries(null===e||void 0===e?void 0:e.entity[0]).map((function(e){var t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("p",{children:[n,":",c]})})}))})]})]})})]})})})},t)}))})})})},B=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(o.a)(s,2),l=(r[0],r[1],Object(c.useState)([])),i=Object(o.a)(l,2),j=i[0],d=i[1],h=Object(c.useState)([]),O=Object(o.a)(h,2),u=O[0],x=O[1];Object(c.useLayoutEffect)((function(){fetch("https://newerver.herokuapp.com/allNew").then((function(e){return e.json()})).then((function(e){console.log(e),d(e),console.log(j),x(j.slice(0,5)),a(5),console.log(u)}))}),[n]);var v=function(){var e=Object(I.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.selected),n=t.selected+1,x(j.slice(5*n,5*n+5)),console.log(u);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(g.Fragment,{children:u.length<1?null:Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(b.a,{fluid:!0,children:[Object(g.jsx)(p.a,{children:Object(g.jsx)(m,{})}),Object(g.jsx)(p.a,{children:Object(g.jsx)(_,{})}),Object(g.jsx)(p.a,{children:Object(g.jsx)(K,{users:u})}),Object(g.jsx)(p.a,{children:Object(g.jsx)(T.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",pageCount:n,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:v,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})})]})})})},M=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.c,{children:[Object(g.jsx)(i.a,{path:"/category",children:Object(g.jsx)(w,{})}),Object(g.jsx)(i.a,{path:"/all-news",children:Object(g.jsx)(N,{})}),Object(g.jsx)(i.a,{path:"/",children:Object(g.jsx)(B,{})})]})})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root")),P()}},[[90,1,2]]]);
//# sourceMappingURL=main.19308f08.chunk.js.map