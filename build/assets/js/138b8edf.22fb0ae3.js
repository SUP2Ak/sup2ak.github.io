"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[953],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>y});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(y,l(l({ref:r},s),{},{components:t})):n.createElement(y,l({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8850:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1},l="server/framework/es_extended.lua",i={unversionedId:"esx_legacy/doublejob/ox_doorlock/server",id:"esx_legacy/doublejob/ox_doorlock/server",title:"server/framework/es_extended.lua",description:"Add/Refresh les factions au groups",source:"@site/docs/esx_legacy/doublejob/ox_doorlock/server.md",sourceDirName:"esx_legacy/doublejob/ox_doorlock",slug:"/esx_legacy/doublejob/ox_doorlock/server",permalink:"/docs/esx_legacy/doublejob/ox_doorlock/server",draft:!1,editUrl:"https://github.com/SUP2Ak/sup2ak.github.io/tree/main/docs/esx_legacy/doublejob/ox_doorlock/server.md",tags:[],version:"current",lastUpdatedAt:1682720548,formattedLastUpdatedAt:"Apr 28, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"esx_legacy",previous:{title:"server/main.lua",permalink:"/docs/esx_legacy/doublejob/esx_society/server"},next:{title:"modules/bridge/esx/client.lua",permalink:"/docs/esx_legacy/doublejob/ox_inventory/bclient"}},c={},p=[],s={toc:p},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serverframeworkes_extendedlua"},"server/framework/es_extended.lua"),(0,a.kt)("p",null,"Add/Refresh les ",(0,a.kt)("inlineCode",{parentName:"p"},"factions")," au ",(0,a.kt)("inlineCode",{parentName:"p"},"groups")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",null,(0,a.kt)("u",null,"Trouvez la fonction ",(0,a.kt)("code",null,"function IsPlayerInGroup(player, filter)"),", et remplacez le enti\xe8rement par celui-ci :")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"function IsPlayerInGroup(player, filter)\n    local type = type(filter)\n\n    if type == 'string' then\n        if player.job.name == filter then\n            return player.job.name, player.job.grade\n        elseif player.faction.name == filter then\n            return player.faction.name, player.faction.grade\n        end\n    else\n        local tabletype = table.type(filter)\n\n        if tabletype == 'hash' then\n            local grade, gradef = filter[player.job.name], filter[player.faction.name]\n\n            if grade and grade <= player.job.grade then\n                return player.job.name, player.job.grade\n            elseif gradef and gradef <= player.faction.grade then\n                return player.faction.name, player.faction.grade\n            end\n        elseif tabletype == 'array' then\n            for i = 1, #filter do\n                if player.job.name == filter[i] then\n                    return player.job.name, player.job.grade\n                elseif player.faction.name == filter[i] then\n                    return player.faction.name, player.faction.grade\n                end\n            end\n        end\n    end\nend\n")))}u.isMDXComponent=!0}}]);