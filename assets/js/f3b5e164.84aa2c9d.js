"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[929],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6931:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={title:"Request Scene Model (RSM)",sidebar_position:20},s=void 0,o={unversionedId:"tutorial/get-started/RSM",id:"tutorial/get-started/RSM",title:"Request Scene Model (RSM)",description:"What is the request scene model",source:"@site/docs/tutorial/01-get-started/02-RSM.md",sourceDirName:"tutorial/01-get-started",slug:"/tutorial/get-started/RSM",permalink:"/tutorial/get-started/RSM",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/01-get-started/02-RSM.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Request Scene Model (RSM)",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/tutorial/get-started/overview"},next:{title:"Compare with other libraries",permalink:"/tutorial/get-started/comparison"}},l={},u=[{value:"What is the request scene model",id:"what-is-the-request-scene-model",level:2},{value:"Request scene model",id:"request-scene-model",level:2},{value:"request timing",id:"request-timing",level:2},{value:"Request Behavior",id:"request-behavior",level:2},{value:"request event",id:"request-event",level:2},{value:"Response management",id:"response-management",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-the-request-scene-model"},"What is the request scene model"),(0,r.kt)("p",null,"The request scenario model is based on the perspective of the client. It describes the abstract model of the client from triggering the request intent to receiving the request result. It consists of four stages: request timing, request behavior, request event, and response management. For example, when making a request, you often need to think about the following questions,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When the request is made;"),(0,r.kt)("li",{parentName:"ol"},"Whether to display the request status;"),(0,r.kt)("li",{parentName:"ol"},"Do you need to retry the request on failure;"),(0,r.kt)("li",{parentName:"ol"},"How to process the response data;"),(0,r.kt)("li",{parentName:"ol"},"Do you need to encrypt the request parameters;"),(0,r.kt)("li",{parentName:"ol"},"Whether to cache the frequently used response data;"),(0,r.kt)("li",{parentName:"ol"},"How to operate data across pages;"),(0,r.kt)("li",{parentName:"ol"},"How to process requests in a weak or disconnected network environment;"),(0,r.kt)("li",{parentName:"ol"},"...")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," are often more focused on how to interact with the server, but we always need to deal with the above problems by ourselves. These functions that are beneficial to application performance and stability will always allow programmers to write low-maintenance sexual code. The request scene model is to abstract all links from preparing the request to processing the response data, so as to cover the model of the entire CS interaction life cycle from the perspective of the front end. ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," is a library that requests scene models, it is a supplement to request libraries such as ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),", not a substitute."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CS interaction: generally refers to data interaction between all client types and servers")),(0,r.kt)("h2",{id:"request-scene-model"},"Request scene model"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RSM",src:a(4591).Z,width:"917",height:"950"})),(0,r.kt)("h2",{id:"request-timing"},"request timing"),(0,r.kt)("p",null,"Describe when a request needs to be made, implemented with ",(0,r.kt)("inlineCode",{parentName:"p"},"useHook")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"alova"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initialize display data, such as just entering a certain interface or sub-interface;"),(0,r.kt)("li",{parentName:"ul"},"Human-computer interaction triggers CS interaction, and the request needs to be changed again, such as page turning, filtering, sorting, fuzzy search, etc.;"),(0,r.kt)("li",{parentName:"ul"},"Send requests in an anti-shake manner, avoid view data flickering, and reduce server pressure"),(0,r.kt)("li",{parentName:"ul"},"Preloading data, such as preloading the content of the next page in a page, predicting that the user clicks a button to pre-fetch data;"),(0,r.kt)("li",{parentName:"ul"},"To operate server data, it is necessary to issue a request for addition, deletion, modification and query, such as submitting data, deleting data, etc.;"),(0,r.kt)("li",{parentName:"ul"},"Synchronize server status, such as polling requests in scenarios where data changes rapidly, and re-pull data after operating a certain data;")),(0,r.kt)("h2",{id:"request-behavior"},"Request Behavior"),(0,r.kt)("p",null,"Describes how to process the request, implemented as a Method abstraction in ",(0,r.kt)("inlineCode",{parentName:"p"},"alova"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Placeholder request, when requesting, display loading, skeleton diagram, or real data used last time;"),(0,r.kt)("li",{parentName:"ul"},"Cache high-frequency responses, multiple execution requests will use fresh data;"),(0,r.kt)("li",{parentName:"ul"},"Multi-request serial and parallel;"),(0,r.kt)("li",{parentName:"ul"},"The retry mechanism of important interfaces reduces the probability of request failure caused by network instability;"),(0,r.kt)("li",{parentName:"ul"},"Submit silently. When you only care about submitting data, directly respond to the success event after submitting the request, and the background guarantees that the request is successful;"),(0,r.kt)("li",{parentName:"ul"},"Offline submission, the submitted data will be temporarily stored locally when offline, and then submitted after the network connection;")),(0,r.kt)("h2",{id:"request-event"},"request event"),(0,r.kt)("p",null,"Indicates sending a request with request parameters and getting a response. ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," can work with any request library or native solution such as ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"."),(0,r.kt)("h2",{id:"response-management"},"Response management"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alova")," makes the response data stateful and manages it in a unified manner, refreshes the view data and operates the cache at the request level, avoids operations at the component level, and is more elegant and unified."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove the cached response data, which will be pulled from the server when the request is made again;"),(0,r.kt)("li",{parentName:"ul"},"Update the cached response data, which can update the response data at any location, which is very helpful for updating data across pages;"),(0,r.kt)("li",{parentName:"ul"},"Refresh the response data, which can re-refresh the response data at any position, and is also very helpful for updating data across pages;"),(0,r.kt)("li",{parentName:"ul"},"Customize the cache setting. When requesting batch data, you can manually set the cache for the batch data one by one, so as to meet the cache hit of subsequent single data;")))}p.isMDXComponent=!0},4591:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rsm-en-e01231b66784e7cb7bddbf629392897f.png"}}]);