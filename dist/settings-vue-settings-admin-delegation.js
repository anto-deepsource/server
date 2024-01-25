/*! For license information please see settings-vue-settings-admin-delegation.js.LICENSE.txt */
(()=>{"use strict";var e,r,n,s={16404:(e,r,n)=>{var s=n(20144),o=n(77723),a=n(79753),i=n(93664),l=n(64024);const c=(0,n(17499).IY)().setApp("settings").detectUser().build(),u={name:"GroupSelect",components:{NcSelect:o.Z},props:{availableGroups:{type:Array,default:()=>[]},setting:{type:Object,required:!0},authorizedGroups:{type:Array,required:!0}},data(){return{selected:this.authorizedGroups.filter((e=>e.class===this.setting.class)).map((e=>this.availableGroups.find((t=>t.gid===e.group_id)))).filter((e=>void 0!==e))}},watch:{selected(){this.saveGroups()}},methods:{async saveGroups(){const e={newGroups:this.selected,class:this.setting.class};try{await i.Z.post((0,a.generateUrl)("/apps/settings/")+"/settings/authorizedgroups/saveSettings",e)}catch(e){(0,l.x2)(t("settings","Unable to modify setting")),c.error("Unable to modify setting",e)}}}};var d=n(93379),p=n.n(d),g=n(7795),v=n.n(g),f=n(90569),h=n.n(f),b=n(3565),m=n.n(b),A=n(19216),y=n.n(A),S=n(44589),w=n.n(S),C=n(44754),k={};k.styleTagTransform=w(),k.setAttributes=m(),k.insert=h().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=y(),p()(C.Z,k),C.Z&&C.Z.locals&&C.Z.locals;var x=n(51900);const j=(0,x.Z)(u,(function(){var e=this;return(0,e._self._c)("NcSelect",{staticClass:"group-select",attrs:{"input-id":e.setting.id,placeholder:e.t("settings","None"),label:"displayName",options:e.availableGroups,multiple:!0,"close-on-select":!1},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})}),[],!1,null,null,null).exports;var O=n(90580),G=n(43554);const Z={name:"AdminDelegating",components:{GroupSelect:j,NcSettingsSection:O.Z},data:()=>({availableSettings:(0,G.j)("settings","available-settings"),availableGroups:(0,G.j)("settings","available-groups"),authorizedGroups:(0,G.j)("settings","authorized-groups"),authorizedSettingsDocLink:(0,G.j)("settings","authorized-settings-doc-link")})};var _=n(20940),z={};z.styleTagTransform=w(),z.setAttributes=m(),z.insert=h().bind(null,"head"),z.domAPI=v(),z.insertStyleElement=y(),p()(_.Z,z),_.Z&&_.Z.locals&&_.Z.locals;const T=(0,x.Z)(Z,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{name:e.t("settings","Administration privileges"),description:e.t("settings","Here you can decide which group can access certain sections of the administration settings."),"doc-url":e.authorizedSettingsDocLink}},[t("div",{staticClass:"setting-list"},e._l(e.availableSettings,(function(r){return t("div",{key:r.class},[t("label",{attrs:{for:r.id}},[e._v(e._s(r.sectionName))]),e._v(" "),t("GroupSelect",{attrs:{"available-groups":e.availableGroups,"authorized-groups":e.authorizedGroups,setting:r}})],1)})),0)])}),[],!1,null,"6afb59d5",null).exports;s.default.prototype.OC=OC,s.default.prototype.t=t,(new(s.default.extend(T))).$mount("#admin-right-sub-granting")},20940:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(87537),s=r.n(n),o=r(23645),a=r.n(o)()(s());a.push([e.id,"label[data-v-6afb59d5]{display:block;font-size:16px;margin:12px 0;color:var(--color-text-light)}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegating.vue"],names:[],mappings:"AACA,uBACC,aAAA,CACA,cAAA,CACA,aAAA,CACA,6BAAA",sourcesContent:["\nlabel {\n\tdisplay: block;\n\tfont-size: 16px;\n\tmargin: 12px 0;\n\tcolor: var(--color-text-light);\n}\n"],sourceRoot:""}]);const i=a},44754:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(87537),s=r.n(n),o=r(23645),a=r.n(o)()(s());a.push([e.id,".group-select{width:100%}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegation/GroupSelect.vue"],names:[],mappings:"AACA,cACC,UAAA",sourcesContent:["\n.group-select {\n\twidth: 100%;\n}\n"],sourceRoot:""}]);const i=a}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return s[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=s,e=[],a.O=(t,r,n,s)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],s=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{1215:"1fa35fdbff5962915919",5076:"15b21454a9691213632e"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="nextcloud:",a.l=(e,t,s,o)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+s){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",n+s),i.src=e),r[e]=[t];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(g);var s=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((e=>e(n))),t)return t(n)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=6638,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={6638:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise(((r,s)=>n=e[t]=[r,s]));r.push(n[2]=s);var o=a.p+a.u(t),i=new Error;a.l(o,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,n[1](i)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,o=r[0],i=r[1],l=r[2],c=0;if(o.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(t&&t(r);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var i=a.O(void 0,[7874],(()=>a(16404)));i=a.O(i)})();
//# sourceMappingURL=settings-vue-settings-admin-delegation.js.map?v=d07b48bfeb52c6e9ee5b