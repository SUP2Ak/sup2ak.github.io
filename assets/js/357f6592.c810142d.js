"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=o,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={postion:1,title:"Base de donn\xe9e"},i=void 0,l={unversionedId:"esx_legacy/doublejob/bdd",id:"esx_legacy/doublejob/bdd",title:"Base de donn\xe9e",description:"Ajoutez les tables sql pour les factions (new update comming)",source:"@site/docs/esx_legacy/doublejob/bdd.md",sourceDirName:"esx_legacy/doublejob",slug:"/esx_legacy/doublejob/bdd",permalink:"/https://sup2ak.github.io/docs/esx_legacy/doublejob/bdd",draft:!1,editUrl:"https://github.com/SUP2Ak/sup2ak.github.io/tree/main/docs/esx_legacy/doublejob/bdd.md",tags:[],version:"current",lastUpdatedAt:1682211880,formattedLastUpdatedAt:"Apr 23, 2023",frontMatter:{postion:1,title:"Base de donn\xe9e"},sidebar:"esx_legacy",previous:{title:"Installation faction (doublejob)",permalink:"/https://sup2ak.github.io/docs/category/installation-faction-doublejob"},next:{title:"client/main.lua",permalink:"/https://sup2ak.github.io/docs/esx_legacy/doublejob/es_extended/client"}},c={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ajoutez les tables sql pour les factions (new update comming)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE `users`\nADD `faction` VARCHAR(20) NULL DEFAULT 'nofaction',\nADD `faction_grade` INT NULL DEFAULT 0;\n\nCREATE TABLE `faction_grades` (\n    `id` INT NOT NULL AUTO_INCREMENT,\n    `faction_name` VARCHAR(50) DEFAULT NULL,\n    `grade` INT NOT NULL,\n    `name` VARCHAR(50) NOT NULL,\n    `label` VARCHAR(50) NOT NULL,\n    `salary` INT NULL DEFAULT 0,\n    `skin_male` LONGTEXT NULL DEFAULT '{}',\n    `skin_female` LONGTEXT NULL DEFAULT '{}',\n\n    PRIMARY KEY (`id`)\n) ENGINE=InnoDB;\nINSERT INTO `faction_grades` VALUES (1,'nofaction',0,'nofaction','Sans faction',0,'{}','{}');\n\nCREATE TABLE `factions` (\n    `name` VARCHAR(50) NOT NULL,\n    `label` VARCHAR(50) DEFAULT NULL,\n\n    PRIMARY KEY (`name`)\n) ENGINE=InnoDB;\nINSERT INTO `factions` VALUES ('nofaction','Faction');\n")))}d.isMDXComponent=!0}}]);