(this["webpackJsonpPluginipotseluev-fast-order"]=this["webpackJsonpPluginipotseluev-fast-order"]||[]).push([[4],{"6fZr":function(e,r,s){"use strict";s.r(r);s("jglP"),r.default={template:'\n{% block sw_cms_element_fast_order_preview %}\n<div class="sw-cms-el-preview-fast-order">\n    <p class="sw-cms-el-preview-fast-order__price">\n        0,00 €\n    </p>\n\n    <div class="sw-cms-el-preview-fast-order__placeholders">\n        <div class="sw-cms-el-preview-fast-order__placeholder"></div>\n        <div class="sw-cms-el-preview-fast-order__placeholder"></div>\n        <div class="sw-cms-el-preview-fast-order__placeholder"></div>\n        <div class="sw-cms-el-preview-fast-order__placeholder"></div>\n    </div>\n\n    <div class="sw-cms-el-preview-fast-order__placeholder"></div>\n    <div class="sw-cms-el-preview-fast-order__placeholder"></div>\n\n    <div class="sw-cms-el-preview-fast-order__action">\n        Fast Order\n    </div>\n</div>\n{% endblock %}\n'}},P8hj:function(e,r,s){"use strict";function t(e,r){for(var s=[],t={},n=0;n<r.length;n++){var a=r[n],i=a[0],o={id:e+":"+n,css:a[1],media:a[2],sourceMap:a[3]};t[i]?t[i].parts.push(o):s.push(t[i]={id:i,parts:[o]})}return s}s.r(r),s.d(r,"default",(function(){return v}));var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=n&&(document.head||document.getElementsByTagName("head")[0]),o=null,d=0,l=!1,c=function(){},p=null,u="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,r,s,n){l=s,p=n||{};var i=t(e,r);return h(i),function(r){for(var s=[],n=0;n<i.length;n++){var o=i[n];(d=a[o.id]).refs--,s.push(d)}r?h(i=t(e,r)):i=[];for(n=0;n<s.length;n++){var d;if(0===(d=s[n]).refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete a[d.id]}}}}function h(e){for(var r=0;r<e.length;r++){var s=e[r],t=a[s.id];if(t){t.refs++;for(var n=0;n<t.parts.length;n++)t.parts[n](s.parts[n]);for(;n<s.parts.length;n++)t.parts.push(g(s.parts[n]));t.parts.length>s.parts.length&&(t.parts.length=s.parts.length)}else{var i=[];for(n=0;n<s.parts.length;n++)i.push(g(s.parts[n]));a[s.id]={id:s.id,refs:1,parts:i}}}}function m(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function g(e){var r,s,t=document.querySelector("style["+u+'~="'+e.id+'"]');if(t){if(l)return c;t.parentNode.removeChild(t)}if(f){var n=d++;t=o||(o=m()),r=b.bind(null,t,n,!1),s=b.bind(null,t,n,!0)}else t=m(),r=y.bind(null,t),s=function(){t.parentNode.removeChild(t)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}var w,_=(w=[],function(e,r){return w[e]=r,w.filter(Boolean).join("\n")});function b(e,r,s,t){var n=s?"":t.css;if(e.styleSheet)e.styleSheet.cssText=_(r,n);else{var a=document.createTextNode(n),i=e.childNodes;i[r]&&e.removeChild(i[r]),i.length?e.insertBefore(a,i[r]):e.appendChild(a)}}function y(e,r){var s=r.css,t=r.media,n=r.sourceMap;if(t&&e.setAttribute("media",t),p.ssrId&&e.setAttribute(u,r.id),n&&(s+="\n/*# sourceURL="+n.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}},jglP:function(e,r,s){var t=s("phbM");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,s("P8hj").default)("1df11993",t,!0,{})},phbM:function(e,r,s){}}]);
//# sourceMappingURL=4.js.map