"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6108],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(b,i(i({ref:t},s),{},{components:r})):a.createElement(b,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3894:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);const n=e=>{let{src:t}=e;return a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},9319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=r(7462),n=r(7294),o=r(3905),i=r(3894);const l=()=>n.createElement(i.Z,{src:"https://codesandbox.io/embed/github/alovajs/alova-examples/tree/main/packages/retriable-hook?fontsize=14&hidenavigation=1&theme=dark&file=%2Fsrc%2FApp.vue%3A1%2C1"}),p={title:"\u8bf7\u6c42\u91cd\u8bd5/\u8f6e\u8be2\u8bf7\u6c42",sidebar_position:160},c=void 0,s={unversionedId:"example/retriable-hook",id:"example/retriable-hook",title:"\u8bf7\u6c42\u91cd\u8bd5/\u8f6e\u8be2\u8bf7\u6c42",description:"\u793a\u4f8b\u4ee5 react \u4e3a\u4f8b\uff0c\u4f46\u4f60\u8fd8\u53ef\u4ee5\u5728 vue3\u3001svelte \u4e2d\u4f7f\u7528 alova\uff0c\u8be6\u7ec6\u8bf7\u9605\u8bfb \u5165\u95e8\u6307\u5357;",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/02-example/16-retriable-hook.md",sourceDirName:"02-example",slug:"/example/retriable-hook",permalink:"/zh-CN/example/retriable-hook",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/02-example/16-retriable-hook.md",tags:[],version:"current",sidebarPosition:160,frontMatter:{title:"\u8bf7\u6c42\u91cd\u8bd5/\u8f6e\u8be2\u8bf7\u6c42",sidebar_position:160},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u9001\u9a8c\u8bc1\u7801",permalink:"/zh-CN/example/captcha-send"},next:{title:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42",permalink:"/zh-CN/example/action-delegation-middleware"}},u={},m=[],d={toc:m};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\u4ee5 react \u4e3a\u4f8b\uff0c\u4f46\u4f60\u8fd8\u53ef\u4ee5\u5728 vue3\u3001svelte \u4e2d\u4f7f\u7528 alova\uff0c\u8be6\u7ec6\u8bf7\u9605\u8bfb ",(0,o.kt)("a",{parentName:"p",href:"/get-started/overview"},"\u5165\u95e8\u6307\u5357"),";")),(0,o.kt)(l,{mdxType:"RetriableHook"}),(0,o.kt)("admonition",{title:"\u793a\u4f8b\u8bf4\u660e",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u672c\u793a\u4f8b\u5206\u522b\u63d0\u4f9b\u4e86\u8868\u5355\u6570\u636e\u6301\u4e45\u5316\u3001\u8868\u5355\u7f16\u8f91\u3001\u591a\u6a21\u5757\u8868\u5355\u3001\u8868\u5355\u7b5b\u9009\u6570\u636e 4 \u4e2a\u90e8\u5206\uff0c\u53ef\u5206\u522b\u5c1d\u8bd5\u4f53\u9a8c\u3002"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/strategy/useRetriableRequest"},"\u8bf7\u6c42\u91cd\u8bd5\u7b56\u7565\u6587\u6863"))))}b.isMDXComponent=!0}}]);