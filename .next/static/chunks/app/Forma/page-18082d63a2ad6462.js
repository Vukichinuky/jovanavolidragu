(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{9266:function(e,r,t){Promise.resolve().then(t.bind(t,1893))},1893:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(7437),a=t(2265);let s={_origin:"https://api.emailjs.com"},o=(e,r,t)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!r)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class i{constructor(e){this.status=e.status,this.text=e.responseText}}let l=(e,r,t={})=>new Promise((n,a)=>{let o=new XMLHttpRequest;o.addEventListener("load",({target:e})=>{let r=new i(e);200===r.status||"OK"===r.text?n(r):a(r)}),o.addEventListener("error",({target:e})=>{a(new i(e))}),o.open("POST",s._origin+e,!0),Object.keys(t).forEach(e=>{o.setRequestHeader(e,t[e])}),o.send(r)}),d=e=>{let r;if(!(r="string"==typeof e?document.querySelector(e):e)||"FORM"!==r.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return r};var u={init:(e,r="https://api.emailjs.com")=>{s._userID=e,s._origin=r},send:(e,r,t,n)=>{let a=n||s._userID;return o(a,e,r),l("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:a,service_id:e,template_id:r,template_params:t}),{"Content-type":"application/json"})},sendForm:(e,r,t,n)=>{let a=n||s._userID,i=d(t);o(a,e,r);let u=new FormData(i);return u.append("lib_version","3.2.0"),u.append("service_id",e),u.append("template_id",r),u.append("user_id",a),l("/api/v1.0/email/send-form",u)}},c=t(6691),p=t.n(c),m=function(){let[e,r]=(0,a.useState)({question1:"",question2:"",question3:"",question4:"",message:""}),t=t=>{r({...e,[t.target.name]:t.target.value})};return(0,n.jsxs)("form",{className:"flex flex-col p-5 justify-center items-center gap-10",onSubmit:r=>{r.preventDefault(),u.send("service_ivhi3fh","template_hoohh4c",e,"hQ5FLvng7576T2WDd").then(r=>{console.log(r.text),"yes"===e.question3&&window.alert("06.12.2023 u 6 da odemo na dejt budi spremna")},e=>{console.log(e.text)})},children:[(0,n.jsxs)("label",{className:"border p-2 rounded-md",children:["Da li zelis da razgovaramo i pokusamo da resimo ovo?  ",(0,n.jsxs)("select",{name:"question3",onChange:t,children:[(0,n.jsx)("option",{value:"",children:"Izaberi..."}),(0,n.jsx)("option",{value:"yes",children:"Da"}),(0,n.jsx)("option",{value:"no",children:"Ne"})]})]}),"yes"===e.question3&&(0,n.jsxs)("label",{className:"border p-2 rounded-md",children:["Hajde da poradimo na nama malo?",(0,n.jsxs)("select",{name:"question4",onChange:t,children:[(0,n.jsx)("option",{value:"",children:"Izaberi..."}),(0,n.jsx)("option",{value:"yes",children:"Hajde"}),(0,n.jsx)("option",{value:"yes2",children:"Hajde"})]})]}),(0,n.jsxs)("label",{className:"border p-2 rounded-md",children:["Da li je jovana pozelela dragu?",(0,n.jsxs)("select",{className:"p-3",name:"question1",onChange:t,children:[(0,n.jsx)("option",{value:"",children:"Izaberi..."}),(0,n.jsx)("option",{value:"yes",children:"Jeste"}),(0,n.jsx)("option",{value:"no",children:"Nije"})]})]}),"yes"===e.question1&&(0,n.jsx)("h1",{children:"I drago je pozeleo Jovanu"}),(0,n.jsxs)("label",{className:"border p-2 rounded-md",children:["Koliko je Drago pozeljen ako jeste? btw na 10 dobijas sliku mace",(0,n.jsxs)("select",{className:"p-3",name:"question2",onChange:t,children:[(0,n.jsx)("option",{value:"",children:"Izaberi..."}),(0,n.jsx)("option",{value:"1",children:"1"}),(0,n.jsx)("option",{value:"2",children:"2"}),(0,n.jsx)("option",{value:"3",children:"3"}),(0,n.jsx)("option",{value:"4",children:"4"}),(0,n.jsx)("option",{value:"5",children:"5"}),(0,n.jsx)("option",{value:"6",children:"6"}),(0,n.jsx)("option",{value:"7",children:"7"}),(0,n.jsx)("option",{value:"8",children:"8"}),(0,n.jsx)("option",{value:"9",children:"9"}),(0,n.jsx)("option",{value:"10",children:"10"})]})]}),"10"===e.question2&&(0,n.jsx)(p(),{height:300,alt:"slika mace",width:300,src:"/OIP.jpeg"}),(0,n.jsxs)("label",{className:"border p-2 flex items-center justify-center rounded-md",children:["Imas li ti sta da kazes?:",(0,n.jsx)("textarea",{className:"border p-2 rounded-md",name:"message",onChange:t})]}),(0,n.jsx)("input",{className:" rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-400 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 cursor-pointer hover:dark:bg-neutral-800/30",type:"submit",value:"Posalji"})]})},h=function(){let[e,r]=(0,a.useState)(""),[t,s]=(0,a.useState)(""),o="pica"===e.toLowerCase()&&"837497"===t.toLowerCase(),[i,l]=(0,a.useState)(!1);return(0,n.jsxs)("div",{className:"flex-col mt-56 gap-28 flex  items-center justify-center",children:[!i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-col items-center gap-7 justify-center",children:[(0,n.jsx)("label",{className:"text-sm font-semibold",children:"Koja je omiljena hrana dragi na celom svetu?"}),(0,n.jsx)("input",{type:"text",className:"border p-2 rounded-md ml-4",value:e,onChange:e=>r(e.target.value)})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-7 items-center justify-center",children:[(0,n.jsx)("label",{className:"text-sm font-semibold",children:"Koji je dragi pin na telefonu"}),(0,n.jsx)("input",{type:"text",className:"border p-2 rounded-md ml-4",value:t,onChange:e=>s(e.target.value)})]}),(0,n.jsx)("button",{className:" rounded-lg border border-transparent border-gray-300 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",onClick:()=>{l(!0)},children:"Nastavi"})]}),i&&(o?(0,n.jsx)("div",{children:(0,n.jsx)(m,{})}):(0,n.jsxs)("div",{className:"flex items-center justify-center gap-7 felx-row",children:[(0,n.jsx)("p",{children:"Odgovori nisu tacni, pokusaj ponovo"}),"       ",(0,n.jsx)("button",{className:" rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",onClick:()=>window.location.reload(),children:"Nazad"})]}))]})}},679:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{unstable_getImgProps:function(){return l},default:function(){return d}});let n=t(1024),a=t(7929),s=t(2637),o=t(413),i=n._(t(9950)),l=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:r}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(r))void 0===t&&delete r[e];return{props:r}},d=o.Image},622:function(e,r,t){"use strict";var n=t(2265),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,s={},d=null,u=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,n)&&!l.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:a,type:e,key:d,ref:u,props:s,_owner:i.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},7437:function(e,r,t){"use strict";e.exports=t(622)},6691:function(e,r,t){e.exports=t(679)}},function(e){e.O(0,[413,971,472,744],function(){return e(e.s=9266)}),_N_E=e.O()}]);