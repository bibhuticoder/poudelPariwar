(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5197)}])},1210:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(2648).Z,o=n(7273).Z,l=a(n(7294)),i=n(6273),c=n(2725),u=n(3462),s=n(1018),f=n(7190),d=n(1210),p=n(8684),h={};function v(e,t,n,r){if(e&&i.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var a=r&&void 0!==r.locale?r.locale:e&&e.locale;h[t+"%"+n+(a?"%"+a:"")]=!0}}var m=l.default.forwardRef(function(e,t){var n,a,m=e.href,x=e.as,g=e.children,b=e.prefetch,y=e.passHref,j=e.replace,w=e.shallow,C=e.scroll,_=e.locale,M=e.onClick,N=e.onMouseEnter,O=e.onTouchStart,L=e.legacyBehavior,z=void 0===L?!0!==Boolean(!1):L,k=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,z&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));var E=!1!==b,R=l.default.useContext(u.RouterContext),P=l.default.useContext(s.AppRouterContext);P&&(R=P);var B=l.default.useMemo(function(){var e=r(i.resolveHref(R,m,!0),2),t=e[0],n=e[1];return{href:t,as:x?i.resolveHref(R,x):n||t}},[R,m,x]),S=B.href,H=B.as,T=l.default.useRef(S),A=l.default.useRef(H);z&&(a=l.default.Children.only(n));var I=z?a&&"object"==typeof a&&a.ref:t,Z=r(f.useIntersection({rootMargin:"200px"}),3),D=Z[0],F=Z[1],U=Z[2],V=l.default.useCallback(function(e){(A.current!==H||T.current!==S)&&(U(),A.current=H,T.current=S),D(e),I&&("function"==typeof I?I(e):"object"==typeof I&&(I.current=e))},[H,I,S,U,D]);l.default.useEffect(function(){var e=F&&E&&i.isLocalURL(S),t=void 0!==_?_:R&&R.locale,n=h[S+"%"+H+(t?"%"+t:"")];e&&!n&&v(R,S,H,{locale:t})},[H,S,F,_,E,R]);var K={ref:V,onClick:function(e){z||"function"!=typeof M||M(e),z&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,u,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&i.isLocalURL(n)){e.preventDefault();var d,p,h=function(){"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:o,locale:u,scroll:c}):t[a?"replace":"push"](n,{forceOptimisticNavigation:!f})};s?l.default.startTransition(h):h()}}(e,R,S,H,j,w,C,_,Boolean(P),E)},onMouseEnter:function(e){z||"function"!=typeof N||N(e),z&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),!(!E&&P)&&i.isLocalURL(S)&&v(R,S,H,{priority:!0})},onTouchStart:function(e){z||"function"!=typeof O||O(e),z&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),!(!E&&P)&&i.isLocalURL(S)&&v(R,S,H,{priority:!0})}};if(!z||y||"a"===a.type&&!("href"in a.props)){var q=void 0!==_?_:R&&R.locale,Y=R&&R.isLocaleDomain&&d.getDomainLocale(H,q,R.locales,R.domainLocales);K.href=Y||p.addBasePath(c.addLocale(H,q,R&&R.defaultLocale))}return z?l.default.cloneElement(a,K):l.default.createElement("a",Object.assign({},k,K),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!l,s=r(a.useState(!1),2),f=s[0],d=s[1],p=r(a.useState(null),2),h=p[0],v=p[1];return a.useEffect(function(){if(l){if(!u&&!f&&h&&h.tagName){var e,r,a,s,p,v,m;return r=function(e){return e&&d(e)},p=(s=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=i.get(r)))return t;var a=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:a},c.push(n),i.set(n,t),t}(a={root:null==t?void 0:t.current,rootMargin:n})).id,v=s.observer,(m=s.elements).set(h,r),v.observe(h),function(){if(m.delete(h),v.unobserve(h),0===m.size){v.disconnect(),i.delete(p);var e=c.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var x=o.requestIdleCallback(function(){return d(!0)});return function(){return o.cancelIdleCallback(x)}}},[h,u,n,t,f]),[v,f,a.useCallback(function(){d(!1)},[])]};var a=n(7294),o=n(9311),l="function"==typeof IntersectionObserver,i=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),a=r.default.createContext(null);t.AppRouterContext=a;var o=r.default.createContext(null);t.LayoutRouterContext=o;var l=r.default.createContext(null);t.GlobalLayoutRouterContext=l;var i=r.default.createContext(null);t.TemplateContext=i},5197:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(1799),a=n(5893);n(4831);var o=n(1664),l=n.n(o),i=n(1163),c=n(7294),u=n(3750),s=function(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"w-full bg-blue-400",children:(0,a.jsxs)("div",{className:"container text-white p-2 z-10 text-md md:text-xl flex justify-between items-center",children:[(0,a.jsxs)("p",{children:["कृपया बंशावालीमा ",(0,a.jsx)("span",{className:"hidden md:inline",children:"आफ्नो वा परिवारको"}),"  जानकारी अपडेट गर्न",(0,a.jsx)("a",{href:"https://forms.gle/wekzeMbY77AZdQR56",target:"_blank",rel:"noreferrer",className:"ml-2 border-b-2 text-white text-md inline animate-pulse",children:"फारम भर्नुहोस्"})]}),(0,a.jsx)(u.HJl,{className:"rounded-full text-2xl cursor-pointer",onClick:e.onCancel})]})})})};function f(e){var t=[{name:"गृहपृष्ठ",path:"/"},{name:"इतिहास",path:"/history"},{name:"योगदान दिनुहोस",path:"/contribute"}],n=(0,c.useState)(!0),r=n[0],o=n[1],f=(0,c.useState)(!1),d=f[0],p=f[1],h=(0,i.useRouter)();return(0,c.useEffect)(function(){window.addEventListener("scroll",function(e){var t=document.querySelector("#navbar");if(t){var n=t.getBoundingClientRect().height;window.pageYOffset>n?t.classList.add("fixed-nav"):t.classList.remove("fixed-nav")}})},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("nav",{className:"fixed top-0 left-0 w-full bg-white z-10 transition-shadow ease-in-out duration-200",id:"navbar",children:[r&&(0,a.jsx)(s,{onCancel:function(e){return o(!1)}}),(0,a.jsxs)("div",{className:"container flex flex-wrap justify-between items-center mx-auto px-2 sm:px-4 py-2",children:[(0,a.jsx)(l(),{href:"/",className:"flex items-center cursor-pointer",children:(0,a.jsx)("span",{className:"self-center text-2xl font-semibold whitespace-nowrap cursor-pointer text-black",children:"पौडेल परिवार"})}),(0,a.jsx)("button",{onClick:function(){return p(!d)},type:"button",className:"inline-flex items-center p-2 ml-3 text-2xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200",children:(0,a.jsx)(u.Flk,{})}),(0,a.jsx)("div",{className:"hidden w-full md:block md:w-auto",id:"navbar-default",children:(0,a.jsx)("ul",{className:"flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium",children:t.map(function(e){return(0,a.jsx)("li",{"data-active":h.pathname==e.path,className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0",children:(0,a.jsx)(l(),{href:e.path,children:e.name})},e.path)})})}),d&&(0,a.jsx)("div",{className:"md:hidden fixed top-0 left-0 w-screen h-screen z-50 bg-gray-200 bg-opacity-95 grid place-items-center",children:(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"text-center",children:(0,a.jsx)(u.z3f,{className:"mx-auto text-5xl",onClick:function(){return p(!1)}})}),t.map(function(e){return(0,a.jsx)("li",{onClick:function(){return p(!1)},"data-active":h.pathname==e.path,className:"block text-3xl text-center py-8 pr-4 pl-3 text-gray-700",children:(0,a.jsx)(l(),{href:e.path,children:e.name})},e.path)})]})})]})]})})}var d=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"bg-gray-100 w-full py-8 mt-16",children:(0,a.jsxs)("div",{className:"container flex flex-wrap items-center justify-center md:justify-between",children:[(0,a.jsxs)("p",{className:"font-Mukta",children:["\xa9 ",new Date().getFullYear()," पौडेल-परिवार ™"]}),(0,a.jsxs)("p",{className:"font-Nunito mt-2 md:mt-0 italic",children:["Designed & developed by\xa0",(0,a.jsx)("a",{href:"https://bibhuti.me/",target:"_blank",rel:"noopener noreferrer",className:"site-link",children:"Bibhuti Poudyal"})]})]})})})};function p(e){var t=(0,c.useRef)(120);return(0,c.useEffect)(function(){var e=document.getElementById("navbar");e&&(t.current=Math.floor(e.getBoundingClientRect().height))},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f,{}),(0,a.jsx)("main",{className:"mt-2",style:{paddingTop:"".concat(t.current,"px")},children:e.children}),(0,a.jsx)(d,{})]})}var h=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsx)(p,{children:(0,a.jsx)(t,(0,r.Z)({},n))})}},4831:function(){},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},3750:function(e,t,n){"use strict";n.d(t,{Flk:function(){return u},HJl:function(){return a},U4Q:function(){return l},b9R:function(){return i},dVI:function(){return f},e6h:function(){return o},eEq:function(){return c},im1:function(){return s},z3f:function(){return d}});var r=n(8357);function a(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"}}]})(e)}function o(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"}}]})(e)}function l(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"}},{tag:"path",attr:{d:"M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"}}]})(e)}function i(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}]})(e)}function c(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"}},{tag:"path",attr:{d:"M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"}}]})(e)}function u(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"}}]})(e)}function s(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"}}]})(e)}function f(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(e)}function d(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}}]})(e)}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function c(e){return function(t){return r.createElement(u,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,l({key:n},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var n,a=e.attr,o=e.size,c=e.title,u=i(e,["attr","size","title"]),s=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==o?r.createElement(o.Consumer,null,function(e){return t(e)}):t(a)}},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){r(e,t,n[t])})}return e}n.d(t,{Z:function(){return a}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);