!function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={44:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://codesandbox.io/";var s=this.csbJsonP=this.csbJsonP||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push(["./src/sandbox/startup.js",7]),n()}({"../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":function(e,t){function n(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,c,"next",e)}function c(e){n(a,o,i,s,c,"throw",e)}s(void 0)})}}},"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"../../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(e,t,n){var r=l;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=$(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}e.wrap=c;var l="suspendedStart",d="suspendedYield",f="executing",p="completed",h={};function v(){}function m(){}function w(){}var g={};g[i]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(k([])));b&&b!==n&&r.call(b,i)&&(g=b);var x=w.prototype=v.prototype=Object.create(g);function j(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function _(e){var t;this._invoke=function(n,o){function i(){return new Promise(function(t,i){!function t(n,o,i,a){var s=u(e[n],e,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(l).then(function(e){c.value=e,i(c)},function(e){return t("throw",e,i,a)})}a(s.arg)}(n,o,t,i)})}return t=t?t.then(i,i):i()}}function $(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,$(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function k(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:t,done:!0}}return m.prototype=x.constructor=w,w.constructor=m,w[s]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},j(_.prototype),_.prototype[a]=function(){return this},e.AsyncIterator=_,e.async=function(t,n,r,o){var i=new _(c(t,n,r,o));return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},j(x),x[s]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:k(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},"../../node_modules/@babel/runtime/regenerator/index.js":function(e,t,n){e.exports=n("../../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js")},"../../node_modules/worker-loader/dist/cjs.js?publicPath=/&name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.js":function(e,t){e.exports=function(){return new Worker("/babel-transpiler.f5934c57.worker.js")}},"../codesandbox-api/dist/codesandbox.es5.js":function(e,t,n){"use strict";n.r(t),n.d(t,"Protocol",function(){return d}),n.d(t,"transformError",function(){return o}),n.d(t,"clearErrorTransformers",function(){return i}),n.d(t,"registerErrorTransformer",function(){return a}),n.d(t,"actions",function(){return m}),n.d(t,"isStandalone",function(){return b}),n.d(t,"intializedPromise",function(){return x}),n.d(t,"resetState",function(){return $}),n.d(t,"dispatch",function(){return E}),n.d(t,"listen",function(){return k}),n.d(t,"notifyListeners",function(){return O}),n.d(t,"registerFrame",function(){return U}),n.d(t,"reattach",function(){return M});var r=[];function o(e,t,n){return r.map(function(r){return r(e,t,n)}).filter(function(e){return null!=e})[0]}function i(){r.length=0}function a(e){r.push(e)}var s=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},c=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},u=function(){return Math.floor(1e6*Math.random()+1e6*Math.random())},l=function(e){try{return e.constructor.name}catch(t){return""}},d=function(){function e(e,t,n){var r=this;this.type=e,this.handleMessage=t,this.target=n,this.outgoingMessages=new Set,this._messageListener=function(e){return s(r,void 0,void 0,function(){var t,n,r;return c(this,function(o){switch(o.label){case 0:return(t=e.data).$type!==this.getTypeId()?[2]:this.outgoingMessages.has(t.$id)?[2]:[4,this.handleMessage(t.$data)];case 1:return n=o.sent(),r={$originId:this.internalId,$type:this.getTypeId(),$data:n,$id:t.$id},e.source?e.source.postMessage(r,"*"):this._postMessage(r),[2]}})})},this.createConnection(),this.internalId=u(),this.isWorker="Worker"===l(n)}return e.prototype.getTypeId=function(){return"p-"+this.type},e.prototype.createConnection=function(){self.addEventListener("message",this._messageListener)},e.prototype.dispose=function(){self.removeEventListener("message",this._messageListener)},e.prototype.sendMessage=function(e){var t=this;return new Promise(function(n){var r=u(),o={$originId:t.internalId,$type:t.getTypeId(),$data:e,$id:r};t.outgoingMessages.add(r);var i=function(e){var o=e.data;o.$type===t.getTypeId()&&o.$id===r&&o.$originId!==t.internalId&&(n(o.$data),self.removeEventListener("message",i))};self.addEventListener("message",i),t._postMessage(o)})},e.prototype._postMessage=function(e){this.isWorker||"undefined"!==typeof DedicatedWorkerGlobalScope&&this.target instanceof DedicatedWorkerGlobalScope?this.target.postMessage(e):this.target.postMessage(e,"*")},e}();var f=Object.freeze({show:function(e,t,n){return void 0===t&&(t="notice"),void 0===n&&(n=2),{type:"action",action:"notification",title:e,notificationType:t,timeAlive:n}}});var p=Object.freeze({openModule:function(e,t,n){return{type:"action",action:"editor.open-module",path:e,lineNumber:t,column:n}}});var h=Object.freeze({add:function(e){return{type:"action",action:"source.dependencies.add",dependency:e}}}),v=Object.freeze({rename:function(e,t){return{type:"action",action:"source.module.rename",path:e,title:t}}});var m={notifications:f,editor:p,source:Object.freeze({dependencies:h,modules:v}),error:Object.freeze({show:function(e,t,n){var r=n.line,o=n.column,i=n.lineEnd,a=n.columnEnd;return{title:e,message:t,line:r,column:o,path:n.path,payload:n.payload,lineEnd:i,columnEnd:a,severity:"error",type:"action",action:"show-error",source:n.source||"browser"}},clear:function(e,t){return{type:"action",action:"clear-errors",path:e,source:t}}}),correction:Object.freeze({show:function(e,t){var n=void 0===t?{path:"",severity:"warning",source:""}:t,r=n.line,o=n.column,i=n.lineEnd,a=n.columnEnd,s=n.path,c=n.payload,u=n.severity,l=void 0===u?"warning":u,d=n.source;return{message:e,line:r,column:o,lineEnd:i,columnEnd:a,path:s,payload:c,severity:l,source:void 0===d?"":d,type:"action",action:"show-correction"}},clear:function(e,t){return{type:"action",action:"clear-corrections",path:e,source:t}}}),glyph:Object.freeze({show:function(e){return{line:e.line,path:e.path,className:e.className,type:"action",action:"show-glyph"}}})},w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},g=new Map;var y,b="undefined"===typeof window||!!(window.location&&window.location.href.indexOf("?standalone")>-1)||!window.opener&&window.parent===window,x=new Promise(function(e){y=e}),j=null,_=function(e){"register-frame"===e.data.type&&(j=e.data.origin,y&&y(),self.removeEventListener("message",_))};function $(){j=null,g.clear()}function E(e){if(e){var t=w(w({},e),{codesandbox:!0});O(t),function(e){var t=JSON.parse(JSON.stringify(e));g.forEach(function(e,n){n&&n.postMessage&&n.postMessage(w(w({},t),{codesandbox:!0}),e)})}(t),b||null===j&&"initialized"!==e.type||(window.opener?window.opener.postMessage(t,null===j?"*":j):window.parent.postMessage(t,null===j?"*":j))}}"undefined"!==typeof window&&self.addEventListener("message",_);var S={},L=0;function k(e){var t=++L;return S[t]=e,function(){delete S[t]}}function O(e,t){Object.keys(S).forEach(function(n){S[n]&&S[n](e,t)})}function P(e){var t=e.data;t&&t.codesandbox&&(null===j||e.origin===j)&&O(t,e.source)}function U(e,t){g.set(e,t),e.postMessage({type:"register-frame",origin:document.location.origin},t)}function M(){window.addEventListener("message",P)}"undefined"!==typeof window&&window.addEventListener("message",P)},"../common/lib/templates/helpers/is-server.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=["adonis","apollo","ember","gatsby","gridsome","marko","mdx-deck","nest","next","node","nuxt","quasar-framework","sapper","styleguidist","unibit","vuepress"];t.isServer=e=>-1!==r.indexOf(e)},"../common/lib/utils/url-generator.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("../common/lib/templates/helpers/is-server.js");t.gitHubRepoPattern=/(https?:\/\/)?((www.)?)github.com(\/[\w-]+){2,}/;const o=/(https?:\/\/)?((www.)?)github.com/,i=/(\.git)$/,a={"https://codesandbox.io":"https://csb.app","https://codesandbox.stream":"https://codesandbox.dev"},s=(e,...t)=>e[0]+t.map((t,n)=>`${encodeURIComponent(t)}${e[n+1]}`).join("");t.host=()=>"https://codesandbox.io".split("//")[1],t.protocolAndHost=()=>`${location.protocol}//${t.host()}`,t.newSandboxWizard=()=>"/s",t.newSandboxUrl=()=>"/s/new",t.parcelSandboxUrl=()=>"/s/vanilla",t.newReactTypeScriptSandboxUrl=()=>"/s/react-ts",t.newDojoSandboxUrl=()=>"/s/github/dojo/dojo-codesandbox-template",t.newPreactSandboxUrl=()=>"/s/preact",t.newVueSandboxUrl=()=>"/s/vue",t.importFromGitHubUrl=()=>"/s/github",t.newSvelteSandboxUrl=()=>"/s/svelte",t.newAngularSandboxUrl=()=>"/s/angular",t.newCxJSSandboxUrl=()=>"/s/github/codaxy/cxjs-codesandbox-template",t.uploadFromCliUrl=()=>"/s/cli";const c=e=>s`github/${e.username}/${e.repo}/tree/${e.branch}/`+e.path;t.editorUrl=()=>"/s/",t.sandboxUrl=e=>{if(e.git){const{git:n}=e;return`${t.editorUrl()}${c(n)}`}return e.alias?`${t.editorUrl()}${e.alias}`:`${t.editorUrl()}${e.id}`},t.embedUrl=e=>{if(e.git){const{git:t}=e;return`/embed/${c(t)}`}return e.alias?`/embed/${e.alias}`:`/embed/${e.id}`};t.frameUrl=(e,n="",{useFallbackDomain:o=!1,port:i}={})=>{const s=0===n.indexOf("/")?n.substr(1):n,c=r.isServer(e.template);let u=t.host();return`https://${u}`in a&&!o&&!c&&(u=a[`https://${u}`].split("//")[1]),`${location.protocol}//${e.id}${i?`-${i}`:""}.${c?"sse.":""}${u}/${s}`},t.forkSandboxUrl=e=>`${t.sandboxUrl(e)}/fork`,t.signInPageUrl=e=>{let t="/signin";return e&&(t+="?continue="+e),t},t.signInUrl=(e=!1)=>"/auth/github"+(e?"?scope=user:email,public_repo":""),t.signInZeitUrl=()=>"/auth/zeit",t.profileUrl=e=>`/u/${e}`,t.dashboardUrl=()=>"/dashboard",t.exploreUrl=()=>"/explore",t.teamOverviewUrl=e=>`/dashboard/teams/${e}`,t.profileSandboxesUrl=(e,n)=>`${t.profileUrl(e)}/sandboxes${n?`/${n}`:""}`,t.profileLikesUrl=(e,n)=>`${t.profileUrl(e)}/likes${n?`/${n}`:""}`,t.githubRepoUrl=({repo:e,branch:t,username:n,path:r})=>s`https://github.com/${n}/${e}/tree/${t}/`+r,t.optionsToParameterizedUrl=e=>{const t=Object.keys(e).sort().filter(t=>e[t]).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&");return t?`?${t}`:""},t.gitHubToSandboxUrl=e=>e.replace(o,"/s/github").replace(i,""),t.searchUrl=e=>`/search${e?`?query=${e}`:""}`,t.patronUrl=()=>"/patron",t.curatorUrl=()=>"/curator",t.tosUrl=()=>"/legal/terms",t.privacyUrl=()=>"/legal/privacy",t.getSandboxId=function(){const e="https://codesandbox.io";let t;if([e,a[e]].filter(Boolean).forEach(e=>{const n=e.replace(/https?:\/\//,"").replace(/\./g,"\\."),r=new RegExp(`(.*)\\.${n}`),o=document.location.host.match(r);o&&(t=o[1])}),!t)throw new Error("Can't detect sandbox ID from the current URL");return t}},"../sandbox-hooks/console/index.js":function(e,t,n){var r,o,i;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,o=[t,n("../../node_modules/@babel/runtime/regenerator/index.js"),n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),n("../codesandbox-api/dist/codesandbox.es5.js"),n("../../node_modules/console-feed/lib/Hook/index.js"),n("../../node_modules/console-feed/lib/Transform/index.js")],void 0===(i="function"===typeof(r=function(e,t,r,o,i,a){"use strict";var s=n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,i.default)(window.console,function(){var e=(0,r.default)(t.default.mark(function e(n){return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.intializedPromise;case 2:(0,o.dispatch)({type:"console",log:n});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),(0,o.listen)(function(e,t){if(t&&"evaluate"===e.type){var n=null,r=!1;try{if(e.command&&"{"===e.command.charAt(0))try{var i="(".concat(e.command,")");new Function(i),e.command=i}catch(s){}n=(0,eval)(e.command)}catch(s){n=s,r=!0}try{(0,o.dispatch)({type:"eval-result",error:r,result:(0,a.Encode)(n)})}catch(s){console.error(s)}}})},t=s(t),r=s(r),i=s(i)})?r.apply(t,o):r)||(e.exports=i)},"../sandbox-hooks/preview-secret.js":function(e,t,n){var r,o,i;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,o=[t,n("../common/lib/utils/url-generator.js")],void 0===(i="function"===typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.requestPreviewSecretFromApp=e.listenForPreviewSecret=e.setPreviewSecret=e.getPreviewSecret=void 0;var n=function(){return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)".concat("csb_sandbox_secret","\\s*\\=\\s*([^;]*).*$)|^.*$")),"$1")};e.getPreviewSecret=n;var r=function(e){if(null!==e){var t=n();(t&&!e||e&&!t||t!==e)&&(e?(document.cookie="".concat("csb_sandbox_secret","=").concat(e,";samesite=none;secure;"),location.reload()):document.cookie="".concat("csb_sandbox_secret","=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"))}};function o(){var e={width:1020,height:618},t=e.width,n=e.height,r=function(e){var t=e.width,n=e.height,r=window.screenLeft?window.screenLeft:window.screenX,o=window.screenTop?window.screenTop:window.screenY,i=r+window.innerWidth/2-t/2;return{top:o+window.innerHeight/2-n/2,left:i}}({width:t,height:n}),o=r.top,i=r.left;return"width=".concat(t,",height=").concat(n,",top=").concat(o,",left=").concat(i)}e.setPreviewSecret=r,e.listenForPreviewSecret=function(){var e=function(e){if(e.data&&"preview-secret"===e.data.$type){var t=e.data.previewSecret;r(t)}};return window.addEventListener("message",e),function(){window.removeEventListener("message",e)}},e.requestPreviewSecretFromApp=function(e){var n=(0,t.protocolAndHost)(),i=window.open(n+"/auth/sandbox/"+e,name,"scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no, ".concat(o()));setInterval(function(){i.postMessage({$type:"request-preview-secret"},n)},500),window.addEventListener("message",function e(t){t.data&&"preview-secret"===t.data.$type&&(r(t.data.previewSecret),window.removeEventListener("message",e),i.close())})}})?r.apply(t,o):r)||(e.exports=i)},"../sandbox-hooks/url-listeners.js":function(e,t,n){var r,o,i;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,o=[t,n("../codesandbox-api/dist/codesandbox.es5.js")],void 0===(i="function"===typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return Object.assign(window.history,{go:function(e){var t=o+e;if(t>=0&&t<=r.length-1){var s=r[o=t],c=s.url,u=s.state,l=document.location.href;n.replaceState.call(window.history,u,"",c);var d=document.location.href;a(d),-1===d.indexOf("#")?window.dispatchEvent(new PopStateEvent("popstate",{state:u})):(i=!0,window.dispatchEvent(new HashChangeEvent("hashchange",{oldURL:l,newURL:d})))}},back:function(){window.history.go(-1)},forward:function(){window.history.go(1)},pushState:function(e,t,r){n.replaceState.call(window.history,e,t,r),s(r,e),a(document.location.href)},replaceState:function(e,t,i){n.replaceState.call(window.history,e,t,i),r[o]={state:e,url:i},a(document.location.href)}}),Object.defineProperties(window.history,{length:{get:function(){return r.length}},state:{get:function(){return r[o].state}}}),window.addEventListener("hashchange",function(){i?i=!1:(s(c(document.location),null),a(document.location.href))}),document.addEventListener("click",function(e){var t=e.target;if("A"===t.nodeName&&!t.__vue__&&-1!==t.href.indexOf("#")&&"#"!==t.href.substr(-1)){var r=t.href,o=document.location.href;n.replaceState.call(window.history,null,"",r);var u=document.location.href;o!==u&&(i=!0,window.dispatchEvent(new HashChangeEvent("hashchange",{oldURL:o,newURL:u})),s(c(document.location),null),a(document.location.href)),e.preventDefault(),e.stopPropagation()}},!0),s(c(document.location),null),setTimeout(function(){a(document.location.href)}),(0,t.listen)(function(e,t){t&&("urlback"===e.type?history.back():"urlforward"===e.type?history.forward():"refresh"===e.type&&document.location.reload())})};var n=window.history.__proto__,r=[],o=-1,i=!1;function a(e){(0,t.dispatch)({type:"urlchange",url:e,back:o>0,forward:o<r.length-1})}function s(e,t){r.splice(o+1),r.push({url:e,state:t}),o=r.length-1}function c(e){return"".concat(e.pathname).concat(e.hash)}})?r.apply(t,o):r)||(e.exports=i)},"./src/sandbox/startup.js":function(e,t,n){"use strict";n.r(t);var r=n("../../node_modules/worker-loader/dist/cjs.js?publicPath=/&name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.js"),o=n.n(r),i=n("../sandbox-hooks/console/index.js"),a=n.n(i),s=n("../sandbox-hooks/url-listeners.js"),c=n.n(s),u=n("../sandbox-hooks/preview-secret.js"),l=n("../codesandbox-api/dist/codesandbox.es5.js");window.babelworkers=[];for(var d=0;d<3;d++){var f=new o.a;window.babelworkers.push(f),f.postMessage({type:"compiler",path:"test.js",code:'const a = "b"',config:{presets:["env"]},version:7,loaderOptions:{}})}l.isStandalone||(c()(),a()(),Object(u.listenForPreviewSecret)())}});
//# sourceMappingURL=sandbox-startup.499da20ed.js.map