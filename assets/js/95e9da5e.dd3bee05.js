"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[594],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,y=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return t?n.createElement(y,l(l({ref:r},u),{},{components:t})):n.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5129:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={position:2},l=void 0,p={unversionedId:"supv_core/player/server",id:"supv_core/player/server",title:"server",description:"Non disponible pour le moment!",source:"@site/docs/supv_core/player/server.md",sourceDirName:"supv_core/player",slug:"/supv_core/player/server",permalink:"/docs/supv_core/player/server",draft:!1,editUrl:"https://github.com/SUP2Ak/sup2ak.github.io/tree/main/docs/supv_core/player/server.md",tags:[],version:"current",frontMatter:{position:2},sidebar:"supv_core",previous:{title:"client",permalink:"/docs/supv_core/player/client"},next:{title:"shared",permalink:"/docs/supv_core/require/shared"}},i={},c=[],u={toc:c},s="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Non disponible pour le moment!")),(0,o.kt)("h2",null,(0,o.kt)("u",null,"supv.player.getFromId :")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"supv.player.getFromId(id: integer): return table"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"distance: function(coords: vec3) return #(self:getCoords() - coords)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getCoords: function(vec4?: boolean) return self.coords"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",null,(0,o.kt)("u",null,"exemple :")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"CreateThread(function()\n    local player = supv.player.getFromId(1) -- 1 = id du joueur (source via un event par exemple)\n    local pos = vec3(100, 100, 5)\n    while true do\n        print(player:getCoords(), 'vec3', player.coords)\n        print(player:getCoords(true), 'vec4', player.coords)\n        print(player:distance(pos), 'dist', player.dist)\n\n        Wait(2000)\n    end\nend)\n")))}d.isMDXComponent=!0}}]);