(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var nh={exports:{}},Da={},ih={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function yM(){if(o_)return yt;o_=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=p&&F[p]||F["@@iterator"],typeof F=="function"?F:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function y(F,Q,Re){this.props=F,this.context=Q,this.refs=E,this.updater=Re||v}y.prototype.isReactComponent={},y.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=y.prototype;function b(F,Q,Re){this.props=F,this.context=Q,this.refs=E,this.updater=Re||v}var L=b.prototype=new x;L.constructor=b,S(L,y.prototype),L.isPureReactComponent=!0;var w=Array.isArray,I=Object.prototype.hasOwnProperty,N={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function z(F,Q,Re){var be,Oe={},ee=null,se=null;if(Q!=null)for(be in Q.ref!==void 0&&(se=Q.ref),Q.key!==void 0&&(ee=""+Q.key),Q)I.call(Q,be)&&!U.hasOwnProperty(be)&&(Oe[be]=Q[be]);var xe=arguments.length-2;if(xe===1)Oe.children=Re;else if(1<xe){for(var Ne=Array(xe),De=0;De<xe;De++)Ne[De]=arguments[De+2];Oe.children=Ne}if(F&&F.defaultProps)for(be in xe=F.defaultProps,xe)Oe[be]===void 0&&(Oe[be]=xe[be]);return{$$typeof:i,type:F,key:ee,ref:se,props:Oe,_owner:N.current}}function C(F,Q){return{$$typeof:i,type:F.type,key:Q,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===i}function B(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Re){return Q[Re]})}var q=/\/+/g;function K(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):Q.toString(36)}function he(F,Q,Re,be,Oe){var ee=typeof F;(ee==="undefined"||ee==="boolean")&&(F=null);var se=!1;if(F===null)se=!0;else switch(ee){case"string":case"number":se=!0;break;case"object":switch(F.$$typeof){case i:case e:se=!0}}if(se)return se=F,Oe=Oe(se),F=be===""?"."+K(se,0):be,w(Oe)?(Re="",F!=null&&(Re=F.replace(q,"$&/")+"/"),he(Oe,Q,Re,"",function(De){return De})):Oe!=null&&(R(Oe)&&(Oe=C(Oe,Re+(!Oe.key||se&&se.key===Oe.key?"":(""+Oe.key).replace(q,"$&/")+"/")+F)),Q.push(Oe)),1;if(se=0,be=be===""?".":be+":",w(F))for(var xe=0;xe<F.length;xe++){ee=F[xe];var Ne=be+K(ee,xe);se+=he(ee,Q,Re,Ne,Oe)}else if(Ne=g(F),typeof Ne=="function")for(F=Ne.call(F),xe=0;!(ee=F.next()).done;)ee=ee.value,Ne=be+K(ee,xe++),se+=he(ee,Q,Re,Ne,Oe);else if(ee==="object")throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return se}function oe(F,Q,Re){if(F==null)return F;var be=[],Oe=0;return he(F,be,"","",function(ee){return Q.call(Re,ee,Oe++)}),be}function ae(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(Re){(F._status===0||F._status===-1)&&(F._status=1,F._result=Re)},function(Re){(F._status===0||F._status===-1)&&(F._status=2,F._result=Re)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var ue={current:null},G={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:G,ReactCurrentOwner:N};function Y(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:oe,forEach:function(F,Q,Re){oe(F,function(){Q.apply(this,arguments)},Re)},count:function(F){var Q=0;return oe(F,function(){Q++}),Q},toArray:function(F){return oe(F,function(Q){return Q})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},yt.Component=y,yt.Fragment=t,yt.Profiler=s,yt.PureComponent=b,yt.StrictMode=n,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,yt.act=Y,yt.cloneElement=function(F,Q,Re){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var be=S({},F.props),Oe=F.key,ee=F.ref,se=F._owner;if(Q!=null){if(Q.ref!==void 0&&(ee=Q.ref,se=N.current),Q.key!==void 0&&(Oe=""+Q.key),F.type&&F.type.defaultProps)var xe=F.type.defaultProps;for(Ne in Q)I.call(Q,Ne)&&!U.hasOwnProperty(Ne)&&(be[Ne]=Q[Ne]===void 0&&xe!==void 0?xe[Ne]:Q[Ne])}var Ne=arguments.length-2;if(Ne===1)be.children=Re;else if(1<Ne){xe=Array(Ne);for(var De=0;De<Ne;De++)xe[De]=arguments[De+2];be.children=xe}return{$$typeof:i,type:F.type,key:Oe,ref:ee,props:be,_owner:se}},yt.createContext=function(F){return F={$$typeof:l,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},yt.createElement=z,yt.createFactory=function(F){var Q=z.bind(null,F);return Q.type=F,Q},yt.createRef=function(){return{current:null}},yt.forwardRef=function(F){return{$$typeof:c,render:F}},yt.isValidElement=R,yt.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:ae}},yt.memo=function(F,Q){return{$$typeof:h,type:F,compare:Q===void 0?null:Q}},yt.startTransition=function(F){var Q=G.transition;G.transition={};try{F()}finally{G.transition=Q}},yt.unstable_act=Y,yt.useCallback=function(F,Q){return ue.current.useCallback(F,Q)},yt.useContext=function(F){return ue.current.useContext(F)},yt.useDebugValue=function(){},yt.useDeferredValue=function(F){return ue.current.useDeferredValue(F)},yt.useEffect=function(F,Q){return ue.current.useEffect(F,Q)},yt.useId=function(){return ue.current.useId()},yt.useImperativeHandle=function(F,Q,Re){return ue.current.useImperativeHandle(F,Q,Re)},yt.useInsertionEffect=function(F,Q){return ue.current.useInsertionEffect(F,Q)},yt.useLayoutEffect=function(F,Q){return ue.current.useLayoutEffect(F,Q)},yt.useMemo=function(F,Q){return ue.current.useMemo(F,Q)},yt.useReducer=function(F,Q,Re){return ue.current.useReducer(F,Q,Re)},yt.useRef=function(F){return ue.current.useRef(F)},yt.useState=function(F){return ue.current.useState(F)},yt.useSyncExternalStore=function(F,Q,Re){return ue.current.useSyncExternalStore(F,Q,Re)},yt.useTransition=function(){return ue.current.useTransition()},yt.version="18.3.1",yt}var a_;function hp(){return a_||(a_=1,ih.exports=yM()),ih.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function MM(){if(l_)return Da;l_=1;var i=hp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,d,h){var m,p={},g=null,v=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(v=d.ref);for(m in d)n.call(d,m)&&!a.hasOwnProperty(m)&&(p[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)p[m]===void 0&&(p[m]=d[m]);return{$$typeof:e,type:c,key:g,ref:v,props:p,_owner:s.current}}return Da.Fragment=t,Da.jsx=l,Da.jsxs=l,Da}var u_;function SM(){return u_||(u_=1,nh.exports=MM()),nh.exports}var ce=SM(),gt=hp(),vu={},rh={exports:{}},$n={},sh={exports:{}},oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function EM(){return c_||(c_=1,(function(i){function e(G,le){var Y=G.length;G.push(le);e:for(;0<Y;){var F=Y-1>>>1,Q=G[F];if(0<s(Q,le))G[F]=le,G[Y]=Q,Y=F;else break e}}function t(G){return G.length===0?null:G[0]}function n(G){if(G.length===0)return null;var le=G[0],Y=G.pop();if(Y!==le){G[0]=Y;e:for(var F=0,Q=G.length,Re=Q>>>1;F<Re;){var be=2*(F+1)-1,Oe=G[be],ee=be+1,se=G[ee];if(0>s(Oe,Y))ee<Q&&0>s(se,Oe)?(G[F]=se,G[ee]=Y,F=ee):(G[F]=Oe,G[be]=Y,F=be);else if(ee<Q&&0>s(se,Y))G[F]=se,G[ee]=Y,F=ee;else break e}}return le}function s(G,le){var Y=G.sortIndex-le.sortIndex;return Y!==0?Y:G.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;i.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();i.unstable_now=function(){return l.now()-c}}var d=[],h=[],m=1,p=null,g=3,v=!1,S=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(G){for(var le=t(h);le!==null;){if(le.callback===null)n(h);else if(le.startTime<=G)n(h),le.sortIndex=le.expirationTime,e(d,le);else break;le=t(h)}}function w(G){if(E=!1,L(G),!S)if(t(d)!==null)S=!0,ae(I);else{var le=t(h);le!==null&&ue(w,le.startTime-G)}}function I(G,le){S=!1,E&&(E=!1,x(z),z=-1),v=!0;var Y=g;try{for(L(le),p=t(d);p!==null&&(!(p.expirationTime>le)||G&&!B());){var F=p.callback;if(typeof F=="function"){p.callback=null,g=p.priorityLevel;var Q=F(p.expirationTime<=le);le=i.unstable_now(),typeof Q=="function"?p.callback=Q:p===t(d)&&n(d),L(le)}else n(d);p=t(d)}if(p!==null)var Re=!0;else{var be=t(h);be!==null&&ue(w,be.startTime-le),Re=!1}return Re}finally{p=null,g=Y,v=!1}}var N=!1,U=null,z=-1,C=5,R=-1;function B(){return!(i.unstable_now()-R<C)}function q(){if(U!==null){var G=i.unstable_now();R=G;var le=!0;try{le=U(!0,G)}finally{le?K():(N=!1,U=null)}}else N=!1}var K;if(typeof b=="function")K=function(){b(q)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,oe=he.port2;he.port1.onmessage=q,K=function(){oe.postMessage(null)}}else K=function(){y(q,0)};function ae(G){U=G,N||(N=!0,K())}function ue(G,le){z=y(function(){G(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(G){G.callback=null},i.unstable_continueExecution=function(){S||v||(S=!0,ae(I))},i.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<G?Math.floor(1e3/G):5},i.unstable_getCurrentPriorityLevel=function(){return g},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(G){switch(g){case 1:case 2:case 3:var le=3;break;default:le=g}var Y=g;g=le;try{return G()}finally{g=Y}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(G,le){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Y=g;g=G;try{return le()}finally{g=Y}},i.unstable_scheduleCallback=function(G,le,Y){var F=i.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?F+Y:F):Y=F,G){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=Y+Q,G={id:m++,callback:le,priorityLevel:G,startTime:Y,expirationTime:Q,sortIndex:-1},Y>F?(G.sortIndex=Y,e(h,G),t(d)===null&&G===t(h)&&(E?(x(z),z=-1):E=!0,ue(w,Y-F))):(G.sortIndex=Q,e(d,G),S||v||(S=!0,ae(I))),G},i.unstable_shouldYield=B,i.unstable_wrapCallback=function(G){var le=g;return function(){var Y=g;g=le;try{return G.apply(this,arguments)}finally{g=Y}}}})(oh)),oh}var d_;function TM(){return d_||(d_=1,sh.exports=EM()),sh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function wM(){if(h_)return $n;h_=1;var i=hp(),e=TM();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(r,o){l(r,o),l(r+"Capture",o)}function l(r,o){for(s[r]=o,r=0;r<o.length;r++)n.add(o[r])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},p={};function g(r){return d.call(p,r)?!0:d.call(m,r)?!1:h.test(r)?p[r]=!0:(m[r]=!0,!1)}function v(r,o,u,f){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:u!==null?!u.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function S(r,o,u,f){if(o===null||typeof o>"u"||v(r,o,u,f))return!0;if(f)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(r,o,u,f,_,M,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=_,this.mustUseProperty=u,this.propertyName=r,this.type=o,this.sanitizeURL=M,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){y[r]=new E(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];y[o]=new E(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){y[r]=new E(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){y[r]=new E(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){y[r]=new E(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){y[r]=new E(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){y[r]=new E(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){y[r]=new E(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){y[r]=new E(r,5,!1,r.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(x,b);y[o]=new E(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(x,b);y[o]=new E(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(x,b);y[o]=new E(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){y[r]=new E(r,1,!1,r.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){y[r]=new E(r,1,!1,r.toLowerCase(),null,!0,!0)});function L(r,o,u,f){var _=y.hasOwnProperty(o)?y[o]:null;(_!==null?_.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(S(o,u,_,f)&&(u=null),f||_===null?g(o)&&(u===null?r.removeAttribute(o):r.setAttribute(o,""+u)):_.mustUseProperty?r[_.propertyName]=u===null?_.type===3?!1:"":u:(o=_.attributeName,f=_.attributeNamespace,u===null?r.removeAttribute(o):(_=_.type,u=_===3||_===4&&u===!0?"":""+u,f?r.setAttributeNS(f,o,u):r.setAttribute(o,u))))}var w=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),G=Symbol.iterator;function le(r){return r===null||typeof r!="object"?null:(r=G&&r[G]||r["@@iterator"],typeof r=="function"?r:null)}var Y=Object.assign,F;function Q(r){if(F===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);F=o&&o[1]||""}return`
`+F+r}var Re=!1;function be(r,o){if(!r||Re)return"";Re=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ne){var f=ne}Reflect.construct(r,[],o)}else{try{o.call()}catch(ne){f=ne}r.call(o.prototype)}else{try{throw Error()}catch(ne){f=ne}r()}}catch(ne){if(ne&&f&&typeof ne.stack=="string"){for(var _=ne.stack.split(`
`),M=f.stack.split(`
`),T=_.length-1,k=M.length-1;1<=T&&0<=k&&_[T]!==M[k];)k--;for(;1<=T&&0<=k;T--,k--)if(_[T]!==M[k]){if(T!==1||k!==1)do if(T--,k--,0>k||_[T]!==M[k]){var H=`
`+_[T].replace(" at new "," at ");return r.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",r.displayName)),H}while(1<=T&&0<=k);break}}}finally{Re=!1,Error.prepareStackTrace=u}return(r=r?r.displayName||r.name:"")?Q(r):""}function Oe(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=be(r.type,!1),r;case 11:return r=be(r.type.render,!1),r;case 1:return r=be(r.type,!0),r;default:return""}}function ee(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case U:return"Fragment";case N:return"Portal";case C:return"Profiler";case z:return"StrictMode";case K:return"Suspense";case he:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case B:return(r.displayName||"Context")+".Consumer";case R:return(r._context.displayName||"Context")+".Provider";case q:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case oe:return o=r.displayName||null,o!==null?o:ee(r.type)||"Memo";case ae:o=r._payload,r=r._init;try{return ee(r(o))}catch{}}return null}function se(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(o);case 8:return o===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function xe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ne(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function De(r){var o=Ne(r)?"checked":"value",u=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),f=""+r[o];if(!r.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var _=u.get,M=u.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return _.call(this)},set:function(T){f=""+T,M.call(this,T)}}),Object.defineProperty(r,o,{enumerable:u.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function mt(r){r._valueTracker||(r._valueTracker=De(r))}function tn(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var u=o.getValue(),f="";return r&&(f=Ne(r)?r.checked?"true":"false":r.value),r=f,r!==u?(o.setValue(r),!0):!1}function V(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Nt(r,o){var u=o.checked;return Y({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??r._wrapperState.initialChecked})}function ct(r,o){var u=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;u=xe(o.value!=null?o.value:u),r._wrapperState={initialChecked:f,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function et(r,o){o=o.checked,o!=null&&L(r,"checked",o,!1)}function Be(r,o){et(r,o);var u=xe(o.value),f=o.type;if(u!=null)f==="number"?(u===0&&r.value===""||r.value!=u)&&(r.value=""+u):r.value!==""+u&&(r.value=""+u);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Ve(r,o.type,u):o.hasOwnProperty("defaultValue")&&Ve(r,o.type,xe(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function Ut(r,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,u||o===r.value||(r.value=o),r.defaultValue=o}u=r.name,u!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,u!==""&&(r.name=u)}function Ve(r,o,u){(o!=="number"||V(r.ownerDocument)!==r)&&(u==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+u&&(r.defaultValue=""+u))}var ut=Array.isArray;function Ht(r,o,u,f){if(r=r.options,o){o={};for(var _=0;_<u.length;_++)o["$"+u[_]]=!0;for(u=0;u<r.length;u++)_=o.hasOwnProperty("$"+r[u].value),r[u].selected!==_&&(r[u].selected=_),_&&f&&(r[u].defaultSelected=!0)}else{for(u=""+xe(u),o=null,_=0;_<r.length;_++){if(r[_].value===u){r[_].selected=!0,f&&(r[_].defaultSelected=!0);return}o!==null||r[_].disabled||(o=r[_])}o!==null&&(o.selected=!0)}}function Yt(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function O(r,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(ut(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}r._wrapperState={initialValue:xe(u)}}function A(r,o){var u=xe(o.value),f=xe(o.defaultValue);u!=null&&(u=""+u,u!==r.value&&(r.value=u),o.defaultValue==null&&r.defaultValue!==u&&(r.defaultValue=u)),f!=null&&(r.defaultValue=""+f)}function J(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function fe(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?fe(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var de,$e=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,f,_){MSApp.execUnsafeLocalFunction(function(){return r(o,u,f,_)})}:r})(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=de.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function ye(r,o){if(o){var u=r.firstChild;if(u&&u===r.lastChild&&u.nodeType===3){u.nodeValue=o;return}}r.textContent=o}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(r){Ye.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),ze[o]=ze[r]})});function Ee(r,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||ze.hasOwnProperty(r)&&ze[r]?(""+o).trim():o+"px"}function Le(r,o){r=r.style;for(var u in o)if(o.hasOwnProperty(u)){var f=u.indexOf("--")===0,_=Ee(u,o[u],f);u==="float"&&(u="cssFloat"),f?r.setProperty(u,_):r[u]=_}}var tt=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(r,o){if(o){if(tt[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Pe(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dt=null;function W(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Se=null,we=null,Ue=null;function ve(r){if(r=xa(r)){if(typeof Se!="function")throw Error(t(280));var o=r.stateNode;o&&(o=Nl(o),Se(r.stateNode,r.type,o))}}function pe(r){we?Ue?Ue.push(r):Ue=[r]:we=r}function He(){if(we){var r=we,o=Ue;if(Ue=we=null,ve(r),o)for(r=0;r<o.length;r++)ve(o[r])}}function ht(r,o){return r(o)}function Ct(){}var At=!1;function Gn(r,o,u){if(At)return r(o,u);At=!0;try{return ht(r,o,u)}finally{At=!1,(we!==null||Ue!==null)&&(Ct(),He())}}function gn(r,o){var u=r.stateNode;if(u===null)return null;var f=Nl(u);if(f===null)return null;u=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var Zi=!1;if(c)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Zi=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Zi=!1}function es(r,o,u,f,_,M,T,k,H){var ne=Array.prototype.slice.call(arguments,3);try{o.apply(u,ne)}catch(_e){this.onError(_e)}}var Ui=!1,Qi=null,vi=!1,Oi=null,Ji={onError:function(r){Ui=!0,Qi=r}};function Fs(r,o,u,f,_,M,T,k,H){Ui=!1,Qi=null,es.apply(Ji,arguments)}function ks(r,o,u,f,_,M,T,k,H){if(Fs.apply(this,arguments),Ui){if(Ui){var ne=Qi;Ui=!1,Qi=null}else throw Error(t(198));vi||(vi=!0,Oi=ne)}}function Fi(r){var o=r,u=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(u=o.return),r=o.return;while(r)}return o.tag===3?u:null}function Bs(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function ts(r){if(Fi(r)!==r)throw Error(t(188))}function na(r){var o=r.alternate;if(!o){if(o=Fi(r),o===null)throw Error(t(188));return o!==r?null:r}for(var u=r,f=o;;){var _=u.return;if(_===null)break;var M=_.alternate;if(M===null){if(f=_.return,f!==null){u=f;continue}break}if(_.child===M.child){for(M=_.child;M;){if(M===u)return ts(_),r;if(M===f)return ts(_),o;M=M.sibling}throw Error(t(188))}if(u.return!==f.return)u=_,f=M;else{for(var T=!1,k=_.child;k;){if(k===u){T=!0,u=_,f=M;break}if(k===f){T=!0,f=_,u=M;break}k=k.sibling}if(!T){for(k=M.child;k;){if(k===u){T=!0,u=M,f=_;break}if(k===f){T=!0,f=M,u=_;break}k=k.sibling}if(!T)throw Error(t(189))}}if(u.alternate!==f)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?r:o}function Vs(r){return r=na(r),r!==null?er(r):null}function er(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=er(r);if(o!==null)return o;r=r.sibling}return null}var P=e.unstable_scheduleCallback,$=e.unstable_cancelCallback,ie=e.unstable_shouldYield,re=e.unstable_requestPaint,j=e.unstable_now,Te=e.unstable_getCurrentPriorityLevel,Ie=e.unstable_ImmediatePriority,We=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,st=e.unstable_LowPriority,at=e.unstable_IdlePriority,Qe=null,ft=null;function Ot(r){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Qe,r,void 0,(r.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:nt,Xt=Math.log,Ft=Math.LN2;function nt(r){return r>>>=0,r===0?32:31-(Xt(r)/Ft|0)|0}var Gt=64,Et=4194304;function un(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function xi(r,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,_=r.suspendedLanes,M=r.pingedLanes,T=u&268435455;if(T!==0){var k=T&~_;k!==0?f=un(k):(M&=T,M!==0&&(f=un(M)))}else T=u&~_,T!==0?f=un(T):M!==0&&(f=un(M));if(f===0)return 0;if(o!==0&&o!==f&&(o&_)===0&&(_=f&-f,M=o&-o,_>=M||_===16&&(M&4194240)!==0))return o;if((f&4)!==0&&(f|=u&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=f;0<o;)u=31-Rt(o),_=1<<u,f|=r[u],o&=~_;return f}function Dn(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ns(r,o){for(var u=r.suspendedLanes,f=r.pingedLanes,_=r.expirationTimes,M=r.pendingLanes;0<M;){var T=31-Rt(M),k=1<<T,H=_[T];H===-1?((k&u)===0||(k&f)!==0)&&(_[T]=Dn(k,o)):H<=o&&(r.expiredLanes|=k),M&=~k}}function jt(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Un(){var r=Gt;return Gt<<=1,(Gt&4194240)===0&&(Gt=64),r}function Tn(r){for(var o=[],u=0;31>u;u++)o.push(r);return o}function sn(r,o,u){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-Rt(o),r[o]=u}function wn(r,o){var u=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<u;){var _=31-Rt(u),M=1<<_;o[_]=0,f[_]=-1,r[_]=-1,u&=~M}}function is(r,o){var u=r.entangledLanes|=o;for(r=r.entanglements;u;){var f=31-Rt(u),_=1<<f;_&o|r[f]&o&&(r[f]|=o),u&=~_}}var Tt=0;function kp(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Bp,Ac,Vp,zp,Hp,Rc=!1,vl=[],Mr=null,Sr=null,Er=null,ia=new Map,ra=new Map,Tr=[],Hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gp(r,o){switch(r){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ia.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(o.pointerId)}}function sa(r,o,u,f,_,M){return r===null||r.nativeEvent!==M?(r={blockedOn:o,domEventName:u,eventSystemFlags:f,nativeEvent:M,targetContainers:[_]},o!==null&&(o=xa(o),o!==null&&Ac(o)),r):(r.eventSystemFlags|=f,o=r.targetContainers,_!==null&&o.indexOf(_)===-1&&o.push(_),r)}function Gx(r,o,u,f,_){switch(o){case"focusin":return Mr=sa(Mr,r,o,u,f,_),!0;case"dragenter":return Sr=sa(Sr,r,o,u,f,_),!0;case"mouseover":return Er=sa(Er,r,o,u,f,_),!0;case"pointerover":var M=_.pointerId;return ia.set(M,sa(ia.get(M)||null,r,o,u,f,_)),!0;case"gotpointercapture":return M=_.pointerId,ra.set(M,sa(ra.get(M)||null,r,o,u,f,_)),!0}return!1}function Wp(r){var o=rs(r.target);if(o!==null){var u=Fi(o);if(u!==null){if(o=u.tag,o===13){if(o=Bs(u),o!==null){r.blockedOn=o,Hp(r.priority,function(){Vp(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){r.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}r.blockedOn=null}function xl(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var u=Cc(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(u===null){u=r.nativeEvent;var f=new u.constructor(u.type,u);dt=f,u.target.dispatchEvent(f),dt=null}else return o=xa(u),o!==null&&Ac(o),r.blockedOn=u,!1;o.shift()}return!0}function Xp(r,o,u){xl(r)&&u.delete(o)}function Wx(){Rc=!1,Mr!==null&&xl(Mr)&&(Mr=null),Sr!==null&&xl(Sr)&&(Sr=null),Er!==null&&xl(Er)&&(Er=null),ia.forEach(Xp),ra.forEach(Xp)}function oa(r,o){r.blockedOn===o&&(r.blockedOn=null,Rc||(Rc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wx)))}function aa(r){function o(_){return oa(_,r)}if(0<vl.length){oa(vl[0],r);for(var u=1;u<vl.length;u++){var f=vl[u];f.blockedOn===r&&(f.blockedOn=null)}}for(Mr!==null&&oa(Mr,r),Sr!==null&&oa(Sr,r),Er!==null&&oa(Er,r),ia.forEach(o),ra.forEach(o),u=0;u<Tr.length;u++)f=Tr[u],f.blockedOn===r&&(f.blockedOn=null);for(;0<Tr.length&&(u=Tr[0],u.blockedOn===null);)Wp(u),u.blockedOn===null&&Tr.shift()}var zs=w.ReactCurrentBatchConfig,yl=!0;function Xx(r,o,u,f){var _=Tt,M=zs.transition;zs.transition=null;try{Tt=1,bc(r,o,u,f)}finally{Tt=_,zs.transition=M}}function jx(r,o,u,f){var _=Tt,M=zs.transition;zs.transition=null;try{Tt=4,bc(r,o,u,f)}finally{Tt=_,zs.transition=M}}function bc(r,o,u,f){if(yl){var _=Cc(r,o,u,f);if(_===null)jc(r,o,f,Ml,u),Gp(r,f);else if(Gx(_,r,o,u,f))f.stopPropagation();else if(Gp(r,f),o&4&&-1<Hx.indexOf(r)){for(;_!==null;){var M=xa(_);if(M!==null&&Bp(M),M=Cc(r,o,u,f),M===null&&jc(r,o,f,Ml,u),M===_)break;_=M}_!==null&&f.stopPropagation()}else jc(r,o,f,null,u)}}var Ml=null;function Cc(r,o,u,f){if(Ml=null,r=W(f),r=rs(r),r!==null)if(o=Fi(r),o===null)r=null;else if(u=o.tag,u===13){if(r=Bs(o),r!==null)return r;r=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return Ml=r,null}function jp(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Te()){case Ie:return 1;case We:return 4;case Fe:case st:return 16;case at:return 536870912;default:return 16}default:return 16}}var wr=null,Pc=null,Sl=null;function Yp(){if(Sl)return Sl;var r,o=Pc,u=o.length,f,_="value"in wr?wr.value:wr.textContent,M=_.length;for(r=0;r<u&&o[r]===_[r];r++);var T=u-r;for(f=1;f<=T&&o[u-f]===_[M-f];f++);return Sl=_.slice(r,1<f?1-f:void 0)}function El(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function Tl(){return!0}function qp(){return!1}function Kn(r){function o(u,f,_,M,T){this._reactName=u,this._targetInst=_,this.type=f,this.nativeEvent=M,this.target=T,this.currentTarget=null;for(var k in r)r.hasOwnProperty(k)&&(u=r[k],this[k]=u?u(M):M[k]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Tl:qp,this.isPropagationStopped=qp,this}return Y(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),o}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=Kn(Hs),la=Y({},Hs,{view:0,detail:0}),Yx=Kn(la),Ic,Nc,ua,wl=Y({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ua&&(ua&&r.type==="mousemove"?(Ic=r.screenX-ua.screenX,Nc=r.screenY-ua.screenY):Nc=Ic=0,ua=r),Ic)},movementY:function(r){return"movementY"in r?r.movementY:Nc}}),$p=Kn(wl),qx=Y({},wl,{dataTransfer:0}),$x=Kn(qx),Kx=Y({},la,{relatedTarget:0}),Dc=Kn(Kx),Zx=Y({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=Kn(Zx),Jx=Y({},Hs,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ey=Kn(Jx),ty=Y({},Hs,{data:0}),Kp=Kn(ty),ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sy(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=ry[r])?!!o[r]:!1}function Uc(){return sy}var oy=Y({},la,{key:function(r){if(r.key){var o=ny[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=El(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?iy[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(r){return r.type==="keypress"?El(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?El(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ay=Kn(oy),ly=Y({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=Kn(ly),uy=Y({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),cy=Kn(uy),dy=Y({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=Kn(dy),fy=Y({},wl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),py=Kn(fy),my=[9,13,27,32],Oc=c&&"CompositionEvent"in window,ca=null;c&&"documentMode"in document&&(ca=document.documentMode);var gy=c&&"TextEvent"in window&&!ca,Qp=c&&(!Oc||ca&&8<ca&&11>=ca),Jp=" ",em=!1;function tm(r,o){switch(r){case"keyup":return my.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Gs=!1;function _y(r,o){switch(r){case"compositionend":return nm(o);case"keypress":return o.which!==32?null:(em=!0,Jp);case"textInput":return r=o.data,r===Jp&&em?null:r;default:return null}}function vy(r,o){if(Gs)return r==="compositionend"||!Oc&&tm(r,o)?(r=Yp(),Sl=Pc=wr=null,Gs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Qp&&o.locale!=="ko"?null:o.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!xy[r.type]:o==="textarea"}function rm(r,o,u,f){pe(f),o=Pl(o,"onChange"),0<o.length&&(u=new Lc("onChange","change",null,u,f),r.push({event:u,listeners:o}))}var da=null,ha=null;function yy(r){Sm(r,0)}function Al(r){var o=qs(r);if(tn(o))return r}function My(r,o){if(r==="change")return o}var sm=!1;if(c){var Fc;if(c){var kc="oninput"in document;if(!kc){var om=document.createElement("div");om.setAttribute("oninput","return;"),kc=typeof om.oninput=="function"}Fc=kc}else Fc=!1;sm=Fc&&(!document.documentMode||9<document.documentMode)}function am(){da&&(da.detachEvent("onpropertychange",lm),ha=da=null)}function lm(r){if(r.propertyName==="value"&&Al(ha)){var o=[];rm(o,ha,r,W(r)),Gn(yy,o)}}function Sy(r,o,u){r==="focusin"?(am(),da=o,ha=u,da.attachEvent("onpropertychange",lm)):r==="focusout"&&am()}function Ey(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Al(ha)}function Ty(r,o){if(r==="click")return Al(o)}function wy(r,o){if(r==="input"||r==="change")return Al(o)}function Ay(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var yi=typeof Object.is=="function"?Object.is:Ay;function fa(r,o){if(yi(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var u=Object.keys(r),f=Object.keys(o);if(u.length!==f.length)return!1;for(f=0;f<u.length;f++){var _=u[f];if(!d.call(o,_)||!yi(r[_],o[_]))return!1}return!0}function um(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function cm(r,o){var u=um(r);r=0;for(var f;u;){if(u.nodeType===3){if(f=r+u.textContent.length,r<=o&&f>=o)return{node:u,offset:o-r};r=f}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=um(u)}}function dm(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?dm(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function hm(){for(var r=window,o=V();o instanceof r.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)r=o.contentWindow;else break;o=V(r.document)}return o}function Bc(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function Ry(r){var o=hm(),u=r.focusedElem,f=r.selectionRange;if(o!==u&&u&&u.ownerDocument&&dm(u.ownerDocument.documentElement,u)){if(f!==null&&Bc(u)){if(o=f.start,r=f.end,r===void 0&&(r=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(r,u.value.length);else if(r=(o=u.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var _=u.textContent.length,M=Math.min(f.start,_);f=f.end===void 0?M:Math.min(f.end,_),!r.extend&&M>f&&(_=f,f=M,M=_),_=cm(u,M);var T=cm(u,f);_&&T&&(r.rangeCount!==1||r.anchorNode!==_.node||r.anchorOffset!==_.offset||r.focusNode!==T.node||r.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(_.node,_.offset),r.removeAllRanges(),M>f?(r.addRange(o),r.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),r.addRange(o)))}}for(o=[],r=u;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)r=o[u],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var by=c&&"documentMode"in document&&11>=document.documentMode,Ws=null,Vc=null,pa=null,zc=!1;function fm(r,o,u){var f=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;zc||Ws==null||Ws!==V(f)||(f=Ws,"selectionStart"in f&&Bc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),pa&&fa(pa,f)||(pa=f,f=Pl(Vc,"onSelect"),0<f.length&&(o=new Lc("onSelect","select",null,o,u),r.push({event:o,listeners:f}),o.target=Ws)))}function Rl(r,o){var u={};return u[r.toLowerCase()]=o.toLowerCase(),u["Webkit"+r]="webkit"+o,u["Moz"+r]="moz"+o,u}var Xs={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Hc={},pm={};c&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function bl(r){if(Hc[r])return Hc[r];if(!Xs[r])return r;var o=Xs[r],u;for(u in o)if(o.hasOwnProperty(u)&&u in pm)return Hc[r]=o[u];return r}var mm=bl("animationend"),gm=bl("animationiteration"),_m=bl("animationstart"),vm=bl("transitionend"),xm=new Map,ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(r,o){xm.set(r,o),a(o,[r])}for(var Gc=0;Gc<ym.length;Gc++){var Wc=ym[Gc],Cy=Wc.toLowerCase(),Py=Wc[0].toUpperCase()+Wc.slice(1);Ar(Cy,"on"+Py)}Ar(mm,"onAnimationEnd"),Ar(gm,"onAnimationIteration"),Ar(_m,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(vm,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Mm(r,o,u){var f=r.type||"unknown-event";r.currentTarget=u,ks(f,o,void 0,r),r.currentTarget=null}function Sm(r,o){o=(o&4)!==0;for(var u=0;u<r.length;u++){var f=r[u],_=f.event;f=f.listeners;e:{var M=void 0;if(o)for(var T=f.length-1;0<=T;T--){var k=f[T],H=k.instance,ne=k.currentTarget;if(k=k.listener,H!==M&&_.isPropagationStopped())break e;Mm(_,k,ne),M=H}else for(T=0;T<f.length;T++){if(k=f[T],H=k.instance,ne=k.currentTarget,k=k.listener,H!==M&&_.isPropagationStopped())break e;Mm(_,k,ne),M=H}}}if(vi)throw r=Oi,vi=!1,Oi=null,r}function Kt(r,o){var u=o[Qc];u===void 0&&(u=o[Qc]=new Set);var f=r+"__bubble";u.has(f)||(Em(o,r,2,!1),u.add(f))}function Xc(r,o,u){var f=0;o&&(f|=4),Em(u,r,f,o)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function ga(r){if(!r[Cl]){r[Cl]=!0,n.forEach(function(u){u!=="selectionchange"&&(Ly.has(u)||Xc(u,!1,r),Xc(u,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[Cl]||(o[Cl]=!0,Xc("selectionchange",!1,o))}}function Em(r,o,u,f){switch(jp(o)){case 1:var _=Xx;break;case 4:_=jx;break;default:_=bc}u=_.bind(null,o,u,r),_=void 0,!Zi||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(_=!0),f?_!==void 0?r.addEventListener(o,u,{capture:!0,passive:_}):r.addEventListener(o,u,!0):_!==void 0?r.addEventListener(o,u,{passive:_}):r.addEventListener(o,u,!1)}function jc(r,o,u,f,_){var M=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var k=f.stateNode.containerInfo;if(k===_||k.nodeType===8&&k.parentNode===_)break;if(T===4)for(T=f.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===_||H.nodeType===8&&H.parentNode===_))return;T=T.return}for(;k!==null;){if(T=rs(k),T===null)return;if(H=T.tag,H===5||H===6){f=M=T;continue e}k=k.parentNode}}f=f.return}Gn(function(){var ne=M,_e=W(u),Me=[];e:{var ge=xm.get(r);if(ge!==void 0){var ke=Lc,Xe=r;switch(r){case"keypress":if(El(u)===0)break e;case"keydown":case"keyup":ke=ay;break;case"focusin":Xe="focus",ke=Dc;break;case"focusout":Xe="blur",ke=Dc;break;case"beforeblur":case"afterblur":ke=Dc;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=cy;break;case mm:case gm:case _m:ke=Qx;break;case vm:ke=hy;break;case"scroll":ke=Yx;break;case"wheel":ke=py;break;case"copy":case"cut":case"paste":ke=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Zp}var qe=(o&4)!==0,on=!qe&&r==="scroll",Z=qe?ge!==null?ge+"Capture":null:ge;qe=[];for(var X=ne,te;X!==null;){te=X;var Ae=te.stateNode;if(te.tag===5&&Ae!==null&&(te=Ae,Z!==null&&(Ae=gn(X,Z),Ae!=null&&qe.push(_a(X,Ae,te)))),on)break;X=X.return}0<qe.length&&(ge=new ke(ge,Xe,null,u,_e),Me.push({event:ge,listeners:qe}))}}if((o&7)===0){e:{if(ge=r==="mouseover"||r==="pointerover",ke=r==="mouseout"||r==="pointerout",ge&&u!==dt&&(Xe=u.relatedTarget||u.fromElement)&&(rs(Xe)||Xe[tr]))break e;if((ke||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,ke?(Xe=u.relatedTarget||u.toElement,ke=ne,Xe=Xe?rs(Xe):null,Xe!==null&&(on=Fi(Xe),Xe!==on||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ke=null,Xe=ne),ke!==Xe)){if(qe=$p,Ae="onMouseLeave",Z="onMouseEnter",X="mouse",(r==="pointerout"||r==="pointerover")&&(qe=Zp,Ae="onPointerLeave",Z="onPointerEnter",X="pointer"),on=ke==null?ge:qs(ke),te=Xe==null?ge:qs(Xe),ge=new qe(Ae,X+"leave",ke,u,_e),ge.target=on,ge.relatedTarget=te,Ae=null,rs(_e)===ne&&(qe=new qe(Z,X+"enter",Xe,u,_e),qe.target=te,qe.relatedTarget=on,Ae=qe),on=Ae,ke&&Xe)t:{for(qe=ke,Z=Xe,X=0,te=qe;te;te=js(te))X++;for(te=0,Ae=Z;Ae;Ae=js(Ae))te++;for(;0<X-te;)qe=js(qe),X--;for(;0<te-X;)Z=js(Z),te--;for(;X--;){if(qe===Z||Z!==null&&qe===Z.alternate)break t;qe=js(qe),Z=js(Z)}qe=null}else qe=null;ke!==null&&Tm(Me,ge,ke,qe,!1),Xe!==null&&on!==null&&Tm(Me,on,Xe,qe,!0)}}e:{if(ge=ne?qs(ne):window,ke=ge.nodeName&&ge.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ge.type==="file")var Ke=My;else if(im(ge))if(sm)Ke=wy;else{Ke=Ey;var it=Sy}else(ke=ge.nodeName)&&ke.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=Ty);if(Ke&&(Ke=Ke(r,ne))){rm(Me,Ke,u,_e);break e}it&&it(r,ge,ne),r==="focusout"&&(it=ge._wrapperState)&&it.controlled&&ge.type==="number"&&Ve(ge,"number",ge.value)}switch(it=ne?qs(ne):window,r){case"focusin":(im(it)||it.contentEditable==="true")&&(Ws=it,Vc=ne,pa=null);break;case"focusout":pa=Vc=Ws=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,fm(Me,u,_e);break;case"selectionchange":if(by)break;case"keydown":case"keyup":fm(Me,u,_e)}var rt;if(Oc)e:{switch(r){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else Gs?tm(r,u)&&(pt="onCompositionEnd"):r==="keydown"&&u.keyCode===229&&(pt="onCompositionStart");pt&&(Qp&&u.locale!=="ko"&&(Gs||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Gs&&(rt=Yp()):(wr=_e,Pc="value"in wr?wr.value:wr.textContent,Gs=!0)),it=Pl(ne,pt),0<it.length&&(pt=new Kp(pt,r,null,u,_e),Me.push({event:pt,listeners:it}),rt?pt.data=rt:(rt=nm(u),rt!==null&&(pt.data=rt)))),(rt=gy?_y(r,u):vy(r,u))&&(ne=Pl(ne,"onBeforeInput"),0<ne.length&&(_e=new Kp("onBeforeInput","beforeinput",null,u,_e),Me.push({event:_e,listeners:ne}),_e.data=rt))}Sm(Me,o)})}function _a(r,o,u){return{instance:r,listener:o,currentTarget:u}}function Pl(r,o){for(var u=o+"Capture",f=[];r!==null;){var _=r,M=_.stateNode;_.tag===5&&M!==null&&(_=M,M=gn(r,u),M!=null&&f.unshift(_a(r,M,_)),M=gn(r,o),M!=null&&f.push(_a(r,M,_))),r=r.return}return f}function js(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Tm(r,o,u,f,_){for(var M=o._reactName,T=[];u!==null&&u!==f;){var k=u,H=k.alternate,ne=k.stateNode;if(H!==null&&H===f)break;k.tag===5&&ne!==null&&(k=ne,_?(H=gn(u,M),H!=null&&T.unshift(_a(u,H,k))):_||(H=gn(u,M),H!=null&&T.push(_a(u,H,k)))),u=u.return}T.length!==0&&r.push({event:o,listeners:T})}var Iy=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function wm(r){return(typeof r=="string"?r:""+r).replace(Iy,`
`).replace(Ny,"")}function Ll(r,o,u){if(o=wm(o),wm(r)!==o&&u)throw Error(t(425))}function Il(){}var Yc=null,qc=null;function $c(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,Uy=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(r){return Am.resolve(null).then(r).catch(Oy)}:Kc;function Oy(r){setTimeout(function(){throw r})}function Zc(r,o){var u=o,f=0;do{var _=u.nextSibling;if(r.removeChild(u),_&&_.nodeType===8)if(u=_.data,u==="/$"){if(f===0){r.removeChild(_),aa(o);return}f--}else u!=="$"&&u!=="$?"&&u!=="$!"||f++;u=_}while(u);aa(o)}function Rr(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function Rm(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var u=r.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return r;o--}else u==="/$"&&o++}r=r.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ki="__reactFiber$"+Ys,va="__reactProps$"+Ys,tr="__reactContainer$"+Ys,Qc="__reactEvents$"+Ys,Fy="__reactListeners$"+Ys,ky="__reactHandles$"+Ys;function rs(r){var o=r[ki];if(o)return o;for(var u=r.parentNode;u;){if(o=u[tr]||u[ki]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(r=Rm(r);r!==null;){if(u=r[ki])return u;r=Rm(r)}return o}r=u,u=r.parentNode}return null}function xa(r){return r=r[ki]||r[tr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function qs(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Nl(r){return r[va]||null}var Jc=[],$s=-1;function br(r){return{current:r}}function Zt(r){0>$s||(r.current=Jc[$s],Jc[$s]=null,$s--)}function qt(r,o){$s++,Jc[$s]=r.current,r.current=o}var Cr={},An=br(Cr),Wn=br(!1),ss=Cr;function Ks(r,o){var u=r.type.contextTypes;if(!u)return Cr;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var _={},M;for(M in u)_[M]=o[M];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=_),_}function Xn(r){return r=r.childContextTypes,r!=null}function Dl(){Zt(Wn),Zt(An)}function bm(r,o,u){if(An.current!==Cr)throw Error(t(168));qt(An,o),qt(Wn,u)}function Cm(r,o,u){var f=r.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return u;f=f.getChildContext();for(var _ in f)if(!(_ in o))throw Error(t(108,se(r)||"Unknown",_));return Y({},u,f)}function Ul(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Cr,ss=An.current,qt(An,r),qt(Wn,Wn.current),!0}function Pm(r,o,u){var f=r.stateNode;if(!f)throw Error(t(169));u?(r=Cm(r,o,ss),f.__reactInternalMemoizedMergedChildContext=r,Zt(Wn),Zt(An),qt(An,r)):Zt(Wn),qt(Wn,u)}var nr=null,Ol=!1,ed=!1;function Lm(r){nr===null?nr=[r]:nr.push(r)}function By(r){Ol=!0,Lm(r)}function Pr(){if(!ed&&nr!==null){ed=!0;var r=0,o=Tt;try{var u=nr;for(Tt=1;r<u.length;r++){var f=u[r];do f=f(!0);while(f!==null)}nr=null,Ol=!1}catch(_){throw nr!==null&&(nr=nr.slice(r+1)),P(Ie,Pr),_}finally{Tt=o,ed=!1}}return null}var Zs=[],Qs=0,Fl=null,kl=0,ri=[],si=0,os=null,ir=1,rr="";function as(r,o){Zs[Qs++]=kl,Zs[Qs++]=Fl,Fl=r,kl=o}function Im(r,o,u){ri[si++]=ir,ri[si++]=rr,ri[si++]=os,os=r;var f=ir;r=rr;var _=32-Rt(f)-1;f&=~(1<<_),u+=1;var M=32-Rt(o)+_;if(30<M){var T=_-_%5;M=(f&(1<<T)-1).toString(32),f>>=T,_-=T,ir=1<<32-Rt(o)+_|u<<_|f,rr=M+r}else ir=1<<M|u<<_|f,rr=r}function td(r){r.return!==null&&(as(r,1),Im(r,1,0))}function nd(r){for(;r===Fl;)Fl=Zs[--Qs],Zs[Qs]=null,kl=Zs[--Qs],Zs[Qs]=null;for(;r===os;)os=ri[--si],ri[si]=null,rr=ri[--si],ri[si]=null,ir=ri[--si],ri[si]=null}var Zn=null,Qn=null,Qt=!1,Mi=null;function Nm(r,o){var u=ui(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=r,o=r.deletions,o===null?(r.deletions=[u],r.flags|=16):o.push(u)}function Dm(r,o){switch(r.tag){case 5:var u=r.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,Zn=r,Qn=Rr(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,Zn=r,Qn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=os!==null?{id:ir,overflow:rr}:null,r.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=ui(18,null,null,0),u.stateNode=o,u.return=r,r.child=u,Zn=r,Qn=null,!0):!1;default:return!1}}function id(r){return(r.mode&1)!==0&&(r.flags&128)===0}function rd(r){if(Qt){var o=Qn;if(o){var u=o;if(!Dm(r,o)){if(id(r))throw Error(t(418));o=Rr(u.nextSibling);var f=Zn;o&&Dm(r,o)?Nm(f,u):(r.flags=r.flags&-4097|2,Qt=!1,Zn=r)}}else{if(id(r))throw Error(t(418));r.flags=r.flags&-4097|2,Qt=!1,Zn=r}}}function Um(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Zn=r}function Bl(r){if(r!==Zn)return!1;if(!Qt)return Um(r),Qt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!$c(r.type,r.memoizedProps)),o&&(o=Qn)){if(id(r))throw Om(),Error(t(418));for(;o;)Nm(r,o),o=Rr(o.nextSibling)}if(Um(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var u=r.data;if(u==="/$"){if(o===0){Qn=Rr(r.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}r=r.nextSibling}Qn=null}}else Qn=Zn?Rr(r.stateNode.nextSibling):null;return!0}function Om(){for(var r=Qn;r;)r=Rr(r.nextSibling)}function Js(){Qn=Zn=null,Qt=!1}function sd(r){Mi===null?Mi=[r]:Mi.push(r)}var Vy=w.ReactCurrentBatchConfig;function ya(r,o,u){if(r=u.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var f=u.stateNode}if(!f)throw Error(t(147,r));var _=f,M=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===M?o.ref:(o=function(T){var k=_.refs;T===null?delete k[M]:k[M]=T},o._stringRef=M,o)}if(typeof r!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,r))}return r}function Vl(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function Fm(r){var o=r._init;return o(r._payload)}function km(r){function o(Z,X){if(r){var te=Z.deletions;te===null?(Z.deletions=[X],Z.flags|=16):te.push(X)}}function u(Z,X){if(!r)return null;for(;X!==null;)o(Z,X),X=X.sibling;return null}function f(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function _(Z,X){return Z=kr(Z,X),Z.index=0,Z.sibling=null,Z}function M(Z,X,te){return Z.index=te,r?(te=Z.alternate,te!==null?(te=te.index,te<X?(Z.flags|=2,X):te):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function T(Z){return r&&Z.alternate===null&&(Z.flags|=2),Z}function k(Z,X,te,Ae){return X===null||X.tag!==6?(X=Kd(te,Z.mode,Ae),X.return=Z,X):(X=_(X,te),X.return=Z,X)}function H(Z,X,te,Ae){var Ke=te.type;return Ke===U?_e(Z,X,te.props.children,Ae,te.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ae&&Fm(Ke)===X.type)?(Ae=_(X,te.props),Ae.ref=ya(Z,X,te),Ae.return=Z,Ae):(Ae=cu(te.type,te.key,te.props,null,Z.mode,Ae),Ae.ref=ya(Z,X,te),Ae.return=Z,Ae)}function ne(Z,X,te,Ae){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Zd(te,Z.mode,Ae),X.return=Z,X):(X=_(X,te.children||[]),X.return=Z,X)}function _e(Z,X,te,Ae,Ke){return X===null||X.tag!==7?(X=ms(te,Z.mode,Ae,Ke),X.return=Z,X):(X=_(X,te),X.return=Z,X)}function Me(Z,X,te){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Kd(""+X,Z.mode,te),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case I:return te=cu(X.type,X.key,X.props,null,Z.mode,te),te.ref=ya(Z,null,X),te.return=Z,te;case N:return X=Zd(X,Z.mode,te),X.return=Z,X;case ae:var Ae=X._init;return Me(Z,Ae(X._payload),te)}if(ut(X)||le(X))return X=ms(X,Z.mode,te,null),X.return=Z,X;Vl(Z,X)}return null}function ge(Z,X,te,Ae){var Ke=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ke!==null?null:k(Z,X,""+te,Ae);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return te.key===Ke?H(Z,X,te,Ae):null;case N:return te.key===Ke?ne(Z,X,te,Ae):null;case ae:return Ke=te._init,ge(Z,X,Ke(te._payload),Ae)}if(ut(te)||le(te))return Ke!==null?null:_e(Z,X,te,Ae,null);Vl(Z,te)}return null}function ke(Z,X,te,Ae,Ke){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return Z=Z.get(te)||null,k(X,Z,""+Ae,Ke);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case I:return Z=Z.get(Ae.key===null?te:Ae.key)||null,H(X,Z,Ae,Ke);case N:return Z=Z.get(Ae.key===null?te:Ae.key)||null,ne(X,Z,Ae,Ke);case ae:var it=Ae._init;return ke(Z,X,te,it(Ae._payload),Ke)}if(ut(Ae)||le(Ae))return Z=Z.get(te)||null,_e(X,Z,Ae,Ke,null);Vl(X,Ae)}return null}function Xe(Z,X,te,Ae){for(var Ke=null,it=null,rt=X,pt=X=0,xn=null;rt!==null&&pt<te.length;pt++){rt.index>pt?(xn=rt,rt=null):xn=rt.sibling;var Lt=ge(Z,rt,te[pt],Ae);if(Lt===null){rt===null&&(rt=xn);break}r&&rt&&Lt.alternate===null&&o(Z,rt),X=M(Lt,X,pt),it===null?Ke=Lt:it.sibling=Lt,it=Lt,rt=xn}if(pt===te.length)return u(Z,rt),Qt&&as(Z,pt),Ke;if(rt===null){for(;pt<te.length;pt++)rt=Me(Z,te[pt],Ae),rt!==null&&(X=M(rt,X,pt),it===null?Ke=rt:it.sibling=rt,it=rt);return Qt&&as(Z,pt),Ke}for(rt=f(Z,rt);pt<te.length;pt++)xn=ke(rt,Z,pt,te[pt],Ae),xn!==null&&(r&&xn.alternate!==null&&rt.delete(xn.key===null?pt:xn.key),X=M(xn,X,pt),it===null?Ke=xn:it.sibling=xn,it=xn);return r&&rt.forEach(function(Br){return o(Z,Br)}),Qt&&as(Z,pt),Ke}function qe(Z,X,te,Ae){var Ke=le(te);if(typeof Ke!="function")throw Error(t(150));if(te=Ke.call(te),te==null)throw Error(t(151));for(var it=Ke=null,rt=X,pt=X=0,xn=null,Lt=te.next();rt!==null&&!Lt.done;pt++,Lt=te.next()){rt.index>pt?(xn=rt,rt=null):xn=rt.sibling;var Br=ge(Z,rt,Lt.value,Ae);if(Br===null){rt===null&&(rt=xn);break}r&&rt&&Br.alternate===null&&o(Z,rt),X=M(Br,X,pt),it===null?Ke=Br:it.sibling=Br,it=Br,rt=xn}if(Lt.done)return u(Z,rt),Qt&&as(Z,pt),Ke;if(rt===null){for(;!Lt.done;pt++,Lt=te.next())Lt=Me(Z,Lt.value,Ae),Lt!==null&&(X=M(Lt,X,pt),it===null?Ke=Lt:it.sibling=Lt,it=Lt);return Qt&&as(Z,pt),Ke}for(rt=f(Z,rt);!Lt.done;pt++,Lt=te.next())Lt=ke(rt,Z,pt,Lt.value,Ae),Lt!==null&&(r&&Lt.alternate!==null&&rt.delete(Lt.key===null?pt:Lt.key),X=M(Lt,X,pt),it===null?Ke=Lt:it.sibling=Lt,it=Lt);return r&&rt.forEach(function(xM){return o(Z,xM)}),Qt&&as(Z,pt),Ke}function on(Z,X,te,Ae){if(typeof te=="object"&&te!==null&&te.type===U&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case I:e:{for(var Ke=te.key,it=X;it!==null;){if(it.key===Ke){if(Ke=te.type,Ke===U){if(it.tag===7){u(Z,it.sibling),X=_(it,te.props.children),X.return=Z,Z=X;break e}}else if(it.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ae&&Fm(Ke)===it.type){u(Z,it.sibling),X=_(it,te.props),X.ref=ya(Z,it,te),X.return=Z,Z=X;break e}u(Z,it);break}else o(Z,it);it=it.sibling}te.type===U?(X=ms(te.props.children,Z.mode,Ae,te.key),X.return=Z,Z=X):(Ae=cu(te.type,te.key,te.props,null,Z.mode,Ae),Ae.ref=ya(Z,X,te),Ae.return=Z,Z=Ae)}return T(Z);case N:e:{for(it=te.key;X!==null;){if(X.key===it)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){u(Z,X.sibling),X=_(X,te.children||[]),X.return=Z,Z=X;break e}else{u(Z,X);break}else o(Z,X);X=X.sibling}X=Zd(te,Z.mode,Ae),X.return=Z,Z=X}return T(Z);case ae:return it=te._init,on(Z,X,it(te._payload),Ae)}if(ut(te))return Xe(Z,X,te,Ae);if(le(te))return qe(Z,X,te,Ae);Vl(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,X!==null&&X.tag===6?(u(Z,X.sibling),X=_(X,te),X.return=Z,Z=X):(u(Z,X),X=Kd(te,Z.mode,Ae),X.return=Z,Z=X),T(Z)):u(Z,X)}return on}var eo=km(!0),Bm=km(!1),zl=br(null),Hl=null,to=null,od=null;function ad(){od=to=Hl=null}function ld(r){var o=zl.current;Zt(zl),r._currentValue=o}function ud(r,o,u){for(;r!==null;){var f=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),r===u)break;r=r.return}}function no(r,o){Hl=r,od=to=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(jn=!0),r.firstContext=null)}function oi(r){var o=r._currentValue;if(od!==r)if(r={context:r,memoizedValue:o,next:null},to===null){if(Hl===null)throw Error(t(308));to=r,Hl.dependencies={lanes:0,firstContext:r}}else to=to.next=r;return o}var ls=null;function cd(r){ls===null?ls=[r]:ls.push(r)}function Vm(r,o,u,f){var _=o.interleaved;return _===null?(u.next=u,cd(o)):(u.next=_.next,_.next=u),o.interleaved=u,sr(r,f)}function sr(r,o){r.lanes|=o;var u=r.alternate;for(u!==null&&(u.lanes|=o),u=r,r=r.return;r!==null;)r.childLanes|=o,u=r.alternate,u!==null&&(u.childLanes|=o),u=r,r=r.return;return u.tag===3?u.stateNode:null}var Lr=!1;function dd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zm(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function or(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function Ir(r,o,u){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(Pt&2)!==0){var _=f.pending;return _===null?o.next=o:(o.next=_.next,_.next=o),f.pending=o,sr(r,u)}return _=f.interleaved,_===null?(o.next=o,cd(f)):(o.next=_.next,_.next=o),f.interleaved=o,sr(r,u)}function Gl(r,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var f=o.lanes;f&=r.pendingLanes,u|=f,o.lanes=u,is(r,u)}}function Hm(r,o){var u=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,u===f)){var _=null,M=null;if(u=u.firstBaseUpdate,u!==null){do{var T={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};M===null?_=M=T:M=M.next=T,u=u.next}while(u!==null);M===null?_=M=o:M=M.next=o}else _=M=o;u={baseState:f.baseState,firstBaseUpdate:_,lastBaseUpdate:M,shared:f.shared,effects:f.effects},r.updateQueue=u;return}r=u.lastBaseUpdate,r===null?u.firstBaseUpdate=o:r.next=o,u.lastBaseUpdate=o}function Wl(r,o,u,f){var _=r.updateQueue;Lr=!1;var M=_.firstBaseUpdate,T=_.lastBaseUpdate,k=_.shared.pending;if(k!==null){_.shared.pending=null;var H=k,ne=H.next;H.next=null,T===null?M=ne:T.next=ne,T=H;var _e=r.alternate;_e!==null&&(_e=_e.updateQueue,k=_e.lastBaseUpdate,k!==T&&(k===null?_e.firstBaseUpdate=ne:k.next=ne,_e.lastBaseUpdate=H))}if(M!==null){var Me=_.baseState;T=0,_e=ne=H=null,k=M;do{var ge=k.lane,ke=k.eventTime;if((f&ge)===ge){_e!==null&&(_e=_e.next={eventTime:ke,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Xe=r,qe=k;switch(ge=o,ke=u,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Me=Xe.call(ke,Me,ge);break e}Me=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,ge=typeof Xe=="function"?Xe.call(ke,Me,ge):Xe,ge==null)break e;Me=Y({},Me,ge);break e;case 2:Lr=!0}}k.callback!==null&&k.lane!==0&&(r.flags|=64,ge=_.effects,ge===null?_.effects=[k]:ge.push(k))}else ke={eventTime:ke,lane:ge,tag:k.tag,payload:k.payload,callback:k.callback,next:null},_e===null?(ne=_e=ke,H=Me):_e=_e.next=ke,T|=ge;if(k=k.next,k===null){if(k=_.shared.pending,k===null)break;ge=k,k=ge.next,ge.next=null,_.lastBaseUpdate=ge,_.shared.pending=null}}while(!0);if(_e===null&&(H=Me),_.baseState=H,_.firstBaseUpdate=ne,_.lastBaseUpdate=_e,o=_.shared.interleaved,o!==null){_=o;do T|=_.lane,_=_.next;while(_!==o)}else M===null&&(_.shared.lanes=0);ds|=T,r.lanes=T,r.memoizedState=Me}}function Gm(r,o,u){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var f=r[o],_=f.callback;if(_!==null){if(f.callback=null,f=u,typeof _!="function")throw Error(t(191,_));_.call(f)}}}var Ma={},Bi=br(Ma),Sa=br(Ma),Ea=br(Ma);function us(r){if(r===Ma)throw Error(t(174));return r}function hd(r,o){switch(qt(Ea,o),qt(Sa,r),qt(Bi,Ma),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:me(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=me(o,r)}Zt(Bi),qt(Bi,o)}function io(){Zt(Bi),Zt(Sa),Zt(Ea)}function Wm(r){us(Ea.current);var o=us(Bi.current),u=me(o,r.type);o!==u&&(qt(Sa,r),qt(Bi,u))}function fd(r){Sa.current===r&&(Zt(Bi),Zt(Sa))}var Jt=br(0);function Xl(r){for(var o=r;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var pd=[];function md(){for(var r=0;r<pd.length;r++)pd[r]._workInProgressVersionPrimary=null;pd.length=0}var jl=w.ReactCurrentDispatcher,gd=w.ReactCurrentBatchConfig,cs=0,en=null,cn=null,_n=null,Yl=!1,Ta=!1,wa=0,zy=0;function Rn(){throw Error(t(321))}function _d(r,o){if(o===null)return!1;for(var u=0;u<o.length&&u<r.length;u++)if(!yi(r[u],o[u]))return!1;return!0}function vd(r,o,u,f,_,M){if(cs=M,en=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,jl.current=r===null||r.memoizedState===null?Xy:jy,r=u(f,_),Ta){M=0;do{if(Ta=!1,wa=0,25<=M)throw Error(t(301));M+=1,_n=cn=null,o.updateQueue=null,jl.current=Yy,r=u(f,_)}while(Ta)}if(jl.current=Kl,o=cn!==null&&cn.next!==null,cs=0,_n=cn=en=null,Yl=!1,o)throw Error(t(300));return r}function xd(){var r=wa!==0;return wa=0,r}function Vi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?en.memoizedState=_n=r:_n=_n.next=r,_n}function ai(){if(cn===null){var r=en.alternate;r=r!==null?r.memoizedState:null}else r=cn.next;var o=_n===null?en.memoizedState:_n.next;if(o!==null)_n=o,cn=r;else{if(r===null)throw Error(t(310));cn=r,r={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},_n===null?en.memoizedState=_n=r:_n=_n.next=r}return _n}function Aa(r,o){return typeof o=="function"?o(r):o}function yd(r){var o=ai(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=r;var f=cn,_=f.baseQueue,M=u.pending;if(M!==null){if(_!==null){var T=_.next;_.next=M.next,M.next=T}f.baseQueue=_=M,u.pending=null}if(_!==null){M=_.next,f=f.baseState;var k=T=null,H=null,ne=M;do{var _e=ne.lane;if((cs&_e)===_e)H!==null&&(H=H.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),f=ne.hasEagerState?ne.eagerState:r(f,ne.action);else{var Me={lane:_e,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};H===null?(k=H=Me,T=f):H=H.next=Me,en.lanes|=_e,ds|=_e}ne=ne.next}while(ne!==null&&ne!==M);H===null?T=f:H.next=k,yi(f,o.memoizedState)||(jn=!0),o.memoizedState=f,o.baseState=T,o.baseQueue=H,u.lastRenderedState=f}if(r=u.interleaved,r!==null){_=r;do M=_.lane,en.lanes|=M,ds|=M,_=_.next;while(_!==r)}else _===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function Md(r){var o=ai(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=r;var f=u.dispatch,_=u.pending,M=o.memoizedState;if(_!==null){u.pending=null;var T=_=_.next;do M=r(M,T.action),T=T.next;while(T!==_);yi(M,o.memoizedState)||(jn=!0),o.memoizedState=M,o.baseQueue===null&&(o.baseState=M),u.lastRenderedState=M}return[M,f]}function Xm(){}function jm(r,o){var u=en,f=ai(),_=o(),M=!yi(f.memoizedState,_);if(M&&(f.memoizedState=_,jn=!0),f=f.queue,Sd($m.bind(null,u,f,r),[r]),f.getSnapshot!==o||M||_n!==null&&_n.memoizedState.tag&1){if(u.flags|=2048,Ra(9,qm.bind(null,u,f,_,o),void 0,null),vn===null)throw Error(t(349));(cs&30)!==0||Ym(u,o,_)}return _}function Ym(r,o,u){r.flags|=16384,r={getSnapshot:o,value:u},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.stores=[r]):(u=o.stores,u===null?o.stores=[r]:u.push(r))}function qm(r,o,u,f){o.value=u,o.getSnapshot=f,Km(o)&&Zm(r)}function $m(r,o,u){return u(function(){Km(o)&&Zm(r)})}function Km(r){var o=r.getSnapshot;r=r.value;try{var u=o();return!yi(r,u)}catch{return!0}}function Zm(r){var o=sr(r,1);o!==null&&wi(o,r,1,-1)}function Qm(r){var o=Vi();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:r},o.queue=r,r=r.dispatch=Wy.bind(null,en,r),[o.memoizedState,r]}function Ra(r,o,u,f){return r={tag:r,create:o,destroy:u,deps:f,next:null},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.lastEffect=r.next=r):(u=o.lastEffect,u===null?o.lastEffect=r.next=r:(f=u.next,u.next=r,r.next=f,o.lastEffect=r)),r}function Jm(){return ai().memoizedState}function ql(r,o,u,f){var _=Vi();en.flags|=r,_.memoizedState=Ra(1|o,u,void 0,f===void 0?null:f)}function $l(r,o,u,f){var _=ai();f=f===void 0?null:f;var M=void 0;if(cn!==null){var T=cn.memoizedState;if(M=T.destroy,f!==null&&_d(f,T.deps)){_.memoizedState=Ra(o,u,M,f);return}}en.flags|=r,_.memoizedState=Ra(1|o,u,M,f)}function eg(r,o){return ql(8390656,8,r,o)}function Sd(r,o){return $l(2048,8,r,o)}function tg(r,o){return $l(4,2,r,o)}function ng(r,o){return $l(4,4,r,o)}function ig(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function rg(r,o,u){return u=u!=null?u.concat([r]):null,$l(4,4,ig.bind(null,o,r),u)}function Ed(){}function sg(r,o){var u=ai();o=o===void 0?null:o;var f=u.memoizedState;return f!==null&&o!==null&&_d(o,f[1])?f[0]:(u.memoizedState=[r,o],r)}function og(r,o){var u=ai();o=o===void 0?null:o;var f=u.memoizedState;return f!==null&&o!==null&&_d(o,f[1])?f[0]:(r=r(),u.memoizedState=[r,o],r)}function ag(r,o,u){return(cs&21)===0?(r.baseState&&(r.baseState=!1,jn=!0),r.memoizedState=u):(yi(u,o)||(u=Un(),en.lanes|=u,ds|=u,r.baseState=!0),o)}function Hy(r,o){var u=Tt;Tt=u!==0&&4>u?u:4,r(!0);var f=gd.transition;gd.transition={};try{r(!1),o()}finally{Tt=u,gd.transition=f}}function lg(){return ai().memoizedState}function Gy(r,o,u){var f=Or(r);if(u={lane:f,action:u,hasEagerState:!1,eagerState:null,next:null},ug(r))cg(o,u);else if(u=Vm(r,o,u,f),u!==null){var _=Fn();wi(u,r,f,_),dg(u,o,f)}}function Wy(r,o,u){var f=Or(r),_={lane:f,action:u,hasEagerState:!1,eagerState:null,next:null};if(ug(r))cg(o,_);else{var M=r.alternate;if(r.lanes===0&&(M===null||M.lanes===0)&&(M=o.lastRenderedReducer,M!==null))try{var T=o.lastRenderedState,k=M(T,u);if(_.hasEagerState=!0,_.eagerState=k,yi(k,T)){var H=o.interleaved;H===null?(_.next=_,cd(o)):(_.next=H.next,H.next=_),o.interleaved=_;return}}catch{}finally{}u=Vm(r,o,_,f),u!==null&&(_=Fn(),wi(u,r,f,_),dg(u,o,f))}}function ug(r){var o=r.alternate;return r===en||o!==null&&o===en}function cg(r,o){Ta=Yl=!0;var u=r.pending;u===null?o.next=o:(o.next=u.next,u.next=o),r.pending=o}function dg(r,o,u){if((u&4194240)!==0){var f=o.lanes;f&=r.pendingLanes,u|=f,o.lanes=u,is(r,u)}}var Kl={readContext:oi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Xy={readContext:oi,useCallback:function(r,o){return Vi().memoizedState=[r,o===void 0?null:o],r},useContext:oi,useEffect:eg,useImperativeHandle:function(r,o,u){return u=u!=null?u.concat([r]):null,ql(4194308,4,ig.bind(null,o,r),u)},useLayoutEffect:function(r,o){return ql(4194308,4,r,o)},useInsertionEffect:function(r,o){return ql(4,2,r,o)},useMemo:function(r,o){var u=Vi();return o=o===void 0?null:o,r=r(),u.memoizedState=[r,o],r},useReducer:function(r,o,u){var f=Vi();return o=u!==void 0?u(o):o,f.memoizedState=f.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},f.queue=r,r=r.dispatch=Gy.bind(null,en,r),[f.memoizedState,r]},useRef:function(r){var o=Vi();return r={current:r},o.memoizedState=r},useState:Qm,useDebugValue:Ed,useDeferredValue:function(r){return Vi().memoizedState=r},useTransition:function(){var r=Qm(!1),o=r[0];return r=Hy.bind(null,r[1]),Vi().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,u){var f=en,_=Vi();if(Qt){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),vn===null)throw Error(t(349));(cs&30)!==0||Ym(f,o,u)}_.memoizedState=u;var M={value:u,getSnapshot:o};return _.queue=M,eg($m.bind(null,f,M,r),[r]),f.flags|=2048,Ra(9,qm.bind(null,f,M,u,o),void 0,null),u},useId:function(){var r=Vi(),o=vn.identifierPrefix;if(Qt){var u=rr,f=ir;u=(f&~(1<<32-Rt(f)-1)).toString(32)+u,o=":"+o+"R"+u,u=wa++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=zy++,o=":"+o+"r"+u.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},jy={readContext:oi,useCallback:sg,useContext:oi,useEffect:Sd,useImperativeHandle:rg,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:yd,useRef:Jm,useState:function(){return yd(Aa)},useDebugValue:Ed,useDeferredValue:function(r){var o=ai();return ag(o,cn.memoizedState,r)},useTransition:function(){var r=yd(Aa)[0],o=ai().memoizedState;return[r,o]},useMutableSource:Xm,useSyncExternalStore:jm,useId:lg,unstable_isNewReconciler:!1},Yy={readContext:oi,useCallback:sg,useContext:oi,useEffect:Sd,useImperativeHandle:rg,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:Md,useRef:Jm,useState:function(){return Md(Aa)},useDebugValue:Ed,useDeferredValue:function(r){var o=ai();return cn===null?o.memoizedState=r:ag(o,cn.memoizedState,r)},useTransition:function(){var r=Md(Aa)[0],o=ai().memoizedState;return[r,o]},useMutableSource:Xm,useSyncExternalStore:jm,useId:lg,unstable_isNewReconciler:!1};function Si(r,o){if(r&&r.defaultProps){o=Y({},o),r=r.defaultProps;for(var u in r)o[u]===void 0&&(o[u]=r[u]);return o}return o}function Td(r,o,u,f){o=r.memoizedState,u=u(f,o),u=u==null?o:Y({},o,u),r.memoizedState=u,r.lanes===0&&(r.updateQueue.baseState=u)}var Zl={isMounted:function(r){return(r=r._reactInternals)?Fi(r)===r:!1},enqueueSetState:function(r,o,u){r=r._reactInternals;var f=Fn(),_=Or(r),M=or(f,_);M.payload=o,u!=null&&(M.callback=u),o=Ir(r,M,_),o!==null&&(wi(o,r,_,f),Gl(o,r,_))},enqueueReplaceState:function(r,o,u){r=r._reactInternals;var f=Fn(),_=Or(r),M=or(f,_);M.tag=1,M.payload=o,u!=null&&(M.callback=u),o=Ir(r,M,_),o!==null&&(wi(o,r,_,f),Gl(o,r,_))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var u=Fn(),f=Or(r),_=or(u,f);_.tag=2,o!=null&&(_.callback=o),o=Ir(r,_,f),o!==null&&(wi(o,r,f,u),Gl(o,r,f))}};function hg(r,o,u,f,_,M,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,M,T):o.prototype&&o.prototype.isPureReactComponent?!fa(u,f)||!fa(_,M):!0}function fg(r,o,u){var f=!1,_=Cr,M=o.contextType;return typeof M=="object"&&M!==null?M=oi(M):(_=Xn(o)?ss:An.current,f=o.contextTypes,M=(f=f!=null)?Ks(r,_):Cr),o=new o(u,M),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Zl,r.stateNode=o,o._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=_,r.__reactInternalMemoizedMaskedChildContext=M),o}function pg(r,o,u,f){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,f),o.state!==r&&Zl.enqueueReplaceState(o,o.state,null)}function wd(r,o,u,f){var _=r.stateNode;_.props=u,_.state=r.memoizedState,_.refs={},dd(r);var M=o.contextType;typeof M=="object"&&M!==null?_.context=oi(M):(M=Xn(o)?ss:An.current,_.context=Ks(r,M)),_.state=r.memoizedState,M=o.getDerivedStateFromProps,typeof M=="function"&&(Td(r,o,M,u),_.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(o=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),o!==_.state&&Zl.enqueueReplaceState(_,_.state,null),Wl(r,u,_,f),_.state=r.memoizedState),typeof _.componentDidMount=="function"&&(r.flags|=4194308)}function ro(r,o){try{var u="",f=o;do u+=Oe(f),f=f.return;while(f);var _=u}catch(M){_=`
Error generating stack: `+M.message+`
`+M.stack}return{value:r,source:o,stack:_,digest:null}}function Ad(r,o,u){return{value:r,source:null,stack:u??null,digest:o??null}}function Rd(r,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var qy=typeof WeakMap=="function"?WeakMap:Map;function mg(r,o,u){u=or(-1,u),u.tag=3,u.payload={element:null};var f=o.value;return u.callback=function(){ru||(ru=!0,Hd=f),Rd(r,o)},u}function gg(r,o,u){u=or(-1,u),u.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var _=o.value;u.payload=function(){return f(_)},u.callback=function(){Rd(r,o)}}var M=r.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(u.callback=function(){Rd(r,o),typeof f!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),u}function _g(r,o,u){var f=r.pingCache;if(f===null){f=r.pingCache=new qy;var _=new Set;f.set(o,_)}else _=f.get(o),_===void 0&&(_=new Set,f.set(o,_));_.has(u)||(_.add(u),r=lM.bind(null,r,o,u),o.then(r,r))}function vg(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function xg(r,o,u,f,_){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=or(-1,1),o.tag=2,Ir(u,o,1))),u.lanes|=1),r):(r.flags|=65536,r.lanes=_,r)}var $y=w.ReactCurrentOwner,jn=!1;function On(r,o,u,f){o.child=r===null?Bm(o,null,u,f):eo(o,r.child,u,f)}function yg(r,o,u,f,_){u=u.render;var M=o.ref;return no(o,_),f=vd(r,o,u,f,M,_),u=xd(),r!==null&&!jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~_,ar(r,o,_)):(Qt&&u&&td(o),o.flags|=1,On(r,o,f,_),o.child)}function Mg(r,o,u,f,_){if(r===null){var M=u.type;return typeof M=="function"&&!$d(M)&&M.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=M,Sg(r,o,M,f,_)):(r=cu(u.type,null,f,o,o.mode,_),r.ref=o.ref,r.return=o,o.child=r)}if(M=r.child,(r.lanes&_)===0){var T=M.memoizedProps;if(u=u.compare,u=u!==null?u:fa,u(T,f)&&r.ref===o.ref)return ar(r,o,_)}return o.flags|=1,r=kr(M,f),r.ref=o.ref,r.return=o,o.child=r}function Sg(r,o,u,f,_){if(r!==null){var M=r.memoizedProps;if(fa(M,f)&&r.ref===o.ref)if(jn=!1,o.pendingProps=f=M,(r.lanes&_)!==0)(r.flags&131072)!==0&&(jn=!0);else return o.lanes=r.lanes,ar(r,o,_)}return bd(r,o,u,f,_)}function Eg(r,o,u){var f=o.pendingProps,_=f.children,M=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(oo,Jn),Jn|=u;else{if((u&1073741824)===0)return r=M!==null?M.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,qt(oo,Jn),Jn|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=M!==null?M.baseLanes:u,qt(oo,Jn),Jn|=f}else M!==null?(f=M.baseLanes|u,o.memoizedState=null):f=u,qt(oo,Jn),Jn|=f;return On(r,o,_,u),o.child}function Tg(r,o){var u=o.ref;(r===null&&u!==null||r!==null&&r.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function bd(r,o,u,f,_){var M=Xn(u)?ss:An.current;return M=Ks(o,M),no(o,_),u=vd(r,o,u,f,M,_),f=xd(),r!==null&&!jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~_,ar(r,o,_)):(Qt&&f&&td(o),o.flags|=1,On(r,o,u,_),o.child)}function wg(r,o,u,f,_){if(Xn(u)){var M=!0;Ul(o)}else M=!1;if(no(o,_),o.stateNode===null)Jl(r,o),fg(o,u,f),wd(o,u,f,_),f=!0;else if(r===null){var T=o.stateNode,k=o.memoizedProps;T.props=k;var H=T.context,ne=u.contextType;typeof ne=="object"&&ne!==null?ne=oi(ne):(ne=Xn(u)?ss:An.current,ne=Ks(o,ne));var _e=u.getDerivedStateFromProps,Me=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";Me||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==f||H!==ne)&&pg(o,T,f,ne),Lr=!1;var ge=o.memoizedState;T.state=ge,Wl(o,f,T,_),H=o.memoizedState,k!==f||ge!==H||Wn.current||Lr?(typeof _e=="function"&&(Td(o,u,_e,f),H=o.memoizedState),(k=Lr||hg(o,u,k,f,ge,H,ne))?(Me||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=H),T.props=f,T.state=H,T.context=ne,f=k):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{T=o.stateNode,zm(r,o),k=o.memoizedProps,ne=o.type===o.elementType?k:Si(o.type,k),T.props=ne,Me=o.pendingProps,ge=T.context,H=u.contextType,typeof H=="object"&&H!==null?H=oi(H):(H=Xn(u)?ss:An.current,H=Ks(o,H));var ke=u.getDerivedStateFromProps;(_e=typeof ke=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==Me||ge!==H)&&pg(o,T,f,H),Lr=!1,ge=o.memoizedState,T.state=ge,Wl(o,f,T,_);var Xe=o.memoizedState;k!==Me||ge!==Xe||Wn.current||Lr?(typeof ke=="function"&&(Td(o,u,ke,f),Xe=o.memoizedState),(ne=Lr||hg(o,u,ne,f,ge,Xe,H)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,Xe,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,Xe,H)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||k===r.memoizedProps&&ge===r.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&ge===r.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=Xe),T.props=f,T.state=Xe,T.context=H,f=ne):(typeof T.componentDidUpdate!="function"||k===r.memoizedProps&&ge===r.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&ge===r.memoizedState||(o.flags|=1024),f=!1)}return Cd(r,o,u,f,M,_)}function Cd(r,o,u,f,_,M){Tg(r,o);var T=(o.flags&128)!==0;if(!f&&!T)return _&&Pm(o,u,!1),ar(r,o,M);f=o.stateNode,$y.current=o;var k=T&&typeof u.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,r!==null&&T?(o.child=eo(o,r.child,null,M),o.child=eo(o,null,k,M)):On(r,o,k,M),o.memoizedState=f.state,_&&Pm(o,u,!0),o.child}function Ag(r){var o=r.stateNode;o.pendingContext?bm(r,o.pendingContext,o.pendingContext!==o.context):o.context&&bm(r,o.context,!1),hd(r,o.containerInfo)}function Rg(r,o,u,f,_){return Js(),sd(_),o.flags|=256,On(r,o,u,f),o.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function Ld(r){return{baseLanes:r,cachePool:null,transitions:null}}function bg(r,o,u){var f=o.pendingProps,_=Jt.current,M=!1,T=(o.flags&128)!==0,k;if((k=T)||(k=r!==null&&r.memoizedState===null?!1:(_&2)!==0),k?(M=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(_|=1),qt(Jt,_&1),r===null)return rd(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(T=f.children,r=f.fallback,M?(f=o.mode,M=o.child,T={mode:"hidden",children:T},(f&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=T):M=du(T,f,0,null),r=ms(r,f,u,null),M.return=o,r.return=o,M.sibling=r,o.child=M,o.child.memoizedState=Ld(u),o.memoizedState=Pd,r):Id(o,T));if(_=r.memoizedState,_!==null&&(k=_.dehydrated,k!==null))return Ky(r,o,T,f,k,_,u);if(M){M=f.fallback,T=o.mode,_=r.child,k=_.sibling;var H={mode:"hidden",children:f.children};return(T&1)===0&&o.child!==_?(f=o.child,f.childLanes=0,f.pendingProps=H,o.deletions=null):(f=kr(_,H),f.subtreeFlags=_.subtreeFlags&14680064),k!==null?M=kr(k,M):(M=ms(M,T,u,null),M.flags|=2),M.return=o,f.return=o,f.sibling=M,o.child=f,f=M,M=o.child,T=r.child.memoizedState,T=T===null?Ld(u):{baseLanes:T.baseLanes|u,cachePool:null,transitions:T.transitions},M.memoizedState=T,M.childLanes=r.childLanes&~u,o.memoizedState=Pd,f}return M=r.child,r=M.sibling,f=kr(M,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=u),f.return=o,f.sibling=null,r!==null&&(u=o.deletions,u===null?(o.deletions=[r],o.flags|=16):u.push(r)),o.child=f,o.memoizedState=null,f}function Id(r,o){return o=du({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function Ql(r,o,u,f){return f!==null&&sd(f),eo(o,r.child,null,u),r=Id(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function Ky(r,o,u,f,_,M,T){if(u)return o.flags&256?(o.flags&=-257,f=Ad(Error(t(422))),Ql(r,o,T,f)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(M=f.fallback,_=o.mode,f=du({mode:"visible",children:f.children},_,0,null),M=ms(M,_,T,null),M.flags|=2,f.return=o,M.return=o,f.sibling=M,o.child=f,(o.mode&1)!==0&&eo(o,r.child,null,T),o.child.memoizedState=Ld(T),o.memoizedState=Pd,M);if((o.mode&1)===0)return Ql(r,o,T,null);if(_.data==="$!"){if(f=_.nextSibling&&_.nextSibling.dataset,f)var k=f.dgst;return f=k,M=Error(t(419)),f=Ad(M,f,void 0),Ql(r,o,T,f)}if(k=(T&r.childLanes)!==0,jn||k){if(f=vn,f!==null){switch(T&-T){case 4:_=2;break;case 16:_=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:_=32;break;case 536870912:_=268435456;break;default:_=0}_=(_&(f.suspendedLanes|T))!==0?0:_,_!==0&&_!==M.retryLane&&(M.retryLane=_,sr(r,_),wi(f,r,_,-1))}return qd(),f=Ad(Error(t(421))),Ql(r,o,T,f)}return _.data==="$?"?(o.flags|=128,o.child=r.child,o=uM.bind(null,r),_._reactRetry=o,null):(r=M.treeContext,Qn=Rr(_.nextSibling),Zn=o,Qt=!0,Mi=null,r!==null&&(ri[si++]=ir,ri[si++]=rr,ri[si++]=os,ir=r.id,rr=r.overflow,os=o),o=Id(o,f.children),o.flags|=4096,o)}function Cg(r,o,u){r.lanes|=o;var f=r.alternate;f!==null&&(f.lanes|=o),ud(r.return,o,u)}function Nd(r,o,u,f,_){var M=r.memoizedState;M===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:u,tailMode:_}:(M.isBackwards=o,M.rendering=null,M.renderingStartTime=0,M.last=f,M.tail=u,M.tailMode=_)}function Pg(r,o,u){var f=o.pendingProps,_=f.revealOrder,M=f.tail;if(On(r,o,f.children,u),f=Jt.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Cg(r,u,o);else if(r.tag===19)Cg(r,u,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(qt(Jt,f),(o.mode&1)===0)o.memoizedState=null;else switch(_){case"forwards":for(u=o.child,_=null;u!==null;)r=u.alternate,r!==null&&Xl(r)===null&&(_=u),u=u.sibling;u=_,u===null?(_=o.child,o.child=null):(_=u.sibling,u.sibling=null),Nd(o,!1,_,u,M);break;case"backwards":for(u=null,_=o.child,o.child=null;_!==null;){if(r=_.alternate,r!==null&&Xl(r)===null){o.child=_;break}r=_.sibling,_.sibling=u,u=_,_=r}Nd(o,!0,u,null,M);break;case"together":Nd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Jl(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function ar(r,o,u){if(r!==null&&(o.dependencies=r.dependencies),ds|=o.lanes,(u&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,u=kr(r,r.pendingProps),o.child=u,u.return=o;r.sibling!==null;)r=r.sibling,u=u.sibling=kr(r,r.pendingProps),u.return=o;u.sibling=null}return o.child}function Zy(r,o,u){switch(o.tag){case 3:Ag(o),Js();break;case 5:Wm(o);break;case 1:Xn(o.type)&&Ul(o);break;case 4:hd(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,_=o.memoizedProps.value;qt(zl,f._currentValue),f._currentValue=_;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?(qt(Jt,Jt.current&1),o.flags|=128,null):(u&o.child.childLanes)!==0?bg(r,o,u):(qt(Jt,Jt.current&1),r=ar(r,o,u),r!==null?r.sibling:null);qt(Jt,Jt.current&1);break;case 19:if(f=(u&o.childLanes)!==0,(r.flags&128)!==0){if(f)return Pg(r,o,u);o.flags|=128}if(_=o.memoizedState,_!==null&&(_.rendering=null,_.tail=null,_.lastEffect=null),qt(Jt,Jt.current),f)break;return null;case 22:case 23:return o.lanes=0,Eg(r,o,u)}return ar(r,o,u)}var Lg,Dd,Ig,Ng;Lg=function(r,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)r.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Dd=function(){},Ig=function(r,o,u,f){var _=r.memoizedProps;if(_!==f){r=o.stateNode,us(Bi.current);var M=null;switch(u){case"input":_=Nt(r,_),f=Nt(r,f),M=[];break;case"select":_=Y({},_,{value:void 0}),f=Y({},f,{value:void 0}),M=[];break;case"textarea":_=Yt(r,_),f=Yt(r,f),M=[];break;default:typeof _.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Il)}je(u,f);var T;u=null;for(ne in _)if(!f.hasOwnProperty(ne)&&_.hasOwnProperty(ne)&&_[ne]!=null)if(ne==="style"){var k=_[ne];for(T in k)k.hasOwnProperty(T)&&(u||(u={}),u[T]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(s.hasOwnProperty(ne)?M||(M=[]):(M=M||[]).push(ne,null));for(ne in f){var H=f[ne];if(k=_?.[ne],f.hasOwnProperty(ne)&&H!==k&&(H!=null||k!=null))if(ne==="style")if(k){for(T in k)!k.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(u||(u={}),u[T]="");for(T in H)H.hasOwnProperty(T)&&k[T]!==H[T]&&(u||(u={}),u[T]=H[T])}else u||(M||(M=[]),M.push(ne,u)),u=H;else ne==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,k=k?k.__html:void 0,H!=null&&k!==H&&(M=M||[]).push(ne,H)):ne==="children"?typeof H!="string"&&typeof H!="number"||(M=M||[]).push(ne,""+H):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(s.hasOwnProperty(ne)?(H!=null&&ne==="onScroll"&&Kt("scroll",r),M||k===H||(M=[])):(M=M||[]).push(ne,H))}u&&(M=M||[]).push("style",u);var ne=M;(o.updateQueue=ne)&&(o.flags|=4)}},Ng=function(r,o,u,f){u!==f&&(o.flags|=4)};function ba(r,o){if(!Qt)switch(r.tailMode){case"hidden":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r.tail=null:u.sibling=null;break;case"collapsed":u=r.tail;for(var f=null;u!==null;)u.alternate!==null&&(f=u),u=u.sibling;f===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function bn(r){var o=r.alternate!==null&&r.alternate.child===r.child,u=0,f=0;if(o)for(var _=r.child;_!==null;)u|=_.lanes|_.childLanes,f|=_.subtreeFlags&14680064,f|=_.flags&14680064,_.return=r,_=_.sibling;else for(_=r.child;_!==null;)u|=_.lanes|_.childLanes,f|=_.subtreeFlags,f|=_.flags,_.return=r,_=_.sibling;return r.subtreeFlags|=f,r.childLanes=u,o}function Qy(r,o,u){var f=o.pendingProps;switch(nd(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(o),null;case 1:return Xn(o.type)&&Dl(),bn(o),null;case 3:return f=o.stateNode,io(),Zt(Wn),Zt(An),md(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(Bl(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Mi!==null&&(Xd(Mi),Mi=null))),Dd(r,o),bn(o),null;case 5:fd(o);var _=us(Ea.current);if(u=o.type,r!==null&&o.stateNode!=null)Ig(r,o,u,f,_),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return bn(o),null}if(r=us(Bi.current),Bl(o)){f=o.stateNode,u=o.type;var M=o.memoizedProps;switch(f[ki]=o,f[va]=M,r=(o.mode&1)!==0,u){case"dialog":Kt("cancel",f),Kt("close",f);break;case"iframe":case"object":case"embed":Kt("load",f);break;case"video":case"audio":for(_=0;_<ma.length;_++)Kt(ma[_],f);break;case"source":Kt("error",f);break;case"img":case"image":case"link":Kt("error",f),Kt("load",f);break;case"details":Kt("toggle",f);break;case"input":ct(f,M),Kt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!M.multiple},Kt("invalid",f);break;case"textarea":O(f,M),Kt("invalid",f)}je(u,M),_=null;for(var T in M)if(M.hasOwnProperty(T)){var k=M[T];T==="children"?typeof k=="string"?f.textContent!==k&&(M.suppressHydrationWarning!==!0&&Ll(f.textContent,k,r),_=["children",k]):typeof k=="number"&&f.textContent!==""+k&&(M.suppressHydrationWarning!==!0&&Ll(f.textContent,k,r),_=["children",""+k]):s.hasOwnProperty(T)&&k!=null&&T==="onScroll"&&Kt("scroll",f)}switch(u){case"input":mt(f),Ut(f,M,!0);break;case"textarea":mt(f),J(f);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(f.onclick=Il)}f=_,o.updateQueue=f,f!==null&&(o.flags|=4)}else{T=_.nodeType===9?_:_.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=fe(u)),r==="http://www.w3.org/1999/xhtml"?u==="script"?(r=T.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=T.createElement(u,{is:f.is}):(r=T.createElement(u),u==="select"&&(T=r,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):r=T.createElementNS(r,u),r[ki]=o,r[va]=f,Lg(r,o,!1,!1),o.stateNode=r;e:{switch(T=Pe(u,f),u){case"dialog":Kt("cancel",r),Kt("close",r),_=f;break;case"iframe":case"object":case"embed":Kt("load",r),_=f;break;case"video":case"audio":for(_=0;_<ma.length;_++)Kt(ma[_],r);_=f;break;case"source":Kt("error",r),_=f;break;case"img":case"image":case"link":Kt("error",r),Kt("load",r),_=f;break;case"details":Kt("toggle",r),_=f;break;case"input":ct(r,f),_=Nt(r,f),Kt("invalid",r);break;case"option":_=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},_=Y({},f,{value:void 0}),Kt("invalid",r);break;case"textarea":O(r,f),_=Yt(r,f),Kt("invalid",r);break;default:_=f}je(u,_),k=_;for(M in k)if(k.hasOwnProperty(M)){var H=k[M];M==="style"?Le(r,H):M==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&$e(r,H)):M==="children"?typeof H=="string"?(u!=="textarea"||H!=="")&&ye(r,H):typeof H=="number"&&ye(r,""+H):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?H!=null&&M==="onScroll"&&Kt("scroll",r):H!=null&&L(r,M,H,T))}switch(u){case"input":mt(r),Ut(r,f,!1);break;case"textarea":mt(r),J(r);break;case"option":f.value!=null&&r.setAttribute("value",""+xe(f.value));break;case"select":r.multiple=!!f.multiple,M=f.value,M!=null?Ht(r,!!f.multiple,M,!1):f.defaultValue!=null&&Ht(r,!!f.multiple,f.defaultValue,!0);break;default:typeof _.onClick=="function"&&(r.onclick=Il)}switch(u){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return bn(o),null;case 6:if(r&&o.stateNode!=null)Ng(r,o,r.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(u=us(Ea.current),us(Bi.current),Bl(o)){if(f=o.stateNode,u=o.memoizedProps,f[ki]=o,(M=f.nodeValue!==u)&&(r=Zn,r!==null))switch(r.tag){case 3:Ll(f.nodeValue,u,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Ll(f.nodeValue,u,(r.mode&1)!==0)}M&&(o.flags|=4)}else f=(u.nodeType===9?u:u.ownerDocument).createTextNode(f),f[ki]=o,o.stateNode=f}return bn(o),null;case 13:if(Zt(Jt),f=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Qt&&Qn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Om(),Js(),o.flags|=98560,M=!1;else if(M=Bl(o),f!==null&&f.dehydrated!==null){if(r===null){if(!M)throw Error(t(318));if(M=o.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[ki]=o}else Js(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;bn(o),M=!1}else Mi!==null&&(Xd(Mi),Mi=null),M=!0;if(!M)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=u,o):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(Jt.current&1)!==0?dn===0&&(dn=3):qd())),o.updateQueue!==null&&(o.flags|=4),bn(o),null);case 4:return io(),Dd(r,o),r===null&&ga(o.stateNode.containerInfo),bn(o),null;case 10:return ld(o.type._context),bn(o),null;case 17:return Xn(o.type)&&Dl(),bn(o),null;case 19:if(Zt(Jt),M=o.memoizedState,M===null)return bn(o),null;if(f=(o.flags&128)!==0,T=M.rendering,T===null)if(f)ba(M,!1);else{if(dn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(T=Xl(r),T!==null){for(o.flags|=128,ba(M,!1),f=T.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=u,u=o.child;u!==null;)M=u,r=f,M.flags&=14680066,T=M.alternate,T===null?(M.childLanes=0,M.lanes=r,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=T.childLanes,M.lanes=T.lanes,M.child=T.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=T.memoizedProps,M.memoizedState=T.memoizedState,M.updateQueue=T.updateQueue,M.type=T.type,r=T.dependencies,M.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),u=u.sibling;return qt(Jt,Jt.current&1|2),o.child}r=r.sibling}M.tail!==null&&j()>ao&&(o.flags|=128,f=!0,ba(M,!1),o.lanes=4194304)}else{if(!f)if(r=Xl(T),r!==null){if(o.flags|=128,f=!0,u=r.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),ba(M,!0),M.tail===null&&M.tailMode==="hidden"&&!T.alternate&&!Qt)return bn(o),null}else 2*j()-M.renderingStartTime>ao&&u!==1073741824&&(o.flags|=128,f=!0,ba(M,!1),o.lanes=4194304);M.isBackwards?(T.sibling=o.child,o.child=T):(u=M.last,u!==null?u.sibling=T:o.child=T,M.last=T)}return M.tail!==null?(o=M.tail,M.rendering=o,M.tail=o.sibling,M.renderingStartTime=j(),o.sibling=null,u=Jt.current,qt(Jt,f?u&1|2:u&1),o):(bn(o),null);case 22:case 23:return Yd(),f=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(Jn&1073741824)!==0&&(bn(o),o.subtreeFlags&6&&(o.flags|=8192)):bn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function Jy(r,o){switch(nd(o),o.tag){case 1:return Xn(o.type)&&Dl(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return io(),Zt(Wn),Zt(An),md(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return fd(o),null;case 13:if(Zt(Jt),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Js()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return Zt(Jt),null;case 4:return io(),null;case 10:return ld(o.type._context),null;case 22:case 23:return Yd(),null;case 24:return null;default:return null}}var eu=!1,Cn=!1,eM=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function so(r,o){var u=r.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(f){nn(r,o,f)}else u.current=null}function Ud(r,o,u){try{u()}catch(f){nn(r,o,f)}}var Dg=!1;function tM(r,o){if(Yc=yl,r=hm(),Bc(r)){if("selectionStart"in r)var u={start:r.selectionStart,end:r.selectionEnd};else e:{u=(u=r.ownerDocument)&&u.defaultView||window;var f=u.getSelection&&u.getSelection();if(f&&f.rangeCount!==0){u=f.anchorNode;var _=f.anchorOffset,M=f.focusNode;f=f.focusOffset;try{u.nodeType,M.nodeType}catch{u=null;break e}var T=0,k=-1,H=-1,ne=0,_e=0,Me=r,ge=null;t:for(;;){for(var ke;Me!==u||_!==0&&Me.nodeType!==3||(k=T+_),Me!==M||f!==0&&Me.nodeType!==3||(H=T+f),Me.nodeType===3&&(T+=Me.nodeValue.length),(ke=Me.firstChild)!==null;)ge=Me,Me=ke;for(;;){if(Me===r)break t;if(ge===u&&++ne===_&&(k=T),ge===M&&++_e===f&&(H=T),(ke=Me.nextSibling)!==null)break;Me=ge,ge=Me.parentNode}Me=ke}u=k===-1||H===-1?null:{start:k,end:H}}else u=null}u=u||{start:0,end:0}}else u=null;for(qc={focusedElem:r,selectionRange:u},yl=!1,Ge=o;Ge!==null;)if(o=Ge,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,Ge=r;else for(;Ge!==null;){o=Ge;try{var Xe=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,on=Xe.memoizedState,Z=o.stateNode,X=Z.getSnapshotBeforeUpdate(o.elementType===o.type?qe:Si(o.type,qe),on);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var te=o.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){nn(o,o.return,Ae)}if(r=o.sibling,r!==null){r.return=o.return,Ge=r;break}Ge=o.return}return Xe=Dg,Dg=!1,Xe}function Ca(r,o,u){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var _=f=f.next;do{if((_.tag&r)===r){var M=_.destroy;_.destroy=void 0,M!==void 0&&Ud(o,u,M)}_=_.next}while(_!==f)}}function tu(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&r)===r){var f=u.create;u.destroy=f()}u=u.next}while(u!==o)}}function Od(r){var o=r.ref;if(o!==null){var u=r.stateNode;switch(r.tag){case 5:r=u;break;default:r=u}typeof o=="function"?o(r):o.current=r}}function Ug(r){var o=r.alternate;o!==null&&(r.alternate=null,Ug(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[ki],delete o[va],delete o[Qc],delete o[Fy],delete o[ky])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Og(r){return r.tag===5||r.tag===3||r.tag===4}function Fg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Og(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Fd(r,o,u){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(r,o):u.insertBefore(r,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(r,u)):(o=u,o.appendChild(r)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=Il));else if(f!==4&&(r=r.child,r!==null))for(Fd(r,o,u),r=r.sibling;r!==null;)Fd(r,o,u),r=r.sibling}function kd(r,o,u){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?u.insertBefore(r,o):u.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(kd(r,o,u),r=r.sibling;r!==null;)kd(r,o,u),r=r.sibling}var Sn=null,Ei=!1;function Nr(r,o,u){for(u=u.child;u!==null;)kg(r,o,u),u=u.sibling}function kg(r,o,u){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Qe,u)}catch{}switch(u.tag){case 5:Cn||so(u,o);case 6:var f=Sn,_=Ei;Sn=null,Nr(r,o,u),Sn=f,Ei=_,Sn!==null&&(Ei?(r=Sn,u=u.stateNode,r.nodeType===8?r.parentNode.removeChild(u):r.removeChild(u)):Sn.removeChild(u.stateNode));break;case 18:Sn!==null&&(Ei?(r=Sn,u=u.stateNode,r.nodeType===8?Zc(r.parentNode,u):r.nodeType===1&&Zc(r,u),aa(r)):Zc(Sn,u.stateNode));break;case 4:f=Sn,_=Ei,Sn=u.stateNode.containerInfo,Ei=!0,Nr(r,o,u),Sn=f,Ei=_;break;case 0:case 11:case 14:case 15:if(!Cn&&(f=u.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){_=f=f.next;do{var M=_,T=M.destroy;M=M.tag,T!==void 0&&((M&2)!==0||(M&4)!==0)&&Ud(u,o,T),_=_.next}while(_!==f)}Nr(r,o,u);break;case 1:if(!Cn&&(so(u,o),f=u.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=u.memoizedProps,f.state=u.memoizedState,f.componentWillUnmount()}catch(k){nn(u,o,k)}Nr(r,o,u);break;case 21:Nr(r,o,u);break;case 22:u.mode&1?(Cn=(f=Cn)||u.memoizedState!==null,Nr(r,o,u),Cn=f):Nr(r,o,u);break;default:Nr(r,o,u)}}function Bg(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var u=r.stateNode;u===null&&(u=r.stateNode=new eM),o.forEach(function(f){var _=cM.bind(null,r,f);u.has(f)||(u.add(f),f.then(_,_))})}}function Ti(r,o){var u=o.deletions;if(u!==null)for(var f=0;f<u.length;f++){var _=u[f];try{var M=r,T=o,k=T;e:for(;k!==null;){switch(k.tag){case 5:Sn=k.stateNode,Ei=!1;break e;case 3:Sn=k.stateNode.containerInfo,Ei=!0;break e;case 4:Sn=k.stateNode.containerInfo,Ei=!0;break e}k=k.return}if(Sn===null)throw Error(t(160));kg(M,T,_),Sn=null,Ei=!1;var H=_.alternate;H!==null&&(H.return=null),_.return=null}catch(ne){nn(_,o,ne)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Vg(o,r),o=o.sibling}function Vg(r,o){var u=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Ti(o,r),zi(r),f&4){try{Ca(3,r,r.return),tu(3,r)}catch(qe){nn(r,r.return,qe)}try{Ca(5,r,r.return)}catch(qe){nn(r,r.return,qe)}}break;case 1:Ti(o,r),zi(r),f&512&&u!==null&&so(u,u.return);break;case 5:if(Ti(o,r),zi(r),f&512&&u!==null&&so(u,u.return),r.flags&32){var _=r.stateNode;try{ye(_,"")}catch(qe){nn(r,r.return,qe)}}if(f&4&&(_=r.stateNode,_!=null)){var M=r.memoizedProps,T=u!==null?u.memoizedProps:M,k=r.type,H=r.updateQueue;if(r.updateQueue=null,H!==null)try{k==="input"&&M.type==="radio"&&M.name!=null&&et(_,M),Pe(k,T);var ne=Pe(k,M);for(T=0;T<H.length;T+=2){var _e=H[T],Me=H[T+1];_e==="style"?Le(_,Me):_e==="dangerouslySetInnerHTML"?$e(_,Me):_e==="children"?ye(_,Me):L(_,_e,Me,ne)}switch(k){case"input":Be(_,M);break;case"textarea":A(_,M);break;case"select":var ge=_._wrapperState.wasMultiple;_._wrapperState.wasMultiple=!!M.multiple;var ke=M.value;ke!=null?Ht(_,!!M.multiple,ke,!1):ge!==!!M.multiple&&(M.defaultValue!=null?Ht(_,!!M.multiple,M.defaultValue,!0):Ht(_,!!M.multiple,M.multiple?[]:"",!1))}_[va]=M}catch(qe){nn(r,r.return,qe)}}break;case 6:if(Ti(o,r),zi(r),f&4){if(r.stateNode===null)throw Error(t(162));_=r.stateNode,M=r.memoizedProps;try{_.nodeValue=M}catch(qe){nn(r,r.return,qe)}}break;case 3:if(Ti(o,r),zi(r),f&4&&u!==null&&u.memoizedState.isDehydrated)try{aa(o.containerInfo)}catch(qe){nn(r,r.return,qe)}break;case 4:Ti(o,r),zi(r);break;case 13:Ti(o,r),zi(r),_=r.child,_.flags&8192&&(M=_.memoizedState!==null,_.stateNode.isHidden=M,!M||_.alternate!==null&&_.alternate.memoizedState!==null||(zd=j())),f&4&&Bg(r);break;case 22:if(_e=u!==null&&u.memoizedState!==null,r.mode&1?(Cn=(ne=Cn)||_e,Ti(o,r),Cn=ne):Ti(o,r),zi(r),f&8192){if(ne=r.memoizedState!==null,(r.stateNode.isHidden=ne)&&!_e&&(r.mode&1)!==0)for(Ge=r,_e=r.child;_e!==null;){for(Me=Ge=_e;Ge!==null;){switch(ge=Ge,ke=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ca(4,ge,ge.return);break;case 1:so(ge,ge.return);var Xe=ge.stateNode;if(typeof Xe.componentWillUnmount=="function"){f=ge,u=ge.return;try{o=f,Xe.props=o.memoizedProps,Xe.state=o.memoizedState,Xe.componentWillUnmount()}catch(qe){nn(f,u,qe)}}break;case 5:so(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Gg(Me);continue}}ke!==null?(ke.return=ge,Ge=ke):Gg(Me)}_e=_e.sibling}e:for(_e=null,Me=r;;){if(Me.tag===5){if(_e===null){_e=Me;try{_=Me.stateNode,ne?(M=_.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(k=Me.stateNode,H=Me.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,k.style.display=Ee("display",T))}catch(qe){nn(r,r.return,qe)}}}else if(Me.tag===6){if(_e===null)try{Me.stateNode.nodeValue=ne?"":Me.memoizedProps}catch(qe){nn(r,r.return,qe)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===r)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===r)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===r)break e;_e===Me&&(_e=null),Me=Me.return}_e===Me&&(_e=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ti(o,r),zi(r),f&4&&Bg(r);break;case 21:break;default:Ti(o,r),zi(r)}}function zi(r){var o=r.flags;if(o&2){try{e:{for(var u=r.return;u!==null;){if(Og(u)){var f=u;break e}u=u.return}throw Error(t(160))}switch(f.tag){case 5:var _=f.stateNode;f.flags&32&&(ye(_,""),f.flags&=-33);var M=Fg(r);kd(r,M,_);break;case 3:case 4:var T=f.stateNode.containerInfo,k=Fg(r);Fd(r,k,T);break;default:throw Error(t(161))}}catch(H){nn(r,r.return,H)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function nM(r,o,u){Ge=r,zg(r)}function zg(r,o,u){for(var f=(r.mode&1)!==0;Ge!==null;){var _=Ge,M=_.child;if(_.tag===22&&f){var T=_.memoizedState!==null||eu;if(!T){var k=_.alternate,H=k!==null&&k.memoizedState!==null||Cn;k=eu;var ne=Cn;if(eu=T,(Cn=H)&&!ne)for(Ge=_;Ge!==null;)T=Ge,H=T.child,T.tag===22&&T.memoizedState!==null?Wg(_):H!==null?(H.return=T,Ge=H):Wg(_);for(;M!==null;)Ge=M,zg(M),M=M.sibling;Ge=_,eu=k,Cn=ne}Hg(r)}else(_.subtreeFlags&8772)!==0&&M!==null?(M.return=_,Ge=M):Hg(r)}}function Hg(r){for(;Ge!==null;){var o=Ge;if((o.flags&8772)!==0){var u=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Cn||tu(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!Cn)if(u===null)f.componentDidMount();else{var _=o.elementType===o.type?u.memoizedProps:Si(o.type,u.memoizedProps);f.componentDidUpdate(_,u.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var M=o.updateQueue;M!==null&&Gm(o,M,f);break;case 3:var T=o.updateQueue;if(T!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}Gm(o,T,u)}break;case 5:var k=o.stateNode;if(u===null&&o.flags&4){u=k;var H=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&u.focus();break;case"img":H.src&&(u.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ne=o.alternate;if(ne!==null){var _e=ne.memoizedState;if(_e!==null){var Me=_e.dehydrated;Me!==null&&aa(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||o.flags&512&&Od(o)}catch(ge){nn(o,o.return,ge)}}if(o===r){Ge=null;break}if(u=o.sibling,u!==null){u.return=o.return,Ge=u;break}Ge=o.return}}function Gg(r){for(;Ge!==null;){var o=Ge;if(o===r){Ge=null;break}var u=o.sibling;if(u!==null){u.return=o.return,Ge=u;break}Ge=o.return}}function Wg(r){for(;Ge!==null;){var o=Ge;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{tu(4,o)}catch(H){nn(o,u,H)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var _=o.return;try{f.componentDidMount()}catch(H){nn(o,_,H)}}var M=o.return;try{Od(o)}catch(H){nn(o,M,H)}break;case 5:var T=o.return;try{Od(o)}catch(H){nn(o,T,H)}}}catch(H){nn(o,o.return,H)}if(o===r){Ge=null;break}var k=o.sibling;if(k!==null){k.return=o.return,Ge=k;break}Ge=o.return}}var iM=Math.ceil,nu=w.ReactCurrentDispatcher,Bd=w.ReactCurrentOwner,li=w.ReactCurrentBatchConfig,Pt=0,vn=null,an=null,En=0,Jn=0,oo=br(0),dn=0,Pa=null,ds=0,iu=0,Vd=0,La=null,Yn=null,zd=0,ao=1/0,lr=null,ru=!1,Hd=null,Dr=null,su=!1,Ur=null,ou=0,Ia=0,Gd=null,au=-1,lu=0;function Fn(){return(Pt&6)!==0?j():au!==-1?au:au=j()}function Or(r){return(r.mode&1)===0?1:(Pt&2)!==0&&En!==0?En&-En:Vy.transition!==null?(lu===0&&(lu=Un()),lu):(r=Tt,r!==0||(r=window.event,r=r===void 0?16:jp(r.type)),r)}function wi(r,o,u,f){if(50<Ia)throw Ia=0,Gd=null,Error(t(185));sn(r,u,f),((Pt&2)===0||r!==vn)&&(r===vn&&((Pt&2)===0&&(iu|=u),dn===4&&Fr(r,En)),qn(r,f),u===1&&Pt===0&&(o.mode&1)===0&&(ao=j()+500,Ol&&Pr()))}function qn(r,o){var u=r.callbackNode;ns(r,o);var f=xi(r,r===vn?En:0);if(f===0)u!==null&&$(u),r.callbackNode=null,r.callbackPriority=0;else if(o=f&-f,r.callbackPriority!==o){if(u!=null&&$(u),o===1)r.tag===0?By(jg.bind(null,r)):Lm(jg.bind(null,r)),Uy(function(){(Pt&6)===0&&Pr()}),u=null;else{switch(kp(f)){case 1:u=Ie;break;case 4:u=We;break;case 16:u=Fe;break;case 536870912:u=at;break;default:u=Fe}u=e_(u,Xg.bind(null,r))}r.callbackPriority=o,r.callbackNode=u}}function Xg(r,o){if(au=-1,lu=0,(Pt&6)!==0)throw Error(t(327));var u=r.callbackNode;if(lo()&&r.callbackNode!==u)return null;var f=xi(r,r===vn?En:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||o)o=uu(r,f);else{o=f;var _=Pt;Pt|=2;var M=qg();(vn!==r||En!==o)&&(lr=null,ao=j()+500,fs(r,o));do try{oM();break}catch(k){Yg(r,k)}while(!0);ad(),nu.current=M,Pt=_,an!==null?o=0:(vn=null,En=0,o=dn)}if(o!==0){if(o===2&&(_=jt(r),_!==0&&(f=_,o=Wd(r,_))),o===1)throw u=Pa,fs(r,0),Fr(r,f),qn(r,j()),u;if(o===6)Fr(r,f);else{if(_=r.current.alternate,(f&30)===0&&!rM(_)&&(o=uu(r,f),o===2&&(M=jt(r),M!==0&&(f=M,o=Wd(r,M))),o===1))throw u=Pa,fs(r,0),Fr(r,f),qn(r,j()),u;switch(r.finishedWork=_,r.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:ps(r,Yn,lr);break;case 3:if(Fr(r,f),(f&130023424)===f&&(o=zd+500-j(),10<o)){if(xi(r,0)!==0)break;if(_=r.suspendedLanes,(_&f)!==f){Fn(),r.pingedLanes|=r.suspendedLanes&_;break}r.timeoutHandle=Kc(ps.bind(null,r,Yn,lr),o);break}ps(r,Yn,lr);break;case 4:if(Fr(r,f),(f&4194240)===f)break;for(o=r.eventTimes,_=-1;0<f;){var T=31-Rt(f);M=1<<T,T=o[T],T>_&&(_=T),f&=~M}if(f=_,f=j()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*iM(f/1960))-f,10<f){r.timeoutHandle=Kc(ps.bind(null,r,Yn,lr),f);break}ps(r,Yn,lr);break;case 5:ps(r,Yn,lr);break;default:throw Error(t(329))}}}return qn(r,j()),r.callbackNode===u?Xg.bind(null,r):null}function Wd(r,o){var u=La;return r.current.memoizedState.isDehydrated&&(fs(r,o).flags|=256),r=uu(r,o),r!==2&&(o=Yn,Yn=u,o!==null&&Xd(o)),r}function Xd(r){Yn===null?Yn=r:Yn.push.apply(Yn,r)}function rM(r){for(var o=r;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var f=0;f<u.length;f++){var _=u[f],M=_.getSnapshot;_=_.value;try{if(!yi(M(),_))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Fr(r,o){for(o&=~Vd,o&=~iu,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var u=31-Rt(o),f=1<<u;r[u]=-1,o&=~f}}function jg(r){if((Pt&6)!==0)throw Error(t(327));lo();var o=xi(r,0);if((o&1)===0)return qn(r,j()),null;var u=uu(r,o);if(r.tag!==0&&u===2){var f=jt(r);f!==0&&(o=f,u=Wd(r,f))}if(u===1)throw u=Pa,fs(r,0),Fr(r,o),qn(r,j()),u;if(u===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,ps(r,Yn,lr),qn(r,j()),null}function jd(r,o){var u=Pt;Pt|=1;try{return r(o)}finally{Pt=u,Pt===0&&(ao=j()+500,Ol&&Pr())}}function hs(r){Ur!==null&&Ur.tag===0&&(Pt&6)===0&&lo();var o=Pt;Pt|=1;var u=li.transition,f=Tt;try{if(li.transition=null,Tt=1,r)return r()}finally{Tt=f,li.transition=u,Pt=o,(Pt&6)===0&&Pr()}}function Yd(){Jn=oo.current,Zt(oo)}function fs(r,o){r.finishedWork=null,r.finishedLanes=0;var u=r.timeoutHandle;if(u!==-1&&(r.timeoutHandle=-1,Dy(u)),an!==null)for(u=an.return;u!==null;){var f=u;switch(nd(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Dl();break;case 3:io(),Zt(Wn),Zt(An),md();break;case 5:fd(f);break;case 4:io();break;case 13:Zt(Jt);break;case 19:Zt(Jt);break;case 10:ld(f.type._context);break;case 22:case 23:Yd()}u=u.return}if(vn=r,an=r=kr(r.current,null),En=Jn=o,dn=0,Pa=null,Vd=iu=ds=0,Yn=La=null,ls!==null){for(o=0;o<ls.length;o++)if(u=ls[o],f=u.interleaved,f!==null){u.interleaved=null;var _=f.next,M=u.pending;if(M!==null){var T=M.next;M.next=_,f.next=T}u.pending=f}ls=null}return r}function Yg(r,o){do{var u=an;try{if(ad(),jl.current=Kl,Yl){for(var f=en.memoizedState;f!==null;){var _=f.queue;_!==null&&(_.pending=null),f=f.next}Yl=!1}if(cs=0,_n=cn=en=null,Ta=!1,wa=0,Bd.current=null,u===null||u.return===null){dn=1,Pa=o,an=null;break}e:{var M=r,T=u.return,k=u,H=o;if(o=En,k.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ne=H,_e=k,Me=_e.tag;if((_e.mode&1)===0&&(Me===0||Me===11||Me===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var ke=vg(T);if(ke!==null){ke.flags&=-257,xg(ke,T,k,M,o),ke.mode&1&&_g(M,ne,o),o=ke,H=ne;var Xe=o.updateQueue;if(Xe===null){var qe=new Set;qe.add(H),o.updateQueue=qe}else Xe.add(H);break e}else{if((o&1)===0){_g(M,ne,o),qd();break e}H=Error(t(426))}}else if(Qt&&k.mode&1){var on=vg(T);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),xg(on,T,k,M,o),sd(ro(H,k));break e}}M=H=ro(H,k),dn!==4&&(dn=2),La===null?La=[M]:La.push(M),M=T;do{switch(M.tag){case 3:M.flags|=65536,o&=-o,M.lanes|=o;var Z=mg(M,H,o);Hm(M,Z);break e;case 1:k=H;var X=M.type,te=M.stateNode;if((M.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Dr===null||!Dr.has(te)))){M.flags|=65536,o&=-o,M.lanes|=o;var Ae=gg(M,k,o);Hm(M,Ae);break e}}M=M.return}while(M!==null)}Kg(u)}catch(Ke){o=Ke,an===u&&u!==null&&(an=u=u.return);continue}break}while(!0)}function qg(){var r=nu.current;return nu.current=Kl,r===null?Kl:r}function qd(){(dn===0||dn===3||dn===2)&&(dn=4),vn===null||(ds&268435455)===0&&(iu&268435455)===0||Fr(vn,En)}function uu(r,o){var u=Pt;Pt|=2;var f=qg();(vn!==r||En!==o)&&(lr=null,fs(r,o));do try{sM();break}catch(_){Yg(r,_)}while(!0);if(ad(),Pt=u,nu.current=f,an!==null)throw Error(t(261));return vn=null,En=0,dn}function sM(){for(;an!==null;)$g(an)}function oM(){for(;an!==null&&!ie();)$g(an)}function $g(r){var o=Jg(r.alternate,r,Jn);r.memoizedProps=r.pendingProps,o===null?Kg(r):an=o,Bd.current=null}function Kg(r){var o=r;do{var u=o.alternate;if(r=o.return,(o.flags&32768)===0){if(u=Qy(u,o,Jn),u!==null){an=u;return}}else{if(u=Jy(u,o),u!==null){u.flags&=32767,an=u;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{dn=6,an=null;return}}if(o=o.sibling,o!==null){an=o;return}an=o=r}while(o!==null);dn===0&&(dn=5)}function ps(r,o,u){var f=Tt,_=li.transition;try{li.transition=null,Tt=1,aM(r,o,u,f)}finally{li.transition=_,Tt=f}return null}function aM(r,o,u,f){do lo();while(Ur!==null);if((Pt&6)!==0)throw Error(t(327));u=r.finishedWork;var _=r.finishedLanes;if(u===null)return null;if(r.finishedWork=null,r.finishedLanes=0,u===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var M=u.lanes|u.childLanes;if(wn(r,M),r===vn&&(an=vn=null,En=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||su||(su=!0,e_(Fe,function(){return lo(),null})),M=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||M){M=li.transition,li.transition=null;var T=Tt;Tt=1;var k=Pt;Pt|=4,Bd.current=null,tM(r,u),Vg(u,r),Ry(qc),yl=!!Yc,qc=Yc=null,r.current=u,nM(u),re(),Pt=k,Tt=T,li.transition=M}else r.current=u;if(su&&(su=!1,Ur=r,ou=_),M=r.pendingLanes,M===0&&(Dr=null),Ot(u.stateNode),qn(r,j()),o!==null)for(f=r.onRecoverableError,u=0;u<o.length;u++)_=o[u],f(_.value,{componentStack:_.stack,digest:_.digest});if(ru)throw ru=!1,r=Hd,Hd=null,r;return(ou&1)!==0&&r.tag!==0&&lo(),M=r.pendingLanes,(M&1)!==0?r===Gd?Ia++:(Ia=0,Gd=r):Ia=0,Pr(),null}function lo(){if(Ur!==null){var r=kp(ou),o=li.transition,u=Tt;try{if(li.transition=null,Tt=16>r?16:r,Ur===null)var f=!1;else{if(r=Ur,Ur=null,ou=0,(Pt&6)!==0)throw Error(t(331));var _=Pt;for(Pt|=4,Ge=r.current;Ge!==null;){var M=Ge,T=M.child;if((Ge.flags&16)!==0){var k=M.deletions;if(k!==null){for(var H=0;H<k.length;H++){var ne=k[H];for(Ge=ne;Ge!==null;){var _e=Ge;switch(_e.tag){case 0:case 11:case 15:Ca(8,_e,M)}var Me=_e.child;if(Me!==null)Me.return=_e,Ge=Me;else for(;Ge!==null;){_e=Ge;var ge=_e.sibling,ke=_e.return;if(Ug(_e),_e===ne){Ge=null;break}if(ge!==null){ge.return=ke,Ge=ge;break}Ge=ke}}}var Xe=M.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var on=qe.sibling;qe.sibling=null,qe=on}while(qe!==null)}}Ge=M}}if((M.subtreeFlags&2064)!==0&&T!==null)T.return=M,Ge=T;else e:for(;Ge!==null;){if(M=Ge,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:Ca(9,M,M.return)}var Z=M.sibling;if(Z!==null){Z.return=M.return,Ge=Z;break e}Ge=M.return}}var X=r.current;for(Ge=X;Ge!==null;){T=Ge;var te=T.child;if((T.subtreeFlags&2064)!==0&&te!==null)te.return=T,Ge=te;else e:for(T=X;Ge!==null;){if(k=Ge,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:tu(9,k)}}catch(Ke){nn(k,k.return,Ke)}if(k===T){Ge=null;break e}var Ae=k.sibling;if(Ae!==null){Ae.return=k.return,Ge=Ae;break e}Ge=k.return}}if(Pt=_,Pr(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Qe,r)}catch{}f=!0}return f}finally{Tt=u,li.transition=o}}return!1}function Zg(r,o,u){o=ro(u,o),o=mg(r,o,1),r=Ir(r,o,1),o=Fn(),r!==null&&(sn(r,1,o),qn(r,o))}function nn(r,o,u){if(r.tag===3)Zg(r,r,u);else for(;o!==null;){if(o.tag===3){Zg(o,r,u);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Dr===null||!Dr.has(f))){r=ro(u,r),r=gg(o,r,1),o=Ir(o,r,1),r=Fn(),o!==null&&(sn(o,1,r),qn(o,r));break}}o=o.return}}function lM(r,o,u){var f=r.pingCache;f!==null&&f.delete(o),o=Fn(),r.pingedLanes|=r.suspendedLanes&u,vn===r&&(En&u)===u&&(dn===4||dn===3&&(En&130023424)===En&&500>j()-zd?fs(r,0):Vd|=u),qn(r,o)}function Qg(r,o){o===0&&((r.mode&1)===0?o=1:(o=Et,Et<<=1,(Et&130023424)===0&&(Et=4194304)));var u=Fn();r=sr(r,o),r!==null&&(sn(r,o,u),qn(r,u))}function uM(r){var o=r.memoizedState,u=0;o!==null&&(u=o.retryLane),Qg(r,u)}function cM(r,o){var u=0;switch(r.tag){case 13:var f=r.stateNode,_=r.memoizedState;_!==null&&(u=_.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),Qg(r,u)}var Jg;Jg=function(r,o,u){if(r!==null)if(r.memoizedProps!==o.pendingProps||Wn.current)jn=!0;else{if((r.lanes&u)===0&&(o.flags&128)===0)return jn=!1,Zy(r,o,u);jn=(r.flags&131072)!==0}else jn=!1,Qt&&(o.flags&1048576)!==0&&Im(o,kl,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;Jl(r,o),r=o.pendingProps;var _=Ks(o,An.current);no(o,u),_=vd(null,o,f,r,_,u);var M=xd();return o.flags|=1,typeof _=="object"&&_!==null&&typeof _.render=="function"&&_.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Xn(f)?(M=!0,Ul(o)):M=!1,o.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,dd(o),_.updater=Zl,o.stateNode=_,_._reactInternals=o,wd(o,f,r,u),o=Cd(null,o,f,!0,M,u)):(o.tag=0,Qt&&M&&td(o),On(null,o,_,u),o=o.child),o;case 16:f=o.elementType;e:{switch(Jl(r,o),r=o.pendingProps,_=f._init,f=_(f._payload),o.type=f,_=o.tag=hM(f),r=Si(f,r),_){case 0:o=bd(null,o,f,r,u);break e;case 1:o=wg(null,o,f,r,u);break e;case 11:o=yg(null,o,f,r,u);break e;case 14:o=Mg(null,o,f,Si(f.type,r),u);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),bd(r,o,f,_,u);case 1:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),wg(r,o,f,_,u);case 3:e:{if(Ag(o),r===null)throw Error(t(387));f=o.pendingProps,M=o.memoizedState,_=M.element,zm(r,o),Wl(o,f,null,u);var T=o.memoizedState;if(f=T.element,M.isDehydrated)if(M={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=M,o.memoizedState=M,o.flags&256){_=ro(Error(t(423)),o),o=Rg(r,o,f,u,_);break e}else if(f!==_){_=ro(Error(t(424)),o),o=Rg(r,o,f,u,_);break e}else for(Qn=Rr(o.stateNode.containerInfo.firstChild),Zn=o,Qt=!0,Mi=null,u=Bm(o,null,f,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Js(),f===_){o=ar(r,o,u);break e}On(r,o,f,u)}o=o.child}return o;case 5:return Wm(o),r===null&&rd(o),f=o.type,_=o.pendingProps,M=r!==null?r.memoizedProps:null,T=_.children,$c(f,_)?T=null:M!==null&&$c(f,M)&&(o.flags|=32),Tg(r,o),On(r,o,T,u),o.child;case 6:return r===null&&rd(o),null;case 13:return bg(r,o,u);case 4:return hd(o,o.stateNode.containerInfo),f=o.pendingProps,r===null?o.child=eo(o,null,f,u):On(r,o,f,u),o.child;case 11:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),yg(r,o,f,_,u);case 7:return On(r,o,o.pendingProps,u),o.child;case 8:return On(r,o,o.pendingProps.children,u),o.child;case 12:return On(r,o,o.pendingProps.children,u),o.child;case 10:e:{if(f=o.type._context,_=o.pendingProps,M=o.memoizedProps,T=_.value,qt(zl,f._currentValue),f._currentValue=T,M!==null)if(yi(M.value,T)){if(M.children===_.children&&!Wn.current){o=ar(r,o,u);break e}}else for(M=o.child,M!==null&&(M.return=o);M!==null;){var k=M.dependencies;if(k!==null){T=M.child;for(var H=k.firstContext;H!==null;){if(H.context===f){if(M.tag===1){H=or(-1,u&-u),H.tag=2;var ne=M.updateQueue;if(ne!==null){ne=ne.shared;var _e=ne.pending;_e===null?H.next=H:(H.next=_e.next,_e.next=H),ne.pending=H}}M.lanes|=u,H=M.alternate,H!==null&&(H.lanes|=u),ud(M.return,u,o),k.lanes|=u;break}H=H.next}}else if(M.tag===10)T=M.type===o.type?null:M.child;else if(M.tag===18){if(T=M.return,T===null)throw Error(t(341));T.lanes|=u,k=T.alternate,k!==null&&(k.lanes|=u),ud(T,u,o),T=M.sibling}else T=M.child;if(T!==null)T.return=M;else for(T=M;T!==null;){if(T===o){T=null;break}if(M=T.sibling,M!==null){M.return=T.return,T=M;break}T=T.return}M=T}On(r,o,_.children,u),o=o.child}return o;case 9:return _=o.type,f=o.pendingProps.children,no(o,u),_=oi(_),f=f(_),o.flags|=1,On(r,o,f,u),o.child;case 14:return f=o.type,_=Si(f,o.pendingProps),_=Si(f.type,_),Mg(r,o,f,_,u);case 15:return Sg(r,o,o.type,o.pendingProps,u);case 17:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),Jl(r,o),o.tag=1,Xn(f)?(r=!0,Ul(o)):r=!1,no(o,u),fg(o,f,_),wd(o,f,_,u),Cd(null,o,f,!0,r,u);case 19:return Pg(r,o,u);case 22:return Eg(r,o,u)}throw Error(t(156,o.tag))};function e_(r,o){return P(r,o)}function dM(r,o,u,f){this.tag=r,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(r,o,u,f){return new dM(r,o,u,f)}function $d(r){return r=r.prototype,!(!r||!r.isReactComponent)}function hM(r){if(typeof r=="function")return $d(r)?1:0;if(r!=null){if(r=r.$$typeof,r===q)return 11;if(r===oe)return 14}return 2}function kr(r,o){var u=r.alternate;return u===null?(u=ui(r.tag,o,r.key,r.mode),u.elementType=r.elementType,u.type=r.type,u.stateNode=r.stateNode,u.alternate=r,r.alternate=u):(u.pendingProps=o,u.type=r.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=r.flags&14680064,u.childLanes=r.childLanes,u.lanes=r.lanes,u.child=r.child,u.memoizedProps=r.memoizedProps,u.memoizedState=r.memoizedState,u.updateQueue=r.updateQueue,o=r.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=r.sibling,u.index=r.index,u.ref=r.ref,u}function cu(r,o,u,f,_,M){var T=2;if(f=r,typeof r=="function")$d(r)&&(T=1);else if(typeof r=="string")T=5;else e:switch(r){case U:return ms(u.children,_,M,o);case z:T=8,_|=8;break;case C:return r=ui(12,u,o,_|2),r.elementType=C,r.lanes=M,r;case K:return r=ui(13,u,o,_),r.elementType=K,r.lanes=M,r;case he:return r=ui(19,u,o,_),r.elementType=he,r.lanes=M,r;case ue:return du(u,_,M,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case R:T=10;break e;case B:T=9;break e;case q:T=11;break e;case oe:T=14;break e;case ae:T=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=ui(T,u,o,_),o.elementType=r,o.type=f,o.lanes=M,o}function ms(r,o,u,f){return r=ui(7,r,f,o),r.lanes=u,r}function du(r,o,u,f){return r=ui(22,r,f,o),r.elementType=ue,r.lanes=u,r.stateNode={isHidden:!1},r}function Kd(r,o,u){return r=ui(6,r,null,o),r.lanes=u,r}function Zd(r,o,u){return o=ui(4,r.children!==null?r.children:[],r.key,o),o.lanes=u,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function fM(r,o,u,f,_){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tn(0),this.expirationTimes=Tn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.identifierPrefix=f,this.onRecoverableError=_,this.mutableSourceEagerHydrationData=null}function Qd(r,o,u,f,_,M,T,k,H){return r=new fM(r,o,u,k,H),o===1?(o=1,M===!0&&(o|=8)):o=0,M=ui(3,null,null,o),r.current=M,M.stateNode=r,M.memoizedState={element:f,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(M),r}function pM(r,o,u){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:r,containerInfo:o,implementation:u}}function t_(r){if(!r)return Cr;r=r._reactInternals;e:{if(Fi(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Xn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var u=r.type;if(Xn(u))return Cm(r,u,o)}return o}function n_(r,o,u,f,_,M,T,k,H){return r=Qd(u,f,!0,r,_,M,T,k,H),r.context=t_(null),u=r.current,f=Fn(),_=Or(u),M=or(f,_),M.callback=o??null,Ir(u,M,_),r.current.lanes=_,sn(r,_,f),qn(r,f),r}function hu(r,o,u,f){var _=o.current,M=Fn(),T=Or(_);return u=t_(u),o.context===null?o.context=u:o.pendingContext=u,o=or(M,T),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=Ir(_,o,T),r!==null&&(wi(r,_,T,M),Gl(r,_,T)),T}function fu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function i_(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var u=r.retryLane;r.retryLane=u!==0&&u<o?u:o}}function Jd(r,o){i_(r,o),(r=r.alternate)&&i_(r,o)}function mM(){return null}var r_=typeof reportError=="function"?reportError:function(r){console.error(r)};function eh(r){this._internalRoot=r}pu.prototype.render=eh.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));hu(r,o,null,null)},pu.prototype.unmount=eh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;hs(function(){hu(null,r,null,null)}),o[tr]=null}};function pu(r){this._internalRoot=r}pu.prototype.unstable_scheduleHydration=function(r){if(r){var o=zp();r={blockedOn:null,target:r,priority:o};for(var u=0;u<Tr.length&&o!==0&&o<Tr[u].priority;u++);Tr.splice(u,0,r),u===0&&Wp(r)}};function th(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function mu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function s_(){}function gM(r,o,u,f,_){if(_){if(typeof f=="function"){var M=f;f=function(){var ne=fu(T);M.call(ne)}}var T=n_(o,f,r,0,null,!1,!1,"",s_);return r._reactRootContainer=T,r[tr]=T.current,ga(r.nodeType===8?r.parentNode:r),hs(),T}for(;_=r.lastChild;)r.removeChild(_);if(typeof f=="function"){var k=f;f=function(){var ne=fu(H);k.call(ne)}}var H=Qd(r,0,!1,null,null,!1,!1,"",s_);return r._reactRootContainer=H,r[tr]=H.current,ga(r.nodeType===8?r.parentNode:r),hs(function(){hu(o,H,u,f)}),H}function gu(r,o,u,f,_){var M=u._reactRootContainer;if(M){var T=M;if(typeof _=="function"){var k=_;_=function(){var H=fu(T);k.call(H)}}hu(o,T,r,_)}else T=gM(u,o,r,_,f);return fu(T)}Bp=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var u=un(o.pendingLanes);u!==0&&(is(o,u|1),qn(o,j()),(Pt&6)===0&&(ao=j()+500,Pr()))}break;case 13:hs(function(){var f=sr(r,1);if(f!==null){var _=Fn();wi(f,r,1,_)}}),Jd(r,1)}},Ac=function(r){if(r.tag===13){var o=sr(r,134217728);if(o!==null){var u=Fn();wi(o,r,134217728,u)}Jd(r,134217728)}},Vp=function(r){if(r.tag===13){var o=Or(r),u=sr(r,o);if(u!==null){var f=Fn();wi(u,r,o,f)}Jd(r,o)}},zp=function(){return Tt},Hp=function(r,o){var u=Tt;try{return Tt=r,o()}finally{Tt=u}},Se=function(r,o,u){switch(o){case"input":if(Be(r,u),o=u.name,u.type==="radio"&&o!=null){for(u=r;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var f=u[o];if(f!==r&&f.form===r.form){var _=Nl(f);if(!_)throw Error(t(90));tn(f),Be(f,_)}}}break;case"textarea":A(r,u);break;case"select":o=u.value,o!=null&&Ht(r,!!u.multiple,o,!1)}},ht=jd,Ct=hs;var _M={usingClientEntryPoint:!1,Events:[xa,qs,Nl,pe,He,jd]},Na={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vM={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Vs(r),r===null?null:r.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||mM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Qe=_u.inject(vM),ft=_u}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_M,$n.createPortal=function(r,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(o))throw Error(t(200));return pM(r,o,null,u)},$n.createRoot=function(r,o){if(!th(r))throw Error(t(299));var u=!1,f="",_=r_;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),o=Qd(r,1,!1,null,null,u,!1,f,_),r[tr]=o.current,ga(r.nodeType===8?r.parentNode:r),new eh(o)},$n.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Vs(o),r=r===null?null:r.stateNode,r},$n.flushSync=function(r){return hs(r)},$n.hydrate=function(r,o,u){if(!mu(o))throw Error(t(200));return gu(null,r,o,!0,u)},$n.hydrateRoot=function(r,o,u){if(!th(r))throw Error(t(405));var f=u!=null&&u.hydratedSources||null,_=!1,M="",T=r_;if(u!=null&&(u.unstable_strictMode===!0&&(_=!0),u.identifierPrefix!==void 0&&(M=u.identifierPrefix),u.onRecoverableError!==void 0&&(T=u.onRecoverableError)),o=n_(o,null,r,1,u??null,_,!1,M,T),r[tr]=o.current,ga(r),f)for(r=0;r<f.length;r++)u=f[r],_=u._getVersion,_=_(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,_]:o.mutableSourceEagerHydrationData.push(u,_);return new pu(o)},$n.render=function(r,o,u){if(!mu(o))throw Error(t(200));return gu(null,r,o,!1,u)},$n.unmountComponentAtNode=function(r){if(!mu(r))throw Error(t(40));return r._reactRootContainer?(hs(function(){gu(null,null,r,!1,function(){r._reactRootContainer=null,r[tr]=null})}),!0):!1},$n.unstable_batchedUpdates=jd,$n.unstable_renderSubtreeIntoContainer=function(r,o,u,f){if(!mu(u))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return gu(r,o,u,!1,f)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var f_;function AM(){if(f_)return rh.exports;f_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),rh.exports=wM(),rh.exports}var p_;function RM(){if(p_)return vu;p_=1;var i=AM();return vu.createRoot=i.createRoot,vu.hydrateRoot=i.hydrateRoot,vu}var bM=RM();function A0({text:i}){const e=i.split(/```/);return ce.jsx(ce.Fragment,{children:e.map((t,n)=>n%2===1?ce.jsx("pre",{className:"code",children:ce.jsx("code",{children:t.replace(/^[\w+-]*\n/,"")})},n):ce.jsx("span",{className:"prose",children:t},n))})}function CM({name:i,messages:e,busy:t,open:n,onToggle:s,onSend:a,onStop:l,onHeight:c}){const[d,h]=gt.useState(""),m=gt.useRef(null),p=gt.useRef(null),g=gt.useRef(!1);gt.useEffect(()=>{const S=m.current,E=new ResizeObserver(()=>c(S.getBoundingClientRect().height));return E.observe(S),()=>E.disconnect()},[c]),gt.useEffect(()=>{p.current?.scrollTo({top:p.current.scrollHeight})},[e,n]);const v=S=>{S?.preventDefault();const E=d.trim();!E||t||(a(E),h(""))};return ce.jsxs("div",{className:`chat glass ${n?"open":""}`,ref:m,children:[n&&ce.jsxs("div",{className:"chat-log",ref:p,children:[e.length===0&&ce.jsx("p",{className:"chat-empty",children:"ここに会話の履歴が残ります"}),e.map((S,E)=>ce.jsxs("div",{className:`msg ${S.role} ${S.error?"error":""}`,children:[ce.jsx("div",{className:"msg-who",children:S.role==="user"?"YOU":i}),ce.jsx("div",{className:"msg-body",children:ce.jsx(A0,{text:S.content||"…"})})]},E))]}),ce.jsxs("form",{className:"chat-input",onSubmit:v,children:[ce.jsx("button",{type:"button",className:"icon-btn",onClick:s,"aria-label":n?"履歴を閉じる":"履歴を開く","aria-expanded":n,children:n?"▾":"▴"}),ce.jsx("textarea",{rows:1,value:d,placeholder:`${i}に話しかける…`,onChange:S=>h(S.target.value),onCompositionStart:()=>g.current=!0,onCompositionEnd:()=>g.current=!1,onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&!g.current&&!S.nativeEvent.isComposing&&(S.preventDefault(),v())}}),t?ce.jsx("button",{type:"button",className:"send-btn stop",onClick:l,children:"停止"}):ce.jsx("button",{type:"submit",className:"send-btn",disabled:!d.trim(),children:"送信"})]}),ce.jsx("p",{className:"chat-note",children:"患者情報など業務上の個人情報は入力しないでください"})]})}const PM=["SUN","MON","TUE","WED","THU","FRI","SAT"],LM="日月火水木金土",No=i=>String(i).padStart(2,"0");function IM(i,e){return{time:`${No(i.getHours())}:${No(i.getMinutes())}${e?`:${No(i.getSeconds())}`:""}`,date:`${i.getFullYear()}.${No(i.getMonth()+1)}.${No(i.getDate())}`,week:PM[i.getDay()],weekJa:LM[i.getDay()]}}function NM(i,e){const t=i.getHours();return t>=5&&t<11?`おはよう、${e}。今日もよろしくね`:t>=11&&t<17?`こんにちは、${e}。何か手伝えることある？`:t>=17&&t<23?`おかえり、${e}。今日もおつかれさま`:`こんな時間まで起きてるの？ ${e}、無理しないでね`}function DM(i,e){const t=`${i.getHours()}:${No(i.getMinutes())}`;return{"7:00":`おはよう、${e}。朝ごはん食べた？`,"12:00":"お昼の時間だよ。ちゃんと食べてね","15:00":"そろそろ休憩しよう。お茶でもどう？","18:00":"もう夕方だね。今日やり残したことはない？","22:00":"そろそろ明日の準備をしておこうか","0:00":"日付が変わったよ。早めに休んでね"}[t]??null}function UM(i){return i>0&&i%90===0?`${i}分続けてがんばってるね。少し目を休めよう`:null}function OM({corner:i,seconds:e}){const[t,n]=gt.useState(()=>new Date);gt.useEffect(()=>{let a=0;const l=()=>{n(new Date),a=window.setTimeout(l,1e3-Date.now()%1e3+5)};return l(),()=>clearTimeout(a)},[]);const s=IM(t,e);return ce.jsxs("div",{className:`clock ${i}`,"aria-label":`${s.date} ${s.weekJa}曜日 ${s.time}`,children:[ce.jsxs("div",{className:"clock-date",children:[s.date," ",ce.jsx("span",{className:"clock-week",children:s.week})]}),ce.jsx("div",{className:"clock-time",children:s.time})]})}const ah={anthropic:{label:"Claude（Anthropic）",keyHint:"sk-ant-…",models:["claude-sonnet-5-5","claude-haiku-5-5","claude-opus-5-5"],policy:"https://www.anthropic.com/legal/commercial-terms"},openai:{label:"ChatGPT（OpenAI）",keyHint:"sk-…",models:["gpt-5","gpt-5-mini"],policy:"https://openai.com/policies/api-data-usage-policies"},gemini:{label:"Gemini（Google）",keyHint:"AIza…",models:["gemini-2.5-flash","gemini-2.5-pro"],policy:"https://ai.google.dev/gemini-api/terms"}},FM=20;function kM(i,e=FM){let t=i.filter(n=>n.content.trim()).slice(-e);for(;t.length&&t[0].role!=="user";)t=t.slice(1);return t}let BM=class extends Error{constructor(e,t){super(e),this.status=t}};async function lh(i,e){const t=i.body.getReader(),n=new TextDecoder;let s="";for(;;){const{done:a,value:l}=await t.read();s+=n.decode(l,{stream:!a});const c=s.split(/\r?\n\r?\n/);s=a?"":c.pop();for(const d of c){const h=d.split(/\r?\n/).filter(p=>p.startsWith("data:")).map(p=>p.slice(5).trimStart()).join(`
`);if(!h||h==="[DONE]")continue;let m;try{m=JSON.parse(h)}catch{continue}e(m)}if(a)return}}async function uh(i,e,t,n){const s=await fetch(i,{method:"POST",headers:{"content-type":"application/json",...e},body:JSON.stringify(t),signal:n});if(!s.ok){const a=await s.json().catch(()=>({})),l=Array.isArray(a)?a[0]?.error:a?.error;throw new BM(l?.message??`HTTP ${s.status}`,s.status)}return s}const VM={async anthropic({apiKey:i,model:e,system:t,messages:n,onText:s,signal:a}){const l=await uh("https://api.anthropic.com/v1/messages",{"x-api-key":i,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},{model:e,max_tokens:4e3,system:t,messages:n,stream:!0},a),c={input:0,output:0};let d=!1;if(await lh(l,h=>{if(h.type==="message_start")c.input=h.message?.usage?.input_tokens??0;else if(h.type==="content_block_delta"&&h.delta?.type==="text_delta")s(h.delta.text);else if(h.type==="message_delta")c.output=h.usage?.output_tokens??c.output,h.delta?.stop_reason==="refusal"&&(d=!0);else if(h.type==="error")throw new Error(h.error?.message??"AIの返答が途中で止まりました")}),d)throw new Error("AIがこの内容には答えませんでした");return c},async openai({apiKey:i,model:e,system:t,messages:n,onText:s,signal:a}){const l=await uh("https://api.openai.com/v1/chat/completions",{authorization:`Bearer ${i}`},{model:e,stream:!0,stream_options:{include_usage:!0},messages:[{role:"system",content:t},...n]},a),c={input:0,output:0};return await lh(l,d=>{const h=d.choices?.[0]?.delta?.content;h&&s(h),d.usage&&(c.input=d.usage.prompt_tokens??0),d.usage&&(c.output=d.usage.completion_tokens??0)}),c},async gemini({apiKey:i,model:e,system:t,messages:n,onText:s,signal:a}){const l=await uh(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(e)}:streamGenerateContent?alt=sse`,{"x-goog-api-key":i},{systemInstruction:{parts:[{text:t}]},contents:n.map(d=>({role:d.role==="assistant"?"model":"user",parts:[{text:d.content}]}))},a),c={input:0,output:0};return await lh(l,d=>{for(const h of d.candidates?.[0]?.content?.parts??[])h.text&&!h.thought&&s(h.text);d.usageMetadata&&(c.input=d.usageMetadata.promptTokenCount??0,c.output=(d.usageMetadata.candidatesTokenCount??0)+(d.usageMetadata.thoughtsTokenCount??0))}),c}};async function zM(i){if(!i.apiKey)throw new Error("APIキーが設定されていません。右上の ⚙ から設定してください");try{return await VM[i.provider](i)}catch(e){throw e?.name==="AbortError"?new Error("止めました"):e instanceof TypeError?new Error("通信できませんでした。ネットワークを確認してください"):e?.status===401||e?.status===403?new Error("APIキーが正しくないか、使えない状態です"):e?.status===404?new Error(`モデル「${i.model}」が見つかりません。設定でモデル名を確認してください`):e?.status===429?new Error("利用回数の上限に達しました。少し待ってから試してください"):e}}function HM(i,e,t){return e==null||t==null?null:(i.input*e+i.output*t)/1e6}const R0=[{id:"schedule",label:"日程管理"},{id:"documents",label:"書類"},{id:"study",label:"勉強"},{id:"dev",label:"アプリ開発"},{id:"invest",label:"投資ニュース"},{id:"chat",label:"雑談"}],uc={name:"ユイ",userCall:"あなた",tone:"やわらかいタメ口",personality:"明るくて気が利く。相手のペースに合わせ、がんばりすぎていたら休むよう声をかける。",purposes:["schedule","documents","study","dev","chat"]},ch={provider:"anthropic",models:{anthropic:"claude-sonnet-5-5",openai:"gpt-5",gemini:"gemini-2.5-flash"},priceIn:null,priceOut:null},GM={clock:!0,clockCorner:"top-left",seconds:!0,powerSave:!1,voiceLines:!0},WM=[{id:"ai",label:"AI"},{id:"persona",label:"性格"},{id:"character",label:"キャラ"},{id:"display",label:"表示"}],XM=[{id:"top-left",label:"左上"},{id:"top-right",label:"右上"},{id:"bottom-left",label:"左下"},{id:"bottom-right",label:"右下"}];function jM(i){const[e,t]=gt.useState(i.keys[i.ai.provider]?"persona":"ai");return ce.jsx("div",{className:"overlay",onClick:i.onClose,children:ce.jsxs("div",{className:"settings glass",role:"dialog","aria-label":"設定",onClick:n=>n.stopPropagation(),children:[ce.jsxs("header",{className:"settings-head",children:[ce.jsx("h2",{children:"SETTINGS"}),ce.jsx("button",{className:"icon-btn",onClick:i.onClose,"aria-label":"閉じる",children:"✕"})]}),ce.jsx("nav",{className:"tabs",role:"tablist",children:WM.map(n=>ce.jsx("button",{role:"tab","aria-selected":e===n.id,className:e===n.id?"active":"",onClick:()=>t(n.id),children:n.label},n.id))}),ce.jsxs("div",{className:"settings-body",children:[e==="ai"&&ce.jsx(YM,{...i}),e==="persona"&&ce.jsx(qM,{...i}),e==="character"&&ce.jsx($M,{...i}),e==="display"&&ce.jsx(KM,{...i})]})]})})}function YM({ai:i,keys:e,usage:t,onAi:n,onKey:s,onResetUsage:a}){const l=ah[i.provider],[c,d]=gt.useState(e[i.provider]),[h,m]=gt.useState(!1),p=HM(t,i.priceIn,i.priceOut),g=v=>v.trim()===""?null:Math.max(0,Number(v))||0;return ce.jsxs(ce.Fragment,{children:[ce.jsxs("label",{className:"field",children:[ce.jsx("span",{children:"使うAI"}),ce.jsx("select",{value:i.provider,onChange:v=>{const S=v.target.value;n({...i,provider:S}),d(e[S])},children:Object.keys(ah).map(v=>ce.jsx("option",{value:v,children:ah[v].label},v))})]}),ce.jsxs("label",{className:"field",children:[ce.jsx("span",{children:"モデル"}),ce.jsx("input",{list:"models",value:i.models[i.provider],onChange:v=>n({...i,models:{...i.models,[i.provider]:v.target.value.trim()}})}),ce.jsx("datalist",{id:"models",children:l.models.map(v=>ce.jsx("option",{value:v},v))})]}),ce.jsxs("label",{className:"field",children:[ce.jsx("span",{children:"APIキー"}),ce.jsxs("div",{className:"row",children:[ce.jsx("input",{type:h?"text":"password",value:c,placeholder:l.keyHint,autoComplete:"off",spellCheck:!1,onChange:v=>d(v.target.value.trim())}),ce.jsx("button",{type:"button",className:"ghost-btn",onClick:()=>m(!h),children:h?"隠す":"表示"})]})]}),ce.jsxs("div",{className:"row end",children:[e[i.provider]&&ce.jsx("button",{className:"ghost-btn",onClick:()=>{s(i.provider,""),d("")},children:"削除"}),ce.jsx("button",{className:"primary-btn",disabled:c===e[i.provider],onClick:()=>s(i.provider,c),children:e[i.provider]&&c===e[i.provider]?"保存済み":"保存"})]}),ce.jsxs("p",{className:"hint",children:["キーはこの端末の中だけに暗号化して保存し、AIサービスへの接続にだけ使います。念のため、各サービスの管理画面で利用上限額を設定してください。",ce.jsx("br",{}),ce.jsxs("a",{href:l.policy,target:"_blank",rel:"noreferrer",children:[l.label," のデータの取り扱い"]})]}),ce.jsx("h3",{children:"利用量の目安"}),ce.jsxs("p",{className:"usage",children:["入力 ",t.input.toLocaleString()," ／ 出力 ",t.output.toLocaleString()," トークン",p!=null&&ce.jsxs("strong",{children:["　約 ",p<1?p.toFixed(2):Math.round(p).toLocaleString()," 円"]})]}),ce.jsxs("div",{className:"row",children:[ce.jsxs("label",{className:"field small",children:[ce.jsx("span",{children:"入力の単価（円／100万トークン）"}),ce.jsx("input",{inputMode:"decimal",value:i.priceIn??"",onChange:v=>n({...i,priceIn:g(v.target.value)})})]}),ce.jsxs("label",{className:"field small",children:[ce.jsx("span",{children:"出力の単価"}),ce.jsx("input",{inputMode:"decimal",value:i.priceOut??"",onChange:v=>n({...i,priceOut:g(v.target.value)})})]})]}),ce.jsx("p",{className:"hint",children:"単価は使っているモデルの料金表を見て入れてください。入れると金額の目安を出します。会話は直近20件だけを送って量を抑えています。"}),ce.jsx("button",{className:"ghost-btn",onClick:a,children:"利用量をリセット"})]})}function qM({persona:i,onPersona:e}){const t=n=>e({...i,...n});return ce.jsxs(ce.Fragment,{children:[ce.jsxs("label",{className:"field",children:[ce.jsx("span",{children:"名前"}),ce.jsx("input",{value:i.name,maxLength:20,onChange:n=>t({name:n.target.value}),onBlur:()=>!i.name.trim()&&t({name:uc.name})})]}),ce.jsxs("label",{className:"field",children:[ce.jsx("span",{children:"あなたの呼び方"}),ce.jsx("input",{value:i.userCall,maxLength:20,onChange:n=>t({userCall:n.target.value})})]}),ce.jsxs("label",{className:"field",children:[ce.jsx("span",{children:"口調"}),ce.jsx("input",{value:i.tone,maxLength:40,placeholder:"例：丁寧語、元気なタメ口、関西弁",onChange:n=>t({tone:n.target.value})})]}),ce.jsxs("label",{className:"field",children:[ce.jsx("span",{children:"性格"}),ce.jsx("textarea",{rows:3,value:i.personality,maxLength:400,onChange:n=>t({personality:n.target.value})})]}),ce.jsxs("fieldset",{className:"field",children:[ce.jsx("legend",{children:"サポートしてほしいこと（複数選べます）"}),ce.jsx("div",{className:"chips",children:R0.map(n=>{const s=i.purposes.includes(n.id);return ce.jsx("button",{type:"button",className:`chip ${s?"on":""}`,"aria-pressed":s,onClick:()=>t({purposes:s?i.purposes.filter(a=>a!==n.id):[...i.purposes,n.id]}),children:n.label},n.id)})})]}),ce.jsx("p",{className:"hint",children:"選んだ内容に合わせて、AIへの指示を自動で切り替えます。健康の話題で診断はせず、投資の売買の助言もしません。"}),ce.jsx("button",{className:"ghost-btn",onClick:()=>e(uc),children:"初期設定に戻す"})]})}function $M({hasVrm:i,vrmName:e,vrmError:t,onVrm:n}){return ce.jsxs(ce.Fragment,{children:[ce.jsxs("p",{children:["いまのキャラクター：",ce.jsx("strong",{children:i?e||"読み込んだVRM":"仮のキャラクター（光の精）"})]}),ce.jsxs("label",{className:"primary-btn file-btn",children:["VRMファイルを読み込む",ce.jsx("input",{type:"file",accept:".vrm",onChange:s=>{const a=s.target.files?.[0];a&&n(a),s.target.value=""}})]}),i&&ce.jsx("button",{className:"ghost-btn",onClick:()=>n(null),children:"仮のキャラクターに戻す"}),t&&ce.jsx("p",{className:"error-text",children:t}),ce.jsx("p",{className:"hint",children:"VRoid Studio で作ったモデルや、VRoid Hub で配布されているモデル（利用条件を確認してください）が使えます。読み込んだファイルはこの端末の中だけに保存します。自分で作ったものか、使う権利のあるモデルだけを読み込んでください。"}),ce.jsx("p",{className:"hint",children:"キャラクターをタップすると反応します。何もないところをタップすると、そこへ移動します。"})]})}function KM({display:i,onDisplay:e,onClearChat:t}){const n=s=>e({...i,...s});return ce.jsxs(ce.Fragment,{children:[ce.jsx(xu,{label:"時計を表示",checked:i.clock,onChange:s=>n({clock:s})}),ce.jsx(xu,{label:"秒を表示",checked:i.seconds,disabled:!i.clock,onChange:s=>n({seconds:s})}),ce.jsxs("fieldset",{className:"field",children:[ce.jsx("legend",{children:"時計の位置"}),ce.jsx("div",{className:"chips",children:XM.map(s=>ce.jsx("button",{type:"button",className:`chip ${i.clockCorner===s.id?"on":""}`,"aria-pressed":i.clockCorner===s.id,onClick:()=>n({clockCorner:s.id}),children:s.label},s.id))})]}),ce.jsx(xu,{label:"時刻に合わせた声かけ",checked:i.voiceLines,onChange:s=>n({voiceLines:s})}),ce.jsx(xu,{label:"省電力モード（背景を止める）",checked:i.powerSave,onChange:s=>n({powerSave:s})}),ce.jsx("p",{className:"hint",children:"画質は端末の性能に合わせて自動で調整します。動きが重い時は省電力モードにしてください。"}),ce.jsx("h3",{children:"データ"}),ce.jsx("button",{className:"ghost-btn danger",onClick:()=>{confirm("会話の履歴をすべて消しますか？")&&t()},children:"会話の履歴を消す"})]})}function xu({label:i,checked:e,disabled:t,onChange:n}){return ce.jsxs("label",{className:`toggle ${t?"disabled":""}`,children:[ce.jsx("span",{children:i}),ce.jsx("input",{type:"checkbox",role:"switch",checked:e,disabled:t,onChange:s=>n(s.target.checked)}),ce.jsx("i",{"aria-hidden":!0})]})}const m_={schedule:"日程管理：予定の整理、勤務シフトを踏まえた予定の組み方、やることの優先順位づけを手伝う。今の版ではカレンダーの読み書きや通知はまだできないので、登録したふりはせず「メモしておいてね」と伝える。",documents:"書類：報告書・申請書・資料の構成案や下書き、文章の校正・要約を手伝う。直した箇所と理由を短く添える。",study:"勉強：資格や業務知識の問題を出し、答え合わせと解説をする。一度に1問ずつ出し、相手の答えを待つ。",dev:"アプリ開発：企画の壁打ち、設計やコードの相談、エラーの原因探しを手伝う。コードはコードブロックで示す。",invest:"投資ニュース：市場や銘柄の話題を整理して説明する。今の版ではニュースを取得できないので、最新情報は分からないと正直に伝える。売買の判断や助言（買う・売る・持ち続ける等）は行わない。",chat:"雑談：気軽な話し相手になる。相手の気分や体調に気を配る。"},ZM=["健康の話題は一般的な情報にとどめ、診断・治療・薬の判断はしない。必要なら医療機関の受診を勧める。","死にたい気持ちや身の危険など深刻な相談には、まず気持ちを受け止め、いのちの電話（0570-783-556）やよりそいホットライン（0120-279-338）、緊急時は119・110を案内する。","投資について売買の助言はしない。","患者情報など業務上の個人情報が書かれていたら、それ以上入力しないよう、やさしく注意する。","知らないこと・できないことは正直に言い、作り話をしない。"];function QM(i,e=new Date){const t=R0.filter(s=>i.purposes.includes(s.id));return[`あなたは「${i.name}」。ユーザーのそばにいる3Dキャラクターの AI パートナーです。`,`ユーザーのことは「${i.userCall}」と呼ぶ。口調は${i.tone}。`,i.personality?`性格：${i.personality}`:"","","## 返答のしかた","- 画面の吹き出しで読まれるので、ふだんは2〜4文で短く答える。書類やコードなど長い内容を頼まれた時だけ長く書く。","- 見出しや表は必要な時だけ使う。","","## 手伝うこと",...t.length?t.map(s=>`- ${m_[s.id]}`):[`- ${m_.chat}`],"","## 守ること",...ZM.map(s=>`- ${s}`),"",`現在の日時：${JM(e)}`].filter((s,a,l)=>!(s===""&&l[a-1]==="")).join(`
`)}function JM(i){const e="日月火水木金土"[i.getDay()],t=n=>String(n).padStart(2,"0");return`${i.getFullYear()}年${i.getMonth()+1}月${i.getDate()}日（${e}）${t(i.getHours())}:${t(i.getMinutes())}`}const xc="yui.";function qr(i,e){try{const t=localStorage.getItem(xc+i);return t?{...eS(e),...JSON.parse(t)}:e}catch{return e}}function eS(i){return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}function tS(i){try{const e=localStorage.getItem(xc+i),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function Rs(i,e){try{localStorage.setItem(xc+i,JSON.stringify(e))}catch{}}function nS(i){try{localStorage.removeItem(xc+i)}catch{}}function b0(){return new Promise((i,e)=>{const t=indexedDB.open("yui",1);t.onupgradeneeded=()=>{t.result.createObjectStore("keys"),t.result.createObjectStore("files")},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function C0(i,e){const t=await b0();return new Promise((n,s)=>{const a=t.transaction(i).objectStore(i).get(e);a.onsuccess=()=>n(a.result),a.onerror=()=>s(a.error)})}async function P0(i,e,t){const n=await b0();return new Promise((s,a)=>{const l=n.transaction(i,"readwrite");t===void 0?l.objectStore(i).delete(e):l.objectStore(i).put(t,e),l.oncomplete=()=>s(),l.onerror=()=>a(l.error)})}async function L0(){let i=await C0("keys","aes");return i||(i=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!1,["encrypt","decrypt"]),await P0("keys","aes",i)),i}const g_=i=>btoa(String.fromCharCode(...new Uint8Array(i))),__=i=>Uint8Array.from(atob(i),e=>e.charCodeAt(0));async function iS(i,e){if(!e){nS(`secret.${i}`);return}const t=await L0(),n=crypto.getRandomValues(new Uint8Array(12)),s=await crypto.subtle.encrypt({name:"AES-GCM",iv:n},t,new TextEncoder().encode(e));Rs(`secret.${i}`,{iv:g_(n),data:g_(s)})}async function rS(i){const e=qr(`secret.${i}`,null);if(!e)return"";try{const t=await L0(),n=await crypto.subtle.decrypt({name:"AES-GCM",iv:__(e.iv)},t,__(e.data));return new TextDecoder().decode(n)}catch{return""}}const sS=(i,e)=>P0("files",i,e),oS=i=>C0("files",i).catch(()=>{});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ds="180",aS=0,v_=1,lS=2,I0=1,uS=2,mr=3,xr=0,In=1,fi=2,Zr=0,Fo=1,Is=2,x_=3,y_=4,cS=5,Ps=100,dS=101,hS=102,fS=103,pS=104,mS=200,gS=201,_S=202,vS=203,df=204,hf=205,xS=206,yS=207,MS=208,SS=209,ES=210,TS=211,wS=212,AS=213,RS=214,ff=0,pf=1,mf=2,Vo=3,gf=4,_f=5,vf=6,xf=7,N0=0,bS=1,CS=2,Qr=0,PS=1,LS=2,IS=3,NS=4,DS=5,US=6,OS=7,M_="attached",FS="detached",D0=300,zo=301,Ho=302,yf=303,Mf=304,yc=306,Go=1e3,Kr=1001,cc=1002,zn=1003,U0=1004,Ja=1005,ni=1006,ec=1007,gr=1008,$i=1009,O0=1010,F0=1011,sl=1012,fp=1013,Us=1014,Pi=1015,ml=1016,pp=1017,mp=1018,ol=1020,k0=35902,B0=35899,V0=1021,z0=1022,mi=1023,al=1026,ll=1027,gp=1028,_p=1029,H0=1030,vp=1031,xp=1033,tc=33776,nc=33777,ic=33778,rc=33779,Sf=35840,Ef=35841,Tf=35842,wf=35843,Af=36196,Rf=37492,bf=37496,Cf=37808,Pf=37809,Lf=37810,If=37811,Nf=37812,Df=37813,Uf=37814,Of=37815,Ff=37816,kf=37817,Bf=37818,Vf=37819,zf=37820,Hf=37821,Gf=36492,Wf=36494,Xf=36495,jf=36283,Yf=36284,qf=36285,$f=36286,ul=2300,cl=2301,dh=2302,S_=2400,E_=2401,T_=2402,kS=2500,BS=0,G0=1,Kf=2,VS=3200,zS=3201,yp=0,HS=1,$r="",hn="srgb",Hn="srgb-linear",dc="linear",Wt="srgb",uo=7680,w_=519,GS=512,WS=513,XS=514,W0=515,jS=516,YS=517,qS=518,$S=519,Zf=35044,KS=35048,A_="300 es",Yi=2e3,hc=2001;class $o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let R_=1234567;const nl=Math.PI/180,Wo=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Mp(i,e){return(i%e+e)%e}function ZS(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function QS(i,e,t){return i!==e?(t-i)/(e-i):0}function il(i,e,t){return(1-t)*i+t*e}function JS(i,e,t,n){return il(i,e,1-Math.exp(-t*n))}function eE(i,e=1){return e-Math.abs(Mp(i,e*2)-e)}function tE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function iE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rE(i,e){return i+Math.random()*(e-i)}function sE(i){return i*(.5-Math.random())}function oE(i){i!==void 0&&(R_=i);let e=R_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aE(i){return i*nl}function lE(i){return i*Wo}function uE(i){return(i&i-1)===0&&i!==0}function cE(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dE(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hE(i,e,t,n,s){const a=Math.cos,l=Math.sin,c=a(t/2),d=l(t/2),h=a((e+n)/2),m=l((e+n)/2),p=a((e-n)/2),g=l((e-n)/2),v=a((n-e)/2),S=l((n-e)/2);switch(s){case"XYX":i.set(c*m,d*p,d*g,c*h);break;case"YZY":i.set(d*g,c*m,d*p,c*h);break;case"ZXZ":i.set(d*p,d*g,c*m,c*h);break;case"XZX":i.set(c*m,d*S,d*v,c*h);break;case"YXY":i.set(d*v,c*m,d*S,c*h);break;case"ZYZ":i.set(d*S,d*v,c*m,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _t={DEG2RAD:nl,RAD2DEG:Wo,generateUUID:Li,clamp:Mt,euclideanModulo:Mp,mapLinear:ZS,inverseLerp:QS,lerp:il,damp:JS,pingpong:eE,smoothstep:tE,smootherstep:nE,randInt:iE,randFloat:rE,randFloatSpread:sE,seededRandom:oE,degToRad:aE,radToDeg:lE,isPowerOfTwo:uE,ceilPowerOfTwo:cE,floorPowerOfTwo:dE,setQuaternionFromProperEuler:hE,normalize:kt,denormalize:Ci};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*s+e.x,this.y=a*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,l,c){let d=n[s+0],h=n[s+1],m=n[s+2],p=n[s+3];const g=a[l+0],v=a[l+1],S=a[l+2],E=a[l+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=p;return}if(c===1){e[t+0]=g,e[t+1]=v,e[t+2]=S,e[t+3]=E;return}if(p!==E||d!==g||h!==v||m!==S){let y=1-c;const x=d*g+h*v+m*S+p*E,b=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const I=Math.sqrt(L),N=Math.atan2(I,x*b);y=Math.sin(y*N)/I,c=Math.sin(c*N)/I}const w=c*b;if(d=d*y+g*w,h=h*y+v*w,m=m*y+S*w,p=p*y+E*w,y===1-c){const I=1/Math.sqrt(d*d+h*h+m*m+p*p);d*=I,h*=I,m*=I,p*=I}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,a,l){const c=n[s],d=n[s+1],h=n[s+2],m=n[s+3],p=a[l],g=a[l+1],v=a[l+2],S=a[l+3];return e[t]=c*S+m*p+d*v-h*g,e[t+1]=d*S+m*g+h*p-c*v,e[t+2]=h*S+m*v+c*g-d*p,e[t+3]=m*S-c*p-d*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,l=e._order,c=Math.cos,d=Math.sin,h=c(n/2),m=c(s/2),p=c(a/2),g=d(n/2),v=d(s/2),S=d(a/2);switch(l){case"XYZ":this._x=g*m*p+h*v*S,this._y=h*v*p-g*m*S,this._z=h*m*S+g*v*p,this._w=h*m*p-g*v*S;break;case"YXZ":this._x=g*m*p+h*v*S,this._y=h*v*p-g*m*S,this._z=h*m*S-g*v*p,this._w=h*m*p+g*v*S;break;case"ZXY":this._x=g*m*p-h*v*S,this._y=h*v*p+g*m*S,this._z=h*m*S+g*v*p,this._w=h*m*p-g*v*S;break;case"ZYX":this._x=g*m*p-h*v*S,this._y=h*v*p+g*m*S,this._z=h*m*S-g*v*p,this._w=h*m*p+g*v*S;break;case"YZX":this._x=g*m*p+h*v*S,this._y=h*v*p+g*m*S,this._z=h*m*S-g*v*p,this._w=h*m*p-g*v*S;break;case"XZY":this._x=g*m*p-h*v*S,this._y=h*v*p-g*m*S,this._z=h*m*S+g*v*p,this._w=h*m*p+g*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],l=t[1],c=t[5],d=t[9],h=t[2],m=t[6],p=t[10],g=n+c+p;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(m-d)*v,this._y=(a-h)*v,this._z=(l-s)*v}else if(n>c&&n>p){const v=2*Math.sqrt(1+n-c-p);this._w=(m-d)/v,this._x=.25*v,this._y=(s+l)/v,this._z=(a+h)/v}else if(c>p){const v=2*Math.sqrt(1+c-n-p);this._w=(a-h)/v,this._x=(s+l)/v,this._y=.25*v,this._z=(d+m)/v}else{const v=2*Math.sqrt(1+p-n-c);this._w=(l-s)/v,this._x=(a+h)/v,this._y=(d+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,l=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=n*m+l*c+s*h-a*d,this._y=s*m+l*d+a*c-n*h,this._z=a*m+l*h+n*d-s*c,this._w=l*m-n*c-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=s,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*s+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,c),p=Math.sin((1-t)*m)/h,g=Math.sin(t*m)/h;return this._w=l*p+this._w*g,this._x=n*p+this._x*g,this._y=s*p+this._y*g,this._z=a*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(b_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(b_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,l=e.y,c=e.z,d=e.w,h=2*(l*s-c*n),m=2*(c*t-a*s),p=2*(a*n-l*t);return this.x=t+d*h+l*p-c*m,this.y=n+d*m+c*h-a*p,this.z=s+d*p+a*m-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,l=t.x,c=t.y,d=t.z;return this.x=s*d-a*c,this.y=a*l-n*d,this.z=n*c-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new D,b_=new vt;class ot{constructor(e,t,n,s,a,l,c,d,h){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,c,d,h)}set(e,t,n,s,a,l,c,d,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=c,m[3]=t,m[4]=a,m[5]=d,m[6]=n,m[7]=l,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],c=n[3],d=n[6],h=n[1],m=n[4],p=n[7],g=n[2],v=n[5],S=n[8],E=s[0],y=s[3],x=s[6],b=s[1],L=s[4],w=s[7],I=s[2],N=s[5],U=s[8];return a[0]=l*E+c*b+d*I,a[3]=l*y+c*L+d*N,a[6]=l*x+c*w+d*U,a[1]=h*E+m*b+p*I,a[4]=h*y+m*L+p*N,a[7]=h*x+m*w+p*U,a[2]=g*E+v*b+S*I,a[5]=g*y+v*L+S*N,a[8]=g*x+v*w+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*l*m-t*c*h-n*a*m+n*c*d+s*a*h-s*l*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],m=e[8],p=m*l-c*h,g=c*d-m*a,v=h*a-l*d,S=t*p+n*g+s*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=p*E,e[1]=(s*h-m*n)*E,e[2]=(c*n-s*l)*E,e[3]=g*E,e[4]=(m*t-s*d)*E,e[5]=(s*a-c*t)*E,e[6]=v*E,e[7]=(n*d-h*t)*E,e[8]=(l*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,l,c){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*l+h*c)+l+e,-s*h,s*d,-s*(-h*l+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(fh.makeScale(e,t)),this}rotate(e){return this.premultiply(fh.makeRotation(-e)),this}translate(e,t){return this.premultiply(fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fh=new ot;function X0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fE(){const i=dl("canvas");return i.style.display="block",i}const C_={};function hl(i){i in C_||(C_[i]=!0,console.warn(i))}function pE(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const P_=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mE(){const i={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(s,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Wt&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Wt&&(s.r=ko(s.r),s.g=ko(s.g),s.b=ko(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$r?dc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,l){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return hl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return hl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hn]:{primaries:e,whitePoint:n,transfer:dc,toXYZ:P_,fromXYZ:L_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:Wt,toXYZ:P_,fromXYZ:L_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const bt=mE();function vr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ko(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let co;class gE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{co===void 0&&(co=dl("canvas")),co.width=e.width,co.height=e.height;const s=co.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=co}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=vr(a[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _E=0;class Sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,c=s.length;l<c;l++)s[l].isDataTexture?a.push(ph(s[l].image)):a.push(ph(s[l]))}else a=ph(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function ph(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vE=0;const mh=new D;class fn extends $o{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Kr,s=Kr,a=ni,l=gr,c=mi,d=$i,h=fn.DEFAULT_ANISOTROPY,m=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=Li(),this.name="",this.source=new Sp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Go:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Go:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=D0;fn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,s=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const d=e.elements,h=d[0],m=d[4],p=d[8],g=d[1],v=d[5],S=d[9],E=d[2],y=d[6],x=d[10];if(Math.abs(m-g)<.01&&Math.abs(p-E)<.01&&Math.abs(S-y)<.01){if(Math.abs(m+g)<.1&&Math.abs(p+E)<.1&&Math.abs(S+y)<.1&&Math.abs(h+v+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,w=(v+1)/2,I=(x+1)/2,N=(m+g)/4,U=(p+E)/4,z=(S+y)/4;return L>w&&L>I?L<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(L),s=N/n,a=U/n):w>I?w<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),n=N/s,a=z/s):I<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(I),n=U/a,s=z/a),this.set(n,s,a,t),this}let b=Math.sqrt((y-S)*(y-S)+(p-E)*(p-E)+(g-m)*(g-m));return Math.abs(b)<.001&&(b=1),this.x=(y-S)/b,this.y=(p-E)/b,this.z=(g-m)/b,this.w=Math.acos((h+v+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xE extends $o{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const s={width:e,height:t,depth:n.depth},a=new fn(s);this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Sp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends xE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class j0 extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yE extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Ai):Ai.fromBufferAttribute(a,l),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yu.copy(n.boundingBox)),yu.applyMatrix4(e.matrixWorld),this.union(yu)}const s=e.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),Mu.subVectors(this.max,Ua),ho.subVectors(e.a,Ua),fo.subVectors(e.b,Ua),po.subVectors(e.c,Ua),Vr.subVectors(fo,ho),zr.subVectors(po,fo),gs.subVectors(ho,po);let t=[0,-Vr.z,Vr.y,0,-zr.z,zr.y,0,-gs.z,gs.y,Vr.z,0,-Vr.x,zr.z,0,-zr.x,gs.z,0,-gs.x,-Vr.y,Vr.x,0,-zr.y,zr.x,0,-gs.y,gs.x,0];return!gh(t,ho,fo,po,Mu)||(t=[1,0,0,0,1,0,0,0,1],!gh(t,ho,fo,po,Mu))?!1:(Su.crossVectors(Vr,zr),t=[Su.x,Su.y,Su.z],gh(t,ho,fo,po,Mu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ur=[new D,new D,new D,new D,new D,new D,new D,new D],Ai=new D,yu=new yr,ho=new D,fo=new D,po=new D,Vr=new D,zr=new D,gs=new D,Ua=new D,Mu=new D,Su=new D,_s=new D;function gh(i,e,t,n,s){for(let a=0,l=i.length-3;a<=l;a+=3){_s.fromArray(i,a);const c=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),d=e.dot(_s),h=t.dot(_s),m=n.dot(_s);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const ME=new yr,Oa=new D,_h=new D;class Ki{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ME.setFromPoints(e).getCenter(n);let s=0;for(let a=0,l=e.length;a<l;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Oa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(_h)),this.expandByPoint(Oa.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cr=new D,vh=new D,Eu=new D,Hr=new D,xh=new D,Tu=new D,yh=new D;class Mc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){vh.copy(e).add(t).multiplyScalar(.5),Eu.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(vh);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Eu),c=Hr.dot(this.direction),d=-Hr.dot(Eu),h=Hr.lengthSq(),m=Math.abs(1-l*l);let p,g,v,S;if(m>0)if(p=l*d-c,g=l*c-d,S=a*m,p>=0)if(g>=-S)if(g<=S){const E=1/m;p*=E,g*=E,v=p*(p+l*g+2*c)+g*(l*p+g+2*d)+h}else g=a,p=Math.max(0,-(l*g+c)),v=-p*p+g*(g+2*d)+h;else g=-a,p=Math.max(0,-(l*g+c)),v=-p*p+g*(g+2*d)+h;else g<=-S?(p=Math.max(0,-(-l*a+c)),g=p>0?-a:Math.min(Math.max(-a,-d),a),v=-p*p+g*(g+2*d)+h):g<=S?(p=0,g=Math.min(Math.max(-a,-d),a),v=g*(g+2*d)+h):(p=Math.max(0,-(l*a+c)),g=p>0?a:Math.min(Math.max(-a,-d),a),v=-p*p+g*(g+2*d)+h);else g=l>0?-a:a,p=Math.max(0,-(l*g+c)),v=-p*p+g*(g+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(vh).addScaledVector(Eu,g),v}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const n=cr.dot(this.direction),s=cr.dot(cr)-n*n,a=e.radius*e.radius;if(s>a)return null;const l=Math.sqrt(a-s),c=n-l,d=n+l;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,l,c,d;const h=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),m>=0?(a=(e.min.y-g.y)*m,l=(e.max.y-g.y)*m):(a=(e.max.y-g.y)*m,l=(e.min.y-g.y)*m),n>l||a>s||((a>n||isNaN(n))&&(n=a),(l<s||isNaN(s))&&(s=l),p>=0?(c=(e.min.z-g.z)*p,d=(e.max.z-g.z)*p):(c=(e.max.z-g.z)*p,d=(e.min.z-g.z)*p),n>d||c>s)||((c>n||n!==n)&&(n=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,n,s,a){xh.subVectors(t,e),Tu.subVectors(n,e),yh.crossVectors(xh,Tu);let l=this.direction.dot(yh),c;if(l>0){if(s)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Hr.subVectors(this.origin,e);const d=c*this.direction.dot(Tu.crossVectors(Hr,Tu));if(d<0)return null;const h=c*this.direction.dot(xh.cross(Hr));if(h<0||d+h>l)return null;const m=-c*Hr.dot(yh);return m<0?null:this.at(m/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,s,a,l,c,d,h,m,p,g,v,S,E,y){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,c,d,h,m,p,g,v,S,E,y)}set(e,t,n,s,a,l,c,d,h,m,p,g,v,S,E,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=a,x[5]=l,x[9]=c,x[13]=d,x[2]=h,x[6]=m,x[10]=p,x[14]=g,x[3]=v,x[7]=S,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/mo.setFromMatrixColumn(e,0).length(),a=1/mo.setFromMatrixColumn(e,1).length(),l=1/mo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),d=Math.cos(s),h=Math.sin(s),m=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const g=l*m,v=l*p,S=c*m,E=c*p;t[0]=d*m,t[4]=-d*p,t[8]=h,t[1]=v+S*h,t[5]=g-E*h,t[9]=-c*d,t[2]=E-g*h,t[6]=S+v*h,t[10]=l*d}else if(e.order==="YXZ"){const g=d*m,v=d*p,S=h*m,E=h*p;t[0]=g+E*c,t[4]=S*c-v,t[8]=l*h,t[1]=l*p,t[5]=l*m,t[9]=-c,t[2]=v*c-S,t[6]=E+g*c,t[10]=l*d}else if(e.order==="ZXY"){const g=d*m,v=d*p,S=h*m,E=h*p;t[0]=g-E*c,t[4]=-l*p,t[8]=S+v*c,t[1]=v+S*c,t[5]=l*m,t[9]=E-g*c,t[2]=-l*h,t[6]=c,t[10]=l*d}else if(e.order==="ZYX"){const g=l*m,v=l*p,S=c*m,E=c*p;t[0]=d*m,t[4]=S*h-v,t[8]=g*h+E,t[1]=d*p,t[5]=E*h+g,t[9]=v*h-S,t[2]=-h,t[6]=c*d,t[10]=l*d}else if(e.order==="YZX"){const g=l*d,v=l*h,S=c*d,E=c*h;t[0]=d*m,t[4]=E-g*p,t[8]=S*p+v,t[1]=p,t[5]=l*m,t[9]=-c*m,t[2]=-h*m,t[6]=v*p+S,t[10]=g-E*p}else if(e.order==="XZY"){const g=l*d,v=l*h,S=c*d,E=c*h;t[0]=d*m,t[4]=-p,t[8]=h*m,t[1]=g*p+E,t[5]=l*m,t[9]=v*p-S,t[2]=S*p-v,t[6]=c*m,t[10]=E*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SE,e,EE)}lookAt(e,t,n){const s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Gr.crossVectors(n,ei),Gr.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Gr.crossVectors(n,ei)),Gr.normalize(),wu.crossVectors(ei,Gr),s[0]=Gr.x,s[4]=wu.x,s[8]=ei.x,s[1]=Gr.y,s[5]=wu.y,s[9]=ei.y,s[2]=Gr.z,s[6]=wu.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],c=n[4],d=n[8],h=n[12],m=n[1],p=n[5],g=n[9],v=n[13],S=n[2],E=n[6],y=n[10],x=n[14],b=n[3],L=n[7],w=n[11],I=n[15],N=s[0],U=s[4],z=s[8],C=s[12],R=s[1],B=s[5],q=s[9],K=s[13],he=s[2],oe=s[6],ae=s[10],ue=s[14],G=s[3],le=s[7],Y=s[11],F=s[15];return a[0]=l*N+c*R+d*he+h*G,a[4]=l*U+c*B+d*oe+h*le,a[8]=l*z+c*q+d*ae+h*Y,a[12]=l*C+c*K+d*ue+h*F,a[1]=m*N+p*R+g*he+v*G,a[5]=m*U+p*B+g*oe+v*le,a[9]=m*z+p*q+g*ae+v*Y,a[13]=m*C+p*K+g*ue+v*F,a[2]=S*N+E*R+y*he+x*G,a[6]=S*U+E*B+y*oe+x*le,a[10]=S*z+E*q+y*ae+x*Y,a[14]=S*C+E*K+y*ue+x*F,a[3]=b*N+L*R+w*he+I*G,a[7]=b*U+L*B+w*oe+I*le,a[11]=b*z+L*q+w*ae+I*Y,a[15]=b*C+L*K+w*ue+I*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],l=e[1],c=e[5],d=e[9],h=e[13],m=e[2],p=e[6],g=e[10],v=e[14],S=e[3],E=e[7],y=e[11],x=e[15];return S*(+a*d*p-s*h*p-a*c*g+n*h*g+s*c*v-n*d*v)+E*(+t*d*v-t*h*g+a*l*g-s*l*v+s*h*m-a*d*m)+y*(+t*h*p-t*c*v-a*l*p+n*l*v+a*c*m-n*h*m)+x*(-s*c*m-t*d*p+t*c*g+s*l*p-n*l*g+n*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],m=e[8],p=e[9],g=e[10],v=e[11],S=e[12],E=e[13],y=e[14],x=e[15],b=p*y*h-E*g*h+E*d*v-c*y*v-p*d*x+c*g*x,L=S*g*h-m*y*h-S*d*v+l*y*v+m*d*x-l*g*x,w=m*E*h-S*p*h+S*c*v-l*E*v-m*c*x+l*p*x,I=S*p*d-m*E*d-S*c*g+l*E*g+m*c*y-l*p*y,N=t*b+n*L+s*w+a*I;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=b*U,e[1]=(E*g*a-p*y*a-E*s*v+n*y*v+p*s*x-n*g*x)*U,e[2]=(c*y*a-E*d*a+E*s*h-n*y*h-c*s*x+n*d*x)*U,e[3]=(p*d*a-c*g*a-p*s*h+n*g*h+c*s*v-n*d*v)*U,e[4]=L*U,e[5]=(m*y*a-S*g*a+S*s*v-t*y*v-m*s*x+t*g*x)*U,e[6]=(S*d*a-l*y*a-S*s*h+t*y*h+l*s*x-t*d*x)*U,e[7]=(l*g*a-m*d*a+m*s*h-t*g*h-l*s*v+t*d*v)*U,e[8]=w*U,e[9]=(S*p*a-m*E*a-S*n*v+t*E*v+m*n*x-t*p*x)*U,e[10]=(l*E*a-S*c*a+S*n*h-t*E*h-l*n*x+t*c*x)*U,e[11]=(m*c*a-l*p*a-m*n*h+t*p*h+l*n*v-t*c*v)*U,e[12]=I*U,e[13]=(m*E*s-S*p*s+S*n*g-t*E*g-m*n*y+t*p*y)*U,e[14]=(S*c*s-l*E*s-S*n*d+t*E*d+l*n*y-t*c*y)*U,e[15]=(l*p*s-m*c*s+m*n*d-t*p*d-l*n*g+t*c*g)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,l=e.x,c=e.y,d=e.z,h=a*l,m=a*c;return this.set(h*l+n,h*c-s*d,h*d+s*c,0,h*c+s*d,m*c+n,m*d-s*l,0,h*d-s*c,m*d+s*l,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,l){return this.set(1,n,a,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,l=t._y,c=t._z,d=t._w,h=a+a,m=l+l,p=c+c,g=a*h,v=a*m,S=a*p,E=l*m,y=l*p,x=c*p,b=d*h,L=d*m,w=d*p,I=n.x,N=n.y,U=n.z;return s[0]=(1-(E+x))*I,s[1]=(v+w)*I,s[2]=(S-L)*I,s[3]=0,s[4]=(v-w)*N,s[5]=(1-(g+x))*N,s[6]=(y+b)*N,s[7]=0,s[8]=(S+L)*U,s[9]=(y-b)*U,s[10]=(1-(g+E))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=mo.set(s[0],s[1],s[2]).length();const l=mo.set(s[4],s[5],s[6]).length(),c=mo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ri.copy(this);const h=1/a,m=1/l,p=1/c;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=m,Ri.elements[5]*=m,Ri.elements[6]*=m,Ri.elements[8]*=p,Ri.elements[9]*=p,Ri.elements[10]*=p,t.setFromRotationMatrix(Ri),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,s,a,l,c=Yi,d=!1){const h=this.elements,m=2*a/(t-e),p=2*a/(n-s),g=(t+e)/(t-e),v=(n+s)/(n-s);let S,E;if(d)S=a/(l-a),E=l*a/(l-a);else if(c===Yi)S=-(l+a)/(l-a),E=-2*l*a/(l-a);else if(c===hc)S=-l/(l-a),E=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=p,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,a,l,c=Yi,d=!1){const h=this.elements,m=2/(t-e),p=2/(n-s),g=-(t+e)/(t-e),v=-(n+s)/(n-s);let S,E;if(d)S=1/(l-a),E=l/(l-a);else if(c===Yi)S=-2/(l-a),E=-(l+a)/(l-a);else if(c===hc)S=-1/(l-a),E=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=p,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mo=new D,Ri=new lt,SE=new D(0,0,0),EE=new D(1,1,1),Gr=new D,wu=new D,ei=new D,I_=new lt,N_=new vt;class ii{constructor(e=0,t=0,n=0,s=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],l=s[4],c=s[8],d=s[1],h=s[5],m=s[9],p=s[2],g=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return I_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(I_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return N_.setFromEuler(this),this.setFromQuaternion(N_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Y0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TE=0;const D_=new D,go=new vt,dr=new lt,Au=new D,Fa=new D,wE=new D,AE=new vt,U_=new D(1,0,0),O_=new D(0,1,0),F_=new D(0,0,1),k_={type:"added"},RE={type:"removed"},_o={type:"childadded",child:null},Mh={type:"childremoved",child:null};class Vt extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new D,t=new ii,n=new vt,s=new D(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new ot}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(U_,e)}rotateY(e){return this.rotateOnAxis(O_,e)}rotateZ(e){return this.rotateOnAxis(F_,e)}translateOnAxis(e,t){return D_.copy(e).applyQuaternion(this.quaternion),this.position.add(D_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(U_,e)}translateY(e){return this.translateOnAxis(O_,e)}translateZ(e){return this.translateOnAxis(F_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Au.copy(e):Au.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Fa,Au,this.up):dr.lookAt(Au,Fa,this.up),this.quaternion.setFromRotationMatrix(dr),s&&(dr.extractRotation(s.matrixWorld),go.setFromRotationMatrix(dr),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(k_),_o.child=e,this.dispatchEvent(_o),_o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RE),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(k_),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,wE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,AE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const p=d[h];a(e.shapes,p)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(a(e.animations,d))}}if(t){const c=l(e.geometries),d=l(e.materials),h=l(e.textures),m=l(e.images),p=l(e.shapes),g=l(e.skeletons),v=l(e.animations),S=l(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),S.length>0&&(n.nodes=S)}return n.object=s,n;function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new D(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new D,hr=new D,Sh=new D,fr=new D,vo=new D,xo=new D,B_=new D,Eh=new D,Th=new D,wh=new D,Ah=new Dt,Rh=new Dt,bh=new Dt;class pi{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bi.subVectors(e,t),s.cross(bi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){bi.subVectors(s,t),hr.subVectors(n,t),Sh.subVectors(e,t);const l=bi.dot(bi),c=bi.dot(hr),d=bi.dot(Sh),h=hr.dot(hr),m=hr.dot(Sh),p=l*h-c*c;if(p===0)return a.set(0,0,0),null;const g=1/p,v=(h*d-c*m)*g,S=(l*m-c*d)*g;return a.set(1-v-S,S,v)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,n,s,a,l,c,d){return this.getBarycoord(e,t,n,s,fr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,fr.x),d.addScaledVector(l,fr.y),d.addScaledVector(c,fr.z),d)}static getInterpolatedAttribute(e,t,n,s,a,l){return Ah.setScalar(0),Rh.setScalar(0),bh.setScalar(0),Ah.fromBufferAttribute(e,t),Rh.fromBufferAttribute(e,n),bh.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(Ah,a.x),l.addScaledVector(Rh,a.y),l.addScaledVector(bh,a.z),l}static isFrontFacing(e,t,n,s){return bi.subVectors(n,t),hr.subVectors(e,t),bi.cross(hr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),bi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return pi.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let l,c;vo.subVectors(s,n),xo.subVectors(a,n),Eh.subVectors(e,n);const d=vo.dot(Eh),h=xo.dot(Eh);if(d<=0&&h<=0)return t.copy(n);Th.subVectors(e,s);const m=vo.dot(Th),p=xo.dot(Th);if(m>=0&&p<=m)return t.copy(s);const g=d*p-m*h;if(g<=0&&d>=0&&m<=0)return l=d/(d-m),t.copy(n).addScaledVector(vo,l);wh.subVectors(e,a);const v=vo.dot(wh),S=xo.dot(wh);if(S>=0&&v<=S)return t.copy(a);const E=v*h-d*S;if(E<=0&&h>=0&&S<=0)return c=h/(h-S),t.copy(n).addScaledVector(xo,c);const y=m*S-v*p;if(y<=0&&p-m>=0&&v-S>=0)return B_.subVectors(a,s),c=(p-m)/(p-m+(v-S)),t.copy(s).addScaledVector(B_,c);const x=1/(y+E+g);return l=E*x,c=g*x,t.copy(n).addScaledVector(vo,l).addScaledVector(xo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Ru={h:0,s:0,l:0};function Ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=Mp(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Ch(l,a,e+1/3),this.g=Ch(l,a,e),this.b=Ch(l,a,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=s[1],c=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=q0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return bt.workingToColorSpace(Ln.copy(this),e),Math.round(Mt(Ln.r*255,0,255))*65536+Math.round(Mt(Ln.g*255,0,255))*256+Math.round(Mt(Ln.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,s=Ln.g,a=Ln.b,l=Math.max(n,s,a),c=Math.min(n,s,a);let d,h;const m=(c+l)/2;if(c===l)d=0,h=0;else{const p=l-c;switch(h=m<=.5?p/(l+c):p/(2-l-c),l){case n:d=(s-a)/p+(s<a?6:0);break;case s:d=(a-n)/p+2;break;case a:d=(n-s)/p+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hn){bt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,s=Ln.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Ru);const n=il(Wr.h,Ru.h,t),s=il(Wr.s,Ru.s,t),a=il(Wr.l,Ru.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ze;Ze.NAMES=q0;let bE=0;class _i extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Fo,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=df,this.blendDst=hf,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==df&&(n.blendSrc=this.blendSrc),this.blendDst!==hf&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w_&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}if(t){const a=s(e.textures),l=s(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gi extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=N0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new D,bu=new Je;let CE=0;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zf,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bu.fromBufferAttribute(this,t),bu.applyMatrix3(e),this.setXY(t,bu.x,bu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array),a=kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zf&&(e.usage=this.usage),e}}class $0 extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class K0 extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let PE=0;const ci=new lt,Ph=new Vt,yo=new D,ti=new yr,ka=new yr,yn=new D;class zt extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X0(e)?K0:$0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ot().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];ka.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(ti.min,ka.min),ti.expandByPoint(yn),yn.addVectors(ti.max,ka.max),ti.expandByPoint(yn)):(ti.expandByPoint(ka.min),ti.expandByPoint(ka.max))}ti.getCenter(n);let s=0;for(let a=0,l=e.count;a<l;a++)yn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(yn));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)yn.fromBufferAttribute(c,h),d&&(yo.fromBufferAttribute(e,h),yn.add(yo)),s=Math.max(s,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],d=[];for(let z=0;z<n.count;z++)c[z]=new D,d[z]=new D;const h=new D,m=new D,p=new D,g=new Je,v=new Je,S=new Je,E=new D,y=new D;function x(z,C,R){h.fromBufferAttribute(n,z),m.fromBufferAttribute(n,C),p.fromBufferAttribute(n,R),g.fromBufferAttribute(a,z),v.fromBufferAttribute(a,C),S.fromBufferAttribute(a,R),m.sub(h),p.sub(h),v.sub(g),S.sub(g);const B=1/(v.x*S.y-S.x*v.y);isFinite(B)&&(E.copy(m).multiplyScalar(S.y).addScaledVector(p,-v.y).multiplyScalar(B),y.copy(p).multiplyScalar(v.x).addScaledVector(m,-S.x).multiplyScalar(B),c[z].add(E),c[C].add(E),c[R].add(E),d[z].add(y),d[C].add(y),d[R].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let z=0,C=b.length;z<C;++z){const R=b[z],B=R.start,q=R.count;for(let K=B,he=B+q;K<he;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new D,w=new D,I=new D,N=new D;function U(z){I.fromBufferAttribute(s,z),N.copy(I);const C=c[z];L.copy(C),L.sub(I.multiplyScalar(I.dot(C))).normalize(),w.crossVectors(N,C);const B=w.dot(d[z])<0?-1:1;l.setXYZW(z,L.x,L.y,L.z,B)}for(let z=0,C=b.length;z<C;++z){const R=b[z],B=R.start,q=R.count;for(let K=B,he=B+q;K<he;K+=3)U(e.getX(K+0)),U(e.getX(K+1)),U(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const s=new D,a=new D,l=new D,c=new D,d=new D,h=new D,m=new D,p=new D;if(e)for(let g=0,v=e.count;g<v;g+=3){const S=e.getX(g+0),E=e.getX(g+1),y=e.getX(g+2);s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,y),m.subVectors(l,a),p.subVectors(s,a),m.cross(p),c.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),c.add(m),d.add(m),h.add(m),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(E,d.x,d.y,d.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),m.subVectors(l,a),p.subVectors(s,a),m.cross(p),n.setXYZ(g+0,m.x,m.y,m.z),n.setXYZ(g+1,m.x,m.y,m.z),n.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,p=c.normalized,g=new h.constructor(d.length*m);let v=0,S=0;for(let E=0,y=d.length;E<y;E++){c.isInterleavedBufferAttribute?v=d[E]*c.data.stride+c.offset:v=d[E]*m;for(let x=0;x<m;x++)g[S++]=h[v++]}return new St(g,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let m=0,p=h.length;m<p;m++){const g=h[m],v=e(g,n);d.push(v)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,d=l.length;c<d;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let p=0,g=h.length;p<g;p++){const v=h[p];m.push(v.toJSON(e.data))}m.length>0&&(s[d]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],p=a[h];for(let g=0,v=p.length;g<v;g++)m.push(p[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,m=l.length;h<m;h++){const p=l[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new lt,vs=new Mc,Cu=new Ki,z_=new D,Pu=new D,Lu=new D,Iu=new D,Lh=new D,Nu=new D,H_=new D,Du=new D;class rn extends Vt{constructor(e=new zt,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){Nu.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const m=c[d],p=a[d];m!==0&&(Lh.fromBufferAttribute(p,e),l?Nu.addScaledVector(Lh,m):Nu.addScaledVector(Lh.sub(t),m))}t.add(Nu)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cu.copy(n.boundingSphere),Cu.applyMatrix4(a),vs.copy(e.ray).recast(e.near),!(Cu.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Cu,z_)===null||vs.origin.distanceToSquared(z_)>(e.far-e.near)**2))&&(V_.copy(a).invert(),vs.copy(e.ray).applyMatrix4(V_),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s;const a=this.geometry,l=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,p=a.attributes.normal,g=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(l))for(let S=0,E=g.length;S<E;S++){const y=g[S],x=l[y.materialIndex],b=Math.max(y.start,v.start),L=Math.min(c.count,Math.min(y.start+y.count,v.start+v.count));for(let w=b,I=L;w<I;w+=3){const N=c.getX(w),U=c.getX(w+1),z=c.getX(w+2);s=Uu(this,x,e,n,h,m,p,N,U,z),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const S=Math.max(0,v.start),E=Math.min(c.count,v.start+v.count);for(let y=S,x=E;y<x;y+=3){const b=c.getX(y),L=c.getX(y+1),w=c.getX(y+2);s=Uu(this,l,e,n,h,m,p,b,L,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(l))for(let S=0,E=g.length;S<E;S++){const y=g[S],x=l[y.materialIndex],b=Math.max(y.start,v.start),L=Math.min(d.count,Math.min(y.start+y.count,v.start+v.count));for(let w=b,I=L;w<I;w+=3){const N=w,U=w+1,z=w+2;s=Uu(this,x,e,n,h,m,p,N,U,z),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const S=Math.max(0,v.start),E=Math.min(d.count,v.start+v.count);for(let y=S,x=E;y<x;y+=3){const b=y,L=y+1,w=y+2;s=Uu(this,l,e,n,h,m,p,b,L,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function LE(i,e,t,n,s,a,l,c){let d;if(e.side===In?d=n.intersectTriangle(l,a,s,!0,c):d=n.intersectTriangle(s,a,l,e.side===xr,c),d===null)return null;Du.copy(c),Du.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Du);return h<t.near||h>t.far?null:{distance:h,point:Du.clone(),object:i}}function Uu(i,e,t,n,s,a,l,c,d,h){i.getVertexPosition(c,Pu),i.getVertexPosition(d,Lu),i.getVertexPosition(h,Iu);const m=LE(i,e,t,n,Pu,Lu,Iu,H_);if(m){const p=new D;pi.getBarycoord(H_,Pu,Lu,Iu,p),s&&(m.uv=pi.getInterpolatedAttribute(s,c,d,h,p,new Je)),a&&(m.uv1=pi.getInterpolatedAttribute(a,c,d,h,p,new Je)),l&&(m.normal=pi.getInterpolatedAttribute(l,c,d,h,p,new D),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new D,materialIndex:0};pi.getNormal(Pu,Lu,Iu,g.normal),m.face=g,m.barycoord=p}return m}class gl extends zt{constructor(e=1,t=1,n=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:l};const c=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const d=[],h=[],m=[],p=[];let g=0,v=0;S("z","y","x",-1,-1,n,t,e,l,a,0),S("z","y","x",1,-1,n,t,-e,l,a,1),S("x","z","y",1,1,e,n,t,s,l,2),S("x","z","y",1,-1,e,n,-t,s,l,3),S("x","y","z",1,-1,e,t,n,s,a,4),S("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(d),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(p,2));function S(E,y,x,b,L,w,I,N,U,z,C){const R=w/U,B=I/z,q=w/2,K=I/2,he=N/2,oe=U+1,ae=z+1;let ue=0,G=0;const le=new D;for(let Y=0;Y<ae;Y++){const F=Y*B-K;for(let Q=0;Q<oe;Q++){const Re=Q*R-q;le[E]=Re*b,le[y]=F*L,le[x]=he,h.push(le.x,le.y,le.z),le[E]=0,le[y]=0,le[x]=N>0?1:-1,m.push(le.x,le.y,le.z),p.push(Q/U),p.push(1-Y/z),ue+=1}}for(let Y=0;Y<z;Y++)for(let F=0;F<U;F++){const Q=g+F+oe*Y,Re=g+F+oe*(Y+1),be=g+(F+1)+oe*(Y+1),Oe=g+(F+1)+oe*Y;d.push(Q,Re,Oe),d.push(Re,be,Oe),G+=6}c.addGroup(v,G,C),v+=G,g+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bn(i){const e={};for(let t=0;t<i.length;t++){const n=Xo(i[t]);for(const s in n)e[s]=n[s]}return e}function IE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Z0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Q0={clone:Xo,merge:Bn};var NE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NE,this.fragmentShader=DE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=IE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class J0 extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new D,G_=new Je,W_=new Je;class Vn extends J0{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,G_,W_),t.subVectors(W_,G_)}setViewOffset(e,t,n,s,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,h=l.fullHeight;a+=l.offsetX*s/d,t-=l.offsetY*n/h,s*=l.width/d,n*=l.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mo=-90,So=1;class UE extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vn(Mo,So,e,t);s.layers=this.layers,this.add(s);const a=new Vn(Mo,So,e,t);a.layers=this.layers,this.add(a);const l=new Vn(Mo,So,e,t);l.layers=this.layers,this.add(l);const c=new Vn(Mo,So,e,t);c.layers=this.layers,this.add(c);const d=new Vn(Mo,So,e,t);d.layers=this.layers,this.add(d);const h=new Vn(Mo,So,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,l,c,d]=t;for(const h of t)this.remove(h);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===hc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,d,h,m]=this.children,p=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,m),e.setRenderTarget(p,g,v),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class ex extends fn{constructor(e=[],t=zo,n,s,a,l,c,d,h,m){super(e,t,n,s,a,l,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OE extends Os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ex(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gl(5,5,5),a=new Ii({name:"CubemapFromEquirect",uniforms:Xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:Zr});a.uniforms.tEquirect.value=t;const l=new rn(s,a),c=t.minFilter;return t.minFilter===gr&&(t.minFilter=ni),new UE(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(a)}}class Mn extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FE={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,l=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,n),x=this._getHandJoint(h,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],g=m.position.distanceTo(p.position),v=.02,S=.005;h.inputState.pinching&&g>v+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(FE)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class kE extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zf,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new D;class fl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array),a=kt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nx extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Eo;const Ba=new D,To=new D,wo=new D,Ao=new Je,Va=new Je,ix=new lt,Ou=new D,za=new D,Fu=new D,X_=new Je,Nh=new Je,j_=new Je;class BE extends Vt{constructor(e=new nx){if(super(),this.isSprite=!0,this.type="Sprite",Eo===void 0){Eo=new zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tx(t,5);Eo.setIndex([0,1,2,0,2,3]),Eo.setAttribute("position",new fl(n,3,0,!1)),Eo.setAttribute("uv",new fl(n,2,3,!1))}this.geometry=Eo,this.material=e,this.center=new Je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),To.setFromMatrixScale(this.matrixWorld),ix.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&To.multiplyScalar(-wo.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const l=this.center;ku(Ou.set(-.5,-.5,0),wo,l,To,s,a),ku(za.set(.5,-.5,0),wo,l,To,s,a),ku(Fu.set(.5,.5,0),wo,l,To,s,a),X_.set(0,0),Nh.set(1,0),j_.set(1,1);let c=e.ray.intersectTriangle(Ou,za,Fu,!1,Ba);if(c===null&&(ku(za.set(-.5,.5,0),wo,l,To,s,a),Nh.set(0,1),c=e.ray.intersectTriangle(Ou,Fu,za,!1,Ba),c===null))return;const d=e.ray.origin.distanceTo(Ba);d<e.near||d>e.far||t.push({distance:d,point:Ba.clone(),uv:pi.getInterpolation(Ba,Ou,za,Fu,X_,Nh,j_,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ku(i,e,t,n,s,a){Ao.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Va.x=a*Ao.x-s*Ao.y,Va.y=s*Ao.x+a*Ao.y):Va.copy(Ao),i.copy(e),i.x+=Va.x,i.y+=Va.y,i.applyMatrix4(ix)}const Y_=new D,q_=new Dt,$_=new Dt,VE=new D,K_=new lt,Bu=new D,Dh=new Ki,Z_=new lt,Uh=new Mc;class rx extends rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=M_,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bu),this.boundingBox.expandByPoint(Bu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bu),this.boundingSphere.expandByPoint(Bu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dh.copy(this.boundingSphere),Dh.applyMatrix4(s),e.ray.intersectsSphere(Dh)!==!1&&(Z_.copy(s).invert(),Uh.copy(e.ray).applyMatrix4(Z_),!(this.boundingBox!==null&&Uh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===M_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===FS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;q_.fromBufferAttribute(s.attributes.skinIndex,e),$_.fromBufferAttribute(s.attributes.skinWeight,e),Y_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const l=$_.getComponent(a);if(l!==0){const c=q_.getComponent(a);K_.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(VE.copy(Y_).applyMatrix4(K_),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sx extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ox extends fn{constructor(e=null,t=1,n=1,s,a,l,c,d,h=zn,m=zn,p,g){super(null,l,c,d,h,m,s,a,p,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Q_=new lt,zE=new lt;class Ko{constructor(e=[],t=[]){this.uuid=Li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new lt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,l=e.length;a<l;a++){const c=e[a]?e[a].matrixWorld:zE;Q_.multiplyMatrices(c,t[a]),Q_.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ko(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ox(t,e,e,mi,Pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let l=t[a];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),l=new sx),this.bones.push(l),this.boneInverses.push(new lt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const l=t[s];e.bones.push(l.uuid);const c=n[s];e.boneInverses.push(c.toArray())}return e}}class Qf extends St{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ro=new lt,J_=new lt,Vu=[],ev=new yr,HE=new lt,Ha=new rn,Ga=new Ki;class GE extends rn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,HE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),ev.copy(e.boundingBox).applyMatrix4(Ro),this.boundingBox.union(ev)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),Ga.copy(e.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(Ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,l=e*a+1;for(let c=0;c<n.length;c++)n[c]=s[l+c]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ha.geometry=this.geometry,Ha.material=this.material,Ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(n),e.ray.intersectsSphere(Ga)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Ro),J_.multiplyMatrices(n,Ro),Ha.matrixWorld=J_,Ha.raycast(e,Vu);for(let l=0,c=Vu.length;l<c;l++){const d=Vu[l];d.instanceId=a,d.object=this,t.push(d)}Vu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ox(new Float32Array(s*this.count),s,this.count,gp,Pi));const a=this.morphTexture.source.data.data;let l=0;for(let h=0;h<n.length;h++)l+=n[h];const c=this.geometry.morphTargetsRelative?1:1-l,d=s*e;a[d]=c,a.set(n,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oh=new D,WE=new D,XE=new ot;class bs{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Oh.subVectors(n,t).cross(WE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||XE.getNormalMatrix(e),s=this.coplanarPoint(Oh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Ki,jE=new Je(.5,.5),zu=new D;class Ep{constructor(e=new bs,t=new bs,n=new bs,s=new bs,a=new bs,l=new bs){this.planes=[e,t,n,s,a,l]}set(e,t,n,s,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yi,n=!1){const s=this.planes,a=e.elements,l=a[0],c=a[1],d=a[2],h=a[3],m=a[4],p=a[5],g=a[6],v=a[7],S=a[8],E=a[9],y=a[10],x=a[11],b=a[12],L=a[13],w=a[14],I=a[15];if(s[0].setComponents(h-l,v-m,x-S,I-b).normalize(),s[1].setComponents(h+l,v+m,x+S,I+b).normalize(),s[2].setComponents(h+c,v+p,x+E,I+L).normalize(),s[3].setComponents(h-c,v-p,x-E,I-L).normalize(),n)s[4].setComponents(d,g,y,w).normalize(),s[5].setComponents(h-d,v-g,x-y,I-w).normalize();else if(s[4].setComponents(h-d,v-g,x-y,I-w).normalize(),t===Yi)s[5].setComponents(h+d,v+g,x+y,I+w).normalize();else if(t===hc)s[5].setComponents(d,g,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=jE.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zu.x=s.normal.x>0?e.max.x:e.min.x,zu.y=s.normal.y>0?e.max.y:e.min.y,zu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jr extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fc=new D,pc=new D,tv=new lt,Wa=new Mc,Hu=new Ki,Fh=new D,nv=new D;class Sc extends Vt{constructor(e=new zt,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)fc.fromBufferAttribute(t,s-1),pc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fc.distanceTo(pc);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hu.copy(n.boundingSphere),Hu.applyMatrix4(s),Hu.radius+=a,e.ray.intersectsSphere(Hu)===!1)return;tv.copy(s).invert(),Wa.copy(e.ray).applyMatrix4(tv);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const v=Math.max(0,l.start),S=Math.min(m.count,l.start+l.count);for(let E=v,y=S-1;E<y;E+=h){const x=m.getX(E),b=m.getX(E+1),L=Gu(this,e,Wa,d,x,b,E);L&&t.push(L)}if(this.isLineLoop){const E=m.getX(S-1),y=m.getX(v),x=Gu(this,e,Wa,d,E,y,S-1);x&&t.push(x)}}else{const v=Math.max(0,l.start),S=Math.min(g.count,l.start+l.count);for(let E=v,y=S-1;E<y;E+=h){const x=Gu(this,e,Wa,d,E,E+1,E);x&&t.push(x)}if(this.isLineLoop){const E=Gu(this,e,Wa,d,S-1,v,S-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Gu(i,e,t,n,s,a,l){const c=i.geometry.attributes.position;if(fc.fromBufferAttribute(c,s),pc.fromBufferAttribute(c,a),t.distanceSqToSegment(fc,pc,Fh,nv)>n)return;Fh.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Fh);if(!(h<e.near||h>e.far))return{distance:h,point:nv.clone().applyMatrix4(i.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:i}}const iv=new D,rv=new D;class Zo extends Sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)iv.fromBufferAttribute(t,s),rv.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+iv.distanceTo(rv);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class YE extends Sc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mc extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sv=new lt,Jf=new Mc,Wu=new Ki,Xu=new D;class ep extends Vt{constructor(e=new zt,t=new mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wu.copy(n.boundingSphere),Wu.applyMatrix4(s),Wu.radius+=a,e.ray.intersectsSphere(Wu)===!1)return;sv.copy(s).invert(),Jf.copy(e.ray).applyMatrix4(sv);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=n.index,p=n.attributes.position;if(h!==null){const g=Math.max(0,l.start),v=Math.min(h.count,l.start+l.count);for(let S=g,E=v;S<E;S++){const y=h.getX(S);Xu.fromBufferAttribute(p,y),ov(Xu,y,d,s,e,t,this)}}else{const g=Math.max(0,l.start),v=Math.min(p.count,l.start+l.count);for(let S=g,E=v;S<E;S++)Xu.fromBufferAttribute(p,S),ov(Xu,S,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function ov(i,e,t,n,s,a,l){const c=Jf.distanceSqToPoint(i);if(c<t){const d=new D;Jf.closestPointToPoint(i,d),d.applyMatrix4(n);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class qE extends fn{constructor(e,t,n,s,a,l,c,d,h){super(e,t,n,s,a,l,c,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ax extends fn{constructor(e,t,n=Us,s,a,l,c=zn,d=zn,h,m=al,p=1){if(m!==al&&m!==ll)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:p};super(g,s,a,l,c,d,m,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lx extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tp extends zt{constructor(e=1,t=1,n=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));const l=[],c=[],d=[],h=[],m=t/2,p=Math.PI/2*e,g=t,v=2*p+g,S=n*2+a,E=s+1,y=new D,x=new D;for(let b=0;b<=S;b++){let L=0,w=0,I=0,N=0;if(b<=n){const C=b/n,R=C*Math.PI/2;w=-m-e*Math.cos(R),I=e*Math.sin(R),N=-e*Math.cos(R),L=C*p}else if(b<=n+a){const C=(b-n)/a;w=-m+C*t,I=e,N=0,L=p+C*g}else{const C=(b-n-a)/n,R=C*Math.PI/2;w=m+e*Math.sin(R),I=e*Math.cos(R),N=e*Math.sin(R),L=p+g+C*p}const U=Math.max(0,Math.min(1,L/v));let z=0;b===0?z=.5/s:b===S&&(z=-.5/s);for(let C=0;C<=s;C++){const R=C/s,B=R*Math.PI*2,q=Math.sin(B),K=Math.cos(B);x.x=-I*K,x.y=w,x.z=I*q,c.push(x.x,x.y,x.z),y.set(-I*K,N,I*q),y.normalize(),d.push(y.x,y.y,y.z),h.push(R+z,U)}if(b>0){const C=(b-1)*E;for(let R=0;R<s;R++){const B=C+R,q=C+R+1,K=b*E+R,he=b*E+R+1;l.push(B,q,K),l.push(q,he,K)}}}this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tp(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class wp extends zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],l=[],c=[],d=[],h=new D,m=new Je;l.push(0,0,0),c.push(0,0,1),d.push(.5,.5);for(let p=0,g=3;p<=t;p++,g+=3){const v=n+p/t*s;h.x=e*Math.cos(v),h.y=e*Math.sin(v),l.push(h.x,h.y,h.z),c.push(0,0,1),m.x=(l[g]/e+1)/2,m.y=(l[g+1]/e+1)/2,d.push(m.x,m.y)}for(let p=1;p<=t;p++)a.push(p,p+1,0);this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ap extends zt{constructor(e=[new Je(0,-.5),new Je(.5,0),new Je(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Mt(s,0,Math.PI*2);const a=[],l=[],c=[],d=[],h=[],m=1/t,p=new D,g=new Je,v=new D,S=new D,E=new D;let y=0,x=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:y=e[b+1].x-e[b].x,x=e[b+1].y-e[b].y,v.x=x*1,v.y=-y,v.z=x*0,E.copy(v),v.normalize(),d.push(v.x,v.y,v.z);break;case e.length-1:d.push(E.x,E.y,E.z);break;default:y=e[b+1].x-e[b].x,x=e[b+1].y-e[b].y,v.x=x*1,v.y=-y,v.z=x*0,S.copy(v),v.x+=E.x,v.y+=E.y,v.z+=E.z,v.normalize(),d.push(v.x,v.y,v.z),E.copy(S)}for(let b=0;b<=t;b++){const L=n+b*m*s,w=Math.sin(L),I=Math.cos(L);for(let N=0;N<=e.length-1;N++){p.x=e[N].x*w,p.y=e[N].y,p.z=e[N].x*I,l.push(p.x,p.y,p.z),g.x=b/t,g.y=N/(e.length-1),c.push(g.x,g.y);const U=d[3*N+0]*w,z=d[3*N+1],C=d[3*N+0]*I;h.push(U,z,C)}}for(let b=0;b<t;b++)for(let L=0;L<e.length-1;L++){const w=L+b*e.length,I=w,N=w+e.length,U=w+e.length+1,z=w+1;a.push(I,N,z),a.push(U,z,N)}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("uv",new $t(c,2)),this.setAttribute("normal",new $t(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ap(e.points,e.segments,e.phiStart,e.phiLength)}}class Ec extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,l=t/2,c=Math.floor(n),d=Math.floor(s),h=c+1,m=d+1,p=e/c,g=t/d,v=[],S=[],E=[],y=[];for(let x=0;x<m;x++){const b=x*g-l;for(let L=0;L<h;L++){const w=L*p-a;S.push(w,-b,0),E.push(0,0,1),y.push(L/c),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let b=0;b<c;b++){const L=b+h*x,w=b+h*(x+1),I=b+1+h*(x+1),N=b+1+h*x;v.push(L,w,N),v.push(w,I,N)}this.setIndex(v),this.setAttribute("position",new $t(S,3)),this.setAttribute("normal",new $t(E,3)),this.setAttribute("uv",new $t(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class pl extends zt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(l+c,Math.PI);let h=0;const m=[],p=new D,g=new D,v=[],S=[],E=[],y=[];for(let x=0;x<=n;x++){const b=[],L=x/n;let w=0;x===0&&l===0?w=.5/t:x===n&&d===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const N=I/t;p.x=-e*Math.cos(s+N*a)*Math.sin(l+L*c),p.y=e*Math.cos(l+L*c),p.z=e*Math.sin(s+N*a)*Math.sin(l+L*c),S.push(p.x,p.y,p.z),g.copy(p).normalize(),E.push(g.x,g.y,g.z),y.push(N+w,1-L),b.push(h++)}m.push(b)}for(let x=0;x<n;x++)for(let b=0;b<t;b++){const L=m[x][b+1],w=m[x][b],I=m[x+1][b],N=m[x+1][b+1];(x!==0||l>0)&&v.push(L,w,N),(x!==n-1||d<Math.PI)&&v.push(w,I,N)}this.setIndex(v),this.setAttribute("position",new $t(S,3)),this.setAttribute("normal",new $t(E,3)),this.setAttribute("uv",new $t(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rp extends zt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],d=[],h=[],m=new D,p=new D,g=new D;for(let v=0;v<=n;v++)for(let S=0;S<=s;S++){const E=S/s*a,y=v/n*Math.PI*2;p.x=(e+t*Math.cos(y))*Math.cos(E),p.y=(e+t*Math.cos(y))*Math.sin(E),p.z=t*Math.sin(y),c.push(p.x,p.y,p.z),m.x=e*Math.cos(E),m.y=e*Math.sin(E),g.subVectors(p,m).normalize(),d.push(g.x,g.y,g.z),h.push(S/s),h.push(v/n)}for(let v=1;v<=n;v++)for(let S=1;S<=s;S++){const E=(s+1)*v+S-1,y=(s+1)*(v-1)+S-1,x=(s+1)*(v-1)+S,b=(s+1)*v+S;l.push(E,y,b),l.push(y,x,b)}this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bp extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ni extends bp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $E extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KE extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ju(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ZE(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function QE(i){function e(s,a){return i[s]-i[a]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function av(i,e,t){const n=i.length,s=new i.constructor(n);for(let a=0,l=0;l!==n;++a){const c=t[a]*e;for(let d=0;d!==e;++d)s[l++]=i[c+d]}return s}function ux(i,e,t,n){let s=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[s++];if(a===void 0)return;let l=a[n];if(l!==void 0)if(Array.isArray(l))do l=a[n],l!==void 0&&(e.push(a.time),t.push(...l)),a=i[s++];while(a!==void 0);else if(l.toArray!==void 0)do l=a[n],l!==void 0&&(e.push(a.time),l.toArray(t,t.length)),a=i[s++];while(a!==void 0);else do l=a[n],l!==void 0&&(e.push(a.time),t.push(l)),a=i[s++];while(a!==void 0)}class _l{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];e:{t:{let l;n:{i:if(!(e<s)){for(let c=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(a=s,s=t[++n],e<s)break t}l=t.length;break n}if(!(e>=a)){const c=t[1];e<c&&(n=2,a=c);for(let d=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(s=a,a=t[--n-1],e>=a)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let l=0;l!==s;++l)t[l]=n[a+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class JE extends _l{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:S_,endingEnd:S_}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,l=e+1,c=s[a],d=s[l];if(c===void 0)switch(this.getSettings_().endingStart){case E_:a=e,c=2*t-n;break;case T_:a=s.length-2,c=t+s[a]-s[a+1];break;default:a=e,c=n}if(d===void 0)switch(this.getSettings_().endingEnd){case E_:l=e,d=2*n-t;break;case T_:l=1,d=n+s[1]-s[0];break;default:l=e-1,d=t}const h=(n-t)*.5,m=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(d-n),this._offsetPrev=a*m,this._offsetNext=l*m}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,m=this._offsetPrev,p=this._offsetNext,g=this._weightPrev,v=this._weightNext,S=(n-t)/(s-t),E=S*S,y=E*S,x=-g*y+2*g*E-g*S,b=(1+g)*y+(-1.5-2*g)*E+(-.5+g)*S+1,L=(-1-v)*y+(1.5+v)*E+.5*S,w=v*y-v*E;for(let I=0;I!==c;++I)a[I]=x*l[m+I]+b*l[h+I]+L*l[d+I]+w*l[p+I];return a}}class eT extends _l{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,m=(n-t)/(s-t),p=1-m;for(let g=0;g!==c;++g)a[g]=l[h+g]*p+l[d+g]*m;return a}}class tT extends _l{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Di{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ju(t,this.TimeBufferType),this.values=ju(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ju(e.times,Array),values:ju(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new JE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ul:t=this.InterpolantFactoryMethodDiscrete;break;case cl:t=this.InterpolantFactoryMethodLinear;break;case dh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ul;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,l=s-1;for(;a!==s&&n[a]<e;)++a;for(;l!==-1&&n[l]>t;)--l;if(++l,a!==0||l!==s){a>=l&&(l=Math.max(l,1),a=l-1);const c=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==a;c++){const d=n[c];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,d),e=!1;break}if(l!==null&&l>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,d,l),e=!1;break}l=d}if(s!==void 0&&ZE(s))for(let c=0,d=s.length;c!==d;++c){const h=s[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dh,a=e.length-1;let l=1;for(let c=1;c<a;++c){let d=!1;const h=e[c],m=e[c+1];if(h!==m&&(c!==1||h!==e[0]))if(s)d=!0;else{const p=c*n,g=p-n,v=p+n;for(let S=0;S!==n;++S){const E=t[p+S];if(E!==t[g+S]||E!==t[v+S]){d=!0;break}}}if(d){if(c!==l){e[l]=e[c];const p=c*n,g=l*n;for(let v=0;v!==n;++v)t[g+v]=t[p+v]}++l}}if(a>0){e[l]=e[a];for(let c=a*n,d=l*n,h=0;h!==n;++h)t[d+h]=t[c+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=cl;class Qo extends Di{constructor(e,t,n){super(e,t,n)}}Qo.prototype.ValueTypeName="bool";Qo.prototype.ValueBufferType=Array;Qo.prototype.DefaultInterpolation=ul;Qo.prototype.InterpolantFactoryMethodLinear=void 0;Qo.prototype.InterpolantFactoryMethodSmooth=void 0;class cx extends Di{constructor(e,t,n,s){super(e,t,n,s)}}cx.prototype.ValueTypeName="color";class jo extends Di{constructor(e,t,n,s){super(e,t,n,s)}}jo.prototype.ValueTypeName="number";class nT extends _l{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=(n-t)/(s-t);let h=e*c;for(let m=h+c;h!==m;h+=4)vt.slerpFlat(a,0,l,h-c,l,h,d);return a}}class Yo extends Di{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new nT(this.times,this.values,this.getValueSize(),e)}}Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Jo extends Di{constructor(e,t,n){super(e,t,n)}}Jo.prototype.ValueTypeName="string";Jo.prototype.ValueBufferType=Array;Jo.prototype.DefaultInterpolation=ul;Jo.prototype.InterpolantFactoryMethodLinear=void 0;Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class qo extends Di{constructor(e,t,n,s){super(e,t,n,s)}}qo.prototype.ValueTypeName="vector";class iT{constructor(e="",t=-1,n=[],s=kS){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Li(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(sT(n[l]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,l=n.length;a!==l;++a)t.push(Di.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,l=[];for(let c=0;c<a;c++){let d=[],h=[];d.push((c+a-1)%a,c,(c+1)%a),h.push(0,1,0);const m=QE(d);d=av(d,1,m),h=av(h,1,m),!s&&d[0]===0&&(d.push(a),h.push(h[0])),l.push(new jo(".morphTargetInfluences["+t[c].name+"]",d,h).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,d=e.length;c<d;c++){const h=e[c],m=h.name.match(a);if(m&&m.length>1){const p=m[1];let g=s[p];g||(s[p]=g=[]),g.push(h)}}const l=[];for(const c in s)l.push(this.CreateFromMorphTargetSequence(c,s[c],t,n));return l}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,g,v,S,E){if(v.length!==0){const y=[],x=[];ux(v,y,x,S),y.length!==0&&E.push(new p(g,y,x))}},s=[],a=e.name||"default",l=e.fps||30,c=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const g=h[p].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const v={};let S;for(S=0;S<g.length;S++)if(g[S].morphTargets)for(let E=0;E<g[S].morphTargets.length;E++)v[g[S].morphTargets[E]]=-1;for(const E in v){const y=[],x=[];for(let b=0;b!==g[S].morphTargets.length;++b){const L=g[S];y.push(L.time),x.push(L.morphTarget===E?1:0)}s.push(new jo(".morphTargetInfluence["+E+"]",y,x))}d=v.length*l}else{const v=".bones["+t[p].name+"]";n(qo,v+".position",g,"pos",s),n(Yo,v+".quaternion",g,"rot",s),n(qo,v+".scale",g,"scl",s)}}return s.length===0?null:new this(a,d,s,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function rT(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jo;case"vector":case"vector2":case"vector3":case"vector4":return qo;case"color":return cx;case"quaternion":return Yo;case"bool":case"boolean":return Qo;case"string":return Jo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function sT(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rT(i.type);if(i.times===void 0){const t=[],n=[];ux(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const _r={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class oT{constructor(e,t,n){const s=this;let a=!1,l=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(m){c++,a===!1&&s.onStart!==void 0&&s.onStart(m,l,c),a=!0},this.itemEnd=function(m){l++,s.onProgress!==void 0&&s.onProgress(m,l,c),l===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,p){return h.push(m,p),this},this.removeHandler=function(m){const p=h.indexOf(m);return p!==-1&&h.splice(p,2),this},this.getHandler=function(m){for(let p=0,g=h.length;p<g;p+=2){const v=h[p],S=h[p+1];if(v.global&&(v.lastIndex=0),v.test(m))return S}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const aT=new oT;class ea{constructor(e){this.manager=e!==void 0?e:aT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ea.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr={};class lT extends Error{constructor(e,t){super(e),this.response=t}}class dx extends ea{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=_r.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(pr[e]!==void 0){pr[e].push({onLoad:t,onProgress:n,onError:s});return}pr[e]=[],pr[e].push({onLoad:t,onProgress:n,onError:s});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,d=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=pr[e],p=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=g?parseInt(g):0,S=v!==0;let E=0;const y=new ReadableStream({start(x){b();function b(){p.read().then(({done:L,value:w})=>{if(L)x.close();else{E+=w.byteLength;const I=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:v});for(let N=0,U=m.length;N<U;N++){const z=m[N];z.onProgress&&z.onProgress(I)}x.enqueue(w),b()}},L=>{x.error(L)})}}});return new Response(y)}else throw new lT(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,c));case"json":return h.json();default:if(c==="")return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),g=p&&p[1]?p[1].toLowerCase():void 0,v=new TextDecoder(g);return h.arrayBuffer().then(S=>v.decode(S))}}}).then(h=>{_r.add(`file:${e}`,h);const m=pr[e];delete pr[e];for(let p=0,g=m.length;p<g;p++){const v=m[p];v.onLoad&&v.onLoad(h)}}).catch(h=>{const m=pr[e];if(m===void 0)throw this.manager.itemError(e),h;delete pr[e];for(let p=0,g=m.length;p<g;p++){const v=m[p];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const bo=new WeakMap;class hx extends ea{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=_r.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0);else{let p=bo.get(l);p===void 0&&(p=[],bo.set(l,p)),p.push({onLoad:t,onError:s})}return l}const c=dl("img");function d(){m(),t&&t(this);const p=bo.get(this)||[];for(let g=0;g<p.length;g++){const v=p[g];v.onLoad&&v.onLoad(this)}bo.delete(this),a.manager.itemEnd(e)}function h(p){m(),s&&s(p),_r.remove(`image:${e}`);const g=bo.get(this)||[];for(let v=0;v<g.length;v++){const S=g[v];S.onError&&S.onError(p)}bo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),_r.add(`image:${e}`,c),a.manager.itemStart(e),c.src=e,c}}class uT extends ea{constructor(e){super(e)}load(e,t,n,s){const a=new fn,l=new hx(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class Tc extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const kh=new lt,lv=new D,uv=new D;class Cp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ep,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lv.setFromMatrixPosition(e.matrixWorld),t.position.copy(lv),uv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uv),t.updateMatrixWorld(),kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cT extends Cp{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Wo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dT extends Tc{constructor(e,t,n=0,s=Math.PI/3,a=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=l,this.map=null,this.shadow=new cT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const cv=new lt,Xa=new D,Bh=new D;class hT extends Cp{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Xa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xa),Bh.copy(n.position),Bh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bh),n.updateMatrixWorld(),s.makeTranslation(-Xa.x,-Xa.y,-Xa.z),cv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cv,n.coordinateSystem,n.reversedDepth)}}class fT extends Tc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pp extends J0{constructor(e=-1,t=1,n=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pT extends Cp{constructor(){super(new Pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tp extends Tc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new pT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mT extends Tc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Vh=new WeakMap;class gT extends ea{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=_r.get(`image-bitmap:${e}`);if(l!==void 0){if(a.manager.itemStart(e),l.then){l.then(h=>{if(Vh.has(l)===!0)s&&s(Vh.get(l)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(h),a.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const d=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return _r.add(`image-bitmap:${e}`,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Vh.set(d,h),_r.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});_r.add(`image-bitmap:${e}`,d),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class _T extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Lp="\\[\\]\\.:\\/",xT=new RegExp("["+Lp+"]","g"),Ip="[^"+Lp+"]",yT="[^"+Lp.replace("\\.","")+"]",MT=/((?:WC+[\/:])*)/.source.replace("WC",Ip),ST=/(WCOD+)?/.source.replace("WCOD",yT),ET=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ip),TT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ip),wT=new RegExp("^"+MT+ST+ET+TT+"$"),AT=["material","materials","bones","map"];class RT{constructor(e,t,n){const s=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Bt{constructor(e,t,n){this.path=t,this.parsedPath=n||Bt.parseTrackName(t),this.node=Bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Bt.Composite(e,t,n):new Bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xT,"")}static parseTrackName(e){const t=wT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);AT.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let l=0;l<a.length;l++){const c=a[l];if(c.name===t||c.uuid===t)return c;const d=n(c.children);if(d)return d}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const l=e[s];if(l===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(d=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Bt.Composite=RT;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class dv{constructor(e,t,n,s,a,l=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=a,this.normalized=l,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class bT extends Zo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new zt;s.setAttribute("position",new $t(t,3)),s.setAttribute("color",new $t(n,3));const a=new Jr({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(e,t,n){const s=new Ze,a=this.geometry.attributes.color.array;return s.set(e),s.toArray(a,0),s.toArray(a,3),s.set(t),s.toArray(a,6),s.toArray(a,9),s.set(n),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function hv(i,e,t,n){const s=CT(n);switch(t){case V0:return i*e;case gp:return i*e/s.components*s.byteLength;case _p:return i*e/s.components*s.byteLength;case H0:return i*e*2/s.components*s.byteLength;case vp:return i*e*2/s.components*s.byteLength;case z0:return i*e*3/s.components*s.byteLength;case mi:return i*e*4/s.components*s.byteLength;case xp:return i*e*4/s.components*s.byteLength;case tc:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ef:case wf:return Math.max(i,16)*Math.max(e,8)/4;case Sf:case Tf:return Math.max(i,8)*Math.max(e,8)/2;case Af:case Rf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case If:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Of:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gf:case Wf:case Xf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jf:case Yf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qf:case $f:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CT(i){switch(i){case $i:case O0:return{byteLength:1,components:1};case sl:case F0:case ml:return{byteLength:2,components:1};case pp:case mp:return{byteLength:2,components:4};case Us:case fp:case Pi:return{byteLength:4,components:1};case k0:case B0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ds}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ds);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fx(){let i=null,e=!1,t=null,n=null;function s(a,l){t(a,l),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function PT(i){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,p=h.byteLength,g=i.createBuffer();i.bindBuffer(d,g),i.bufferData(d,h,m),c.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,d,h){const m=d.array,p=d.updateRanges;if(i.bindBuffer(h,c),p.length===0)i.bufferSubData(h,0,m);else{p.sort((v,S)=>v.start-S.start);let g=0;for(let v=1;v<p.length;v++){const S=p[g],E=p[v];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++g,p[g]=E)}p.length=g+1;for(let v=0,S=p.length;v<S;v++){const E=p[v];i.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(i.deleteBuffer(d.buffer),e.delete(c))}function l(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:s,remove:a,update:l}}var LT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,VT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ew=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ow=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aw="gl_FragColor = linearToOutputTexel( gl_FragColor );",lw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_w=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ew=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ww=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Aw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Iw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ow=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ww=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$w=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_A=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$A=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:LT,alphahash_pars_fragment:IT,alphamap_fragment:NT,alphamap_pars_fragment:DT,alphatest_fragment:UT,alphatest_pars_fragment:OT,aomap_fragment:FT,aomap_pars_fragment:kT,batching_pars_vertex:BT,batching_vertex:VT,begin_vertex:zT,beginnormal_vertex:HT,bsdfs:GT,iridescence_fragment:WT,bumpmap_pars_fragment:XT,clipping_planes_fragment:jT,clipping_planes_pars_fragment:YT,clipping_planes_pars_vertex:qT,clipping_planes_vertex:$T,color_fragment:KT,color_pars_fragment:ZT,color_pars_vertex:QT,color_vertex:JT,common:ew,cube_uv_reflection_fragment:tw,defaultnormal_vertex:nw,displacementmap_pars_vertex:iw,displacementmap_vertex:rw,emissivemap_fragment:sw,emissivemap_pars_fragment:ow,colorspace_fragment:aw,colorspace_pars_fragment:lw,envmap_fragment:uw,envmap_common_pars_fragment:cw,envmap_pars_fragment:dw,envmap_pars_vertex:hw,envmap_physical_pars_fragment:Ew,envmap_vertex:fw,fog_vertex:pw,fog_pars_vertex:mw,fog_fragment:gw,fog_pars_fragment:_w,gradientmap_pars_fragment:vw,lightmap_pars_fragment:xw,lights_lambert_fragment:yw,lights_lambert_pars_fragment:Mw,lights_pars_begin:Sw,lights_toon_fragment:Tw,lights_toon_pars_fragment:ww,lights_phong_fragment:Aw,lights_phong_pars_fragment:Rw,lights_physical_fragment:bw,lights_physical_pars_fragment:Cw,lights_fragment_begin:Pw,lights_fragment_maps:Lw,lights_fragment_end:Iw,logdepthbuf_fragment:Nw,logdepthbuf_pars_fragment:Dw,logdepthbuf_pars_vertex:Uw,logdepthbuf_vertex:Ow,map_fragment:Fw,map_pars_fragment:kw,map_particle_fragment:Bw,map_particle_pars_fragment:Vw,metalnessmap_fragment:zw,metalnessmap_pars_fragment:Hw,morphinstance_vertex:Gw,morphcolor_vertex:Ww,morphnormal_vertex:Xw,morphtarget_pars_vertex:jw,morphtarget_vertex:Yw,normal_fragment_begin:qw,normal_fragment_maps:$w,normal_pars_fragment:Kw,normal_pars_vertex:Zw,normal_vertex:Qw,normalmap_pars_fragment:Jw,clearcoat_normal_fragment_begin:eA,clearcoat_normal_fragment_maps:tA,clearcoat_pars_fragment:nA,iridescence_pars_fragment:iA,opaque_fragment:rA,packing:sA,premultiplied_alpha_fragment:oA,project_vertex:aA,dithering_fragment:lA,dithering_pars_fragment:uA,roughnessmap_fragment:cA,roughnessmap_pars_fragment:dA,shadowmap_pars_fragment:hA,shadowmap_pars_vertex:fA,shadowmap_vertex:pA,shadowmask_pars_fragment:mA,skinbase_vertex:gA,skinning_pars_vertex:_A,skinning_vertex:vA,skinnormal_vertex:xA,specularmap_fragment:yA,specularmap_pars_fragment:MA,tonemapping_fragment:SA,tonemapping_pars_fragment:EA,transmission_fragment:TA,transmission_pars_fragment:wA,uv_pars_fragment:AA,uv_pars_vertex:RA,uv_vertex:bA,worldpos_vertex:CA,background_vert:PA,background_frag:LA,backgroundCube_vert:IA,backgroundCube_frag:NA,cube_vert:DA,cube_frag:UA,depth_vert:OA,depth_frag:FA,distanceRGBA_vert:kA,distanceRGBA_frag:BA,equirect_vert:VA,equirect_frag:zA,linedashed_vert:HA,linedashed_frag:GA,meshbasic_vert:WA,meshbasic_frag:XA,meshlambert_vert:jA,meshlambert_frag:YA,meshmatcap_vert:qA,meshmatcap_frag:$A,meshnormal_vert:KA,meshnormal_frag:ZA,meshphong_vert:QA,meshphong_frag:JA,meshphysical_vert:eR,meshphysical_frag:tR,meshtoon_vert:nR,meshtoon_frag:iR,points_vert:rR,points_frag:sR,shadow_vert:oR,shadow_frag:aR,sprite_vert:lR,sprite_frag:uR},Ce={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ji={basic:{uniforms:Bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Bn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Bn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Bn([Ce.points,Ce.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Bn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Bn([Ce.common,Ce.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Bn([Ce.sprite,Ce.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Bn([Ce.common,Ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Bn([Ce.lights,Ce.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ji.physical={uniforms:Bn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Yu={r:0,b:0,g:0},ys=new ii,cR=new lt;function dR(i,e,t,n,s,a,l){const c=new Ze(0);let d=a===!0?0:1,h,m,p=null,g=0,v=null;function S(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?t:e).get(w)),w}function E(L){let w=!1;const I=S(L);I===null?x(c,d):I&&I.isColor&&(x(I,1),w=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(L,w){const I=S(w);I&&(I.isCubeTexture||I.mapping===yc)?(m===void 0&&(m=new rn(new gl(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Xo(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),ys.copy(w.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),m.material.uniforms.envMap.value=I,m.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(cR.makeRotationFromEuler(ys)),m.material.toneMapped=bt.getTransfer(I.colorSpace)!==Wt,(p!==I||g!==I.version||v!==i.toneMapping)&&(m.material.needsUpdate=!0,p=I,g=I.version,v=i.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new rn(new Ec(2,2),new Ii({name:"BackgroundMaterial",uniforms:Xo(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=bt.getTransfer(I.colorSpace)!==Wt,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(p!==I||g!==I.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,p=I,g=I.version,v=i.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function x(L,w){L.getRGB(Yu,Z0(i)),n.buffers.color.setClear(Yu.r,Yu.g,Yu.b,w,l)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,w=1){c.set(L),d=w,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,x(c,d)},render:E,addToRenderList:y,dispose:b}}function hR(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null);let a=s,l=!1;function c(R,B,q,K,he){let oe=!1;const ae=p(K,q,B);a!==ae&&(a=ae,h(a.object)),oe=v(R,K,q,he),oe&&S(R,K,q,he),he!==null&&e.update(he,i.ELEMENT_ARRAY_BUFFER),(oe||l)&&(l=!1,w(R,B,q,K),he!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function d(){return i.createVertexArray()}function h(R){return i.bindVertexArray(R)}function m(R){return i.deleteVertexArray(R)}function p(R,B,q){const K=q.wireframe===!0;let he=n[R.id];he===void 0&&(he={},n[R.id]=he);let oe=he[B.id];oe===void 0&&(oe={},he[B.id]=oe);let ae=oe[K];return ae===void 0&&(ae=g(d()),oe[K]=ae),ae}function g(R){const B=[],q=[],K=[];for(let he=0;he<t;he++)B[he]=0,q[he]=0,K[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:K,object:R,attributes:{},index:null}}function v(R,B,q,K){const he=a.attributes,oe=B.attributes;let ae=0;const ue=q.getAttributes();for(const G in ue)if(ue[G].location>=0){const Y=he[G];let F=oe[G];if(F===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),Y===void 0||Y.attribute!==F||F&&Y.data!==F.data)return!0;ae++}return a.attributesNum!==ae||a.index!==K}function S(R,B,q,K){const he={},oe=B.attributes;let ae=0;const ue=q.getAttributes();for(const G in ue)if(ue[G].location>=0){let Y=oe[G];Y===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor));const F={};F.attribute=Y,Y&&Y.data&&(F.data=Y.data),he[G]=F,ae++}a.attributes=he,a.attributesNum=ae,a.index=K}function E(){const R=a.newAttributes;for(let B=0,q=R.length;B<q;B++)R[B]=0}function y(R){x(R,0)}function x(R,B){const q=a.newAttributes,K=a.enabledAttributes,he=a.attributeDivisors;q[R]=1,K[R]===0&&(i.enableVertexAttribArray(R),K[R]=1),he[R]!==B&&(i.vertexAttribDivisor(R,B),he[R]=B)}function b(){const R=a.newAttributes,B=a.enabledAttributes;for(let q=0,K=B.length;q<K;q++)B[q]!==R[q]&&(i.disableVertexAttribArray(q),B[q]=0)}function L(R,B,q,K,he,oe,ae){ae===!0?i.vertexAttribIPointer(R,B,q,he,oe):i.vertexAttribPointer(R,B,q,K,he,oe)}function w(R,B,q,K){E();const he=K.attributes,oe=q.getAttributes(),ae=B.defaultAttributeValues;for(const ue in oe){const G=oe[ue];if(G.location>=0){let le=he[ue];if(le===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const Y=le.normalized,F=le.itemSize,Q=e.get(le);if(Q===void 0)continue;const Re=Q.buffer,be=Q.type,Oe=Q.bytesPerElement,ee=be===i.INT||be===i.UNSIGNED_INT||le.gpuType===fp;if(le.isInterleavedBufferAttribute){const se=le.data,xe=se.stride,Ne=le.offset;if(se.isInstancedInterleavedBuffer){for(let De=0;De<G.locationSize;De++)x(G.location+De,se.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let De=0;De<G.locationSize;De++)y(G.location+De);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let De=0;De<G.locationSize;De++)L(G.location+De,F/G.locationSize,be,Y,xe*Oe,(Ne+F/G.locationSize*De)*Oe,ee)}else{if(le.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)x(G.location+se,le.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let se=0;se<G.locationSize;se++)y(G.location+se);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let se=0;se<G.locationSize;se++)L(G.location+se,F/G.locationSize,be,Y,F*Oe,F/G.locationSize*se*Oe,ee)}}else if(ae!==void 0){const Y=ae[ue];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(G.location,Y);break;case 3:i.vertexAttrib3fv(G.location,Y);break;case 4:i.vertexAttrib4fv(G.location,Y);break;default:i.vertexAttrib1fv(G.location,Y)}}}}b()}function I(){z();for(const R in n){const B=n[R];for(const q in B){const K=B[q];for(const he in K)m(K[he].object),delete K[he];delete B[q]}delete n[R]}}function N(R){if(n[R.id]===void 0)return;const B=n[R.id];for(const q in B){const K=B[q];for(const he in K)m(K[he].object),delete K[he];delete B[q]}delete n[R.id]}function U(R){for(const B in n){const q=n[B];if(q[R.id]===void 0)continue;const K=q[R.id];for(const he in K)m(K[he].object),delete K[he];delete q[R.id]}}function z(){C(),l=!0,a!==s&&(a=s,h(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:z,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:y,disableUnusedAttributes:b}}function fR(i,e,t){let n;function s(h){n=h}function a(h,m){i.drawArrays(n,h,m),t.update(m,n,1)}function l(h,m,p){p!==0&&(i.drawArraysInstanced(n,h,m,p),t.update(m,n,p))}function c(h,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,m,0,p);let v=0;for(let S=0;S<p;S++)v+=m[S];t.update(v,n,1)}function d(h,m,p,g){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<h.length;S++)l(h[S],m[S],g[S]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,m,0,g,0,p);let S=0;for(let E=0;E<p;E++)S+=m[E]*g[E];t.update(S,n,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function pR(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(U){return!(U!==mi&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const z=U===ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==$i&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Pi&&!z)}function d(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=S>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:I,maxSamples:N}}function mR(i){const e=this;let t=null,n=0,s=!1,a=!1;const l=new bs,c=new ot,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const v=p.length!==0||g||n!==0||s;return s=g,n=p.length,v},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,g){t=m(p,g,0)},this.setState=function(p,g,v){const S=p.clippingPlanes,E=p.clipIntersection,y=p.clipShadows,x=i.get(p);if(!s||S===null||S.length===0||a&&!y)a?m(null):h();else{const b=a?0:n,L=b*4;let w=x.clippingState||null;d.value=w,w=m(S,g,L,v);for(let I=0;I!==L;++I)w[I]=t[I];x.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(p,g,v,S){const E=p!==null?p.length:0;let y=null;if(E!==0){if(y=d.value,S!==!0||y===null){const x=v+E*4,b=g.matrixWorldInverse;c.getNormalMatrix(b),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,w=v;L!==E;++L,w+=4)l.copy(p[L]).applyMatrix4(b,c),l.normal.toArray(y,w),y[w+3]=l.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function gR(i){let e=new WeakMap;function t(l,c){return c===yf?l.mapping=zo:c===Mf&&(l.mapping=Ho),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===yf||c===Mf)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const h=new OE(d.height);return h.fromEquirectangularTexture(i,l),e.set(l,h),l.addEventListener("dispose",s),t(h.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Oo=4,fv=[.125,.215,.35,.446,.526,.582],Ls=20,zh=new Pp,pv=new Ze;let Hh=null,Gh=0,Wh=0,Xh=!1;const Cs=(1+Math.sqrt(5))/2,Co=1/Cs,mv=[new D(-Cs,Co,0),new D(Cs,Co,0),new D(-Co,0,Cs),new D(Co,0,Cs),new D(0,Cs,-Co),new D(0,Cs,Co),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],_R=new D;class gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,a={}){const{size:l=256,position:c=_R}=a;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,s,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Wh),this._renderer.xr.enabled=Xh,e.scissorTest=!1,qu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zo||e.mapping===Ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:ml,format:mi,colorSpace:Hn,depthBuffer:!1},s=_v(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_v(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vR(a)),this._blurMaterial=xR(a,e,t)}return s}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,zh)}_sceneToCubeUV(e,t,n,s,a){const d=new Vn(90,1,t,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(pv),p.toneMapping=Qr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));const E=new gi({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),y=new rn(new gl,E);let x=!1;const b=e.background;b?b.isColor&&(E.color.copy(b),e.background=null,x=!0):(E.color.copy(pv),x=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+m[L],a.y,a.z)):w===1?(d.up.set(0,0,h[L]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+m[L],a.z)):(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+m[L]));const I=this._cubeSize;qu(s,w*I,L>2?I:0,I,I),p.setRenderTarget(s),x&&p.render(y,d),p.render(e,d)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===zo||e.mapping===Ho;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vv());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new rn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;qu(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,zh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=mv[(s-a-1)%mv.length];this._blur(e,a-1,a,l,c)}t.autoClear=n}_blur(e,t,n,s,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",a),this._halfBlur(l,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,l,c){const d=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new rn(this._lodPlanes[s],h),g=h.uniforms,v=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Ls-1),E=a/S,y=isFinite(a)?1+Math.floor(m*E):Ls;y>Ls&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ls}`);const x=[];let b=0;for(let U=0;U<Ls;++U){const z=U/E,C=Math.exp(-z*z/2);x.push(C),U===0?b+=C:U<y&&(b+=2*C)}for(let U=0;U<x.length;U++)x[U]=x[U]/b;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=l==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:L}=this;g.dTheta.value=S,g.mipInt.value=L-n;const w=this._sizeLods[s],I=3*w*(s>L-Oo?s-L+Oo:0),N=4*(this._cubeSize-w);qu(t,I,N,3*w,2*w),d.setRenderTarget(t),d.render(p,zh)}}function vR(i){const e=[],t=[],n=[];let s=i;const a=i-Oo+1+fv.length;for(let l=0;l<a;l++){const c=Math.pow(2,s);t.push(c);let d=1/c;l>i-Oo?d=fv[l-i+Oo-1]:l===0&&(d=0),n.push(d);const h=1/(c-2),m=-h,p=1+h,g=[m,m,p,m,p,p,m,m,p,p,m,p],v=6,S=6,E=3,y=2,x=1,b=new Float32Array(E*S*v),L=new Float32Array(y*S*v),w=new Float32Array(x*S*v);for(let N=0;N<v;N++){const U=N%3*2/3-1,z=N>2?0:-1,C=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];b.set(C,E*S*N),L.set(g,y*S*N);const R=[N,N,N,N,N,N];w.set(R,x*S*N)}const I=new zt;I.setAttribute("position",new St(b,E)),I.setAttribute("uv",new St(L,y)),I.setAttribute("faceIndex",new St(w,x)),e.push(I),s>Oo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _v(i,e,t){const n=new Os(i,e,t);return n.texture.mapping=yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qu(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function xR(i,e,t){const n=new Float32Array(Ls),s=new D(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function vv(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function xv(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yR(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,h=d===yf||d===Mf,m=d===zo||d===Ho;if(h||m){let p=e.get(c);const g=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new gv(i)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const v=c.image;return h&&v&&v.height>0||m&&v&&s(v)?(t===null&&(t=new gv(i)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c}function s(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function MR(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&hl("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function SR(i,e,t,n){const s={},a=new WeakMap;function l(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",l),delete s[g.id];const v=a.get(g);v&&(e.remove(v),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(p,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,t.memory.geometries++),g}function d(p){const g=p.attributes;for(const v in g)e.update(g[v],i.ARRAY_BUFFER)}function h(p){const g=[],v=p.index,S=p.attributes.position;let E=0;if(v!==null){const b=v.array;E=v.version;for(let L=0,w=b.length;L<w;L+=3){const I=b[L+0],N=b[L+1],U=b[L+2];g.push(I,N,N,U,U,I)}}else if(S!==void 0){const b=S.array;E=S.version;for(let L=0,w=b.length/3-1;L<w;L+=3){const I=L+0,N=L+1,U=L+2;g.push(I,N,N,U,U,I)}}else return;const y=new(X0(g)?K0:$0)(g,1);y.version=E;const x=a.get(p);x&&e.remove(x),a.set(p,y)}function m(p){const g=a.get(p);if(g){const v=p.index;v!==null&&g.version<v.version&&h(p)}else h(p);return a.get(p)}return{get:c,update:d,getWireframeAttribute:m}}function ER(i,e,t){let n;function s(g){n=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,v){i.drawElements(n,v,a,g*l),t.update(v,n,1)}function h(g,v,S){S!==0&&(i.drawElementsInstanced(n,v,a,g*l,S),t.update(v,n,S))}function m(g,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,g,0,S);let y=0;for(let x=0;x<S;x++)y+=v[x];t.update(y,n,1)}function p(g,v,S,E){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)h(g[x]/l,v[x],E[x]);else{y.multiDrawElementsInstancedWEBGL(n,v,0,a,g,0,E,0,S);let x=0;for(let b=0;b<S;b++)x+=v[b]*E[b];t.update(x,n,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function TR(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function wR(i,e,t){const n=new WeakMap,s=new Dt;function a(l,c,d){const h=l.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=m!==void 0?m.length:0;let g=n.get(c);if(g===void 0||g.count!==p){let R=function(){z.dispose(),n.delete(c),c.removeEventListener("dispose",R)};var v=R;g!==void 0&&g.texture.dispose();const S=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let w=0;S===!0&&(w=1),E===!0&&(w=2),y===!0&&(w=3);let I=c.attributes.position.count*w,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*N*4*p),z=new j0(U,I,N,p);z.type=Pi,z.needsUpdate=!0;const C=w*4;for(let B=0;B<p;B++){const q=x[B],K=b[B],he=L[B],oe=I*N*4*B;for(let ae=0;ae<q.count;ae++){const ue=ae*C;S===!0&&(s.fromBufferAttribute(q,ae),U[oe+ue+0]=s.x,U[oe+ue+1]=s.y,U[oe+ue+2]=s.z,U[oe+ue+3]=0),E===!0&&(s.fromBufferAttribute(K,ae),U[oe+ue+4]=s.x,U[oe+ue+5]=s.y,U[oe+ue+6]=s.z,U[oe+ue+7]=0),y===!0&&(s.fromBufferAttribute(he,ae),U[oe+ue+8]=s.x,U[oe+ue+9]=s.y,U[oe+ue+10]=s.z,U[oe+ue+11]=he.itemSize===4?s.w:1)}}g={count:p,texture:z,size:new Je(I,N)},n.set(c,g),c.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const E=c.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:a}}function AR(i,e,t,n){let s=new WeakMap;function a(d){const h=n.render.frame,m=d.geometry,p=e.get(d,m);if(s.get(p)!==h&&(e.update(p),s.set(p,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return p}function l(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}const px=new fn,yv=new ax(1,1),mx=new j0,gx=new yE,_x=new ex,Mv=[],Sv=[],Ev=new Float32Array(16),Tv=new Float32Array(9),wv=new Float32Array(4);function ta(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Mv[s];if(a===void 0&&(a=new Float32Array(s),Mv[s]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wc(i,e){let t=Sv[e];t===void 0&&(t=new Int32Array(e),Sv[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function RR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function CR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function PR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function LR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;wv.set(n),i.uniformMatrix2fv(this.addr,!1,wv),mn(t,n)}}function IR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Tv.set(n),i.uniformMatrix3fv(this.addr,!1,Tv),mn(t,n)}}function NR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Ev.set(n),i.uniformMatrix4fv(this.addr,!1,Ev),mn(t,n)}}function DR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function UR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function OR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function FR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function kR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function BR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function VR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function zR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function HR(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(yv.compareFunction=W0,a=yv):a=px,t.setTexture2D(e||a,s)}function GR(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gx,s)}function WR(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_x,s)}function XR(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||mx,s)}function jR(i){switch(i){case 5126:return RR;case 35664:return bR;case 35665:return CR;case 35666:return PR;case 35674:return LR;case 35675:return IR;case 35676:return NR;case 5124:case 35670:return DR;case 35667:case 35671:return UR;case 35668:case 35672:return OR;case 35669:case 35673:return FR;case 5125:return kR;case 36294:return BR;case 36295:return VR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return HR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return WR;case 36289:case 36303:case 36311:case 36292:return XR}}function YR(i,e){i.uniform1fv(this.addr,e)}function qR(i,e){const t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function $R(i,e){const t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function KR(i,e){const t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function ZR(i,e){const t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function QR(i,e){const t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function JR(i,e){const t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function e1(i,e){i.uniform1iv(this.addr,e)}function t1(i,e){i.uniform2iv(this.addr,e)}function n1(i,e){i.uniform3iv(this.addr,e)}function i1(i,e){i.uniform4iv(this.addr,e)}function r1(i,e){i.uniform1uiv(this.addr,e)}function s1(i,e){i.uniform2uiv(this.addr,e)}function o1(i,e){i.uniform3uiv(this.addr,e)}function a1(i,e){i.uniform4uiv(this.addr,e)}function l1(i,e,t){const n=this.cache,s=e.length,a=wc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||px,a[l])}function u1(i,e,t){const n=this.cache,s=e.length,a=wc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||gx,a[l])}function c1(i,e,t){const n=this.cache,s=e.length,a=wc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||_x,a[l])}function d1(i,e,t){const n=this.cache,s=e.length,a=wc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||mx,a[l])}function h1(i){switch(i){case 5126:return YR;case 35664:return qR;case 35665:return $R;case 35666:return KR;case 35674:return ZR;case 35675:return QR;case 35676:return JR;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return r1;case 36294:return s1;case 36295:return o1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return d1}}class f1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jR(t.type)}}class p1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h1(t.type)}}class m1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const c=s[a];c.setValue(e,t[c.id],n)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function Av(i,e){i.seq.push(e),i.map[e.id]=e}function g1(i,e,t){const n=i.name,s=n.length;for(jh.lastIndex=0;;){const a=jh.exec(n),l=jh.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&l+2===s){Av(t,h===void 0?new f1(c,i,e):new p1(c,i,e));break}else{let p=t.map[c];p===void 0&&(p=new m1(c),Av(t,p)),t=p}}}class sc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);g1(a,l,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,l=t.length;a!==l;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function Rv(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _1=37297;let v1=0;function x1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=s;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const bv=new ot;function y1(i){bt._getMatrix(bv,bt.workingColorSpace,i);const e=`mat3( ${bv.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case dc:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cv(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+x1(i.getShaderSource(e),c)}else return a}function M1(i,e){const t=y1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function S1(i,e){let t;switch(e){case PS:t="Linear";break;case LS:t="Reinhard";break;case IS:t="Cineon";break;case NS:t="ACESFilmic";break;case US:t="AgX";break;case OS:t="Neutral";break;case DS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $u=new D;function E1(){bt.getLuminanceCoefficients($u);const i=$u.x.toFixed(4),e=$u.y.toFixed(4),t=$u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function w1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function el(i){return i!==""}function Pv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(i){return i.replace(R1,C1)}const b1=new Map;function C1(i,e){let t=xt[e];if(t===void 0){const n=b1.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return np(t)}const P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iv(i){return i.replace(P1,L1)}function L1(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Nv(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function I1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===uS?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function N1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zo:case Ho:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ho:e="ENVMAP_MODE_REFRACTION";break}return e}function U1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case N0:e="ENVMAP_BLENDING_MULTIPLY";break;case bS:e="ENVMAP_BLENDING_MIX";break;case CS:e="ENVMAP_BLENDING_ADD";break}return e}function O1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function F1(i,e,t,n){const s=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const d=I1(t),h=N1(t),m=D1(t),p=U1(t),g=O1(t),v=T1(t),S=w1(a),E=s.createProgram();let y,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(el).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(el).join(`
`),x.length>0&&(x+=`
`)):(y=[Nv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),x=[Nv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qr?"#define TONE_MAPPING":"",t.toneMapping!==Qr?xt.tonemapping_pars_fragment:"",t.toneMapping!==Qr?S1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,M1("linearToOutputTexel",t.outputColorSpace),E1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(el).join(`
`)),l=np(l),l=Pv(l,t),l=Lv(l,t),c=np(c),c=Pv(c,t),c=Lv(c,t),l=Iv(l),c=Iv(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===A_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===A_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=b+y+l,w=b+x+c,I=Rv(s,s.VERTEX_SHADER,L),N=Rv(s,s.FRAGMENT_SHADER,w);s.attachShader(E,I),s.attachShader(E,N),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function U(B){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(E)||"",K=s.getShaderInfoLog(I)||"",he=s.getShaderInfoLog(N)||"",oe=q.trim(),ae=K.trim(),ue=he.trim();let G=!0,le=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,I,N);else{const Y=Cv(s,I,"vertex"),F=Cv(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+oe+`
`+Y+`
`+F)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ae===""||ue==="")&&(le=!1);le&&(B.diagnostics={runnable:G,programLog:oe,vertexShader:{log:ae,prefix:y},fragmentShader:{log:ue,prefix:x}})}s.deleteShader(I),s.deleteShader(N),z=new sc(s,E),C=A1(s,E)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(E,_1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=N,this}let k1=0;class B1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new V1(e),t.set(e,n)),n}}class V1{constructor(e){this.id=k1++,this.code=e,this.usedTimes=0}}function z1(i,e,t,n,s,a,l){const c=new Y0,d=new B1,h=new Set,m=[],p=s.logarithmicDepthBuffer,g=s.vertexTextures;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return h.add(C),C===0?"uv":`uv${C}`}function y(C,R,B,q,K){const he=q.fog,oe=K.geometry,ae=C.isMeshStandardMaterial?q.environment:null,ue=(C.isMeshStandardMaterial?t:e).get(C.envMap||ae),G=ue&&ue.mapping===yc?ue.image.height:null,le=S[C.type];C.precision!==null&&(v=s.getMaxPrecision(C.precision),v!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const Y=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,F=Y!==void 0?Y.length:0;let Q=0;oe.morphAttributes.position!==void 0&&(Q=1),oe.morphAttributes.normal!==void 0&&(Q=2),oe.morphAttributes.color!==void 0&&(Q=3);let Re,be,Oe,ee;if(le){const At=ji[le];Re=At.vertexShader,be=At.fragmentShader}else Re=C.vertexShader,be=C.fragmentShader,d.update(C),Oe=d.getVertexShaderID(C),ee=d.getFragmentShaderID(C);const se=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ne=K.isInstancedMesh===!0,De=K.isBatchedMesh===!0,mt=!!C.map,tn=!!C.matcap,V=!!ue,Nt=!!C.aoMap,ct=!!C.lightMap,et=!!C.bumpMap,Be=!!C.normalMap,Ut=!!C.displacementMap,Ve=!!C.emissiveMap,ut=!!C.metalnessMap,Ht=!!C.roughnessMap,Yt=C.anisotropy>0,O=C.clearcoat>0,A=C.dispersion>0,J=C.iridescence>0,fe=C.sheen>0,me=C.transmission>0,de=Yt&&!!C.anisotropyMap,$e=O&&!!C.clearcoatMap,ye=O&&!!C.clearcoatNormalMap,ze=O&&!!C.clearcoatRoughnessMap,Ye=J&&!!C.iridescenceMap,Ee=J&&!!C.iridescenceThicknessMap,Le=fe&&!!C.sheenColorMap,tt=fe&&!!C.sheenRoughnessMap,je=!!C.specularMap,Pe=!!C.specularColorMap,dt=!!C.specularIntensityMap,W=me&&!!C.transmissionMap,Se=me&&!!C.thicknessMap,we=!!C.gradientMap,Ue=!!C.alphaMap,ve=C.alphaTest>0,pe=!!C.alphaHash,He=!!C.extensions;let ht=Qr;C.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ht=i.toneMapping);const Ct={shaderID:le,shaderType:C.type,shaderName:C.name,vertexShader:Re,fragmentShader:be,defines:C.defines,customVertexShaderID:Oe,customFragmentShaderID:ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:De,batchingColor:De&&K._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&K.instanceColor!==null,instancingMorph:Ne&&K.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Hn,alphaToCoverage:!!C.alphaToCoverage,map:mt,matcap:tn,envMap:V,envMapMode:V&&ue.mapping,envMapCubeUVHeight:G,aoMap:Nt,lightMap:ct,bumpMap:et,normalMap:Be,displacementMap:g&&Ut,emissiveMap:Ve,normalMapObjectSpace:Be&&C.normalMapType===HS,normalMapTangentSpace:Be&&C.normalMapType===yp,metalnessMap:ut,roughnessMap:Ht,anisotropy:Yt,anisotropyMap:de,clearcoat:O,clearcoatMap:$e,clearcoatNormalMap:ye,clearcoatRoughnessMap:ze,dispersion:A,iridescence:J,iridescenceMap:Ye,iridescenceThicknessMap:Ee,sheen:fe,sheenColorMap:Le,sheenRoughnessMap:tt,specularMap:je,specularColorMap:Pe,specularIntensityMap:dt,transmission:me,transmissionMap:W,thicknessMap:Se,gradientMap:we,opaque:C.transparent===!1&&C.blending===Fo&&C.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ve,alphaHash:pe,combine:C.combine,mapUv:mt&&E(C.map.channel),aoMapUv:Nt&&E(C.aoMap.channel),lightMapUv:ct&&E(C.lightMap.channel),bumpMapUv:et&&E(C.bumpMap.channel),normalMapUv:Be&&E(C.normalMap.channel),displacementMapUv:Ut&&E(C.displacementMap.channel),emissiveMapUv:Ve&&E(C.emissiveMap.channel),metalnessMapUv:ut&&E(C.metalnessMap.channel),roughnessMapUv:Ht&&E(C.roughnessMap.channel),anisotropyMapUv:de&&E(C.anisotropyMap.channel),clearcoatMapUv:$e&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:ye&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:tt&&E(C.sheenRoughnessMap.channel),specularMapUv:je&&E(C.specularMap.channel),specularColorMapUv:Pe&&E(C.specularColorMap.channel),specularIntensityMapUv:dt&&E(C.specularIntensityMap.channel),transmissionMapUv:W&&E(C.transmissionMap.channel),thicknessMapUv:Se&&E(C.thicknessMap.channel),alphaMapUv:Ue&&E(C.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(Be||Yt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!oe.attributes.uv&&(mt||Ue),fog:!!he,useFog:C.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xe,skinning:K.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:mt&&C.map.isVideoTexture===!0&&bt.getTransfer(C.map.colorSpace)===Wt,decodeVideoTextureEmissive:Ve&&C.emissiveMap.isVideoTexture===!0&&bt.getTransfer(C.emissiveMap.colorSpace)===Wt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===fi,flipSided:C.side===In,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:He&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&C.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ct.vertexUv1s=h.has(1),Ct.vertexUv2s=h.has(2),Ct.vertexUv3s=h.has(3),h.clear(),Ct}function x(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)R.push(B),R.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(b(R,C),L(R,C),R.push(i.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function b(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function L(C,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),R.gradientMap&&c.enable(22),C.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),C.push(c.mask)}function w(C){const R=S[C.type];let B;if(R){const q=ji[R];B=Q0.clone(q.uniforms)}else B=C.uniforms;return B}function I(C,R){let B;for(let q=0,K=m.length;q<K;q++){const he=m[q];if(he.cacheKey===R){B=he,++B.usedTimes;break}}return B===void 0&&(B=new F1(i,R,C,a),m.push(B)),B}function N(C){if(--C.usedTimes===0){const R=m.indexOf(C);m[R]=m[m.length-1],m.pop(),C.destroy()}}function U(C){d.remove(C)}function z(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:w,acquireProgram:I,releaseProgram:N,releaseShaderCache:U,programs:m,dispose:z}}function H1(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function n(l){i.delete(l)}function s(l,c,d){i.get(l)[c]=d}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function G1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uv(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function l(p,g,v,S,E,y){let x=i[e];return x===void 0?(x={id:p.id,object:p,geometry:g,material:v,groupOrder:S,renderOrder:p.renderOrder,z:E,group:y},i[e]=x):(x.id=p.id,x.object=p,x.geometry=g,x.material=v,x.groupOrder=S,x.renderOrder=p.renderOrder,x.z=E,x.group=y),e++,x}function c(p,g,v,S,E,y){const x=l(p,g,v,S,E,y);v.transmission>0?n.push(x):v.transparent===!0?s.push(x):t.push(x)}function d(p,g,v,S,E,y){const x=l(p,g,v,S,E,y);v.transmission>0?n.unshift(x):v.transparent===!0?s.unshift(x):t.unshift(x)}function h(p,g){t.length>1&&t.sort(p||G1),n.length>1&&n.sort(g||Dv),s.length>1&&s.sort(g||Dv)}function m(){for(let p=e,g=i.length;p<g;p++){const v=i[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:d,finish:m,sort:h}}function W1(){let i=new WeakMap;function e(n,s){const a=i.get(n);let l;return a===void 0?(l=new Uv,i.set(n,[l])):s>=a.length?(l=new Uv,a.push(l)):l=a[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function X1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ze};break;case"SpotLight":t={position:new D,direction:new D,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function j1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Y1=0;function q1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $1(i){const e=new X1,t=j1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const s=new D,a=new lt,l=new lt;function c(h){let m=0,p=0,g=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let v=0,S=0,E=0,y=0,x=0,b=0,L=0,w=0,I=0,N=0,U=0;h.sort(q1);for(let C=0,R=h.length;C<R;C++){const B=h[C],q=B.color,K=B.intensity,he=B.distance,oe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=q.r*K,p+=q.g*K,g+=q.b*K;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(B.sh.coefficients[ae],K);U++}else if(B.isDirectionalLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ue=B.shadow,G=t.get(B);G.shadowIntensity=ue.intensity,G.shadowBias=ue.bias,G.shadowNormalBias=ue.normalBias,G.shadowRadius=ue.radius,G.shadowMapSize=ue.mapSize,n.directionalShadow[v]=G,n.directionalShadowMap[v]=oe,n.directionalShadowMatrix[v]=B.shadow.matrix,b++}n.directional[v]=ae,v++}else if(B.isSpotLight){const ae=e.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy(q).multiplyScalar(K),ae.distance=he,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,n.spot[E]=ae;const ue=B.shadow;if(B.map&&(n.spotLightMap[I]=B.map,I++,ue.updateMatrices(B),B.castShadow&&N++),n.spotLightMatrix[E]=ue.matrix,B.castShadow){const G=t.get(B);G.shadowIntensity=ue.intensity,G.shadowBias=ue.bias,G.shadowNormalBias=ue.normalBias,G.shadowRadius=ue.radius,G.shadowMapSize=ue.mapSize,n.spotShadow[E]=G,n.spotShadowMap[E]=oe,w++}E++}else if(B.isRectAreaLight){const ae=e.get(B);ae.color.copy(q).multiplyScalar(K),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),n.rectArea[y]=ae,y++}else if(B.isPointLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){const ue=B.shadow,G=t.get(B);G.shadowIntensity=ue.intensity,G.shadowBias=ue.bias,G.shadowNormalBias=ue.normalBias,G.shadowRadius=ue.radius,G.shadowMapSize=ue.mapSize,G.shadowCameraNear=ue.camera.near,G.shadowCameraFar=ue.camera.far,n.pointShadow[S]=G,n.pointShadowMap[S]=oe,n.pointShadowMatrix[S]=B.shadow.matrix,L++}n.point[S]=ae,S++}else if(B.isHemisphereLight){const ae=e.get(B);ae.skyColor.copy(B.color).multiplyScalar(K),ae.groundColor.copy(B.groundColor).multiplyScalar(K),n.hemi[x]=ae,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=p,n.ambient[2]=g;const z=n.hash;(z.directionalLength!==v||z.pointLength!==S||z.spotLength!==E||z.rectAreaLength!==y||z.hemiLength!==x||z.numDirectionalShadows!==b||z.numPointShadows!==L||z.numSpotShadows!==w||z.numSpotMaps!==I||z.numLightProbes!==U)&&(n.directional.length=v,n.spot.length=E,n.rectArea.length=y,n.point.length=S,n.hemi.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=w+I-N,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=U,z.directionalLength=v,z.pointLength=S,z.spotLength=E,z.rectAreaLength=y,z.hemiLength=x,z.numDirectionalShadows=b,z.numPointShadows=L,z.numSpotShadows=w,z.numSpotMaps=I,z.numLightProbes=U,n.version=Y1++)}function d(h,m){let p=0,g=0,v=0,S=0,E=0;const y=m.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){const L=h[x];if(L.isDirectionalLight){const w=n.directional[p];w.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),p++}else if(L.isSpotLight){const w=n.spot[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),v++}else if(L.isRectAreaLight){const w=n.rectArea[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),l.identity(),a.copy(L.matrixWorld),a.premultiply(y),l.extractRotation(a),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),S++}else if(L.isPointLight){const w=n.point[g];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),g++}else if(L.isHemisphereLight){const w=n.hemi[E];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(y),E++}}}return{setup:c,setupView:d,state:n}}function Ov(i){const e=new $1(i),t=[],n=[];function s(m){h.camera=m,t.length=0,n.length=0}function a(m){t.push(m)}function l(m){n.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:l}}function K1(i){let e=new WeakMap;function t(s,a=0){const l=e.get(s);let c;return l===void 0?(c=new Ov(i),e.set(s,[c])):a>=l.length?(c=new Ov(i),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const Z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function J1(i,e,t){let n=new Ep;const s=new Je,a=new Je,l=new Dt,c=new $E({depthPacking:zS}),d=new KE,h={},m=t.maxTextureSize,p={[xr]:In,[In]:xr,[fi]:fi},g=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Z1,fragmentShader:Q1}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const S=new zt;S.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new rn(S,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I0;let x=this.type;this.render=function(N,U,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const C=i.getRenderTarget(),R=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Zr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=x!==mr&&this.type===mr,he=x===mr&&this.type!==mr;for(let oe=0,ae=N.length;oe<ae;oe++){const ue=N[oe],G=ue.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const le=G.getFrameExtents();if(s.multiply(le),a.copy(G.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/le.x),s.x=a.x*le.x,G.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/le.y),s.y=a.y*le.y,G.mapSize.y=a.y)),G.map===null||K===!0||he===!0){const F=this.type!==mr?{minFilter:zn,magFilter:zn}:{};G.map!==null&&G.map.dispose(),G.map=new Os(s.x,s.y,F),G.map.texture.name=ue.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const Y=G.getViewportCount();for(let F=0;F<Y;F++){const Q=G.getViewport(F);l.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),q.viewport(l),G.updateMatrices(ue,F),n=G.getFrustum(),w(U,z,G.camera,ue,this.type)}G.isPointLightShadow!==!0&&this.type===mr&&b(G,z),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,i.setRenderTarget(C,R,B)};function b(N,U){const z=e.update(E);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,v.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Os(s.x,s.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(U,null,z,g,E,null),v.uniforms.shadow_pass.value=N.mapPass.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(U,null,z,v,E,null)}function L(N,U,z,C){let R=null;const B=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)R=B;else if(R=z.isPointLight===!0?d:c,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const q=R.uuid,K=U.uuid;let he=h[q];he===void 0&&(he={},h[q]=he);let oe=he[K];oe===void 0&&(oe=R.clone(),he[K]=oe,U.addEventListener("dispose",I)),R=oe}if(R.visible=U.visible,R.wireframe=U.wireframe,C===mr?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:p[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const q=i.properties.get(R);q.light=z}return R}function w(N,U,z,C,R){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===mr)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const K=e.update(N),he=N.material;if(Array.isArray(he)){const oe=K.groups;for(let ae=0,ue=oe.length;ae<ue;ae++){const G=oe[ae],le=he[G.materialIndex];if(le&&le.visible){const Y=L(N,le,C,R);N.onBeforeShadow(i,N,U,z,K,Y,G),i.renderBufferDirect(z,null,K,Y,N,G),N.onAfterShadow(i,N,U,z,K,Y,G)}}}else if(he.visible){const oe=L(N,he,C,R);N.onBeforeShadow(i,N,U,z,K,oe,null),i.renderBufferDirect(z,null,K,oe,N,null),N.onAfterShadow(i,N,U,z,K,oe,null)}}const q=N.children;for(let K=0,he=q.length;K<he;K++)w(q[K],U,z,C,R)}function I(N){N.target.removeEventListener("dispose",I);for(const z in h){const C=h[z],R=N.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const eb={[ff]:pf,[mf]:vf,[gf]:xf,[Vo]:_f,[pf]:ff,[vf]:mf,[xf]:gf,[_f]:Vo};function tb(i,e){function t(){let W=!1;const Se=new Dt;let we=null;const Ue=new Dt(0,0,0,0);return{setMask:function(ve){we!==ve&&!W&&(i.colorMask(ve,ve,ve,ve),we=ve)},setLocked:function(ve){W=ve},setClear:function(ve,pe,He,ht,Ct){Ct===!0&&(ve*=ht,pe*=ht,He*=ht),Se.set(ve,pe,He,ht),Ue.equals(Se)===!1&&(i.clearColor(ve,pe,He,ht),Ue.copy(Se))},reset:function(){W=!1,we=null,Ue.set(-1,0,0,0)}}}function n(){let W=!1,Se=!1,we=null,Ue=null,ve=null;return{setReversed:function(pe){if(Se!==pe){const He=e.get("EXT_clip_control");pe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Se=pe;const ht=ve;ve=null,this.setClear(ht)}},getReversed:function(){return Se},setTest:function(pe){pe?se(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(pe){we!==pe&&!W&&(i.depthMask(pe),we=pe)},setFunc:function(pe){if(Se&&(pe=eb[pe]),Ue!==pe){switch(pe){case ff:i.depthFunc(i.NEVER);break;case pf:i.depthFunc(i.ALWAYS);break;case mf:i.depthFunc(i.LESS);break;case Vo:i.depthFunc(i.LEQUAL);break;case gf:i.depthFunc(i.EQUAL);break;case _f:i.depthFunc(i.GEQUAL);break;case vf:i.depthFunc(i.GREATER);break;case xf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=pe}},setLocked:function(pe){W=pe},setClear:function(pe){ve!==pe&&(Se&&(pe=1-pe),i.clearDepth(pe),ve=pe)},reset:function(){W=!1,we=null,Ue=null,ve=null,Se=!1}}}function s(){let W=!1,Se=null,we=null,Ue=null,ve=null,pe=null,He=null,ht=null,Ct=null;return{setTest:function(At){W||(At?se(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(At){Se!==At&&!W&&(i.stencilMask(At),Se=At)},setFunc:function(At,Gn,gn){(we!==At||Ue!==Gn||ve!==gn)&&(i.stencilFunc(At,Gn,gn),we=At,Ue=Gn,ve=gn)},setOp:function(At,Gn,gn){(pe!==At||He!==Gn||ht!==gn)&&(i.stencilOp(At,Gn,gn),pe=At,He=Gn,ht=gn)},setLocked:function(At){W=At},setClear:function(At){Ct!==At&&(i.clearStencil(At),Ct=At)},reset:function(){W=!1,Se=null,we=null,Ue=null,ve=null,pe=null,He=null,ht=null,Ct=null}}}const a=new t,l=new n,c=new s,d=new WeakMap,h=new WeakMap;let m={},p={},g=new WeakMap,v=[],S=null,E=!1,y=null,x=null,b=null,L=null,w=null,I=null,N=null,U=new Ze(0,0,0),z=0,C=!1,R=null,B=null,q=null,K=null,he=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ue=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(G)[1]),ae=ue>=1):G.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ae=ue>=2);let le=null,Y={};const F=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),Re=new Dt().fromArray(F),be=new Dt().fromArray(Q);function Oe(W,Se,we,Ue){const ve=new Uint8Array(4),pe=i.createTexture();i.bindTexture(W,pe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<we;He++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(Se+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return pe}const ee={};ee[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),se(i.DEPTH_TEST),l.setFunc(Vo),et(!1),Be(v_),se(i.CULL_FACE),Nt(Zr);function se(W){m[W]!==!0&&(i.enable(W),m[W]=!0)}function xe(W){m[W]!==!1&&(i.disable(W),m[W]=!1)}function Ne(W,Se){return p[W]!==Se?(i.bindFramebuffer(W,Se),p[W]=Se,W===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Se),W===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function De(W,Se){let we=v,Ue=!1;if(W){we=g.get(Se),we===void 0&&(we=[],g.set(Se,we));const ve=W.textures;if(we.length!==ve.length||we[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,He=ve.length;pe<He;pe++)we[pe]=i.COLOR_ATTACHMENT0+pe;we.length=ve.length,Ue=!0}}else we[0]!==i.BACK&&(we[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(we)}function mt(W){return S!==W?(i.useProgram(W),S=W,!0):!1}const tn={[Ps]:i.FUNC_ADD,[dS]:i.FUNC_SUBTRACT,[hS]:i.FUNC_REVERSE_SUBTRACT};tn[fS]=i.MIN,tn[pS]=i.MAX;const V={[mS]:i.ZERO,[gS]:i.ONE,[_S]:i.SRC_COLOR,[df]:i.SRC_ALPHA,[ES]:i.SRC_ALPHA_SATURATE,[MS]:i.DST_COLOR,[xS]:i.DST_ALPHA,[vS]:i.ONE_MINUS_SRC_COLOR,[hf]:i.ONE_MINUS_SRC_ALPHA,[SS]:i.ONE_MINUS_DST_COLOR,[yS]:i.ONE_MINUS_DST_ALPHA,[TS]:i.CONSTANT_COLOR,[wS]:i.ONE_MINUS_CONSTANT_COLOR,[AS]:i.CONSTANT_ALPHA,[RS]:i.ONE_MINUS_CONSTANT_ALPHA};function Nt(W,Se,we,Ue,ve,pe,He,ht,Ct,At){if(W===Zr){E===!0&&(xe(i.BLEND),E=!1);return}if(E===!1&&(se(i.BLEND),E=!0),W!==cS){if(W!==y||At!==C){if((x!==Ps||w!==Ps)&&(i.blendEquation(i.FUNC_ADD),x=Ps,w=Ps),At)switch(W){case Fo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFunc(i.ONE,i.ONE);break;case x_:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case y_:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case x_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case y_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,L=null,I=null,N=null,U.set(0,0,0),z=0,y=W,C=At}return}ve=ve||Se,pe=pe||we,He=He||Ue,(Se!==x||ve!==w)&&(i.blendEquationSeparate(tn[Se],tn[ve]),x=Se,w=ve),(we!==b||Ue!==L||pe!==I||He!==N)&&(i.blendFuncSeparate(V[we],V[Ue],V[pe],V[He]),b=we,L=Ue,I=pe,N=He),(ht.equals(U)===!1||Ct!==z)&&(i.blendColor(ht.r,ht.g,ht.b,Ct),U.copy(ht),z=Ct),y=W,C=!1}function ct(W,Se){W.side===fi?xe(i.CULL_FACE):se(i.CULL_FACE);let we=W.side===In;Se&&(we=!we),et(we),W.blending===Fo&&W.transparent===!1?Nt(Zr):Nt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),a.setMask(W.colorWrite);const Ue=W.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ve(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(W){R!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),R=W)}function Be(W){W!==aS?(se(i.CULL_FACE),W!==B&&(W===v_?i.cullFace(i.BACK):W===lS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),B=W}function Ut(W){W!==q&&(ae&&i.lineWidth(W),q=W)}function Ve(W,Se,we){W?(se(i.POLYGON_OFFSET_FILL),(K!==Se||he!==we)&&(i.polygonOffset(Se,we),K=Se,he=we)):xe(i.POLYGON_OFFSET_FILL)}function ut(W){W?se(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Ht(W){W===void 0&&(W=i.TEXTURE0+oe-1),le!==W&&(i.activeTexture(W),le=W)}function Yt(W,Se,we){we===void 0&&(le===null?we=i.TEXTURE0+oe-1:we=le);let Ue=Y[we];Ue===void 0&&(Ue={type:void 0,texture:void 0},Y[we]=Ue),(Ue.type!==W||Ue.texture!==Se)&&(le!==we&&(i.activeTexture(we),le=we),i.bindTexture(W,Se||ee[W]),Ue.type=W,Ue.texture=Se)}function O(){const W=Y[le];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{i.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{i.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{i.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{i.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{i.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{i.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ye(){try{i.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{i.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(W){Re.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Re.copy(W))}function tt(W){be.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),be.copy(W))}function je(W,Se){let we=h.get(Se);we===void 0&&(we=new WeakMap,h.set(Se,we));let Ue=we.get(W);Ue===void 0&&(Ue=i.getUniformBlockIndex(Se,W.name),we.set(W,Ue))}function Pe(W,Se){const Ue=h.get(Se).get(W);d.get(Se)!==Ue&&(i.uniformBlockBinding(Se,Ue,W.__bindingPointIndex),d.set(Se,Ue))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},le=null,Y={},p={},g=new WeakMap,v=[],S=null,E=!1,y=null,x=null,b=null,L=null,w=null,I=null,N=null,U=new Ze(0,0,0),z=0,C=!1,R=null,B=null,q=null,K=null,he=null,Re.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:se,disable:xe,bindFramebuffer:Ne,drawBuffers:De,useProgram:mt,setBlending:Nt,setMaterial:ct,setFlipSided:et,setCullFace:Be,setLineWidth:Ut,setPolygonOffset:Ve,setScissorTest:ut,activeTexture:Ht,bindTexture:Yt,unbindTexture:O,compressedTexImage2D:A,compressedTexImage3D:J,texImage2D:Ye,texImage3D:Ee,updateUBOMapping:je,uniformBlockBinding:Pe,texStorage2D:ye,texStorage3D:ze,texSubImage2D:fe,texSubImage3D:me,compressedTexSubImage2D:de,compressedTexSubImage3D:$e,scissor:Le,viewport:tt,reset:dt}}function nb(i,e,t,n,s,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Je,m=new WeakMap;let p;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(O,A){return v?new OffscreenCanvas(O,A):dl("canvas")}function E(O,A,J){let fe=1;const me=Yt(O);if((me.width>J||me.height>J)&&(fe=J/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const de=Math.floor(fe*me.width),$e=Math.floor(fe*me.height);p===void 0&&(p=S(de,$e));const ye=A?S(de,$e):p;return ye.width=de,ye.height=$e,ye.getContext("2d").drawImage(O,0,0,de,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+de+"x"+$e+")."),ye}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),O;return O}function y(O){return O.generateMipmaps}function x(O){i.generateMipmap(O)}function b(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(O,A,J,fe,me=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let de=A;if(A===i.RED&&(J===i.FLOAT&&(de=i.R32F),J===i.HALF_FLOAT&&(de=i.R16F),J===i.UNSIGNED_BYTE&&(de=i.R8)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.R8UI),J===i.UNSIGNED_SHORT&&(de=i.R16UI),J===i.UNSIGNED_INT&&(de=i.R32UI),J===i.BYTE&&(de=i.R8I),J===i.SHORT&&(de=i.R16I),J===i.INT&&(de=i.R32I)),A===i.RG&&(J===i.FLOAT&&(de=i.RG32F),J===i.HALF_FLOAT&&(de=i.RG16F),J===i.UNSIGNED_BYTE&&(de=i.RG8)),A===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.RG8UI),J===i.UNSIGNED_SHORT&&(de=i.RG16UI),J===i.UNSIGNED_INT&&(de=i.RG32UI),J===i.BYTE&&(de=i.RG8I),J===i.SHORT&&(de=i.RG16I),J===i.INT&&(de=i.RG32I)),A===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.RGB8UI),J===i.UNSIGNED_SHORT&&(de=i.RGB16UI),J===i.UNSIGNED_INT&&(de=i.RGB32UI),J===i.BYTE&&(de=i.RGB8I),J===i.SHORT&&(de=i.RGB16I),J===i.INT&&(de=i.RGB32I)),A===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(de=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(de=i.RGBA16UI),J===i.UNSIGNED_INT&&(de=i.RGBA32UI),J===i.BYTE&&(de=i.RGBA8I),J===i.SHORT&&(de=i.RGBA16I),J===i.INT&&(de=i.RGBA32I)),A===i.RGB&&(J===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(de=i.R11F_G11F_B10F)),A===i.RGBA){const $e=me?dc:bt.getTransfer(fe);J===i.FLOAT&&(de=i.RGBA32F),J===i.HALF_FLOAT&&(de=i.RGBA16F),J===i.UNSIGNED_BYTE&&(de=$e===Wt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function w(O,A){let J;return O?A===null||A===Us||A===ol?J=i.DEPTH24_STENCIL8:A===Pi?J=i.DEPTH32F_STENCIL8:A===sl&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Us||A===ol?J=i.DEPTH_COMPONENT24:A===Pi?J=i.DEPTH_COMPONENT32F:A===sl&&(J=i.DEPTH_COMPONENT16),J}function I(O,A){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==zn&&O.minFilter!==ni?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function N(O){const A=O.target;A.removeEventListener("dispose",N),z(A),A.isVideoTexture&&m.delete(A)}function U(O){const A=O.target;A.removeEventListener("dispose",U),R(A)}function z(O){const A=n.get(O);if(A.__webglInit===void 0)return;const J=O.source,fe=g.get(J);if(fe){const me=fe[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&C(O),Object.keys(fe).length===0&&g.delete(J)}n.remove(O)}function C(O){const A=n.get(O);i.deleteTexture(A.__webglTexture);const J=O.source,fe=g.get(J);delete fe[A.__cacheKey],l.memory.textures--}function R(O){const A=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(A.__webglFramebuffer[fe]))for(let me=0;me<A.__webglFramebuffer[fe].length;me++)i.deleteFramebuffer(A.__webglFramebuffer[fe][me]);else i.deleteFramebuffer(A.__webglFramebuffer[fe]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[fe])}else{if(Array.isArray(A.__webglFramebuffer))for(let fe=0;fe<A.__webglFramebuffer.length;fe++)i.deleteFramebuffer(A.__webglFramebuffer[fe]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let fe=0;fe<A.__webglColorRenderbuffer.length;fe++)A.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[fe]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=O.textures;for(let fe=0,me=J.length;fe<me;fe++){const de=n.get(J[fe]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),l.memory.textures--),n.remove(J[fe])}n.remove(O)}let B=0;function q(){B=0}function K(){const O=B;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),B+=1,O}function he(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function oe(O,A){const J=n.get(O);if(O.isVideoTexture&&ut(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&J.__version!==O.version){const fe=O.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(J,O,A);return}}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function ae(O,A){const J=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){ee(J,O,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function ue(O,A){const J=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){ee(J,O,A);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function G(O,A){const J=n.get(O);if(O.version>0&&J.__version!==O.version){se(J,O,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const le={[Go]:i.REPEAT,[Kr]:i.CLAMP_TO_EDGE,[cc]:i.MIRRORED_REPEAT},Y={[zn]:i.NEAREST,[U0]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[ni]:i.LINEAR,[ec]:i.LINEAR_MIPMAP_NEAREST,[gr]:i.LINEAR_MIPMAP_LINEAR},F={[GS]:i.NEVER,[$S]:i.ALWAYS,[WS]:i.LESS,[W0]:i.LEQUAL,[XS]:i.EQUAL,[qS]:i.GEQUAL,[jS]:i.GREATER,[YS]:i.NOTEQUAL};function Q(O,A){if(A.type===Pi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ni||A.magFilter===ec||A.magFilter===Ja||A.magFilter===gr||A.minFilter===ni||A.minFilter===ec||A.minFilter===Ja||A.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,le[A.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,le[A.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,le[A.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,Y[A.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,Y[A.minFilter]),A.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===zn||A.minFilter!==Ja&&A.minFilter!==gr||A.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Re(O,A){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",N));const fe=A.source;let me=g.get(fe);me===void 0&&(me={},g.set(fe,me));const de=he(A);if(de!==O.__cacheKey){me[de]===void 0&&(me[de]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,J=!0),me[de].usedTimes++;const $e=me[O.__cacheKey];$e!==void 0&&(me[O.__cacheKey].usedTimes--,$e.usedTimes===0&&C(A)),O.__cacheKey=de,O.__webglTexture=me[de].texture}return J}function be(O,A,J){return Math.floor(Math.floor(O/J)/A)}function Oe(O,A,J,fe){const de=O.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,J,fe,A.data);else{de.sort((Ee,Le)=>Ee.start-Le.start);let $e=0;for(let Ee=1;Ee<de.length;Ee++){const Le=de[$e],tt=de[Ee],je=Le.start+Le.count,Pe=be(tt.start,A.width,4),dt=be(Le.start,A.width,4);tt.start<=je+1&&Pe===dt&&be(tt.start+tt.count-1,A.width,4)===Pe?Le.count=Math.max(Le.count,tt.start+tt.count-Le.start):(++$e,de[$e]=tt)}de.length=$e+1;const ye=i.getParameter(i.UNPACK_ROW_LENGTH),ze=i.getParameter(i.UNPACK_SKIP_PIXELS),Ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Ee=0,Le=de.length;Ee<Le;Ee++){const tt=de[Ee],je=Math.floor(tt.start/4),Pe=Math.ceil(tt.count/4),dt=je%A.width,W=Math.floor(je/A.width),Se=Pe,we=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,dt,W,Se,we,J,fe,A.data)}O.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ye),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ye)}}function ee(O,A,J){let fe=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(fe=i.TEXTURE_3D);const me=Re(O,A),de=A.source;t.bindTexture(fe,O.__webglTexture,i.TEXTURE0+J);const $e=n.get(de);if(de.version!==$e.__version||me===!0){t.activeTexture(i.TEXTURE0+J);const ye=bt.getPrimaries(bt.workingColorSpace),ze=A.colorSpace===$r?null:bt.getPrimaries(A.colorSpace),Ye=A.colorSpace===$r||ye===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Ee=E(A.image,!1,s.maxTextureSize);Ee=Ht(A,Ee);const Le=a.convert(A.format,A.colorSpace),tt=a.convert(A.type);let je=L(A.internalFormat,Le,tt,A.colorSpace,A.isVideoTexture);Q(fe,A);let Pe;const dt=A.mipmaps,W=A.isVideoTexture!==!0,Se=$e.__version===void 0||me===!0,we=de.dataReady,Ue=I(A,Ee);if(A.isDepthTexture)je=w(A.format===ll,A.type),Se&&(W?t.texStorage2D(i.TEXTURE_2D,1,je,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,je,Ee.width,Ee.height,0,Le,tt,null));else if(A.isDataTexture)if(dt.length>0){W&&Se&&t.texStorage2D(i.TEXTURE_2D,Ue,je,dt[0].width,dt[0].height);for(let ve=0,pe=dt.length;ve<pe;ve++)Pe=dt[ve],W?we&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Le,tt,Pe.data):t.texImage2D(i.TEXTURE_2D,ve,je,Pe.width,Pe.height,0,Le,tt,Pe.data);A.generateMipmaps=!1}else W?(Se&&t.texStorage2D(i.TEXTURE_2D,Ue,je,Ee.width,Ee.height),we&&Oe(A,Ee,Le,tt)):t.texImage2D(i.TEXTURE_2D,0,je,Ee.width,Ee.height,0,Le,tt,Ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,je,dt[0].width,dt[0].height,Ee.depth);for(let ve=0,pe=dt.length;ve<pe;ve++)if(Pe=dt[ve],A.format!==mi)if(Le!==null)if(W){if(we)if(A.layerUpdates.size>0){const He=hv(Pe.width,Pe.height,A.format,A.type);for(const ht of A.layerUpdates){const Ct=Pe.data.subarray(ht*He/Pe.data.BYTES_PER_ELEMENT,(ht+1)*He/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,ht,Pe.width,Pe.height,1,Le,Ct)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,Ee.depth,Le,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,je,Pe.width,Pe.height,Ee.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,Ee.depth,Le,tt,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,je,Pe.width,Pe.height,Ee.depth,0,Le,tt,Pe.data)}else{W&&Se&&t.texStorage2D(i.TEXTURE_2D,Ue,je,dt[0].width,dt[0].height);for(let ve=0,pe=dt.length;ve<pe;ve++)Pe=dt[ve],A.format!==mi?Le!==null?W?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Le,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,je,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?we&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Le,tt,Pe.data):t.texImage2D(i.TEXTURE_2D,ve,je,Pe.width,Pe.height,0,Le,tt,Pe.data)}else if(A.isDataArrayTexture)if(W){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,je,Ee.width,Ee.height,Ee.depth),we)if(A.layerUpdates.size>0){const ve=hv(Ee.width,Ee.height,A.format,A.type);for(const pe of A.layerUpdates){const He=Ee.data.subarray(pe*ve/Ee.data.BYTES_PER_ELEMENT,(pe+1)*ve/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Le,tt,He)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Le,tt,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,je,Ee.width,Ee.height,Ee.depth,0,Le,tt,Ee.data);else if(A.isData3DTexture)W?(Se&&t.texStorage3D(i.TEXTURE_3D,Ue,je,Ee.width,Ee.height,Ee.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Le,tt,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,je,Ee.width,Ee.height,Ee.depth,0,Le,tt,Ee.data);else if(A.isFramebufferTexture){if(Se)if(W)t.texStorage2D(i.TEXTURE_2D,Ue,je,Ee.width,Ee.height);else{let ve=Ee.width,pe=Ee.height;for(let He=0;He<Ue;He++)t.texImage2D(i.TEXTURE_2D,He,je,ve,pe,0,Le,tt,null),ve>>=1,pe>>=1}}else if(dt.length>0){if(W&&Se){const ve=Yt(dt[0]);t.texStorage2D(i.TEXTURE_2D,Ue,je,ve.width,ve.height)}for(let ve=0,pe=dt.length;ve<pe;ve++)Pe=dt[ve],W?we&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Le,tt,Pe):t.texImage2D(i.TEXTURE_2D,ve,je,Le,tt,Pe);A.generateMipmaps=!1}else if(W){if(Se){const ve=Yt(Ee);t.texStorage2D(i.TEXTURE_2D,Ue,je,ve.width,ve.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,tt,Ee)}else t.texImage2D(i.TEXTURE_2D,0,je,Le,tt,Ee);y(A)&&x(fe),$e.__version=de.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function se(O,A,J){if(A.image.length!==6)return;const fe=Re(O,A),me=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+J);const de=n.get(me);if(me.version!==de.__version||fe===!0){t.activeTexture(i.TEXTURE0+J);const $e=bt.getPrimaries(bt.workingColorSpace),ye=A.colorSpace===$r?null:bt.getPrimaries(A.colorSpace),ze=A.colorSpace===$r||$e===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,Ee=A.image[0]&&A.image[0].isDataTexture,Le=[];for(let pe=0;pe<6;pe++)!Ye&&!Ee?Le[pe]=E(A.image[pe],!0,s.maxCubemapSize):Le[pe]=Ee?A.image[pe].image:A.image[pe],Le[pe]=Ht(A,Le[pe]);const tt=Le[0],je=a.convert(A.format,A.colorSpace),Pe=a.convert(A.type),dt=L(A.internalFormat,je,Pe,A.colorSpace),W=A.isVideoTexture!==!0,Se=de.__version===void 0||fe===!0,we=me.dataReady;let Ue=I(A,tt);Q(i.TEXTURE_CUBE_MAP,A);let ve;if(Ye){W&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,dt,tt.width,tt.height);for(let pe=0;pe<6;pe++){ve=Le[pe].mipmaps;for(let He=0;He<ve.length;He++){const ht=ve[He];A.format!==mi?je!==null?W?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,0,0,ht.width,ht.height,je,ht.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,dt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,0,0,ht.width,ht.height,je,Pe,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,dt,ht.width,ht.height,0,je,Pe,ht.data)}}}else{if(ve=A.mipmaps,W&&Se){ve.length>0&&Ue++;const pe=Yt(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){W?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Le[pe].width,Le[pe].height,je,Pe,Le[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,Le[pe].width,Le[pe].height,0,je,Pe,Le[pe].data);for(let He=0;He<ve.length;He++){const Ct=ve[He].image[pe].image;W?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,0,0,Ct.width,Ct.height,je,Pe,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,dt,Ct.width,Ct.height,0,je,Pe,Ct.data)}}else{W?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,je,Pe,Le[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,je,Pe,Le[pe]);for(let He=0;He<ve.length;He++){const ht=ve[He];W?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,0,0,je,Pe,ht.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,dt,je,Pe,ht.image[pe])}}}y(A)&&x(i.TEXTURE_CUBE_MAP),de.__version=me.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function xe(O,A,J,fe,me,de){const $e=a.convert(J.format,J.colorSpace),ye=a.convert(J.type),ze=L(J.internalFormat,$e,ye,J.colorSpace),Ye=n.get(A),Ee=n.get(J);if(Ee.__renderTarget=A,!Ye.__hasExternalTextures){const Le=Math.max(1,A.width>>de),tt=Math.max(1,A.height>>de);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,de,ze,Le,tt,A.depth,0,$e,ye,null):t.texImage2D(me,de,ze,Le,tt,0,$e,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Ve(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,me,Ee.__webglTexture,0,Ut(A)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,me,Ee.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(O,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,O),A.depthBuffer){const fe=A.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,de=w(A.stencilBuffer,me),$e=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=Ut(A);Ve(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,de,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,de,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,de,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$e,i.RENDERBUFFER,O)}else{const fe=A.textures;for(let me=0;me<fe.length;me++){const de=fe[me],$e=a.convert(de.format,de.colorSpace),ye=a.convert(de.type),ze=L(de.internalFormat,$e,ye,de.colorSpace),Ye=Ut(A);J&&Ve(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,ze,A.width,A.height):Ve(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,ze,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ze,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=n.get(A.depthTexture);fe.__renderTarget=A,(!fe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),oe(A.depthTexture,0);const me=fe.__webglTexture,de=Ut(A);if(A.depthTexture.format===al)Ve(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(A.depthTexture.format===ll)Ve(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function mt(O){const A=n.get(O),J=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const fe=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),fe){const me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),A.__depthDisposeCallback=me}A.__boundDepthTexture=fe}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const fe=O.texture.mipmaps;fe&&fe.length>0?De(A.__webglFramebuffer[0],O):De(A.__webglFramebuffer,O)}else if(J){A.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[fe]),A.__webglDepthbuffer[fe]===void 0)A.__webglDepthbuffer[fe]=i.createRenderbuffer(),Ne(A.__webglDepthbuffer[fe],O,!1);else{const me=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,de)}}else{const fe=O.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Ne(A.__webglDepthbuffer,O,!1);else{const me=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tn(O,A,J){const fe=n.get(O);A!==void 0&&xe(fe.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&mt(O)}function V(O){const A=O.texture,J=n.get(O),fe=n.get(A);O.addEventListener("dispose",U);const me=O.textures,de=O.isWebGLCubeRenderTarget===!0,$e=me.length>1;if($e||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=A.version,l.memory.textures++),de){J.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[ye]=[];for(let ze=0;ze<A.mipmaps.length;ze++)J.__webglFramebuffer[ye][ze]=i.createFramebuffer()}else J.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let ye=0;ye<A.mipmaps.length;ye++)J.__webglFramebuffer[ye]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if($e)for(let ye=0,ze=me.length;ye<ze;ye++){const Ye=n.get(me[ye]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),l.memory.textures++)}if(O.samples>0&&Ve(O)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ye=0;ye<me.length;ye++){const ze=me[ye];J.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ye]);const Ye=a.convert(ze.format,ze.colorSpace),Ee=a.convert(ze.type),Le=L(ze.internalFormat,Ye,Ee,ze.colorSpace,O.isXRRenderTarget===!0),tt=Ut(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Le,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,J.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(J.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Q(i.TEXTURE_CUBE_MAP,A);for(let ye=0;ye<6;ye++)if(A.mipmaps&&A.mipmaps.length>0)for(let ze=0;ze<A.mipmaps.length;ze++)xe(J.__webglFramebuffer[ye][ze],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze);else xe(J.__webglFramebuffer[ye],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);y(A)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let ye=0,ze=me.length;ye<ze;ye++){const Ye=me[ye],Ee=n.get(Ye);let Le=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Le=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,Ee.__webglTexture),Q(Le,Ye),xe(J.__webglFramebuffer,O,Ye,i.COLOR_ATTACHMENT0+ye,Le,0),y(Ye)&&x(Le)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ye=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,fe.__webglTexture),Q(ye,A),A.mipmaps&&A.mipmaps.length>0)for(let ze=0;ze<A.mipmaps.length;ze++)xe(J.__webglFramebuffer[ze],O,A,i.COLOR_ATTACHMENT0,ye,ze);else xe(J.__webglFramebuffer,O,A,i.COLOR_ATTACHMENT0,ye,0);y(A)&&x(ye),t.unbindTexture()}O.depthBuffer&&mt(O)}function Nt(O){const A=O.textures;for(let J=0,fe=A.length;J<fe;J++){const me=A[J];if(y(me)){const de=b(O),$e=n.get(me).__webglTexture;t.bindTexture(de,$e),x(de),t.unbindTexture()}}}const ct=[],et=[];function Be(O){if(O.samples>0){if(Ve(O)===!1){const A=O.textures,J=O.width,fe=O.height;let me=i.COLOR_BUFFER_BIT;const de=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$e=n.get(O),ye=A.length>1;if(ye)for(let Ye=0;Ye<A.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const ze=O.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$e.__webglColorRenderbuffer[Ye]);const Ee=n.get(A[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,J,fe,0,0,J,fe,me,i.NEAREST),d===!0&&(ct.length=0,et.length=0,ct.push(i.COLOR_ATTACHMENT0+Ye),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ct.push(de),et.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Ye=0;Ye<A.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,$e.__webglColorRenderbuffer[Ye]);const Ee=n.get(A[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const A=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ut(O){return Math.min(s.maxSamples,O.samples)}function Ve(O){const A=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ut(O){const A=l.render.frame;m.get(O)!==A&&(m.set(O,A),O.update())}function Ht(O,A){const J=O.colorSpace,fe=O.format,me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||J!==Hn&&J!==$r&&(bt.getTransfer(J)===Wt?(fe!==mi||me!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function Yt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.setTexture2D=oe,this.setTexture2DArray=ae,this.setTexture3D=ue,this.setTextureCube=G,this.rebindTextures=tn,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ve}function ib(i,e){function t(n,s=$r){let a;const l=bt.getTransfer(s);if(n===$i)return i.UNSIGNED_BYTE;if(n===pp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===k0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===B0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===O0)return i.BYTE;if(n===F0)return i.SHORT;if(n===sl)return i.UNSIGNED_SHORT;if(n===fp)return i.INT;if(n===Us)return i.UNSIGNED_INT;if(n===Pi)return i.FLOAT;if(n===ml)return i.HALF_FLOAT;if(n===V0)return i.ALPHA;if(n===z0)return i.RGB;if(n===mi)return i.RGBA;if(n===al)return i.DEPTH_COMPONENT;if(n===ll)return i.DEPTH_STENCIL;if(n===gp)return i.RED;if(n===_p)return i.RED_INTEGER;if(n===H0)return i.RG;if(n===vp)return i.RG_INTEGER;if(n===xp)return i.RGBA_INTEGER;if(n===tc||n===nc||n===ic||n===rc)if(l===Wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sf||n===Ef||n===Tf||n===wf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Sf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ef)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Af||n===Rf||n===bf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Af||n===Rf)return l===Wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===bf)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cf||n===Pf||n===Lf||n===If||n===Nf||n===Df||n===Uf||n===Of||n===Ff||n===kf||n===Bf||n===Vf||n===zf||n===Hf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Cf)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pf)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lf)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===If)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nf)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Df)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uf)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Of)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ff)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kf)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bf)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vf)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zf)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hf)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gf||n===Wf||n===Xf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Gf)return l===Wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jf||n===Yf||n===qf||n===$f)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===jf)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Yf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$f)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ol?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ob{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new lx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ii({vertexShader:rb,fragmentShader:sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rn(new Ec(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ab extends $o{constructor(e,t){super();const n=this;let s=null,a=1,l=null,c="local-floor",d=1,h=null,m=null,p=null,g=null,v=null,S=null;const E=typeof XRWebGLBinding<"u",y=new ob,x={},b=t.getContextAttributes();let L=null,w=null;const I=[],N=[],U=new Je;let z=null;const C=new Vn;C.viewport=new Dt;const R=new Vn;R.viewport=new Dt;const B=[C,R],q=new _T;let K=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let se=I[ee];return se===void 0&&(se=new Ih,I[ee]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ee){let se=I[ee];return se===void 0&&(se=new Ih,I[ee]=se),se.getGripSpace()},this.getHand=function(ee){let se=I[ee];return se===void 0&&(se=new Ih,I[ee]=se),se.getHandSpace()};function oe(ee){const se=N.indexOf(ee.inputSource);if(se===-1)return;const xe=I[se];xe!==void 0&&(xe.update(ee.inputSource,ee.frame,h||l),xe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ae(){s.removeEventListener("select",oe),s.removeEventListener("selectstart",oe),s.removeEventListener("selectend",oe),s.removeEventListener("squeeze",oe),s.removeEventListener("squeezestart",oe),s.removeEventListener("squeezeend",oe),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",ue);for(let ee=0;ee<I.length;ee++){const se=N[ee];se!==null&&(N[ee]=null,I[ee].disconnect(se))}K=null,he=null,y.reset();for(const ee in x)delete x[ee];e.setRenderTarget(L),v=null,g=null,p=null,s=null,w=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){c=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",oe),s.addEventListener("selectstart",oe),s.addEventListener("selectend",oe),s.addEventListener("squeeze",oe),s.addEventListener("squeezestart",oe),s.addEventListener("squeezeend",oe),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",ue),b.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(U),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ne=null,De=null;b.depth&&(De=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=b.stencil?ll:al,Ne=b.stencil?ol:Us);const mt={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:a};p=this.getBinding(),g=p.createProjectionLayer(mt),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new Os(g.textureWidth,g.textureHeight,{format:mi,type:$i,depthTexture:new ax(g.textureWidth,g.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const xe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),w=new Os(v.framebufferWidth,v.framebufferHeight,{format:mi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(d),h=null,l=await s.requestReferenceSpace(c),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ue(ee){for(let se=0;se<ee.removed.length;se++){const xe=ee.removed[se],Ne=N.indexOf(xe);Ne>=0&&(N[Ne]=null,I[Ne].disconnect(xe))}for(let se=0;se<ee.added.length;se++){const xe=ee.added[se];let Ne=N.indexOf(xe);if(Ne===-1){for(let mt=0;mt<I.length;mt++)if(mt>=N.length){N.push(xe),Ne=mt;break}else if(N[mt]===null){N[mt]=xe,Ne=mt;break}if(Ne===-1)break}const De=I[Ne];De&&De.connect(xe)}}const G=new D,le=new D;function Y(ee,se,xe){G.setFromMatrixPosition(se.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);const Ne=G.distanceTo(le),De=se.projectionMatrix.elements,mt=xe.projectionMatrix.elements,tn=De[14]/(De[10]-1),V=De[14]/(De[10]+1),Nt=(De[9]+1)/De[5],ct=(De[9]-1)/De[5],et=(De[8]-1)/De[0],Be=(mt[8]+1)/mt[0],Ut=tn*et,Ve=tn*Be,ut=Ne/(-et+Be),Ht=ut*-et;if(se.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ht),ee.translateZ(ut),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),De[10]===-1)ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Yt=tn+ut,O=V+ut,A=Ut-Ht,J=Ve+(Ne-Ht),fe=Nt*V/O*Yt,me=ct*V/O*Yt;ee.projectionMatrix.makePerspective(A,J,fe,me,Yt,O),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function F(ee,se){se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let se=ee.near,xe=ee.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(xe=y.depthFar)),q.near=R.near=C.near=se,q.far=R.far=C.far=xe,(K!==q.near||he!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),K=q.near,he=q.far),q.layers.mask=ee.layers.mask|6,C.layers.mask=q.layers.mask&3,R.layers.mask=q.layers.mask&5;const Ne=ee.parent,De=q.cameras;F(q,Ne);for(let mt=0;mt<De.length;mt++)F(De[mt],Ne);De.length===2?Y(q,C,R):q.projectionMatrix.copy(C.projectionMatrix),Q(ee,q,Ne)};function Q(ee,se,xe){xe===null?ee.matrix.copy(se.matrixWorld):(ee.matrix.copy(xe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Wo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&v===null))return d},this.setFoveation=function(ee){d=ee,g!==null&&(g.fixedFoveation=ee),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(ee){return x[ee]};let Re=null;function be(ee,se){if(m=se.getViewerPose(h||l),S=se,m!==null){const xe=m.views;v!==null&&(e.setRenderTargetFramebuffer(w,v.framebuffer),e.setRenderTarget(w));let Ne=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,Ne=!0);for(let V=0;V<xe.length;V++){const Nt=xe[V];let ct=null;if(v!==null)ct=v.getViewport(Nt);else{const Be=p.getViewSubImage(g,Nt);ct=Be.viewport,V===0&&(e.setRenderTargetTextures(w,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(w))}let et=B[V];et===void 0&&(et=new Vn,et.layers.enable(V),et.viewport=new Dt,B[V]=et),et.matrix.fromArray(Nt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Nt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ct.x,ct.y,ct.width,ct.height),V===0&&(q.matrix.copy(et.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ne===!0&&q.cameras.push(et)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){p=n.getBinding();const V=p.getDepthInformation(xe[0]);V&&V.isValid&&V.texture&&y.init(V,s.renderState)}if(De&&De.includes("camera-access")&&E){e.state.unbindTexture(),p=n.getBinding();for(let V=0;V<xe.length;V++){const Nt=xe[V].camera;if(Nt){let ct=x[Nt];ct||(ct=new lx,x[Nt]=ct);const et=p.getCameraImage(Nt);ct.sourceTexture=et}}}}for(let xe=0;xe<I.length;xe++){const Ne=N[xe],De=I[xe];Ne!==null&&De!==void 0&&De.update(Ne,se,h||l)}Re&&Re(ee,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),S=null}const Oe=new fx;Oe.setAnimationLoop(be),this.setAnimationLoop=function(ee){Re=ee},this.dispose=function(){}}}const Ms=new ii,lb=new lt;function ub(i,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,Z0(i)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,b,L,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),p(y,x)):x.isMeshPhongMaterial?(a(y,x),m(y,x)):x.isMeshStandardMaterial?(a(y,x),g(y,x),x.isMeshPhysicalMaterial&&v(y,x,w)):x.isMeshMatcapMaterial?(a(y,x),S(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),E(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(l(y,x),x.isLineDashedMaterial&&c(y,x)):x.isPointsMaterial?d(y,x,b,L):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===In&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===In&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const b=e.get(x),L=b.envMap,w=b.envMapRotation;L&&(y.envMap.value=L,Ms.copy(w),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),y.envMapRotation.value.setFromMatrix4(lb.makeRotationFromEuler(Ms)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function l(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function c(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,b,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*b,y.scale.value=L*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function p(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function v(y,x,b){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===In&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const b=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cb(i,e,t,n){let s={},a={},l=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,L){const w=L.program;n.uniformBlockBinding(b,w)}function h(b,L){let w=s[b.id];w===void 0&&(S(b),w=m(b),s[b.id]=w,b.addEventListener("dispose",y));const I=L.program;n.updateUBOMapping(b,I);const N=e.render.frame;a[b.id]!==N&&(g(b),a[b.id]=N)}function m(b){const L=p();b.__bindingPointIndex=L;const w=i.createBuffer(),I=b.__size,N=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,w),w}function p(){for(let b=0;b<c;b++)if(l.indexOf(b)===-1)return l.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const L=s[b.id],w=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let N=0,U=w.length;N<U;N++){const z=Array.isArray(w[N])?w[N]:[w[N]];for(let C=0,R=z.length;C<R;C++){const B=z[C];if(v(B,N,C,I)===!0){const q=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let he=0;for(let oe=0;oe<K.length;oe++){const ae=K[oe],ue=E(ae);typeof ae=="number"||typeof ae=="boolean"?(B.__data[0]=ae,i.bufferSubData(i.UNIFORM_BUFFER,q+he,B.__data)):ae.isMatrix3?(B.__data[0]=ae.elements[0],B.__data[1]=ae.elements[1],B.__data[2]=ae.elements[2],B.__data[3]=0,B.__data[4]=ae.elements[3],B.__data[5]=ae.elements[4],B.__data[6]=ae.elements[5],B.__data[7]=0,B.__data[8]=ae.elements[6],B.__data[9]=ae.elements[7],B.__data[10]=ae.elements[8],B.__data[11]=0):(ae.toArray(B.__data,he),he+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(b,L,w,I){const N=b.value,U=L+"_"+w;if(I[U]===void 0)return typeof N=="number"||typeof N=="boolean"?I[U]=N:I[U]=N.clone(),!0;{const z=I[U];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return I[U]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function S(b){const L=b.uniforms;let w=0;const I=16;for(let U=0,z=L.length;U<z;U++){const C=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,B=C.length;R<B;R++){const q=C[R],K=Array.isArray(q.value)?q.value:[q.value];for(let he=0,oe=K.length;he<oe;he++){const ae=K[he],ue=E(ae),G=w%I,le=G%ue.boundary,Y=G+le;w+=le,Y!==0&&I-Y<ue.storage&&(w+=I-Y),q.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=ue.storage}}}const N=w%I;return N>0&&(w+=I-N),b.__size=w,b.__cache={},this}function E(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),L}function y(b){const L=b.target;L.removeEventListener("dispose",y);const w=l.indexOf(L.__bindingPointIndex);l.splice(w,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete a[L.id]}function x(){for(const b in s)i.deleteBuffer(s[b]);l=[],s={},a={}}return{bind:d,update:h,dispose:x}}class db{constructor(e={}){const{canvas:t=fE(),context:n=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=l;const S=new Uint32Array(4),E=new Int32Array(4);let y=null,x=null;const b=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=hn;let N=0,U=0,z=null,C=-1,R=null;const B=new Dt,q=new Dt;let K=null;const he=new Ze(0);let oe=0,ae=t.width,ue=t.height,G=1,le=null,Y=null;const F=new Dt(0,0,ae,ue),Q=new Dt(0,0,ae,ue);let Re=!1;const be=new Ep;let Oe=!1,ee=!1;const se=new lt,xe=new D,Ne=new Dt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function tn(){return z===null?G:1}let V=n;function Nt(P,$){return t.getContext(P,$)}try{const P={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ds}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ve,!1),V===null){const $="webgl2";if(V=Nt($,P),V===null)throw Nt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ct,et,Be,Ut,Ve,ut,Ht,Yt,O,A,J,fe,me,de,$e,ye,ze,Ye,Ee,Le,tt,je,Pe,dt;function W(){ct=new MR(V),ct.init(),je=new ib(V,ct),et=new pR(V,ct,e,je),Be=new tb(V,ct),et.reversedDepthBuffer&&g&&Be.buffers.depth.setReversed(!0),Ut=new TR(V),Ve=new H1,ut=new nb(V,ct,Be,Ve,et,je,Ut),Ht=new gR(w),Yt=new yR(w),O=new PT(V),Pe=new hR(V,O),A=new SR(V,O,Ut,Pe),J=new AR(V,A,O,Ut),Ee=new wR(V,et,ut),ye=new mR(Ve),fe=new z1(w,Ht,Yt,ct,et,Pe,ye),me=new ub(w,Ve),de=new W1,$e=new K1(ct),Ye=new dR(w,Ht,Yt,Be,J,v,d),ze=new J1(w,J,et),dt=new cb(V,Ut,et,Be),Le=new fR(V,ct,Ut),tt=new ER(V,ct,Ut),Ut.programs=fe.programs,w.capabilities=et,w.extensions=ct,w.properties=Ve,w.renderLists=de,w.shadowMap=ze,w.state=Be,w.info=Ut}W();const Se=new ab(w,V);this.xr=Se,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const P=ct.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ct.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize(ae,ue,!1))},this.getSize=function(P){return P.set(ae,ue)},this.setSize=function(P,$,ie=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=P,ue=$,t.width=Math.floor(P*G),t.height=Math.floor($*G),ie===!0&&(t.style.width=P+"px",t.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(ae*G,ue*G).floor()},this.setDrawingBufferSize=function(P,$,ie){ae=P,ue=$,G=ie,t.width=Math.floor(P*ie),t.height=Math.floor($*ie),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(B)},this.getViewport=function(P){return P.copy(F)},this.setViewport=function(P,$,ie,re){P.isVector4?F.set(P.x,P.y,P.z,P.w):F.set(P,$,ie,re),Be.viewport(B.copy(F).multiplyScalar(G).round())},this.getScissor=function(P){return P.copy(Q)},this.setScissor=function(P,$,ie,re){P.isVector4?Q.set(P.x,P.y,P.z,P.w):Q.set(P,$,ie,re),Be.scissor(q.copy(Q).multiplyScalar(G).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(P){Be.setScissorTest(Re=P)},this.setOpaqueSort=function(P){le=P},this.setTransparentSort=function(P){Y=P},this.getClearColor=function(P){return P.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(P=!0,$=!0,ie=!0){let re=0;if(P){let j=!1;if(z!==null){const Te=z.texture.format;j=Te===xp||Te===vp||Te===_p}if(j){const Te=z.texture.type,Ie=Te===$i||Te===Us||Te===sl||Te===ol||Te===pp||Te===mp,We=Ye.getClearColor(),Fe=Ye.getClearAlpha(),st=We.r,at=We.g,Qe=We.b;Ie?(S[0]=st,S[1]=at,S[2]=Qe,S[3]=Fe,V.clearBufferuiv(V.COLOR,0,S)):(E[0]=st,E[1]=at,E[2]=Qe,E[3]=Fe,V.clearBufferiv(V.COLOR,0,E))}else re|=V.COLOR_BUFFER_BIT}$&&(re|=V.DEPTH_BUFFER_BIT),ie&&(re|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ye.dispose(),de.dispose(),$e.dispose(),Ve.dispose(),Ht.dispose(),Yt.dispose(),J.dispose(),Pe.dispose(),dt.dispose(),fe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",gn),Se.removeEventListener("sessionend",Zi),Nn.stop()};function we(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const P=Ut.autoReset,$=ze.enabled,ie=ze.autoUpdate,re=ze.needsUpdate,j=ze.type;W(),Ut.autoReset=P,ze.enabled=$,ze.autoUpdate=ie,ze.needsUpdate=re,ze.type=j}function ve(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function pe(P){const $=P.target;$.removeEventListener("dispose",pe),He($)}function He(P){ht(P),Ve.remove(P)}function ht(P){const $=Ve.get(P).programs;$!==void 0&&($.forEach(function(ie){fe.releaseProgram(ie)}),P.isShaderMaterial&&fe.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,ie,re,j,Te){$===null&&($=De);const Ie=j.isMesh&&j.matrixWorld.determinant()<0,We=Fi(P,$,ie,re,j);Be.setMaterial(re,Ie);let Fe=ie.index,st=1;if(re.wireframe===!0){if(Fe=A.getWireframeAttribute(ie),Fe===void 0)return;st=2}const at=ie.drawRange,Qe=ie.attributes.position;let ft=at.start*st,Ot=(at.start+at.count)*st;Te!==null&&(ft=Math.max(ft,Te.start*st),Ot=Math.min(Ot,(Te.start+Te.count)*st)),Fe!==null?(ft=Math.max(ft,0),Ot=Math.min(Ot,Fe.count)):Qe!=null&&(ft=Math.max(ft,0),Ot=Math.min(Ot,Qe.count));const Rt=Ot-ft;if(Rt<0||Rt===1/0)return;Pe.setup(j,re,We,ie,Fe);let Xt,Ft=Le;if(Fe!==null&&(Xt=O.get(Fe),Ft=tt,Ft.setIndex(Xt)),j.isMesh)re.wireframe===!0?(Be.setLineWidth(re.wireframeLinewidth*tn()),Ft.setMode(V.LINES)):Ft.setMode(V.TRIANGLES);else if(j.isLine){let nt=re.linewidth;nt===void 0&&(nt=1),Be.setLineWidth(nt*tn()),j.isLineSegments?Ft.setMode(V.LINES):j.isLineLoop?Ft.setMode(V.LINE_LOOP):Ft.setMode(V.LINE_STRIP)}else j.isPoints?Ft.setMode(V.POINTS):j.isSprite&&Ft.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)hl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Ft.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nt=j._multiDrawStarts,Gt=j._multiDrawCounts,Et=j._multiDrawCount,un=Fe?O.get(Fe).bytesPerElement:1,xi=Ve.get(re).currentProgram.getUniforms();for(let Dn=0;Dn<Et;Dn++)xi.setValue(V,"_gl_DrawID",Dn),Ft.render(nt[Dn]/un,Gt[Dn])}else if(j.isInstancedMesh)Ft.renderInstances(ft,Rt,j.count);else if(ie.isInstancedBufferGeometry){const nt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Gt=Math.min(ie.instanceCount,nt);Ft.renderInstances(ft,Rt,Gt)}else Ft.render(ft,Rt)};function Ct(P,$,ie){P.transparent===!0&&P.side===fi&&P.forceSinglePass===!1?(P.side=In,P.needsUpdate=!0,Ji(P,$,ie),P.side=xr,P.needsUpdate=!0,Ji(P,$,ie),P.side=fi):Ji(P,$,ie)}this.compile=function(P,$,ie=null){ie===null&&(ie=P),x=$e.get(ie),x.init($),L.push(x),ie.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),P!==ie&&P.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const re=new Set;return P.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Te=j.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const We=Te[Ie];Ct(We,ie,j),re.add(We)}else Ct(Te,ie,j),re.add(Te)}),x=L.pop(),re},this.compileAsync=function(P,$,ie=null){const re=this.compile(P,$,ie);return new Promise(j=>{function Te(){if(re.forEach(function(Ie){Ve.get(Ie).currentProgram.isReady()&&re.delete(Ie)}),re.size===0){j(P);return}setTimeout(Te,10)}ct.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let At=null;function Gn(P){At&&At(P)}function gn(){Nn.stop()}function Zi(){Nn.start()}const Nn=new fx;Nn.setAnimationLoop(Gn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(P){At=P,Se.setAnimationLoop(P),P===null?Nn.stop():Nn.start()},Se.addEventListener("sessionstart",gn),Se.addEventListener("sessionend",Zi),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera($),$=Se.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,$,z),x=$e.get(P,L.length),x.init($),L.push(x),se.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),be.setFromProjectionMatrix(se,Yi,$.reversedDepth),ee=this.localClippingEnabled,Oe=ye.init(this.clippingPlanes,ee),y=de.get(P,b.length),y.init(),b.push(y),Se.enabled===!0&&Se.isPresenting===!0){const Te=w.xr.getDepthSensingMesh();Te!==null&&es(Te,$,-1/0,w.sortObjects)}es(P,$,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(le,Y),mt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,mt&&Ye.addToRenderList(y,P),this.info.render.frame++,Oe===!0&&ye.beginShadows();const ie=x.state.shadowsArray;ze.render(ie,P,$),Oe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,j=y.transmissive;if(x.setupLights(),$.isArrayCamera){const Te=$.cameras;if(j.length>0)for(let Ie=0,We=Te.length;Ie<We;Ie++){const Fe=Te[Ie];Qi(re,j,P,Fe)}mt&&Ye.render(P);for(let Ie=0,We=Te.length;Ie<We;Ie++){const Fe=Te[Ie];Ui(y,P,Fe,Fe.viewport)}}else j.length>0&&Qi(re,j,P,$),mt&&Ye.render(P),Ui(y,P,$);z!==null&&U===0&&(ut.updateMultisampleRenderTarget(z),ut.updateRenderTargetMipmap(z)),P.isScene===!0&&P.onAfterRender(w,P,$),Pe.resetDefaultState(),C=-1,R=null,L.pop(),L.length>0?(x=L[L.length-1],Oe===!0&&ye.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,b.pop(),b.length>0?y=b[b.length-1]:y=null};function es(P,$,ie,re){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||be.intersectsSprite(P)){re&&Ne.setFromMatrixPosition(P.matrixWorld).applyMatrix4(se);const Ie=J.update(P),We=P.material;We.visible&&y.push(P,Ie,We,ie,Ne.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||be.intersectsObject(P))){const Ie=J.update(P),We=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ne.copy(P.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ne.copy(Ie.boundingSphere.center)),Ne.applyMatrix4(P.matrixWorld).applyMatrix4(se)),Array.isArray(We)){const Fe=Ie.groups;for(let st=0,at=Fe.length;st<at;st++){const Qe=Fe[st],ft=We[Qe.materialIndex];ft&&ft.visible&&y.push(P,Ie,ft,ie,Ne.z,Qe)}}else We.visible&&y.push(P,Ie,We,ie,Ne.z,null)}}const Te=P.children;for(let Ie=0,We=Te.length;Ie<We;Ie++)es(Te[Ie],$,ie,re)}function Ui(P,$,ie,re){const j=P.opaque,Te=P.transmissive,Ie=P.transparent;x.setupLightsView(ie),Oe===!0&&ye.setGlobalState(w.clippingPlanes,ie),re&&Be.viewport(B.copy(re)),j.length>0&&vi(j,$,ie),Te.length>0&&vi(Te,$,ie),Ie.length>0&&vi(Ie,$,ie),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Qi(P,$,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[re.id]===void 0&&(x.state.transmissionRenderTarget[re.id]=new Os(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?ml:$i,minFilter:gr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Te=x.state.transmissionRenderTarget[re.id],Ie=re.viewport||B;Te.setSize(Ie.z*w.transmissionResolutionScale,Ie.w*w.transmissionResolutionScale);const We=w.getRenderTarget(),Fe=w.getActiveCubeFace(),st=w.getActiveMipmapLevel();w.setRenderTarget(Te),w.getClearColor(he),oe=w.getClearAlpha(),oe<1&&w.setClearColor(16777215,.5),w.clear(),mt&&Ye.render(ie);const at=w.toneMapping;w.toneMapping=Qr;const Qe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),x.setupLightsView(re),Oe===!0&&ye.setGlobalState(w.clippingPlanes,re),vi(P,ie,re),ut.updateMultisampleRenderTarget(Te),ut.updateRenderTargetMipmap(Te),ct.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Ot=0,Rt=$.length;Ot<Rt;Ot++){const Xt=$[Ot],Ft=Xt.object,nt=Xt.geometry,Gt=Xt.material,Et=Xt.group;if(Gt.side===fi&&Ft.layers.test(re.layers)){const un=Gt.side;Gt.side=In,Gt.needsUpdate=!0,Oi(Ft,ie,re,nt,Gt,Et),Gt.side=un,Gt.needsUpdate=!0,ft=!0}}ft===!0&&(ut.updateMultisampleRenderTarget(Te),ut.updateRenderTargetMipmap(Te))}w.setRenderTarget(We,Fe,st),w.setClearColor(he,oe),Qe!==void 0&&(re.viewport=Qe),w.toneMapping=at}function vi(P,$,ie){const re=$.isScene===!0?$.overrideMaterial:null;for(let j=0,Te=P.length;j<Te;j++){const Ie=P[j],We=Ie.object,Fe=Ie.geometry,st=Ie.group;let at=Ie.material;at.allowOverride===!0&&re!==null&&(at=re),We.layers.test(ie.layers)&&Oi(We,$,ie,Fe,at,st)}}function Oi(P,$,ie,re,j,Te){P.onBeforeRender(w,$,ie,re,j,Te),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(w,$,ie,re,P,Te),j.transparent===!0&&j.side===fi&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,w.renderBufferDirect(ie,$,re,j,P,Te),j.side=xr,j.needsUpdate=!0,w.renderBufferDirect(ie,$,re,j,P,Te),j.side=fi):w.renderBufferDirect(ie,$,re,j,P,Te),P.onAfterRender(w,$,ie,re,j,Te)}function Ji(P,$,ie){$.isScene!==!0&&($=De);const re=Ve.get(P),j=x.state.lights,Te=x.state.shadowsArray,Ie=j.state.version,We=fe.getParameters(P,j.state,Te,$,ie),Fe=fe.getProgramCacheKey(We);let st=re.programs;re.environment=P.isMeshStandardMaterial?$.environment:null,re.fog=$.fog,re.envMap=(P.isMeshStandardMaterial?Yt:Ht).get(P.envMap||re.environment),re.envMapRotation=re.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,st===void 0&&(P.addEventListener("dispose",pe),st=new Map,re.programs=st);let at=st.get(Fe);if(at!==void 0){if(re.currentProgram===at&&re.lightsStateVersion===Ie)return ks(P,We),at}else We.uniforms=fe.getUniforms(P),P.onBeforeCompile(We,w),at=fe.acquireProgram(We,Fe),st.set(Fe,at),re.uniforms=We.uniforms;const Qe=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qe.clippingPlanes=ye.uniform),ks(P,We),re.needsLights=ts(P),re.lightsStateVersion=Ie,re.needsLights&&(Qe.ambientLightColor.value=j.state.ambient,Qe.lightProbe.value=j.state.probe,Qe.directionalLights.value=j.state.directional,Qe.directionalLightShadows.value=j.state.directionalShadow,Qe.spotLights.value=j.state.spot,Qe.spotLightShadows.value=j.state.spotShadow,Qe.rectAreaLights.value=j.state.rectArea,Qe.ltc_1.value=j.state.rectAreaLTC1,Qe.ltc_2.value=j.state.rectAreaLTC2,Qe.pointLights.value=j.state.point,Qe.pointLightShadows.value=j.state.pointShadow,Qe.hemisphereLights.value=j.state.hemi,Qe.directionalShadowMap.value=j.state.directionalShadowMap,Qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Qe.spotShadowMap.value=j.state.spotShadowMap,Qe.spotLightMatrix.value=j.state.spotLightMatrix,Qe.spotLightMap.value=j.state.spotLightMap,Qe.pointShadowMap.value=j.state.pointShadowMap,Qe.pointShadowMatrix.value=j.state.pointShadowMatrix),re.currentProgram=at,re.uniformsList=null,at}function Fs(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=sc.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function ks(P,$){const ie=Ve.get(P);ie.outputColorSpace=$.outputColorSpace,ie.batching=$.batching,ie.batchingColor=$.batchingColor,ie.instancing=$.instancing,ie.instancingColor=$.instancingColor,ie.instancingMorph=$.instancingMorph,ie.skinning=$.skinning,ie.morphTargets=$.morphTargets,ie.morphNormals=$.morphNormals,ie.morphColors=$.morphColors,ie.morphTargetsCount=$.morphTargetsCount,ie.numClippingPlanes=$.numClippingPlanes,ie.numIntersection=$.numClipIntersection,ie.vertexAlphas=$.vertexAlphas,ie.vertexTangents=$.vertexTangents,ie.toneMapping=$.toneMapping}function Fi(P,$,ie,re,j){$.isScene!==!0&&($=De),ut.resetTextureUnits();const Te=$.fog,Ie=re.isMeshStandardMaterial?$.environment:null,We=z===null?w.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Hn,Fe=(re.isMeshStandardMaterial?Yt:Ht).get(re.envMap||Ie),st=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,at=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Qe=!!ie.morphAttributes.position,ft=!!ie.morphAttributes.normal,Ot=!!ie.morphAttributes.color;let Rt=Qr;re.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Rt=w.toneMapping);const Xt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ft=Xt!==void 0?Xt.length:0,nt=Ve.get(re),Gt=x.state.lights;if(Oe===!0&&(ee===!0||P!==R)){const sn=P===R&&re.id===C;ye.setState(re,P,sn)}let Et=!1;re.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Gt.state.version||nt.outputColorSpace!==We||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isBatchedMesh&&nt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&nt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&nt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&nt.instancingMorph===!1&&j.morphTexture!==null||nt.envMap!==Fe||re.fog===!0&&nt.fog!==Te||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ye.numPlanes||nt.numIntersection!==ye.numIntersection)||nt.vertexAlphas!==st||nt.vertexTangents!==at||nt.morphTargets!==Qe||nt.morphNormals!==ft||nt.morphColors!==Ot||nt.toneMapping!==Rt||nt.morphTargetsCount!==Ft)&&(Et=!0):(Et=!0,nt.__version=re.version);let un=nt.currentProgram;Et===!0&&(un=Ji(re,$,j));let xi=!1,Dn=!1,ns=!1;const jt=un.getUniforms(),Un=nt.uniforms;if(Be.useProgram(un.program)&&(xi=!0,Dn=!0,ns=!0),re.id!==C&&(C=re.id,Dn=!0),xi||R!==P){Be.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),jt.setValue(V,"projectionMatrix",P.projectionMatrix),jt.setValue(V,"viewMatrix",P.matrixWorldInverse);const wn=jt.map.cameraPosition;wn!==void 0&&wn.setValue(V,xe.setFromMatrixPosition(P.matrixWorld)),et.logarithmicDepthBuffer&&jt.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&jt.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,Dn=!0,ns=!0)}if(j.isSkinnedMesh){jt.setOptional(V,j,"bindMatrix"),jt.setOptional(V,j,"bindMatrixInverse");const sn=j.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),jt.setValue(V,"boneTexture",sn.boneTexture,ut))}j.isBatchedMesh&&(jt.setOptional(V,j,"batchingTexture"),jt.setValue(V,"batchingTexture",j._matricesTexture,ut),jt.setOptional(V,j,"batchingIdTexture"),jt.setValue(V,"batchingIdTexture",j._indirectTexture,ut),jt.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&jt.setValue(V,"batchingColorTexture",j._colorsTexture,ut));const Tn=ie.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Ee.update(j,ie,un),(Dn||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,jt.setValue(V,"receiveShadow",j.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Un.envMap.value=Fe,Un.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&$.environment!==null&&(Un.envMapIntensity.value=$.environmentIntensity),Dn&&(jt.setValue(V,"toneMappingExposure",w.toneMappingExposure),nt.needsLights&&Bs(Un,ns),Te&&re.fog===!0&&me.refreshFogUniforms(Un,Te),me.refreshMaterialUniforms(Un,re,G,ue,x.state.transmissionRenderTarget[P.id]),sc.upload(V,Fs(nt),Un,ut)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(sc.upload(V,Fs(nt),Un,ut),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&jt.setValue(V,"center",j.center),jt.setValue(V,"modelViewMatrix",j.modelViewMatrix),jt.setValue(V,"normalMatrix",j.normalMatrix),jt.setValue(V,"modelMatrix",j.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const sn=re.uniformsGroups;for(let wn=0,is=sn.length;wn<is;wn++){const Tt=sn[wn];dt.update(Tt,un),dt.bind(Tt,un)}}return un}function Bs(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function ts(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(P,$,ie){const re=Ve.get(P);re.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ve.get(P.texture).__webglTexture=$,Ve.get(P.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ie,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,$){const ie=Ve.get(P);ie.__webglFramebuffer=$,ie.__useDefaultFramebuffer=$===void 0};const na=V.createFramebuffer();this.setRenderTarget=function(P,$=0,ie=0){z=P,N=$,U=ie;let re=!0,j=null,Te=!1,Ie=!1;if(P){const Fe=Ve.get(P);if(Fe.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(V.FRAMEBUFFER,null),re=!1;else if(Fe.__webglFramebuffer===void 0)ut.setupRenderTarget(P);else if(Fe.__hasExternalTextures)ut.rebindTextures(P,Ve.get(P.texture).__webglTexture,Ve.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Qe=P.depthTexture;if(Fe.__boundDepthTexture!==Qe){if(Qe!==null&&Ve.has(Qe)&&(P.width!==Qe.image.width||P.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(P)}}const st=P.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ie=!0);const at=Ve.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(at[$])?j=at[$][ie]:j=at[$],Te=!0):P.samples>0&&ut.useMultisampledRTT(P)===!1?j=Ve.get(P).__webglMultisampledFramebuffer:Array.isArray(at)?j=at[ie]:j=at,B.copy(P.viewport),q.copy(P.scissor),K=P.scissorTest}else B.copy(F).multiplyScalar(G).floor(),q.copy(Q).multiplyScalar(G).floor(),K=Re;if(ie!==0&&(j=na),Be.bindFramebuffer(V.FRAMEBUFFER,j)&&re&&Be.drawBuffers(P,j),Be.viewport(B),Be.scissor(q),Be.setScissorTest(K),Te){const Fe=Ve.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe.__webglTexture,ie)}else if(Ie){const Fe=$;for(let st=0;st<P.textures.length;st++){const at=Ve.get(P.textures[st]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+st,at.__webglTexture,ie,Fe)}}else if(P!==null&&ie!==0){const Fe=Ve.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Fe.__webglTexture,ie)}C=-1},this.readRenderTargetPixels=function(P,$,ie,re,j,Te,Ie,We=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ve.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){Be.bindFramebuffer(V.FRAMEBUFFER,Fe);try{const st=P.textures[We],at=st.format,Qe=st.type;if(!et.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-re&&ie>=0&&ie<=P.height-j&&(P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+We),V.readPixels($,ie,re,j,je.convert(at),je.convert(Qe),Te))}finally{const st=z!==null?Ve.get(z).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(P,$,ie,re,j,Te,Ie,We=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ve.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe)if($>=0&&$<=P.width-re&&ie>=0&&ie<=P.height-j){Be.bindFramebuffer(V.FRAMEBUFFER,Fe);const st=P.textures[We],at=st.format,Qe=st.type;if(!et.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ft),V.bufferData(V.PIXEL_PACK_BUFFER,Te.byteLength,V.STREAM_READ),P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+We),V.readPixels($,ie,re,j,je.convert(at),je.convert(Qe),0);const Ot=z!==null?Ve.get(z).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,Ot);const Rt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await pE(V,Rt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ft),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Te),V.deleteBuffer(ft),V.deleteSync(Rt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,$=null,ie=0){const re=Math.pow(2,-ie),j=Math.floor(P.image.width*re),Te=Math.floor(P.image.height*re),Ie=$!==null?$.x:0,We=$!==null?$.y:0;ut.setTexture2D(P,0),V.copyTexSubImage2D(V.TEXTURE_2D,ie,0,0,Ie,We,j,Te),Be.unbindTexture()};const Vs=V.createFramebuffer(),er=V.createFramebuffer();this.copyTextureToTexture=function(P,$,ie=null,re=null,j=0,Te=null){Te===null&&(j!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=j,j=0):Te=0);let Ie,We,Fe,st,at,Qe,ft,Ot,Rt;const Xt=P.isCompressedTexture?P.mipmaps[Te]:P.image;if(ie!==null)Ie=ie.max.x-ie.min.x,We=ie.max.y-ie.min.y,Fe=ie.isBox3?ie.max.z-ie.min.z:1,st=ie.min.x,at=ie.min.y,Qe=ie.isBox3?ie.min.z:0;else{const Tn=Math.pow(2,-j);Ie=Math.floor(Xt.width*Tn),We=Math.floor(Xt.height*Tn),P.isDataArrayTexture?Fe=Xt.depth:P.isData3DTexture?Fe=Math.floor(Xt.depth*Tn):Fe=1,st=0,at=0,Qe=0}re!==null?(ft=re.x,Ot=re.y,Rt=re.z):(ft=0,Ot=0,Rt=0);const Ft=je.convert($.format),nt=je.convert($.type);let Gt;$.isData3DTexture?(ut.setTexture3D($,0),Gt=V.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ut.setTexture2DArray($,0),Gt=V.TEXTURE_2D_ARRAY):(ut.setTexture2D($,0),Gt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const Et=V.getParameter(V.UNPACK_ROW_LENGTH),un=V.getParameter(V.UNPACK_IMAGE_HEIGHT),xi=V.getParameter(V.UNPACK_SKIP_PIXELS),Dn=V.getParameter(V.UNPACK_SKIP_ROWS),ns=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Xt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,st),V.pixelStorei(V.UNPACK_SKIP_ROWS,at),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qe);const jt=P.isDataArrayTexture||P.isData3DTexture,Un=$.isDataArrayTexture||$.isData3DTexture;if(P.isDepthTexture){const Tn=Ve.get(P),sn=Ve.get($),wn=Ve.get(Tn.__renderTarget),is=Ve.get(sn.__renderTarget);Be.bindFramebuffer(V.READ_FRAMEBUFFER,wn.__webglFramebuffer),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let Tt=0;Tt<Fe;Tt++)jt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(P).__webglTexture,j,Qe+Tt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get($).__webglTexture,Te,Rt+Tt)),V.blitFramebuffer(st,at,Ie,We,ft,Ot,Ie,We,V.DEPTH_BUFFER_BIT,V.NEAREST);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||P.isRenderTargetTexture||Ve.has(P)){const Tn=Ve.get(P),sn=Ve.get($);Be.bindFramebuffer(V.READ_FRAMEBUFFER,Vs),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,er);for(let wn=0;wn<Fe;wn++)jt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Tn.__webglTexture,j,Qe+wn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Tn.__webglTexture,j),Un?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sn.__webglTexture,Te,Rt+wn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,sn.__webglTexture,Te),j!==0?V.blitFramebuffer(st,at,Ie,We,ft,Ot,Ie,We,V.COLOR_BUFFER_BIT,V.NEAREST):Un?V.copyTexSubImage3D(Gt,Te,ft,Ot,Rt+wn,st,at,Ie,We):V.copyTexSubImage2D(Gt,Te,ft,Ot,st,at,Ie,We);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Un?P.isDataTexture||P.isData3DTexture?V.texSubImage3D(Gt,Te,ft,Ot,Rt,Ie,We,Fe,Ft,nt,Xt.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(Gt,Te,ft,Ot,Rt,Ie,We,Fe,Ft,Xt.data):V.texSubImage3D(Gt,Te,ft,Ot,Rt,Ie,We,Fe,Ft,nt,Xt):P.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Te,ft,Ot,Ie,We,Ft,nt,Xt.data):P.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Te,ft,Ot,Xt.width,Xt.height,Ft,Xt.data):V.texSubImage2D(V.TEXTURE_2D,Te,ft,Ot,Ie,We,Ft,nt,Xt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Et),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,un),V.pixelStorei(V.UNPACK_SKIP_PIXELS,xi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Dn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ns),Te===0&&$.generateMipmaps&&V.generateMipmap(Gt),Be.unbindTexture()},this.initRenderTarget=function(P){Ve.get(P).__webglFramebuffer===void 0&&ut.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ut.setTextureCube(P,0):P.isData3DTexture?ut.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ut.setTexture2DArray(P,0):ut.setTexture2D(P,0),Be.unbindTexture()},this.resetState=function(){N=0,U=0,z=null,Be.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}let ja=null;function ip(){if(ja)return ja;const i=128,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.2,"rgba(255,255,255,0.8)"),n.addColorStop(.5,"rgba(255,255,255,0.18)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i),ja=new qE(e),ja.colorSpace=hn,ja}function Dp(i,e,t=1){const n=new BE(new nx({map:ip(),color:i,transparent:!0,opacity:t,blending:Is,depthWrite:!1}));return n.scale.setScalar(e),n}const Ss=new Ze("#4aa8ff"),hb=new Ze("#ffb347");class fb{group=new Mn;nodes=[];nodePoints;lines;linkDistance=4.2;earth;orbs=[];stars;box=new D(18,10,6);constructor(e){const t=e==="high"?110:55;this.stars=this.makeStars(e==="high"?1800:800),this.group.add(this.stars);for(let c=0;c<t;c++)this.nodes.push({pos:new D(_t.randFloatSpread(this.box.x*2),_t.randFloatSpread(this.box.y*2),_t.randFloatSpread(this.box.z*2)-14),vel:new D().randomDirection().multiplyScalar(_t.randFloat(.08,.25))});const n=new zt;n.setAttribute("position",new St(new Float32Array(t*3),3));const s=new Float32Array(t*3);for(let c=0;c<t;c++)(Math.random()<.12?hb:Ss).toArray(s,c*3);n.setAttribute("color",new St(s,3)),this.nodePoints=new ep(n,new mc({size:.35,map:ip(),vertexColors:!0,transparent:!0,blending:Is,depthWrite:!1})),this.group.add(this.nodePoints);const a=t*6,l=new zt;l.setAttribute("position",new St(new Float32Array(a*6),3)),l.setAttribute("color",new St(new Float32Array(a*6),3)),this.lines=new Zo(l,new Jr({vertexColors:!0,transparent:!0,blending:Is,depthWrite:!1})),this.group.add(this.lines),this.earth=this.makeEarth(),this.group.add(this.earth);for(let c=0;c<7;c++){const d=c%3===0,h=Dp(d?"#ffae42":"#5ab4ff",_t.randFloat(.8,2.2),.55),m=new D(_t.randFloatSpread(26),_t.randFloatSpread(14),_t.randFloat(-22,-8));h.position.copy(m),this.orbs.push({sprite:h,base:m,phase:Math.random()*Math.PI*2}),this.group.add(h)}this.updateNetwork(0)}makeStars(e){const t=new Float32Array(e*3),n=new Float32Array(e*3),s=new Ze;for(let l=0;l<e;l++){const c=new D().randomDirection().multiplyScalar(_t.randFloat(60,120));c.z=-Math.abs(c.z),c.toArray(t,l*3),s.setHSL(_t.randFloat(.55,.65),.6,_t.randFloat(.55,.95)),s.toArray(n,l*3)}const a=new zt;return a.setAttribute("position",new St(t,3)),a.setAttribute("color",new St(n,3)),new ep(a,new mc({size:.5,map:ip(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:Is}))}makeEarth(){const e=new Mn,t=8,n=new rn(new pl(t,64,48),new Ii({uniforms:{uTime:{value:0},uLight:{value:new D(-1,.6,.8).normalize()}},vertexShader:`
          varying vec3 vNormal; varying vec3 vPos; varying vec3 vView;
          void main() {
            vPos = position;
            vNormal = normalize(normalMatrix * normal);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vView = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`
          uniform float uTime; uniform vec3 uLight;
          varying vec3 vNormal; varying vec3 vPos; varying vec3 vView;
          float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
          float noise(vec3 p) {
            vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
            return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                       mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
          }
          float fbm(vec3 p) { float v = 0.0; float a = 0.5; for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.1; a *= 0.5; } return v; }
          void main() {
            vec3 p = normalize(vPos) * 2.2;
            float land = smoothstep(0.5, 0.56, fbm(p));
            float light = clamp(dot(vNormal, uLight), 0.0, 1.0);
            vec3 ocean = vec3(0.01, 0.05, 0.16);
            vec3 ground = vec3(0.04, 0.12, 0.12);
            vec3 day = mix(ocean, ground, land) * (0.25 + light * 1.4);
            float city = land * step(0.82, noise(p * 40.0)) * (1.0 - smoothstep(0.0, 0.35, light));
            vec3 col = day + vec3(1.0, 0.68, 0.3) * city * 0.9;
            float rim = pow(1.0 - max(dot(vNormal, vView), 0.0), 3.0);
            col += vec3(0.25, 0.6, 1.0) * rim * 0.55;
            gl_FragColor = vec4(col, 1.0);
          }`}));e.add(n);const s=new rn(new pl(t*1.08,48,32),new Ii({transparent:!0,side:In,blending:Is,depthWrite:!1,vertexShader:`
          varying vec3 vNormal; varying vec3 vView;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vView = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`
          varying vec3 vNormal; varying vec3 vView;
          void main() {
            float i = pow(0.7 - dot(vNormal, vView), 4.0);
            gl_FragColor = vec4(0.3, 0.65, 1.0, 1.0) * clamp(i, 0.0, 1.0) * 0.9;
          }`}));return e.add(s),e.position.set(14,-13,-30),e.rotation.z=.35,e}layout(e){e<1?this.earth.position.set(5,-19,-36):this.earth.position.set(19,-13,-36)}updateNetwork(e){const{nodes:t,box:n}=this,s=this.nodePoints.geometry.getAttribute("position");t.forEach((h,m)=>{h.pos.addScaledVector(h.vel,e),Math.abs(h.pos.x)>n.x&&(h.vel.x*=-1),Math.abs(h.pos.y)>n.y&&(h.vel.y*=-1),Math.abs(h.pos.z+14)>n.z&&(h.vel.z*=-1),s.setXYZ(m,h.pos.x,h.pos.y,h.pos.z)}),s.needsUpdate=!0;const a=this.lines.geometry.getAttribute("position"),l=this.lines.geometry.getAttribute("color"),c=a.count/2;let d=0;for(let h=0;h<t.length&&d<c;h++)for(let m=h+1;m<t.length&&d<c;m++){const p=t[h].pos.distanceTo(t[m].pos);if(p>this.linkDistance)continue;const g=(1-p/this.linkDistance)*.55;a.setXYZ(d*2,t[h].pos.x,t[h].pos.y,t[h].pos.z),a.setXYZ(d*2+1,t[m].pos.x,t[m].pos.y,t[m].pos.z),l.setXYZ(d*2,Ss.r*g,Ss.g*g,Ss.b*g),l.setXYZ(d*2+1,Ss.r*g,Ss.g*g,Ss.b*g),d++}this.lines.geometry.setDrawRange(0,d*2),a.needsUpdate=!0,l.needsUpdate=!0}update(e,t){this.updateNetwork(e),this.earth.rotation.y+=e*.02,this.stars.rotation.z+=e*.004;for(const n of this.orbs)n.sprite.position.set(n.base.x+Math.sin(t*.15+n.phase)*1.5,n.base.y+Math.cos(t*.12+n.phase)*1,n.base.z),n.sprite.material.opacity=.4+Math.sin(t*.8+n.phase)*.15}}function Fv(i,e){if(e===BS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kf||e===G0){let t=i.getIndex();if(t===null){const l=[],c=i.getAttribute("position");if(c!==void 0){for(let d=0;d<c.count;d++)l.push(d);i.setIndex(l),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Kf)for(let l=1;l<=n;l++)s.push(t.getX(0)),s.push(t.getX(l)),s.push(t.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(s.push(t.getX(l)),s.push(t.getX(l+1)),s.push(t.getX(l+2))):(s.push(t.getX(l+2)),s.push(t.getX(l+1)),s.push(t.getX(l)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class pb extends ea{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Rb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new Nb(t)})}load(e,t,n,s){const a=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const h=rl.extractUrlBase(e);l=rl.resolveURL(h,this.path)}else l=rl.extractUrlBase(e);this.manager.itemStart(e);const c=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},d=new dx(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{a.parse(h,l,function(m){t(m),a.manager.itemEnd(e)},c)}catch(m){c(m)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let a;const l={},c={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===vx){try{l[wt.KHR_BINARY_GLTF]=new Db(e)}catch(p){s&&s(p);return}a=JSON.parse(l[wt.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Yb(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const p=this.pluginCallbacks[m](h);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[p.name]=p,l[p.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const p=a.extensionsUsed[m],g=a.extensionsRequired||[];switch(p){case wt.KHR_MATERIALS_UNLIT:l[p]=new _b;break;case wt.KHR_DRACO_MESH_COMPRESSION:l[p]=new Ub(a,this.dracoLoader);break;case wt.KHR_TEXTURE_TRANSFORM:l[p]=new Ob;break;case wt.KHR_MESH_QUANTIZATION:l[p]=new Fb;break;default:g.indexOf(p)>=0&&c[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}h.setExtensions(l),h.setPlugins(c),h.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,a){n.parse(e,t,s,a)})}}function mb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const wt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gb{constructor(e){this.parser=e,this.name=wt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const m=new Ze(16777215);d.color!==void 0&&m.setRGB(d.color[0],d.color[1],d.color[2],Hn);const p=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new tp(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new fT(m),h.distance=p;break;case"spot":h=new dT(m),h.distance=p,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),Xi(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(h),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],c=(a.extensions&&a.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(d){return n._getNodeRef(t.cache,c,d)})}}class _b{constructor(){this.name=wt.KHR_MATERIALS_UNLIT}getMaterialType(){return gi}extendParams(e,t,n){const s=[];e.color=new Ze(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const l=a.baseColorFactor;e.color.setRGB(l[0],l[1],l[2],Hn),e.opacity=l[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",a.baseColorTexture,hn))}return Promise.all(s)}}class vb{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class xb{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];if(l.clearcoatFactor!==void 0&&(t.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const c=l.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(c,c)}return Promise.all(a)}}class yb{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class Mb{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.iridescenceFactor!==void 0&&(t.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(t.iridescenceIOR=l.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(a)}}class Sb{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const l=s.extensions[this.name];if(l.sheenColorFactor!==void 0){const c=l.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Hn)}return l.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",l.sheenColorTexture,hn)),l.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(a)}}class Eb{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.transmissionFactor!==void 0&&(t.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",l.transmissionTexture)),Promise.all(a)}}class Tb{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];t.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",l.thicknessTexture)),t.attenuationDistance=l.attenuationDistance||1/0;const c=l.attenuationColor||[1,1,1];return t.attenuationColor=new Ze().setRGB(c[0],c[1],c[2],Hn),Promise.all(a)}}class wb{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class Ab{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];t.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",l.specularTexture));const c=l.specularColorFactor||[1,1,1];return t.specularColor=new Ze().setRGB(c[0],c[1],c[2],Hn),l.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",l.specularColorTexture,hn)),Promise.all(a)}}class Rb{constructor(e){this.parser=e,this.name=wt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return t.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",l.bumpTexture)),Promise.all(a)}}class bb{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.anisotropyStrength!==void 0&&(t.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(t.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",l.anisotropyTexture)),Promise.all(a)}}class Cb{constructor(e){this.parser=e,this.name=wt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],l=t.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,l)}}class Pb{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const l=a.extensions[t],c=s.images[l.source];let d=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(d=h)}return n.loadTextureImage(e,l.source,d)}}class Lb{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const l=a.extensions[t],c=s.images[l.source];let d=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(d=h)}return n.loadTextureImage(e,l.source,d)}}class Ib{constructor(e){this.name=wt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(c){const d=s.byteOffset||0,h=s.byteLength||0,m=s.count,p=s.byteStride,g=new Uint8Array(c,d,h);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(m,p,g,s.mode,s.filter).then(function(v){return v.buffer}):l.ready.then(function(){const v=new ArrayBuffer(m*p);return l.decodeGltfBuffer(new Uint8Array(v),m,p,g,s.mode,s.filter),v})})}else return null}}class Nb{constructor(e){this.name=wt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const h of s.primitives)if(h.mode!==hi.TRIANGLES&&h.mode!==hi.TRIANGLE_STRIP&&h.mode!==hi.TRIANGLE_FAN&&h.mode!==void 0)return null;const l=n.extensions[this.name].attributes,c=[],d={};for(const h in l)c.push(this.parser.getDependency("accessor",l[h]).then(m=>(d[h]=m,d[h])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(h=>{const m=h.pop(),p=m.isGroup?m.children:[m],g=h[0].count,v=[];for(const S of p){const E=new lt,y=new D,x=new vt,b=new D(1,1,1),L=new GE(S.geometry,S.material,g);for(let w=0;w<g;w++)d.TRANSLATION&&y.fromBufferAttribute(d.TRANSLATION,w),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,w),d.SCALE&&b.fromBufferAttribute(d.SCALE,w),L.setMatrixAt(w,E.compose(y,x,b));for(const w in d)if(w==="_COLOR_0"){const I=d[w];L.instanceColor=new Qf(I.array,I.itemSize,I.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&S.geometry.setAttribute(w,d[w]);Vt.prototype.copy.call(L,S),this.parser.assignFinalMaterial(L),v.push(L)}return m.isGroup?(m.clear(),m.add(...v),m):v[0]}))}}const vx="glTF",Ya=12,kv={JSON:1313821514,BIN:5130562};class Db{constructor(e){this.name=wt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ya),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ya,a=new DataView(e,Ya);let l=0;for(;l<s;){const c=a.getUint32(l,!0);l+=4;const d=a.getUint32(l,!0);if(l+=4,d===kv.JSON){const h=new Uint8Array(e,Ya+l,c);this.content=n.decode(h)}else if(d===kv.BIN){const h=Ya+l;this.body=e.slice(h,h+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ub{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=wt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,l=e.extensions[this.name].attributes,c={},d={},h={};for(const m in l){const p=rp[m]||m.toLowerCase();c[p]=l[m]}for(const m in e.attributes){const p=rp[m]||m.toLowerCase();if(l[m]!==void 0){const g=n.accessors[e.attributes[m]],v=Bo[g.componentType];h[p]=v.name,d[p]=g.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(p,g){s.decodeDracoFile(m,function(v){for(const S in v.attributes){const E=v.attributes[S],y=d[S];y!==void 0&&(E.normalized=y)}p(v)},c,h,Hn,g)})})}}class Ob{constructor(){this.name=wt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Fb{constructor(){this.name=wt.KHR_MESH_QUANTIZATION}}class xx extends _l{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let l=0;l!==s;l++)t[l]=n[a+l];return t}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=c*2,h=c*3,m=s-t,p=(n-t)/m,g=p*p,v=g*p,S=e*h,E=S-h,y=-2*v+3*g,x=v-g,b=1-y,L=x-g+p;for(let w=0;w!==c;w++){const I=l[E+w+c],N=l[E+w+d]*m,U=l[S+w+c],z=l[S+w]*m;a[w]=b*I+L*N+y*U+x*z}return a}}const kb=new vt;class Bb extends xx{interpolate_(e,t,n,s){const a=super.interpolate_(e,t,n,s);return kb.fromArray(a).normalize().toArray(a),a}}const hi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Bo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bv={9728:zn,9729:ni,9984:U0,9985:ec,9986:Ja,9987:gr},Vv={33071:Kr,33648:cc,10497:Go},Yh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vb={CUBICSPLINE:void 0,LINEAR:cl,STEP:ul},qh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new bp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xr})),i.DefaultMaterial}function Es(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Hb(i,e,t){let n=!1,s=!1,a=!1;for(let h=0,m=e.length;h<m;h++){const p=e[h];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(s=!0),p.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(i);const l=[],c=[],d=[];for(let h=0,m=e.length;h<m;h++){const p=e[h];if(n){const g=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):i.attributes.position;l.push(g)}if(s){const g=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):i.attributes.normal;c.push(g)}if(a){const g=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):i.attributes.color;d.push(g)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const m=h[0],p=h[1],g=h[2];return n&&(i.morphAttributes.position=m),s&&(i.morphAttributes.normal=p),a&&(i.morphAttributes.color=g),i.morphTargetsRelative=!0,i})}function Gb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wb(i){let e;const t=i.extensions&&i.extensions[wt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$h(t.attributes):e=i.indices+":"+$h(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+$h(i.targets[n]);return e}function $h(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function sp(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const jb=new lt;class Yb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,a=!1,l=-1;if(typeof navigator<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const d=c.match(/Version\/(\d+)/);s=n&&d?parseInt(d[1],10):-1,a=c.indexOf("Firefox")>-1,l=a?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||a&&l<98?this.textureLoader=new uT(this.options.manager):this.textureLoader=new gT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const c={scene:l[0][s.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:s.asset,parser:n,userData:{}};return Es(a,c,s),Xi(c,s),Promise.all(n._invokeAll(function(d){return d.afterRoot&&d.afterRoot(c)})).then(function(){for(const d of c.scenes)d.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const l=t[s].joints;for(let c=0,d=l.length;c<d;c++)e[l[c]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const l=e[s];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),a=(l,c)=>{const d=this.associations.get(l);d!=null&&this.associations.set(c,d);for(const[h,m]of l.children.entries())a(m,c.children[h])};return a(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,l){return n.getDependency(e,l)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[wt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,l){n.load(rl.resolveURL(t.uri,s.path),a,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const l=Yh[s.type],c=Bo[s.componentType],d=s.normalized===!0,h=new c(s.count*l);return Promise.resolve(new St(h,l,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(l){const c=l[0],d=Yh[s.type],h=Bo[s.componentType],m=h.BYTES_PER_ELEMENT,p=m*d,g=s.byteOffset||0,v=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,S=s.normalized===!0;let E,y;if(v&&v!==p){const x=Math.floor(g/v),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let L=t.cache.get(b);L||(E=new h(c,x*v,s.count*v/m),L=new tx(E,v/m),t.cache.add(b,L)),y=new fl(L,d,g%v/m,S)}else c===null?E=new h(s.count*d):E=new h(c,g,s.count*d),y=new St(E,d,S);if(s.sparse!==void 0){const x=Yh.SCALAR,b=Bo[s.sparse.indices.componentType],L=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,I=new b(l[1],L,s.sparse.count*x),N=new h(l[2],w,s.sparse.count*d);c!==null&&(y=new St(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let U=0,z=I.length;U<z;U++){const C=I[U];if(y.setX(C,N[U*d]),d>=2&&y.setY(C,N[U*d+1]),d>=3&&y.setZ(C,N[U*d+2]),d>=4&&y.setW(C,N[U*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=S}return y})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,l=t.images[a];let c=this.textureLoader;if(l.uri){const d=n.manager.getHandler(l.uri);d!==null&&(c=d)}return this.loadTextureImage(e,a,c)}loadTextureImage(e,t,n){const s=this,a=this.json,l=a.textures[e],c=a.images[t],d=(c.uri||c.bufferView)+":"+l.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,n).then(function(m){m.flipY=!1,m.name=l.name||c.name||"",m.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(m.name=c.uri);const g=(a.samplers||{})[l.sampler]||{};return m.magFilter=Bv[g.magFilter]||ni,m.minFilter=Bv[g.minFilter]||gr,m.wrapS=Vv[g.wrapS]||Go,m.wrapT=Vv[g.wrapT]||Go,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==zn&&m.minFilter!==ni,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const n=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const l=s.images[e],c=self.URL||self.webkitURL;let d=l.uri||"",h=!1;if(l.bufferView!==void 0)d=n.getDependency("bufferView",l.bufferView).then(function(p){h=!0;const g=new Blob([p],{type:l.mimeType});return d=c.createObjectURL(g),d});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(d).then(function(p){return new Promise(function(g,v){let S=g;t.isImageBitmapLoader===!0&&(S=function(E){const y=new fn(E);y.needsUpdate=!0,g(y)}),t.load(rl.resolveURL(p,a.path),S,void 0,v)})}).then(function(p){return h===!0&&c.revokeObjectURL(d),Xi(p,l),p.userData.mimeType=l.mimeType||Xb(l.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),p});return this.sourceCache[e]=m,m}assignTexture(e,t,n,s){const a=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),a.extensions[wt.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[wt.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const d=a.associations.get(l);l=a.extensions[wt.KHR_TEXTURE_TRANSFORM].extendTexture(l,c),a.associations.set(l,d)}}return s!==void 0&&(l.colorSpace=s),e[t]=l,l})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,l=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let d=this.cache.get(c);d||(d=new mc,_i.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,d.sizeAttenuation=!1,this.cache.add(c,d)),n=d}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let d=this.cache.get(c);d||(d=new Jr,_i.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,this.cache.add(c,d)),n=d}if(s||a||l){let c="ClonedMaterial:"+n.uuid+":";s&&(c+="derivative-tangents:"),a&&(c+="vertex-colors:"),l&&(c+="flat-shading:");let d=this.cache.get(c);d||(d=n.clone(),a&&(d.vertexColors=!0),l&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(c,d),this.associations.set(d,this.associations.get(n))),n=d}e.material=n}getMaterialType(){return bp}loadMaterial(e){const t=this,n=this.json,s=this.extensions,a=n.materials[e];let l;const c={},d=a.extensions||{},h=[];if(d[wt.KHR_MATERIALS_UNLIT]){const p=s[wt.KHR_MATERIALS_UNLIT];l=p.getMaterialType(),h.push(p.extendParams(c,a,t))}else{const p=a.pbrMetallicRoughness||{};if(c.color=new Ze(1,1,1),c.opacity=1,Array.isArray(p.baseColorFactor)){const g=p.baseColorFactor;c.color.setRGB(g[0],g[1],g[2],Hn),c.opacity=g[3]}p.baseColorTexture!==void 0&&h.push(t.assignTexture(c,"map",p.baseColorTexture,hn)),c.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,c.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(c,"metalnessMap",p.metallicRoughnessTexture)),h.push(t.assignTexture(c,"roughnessMap",p.metallicRoughnessTexture))),l=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,c)})))}a.doubleSided===!0&&(c.side=fi);const m=a.alphaMode||qh.OPAQUE;if(m===qh.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,m===qh.MASK&&(c.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&l!==gi&&(h.push(t.assignTexture(c,"normalMap",a.normalTexture)),c.normalScale=new Je(1,1),a.normalTexture.scale!==void 0)){const p=a.normalTexture.scale;c.normalScale.set(p,p)}if(a.occlusionTexture!==void 0&&l!==gi&&(h.push(t.assignTexture(c,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&l!==gi){const p=a.emissiveFactor;c.emissive=new Ze().setRGB(p[0],p[1],p[2],Hn)}return a.emissiveTexture!==void 0&&l!==gi&&h.push(t.assignTexture(c,"emissiveMap",a.emissiveTexture,hn)),Promise.all(h).then(function(){const p=new l(c);return a.name&&(p.name=a.name),Xi(p,a),t.associations.set(p,{materials:e}),a.extensions&&Es(s,p,a),p})}createUniqueName(e){const t=Bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function a(c){return n[wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(d){return zv(d,c,t)})}const l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c],m=Wb(h),p=s[m];if(p)l.push(p.promise);else{let g;h.extensions&&h.extensions[wt.KHR_DRACO_MESH_COMPRESSION]?g=a(h):g=zv(new zt,h,t),s[m]={primitive:h,promise:g},l.push(g)}}return Promise.all(l)}loadMesh(e){const t=this,n=this.json,s=this.extensions,a=n.meshes[e],l=a.primitives,c=[];for(let d=0,h=l.length;d<h;d++){const m=l[d].material===void 0?zb(this.cache):this.getDependency("material",l[d].material);c.push(m)}return c.push(t.loadGeometries(l)),Promise.all(c).then(function(d){const h=d.slice(0,d.length-1),m=d[d.length-1],p=[];for(let v=0,S=m.length;v<S;v++){const E=m[v],y=l[v];let x;const b=h[v];if(y.mode===hi.TRIANGLES||y.mode===hi.TRIANGLE_STRIP||y.mode===hi.TRIANGLE_FAN||y.mode===void 0)x=a.isSkinnedMesh===!0?new rx(E,b):new rn(E,b),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),y.mode===hi.TRIANGLE_STRIP?x.geometry=Fv(x.geometry,G0):y.mode===hi.TRIANGLE_FAN&&(x.geometry=Fv(x.geometry,Kf));else if(y.mode===hi.LINES)x=new Zo(E,b);else if(y.mode===hi.LINE_STRIP)x=new Sc(E,b);else if(y.mode===hi.LINE_LOOP)x=new YE(E,b);else if(y.mode===hi.POINTS)x=new ep(E,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(x.geometry.morphAttributes).length>0&&Gb(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),Xi(x,a),y.extensions&&Es(s,x,y),t.assignFinalMaterial(x),p.push(x)}for(let v=0,S=p.length;v<S;v++)t.associations.set(p[v],{meshes:e,primitives:v});if(p.length===1)return a.extensions&&Es(s,p[0],a),p[0];const g=new Mn;a.extensions&&Es(s,g,a),t.associations.set(g,{meshes:e});for(let v=0,S=p.length;v<S;v++)g.add(p[v]);return g})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vn(_t.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Pp(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,a=t.joints.length;s<a;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const a=s.pop(),l=s,c=[],d=[];for(let h=0,m=l.length;h<m;h++){const p=l[h];if(p){c.push(p);const g=new lt;a!==null&&g.fromArray(a.array,h*16),d.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Ko(c,d)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,l=[],c=[],d=[],h=[],m=[];for(let p=0,g=s.channels.length;p<g;p++){const v=s.channels[p],S=s.samplers[v.sampler],E=v.target,y=E.node,x=s.parameters!==void 0?s.parameters[S.input]:S.input,b=s.parameters!==void 0?s.parameters[S.output]:S.output;E.node!==void 0&&(l.push(this.getDependency("node",y)),c.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",b)),h.push(S),m.push(E))}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(d),Promise.all(h),Promise.all(m)]).then(function(p){const g=p[0],v=p[1],S=p[2],E=p[3],y=p[4],x=[];for(let L=0,w=g.length;L<w;L++){const I=g[L],N=v[L],U=S[L],z=E[L],C=y[L];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const R=n._createAnimationTracks(I,N,U,z,C);if(R)for(let B=0;B<R.length;B++)x.push(R[B])}const b=new iT(a,void 0,x);return Xi(b,s),b})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){const l=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&l.traverse(function(c){if(c.isMesh)for(let d=0,h=s.weights.length;d<h;d++)c.morphTargetInfluences[d]=s.weights[d]}),l})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],a=n._loadNodeShallow(e),l=[],c=s.children||[];for(let h=0,m=c.length;h<m;h++)l.push(n.getDependency("node",c[h]));const d=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(l),d]).then(function(h){const m=h[0],p=h[1],g=h[2];g!==null&&m.traverse(function(v){v.isSkinnedMesh&&v.bind(g,jb)});for(let v=0,S=p.length;v<S;v++)m.add(p[v]);return m})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],l=a.name?s.createUniqueName(a.name):"",c=[],d=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&c.push(d),a.camera!==void 0&&c.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)}),this.nodeCache[e]=Promise.all(c).then(function(h){let m;if(a.isBone===!0?m=new sx:h.length>1?m=new Mn:h.length===1?m=h[0]:m=new Vt,m!==h[0])for(let p=0,g=h.length;p<g;p++)m.add(h[p]);if(a.name&&(m.userData.name=a.name,m.name=l),Xi(m,a),a.extensions&&Es(n,m,a),a.matrix!==void 0){const p=new lt;p.fromArray(a.matrix),m.applyMatrix4(p)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);if(!s.associations.has(m))s.associations.set(m,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){const p=s.associations.get(m);s.associations.set(m,{...p})}return s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,a=new Mn;n.name&&(a.name=s.createUniqueName(n.name)),Xi(a,n),n.extensions&&Es(t,a,n);const l=n.nodes||[],c=[];for(let d=0,h=l.length;d<h;d++)c.push(s.getDependency("node",l[d]));return Promise.all(c).then(function(d){for(let m=0,p=d.length;m<p;m++)a.add(d[m]);const h=m=>{const p=new Map;for(const[g,v]of s.associations)(g instanceof _i||g instanceof fn)&&p.set(g,v);return m.traverse(g=>{const v=s.associations.get(g);v!=null&&p.set(g,v)}),p};return s.associations=h(a),a})}_createAnimationTracks(e,t,n,s,a){const l=[],c=e.name?e.name:e.uuid,d=[];jr[a.path]===jr.weights?e.traverse(function(g){g.morphTargetInfluences&&d.push(g.name?g.name:g.uuid)}):d.push(c);let h;switch(jr[a.path]){case jr.weights:h=jo;break;case jr.rotation:h=Yo;break;case jr.translation:case jr.scale:h=qo;break;default:switch(n.itemSize){case 1:h=jo;break;case 2:case 3:default:h=qo;break}break}const m=s.interpolation!==void 0?Vb[s.interpolation]:cl,p=this._getArrayFromAccessor(n);for(let g=0,v=d.length;g<v;g++){const S=new h(d[g]+"."+jr[a.path],t.array,p,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),l.push(S)}return l}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=sp(t.constructor),s=new Float32Array(t.length);for(let a=0,l=t.length;a<l;a++)s[a]=t[a]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Yo?Bb:xx;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qb(i,e,t){const n=e.attributes,s=new yr;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],d=c.min,h=c.max;if(d!==void 0&&h!==void 0){if(s.set(new D(d[0],d[1],d[2]),new D(h[0],h[1],h[2])),c.normalized){const m=sp(Bo[c.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const c=new D,d=new D;for(let h=0,m=a.length;h<m;h++){const p=a[h];if(p.POSITION!==void 0){const g=t.json.accessors[p.POSITION],v=g.min,S=g.max;if(v!==void 0&&S!==void 0){if(d.setX(Math.max(Math.abs(v[0]),Math.abs(S[0]))),d.setY(Math.max(Math.abs(v[1]),Math.abs(S[1]))),d.setZ(Math.max(Math.abs(v[2]),Math.abs(S[2]))),g.normalized){const E=sp(Bo[g.componentType]);d.multiplyScalar(E)}c.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}i.boundingBox=s;const l=new Ki;s.getCenter(l.center),l.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=l}function zv(i,e,t){const n=e.attributes,s=[];function a(l,c){return t.getDependency("accessor",l).then(function(d){i.setAttribute(c,d)})}for(const l in n){const c=rp[l]||l.toLowerCase();c in i.attributes||s.push(a(n[l],c))}if(e.indices!==void 0&&!i.index){const l=t.getDependency("accessor",e.indices).then(function(c){i.setIndex(c)});s.push(l)}return bt.workingColorSpace!==Hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Xi(i,e),qb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Hb(i,e.targets,t):i})}/*!
 * @pixiv/three-vrm v3.4.4
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var Ku=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),It=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Hv=class extends Vt{constructor(i){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${i}`,this.expressionName=i,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(i){this._binds.push(i)}deleteBind(i){const e=this._binds.indexOf(i);e>=0&&this._binds.splice(e,1)}applyWeight(i){var e;let t=this.outputWeight;t*=(e=i?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(i=>i.clearAppliedWeight())}};function yx(i,e,t){var n,s;const a=i.parser.json,l=(n=a.nodes)==null?void 0:n[e];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const c=l.mesh;if(c==null)return null;const d=(s=a.meshes)==null?void 0:s[c];if(d==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${c}] of glTF but the mesh doesn't exist`),null;const h=d.primitives.length,m=[];return t.traverse(p=>{m.length<h&&p.isMesh&&m.push(p)}),m}function Gv(i,e){return It(this,null,function*(){const t=yield i.parser.getDependency("node",e);return yx(i,e,t)})}function Wv(i){return It(this,null,function*(){const e=yield i.parser.getDependencies("node"),t=new Map;return e.forEach((n,s)=>{const a=yx(i,s,n);a!=null&&t.set(s,a)}),t})}var op={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Mx(i){return Math.max(Math.min(i,1),0)}var Xv=class Sx{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(op));return Object.entries(this._expressionMap).forEach(([n,s])=>{t.has(n)&&(e[n]=s)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(op));return Object.entries(this._expressionMap).forEach(([n,s])=>{t.has(n)||(e[n]=s)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new Sx().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const n=this.getExpression(e);return(t=n?.weight)!=null?t:null}setValue(e,t){const n=this.getExpression(e);n&&(n.weight=Mx(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1;const s=t.expressionName;this.blinkExpressionNames.indexOf(s)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(s)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(s)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(s=>{e-=s.overrideBlinkAmount,t-=s.overrideLookAtAmount,n-=s.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},qa={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",RimColor:"rimColor",OutlineColor:"outlineColor"},$b={_Color:qa.Color,_EmissionColor:qa.EmissionColor,_ShadeColor:qa.ShadeColor,_RimColor:qa.RimColor,_OutlineColor:qa.OutlineColor},Kb=new Ze,Ex=class Tx{constructor({material:e,type:t,targetValue:n,targetAlpha:s}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=s??1;const a=this._initColorBindState(),l=this._initAlphaBindState();this._state={color:a,alpha:l}}applyWeight(e){const{color:t,alpha:n}=this._state;if(t!=null){const{propertyName:s,deltaValue:a}=t,l=this.material[s];l?.add(Kb.copy(a).multiplyScalar(e))}if(n!=null){const{propertyName:s,deltaValue:a}=n;this.material[s]!=null&&(this.material[s]+=a*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:n,initialValue:s}=e,a=this.material[n];a?.copy(s)}if(t!=null){const{propertyName:n,initialValue:s}=t;this.material[n]!=null&&(this.material[n]=s)}}_initColorBindState(){var e,t,n;const{material:s,type:a,targetValue:l}=this,c=this._getPropertyNameMap(),d=(t=(e=c?.[a])==null?void 0:e[0])!=null?t:null;if(d==null)return console.warn(`Tried to add a material color bind to the material ${(n=s.name)!=null?n:"(no name)"}, the type ${a} but the material or the type is not supported.`),null;const m=s[d].clone(),p=new Ze(l.r-m.r,l.g-m.g,l.b-m.b);return{propertyName:d,initialValue:m,deltaValue:p}}_initAlphaBindState(){var e,t,n;const{material:s,type:a,targetAlpha:l}=this,c=this._getPropertyNameMap(),d=(t=(e=c?.[a])==null?void 0:e[1])!=null?t:null;if(d==null&&l!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=s.name)!=null?n:"(no name)"}, the type ${a} but the material or the type does not support alpha.`),null;if(d==null)return null;const h=s[d],m=l-h;return{propertyName:d,initialValue:h,deltaValue:m}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(Tx._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};Ex._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var jv=Ex,gc=class{constructor({primitives:i,index:e,weight:t}){this.primitives=i,this.index=e,this.weight=t}applyWeight(i){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*i)})}clearAppliedWeight(){this.primitives.forEach(i=>{var e;((e=i.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(i.morphTargetInfluences[this.index]=0)})}},Yv=new Je,wx=class Ax{constructor({material:e,scale:t,offset:n}){var s,a;this.material=e,this.scale=t,this.offset=n;const l=(s=Object.entries(Ax._propertyNamesMap).find(([c])=>e[c]===!0))==null?void 0:s[1];l==null?(console.warn(`Tried to add a texture transform bind to the material ${(a=e.name)!=null?a:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],l.forEach(c=>{var d;const h=(d=e[c])==null?void 0:d.clone();if(!h)return null;e[c]=h;const m=h.offset.clone(),p=h.repeat.clone(),g=n.clone().sub(m),v=t.clone().sub(p);this._properties.push({name:c,initialOffset:m,deltaOffset:g,initialScale:p,deltaScale:v})}))}applyWeight(e){this._properties.forEach(t=>{const n=this.material[t.name];n!==void 0&&(n.offset.add(Yv.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(Yv.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};wx._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var qv=wx,Zb=new Set(["1.0","1.0-beta"]),Rx=class bx{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return It(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return It(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const n=yield this._v0Import(e);return n||null})}_v1Import(e){return It(this,null,function*(){var t,n;const s=this.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const l=(n=s.extensions)==null?void 0:n.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!Zb.has(c))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const d=l.expressions;if(!d)return null;const h=new Set(Object.values(op)),m=new Map;d.preset!=null&&Object.entries(d.preset).forEach(([g,v])=>{if(v!=null){if(!h.has(g)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${g}" detected. Ignoring the expression`);return}m.set(g,v)}}),d.custom!=null&&Object.entries(d.custom).forEach(([g,v])=>{if(h.has(g)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${g}". Ignoring the expression`);return}m.set(g,v)});const p=new Xv;return yield Promise.all(Array.from(m.entries()).map(g=>It(this,[g],function*([v,S]){var E,y,x,b,L,w,I;const N=new Hv(v);if(e.scene.add(N),N.isBinary=(E=S.isBinary)!=null?E:!1,N.overrideBlink=(y=S.overrideBlink)!=null?y:"none",N.overrideLookAt=(x=S.overrideLookAt)!=null?x:"none",N.overrideMouth=(b=S.overrideMouth)!=null?b:"none",(L=S.morphTargetBinds)==null||L.forEach(U=>It(this,null,function*(){var z;if(U.node===void 0||U.index===void 0)return;const C=yield Gv(e,U.node),R=U.index;if(!C.every(B=>Array.isArray(B.morphTargetInfluences)&&R<B.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${S.name} attempts to index morph #${R} but not found.`);return}N.addBind(new gc({primitives:C,index:R,weight:(z=U.weight)!=null?z:1}))})),S.materialColorBinds||S.textureTransformBinds){const U=[];e.scene.traverse(z=>{const C=z.material;C&&(Array.isArray(C)?U.push(...C):U.push(C))}),(w=S.materialColorBinds)==null||w.forEach(z=>It(this,null,function*(){U.filter(R=>{var B;const q=(B=this.parser.associations.get(R))==null?void 0:B.materials;return z.material===q}).forEach(R=>{N.addBind(new jv({material:R,type:z.type,targetValue:new Ze().fromArray(z.targetValue),targetAlpha:z.targetValue[3]}))})})),(I=S.textureTransformBinds)==null||I.forEach(z=>It(this,null,function*(){U.filter(R=>{var B;const q=(B=this.parser.associations.get(R))==null?void 0:B.materials;return z.material===q}).forEach(R=>{var B,q;N.addBind(new qv({material:R,offset:new Je().fromArray((B=z.offset)!=null?B:[0,0]),scale:new Je().fromArray((q=z.scale)!=null?q:[1,1])}))})}))}p.registerExpression(N)}))),p})}_v0Import(e){return It(this,null,function*(){var t;const n=this.parser.json,s=(t=n.extensions)==null?void 0:t.VRM;if(!s)return null;const a=s.blendShapeMaster;if(!a)return null;const l=new Xv,c=a.blendShapeGroups;if(!c)return l;const d=new Set;return yield Promise.all(c.map(h=>It(this,null,function*(){var m;const p=h.presetName,g=p!=null&&bx.v0v1PresetNameMap[p]||null,v=g??h.name;if(v==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(d.has(v)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${p} has duplicated entries. Ignoring the expression`);return}d.add(v);const S=new Hv(v);e.scene.add(S),S.isBinary=(m=h.isBinary)!=null?m:!1,h.binds&&h.binds.forEach(y=>It(this,null,function*(){var x;if(y.mesh===void 0||y.index===void 0)return;const b=[];(x=n.nodes)==null||x.forEach((w,I)=>{w.mesh===y.mesh&&b.push(I)});const L=y.index;yield Promise.all(b.map(w=>It(this,null,function*(){var I;const N=yield Gv(e,w);if(!N.every(U=>Array.isArray(U.morphTargetInfluences)&&L<U.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${h.name} attempts to index ${L}th morph but not found.`);return}S.addBind(new gc({primitives:N,index:L,weight:.01*((I=y.weight)!=null?I:100)}))})))}));const E=h.materialValues;E&&E.length!==0&&E.forEach(y=>{if(y.materialName===void 0||y.propertyName===void 0||y.targetValue===void 0)return;const x=[];e.scene.traverse(L=>{if(L.material){const w=L.material;Array.isArray(w)?x.push(...w.filter(I=>(I.name===y.materialName||I.name===y.materialName+" (Outline)")&&x.indexOf(I)===-1)):w.name===y.materialName&&x.indexOf(w)===-1&&x.push(w)}});const b=y.propertyName;x.forEach(L=>{if(b==="_MainTex_ST"){const I=new Je(y.targetValue[0],y.targetValue[1]),N=new Je(y.targetValue[2],y.targetValue[3]);N.y=1-N.y-I.y,S.addBind(new qv({material:L,scale:I,offset:N}));return}const w=$b[b];if(w){S.addBind(new jv({material:L,type:w,targetValue:new Ze().fromArray(y.targetValue),targetAlpha:y.targetValue[3]}));return}console.warn(b+" is not supported")})}),l.registerExpression(S)}))),l})}};Rx.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var Qb=Rx,Up=class Do{constructor(e,t){this._firstPersonOnlyLayer=Do.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Do.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Do(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Do.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Do.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(s=>{n.type==="firstPersonOnly"?(s.layers.set(this._firstPersonOnlyLayer),s.traverse(a=>a.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(s.layers.set(this._thirdPersonOnlyLayer),s.traverse(a=>a.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(s)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,s){let a=0;if(t!=null&&t.length>0)for(let l=0;l<e.length;l+=3){const c=e[l],d=e[l+1],h=e[l+2],m=t[c],p=n[c];if(m[0]>0&&s.includes(p[0])||m[1]>0&&s.includes(p[1])||m[2]>0&&s.includes(p[2])||m[3]>0&&s.includes(p[3]))continue;const g=t[d],v=n[d];if(g[0]>0&&s.includes(v[0])||g[1]>0&&s.includes(v[1])||g[2]>0&&s.includes(v[2])||g[3]>0&&s.includes(v[3]))continue;const S=t[h],E=n[h];S[0]>0&&s.includes(E[0])||S[1]>0&&s.includes(E[1])||S[2]>0&&s.includes(E[2])||S[3]>0&&s.includes(E[3])||(e[a++]=c,e[a++]=d,e[a++]=h)}return a}_createErasedMesh(e,t){const n=new rx(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);const s=n.geometry,a=s.getAttribute("skinIndex"),l=a instanceof dv?[]:a.array,c=[];for(let E=0;E<l.length;E+=4)c.push([l[E],l[E+1],l[E+2],l[E+3]]);const d=s.getAttribute("skinWeight"),h=d instanceof dv?[]:d.array,m=[];for(let E=0;E<h.length;E+=4)m.push([h[E],h[E+1],h[E+2],h[E+3]]);const p=s.getIndex();if(!p)throw new Error("The geometry doesn't have an index buffer");const g=Array.from(p.array),v=this._excludeTriangles(g,m,c,t),S=[];for(let E=0;E<v;E++)S[E]=g[E];return s.setIndex(S),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new Ko(e.skeleton.bones,e.skeleton.boneInverses),new lt),n}_createHeadlessModelForSkinnedMesh(e,t){const n=[];if(t.skeleton.bones.forEach((a,l)=>{this._isEraseTarget(a)&&n.push(l)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const s=this._createErasedMesh(t,n);e.add(s)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new Mn;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{const s=n;this._createHeadlessModelForSkinnedMesh(t,s)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Up.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Up.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var $v=Up,Jb=new Set(["1.0","1.0-beta"]),eC=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(i){this.parser=i}afterRoot(i){return It(this,null,function*(){const e=i.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");i.userData.vrmFirstPerson=yield this._import(i,e)}})}_import(i,e){return It(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(i,e);if(t)return t;const n=yield this._v0Import(i,e);return n||null})}_v1Import(i,e){return It(this,null,function*(){var t,n;const s=this.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const l=(n=s.extensions)==null?void 0:n.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!Jb.has(c))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const d=l.firstPerson,h=[],m=yield Wv(i);return Array.from(m.entries()).forEach(([p,g])=>{var v,S;const E=(v=d?.meshAnnotations)==null?void 0:v.find(y=>y.node===p);h.push({meshes:g,type:(S=E?.type)!=null?S:"auto"})}),new $v(e,h)})}_v0Import(i,e){return It(this,null,function*(){var t;const n=this.parser.json,s=(t=n.extensions)==null?void 0:t.VRM;if(!s)return null;const a=s.firstPerson;if(!a)return null;const l=[],c=yield Wv(i);return Array.from(c.entries()).forEach(([d,h])=>{const m=n.nodes[d],p=a.meshAnnotations?a.meshAnnotations.find(g=>g.mesh===m.mesh):void 0;l.push({meshes:h,type:this._convertV0FlagToV1Type(p?.firstPersonFlag)})}),new $v(e,l)})}_convertV0FlagToV1Type(i){return i==="FirstPersonOnly"?"firstPersonOnly":i==="ThirdPersonOnly"?"thirdPersonOnly":i==="Both"?"both":"auto"}},Kv=new D,Zv=new D,tC=new vt,Qv=class extends Mn{constructor(i){super(),this.vrmHumanoid=i,this._boneAxesMap=new Map,Object.values(i.humanBones).forEach(e=>{const t=new bT(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(i=>{i.geometry.dispose(),i.material.dispose()})}updateMatrixWorld(i){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Kv,tC,Zv);const n=Kv.set(.1,.1,.1).divide(Zv);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(i)}},Kh=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],nC={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function Cx(i){return i.invert?i.invert():i.inverse(),i}var Ts=new D,ws=new vt,ap=class{constructor(i){this.humanBones=i,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const i={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);n&&(Ts.copy(n.position),ws.copy(n.quaternion),i[t]={position:Ts.toArray(),rotation:ws.toArray()})}),i}getPose(){const i={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);if(!n)return;Ts.set(0,0,0),ws.identity();const s=this.restPose[t];s?.position&&Ts.fromArray(s.position).negate(),s?.rotation&&Cx(ws.fromArray(s.rotation)),Ts.add(n.position),ws.premultiply(n.quaternion),i[t]={position:Ts.toArray(),rotation:ws.toArray()}}),i}setPose(i){Object.entries(i).forEach(([e,t])=>{const n=e,s=this.getBoneNode(n);if(!s)return;const a=this.restPose[n];a&&(t?.position&&(s.position.fromArray(t.position),a.position&&s.position.add(Ts.fromArray(a.position))),t?.rotation&&(s.quaternion.fromArray(t.rotation),a.rotation&&s.quaternion.multiply(ws.fromArray(a.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([i,e])=>{const t=this.getBoneNode(i);t&&(e?.position&&t.position.fromArray(e.position),e?.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(i){var e;return(e=this.humanBones[i])!=null?e:void 0}getBoneNode(i){var e,t;return(t=(e=this.humanBones[i])==null?void 0:e.node)!=null?t:null}},Zh=new D,iC=new vt,rC=new D,Jv=class Px extends ap{static _setupTransforms(e){const t=new Vt;t.name="VRMHumanoidRig";const n={},s={},a={};Kh.forEach(c=>{var d;const h=e.getBoneNode(c);if(h){const m=new D,p=new vt;h.updateWorldMatrix(!0,!1),h.matrixWorld.decompose(m,p,Zh),n[c]=m,s[c]=h.quaternion.clone();const g=new vt;(d=h.parent)==null||d.matrixWorld.decompose(Zh,g,Zh),a[c]=g}});const l={};return Kh.forEach(c=>{var d;const h=e.getBoneNode(c);if(h){const m=n[c];let p=c,g;for(;g==null&&(p=nC[p],p!=null);)g=n[p];const v=new Vt;v.name="Normalized_"+h.name,(p?(d=l[p])==null?void 0:d.node:t).add(v),v.position.copy(m),g&&v.position.sub(g),l[c]={node:v}}}),{rigBones:l,root:t,parentWorldRotations:a,boneRotations:s}}constructor(e){const{rigBones:t,root:n,parentWorldRotations:s,boneRotations:a}=Px._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=s,this._boneRotations=a}update(){Kh.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const n=this.getBoneNode(e),s=this._parentWorldRotations[e],a=iC.copy(s).invert(),l=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(s).premultiply(a).multiply(l),e==="hips"){const c=n.getWorldPosition(rC);t.parent.updateWorldMatrix(!0,!1);const d=t.parent.matrixWorld,h=c.applyMatrix4(d.invert());t.position.copy(h)}}})}},e0=class Lx{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new ap(e),this._normalizedHumanBones=new Jv(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new ap(e.humanBones),this._normalizedHumanBones=new Jv(this._rawHumanBones),this}clone(){return new Lx(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},sC={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},oC=new Set(["1.0","1.0-beta"]),t0={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},aC=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(i){return It(this,null,function*(){i.userData.vrmHumanoid=yield this._import(i)})}_import(i){return It(this,null,function*(){const e=yield this._v1Import(i);if(e)return e;const t=yield this._v0Import(i);return t||null})}_v1Import(i){return It(this,null,function*(){var e,t;const n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const a=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!a)return null;const l=a.specVersion;if(!oC.has(l))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${l}"`),null;const c=a.humanoid;if(!c)return null;const d=c.humanBones.leftThumbIntermediate!=null||c.humanBones.rightThumbIntermediate!=null,h={};c.humanBones!=null&&(yield Promise.all(Object.entries(c.humanBones).map(p=>It(this,[p],function*([g,v]){let S=g;const E=v.node;if(d){const x=t0[S];x!=null&&(S=x)}const y=yield this.parser.getDependency("node",E);if(y==null){console.warn(`A glTF node bound to the humanoid bone ${S} (index = ${E}) does not exist`);return}h[S]={node:y}}))));const m=new e0(this._ensureRequiredBonesExist(h),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(m.normalizedHumanBonesRoot),this.helperRoot){const p=new Qv(m);this.helperRoot.add(p),p.renderOrder=this.helperRoot.renderOrder}return m})}_v0Import(i){return It(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const s=n.humanoid;if(!s)return null;const a={};s.humanBones!=null&&(yield Promise.all(s.humanBones.map(c=>It(this,null,function*(){const d=c.bone,h=c.node;if(d==null||h==null)return;const m=yield this.parser.getDependency("node",h);if(m==null){console.warn(`A glTF node bound to the humanoid bone ${d} (index = ${h}) does not exist`);return}const p=t0[d],g=p??d;if(a[g]!=null){console.warn(`Multiple bone entries for ${g} detected (index = ${h}), ignoring duplicated entries.`);return}a[g]={node:m}}))));const l=new e0(this._ensureRequiredBonesExist(a),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(l.normalizedHumanBonesRoot),this.helperRoot){const c=new Qv(l);this.helperRoot.add(c),c.renderOrder=this.helperRoot.renderOrder}return l})}_ensureRequiredBonesExist(i){const e=Object.values(sC).filter(t=>i[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return i}},n0=class extends zt{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new St(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,i=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let i=0;i<64;i++){const e=i/63*this._currentTheta;this._attrPos.setXYZ(i+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<63;i++)this._attrIndex.setXYZ(i*3,0,i+1,i+2);this._attrIndex.needsUpdate=!0}},lC=class extends zt{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new D,this._currentTail=new D,this._attrPos=new St(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Zu=new vt,i0=new vt,$a=new D,r0=new D,s0=Math.sqrt(2)/2,uC=new vt(0,0,-s0,s0),cC=new D(0,1,0),dC=class extends Mn{constructor(i){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=i;{const e=new n0;e.radius=.5;const t=new gi({color:65280,transparent:!0,opacity:.5,side:fi,depthTest:!1,depthWrite:!1});this._meshPitch=new rn(e,t),this.add(this._meshPitch)}{const e=new n0;e.radius=.5;const t=new gi({color:16711680,transparent:!0,opacity:.5,side:fi,depthTest:!1,depthWrite:!1});this._meshYaw=new rn(e,t),this.add(this._meshYaw)}{const e=new lC;e.radius=.1;const t=new Jr({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Zo(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(i){const e=_t.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=_t.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition($a),this.vrmLookAt.getLookAtWorldQuaternion(Zu),Zu.multiply(this.vrmLookAt.getFaceFrontQuaternion(i0)),this._meshYaw.position.copy($a),this._meshYaw.quaternion.copy(Zu),this._meshPitch.position.copy($a),this._meshPitch.quaternion.copy(Zu),this._meshPitch.quaternion.multiply(i0.setFromAxisAngle(cC,e)),this._meshPitch.quaternion.multiply(uC);const{target:n,autoUpdate:s}=this.vrmLookAt;n!=null&&s&&(n.getWorldPosition(r0).sub($a),this._lineTarget.geometry.tail.copy(r0),this._lineTarget.geometry.update(),this._lineTarget.position.copy($a)),super.updateMatrixWorld(i)}},hC=new D,fC=new D;function lp(i,e){return i.matrixWorld.decompose(hC,e,fC),e}function oc(i){return[Math.atan2(-i.z,i.x),Math.atan2(i.y,Math.sqrt(i.x*i.x+i.z*i.z))]}function o0(i){const e=Math.round(i/2/Math.PI);return i-2*Math.PI*e}var a0=new D(0,0,1),pC=new D,mC=new D,gC=new D,_C=new vt,Qh=new vt,l0=new vt,vC=new vt,Jh=new ii,Ix=class Nx{constructor(e,t){this.offsetFromHeadBone=new D,this.autoUpdate=!0,this.faceFront=new D(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new vt)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new ii)}getEuler(e){return e.set(_t.DEG2RAD*this._pitch,_t.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new Nx(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return lp(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(a0)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,n]=oc(this.faceFront);return Jh.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(Jh).premultiply(vC.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Qh),this.getFaceFrontQuaternion(l0),e.copy(a0).applyQuaternion(Qh).applyQuaternion(l0).applyEuler(this.getEuler(Jh))}lookAt(e){const t=_C.copy(this._restHeadWorldQuaternion).multiply(Cx(this.getLookAtWorldQuaternion(Qh))),n=this.getLookAtWorldPosition(mC),s=gC.copy(e).sub(n).applyQuaternion(t).normalize(),[a,l]=oc(this.faceFront),[c,d]=oc(s),h=o0(c-a),m=o0(l-d);this._yaw=_t.RAD2DEG*h,this._pitch=_t.RAD2DEG*m,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(pC)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Ix.EULER_ORDER="YXZ";var xC=Ix,yC=new D(0,0,1),Hi=new vt,Po=new vt,di=new ii(0,0,0,"YXZ"),ac=class{constructor(i,e,t,n,s){this.humanoid=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=s,this.faceFront=new D(0,0,1),this._restQuatLeftEye=new vt,this._restQuatRightEye=new vt,this._restLeftEyeParentWorldQuat=new vt,this._restRightEyeParentWorldQuat=new vt;const a=this.humanoid.getRawBoneNode("leftEye"),l=this.humanoid.getRawBoneNode("rightEye");a&&(this._restQuatLeftEye.copy(a.quaternion),lp(a.parent,this._restLeftEyeParentWorldQuat)),l&&(this._restQuatRightEye.copy(l.quaternion),lp(l.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(i,e){const t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),s=this.humanoid.getNormalizedBoneNode("leftEye"),a=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?di.x=-_t.DEG2RAD*this.rangeMapVerticalDown.map(-e):di.x=_t.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?di.y=-_t.DEG2RAD*this.rangeMapHorizontalInner.map(-i):di.y=_t.DEG2RAD*this.rangeMapHorizontalOuter.map(i),Hi.setFromEuler(di),this._getWorldFaceFrontQuat(Po),s.quaternion.copy(Po).multiply(Hi).multiply(Po.invert()),Hi.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(s.quaternion).multiply(Hi).premultiply(Hi.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?di.x=-_t.DEG2RAD*this.rangeMapVerticalDown.map(-e):di.x=_t.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?di.y=-_t.DEG2RAD*this.rangeMapHorizontalOuter.map(-i):di.y=_t.DEG2RAD*this.rangeMapHorizontalInner.map(i),Hi.setFromEuler(di),this._getWorldFaceFrontQuat(Po),a.quaternion.copy(Po).multiply(Hi).multiply(Po.invert()),Hi.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(a.quaternion).multiply(Hi).premultiply(Hi.invert()).multiply(this._restQuatRightEye))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=_t.RAD2DEG*i.y,t=_t.RAD2DEG*i.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(i){if(this.faceFront.distanceToSquared(yC)<.01)return i.identity();const[e,t]=oc(this.faceFront);return di.set(0,.5*Math.PI+e,t,"YZX"),i.setFromEuler(di)}};ac.type="bone";var up=class{constructor(i,e,t,n,s){this.expressions=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=s}applyYawPitch(i,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),i<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-i))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(i)))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=_t.RAD2DEG*i.y,t=_t.RAD2DEG*i.x;this.applyYawPitch(e,t)}};up.type="expression";var u0=class{constructor(i,e){this.inputMaxValue=i,this.outputScale=e}map(i){return this.outputScale*Mx(i/this.inputMaxValue)}},MC=new Set(["1.0","1.0-beta"]),Qu=.01,SC=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot}afterRoot(i){return It(this,null,function*(){const e=i.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=i.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");i.userData.vrmLookAt=yield this._import(i,e,t)}})}_import(i,e,t){return It(this,null,function*(){if(e==null||t==null)return null;const n=yield this._v1Import(i,e,t);if(n)return n;const s=yield this._v0Import(i,e,t);return s||null})}_v1Import(i,e,t){return It(this,null,function*(){var n,s,a;const l=this.parser.json;if(!(((n=l.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;const d=(s=l.extensions)==null?void 0:s.VRMC_vrm;if(!d)return null;const h=d.specVersion;if(!MC.has(h))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${h}"`),null;const m=d.lookAt;if(!m)return null;const p=m.type==="expression"?1:10,g=this._v1ImportRangeMap(m.rangeMapHorizontalInner,p),v=this._v1ImportRangeMap(m.rangeMapHorizontalOuter,p),S=this._v1ImportRangeMap(m.rangeMapVerticalDown,p),E=this._v1ImportRangeMap(m.rangeMapVerticalUp,p);let y;m.type==="expression"?y=new up(t,g,v,S,E):y=new ac(e,g,v,S,E);const x=this._importLookAt(e,y);return x.offsetFromHeadBone.fromArray((a=m.offsetFromHeadBone)!=null?a:[0,.06,0]),x})}_v1ImportRangeMap(i,e){var t,n;let s=(t=i?.inputMaxValue)!=null?t:90;const a=(n=i?.outputScale)!=null?n:e;return s<Qu&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),s=Qu),new u0(s,a)}_v0Import(i,e,t){return It(this,null,function*(){var n,s,a,l;const d=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!d)return null;const h=d.firstPerson;if(!h)return null;const m=h.lookAtTypeName==="BlendShape"?1:10,p=this._v0ImportDegreeMap(h.lookAtHorizontalInner,m),g=this._v0ImportDegreeMap(h.lookAtHorizontalOuter,m),v=this._v0ImportDegreeMap(h.lookAtVerticalDown,m),S=this._v0ImportDegreeMap(h.lookAtVerticalUp,m);let E;h.lookAtTypeName==="BlendShape"?E=new up(t,p,g,v,S):E=new ac(e,p,g,v,S);const y=this._importLookAt(e,E);return h.firstPersonBoneOffset?y.offsetFromHeadBone.set((s=h.firstPersonBoneOffset.x)!=null?s:0,(a=h.firstPersonBoneOffset.y)!=null?a:.06,-((l=h.firstPersonBoneOffset.z)!=null?l:0)):y.offsetFromHeadBone.set(0,.06,0),y.faceFront.set(0,0,-1),E instanceof ac&&E.faceFront.set(0,0,-1),y})}_v0ImportDegreeMap(i,e){var t,n;const s=i?.curve;JSON.stringify(s)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let a=(t=i?.xRange)!=null?t:90;const l=(n=i?.yRange)!=null?n:e;return a<Qu&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),a=Qu),new u0(a,l)}_importLookAt(i,e){const t=new xC(i,e);if(this.helperRoot){const n=new dC(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function EC(i,e){return typeof i!="string"||i===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(i)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(i)||/^data:.*,.*$/i.test(i)||/^blob:.*$/i.test(i)?i:e+i)}var TC=new Set(["1.0","1.0-beta"]),wC=class{get name(){return"VRMMetaLoaderPlugin"}constructor(i,e){var t,n,s;this.parser=i,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e?.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(s=e?.acceptV0Meta)!=null?s:!0}afterRoot(i){return It(this,null,function*(){i.userData.vrmMeta=yield this._import(i)})}_import(i){return It(this,null,function*(){const e=yield this._v1Import(i);if(e!=null)return e;const t=yield this._v0Import(i);return t??null})}_v1Import(i){return It(this,null,function*(){var e,t,n;const s=this.parser.json;if(!(((e=s.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const l=(t=s.extensions)==null?void 0:t.VRMC_vrm;if(l==null)return null;const c=l.specVersion;if(!TC.has(c))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const d=l.meta;if(!d)return null;const h=d.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(h))throw new Error(`VRMMetaLoaderPlugin: The license url "${h}" is not accepted`);let p;return this.needThumbnailImage&&d.thumbnailImage!=null&&(p=(n=yield this._extractGLTFImage(d.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:d.name,version:d.version,authors:d.authors,copyrightInformation:d.copyrightInformation,contactInformation:d.contactInformation,references:d.references,thirdPartyLicenses:d.thirdPartyLicenses,thumbnailImage:p,licenseUrl:d.licenseUrl,avatarPermission:d.avatarPermission,allowExcessivelyViolentUsage:d.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:d.allowExcessivelySexualUsage,commercialUsage:d.commercialUsage,allowPoliticalOrReligiousUsage:d.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:d.allowAntisocialOrHateUsage,creditNotation:d.creditNotation,allowRedistribution:d.allowRedistribution,modification:d.modification,otherLicenseUrl:d.otherLicenseUrl}})}_v0Import(i){return It(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const s=n.meta;if(!s)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let a;return this.needThumbnailImage&&s.texture!=null&&s.texture!==-1&&(a=yield this.parser.getDependency("texture",s.texture)),{metaVersion:"0",allowedUserName:s.allowedUserName,author:s.author,commercialUssageName:s.commercialUssageName,contactInformation:s.contactInformation,licenseName:s.licenseName,otherLicenseUrl:s.otherLicenseUrl,otherPermissionUrl:s.otherPermissionUrl,reference:s.reference,sexualUssageName:s.sexualUssageName,texture:a??void 0,title:s.title,version:s.version,violentUssageName:s.violentUssageName}})}_extractGLTFImage(i){return It(this,null,function*(){var e;const n=(e=this.parser.json.images)==null?void 0:e[i];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image doesn't exist`),null;let s=n.uri;if(n.bufferView!=null){const l=yield this.parser.getDependency("bufferView",n.bufferView),c=new Blob([l],{type:n.mimeType});s=URL.createObjectURL(c)}return s==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new hx().loadAsync(EC(s,this.parser.options.path)).catch(l=>(console.error(l),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},AC=class{constructor(i){this.scene=i.scene,this.meta=i.meta,this.humanoid=i.humanoid,this.expressionManager=i.expressionManager,this.firstPerson=i.firstPerson,this.lookAt=i.lookAt}update(i){this.humanoid.update(),this.lookAt&&this.lookAt.update(i),this.expressionManager&&this.expressionManager.update()}},RC=class extends AC{constructor(i){super(i),this.materials=i.materials,this.springBoneManager=i.springBoneManager,this.nodeConstraintManager=i.nodeConstraintManager}update(i){super.update(i),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(i),this.materials&&this.materials.forEach(e=>{e.update&&e.update(i)})}},bC=Object.defineProperty,c0=Object.getOwnPropertySymbols,CC=Object.prototype.hasOwnProperty,PC=Object.prototype.propertyIsEnumerable,d0=(i,e,t)=>e in i?bC(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,h0=(i,e)=>{for(var t in e||(e={}))CC.call(e,t)&&d0(i,t,e[t]);if(c0)for(var t of c0(e))PC.call(e,t)&&d0(i,t,e[t]);return i},Ns=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),LC={"":3e3,srgb:3001};function IC(i,e){parseInt(Ds,10)>=152?i.colorSpace=e:i.encoding=LC[e]}var NC=class{get pending(){return Promise.all(this._pendings)}constructor(i,e){this._parser=i,this._materialParams=e,this._pendings=[]}assignPrimitive(i,e){e!=null&&(this._materialParams[i]=e)}assignColor(i,e,t){if(e!=null){const n=new Ze().fromArray(e);t&&n.convertSRGBToLinear(),this._materialParams[i]=n}}assignTexture(i,e,t){return Ns(this,null,function*(){const n=Ns(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,i,e),t&&IC(this._materialParams[i],"srgb"))});return this._pendings.push(n),n})}assignTextureByIndex(i,e,t){return Ns(this,null,function*(){return this.assignTexture(i,e!=null?{index:e}:void 0,t)})}},DC=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,UC=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,OC={None:"none"},f0={None:"none",ScreenCoordinates:"screenCoordinates"},FC={3e3:"",3001:"srgb"};function ef(i){return parseInt(Ds,10)>=152?i.colorSpace:FC[i.encoding]}var kC=class extends Ii{constructor(i={}){var e;super({vertexShader:DC,fragmentShader:UC}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=yp,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=OC.None,this._outlineWidthMode=f0.None,this._isOutline=!1,i.transparentWithZWrite&&(i.depthWrite=!0),delete i.transparentWithZWrite,i.fog=!0,i.lights=!0,i.clipping=!0,this.uniforms=Q0.merge([Ce.common,Ce.normalmap,Ce.emissivemap,Ce.fog,Ce.lights,{litFactor:{value:new Ze(1,1,1)},mapUvTransform:{value:new ot},colorAlpha:{value:1},normalMapUvTransform:{value:new ot},shadeColorFactor:{value:new Ze(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new ot},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new ot},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Ze(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new ot},parametricRimColorFactor:{value:new Ze(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new ot},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new Ze(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new ot},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new ot},outlineWidthFactor:{value:0},outlineColorFactor:{value:new Ze(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new ot},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=i.uniforms)!=null?e:{}]),this.setValues(i),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${ef(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${ef(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${ef(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const n=parseInt(Ds,10),s=Object.entries(h0(h0({},this._generateDefines()),this.defines)).filter(([a,l])=>!!l).map(([a,l])=>`#define ${a} ${l}`).join(`
`)+`
`;t.vertexShader=s+t.vertexShader,t.fragmentShader=s+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(i){this.uniforms.litFactor.value=i}get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}get normalMap(){return this.uniforms.normalMap.value}set normalMap(i){this.uniforms.normalMap.value=i}get normalScale(){return this.uniforms.normalScale.value}set normalScale(i){this.uniforms.normalScale.value=i}get emissive(){return this.uniforms.emissive.value}set emissive(i){this.uniforms.emissive.value=i}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(i){this.uniforms.emissiveIntensity.value=i}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(i){this.uniforms.emissiveMap.value=i}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(i){this.uniforms.shadeColorFactor.value=i}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(i){this.uniforms.shadeMultiplyTexture.value=i}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(i){this.uniforms.shadingShiftFactor.value=i}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(i){this.uniforms.shadingShiftTexture.value=i}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(i){this.uniforms.shadingShiftTextureScale.value=i}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(i){this.uniforms.shadingToonyFactor.value=i}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(i){this.uniforms.giEqualizationFactor.value=i}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(i){this.uniforms.matcapFactor.value=i}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(i){this.uniforms.matcapTexture.value=i}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(i){this.uniforms.parametricRimColorFactor.value=i}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(i){this.uniforms.rimMultiplyTexture.value=i}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(i){this.uniforms.rimLightingMixFactor.value=i}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(i){this.uniforms.parametricRimFresnelPowerFactor.value=i}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(i){this.uniforms.parametricRimLiftFactor.value=i}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(i){this.uniforms.outlineWidthMultiplyTexture.value=i}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(i){this.uniforms.outlineWidthFactor.value=i}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(i){this.uniforms.outlineColorFactor.value=i}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(i){this.uniforms.outlineLightingMixFactor.value=i}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(i){this.uniforms.uvAnimationMaskTexture.value=i}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(i){this.uniforms.uvAnimationScrollXOffset.value=i}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(i){this.uniforms.uvAnimationScrollYOffset.value=i}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(i){this.uniforms.uvAnimationRotationPhase.value=i}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(i){this._ignoreVertexColor=i,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(i){this._v0CompatShade=i,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(i){this._debugMode=i,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(i){this._outlineWidthMode=i,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(i){this._isOutline=i,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(i){this._uploadUniformsWorkaround(),this._updateUVAnimation(i)}copy(i){return super.copy(i),this.map=i.map,this.normalMap=i.normalMap,this.emissiveMap=i.emissiveMap,this.shadeMultiplyTexture=i.shadeMultiplyTexture,this.shadingShiftTexture=i.shadingShiftTexture,this.matcapTexture=i.matcapTexture,this.rimMultiplyTexture=i.rimMultiplyTexture,this.outlineWidthMultiplyTexture=i.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=i.uvAnimationMaskTexture,this.normalMapType=i.normalMapType,this.uvAnimationScrollXSpeedFactor=i.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=i.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=i.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=i.ignoreVertexColor,this.v0CompatShade=i.v0CompatShade,this.debugMode=i.debugMode,this.outlineWidthMode=i.outlineWidthMode,this.isOutline=i.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(i){this.uniforms.uvAnimationScrollXOffset.value+=i*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=i*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=i*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const i=parseInt(Ds,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:i,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===f0.ScreenCoordinates}}_updateTextureMatrix(i,e){i.value&&(i.value.matrixAutoUpdate&&i.value.updateMatrix(),e.value.copy(i.value.matrix))}},BC=new Set(["1.0","1.0-beta"]),Dx=class lc{get name(){return lc.EXTENSION_NAME}constructor(e,t={}){var n,s,a,l;this.parser=e,this.materialType=(n=t.materialType)!=null?n:kC,this.renderOrderOffset=(s=t.renderOrderOffset)!=null?s:0,this.v0CompatShade=(a=t.v0CompatShade)!=null?a:!1,this.debugMode=(l=t.debugMode)!=null?l:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Ns(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Ns(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return Ns(this,null,function*(){var t;const n=this.parser,a=(t=n.json.meshes)==null?void 0:t[e];if(a==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const l=a.primitives,c=yield n.loadMesh(e);if(l.length===1){const d=c,h=l[0].material;h!=null&&this._setupPrimitive(d,h)}else{const d=c;for(let h=0;h<l.length;h++){const m=d.children[h],p=l[h].material;p!=null&&this._setupPrimitive(m,p)}}return c})}_removeUnlitExtensionIfMToonExists(){const n=this.parser.json.materials;n?.map((s,a)=>{var l;this._getMToonExtension(a)&&((l=s.extensions)!=null&&l.KHR_materials_unlit)&&delete s.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;const l=(t=this.parser.json.materials)==null?void 0:t[e];if(l==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const c=(n=l.extensions)==null?void 0:n[lc.EXTENSION_NAME];if(c==null)return;const d=c.specVersion;if(!BC.has(d)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${lc.EXTENSION_NAME} specVersion "${d}"`);return}return c}_extendMaterialParams(e,t){return Ns(this,null,function*(){var n;delete t.metalness,delete t.roughness;const s=new NC(this.parser,t);s.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),s.assignColor("shadeColorFactor",e.shadeColorFactor),s.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),s.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),s.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),s.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),s.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),s.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),s.assignColor("matcapFactor",e.matcapFactor),s.assignTexture("matcapTexture",e.matcapTexture,!0),s.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),s.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),s.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),s.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),s.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),s.assignPrimitive("outlineWidthMode",e.outlineWidthMode),s.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),s.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),s.assignColor("outlineColorFactor",e.outlineColorFactor),s.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),s.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),s.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),s.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),s.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),s.assignPrimitive("v0CompatShade",this.v0CompatShade),s.assignPrimitive("debugMode",this.debugMode),yield s.pending})}_setupPrimitive(e,t){const n=this._getMToonExtension(t);if(n){const s=this._parseRenderOrder(n);e.renderOrder=s+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof _i)||!this._shouldGenerateOutline(t))return;e.material=[t];const n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=In,e.material.push(n);const s=e.geometry,a=s.index?s.index.count:s.attributes.position.count/3;s.addGroup(0,a,0),s.addGroup(0,a,1)}_addToMaterialSet(e){const t=e.material,n=new Set;Array.isArray(t)?t.forEach(s=>n.add(s)):n.add(t);for(const s of n)this._mToonMaterialSet.add(s)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};Dx.EXTENSION_NAME="VRMC_materials_mtoon";var VC=Dx,zC=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Ux=class cp{get name(){return cp.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return zC(this,null,function*(){const n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const s=n.emissiveMultiplier;t.emissiveIntensity=s})}_getHDREmissiveMultiplierExtension(e){var t,n;const l=(t=this.parser.json.materials)==null?void 0:t[e];if(l==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const c=(n=l.extensions)==null?void 0:n[cp.EXTENSION_NAME];if(c!=null)return c}};Ux.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var HC=Ux,GC=Object.defineProperty,WC=Object.defineProperties,XC=Object.getOwnPropertyDescriptors,p0=Object.getOwnPropertySymbols,jC=Object.prototype.hasOwnProperty,YC=Object.prototype.propertyIsEnumerable,m0=(i,e,t)=>e in i?GC(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Gi=(i,e)=>{for(var t in e||(e={}))jC.call(e,t)&&m0(i,t,e[t]);if(p0)for(var t of p0(e))YC.call(e,t)&&m0(i,t,e[t]);return i},g0=(i,e)=>WC(i,XC(e)),qC=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())});function Lo(i){return Math.pow(i,2.2)}var $C=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(i){var e;this.parser=i,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return qC(this,null,function*(){var i;const e=this.parser.json,t=(i=e.extensions)==null?void 0:i.VRM,n=t?.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((s,a)=>{var l,c;const d=(l=e.materials)==null?void 0:l[a];if(d==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${a}] of glTF but the material doesn't exist`);return}if(s.shader==="VRM/MToon"){const h=this._parseV0MToonProperties(s,d);e.materials[a]=h}else if((c=s.shader)!=null&&c.startsWith("VRM/Unlit")){const h=this._parseV0UnlitProperties(s,d);e.materials[a]=h}else s.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${s.shader}`)}))})}_parseV0MToonProperties(i,e){var t,n,s,a,l,c,d,h,m,p,g,v,S,E,y,x,b,L,w,I,N,U,z,C,R,B,q,K,he,oe,ae,ue,G,le,Y,F,Q,Re,be,Oe,ee,se,xe,Ne,De,mt,tn,V,Nt,ct,et,Be,Ut,Ve,ut;const Ht=(n=(t=i.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,O=((s=i.floatProperties)==null?void 0:s._ZWrite)===1&&Ht,A=this._v0ParseRenderQueue(i),J=(l=(a=i.keywordMap)==null?void 0:a._ALPHATEST_ON)!=null?l:!1,fe=Ht?"BLEND":J?"MASK":"OPAQUE",me=J?(d=(c=i.floatProperties)==null?void 0:c._Cutoff)!=null?d:.5:void 0,$e=((m=(h=i.floatProperties)==null?void 0:h._CullMode)!=null?m:2)===0,ye=this._portTextureTransform(i),ze=((g=(p=i.vectorProperties)==null?void 0:p._Color)!=null?g:[1,1,1,1]).map((ie,re)=>re===3?ie:Lo(ie)),Ye=(v=i.textureProperties)==null?void 0:v._MainTex,Ee=Ye!=null?{index:Ye,extensions:Gi({},ye)}:void 0,Le=(E=(S=i.floatProperties)==null?void 0:S._BumpScale)!=null?E:1,tt=(y=i.textureProperties)==null?void 0:y._BumpMap,je=tt!=null?{index:tt,scale:Le,extensions:Gi({},ye)}:void 0,Pe=((b=(x=i.vectorProperties)==null?void 0:x._EmissionColor)!=null?b:[0,0,0,1]).map(Lo),dt=(L=i.textureProperties)==null?void 0:L._EmissionMap,W=dt!=null?{index:dt,extensions:Gi({},ye)}:void 0,Se=((I=(w=i.vectorProperties)==null?void 0:w._ShadeColor)!=null?I:[.97,.81,.86,1]).map(Lo),we=(N=i.textureProperties)==null?void 0:N._ShadeTexture,Ue=we!=null?{index:we,extensions:Gi({},ye)}:void 0;let ve=(z=(U=i.floatProperties)==null?void 0:U._ShadeShift)!=null?z:0,pe=(R=(C=i.floatProperties)==null?void 0:C._ShadeToony)!=null?R:.9;pe=_t.lerp(pe,1,.5+.5*ve),ve=-ve-(1-pe);const He=(q=(B=i.floatProperties)==null?void 0:B._IndirectLightIntensity)!=null?q:.1,ht=He?1-He:void 0,Ct=(K=i.textureProperties)==null?void 0:K._SphereAdd,At=Ct!=null?[1,1,1]:void 0,Gn=Ct!=null?{index:Ct}:void 0,gn=(oe=(he=i.floatProperties)==null?void 0:he._RimLightingMix)!=null?oe:0,Zi=(ae=i.textureProperties)==null?void 0:ae._RimTexture,Nn=Zi!=null?{index:Zi,extensions:Gi({},ye)}:void 0,es=((G=(ue=i.vectorProperties)==null?void 0:ue._RimColor)!=null?G:[0,0,0,1]).map(Lo),Ui=(Y=(le=i.floatProperties)==null?void 0:le._RimFresnelPower)!=null?Y:1,Qi=(Q=(F=i.floatProperties)==null?void 0:F._RimLift)!=null?Q:0,vi=["none","worldCoordinates","screenCoordinates"][(be=(Re=i.floatProperties)==null?void 0:Re._OutlineWidthMode)!=null?be:0];let Oi=(ee=(Oe=i.floatProperties)==null?void 0:Oe._OutlineWidth)!=null?ee:0;Oi=.01*Oi;const Ji=(se=i.textureProperties)==null?void 0:se._OutlineWidthTexture,Fs=Ji!=null?{index:Ji,extensions:Gi({},ye)}:void 0,ks=((Ne=(xe=i.vectorProperties)==null?void 0:xe._OutlineColor)!=null?Ne:[0,0,0]).map(Lo),Bs=((mt=(De=i.floatProperties)==null?void 0:De._OutlineColorMode)!=null?mt:0)===1?(V=(tn=i.floatProperties)==null?void 0:tn._OutlineLightingMix)!=null?V:1:0,ts=(Nt=i.textureProperties)==null?void 0:Nt._UvAnimMaskTexture,na=ts!=null?{index:ts,extensions:Gi({},ye)}:void 0,Vs=(et=(ct=i.floatProperties)==null?void 0:ct._UvAnimScrollX)!=null?et:0;let er=(Ut=(Be=i.floatProperties)==null?void 0:Be._UvAnimScrollY)!=null?Ut:0;er!=null&&(er=-er);const P=(ut=(Ve=i.floatProperties)==null?void 0:Ve._UvAnimRotation)!=null?ut:0,$={specVersion:"1.0",transparentWithZWrite:O,renderQueueOffsetNumber:A,shadeColorFactor:Se,shadeMultiplyTexture:Ue,shadingShiftFactor:ve,shadingToonyFactor:pe,giEqualizationFactor:ht,matcapFactor:At,matcapTexture:Gn,rimLightingMixFactor:gn,rimMultiplyTexture:Nn,parametricRimColorFactor:es,parametricRimFresnelPowerFactor:Ui,parametricRimLiftFactor:Qi,outlineWidthMode:vi,outlineWidthFactor:Oi,outlineWidthMultiplyTexture:Fs,outlineColorFactor:ks,outlineLightingMixFactor:Bs,uvAnimationMaskTexture:na,uvAnimationScrollXSpeedFactor:Vs,uvAnimationScrollYSpeedFactor:er,uvAnimationRotationSpeedFactor:P};return g0(Gi({},e),{pbrMetallicRoughness:{baseColorFactor:ze,baseColorTexture:Ee},normalTexture:je,emissiveTexture:W,emissiveFactor:Pe,alphaMode:fe,alphaCutoff:me,doubleSided:$e,extensions:{VRMC_materials_mtoon:$}})}_parseV0UnlitProperties(i,e){var t,n,s,a,l;const c=i.shader==="VRM/UnlitTransparentZWrite",d=i.shader==="VRM/UnlitTransparent"||c,h=this._v0ParseRenderQueue(i),m=i.shader==="VRM/UnlitCutout",p=d?"BLEND":m?"MASK":"OPAQUE",g=m?(n=(t=i.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,v=this._portTextureTransform(i),S=((a=(s=i.vectorProperties)==null?void 0:s._Color)!=null?a:[1,1,1,1]).map(Lo),E=(l=i.textureProperties)==null?void 0:l._MainTex,y=E!=null?{index:E,extensions:Gi({},v)}:void 0,x={specVersion:"1.0",transparentWithZWrite:c,renderQueueOffsetNumber:h,shadeColorFactor:S,shadeMultiplyTexture:y};return g0(Gi({},e),{pbrMetallicRoughness:{baseColorFactor:S,baseColorTexture:y},alphaMode:p,alphaCutoff:g,extensions:{VRMC_materials_mtoon:x}})}_portTextureTransform(i){var e,t,n,s,a;const l=(e=i.vectorProperties)==null?void 0:e._MainTex;if(l==null)return{};const c=[(t=l?.[0])!=null?t:0,(n=l?.[1])!=null?n:0],d=[(s=l?.[2])!=null?s:1,(a=l?.[3])!=null?a:1];return c[1]=1-d[1]-c[1],{KHR_texture_transform:{offset:c,scale:d}}}_v0ParseRenderQueue(i){var e,t;const n=i.shader==="VRM/UnlitTransparentZWrite",s=((e=i.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||n,a=((t=i.floatProperties)==null?void 0:t._ZWrite)===1||n;let l=0;if(s){const c=i.renderQueue;c!=null&&(a?l=this._renderQueueMapTransparentZWrite.get(c):l=this._renderQueueMapTransparent.get(c))}return l}_populateRenderQueueMap(i){const e=new Set,t=new Set;i.forEach(n=>{var s,a;const l=n.shader==="VRM/UnlitTransparentZWrite",c=((s=n.keywordMap)==null?void 0:s._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||l,d=((a=n.floatProperties)==null?void 0:a._ZWrite)===1||l;if(c){const h=n.renderQueue;h!=null&&(d?t.add(h):e.add(h))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,s)=>{const a=Math.min(Math.max(s-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,a)}),Array.from(t).sort().forEach((n,s)=>{const a=Math.min(Math.max(s,0),9);this._renderQueueMapTransparentZWrite.set(n,a)})}},_0=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Yr=new D,tf=class extends Mn{constructor(i){super(),this._attrPosition=new St(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(KS);const e=new zt;e.setAttribute("position",this._attrPosition);const t=new Jr({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Sc(e,t),this.add(this._line),this.constraint=i}updateMatrixWorld(i){Yr.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,Yr.x,Yr.y,Yr.z),this.constraint.source&&Yr.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,Yr.x,Yr.y,Yr.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(i)}};function v0(i,e){return e.set(i.elements[12],i.elements[13],i.elements[14])}var KC=new D,ZC=new D;function QC(i,e){return i.decompose(KC,e,ZC),e}function _c(i){return i.invert?i.invert():i.inverse(),i}var Op=class{constructor(i,e){this.destination=i,this.source=e,this.weight=1}},JC=new D,eP=new D,tP=new D,nP=new vt,iP=new vt,rP=new vt,sP=class extends Op{get aimAxis(){return this._aimAxis}set aimAxis(i){this._aimAxis=i,this._v3AimAxis.set(i==="PositiveX"?1:i==="NegativeX"?-1:0,i==="PositiveY"?1:i==="NegativeY"?-1:0,i==="PositiveZ"?1:i==="NegativeZ"?-1:0)}get dependencies(){const i=new Set([this.source]);return this.destination.parent&&i.add(this.destination.parent),i}constructor(i,e){super(i,e),this._aimAxis="PositiveX",this._v3AimAxis=new D(1,0,0),this._dstRestQuat=new vt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const i=nP.identity(),e=iP.identity();this.destination.parent&&(QC(this.destination.parent.matrixWorld,i),_c(e.copy(i)));const t=JC.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(i),n=v0(this.source.matrixWorld,eP).sub(v0(this.destination.matrixWorld,tP)).normalize(),s=rP.setFromUnitVectors(t,n).premultiply(e).multiply(i).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(s,this.weight)}};function oP(i,e){const t=[i];let n=i.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(s=>{e(s)})}var aP=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(i){this._constraints.add(i);let e=this._objectConstraintsMap.get(i.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(i.destination,e)),e.add(i)}deleteConstraint(i){this._constraints.delete(i),this._objectConstraintsMap.get(i.destination).delete(i)}setInitState(){const i=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,i,e,n=>n.setInitState())}update(){const i=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,i,e,n=>n.update())}_processConstraint(i,e,t,n){if(t.has(i))return;if(e.has(i))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(i);const s=i.dependencies;for(const a of s)oP(a,l=>{const c=this._objectConstraintsMap.get(l);if(c)for(const d of c)this._processConstraint(d,e,t,n)});n(i),t.add(i)}},lP=new vt,uP=new vt,cP=class extends Op{get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._dstRestQuat=new vt,this._invSrcRestQuat=new vt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),_c(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const i=lP.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=uP.copy(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},dP=new D,hP=new vt,fP=new vt,pP=class extends Op{get rollAxis(){return this._rollAxis}set rollAxis(i){this._rollAxis=i,this._v3RollAxis.set(i==="X"?1:0,i==="Y"?1:0,i==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._rollAxis="X",this._v3RollAxis=new D(1,0,0),this._dstRestQuat=new vt,this._invDstRestQuat=new vt,this._invSrcRestQuatMulDstRestQuat=new vt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),_c(this._invDstRestQuat.copy(this._dstRestQuat)),_c(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const i=hP.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=dP.copy(this._v3RollAxis).applyQuaternion(i),n=fP.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},mP=new Set(["1.0","1.0-beta"]),Ox=class tl{get name(){return tl.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return _0(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return _0(this,null,function*(){var t;const n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(tl.EXTENSION_NAME))!==-1))return null;const a=new aP,l=yield this.parser.getDependencies("node");return l.forEach((c,d)=>{var h;const m=n.nodes[d],p=(h=m?.extensions)==null?void 0:h[tl.EXTENSION_NAME];if(p==null)return;const g=p.specVersion;if(!mP.has(g)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${tl.EXTENSION_NAME} specVersion "${g}"`);return}const v=p.constraint;if(v.roll!=null){const S=this._importRollConstraint(c,l,v.roll);a.addConstraint(S)}else if(v.aim!=null){const S=this._importAimConstraint(c,l,v.aim);a.addConstraint(S)}else if(v.rotation!=null){const S=this._importRotationConstraint(c,l,v.rotation);a.addConstraint(S)}}),e.scene.updateMatrixWorld(),a.setInitState(),a})}_importRollConstraint(e,t,n){const{source:s,rollAxis:a,weight:l}=n,c=t[s],d=new pP(e,c);if(a!=null&&(d.rollAxis=a),l!=null&&(d.weight=l),this.helperRoot){const h=new tf(d);this.helperRoot.add(h)}return d}_importAimConstraint(e,t,n){const{source:s,aimAxis:a,weight:l}=n,c=t[s],d=new sP(e,c);if(a!=null&&(d.aimAxis=a),l!=null&&(d.weight=l),this.helperRoot){const h=new tf(d);this.helperRoot.add(h)}return d}_importRotationConstraint(e,t,n){const{source:s,weight:a}=n,l=t[s],c=new cP(e,l);if(a!=null&&(c.weight=a),this.helperRoot){const d=new tf(c);this.helperRoot.add(d)}return c}};Ox.EXTENSION_NAME="VRMC_node_constraint";var gP=Ox,Ju=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Fp=class{},nf=new D,As=new D,Fx=class extends Fp{get type(){return"capsule"}constructor(i){var e,t,n,s;super(),this.offset=(e=i?.offset)!=null?e:new D(0,0,0),this.tail=(t=i?.tail)!=null?t:new D(0,0,0),this.radius=(n=i?.radius)!=null?n:0,this.inside=(s=i?.inside)!=null?s:!1}calculateCollision(i,e,t,n){nf.setFromMatrixPosition(i),As.subVectors(this.tail,this.offset).applyMatrix4(i),As.sub(nf);const s=As.lengthSq();n.copy(e).sub(nf);const a=As.dot(n);a<=0||(s<=a||As.multiplyScalar(a/s),n.sub(As));const l=n.length(),c=this.inside?this.radius-t-l:l-t-this.radius;return c<0&&(n.multiplyScalar(1/l),this.inside&&n.negate()),c}},rf=new D,x0=new ot,kx=class extends Fp{get type(){return"plane"}constructor(i){var e,t;super(),this.offset=(e=i?.offset)!=null?e:new D(0,0,0),this.normal=(t=i?.normal)!=null?t:new D(0,0,1)}calculateCollision(i,e,t,n){n.setFromMatrixPosition(i),n.negate().add(e),x0.getNormalMatrix(i),rf.copy(this.normal).applyNormalMatrix(x0).normalize();const s=n.dot(rf)-t;return n.copy(rf),s}},_P=new D,Bx=class extends Fp{get type(){return"sphere"}constructor(i){var e,t,n;super(),this.offset=(e=i?.offset)!=null?e:new D(0,0,0),this.radius=(t=i?.radius)!=null?t:0,this.inside=(n=i?.inside)!=null?n:!1}calculateCollision(i,e,t,n){n.subVectors(e,_P.setFromMatrixPosition(i));const s=n.length(),a=this.inside?this.radius-t-s:s-t-this.radius;return a<0&&(n.multiplyScalar(1/s),this.inside&&n.negate()),a}},Wi=new D,vP=class extends zt{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new D,this._currentTail=new D,this._shape=i,this._attrPos=new St(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0);const t=Wi.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),i=!0),i&&this._buildPosition()}_buildPosition(){Wi.copy(this._currentTail).sub(this._currentOffset);const i=Wi.length()/this._currentRadius;for(let n=0;n<=16;n++){const s=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(s),-Math.cos(s),0),this._attrPos.setXYZ(17+n,i+Math.sin(s),Math.cos(s),0),this._attrPos.setXYZ(34+n,-Math.sin(s),0,-Math.cos(s)),this._attrPos.setXYZ(51+n,i+Math.sin(s),0,Math.cos(s))}for(let n=0;n<32;n++){const s=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(s),Math.cos(s)),this._attrPos.setXYZ(100+n,i,Math.sin(s),Math.cos(s))}const e=Math.atan2(Wi.y,Math.sqrt(Wi.x*Wi.x+Wi.z*Wi.z)),t=-Math.atan2(Wi.z,Wi.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<34;i++){const e=(i+1)%34;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(68+i*2,34+i,34+e)}for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(136+i*2,68+i,68+e),this._attrIndex.setXY(200+i*2,100+i,100+e)}this._attrIndex.needsUpdate=!0}},xP=class extends zt{constructor(i){super(),this.worldScale=1,this._currentOffset=new D,this._currentNormal=new D,this._shape=i,this._attrPos=new St(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},yP=class extends zt{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new D,this._shape=i,this._attrPos=new St(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.needsUpdate=!0}},MP=new D,sf=class extends Mn{constructor(i){if(super(),this.matrixAutoUpdate=!1,this.collider=i,this.collider.shape instanceof Bx)this._geometry=new yP(this.collider.shape);else if(this.collider.shape instanceof Fx)this._geometry=new vP(this.collider.shape);else if(this.collider.shape instanceof kx)this._geometry=new xP(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new Jr({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Zo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=MP.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},SP=class extends zt{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new D,this._springBone=i,this._attrPos=new St(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},EP=new D,TP=class extends Mn{constructor(i){super(),this.matrixAutoUpdate=!1,this.springBone=i,this._geometry=new SP(this.springBone);const e=new Jr({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Zo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=EP.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},of=class extends Vt{constructor(i){super(),this.colliderMatrix=new lt,this.shape=i}updateWorldMatrix(i,e){super.updateWorldMatrix(i,e),wP(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function wP(i,e,t){const n=e.elements;i.copy(e),t&&(i.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],i.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],i.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}var AP=new lt;function RP(i){return i.invert?i.invert():i.getInverse(AP.copy(i)),i}var bP=class{constructor(i){this._inverseCache=new lt,this._shouldUpdateInverse=!0,this.matrix=i;const e={set:(t,n,s)=>(this._shouldUpdateInverse=!0,t[n]=s,!0)};this._originalElements=i.elements,i.elements=new Proxy(i.elements,e)}get inverse(){return this._shouldUpdateInverse&&(RP(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},af=new lt,Io=new D,Ka=new D,Za=new D,Qa=new D,CP=new lt,PP=class{constructor(i,e,t={},n=[]){this._currentTail=new D,this._prevTail=new D,this._boneAxis=new D,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new lt,this._initialLocalRotation=new vt,this._initialLocalChildPosition=new D;var s,a,l,c,d,h;this.bone=i,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(s=t.hitRadius)!=null?s:0,stiffness:(a=t.stiffness)!=null?a:1,gravityPower:(l=t.gravityPower)!=null?l:0,gravityDir:(d=(c=t.gravityDir)==null?void 0:c.clone())!=null?d:new D(0,-1,0),dragForce:(h=t.dragForce)!=null?h:.4},this.colliderGroups=n}get dependencies(){const i=new Set,e=this.bone.parent;e&&i.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)i.add(this.colliderGroups[t].colliders[n]);return i}get center(){return this._center}set center(i){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=i,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new bP(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:af}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail)}update(i){if(i<=0)return;this._calcWorldSpaceBoneLength();const e=Ka.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Qa.copy(this._currentTail).add(Io.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*i).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*i),Za.setFromMatrixPosition(this.bone.matrixWorld),Qa.sub(Za).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Za),this._collision(Qa),this._prevTail.copy(this._currentTail),this._currentTail.copy(Qa).applyMatrix4(this._getMatrixWorldToCenter());const t=CP.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,Io.copy(Qa).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(i){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){const n=this.colliderGroups[e].colliders[t],s=n.shape.calculateCollision(n.colliderMatrix,i,this.settings.hitRadius,Io);if(s<0){i.addScaledVector(Io,-s),i.sub(Za);const a=i.length();i.multiplyScalar(this._worldSpaceBoneLength/a).add(Za)}}}_calcWorldSpaceBoneLength(){Io.setFromMatrixPosition(this.bone.matrixWorld),this.child?Ka.setFromMatrixPosition(this.child.matrixWorld):(Ka.copy(this._initialLocalChildPosition),Ka.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=Io.sub(Ka).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:af}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:af}};function LP(i,e){const t=[];let n=i;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(s=>{e(s)})}function dp(i,e){i.children.forEach(t=>{e(t)||dp(t,e)})}function IP(i){var e;const t=new Map;for(const n of i){let s=n;do{const a=((e=t.get(s))!=null?e:0)+1;if(a===i.size)return s;t.set(s,a),s=s.parent}while(s!==null)}return null}var y0=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const i=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{i.add(t)})}),Array.from(i)}get colliders(){const i=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{i.add(t)})}),Array.from(i)}addJoint(i){this._joints.add(i);let e=this._objectSpringBonesMap.get(i.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(i.bone,e)),e.add(i),this._isSortedJointsDirty=!0}addSpringBone(i){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(i)}deleteJoint(i){this._joints.delete(i),this._objectSpringBonesMap.get(i.bone).delete(i),this._isSortedJointsDirty=!0}deleteSpringBone(i){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(i)}setInitState(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){const e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){const e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(i){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(i),dp(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;const i=[],e=new Set,t=new Set,n=new Set;for(const a of this._joints)this._insertJointSort(a,e,t,i,n);this._sortedJoints=i;const s=IP(n);this._ancestors=[],s&&(this._ancestors.push(s),dp(s,a=>{var l,c;return((c=(l=this._objectSpringBonesMap.get(a))==null?void 0:l.size)!=null?c:0)>0?!0:(this._ancestors.push(a),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(i,e,t,n,s){if(t.has(i))return;if(e.has(i)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(i);const a=i.dependencies;for(const l of a){let c=!1,d=null;LP(l,h=>{const m=this._objectSpringBonesMap.get(h);if(m)for(const p of m)c=!0,this._insertJointSort(p,e,t,n,s);else c||(d=h)}),d&&s.add(d)}n.push(i),t.add(i)}_relevantChildrenUpdated(i){var e,t;return((t=(e=this._objectSpringBonesMap.get(i))==null?void 0:e.size)!=null?t:0)>0?!0:(i.updateWorldMatrix(!1,!1),!1)}},M0="VRMC_springBone_extended_collider",NP=new Set(["1.0","1.0-beta"]),DP=new Set(["1.0"]),Vx=class Uo{get name(){return Uo.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(n=t?.useExtendedColliders)!=null?n:!0}afterRoot(e){return Ju(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Ju(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const n=yield this._v0Import(e);return n??null})}_v1Import(e){return Ju(this,null,function*(){var t,n,s,a,l;const c=e.parser.json;if(!(((t=c.extensionsUsed)==null?void 0:t.indexOf(Uo.EXTENSION_NAME))!==-1))return null;const h=new y0,m=yield e.parser.getDependencies("node"),p=(n=c.extensions)==null?void 0:n[Uo.EXTENSION_NAME];if(!p)return null;const g=p.specVersion;if(!NP.has(g))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Uo.EXTENSION_NAME} specVersion "${g}"`),null;const v=(s=p.colliders)==null?void 0:s.map((E,y)=>{var x,b,L,w,I,N,U,z,C,R,B,q,K,he,oe;const ae=m[E.node];if(ae==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${y} attempted to use the node #${E.node} but not found`),null;const ue=E.shape,G=(x=E.extensions)==null?void 0:x[M0];if(this.useExtendedColliders&&G!=null){const le=G.specVersion;if(!DP.has(le))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${M0} specVersion "${le}". Fallbacking to the ${Uo.EXTENSION_NAME} definition`);else{const Y=G.shape;if(Y.sphere)return this._importSphereCollider(ae,{offset:new D().fromArray((b=Y.sphere.offset)!=null?b:[0,0,0]),radius:(L=Y.sphere.radius)!=null?L:0,inside:(w=Y.sphere.inside)!=null?w:!1});if(Y.capsule)return this._importCapsuleCollider(ae,{offset:new D().fromArray((I=Y.capsule.offset)!=null?I:[0,0,0]),radius:(N=Y.capsule.radius)!=null?N:0,tail:new D().fromArray((U=Y.capsule.tail)!=null?U:[0,0,0]),inside:(z=Y.capsule.inside)!=null?z:!1});if(Y.plane)return this._importPlaneCollider(ae,{offset:new D().fromArray((C=Y.plane.offset)!=null?C:[0,0,0]),normal:new D().fromArray((R=Y.plane.normal)!=null?R:[0,0,1])})}}if(ue.sphere)return this._importSphereCollider(ae,{offset:new D().fromArray((B=ue.sphere.offset)!=null?B:[0,0,0]),radius:(q=ue.sphere.radius)!=null?q:0,inside:!1});if(ue.capsule)return this._importCapsuleCollider(ae,{offset:new D().fromArray((K=ue.capsule.offset)!=null?K:[0,0,0]),radius:(he=ue.capsule.radius)!=null?he:0,tail:new D().fromArray((oe=ue.capsule.tail)!=null?oe:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${y} has no valid shape`)}),S=(a=p.colliderGroups)==null?void 0:a.map((E,y)=>{var x;return{colliders:((x=E.colliders)!=null?x:[]).flatMap(L=>{const w=v?.[L];return w??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${y} attempted to use a collider #${L} but not found`),[])}),name:E.name}});return(l=p.springs)==null||l.forEach((E,y)=>{var x;const b=E.joints,L=(x=E.colliderGroups)==null?void 0:x.map(N=>{const U=S?.[N];if(U==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${y} attempted to use a colliderGroup ${N} but not found`);return U}),w=E.center!=null?m[E.center]:void 0;let I;b.forEach(N=>{if(I){const U=I.node,z=m[U],C=N.node,R=m[C],B={hitRadius:I.hitRadius,dragForce:I.dragForce,gravityPower:I.gravityPower,stiffness:I.stiffness,gravityDir:I.gravityDir!=null?new D().fromArray(I.gravityDir):void 0},q=this._importJoint(z,R,B,L);w&&(q.center=w),h.addJoint(q)}I=N})}),h.setInitState(),h})}_v0Import(e){return Ju(this,null,function*(){var t,n,s;const a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const c=(n=a.extensions)==null?void 0:n.VRM,d=c?.secondaryAnimation;if(!d)return null;const h=d?.boneGroups;if(!h)return null;const m=new y0,p=yield e.parser.getDependencies("node"),g=(s=d.colliderGroups)==null?void 0:s.map(v=>{var S;const E=p[v.node];return{colliders:((S=v.colliders)!=null?S:[]).map((x,b)=>{var L,w,I;const N=new D(0,0,0);return x.offset&&N.set((L=x.offset.x)!=null?L:0,(w=x.offset.y)!=null?w:0,x.offset.z?-x.offset.z:0),this._importSphereCollider(E,{offset:N,radius:(I=x.radius)!=null?I:0,inside:!1})})}});return h?.forEach((v,S)=>{const E=v.bones;E&&E.forEach(y=>{var x,b,L,w;const I=p[y],N=new D;v.gravityDir?N.set((x=v.gravityDir.x)!=null?x:0,(b=v.gravityDir.y)!=null?b:0,(L=v.gravityDir.z)!=null?L:0):N.set(0,-1,0);const U=v.center!=null?p[v.center]:void 0,z={hitRadius:v.hitRadius,dragForce:v.dragForce,gravityPower:v.gravityPower,stiffness:v.stiffiness,gravityDir:N},C=(w=v.colliderGroups)==null?void 0:w.map(R=>{const B=g?.[R];if(B==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${S} attempted to use a colliderGroup ${R} but not found`);return B});I.traverse(R=>{var B;const q=(B=R.children[0])!=null?B:null,K=this._importJoint(R,q,z,C);U&&(K.center=U),m.addJoint(K)})})}),e.scene.updateMatrixWorld(),m.setInitState(),m})}_importJoint(e,t,n,s){const a=new PP(e,t,n,s);if(this.jointHelperRoot){const l=new TP(a);this.jointHelperRoot.add(l),l.renderOrder=this.jointHelperRoot.renderOrder}return a}_importSphereCollider(e,t){const n=new Bx(t),s=new of(n);if(e.add(s),this.colliderHelperRoot){const a=new sf(s);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importCapsuleCollider(e,t){const n=new Fx(t),s=new of(n);if(e.add(s),this.colliderHelperRoot){const a=new sf(s);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importPlaneCollider(e,t){const n=new kx(t),s=new of(n);if(e.add(s),this.colliderHelperRoot){const a=new sf(s);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return s}};Vx.EXTENSION_NAME="VRMC_springBone";var UP=Vx,OP=class{get name(){return"VRMLoaderPlugin"}constructor(i,e){var t,n,s,a,l,c,d,h,m,p;this.parser=i;const g=e?.helperRoot,v=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new Qb(i),this.firstPersonPlugin=(n=e?.firstPersonPlugin)!=null?n:new eC(i),this.humanoidPlugin=(s=e?.humanoidPlugin)!=null?s:new aC(i,{helperRoot:g,autoUpdateHumanBones:v}),this.lookAtPlugin=(a=e?.lookAtPlugin)!=null?a:new SC(i,{helperRoot:g}),this.metaPlugin=(l=e?.metaPlugin)!=null?l:new wC(i),this.mtoonMaterialPlugin=(c=e?.mtoonMaterialPlugin)!=null?c:new VC(i),this.materialsHDREmissiveMultiplierPlugin=(d=e?.materialsHDREmissiveMultiplierPlugin)!=null?d:new HC(i),this.materialsV0CompatPlugin=(h=e?.materialsV0CompatPlugin)!=null?h:new $C(i),this.springBonePlugin=(m=e?.springBonePlugin)!=null?m:new UP(i,{colliderHelperRoot:g,jointHelperRoot:g}),this.nodeConstraintPlugin=(p=e?.nodeConstraintPlugin)!=null?p:new gP(i,{helperRoot:g})}beforeRoot(){return Ku(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(i){return Ku(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(i)})}getMaterialType(i){const e=this.mtoonMaterialPlugin.getMaterialType(i);return e??null}extendMaterialParams(i,e){return Ku(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(i,e),yield this.mtoonMaterialPlugin.extendMaterialParams(i,e)})}afterRoot(i){return Ku(this,null,function*(){yield this.metaPlugin.afterRoot(i),yield this.humanoidPlugin.afterRoot(i),yield this.expressionPlugin.afterRoot(i),yield this.lookAtPlugin.afterRoot(i),yield this.firstPersonPlugin.afterRoot(i),yield this.springBonePlugin.afterRoot(i),yield this.nodeConstraintPlugin.afterRoot(i),yield this.mtoonMaterialPlugin.afterRoot(i);const e=i.userData.vrmMeta,t=i.userData.vrmHumanoid;if(e&&t){const n=new RC({scene:i.scene,expressionManager:i.userData.vrmExpressionManager,firstPerson:i.userData.vrmFirstPerson,humanoid:t,lookAt:i.userData.vrmLookAt,meta:e,materials:i.userData.vrmMToonMaterials,springBoneManager:i.userData.vrmSpringBoneManager,nodeConstraintManager:i.userData.vrmNodeConstraintManager});i.userData.vrm=n}})}};function FP(i){const e=new Set;return i.traverse(t=>{if(!t.isMesh)return;const n=t;e.add(n)}),e}function S0(i,e,t){if(e.size===1){const l=e.values().next().value;if(l.weight===1)return i[l.index]}const n=new Float32Array(i[0].count*3);let s=0;if(t)s=1;else for(const l of e)s+=l.weight;for(const l of e){const c=i[l.index],d=l.weight/s;for(let h=0;h<c.count;h++)n[h*3+0]+=c.getX(h)*d,n[h*3+1]+=c.getY(h)*d,n[h*3+2]+=c.getZ(h)*d}return new St(n,3)}function kP(i){var e;const t=FP(i.scene),n=new Map,s=(e=i.expressionManager)==null?void 0:e.expressionMap;if(s!=null)for(const[a,l]of Object.entries(s)){const c=new Set;for(const d of l.binds)if(d instanceof gc){if(d.weight!==0)for(const h of d.primitives){let m=n.get(h);m==null&&(m=new Map,n.set(h,m));let p=m.get(a);p==null&&(p=new Set,m.set(a,p)),p.add(d)}c.add(d)}for(const d of c)l.deleteBind(d)}for(const a of t){const l=n.get(a);if(l==null)continue;const c=a.geometry.morphAttributes;a.geometry.morphAttributes={};const d=a.geometry.clone();a.geometry=d;const h=d.morphTargetsRelative,m=c.position!=null,p=c.normal!=null,g={},v={},S=[];if(m||p){m&&(g.position=[]),p&&(g.normal=[]);let E=0;for(const[y,x]of l)m&&(g.position[E]=S0(c.position,x,h)),p&&(g.normal[E]=S0(c.normal,x,h)),s?.[y].addBind(new gc({index:E,weight:1,primitives:[a]})),v[y]=E,S.push(0),E++}d.morphAttributes=g,a.morphTargetDictionary=v,a.morphTargetInfluences=S}}function vc(i,e,t){if(i.getComponent)return i.getComponent(e,t);{let n=i.array[e*i.itemSize+t];return i.normalized&&(n=_t.denormalize(n,i.array)),n}}function zx(i,e,t,n){i.setComponent?i.setComponent(e,t,n):(i.normalized&&(n=_t.normalize(n,i.array)),i.array[e*i.itemSize+t]=n)}function BP(i){var e;const t=VP(i),n=new Set;for(const p of t)n.has(p.geometry)&&(p.geometry=jP(p.geometry)),n.add(p.geometry);const s=new Map;for(const p of n){const g=p.getAttribute("skinIndex"),v=(e=s.get(g))!=null?e:new Map;s.set(g,v);const S=p.getAttribute("skinWeight"),E=zP(g,S);v.set(S,E)}const a=new Map;for(const p of t){const g=HP(p,s);a.set(p,g)}const l=[];for(const[p,g]of a){let v=!1;for(const S of l)if(GP(g,S.boneInverseMap)){v=!0,S.meshes.add(p);for(const[y,x]of g)S.boneInverseMap.set(y,x);break}v||l.push({boneInverseMap:g,meshes:new Set([p])})}const c=new Map,d=new lf,h=new lf,m=new lf;for(const p of l){const{boneInverseMap:g,meshes:v}=p,S=Array.from(g.keys()),E=Array.from(g.values()),y=new Ko(S,E),x=h.getOrCreate(y);for(const b of v){const L=b.geometry.getAttribute("skinIndex"),w=d.getOrCreate(L),I=b.skeleton.bones,N=I.map(C=>m.getOrCreate(C)).join(","),U=`${w};${x};${N}`;let z=c.get(U);z==null&&(z=L.clone(),WP(z,I,S),c.set(U,z)),b.geometry.setAttribute("skinIndex",z)}for(const b of v)b.bind(y,new lt)}}function VP(i){const e=new Set;return i.traverse(t=>{if(!t.isSkinnedMesh)return;const n=t;e.add(n)}),e}function zP(i,e){const t=new Set;for(let n=0;n<i.count;n++)for(let s=0;s<i.itemSize;s++){const a=vc(i,n,s);vc(e,n,s)!==0&&t.add(a)}return t}function HP(i,e){const t=new Map,n=i.skeleton,s=i.geometry,a=s.getAttribute("skinIndex"),l=s.getAttribute("skinWeight"),c=e.get(a),d=c?.get(l);if(!d)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(const h of d)t.set(n.bones[h],n.boneInverses[h]);return t}function GP(i,e){for(const[t,n]of i.entries()){const s=e.get(t);if(s!=null&&!XP(n,s))return!1}return!0}function WP(i,e,t){const n=new Map;for(const a of e)n.set(a,n.size);const s=new Map;for(const[a,l]of t.entries()){const c=n.get(l);s.set(c,a)}for(let a=0;a<i.count;a++)for(let l=0;l<i.itemSize;l++){const c=vc(i,a,l),d=s.get(c);zx(i,a,l,d)}i.needsUpdate=!0}function XP(i,e,t){if(t=t||1e-4,i.elements.length!=e.elements.length)return!1;for(let n=0,s=i.elements.length;n<s;n++)if(Math.abs(i.elements[n]-e.elements[n])>t)return!1;return!0}var lf=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(i){return this._objectIndexMap.get(i)}getOrCreate(i){let e=this._objectIndexMap.get(i);return e==null&&(e=this._index,this._objectIndexMap.set(i,e),this._index++),e}};function jP(i){var e,t,n,s;const a=new zt;a.name=i.name,a.setIndex(i.index);for(const[l,c]of Object.entries(i.attributes))a.setAttribute(l,c);for(const[l,c]of Object.entries(i.morphAttributes)){const d=l;a.morphAttributes[d]=c.concat()}a.morphTargetsRelative=i.morphTargetsRelative,a.groups=[];for(const l of i.groups)a.addGroup(l.start,l.count,l.materialIndex);return a.boundingSphere=(t=(e=i.boundingSphere)==null?void 0:e.clone())!=null?t:null,a.boundingBox=(s=(n=i.boundingBox)==null?void 0:n.clone())!=null?s:null,a.drawRange.start=i.drawRange.start,a.drawRange.count=i.drawRange.count,a.userData=i.userData,a}function E0(i){if(Object.values(i).forEach(e=>{e?.isTexture&&e.dispose()}),i.isShaderMaterial){const e=i.uniforms;e&&Object.values(e).forEach(t=>{const n=t.value;n?.isTexture&&n.dispose()})}i.dispose()}function YP(i){const e=i.geometry;e&&e.dispose();const t=i.skeleton;t&&t.dispose();const n=i.material;n&&(Array.isArray(n)?n.forEach(s=>E0(s)):n&&E0(n))}function qP(i){i.traverse(YP)}function $P(i,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");const s=(t=e?.experimentalSameBoneCounts)!=null?t:!1,a=[];i.traverse(d=>{d.type==="SkinnedMesh"&&a.push(d)});const l=new Map;let c=0;for(const d of a){const m=d.geometry.getAttribute("skinIndex");if(l.has(m))continue;const p=new Map,g=new Map;for(let v=0;v<m.count;v++)for(let S=0;S<m.itemSize;S++){const E=vc(m,v,S);let y=p.get(E);y==null&&(y=p.size,p.set(E,y),g.set(y,E)),zx(m,v,S,y)}m.needsUpdate=!0,l.set(m,g),c=Math.max(c,p.size)}for(const d of a){const m=d.geometry.getAttribute("skinIndex"),p=l.get(m),g=[],v=[],S=s?c:p.size;for(let y=0;y<S;y++){const x=(n=p.get(y))!=null?n:0;g.push(d.skeleton.bones[x]),v.push(d.skeleton.boneInverses[x])}const E=new Ko(g,v);d.bind(E,new lt)}}function KP(i){const e=new Map;i.traverse(t=>{var n,s,a,l;if(!t.isMesh)return;const c=t,d=c.geometry,h=d.index;if(h==null)return;const m=e.get(d);if(m!=null){c.geometry=m;return}const p=Object.values(d.attributes)[0].count,g=new Array(p);let v=0;const S=h.array;for(let w=0;w<S.length;w++){const I=S[w];g[I]||(g[I]=!0,v++)}if(v===p)return;const E=[],y=[];let x=0;for(let w=0;w<g.length;w++)if(g[w]){const I=x++;E[w]=I,y[I]=w}const b=new zt;b.name=d.name,b.morphTargetsRelative=d.morphTargetsRelative,d.groups.forEach(w=>{b.addGroup(w.start,w.count,w.materialIndex)}),b.boundingBox=(s=(n=d.boundingBox)==null?void 0:n.clone())!=null?s:null,b.boundingSphere=(l=(a=d.boundingSphere)==null?void 0:a.clone())!=null?l:null,b.setDrawRange(d.drawRange.start,d.drawRange.count),b.userData=d.userData,e.set(d,b);{const w=h.array,I=new w.constructor(w.length);for(let N=0;N<w.length;N++){const U=w[N],z=E[U];I[N]=z}b.setIndex(new St(I,1,!1))}Object.keys(d.attributes).forEach(w=>{const I=d.attributes[w];if(I.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const N=I.array,{itemSize:U,normalized:z}=I,C=new N.constructor(y.length*U);y.forEach((R,B)=>{for(let q=0;q<U;q++)C[B*U+q]=N[R*U+q]}),b.setAttribute(w,new St(C,U,z))});let L=!0;for(const[w,I]of Object.entries(d.morphAttributes)){const N=w;b.morphAttributes[N]=[];for(let U=0;U<I.length;U++){const z=I[U];if(z.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const C=z.array,{itemSize:R,normalized:B}=z,q=new C.constructor(y.length*R);y.forEach((K,he)=>{for(let oe=0;oe<R;oe++)q[he*R+oe]=C[K*R+oe]}),L=L&&q.every(K=>K===0),b.morphAttributes[N][U]=new St(q,R,B)}}L&&(b.morphAttributes={}),c.geometry=b}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function ZP(i){var e;((e=i.meta)==null?void 0:e.metaVersion)==="0"&&(i.scene.rotation.y=Math.PI)}var qi=class{constructor(){}};qi.combineMorphs=kP;qi.combineSkeletons=BP;qi.deepDispose=qP;qi.removeUnnecessaryJoints=$P;qi.removeUnnecessaryVertices=KP;qi.rotateVRM0=ZP;/*!
 * @pixiv/three-vrm-core v3.4.4
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-mtoon v3.4.4
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.4.4
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-v0compat v3.4.4
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-node-constraint v3.4.4
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-springbone v3.4.4
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */const uf=1.6;async function QP(i){const e=new pb;e.register(s=>new OP(s));const t=await e.parseAsync(i,""),n=t.userData.vrm;if(!n)throw new Error("VRMファイルではないようです");return qi.removeUnnecessaryVertices(t.scene),qi.combineSkeletons(t.scene),qi.rotateVRM0(n),n.scene.traverse(s=>s.frustumCulled=!1),n}class JP{root=new Mn;body=new Mn;vrm=null;spirit;aura;mood="idle";moodWeight={happy:0,thinking:0,talking:0};blinkTimer=2;blinkPhase=-1;lookTarget=new Vt;height=uf;constructor(){this.root.add(this.body),this.spirit=new eL,this.body.add(this.spirit.group),this.aura=Dp("#3d9dff",1.6,.45),this.aura.position.y=-.05,this.aura.scale.set(1.4,.45,1),this.root.add(this.aura)}setVrm(e){if(this.vrm&&(this.body.remove(this.vrm.scene),qi.deepDispose(this.vrm.scene)),this.vrm=e,this.spirit.group.visible=!e,e){this.body.add(e.scene),e.lookAt&&(e.lookAt.target=this.lookTarget);const t=e.humanoid.getNormalizedBoneNode("head");this.root.updateMatrixWorld(!0),this.height=t?this.body.worldToLocal(t.getWorldPosition(new D)).y+.15:uf}else this.height=uf}get hasVrm(){return!!this.vrm}setMood(e){this.mood=e}headPosition(e){return e.set(0,this.height*1.02,0).applyMatrix4(this.body.matrixWorld)}update(e,t,n){const s=1-Math.exp(-e*8);for(const d of["happy","thinking","talking"])this.moodWeight[d]+=((this.mood===d?1:0)-this.moodWeight[d])*s;const a=this.updateBlink(e),l=this.moodWeight.talking*(.35+.35*Math.sin(t*17)*Math.sin(t*5.3));this.body.position.y=.06+Math.sin(t*1.4)*.05,this.body.rotation.z=Math.sin(t*.7)*.03+this.moodWeight.thinking*.08,this.body.rotation.x=n*.12;const c=Math.sin(t*2.2);this.aura.material.opacity=.35+.1*Math.sin(t*1.4)+this.moodWeight.happy*.2,this.vrm?this.poseVrm(this.vrm,e,t,c,a,Math.max(0,l)):this.spirit.update(t,a,Math.max(0,l),this.moodWeight)}updateBlink(e){return this.blinkPhase<0?(this.blinkTimer-=e,this.blinkTimer<=0&&(this.blinkPhase=0),0):(this.blinkPhase+=e/.16,this.blinkPhase>=1?(this.blinkPhase=-1,this.blinkTimer=_t.randFloat(1.8,5.5),0):Math.sin(this.blinkPhase*Math.PI))}poseVrm(e,t,n,s,a,l){const c=e.humanoid,d=S=>c.getNormalizedBoneNode(S),{happy:h,thinking:m,talking:p}=this.moodWeight,g=Math.sin(n*1.1)*.05;d("leftUpperArm")?.rotation.set(0,0,-1.35+g-h*.15),d("rightUpperArm")?.rotation.set(0,0,1.35-g+h*.15),d("leftLowerArm")?.rotation.set(0,-.25-m*.3,0),d("rightLowerArm")?.rotation.set(0,.25+m*1.4,0),d("rightHand")?.rotation.set(0,0,m*.4),d("leftUpperLeg")?.rotation.set(.08+Math.sin(n*1.4)*.03,0,.03),d("rightUpperLeg")?.rotation.set(.14+Math.sin(n*1.4+1)*.03,0,-.03),d("leftLowerLeg")?.rotation.set(-.12,0,0),d("rightLowerLeg")?.rotation.set(-.25,0,0),d("spine")?.rotation.set(s*.015,0,0),d("chest")?.rotation.set(s*.02,0,0),d("neck")?.rotation.set(p*Math.sin(n*3)*.04,0,0),d("head")?.rotation.set(-m*.15,0,m*.18+Math.sin(n*.6)*.03);const v=e.expressionManager;v&&(v.setValue("blink",h>.5?0:a),v.setValue("happy",h*.9),v.setValue("relaxed",m*.4),v.setValue("aa",l)),e.update(t)}}class eL{group=new Mn;head;eyes=[];mouth;ring;core;constructor(){const e=new Ni({color:"#9fd4ff",emissive:"#1a4f9c",emissiveIntensity:.6,roughness:.15,transmission:.35,transparent:!0,opacity:.92});this.head=new rn(new pl(.3,48,32),e),this.head.position.y=1.18,this.group.add(this.head);const t=new gi({color:"#f4fbff"});for(const a of[-.12,.12]){const l=new rn(new Tp(.03,.06,4,12),t);l.position.set(a,.02,.28),this.head.add(l),this.eyes.push(l)}this.mouth=new rn(new wp(.035,20),new gi({color:"#ffd59a"})),this.mouth.position.set(0,-.1,.295),this.head.add(this.mouth);const n=[[0,.12],[.1,.13],[.2,.2],[.27,.32],[.29,.45],[.24,.62],[.16,.78],[.1,.88],[0,.92]].map(([a,l])=>new Je(a,l)),s=new rn(new Ap(n,48),e);this.group.add(s),this.ring=new rn(new Rp(.46,.012,8,80),new gi({color:"#ffb347",transparent:!0,opacity:.85})),this.ring.position.y=1.18,this.ring.rotation.x=Math.PI/2.4,this.ring.scale.setScalar(.85),this.group.add(this.ring),this.core=Dp("#ffcf7a",.45,.9),this.core.position.y=.5,this.group.add(this.core)}update(e,t,n,s){for(const a of this.eyes)a.scale.y=Math.max(.08,1-t)*(1-s.happy*.6);this.mouth.scale.set(1+s.happy*.6,.4+n*2.2+s.happy*.3,1),this.ring.rotation.z=e*(.6+s.thinking*2.5),this.head.rotation.z=s.thinking*.2+Math.sin(e*.6)*.04,this.head.rotation.x=-s.thinking*.15,this.core.material.opacity=.7+.25*Math.sin(e*2.2)+s.happy*.2}}const T0=35,cf=10;function tL(){const i=navigator.hardwareConcurrency??4,e=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&innerWidth<1100;return i>=8&&!e?"high":"low"}class nL{constructor(e,t={}){this.canvas=e,this.events=t,this.quality=tL(),this.pixelRatio=Math.min(devicePixelRatio,this.quality==="high"?2:1.5),this.renderer=new db({canvas:e,antialias:this.quality==="high",alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.outputColorSpace=hn,this.camera.position.set(0,0,cf),this.scene.add(new mT("#a9c4ff",.35));const n=new tp("#ffffff",2.4);n.position.set(1,2,3),this.scene.add(n);const s=new tp("#4aa8ff",1.2);s.position.set(-2,1,-2),this.scene.add(s),this.background=new fb(this.quality),this.scene.add(this.background.group),this.scene.add(this.companion.root),this.scene.add(this.companion.lookTarget),this.resize(),this.companion.root.position.set(0,-this.visible.h*.25,0),this.target.copy(this.companion.root.position),addEventListener("resize",this.resize),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerdown",this.onPointerDown),document.addEventListener("visibilitychange",this.onVisibility),this.loop()}renderer;scene=new kE;camera=new Vn(T0,1,.1,300);clock=new vT;background;companion=new JP;frame=0;quality;pixelRatio;powerSave=!1;visible={w:1,h:1};reserveBottom=0;target=new D;velocity=new D;nextMove=0;hold=0;pointer=new Je(0,0);fps={frames:0,time:0};tmp=new D;disposed=!1;dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),removeEventListener("resize",this.resize),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerdown",this.onPointerDown),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.dispose()}async setVrmData(e){const t=e?await QP(e):null;this.disposed||(this.companion.setVrm(t),this.applyScale())}setMood(e){this.companion.setMood(e),e!=="idle"&&(this.hold=2.5)}setPowerSave(e){this.powerSave=e,this.renderer.setPixelRatio(e?1:this.pixelRatio),this.resize()}setReserveBottom(e){this.reserveBottom=e,this.clampTarget()}onVisibility=()=>{cancelAnimationFrame(this.frame),document.hidden||(this.clock.getDelta(),this.loop())};onPointerMove=e=>{this.pointer.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1)};onPointerDown=e=>{this.onPointerMove(e);const t=this.companion.root,n=this.companion.height*t.scale.y,s=this.toScreen(this.tmp.set(t.position.x,t.position.y+n*.5,0)),a=this.toScreen(this.tmp.set(t.position.x,t.position.y+n,0)),l=Math.abs(s.y-a.y);if(Math.abs(e.clientX-s.x)<l*.6&&Math.abs(e.clientY-s.y)<l*1.05)this.events.onTap?.();else{const c=this.fromScreen(e.clientX,e.clientY);this.target.set(c.x,c.y-n*.5,0),this.clampTarget(),this.nextMove=this.clock.elapsedTime+6}};toScreen(e){return e.project(this.camera),{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}}fromScreen(e,t){return new D((e/innerWidth*2-1)*(this.visible.w/2),(-(t/innerHeight)*2+1)*(this.visible.h/2),0)}resize=()=>{const e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.visible.h=2*cf*Math.tan(_t.degToRad(T0/2)),this.visible.w=this.visible.h*this.camera.aspect,this.background.layout(this.camera.aspect),this.applyScale(),this.powerSave&&this.renderer.render(this.scene,this.camera)};applyScale(){const e=this.camera.aspect<1?.36:.5,t=this.visible.h*e/this.companion.height;this.companion.root.scale.setScalar(t),this.clampTarget()}bounds(){const e=this.companion.height*this.companion.root.scale.y,t=this.visible.w/2,n=this.visible.h/2,s=Math.min(e*.3,t*.4),a=-n+this.visible.h*this.reserveBottom,l=Math.max(a,n-e*1.05-this.visible.h*.17);return{minX:-t+s,maxX:t-s,minY:a,maxY:l}}clampTarget(){const e=this.bounds();this.target.x=_t.clamp(this.target.x,e.minX,e.maxX),this.target.y=_t.clamp(this.target.y,e.minY,e.maxY)}pickTarget(){const e=this.bounds();this.target.set(_t.randFloat(e.minX,e.maxX),_t.randFloat(e.minY,e.maxY),0)}loop=()=>{this.frame=requestAnimationFrame(this.loop);const e=Math.min(this.clock.getDelta(),.1),t=this.clock.elapsedTime;this.watchFps(e),this.hold=Math.max(0,this.hold-e),t>this.nextMove&&this.hold===0&&(this.pickTarget(),this.nextMove=t+_t.randFloat(5,11));const n=this.companion.root,a=this.tmp.copy(this.target).sub(n.position).multiplyScalar(this.hold>0?.3:.8).clampLength(0,1.6);this.velocity.lerp(a,1-Math.exp(-e*2)),n.position.addScaledVector(this.velocity,e);const l=this.velocity.length(),c=_t.clamp(this.velocity.x*.45,-.6,.6);n.rotation.y+=(c-n.rotation.y)*(1-Math.exp(-e*3));const d=this.fromScreen((this.pointer.x+1)/2*innerWidth,(1-this.pointer.y)/2*innerHeight);if(this.companion.lookTarget.position.set(d.x,d.y,cf*.6),this.companion.update(e,t,Math.min(l,1)),this.powerSave||this.background.update(e,t),this.renderer.render(this.scene,this.camera),this.events.onHead){n.updateMatrixWorld();const h=this.toScreen(this.companion.headPosition(this.tmp));this.events.onHead(h.x,h.y)}};watchFps(e){if(this.fps.frames++,this.fps.time+=e,this.fps.time<3)return;const t=this.fps.frames/this.fps.time;this.fps.frames=0,this.fps.time=0,t<40&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.renderer.setPixelRatio(this.pixelRatio),this.resize())}}const w0=["なあに？","呼んだ？","えへへ、くすぐったいよ","どうしたの？","ちゃんとそばにいるよ"];function iL(){const i=gt.useRef(null),e=gt.useRef(null),t=gt.useRef(null),[n,s]=gt.useState(()=>qr("persona",uc)),[a,l]=gt.useState(()=>{const Y=qr("ai",ch);return{...Y,models:{...ch.models,...Y.models}}}),[c,d]=gt.useState(()=>qr("display",GM)),[h,m]=gt.useState({anthropic:"",openai:"",gemini:""}),[p,g]=gt.useState(!1),[v,S]=gt.useState(()=>tS("chat")),[E,y]=gt.useState(()=>qr("usage",{input:0,output:0})),[x,b]=gt.useState(!1),[L,w]=gt.useState(""),[I,N]=gt.useState(!1),[U,z]=gt.useState(!1),[C,R]=gt.useState({has:!1,name:qr("vrmName",{v:""}).v,error:""}),B=gt.useRef(null),q=gt.useRef(0);gt.useEffect(()=>Rs("persona",n),[n]),gt.useEffect(()=>Rs("ai",a),[a]),gt.useEffect(()=>Rs("display",c),[c]),gt.useEffect(()=>Rs("chat",v.slice(-200)),[v]),gt.useEffect(()=>Rs("usage",E),[E]);const K=gt.useCallback((Y,F)=>{clearTimeout(q.current),w(Y),F!==1/0&&(q.current=window.setTimeout(()=>w(""),F??Math.min(15e3,3500+Y.length*120)))},[]);gt.useEffect(()=>{const Y=new nL(i.current,{onHead:(F,Q)=>{const Re=t.current;if(!Re)return;const be=Re.offsetWidth,Oe=Re.offsetHeight,ee=Math.min(Math.max(12,F-be/2),innerWidth-be-12),se=Math.max(12,Q-Oe-14);Re.style.transform=`translate(${ee}px, ${se}px)`,Re.style.setProperty("--tail",`${Math.min(Math.max(16,F-ee),be-16)}px`)},onTap:()=>{Y.setMood("happy"),setTimeout(()=>Y.setMood("idle"),1800),K(w0[Math.floor(Math.random()*w0.length)])}});return e.current=Y,oS("vrm").then(async F=>{if(F)try{await Y.setVrmData(await F.arrayBuffer()),R(Q=>({...Q,has:!0}))}catch(Q){R(Re=>({...Re,error:`保存してあったVRMを読み込めませんでした：${Q.message}`}))}}),()=>{Y.dispose(),e.current=null}},[K]),gt.useEffect(()=>e.current?.setPowerSave(c.powerSave),[c.powerSave]),gt.useEffect(()=>{(async()=>{const Y=await Promise.all(["anthropic","openai","gemini"].map(async be=>[be,await rS(`key.${be}`)])),F=Object.fromEntries(Y);m(F),g(!0);const Q=qr("persona",uc),Re=qr("ai",ch);K(F[Re.provider]?NM(new Date,Q.userCall):`はじめまして、${Q.name}だよ。右上の ⚙ から、使うAIとAPIキーを設定してね`,F[Re.provider]?void 0:2e4)})()},[K]);const he=gt.useRef(0);gt.useEffect(()=>{if(!c.voiceLines)return;let Y=0;const F=()=>{document.hidden||he.current++;const Q=DM(new Date,n.userCall)??UM(he.current);Q&&!x&&K(Q),Y=window.setTimeout(F,6e4-Date.now()%6e4+50)};return Y=window.setTimeout(F,6e4-Date.now()%6e4+50),()=>clearTimeout(Y)},[c.voiceLines,n.userCall,x,K]);const oe=gt.useCallback(Y=>e.current?.setReserveBottom((Y+8)/innerHeight),[]),ae=async Y=>{const F=Date.now(),Q=[...v,{role:"user",content:Y,at:F}];S([...Q,{role:"assistant",content:"",at:F}]),b(!0),e.current?.setMood("thinking"),K("うーん…",1/0);const Re=new AbortController;B.current=Re;let be="";const Oe=(ee,se=!1)=>S(xe=>[...xe.slice(0,-1),{role:"assistant",content:ee,at:F,error:se}]);try{const ee=await zM({provider:a.provider,apiKey:h[a.provider],model:a.models[a.provider],system:QM(n),messages:kM(Q.filter(se=>!se.error)),signal:Re.signal,onText:se=>{be||e.current?.setMood("talking"),be+=se,Oe(be),K(be,1/0)}});if(y(se=>({input:se.input+ee.input,output:se.output+ee.output})),!be.trim())throw new Error("返事が空っぽでした。もう一度話しかけてみてね");e.current?.setMood("happy"),setTimeout(()=>e.current?.setMood("idle"),2500),K(be)}catch(ee){const se=be?`${be}

（${ee.message}）`:ee.message;Oe(se,!be),e.current?.setMood("idle"),K(be?se:`ごめんね、${ee.message}`)}finally{b(!1),B.current=null}},ue=async(Y,F)=>{await iS(`key.${Y}`,F),m(Q=>({...Q,[Y]:F})),F&&K("ありがとう！これでお話しできるね")},G=async Y=>{R(F=>({...F,error:""}));try{await e.current?.setVrmData(Y?await Y.arrayBuffer():null),await sS("vrm",Y??void 0),Rs("vrmName",{v:Y?.name??""}),R({has:!!Y,name:Y?.name??"",error:""}),Y&&K("新しい姿、どうかな？")}catch(F){R(Q=>({...Q,error:`読み込めませんでした：${F.message}`}))}},le=L.length>220;return ce.jsxs(ce.Fragment,{children:[ce.jsx("div",{className:"space","aria-hidden":!0}),ce.jsx("canvas",{ref:i,className:"stage"}),c.clock&&ce.jsx(OM,{corner:c.clockCorner,seconds:c.seconds}),ce.jsx("div",{className:"top-actions",children:ce.jsx("button",{className:"icon-btn glow",onClick:()=>z(!0),"aria-label":"設定",children:"⚙"})}),ce.jsx("div",{ref:t,className:`bubble glass ${L?"show":""}`,"aria-live":"polite",onClick:()=>le&&N(!0),children:L&&ce.jsxs(ce.Fragment,{children:[ce.jsx("div",{className:"bubble-name",children:n.name}),ce.jsx("div",{className:"bubble-text",children:ce.jsx(A0,{text:le?`…${L.slice(-200)}`:L})}),le&&!x&&ce.jsx("div",{className:"bubble-more",children:"タップで全文"})]})}),ce.jsx(CM,{name:n.name,messages:v,busy:x||!p,open:I,onToggle:()=>N(!I),onSend:ae,onStop:()=>B.current?.abort(),onHeight:oe}),U&&ce.jsx(jM,{persona:n,ai:a,display:c,keys:h,usage:E,hasVrm:C.has,vrmName:C.name,vrmError:C.error,onPersona:s,onAi:l,onDisplay:d,onKey:ue,onVrm:G,onResetUsage:()=>y({input:0,output:0}),onClearChat:()=>S([]),onClose:()=>z(!1)})]})}bM.createRoot(document.getElementById("root")).render(ce.jsx(gt.StrictMode,{children:ce.jsx(iL,{})}));
