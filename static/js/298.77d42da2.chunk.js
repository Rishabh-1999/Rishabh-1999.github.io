/*! For license information please see 298.77d42da2.chunk.js.LICENSE.txt */
(self.webpackChunkrishabh_1999_github_io=self.webpackChunkrishabh_1999_github_io||[]).push([[298],{1227:function(e,t,r){"use strict";var n=r(2791),i=r(184);function a(e){var t=e.subtitle,r=e.title;return(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h4",{"data-testid":"subtitle",className:"text-xl font-bold  leading-10 text-orange-anzac",children:t}),(0,i.jsx)("h1",{"data-testid":"title",className:"text-5xl leading-10 font-bold underline",children:r})]})}t.Z=n.memo(a)},3298:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(9439),i=r(2791),a=r(1694),o=r.n(a),s=r(1227),l=r(6315),c=[{name:"Server-side Development with NodeJS, Express and MongoDB (Coursera)",url:"https://drive.google.com/file/d/1D27cmO6xEfFD7pLFpSm9g2tDLMD7AUz9/preview",stack:["Frontend","Backend","Database"]},{name:"Next.js & React - The Complete Guide (Udemy)",url:"https://drive.google.com/file/d/1bWChl2mw1118ZF3jiDaEnl1JWdfAamqq/preview",stack:["Frontend","Backend","Programming Language"]},{name:"Understanding TypeScript - 2022 Edition (Udemy)",url:"https://drive.google.com/file/d/1BQNZ1wqpFywQyFfBTX8SfBhBR1DrKSCW/preview",stack:["Frontend","Backend","Programming Language"]},{name:"Docker & Kubernetes: The Practical Guide (Udemy)",url:"https://drive.google.com/file/d/1GRGOltaJmhPui6-22bshLNUmDn1R-uWw/preview",stack:["Dev-Ops"]},{name:"AWS Fundamentals Going Cloud-Native (Coursera)",url:"https://drive.google.com/file/d/1CjH7XpWU4E5IiS2HBURIAIwLe3MwO3X8/preview",stack:["Cloud","Dev-Ops"]},{name:"Programming for Everybody (Getting Started with Python) (Coursera)",url:"https://drive.google.com/file/d/1rS34utrZ1-LXFEeL9soq6urLqM_pg3R5/preview",stack:["Programming Language","Python","Others"]},{name:"Getting Started with Data Analytics on AWS (Coursera)",url:"https://drive.google.com/file/d/1z9IiytFDkr1lCNdVe1_Dm9Eu21GUVqxv/preview",stack:["Data Analytics"]},{name:"Introduction to Git and GitHub (Coursera)",url:"https://drive.google.com/file/d/1nbN0QKmEkp0-ajR7HrnuNK5jfJS_MfCR/preview",stack:["Others"]},{name:"Python Data Structures (Coursera)",url:"https://drive.google.com/file/d/1HPZ42EIU1vmvwgl45i6Jc_edBabXd1-g/preview",stack:["Python","Data Structures","Others"]},{name:"Using Python to Access Web Data (Coursera)",url:"https://drive.google.com/file/d/1gbKJRefg1mEe3cB4bqBPb0jdlaeWSW1-/preview",stack:["Python"]},{name:"Using Databases with Python (Coursera)",url:"https://drive.google.com/file/d/1M5Hqux5ogwN5_vHZxy8ZaTTIMDjkWotj/preview",stack:["Python","Others"]}],u=r(184);function d(){var e=i.useState((0,l.Xp)()),t=(0,n.Z)(e,2),r=t[0],a=t[1],d=i.useState("all"),m=(0,n.Z)(d,2),f=m[0],h=m[1],v=i.useState(0),g=(0,n.Z)(v,2),p=g[0],x=g[1],y=i.useMemo((function(){var e=new Set;return c.forEach((function(t){null===t||void 0===t||t.stack.forEach((function(t){return e.add(t)}))})),Array.from(e)}),[]),w=i.useMemo((function(){return"all"===f?c:c.filter((function(e){return e.stack&&e.stack.includes(f)}))}),[f]),j=i.useMemo((function(){return w[p]}),[p,w]),b=function(){var e=(0,l.Xp)();a(e)};i.useEffect((function(){return window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}}),[]);var k=function(e){h(e),x(0)};return(0,u.jsxs)("section",{id:"certificate_page",children:[(0,u.jsx)(s.Z,{title:"Certificates",subtitle:"Certificates Earned"}),(0,u.jsx)("div",{className:"mt-4 md:mx-6 sm:mx-4 px-2 pt-4 section_content",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(u.Fragment,{children:Array.isArray(y)&&(0,u.jsx)(u.Fragment,{children:r>l.Q0.mdWidth?(0,u.jsxs)("div",{className:"mb-2 flex flex-wrap",children:[(0,u.jsx)("button",{className:o()("stack_select font-bold",{active:"all"===f}),onClick:function(){return k("all")},children:"Show all Certificates :"}),y.map((function(e){return(0,u.jsx)("button",{className:o()("stack_select",{active:f===e}),onClick:function(){return k(e)},children:e},e)}))]}):(0,u.jsx)(u.Fragment,{children:Array.isArray(y)&&(0,u.jsxs)("select",{onChange:function(e){return k(e.target.value)},children:[(0,u.jsx)("option",{value:"all",children:"Show all Certificates"}),y.map((function(e){return(0,u.jsx)("option",{value:e,children:e},e)}))]})})})}),(0,u.jsxs)("div",{className:"flex md:flex-row flex-col",children:[(0,u.jsx)("div",{className:"md:mr-4 flex-0 overflow-y-auto certificate_list",children:l.Q0.mdWidth>r?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("select",{className:"w-11/12 text-ellipsis",onChange:function(e){return x(parseInt(e.target.value))},children:Array.isArray(w)&&w.map((function(e,t){return(0,u.jsx)("option",{value:t,children:e.name},e.name)}))})}):(0,u.jsx)(u.Fragment,{children:Array.isArray(w)&&w.map((function(e,t){return(0,u.jsx)("div",{className:o()("my-2 p-1.5 cursor-pointer hover:rounded-md hover:bg-grey-scorpion text-lg font-bold",{"active rounded-t-md":t===p}),onClick:function(){return x(t)},children:e.name},e.name)}))})}),(0,u.jsx)("div",{className:"flex-1 certificate-iframe",children:(0,u.jsx)("div",{className:"show active",children:(0,u.jsx)("iframe",{title:j.name,src:j.url,width:"100%",allowFullScreen:!0})})})]})]})})]})}var m=i.memo(d)},1694:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var o=i.apply(null,r);o&&e.push(o)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},9439:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3878);var i=r(181),a=r(5267);function o(e,t){return(0,n.Z)(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a,o,s=[],l=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw i}}return s}}(e,t)||(0,i.Z)(e,t)||(0,a.Z)()}}}]);
//# sourceMappingURL=298.77d42da2.chunk.js.map