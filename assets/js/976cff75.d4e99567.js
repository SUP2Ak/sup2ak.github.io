"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[790],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8542:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={position:1},i=void 0,l={unversionedId:"supv_core/config/server/webhook",id:"supv_core/config/server/webhook",title:"webhook",description:"Comment le configurer? :",source:"@site/docs/supv_core/config/server/webhook.md",sourceDirName:"supv_core/config/server",slug:"/supv_core/config/server/webhook",permalink:"/docs/supv_core/config/server/webhook",draft:!1,editUrl:"https://github.com/SUP2Ak/sup2ak.github.io/tree/main/docs/supv_core/config/server/webhook.md",tags:[],version:"current",frontMatter:{position:1},sidebar:"supv_core",previous:{title:"Utilisation",permalink:"/docs/supv_core/"},next:{title:"dialog",permalink:"/docs/supv_core/interface/client/dialog"}},u={},s=[],p={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",null,(0,o.kt)("u",null,"Comment le configurer? :")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Pour configurer le webhook, il vous suffit de modifier le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook.lua")," dans le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," de la ressource c\xf4t\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"server"),".\nD'autre information seront int\xe9grer si besoin. Vous pouvez sinon ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/SUP2Ak/supv_core/blob/main/server/config/webhook.lua"},"cliquer ici"))," pour y acc\xe9der.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Acceder \xe0 la documentation server : ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"../../webhook/server"},"cliquer ici"))),(0,o.kt)("li",{parentName:"ul"},"Acceder \xe0 la documentation client : ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"../../webhook/client"},"cliquer ici")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n    localization = 'fr_FR',\n\n    channel = {\n        ['supv_core'] = '', -- url webhook de votre, pour avoir les maj de supv_core en webhook\n        ['supv_tebex'] = '', -- url webhook de votre, pour avoir les maj des script supv achet\xe9 sur tebex en webhook\n        ['salon1'] = '' -- url webhook de votre, pour votre utilisation personnel, vous pouvez en ajoutez autant que vous voulez\n    },\n\n    default = {\n        date_format = 'letter', -- letter or numeric\n        color = 7055103,\n        foot_icon = 'https://avatars.githubusercontent.com/u/95303960?s=280&v=4',\n        avatar = \"https://avatars.githubusercontent.com/u/95303960?s=280&v=4\"\n    },\n\n    played_from = 'server' -- shared or server \n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"localization: string")," : langue du webhook, par d\xe9faut ",(0,o.kt)("inlineCode",{parentName:"li"},"fr_FR")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"channel: table")," : liste des webhook"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default: table")," : param\xe8tre par d\xe9faut du webhook",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"date_format: string")," : format de la date, par d\xe9faut ",(0,o.kt)("inlineCode",{parentName:"li"},"letter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"color: number")," : couleur du webhook, par d\xe9faut ",(0,o.kt)("inlineCode",{parentName:"li"},"7055103")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"foot_icon: string")," : icone du webhook, par d\xe9faut ",(0,o.kt)("inlineCode",{parentName:"li"},"https://avatars.githubusercontent.com/u/95303960?s=280&v=4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"avatar: string")," : avatar du webhook, par d\xe9faut ",(0,o.kt)("inlineCode",{parentName:"li"},"https://avatars.githubusercontent.com/u/95303960?s=280&v=4")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"played_from: string")," : si vous voulez que les webhook(s) peuvent \xeatre jouer depuis le serveur, ou les deux (serveur + client) par d\xe9faut: ",(0,o.kt)("inlineCode",{parentName:"li"},"server"))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Si vous jouez le webhook depuis le client, il faut imp\xe9rativement que vous utilisez le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"server\\config\\webhook.lua")," et que vous configurez vos url dans la ",(0,o.kt)("inlineCode",{parentName:"p"},"table: channel")," pour des raison de s\xe9curiter!")))}m.isMDXComponent=!0}}]);