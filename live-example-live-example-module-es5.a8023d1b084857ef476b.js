function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{m7ka:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),a=n("jn67"),c=n("fXoL");function r(t,e){var n="string"==typeof e?e:e.find((function(e){return t.hasOwnProperty(e.toLowerCase())}));return void 0===n?void 0:t[n.toLowerCase()]}function o(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===t?e:"false"!==t.trim()}var l=["content"];function s(t,e){if(1&t&&(c.Vb(0,"p"),c.Ec(1," \u4f60\u8fd8\u53ef\u4ee5 "),c.Vb(2,"a",8),c.Ec(3,"\u4e0b\u8f7d\u8fd9\u4e2a\u4f8b\u5b50"),c.Ub(),c.Ec(4,"\u3002 "),c.Ub()),2&t){var n=c.hc(2);c.Cb(2),c.mc("href",n.zip,c.xc)}}function f(t,e){if(1&t&&(c.Vb(0,"span"),c.Vb(1,"div",5),c.Rb(2,"aio-embedded-stackblitz",6),c.Ub(),c.Cc(3,s,5,1,"p",7),c.Ub()),2&t){var n=c.hc();c.Cb(1),c.nc("title",n.title),c.Cb(1),c.mc("src",n.stackblitz),c.Cb(1),c.mc("ngIf",n.enableDownload)}}function u(t,e){if(1&t&&(c.Vb(0,"span"),c.Vb(1,"a",9),c.Ec(2),c.Ub(),c.Ub()),2&t){var n=c.hc();c.Cb(1),c.nc("title",n.title),c.mc("href",n.zip,c.xc),c.Cb(1),c.Fc(n.title)}}function b(t,e){if(1&t&&(c.Vb(0,"span"),c.Ec(1," / "),c.Vb(2,"a",8),c.Ec(3,"\u4e0b\u8f7d\u8303\u4f8b"),c.Ub(),c.Ub()),2&t){var n=c.hc(2);c.Cb(2),c.mc("href",n.zip,c.xc)}}function d(t,e){if(1&t&&(c.Vb(0,"span"),c.Vb(1,"a",10),c.Ec(2),c.Ub(),c.Cc(3,b,4,1,"span",7),c.Ub()),2&t){var n=c.hc();c.Cb(1),c.nc("title",n.title),c.mc("href",n.stackblitz,c.xc),c.Cb(1),c.Fc(n.title),c.Cb(1),c.mc("ngIf",n.enableDownload)}}var m,h,p=["*"],v=["iframe"],C=a.a+"live-examples/",w=a.a+"zips/",g=((h=function(){function t(e,n){_classCallCheck(this,t);var i=function(t){var e=t instanceof c.l?t.nativeElement.attributes:t.attributes,n={},i=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var s=o.value;n[s.name.toLowerCase()]=s.value}}catch(f){a=!0,r=f}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}return n}(e),a=this.getExampleDir(i,n.path(!1)),r=this.getStackblitzName(i);this.mode=this.getMode(i),this.enableDownload=this.getEnableDownload(i),this.stackblitz=this.getStackblitz(a,r,"embedded"===this.mode),this.zip=this.getZip(a,r),this.title=this.getTitle(i)}return _createClass(t,[{key:"ngAfterContentInit",value:function(){var t=this.content.nativeElement.textContent.trim();t&&(this.title=t)}},{key:"getEnableDownload",value:function(t){return!o(r(t,"noDownload"))}},{key:"getExampleDir",value:function(t,e){var n=r(t,"name");if(!n){var i=e.match(/[^/?#]+(?=\/?(?:\?|#|$))/);n=i?i[0]:"index"}return n.trim()}},{key:"getMode",value:function(t){var e=o(r(t,"downloadOnly")),n=o(r(t,"embedded"));return e?"downloadOnly":n?"embedded":"default"}},{key:"getStackblitz",value:function(t,e,n){return"".concat(C).concat(t,"/").concat(e,"stackblitz.html").concat(n?"?ctl=1":"")}},{key:"getStackblitzName",value:function(t){var e=(r(t,"stackblitz")||"").trim();return e&&"".concat(e,".")}},{key:"getTitle",value:function(t){return(r(t,"title")||"\u5728\u7ebf\u4f8b\u5b50").trim()}},{key:"getZip",value:function(t,e){var n=t.split("/")[0];return"".concat(w).concat(t,"/").concat(e).concat(n,".zip")}}]),t}()).\u0275fac=function(t){return new(t||h)(c.Qb(c.l),c.Qb(i.g))},h.\u0275cmp=c.Kb({type:h,selectors:[["live-example"]],viewQuery:function(t,e){var n;1&t&&c.Ac(l,!0),2&t&&c.rc(n=c.ec())&&(e.content=n.first)},ngContentSelectors:p,decls:7,vars:3,consts:[[2,"display","none"],["content",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"title"],[3,"src"],[4,"ngIf"],["download","","title","\u4e0b\u8f7d\u8303\u4f8b",3,"href"],["download","",3,"href","title"],["target","_blank",3,"href","title"]],template:function(t,e){1&t&&(c.lc(),c.Vb(0,"span",0,1),c.kc(2),c.Ub(),c.Vb(3,"span",2),c.Cc(4,f,4,3,"span",3),c.Cc(5,u,3,3,"span",3),c.Cc(6,d,4,4,"span",4),c.Ub()),2&t&&(c.Cb(3),c.mc("ngSwitch",e.mode),c.Cb(1),c.mc("ngSwitchCase","embedded"),c.Cb(1),c.mc("ngSwitchCase","downloadOnly"))},directives:function(){return[i.k,i.l,i.m,k,i.j]},encapsulation:2}),h),k=((m=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngAfterViewInit",value:function(){this.iframe&&(this.iframe.nativeElement.src=this.src)}}]),t}()).\u0275fac=function(t){return new(t||m)},m.\u0275cmp=c.Kb({type:m,selectors:[["aio-embedded-stackblitz"]],viewQuery:function(t,e){var n;1&t&&c.Ac(v,!0),2&t&&c.rc(n=c.ec())&&(e.iframe=n.first)},inputs:{src:"src"},decls:2,vars:0,consts:[["frameborder","0","width","100%","height","100%"],["iframe",""]],template:function(t,e){1&t&&c.Rb(0,"iframe",0,1)},styles:["iframe[_ngcontent-%COMP%] { min-height: 400px; }"]}),m);n.d(e,"LiveExampleModule",(function(){return z}));var y,z=((y=function t(){_classCallCheck(this,t),this.customElementComponent=g}).\u0275mod=c.Ob({type:y}),y.\u0275inj=c.Nb({factory:function(t){return new(t||y)},imports:[[i.c]]}),y)}}]);
//# sourceMappingURL=live-example-live-example-module-es5.a8023d1b084857ef476b.js.map