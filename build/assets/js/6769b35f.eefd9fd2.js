"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),f=u(n),p=l,g=f["".concat(c,".").concat(p)]||f[p]||d[p]||r;return n?a.createElement(g,o(o({ref:t},i),{},{components:n})):a.createElement(g,o({ref:t},i))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:2},o="server/classes/player.lua",s={unversionedId:"esx_legacy/doublejob/es_extended/player",id:"esx_legacy/doublejob/es_extended/player",title:"server/classes/player.lua",description:"Ici vous allez ajoutez la faction au player objet & statebags",source:"@site/docs/esx_legacy/doublejob/es_extended/player.md",sourceDirName:"esx_legacy/doublejob/es_extended",slug:"/esx_legacy/doublejob/es_extended/player",permalink:"/docs/esx_legacy/doublejob/es_extended/player",draft:!1,editUrl:"https://github.com/SUP2Ak/sup2ak.github.io/tree/main/docs/esx_legacy/doublejob/es_extended/player.md",tags:[],version:"current",lastUpdatedAt:1682720548,formattedLastUpdatedAt:"Apr 28, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"esx_legacy",previous:{title:"client/main.lua",permalink:"/docs/esx_legacy/doublejob/es_extended/client"},next:{title:"server/function.lua",permalink:"/docs/esx_legacy/doublejob/es_extended/function"}},c={},u=[],i={toc:u},f="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"serverclassesplayerlua"},"server/classes/player.lua"),(0,l.kt)("p",null,"Ici vous allez ajoutez la faction au player objet & statebags"),(0,l.kt)("h2",null,(0,l.kt)("u",null,"Etape 1 :")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,(0,l.kt)("u",null,"Pour commencer il nous faudra remplacer cette ligne :")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function CreateExtendedPlayer(playerId, identifier, group, accounts, inventory, weight, job, loadout, name, coords)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,(0,l.kt)("u",null,"Par ceci :")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function CreateExtendedPlayer(playerId, identifier, group, accounts, inventory, weight, job, faction, loadout, name, coords)\n")),(0,l.kt)("h2",null,(0,l.kt)("u",null,"Etape 2 :")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,(0,l.kt)("u",null,"En dessous de :")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local self = {}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,(0,l.kt)("u",null,"Ajoutez ceci :")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"self.faction = faction\n")),(0,l.kt)("h2",null,(0,l.kt)("u",null,"Etape 3 :")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,(0,l.kt)("u",null,"Au niveau des setting des 'StateBags' ca ressemble a ceci :")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Player(self.source).state:set("identifier", self.identifier, true)\nPlayer(self.source).state:set("license", self.license, true)\nPlayer(self.source).state:set("job", self.job, true)\nPlayer(self.source).state:set("group", self.group, true)\n-- ...\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,(0,l.kt)("u",null,"Ajoutez ceci en dessous :")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Player(self.source).state:set("faction", self.faction, true)\n')),(0,l.kt)("h2",null,(0,l.kt)("u",null,"Etape 4 :")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,(0,l.kt)("u",null,"Apr\xe8s cette fonction :")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function self.triggerEvent(eventName, ...)\n    TriggerClientEvent(eventName, self.source, ...)\nend\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,(0,l.kt)("u",null,"Ajoutez tout ceci :")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function self.getFaction()\n    return self.faction\nend\n\nfunction self.setFaction(faction, gradef)\n    gradef = tostring(gradef)\n    local lastFaction = json.decode(json.encode(self.faction))\n\n    if ESX.DoesFactionExist(faction, gradef) then\n        local factionObject, gradefObject = ESX.Factions[faction], ESX.Factions[faction].grades[gradef]\n\n        self.faction.id    = factionObject.id\n        self.faction.name  = factionObject.name\n        self.faction.label = factionObject.label\n\n        self.faction.grade        = tonumber(gradef)\n        self.faction.grade_name   = gradefObject.name\n        self.faction.grade_label  = gradefObject.label\n        self.faction.grade_salary = gradefObject.salary\n\n        if gradefObject.skin_male then\n            self.faction.skin_male = json.decode(gradefObject.skin_male)\n        else\n            self.faction.skin_male = {}\n        end\n\n        if gradefObject.skin_female then\n            self.faction.skin_female = json.decode(gradefObject.skin_female)\n        else\n            self.faction.skin_female = {}\n        end\n\n        TriggerEvent('esx:setFaction', self.source, self.faction, lastFaction)\n        self.triggerEvent('esx:setFaction', self.faction)\n        Player(self.source).state:set(\"faction\", self.faction, true)\n    else\n        print(('[es_extended] [^3WARNING^7] Ignoring invalid ^5.setFaction()^7 usage for ID: ^5%s^7, Faction: ^5%s^7'):format(self.source, faction))\n    end\nend\n")))}d.isMDXComponent=!0}}]);