(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Rz96:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=t("jn67");function i(l,n){var t="string"==typeof n?n:n.find(function(n){return l.hasOwnProperty(n.toLowerCase())});return void 0===t?void 0:l[t.toLowerCase()]}function o(l,n){return void 0===n&&(n=!1),void 0===l?n:"false"!==l.trim()}var r=e.a+"live-examples/",a=e.a+"zips/",b=function(){function l(l,n){var t=function(n){for(var t={},e=0,i=l instanceof u.k?l.nativeElement.attributes:l.attributes;e<i.length;e++){var o=i[e];t[o.name.toLowerCase()]=o.value}return t}(),e=this.getExampleDir(t,n.path(!1)),i=this.getStackblitzName(t);this.mode=this.getMode(t),this.enableDownload=this.getEnableDownload(t),this.stackblitz=this.getStackblitz(e,i,"embedded"===this.mode),this.zip=this.getZip(e,i),this.title=this.getTitle(t)}return l.prototype.ngAfterContentInit=function(){var l=this.content.nativeElement.textContent.trim();l&&(this.title=l)},l.prototype.getEnableDownload=function(l){return!o(i(l,"noDownload"))},l.prototype.getExampleDir=function(l,n){var t=i(l,"name");if(!t){var u=n.match(/[^\/?#]+(?=\/?(?:\?|#|$))/);t=u?u[0]:"index"}return t.trim()},l.prototype.getMode=function(l){var n=o(i(l,"downloadOnly")),t=o(i(l,"embedded"));return n?"downloadOnly":t?"embedded":"default"},l.prototype.getStackblitz=function(l,n,t){return""+r+l+"/"+n+"stackblitz.html"+(t?"?ctl=1":"")},l.prototype.getStackblitzName=function(l){var n=(i(l,"stackblitz")||"").trim();return n&&n+"."},l.prototype.getTitle=function(l){return(i(l,"title")||"\u5728\u7ebf\u4f8b\u5b50").trim()},l.prototype.getZip=function(l,n){var t=l.split("/")[0];return""+a+l+"/"+n+t+".zip"},l}(),c=function(){function l(){}return l.prototype.ngAfterViewInit=function(){this.iframe&&(this.iframe.nativeElement.src=this.src)},l}(),p=function(){return function(){this.customElementComponent=b}}(),s=t("Ip0R"),f=u.pb({encapsulation:2,styles:[],data:{}});function d(l){return u.Jb(0,[(l()(),u.rb(0,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Hb(-1,null,[" \u4f60\u8fd8\u53ef\u4ee5 "])),(l()(),u.rb(2,0,null,null,1,"a",[["download",""],["title","\u4e0b\u8f7d\u8303\u4f8b"]],[[8,"href",4]],null,null,null,null)),(l()(),u.Hb(-1,null,["\u4e0b\u8f7d\u8fd9\u4e2a\u4f8b\u5b50"])),(l()(),u.Hb(-1,null,["\u3002 "]))],null,function(l,n){l(n,2,0,n.component.zip)})}function m(l){return u.Jb(0,[(l()(),u.rb(0,0,null,null,5,"span",[],null,null,null,null,null)),(l()(),u.rb(1,0,null,null,2,"div",[],[[8,"title",0]],null,null,null,null)),(l()(),u.rb(2,0,null,null,1,"aio-embedded-stackblitz",[],null,null,null,C,k)),u.qb(3,4243456,null,0,c,[],{src:[0,"src"]},null),(l()(),u.hb(16777216,null,null,1,null,d)),u.qb(5,16384,null,0,s.k,[u.R,u.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,3,0,t.stackblitz),l(n,5,0,t.enableDownload)},function(l,n){l(n,1,0,u.tb(1,"",n.component.title,""))})}function h(l){return u.Jb(0,[(l()(),u.rb(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u.rb(1,0,null,null,1,"a",[["download",""]],[[8,"href",4],[8,"title",0]],null,null,null,null)),(l()(),u.Hb(2,null,["",""]))],null,function(l,n){var t=n.component;l(n,1,0,t.zip,u.tb(1,"",t.title,"")),l(n,2,0,t.title)})}function g(l){return u.Jb(0,[(l()(),u.rb(0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),u.Hb(-1,null,[" / "])),(l()(),u.rb(2,0,null,null,1,"a",[["download",""],["title","\u4e0b\u8f7d\u8303\u4f8b"]],[[8,"href",4]],null,null,null,null)),(l()(),u.Hb(-1,null,["\u4e0b\u8f7d\u8303\u4f8b"]))],null,function(l,n){l(n,2,0,n.component.zip)})}function v(l){return u.Jb(0,[(l()(),u.rb(0,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),u.rb(1,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4],[8,"title",0]],null,null,null,null)),(l()(),u.Hb(2,null,["",""])),(l()(),u.hb(16777216,null,null,1,null,g)),u.qb(4,16384,null,0,s.k,[u.R,u.O],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,4,0,n.component.enableDownload)},function(l,n){var t=n.component;l(n,1,0,t.stackblitz,u.tb(1,"",t.title,"")),l(n,2,0,t.title)})}function w(l){return u.Jb(0,[u.Fb(402653184,1,{content:0}),(l()(),u.rb(1,0,[[1,0],["content",1]],null,1,"span",[["style","display: none"]],null,null,null,null,null)),u.Ab(null,0),(l()(),u.rb(3,0,null,null,7,"span",[],null,null,null,null,null)),u.qb(4,16384,null,0,s.o,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),u.hb(16777216,null,null,1,null,m)),u.qb(6,278528,null,0,s.p,[u.R,u.O,s.o],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),u.hb(16777216,null,null,1,null,h)),u.qb(8,278528,null,0,s.p,[u.R,u.O,s.o],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),u.hb(16777216,null,null,1,null,v)),u.qb(10,16384,null,0,s.q,[u.R,u.O,s.o],null,null)],function(l,n){l(n,4,0,n.component.mode),l(n,6,0,"embedded"),l(n,8,0,"downloadOnly")},null)}function y(l){return u.Jb(0,[(l()(),u.rb(0,0,null,null,1,"live-example",[],null,null,null,w,f)),u.qb(1,1097728,null,0,b,[u.k,s.g],null,null)],null,null)}var z=u.nb("live-example",b,y,{},{},["*"]),k=u.pb({encapsulation:0,styles:["iframe[_ngcontent-%COMP%] { min-height: 400px; }"],data:{}});function C(l){return u.Jb(0,[u.Fb(402653184,1,{iframe:0}),(l()(),u.rb(1,0,[[1,0],["iframe",1]],null,0,"iframe",[["frameborder","0"],["height","100%"],["width","100%"]],null,null,null,null,null))],null,null)}t.d(n,"LiveExampleModuleNgFactory",function(){return J});var J=u.ob(p,[],function(l){return u.yb([u.zb(512,u.j,u.cb,[[8,[z]],[3,u.j],u.y]),u.zb(4608,s.m,s.l,[u.v,[2,s.B]]),u.zb(1073742336,s.c,s.c,[]),u.zb(1073742336,p,p,[])])})}}]);
//# sourceMappingURL=live-example-live-example-module-ngfactory-es5.ff5a1d147f9bbc70c5df.js.map