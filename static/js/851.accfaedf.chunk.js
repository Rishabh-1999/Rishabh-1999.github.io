/*! For license information please see 851.accfaedf.chunk.js.LICENSE.txt */
(self.webpackChunkrishabh_1999_github_io=self.webpackChunkrishabh_1999_github_io||[]).push([[851],{1227:function(e,t,r){"use strict";var n=r(2791),a=r(184);function i(e){var t=e.subtitle,r=e.title;return(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h4",{className:"text-orange-anzac mb-0",children:t}),(0,a.jsx)("h1",{className:"font-bold underline",children:r})]})}t.Z=n.memo(i)},1851:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(3878);var a=r(181),i=r(5267);function s(e,t){return(0,n.Z)(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(l){o=!0,a=l}finally{try{s||null==r.return||r.return()}finally{if(o)throw a}}return i}}(e,t)||(0,a.Z)(e,t)||(0,i.Z)()}var o=r(2791),l=r(1694),c=r.n(l),u=r(1227);function d(){return window.innerWidth}var f=[{name:"Server-side Development with NodeJS, Express and MongoDB (Coursera)",url:"https://drive.google.com/file/d/1D27cmO6xEfFD7pLFpSm9g2tDLMD7AUz9/preview",stack:["Frontend","Backend","Database"]},{name:"Understanding TypeScript - 2022 Edition (Udemy)",url:"https://drive.google.com/file/d/1BQNZ1wqpFywQyFfBTX8SfBhBR1DrKSCW/preview",stack:["Frontend","Backend","Programming Language"]},{name:"Docker & Kubernetes: The Practical Guide (Udemy)",url:"https://drive.google.com/file/d/1GRGOltaJmhPui6-22bshLNUmDn1R-uWw/preview",stack:["Dev-Ops"]},{name:"AWS Fundamentals Going Cloud-Native (Coursera)",url:"https://drive.google.com/file/d/1CjH7XpWU4E5IiS2HBURIAIwLe3MwO3X8/preview",stack:["Cloud","Dev-Ops"]},{name:"Programming for Everybody (Getting Started with Python) (Coursera)",url:"https://drive.google.com/file/d/1rS34utrZ1-LXFEeL9soq6urLqM_pg3R5/preview",stack:["Programming Language","Python","Others"]},{name:"Getting Started with Data Analytics on AWS (Coursera)",url:"https://drive.google.com/file/d/1z9IiytFDkr1lCNdVe1_Dm9Eu21GUVqxv/preview",stack:["Data Analytics"]},{name:"Introduction to Git and GitHub (Coursera)",url:"https://drive.google.com/file/d/1nbN0QKmEkp0-ajR7HrnuNK5jfJS_MfCR/preview",stack:["Others"]},{name:"Python Data Structures (Coursera)",url:"https://drive.google.com/file/d/1HPZ42EIU1vmvwgl45i6Jc_edBabXd1-g/preview",stack:["Python","Data Structures","Others"]},{name:"Using Python to Access Web Data (Coursera)",url:"https://drive.google.com/file/d/1gbKJRefg1mEe3cB4bqBPb0jdlaeWSW1-/preview",stack:["Python"]},{name:"Using Databases with Python (Coursera)",url:"https://drive.google.com/file/d/1M5Hqux5ogwN5_vHZxy8ZaTTIMDjkWotj/preview",stack:["Python","Others"]}],m=r(184);function h(){var e=s(o.useState("all"),2),t=e[0],r=e[1],n=o.useMemo((function(){return"all"===t?f:f.filter((function(e){return e.stack&&e.stack.includes(t)}))}),[t]),a=s(o.useState(0),2),i=a[0],l=a[1],h=o.useMemo((function(){return n[i]}),[i,n]),v=o.useMemo((function(){var e=new Set;return f.forEach((function(t){null===t||void 0===t||t.stack.forEach((function(t){return e.add(t)}))})),Array.from(e)}),[]),p=s(o.useState(d()),2),g=p[0],x=p[1],y=function(){var e=d();x(e)};o.useEffect((function(){return window.addEventListener("resize",y),function(){window.removeEventListener("resize",y)}}),[]);var w=function(e){r(e),l(0)};return(0,m.jsxs)("section",{id:"certificate_page",className:"px-4 pt-4",children:[(0,m.jsx)(u.Z,{title:"Certificates",subtitle:"Certificates Earned"}),(0,m.jsx)("div",{className:"section_content mx-2 md:mx-auto px-2 md:px-6 sm:px-4 pt-4",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)(m.Fragment,{children:Array.isArray(v)&&(0,m.jsx)(m.Fragment,{children:g>768?(0,m.jsxs)("div",{className:"flex flex-wrap mb-2",children:[(0,m.jsx)("button",{className:c()("stack_select font-bold",{active:"all"===t}),onClick:function(){return w("all")},children:"Show all Certificates :"}),v.map((function(e){return(0,m.jsx)("button",{className:c()("stack_select",{active:t===e}),onClick:function(){return w(e)},children:e},e)}))]}):(0,m.jsxs)(m.Fragment,{children:[Array.isArray(v)&&(0,m.jsxs)("select",{onChange:function(e){return w(e.target.value)},children:[(0,m.jsx)("option",{value:"all",children:"Show all Certificates"}),v.map((function(e){return(0,m.jsx)("option",{value:e,children:e},e)}))]})," "]})})}),(0,m.jsxs)("div",{className:"flex md:flex-row flex-col",children:[(0,m.jsx)("div",{className:"certificate_list flex-0 overflow-y-auto md:mr-6",children:768>g?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("select",{className:"w-11/12 text-ellipsis",onChange:function(e){return l(parseInt(e.target.value))},children:Array.isArray(n)&&n.map((function(e,t){return(0,m.jsx)("option",{value:t,children:e.name},e.name)}))})}):(0,m.jsx)(m.Fragment,{children:Array.isArray(n)&&n.map((function(e,t){return(0,m.jsx)("div",{className:c()("my-2 p-1.5 cursor-pointer hover:rounded-md nav-link text-lg font-bold",{"active rounded-t-md":t===i}),onClick:function(){return l(t)},children:e.name},e.name)}))})}),(0,m.jsx)("div",{className:"certificate-iframe flex-1",children:(0,m.jsx)("div",{className:"tab-pane fade show active",children:(0,m.jsx)("iframe",{title:h.name,src:h.url,width:"100%",allowFullScreen:!0})})})]})]})})]})}var v=o.memo(h)},1694:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=851.accfaedf.chunk.js.map