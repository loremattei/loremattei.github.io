(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"63D4":function(e,t,r){e.exports=r.p+"static/hero-pattern-2-37d657cfc36e534f3587a7ab41e84190.webp"},GPKm:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("q1tI"),n=r.n(a),o=r("GOVm"),l={headerDark:!1,bodyDark:!1,footerDark:!1},i=function(e){var t=e.children,r=e.darkTheme,i=void 0!==r&&r,c=e.themeConfig,s=void 0===c?null:c,m=Object(a.useContext)(o.b);return Object(a.useEffect)((function(){i?m.changeTheme({headerDark:!0,bodyDark:!0,footerDark:!0}):m.changeTheme(Object.assign({},l,s))}),[]),n.a.createElement(n.a.Fragment,null,t)}},RXBc:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),o=r("Xjy0"),l=r("GPKm"),i=r("vOnD"),c=r("7vrA"),s=r("3Z9Z"),m=r("JI6e"),f=(r("E9XD"),r("7O5W")),u=r("17x9"),p=r.n(u);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function O(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function w(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),n=E(t.slice(0,a)),o=t.slice(a+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[n]=o,e}),{})}var v=!1;try{v=!0}catch(W){}function x(e){return f.parse.icon?f.parse.icon(e):null===e?null:"object"===b(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function j(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?d({},e,t):{}}function k(e){var t=e.forwardedRef,r=h(e,["forwardedRef"]),a=r.icon,n=r.mask,o=r.symbol,l=r.className,i=r.title,c=r.titleId,s=x(a),m=j("classes",[].concat(O(function(e){var t,r=e.spin,a=e.pulse,n=e.fixedWidth,o=e.inverse,l=e.border,i=e.listItem,c=e.flip,s=e.size,m=e.rotation,f=e.pull,u=(d(t={"fa-spin":r,"fa-pulse":a,"fa-fw":n,"fa-inverse":o,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(s),null!=s),d(t,"fa-rotate-".concat(m),null!=m&&0!==m),d(t,"fa-pull-".concat(f),null!=f),d(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(u).map((function(e){return u[e]?e:null})).filter((function(e){return e}))}(r)),O(l.split(" ")))),u=j("transform","string"==typeof r.transform?f.parse.transform(r.transform):r.transform),p=j("mask",x(n)),b=Object(f.icon)(s,g({},m,{},u,{},p,{symbol:o,title:i,titleId:c}));if(!b)return function(){var e;!v&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",s),null;var y=b.abstract,E={ref:t};return Object.keys(r).forEach((function(e){k.defaultProps.hasOwnProperty(e)||(E[e]=r[e])})),N(y[0],E)}k.displayName="FontAwesomeIcon",k.propTypes={border:p.a.bool,className:p.a.string,mask:p.a.oneOfType([p.a.object,p.a.array,p.a.string]),fixedWidth:p.a.bool,inverse:p.a.bool,flip:p.a.oneOf(["horizontal","vertical","both"]),icon:p.a.oneOfType([p.a.object,p.a.array,p.a.string]),listItem:p.a.bool,pull:p.a.oneOf(["right","left"]),pulse:p.a.bool,rotation:p.a.oneOf([0,90,180,270]),size:p.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.a.bool,symbol:p.a.oneOfType([p.a.bool,p.a.string]),title:p.a.string,transform:p.a.oneOfType([p.a.string,p.a.object]),swapOpacity:p.a.bool},k.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var N=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=w(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[E(t)]=a}return e}),{attrs:{}}),l=a.style,i=void 0===l?{}:l,c=h(a,["style"]);return o.attrs.style=g({},o.attrs.style,{},i),t.apply(void 0,[r.tag,g({},o.attrs,{},c)].concat(O(n)))}.bind(null,n.a.createElement),I=r("8tEE"),P=r("wHSu"),_=r("7Qib"),S=r("63D4"),z=r.n(S),A=r("Kk3l"),D=r.n(A),T=Object(i.c)(o.f).withConfig({displayName:"Hero__SectionStyled",componentId:"sc-vrh4li-0"})(['&::before{position:absolute;top:0;content:"";width:100%;height:120%;background:url(',") top center no-repeat;background-size:cover;z-index:-1;};padding-bottom:50px;"],z.a),C=i.c.img.withConfig({displayName:"Hero__ImgRight",componentId:"sc-vrh4li-1"})(["max-width:50%;@media ","{max-width:60%;}@media ","{max-width:100%;}"],_.a.sm,_.a.lg),G=Object(i.c)(o.c).withConfig({displayName:"Hero__ButtonStyled",componentId:"sc-vrh4li-2"})(["margin-right:10px;"]),H=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(T,{hero:!0,className:"position-relative"},n.a.createElement(c.a,null,n.a.createElement(s.a,{className:"align-items-center"},n.a.createElement(m.a,{lg:"5",md:"8",sm:"9"},n.a.createElement("div",{className:"text-center text-lg-right position-relative"},n.a.createElement("div",{className:"img-main"},n.a.createElement(C,{src:D.a,alt:""})))),n.a.createElement(m.a,{lg:"7",className:"mb-5 mb-lg-0"},n.a.createElement(o.a,{pl:[0,null,null,"3.125rem"]},n.a.createElement(o.j,{mb:"2rem"},"Engineer // Photographer"),n.a.createElement(L,{mb:"2.5rem"},"Lover of good code, good processes and good stories.",n.a.createElement("br",null),"Based in Italy."),n.a.createElement(o.a,null,n.a.createElement("a",{href:"https://www.twitter.com/lorenzomattei",target:"_blank",rel:"noreferrer"},n.a.createElement(G,null,n.a.createElement(k,{icon:I.d,size:"2x"}))),n.a.createElement("a",{href:"https://github.com/loremattei",target:"_blank",rel:"noreferrer"},n.a.createElement(G,null,n.a.createElement(k,{icon:I.b,size:"2x"}))),n.a.createElement("a",{href:"https://www.facebook.com/LorenzoMatteiPhotographer",target:"_blank",rel:"noreferrer"},n.a.createElement(G,null,n.a.createElement(k,{icon:I.a,size:"2x"}))),n.a.createElement("a",{href:"https://www.instagram.com/loremattei/",target:"_blank",rel:"noreferrer"},n.a.createElement(G,null,n.a.createElement(k,{icon:I.c,size:"2x"}))),n.a.createElement("a",{href:"https://foundation.app/@loremattei",target:"_blank",rel:"noreferrer"},n.a.createElement(o.c,null,n.a.createElement(k,{icon:P.a,size:"2x"}))))))))))},L=Object(i.c)(o.h).withConfig({displayName:"Hero___StyledText",componentId:"sc-vrh4li-3"})(["line-height:1.5;"]),R=Object(i.c)(o.f).withConfig({displayName:"MainLinks__NoTopPaddingSection",componentId:"sc-uvi7r4-0"})(["padding-top:0px;"]),F=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(R,{className:"position-relative"},n.a.createElement(c.a,null,n.a.createElement(s.a,{className:"justify-content-center align-items-center"},n.a.createElement(m.a,{lg:"11",xl:"10",className:"text-center"},n.a.createElement(o.a,null,n.a.createElement(o.a,{className:"text-center d-flex justify-content-center",mt:["3rem",null,"4rem"]},n.a.createElement("div",{className:"d-flex flex-column flex-lg-row justify-content-center"},n.a.createElement(o.e,{href:"/#",target:"_blank",className:"mb-2 mb-lg-0"},"ENGINEERING BLOG"),n.a.createElement("span",{className:"divider mx-2 mx-lg-4 d-none d-lg-block"},"|"),n.a.createElement(o.e,{href:"https://www.lorenzomattei.com",target:"_blank"},"PHOTOGRAPHY STUDIO")))))))))};t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{darkTheme:!0},n.a.createElement(o.a,null,n.a.createElement(H,null),n.a.createElement(F,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9199f9463c2167135b7f.js.map