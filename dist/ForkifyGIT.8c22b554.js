var e,t,r,n,i,o,a,s,c,u,l,d,h,f,p,g=globalThis;function v(e){return e&&e.__esModule?e.default:e}var m={},y={},b=function(e){return e&&e.Math===Math&&e};y=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof g&&g)||b("object"==typeof y&&y)||function(){return this}()||Function("return this")();var _={},w={};_=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var k={},E={};E=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;k=E?S.bind(S):function(){return S.apply(S,arguments)};var L={}.propertyIsEnumerable,j=Object.getOwnPropertyDescriptor;r=j&&!L.call({1:2},1)?function(e){var t=j(this,e);return!!t&&t.enumerable}:L;var O={};O=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var I={},T={},$={},M=Function.prototype,P=M.call,x=E&&M.bind.bind(P,P),q={},B=($=E?x:function(e){return function(){return P.apply(e,arguments)}})({}.toString),H=$("".slice);q=function(e){return H(B(e),8,-1)};var N=Object,F=$("".split);T=w(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===q(e)?F(e,""):N(e)}:N;var C={},D={};D=function(e){return null==e};var A=TypeError;C=function(e){if(D(e))throw new A("Can't call method on "+e);return e},I=function(e){return T(C(e))};var R={},U={},W={},z={},G="object"==typeof document&&document.all;z=void 0===G&&void 0!==G?function(e){return"function"==typeof e||e===G}:function(e){return"function"==typeof e},W=function(e){return"object"==typeof e?null!==e:z(e)};var Q={},J={};J=function(e,t){var r;return arguments.length<2?(r=y[e],z(r)?r:void 0):y[e]&&y[e][t]};var Y={};Y=$({}.isPrototypeOf);var V={},K={},Z={},X={},ee=y.navigator,et=ee&&ee.userAgent;X=et?String(et):"";var er=y.process,en=y.Deno,ei=er&&er.versions||en&&en.version,eo=ei&&ei.v8;eo&&(i=(n=eo.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&X&&(!(n=X.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=X.match(/Chrome\/(\d+)/))&&(i=+n[1]),Z=i;var ea=y.String;V=(K=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var es=Object;Q=V?function(e){return"symbol"==typeof e}:function(e){var t=J("Symbol");return z(t)&&Y(t.prototype,es(e))};var ec={},eu={},el={},ed=String;el=function(e){try{return ed(e)}catch(e){return"Object"}};var eh=TypeError;eu=function(e){if(z(e))return e;throw new eh(el(e)+" is not a function")},ec=function(e,t){var r=e[t];return D(r)?void 0:eu(r)};var ef={},ep=TypeError;ef=function(e,t){var r,n;if("string"===t&&z(r=e.toString)&&!W(n=k(r,e))||z(r=e.valueOf)&&!W(n=k(r,e))||"string"!==t&&z(r=e.toString)&&!W(n=k(r,e)))return n;throw new ep("Can't convert object to primitive value")};var eg={},ev={},em={};em=!1;var ey={},eb=Object.defineProperty;ey=function(e,t){try{eb(y,e,{value:t,configurable:!0,writable:!0})}catch(r){y[e]=t}return t};var e_="__core-js_shared__",ew=ev=y[e_]||ey(e_,{});(ew.versions||(ew.versions=[])).push({version:"3.45.0",mode:em?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.45.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eg=function(e,t){return ev[e]||(ev[e]=t||{})};var ek={},eE={},eS=Object;eE=function(e){return eS(C(e))};var eL=$({}.hasOwnProperty);ek=Object.hasOwn||function(e,t){return eL(eE(e),t)};var ej={},eO=0,eI=Math.random(),eT=$(1.1.toString);ej=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eT(++eO+eI,36)};var e$=y.Symbol,eM=eg("wks"),eP=V?e$.for||e$:e$&&e$.withoutSetter||ej,ex=TypeError,eq=function(e){return ek(eM,e)||(eM[e]=K&&ek(e$,e)?e$[e]:eP("Symbol."+e)),eM[e]}("toPrimitive");U=function(e,t){if(!W(e)||Q(e))return e;var r,n=ec(e,eq);if(n){if(void 0===t&&(t="default"),r=k(n,e,t),!W(r)||Q(r))return r;throw new ex("Can't convert object to primitive value")}return void 0===t&&(t="number"),ef(e,t)},R=function(e){var t=U(e,"string");return Q(t)?t:t+""};var eB={},eH={},eN=y.document,eF=W(eN)&&W(eN.createElement);eH=function(e){return eF?eN.createElement(e):{}},eB=!_&&!w(function(){return 7!==Object.defineProperty(eH("div"),"a",{get:function(){return 7}}).a});var eC=Object.getOwnPropertyDescriptor;t=_?eC:function(e,t){if(e=I(e),t=R(t),eB)try{return eC(e,t)}catch(e){}if(ek(e,t))return O(!k(r,e,t),e[t])};var eD={},eA={};eA=_&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eR={},eU=String,eW=TypeError;eR=function(e){if(W(e))return e;throw new eW(eU(e)+" is not an object")};var ez=TypeError,eG=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,eJ="enumerable",eY="configurable",eV="writable";o=_?eA?function(e,t,r){if(eR(e),t=R(t),eR(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eV in r&&!r[eV]){var n=eQ(e,t);n&&n[eV]&&(e[t]=r.value,r={configurable:eY in r?r[eY]:n[eY],enumerable:eJ in r?r[eJ]:n[eJ],writable:!1})}return eG(e,t,r)}:eG:function(e,t,r){if(eR(e),t=R(t),eR(r),eB)try{return eG(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new ez("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eD=_?function(e,t,r){return o(e,t,O(1,r))}:function(e,t,r){return e[t]=r,e};var eK={},eZ={},eX=Function.prototype,e0=_&&Object.getOwnPropertyDescriptor,e1=ek(eX,"name"),e2=e1&&(!_||_&&e0(eX,"name").configurable),e3={},e4=$(Function.toString);z(ev.inspectSource)||(ev.inspectSource=function(e){return e4(e)}),e3=ev.inspectSource;var e5={},e7={},e8=y.WeakMap;e7=z(e8)&&/native code/.test(String(e8));var e6={},e9=eg("keys");e6=function(e){return e9[e]||(e9[e]=ej(e))};var te={};te={};var tt="Object already initialized",tr=y.TypeError,tn=y.WeakMap;if(e7||ev.state){var ti=ev.state||(ev.state=new tn);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,a=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},s=function(e){return ti.get(e)||{}},c=function(e){return ti.has(e)}}else{var to=e6("state");te[to]=!0,a=function(e,t){if(ek(e,to))throw new tr(tt);return t.facade=e,eD(e,to,t),t},s=function(e){return ek(e,to)?e[to]:{}},c=function(e){return ek(e,to)}}var ta=(e5={set:a,get:s,has:c,enforce:function(e){return c(e)?s(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!W(t)||(r=s(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e5.get,tc=String,tu=Object.defineProperty,tl=$("".slice),td=$("".replace),th=$([].join),tf=_&&!w(function(){return 8!==tu(function(){},"length",{value:8}).length}),tp=String(String).split("String"),tg=eZ=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+td(tc(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ek(e,"name")||e2&&e.name!==t)&&(_?tu(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&ek(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&ek(r,"constructor")&&r.constructor?_&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ta(e);return ek(n,"source")||(n.source=th(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=tg(function(){return z(this)&&ts(this).source||e3(this)},"toString"),eK=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(z(r)&&eZ(r,a,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tv={},tm={},ty={},tb={},t_={},tw={},tk=Math.ceil,tE=Math.floor;tw=Math.trunc||function(e){var t=+e;return(t>0?tE:tk)(t)},t_=function(e){var t=+e;return t!=t||0===t?0:tw(t)};var tS=Math.max,tL=Math.min;tb=function(e,t){var r=t_(e);return r<0?tS(r+t,0):tL(r,t)};var tj={},tO={},tI=Math.min;tO=function(e){var t=t_(e);return t>0?tI(t,0x1fffffffffffff):0},tj=function(e){return tO(e.length)};var tT=function(e){return function(t,r,n){var i,o=I(t),a=tj(o);if(0===a)return!e&&-1;var s=tb(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},t$={includes:tT(!0),indexOf:tT(!1)}.indexOf,tM=$([].push);ty=function(e,t){var r,n=I(e),i=0,o=[];for(r in n)!ek(te,r)&&ek(n,r)&&tM(o,r);for(;t.length>i;)ek(n,r=t[i++])&&(~t$(o,r)||tM(o,r));return o};var tP=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return ty(e,tP)},l=Object.getOwnPropertySymbols;var tx=$([].concat);tm=J("Reflect","ownKeys")||function(e){var t=u(eR(e));return l?tx(t,l(e)):t},tv=function(e,r,n){for(var i=tm(r),a=0;a<i.length;a++){var s=i[a];ek(e,s)||n&&ek(n,s)||o(e,s,t(r,s))}};var tq={},tB=/#|\.prototype\./,tH=function(e,t){var r=tF[tN(e)];return r===tD||r!==tC&&(z(t)?w(t):!!t)},tN=tH.normalize=function(e){return String(e).replace(tB,".").toLowerCase()},tF=tH.data={},tC=tH.NATIVE="N",tD=tH.POLYFILL="P";tq=tH,m=function(e,r){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?y:l?y[c]||ey(c,{}):y[c]&&y[c].prototype)for(i in r){if(a=r[i],o=e.dontCallGetSet?(s=t(n,i))&&s.value:n[i],!tq(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tv(a,o)}(e.sham||o&&o.sham)&&eD(a,"sham",!0),eK(n,i,a,e)}};var tA={},tR={},tU=Function.prototype,tW=tU.apply,tz=tU.call;tR="object"==typeof Reflect&&Reflect.apply||(E?tz.bind(tW):function(){return tz.apply(tW,arguments)});var tG={},tQ={},tJ=(tQ=function(e){if("Function"===q(e))return $(e)})(tQ.bind);tG=function(e,t){return eu(e),void 0===t?e:E?tJ(e,t):function(){return e.apply(t,arguments)}};var tY={};tY=J("document","documentElement");var tV={};tV=$([].slice);var tK={},tZ=TypeError;tK=function(e,t){if(e<t)throw new tZ("Not enough arguments");return e};var tX={};tX=/(?:ipad|iphone|ipod).*applewebkit/i.test(X);var t0={},t1={},t2=function(e){return X.slice(0,e.length)===e};t0="NODE"===(t1=t2("Bun/")?"BUN":t2("Cloudflare-Workers")?"CLOUDFLARE":t2("Deno/")?"DENO":t2("Node.js/")?"NODE":y.Bun&&"string"==typeof Bun.version?"BUN":y.Deno&&"object"==typeof Deno.version?"DENO":"process"===q(y.process)?"NODE":y.window&&y.document?"BROWSER":"REST");var t3=y.setImmediate,t4=y.clearImmediate,t5=y.process,t7=y.Dispatch,t8=y.Function,t6=y.MessageChannel,t9=y.String,re=0,rt={},rr="onreadystatechange";w(function(){d=y.location});var rn=function(e){if(ek(rt,e)){var t=rt[e];delete rt[e],t()}},ri=function(e){return function(){rn(e)}},ro=function(e){rn(e.data)},ra=function(e){y.postMessage(t9(e),d.protocol+"//"+d.host)};t3&&t4||(t3=function(e){tK(arguments.length,1);var t=z(e)?e:t8(e),r=tV(arguments,1);return rt[++re]=function(){tR(t,void 0,r)},h(re),re},t4=function(e){delete rt[e]},t0?h=function(e){t5.nextTick(ri(e))}:t7&&t7.now?h=function(e){t7.now(ri(e))}:t6&&!tX?(p=(f=new t6).port2,f.port1.onmessage=ro,h=tG(p.postMessage,p)):y.addEventListener&&z(y.postMessage)&&!y.importScripts&&d&&"file:"!==d.protocol&&!w(ra)?(h=ra,y.addEventListener("message",ro,!1)):h=rr in eH("script")?function(e){tY.appendChild(eH("script"))[rr]=function(){tY.removeChild(this),rn(e)}}:function(e){setTimeout(ri(e),0)});var rs=(tA={set:t3,clear:t4}).clear;m({global:!0,bind:!0,enumerable:!0,forced:y.clearImmediate!==rs},{clearImmediate:rs});var rc=tA.set,ru={},rl=y.Function,rd=/MSIE .\./.test(X)||"BUN"===t1&&((e=y.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));ru=function(e,t){var r=t?2:1;return rd?function(n,i){var o=tK(arguments.length,1)>r,a=z(n)?n:rl(n),s=o?tV(arguments,r):[],c=o?function(){tR(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rh=y.setImmediate?ru(rc,!1):rc;m({global:!0,bind:!0,enumerable:!0,forced:y.setImmediate!==rh},{setImmediate:rh});var rf=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c,u,l=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(l,"_invoke",{value:(a=e,s=n,c=new O(o||[]),u=h,function(e,r){if(u===f)throw Error("Generator is already running");if(u===p){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(i){if(i===g)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===h)throw u=p,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=f;var o=d(a,s,c);if("normal"===o.type){if(u=c.done?p:"suspendedYield",o.arg===g)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=p,c.method="throw",c.arg=o.arg)}})}),l}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h="suspendedStart",f="executing",p="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(I([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function I(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=I,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);else if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rf}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rf:Function("r","regeneratorRuntime = r")(rf)}const rp="https://forkify-api.herokuapp.com/api/v2/recipes/",rg="1f73e9c2-a469-4b9e-a9e3-8cff3a8fd839";JSON.parse('{"status":"success","data":{"recipe":{"publisher":"My Baking Addiction","ingredients":[{"quantity":1,"unit":"","description":"tbsp. canola or olive oil"},{"quantity":0.5,"unit":"cup","description":"chopped sweet onion"},{"quantity":3,"unit":"cups","description":"diced fresh red yellow and green bell peppers"},{"quantity":1,"unit":"","description":"tube refrigerated pizza dough"},{"quantity":0.5,"unit":"cup","description":"salsa"},{"quantity":2,"unit":"cups","description":"sargento chefstyle shredded pepper jack cheese"},{"quantity":null,"unit":"","description":"Chopped cilantro or dried oregano"}],"source_url":"http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/","image_url":"http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg","title":"Spicy Chicken and Pepper Jack Pizza","servings":4,"cooking_time":45,"id":"5ed6604591c37cdc054bc886"}}}');const rv=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 100 second"))},1e5)})]);return await n.json()}catch(e){throw e}},rm={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},ry=function(e){let{recipe:t}=e.data;rm.recipe={id:t.id,title:t.title,publisher:t.publisher,ingredients:t.ingredients,servings:t.servings,cookingTime:t.cooking_time,image:t.image_url,source:t.source_url,...t.key&&{key:t.key}}},rb=async function(e){try{let t=`${rp}/${e}?key=${rg}`,r=await rv(t);ry(r),rm.bookmarks.some(t=>t.id===e)?rm.recipe.bookmarked=!0:rm.recipe.bookmarked=!1}catch(e){throw e}},r_=async function(e){try{rm.search.query=e;let t=`${rp}?search=${e}&key=${rg}`,r=await rv(t);rm.search.results=r.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rm.search.page=1}catch(e){throw e}},rw=function(e=rm.search.page){rm.search.page=e;let t=(e-1)*rm.search.resultsPerPage,r=e*rm.search.resultsPerPage;return rm.search.results.slice(t,r)},rk=function(e){rm.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rm.recipe.servings}),rm.recipe.servings=e},rE=function(){localStorage.setItem("bookmarks",JSON.stringify(rm.bookmarks))},rS=function(e){rm.bookmarks.push(e),e.id===rm.recipe.id&&(rm.recipe.bookmarked=!0),rE()},rL=function(e){let t=rm.bookmarks.findIndex(t=>t.id===e);rm.bookmarks.splice(t,1),e===rm.recipe.id&&(rm.recipe.bookmarked=!1),rE()},rj=localStorage.getItem("bookmarks");rj&&(rm.bookmarks=JSON.parse(rj));const rO=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rv(`${rp}/?key=${rg}`,r);ry(n),rS(rm.recipe)}catch(e){throw e}};var rI={};rI=import.meta.resolve("eyyUD");var rT={};!function(e){function t(){return Error("Parameters must be integer")}function r(){return Error("Invalid argument")}function n(){return Error("Division by Zero")}function i(e,i){var a=d,s=h;let c=h;if(null!=e)if(void 0!==i){if("bigint"==typeof e)a=e;else{if(isNaN(e))throw r();if(0!=e%1)throw t();a=BigInt(e)}if("bigint"==typeof i)s=i;else{if(isNaN(i))throw r();if(0!=i%1)throw t();s=BigInt(i)}c=a*s}else if("object"==typeof e){if("d"in e&&"n"in e)a=BigInt(e.n),s=BigInt(e.d),"s"in e&&(a*=BigInt(e.s));else if(0 in e)a=BigInt(e[0]),1 in e&&(s=BigInt(e[1]));else if("bigint"==typeof e)a=e;else throw r();c=a*s}else if("number"==typeof e){if(isNaN(e))throw r();if(0>e&&(c=-h,e=-e),0==e%1)a=BigInt(e);else{i=1;var u=0,l=1,f=1;let t=1;for(1<=e&&(i=10**Math.floor(1+Math.log10(e)),e/=i);1e7>=l&&1e7>=t;)if(e===(s=(u+f)/(l+t))){1e7>=l+t?(a=u+f,s=l+t):t>l?(a=f,s=t):(a=u,s=l);break}else e>s?(u+=f,l+=t):(f+=u,t+=l),1e7<l?(a=f,s=t):(a=u,s=l);a=BigInt(a)*BigInt(i),s=BigInt(s)}}else if("string"==typeof e){if(s=0,u=i=a=d,l=f=h,null===(e=e.replace(/_/g,"").match(/\d+|./g)))throw r();if("-"===e[s]?(c=-h,s++):"+"===e[s]&&s++,e.length===s+1?i=o(e[s++],c):"."===e[s+1]||"."===e[s]?("."!==e[s]&&(a=o(e[s++],c)),(++s+1===e.length||"("===e[s+1]&&")"===e[s+3]||"'"===e[s+1]&&"'"===e[s+3])&&(i=o(e[s],c),f=g**BigInt(e[s].length),s++),("("===e[s]&&")"===e[s+2]||"'"===e[s]&&"'"===e[s+2])&&(u=o(e[s+1],c),l=g**BigInt(e[s+1].length)-h,s+=3)):"/"===e[s+1]||":"===e[s+1]?(i=o(e[s],c),f=o(e[s+2],h),s+=3):"/"===e[s+3]&&" "===e[s+1]&&(a=o(e[s],c),i=o(e[s+2],c),f=o(e[s+4],h),s+=5),e.length<=s)c=a=u+(s=f*l)*a+l*i;else throw r()}else if("bigint"==typeof e)c=a=e,s=h;else throw r();if(s===d)throw n();v.s=c<d?-h:h,v.n=a<d?-a:a,v.d=s<d?-s:s}function o(e,t){try{e=BigInt(e)}catch(e){throw r()}return e*t}function a(e){return"bigint"==typeof e?e:Math.floor(e)}function s(e,t){if(t===d)throw n();let r=Object.create(l.prototype);r.s=e<d?-h:h;let i=u(e=e<d?-e:e,t);return r.n=e/i,r.d=t/i,r}function c(e){let t={},r=e,n=f,i=p-h;for(;i<=r;){for(;r%n===d;)r/=n,t[n]=(t[n]||d)+h;i+=h+f*n++}return r!==e?1<r&&(t[r]=(t[r]||d)+h):t[e]=(t[e]||d)+h,t}function u(e,t){if(!e)return t;if(!t)return e;for(;;){if(!(e%=t))return t;if(!(t%=e))return e}}function l(e,t){if(i(e,t),!(this instanceof l))return s(v.s*v.n,v.d);e=u(v.d,v.n),this.s=v.s,this.n=v.n/e,this.d=v.d/e}"undefined"==typeof BigInt&&(BigInt=function(e){if(isNaN(e))throw Error("");return e});let d=BigInt(0),h=BigInt(1),f=BigInt(2),p=BigInt(5),g=BigInt(10),v={s:h,n:d,d:h};l.prototype={s:h,n:d,d:h,abs:function(){return s(this.n,this.d)},neg:function(){return s(-this.s*this.n,this.d)},add:function(e,t){return i(e,t),s(this.s*this.n*v.d+v.s*this.d*v.n,this.d*v.d)},sub:function(e,t){return i(e,t),s(this.s*this.n*v.d-v.s*this.d*v.n,this.d*v.d)},mul:function(e,t){return i(e,t),s(this.s*v.s*this.n*v.n,this.d*v.d)},div:function(e,t){return i(e,t),s(this.s*v.s*this.n*v.d,this.d*v.n)},clone:function(){return s(this.s*this.n,this.d)},mod:function(e,t){if(void 0===e)return s(this.s*this.n%this.d,h);if(i(e,t),d===v.n*this.d)throw n();return s(this.s*v.d*this.n%(v.n*this.d),v.d*this.d)},gcd:function(e,t){return i(e,t),s(u(v.n,this.n)*u(v.d,this.d),v.d*this.d)},lcm:function(e,t){return i(e,t),v.n===d&&this.n===d?s(d,h):s(v.n*this.n,u(v.n,this.n)*u(v.d,this.d))},inverse:function(){return s(this.s*this.d,this.n)},pow:function(e,t){if(i(e,t),v.d===h)return v.s<d?s((this.s*this.d)**v.n,this.n**v.n):s((this.s*this.n)**v.n,this.d**v.n);if(this.s<d)return null;e=c(this.n),t=c(this.d);let r=h,n=h;for(let t in e)if("1"!==t){if("0"===t){r=d;break}if(e[t]*=v.n,e[t]%v.d!==d)return null;e[t]/=v.d,r*=BigInt(t)**e[t]}for(let e in t)if("1"!==e){if(t[e]*=v.n,t[e]%v.d!==d)return null;t[e]/=v.d,n*=BigInt(e)**t[e]}return v.s<d?s(n,r):s(r,n)},log:function(e,t){if(i(e,t),this.s<=d||v.s<=d)return null;var r={};e=c(v.n);let n=c(v.d);t=c(this.n);let o=c(this.d);for(var a in n)e[a]=(e[a]||d)-n[a];for(var l in o)t[l]=(t[l]||d)-o[l];for(var h in e)"1"!==h&&(r[h]=!0);for(var f in t)"1"!==f&&(r[f]=!0);for(let n in l=a=null,r)if(h=e[n]||d,r=t[n]||d,h===d){if(r!==d)return null}else if(f=u(r,h),r/=f,h/=f,null===a&&null===l)a=r,l=h;else if(r*l!=a*h)return null;return null!==a&&null!==l?s(a,l):null},equals:function(e,t){return i(e,t),this.s*this.n*v.d==v.s*v.n*this.d},lt:function(e,t){return i(e,t),this.s*this.n*v.d<v.s*v.n*this.d},lte:function(e,t){return i(e,t),this.s*this.n*v.d<=v.s*v.n*this.d},gt:function(e,t){return i(e,t),this.s*this.n*v.d>v.s*v.n*this.d},gte:function(e,t){return i(e,t),this.s*this.n*v.d>=v.s*v.n*this.d},compare:function(e,t){return i(e,t),(d<(e=this.s*this.n*v.d-v.s*v.n*this.d))-(e<d)},ceil:function(e){return e=g**BigInt(e||0),s(a(this.s*e*this.n/this.d)+(e*this.n%this.d>d&&this.s>=d?h:d),e)},floor:function(e){return e=g**BigInt(e||0),s(a(this.s*e*this.n/this.d)-(e*this.n%this.d>d&&this.s<d?h:d),e)},round:function(e){return e=g**BigInt(e||0),s(a(this.s*e*this.n/this.d)+this.s*((this.s>=d?h:d)+e*this.n%this.d*f>this.d?h:d),e)},roundTo:function(e,t){i(e,t);var r=this.n*v.d;return t=r%(e=this.d*v.n),r=a(r/e),t+t>=e&&r++,s(this.s*r*v.n,v.d)},divisible:function(e,t){return i(e,t),!(!(v.n*this.d)||this.n*v.d%(v.n*this.d))},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(e){let t=this.n,r=this.d;e=e||15;e:{for(n=r;n%f===d;n/=f);for(;n%p===d;n/=p);if(n===h)n=d;else{for(var n,i=g%n,o=1;i!==h;o++)if(i=i*g%n,2e3<o){n=d;break e}n=BigInt(o)}}e:{i=h,o=g;var s=n;let e=h;for(;s>d;o=o*o%r,s>>=h)s&h&&(e=e*o%r);for(s=0,o=e;300>s;s++){if(i===o){i=BigInt(s);break e}i=i*g%r,o=o*g%r}i=0}if(o=i,i=(this.s<d?"-":"")+a(t/r),(t=t%r*g)&&(i+="."),n){for(e=o;e--;)i+=a(t/r),t%=r,t*=g;for(i+="(",e=n;e--;)i+=a(t/r),t%=r,t*=g;i+=")"}else for(;t&&e--;)i+=a(t/r),t%=r,t*=g;return i},toFraction:function(e){let t=this.n,r=this.d,n=this.s<d?"-":"";if(r===h)n+=t;else{let i=a(t/r);e&&i>d&&(n+=i,n+=" ",t%=r),n=n+t+"/"+r}return n},toLatex:function(e){let t=this.n,r=this.d,n=this.s<d?"-":"";if(r===h)n+=t;else{let i=a(t/r);e&&i>d&&(n+=i,t%=r),n=n+"\\frac{"+t+"}{"+r+"}"}return n},toContinued:function(){let e=this.n,t=this.d,r=[];do{r.push(a(e/t));let n=e%t;e=t,t=n}while(e!==h)return r},simplify:function(e){e=BigInt(1/(e||.001)|0);let t=this.abs(),r=t.toContinued();for(let i=1;i<r.length;i++){let o=s(r[i-1],h);for(var n=i-2;0<=n;n--)o=o.inverse().add(r[n]);if((n=o.sub(t)).n*e<n.d)return o.mul(this.s)}return this}},"function"==typeof define&&define.amd?define([],function(){return l}):(Object.defineProperty(l,"__esModule",{value:!0}),l.default=l,l.Fraction=l,rT=l)}(0);class r${_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${v(rI)}#icon-loader"></use>
          </svg>  
        </div>
  `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
          <div class="error">
            <div>
              <svg>
                <use href="${v(rI)}#icon-alert-triangle"></use>
              </svg>
            </div>  
            <p>${e}</p>
          </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
          <div class="error">
            <div>
              <svg>
                <use href="${v(rI)}#icon-smile"></use>
              </svg>
            </div>  
            <p>${e}</p>
          </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rM extends r${_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";_data;render(e){this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let e=`
          <div class="spinner">
            <svg>
              <use href="${v(rI)}#icon-loader"></use>
            </svg>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderMessage(e=this._message){let t=`
    <div class="message">
    <div>
    <svg>
    <use href="${v(rI)}#icon-smile"></use>
    </svg>
    </div>
    <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(e=this._errorMessage){let t=`
    <div class="error">
    <div>
    <svg>
    <use href="${v(rI)}#icon-alert-triangle"></use>
    </svg>
    </div>
    <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return` <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${v(rI)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${v(rI)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${v(rI).replace(/^\/+/,"")}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${v(rI).replace(/^\/+/,"")}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${v(rI)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${v(rI)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(e=>this._generateMarkupIngredient(e)).join("")} 
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${v(rI)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`}_generateMarkupIngredient(e){return`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${e}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?new(v(rT))(e.quantity).toFraction():""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
              ${e.description}
              </div>
            </li>
    `}}var rP=new rM;class rx{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){return this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rq=new rx,rB=new class extends r${_parentElement="";_generateMarkup(e){let t=window.location.hash.slice(1);return`
          <li class="preview">
            <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}" >
                  <svg>
                  <use href="${v(rI)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        `}};class rH extends r${_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again";_message="";addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest("li.preview");r&&e(r)})}_generateMarkup(){return this._data.map(e=>rB.render(e,!1)).join("")}}var rN=new rH;class rF extends r${_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&t>1?`
          <button data-goto="${e+1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${v(rI)}#icon-arrow-right"></use>
            </svg>
            <span>Page ${e+1}</span>
          </button>
    `:e===t&t>1?`
          <button  data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${v(rI)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
    `:e<t?`
          <button  data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${v(rI)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
          
          
          <button  data-goto="${e+1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${v(rI)}#icon-arrow-right"></use>
            </svg>
            <span>Page ${e+1}</span>
          </button>
    `:""}}var rC=new rF;class rD extends r${_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it";_message="";addHandlerRender(e){window.addEventListener("click",e)}addHandlerClickBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest("li.preview");r&&e(r)})}_generateMarkup(){return this._data.map(e=>rB.render(e,!1)).join("")}}var rA=new rD;class rR extends r${_parentElement=document.querySelector(".upload");_originParentHTML=this._parentElement.outerHTML;_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._parentElement.outerHTML!==this._originParentHTML&&(this._parentElement.innerHTML=this._originParentHTML),this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}_clearInput(){this._parentElement.innerHTML=`
       <form class="upload">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST233" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST233" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST233" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST233" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="src/img/icons.svg#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>`}}var rU=new rR;const rW=async function(){try{let e=window.location.hash.slice(1)||"5ed6604591c37cdc054bc886";if(!e)return;rP.renderSpinner(),rN.update(rw()),await rb(e),rP.render(rm.recipe),rA.update(rm.bookmarks)}catch(e){rP.renderError()}},rz=async function(){try{rN.renderSpinner();let e=rq.getQuery();if(!e)return;await r_(e),rN.render(rw(1)),rC.render(rm.search),document.querySelector(".results").classList.remove("hidden"),document.querySelector(".pagination").classList.remove("hidden")}catch(e){throw e}},rG=async function(e){try{rU.renderSpinner(),await rO(e),rP.render(rm.recipe),rU.renderMessage(),rA.render(rm.bookmarks),window.history.pushState(null,"",`#${rm.recipe.id}`),setTimeout(async function(){await rU.toggleWindow(),rU._clearInput()},2500)}catch(e){rU.renderError(e.message)}};rA.addHandlerRender(function(e){document.querySelector(".bookmarks__list").classList.remove("hidden"),document.querySelector(".bookmarks").classList.remove("hidden"),document.querySelector(".bookmarks").style.opacity=1,rA.render(rm.bookmarks)}),rA.addHandlerClickBookmark(function(e){e.closest(".bookmarks__list").classList.add("hidden"),document.querySelector(".bookmarks").classList.add("hidden"),document.querySelector(".bookmarks").style.opacity=0}),rP.addHandlerRender(rW),rP.addHandlerUpdateServings(function(e){rk(e),rP.update(rm.recipe)}),rP.addHandlerAddBookmark(function(){rm.recipe.bookmarked?rL(rm.recipe.id):rS(rm.recipe),rP.update(rm.recipe),rA.render(rm.bookmarks)}),rq.addHandlerSearch(rz),rC.addHandlerClick(function(e){rN.render(rw(e)),rC.render(rm.search)}),rU.addHandlerUpload(rG),rN.addHandlerClick(function(e){window.innerWidth<=600&&(e.closest(".results").classList.add("hidden"),document.querySelector(".pagination").classList.add("hidden"))});
//# sourceMappingURL=ForkifyGIT.8c22b554.js.map
