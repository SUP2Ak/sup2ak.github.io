"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[229],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},l="client/framework/esx.lua",c={unversionedId:"esx_legacy/doublejob/ox_target/client",id:"esx_legacy/doublejob/ox_target/client",title:"client/framework/esx.lua",description:"Add/Refresh les factions au groups",source:"@site/docs/esx_legacy/doublejob/ox_target/client.md",sourceDirName:"esx_legacy/doublejob/ox_target",slug:"/esx_legacy/doublejob/ox_target/client",permalink:"/docs/esx_legacy/doublejob/ox_target/client",draft:!1,editUrl:"https://github.com/SUP2Ak/sup2ak.github.io/tree/main/docs/esx_legacy/doublejob/ox_target/client.md",tags:[],version:"current",lastUpdatedAt:1675568561,formattedLastUpdatedAt:"Feb 5, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"esx_legacy",previous:{title:"modules/bridge/esx/server.lua",permalink:"/docs/esx_legacy/doublejob/ox_inventory/bserver"}},i={},u=[],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clientframeworkesxlua"},"client/framework/esx.lua"),(0,a.kt)("p",null,"Add/Refresh les ",(0,a.kt)("inlineCode",{parentName:"p"},"factions")," au ",(0,a.kt)("inlineCode",{parentName:"p"},"groups")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",null,(0,a.kt)("u",null,"groups")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",null,(0,a.kt)("u",null,"Cherchez cette variable :")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local groups = { 'job', 'job2' }\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",null,(0,a.kt)("u",null,"Remplacez l\xe0 par ceci :")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local groups = { 'job', 'faction' }\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",null,(0,a.kt)("u",null,"Trouvez l'event ",(0,a.kt)("code",null,"RegisterNetEvent('esx:setJob2', function(job)"),", et remplacez le enti\xe8rement par celui-ci :")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('esx:setFaction', function(faction)\n    if source == '' then return end\n    playerGroups.faction = faction\nend)\n")))}d.isMDXComponent=!0}}]);