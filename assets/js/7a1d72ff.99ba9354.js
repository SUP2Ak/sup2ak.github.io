"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=i,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={position:1},a=void 0,l={unversionedId:"supv_core/interface/client/modals/confirm",id:"supv_core/interface/client/modals/confirm",title:"confirm",description:"supv.openModal (confirm) :",source:"@site/docs/supv_core/interface/client/modals/confirm.md",sourceDirName:"supv_core/interface/client/modals",slug:"/supv_core/interface/client/modals/confirm",permalink:"/docs/supv_core/interface/client/modals/confirm",draft:!1,editUrl:"https://github.com/SUP2Ak/sup2ak.github.io/tree/main/docs/supv_core/interface/client/modals/confirm.md",tags:[],version:"current",frontMatter:{position:1},sidebar:"supv_core",previous:{title:"dialog",permalink:"/docs/supv_core/interface/client/dialog"},next:{title:"client",permalink:"/docs/supv_core/json/client"}},c={},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,(0,i.kt)("u",null,"supv.openModal (confirm) :")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"supv.openModal(data: table): return boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data: table"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type: string")," ",(0,i.kt)("em",{parentName:"li"},"exemple: ",(0,i.kt)("inlineCode",{parentName:"em"},"confirm"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title?: string")," ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"h1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subtitle?: string")," ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"h2"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description: string")," ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"ReactMarkDown")))))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,(0,i.kt)("u",null,"exemple :")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local confirm = supv.openModal({\n    type = \'confirm\',\n    description = [[\n- Ici je peux \xe9crire ce que j\'ai envie!\n    - Je peux aussi faire des listes\n        - Et des sous-listes\n\n[x] : Checkbox checked\n[ ] : Checkbox unchecked\n\n> Ou vous pouvez toout simplement faire : "description = \'Mon texte\'"!\n]]\n})\n\nif confirm then\n    print(("Dialog : %s"):format(confirm)) -- true\nelse\n    print(("Dialog : %s"):format(confirm)) -- false\nend\n')))}m.isMDXComponent=!0}}]);