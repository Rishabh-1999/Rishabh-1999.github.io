(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[3],{42:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(15);var n=a(4),c=a(16);function i(e,t){return Object(r.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(s){n=!0,c=s}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}}(e,t)||Object(n.a)(e,t)||Object(c.a)()}},47:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var r=a(42),n=a(1),c=a.n(n);a(47);function i(){return window.innerWidth}var o=a(0),s=[{name:"   Server-side Development with NodeJS, Express and MongoDB(Coursera)",url:"https://drive.google.com/file/d/1D27cmO6xEfFD7pLFpSm9g2tDLMD7AUz9/preview",stack:["Node JS","Database"]},{name:" AWS Fundamentals Going Cloud-Native (Coursera)",url:"https://drive.google.com/file/d/1CjH7XpWU4E5IiS2HBURIAIwLe3MwO3X8/preview",stack:["Cloud"]},{name:"  Introduction to Git and GitHub (Coursera)",url:"https://drive.google.com/file/d/1nbN0QKmEkp0-ajR7HrnuNK5jfJS_MfCR/preview",stack:["Version Control"]},{name:"Programming for Everybody (Getting Started with Python) (Coursera)",url:"https://drive.google.com/file/d/1rS34utrZ1-LXFEeL9soq6urLqM_pg3R5/preview",stack:["Others"]},{name:"Python Data Structures (Coursera)",url:"https://drive.google.com/file/d/1HPZ42EIU1vmvwgl45i6Jc_edBabXd1-g/preview",stack:["Others","Data Structures"]},{name:"Using Python to Access Web Data (Coursera)",url:"https://drive.google.com/file/d/1gbKJRefg1mEe3cB4bqBPb0jdlaeWSW1-/preview",stack:["Python"]},{name:"Using Databases with Python (Coursera)",url:"https://drive.google.com/file/d/1M5Hqux5ogwN5_vHZxy8ZaTTIMDjkWotj/preview",stack:["Others"]}];function l(){var e=c.a.useState(s),t=Object(r.a)(e,2),a=t[0],n=t[1],l=c.a.useState("all"),u=Object(r.a)(l,2),d=u[0],m=u[1],f=c.a.useState(0),h=Object(r.a)(f,2),j=h[0],v=h[1],b=c.a.useState(i()),p=Object(r.a)(b,2),g=p[0],x=p[1],O=c.a.useState((function(){var e=new Set;return s.forEach((function(t){null===t||void 0===t||t.stack.forEach((function(t){return e.add(t)}))})),Array.from(e)}),[]),w=Object(r.a)(O,2),y=w[0];w[1];c.a.useEffect((function(){var e=[];"all"!==d?s.forEach((function(t){t.stack&&t.stack.includes(d)&&e.push(t)})):e=s,n(e)}),[d]);var S=function(){var e=i();x(e)};c.a.useEffect((function(){return window.addEventListener("resize",S),function(){window.removeEventListener("resize",S)}}),[]);var C=s[j];return Object(o.jsxs)("section",{id:"certificate_page",className:"px-4 pt-4",children:[Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)("h4",{className:"text-secondary-color m-b0",children:"Certificate Earned"}),Object(o.jsx)("h1",{children:Object(o.jsx)("u",{children:"Certificate"})})]}),Object(o.jsx)("div",{className:"certificate_page__main mx-2 md:mx-auto px-2 md:px-4 md:pr-8 pt-4 md:pt-10",children:Object(o.jsxs)("div",{className:"container mx-auto px-4",children:[y&&Array.isArray(y)&&Object(o.jsxs)("select",{className:"md:ml-5",onChange:function(e){m(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"Show All Certificate"}),y.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))]}),Object(o.jsxs)("div",{className:"flex",children:[Object(o.jsx)("div",{className:"certificate_list_container",id:"certificate-tab",children:768>g?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("select",{onChange:function(e){return v(e.target.value)},children:a.map((function(e,t){return Object(o.jsx)("option",{value:t,children:e.name},e.name)}))})}):Object(o.jsx)(o.Fragment,{children:a.map((function(e,t){return Object(o.jsx)("div",{className:"nav-link mb-1 ".concat(t===j?"active":""),onClick:function(){return v(t)},children:Object(o.jsxs)("h5",{children:[" ",e.name]})},e.name)}))})}),Object(o.jsx)("div",{className:"tab-content",id:"certificate-tabContent",children:Object(o.jsx)("div",{className:"tab-pane fade show active",children:Object(o.jsx)("iframe",{title:C.name,src:C.url,width:"100%",allowFullScreen:"",loading:"lazy"})})})]})]})})]})}t.default=c.a.memo(l)}}]);
//# sourceMappingURL=3.718e5e1f.chunk.js.map