function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{fPy6:function(t,n,e){"use strict";e.r(n);var r,c=e("ofXK"),o=e("NFeN"),i=e("fXoL"),s=e("lJxs"),a=e("qZ0a"),u=e("jn67"),b=e("tk/3"),p=u.a+"contributors.json",f=["Angular","Collaborators","GDE"],l=((r=function(){function t(n){_classCallCheck(this,t),this.http=n,this.contributors=this.getContributors()}return _createClass(t,[{key:"getContributors",value:function(){var t=this.http.get(p).pipe(Object(s.a)((function(t){var n={};return Object.keys(t).forEach((function(e){var r=t[e];r.groups.forEach((function(t){(n[t]||(n[t]=[])).push(r)}))})),n})),Object(s.a)((function(t){return Object.keys(t).map((function(n){var e=f.indexOf(n);return{name:n,order:-1===e?f.length:e,contributors:t[n].sort(d)}})).sort(v)})),Object(a.a)());return t.connect(),t}}]),t}()).\u0275fac=function(t){return new(t||r)(i.Zb(b.a))},r.\u0275prov=i.Mb({token:r,factory:r.\u0275fac}),r);function d(t,n){return t.name.toUpperCase()>n.name.toUpperCase()?1:-1}function v(t,n){return t.order===n.order?t.name>n.name?1:-1:t.order>n.order?1:-1}var m=e("/lUL");function h(t,n){1&t&&(i.Vb(0,"a",7),i.Ec(1," View Bio "),i.Ub())}function C(t,n){if(1&t){var e=i.Wb();i.Vb(0,"a",8),i.dc("click",(function(t){return i.vc(e),t.stopPropagation()})),i.Rb(1,"mat-icon",9),i.Ub()}if(2&t){var r=i.hc();i.oc("href","https://twitter.com/",r.person.twitter,"",i.xc)}}function g(t,n){if(1&t){var e=i.Wb();i.Vb(0,"a",8),i.dc("click",(function(t){return i.vc(e),t.stopPropagation()})),i.Vb(1,"mat-icon",10),i.Ec(2,"link"),i.Ub(),i.Ub()}if(2&t){var r=i.hc();i.nc("href",r.person.website,i.xc)}}function k(t,n){if(1&t){var e=i.Wb();i.Vb(0,"div",11),i.dc("click",(function(t){i.vc(e);var n=i.hc();return n.flipCard(n.person)}))("keyup.enter",(function(t){i.vc(e);var n=i.hc();return n.flipCard(n.person)})),i.Vb(1,"h3"),i.Ec(2),i.Ub(),i.Vb(3,"p",12),i.Ec(4),i.Ub(),i.Ub()}if(2&t){var r=i.hc();i.Cb(2),i.Fc(r.person.name),i.Cb(2),i.Fc(r.person.bio)}}var y,w=function(t){return{flipped:t}},U=((y=function(){function t(){_classCallCheck(this,t),this.noPicture="_no-one.png",this.pictureBase=u.a+"images/bios/"}return _createClass(t,[{key:"flipCard",value:function(t){t.isFlipped=!t.isFlipped}}]),t}()).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=i.Kb({type:y,selectors:[["aio-contributor"]],inputs:{person:"person"},decls:10,vars:10,consts:[[1,"contributor-card",3,"ngClass"],[1,"card-front",3,"click","keyup.enter"],[1,"contributor-image"],[1,"contributor-info"],["mat-button","","class","info-item",4,"ngIf"],["mat-icon-button","","class","info-item icon","target","_blank",3,"href","click",4,"ngIf"],["class","card-back",3,"click","keyup.enter",4,"ngIf"],["mat-button","",1,"info-item"],["mat-icon-button","","target","_blank",1,"info-item","icon",3,"href","click"],["svgIcon","logos:twitter"],[1,"link-icon"],[1,"card-back",3,"click","keyup.enter"],[1,"contributor-bio"]],template:function(t,n){1&t&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.dc("click",(function(t){return n.flipCard(n.person)}))("keyup.enter",(function(t){return n.flipCard(n.person)})),i.Vb(2,"h3"),i.Ec(3),i.Ub(),i.Vb(4,"div",2),i.Vb(5,"div",3),i.Cc(6,h,2,0,"a",4),i.Cc(7,C,2,1,"a",5),i.Cc(8,g,3,1,"a",5),i.Ub(),i.Ub(),i.Ub(),i.Cc(9,k,5,2,"div",6),i.Ub()),2&t&&(i.mc("ngClass",i.pc(8,w,n.person.isFlipped)),i.Cb(3),i.Fc(n.person.name),i.Cb(1),i.Bc("background-image","url("+n.pictureBase+(n.person.picture||n.noPicture)+")",i.Jb),i.Cb(2),i.mc("ngIf",n.person.bio),i.Cb(1),i.mc("ngIf",n.person.twitter),i.Cb(1),i.mc("ngIf",n.person.website),i.Cb(1),i.mc("ngIf",n.person.isFlipped))},directives:[c.s,c.j,o.a],encapsulation:2}),y);function V(t,n){if(1&t){var e=i.Wb();i.Vb(0,"a",3),i.dc("click",(function(t){i.vc(e);var r=n.$implicit;return i.hc().selectGroup(r)}))("keyup.enter",(function(t){i.vc(e);var r=n.$implicit;return i.hc().selectGroup(r)})),i.Ec(1),i.Ub()}if(2&t){var r=n.$implicit,c=i.hc();i.Gb("selected",r==c.selectedGroup.name),i.Cb(1),i.Fc(r)}}function F(t,n){1&t&&i.Rb(0,"aio-contributor",7),2&t&&i.mc("person",n.$implicit)}function _(t,n){if(1&t&&(i.Vb(0,"section",4),i.Vb(1,"div",5),i.Cc(2,F,1,1,"aio-contributor",6),i.Ub(),i.Ub()),2&t){var e=i.hc();i.Cb(2),i.mc("ngForOf",e.selectedGroup.contributors)}}var O,j=((O=function(){function t(n,e){_classCallCheck(this,t),this.contributorService=n,this.locationService=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this,n=this.locationService.search().group||"";this.contributorService.contributors.subscribe((function(e){t.groups=e,t.groupNames=e.map((function(t){return t.name})),t.selectGroup(n)}))}},{key:"selectGroup",value:function(t){t=t.toLowerCase(),this.selectedGroup=this.groups.find((function(n){return n.name.toLowerCase()===t}))||this.groups[0],this.locationService.setSearch("",{group:this.selectedGroup.name})}}]),t}()).\u0275fac=function(t){return new(t||O)(i.Qb(l),i.Qb(m.a))},O.\u0275cmp=i.Kb({type:O,selectors:[["aio-contributor-list"]],decls:3,vars:2,consts:[[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click","keyup.enter",4,"ngFor","ngForOf"],["class","grid-fluid",4,"ngIf"],[1,"button","mat-button","filter-button",3,"click","keyup.enter"],[1,"grid-fluid"],[1,"contributor-group"],[3,"person",4,"ngFor","ngForOf"],[3,"person"]],template:function(t,n){1&t&&(i.Vb(0,"div",0),i.Cc(1,V,2,3,"a",1),i.Ub(),i.Cc(2,_,3,1,"section",2)),2&t&&(i.Cb(1),i.mc("ngForOf",n.groupNames),i.Cb(1),i.mc("ngIf",n.selectedGroup))},directives:[c.i,c.j,U],encapsulation:2}),O);e.d(n,"ContributorListModule",(function(){return G}));var E,G=((E=function t(){_classCallCheck(this,t),this.customElementComponent=j}).\u0275mod=i.Ob({type:E}),E.\u0275inj=i.Nb({factory:function(t){return new(t||E)},providers:[l],imports:[[c.c,o.b]]}),E)}}]);
//# sourceMappingURL=contributor-contributor-list-module-es5.bdaa791bdcbca8b2f1fc.js.map