(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var nh={exports:{}},Da={},ih={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function TM(){if(a_)return yt;a_=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.iterator;function g(V){return V===null||typeof V!="object"?null:(V=p&&V[p]||V["@@iterator"],typeof V=="function"?V:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function y(V,oe,Ue){this.props=V,this.context=oe,this.refs=E,this.updater=Ue||v}y.prototype.isReactComponent={},y.prototype.setState=function(V,oe){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,oe,"setState")},y.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function x(){}x.prototype=y.prototype;function C(V,oe,Ue){this.props=V,this.context=oe,this.refs=E,this.updater=Ue||v}var R=C.prototype=new x;R.constructor=C,S(R,y.prototype),R.isPureReactComponent=!0;var T=Array.isArray,I=Object.prototype.hasOwnProperty,N={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function z(V,oe,Ue){var ke,me={},q=null,J=null;if(oe!=null)for(ke in oe.ref!==void 0&&(J=oe.ref),oe.key!==void 0&&(q=""+oe.key),oe)I.call(oe,ke)&&!U.hasOwnProperty(ke)&&(me[ke]=oe[ke]);var ge=arguments.length-2;if(ge===1)me.children=Ue;else if(1<ge){for(var Me=Array(ge),Ce=0;Ce<ge;Ce++)Me[Ce]=arguments[Ce+2];me.children=Me}if(V&&V.defaultProps)for(ke in ge=V.defaultProps,ge)me[ke]===void 0&&(me[ke]=ge[ke]);return{$$typeof:i,type:V,key:q,ref:J,props:me,_owner:N.current}}function P(V,oe){return{$$typeof:i,type:V.type,key:oe,ref:V.ref,props:V.props,_owner:V._owner}}function b(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function B(V){var oe={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ue){return oe[Ue]})}var Y=/\/+/g;function ee(V,oe){return typeof V=="object"&&V!==null&&V.key!=null?B(""+V.key):oe.toString(36)}function de(V,oe,Ue,ke,me){var q=typeof V;(q==="undefined"||q==="boolean")&&(V=null);var J=!1;if(V===null)J=!0;else switch(q){case"string":case"number":J=!0;break;case"object":switch(V.$$typeof){case i:case e:J=!0}}if(J)return J=V,me=me(J),V=ke===""?"."+ee(J,0):ke,T(me)?(Ue="",V!=null&&(Ue=V.replace(Y,"$&/")+"/"),de(me,oe,Ue,"",function(Ce){return Ce})):me!=null&&(b(me)&&(me=P(me,Ue+(!me.key||J&&J.key===me.key?"":(""+me.key).replace(Y,"$&/")+"/")+V)),oe.push(me)),1;if(J=0,ke=ke===""?".":ke+":",T(V))for(var ge=0;ge<V.length;ge++){q=V[ge];var Me=ke+ee(q,ge);J+=de(q,oe,Ue,Me,me)}else if(Me=g(V),typeof Me=="function")for(V=Me.call(V),ge=0;!(q=V.next()).done;)q=q.value,Me=ke+ee(q,ge++),J+=de(q,oe,Ue,Me,me);else if(q==="object")throw oe=String(V),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return J}function le(V,oe,Ue){if(V==null)return V;var ke=[],me=0;return de(V,ke,"","",function(q){return oe.call(Ue,q,me++)}),ke}function ue(V){if(V._status===-1){var oe=V._result;oe=oe(),oe.then(function(Ue){(V._status===0||V._status===-1)&&(V._status=1,V._result=Ue)},function(Ue){(V._status===0||V._status===-1)&&(V._status=2,V._result=Ue)}),V._status===-1&&(V._status=0,V._result=oe)}if(V._status===1)return V._result.default;throw V._result}var ie={current:null},H={transition:null},ce={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:H,ReactCurrentOwner:N};function ne(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:le,forEach:function(V,oe,Ue){le(V,function(){oe.apply(this,arguments)},Ue)},count:function(V){var oe=0;return le(V,function(){oe++}),oe},toArray:function(V){return le(V,function(oe){return oe})||[]},only:function(V){if(!b(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},yt.Component=y,yt.Fragment=t,yt.Profiler=s,yt.PureComponent=C,yt.StrictMode=n,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,yt.act=ne,yt.cloneElement=function(V,oe,Ue){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var ke=S({},V.props),me=V.key,q=V.ref,J=V._owner;if(oe!=null){if(oe.ref!==void 0&&(q=oe.ref,J=N.current),oe.key!==void 0&&(me=""+oe.key),V.type&&V.type.defaultProps)var ge=V.type.defaultProps;for(Me in oe)I.call(oe,Me)&&!U.hasOwnProperty(Me)&&(ke[Me]=oe[Me]===void 0&&ge!==void 0?ge[Me]:oe[Me])}var Me=arguments.length-2;if(Me===1)ke.children=Ue;else if(1<Me){ge=Array(Me);for(var Ce=0;Ce<Me;Ce++)ge[Ce]=arguments[Ce+2];ke.children=ge}return{$$typeof:i,type:V.type,key:me,ref:q,props:ke,_owner:J}},yt.createContext=function(V){return V={$$typeof:l,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},yt.createElement=z,yt.createFactory=function(V){var oe=z.bind(null,V);return oe.type=V,oe},yt.createRef=function(){return{current:null}},yt.forwardRef=function(V){return{$$typeof:c,render:V}},yt.isValidElement=b,yt.lazy=function(V){return{$$typeof:m,_payload:{_status:-1,_result:V},_init:ue}},yt.memo=function(V,oe){return{$$typeof:h,type:V,compare:oe===void 0?null:oe}},yt.startTransition=function(V){var oe=H.transition;H.transition={};try{V()}finally{H.transition=oe}},yt.unstable_act=ne,yt.useCallback=function(V,oe){return ie.current.useCallback(V,oe)},yt.useContext=function(V){return ie.current.useContext(V)},yt.useDebugValue=function(){},yt.useDeferredValue=function(V){return ie.current.useDeferredValue(V)},yt.useEffect=function(V,oe){return ie.current.useEffect(V,oe)},yt.useId=function(){return ie.current.useId()},yt.useImperativeHandle=function(V,oe,Ue){return ie.current.useImperativeHandle(V,oe,Ue)},yt.useInsertionEffect=function(V,oe){return ie.current.useInsertionEffect(V,oe)},yt.useLayoutEffect=function(V,oe){return ie.current.useLayoutEffect(V,oe)},yt.useMemo=function(V,oe){return ie.current.useMemo(V,oe)},yt.useReducer=function(V,oe,Ue){return ie.current.useReducer(V,oe,Ue)},yt.useRef=function(V){return ie.current.useRef(V)},yt.useState=function(V){return ie.current.useState(V)},yt.useSyncExternalStore=function(V,oe,Ue){return ie.current.useSyncExternalStore(V,oe,Ue)},yt.useTransition=function(){return ie.current.useTransition()},yt.version="18.3.1",yt}var l_;function fp(){return l_||(l_=1,ih.exports=TM()),ih.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function wM(){if(u_)return Da;u_=1;var i=fp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,d,h){var m,p={},g=null,v=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(v=d.ref);for(m in d)n.call(d,m)&&!a.hasOwnProperty(m)&&(p[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)p[m]===void 0&&(p[m]=d[m]);return{$$typeof:e,type:c,key:g,ref:v,props:p,_owner:s.current}}return Da.Fragment=t,Da.jsx=l,Da.jsxs=l,Da}var c_;function AM(){return c_||(c_=1,nh.exports=wM()),nh.exports}var K=AM(),gt=fp(),vu={},rh={exports:{}},$n={},sh={exports:{}},oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function RM(){return d_||(d_=1,(function(i){function e(H,ce){var ne=H.length;H.push(ce);e:for(;0<ne;){var V=ne-1>>>1,oe=H[V];if(0<s(oe,ce))H[V]=ce,H[ne]=oe,ne=V;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var ce=H[0],ne=H.pop();if(ne!==ce){H[0]=ne;e:for(var V=0,oe=H.length,Ue=oe>>>1;V<Ue;){var ke=2*(V+1)-1,me=H[ke],q=ke+1,J=H[q];if(0>s(me,ne))q<oe&&0>s(J,me)?(H[V]=J,H[q]=ne,V=q):(H[V]=me,H[ke]=ne,V=ke);else if(q<oe&&0>s(J,ne))H[V]=J,H[q]=ne,V=q;else break e}}return ce}function s(H,ce){var ne=H.sortIndex-ce.sortIndex;return ne!==0?ne:H.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;i.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();i.unstable_now=function(){return l.now()-c}}var d=[],h=[],m=1,p=null,g=3,v=!1,S=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(H){for(var ce=t(h);ce!==null;){if(ce.callback===null)n(h);else if(ce.startTime<=H)n(h),ce.sortIndex=ce.expirationTime,e(d,ce);else break;ce=t(h)}}function T(H){if(E=!1,R(H),!S)if(t(d)!==null)S=!0,ue(I);else{var ce=t(h);ce!==null&&ie(T,ce.startTime-H)}}function I(H,ce){S=!1,E&&(E=!1,x(z),z=-1),v=!0;var ne=g;try{for(R(ce),p=t(d);p!==null&&(!(p.expirationTime>ce)||H&&!B());){var V=p.callback;if(typeof V=="function"){p.callback=null,g=p.priorityLevel;var oe=V(p.expirationTime<=ce);ce=i.unstable_now(),typeof oe=="function"?p.callback=oe:p===t(d)&&n(d),R(ce)}else n(d);p=t(d)}if(p!==null)var Ue=!0;else{var ke=t(h);ke!==null&&ie(T,ke.startTime-ce),Ue=!1}return Ue}finally{p=null,g=ne,v=!1}}var N=!1,U=null,z=-1,P=5,b=-1;function B(){return!(i.unstable_now()-b<P)}function Y(){if(U!==null){var H=i.unstable_now();b=H;var ce=!0;try{ce=U(!0,H)}finally{ce?ee():(N=!1,U=null)}}else N=!1}var ee;if(typeof C=="function")ee=function(){C(Y)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,le=de.port2;de.port1.onmessage=Y,ee=function(){le.postMessage(null)}}else ee=function(){y(Y,0)};function ue(H){U=H,N||(N=!0,ee())}function ie(H,ce){z=y(function(){H(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_continueExecution=function(){S||v||(S=!0,ue(I))},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return g},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(H){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var ne=g;g=ce;try{return H()}finally{g=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(H,ce){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ne=g;g=H;try{return ce()}finally{g=ne}},i.unstable_scheduleCallback=function(H,ce,ne){var V=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?V+ne:V):ne=V,H){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ne+oe,H={id:m++,callback:ce,priorityLevel:H,startTime:ne,expirationTime:oe,sortIndex:-1},ne>V?(H.sortIndex=ne,e(h,H),t(d)===null&&H===t(h)&&(E?(x(z),z=-1):E=!0,ie(T,ne-V))):(H.sortIndex=oe,e(d,H),S||v||(S=!0,ue(I))),H},i.unstable_shouldYield=B,i.unstable_wrapCallback=function(H){var ce=g;return function(){var ne=g;g=ce;try{return H.apply(this,arguments)}finally{g=ne}}}})(oh)),oh}var h_;function bM(){return h_||(h_=1,sh.exports=RM()),sh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function CM(){if(f_)return $n;f_=1;var i=fp(),e=bM();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(r,o){l(r,o),l(r+"Capture",o)}function l(r,o){for(s[r]=o,r=0;r<o.length;r++)n.add(o[r])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},p={};function g(r){return d.call(p,r)?!0:d.call(m,r)?!1:h.test(r)?p[r]=!0:(m[r]=!0,!1)}function v(r,o,u,f){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:u!==null?!u.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function S(r,o,u,f){if(o===null||typeof o>"u"||v(r,o,u,f))return!0;if(f)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(r,o,u,f,_,M,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=_,this.mustUseProperty=u,this.propertyName=r,this.type=o,this.sanitizeURL=M,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){y[r]=new E(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];y[o]=new E(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){y[r]=new E(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){y[r]=new E(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){y[r]=new E(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){y[r]=new E(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){y[r]=new E(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){y[r]=new E(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){y[r]=new E(r,5,!1,r.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function C(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(x,C);y[o]=new E(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(x,C);y[o]=new E(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(x,C);y[o]=new E(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){y[r]=new E(r,1,!1,r.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){y[r]=new E(r,1,!1,r.toLowerCase(),null,!0,!0)});function R(r,o,u,f){var _=y.hasOwnProperty(o)?y[o]:null;(_!==null?_.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(S(o,u,_,f)&&(u=null),f||_===null?g(o)&&(u===null?r.removeAttribute(o):r.setAttribute(o,""+u)):_.mustUseProperty?r[_.propertyName]=u===null?_.type===3?!1:"":u:(o=_.attributeName,f=_.attributeNamespace,u===null?r.removeAttribute(o):(_=_.type,u=_===3||_===4&&u===!0?"":""+u,f?r.setAttributeNS(f,o,u):r.setAttribute(o,u))))}var T=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),B=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),H=Symbol.iterator;function ce(r){return r===null||typeof r!="object"?null:(r=H&&r[H]||r["@@iterator"],typeof r=="function"?r:null)}var ne=Object.assign,V;function oe(r){if(V===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);V=o&&o[1]||""}return`
`+V+r}var Ue=!1;function ke(r,o){if(!r||Ue)return"";Ue=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(re){var f=re}Reflect.construct(r,[],o)}else{try{o.call()}catch(re){f=re}r.call(o.prototype)}else{try{throw Error()}catch(re){f=re}r()}}catch(re){if(re&&f&&typeof re.stack=="string"){for(var _=re.stack.split(`
`),M=f.stack.split(`
`),w=_.length-1,F=M.length-1;1<=w&&0<=F&&_[w]!==M[F];)F--;for(;1<=w&&0<=F;w--,F--)if(_[w]!==M[F]){if(w!==1||F!==1)do if(w--,F--,0>F||_[w]!==M[F]){var G=`
`+_[w].replace(" at new "," at ");return r.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",r.displayName)),G}while(1<=w&&0<=F);break}}}finally{Ue=!1,Error.prepareStackTrace=u}return(r=r?r.displayName||r.name:"")?oe(r):""}function me(r){switch(r.tag){case 5:return oe(r.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return r=ke(r.type,!1),r;case 11:return r=ke(r.type.render,!1),r;case 1:return r=ke(r.type,!0),r;default:return""}}function q(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case U:return"Fragment";case N:return"Portal";case P:return"Profiler";case z:return"StrictMode";case ee:return"Suspense";case de:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case B:return(r.displayName||"Context")+".Consumer";case b:return(r._context.displayName||"Context")+".Provider";case Y:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case le:return o=r.displayName||null,o!==null?o:q(r.type)||"Memo";case ue:o=r._payload,r=r._init;try{return q(r(o))}catch{}}return null}function J(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(o);case 8:return o===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ge(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Me(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ce(r){var o=Me(r)?"checked":"value",u=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),f=""+r[o];if(!r.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var _=u.get,M=u.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return _.call(this)},set:function(w){f=""+w,M.call(this,w)}}),Object.defineProperty(r,o,{enumerable:u.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function ct(r){r._valueTracker||(r._valueTracker=Ce(r))}function Et(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var u=o.getValue(),f="";return r&&(f=Me(r)?r.checked?"true":"false":r.value),r=f,r!==u?(o.setValue(r),!0):!1}function k(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Tt(r,o){var u=o.checked;return ne({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??r._wrapperState.initialChecked})}function dt(r,o){var u=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;u=ge(o.value!=null?o.value:u),r._wrapperState={initialChecked:f,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function et(r,o){o=o.checked,o!=null&&R(r,"checked",o,!1)}function Be(r,o){et(r,o);var u=ge(o.value),f=o.type;if(u!=null)f==="number"?(u===0&&r.value===""||r.value!=u)&&(r.value=""+u):r.value!==""+u&&(r.value=""+u);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Ve(r,o.type,u):o.hasOwnProperty("defaultValue")&&Ve(r,o.type,ge(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function Ot(r,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,u||o===r.value||(r.value=o),r.defaultValue=o}u=r.name,u!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,u!==""&&(r.name=u)}function Ve(r,o,u){(o!=="number"||k(r.ownerDocument)!==r)&&(u==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+u&&(r.defaultValue=""+u))}var ut=Array.isArray;function Gt(r,o,u,f){if(r=r.options,o){o={};for(var _=0;_<u.length;_++)o["$"+u[_]]=!0;for(u=0;u<r.length;u++)_=o.hasOwnProperty("$"+r[u].value),r[u].selected!==_&&(r[u].selected=_),_&&f&&(r[u].defaultSelected=!0)}else{for(u=""+ge(u),o=null,_=0;_<r.length;_++){if(r[_].value===u){r[_].selected=!0,f&&(r[_].defaultSelected=!0);return}o!==null||r[_].disabled||(o=r[_])}o!==null&&(o.selected=!0)}}function qt(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function O(r,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(ut(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}r._wrapperState={initialValue:ge(u)}}function A(r,o){var u=ge(o.value),f=ge(o.defaultValue);u!=null&&(u=""+u,u!==r.value&&(r.value=u),o.defaultValue==null&&r.defaultValue!==u&&(r.defaultValue=u)),f!=null&&(r.defaultValue=""+f)}function Q(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function fe(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?fe(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var he,$e=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,f,_){MSApp.execUnsafeLocalFunction(function(){return r(o,u,f,_)})}:r})(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(he=he||document.createElement("div"),he.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=he.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function Se(r,o){if(o){var u=r.firstChild;if(u&&u===r.lastChild&&u.nodeType===3){u.nodeValue=o;return}}r.textContent=o}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(r){Ye.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),ze[o]=ze[r]})});function we(r,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||ze.hasOwnProperty(r)&&ze[r]?(""+o).trim():o+"px"}function Ie(r,o){r=r.style;for(var u in o)if(o.hasOwnProperty(u)){var f=u.indexOf("--")===0,_=we(u,o[u],f);u==="float"&&(u="cssFloat"),f?r.setProperty(u,_):r[u]=_}}var tt=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(r,o){if(o){if(tt[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Le(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function W(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Te=null,Re=null,De=null;function ye(r){if(r=xa(r)){if(typeof Te!="function")throw Error(t(280));var o=r.stateNode;o&&(o=Nl(o),Te(r.stateNode,r.type,o))}}function pe(r){Re?De?De.push(r):De=[r]:Re=r}function He(){if(Re){var r=Re,o=De;if(De=Re=null,ye(r),o)for(r=0;r<o.length;r++)ye(o[r])}}function ft(r,o){return r(o)}function Lt(){}var bt=!1;function Gn(r,o,u){if(bt)return r(o,u);bt=!0;try{return ft(r,o,u)}finally{bt=!1,(Re!==null||De!==null)&&(Lt(),He())}}function gn(r,o){var u=r.stateNode;if(u===null)return null;var f=Nl(u);if(f===null)return null;u=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var Zi=!1;if(c)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Zi=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Zi=!1}function es(r,o,u,f,_,M,w,F,G){var re=Array.prototype.slice.call(arguments,3);try{o.apply(u,re)}catch(xe){this.onError(xe)}}var Ui=!1,Qi=null,vi=!1,Oi=null,Ji={onError:function(r){Ui=!0,Qi=r}};function Fs(r,o,u,f,_,M,w,F,G){Ui=!1,Qi=null,es.apply(Ji,arguments)}function ks(r,o,u,f,_,M,w,F,G){if(Fs.apply(this,arguments),Ui){if(Ui){var re=Qi;Ui=!1,Qi=null}else throw Error(t(198));vi||(vi=!0,Oi=re)}}function Fi(r){var o=r,u=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(u=o.return),r=o.return;while(r)}return o.tag===3?u:null}function Bs(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function ts(r){if(Fi(r)!==r)throw Error(t(188))}function na(r){var o=r.alternate;if(!o){if(o=Fi(r),o===null)throw Error(t(188));return o!==r?null:r}for(var u=r,f=o;;){var _=u.return;if(_===null)break;var M=_.alternate;if(M===null){if(f=_.return,f!==null){u=f;continue}break}if(_.child===M.child){for(M=_.child;M;){if(M===u)return ts(_),r;if(M===f)return ts(_),o;M=M.sibling}throw Error(t(188))}if(u.return!==f.return)u=_,f=M;else{for(var w=!1,F=_.child;F;){if(F===u){w=!0,u=_,f=M;break}if(F===f){w=!0,f=_,u=M;break}F=F.sibling}if(!w){for(F=M.child;F;){if(F===u){w=!0,u=M,f=_;break}if(F===f){w=!0,f=M,u=_;break}F=F.sibling}if(!w)throw Error(t(189))}}if(u.alternate!==f)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?r:o}function Vs(r){return r=na(r),r!==null?er(r):null}function er(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=er(r);if(o!==null)return o;r=r.sibling}return null}var L=e.unstable_scheduleCallback,$=e.unstable_cancelCallback,se=e.unstable_shouldYield,ae=e.unstable_requestPaint,j=e.unstable_now,Ae=e.unstable_getCurrentPriorityLevel,Ne=e.unstable_ImmediatePriority,We=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,st=e.unstable_LowPriority,at=e.unstable_IdlePriority,Qe=null,pt=null;function Ft(r){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Qe,r,void 0,(r.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:nt,jt=Math.log,kt=Math.LN2;function nt(r){return r>>>=0,r===0?32:31-(jt(r)/kt|0)|0}var Wt=64,wt=4194304;function un(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function xi(r,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,_=r.suspendedLanes,M=r.pingedLanes,w=u&268435455;if(w!==0){var F=w&~_;F!==0?f=un(F):(M&=w,M!==0&&(f=un(M)))}else w=u&~_,w!==0?f=un(w):M!==0&&(f=un(M));if(f===0)return 0;if(o!==0&&o!==f&&(o&_)===0&&(_=f&-f,M=o&-o,_>=M||_===16&&(M&4194240)!==0))return o;if((f&4)!==0&&(f|=u&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=f;0<o;)u=31-Ct(o),_=1<<u,f|=r[u],o&=~_;return f}function Dn(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ns(r,o){for(var u=r.suspendedLanes,f=r.pingedLanes,_=r.expirationTimes,M=r.pendingLanes;0<M;){var w=31-Ct(M),F=1<<w,G=_[w];G===-1?((F&u)===0||(F&f)!==0)&&(_[w]=Dn(F,o)):G<=o&&(r.expiredLanes|=F),M&=~F}}function Yt(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Un(){var r=Wt;return Wt<<=1,(Wt&4194240)===0&&(Wt=64),r}function Tn(r){for(var o=[],u=0;31>u;u++)o.push(r);return o}function sn(r,o,u){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-Ct(o),r[o]=u}function wn(r,o){var u=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<u;){var _=31-Ct(u),M=1<<_;o[_]=0,f[_]=-1,r[_]=-1,u&=~M}}function is(r,o){var u=r.entangledLanes|=o;for(r=r.entanglements;u;){var f=31-Ct(u),_=1<<f;_&o|r[f]&o&&(r[f]|=o),u&=~_}}var At=0;function Bp(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Vp,Ac,zp,Hp,Gp,Rc=!1,vl=[],Mr=null,Sr=null,Er=null,ia=new Map,ra=new Map,Tr=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wp(r,o){switch(r){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ia.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(o.pointerId)}}function sa(r,o,u,f,_,M){return r===null||r.nativeEvent!==M?(r={blockedOn:o,domEventName:u,eventSystemFlags:f,nativeEvent:M,targetContainers:[_]},o!==null&&(o=xa(o),o!==null&&Ac(o)),r):(r.eventSystemFlags|=f,o=r.targetContainers,_!==null&&o.indexOf(_)===-1&&o.push(_),r)}function Yx(r,o,u,f,_){switch(o){case"focusin":return Mr=sa(Mr,r,o,u,f,_),!0;case"dragenter":return Sr=sa(Sr,r,o,u,f,_),!0;case"mouseover":return Er=sa(Er,r,o,u,f,_),!0;case"pointerover":var M=_.pointerId;return ia.set(M,sa(ia.get(M)||null,r,o,u,f,_)),!0;case"gotpointercapture":return M=_.pointerId,ra.set(M,sa(ra.get(M)||null,r,o,u,f,_)),!0}return!1}function Xp(r){var o=rs(r.target);if(o!==null){var u=Fi(o);if(u!==null){if(o=u.tag,o===13){if(o=Bs(u),o!==null){r.blockedOn=o,Gp(r.priority,function(){zp(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){r.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}r.blockedOn=null}function xl(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var u=Cc(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(u===null){u=r.nativeEvent;var f=new u.constructor(u.type,u);ht=f,u.target.dispatchEvent(f),ht=null}else return o=xa(u),o!==null&&Ac(o),r.blockedOn=u,!1;o.shift()}return!0}function jp(r,o,u){xl(r)&&u.delete(o)}function qx(){Rc=!1,Mr!==null&&xl(Mr)&&(Mr=null),Sr!==null&&xl(Sr)&&(Sr=null),Er!==null&&xl(Er)&&(Er=null),ia.forEach(jp),ra.forEach(jp)}function oa(r,o){r.blockedOn===o&&(r.blockedOn=null,Rc||(Rc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qx)))}function aa(r){function o(_){return oa(_,r)}if(0<vl.length){oa(vl[0],r);for(var u=1;u<vl.length;u++){var f=vl[u];f.blockedOn===r&&(f.blockedOn=null)}}for(Mr!==null&&oa(Mr,r),Sr!==null&&oa(Sr,r),Er!==null&&oa(Er,r),ia.forEach(o),ra.forEach(o),u=0;u<Tr.length;u++)f=Tr[u],f.blockedOn===r&&(f.blockedOn=null);for(;0<Tr.length&&(u=Tr[0],u.blockedOn===null);)Xp(u),u.blockedOn===null&&Tr.shift()}var zs=T.ReactCurrentBatchConfig,yl=!0;function $x(r,o,u,f){var _=At,M=zs.transition;zs.transition=null;try{At=1,bc(r,o,u,f)}finally{At=_,zs.transition=M}}function Kx(r,o,u,f){var _=At,M=zs.transition;zs.transition=null;try{At=4,bc(r,o,u,f)}finally{At=_,zs.transition=M}}function bc(r,o,u,f){if(yl){var _=Cc(r,o,u,f);if(_===null)jc(r,o,f,Ml,u),Wp(r,f);else if(Yx(_,r,o,u,f))f.stopPropagation();else if(Wp(r,f),o&4&&-1<jx.indexOf(r)){for(;_!==null;){var M=xa(_);if(M!==null&&Vp(M),M=Cc(r,o,u,f),M===null&&jc(r,o,f,Ml,u),M===_)break;_=M}_!==null&&f.stopPropagation()}else jc(r,o,f,null,u)}}var Ml=null;function Cc(r,o,u,f){if(Ml=null,r=W(f),r=rs(r),r!==null)if(o=Fi(r),o===null)r=null;else if(u=o.tag,u===13){if(r=Bs(o),r!==null)return r;r=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return Ml=r,null}function Yp(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ae()){case Ne:return 1;case We:return 4;case Oe:case st:return 16;case at:return 536870912;default:return 16}default:return 16}}var wr=null,Pc=null,Sl=null;function qp(){if(Sl)return Sl;var r,o=Pc,u=o.length,f,_="value"in wr?wr.value:wr.textContent,M=_.length;for(r=0;r<u&&o[r]===_[r];r++);var w=u-r;for(f=1;f<=w&&o[u-f]===_[M-f];f++);return Sl=_.slice(r,1<f?1-f:void 0)}function El(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function Tl(){return!0}function $p(){return!1}function Kn(r){function o(u,f,_,M,w){this._reactName=u,this._targetInst=_,this.type=f,this.nativeEvent=M,this.target=w,this.currentTarget=null;for(var F in r)r.hasOwnProperty(F)&&(u=r[F],this[F]=u?u(M):M[F]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Tl:$p,this.isPropagationStopped=$p,this}return ne(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),o}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=Kn(Hs),la=ne({},Hs,{view:0,detail:0}),Zx=Kn(la),Ic,Nc,ua,wl=ne({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ua&&(ua&&r.type==="mousemove"?(Ic=r.screenX-ua.screenX,Nc=r.screenY-ua.screenY):Nc=Ic=0,ua=r),Ic)},movementY:function(r){return"movementY"in r?r.movementY:Nc}}),Kp=Kn(wl),Qx=ne({},wl,{dataTransfer:0}),Jx=Kn(Qx),ey=ne({},la,{relatedTarget:0}),Dc=Kn(ey),ty=ne({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),ny=Kn(ty),iy=ne({},Hs,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ry=Kn(iy),sy=ne({},Hs,{data:0}),Zp=Kn(sy),oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uy(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=ly[r])?!!o[r]:!1}function Uc(){return uy}var cy=ne({},la,{key:function(r){if(r.key){var o=oy[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=El(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?ay[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(r){return r.type==="keypress"?El(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?El(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),dy=Kn(cy),hy=ne({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=Kn(hy),fy=ne({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),py=Kn(fy),my=ne({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),gy=Kn(my),_y=ne({},wl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),vy=Kn(_y),xy=[9,13,27,32],Oc=c&&"CompositionEvent"in window,ca=null;c&&"documentMode"in document&&(ca=document.documentMode);var yy=c&&"TextEvent"in window&&!ca,Jp=c&&(!Oc||ca&&8<ca&&11>=ca),em=" ",tm=!1;function nm(r,o){switch(r){case"keyup":return xy.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Gs=!1;function My(r,o){switch(r){case"compositionend":return im(o);case"keypress":return o.which!==32?null:(tm=!0,em);case"textInput":return r=o.data,r===em&&tm?null:r;default:return null}}function Sy(r,o){if(Gs)return r==="compositionend"||!Oc&&nm(r,o)?(r=qp(),Sl=Pc=wr=null,Gs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Jp&&o.locale!=="ko"?null:o.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!Ey[r.type]:o==="textarea"}function sm(r,o,u,f){pe(f),o=Pl(o,"onChange"),0<o.length&&(u=new Lc("onChange","change",null,u,f),r.push({event:u,listeners:o}))}var da=null,ha=null;function Ty(r){Em(r,0)}function Al(r){var o=qs(r);if(Et(o))return r}function wy(r,o){if(r==="change")return o}var om=!1;if(c){var Fc;if(c){var kc="oninput"in document;if(!kc){var am=document.createElement("div");am.setAttribute("oninput","return;"),kc=typeof am.oninput=="function"}Fc=kc}else Fc=!1;om=Fc&&(!document.documentMode||9<document.documentMode)}function lm(){da&&(da.detachEvent("onpropertychange",um),ha=da=null)}function um(r){if(r.propertyName==="value"&&Al(ha)){var o=[];sm(o,ha,r,W(r)),Gn(Ty,o)}}function Ay(r,o,u){r==="focusin"?(lm(),da=o,ha=u,da.attachEvent("onpropertychange",um)):r==="focusout"&&lm()}function Ry(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Al(ha)}function by(r,o){if(r==="click")return Al(o)}function Cy(r,o){if(r==="input"||r==="change")return Al(o)}function Py(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var yi=typeof Object.is=="function"?Object.is:Py;function fa(r,o){if(yi(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var u=Object.keys(r),f=Object.keys(o);if(u.length!==f.length)return!1;for(f=0;f<u.length;f++){var _=u[f];if(!d.call(o,_)||!yi(r[_],o[_]))return!1}return!0}function cm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function dm(r,o){var u=cm(r);r=0;for(var f;u;){if(u.nodeType===3){if(f=r+u.textContent.length,r<=o&&f>=o)return{node:u,offset:o-r};r=f}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=cm(u)}}function hm(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?hm(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function fm(){for(var r=window,o=k();o instanceof r.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)r=o.contentWindow;else break;o=k(r.document)}return o}function Bc(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function Ly(r){var o=fm(),u=r.focusedElem,f=r.selectionRange;if(o!==u&&u&&u.ownerDocument&&hm(u.ownerDocument.documentElement,u)){if(f!==null&&Bc(u)){if(o=f.start,r=f.end,r===void 0&&(r=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(r,u.value.length);else if(r=(o=u.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var _=u.textContent.length,M=Math.min(f.start,_);f=f.end===void 0?M:Math.min(f.end,_),!r.extend&&M>f&&(_=f,f=M,M=_),_=dm(u,M);var w=dm(u,f);_&&w&&(r.rangeCount!==1||r.anchorNode!==_.node||r.anchorOffset!==_.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(_.node,_.offset),r.removeAllRanges(),M>f?(r.addRange(o),r.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),r.addRange(o)))}}for(o=[],r=u;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)r=o[u],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Iy=c&&"documentMode"in document&&11>=document.documentMode,Ws=null,Vc=null,pa=null,zc=!1;function pm(r,o,u){var f=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;zc||Ws==null||Ws!==k(f)||(f=Ws,"selectionStart"in f&&Bc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),pa&&fa(pa,f)||(pa=f,f=Pl(Vc,"onSelect"),0<f.length&&(o=new Lc("onSelect","select",null,o,u),r.push({event:o,listeners:f}),o.target=Ws)))}function Rl(r,o){var u={};return u[r.toLowerCase()]=o.toLowerCase(),u["Webkit"+r]="webkit"+o,u["Moz"+r]="moz"+o,u}var Xs={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Hc={},mm={};c&&(mm=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function bl(r){if(Hc[r])return Hc[r];if(!Xs[r])return r;var o=Xs[r],u;for(u in o)if(o.hasOwnProperty(u)&&u in mm)return Hc[r]=o[u];return r}var gm=bl("animationend"),_m=bl("animationiteration"),vm=bl("animationstart"),xm=bl("transitionend"),ym=new Map,Mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(r,o){ym.set(r,o),a(o,[r])}for(var Gc=0;Gc<Mm.length;Gc++){var Wc=Mm[Gc],Ny=Wc.toLowerCase(),Dy=Wc[0].toUpperCase()+Wc.slice(1);Ar(Ny,"on"+Dy)}Ar(gm,"onAnimationEnd"),Ar(_m,"onAnimationIteration"),Ar(vm,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(xm,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Sm(r,o,u){var f=r.type||"unknown-event";r.currentTarget=u,ks(f,o,void 0,r),r.currentTarget=null}function Em(r,o){o=(o&4)!==0;for(var u=0;u<r.length;u++){var f=r[u],_=f.event;f=f.listeners;e:{var M=void 0;if(o)for(var w=f.length-1;0<=w;w--){var F=f[w],G=F.instance,re=F.currentTarget;if(F=F.listener,G!==M&&_.isPropagationStopped())break e;Sm(_,F,re),M=G}else for(w=0;w<f.length;w++){if(F=f[w],G=F.instance,re=F.currentTarget,F=F.listener,G!==M&&_.isPropagationStopped())break e;Sm(_,F,re),M=G}}}if(vi)throw r=Oi,vi=!1,Oi=null,r}function Zt(r,o){var u=o[Qc];u===void 0&&(u=o[Qc]=new Set);var f=r+"__bubble";u.has(f)||(Tm(o,r,2,!1),u.add(f))}function Xc(r,o,u){var f=0;o&&(f|=4),Tm(u,r,f,o)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function ga(r){if(!r[Cl]){r[Cl]=!0,n.forEach(function(u){u!=="selectionchange"&&(Uy.has(u)||Xc(u,!1,r),Xc(u,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[Cl]||(o[Cl]=!0,Xc("selectionchange",!1,o))}}function Tm(r,o,u,f){switch(Yp(o)){case 1:var _=$x;break;case 4:_=Kx;break;default:_=bc}u=_.bind(null,o,u,r),_=void 0,!Zi||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(_=!0),f?_!==void 0?r.addEventListener(o,u,{capture:!0,passive:_}):r.addEventListener(o,u,!0):_!==void 0?r.addEventListener(o,u,{passive:_}):r.addEventListener(o,u,!1)}function jc(r,o,u,f,_){var M=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var F=f.stateNode.containerInfo;if(F===_||F.nodeType===8&&F.parentNode===_)break;if(w===4)for(w=f.return;w!==null;){var G=w.tag;if((G===3||G===4)&&(G=w.stateNode.containerInfo,G===_||G.nodeType===8&&G.parentNode===_))return;w=w.return}for(;F!==null;){if(w=rs(F),w===null)return;if(G=w.tag,G===5||G===6){f=M=w;continue e}F=F.parentNode}}f=f.return}Gn(function(){var re=M,xe=W(u),Ee=[];e:{var ve=ym.get(r);if(ve!==void 0){var Fe=Lc,Xe=r;switch(r){case"keypress":if(El(u)===0)break e;case"keydown":case"keyup":Fe=dy;break;case"focusin":Xe="focus",Fe=Dc;break;case"focusout":Xe="blur",Fe=Dc;break;case"beforeblur":case"afterblur":Fe=Dc;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=py;break;case gm:case _m:case vm:Fe=ny;break;case xm:Fe=gy;break;case"scroll":Fe=Zx;break;case"wheel":Fe=vy;break;case"copy":case"cut":case"paste":Fe=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Qp}var qe=(o&4)!==0,on=!qe&&r==="scroll",Z=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var X=re,te;X!==null;){te=X;var be=te.stateNode;if(te.tag===5&&be!==null&&(te=be,Z!==null&&(be=gn(X,Z),be!=null&&qe.push(_a(X,be,te)))),on)break;X=X.return}0<qe.length&&(ve=new Fe(ve,Xe,null,u,xe),Ee.push({event:ve,listeners:qe}))}}if((o&7)===0){e:{if(ve=r==="mouseover"||r==="pointerover",Fe=r==="mouseout"||r==="pointerout",ve&&u!==ht&&(Xe=u.relatedTarget||u.fromElement)&&(rs(Xe)||Xe[tr]))break e;if((Fe||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Fe?(Xe=u.relatedTarget||u.toElement,Fe=re,Xe=Xe?rs(Xe):null,Xe!==null&&(on=Fi(Xe),Xe!==on||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Fe=null,Xe=re),Fe!==Xe)){if(qe=Kp,be="onMouseLeave",Z="onMouseEnter",X="mouse",(r==="pointerout"||r==="pointerover")&&(qe=Qp,be="onPointerLeave",Z="onPointerEnter",X="pointer"),on=Fe==null?ve:qs(Fe),te=Xe==null?ve:qs(Xe),ve=new qe(be,X+"leave",Fe,u,xe),ve.target=on,ve.relatedTarget=te,be=null,rs(xe)===re&&(qe=new qe(Z,X+"enter",Xe,u,xe),qe.target=te,qe.relatedTarget=on,be=qe),on=be,Fe&&Xe)t:{for(qe=Fe,Z=Xe,X=0,te=qe;te;te=js(te))X++;for(te=0,be=Z;be;be=js(be))te++;for(;0<X-te;)qe=js(qe),X--;for(;0<te-X;)Z=js(Z),te--;for(;X--;){if(qe===Z||Z!==null&&qe===Z.alternate)break t;qe=js(qe),Z=js(Z)}qe=null}else qe=null;Fe!==null&&wm(Ee,ve,Fe,qe,!1),Xe!==null&&on!==null&&wm(Ee,on,Xe,qe,!0)}}e:{if(ve=re?qs(re):window,Fe=ve.nodeName&&ve.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ve.type==="file")var Ke=wy;else if(rm(ve))if(om)Ke=Cy;else{Ke=Ry;var it=Ay}else(Fe=ve.nodeName)&&Fe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ke=by);if(Ke&&(Ke=Ke(r,re))){sm(Ee,Ke,u,xe);break e}it&&it(r,ve,re),r==="focusout"&&(it=ve._wrapperState)&&it.controlled&&ve.type==="number"&&Ve(ve,"number",ve.value)}switch(it=re?qs(re):window,r){case"focusin":(rm(it)||it.contentEditable==="true")&&(Ws=it,Vc=re,pa=null);break;case"focusout":pa=Vc=Ws=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,pm(Ee,u,xe);break;case"selectionchange":if(Iy)break;case"keydown":case"keyup":pm(Ee,u,xe)}var rt;if(Oc)e:{switch(r){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Gs?nm(r,u)&&(mt="onCompositionEnd"):r==="keydown"&&u.keyCode===229&&(mt="onCompositionStart");mt&&(Jp&&u.locale!=="ko"&&(Gs||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Gs&&(rt=qp()):(wr=xe,Pc="value"in wr?wr.value:wr.textContent,Gs=!0)),it=Pl(re,mt),0<it.length&&(mt=new Zp(mt,r,null,u,xe),Ee.push({event:mt,listeners:it}),rt?mt.data=rt:(rt=im(u),rt!==null&&(mt.data=rt)))),(rt=yy?My(r,u):Sy(r,u))&&(re=Pl(re,"onBeforeInput"),0<re.length&&(xe=new Zp("onBeforeInput","beforeinput",null,u,xe),Ee.push({event:xe,listeners:re}),xe.data=rt))}Em(Ee,o)})}function _a(r,o,u){return{instance:r,listener:o,currentTarget:u}}function Pl(r,o){for(var u=o+"Capture",f=[];r!==null;){var _=r,M=_.stateNode;_.tag===5&&M!==null&&(_=M,M=gn(r,u),M!=null&&f.unshift(_a(r,M,_)),M=gn(r,o),M!=null&&f.push(_a(r,M,_))),r=r.return}return f}function js(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function wm(r,o,u,f,_){for(var M=o._reactName,w=[];u!==null&&u!==f;){var F=u,G=F.alternate,re=F.stateNode;if(G!==null&&G===f)break;F.tag===5&&re!==null&&(F=re,_?(G=gn(u,M),G!=null&&w.unshift(_a(u,G,F))):_||(G=gn(u,M),G!=null&&w.push(_a(u,G,F)))),u=u.return}w.length!==0&&r.push({event:o,listeners:w})}var Oy=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function Am(r){return(typeof r=="string"?r:""+r).replace(Oy,`
`).replace(Fy,"")}function Ll(r,o,u){if(o=Am(o),Am(r)!==o&&u)throw Error(t(425))}function Il(){}var Yc=null,qc=null;function $c(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(r){return Rm.resolve(null).then(r).catch(Vy)}:Kc;function Vy(r){setTimeout(function(){throw r})}function Zc(r,o){var u=o,f=0;do{var _=u.nextSibling;if(r.removeChild(u),_&&_.nodeType===8)if(u=_.data,u==="/$"){if(f===0){r.removeChild(_),aa(o);return}f--}else u!=="$"&&u!=="$?"&&u!=="$!"||f++;u=_}while(u);aa(o)}function Rr(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function bm(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var u=r.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return r;o--}else u==="/$"&&o++}r=r.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ki="__reactFiber$"+Ys,va="__reactProps$"+Ys,tr="__reactContainer$"+Ys,Qc="__reactEvents$"+Ys,zy="__reactListeners$"+Ys,Hy="__reactHandles$"+Ys;function rs(r){var o=r[ki];if(o)return o;for(var u=r.parentNode;u;){if(o=u[tr]||u[ki]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(r=bm(r);r!==null;){if(u=r[ki])return u;r=bm(r)}return o}r=u,u=r.parentNode}return null}function xa(r){return r=r[ki]||r[tr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function qs(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Nl(r){return r[va]||null}var Jc=[],$s=-1;function br(r){return{current:r}}function Qt(r){0>$s||(r.current=Jc[$s],Jc[$s]=null,$s--)}function $t(r,o){$s++,Jc[$s]=r.current,r.current=o}var Cr={},An=br(Cr),Wn=br(!1),ss=Cr;function Ks(r,o){var u=r.type.contextTypes;if(!u)return Cr;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var _={},M;for(M in u)_[M]=o[M];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=_),_}function Xn(r){return r=r.childContextTypes,r!=null}function Dl(){Qt(Wn),Qt(An)}function Cm(r,o,u){if(An.current!==Cr)throw Error(t(168));$t(An,o),$t(Wn,u)}function Pm(r,o,u){var f=r.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return u;f=f.getChildContext();for(var _ in f)if(!(_ in o))throw Error(t(108,J(r)||"Unknown",_));return ne({},u,f)}function Ul(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Cr,ss=An.current,$t(An,r),$t(Wn,Wn.current),!0}function Lm(r,o,u){var f=r.stateNode;if(!f)throw Error(t(169));u?(r=Pm(r,o,ss),f.__reactInternalMemoizedMergedChildContext=r,Qt(Wn),Qt(An),$t(An,r)):Qt(Wn),$t(Wn,u)}var nr=null,Ol=!1,ed=!1;function Im(r){nr===null?nr=[r]:nr.push(r)}function Gy(r){Ol=!0,Im(r)}function Pr(){if(!ed&&nr!==null){ed=!0;var r=0,o=At;try{var u=nr;for(At=1;r<u.length;r++){var f=u[r];do f=f(!0);while(f!==null)}nr=null,Ol=!1}catch(_){throw nr!==null&&(nr=nr.slice(r+1)),L(Ne,Pr),_}finally{At=o,ed=!1}}return null}var Zs=[],Qs=0,Fl=null,kl=0,ri=[],si=0,os=null,ir=1,rr="";function as(r,o){Zs[Qs++]=kl,Zs[Qs++]=Fl,Fl=r,kl=o}function Nm(r,o,u){ri[si++]=ir,ri[si++]=rr,ri[si++]=os,os=r;var f=ir;r=rr;var _=32-Ct(f)-1;f&=~(1<<_),u+=1;var M=32-Ct(o)+_;if(30<M){var w=_-_%5;M=(f&(1<<w)-1).toString(32),f>>=w,_-=w,ir=1<<32-Ct(o)+_|u<<_|f,rr=M+r}else ir=1<<M|u<<_|f,rr=r}function td(r){r.return!==null&&(as(r,1),Nm(r,1,0))}function nd(r){for(;r===Fl;)Fl=Zs[--Qs],Zs[Qs]=null,kl=Zs[--Qs],Zs[Qs]=null;for(;r===os;)os=ri[--si],ri[si]=null,rr=ri[--si],ri[si]=null,ir=ri[--si],ri[si]=null}var Zn=null,Qn=null,Jt=!1,Mi=null;function Dm(r,o){var u=ui(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=r,o=r.deletions,o===null?(r.deletions=[u],r.flags|=16):o.push(u)}function Um(r,o){switch(r.tag){case 5:var u=r.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,Zn=r,Qn=Rr(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,Zn=r,Qn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=os!==null?{id:ir,overflow:rr}:null,r.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=ui(18,null,null,0),u.stateNode=o,u.return=r,r.child=u,Zn=r,Qn=null,!0):!1;default:return!1}}function id(r){return(r.mode&1)!==0&&(r.flags&128)===0}function rd(r){if(Jt){var o=Qn;if(o){var u=o;if(!Um(r,o)){if(id(r))throw Error(t(418));o=Rr(u.nextSibling);var f=Zn;o&&Um(r,o)?Dm(f,u):(r.flags=r.flags&-4097|2,Jt=!1,Zn=r)}}else{if(id(r))throw Error(t(418));r.flags=r.flags&-4097|2,Jt=!1,Zn=r}}}function Om(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Zn=r}function Bl(r){if(r!==Zn)return!1;if(!Jt)return Om(r),Jt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!$c(r.type,r.memoizedProps)),o&&(o=Qn)){if(id(r))throw Fm(),Error(t(418));for(;o;)Dm(r,o),o=Rr(o.nextSibling)}if(Om(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var u=r.data;if(u==="/$"){if(o===0){Qn=Rr(r.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}r=r.nextSibling}Qn=null}}else Qn=Zn?Rr(r.stateNode.nextSibling):null;return!0}function Fm(){for(var r=Qn;r;)r=Rr(r.nextSibling)}function Js(){Qn=Zn=null,Jt=!1}function sd(r){Mi===null?Mi=[r]:Mi.push(r)}var Wy=T.ReactCurrentBatchConfig;function ya(r,o,u){if(r=u.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var f=u.stateNode}if(!f)throw Error(t(147,r));var _=f,M=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===M?o.ref:(o=function(w){var F=_.refs;w===null?delete F[M]:F[M]=w},o._stringRef=M,o)}if(typeof r!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,r))}return r}function Vl(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function km(r){var o=r._init;return o(r._payload)}function Bm(r){function o(Z,X){if(r){var te=Z.deletions;te===null?(Z.deletions=[X],Z.flags|=16):te.push(X)}}function u(Z,X){if(!r)return null;for(;X!==null;)o(Z,X),X=X.sibling;return null}function f(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function _(Z,X){return Z=kr(Z,X),Z.index=0,Z.sibling=null,Z}function M(Z,X,te){return Z.index=te,r?(te=Z.alternate,te!==null?(te=te.index,te<X?(Z.flags|=2,X):te):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function w(Z){return r&&Z.alternate===null&&(Z.flags|=2),Z}function F(Z,X,te,be){return X===null||X.tag!==6?(X=Kd(te,Z.mode,be),X.return=Z,X):(X=_(X,te),X.return=Z,X)}function G(Z,X,te,be){var Ke=te.type;return Ke===U?xe(Z,X,te.props.children,be,te.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ue&&km(Ke)===X.type)?(be=_(X,te.props),be.ref=ya(Z,X,te),be.return=Z,be):(be=cu(te.type,te.key,te.props,null,Z.mode,be),be.ref=ya(Z,X,te),be.return=Z,be)}function re(Z,X,te,be){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Zd(te,Z.mode,be),X.return=Z,X):(X=_(X,te.children||[]),X.return=Z,X)}function xe(Z,X,te,be,Ke){return X===null||X.tag!==7?(X=ms(te,Z.mode,be,Ke),X.return=Z,X):(X=_(X,te),X.return=Z,X)}function Ee(Z,X,te){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Kd(""+X,Z.mode,te),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case I:return te=cu(X.type,X.key,X.props,null,Z.mode,te),te.ref=ya(Z,null,X),te.return=Z,te;case N:return X=Zd(X,Z.mode,te),X.return=Z,X;case ue:var be=X._init;return Ee(Z,be(X._payload),te)}if(ut(X)||ce(X))return X=ms(X,Z.mode,te,null),X.return=Z,X;Vl(Z,X)}return null}function ve(Z,X,te,be){var Ke=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ke!==null?null:F(Z,X,""+te,be);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return te.key===Ke?G(Z,X,te,be):null;case N:return te.key===Ke?re(Z,X,te,be):null;case ue:return Ke=te._init,ve(Z,X,Ke(te._payload),be)}if(ut(te)||ce(te))return Ke!==null?null:xe(Z,X,te,be,null);Vl(Z,te)}return null}function Fe(Z,X,te,be,Ke){if(typeof be=="string"&&be!==""||typeof be=="number")return Z=Z.get(te)||null,F(X,Z,""+be,Ke);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case I:return Z=Z.get(be.key===null?te:be.key)||null,G(X,Z,be,Ke);case N:return Z=Z.get(be.key===null?te:be.key)||null,re(X,Z,be,Ke);case ue:var it=be._init;return Fe(Z,X,te,it(be._payload),Ke)}if(ut(be)||ce(be))return Z=Z.get(te)||null,xe(X,Z,be,Ke,null);Vl(X,be)}return null}function Xe(Z,X,te,be){for(var Ke=null,it=null,rt=X,mt=X=0,xn=null;rt!==null&&mt<te.length;mt++){rt.index>mt?(xn=rt,rt=null):xn=rt.sibling;var Nt=ve(Z,rt,te[mt],be);if(Nt===null){rt===null&&(rt=xn);break}r&&rt&&Nt.alternate===null&&o(Z,rt),X=M(Nt,X,mt),it===null?Ke=Nt:it.sibling=Nt,it=Nt,rt=xn}if(mt===te.length)return u(Z,rt),Jt&&as(Z,mt),Ke;if(rt===null){for(;mt<te.length;mt++)rt=Ee(Z,te[mt],be),rt!==null&&(X=M(rt,X,mt),it===null?Ke=rt:it.sibling=rt,it=rt);return Jt&&as(Z,mt),Ke}for(rt=f(Z,rt);mt<te.length;mt++)xn=Fe(rt,Z,mt,te[mt],be),xn!==null&&(r&&xn.alternate!==null&&rt.delete(xn.key===null?mt:xn.key),X=M(xn,X,mt),it===null?Ke=xn:it.sibling=xn,it=xn);return r&&rt.forEach(function(Br){return o(Z,Br)}),Jt&&as(Z,mt),Ke}function qe(Z,X,te,be){var Ke=ce(te);if(typeof Ke!="function")throw Error(t(150));if(te=Ke.call(te),te==null)throw Error(t(151));for(var it=Ke=null,rt=X,mt=X=0,xn=null,Nt=te.next();rt!==null&&!Nt.done;mt++,Nt=te.next()){rt.index>mt?(xn=rt,rt=null):xn=rt.sibling;var Br=ve(Z,rt,Nt.value,be);if(Br===null){rt===null&&(rt=xn);break}r&&rt&&Br.alternate===null&&o(Z,rt),X=M(Br,X,mt),it===null?Ke=Br:it.sibling=Br,it=Br,rt=xn}if(Nt.done)return u(Z,rt),Jt&&as(Z,mt),Ke;if(rt===null){for(;!Nt.done;mt++,Nt=te.next())Nt=Ee(Z,Nt.value,be),Nt!==null&&(X=M(Nt,X,mt),it===null?Ke=Nt:it.sibling=Nt,it=Nt);return Jt&&as(Z,mt),Ke}for(rt=f(Z,rt);!Nt.done;mt++,Nt=te.next())Nt=Fe(rt,Z,mt,Nt.value,be),Nt!==null&&(r&&Nt.alternate!==null&&rt.delete(Nt.key===null?mt:Nt.key),X=M(Nt,X,mt),it===null?Ke=Nt:it.sibling=Nt,it=Nt);return r&&rt.forEach(function(EM){return o(Z,EM)}),Jt&&as(Z,mt),Ke}function on(Z,X,te,be){if(typeof te=="object"&&te!==null&&te.type===U&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case I:e:{for(var Ke=te.key,it=X;it!==null;){if(it.key===Ke){if(Ke=te.type,Ke===U){if(it.tag===7){u(Z,it.sibling),X=_(it,te.props.children),X.return=Z,Z=X;break e}}else if(it.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ue&&km(Ke)===it.type){u(Z,it.sibling),X=_(it,te.props),X.ref=ya(Z,it,te),X.return=Z,Z=X;break e}u(Z,it);break}else o(Z,it);it=it.sibling}te.type===U?(X=ms(te.props.children,Z.mode,be,te.key),X.return=Z,Z=X):(be=cu(te.type,te.key,te.props,null,Z.mode,be),be.ref=ya(Z,X,te),be.return=Z,Z=be)}return w(Z);case N:e:{for(it=te.key;X!==null;){if(X.key===it)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){u(Z,X.sibling),X=_(X,te.children||[]),X.return=Z,Z=X;break e}else{u(Z,X);break}else o(Z,X);X=X.sibling}X=Zd(te,Z.mode,be),X.return=Z,Z=X}return w(Z);case ue:return it=te._init,on(Z,X,it(te._payload),be)}if(ut(te))return Xe(Z,X,te,be);if(ce(te))return qe(Z,X,te,be);Vl(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,X!==null&&X.tag===6?(u(Z,X.sibling),X=_(X,te),X.return=Z,Z=X):(u(Z,X),X=Kd(te,Z.mode,be),X.return=Z,Z=X),w(Z)):u(Z,X)}return on}var eo=Bm(!0),Vm=Bm(!1),zl=br(null),Hl=null,to=null,od=null;function ad(){od=to=Hl=null}function ld(r){var o=zl.current;Qt(zl),r._currentValue=o}function ud(r,o,u){for(;r!==null;){var f=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),r===u)break;r=r.return}}function no(r,o){Hl=r,od=to=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(jn=!0),r.firstContext=null)}function oi(r){var o=r._currentValue;if(od!==r)if(r={context:r,memoizedValue:o,next:null},to===null){if(Hl===null)throw Error(t(308));to=r,Hl.dependencies={lanes:0,firstContext:r}}else to=to.next=r;return o}var ls=null;function cd(r){ls===null?ls=[r]:ls.push(r)}function zm(r,o,u,f){var _=o.interleaved;return _===null?(u.next=u,cd(o)):(u.next=_.next,_.next=u),o.interleaved=u,sr(r,f)}function sr(r,o){r.lanes|=o;var u=r.alternate;for(u!==null&&(u.lanes|=o),u=r,r=r.return;r!==null;)r.childLanes|=o,u=r.alternate,u!==null&&(u.childLanes|=o),u=r,r=r.return;return u.tag===3?u.stateNode:null}var Lr=!1;function dd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hm(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function or(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function Ir(r,o,u){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(It&2)!==0){var _=f.pending;return _===null?o.next=o:(o.next=_.next,_.next=o),f.pending=o,sr(r,u)}return _=f.interleaved,_===null?(o.next=o,cd(f)):(o.next=_.next,_.next=o),f.interleaved=o,sr(r,u)}function Gl(r,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var f=o.lanes;f&=r.pendingLanes,u|=f,o.lanes=u,is(r,u)}}function Gm(r,o){var u=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,u===f)){var _=null,M=null;if(u=u.firstBaseUpdate,u!==null){do{var w={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};M===null?_=M=w:M=M.next=w,u=u.next}while(u!==null);M===null?_=M=o:M=M.next=o}else _=M=o;u={baseState:f.baseState,firstBaseUpdate:_,lastBaseUpdate:M,shared:f.shared,effects:f.effects},r.updateQueue=u;return}r=u.lastBaseUpdate,r===null?u.firstBaseUpdate=o:r.next=o,u.lastBaseUpdate=o}function Wl(r,o,u,f){var _=r.updateQueue;Lr=!1;var M=_.firstBaseUpdate,w=_.lastBaseUpdate,F=_.shared.pending;if(F!==null){_.shared.pending=null;var G=F,re=G.next;G.next=null,w===null?M=re:w.next=re,w=G;var xe=r.alternate;xe!==null&&(xe=xe.updateQueue,F=xe.lastBaseUpdate,F!==w&&(F===null?xe.firstBaseUpdate=re:F.next=re,xe.lastBaseUpdate=G))}if(M!==null){var Ee=_.baseState;w=0,xe=re=G=null,F=M;do{var ve=F.lane,Fe=F.eventTime;if((f&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Xe=r,qe=F;switch(ve=o,Fe=u,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Ee=Xe.call(Fe,Ee,ve);break e}Ee=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,ve=typeof Xe=="function"?Xe.call(Fe,Ee,ve):Xe,ve==null)break e;Ee=ne({},Ee,ve);break e;case 2:Lr=!0}}F.callback!==null&&F.lane!==0&&(r.flags|=64,ve=_.effects,ve===null?_.effects=[F]:ve.push(F))}else Fe={eventTime:Fe,lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},xe===null?(re=xe=Fe,G=Ee):xe=xe.next=Fe,w|=ve;if(F=F.next,F===null){if(F=_.shared.pending,F===null)break;ve=F,F=ve.next,ve.next=null,_.lastBaseUpdate=ve,_.shared.pending=null}}while(!0);if(xe===null&&(G=Ee),_.baseState=G,_.firstBaseUpdate=re,_.lastBaseUpdate=xe,o=_.shared.interleaved,o!==null){_=o;do w|=_.lane,_=_.next;while(_!==o)}else M===null&&(_.shared.lanes=0);ds|=w,r.lanes=w,r.memoizedState=Ee}}function Wm(r,o,u){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var f=r[o],_=f.callback;if(_!==null){if(f.callback=null,f=u,typeof _!="function")throw Error(t(191,_));_.call(f)}}}var Ma={},Bi=br(Ma),Sa=br(Ma),Ea=br(Ma);function us(r){if(r===Ma)throw Error(t(174));return r}function hd(r,o){switch($t(Ea,o),$t(Sa,r),$t(Bi,Ma),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:_e(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=_e(o,r)}Qt(Bi),$t(Bi,o)}function io(){Qt(Bi),Qt(Sa),Qt(Ea)}function Xm(r){us(Ea.current);var o=us(Bi.current),u=_e(o,r.type);o!==u&&($t(Sa,r),$t(Bi,u))}function fd(r){Sa.current===r&&(Qt(Bi),Qt(Sa))}var en=br(0);function Xl(r){for(var o=r;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var pd=[];function md(){for(var r=0;r<pd.length;r++)pd[r]._workInProgressVersionPrimary=null;pd.length=0}var jl=T.ReactCurrentDispatcher,gd=T.ReactCurrentBatchConfig,cs=0,tn=null,cn=null,_n=null,Yl=!1,Ta=!1,wa=0,Xy=0;function Rn(){throw Error(t(321))}function _d(r,o){if(o===null)return!1;for(var u=0;u<o.length&&u<r.length;u++)if(!yi(r[u],o[u]))return!1;return!0}function vd(r,o,u,f,_,M){if(cs=M,tn=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,jl.current=r===null||r.memoizedState===null?$y:Ky,r=u(f,_),Ta){M=0;do{if(Ta=!1,wa=0,25<=M)throw Error(t(301));M+=1,_n=cn=null,o.updateQueue=null,jl.current=Zy,r=u(f,_)}while(Ta)}if(jl.current=Kl,o=cn!==null&&cn.next!==null,cs=0,_n=cn=tn=null,Yl=!1,o)throw Error(t(300));return r}function xd(){var r=wa!==0;return wa=0,r}function Vi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?tn.memoizedState=_n=r:_n=_n.next=r,_n}function ai(){if(cn===null){var r=tn.alternate;r=r!==null?r.memoizedState:null}else r=cn.next;var o=_n===null?tn.memoizedState:_n.next;if(o!==null)_n=o,cn=r;else{if(r===null)throw Error(t(310));cn=r,r={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},_n===null?tn.memoizedState=_n=r:_n=_n.next=r}return _n}function Aa(r,o){return typeof o=="function"?o(r):o}function yd(r){var o=ai(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=r;var f=cn,_=f.baseQueue,M=u.pending;if(M!==null){if(_!==null){var w=_.next;_.next=M.next,M.next=w}f.baseQueue=_=M,u.pending=null}if(_!==null){M=_.next,f=f.baseState;var F=w=null,G=null,re=M;do{var xe=re.lane;if((cs&xe)===xe)G!==null&&(G=G.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),f=re.hasEagerState?re.eagerState:r(f,re.action);else{var Ee={lane:xe,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};G===null?(F=G=Ee,w=f):G=G.next=Ee,tn.lanes|=xe,ds|=xe}re=re.next}while(re!==null&&re!==M);G===null?w=f:G.next=F,yi(f,o.memoizedState)||(jn=!0),o.memoizedState=f,o.baseState=w,o.baseQueue=G,u.lastRenderedState=f}if(r=u.interleaved,r!==null){_=r;do M=_.lane,tn.lanes|=M,ds|=M,_=_.next;while(_!==r)}else _===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function Md(r){var o=ai(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=r;var f=u.dispatch,_=u.pending,M=o.memoizedState;if(_!==null){u.pending=null;var w=_=_.next;do M=r(M,w.action),w=w.next;while(w!==_);yi(M,o.memoizedState)||(jn=!0),o.memoizedState=M,o.baseQueue===null&&(o.baseState=M),u.lastRenderedState=M}return[M,f]}function jm(){}function Ym(r,o){var u=tn,f=ai(),_=o(),M=!yi(f.memoizedState,_);if(M&&(f.memoizedState=_,jn=!0),f=f.queue,Sd(Km.bind(null,u,f,r),[r]),f.getSnapshot!==o||M||_n!==null&&_n.memoizedState.tag&1){if(u.flags|=2048,Ra(9,$m.bind(null,u,f,_,o),void 0,null),vn===null)throw Error(t(349));(cs&30)!==0||qm(u,o,_)}return _}function qm(r,o,u){r.flags|=16384,r={getSnapshot:o,value:u},o=tn.updateQueue,o===null?(o={lastEffect:null,stores:null},tn.updateQueue=o,o.stores=[r]):(u=o.stores,u===null?o.stores=[r]:u.push(r))}function $m(r,o,u,f){o.value=u,o.getSnapshot=f,Zm(o)&&Qm(r)}function Km(r,o,u){return u(function(){Zm(o)&&Qm(r)})}function Zm(r){var o=r.getSnapshot;r=r.value;try{var u=o();return!yi(r,u)}catch{return!0}}function Qm(r){var o=sr(r,1);o!==null&&wi(o,r,1,-1)}function Jm(r){var o=Vi();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:r},o.queue=r,r=r.dispatch=qy.bind(null,tn,r),[o.memoizedState,r]}function Ra(r,o,u,f){return r={tag:r,create:o,destroy:u,deps:f,next:null},o=tn.updateQueue,o===null?(o={lastEffect:null,stores:null},tn.updateQueue=o,o.lastEffect=r.next=r):(u=o.lastEffect,u===null?o.lastEffect=r.next=r:(f=u.next,u.next=r,r.next=f,o.lastEffect=r)),r}function eg(){return ai().memoizedState}function ql(r,o,u,f){var _=Vi();tn.flags|=r,_.memoizedState=Ra(1|o,u,void 0,f===void 0?null:f)}function $l(r,o,u,f){var _=ai();f=f===void 0?null:f;var M=void 0;if(cn!==null){var w=cn.memoizedState;if(M=w.destroy,f!==null&&_d(f,w.deps)){_.memoizedState=Ra(o,u,M,f);return}}tn.flags|=r,_.memoizedState=Ra(1|o,u,M,f)}function tg(r,o){return ql(8390656,8,r,o)}function Sd(r,o){return $l(2048,8,r,o)}function ng(r,o){return $l(4,2,r,o)}function ig(r,o){return $l(4,4,r,o)}function rg(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function sg(r,o,u){return u=u!=null?u.concat([r]):null,$l(4,4,rg.bind(null,o,r),u)}function Ed(){}function og(r,o){var u=ai();o=o===void 0?null:o;var f=u.memoizedState;return f!==null&&o!==null&&_d(o,f[1])?f[0]:(u.memoizedState=[r,o],r)}function ag(r,o){var u=ai();o=o===void 0?null:o;var f=u.memoizedState;return f!==null&&o!==null&&_d(o,f[1])?f[0]:(r=r(),u.memoizedState=[r,o],r)}function lg(r,o,u){return(cs&21)===0?(r.baseState&&(r.baseState=!1,jn=!0),r.memoizedState=u):(yi(u,o)||(u=Un(),tn.lanes|=u,ds|=u,r.baseState=!0),o)}function jy(r,o){var u=At;At=u!==0&&4>u?u:4,r(!0);var f=gd.transition;gd.transition={};try{r(!1),o()}finally{At=u,gd.transition=f}}function ug(){return ai().memoizedState}function Yy(r,o,u){var f=Or(r);if(u={lane:f,action:u,hasEagerState:!1,eagerState:null,next:null},cg(r))dg(o,u);else if(u=zm(r,o,u,f),u!==null){var _=Fn();wi(u,r,f,_),hg(u,o,f)}}function qy(r,o,u){var f=Or(r),_={lane:f,action:u,hasEagerState:!1,eagerState:null,next:null};if(cg(r))dg(o,_);else{var M=r.alternate;if(r.lanes===0&&(M===null||M.lanes===0)&&(M=o.lastRenderedReducer,M!==null))try{var w=o.lastRenderedState,F=M(w,u);if(_.hasEagerState=!0,_.eagerState=F,yi(F,w)){var G=o.interleaved;G===null?(_.next=_,cd(o)):(_.next=G.next,G.next=_),o.interleaved=_;return}}catch{}finally{}u=zm(r,o,_,f),u!==null&&(_=Fn(),wi(u,r,f,_),hg(u,o,f))}}function cg(r){var o=r.alternate;return r===tn||o!==null&&o===tn}function dg(r,o){Ta=Yl=!0;var u=r.pending;u===null?o.next=o:(o.next=u.next,u.next=o),r.pending=o}function hg(r,o,u){if((u&4194240)!==0){var f=o.lanes;f&=r.pendingLanes,u|=f,o.lanes=u,is(r,u)}}var Kl={readContext:oi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},$y={readContext:oi,useCallback:function(r,o){return Vi().memoizedState=[r,o===void 0?null:o],r},useContext:oi,useEffect:tg,useImperativeHandle:function(r,o,u){return u=u!=null?u.concat([r]):null,ql(4194308,4,rg.bind(null,o,r),u)},useLayoutEffect:function(r,o){return ql(4194308,4,r,o)},useInsertionEffect:function(r,o){return ql(4,2,r,o)},useMemo:function(r,o){var u=Vi();return o=o===void 0?null:o,r=r(),u.memoizedState=[r,o],r},useReducer:function(r,o,u){var f=Vi();return o=u!==void 0?u(o):o,f.memoizedState=f.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},f.queue=r,r=r.dispatch=Yy.bind(null,tn,r),[f.memoizedState,r]},useRef:function(r){var o=Vi();return r={current:r},o.memoizedState=r},useState:Jm,useDebugValue:Ed,useDeferredValue:function(r){return Vi().memoizedState=r},useTransition:function(){var r=Jm(!1),o=r[0];return r=jy.bind(null,r[1]),Vi().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,u){var f=tn,_=Vi();if(Jt){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),vn===null)throw Error(t(349));(cs&30)!==0||qm(f,o,u)}_.memoizedState=u;var M={value:u,getSnapshot:o};return _.queue=M,tg(Km.bind(null,f,M,r),[r]),f.flags|=2048,Ra(9,$m.bind(null,f,M,u,o),void 0,null),u},useId:function(){var r=Vi(),o=vn.identifierPrefix;if(Jt){var u=rr,f=ir;u=(f&~(1<<32-Ct(f)-1)).toString(32)+u,o=":"+o+"R"+u,u=wa++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=Xy++,o=":"+o+"r"+u.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},Ky={readContext:oi,useCallback:og,useContext:oi,useEffect:Sd,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:ag,useReducer:yd,useRef:eg,useState:function(){return yd(Aa)},useDebugValue:Ed,useDeferredValue:function(r){var o=ai();return lg(o,cn.memoizedState,r)},useTransition:function(){var r=yd(Aa)[0],o=ai().memoizedState;return[r,o]},useMutableSource:jm,useSyncExternalStore:Ym,useId:ug,unstable_isNewReconciler:!1},Zy={readContext:oi,useCallback:og,useContext:oi,useEffect:Sd,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:ag,useReducer:Md,useRef:eg,useState:function(){return Md(Aa)},useDebugValue:Ed,useDeferredValue:function(r){var o=ai();return cn===null?o.memoizedState=r:lg(o,cn.memoizedState,r)},useTransition:function(){var r=Md(Aa)[0],o=ai().memoizedState;return[r,o]},useMutableSource:jm,useSyncExternalStore:Ym,useId:ug,unstable_isNewReconciler:!1};function Si(r,o){if(r&&r.defaultProps){o=ne({},o),r=r.defaultProps;for(var u in r)o[u]===void 0&&(o[u]=r[u]);return o}return o}function Td(r,o,u,f){o=r.memoizedState,u=u(f,o),u=u==null?o:ne({},o,u),r.memoizedState=u,r.lanes===0&&(r.updateQueue.baseState=u)}var Zl={isMounted:function(r){return(r=r._reactInternals)?Fi(r)===r:!1},enqueueSetState:function(r,o,u){r=r._reactInternals;var f=Fn(),_=Or(r),M=or(f,_);M.payload=o,u!=null&&(M.callback=u),o=Ir(r,M,_),o!==null&&(wi(o,r,_,f),Gl(o,r,_))},enqueueReplaceState:function(r,o,u){r=r._reactInternals;var f=Fn(),_=Or(r),M=or(f,_);M.tag=1,M.payload=o,u!=null&&(M.callback=u),o=Ir(r,M,_),o!==null&&(wi(o,r,_,f),Gl(o,r,_))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var u=Fn(),f=Or(r),_=or(u,f);_.tag=2,o!=null&&(_.callback=o),o=Ir(r,_,f),o!==null&&(wi(o,r,f,u),Gl(o,r,f))}};function fg(r,o,u,f,_,M,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,M,w):o.prototype&&o.prototype.isPureReactComponent?!fa(u,f)||!fa(_,M):!0}function pg(r,o,u){var f=!1,_=Cr,M=o.contextType;return typeof M=="object"&&M!==null?M=oi(M):(_=Xn(o)?ss:An.current,f=o.contextTypes,M=(f=f!=null)?Ks(r,_):Cr),o=new o(u,M),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Zl,r.stateNode=o,o._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=_,r.__reactInternalMemoizedMaskedChildContext=M),o}function mg(r,o,u,f){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,f),o.state!==r&&Zl.enqueueReplaceState(o,o.state,null)}function wd(r,o,u,f){var _=r.stateNode;_.props=u,_.state=r.memoizedState,_.refs={},dd(r);var M=o.contextType;typeof M=="object"&&M!==null?_.context=oi(M):(M=Xn(o)?ss:An.current,_.context=Ks(r,M)),_.state=r.memoizedState,M=o.getDerivedStateFromProps,typeof M=="function"&&(Td(r,o,M,u),_.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(o=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),o!==_.state&&Zl.enqueueReplaceState(_,_.state,null),Wl(r,u,_,f),_.state=r.memoizedState),typeof _.componentDidMount=="function"&&(r.flags|=4194308)}function ro(r,o){try{var u="",f=o;do u+=me(f),f=f.return;while(f);var _=u}catch(M){_=`
Error generating stack: `+M.message+`
`+M.stack}return{value:r,source:o,stack:_,digest:null}}function Ad(r,o,u){return{value:r,source:null,stack:u??null,digest:o??null}}function Rd(r,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var Qy=typeof WeakMap=="function"?WeakMap:Map;function gg(r,o,u){u=or(-1,u),u.tag=3,u.payload={element:null};var f=o.value;return u.callback=function(){ru||(ru=!0,Hd=f),Rd(r,o)},u}function _g(r,o,u){u=or(-1,u),u.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var _=o.value;u.payload=function(){return f(_)},u.callback=function(){Rd(r,o)}}var M=r.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(u.callback=function(){Rd(r,o),typeof f!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),u}function vg(r,o,u){var f=r.pingCache;if(f===null){f=r.pingCache=new Qy;var _=new Set;f.set(o,_)}else _=f.get(o),_===void 0&&(_=new Set,f.set(o,_));_.has(u)||(_.add(u),r=hM.bind(null,r,o,u),o.then(r,r))}function xg(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function yg(r,o,u,f,_){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=or(-1,1),o.tag=2,Ir(u,o,1))),u.lanes|=1),r):(r.flags|=65536,r.lanes=_,r)}var Jy=T.ReactCurrentOwner,jn=!1;function On(r,o,u,f){o.child=r===null?Vm(o,null,u,f):eo(o,r.child,u,f)}function Mg(r,o,u,f,_){u=u.render;var M=o.ref;return no(o,_),f=vd(r,o,u,f,M,_),u=xd(),r!==null&&!jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~_,ar(r,o,_)):(Jt&&u&&td(o),o.flags|=1,On(r,o,f,_),o.child)}function Sg(r,o,u,f,_){if(r===null){var M=u.type;return typeof M=="function"&&!$d(M)&&M.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=M,Eg(r,o,M,f,_)):(r=cu(u.type,null,f,o,o.mode,_),r.ref=o.ref,r.return=o,o.child=r)}if(M=r.child,(r.lanes&_)===0){var w=M.memoizedProps;if(u=u.compare,u=u!==null?u:fa,u(w,f)&&r.ref===o.ref)return ar(r,o,_)}return o.flags|=1,r=kr(M,f),r.ref=o.ref,r.return=o,o.child=r}function Eg(r,o,u,f,_){if(r!==null){var M=r.memoizedProps;if(fa(M,f)&&r.ref===o.ref)if(jn=!1,o.pendingProps=f=M,(r.lanes&_)!==0)(r.flags&131072)!==0&&(jn=!0);else return o.lanes=r.lanes,ar(r,o,_)}return bd(r,o,u,f,_)}function Tg(r,o,u){var f=o.pendingProps,_=f.children,M=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(oo,Jn),Jn|=u;else{if((u&1073741824)===0)return r=M!==null?M.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,$t(oo,Jn),Jn|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=M!==null?M.baseLanes:u,$t(oo,Jn),Jn|=f}else M!==null?(f=M.baseLanes|u,o.memoizedState=null):f=u,$t(oo,Jn),Jn|=f;return On(r,o,_,u),o.child}function wg(r,o){var u=o.ref;(r===null&&u!==null||r!==null&&r.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function bd(r,o,u,f,_){var M=Xn(u)?ss:An.current;return M=Ks(o,M),no(o,_),u=vd(r,o,u,f,M,_),f=xd(),r!==null&&!jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~_,ar(r,o,_)):(Jt&&f&&td(o),o.flags|=1,On(r,o,u,_),o.child)}function Ag(r,o,u,f,_){if(Xn(u)){var M=!0;Ul(o)}else M=!1;if(no(o,_),o.stateNode===null)Jl(r,o),pg(o,u,f),wd(o,u,f,_),f=!0;else if(r===null){var w=o.stateNode,F=o.memoizedProps;w.props=F;var G=w.context,re=u.contextType;typeof re=="object"&&re!==null?re=oi(re):(re=Xn(u)?ss:An.current,re=Ks(o,re));var xe=u.getDerivedStateFromProps,Ee=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";Ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==f||G!==re)&&mg(o,w,f,re),Lr=!1;var ve=o.memoizedState;w.state=ve,Wl(o,f,w,_),G=o.memoizedState,F!==f||ve!==G||Wn.current||Lr?(typeof xe=="function"&&(Td(o,u,xe,f),G=o.memoizedState),(F=Lr||fg(o,u,F,f,ve,G,re))?(Ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=G),w.props=f,w.state=G,w.context=re,f=F):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{w=o.stateNode,Hm(r,o),F=o.memoizedProps,re=o.type===o.elementType?F:Si(o.type,F),w.props=re,Ee=o.pendingProps,ve=w.context,G=u.contextType,typeof G=="object"&&G!==null?G=oi(G):(G=Xn(u)?ss:An.current,G=Ks(o,G));var Fe=u.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==Ee||ve!==G)&&mg(o,w,f,G),Lr=!1,ve=o.memoizedState,w.state=ve,Wl(o,f,w,_);var Xe=o.memoizedState;F!==Ee||ve!==Xe||Wn.current||Lr?(typeof Fe=="function"&&(Td(o,u,Fe,f),Xe=o.memoizedState),(re=Lr||fg(o,u,re,f,ve,Xe,G)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,Xe,G),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,Xe,G)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===r.memoizedProps&&ve===r.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===r.memoizedProps&&ve===r.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=Xe),w.props=f,w.state=Xe,w.context=G,f=re):(typeof w.componentDidUpdate!="function"||F===r.memoizedProps&&ve===r.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===r.memoizedProps&&ve===r.memoizedState||(o.flags|=1024),f=!1)}return Cd(r,o,u,f,M,_)}function Cd(r,o,u,f,_,M){wg(r,o);var w=(o.flags&128)!==0;if(!f&&!w)return _&&Lm(o,u,!1),ar(r,o,M);f=o.stateNode,Jy.current=o;var F=w&&typeof u.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,r!==null&&w?(o.child=eo(o,r.child,null,M),o.child=eo(o,null,F,M)):On(r,o,F,M),o.memoizedState=f.state,_&&Lm(o,u,!0),o.child}function Rg(r){var o=r.stateNode;o.pendingContext?Cm(r,o.pendingContext,o.pendingContext!==o.context):o.context&&Cm(r,o.context,!1),hd(r,o.containerInfo)}function bg(r,o,u,f,_){return Js(),sd(_),o.flags|=256,On(r,o,u,f),o.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function Ld(r){return{baseLanes:r,cachePool:null,transitions:null}}function Cg(r,o,u){var f=o.pendingProps,_=en.current,M=!1,w=(o.flags&128)!==0,F;if((F=w)||(F=r!==null&&r.memoizedState===null?!1:(_&2)!==0),F?(M=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(_|=1),$t(en,_&1),r===null)return rd(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=f.children,r=f.fallback,M?(f=o.mode,M=o.child,w={mode:"hidden",children:w},(f&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=w):M=du(w,f,0,null),r=ms(r,f,u,null),M.return=o,r.return=o,M.sibling=r,o.child=M,o.child.memoizedState=Ld(u),o.memoizedState=Pd,r):Id(o,w));if(_=r.memoizedState,_!==null&&(F=_.dehydrated,F!==null))return eM(r,o,w,f,F,_,u);if(M){M=f.fallback,w=o.mode,_=r.child,F=_.sibling;var G={mode:"hidden",children:f.children};return(w&1)===0&&o.child!==_?(f=o.child,f.childLanes=0,f.pendingProps=G,o.deletions=null):(f=kr(_,G),f.subtreeFlags=_.subtreeFlags&14680064),F!==null?M=kr(F,M):(M=ms(M,w,u,null),M.flags|=2),M.return=o,f.return=o,f.sibling=M,o.child=f,f=M,M=o.child,w=r.child.memoizedState,w=w===null?Ld(u):{baseLanes:w.baseLanes|u,cachePool:null,transitions:w.transitions},M.memoizedState=w,M.childLanes=r.childLanes&~u,o.memoizedState=Pd,f}return M=r.child,r=M.sibling,f=kr(M,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=u),f.return=o,f.sibling=null,r!==null&&(u=o.deletions,u===null?(o.deletions=[r],o.flags|=16):u.push(r)),o.child=f,o.memoizedState=null,f}function Id(r,o){return o=du({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function Ql(r,o,u,f){return f!==null&&sd(f),eo(o,r.child,null,u),r=Id(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function eM(r,o,u,f,_,M,w){if(u)return o.flags&256?(o.flags&=-257,f=Ad(Error(t(422))),Ql(r,o,w,f)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(M=f.fallback,_=o.mode,f=du({mode:"visible",children:f.children},_,0,null),M=ms(M,_,w,null),M.flags|=2,f.return=o,M.return=o,f.sibling=M,o.child=f,(o.mode&1)!==0&&eo(o,r.child,null,w),o.child.memoizedState=Ld(w),o.memoizedState=Pd,M);if((o.mode&1)===0)return Ql(r,o,w,null);if(_.data==="$!"){if(f=_.nextSibling&&_.nextSibling.dataset,f)var F=f.dgst;return f=F,M=Error(t(419)),f=Ad(M,f,void 0),Ql(r,o,w,f)}if(F=(w&r.childLanes)!==0,jn||F){if(f=vn,f!==null){switch(w&-w){case 4:_=2;break;case 16:_=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:_=32;break;case 536870912:_=268435456;break;default:_=0}_=(_&(f.suspendedLanes|w))!==0?0:_,_!==0&&_!==M.retryLane&&(M.retryLane=_,sr(r,_),wi(f,r,_,-1))}return qd(),f=Ad(Error(t(421))),Ql(r,o,w,f)}return _.data==="$?"?(o.flags|=128,o.child=r.child,o=fM.bind(null,r),_._reactRetry=o,null):(r=M.treeContext,Qn=Rr(_.nextSibling),Zn=o,Jt=!0,Mi=null,r!==null&&(ri[si++]=ir,ri[si++]=rr,ri[si++]=os,ir=r.id,rr=r.overflow,os=o),o=Id(o,f.children),o.flags|=4096,o)}function Pg(r,o,u){r.lanes|=o;var f=r.alternate;f!==null&&(f.lanes|=o),ud(r.return,o,u)}function Nd(r,o,u,f,_){var M=r.memoizedState;M===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:u,tailMode:_}:(M.isBackwards=o,M.rendering=null,M.renderingStartTime=0,M.last=f,M.tail=u,M.tailMode=_)}function Lg(r,o,u){var f=o.pendingProps,_=f.revealOrder,M=f.tail;if(On(r,o,f.children,u),f=en.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Pg(r,u,o);else if(r.tag===19)Pg(r,u,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if($t(en,f),(o.mode&1)===0)o.memoizedState=null;else switch(_){case"forwards":for(u=o.child,_=null;u!==null;)r=u.alternate,r!==null&&Xl(r)===null&&(_=u),u=u.sibling;u=_,u===null?(_=o.child,o.child=null):(_=u.sibling,u.sibling=null),Nd(o,!1,_,u,M);break;case"backwards":for(u=null,_=o.child,o.child=null;_!==null;){if(r=_.alternate,r!==null&&Xl(r)===null){o.child=_;break}r=_.sibling,_.sibling=u,u=_,_=r}Nd(o,!0,u,null,M);break;case"together":Nd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Jl(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function ar(r,o,u){if(r!==null&&(o.dependencies=r.dependencies),ds|=o.lanes,(u&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,u=kr(r,r.pendingProps),o.child=u,u.return=o;r.sibling!==null;)r=r.sibling,u=u.sibling=kr(r,r.pendingProps),u.return=o;u.sibling=null}return o.child}function tM(r,o,u){switch(o.tag){case 3:Rg(o),Js();break;case 5:Xm(o);break;case 1:Xn(o.type)&&Ul(o);break;case 4:hd(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,_=o.memoizedProps.value;$t(zl,f._currentValue),f._currentValue=_;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?($t(en,en.current&1),o.flags|=128,null):(u&o.child.childLanes)!==0?Cg(r,o,u):($t(en,en.current&1),r=ar(r,o,u),r!==null?r.sibling:null);$t(en,en.current&1);break;case 19:if(f=(u&o.childLanes)!==0,(r.flags&128)!==0){if(f)return Lg(r,o,u);o.flags|=128}if(_=o.memoizedState,_!==null&&(_.rendering=null,_.tail=null,_.lastEffect=null),$t(en,en.current),f)break;return null;case 22:case 23:return o.lanes=0,Tg(r,o,u)}return ar(r,o,u)}var Ig,Dd,Ng,Dg;Ig=function(r,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)r.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Dd=function(){},Ng=function(r,o,u,f){var _=r.memoizedProps;if(_!==f){r=o.stateNode,us(Bi.current);var M=null;switch(u){case"input":_=Tt(r,_),f=Tt(r,f),M=[];break;case"select":_=ne({},_,{value:void 0}),f=ne({},f,{value:void 0}),M=[];break;case"textarea":_=qt(r,_),f=qt(r,f),M=[];break;default:typeof _.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Il)}je(u,f);var w;u=null;for(re in _)if(!f.hasOwnProperty(re)&&_.hasOwnProperty(re)&&_[re]!=null)if(re==="style"){var F=_[re];for(w in F)F.hasOwnProperty(w)&&(u||(u={}),u[w]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(s.hasOwnProperty(re)?M||(M=[]):(M=M||[]).push(re,null));for(re in f){var G=f[re];if(F=_?.[re],f.hasOwnProperty(re)&&G!==F&&(G!=null||F!=null))if(re==="style")if(F){for(w in F)!F.hasOwnProperty(w)||G&&G.hasOwnProperty(w)||(u||(u={}),u[w]="");for(w in G)G.hasOwnProperty(w)&&F[w]!==G[w]&&(u||(u={}),u[w]=G[w])}else u||(M||(M=[]),M.push(re,u)),u=G;else re==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,F=F?F.__html:void 0,G!=null&&F!==G&&(M=M||[]).push(re,G)):re==="children"?typeof G!="string"&&typeof G!="number"||(M=M||[]).push(re,""+G):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(s.hasOwnProperty(re)?(G!=null&&re==="onScroll"&&Zt("scroll",r),M||F===G||(M=[])):(M=M||[]).push(re,G))}u&&(M=M||[]).push("style",u);var re=M;(o.updateQueue=re)&&(o.flags|=4)}},Dg=function(r,o,u,f){u!==f&&(o.flags|=4)};function ba(r,o){if(!Jt)switch(r.tailMode){case"hidden":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r.tail=null:u.sibling=null;break;case"collapsed":u=r.tail;for(var f=null;u!==null;)u.alternate!==null&&(f=u),u=u.sibling;f===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function bn(r){var o=r.alternate!==null&&r.alternate.child===r.child,u=0,f=0;if(o)for(var _=r.child;_!==null;)u|=_.lanes|_.childLanes,f|=_.subtreeFlags&14680064,f|=_.flags&14680064,_.return=r,_=_.sibling;else for(_=r.child;_!==null;)u|=_.lanes|_.childLanes,f|=_.subtreeFlags,f|=_.flags,_.return=r,_=_.sibling;return r.subtreeFlags|=f,r.childLanes=u,o}function nM(r,o,u){var f=o.pendingProps;switch(nd(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(o),null;case 1:return Xn(o.type)&&Dl(),bn(o),null;case 3:return f=o.stateNode,io(),Qt(Wn),Qt(An),md(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(Bl(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Mi!==null&&(Xd(Mi),Mi=null))),Dd(r,o),bn(o),null;case 5:fd(o);var _=us(Ea.current);if(u=o.type,r!==null&&o.stateNode!=null)Ng(r,o,u,f,_),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return bn(o),null}if(r=us(Bi.current),Bl(o)){f=o.stateNode,u=o.type;var M=o.memoizedProps;switch(f[ki]=o,f[va]=M,r=(o.mode&1)!==0,u){case"dialog":Zt("cancel",f),Zt("close",f);break;case"iframe":case"object":case"embed":Zt("load",f);break;case"video":case"audio":for(_=0;_<ma.length;_++)Zt(ma[_],f);break;case"source":Zt("error",f);break;case"img":case"image":case"link":Zt("error",f),Zt("load",f);break;case"details":Zt("toggle",f);break;case"input":dt(f,M),Zt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!M.multiple},Zt("invalid",f);break;case"textarea":O(f,M),Zt("invalid",f)}je(u,M),_=null;for(var w in M)if(M.hasOwnProperty(w)){var F=M[w];w==="children"?typeof F=="string"?f.textContent!==F&&(M.suppressHydrationWarning!==!0&&Ll(f.textContent,F,r),_=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(M.suppressHydrationWarning!==!0&&Ll(f.textContent,F,r),_=["children",""+F]):s.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Zt("scroll",f)}switch(u){case"input":ct(f),Ot(f,M,!0);break;case"textarea":ct(f),Q(f);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(f.onclick=Il)}f=_,o.updateQueue=f,f!==null&&(o.flags|=4)}else{w=_.nodeType===9?_:_.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=fe(u)),r==="http://www.w3.org/1999/xhtml"?u==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=w.createElement(u,{is:f.is}):(r=w.createElement(u),u==="select"&&(w=r,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):r=w.createElementNS(r,u),r[ki]=o,r[va]=f,Ig(r,o,!1,!1),o.stateNode=r;e:{switch(w=Le(u,f),u){case"dialog":Zt("cancel",r),Zt("close",r),_=f;break;case"iframe":case"object":case"embed":Zt("load",r),_=f;break;case"video":case"audio":for(_=0;_<ma.length;_++)Zt(ma[_],r);_=f;break;case"source":Zt("error",r),_=f;break;case"img":case"image":case"link":Zt("error",r),Zt("load",r),_=f;break;case"details":Zt("toggle",r),_=f;break;case"input":dt(r,f),_=Tt(r,f),Zt("invalid",r);break;case"option":_=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},_=ne({},f,{value:void 0}),Zt("invalid",r);break;case"textarea":O(r,f),_=qt(r,f),Zt("invalid",r);break;default:_=f}je(u,_),F=_;for(M in F)if(F.hasOwnProperty(M)){var G=F[M];M==="style"?Ie(r,G):M==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&$e(r,G)):M==="children"?typeof G=="string"?(u!=="textarea"||G!=="")&&Se(r,G):typeof G=="number"&&Se(r,""+G):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?G!=null&&M==="onScroll"&&Zt("scroll",r):G!=null&&R(r,M,G,w))}switch(u){case"input":ct(r),Ot(r,f,!1);break;case"textarea":ct(r),Q(r);break;case"option":f.value!=null&&r.setAttribute("value",""+ge(f.value));break;case"select":r.multiple=!!f.multiple,M=f.value,M!=null?Gt(r,!!f.multiple,M,!1):f.defaultValue!=null&&Gt(r,!!f.multiple,f.defaultValue,!0);break;default:typeof _.onClick=="function"&&(r.onclick=Il)}switch(u){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return bn(o),null;case 6:if(r&&o.stateNode!=null)Dg(r,o,r.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(u=us(Ea.current),us(Bi.current),Bl(o)){if(f=o.stateNode,u=o.memoizedProps,f[ki]=o,(M=f.nodeValue!==u)&&(r=Zn,r!==null))switch(r.tag){case 3:Ll(f.nodeValue,u,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Ll(f.nodeValue,u,(r.mode&1)!==0)}M&&(o.flags|=4)}else f=(u.nodeType===9?u:u.ownerDocument).createTextNode(f),f[ki]=o,o.stateNode=f}return bn(o),null;case 13:if(Qt(en),f=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Jt&&Qn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Fm(),Js(),o.flags|=98560,M=!1;else if(M=Bl(o),f!==null&&f.dehydrated!==null){if(r===null){if(!M)throw Error(t(318));if(M=o.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[ki]=o}else Js(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;bn(o),M=!1}else Mi!==null&&(Xd(Mi),Mi=null),M=!0;if(!M)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=u,o):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(en.current&1)!==0?dn===0&&(dn=3):qd())),o.updateQueue!==null&&(o.flags|=4),bn(o),null);case 4:return io(),Dd(r,o),r===null&&ga(o.stateNode.containerInfo),bn(o),null;case 10:return ld(o.type._context),bn(o),null;case 17:return Xn(o.type)&&Dl(),bn(o),null;case 19:if(Qt(en),M=o.memoizedState,M===null)return bn(o),null;if(f=(o.flags&128)!==0,w=M.rendering,w===null)if(f)ba(M,!1);else{if(dn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(w=Xl(r),w!==null){for(o.flags|=128,ba(M,!1),f=w.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=u,u=o.child;u!==null;)M=u,r=f,M.flags&=14680066,w=M.alternate,w===null?(M.childLanes=0,M.lanes=r,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=w.childLanes,M.lanes=w.lanes,M.child=w.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=w.memoizedProps,M.memoizedState=w.memoizedState,M.updateQueue=w.updateQueue,M.type=w.type,r=w.dependencies,M.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),u=u.sibling;return $t(en,en.current&1|2),o.child}r=r.sibling}M.tail!==null&&j()>ao&&(o.flags|=128,f=!0,ba(M,!1),o.lanes=4194304)}else{if(!f)if(r=Xl(w),r!==null){if(o.flags|=128,f=!0,u=r.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),ba(M,!0),M.tail===null&&M.tailMode==="hidden"&&!w.alternate&&!Jt)return bn(o),null}else 2*j()-M.renderingStartTime>ao&&u!==1073741824&&(o.flags|=128,f=!0,ba(M,!1),o.lanes=4194304);M.isBackwards?(w.sibling=o.child,o.child=w):(u=M.last,u!==null?u.sibling=w:o.child=w,M.last=w)}return M.tail!==null?(o=M.tail,M.rendering=o,M.tail=o.sibling,M.renderingStartTime=j(),o.sibling=null,u=en.current,$t(en,f?u&1|2:u&1),o):(bn(o),null);case 22:case 23:return Yd(),f=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(Jn&1073741824)!==0&&(bn(o),o.subtreeFlags&6&&(o.flags|=8192)):bn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function iM(r,o){switch(nd(o),o.tag){case 1:return Xn(o.type)&&Dl(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return io(),Qt(Wn),Qt(An),md(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return fd(o),null;case 13:if(Qt(en),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Js()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return Qt(en),null;case 4:return io(),null;case 10:return ld(o.type._context),null;case 22:case 23:return Yd(),null;case 24:return null;default:return null}}var eu=!1,Cn=!1,rM=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function so(r,o){var u=r.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(f){nn(r,o,f)}else u.current=null}function Ud(r,o,u){try{u()}catch(f){nn(r,o,f)}}var Ug=!1;function sM(r,o){if(Yc=yl,r=fm(),Bc(r)){if("selectionStart"in r)var u={start:r.selectionStart,end:r.selectionEnd};else e:{u=(u=r.ownerDocument)&&u.defaultView||window;var f=u.getSelection&&u.getSelection();if(f&&f.rangeCount!==0){u=f.anchorNode;var _=f.anchorOffset,M=f.focusNode;f=f.focusOffset;try{u.nodeType,M.nodeType}catch{u=null;break e}var w=0,F=-1,G=-1,re=0,xe=0,Ee=r,ve=null;t:for(;;){for(var Fe;Ee!==u||_!==0&&Ee.nodeType!==3||(F=w+_),Ee!==M||f!==0&&Ee.nodeType!==3||(G=w+f),Ee.nodeType===3&&(w+=Ee.nodeValue.length),(Fe=Ee.firstChild)!==null;)ve=Ee,Ee=Fe;for(;;){if(Ee===r)break t;if(ve===u&&++re===_&&(F=w),ve===M&&++xe===f&&(G=w),(Fe=Ee.nextSibling)!==null)break;Ee=ve,ve=Ee.parentNode}Ee=Fe}u=F===-1||G===-1?null:{start:F,end:G}}else u=null}u=u||{start:0,end:0}}else u=null;for(qc={focusedElem:r,selectionRange:u},yl=!1,Ge=o;Ge!==null;)if(o=Ge,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,Ge=r;else for(;Ge!==null;){o=Ge;try{var Xe=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,on=Xe.memoizedState,Z=o.stateNode,X=Z.getSnapshotBeforeUpdate(o.elementType===o.type?qe:Si(o.type,qe),on);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var te=o.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){nn(o,o.return,be)}if(r=o.sibling,r!==null){r.return=o.return,Ge=r;break}Ge=o.return}return Xe=Ug,Ug=!1,Xe}function Ca(r,o,u){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var _=f=f.next;do{if((_.tag&r)===r){var M=_.destroy;_.destroy=void 0,M!==void 0&&Ud(o,u,M)}_=_.next}while(_!==f)}}function tu(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&r)===r){var f=u.create;u.destroy=f()}u=u.next}while(u!==o)}}function Od(r){var o=r.ref;if(o!==null){var u=r.stateNode;switch(r.tag){case 5:r=u;break;default:r=u}typeof o=="function"?o(r):o.current=r}}function Og(r){var o=r.alternate;o!==null&&(r.alternate=null,Og(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[ki],delete o[va],delete o[Qc],delete o[zy],delete o[Hy])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Fg(r){return r.tag===5||r.tag===3||r.tag===4}function kg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Fg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Fd(r,o,u){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(r,o):u.insertBefore(r,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(r,u)):(o=u,o.appendChild(r)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=Il));else if(f!==4&&(r=r.child,r!==null))for(Fd(r,o,u),r=r.sibling;r!==null;)Fd(r,o,u),r=r.sibling}function kd(r,o,u){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?u.insertBefore(r,o):u.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(kd(r,o,u),r=r.sibling;r!==null;)kd(r,o,u),r=r.sibling}var Sn=null,Ei=!1;function Nr(r,o,u){for(u=u.child;u!==null;)Bg(r,o,u),u=u.sibling}function Bg(r,o,u){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Qe,u)}catch{}switch(u.tag){case 5:Cn||so(u,o);case 6:var f=Sn,_=Ei;Sn=null,Nr(r,o,u),Sn=f,Ei=_,Sn!==null&&(Ei?(r=Sn,u=u.stateNode,r.nodeType===8?r.parentNode.removeChild(u):r.removeChild(u)):Sn.removeChild(u.stateNode));break;case 18:Sn!==null&&(Ei?(r=Sn,u=u.stateNode,r.nodeType===8?Zc(r.parentNode,u):r.nodeType===1&&Zc(r,u),aa(r)):Zc(Sn,u.stateNode));break;case 4:f=Sn,_=Ei,Sn=u.stateNode.containerInfo,Ei=!0,Nr(r,o,u),Sn=f,Ei=_;break;case 0:case 11:case 14:case 15:if(!Cn&&(f=u.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){_=f=f.next;do{var M=_,w=M.destroy;M=M.tag,w!==void 0&&((M&2)!==0||(M&4)!==0)&&Ud(u,o,w),_=_.next}while(_!==f)}Nr(r,o,u);break;case 1:if(!Cn&&(so(u,o),f=u.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=u.memoizedProps,f.state=u.memoizedState,f.componentWillUnmount()}catch(F){nn(u,o,F)}Nr(r,o,u);break;case 21:Nr(r,o,u);break;case 22:u.mode&1?(Cn=(f=Cn)||u.memoizedState!==null,Nr(r,o,u),Cn=f):Nr(r,o,u);break;default:Nr(r,o,u)}}function Vg(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var u=r.stateNode;u===null&&(u=r.stateNode=new rM),o.forEach(function(f){var _=pM.bind(null,r,f);u.has(f)||(u.add(f),f.then(_,_))})}}function Ti(r,o){var u=o.deletions;if(u!==null)for(var f=0;f<u.length;f++){var _=u[f];try{var M=r,w=o,F=w;e:for(;F!==null;){switch(F.tag){case 5:Sn=F.stateNode,Ei=!1;break e;case 3:Sn=F.stateNode.containerInfo,Ei=!0;break e;case 4:Sn=F.stateNode.containerInfo,Ei=!0;break e}F=F.return}if(Sn===null)throw Error(t(160));Bg(M,w,_),Sn=null,Ei=!1;var G=_.alternate;G!==null&&(G.return=null),_.return=null}catch(re){nn(_,o,re)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)zg(o,r),o=o.sibling}function zg(r,o){var u=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Ti(o,r),zi(r),f&4){try{Ca(3,r,r.return),tu(3,r)}catch(qe){nn(r,r.return,qe)}try{Ca(5,r,r.return)}catch(qe){nn(r,r.return,qe)}}break;case 1:Ti(o,r),zi(r),f&512&&u!==null&&so(u,u.return);break;case 5:if(Ti(o,r),zi(r),f&512&&u!==null&&so(u,u.return),r.flags&32){var _=r.stateNode;try{Se(_,"")}catch(qe){nn(r,r.return,qe)}}if(f&4&&(_=r.stateNode,_!=null)){var M=r.memoizedProps,w=u!==null?u.memoizedProps:M,F=r.type,G=r.updateQueue;if(r.updateQueue=null,G!==null)try{F==="input"&&M.type==="radio"&&M.name!=null&&et(_,M),Le(F,w);var re=Le(F,M);for(w=0;w<G.length;w+=2){var xe=G[w],Ee=G[w+1];xe==="style"?Ie(_,Ee):xe==="dangerouslySetInnerHTML"?$e(_,Ee):xe==="children"?Se(_,Ee):R(_,xe,Ee,re)}switch(F){case"input":Be(_,M);break;case"textarea":A(_,M);break;case"select":var ve=_._wrapperState.wasMultiple;_._wrapperState.wasMultiple=!!M.multiple;var Fe=M.value;Fe!=null?Gt(_,!!M.multiple,Fe,!1):ve!==!!M.multiple&&(M.defaultValue!=null?Gt(_,!!M.multiple,M.defaultValue,!0):Gt(_,!!M.multiple,M.multiple?[]:"",!1))}_[va]=M}catch(qe){nn(r,r.return,qe)}}break;case 6:if(Ti(o,r),zi(r),f&4){if(r.stateNode===null)throw Error(t(162));_=r.stateNode,M=r.memoizedProps;try{_.nodeValue=M}catch(qe){nn(r,r.return,qe)}}break;case 3:if(Ti(o,r),zi(r),f&4&&u!==null&&u.memoizedState.isDehydrated)try{aa(o.containerInfo)}catch(qe){nn(r,r.return,qe)}break;case 4:Ti(o,r),zi(r);break;case 13:Ti(o,r),zi(r),_=r.child,_.flags&8192&&(M=_.memoizedState!==null,_.stateNode.isHidden=M,!M||_.alternate!==null&&_.alternate.memoizedState!==null||(zd=j())),f&4&&Vg(r);break;case 22:if(xe=u!==null&&u.memoizedState!==null,r.mode&1?(Cn=(re=Cn)||xe,Ti(o,r),Cn=re):Ti(o,r),zi(r),f&8192){if(re=r.memoizedState!==null,(r.stateNode.isHidden=re)&&!xe&&(r.mode&1)!==0)for(Ge=r,xe=r.child;xe!==null;){for(Ee=Ge=xe;Ge!==null;){switch(ve=Ge,Fe=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ca(4,ve,ve.return);break;case 1:so(ve,ve.return);var Xe=ve.stateNode;if(typeof Xe.componentWillUnmount=="function"){f=ve,u=ve.return;try{o=f,Xe.props=o.memoizedProps,Xe.state=o.memoizedState,Xe.componentWillUnmount()}catch(qe){nn(f,u,qe)}}break;case 5:so(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Wg(Ee);continue}}Fe!==null?(Fe.return=ve,Ge=Fe):Wg(Ee)}xe=xe.sibling}e:for(xe=null,Ee=r;;){if(Ee.tag===5){if(xe===null){xe=Ee;try{_=Ee.stateNode,re?(M=_.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(F=Ee.stateNode,G=Ee.memoizedProps.style,w=G!=null&&G.hasOwnProperty("display")?G.display:null,F.style.display=we("display",w))}catch(qe){nn(r,r.return,qe)}}}else if(Ee.tag===6){if(xe===null)try{Ee.stateNode.nodeValue=re?"":Ee.memoizedProps}catch(qe){nn(r,r.return,qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===r)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===r)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===r)break e;xe===Ee&&(xe=null),Ee=Ee.return}xe===Ee&&(xe=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Ti(o,r),zi(r),f&4&&Vg(r);break;case 21:break;default:Ti(o,r),zi(r)}}function zi(r){var o=r.flags;if(o&2){try{e:{for(var u=r.return;u!==null;){if(Fg(u)){var f=u;break e}u=u.return}throw Error(t(160))}switch(f.tag){case 5:var _=f.stateNode;f.flags&32&&(Se(_,""),f.flags&=-33);var M=kg(r);kd(r,M,_);break;case 3:case 4:var w=f.stateNode.containerInfo,F=kg(r);Fd(r,F,w);break;default:throw Error(t(161))}}catch(G){nn(r,r.return,G)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function oM(r,o,u){Ge=r,Hg(r)}function Hg(r,o,u){for(var f=(r.mode&1)!==0;Ge!==null;){var _=Ge,M=_.child;if(_.tag===22&&f){var w=_.memoizedState!==null||eu;if(!w){var F=_.alternate,G=F!==null&&F.memoizedState!==null||Cn;F=eu;var re=Cn;if(eu=w,(Cn=G)&&!re)for(Ge=_;Ge!==null;)w=Ge,G=w.child,w.tag===22&&w.memoizedState!==null?Xg(_):G!==null?(G.return=w,Ge=G):Xg(_);for(;M!==null;)Ge=M,Hg(M),M=M.sibling;Ge=_,eu=F,Cn=re}Gg(r)}else(_.subtreeFlags&8772)!==0&&M!==null?(M.return=_,Ge=M):Gg(r)}}function Gg(r){for(;Ge!==null;){var o=Ge;if((o.flags&8772)!==0){var u=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Cn||tu(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!Cn)if(u===null)f.componentDidMount();else{var _=o.elementType===o.type?u.memoizedProps:Si(o.type,u.memoizedProps);f.componentDidUpdate(_,u.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var M=o.updateQueue;M!==null&&Wm(o,M,f);break;case 3:var w=o.updateQueue;if(w!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}Wm(o,w,u)}break;case 5:var F=o.stateNode;if(u===null&&o.flags&4){u=F;var G=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&u.focus();break;case"img":G.src&&(u.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var re=o.alternate;if(re!==null){var xe=re.memoizedState;if(xe!==null){var Ee=xe.dehydrated;Ee!==null&&aa(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||o.flags&512&&Od(o)}catch(ve){nn(o,o.return,ve)}}if(o===r){Ge=null;break}if(u=o.sibling,u!==null){u.return=o.return,Ge=u;break}Ge=o.return}}function Wg(r){for(;Ge!==null;){var o=Ge;if(o===r){Ge=null;break}var u=o.sibling;if(u!==null){u.return=o.return,Ge=u;break}Ge=o.return}}function Xg(r){for(;Ge!==null;){var o=Ge;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{tu(4,o)}catch(G){nn(o,u,G)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var _=o.return;try{f.componentDidMount()}catch(G){nn(o,_,G)}}var M=o.return;try{Od(o)}catch(G){nn(o,M,G)}break;case 5:var w=o.return;try{Od(o)}catch(G){nn(o,w,G)}}}catch(G){nn(o,o.return,G)}if(o===r){Ge=null;break}var F=o.sibling;if(F!==null){F.return=o.return,Ge=F;break}Ge=o.return}}var aM=Math.ceil,nu=T.ReactCurrentDispatcher,Bd=T.ReactCurrentOwner,li=T.ReactCurrentBatchConfig,It=0,vn=null,an=null,En=0,Jn=0,oo=br(0),dn=0,Pa=null,ds=0,iu=0,Vd=0,La=null,Yn=null,zd=0,ao=1/0,lr=null,ru=!1,Hd=null,Dr=null,su=!1,Ur=null,ou=0,Ia=0,Gd=null,au=-1,lu=0;function Fn(){return(It&6)!==0?j():au!==-1?au:au=j()}function Or(r){return(r.mode&1)===0?1:(It&2)!==0&&En!==0?En&-En:Wy.transition!==null?(lu===0&&(lu=Un()),lu):(r=At,r!==0||(r=window.event,r=r===void 0?16:Yp(r.type)),r)}function wi(r,o,u,f){if(50<Ia)throw Ia=0,Gd=null,Error(t(185));sn(r,u,f),((It&2)===0||r!==vn)&&(r===vn&&((It&2)===0&&(iu|=u),dn===4&&Fr(r,En)),qn(r,f),u===1&&It===0&&(o.mode&1)===0&&(ao=j()+500,Ol&&Pr()))}function qn(r,o){var u=r.callbackNode;ns(r,o);var f=xi(r,r===vn?En:0);if(f===0)u!==null&&$(u),r.callbackNode=null,r.callbackPriority=0;else if(o=f&-f,r.callbackPriority!==o){if(u!=null&&$(u),o===1)r.tag===0?Gy(Yg.bind(null,r)):Im(Yg.bind(null,r)),By(function(){(It&6)===0&&Pr()}),u=null;else{switch(Bp(f)){case 1:u=Ne;break;case 4:u=We;break;case 16:u=Oe;break;case 536870912:u=at;break;default:u=Oe}u=t_(u,jg.bind(null,r))}r.callbackPriority=o,r.callbackNode=u}}function jg(r,o){if(au=-1,lu=0,(It&6)!==0)throw Error(t(327));var u=r.callbackNode;if(lo()&&r.callbackNode!==u)return null;var f=xi(r,r===vn?En:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||o)o=uu(r,f);else{o=f;var _=It;It|=2;var M=$g();(vn!==r||En!==o)&&(lr=null,ao=j()+500,fs(r,o));do try{cM();break}catch(F){qg(r,F)}while(!0);ad(),nu.current=M,It=_,an!==null?o=0:(vn=null,En=0,o=dn)}if(o!==0){if(o===2&&(_=Yt(r),_!==0&&(f=_,o=Wd(r,_))),o===1)throw u=Pa,fs(r,0),Fr(r,f),qn(r,j()),u;if(o===6)Fr(r,f);else{if(_=r.current.alternate,(f&30)===0&&!lM(_)&&(o=uu(r,f),o===2&&(M=Yt(r),M!==0&&(f=M,o=Wd(r,M))),o===1))throw u=Pa,fs(r,0),Fr(r,f),qn(r,j()),u;switch(r.finishedWork=_,r.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:ps(r,Yn,lr);break;case 3:if(Fr(r,f),(f&130023424)===f&&(o=zd+500-j(),10<o)){if(xi(r,0)!==0)break;if(_=r.suspendedLanes,(_&f)!==f){Fn(),r.pingedLanes|=r.suspendedLanes&_;break}r.timeoutHandle=Kc(ps.bind(null,r,Yn,lr),o);break}ps(r,Yn,lr);break;case 4:if(Fr(r,f),(f&4194240)===f)break;for(o=r.eventTimes,_=-1;0<f;){var w=31-Ct(f);M=1<<w,w=o[w],w>_&&(_=w),f&=~M}if(f=_,f=j()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*aM(f/1960))-f,10<f){r.timeoutHandle=Kc(ps.bind(null,r,Yn,lr),f);break}ps(r,Yn,lr);break;case 5:ps(r,Yn,lr);break;default:throw Error(t(329))}}}return qn(r,j()),r.callbackNode===u?jg.bind(null,r):null}function Wd(r,o){var u=La;return r.current.memoizedState.isDehydrated&&(fs(r,o).flags|=256),r=uu(r,o),r!==2&&(o=Yn,Yn=u,o!==null&&Xd(o)),r}function Xd(r){Yn===null?Yn=r:Yn.push.apply(Yn,r)}function lM(r){for(var o=r;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var f=0;f<u.length;f++){var _=u[f],M=_.getSnapshot;_=_.value;try{if(!yi(M(),_))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Fr(r,o){for(o&=~Vd,o&=~iu,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var u=31-Ct(o),f=1<<u;r[u]=-1,o&=~f}}function Yg(r){if((It&6)!==0)throw Error(t(327));lo();var o=xi(r,0);if((o&1)===0)return qn(r,j()),null;var u=uu(r,o);if(r.tag!==0&&u===2){var f=Yt(r);f!==0&&(o=f,u=Wd(r,f))}if(u===1)throw u=Pa,fs(r,0),Fr(r,o),qn(r,j()),u;if(u===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,ps(r,Yn,lr),qn(r,j()),null}function jd(r,o){var u=It;It|=1;try{return r(o)}finally{It=u,It===0&&(ao=j()+500,Ol&&Pr())}}function hs(r){Ur!==null&&Ur.tag===0&&(It&6)===0&&lo();var o=It;It|=1;var u=li.transition,f=At;try{if(li.transition=null,At=1,r)return r()}finally{At=f,li.transition=u,It=o,(It&6)===0&&Pr()}}function Yd(){Jn=oo.current,Qt(oo)}function fs(r,o){r.finishedWork=null,r.finishedLanes=0;var u=r.timeoutHandle;if(u!==-1&&(r.timeoutHandle=-1,ky(u)),an!==null)for(u=an.return;u!==null;){var f=u;switch(nd(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Dl();break;case 3:io(),Qt(Wn),Qt(An),md();break;case 5:fd(f);break;case 4:io();break;case 13:Qt(en);break;case 19:Qt(en);break;case 10:ld(f.type._context);break;case 22:case 23:Yd()}u=u.return}if(vn=r,an=r=kr(r.current,null),En=Jn=o,dn=0,Pa=null,Vd=iu=ds=0,Yn=La=null,ls!==null){for(o=0;o<ls.length;o++)if(u=ls[o],f=u.interleaved,f!==null){u.interleaved=null;var _=f.next,M=u.pending;if(M!==null){var w=M.next;M.next=_,f.next=w}u.pending=f}ls=null}return r}function qg(r,o){do{var u=an;try{if(ad(),jl.current=Kl,Yl){for(var f=tn.memoizedState;f!==null;){var _=f.queue;_!==null&&(_.pending=null),f=f.next}Yl=!1}if(cs=0,_n=cn=tn=null,Ta=!1,wa=0,Bd.current=null,u===null||u.return===null){dn=1,Pa=o,an=null;break}e:{var M=r,w=u.return,F=u,G=o;if(o=En,F.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var re=G,xe=F,Ee=xe.tag;if((xe.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=xg(w);if(Fe!==null){Fe.flags&=-257,yg(Fe,w,F,M,o),Fe.mode&1&&vg(M,re,o),o=Fe,G=re;var Xe=o.updateQueue;if(Xe===null){var qe=new Set;qe.add(G),o.updateQueue=qe}else Xe.add(G);break e}else{if((o&1)===0){vg(M,re,o),qd();break e}G=Error(t(426))}}else if(Jt&&F.mode&1){var on=xg(w);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),yg(on,w,F,M,o),sd(ro(G,F));break e}}M=G=ro(G,F),dn!==4&&(dn=2),La===null?La=[M]:La.push(M),M=w;do{switch(M.tag){case 3:M.flags|=65536,o&=-o,M.lanes|=o;var Z=gg(M,G,o);Gm(M,Z);break e;case 1:F=G;var X=M.type,te=M.stateNode;if((M.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Dr===null||!Dr.has(te)))){M.flags|=65536,o&=-o,M.lanes|=o;var be=_g(M,F,o);Gm(M,be);break e}}M=M.return}while(M!==null)}Zg(u)}catch(Ke){o=Ke,an===u&&u!==null&&(an=u=u.return);continue}break}while(!0)}function $g(){var r=nu.current;return nu.current=Kl,r===null?Kl:r}function qd(){(dn===0||dn===3||dn===2)&&(dn=4),vn===null||(ds&268435455)===0&&(iu&268435455)===0||Fr(vn,En)}function uu(r,o){var u=It;It|=2;var f=$g();(vn!==r||En!==o)&&(lr=null,fs(r,o));do try{uM();break}catch(_){qg(r,_)}while(!0);if(ad(),It=u,nu.current=f,an!==null)throw Error(t(261));return vn=null,En=0,dn}function uM(){for(;an!==null;)Kg(an)}function cM(){for(;an!==null&&!se();)Kg(an)}function Kg(r){var o=e_(r.alternate,r,Jn);r.memoizedProps=r.pendingProps,o===null?Zg(r):an=o,Bd.current=null}function Zg(r){var o=r;do{var u=o.alternate;if(r=o.return,(o.flags&32768)===0){if(u=nM(u,o,Jn),u!==null){an=u;return}}else{if(u=iM(u,o),u!==null){u.flags&=32767,an=u;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{dn=6,an=null;return}}if(o=o.sibling,o!==null){an=o;return}an=o=r}while(o!==null);dn===0&&(dn=5)}function ps(r,o,u){var f=At,_=li.transition;try{li.transition=null,At=1,dM(r,o,u,f)}finally{li.transition=_,At=f}return null}function dM(r,o,u,f){do lo();while(Ur!==null);if((It&6)!==0)throw Error(t(327));u=r.finishedWork;var _=r.finishedLanes;if(u===null)return null;if(r.finishedWork=null,r.finishedLanes=0,u===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var M=u.lanes|u.childLanes;if(wn(r,M),r===vn&&(an=vn=null,En=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||su||(su=!0,t_(Oe,function(){return lo(),null})),M=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||M){M=li.transition,li.transition=null;var w=At;At=1;var F=It;It|=4,Bd.current=null,sM(r,u),zg(u,r),Ly(qc),yl=!!Yc,qc=Yc=null,r.current=u,oM(u),ae(),It=F,At=w,li.transition=M}else r.current=u;if(su&&(su=!1,Ur=r,ou=_),M=r.pendingLanes,M===0&&(Dr=null),Ft(u.stateNode),qn(r,j()),o!==null)for(f=r.onRecoverableError,u=0;u<o.length;u++)_=o[u],f(_.value,{componentStack:_.stack,digest:_.digest});if(ru)throw ru=!1,r=Hd,Hd=null,r;return(ou&1)!==0&&r.tag!==0&&lo(),M=r.pendingLanes,(M&1)!==0?r===Gd?Ia++:(Ia=0,Gd=r):Ia=0,Pr(),null}function lo(){if(Ur!==null){var r=Bp(ou),o=li.transition,u=At;try{if(li.transition=null,At=16>r?16:r,Ur===null)var f=!1;else{if(r=Ur,Ur=null,ou=0,(It&6)!==0)throw Error(t(331));var _=It;for(It|=4,Ge=r.current;Ge!==null;){var M=Ge,w=M.child;if((Ge.flags&16)!==0){var F=M.deletions;if(F!==null){for(var G=0;G<F.length;G++){var re=F[G];for(Ge=re;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:Ca(8,xe,M)}var Ee=xe.child;if(Ee!==null)Ee.return=xe,Ge=Ee;else for(;Ge!==null;){xe=Ge;var ve=xe.sibling,Fe=xe.return;if(Og(xe),xe===re){Ge=null;break}if(ve!==null){ve.return=Fe,Ge=ve;break}Ge=Fe}}}var Xe=M.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var on=qe.sibling;qe.sibling=null,qe=on}while(qe!==null)}}Ge=M}}if((M.subtreeFlags&2064)!==0&&w!==null)w.return=M,Ge=w;else e:for(;Ge!==null;){if(M=Ge,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:Ca(9,M,M.return)}var Z=M.sibling;if(Z!==null){Z.return=M.return,Ge=Z;break e}Ge=M.return}}var X=r.current;for(Ge=X;Ge!==null;){w=Ge;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Ge=te;else e:for(w=X;Ge!==null;){if(F=Ge,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:tu(9,F)}}catch(Ke){nn(F,F.return,Ke)}if(F===w){Ge=null;break e}var be=F.sibling;if(be!==null){be.return=F.return,Ge=be;break e}Ge=F.return}}if(It=_,Pr(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Qe,r)}catch{}f=!0}return f}finally{At=u,li.transition=o}}return!1}function Qg(r,o,u){o=ro(u,o),o=gg(r,o,1),r=Ir(r,o,1),o=Fn(),r!==null&&(sn(r,1,o),qn(r,o))}function nn(r,o,u){if(r.tag===3)Qg(r,r,u);else for(;o!==null;){if(o.tag===3){Qg(o,r,u);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Dr===null||!Dr.has(f))){r=ro(u,r),r=_g(o,r,1),o=Ir(o,r,1),r=Fn(),o!==null&&(sn(o,1,r),qn(o,r));break}}o=o.return}}function hM(r,o,u){var f=r.pingCache;f!==null&&f.delete(o),o=Fn(),r.pingedLanes|=r.suspendedLanes&u,vn===r&&(En&u)===u&&(dn===4||dn===3&&(En&130023424)===En&&500>j()-zd?fs(r,0):Vd|=u),qn(r,o)}function Jg(r,o){o===0&&((r.mode&1)===0?o=1:(o=wt,wt<<=1,(wt&130023424)===0&&(wt=4194304)));var u=Fn();r=sr(r,o),r!==null&&(sn(r,o,u),qn(r,u))}function fM(r){var o=r.memoizedState,u=0;o!==null&&(u=o.retryLane),Jg(r,u)}function pM(r,o){var u=0;switch(r.tag){case 13:var f=r.stateNode,_=r.memoizedState;_!==null&&(u=_.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),Jg(r,u)}var e_;e_=function(r,o,u){if(r!==null)if(r.memoizedProps!==o.pendingProps||Wn.current)jn=!0;else{if((r.lanes&u)===0&&(o.flags&128)===0)return jn=!1,tM(r,o,u);jn=(r.flags&131072)!==0}else jn=!1,Jt&&(o.flags&1048576)!==0&&Nm(o,kl,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;Jl(r,o),r=o.pendingProps;var _=Ks(o,An.current);no(o,u),_=vd(null,o,f,r,_,u);var M=xd();return o.flags|=1,typeof _=="object"&&_!==null&&typeof _.render=="function"&&_.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Xn(f)?(M=!0,Ul(o)):M=!1,o.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,dd(o),_.updater=Zl,o.stateNode=_,_._reactInternals=o,wd(o,f,r,u),o=Cd(null,o,f,!0,M,u)):(o.tag=0,Jt&&M&&td(o),On(null,o,_,u),o=o.child),o;case 16:f=o.elementType;e:{switch(Jl(r,o),r=o.pendingProps,_=f._init,f=_(f._payload),o.type=f,_=o.tag=gM(f),r=Si(f,r),_){case 0:o=bd(null,o,f,r,u);break e;case 1:o=Ag(null,o,f,r,u);break e;case 11:o=Mg(null,o,f,r,u);break e;case 14:o=Sg(null,o,f,Si(f.type,r),u);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),bd(r,o,f,_,u);case 1:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),Ag(r,o,f,_,u);case 3:e:{if(Rg(o),r===null)throw Error(t(387));f=o.pendingProps,M=o.memoizedState,_=M.element,Hm(r,o),Wl(o,f,null,u);var w=o.memoizedState;if(f=w.element,M.isDehydrated)if(M={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=M,o.memoizedState=M,o.flags&256){_=ro(Error(t(423)),o),o=bg(r,o,f,u,_);break e}else if(f!==_){_=ro(Error(t(424)),o),o=bg(r,o,f,u,_);break e}else for(Qn=Rr(o.stateNode.containerInfo.firstChild),Zn=o,Jt=!0,Mi=null,u=Vm(o,null,f,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Js(),f===_){o=ar(r,o,u);break e}On(r,o,f,u)}o=o.child}return o;case 5:return Xm(o),r===null&&rd(o),f=o.type,_=o.pendingProps,M=r!==null?r.memoizedProps:null,w=_.children,$c(f,_)?w=null:M!==null&&$c(f,M)&&(o.flags|=32),wg(r,o),On(r,o,w,u),o.child;case 6:return r===null&&rd(o),null;case 13:return Cg(r,o,u);case 4:return hd(o,o.stateNode.containerInfo),f=o.pendingProps,r===null?o.child=eo(o,null,f,u):On(r,o,f,u),o.child;case 11:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),Mg(r,o,f,_,u);case 7:return On(r,o,o.pendingProps,u),o.child;case 8:return On(r,o,o.pendingProps.children,u),o.child;case 12:return On(r,o,o.pendingProps.children,u),o.child;case 10:e:{if(f=o.type._context,_=o.pendingProps,M=o.memoizedProps,w=_.value,$t(zl,f._currentValue),f._currentValue=w,M!==null)if(yi(M.value,w)){if(M.children===_.children&&!Wn.current){o=ar(r,o,u);break e}}else for(M=o.child,M!==null&&(M.return=o);M!==null;){var F=M.dependencies;if(F!==null){w=M.child;for(var G=F.firstContext;G!==null;){if(G.context===f){if(M.tag===1){G=or(-1,u&-u),G.tag=2;var re=M.updateQueue;if(re!==null){re=re.shared;var xe=re.pending;xe===null?G.next=G:(G.next=xe.next,xe.next=G),re.pending=G}}M.lanes|=u,G=M.alternate,G!==null&&(G.lanes|=u),ud(M.return,u,o),F.lanes|=u;break}G=G.next}}else if(M.tag===10)w=M.type===o.type?null:M.child;else if(M.tag===18){if(w=M.return,w===null)throw Error(t(341));w.lanes|=u,F=w.alternate,F!==null&&(F.lanes|=u),ud(w,u,o),w=M.sibling}else w=M.child;if(w!==null)w.return=M;else for(w=M;w!==null;){if(w===o){w=null;break}if(M=w.sibling,M!==null){M.return=w.return,w=M;break}w=w.return}M=w}On(r,o,_.children,u),o=o.child}return o;case 9:return _=o.type,f=o.pendingProps.children,no(o,u),_=oi(_),f=f(_),o.flags|=1,On(r,o,f,u),o.child;case 14:return f=o.type,_=Si(f,o.pendingProps),_=Si(f.type,_),Sg(r,o,f,_,u);case 15:return Eg(r,o,o.type,o.pendingProps,u);case 17:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),Jl(r,o),o.tag=1,Xn(f)?(r=!0,Ul(o)):r=!1,no(o,u),pg(o,f,_),wd(o,f,_,u),Cd(null,o,f,!0,r,u);case 19:return Lg(r,o,u);case 22:return Tg(r,o,u)}throw Error(t(156,o.tag))};function t_(r,o){return L(r,o)}function mM(r,o,u,f){this.tag=r,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(r,o,u,f){return new mM(r,o,u,f)}function $d(r){return r=r.prototype,!(!r||!r.isReactComponent)}function gM(r){if(typeof r=="function")return $d(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Y)return 11;if(r===le)return 14}return 2}function kr(r,o){var u=r.alternate;return u===null?(u=ui(r.tag,o,r.key,r.mode),u.elementType=r.elementType,u.type=r.type,u.stateNode=r.stateNode,u.alternate=r,r.alternate=u):(u.pendingProps=o,u.type=r.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=r.flags&14680064,u.childLanes=r.childLanes,u.lanes=r.lanes,u.child=r.child,u.memoizedProps=r.memoizedProps,u.memoizedState=r.memoizedState,u.updateQueue=r.updateQueue,o=r.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=r.sibling,u.index=r.index,u.ref=r.ref,u}function cu(r,o,u,f,_,M){var w=2;if(f=r,typeof r=="function")$d(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case U:return ms(u.children,_,M,o);case z:w=8,_|=8;break;case P:return r=ui(12,u,o,_|2),r.elementType=P,r.lanes=M,r;case ee:return r=ui(13,u,o,_),r.elementType=ee,r.lanes=M,r;case de:return r=ui(19,u,o,_),r.elementType=de,r.lanes=M,r;case ie:return du(u,_,M,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case b:w=10;break e;case B:w=9;break e;case Y:w=11;break e;case le:w=14;break e;case ue:w=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=ui(w,u,o,_),o.elementType=r,o.type=f,o.lanes=M,o}function ms(r,o,u,f){return r=ui(7,r,f,o),r.lanes=u,r}function du(r,o,u,f){return r=ui(22,r,f,o),r.elementType=ie,r.lanes=u,r.stateNode={isHidden:!1},r}function Kd(r,o,u){return r=ui(6,r,null,o),r.lanes=u,r}function Zd(r,o,u){return o=ui(4,r.children!==null?r.children:[],r.key,o),o.lanes=u,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function _M(r,o,u,f,_){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tn(0),this.expirationTimes=Tn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.identifierPrefix=f,this.onRecoverableError=_,this.mutableSourceEagerHydrationData=null}function Qd(r,o,u,f,_,M,w,F,G){return r=new _M(r,o,u,F,G),o===1?(o=1,M===!0&&(o|=8)):o=0,M=ui(3,null,null,o),r.current=M,M.stateNode=r,M.memoizedState={element:f,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(M),r}function vM(r,o,u){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:r,containerInfo:o,implementation:u}}function n_(r){if(!r)return Cr;r=r._reactInternals;e:{if(Fi(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Xn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var u=r.type;if(Xn(u))return Pm(r,u,o)}return o}function i_(r,o,u,f,_,M,w,F,G){return r=Qd(u,f,!0,r,_,M,w,F,G),r.context=n_(null),u=r.current,f=Fn(),_=Or(u),M=or(f,_),M.callback=o??null,Ir(u,M,_),r.current.lanes=_,sn(r,_,f),qn(r,f),r}function hu(r,o,u,f){var _=o.current,M=Fn(),w=Or(_);return u=n_(u),o.context===null?o.context=u:o.pendingContext=u,o=or(M,w),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=Ir(_,o,w),r!==null&&(wi(r,_,w,M),Gl(r,_,w)),w}function fu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function r_(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var u=r.retryLane;r.retryLane=u!==0&&u<o?u:o}}function Jd(r,o){r_(r,o),(r=r.alternate)&&r_(r,o)}function xM(){return null}var s_=typeof reportError=="function"?reportError:function(r){console.error(r)};function eh(r){this._internalRoot=r}pu.prototype.render=eh.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));hu(r,o,null,null)},pu.prototype.unmount=eh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;hs(function(){hu(null,r,null,null)}),o[tr]=null}};function pu(r){this._internalRoot=r}pu.prototype.unstable_scheduleHydration=function(r){if(r){var o=Hp();r={blockedOn:null,target:r,priority:o};for(var u=0;u<Tr.length&&o!==0&&o<Tr[u].priority;u++);Tr.splice(u,0,r),u===0&&Xp(r)}};function th(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function mu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function o_(){}function yM(r,o,u,f,_){if(_){if(typeof f=="function"){var M=f;f=function(){var re=fu(w);M.call(re)}}var w=i_(o,f,r,0,null,!1,!1,"",o_);return r._reactRootContainer=w,r[tr]=w.current,ga(r.nodeType===8?r.parentNode:r),hs(),w}for(;_=r.lastChild;)r.removeChild(_);if(typeof f=="function"){var F=f;f=function(){var re=fu(G);F.call(re)}}var G=Qd(r,0,!1,null,null,!1,!1,"",o_);return r._reactRootContainer=G,r[tr]=G.current,ga(r.nodeType===8?r.parentNode:r),hs(function(){hu(o,G,u,f)}),G}function gu(r,o,u,f,_){var M=u._reactRootContainer;if(M){var w=M;if(typeof _=="function"){var F=_;_=function(){var G=fu(w);F.call(G)}}hu(o,w,r,_)}else w=yM(u,o,r,_,f);return fu(w)}Vp=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var u=un(o.pendingLanes);u!==0&&(is(o,u|1),qn(o,j()),(It&6)===0&&(ao=j()+500,Pr()))}break;case 13:hs(function(){var f=sr(r,1);if(f!==null){var _=Fn();wi(f,r,1,_)}}),Jd(r,1)}},Ac=function(r){if(r.tag===13){var o=sr(r,134217728);if(o!==null){var u=Fn();wi(o,r,134217728,u)}Jd(r,134217728)}},zp=function(r){if(r.tag===13){var o=Or(r),u=sr(r,o);if(u!==null){var f=Fn();wi(u,r,o,f)}Jd(r,o)}},Hp=function(){return At},Gp=function(r,o){var u=At;try{return At=r,o()}finally{At=u}},Te=function(r,o,u){switch(o){case"input":if(Be(r,u),o=u.name,u.type==="radio"&&o!=null){for(u=r;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var f=u[o];if(f!==r&&f.form===r.form){var _=Nl(f);if(!_)throw Error(t(90));Et(f),Be(f,_)}}}break;case"textarea":A(r,u);break;case"select":o=u.value,o!=null&&Gt(r,!!u.multiple,o,!1)}},ft=jd,Lt=hs;var MM={usingClientEntryPoint:!1,Events:[xa,qs,Nl,pe,He,jd]},Na={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SM={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Vs(r),r===null?null:r.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||xM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Qe=_u.inject(SM),pt=_u}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MM,$n.createPortal=function(r,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(o))throw Error(t(200));return vM(r,o,null,u)},$n.createRoot=function(r,o){if(!th(r))throw Error(t(299));var u=!1,f="",_=s_;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),o=Qd(r,1,!1,null,null,u,!1,f,_),r[tr]=o.current,ga(r.nodeType===8?r.parentNode:r),new eh(o)},$n.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Vs(o),r=r===null?null:r.stateNode,r},$n.flushSync=function(r){return hs(r)},$n.hydrate=function(r,o,u){if(!mu(o))throw Error(t(200));return gu(null,r,o,!0,u)},$n.hydrateRoot=function(r,o,u){if(!th(r))throw Error(t(405));var f=u!=null&&u.hydratedSources||null,_=!1,M="",w=s_;if(u!=null&&(u.unstable_strictMode===!0&&(_=!0),u.identifierPrefix!==void 0&&(M=u.identifierPrefix),u.onRecoverableError!==void 0&&(w=u.onRecoverableError)),o=i_(o,null,r,1,u??null,_,!1,M,w),r[tr]=o.current,ga(r),f)for(r=0;r<f.length;r++)u=f[r],_=u._getVersion,_=_(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,_]:o.mutableSourceEagerHydrationData.push(u,_);return new pu(o)},$n.render=function(r,o,u){if(!mu(o))throw Error(t(200));return gu(null,r,o,!1,u)},$n.unmountComponentAtNode=function(r){if(!mu(r))throw Error(t(40));return r._reactRootContainer?(hs(function(){gu(null,null,r,!1,function(){r._reactRootContainer=null,r[tr]=null})}),!0):!1},$n.unstable_batchedUpdates=jd,$n.unstable_renderSubtreeIntoContainer=function(r,o,u,f){if(!mu(u))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return gu(r,o,u,!1,f)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var p_;function PM(){if(p_)return rh.exports;p_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),rh.exports=CM(),rh.exports}var m_;function LM(){if(m_)return vu;m_=1;var i=PM();return vu.createRoot=i.createRoot,vu.hydrateRoot=i.hydrateRoot,vu}var IM=LM();function b0({text:i}){const e=i.split(/```/);return K.jsx(K.Fragment,{children:e.map((t,n)=>n%2===1?K.jsx("pre",{className:"code",children:K.jsx("code",{children:t.replace(/^[\w+-]*\n/,"")})},n):K.jsx("span",{className:"prose",children:t},n))})}function NM({name:i,messages:e,busy:t,open:n,onToggle:s,onSend:a,onStop:l,onHeight:c}){const[d,h]=gt.useState(""),m=gt.useRef(null),p=gt.useRef(null),g=gt.useRef(!1);gt.useEffect(()=>{const S=m.current,E=new ResizeObserver(()=>c(S.getBoundingClientRect().height));return E.observe(S),()=>E.disconnect()},[c]),gt.useEffect(()=>{p.current?.scrollTo({top:p.current.scrollHeight})},[e,n]);const v=S=>{S?.preventDefault();const E=d.trim();!E||t||(a(E),h(""))};return K.jsxs("div",{className:`chat glass ${n?"open":""}`,ref:m,children:[n&&K.jsxs("div",{className:"chat-log",ref:p,children:[e.length===0&&K.jsx("p",{className:"chat-empty",children:"ここに会話の履歴が残ります"}),e.map((S,E)=>K.jsxs("div",{className:`msg ${S.role} ${S.error?"error":""}`,children:[K.jsx("div",{className:"msg-who",children:S.role==="user"?"YOU":i}),K.jsx("div",{className:"msg-body",children:K.jsx(b0,{text:S.content||"…"})})]},E))]}),K.jsxs("form",{className:"chat-input",onSubmit:v,children:[K.jsx("button",{type:"button",className:"icon-btn",onClick:s,"aria-label":n?"履歴を閉じる":"履歴を開く","aria-expanded":n,children:n?"▾":"▴"}),K.jsx("textarea",{rows:1,value:d,placeholder:`${i}に話しかける…`,onChange:S=>h(S.target.value),onCompositionStart:()=>g.current=!0,onCompositionEnd:()=>g.current=!1,onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&!g.current&&!S.nativeEvent.isComposing&&(S.preventDefault(),v())}}),t?K.jsx("button",{type:"button",className:"send-btn stop",onClick:l,children:"停止"}):K.jsx("button",{type:"submit",className:"send-btn",disabled:!d.trim(),children:"送信"})]}),K.jsx("p",{className:"chat-note",children:"患者情報など業務上の個人情報は入力しないでください"})]})}const DM=["SUN","MON","TUE","WED","THU","FRI","SAT"],UM="日月火水木金土",No=i=>String(i).padStart(2,"0");function OM(i,e){return{time:`${No(i.getHours())}:${No(i.getMinutes())}${e?`:${No(i.getSeconds())}`:""}`,date:`${i.getFullYear()}.${No(i.getMonth()+1)}.${No(i.getDate())}`,week:DM[i.getDay()],weekJa:UM[i.getDay()]}}function FM(i,e){const t=i.getHours();return t>=5&&t<11?`おはよう、${e}。今日もよろしくね`:t>=11&&t<17?`こんにちは、${e}。何か手伝えることある？`:t>=17&&t<23?`おかえり、${e}。今日もおつかれさま`:`こんな時間まで起きてるの？ ${e}、無理しないでね`}function kM(i,e){const t=`${i.getHours()}:${No(i.getMinutes())}`;return{"7:00":`おはよう、${e}。朝ごはん食べた？`,"12:00":"お昼の時間だよ。ちゃんと食べてね","15:00":"そろそろ休憩しよう。お茶でもどう？","18:00":"もう夕方だね。今日やり残したことはない？","22:00":"そろそろ明日の準備をしておこうか","0:00":"日付が変わったよ。早めに休んでね"}[t]??null}function BM(i){return i>0&&i%90===0?`${i}分続けてがんばってるね。少し目を休めよう`:null}function VM({corner:i,seconds:e}){const[t,n]=gt.useState(()=>new Date);gt.useEffect(()=>{let a=0;const l=()=>{n(new Date),a=window.setTimeout(l,1e3-Date.now()%1e3+5)};return l(),()=>clearTimeout(a)},[]);const s=OM(t,e);return K.jsxs("div",{className:`clock ${i}`,"aria-label":`${s.date} ${s.weekJa}曜日 ${s.time}`,children:[K.jsxs("div",{className:"clock-date",children:[s.date," ",K.jsx("span",{className:"clock-week",children:s.week})]}),K.jsx("div",{className:"clock-time",children:s.time})]})}const g_=[{id:"gemini",name:"Gemini（Google）",summary:"Googleアカウントがあればすぐ作れて、無料枠があります。まず試すならこれがおすすめ。",cost:"無料枠あり（回数に上限）。上限を超えて使う時は Google Cloud で支払い設定をする。",steps:[{title:"Google AI Studio を開く",body:"スマホのブラウザでも開けます。Googleアカウントでログインし、初回は利用規約に同意します。",link:{label:"Google AI Studio を開く",url:"https://aistudio.google.com/apikey"}},{title:"キーを作る",body:"「Get API key」または「APIキーを作成」を押します。プロジェクトを聞かれたら、新しく作る方を選べばOKです。"},{title:"キーをコピーする",body:"「AIza」で始まる文字列が表示されるので、コピーボタンでコピーします。"},{title:"このアプリに貼る",body:"⚙ →「AI」→ 使うAIを「Gemini（Google）」にして、APIキーの欄に貼り付けて「保存」。"}],models:"おすすめ：gemini-flash-latest（いつも最新の Flash。速くて安い）。よく考えてほしい時：gemini-pro-latest。キーを保存すると、使えるモデルを確かめて自動で選び直します。",cautions:["無料枠で送った内容は、Googleのサービス改善に使われることがあります。個人情報や仕事の情報は入れないでください。"]},{id:"anthropic",name:"Claude（Anthropic）",summary:"文章や考える力が強いAI。先にクレジット（前払い）を買う方式です。",cost:"前払い制（最低5ドル程度から）。使った分だけ減っていきます。Claude の有料プラン（Pro など）とは別の支払いです。",steps:[{title:"Claude Console を開いて登録する",body:"メールアドレスまたはGoogleアカウントで登録・ログインします。",link:{label:"Claude Console を開く",url:"https://console.anthropic.com/"}},{title:"クレジットを買う",body:"「Billing」（請求）からカードを登録し、クレジットを購入します。残高がないとAIは返事をしません。",link:{label:"Billing を開く",url:"https://console.anthropic.com/settings/billing"}},{title:"キーを作る",body:"「API Keys」→「Create Key」を押し、名前（例：YUI）を付けて作成します。",link:{label:"API Keys を開く",url:"https://console.anthropic.com/settings/keys"}},{title:"キーをコピーする",body:"「sk-ant-」で始まる文字列をコピーします。この画面を閉じると二度と表示されないので、必ずここでコピーしてください。"},{title:"このアプリに貼る",body:"⚙ →「AI」→ 使うAIを「Claude（Anthropic）」にして、APIキーの欄に貼り付けて「保存」。"},{title:"使いすぎ防止（おすすめ）",body:"「Limits」で1か月に使える上限額を決めておくと安心です。",link:{label:"Limits を開く",url:"https://console.anthropic.com/settings/limits"}}],models:"おすすめ：claude-sonnet-5-5（バランス型）。安く速く：claude-haiku-5-5。いちばん賢い：claude-opus-5-5（高め）。キーを保存すると、使えるモデルを確かめて自動で選び直します。",cautions:[]},{id:"openai",name:"ChatGPT（OpenAI）",summary:"ChatGPT と同じ会社のAI。支払い設定をしてから使います。",cost:"前払い（クレジット購入）制。ChatGPT Plus などの月額プランとは別の支払いです。",steps:[{title:"OpenAI Platform を開いて登録する",body:"ChatGPT と同じアカウントでログインできます。",link:{label:"OpenAI Platform を開く",url:"https://platform.openai.com/"}},{title:"支払い設定をする",body:"「Settings」→「Billing」でカードを登録し、クレジットを購入します。",link:{label:"Billing を開く",url:"https://platform.openai.com/settings/organization/billing/overview"}},{title:"キーを作る",body:"「API keys」→「Create new secret key」を押し、名前（例：YUI）を付けて作成します。",link:{label:"API keys を開く",url:"https://platform.openai.com/api-keys"}},{title:"キーをコピーする",body:"「sk-」で始まる文字列をコピーします。閉じると二度と表示されないので、ここで必ずコピーしてください。"},{title:"このアプリに貼る",body:"⚙ →「AI」→ 使うAIを「ChatGPT（OpenAI）」にして、APIキーの欄に貼り付けて「保存」。"},{title:"使いすぎ防止（おすすめ）",body:"「Limits」で月の予算（上限）を決めておくと安心です。",link:{label:"Limits を開く",url:"https://platform.openai.com/settings/organization/limits"}}],models:"おすすめ：gpt-5-mini（安くて速い）。よく考えてほしい時：gpt-5。キーを保存すると、使えるモデルを確かめて自動で選び直します。",cautions:[]}],zM=["APIキーはお金がかかる「合い鍵」です。人に見せたり、SNS・チャットに貼ったりしないでください。","もし漏れたかもと思ったら、各サービスの管理画面でそのキーを削除して、新しく作り直してください。","キーはこのアプリの中で暗号化して、この端末にだけ保存します。別の端末で使う時は、その端末でも設定が必要です。","画面のボタン名は各社の変更で変わることがあります。見つからない時は「API Keys」「Billing」に近い名前のメニューを探してください。"];function HM({initial:i="gemini",configured:e,onSetup:t,onClose:n}){const[s,a]=gt.useState(i),l=g_.find(c=>c.id===s);return K.jsx("div",{className:"overlay",onClick:n,children:K.jsxs("div",{className:"settings glass",role:"dialog","aria-label":"APIキーの取り方",onClick:c=>c.stopPropagation(),children:[K.jsxs("header",{className:"settings-head",children:[K.jsx("h2",{children:"GUIDE"}),K.jsx("button",{className:"icon-btn",onClick:n,"aria-label":"閉じる",children:"✕"})]}),K.jsx("nav",{className:"tabs",role:"tablist",children:g_.map(c=>K.jsxs("button",{role:"tab","aria-selected":s===c.id,className:s===c.id?"active":"",onClick:()=>a(c.id),children:[c.name.replace(/（.*）/,""),e[c.id]?" ✓":""]},c.id))}),K.jsxs("div",{className:"settings-body guide",children:[K.jsxs("p",{className:"guide-title",children:[l.name," の APIキーの取り方"]}),K.jsx("p",{children:l.summary}),K.jsxs("p",{className:"hint",children:["料金：",l.cost]}),K.jsx("ol",{className:"steps",children:l.steps.map((c,d)=>K.jsxs("li",{children:[K.jsx("strong",{children:c.title}),K.jsx("span",{children:c.body}),c.link&&K.jsxs("a",{className:"ghost-btn link-btn",href:c.link.url,target:"_blank",rel:"noreferrer",children:[c.link.label," ↗"]})]},d))}),K.jsx("h3",{children:"モデル名"}),K.jsx("p",{className:"hint",children:l.models}),K.jsx("h3",{children:"注意"}),K.jsx("ul",{className:"cautions",children:[...l.cautions,...zM].map(c=>K.jsx("li",{children:c},c))}),K.jsxs("button",{className:"primary-btn",onClick:()=>t(l.id),children:["キーをコピーしたら：",l.name.replace(/（.*）/,"")," を設定する"]})]})]})})}const ah={anthropic:{label:"Claude（Anthropic）",keyHint:"sk-ant-…",models:["claude-sonnet-5-5","claude-haiku-5-5","claude-opus-5-5"],policy:"https://www.anthropic.com/legal/commercial-terms"},openai:{label:"ChatGPT（OpenAI）",keyHint:"sk-…",models:["gpt-5-mini","gpt-5"],policy:"https://openai.com/policies/api-data-usage-policies"},gemini:{label:"Gemini（Google）",keyHint:"AIza…",models:["gemini-flash-latest","gemini-pro-latest"],policy:"https://ai.google.dev/gemini-api/terms"}},GM=20;function WM(i,e=GM){let t=i.filter(n=>n.content.trim()).slice(-e);for(;t.length&&t[0].role!=="user";)t=t.slice(1);return t}let C0=class extends Error{constructor(e,t){super(e),this.status=t}};async function lh(i,e){const t=i.body.getReader(),n=new TextDecoder;let s="";for(;;){const{done:a,value:l}=await t.read();s+=n.decode(l,{stream:!a});const c=s.split(/\r?\n\r?\n/);s=a?"":c.pop();for(const d of c){const h=d.split(/\r?\n/).filter(p=>p.startsWith("data:")).map(p=>p.slice(5).trimStart()).join(`
`);if(!h||h==="[DONE]")continue;let m;try{m=JSON.parse(h)}catch{continue}e(m)}if(a)return}}async function uh(i,e,t,n){const s=await fetch(i,{method:"POST",headers:{"content-type":"application/json",...e},body:JSON.stringify(t),signal:n});if(!s.ok){const a=await s.json().catch(()=>({})),l=Array.isArray(a)?a[0]?.error:a?.error;throw new C0(l?.message??`HTTP ${s.status}`,s.status)}return s}const XM={async anthropic({apiKey:i,model:e,system:t,messages:n,onText:s,signal:a}){const l=await uh("https://api.anthropic.com/v1/messages",{"x-api-key":i,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},{model:e,max_tokens:4e3,system:t,messages:n,stream:!0},a),c={input:0,output:0};let d=!1;if(await lh(l,h=>{if(h.type==="message_start")c.input=h.message?.usage?.input_tokens??0;else if(h.type==="content_block_delta"&&h.delta?.type==="text_delta")s(h.delta.text);else if(h.type==="message_delta")c.output=h.usage?.output_tokens??c.output,h.delta?.stop_reason==="refusal"&&(d=!0);else if(h.type==="error")throw new Error(h.error?.message??"AIの返答が途中で止まりました")}),d)throw new Error("AIがこの内容には答えませんでした");return c},async openai({apiKey:i,model:e,system:t,messages:n,onText:s,signal:a}){const l=await uh("https://api.openai.com/v1/chat/completions",{authorization:`Bearer ${i}`},{model:e,stream:!0,stream_options:{include_usage:!0},messages:[{role:"system",content:t},...n]},a),c={input:0,output:0};return await lh(l,d=>{const h=d.choices?.[0]?.delta?.content;h&&s(h),d.usage&&(c.input=d.usage.prompt_tokens??0),d.usage&&(c.output=d.usage.completion_tokens??0)}),c},async gemini({apiKey:i,model:e,system:t,messages:n,onText:s,signal:a}){const l=await uh(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(e)}:streamGenerateContent?alt=sse`,{"x-goog-api-key":i},{systemInstruction:{parts:[{text:t}]},contents:n.map(d=>({role:d.role==="assistant"?"model":"user",parts:[{text:d.content}]}))},a),c={input:0,output:0};return await lh(l,d=>{for(const h of d.candidates?.[0]?.content?.parts??[])h.text&&!h.thought&&s(h.text);d.usageMetadata&&(c.input=d.usageMetadata.promptTokenCount??0,c.output=(d.usageMetadata.candidatesTokenCount??0)+(d.usageMetadata.thoughtsTokenCount??0))}),c}};class P0 extends Error{constructor(e){super(`モデル「${e}」が見つかりません。設定でモデル名を確認してください`),this.model=e}}async function ch(i,e){const t=await fetch(i,{headers:e}),n=await t.json().catch(()=>({}));if(!t.ok)throw new C0(n?.error?.message??`HTTP ${t.status}`,t.status);return n}async function jM(i,e){return i==="gemini"?((await ch("https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000",{"x-goog-api-key":e})).models??[]).filter(s=>(s.supportedGenerationMethods??[]).includes("generateContent")).map(s=>String(s.name).replace(/^models\//,"")).filter(s=>/^gemini/.test(s)&&!/(image|tts|audio|live|embedding|vision|robotics|computer)/.test(s)):i==="openai"?((await ch("https://api.openai.com/v1/models",{authorization:`Bearer ${e}`})).data??[]).map(s=>String(s.id)).filter(s=>/^(gpt-|o\d|chatgpt-)/.test(s)&&!/(audio|realtime|image|tts|transcribe|search|embedding|instruct|codex|moderation)/.test(s)):((await ch("https://api.anthropic.com/v1/models?limit=100",{"x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"})).data??[]).map(n=>String(n.id))}function YM(i,e){if(!e.length)return null;const t={gemini:[/^gemini-flash-latest$/,/^gemini-[\d.]+-flash$/,/flash(?!.*lite)/,/flash/,/pro/],anthropic:[/sonnet/,/haiku/,/opus/],openai:[/^gpt-[\d.]+-mini$/,/^gpt-[\d.]+$/,/mini/,/^gpt/]},n=/(preview|exp|latest-preview|\d{4}-\d{2}-\d{2}|\d{8}$)/,s=a=>(a.match(/\d+(?:[.-]\d+)?/g)??[]).map(l=>parseFloat(l.replace("-","."))).filter(l=>l<100)[0]??0;for(const a of t[i]){const l=e.filter(h=>a.test(h));if(!l.length)continue;const c=l.filter(h=>!n.test(h));return(c.length?c:l).sort((h,m)=>s(m)-s(h)||h.length-m.length)[0]}return e[0]}async function qM(i){if(!i.apiKey)throw new Error("APIキーが設定されていません。右上の ⚙ から設定してください");try{return await XM[i.provider](i)}catch(e){throw e?.name==="AbortError"?new Error("止めました"):e instanceof TypeError?new Error("通信できませんでした。ネットワークを確認してください"):e?.status===401||e?.status===403?new Error("APIキーが正しくないか、使えない状態です"):e?.status===404?new P0(i.model):e?.status===429?new Error("利用回数の上限に達しました。少し待ってから試してください"):e}}function $M(i,e,t){return e==null||t==null?null:(i.input*e+i.output*t)/1e6}const L0=[{id:"schedule",label:"日程管理"},{id:"documents",label:"書類"},{id:"study",label:"勉強"},{id:"dev",label:"アプリ開発"},{id:"invest",label:"投資ニュース"},{id:"chat",label:"雑談"}],uc={name:"ユイ",userCall:"あなた",tone:"やわらかいタメ口",personality:"明るくて気が利く。相手のペースに合わせ、がんばりすぎていたら休むよう声をかける。",purposes:["schedule","documents","study","dev","chat"]},dh={provider:"anthropic",models:{anthropic:"claude-sonnet-5-5",openai:"gpt-5-mini",gemini:"gemini-flash-latest"},priceIn:null,priceOut:null},KM={clock:!0,clockCorner:"top-left",seconds:!0,powerSave:!1,voiceLines:!0},ZM=[{id:"ai",label:"AI"},{id:"persona",label:"性格"},{id:"character",label:"キャラ"},{id:"display",label:"表示"}],QM=[{id:"top-left",label:"左上"},{id:"top-right",label:"右上"},{id:"bottom-left",label:"左下"},{id:"bottom-right",label:"右下"}];function JM(i){const[e,t]=gt.useState(i.initialTab??(i.keys[i.ai.provider]?"persona":"ai"));return K.jsx("div",{className:"overlay",onClick:i.onClose,children:K.jsxs("div",{className:"settings glass",role:"dialog","aria-label":"設定",onClick:n=>n.stopPropagation(),children:[K.jsxs("header",{className:"settings-head",children:[K.jsx("h2",{children:"SETTINGS"}),K.jsx("button",{className:"icon-btn",onClick:i.onClose,"aria-label":"閉じる",children:"✕"})]}),K.jsx("nav",{className:"tabs",role:"tablist",children:ZM.map(n=>K.jsx("button",{role:"tab","aria-selected":e===n.id,className:e===n.id?"active":"",onClick:()=>t(n.id),children:n.label},n.id))}),K.jsxs("div",{className:"settings-body",children:[e==="ai"&&K.jsx(eS,{...i}),e==="persona"&&K.jsx(tS,{...i}),e==="character"&&K.jsx(nS,{...i}),e==="display"&&K.jsx(iS,{...i})]})]})})}function eS({ai:i,keys:e,usage:t,onAi:n,onKey:s,onResetUsage:a,onGuide:l,available:c,onLoadModels:d}){const h=ah[i.provider],[m,p]=gt.useState(""),g=c[i.provider],[v,S]=gt.useState(e[i.provider]),[E,y]=gt.useState(!1),x=$M(t,i.priceIn,i.priceOut),C=R=>R.trim()===""?null:Math.max(0,Number(R))||0;return K.jsxs(K.Fragment,{children:[K.jsxs("label",{className:"field",children:[K.jsx("span",{children:"使うAI"}),K.jsx("select",{value:i.provider,onChange:R=>{const T=R.target.value;n({...i,provider:T}),S(e[T])},children:Object.keys(ah).map(R=>K.jsx("option",{value:R,children:ah[R].label},R))})]}),K.jsxs("label",{className:"field",children:[K.jsx("span",{children:"モデル"}),g?.length?K.jsx("select",{value:i.models[i.provider],onChange:R=>n({...i,models:{...i.models,[i.provider]:R.target.value}}),children:[...new Set([i.models[i.provider],...g])].map(R=>K.jsxs("option",{value:R,children:[R,g.includes(R)?"":"（使えません）"]},R))}):K.jsxs(K.Fragment,{children:[K.jsx("input",{list:"models",value:i.models[i.provider],onChange:R=>n({...i,models:{...i.models,[i.provider]:R.target.value.trim()}})}),K.jsx("datalist",{id:"models",children:h.models.map(R=>K.jsx("option",{value:R},R))})]})]}),e[i.provider]&&K.jsxs("div",{className:"row",children:[K.jsx("button",{type:"button",className:"ghost-btn",disabled:m==="…",onClick:async()=>{p("…");try{const R=await d(i.provider);p(`使えるモデルを確認しました（今は ${R}）`)}catch(R){p(`確認できませんでした：${R.message}`)}},children:"使えるモデルを確認"}),K.jsx("span",{className:"hint",children:m==="…"?"確認中…":m})]}),g&&K.jsxs("p",{className:"hint",children:["モデル欄をタップすると、このキーで使える ",g.length," 個のモデルから選べます。"]}),K.jsxs("button",{type:"button",className:"text-link",onClick:()=>l(i.provider),children:["📖 ",h.label," の APIキーの取り方を見る"]}),K.jsxs("label",{className:"field",children:[K.jsx("span",{children:"APIキー"}),K.jsxs("div",{className:"row",children:[K.jsx("input",{type:E?"text":"password",value:v,placeholder:h.keyHint,autoComplete:"off",spellCheck:!1,onChange:R=>S(R.target.value.trim())}),K.jsx("button",{type:"button",className:"ghost-btn",onClick:()=>y(!E),children:E?"隠す":"表示"})]})]}),K.jsxs("div",{className:"row end",children:[e[i.provider]&&K.jsx("button",{className:"ghost-btn",onClick:()=>{s(i.provider,""),S("")},children:"削除"}),K.jsx("button",{className:"primary-btn",disabled:v===e[i.provider],onClick:()=>s(i.provider,v),children:e[i.provider]&&v===e[i.provider]?"保存済み":"保存"})]}),K.jsxs("p",{className:"hint",children:["キーはこの端末の中だけに暗号化して保存し、AIサービスへの接続にだけ使います。念のため、各サービスの管理画面で利用上限額を設定してください。",K.jsx("br",{}),K.jsxs("a",{href:h.policy,target:"_blank",rel:"noreferrer",children:[h.label," のデータの取り扱い"]})]}),K.jsx("h3",{children:"利用量の目安"}),K.jsxs("p",{className:"usage",children:["入力 ",t.input.toLocaleString()," ／ 出力 ",t.output.toLocaleString()," トークン",x!=null&&K.jsxs("strong",{children:["　約 ",x<1?x.toFixed(2):Math.round(x).toLocaleString()," 円"]})]}),K.jsxs("div",{className:"row",children:[K.jsxs("label",{className:"field small",children:[K.jsx("span",{children:"入力の単価（円／100万トークン）"}),K.jsx("input",{inputMode:"decimal",value:i.priceIn??"",onChange:R=>n({...i,priceIn:C(R.target.value)})})]}),K.jsxs("label",{className:"field small",children:[K.jsx("span",{children:"出力の単価"}),K.jsx("input",{inputMode:"decimal",value:i.priceOut??"",onChange:R=>n({...i,priceOut:C(R.target.value)})})]})]}),K.jsx("p",{className:"hint",children:"単価は使っているモデルの料金表を見て入れてください。入れると金額の目安を出します。会話は直近20件だけを送って量を抑えています。"}),K.jsx("button",{className:"ghost-btn",onClick:a,children:"利用量をリセット"})]})}function tS({persona:i,onPersona:e}){const t=n=>e({...i,...n});return K.jsxs(K.Fragment,{children:[K.jsxs("label",{className:"field",children:[K.jsx("span",{children:"名前"}),K.jsx("input",{value:i.name,maxLength:20,onChange:n=>t({name:n.target.value}),onBlur:()=>!i.name.trim()&&t({name:uc.name})})]}),K.jsxs("label",{className:"field",children:[K.jsx("span",{children:"あなたの呼び方"}),K.jsx("input",{value:i.userCall,maxLength:20,onChange:n=>t({userCall:n.target.value})})]}),K.jsxs("label",{className:"field",children:[K.jsx("span",{children:"口調"}),K.jsx("input",{value:i.tone,maxLength:40,placeholder:"例：丁寧語、元気なタメ口、関西弁",onChange:n=>t({tone:n.target.value})})]}),K.jsxs("label",{className:"field",children:[K.jsx("span",{children:"性格"}),K.jsx("textarea",{rows:3,value:i.personality,maxLength:400,onChange:n=>t({personality:n.target.value})})]}),K.jsxs("fieldset",{className:"field",children:[K.jsx("legend",{children:"サポートしてほしいこと（複数選べます）"}),K.jsx("div",{className:"chips",children:L0.map(n=>{const s=i.purposes.includes(n.id);return K.jsx("button",{type:"button",className:`chip ${s?"on":""}`,"aria-pressed":s,onClick:()=>t({purposes:s?i.purposes.filter(a=>a!==n.id):[...i.purposes,n.id]}),children:n.label},n.id)})})]}),K.jsx("p",{className:"hint",children:"選んだ内容に合わせて、AIへの指示を自動で切り替えます。健康の話題で診断はせず、投資の売買の助言もしません。"}),K.jsx("button",{className:"ghost-btn",onClick:()=>e(uc),children:"初期設定に戻す"})]})}function nS({hasVrm:i,vrmName:e,vrmError:t,onVrm:n}){return K.jsxs(K.Fragment,{children:[K.jsxs("p",{children:["いまのキャラクター：",K.jsx("strong",{children:i?e||"読み込んだVRM":"仮のキャラクター（光の精）"})]}),K.jsxs("label",{className:"primary-btn file-btn",children:["VRMファイルを読み込む",K.jsx("input",{type:"file",accept:".vrm",onChange:s=>{const a=s.target.files?.[0];a&&n(a),s.target.value=""}})]}),i&&K.jsx("button",{className:"ghost-btn",onClick:()=>n(null),children:"仮のキャラクターに戻す"}),t&&K.jsx("p",{className:"error-text",children:t}),K.jsx("p",{className:"hint",children:"VRoid Studio で作ったモデルや、VRoid Hub で配布されているモデル（利用条件を確認してください）が使えます。読み込んだファイルはこの端末の中だけに保存します。自分で作ったものか、使う権利のあるモデルだけを読み込んでください。"}),K.jsx("p",{className:"hint",children:"キャラクターをタップすると反応します。何もないところをタップすると、そこへ移動します。"})]})}function iS({display:i,onDisplay:e,onClearChat:t}){const n=s=>e({...i,...s});return K.jsxs(K.Fragment,{children:[K.jsx(xu,{label:"時計を表示",checked:i.clock,onChange:s=>n({clock:s})}),K.jsx(xu,{label:"秒を表示",checked:i.seconds,disabled:!i.clock,onChange:s=>n({seconds:s})}),K.jsxs("fieldset",{className:"field",children:[K.jsx("legend",{children:"時計の位置"}),K.jsx("div",{className:"chips",children:QM.map(s=>K.jsx("button",{type:"button",className:`chip ${i.clockCorner===s.id?"on":""}`,"aria-pressed":i.clockCorner===s.id,onClick:()=>n({clockCorner:s.id}),children:s.label},s.id))})]}),K.jsx(xu,{label:"時刻に合わせた声かけ",checked:i.voiceLines,onChange:s=>n({voiceLines:s})}),K.jsx(xu,{label:"省電力モード（背景を止める）",checked:i.powerSave,onChange:s=>n({powerSave:s})}),K.jsx("p",{className:"hint",children:"画質は端末の性能に合わせて自動で調整します。動きが重い時は省電力モードにしてください。"}),K.jsx("h3",{children:"データ"}),K.jsx("button",{className:"ghost-btn danger",onClick:()=>{confirm("会話の履歴をすべて消しますか？")&&t()},children:"会話の履歴を消す"})]})}function xu({label:i,checked:e,disabled:t,onChange:n}){return K.jsxs("label",{className:`toggle ${t?"disabled":""}`,children:[K.jsx("span",{children:i}),K.jsx("input",{type:"checkbox",role:"switch",checked:e,disabled:t,onChange:s=>n(s.target.checked)}),K.jsx("i",{"aria-hidden":!0})]})}const __={schedule:"日程管理：予定の整理、勤務シフトを踏まえた予定の組み方、やることの優先順位づけを手伝う。今の版ではカレンダーの読み書きや通知はまだできないので、登録したふりはせず「メモしておいてね」と伝える。",documents:"書類：報告書・申請書・資料の構成案や下書き、文章の校正・要約を手伝う。直した箇所と理由を短く添える。",study:"勉強：資格や業務知識の問題を出し、答え合わせと解説をする。一度に1問ずつ出し、相手の答えを待つ。",dev:"アプリ開発：企画の壁打ち、設計やコードの相談、エラーの原因探しを手伝う。コードはコードブロックで示す。",invest:"投資ニュース：市場や銘柄の話題を整理して説明する。今の版ではニュースを取得できないので、最新情報は分からないと正直に伝える。売買の判断や助言（買う・売る・持ち続ける等）は行わない。",chat:"雑談：気軽な話し相手になる。相手の気分や体調に気を配る。"},rS=["健康の話題は一般的な情報にとどめ、診断・治療・薬の判断はしない。必要なら医療機関の受診を勧める。","死にたい気持ちや身の危険など深刻な相談には、まず気持ちを受け止め、いのちの電話（0570-783-556）やよりそいホットライン（0120-279-338）、緊急時は119・110を案内する。","投資について売買の助言はしない。","患者情報など業務上の個人情報が書かれていたら、それ以上入力しないよう、やさしく注意する。","知らないこと・できないことは正直に言い、作り話をしない。"];function sS(i,e=new Date){const t=L0.filter(s=>i.purposes.includes(s.id));return[`あなたは「${i.name}」。ユーザーのそばにいる3Dキャラクターの AI パートナーです。`,`ユーザーのことは「${i.userCall}」と呼ぶ。口調は${i.tone}。`,i.personality?`性格：${i.personality}`:"","","## 返答のしかた","- 画面の吹き出しで読まれるので、ふだんは2〜4文で短く答える。書類やコードなど長い内容を頼まれた時だけ長く書く。","- 見出しや表は必要な時だけ使う。","","## 手伝うこと",...t.length?t.map(s=>`- ${__[s.id]}`):[`- ${__.chat}`],"","## 守ること",...rS.map(s=>`- ${s}`),"",`現在の日時：${oS(e)}`].filter((s,a,l)=>!(s===""&&l[a-1]==="")).join(`
`)}function oS(i){const e="日月火水木金土"[i.getDay()],t=n=>String(n).padStart(2,"0");return`${i.getFullYear()}年${i.getMonth()+1}月${i.getDate()}日（${e}）${t(i.getHours())}:${t(i.getMinutes())}`}const xc="yui.";function qr(i,e){try{const t=localStorage.getItem(xc+i);return t?{...aS(e),...JSON.parse(t)}:e}catch{return e}}function aS(i){return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}function lS(i){try{const e=localStorage.getItem(xc+i),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function Rs(i,e){try{localStorage.setItem(xc+i,JSON.stringify(e))}catch{}}function uS(i){try{localStorage.removeItem(xc+i)}catch{}}function I0(){return new Promise((i,e)=>{const t=indexedDB.open("yui",1);t.onupgradeneeded=()=>{t.result.createObjectStore("keys"),t.result.createObjectStore("files")},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function N0(i,e){const t=await I0();return new Promise((n,s)=>{const a=t.transaction(i).objectStore(i).get(e);a.onsuccess=()=>n(a.result),a.onerror=()=>s(a.error)})}async function D0(i,e,t){const n=await I0();return new Promise((s,a)=>{const l=n.transaction(i,"readwrite");t===void 0?l.objectStore(i).delete(e):l.objectStore(i).put(t,e),l.oncomplete=()=>s(),l.onerror=()=>a(l.error)})}async function U0(){let i=await N0("keys","aes");return i||(i=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!1,["encrypt","decrypt"]),await D0("keys","aes",i)),i}const v_=i=>btoa(String.fromCharCode(...new Uint8Array(i))),x_=i=>Uint8Array.from(atob(i),e=>e.charCodeAt(0));async function cS(i,e){if(!e){uS(`secret.${i}`);return}const t=await U0(),n=crypto.getRandomValues(new Uint8Array(12)),s=await crypto.subtle.encrypt({name:"AES-GCM",iv:n},t,new TextEncoder().encode(e));Rs(`secret.${i}`,{iv:v_(n),data:v_(s)})}async function dS(i){const e=qr(`secret.${i}`,null);if(!e)return"";try{const t=await U0(),n=await crypto.subtle.decrypt({name:"AES-GCM",iv:x_(e.iv)},t,x_(e.data));return new TextDecoder().decode(n)}catch{return""}}const hS=(i,e)=>D0("files",i,e),fS=i=>N0("files",i).catch(()=>{});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ds="180",pS=0,y_=1,mS=2,O0=1,gS=2,mr=3,xr=0,In=1,fi=2,Zr=0,Fo=1,Is=2,M_=3,S_=4,_S=5,Ps=100,vS=101,xS=102,yS=103,MS=104,SS=200,ES=201,TS=202,wS=203,hf=204,ff=205,AS=206,RS=207,bS=208,CS=209,PS=210,LS=211,IS=212,NS=213,DS=214,pf=0,mf=1,gf=2,Vo=3,_f=4,vf=5,xf=6,yf=7,F0=0,US=1,OS=2,Qr=0,FS=1,kS=2,BS=3,VS=4,zS=5,HS=6,GS=7,E_="attached",WS="detached",k0=300,zo=301,Ho=302,Mf=303,Sf=304,yc=306,Go=1e3,Kr=1001,cc=1002,zn=1003,B0=1004,Ja=1005,ni=1006,ec=1007,gr=1008,$i=1009,V0=1010,z0=1011,sl=1012,pp=1013,Us=1014,Pi=1015,ml=1016,mp=1017,gp=1018,ol=1020,H0=35902,G0=35899,W0=1021,X0=1022,mi=1023,al=1026,ll=1027,_p=1028,vp=1029,j0=1030,xp=1031,yp=1033,tc=33776,nc=33777,ic=33778,rc=33779,Ef=35840,Tf=35841,wf=35842,Af=35843,Rf=36196,bf=37492,Cf=37496,Pf=37808,Lf=37809,If=37810,Nf=37811,Df=37812,Uf=37813,Of=37814,Ff=37815,kf=37816,Bf=37817,Vf=37818,zf=37819,Hf=37820,Gf=37821,Wf=36492,Xf=36494,jf=36495,Yf=36283,qf=36284,$f=36285,Kf=36286,ul=2300,cl=2301,hh=2302,T_=2400,w_=2401,A_=2402,XS=2500,jS=0,Y0=1,Zf=2,YS=3200,qS=3201,Mp=0,$S=1,$r="",hn="srgb",Hn="srgb-linear",dc="linear",Xt="srgb",uo=7680,R_=519,KS=512,ZS=513,QS=514,q0=515,JS=516,eE=517,tE=518,nE=519,Qf=35044,iE=35048,b_="300 es",Yi=2e3,hc=2001;class $o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let C_=1234567;const nl=Math.PI/180,Wo=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Sp(i,e){return(i%e+e)%e}function rE(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function sE(i,e,t){return i!==e?(t-i)/(e-i):0}function il(i,e,t){return(1-t)*i+t*e}function oE(i,e,t,n){return il(i,e,1-Math.exp(-t*n))}function aE(i,e=1){return e-Math.abs(Sp(i,e*2)-e)}function lE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function cE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dE(i,e){return i+Math.random()*(e-i)}function hE(i){return i*(.5-Math.random())}function fE(i){i!==void 0&&(C_=i);let e=C_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pE(i){return i*nl}function mE(i){return i*Wo}function gE(i){return(i&i-1)===0&&i!==0}function _E(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vE(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xE(i,e,t,n,s){const a=Math.cos,l=Math.sin,c=a(t/2),d=l(t/2),h=a((e+n)/2),m=l((e+n)/2),p=a((e-n)/2),g=l((e-n)/2),v=a((n-e)/2),S=l((n-e)/2);switch(s){case"XYX":i.set(c*m,d*p,d*g,c*h);break;case"YZY":i.set(d*g,c*m,d*p,c*h);break;case"ZXZ":i.set(d*p,d*g,c*m,c*h);break;case"XZX":i.set(c*m,d*S,d*v,c*h);break;case"YXY":i.set(d*v,c*m,d*S,c*h);break;case"ZYZ":i.set(d*S,d*v,c*m,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _t={DEG2RAD:nl,RAD2DEG:Wo,generateUUID:Li,clamp:Mt,euclideanModulo:Sp,mapLinear:rE,inverseLerp:sE,lerp:il,damp:oE,pingpong:aE,smoothstep:lE,smootherstep:uE,randInt:cE,randFloat:dE,randFloatSpread:hE,seededRandom:fE,degToRad:pE,radToDeg:mE,isPowerOfTwo:gE,ceilPowerOfTwo:_E,floorPowerOfTwo:vE,setQuaternionFromProperEuler:xE,normalize:Bt,denormalize:Ci};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*s+e.x,this.y=a*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,l,c){let d=n[s+0],h=n[s+1],m=n[s+2],p=n[s+3];const g=a[l+0],v=a[l+1],S=a[l+2],E=a[l+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=p;return}if(c===1){e[t+0]=g,e[t+1]=v,e[t+2]=S,e[t+3]=E;return}if(p!==E||d!==g||h!==v||m!==S){let y=1-c;const x=d*g+h*v+m*S+p*E,C=x>=0?1:-1,R=1-x*x;if(R>Number.EPSILON){const I=Math.sqrt(R),N=Math.atan2(I,x*C);y=Math.sin(y*N)/I,c=Math.sin(c*N)/I}const T=c*C;if(d=d*y+g*T,h=h*y+v*T,m=m*y+S*T,p=p*y+E*T,y===1-c){const I=1/Math.sqrt(d*d+h*h+m*m+p*p);d*=I,h*=I,m*=I,p*=I}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,a,l){const c=n[s],d=n[s+1],h=n[s+2],m=n[s+3],p=a[l],g=a[l+1],v=a[l+2],S=a[l+3];return e[t]=c*S+m*p+d*v-h*g,e[t+1]=d*S+m*g+h*p-c*v,e[t+2]=h*S+m*v+c*g-d*p,e[t+3]=m*S-c*p-d*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,l=e._order,c=Math.cos,d=Math.sin,h=c(n/2),m=c(s/2),p=c(a/2),g=d(n/2),v=d(s/2),S=d(a/2);switch(l){case"XYZ":this._x=g*m*p+h*v*S,this._y=h*v*p-g*m*S,this._z=h*m*S+g*v*p,this._w=h*m*p-g*v*S;break;case"YXZ":this._x=g*m*p+h*v*S,this._y=h*v*p-g*m*S,this._z=h*m*S-g*v*p,this._w=h*m*p+g*v*S;break;case"ZXY":this._x=g*m*p-h*v*S,this._y=h*v*p+g*m*S,this._z=h*m*S+g*v*p,this._w=h*m*p-g*v*S;break;case"ZYX":this._x=g*m*p-h*v*S,this._y=h*v*p+g*m*S,this._z=h*m*S-g*v*p,this._w=h*m*p+g*v*S;break;case"YZX":this._x=g*m*p+h*v*S,this._y=h*v*p+g*m*S,this._z=h*m*S-g*v*p,this._w=h*m*p-g*v*S;break;case"XZY":this._x=g*m*p-h*v*S,this._y=h*v*p-g*m*S,this._z=h*m*S+g*v*p,this._w=h*m*p+g*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],l=t[1],c=t[5],d=t[9],h=t[2],m=t[6],p=t[10],g=n+c+p;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(m-d)*v,this._y=(a-h)*v,this._z=(l-s)*v}else if(n>c&&n>p){const v=2*Math.sqrt(1+n-c-p);this._w=(m-d)/v,this._x=.25*v,this._y=(s+l)/v,this._z=(a+h)/v}else if(c>p){const v=2*Math.sqrt(1+c-n-p);this._w=(a-h)/v,this._x=(s+l)/v,this._y=.25*v,this._z=(d+m)/v}else{const v=2*Math.sqrt(1+p-n-c);this._w=(l-s)/v,this._x=(a+h)/v,this._y=(d+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,l=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=n*m+l*c+s*h-a*d,this._y=s*m+l*d+a*c-n*h,this._z=a*m+l*h+n*d-s*c,this._w=l*m-n*c-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=s,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*s+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,c),p=Math.sin((1-t)*m)/h,g=Math.sin(t*m)/h;return this._w=l*p+this._w*g,this._x=n*p+this._x*g,this._y=s*p+this._y*g,this._z=a*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(P_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(P_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,l=e.y,c=e.z,d=e.w,h=2*(l*s-c*n),m=2*(c*t-a*s),p=2*(a*n-l*t);return this.x=t+d*h+l*p-c*m,this.y=n+d*m+c*h-a*p,this.z=s+d*p+a*m-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,l=t.x,c=t.y,d=t.z;return this.x=s*d-a*c,this.y=a*l-n*d,this.z=n*c-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new D,P_=new vt;class ot{constructor(e,t,n,s,a,l,c,d,h){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,c,d,h)}set(e,t,n,s,a,l,c,d,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=c,m[3]=t,m[4]=a,m[5]=d,m[6]=n,m[7]=l,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],c=n[3],d=n[6],h=n[1],m=n[4],p=n[7],g=n[2],v=n[5],S=n[8],E=s[0],y=s[3],x=s[6],C=s[1],R=s[4],T=s[7],I=s[2],N=s[5],U=s[8];return a[0]=l*E+c*C+d*I,a[3]=l*y+c*R+d*N,a[6]=l*x+c*T+d*U,a[1]=h*E+m*C+p*I,a[4]=h*y+m*R+p*N,a[7]=h*x+m*T+p*U,a[2]=g*E+v*C+S*I,a[5]=g*y+v*R+S*N,a[8]=g*x+v*T+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*l*m-t*c*h-n*a*m+n*c*d+s*a*h-s*l*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],m=e[8],p=m*l-c*h,g=c*d-m*a,v=h*a-l*d,S=t*p+n*g+s*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=p*E,e[1]=(s*h-m*n)*E,e[2]=(c*n-s*l)*E,e[3]=g*E,e[4]=(m*t-s*d)*E,e[5]=(s*a-c*t)*E,e[6]=v*E,e[7]=(n*d-h*t)*E,e[8]=(l*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,l,c){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*l+h*c)+l+e,-s*h,s*d,-s*(-h*l+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ph.makeScale(e,t)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,t){return this.premultiply(ph.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new ot;function $0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yE(){const i=dl("canvas");return i.style.display="block",i}const L_={};function hl(i){i in L_||(L_[i]=!0,console.warn(i))}function ME(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const I_=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SE(){const i={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(s,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Xt&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Xt&&(s.r=ko(s.r),s.g=ko(s.g),s.b=ko(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$r?dc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,l){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return hl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return hl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hn]:{primaries:e,whitePoint:n,transfer:dc,toXYZ:I_,fromXYZ:N_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:Xt,toXYZ:I_,fromXYZ:N_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const Pt=SE();function vr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ko(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let co;class EE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{co===void 0&&(co=dl("canvas")),co.width=e.width,co.height=e.height;const s=co.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=co}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=vr(a[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TE=0;class Ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,c=s.length;l<c;l++)s[l].isDataTexture?a.push(mh(s[l].image)):a.push(mh(s[l]))}else a=mh(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function mh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?EE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wE=0;const gh=new D;class fn extends $o{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Kr,s=Kr,a=ni,l=gr,c=mi,d=$i,h=fn.DEFAULT_ANISOTROPY,m=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Li(),this.name="",this.source=new Ep(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Go:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Go:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=k0;fn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,s=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const d=e.elements,h=d[0],m=d[4],p=d[8],g=d[1],v=d[5],S=d[9],E=d[2],y=d[6],x=d[10];if(Math.abs(m-g)<.01&&Math.abs(p-E)<.01&&Math.abs(S-y)<.01){if(Math.abs(m+g)<.1&&Math.abs(p+E)<.1&&Math.abs(S+y)<.1&&Math.abs(h+v+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,T=(v+1)/2,I=(x+1)/2,N=(m+g)/4,U=(p+E)/4,z=(S+y)/4;return R>T&&R>I?R<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(R),s=N/n,a=U/n):T>I?T<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(T),n=N/s,a=z/s):I<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(I),n=U/a,s=z/a),this.set(n,s,a,t),this}let C=Math.sqrt((y-S)*(y-S)+(p-E)*(p-E)+(g-m)*(g-m));return Math.abs(C)<.001&&(C=1),this.x=(y-S)/C,this.y=(p-E)/C,this.z=(g-m)/C,this.w=Math.acos((h+v+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AE extends $o{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const s={width:e,height:t,depth:n.depth},a=new fn(s);this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ep(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends AE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class K0 extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RE extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Ai):Ai.fromBufferAttribute(a,l),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yu.copy(n.boundingBox)),yu.applyMatrix4(e.matrixWorld),this.union(yu)}const s=e.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),Mu.subVectors(this.max,Ua),ho.subVectors(e.a,Ua),fo.subVectors(e.b,Ua),po.subVectors(e.c,Ua),Vr.subVectors(fo,ho),zr.subVectors(po,fo),gs.subVectors(ho,po);let t=[0,-Vr.z,Vr.y,0,-zr.z,zr.y,0,-gs.z,gs.y,Vr.z,0,-Vr.x,zr.z,0,-zr.x,gs.z,0,-gs.x,-Vr.y,Vr.x,0,-zr.y,zr.x,0,-gs.y,gs.x,0];return!_h(t,ho,fo,po,Mu)||(t=[1,0,0,0,1,0,0,0,1],!_h(t,ho,fo,po,Mu))?!1:(Su.crossVectors(Vr,zr),t=[Su.x,Su.y,Su.z],_h(t,ho,fo,po,Mu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ur=[new D,new D,new D,new D,new D,new D,new D,new D],Ai=new D,yu=new yr,ho=new D,fo=new D,po=new D,Vr=new D,zr=new D,gs=new D,Ua=new D,Mu=new D,Su=new D,_s=new D;function _h(i,e,t,n,s){for(let a=0,l=i.length-3;a<=l;a+=3){_s.fromArray(i,a);const c=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),d=e.dot(_s),h=t.dot(_s),m=n.dot(_s);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const bE=new yr,Oa=new D,vh=new D;class Ki{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bE.setFromPoints(e).getCenter(n);let s=0;for(let a=0,l=e.length;a<l;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Oa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(vh)),this.expandByPoint(Oa.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cr=new D,xh=new D,Eu=new D,Hr=new D,yh=new D,Tu=new D,Mh=new D;class Mc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xh.copy(e).add(t).multiplyScalar(.5),Eu.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(xh);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Eu),c=Hr.dot(this.direction),d=-Hr.dot(Eu),h=Hr.lengthSq(),m=Math.abs(1-l*l);let p,g,v,S;if(m>0)if(p=l*d-c,g=l*c-d,S=a*m,p>=0)if(g>=-S)if(g<=S){const E=1/m;p*=E,g*=E,v=p*(p+l*g+2*c)+g*(l*p+g+2*d)+h}else g=a,p=Math.max(0,-(l*g+c)),v=-p*p+g*(g+2*d)+h;else g=-a,p=Math.max(0,-(l*g+c)),v=-p*p+g*(g+2*d)+h;else g<=-S?(p=Math.max(0,-(-l*a+c)),g=p>0?-a:Math.min(Math.max(-a,-d),a),v=-p*p+g*(g+2*d)+h):g<=S?(p=0,g=Math.min(Math.max(-a,-d),a),v=g*(g+2*d)+h):(p=Math.max(0,-(l*a+c)),g=p>0?a:Math.min(Math.max(-a,-d),a),v=-p*p+g*(g+2*d)+h);else g=l>0?-a:a,p=Math.max(0,-(l*g+c)),v=-p*p+g*(g+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(xh).addScaledVector(Eu,g),v}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const n=cr.dot(this.direction),s=cr.dot(cr)-n*n,a=e.radius*e.radius;if(s>a)return null;const l=Math.sqrt(a-s),c=n-l,d=n+l;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,l,c,d;const h=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),m>=0?(a=(e.min.y-g.y)*m,l=(e.max.y-g.y)*m):(a=(e.max.y-g.y)*m,l=(e.min.y-g.y)*m),n>l||a>s||((a>n||isNaN(n))&&(n=a),(l<s||isNaN(s))&&(s=l),p>=0?(c=(e.min.z-g.z)*p,d=(e.max.z-g.z)*p):(c=(e.max.z-g.z)*p,d=(e.min.z-g.z)*p),n>d||c>s)||((c>n||n!==n)&&(n=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,n,s,a){yh.subVectors(t,e),Tu.subVectors(n,e),Mh.crossVectors(yh,Tu);let l=this.direction.dot(Mh),c;if(l>0){if(s)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Hr.subVectors(this.origin,e);const d=c*this.direction.dot(Tu.crossVectors(Hr,Tu));if(d<0)return null;const h=c*this.direction.dot(yh.cross(Hr));if(h<0||d+h>l)return null;const m=-c*Hr.dot(Mh);return m<0?null:this.at(m/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,s,a,l,c,d,h,m,p,g,v,S,E,y){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,c,d,h,m,p,g,v,S,E,y)}set(e,t,n,s,a,l,c,d,h,m,p,g,v,S,E,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=a,x[5]=l,x[9]=c,x[13]=d,x[2]=h,x[6]=m,x[10]=p,x[14]=g,x[3]=v,x[7]=S,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/mo.setFromMatrixColumn(e,0).length(),a=1/mo.setFromMatrixColumn(e,1).length(),l=1/mo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),d=Math.cos(s),h=Math.sin(s),m=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const g=l*m,v=l*p,S=c*m,E=c*p;t[0]=d*m,t[4]=-d*p,t[8]=h,t[1]=v+S*h,t[5]=g-E*h,t[9]=-c*d,t[2]=E-g*h,t[6]=S+v*h,t[10]=l*d}else if(e.order==="YXZ"){const g=d*m,v=d*p,S=h*m,E=h*p;t[0]=g+E*c,t[4]=S*c-v,t[8]=l*h,t[1]=l*p,t[5]=l*m,t[9]=-c,t[2]=v*c-S,t[6]=E+g*c,t[10]=l*d}else if(e.order==="ZXY"){const g=d*m,v=d*p,S=h*m,E=h*p;t[0]=g-E*c,t[4]=-l*p,t[8]=S+v*c,t[1]=v+S*c,t[5]=l*m,t[9]=E-g*c,t[2]=-l*h,t[6]=c,t[10]=l*d}else if(e.order==="ZYX"){const g=l*m,v=l*p,S=c*m,E=c*p;t[0]=d*m,t[4]=S*h-v,t[8]=g*h+E,t[1]=d*p,t[5]=E*h+g,t[9]=v*h-S,t[2]=-h,t[6]=c*d,t[10]=l*d}else if(e.order==="YZX"){const g=l*d,v=l*h,S=c*d,E=c*h;t[0]=d*m,t[4]=E-g*p,t[8]=S*p+v,t[1]=p,t[5]=l*m,t[9]=-c*m,t[2]=-h*m,t[6]=v*p+S,t[10]=g-E*p}else if(e.order==="XZY"){const g=l*d,v=l*h,S=c*d,E=c*h;t[0]=d*m,t[4]=-p,t[8]=h*m,t[1]=g*p+E,t[5]=l*m,t[9]=v*p-S,t[2]=S*p-v,t[6]=c*m,t[10]=E*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CE,e,PE)}lookAt(e,t,n){const s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Gr.crossVectors(n,ei),Gr.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Gr.crossVectors(n,ei)),Gr.normalize(),wu.crossVectors(ei,Gr),s[0]=Gr.x,s[4]=wu.x,s[8]=ei.x,s[1]=Gr.y,s[5]=wu.y,s[9]=ei.y,s[2]=Gr.z,s[6]=wu.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],c=n[4],d=n[8],h=n[12],m=n[1],p=n[5],g=n[9],v=n[13],S=n[2],E=n[6],y=n[10],x=n[14],C=n[3],R=n[7],T=n[11],I=n[15],N=s[0],U=s[4],z=s[8],P=s[12],b=s[1],B=s[5],Y=s[9],ee=s[13],de=s[2],le=s[6],ue=s[10],ie=s[14],H=s[3],ce=s[7],ne=s[11],V=s[15];return a[0]=l*N+c*b+d*de+h*H,a[4]=l*U+c*B+d*le+h*ce,a[8]=l*z+c*Y+d*ue+h*ne,a[12]=l*P+c*ee+d*ie+h*V,a[1]=m*N+p*b+g*de+v*H,a[5]=m*U+p*B+g*le+v*ce,a[9]=m*z+p*Y+g*ue+v*ne,a[13]=m*P+p*ee+g*ie+v*V,a[2]=S*N+E*b+y*de+x*H,a[6]=S*U+E*B+y*le+x*ce,a[10]=S*z+E*Y+y*ue+x*ne,a[14]=S*P+E*ee+y*ie+x*V,a[3]=C*N+R*b+T*de+I*H,a[7]=C*U+R*B+T*le+I*ce,a[11]=C*z+R*Y+T*ue+I*ne,a[15]=C*P+R*ee+T*ie+I*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],l=e[1],c=e[5],d=e[9],h=e[13],m=e[2],p=e[6],g=e[10],v=e[14],S=e[3],E=e[7],y=e[11],x=e[15];return S*(+a*d*p-s*h*p-a*c*g+n*h*g+s*c*v-n*d*v)+E*(+t*d*v-t*h*g+a*l*g-s*l*v+s*h*m-a*d*m)+y*(+t*h*p-t*c*v-a*l*p+n*l*v+a*c*m-n*h*m)+x*(-s*c*m-t*d*p+t*c*g+s*l*p-n*l*g+n*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],m=e[8],p=e[9],g=e[10],v=e[11],S=e[12],E=e[13],y=e[14],x=e[15],C=p*y*h-E*g*h+E*d*v-c*y*v-p*d*x+c*g*x,R=S*g*h-m*y*h-S*d*v+l*y*v+m*d*x-l*g*x,T=m*E*h-S*p*h+S*c*v-l*E*v-m*c*x+l*p*x,I=S*p*d-m*E*d-S*c*g+l*E*g+m*c*y-l*p*y,N=t*C+n*R+s*T+a*I;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=C*U,e[1]=(E*g*a-p*y*a-E*s*v+n*y*v+p*s*x-n*g*x)*U,e[2]=(c*y*a-E*d*a+E*s*h-n*y*h-c*s*x+n*d*x)*U,e[3]=(p*d*a-c*g*a-p*s*h+n*g*h+c*s*v-n*d*v)*U,e[4]=R*U,e[5]=(m*y*a-S*g*a+S*s*v-t*y*v-m*s*x+t*g*x)*U,e[6]=(S*d*a-l*y*a-S*s*h+t*y*h+l*s*x-t*d*x)*U,e[7]=(l*g*a-m*d*a+m*s*h-t*g*h-l*s*v+t*d*v)*U,e[8]=T*U,e[9]=(S*p*a-m*E*a-S*n*v+t*E*v+m*n*x-t*p*x)*U,e[10]=(l*E*a-S*c*a+S*n*h-t*E*h-l*n*x+t*c*x)*U,e[11]=(m*c*a-l*p*a-m*n*h+t*p*h+l*n*v-t*c*v)*U,e[12]=I*U,e[13]=(m*E*s-S*p*s+S*n*g-t*E*g-m*n*y+t*p*y)*U,e[14]=(S*c*s-l*E*s-S*n*d+t*E*d+l*n*y-t*c*y)*U,e[15]=(l*p*s-m*c*s+m*n*d-t*p*d-l*n*g+t*c*g)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,l=e.x,c=e.y,d=e.z,h=a*l,m=a*c;return this.set(h*l+n,h*c-s*d,h*d+s*c,0,h*c+s*d,m*c+n,m*d-s*l,0,h*d-s*c,m*d+s*l,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,l){return this.set(1,n,a,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,l=t._y,c=t._z,d=t._w,h=a+a,m=l+l,p=c+c,g=a*h,v=a*m,S=a*p,E=l*m,y=l*p,x=c*p,C=d*h,R=d*m,T=d*p,I=n.x,N=n.y,U=n.z;return s[0]=(1-(E+x))*I,s[1]=(v+T)*I,s[2]=(S-R)*I,s[3]=0,s[4]=(v-T)*N,s[5]=(1-(g+x))*N,s[6]=(y+C)*N,s[7]=0,s[8]=(S+R)*U,s[9]=(y-C)*U,s[10]=(1-(g+E))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=mo.set(s[0],s[1],s[2]).length();const l=mo.set(s[4],s[5],s[6]).length(),c=mo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ri.copy(this);const h=1/a,m=1/l,p=1/c;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=m,Ri.elements[5]*=m,Ri.elements[6]*=m,Ri.elements[8]*=p,Ri.elements[9]*=p,Ri.elements[10]*=p,t.setFromRotationMatrix(Ri),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,s,a,l,c=Yi,d=!1){const h=this.elements,m=2*a/(t-e),p=2*a/(n-s),g=(t+e)/(t-e),v=(n+s)/(n-s);let S,E;if(d)S=a/(l-a),E=l*a/(l-a);else if(c===Yi)S=-(l+a)/(l-a),E=-2*l*a/(l-a);else if(c===hc)S=-l/(l-a),E=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=p,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,a,l,c=Yi,d=!1){const h=this.elements,m=2/(t-e),p=2/(n-s),g=-(t+e)/(t-e),v=-(n+s)/(n-s);let S,E;if(d)S=1/(l-a),E=l/(l-a);else if(c===Yi)S=-2/(l-a),E=-(l+a)/(l-a);else if(c===hc)S=-1/(l-a),E=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=p,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mo=new D,Ri=new lt,CE=new D(0,0,0),PE=new D(1,1,1),Gr=new D,wu=new D,ei=new D,D_=new lt,U_=new vt;class ii{constructor(e=0,t=0,n=0,s=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],l=s[4],c=s[8],d=s[1],h=s[5],m=s[9],p=s[2],g=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return D_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(D_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return U_.setFromEuler(this),this.setFromQuaternion(U_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LE=0;const O_=new D,go=new vt,dr=new lt,Au=new D,Fa=new D,IE=new D,NE=new vt,F_=new D(1,0,0),k_=new D(0,1,0),B_=new D(0,0,1),V_={type:"added"},DE={type:"removed"},_o={type:"childadded",child:null},Sh={type:"childremoved",child:null};class zt extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new D,t=new ii,n=new vt,s=new D(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new ot}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(F_,e)}rotateY(e){return this.rotateOnAxis(k_,e)}rotateZ(e){return this.rotateOnAxis(B_,e)}translateOnAxis(e,t){return O_.copy(e).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(F_,e)}translateY(e){return this.translateOnAxis(k_,e)}translateZ(e){return this.translateOnAxis(B_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Au.copy(e):Au.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Fa,Au,this.up):dr.lookAt(Au,Fa,this.up),this.quaternion.setFromRotationMatrix(dr),s&&(dr.extractRotation(s.matrixWorld),go.setFromRotationMatrix(dr),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(V_),_o.child=e,this.dispatchEvent(_o),_o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(DE),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(V_),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,IE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,NE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const p=d[h];a(e.shapes,p)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(a(e.animations,d))}}if(t){const c=l(e.geometries),d=l(e.materials),h=l(e.textures),m=l(e.images),p=l(e.shapes),g=l(e.skeletons),v=l(e.animations),S=l(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),S.length>0&&(n.nodes=S)}return n.object=s,n;function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}zt.DEFAULT_UP=new D(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new D,hr=new D,Eh=new D,fr=new D,vo=new D,xo=new D,z_=new D,Th=new D,wh=new D,Ah=new D,Rh=new Ut,bh=new Ut,Ch=new Ut;class pi{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bi.subVectors(e,t),s.cross(bi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){bi.subVectors(s,t),hr.subVectors(n,t),Eh.subVectors(e,t);const l=bi.dot(bi),c=bi.dot(hr),d=bi.dot(Eh),h=hr.dot(hr),m=hr.dot(Eh),p=l*h-c*c;if(p===0)return a.set(0,0,0),null;const g=1/p,v=(h*d-c*m)*g,S=(l*m-c*d)*g;return a.set(1-v-S,S,v)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,n,s,a,l,c,d){return this.getBarycoord(e,t,n,s,fr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,fr.x),d.addScaledVector(l,fr.y),d.addScaledVector(c,fr.z),d)}static getInterpolatedAttribute(e,t,n,s,a,l){return Rh.setScalar(0),bh.setScalar(0),Ch.setScalar(0),Rh.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,n),Ch.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(Rh,a.x),l.addScaledVector(bh,a.y),l.addScaledVector(Ch,a.z),l}static isFrontFacing(e,t,n,s){return bi.subVectors(n,t),hr.subVectors(e,t),bi.cross(hr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),bi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return pi.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let l,c;vo.subVectors(s,n),xo.subVectors(a,n),Th.subVectors(e,n);const d=vo.dot(Th),h=xo.dot(Th);if(d<=0&&h<=0)return t.copy(n);wh.subVectors(e,s);const m=vo.dot(wh),p=xo.dot(wh);if(m>=0&&p<=m)return t.copy(s);const g=d*p-m*h;if(g<=0&&d>=0&&m<=0)return l=d/(d-m),t.copy(n).addScaledVector(vo,l);Ah.subVectors(e,a);const v=vo.dot(Ah),S=xo.dot(Ah);if(S>=0&&v<=S)return t.copy(a);const E=v*h-d*S;if(E<=0&&h>=0&&S<=0)return c=h/(h-S),t.copy(n).addScaledVector(xo,c);const y=m*S-v*p;if(y<=0&&p-m>=0&&v-S>=0)return z_.subVectors(a,s),c=(p-m)/(p-m+(v-S)),t.copy(s).addScaledVector(z_,c);const x=1/(y+E+g);return l=E*x,c=g*x,t.copy(n).addScaledVector(vo,l).addScaledVector(xo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Ru={h:0,s:0,l:0};function Ph(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Pt.workingColorSpace){if(e=Sp(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Ph(l,a,e+1/3),this.g=Ph(l,a,e),this.b=Ph(l,a,e-1/3)}return Pt.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=s[1],c=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=Q0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Pt.workingToColorSpace(Ln.copy(this),e),Math.round(Mt(Ln.r*255,0,255))*65536+Math.round(Mt(Ln.g*255,0,255))*256+Math.round(Mt(Ln.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,s=Ln.g,a=Ln.b,l=Math.max(n,s,a),c=Math.min(n,s,a);let d,h;const m=(c+l)/2;if(c===l)d=0,h=0;else{const p=l-c;switch(h=m<=.5?p/(l+c):p/(2-l-c),l){case n:d=(s-a)/p+(s<a?6:0);break;case s:d=(a-n)/p+2;break;case a:d=(n-s)/p+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hn){Pt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,s=Ln.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Ru);const n=il(Wr.h,Ru.h,t),s=il(Wr.s,Ru.s,t),a=il(Wr.l,Ru.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ze;Ze.NAMES=Q0;let UE=0;class _i extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Fo,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=ff,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hf&&(n.blendSrc=this.blendSrc),this.blendDst!==ff&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R_&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}if(t){const a=s(e.textures),l=s(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gi extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new D,bu=new Je;let OE=0;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qf,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bu.fromBufferAttribute(this,t),bu.applyMatrix3(e),this.setXY(t,bu.x,bu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),a=Bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qf&&(e.usage=this.usage),e}}class J0 extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ex extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let FE=0;const ci=new lt,Lh=new zt,yo=new D,ti=new yr,ka=new yr,yn=new D;class Ht extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($0(e)?ex:J0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ot().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];ka.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(ti.min,ka.min),ti.expandByPoint(yn),yn.addVectors(ti.max,ka.max),ti.expandByPoint(yn)):(ti.expandByPoint(ka.min),ti.expandByPoint(ka.max))}ti.getCenter(n);let s=0;for(let a=0,l=e.count;a<l;a++)yn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(yn));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)yn.fromBufferAttribute(c,h),d&&(yo.fromBufferAttribute(e,h),yn.add(yo)),s=Math.max(s,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],d=[];for(let z=0;z<n.count;z++)c[z]=new D,d[z]=new D;const h=new D,m=new D,p=new D,g=new Je,v=new Je,S=new Je,E=new D,y=new D;function x(z,P,b){h.fromBufferAttribute(n,z),m.fromBufferAttribute(n,P),p.fromBufferAttribute(n,b),g.fromBufferAttribute(a,z),v.fromBufferAttribute(a,P),S.fromBufferAttribute(a,b),m.sub(h),p.sub(h),v.sub(g),S.sub(g);const B=1/(v.x*S.y-S.x*v.y);isFinite(B)&&(E.copy(m).multiplyScalar(S.y).addScaledVector(p,-v.y).multiplyScalar(B),y.copy(p).multiplyScalar(v.x).addScaledVector(m,-S.x).multiplyScalar(B),c[z].add(E),c[P].add(E),c[b].add(E),d[z].add(y),d[P].add(y),d[b].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,P=C.length;z<P;++z){const b=C[z],B=b.start,Y=b.count;for(let ee=B,de=B+Y;ee<de;ee+=3)x(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const R=new D,T=new D,I=new D,N=new D;function U(z){I.fromBufferAttribute(s,z),N.copy(I);const P=c[z];R.copy(P),R.sub(I.multiplyScalar(I.dot(P))).normalize(),T.crossVectors(N,P);const B=T.dot(d[z])<0?-1:1;l.setXYZW(z,R.x,R.y,R.z,B)}for(let z=0,P=C.length;z<P;++z){const b=C[z],B=b.start,Y=b.count;for(let ee=B,de=B+Y;ee<de;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const s=new D,a=new D,l=new D,c=new D,d=new D,h=new D,m=new D,p=new D;if(e)for(let g=0,v=e.count;g<v;g+=3){const S=e.getX(g+0),E=e.getX(g+1),y=e.getX(g+2);s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,y),m.subVectors(l,a),p.subVectors(s,a),m.cross(p),c.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),c.add(m),d.add(m),h.add(m),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(E,d.x,d.y,d.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),m.subVectors(l,a),p.subVectors(s,a),m.cross(p),n.setXYZ(g+0,m.x,m.y,m.z),n.setXYZ(g+1,m.x,m.y,m.z),n.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,p=c.normalized,g=new h.constructor(d.length*m);let v=0,S=0;for(let E=0,y=d.length;E<y;E++){c.isInterleavedBufferAttribute?v=d[E]*c.data.stride+c.offset:v=d[E]*m;for(let x=0;x<m;x++)g[S++]=h[v++]}return new St(g,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let m=0,p=h.length;m<p;m++){const g=h[m],v=e(g,n);d.push(v)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,d=l.length;c<d;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let p=0,g=h.length;p<g;p++){const v=h[p];m.push(v.toJSON(e.data))}m.length>0&&(s[d]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],p=a[h];for(let g=0,v=p.length;g<v;g++)m.push(p[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,m=l.length;h<m;h++){const p=l[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H_=new lt,vs=new Mc,Cu=new Ki,G_=new D,Pu=new D,Lu=new D,Iu=new D,Ih=new D,Nu=new D,W_=new D,Du=new D;class rn extends zt{constructor(e=new Ht,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){Nu.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const m=c[d],p=a[d];m!==0&&(Ih.fromBufferAttribute(p,e),l?Nu.addScaledVector(Ih,m):Nu.addScaledVector(Ih.sub(t),m))}t.add(Nu)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cu.copy(n.boundingSphere),Cu.applyMatrix4(a),vs.copy(e.ray).recast(e.near),!(Cu.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Cu,G_)===null||vs.origin.distanceToSquared(G_)>(e.far-e.near)**2))&&(H_.copy(a).invert(),vs.copy(e.ray).applyMatrix4(H_),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s;const a=this.geometry,l=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,p=a.attributes.normal,g=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(l))for(let S=0,E=g.length;S<E;S++){const y=g[S],x=l[y.materialIndex],C=Math.max(y.start,v.start),R=Math.min(c.count,Math.min(y.start+y.count,v.start+v.count));for(let T=C,I=R;T<I;T+=3){const N=c.getX(T),U=c.getX(T+1),z=c.getX(T+2);s=Uu(this,x,e,n,h,m,p,N,U,z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const S=Math.max(0,v.start),E=Math.min(c.count,v.start+v.count);for(let y=S,x=E;y<x;y+=3){const C=c.getX(y),R=c.getX(y+1),T=c.getX(y+2);s=Uu(this,l,e,n,h,m,p,C,R,T),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(l))for(let S=0,E=g.length;S<E;S++){const y=g[S],x=l[y.materialIndex],C=Math.max(y.start,v.start),R=Math.min(d.count,Math.min(y.start+y.count,v.start+v.count));for(let T=C,I=R;T<I;T+=3){const N=T,U=T+1,z=T+2;s=Uu(this,x,e,n,h,m,p,N,U,z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const S=Math.max(0,v.start),E=Math.min(d.count,v.start+v.count);for(let y=S,x=E;y<x;y+=3){const C=y,R=y+1,T=y+2;s=Uu(this,l,e,n,h,m,p,C,R,T),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function kE(i,e,t,n,s,a,l,c){let d;if(e.side===In?d=n.intersectTriangle(l,a,s,!0,c):d=n.intersectTriangle(s,a,l,e.side===xr,c),d===null)return null;Du.copy(c),Du.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Du);return h<t.near||h>t.far?null:{distance:h,point:Du.clone(),object:i}}function Uu(i,e,t,n,s,a,l,c,d,h){i.getVertexPosition(c,Pu),i.getVertexPosition(d,Lu),i.getVertexPosition(h,Iu);const m=kE(i,e,t,n,Pu,Lu,Iu,W_);if(m){const p=new D;pi.getBarycoord(W_,Pu,Lu,Iu,p),s&&(m.uv=pi.getInterpolatedAttribute(s,c,d,h,p,new Je)),a&&(m.uv1=pi.getInterpolatedAttribute(a,c,d,h,p,new Je)),l&&(m.normal=pi.getInterpolatedAttribute(l,c,d,h,p,new D),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new D,materialIndex:0};pi.getNormal(Pu,Lu,Iu,g.normal),m.face=g,m.barycoord=p}return m}class gl extends Ht{constructor(e=1,t=1,n=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:l};const c=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const d=[],h=[],m=[],p=[];let g=0,v=0;S("z","y","x",-1,-1,n,t,e,l,a,0),S("z","y","x",1,-1,n,t,-e,l,a,1),S("x","z","y",1,1,e,n,t,s,l,2),S("x","z","y",1,-1,e,n,-t,s,l,3),S("x","y","z",1,-1,e,t,n,s,a,4),S("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(d),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(m,3)),this.setAttribute("uv",new Kt(p,2));function S(E,y,x,C,R,T,I,N,U,z,P){const b=T/U,B=I/z,Y=T/2,ee=I/2,de=N/2,le=U+1,ue=z+1;let ie=0,H=0;const ce=new D;for(let ne=0;ne<ue;ne++){const V=ne*B-ee;for(let oe=0;oe<le;oe++){const Ue=oe*b-Y;ce[E]=Ue*C,ce[y]=V*R,ce[x]=de,h.push(ce.x,ce.y,ce.z),ce[E]=0,ce[y]=0,ce[x]=N>0?1:-1,m.push(ce.x,ce.y,ce.z),p.push(oe/U),p.push(1-ne/z),ie+=1}}for(let ne=0;ne<z;ne++)for(let V=0;V<U;V++){const oe=g+V+le*ne,Ue=g+V+le*(ne+1),ke=g+(V+1)+le*(ne+1),me=g+(V+1)+le*ne;d.push(oe,Ue,me),d.push(Ue,ke,me),H+=6}c.addGroup(v,H,P),v+=H,g+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bn(i){const e={};for(let t=0;t<i.length;t++){const n=Xo(i[t]);for(const s in n)e[s]=n[s]}return e}function BE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tx(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const nx={clone:Xo,merge:Bn};var VE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VE,this.fragmentShader=zE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=BE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ix extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new D,X_=new Je,j_=new Je;class Vn extends ix{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,X_,j_),t.subVectors(j_,X_)}setViewOffset(e,t,n,s,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,h=l.fullHeight;a+=l.offsetX*s/d,t-=l.offsetY*n/h,s*=l.width/d,n*=l.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mo=-90,So=1;class HE extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vn(Mo,So,e,t);s.layers=this.layers,this.add(s);const a=new Vn(Mo,So,e,t);a.layers=this.layers,this.add(a);const l=new Vn(Mo,So,e,t);l.layers=this.layers,this.add(l);const c=new Vn(Mo,So,e,t);c.layers=this.layers,this.add(c);const d=new Vn(Mo,So,e,t);d.layers=this.layers,this.add(d);const h=new Vn(Mo,So,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,l,c,d]=t;for(const h of t)this.remove(h);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===hc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,d,h,m]=this.children,p=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,m),e.setRenderTarget(p,g,v),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class rx extends fn{constructor(e=[],t=zo,n,s,a,l,c,d,h,m){super(e,t,n,s,a,l,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GE extends Os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new rx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gl(5,5,5),a=new Ii({name:"CubemapFromEquirect",uniforms:Xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:Zr});a.uniforms.tEquirect.value=t;const l=new rn(s,a),c=t.minFilter;return t.minFilter===gr&&(t.minFilter=ni),new HE(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(a)}}class Mn extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,l=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,n),x=this._getHandJoint(h,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],g=m.position.distanceTo(p.position),v=.02,S=.005;h.inputState.pinching&&g>v+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class XE extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qf,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new D;class fl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),a=Bt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ox extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Eo;const Ba=new D,To=new D,wo=new D,Ao=new Je,Va=new Je,ax=new lt,Ou=new D,za=new D,Fu=new D,Y_=new Je,Dh=new Je,q_=new Je;class jE extends zt{constructor(e=new ox){if(super(),this.isSprite=!0,this.type="Sprite",Eo===void 0){Eo=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sx(t,5);Eo.setIndex([0,1,2,0,2,3]),Eo.setAttribute("position",new fl(n,3,0,!1)),Eo.setAttribute("uv",new fl(n,2,3,!1))}this.geometry=Eo,this.material=e,this.center=new Je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),To.setFromMatrixScale(this.matrixWorld),ax.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&To.multiplyScalar(-wo.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const l=this.center;ku(Ou.set(-.5,-.5,0),wo,l,To,s,a),ku(za.set(.5,-.5,0),wo,l,To,s,a),ku(Fu.set(.5,.5,0),wo,l,To,s,a),Y_.set(0,0),Dh.set(1,0),q_.set(1,1);let c=e.ray.intersectTriangle(Ou,za,Fu,!1,Ba);if(c===null&&(ku(za.set(-.5,.5,0),wo,l,To,s,a),Dh.set(0,1),c=e.ray.intersectTriangle(Ou,Fu,za,!1,Ba),c===null))return;const d=e.ray.origin.distanceTo(Ba);d<e.near||d>e.far||t.push({distance:d,point:Ba.clone(),uv:pi.getInterpolation(Ba,Ou,za,Fu,Y_,Dh,q_,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ku(i,e,t,n,s,a){Ao.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Va.x=a*Ao.x-s*Ao.y,Va.y=s*Ao.x+a*Ao.y):Va.copy(Ao),i.copy(e),i.x+=Va.x,i.y+=Va.y,i.applyMatrix4(ax)}const $_=new D,K_=new Ut,Z_=new Ut,YE=new D,Q_=new lt,Bu=new D,Uh=new Ki,J_=new lt,Oh=new Mc;class lx extends rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=E_,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bu),this.boundingBox.expandByPoint(Bu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bu),this.boundingSphere.expandByPoint(Bu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uh.copy(this.boundingSphere),Uh.applyMatrix4(s),e.ray.intersectsSphere(Uh)!==!1&&(J_.copy(s).invert(),Oh.copy(e.ray).applyMatrix4(J_),!(this.boundingBox!==null&&Oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===E_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===WS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;K_.fromBufferAttribute(s.attributes.skinIndex,e),Z_.fromBufferAttribute(s.attributes.skinWeight,e),$_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const l=Z_.getComponent(a);if(l!==0){const c=K_.getComponent(a);Q_.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(YE.copy($_).applyMatrix4(Q_),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ux extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cx extends fn{constructor(e=null,t=1,n=1,s,a,l,c,d,h=zn,m=zn,p,g){super(null,l,c,d,h,m,s,a,p,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ev=new lt,qE=new lt;class Ko{constructor(e=[],t=[]){this.uuid=Li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new lt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,l=e.length;a<l;a++){const c=e[a]?e[a].matrixWorld:qE;ev.multiplyMatrices(c,t[a]),ev.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ko(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new cx(t,e,e,mi,Pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let l=t[a];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),l=new ux),this.bones.push(l),this.boneInverses.push(new lt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const l=t[s];e.bones.push(l.uuid);const c=n[s];e.boneInverses.push(c.toArray())}return e}}class Jf extends St{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ro=new lt,tv=new lt,Vu=[],nv=new yr,$E=new lt,Ha=new rn,Ga=new Ki;class KE extends rn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$E)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),nv.copy(e.boundingBox).applyMatrix4(Ro),this.boundingBox.union(nv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),Ga.copy(e.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(Ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,l=e*a+1;for(let c=0;c<n.length;c++)n[c]=s[l+c]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ha.geometry=this.geometry,Ha.material=this.material,Ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(n),e.ray.intersectsSphere(Ga)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Ro),tv.multiplyMatrices(n,Ro),Ha.matrixWorld=tv,Ha.raycast(e,Vu);for(let l=0,c=Vu.length;l<c;l++){const d=Vu[l];d.instanceId=a,d.object=this,t.push(d)}Vu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cx(new Float32Array(s*this.count),s,this.count,_p,Pi));const a=this.morphTexture.source.data.data;let l=0;for(let h=0;h<n.length;h++)l+=n[h];const c=this.geometry.morphTargetsRelative?1:1-l,d=s*e;a[d]=c,a.set(n,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fh=new D,ZE=new D,QE=new ot;class bs{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Fh.subVectors(n,t).cross(ZE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||QE.getNormalMatrix(e),s=this.coplanarPoint(Fh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Ki,JE=new Je(.5,.5),zu=new D;class Tp{constructor(e=new bs,t=new bs,n=new bs,s=new bs,a=new bs,l=new bs){this.planes=[e,t,n,s,a,l]}set(e,t,n,s,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yi,n=!1){const s=this.planes,a=e.elements,l=a[0],c=a[1],d=a[2],h=a[3],m=a[4],p=a[5],g=a[6],v=a[7],S=a[8],E=a[9],y=a[10],x=a[11],C=a[12],R=a[13],T=a[14],I=a[15];if(s[0].setComponents(h-l,v-m,x-S,I-C).normalize(),s[1].setComponents(h+l,v+m,x+S,I+C).normalize(),s[2].setComponents(h+c,v+p,x+E,I+R).normalize(),s[3].setComponents(h-c,v-p,x-E,I-R).normalize(),n)s[4].setComponents(d,g,y,T).normalize(),s[5].setComponents(h-d,v-g,x-y,I-T).normalize();else if(s[4].setComponents(h-d,v-g,x-y,I-T).normalize(),t===Yi)s[5].setComponents(h+d,v+g,x+y,I+T).normalize();else if(t===hc)s[5].setComponents(d,g,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=JE.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zu.x=s.normal.x>0?e.max.x:e.min.x,zu.y=s.normal.y>0?e.max.y:e.min.y,zu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jr extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fc=new D,pc=new D,iv=new lt,Wa=new Mc,Hu=new Ki,kh=new D,rv=new D;class Sc extends zt{constructor(e=new Ht,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)fc.fromBufferAttribute(t,s-1),pc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fc.distanceTo(pc);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hu.copy(n.boundingSphere),Hu.applyMatrix4(s),Hu.radius+=a,e.ray.intersectsSphere(Hu)===!1)return;iv.copy(s).invert(),Wa.copy(e.ray).applyMatrix4(iv);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const v=Math.max(0,l.start),S=Math.min(m.count,l.start+l.count);for(let E=v,y=S-1;E<y;E+=h){const x=m.getX(E),C=m.getX(E+1),R=Gu(this,e,Wa,d,x,C,E);R&&t.push(R)}if(this.isLineLoop){const E=m.getX(S-1),y=m.getX(v),x=Gu(this,e,Wa,d,E,y,S-1);x&&t.push(x)}}else{const v=Math.max(0,l.start),S=Math.min(g.count,l.start+l.count);for(let E=v,y=S-1;E<y;E+=h){const x=Gu(this,e,Wa,d,E,E+1,E);x&&t.push(x)}if(this.isLineLoop){const E=Gu(this,e,Wa,d,S-1,v,S-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Gu(i,e,t,n,s,a,l){const c=i.geometry.attributes.position;if(fc.fromBufferAttribute(c,s),pc.fromBufferAttribute(c,a),t.distanceSqToSegment(fc,pc,kh,rv)>n)return;kh.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(kh);if(!(h<e.near||h>e.far))return{distance:h,point:rv.clone().applyMatrix4(i.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:i}}const sv=new D,ov=new D;class Zo extends Sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)sv.fromBufferAttribute(t,s),ov.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sv.distanceTo(ov);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eT extends Sc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mc extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const av=new lt,ep=new Mc,Wu=new Ki,Xu=new D;class tp extends zt{constructor(e=new Ht,t=new mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wu.copy(n.boundingSphere),Wu.applyMatrix4(s),Wu.radius+=a,e.ray.intersectsSphere(Wu)===!1)return;av.copy(s).invert(),ep.copy(e.ray).applyMatrix4(av);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=n.index,p=n.attributes.position;if(h!==null){const g=Math.max(0,l.start),v=Math.min(h.count,l.start+l.count);for(let S=g,E=v;S<E;S++){const y=h.getX(S);Xu.fromBufferAttribute(p,y),lv(Xu,y,d,s,e,t,this)}}else{const g=Math.max(0,l.start),v=Math.min(p.count,l.start+l.count);for(let S=g,E=v;S<E;S++)Xu.fromBufferAttribute(p,S),lv(Xu,S,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function lv(i,e,t,n,s,a,l){const c=ep.distanceSqToPoint(i);if(c<t){const d=new D;ep.closestPointToPoint(i,d),d.applyMatrix4(n);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class tT extends fn{constructor(e,t,n,s,a,l,c,d,h){super(e,t,n,s,a,l,c,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dx extends fn{constructor(e,t,n=Us,s,a,l,c=zn,d=zn,h,m=al,p=1){if(m!==al&&m!==ll)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:p};super(g,s,a,l,c,d,m,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ep(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hx extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wp extends Ht{constructor(e=1,t=1,n=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));const l=[],c=[],d=[],h=[],m=t/2,p=Math.PI/2*e,g=t,v=2*p+g,S=n*2+a,E=s+1,y=new D,x=new D;for(let C=0;C<=S;C++){let R=0,T=0,I=0,N=0;if(C<=n){const P=C/n,b=P*Math.PI/2;T=-m-e*Math.cos(b),I=e*Math.sin(b),N=-e*Math.cos(b),R=P*p}else if(C<=n+a){const P=(C-n)/a;T=-m+P*t,I=e,N=0,R=p+P*g}else{const P=(C-n-a)/n,b=P*Math.PI/2;T=m+e*Math.sin(b),I=e*Math.cos(b),N=e*Math.sin(b),R=p+g+P*p}const U=Math.max(0,Math.min(1,R/v));let z=0;C===0?z=.5/s:C===S&&(z=-.5/s);for(let P=0;P<=s;P++){const b=P/s,B=b*Math.PI*2,Y=Math.sin(B),ee=Math.cos(B);x.x=-I*ee,x.y=T,x.z=I*Y,c.push(x.x,x.y,x.z),y.set(-I*ee,N,I*Y),y.normalize(),d.push(y.x,y.y,y.z),h.push(b+z,U)}if(C>0){const P=(C-1)*E;for(let b=0;b<s;b++){const B=P+b,Y=P+b+1,ee=C*E+b,de=C*E+b+1;l.push(B,Y,ee),l.push(Y,de,ee)}}}this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wp(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ap extends Ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],l=[],c=[],d=[],h=new D,m=new Je;l.push(0,0,0),c.push(0,0,1),d.push(.5,.5);for(let p=0,g=3;p<=t;p++,g+=3){const v=n+p/t*s;h.x=e*Math.cos(v),h.y=e*Math.sin(v),l.push(h.x,h.y,h.z),c.push(0,0,1),m.x=(l[g]/e+1)/2,m.y=(l[g+1]/e+1)/2,d.push(m.x,m.y)}for(let p=1;p<=t;p++)a.push(p,p+1,0);this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ap(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Rp extends Ht{constructor(e=[new Je(0,-.5),new Je(.5,0),new Je(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Mt(s,0,Math.PI*2);const a=[],l=[],c=[],d=[],h=[],m=1/t,p=new D,g=new Je,v=new D,S=new D,E=new D;let y=0,x=0;for(let C=0;C<=e.length-1;C++)switch(C){case 0:y=e[C+1].x-e[C].x,x=e[C+1].y-e[C].y,v.x=x*1,v.y=-y,v.z=x*0,E.copy(v),v.normalize(),d.push(v.x,v.y,v.z);break;case e.length-1:d.push(E.x,E.y,E.z);break;default:y=e[C+1].x-e[C].x,x=e[C+1].y-e[C].y,v.x=x*1,v.y=-y,v.z=x*0,S.copy(v),v.x+=E.x,v.y+=E.y,v.z+=E.z,v.normalize(),d.push(v.x,v.y,v.z),E.copy(S)}for(let C=0;C<=t;C++){const R=n+C*m*s,T=Math.sin(R),I=Math.cos(R);for(let N=0;N<=e.length-1;N++){p.x=e[N].x*T,p.y=e[N].y,p.z=e[N].x*I,l.push(p.x,p.y,p.z),g.x=C/t,g.y=N/(e.length-1),c.push(g.x,g.y);const U=d[3*N+0]*T,z=d[3*N+1],P=d[3*N+0]*I;h.push(U,z,P)}}for(let C=0;C<t;C++)for(let R=0;R<e.length-1;R++){const T=R+C*e.length,I=T,N=T+e.length,U=T+e.length+1,z=T+1;a.push(I,N,z),a.push(U,z,N)}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2)),this.setAttribute("normal",new Kt(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rp(e.points,e.segments,e.phiStart,e.phiLength)}}class Ec extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,l=t/2,c=Math.floor(n),d=Math.floor(s),h=c+1,m=d+1,p=e/c,g=t/d,v=[],S=[],E=[],y=[];for(let x=0;x<m;x++){const C=x*g-l;for(let R=0;R<h;R++){const T=R*p-a;S.push(T,-C,0),E.push(0,0,1),y.push(R/c),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let C=0;C<c;C++){const R=C+h*x,T=C+h*(x+1),I=C+1+h*(x+1),N=C+1+h*x;v.push(R,T,N),v.push(T,I,N)}this.setIndex(v),this.setAttribute("position",new Kt(S,3)),this.setAttribute("normal",new Kt(E,3)),this.setAttribute("uv",new Kt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class pl extends Ht{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(l+c,Math.PI);let h=0;const m=[],p=new D,g=new D,v=[],S=[],E=[],y=[];for(let x=0;x<=n;x++){const C=[],R=x/n;let T=0;x===0&&l===0?T=.5/t:x===n&&d===Math.PI&&(T=-.5/t);for(let I=0;I<=t;I++){const N=I/t;p.x=-e*Math.cos(s+N*a)*Math.sin(l+R*c),p.y=e*Math.cos(l+R*c),p.z=e*Math.sin(s+N*a)*Math.sin(l+R*c),S.push(p.x,p.y,p.z),g.copy(p).normalize(),E.push(g.x,g.y,g.z),y.push(N+T,1-R),C.push(h++)}m.push(C)}for(let x=0;x<n;x++)for(let C=0;C<t;C++){const R=m[x][C+1],T=m[x][C],I=m[x+1][C],N=m[x+1][C+1];(x!==0||l>0)&&v.push(R,T,N),(x!==n-1||d<Math.PI)&&v.push(T,I,N)}this.setIndex(v),this.setAttribute("position",new Kt(S,3)),this.setAttribute("normal",new Kt(E,3)),this.setAttribute("uv",new Kt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bp extends Ht{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],d=[],h=[],m=new D,p=new D,g=new D;for(let v=0;v<=n;v++)for(let S=0;S<=s;S++){const E=S/s*a,y=v/n*Math.PI*2;p.x=(e+t*Math.cos(y))*Math.cos(E),p.y=(e+t*Math.cos(y))*Math.sin(E),p.z=t*Math.sin(y),c.push(p.x,p.y,p.z),m.x=e*Math.cos(E),m.y=e*Math.sin(E),g.subVectors(p,m).normalize(),d.push(g.x,g.y,g.z),h.push(S/s),h.push(v/n)}for(let v=1;v<=n;v++)for(let S=1;S<=s;S++){const E=(s+1)*v+S-1,y=(s+1)*(v-1)+S-1,x=(s+1)*(v-1)+S,C=(s+1)*v+S;l.push(E,y,C),l.push(y,x,C)}this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cp extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mp,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ni extends Cp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nT extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iT extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ju(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rT(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sT(i){function e(s,a){return i[s]-i[a]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function uv(i,e,t){const n=i.length,s=new i.constructor(n);for(let a=0,l=0;l!==n;++a){const c=t[a]*e;for(let d=0;d!==e;++d)s[l++]=i[c+d]}return s}function fx(i,e,t,n){let s=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[s++];if(a===void 0)return;let l=a[n];if(l!==void 0)if(Array.isArray(l))do l=a[n],l!==void 0&&(e.push(a.time),t.push(...l)),a=i[s++];while(a!==void 0);else if(l.toArray!==void 0)do l=a[n],l!==void 0&&(e.push(a.time),l.toArray(t,t.length)),a=i[s++];while(a!==void 0);else do l=a[n],l!==void 0&&(e.push(a.time),t.push(l)),a=i[s++];while(a!==void 0)}class _l{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];e:{t:{let l;n:{i:if(!(e<s)){for(let c=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(a=s,s=t[++n],e<s)break t}l=t.length;break n}if(!(e>=a)){const c=t[1];e<c&&(n=2,a=c);for(let d=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(s=a,a=t[--n-1],e>=a)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let l=0;l!==s;++l)t[l]=n[a+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class oT extends _l{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:T_,endingEnd:T_}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,l=e+1,c=s[a],d=s[l];if(c===void 0)switch(this.getSettings_().endingStart){case w_:a=e,c=2*t-n;break;case A_:a=s.length-2,c=t+s[a]-s[a+1];break;default:a=e,c=n}if(d===void 0)switch(this.getSettings_().endingEnd){case w_:l=e,d=2*n-t;break;case A_:l=1,d=n+s[1]-s[0];break;default:l=e-1,d=t}const h=(n-t)*.5,m=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(d-n),this._offsetPrev=a*m,this._offsetNext=l*m}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,m=this._offsetPrev,p=this._offsetNext,g=this._weightPrev,v=this._weightNext,S=(n-t)/(s-t),E=S*S,y=E*S,x=-g*y+2*g*E-g*S,C=(1+g)*y+(-1.5-2*g)*E+(-.5+g)*S+1,R=(-1-v)*y+(1.5+v)*E+.5*S,T=v*y-v*E;for(let I=0;I!==c;++I)a[I]=x*l[m+I]+C*l[h+I]+R*l[d+I]+T*l[p+I];return a}}class aT extends _l{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,m=(n-t)/(s-t),p=1-m;for(let g=0;g!==c;++g)a[g]=l[h+g]*p+l[d+g]*m;return a}}class lT extends _l{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Di{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ju(t,this.TimeBufferType),this.values=ju(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ju(e.times,Array),values:ju(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ul:t=this.InterpolantFactoryMethodDiscrete;break;case cl:t=this.InterpolantFactoryMethodLinear;break;case hh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ul;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return hh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,l=s-1;for(;a!==s&&n[a]<e;)++a;for(;l!==-1&&n[l]>t;)--l;if(++l,a!==0||l!==s){a>=l&&(l=Math.max(l,1),a=l-1);const c=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==a;c++){const d=n[c];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,d),e=!1;break}if(l!==null&&l>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,d,l),e=!1;break}l=d}if(s!==void 0&&rT(s))for(let c=0,d=s.length;c!==d;++c){const h=s[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hh,a=e.length-1;let l=1;for(let c=1;c<a;++c){let d=!1;const h=e[c],m=e[c+1];if(h!==m&&(c!==1||h!==e[0]))if(s)d=!0;else{const p=c*n,g=p-n,v=p+n;for(let S=0;S!==n;++S){const E=t[p+S];if(E!==t[g+S]||E!==t[v+S]){d=!0;break}}}if(d){if(c!==l){e[l]=e[c];const p=c*n,g=l*n;for(let v=0;v!==n;++v)t[g+v]=t[p+v]}++l}}if(a>0){e[l]=e[a];for(let c=a*n,d=l*n,h=0;h!==n;++h)t[d+h]=t[c+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=cl;class Qo extends Di{constructor(e,t,n){super(e,t,n)}}Qo.prototype.ValueTypeName="bool";Qo.prototype.ValueBufferType=Array;Qo.prototype.DefaultInterpolation=ul;Qo.prototype.InterpolantFactoryMethodLinear=void 0;Qo.prototype.InterpolantFactoryMethodSmooth=void 0;class px extends Di{constructor(e,t,n,s){super(e,t,n,s)}}px.prototype.ValueTypeName="color";class jo extends Di{constructor(e,t,n,s){super(e,t,n,s)}}jo.prototype.ValueTypeName="number";class uT extends _l{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=(n-t)/(s-t);let h=e*c;for(let m=h+c;h!==m;h+=4)vt.slerpFlat(a,0,l,h-c,l,h,d);return a}}class Yo extends Di{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new uT(this.times,this.values,this.getValueSize(),e)}}Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Jo extends Di{constructor(e,t,n){super(e,t,n)}}Jo.prototype.ValueTypeName="string";Jo.prototype.ValueBufferType=Array;Jo.prototype.DefaultInterpolation=ul;Jo.prototype.InterpolantFactoryMethodLinear=void 0;Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class qo extends Di{constructor(e,t,n,s){super(e,t,n,s)}}qo.prototype.ValueTypeName="vector";class cT{constructor(e="",t=-1,n=[],s=XS){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Li(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(hT(n[l]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,l=n.length;a!==l;++a)t.push(Di.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,l=[];for(let c=0;c<a;c++){let d=[],h=[];d.push((c+a-1)%a,c,(c+1)%a),h.push(0,1,0);const m=sT(d);d=uv(d,1,m),h=uv(h,1,m),!s&&d[0]===0&&(d.push(a),h.push(h[0])),l.push(new jo(".morphTargetInfluences["+t[c].name+"]",d,h).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,d=e.length;c<d;c++){const h=e[c],m=h.name.match(a);if(m&&m.length>1){const p=m[1];let g=s[p];g||(s[p]=g=[]),g.push(h)}}const l=[];for(const c in s)l.push(this.CreateFromMorphTargetSequence(c,s[c],t,n));return l}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,g,v,S,E){if(v.length!==0){const y=[],x=[];fx(v,y,x,S),y.length!==0&&E.push(new p(g,y,x))}},s=[],a=e.name||"default",l=e.fps||30,c=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const g=h[p].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const v={};let S;for(S=0;S<g.length;S++)if(g[S].morphTargets)for(let E=0;E<g[S].morphTargets.length;E++)v[g[S].morphTargets[E]]=-1;for(const E in v){const y=[],x=[];for(let C=0;C!==g[S].morphTargets.length;++C){const R=g[S];y.push(R.time),x.push(R.morphTarget===E?1:0)}s.push(new jo(".morphTargetInfluence["+E+"]",y,x))}d=v.length*l}else{const v=".bones["+t[p].name+"]";n(qo,v+".position",g,"pos",s),n(Yo,v+".quaternion",g,"rot",s),n(qo,v+".scale",g,"scl",s)}}return s.length===0?null:new this(a,d,s,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function dT(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jo;case"vector":case"vector2":case"vector3":case"vector4":return qo;case"color":return px;case"quaternion":return Yo;case"bool":case"boolean":return Qo;case"string":return Jo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function hT(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dT(i.type);if(i.times===void 0){const t=[],n=[];fx(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const _r={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class fT{constructor(e,t,n){const s=this;let a=!1,l=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(m){c++,a===!1&&s.onStart!==void 0&&s.onStart(m,l,c),a=!0},this.itemEnd=function(m){l++,s.onProgress!==void 0&&s.onProgress(m,l,c),l===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,p){return h.push(m,p),this},this.removeHandler=function(m){const p=h.indexOf(m);return p!==-1&&h.splice(p,2),this},this.getHandler=function(m){for(let p=0,g=h.length;p<g;p+=2){const v=h[p],S=h[p+1];if(v.global&&(v.lastIndex=0),v.test(m))return S}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const pT=new fT;class ea{constructor(e){this.manager=e!==void 0?e:pT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ea.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr={};class mT extends Error{constructor(e,t){super(e),this.response=t}}class mx extends ea{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=_r.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(pr[e]!==void 0){pr[e].push({onLoad:t,onProgress:n,onError:s});return}pr[e]=[],pr[e].push({onLoad:t,onProgress:n,onError:s});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,d=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=pr[e],p=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=g?parseInt(g):0,S=v!==0;let E=0;const y=new ReadableStream({start(x){C();function C(){p.read().then(({done:R,value:T})=>{if(R)x.close();else{E+=T.byteLength;const I=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:v});for(let N=0,U=m.length;N<U;N++){const z=m[N];z.onProgress&&z.onProgress(I)}x.enqueue(T),C()}},R=>{x.error(R)})}}});return new Response(y)}else throw new mT(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,c));case"json":return h.json();default:if(c==="")return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),g=p&&p[1]?p[1].toLowerCase():void 0,v=new TextDecoder(g);return h.arrayBuffer().then(S=>v.decode(S))}}}).then(h=>{_r.add(`file:${e}`,h);const m=pr[e];delete pr[e];for(let p=0,g=m.length;p<g;p++){const v=m[p];v.onLoad&&v.onLoad(h)}}).catch(h=>{const m=pr[e];if(m===void 0)throw this.manager.itemError(e),h;delete pr[e];for(let p=0,g=m.length;p<g;p++){const v=m[p];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const bo=new WeakMap;class gx extends ea{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=_r.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0);else{let p=bo.get(l);p===void 0&&(p=[],bo.set(l,p)),p.push({onLoad:t,onError:s})}return l}const c=dl("img");function d(){m(),t&&t(this);const p=bo.get(this)||[];for(let g=0;g<p.length;g++){const v=p[g];v.onLoad&&v.onLoad(this)}bo.delete(this),a.manager.itemEnd(e)}function h(p){m(),s&&s(p),_r.remove(`image:${e}`);const g=bo.get(this)||[];for(let v=0;v<g.length;v++){const S=g[v];S.onError&&S.onError(p)}bo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),_r.add(`image:${e}`,c),a.manager.itemStart(e),c.src=e,c}}class gT extends ea{constructor(e){super(e)}load(e,t,n,s){const a=new fn,l=new gx(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class Tc extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Bh=new lt,cv=new D,dv=new D;class Pp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tp,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cv.setFromMatrixPosition(e.matrixWorld),t.position.copy(cv),dv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dv),t.updateMatrixWorld(),Bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _T extends Pp{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Wo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vT extends Tc{constructor(e,t,n=0,s=Math.PI/3,a=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=l,this.map=null,this.shadow=new _T}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hv=new lt,Xa=new D,Vh=new D;class xT extends Pp{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Xa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xa),Vh.copy(n.position),Vh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vh),n.updateMatrixWorld(),s.makeTranslation(-Xa.x,-Xa.y,-Xa.z),hv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hv,n.coordinateSystem,n.reversedDepth)}}class yT extends Tc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lp extends ix{constructor(e=-1,t=1,n=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class MT extends Pp{constructor(){super(new Lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class np extends Tc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new MT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ST extends Tc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const zh=new WeakMap;class ET extends ea{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=_r.get(`image-bitmap:${e}`);if(l!==void 0){if(a.manager.itemStart(e),l.then){l.then(h=>{if(zh.has(l)===!0)s&&s(zh.get(l)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(h),a.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const d=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return _r.add(`image-bitmap:${e}`,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),zh.set(d,h),_r.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});_r.add(`image-bitmap:${e}`,d),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class TT extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ip="\\[\\]\\.:\\/",AT=new RegExp("["+Ip+"]","g"),Np="[^"+Ip+"]",RT="[^"+Ip.replace("\\.","")+"]",bT=/((?:WC+[\/:])*)/.source.replace("WC",Np),CT=/(WCOD+)?/.source.replace("WCOD",RT),PT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Np),LT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Np),IT=new RegExp("^"+bT+CT+PT+LT+"$"),NT=["material","materials","bones","map"];class DT{constructor(e,t,n){const s=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Vt{constructor(e,t,n){this.path=t,this.parsedPath=n||Vt.parseTrackName(t),this.node=Vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Vt.Composite(e,t,n):new Vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(AT,"")}static parseTrackName(e){const t=IT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);NT.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let l=0;l<a.length;l++){const c=a[l];if(c.name===t||c.uuid===t)return c;const d=n(c.children);if(d)return d}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const l=e[s];if(l===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(d=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Vt.Composite=DT;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fv{constructor(e,t,n,s,a,l=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=a,this.normalized=l,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class UT extends Zo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Ht;s.setAttribute("position",new Kt(t,3)),s.setAttribute("color",new Kt(n,3));const a=new Jr({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(e,t,n){const s=new Ze,a=this.geometry.attributes.color.array;return s.set(e),s.toArray(a,0),s.toArray(a,3),s.set(t),s.toArray(a,6),s.toArray(a,9),s.set(n),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function pv(i,e,t,n){const s=OT(n);switch(t){case W0:return i*e;case _p:return i*e/s.components*s.byteLength;case vp:return i*e/s.components*s.byteLength;case j0:return i*e*2/s.components*s.byteLength;case xp:return i*e*2/s.components*s.byteLength;case X0:return i*e*3/s.components*s.byteLength;case mi:return i*e*4/s.components*s.byteLength;case yp:return i*e*4/s.components*s.byteLength;case tc:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tf:case Af:return Math.max(i,16)*Math.max(e,8)/4;case Ef:case wf:return Math.max(i,8)*Math.max(e,8)/2;case Rf:case bf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Df:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Of:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kf:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wf:case Xf:case jf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yf:case qf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $f:case Kf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OT(i){switch(i){case $i:case V0:return{byteLength:1,components:1};case sl:case z0:case ml:return{byteLength:2,components:1};case mp:case gp:return{byteLength:2,components:4};case Us:case pp:case Pi:return{byteLength:4,components:1};case H0:case G0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ds}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ds);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _x(){let i=null,e=!1,t=null,n=null;function s(a,l){t(a,l),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function FT(i){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,p=h.byteLength,g=i.createBuffer();i.bindBuffer(d,g),i.bufferData(d,h,m),c.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,d,h){const m=d.array,p=d.updateRanges;if(i.bindBuffer(h,c),p.length===0)i.bufferSubData(h,0,m);else{p.sort((v,S)=>v.start-S.start);let g=0;for(let v=1;v<p.length;v++){const S=p[g],E=p[v];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++g,p[g]=E)}p.length=g+1;for(let v=0,S=p.length;v<S;v++){const E=p[v];i.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(i.deleteBuffer(d.buffer),e.delete(c))}function l(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:s,remove:a,update:l}}var kT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BT=`#ifdef USE_ALPHAHASH
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
#endif`,VT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WT=`#ifdef USE_AOMAP
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
#endif`,XT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jT=`#ifdef USE_BATCHING
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
#endif`,YT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$T=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZT=`#ifdef USE_IRIDESCENCE
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
#endif`,QT=`#ifdef USE_BUMPMAP
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
#endif`,JT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ow=`#if defined( USE_COLOR_ALPHA )
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
#endif`,aw=`#define PI 3.141592653589793
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
} // validated`,lw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uw=`vec3 transformedNormal = objectNormal;
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
#endif`,cw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pw="gl_FragColor = linearToOutputTexel( gl_FragColor );",mw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gw=`#ifdef USE_ENVMAP
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
#endif`,_w=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vw=`#ifdef USE_ENVMAP
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
#endif`,xw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yw=`#ifdef USE_ENVMAP
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
#endif`,Mw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ew=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ww=`#ifdef USE_GRADIENTMAP
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
}`,Aw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cw=`uniform bool receiveShadow;
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
#endif`,Pw=`#ifdef USE_ENVMAP
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
#endif`,Lw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uw=`PhysicalMaterial material;
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
#endif`,Ow=`struct PhysicalMaterial {
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
}`,Fw=`
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
#endif`,kw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ww=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yw=`#if defined( USE_POINTS_UV )
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
#endif`,qw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jw=`#ifdef USE_MORPHTARGETS
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
#endif`,eA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oA=`#ifdef USE_NORMALMAP
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
#endif`,aA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_A=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SA=`float getShadowMask() {
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
}`,EA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TA=`#ifdef USE_SKINNING
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
#endif`,wA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AA=`#ifdef USE_SKINNING
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
#endif`,RA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LA=`#ifdef USE_TRANSMISSION
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
#endif`,IA=`#ifdef USE_TRANSMISSION
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
#endif`,NA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kA=`uniform sampler2D t2D;
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
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`#include <common>
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
}`,WA=`#if DEPTH_PACKING == 3200
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
}`,XA=`#define DISTANCE
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
}`,jA=`#define DISTANCE
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
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`uniform float scale;
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
}`,KA=`uniform vec3 diffuse;
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
}`,ZA=`#include <common>
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
}`,QA=`uniform vec3 diffuse;
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
}`,JA=`#define LAMBERT
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
}`,eR=`#define LAMBERT
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
}`,tR=`#define MATCAP
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
}`,nR=`#define MATCAP
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
}`,iR=`#define NORMAL
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
}`,rR=`#define NORMAL
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
}`,sR=`#define PHONG
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
}`,oR=`#define PHONG
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
}`,aR=`#define STANDARD
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
}`,lR=`#define STANDARD
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
}`,uR=`#define TOON
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
}`,cR=`#define TOON
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
}`,dR=`uniform float size;
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
}`,hR=`uniform vec3 diffuse;
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
}`,fR=`#include <common>
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
}`,pR=`uniform vec3 color;
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
}`,mR=`uniform float rotation;
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
}`,gR=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:kT,alphahash_pars_fragment:BT,alphamap_fragment:VT,alphamap_pars_fragment:zT,alphatest_fragment:HT,alphatest_pars_fragment:GT,aomap_fragment:WT,aomap_pars_fragment:XT,batching_pars_vertex:jT,batching_vertex:YT,begin_vertex:qT,beginnormal_vertex:$T,bsdfs:KT,iridescence_fragment:ZT,bumpmap_pars_fragment:QT,clipping_planes_fragment:JT,clipping_planes_pars_fragment:ew,clipping_planes_pars_vertex:tw,clipping_planes_vertex:nw,color_fragment:iw,color_pars_fragment:rw,color_pars_vertex:sw,color_vertex:ow,common:aw,cube_uv_reflection_fragment:lw,defaultnormal_vertex:uw,displacementmap_pars_vertex:cw,displacementmap_vertex:dw,emissivemap_fragment:hw,emissivemap_pars_fragment:fw,colorspace_fragment:pw,colorspace_pars_fragment:mw,envmap_fragment:gw,envmap_common_pars_fragment:_w,envmap_pars_fragment:vw,envmap_pars_vertex:xw,envmap_physical_pars_fragment:Pw,envmap_vertex:yw,fog_vertex:Mw,fog_pars_vertex:Sw,fog_fragment:Ew,fog_pars_fragment:Tw,gradientmap_pars_fragment:ww,lightmap_pars_fragment:Aw,lights_lambert_fragment:Rw,lights_lambert_pars_fragment:bw,lights_pars_begin:Cw,lights_toon_fragment:Lw,lights_toon_pars_fragment:Iw,lights_phong_fragment:Nw,lights_phong_pars_fragment:Dw,lights_physical_fragment:Uw,lights_physical_pars_fragment:Ow,lights_fragment_begin:Fw,lights_fragment_maps:kw,lights_fragment_end:Bw,logdepthbuf_fragment:Vw,logdepthbuf_pars_fragment:zw,logdepthbuf_pars_vertex:Hw,logdepthbuf_vertex:Gw,map_fragment:Ww,map_pars_fragment:Xw,map_particle_fragment:jw,map_particle_pars_fragment:Yw,metalnessmap_fragment:qw,metalnessmap_pars_fragment:$w,morphinstance_vertex:Kw,morphcolor_vertex:Zw,morphnormal_vertex:Qw,morphtarget_pars_vertex:Jw,morphtarget_vertex:eA,normal_fragment_begin:tA,normal_fragment_maps:nA,normal_pars_fragment:iA,normal_pars_vertex:rA,normal_vertex:sA,normalmap_pars_fragment:oA,clearcoat_normal_fragment_begin:aA,clearcoat_normal_fragment_maps:lA,clearcoat_pars_fragment:uA,iridescence_pars_fragment:cA,opaque_fragment:dA,packing:hA,premultiplied_alpha_fragment:fA,project_vertex:pA,dithering_fragment:mA,dithering_pars_fragment:gA,roughnessmap_fragment:_A,roughnessmap_pars_fragment:vA,shadowmap_pars_fragment:xA,shadowmap_pars_vertex:yA,shadowmap_vertex:MA,shadowmask_pars_fragment:SA,skinbase_vertex:EA,skinning_pars_vertex:TA,skinning_vertex:wA,skinnormal_vertex:AA,specularmap_fragment:RA,specularmap_pars_fragment:bA,tonemapping_fragment:CA,tonemapping_pars_fragment:PA,transmission_fragment:LA,transmission_pars_fragment:IA,uv_pars_fragment:NA,uv_pars_vertex:DA,uv_vertex:UA,worldpos_vertex:OA,background_vert:FA,background_frag:kA,backgroundCube_vert:BA,backgroundCube_frag:VA,cube_vert:zA,cube_frag:HA,depth_vert:GA,depth_frag:WA,distanceRGBA_vert:XA,distanceRGBA_frag:jA,equirect_vert:YA,equirect_frag:qA,linedashed_vert:$A,linedashed_frag:KA,meshbasic_vert:ZA,meshbasic_frag:QA,meshlambert_vert:JA,meshlambert_frag:eR,meshmatcap_vert:tR,meshmatcap_frag:nR,meshnormal_vert:iR,meshnormal_frag:rR,meshphong_vert:sR,meshphong_frag:oR,meshphysical_vert:aR,meshphysical_frag:lR,meshtoon_vert:uR,meshtoon_frag:cR,points_vert:dR,points_frag:hR,shadow_vert:fR,shadow_frag:pR,sprite_vert:mR,sprite_frag:gR},Pe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ji={basic:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Bn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Bn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Bn([Pe.points,Pe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Bn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Bn([Pe.common,Pe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Bn([Pe.sprite,Pe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Bn([Pe.common,Pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Bn([Pe.lights,Pe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ji.physical={uniforms:Bn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Yu={r:0,b:0,g:0},ys=new ii,_R=new lt;function vR(i,e,t,n,s,a,l){const c=new Ze(0);let d=a===!0?0:1,h,m,p=null,g=0,v=null;function S(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?t:e).get(T)),T}function E(R){let T=!1;const I=S(R);I===null?x(c,d):I&&I.isColor&&(x(I,1),T=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(R,T){const I=S(T);I&&(I.isCubeTexture||I.mapping===yc)?(m===void 0&&(m=new rn(new gl(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Xo(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),ys.copy(T.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),m.material.uniforms.envMap.value=I,m.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(_R.makeRotationFromEuler(ys)),m.material.toneMapped=Pt.getTransfer(I.colorSpace)!==Xt,(p!==I||g!==I.version||v!==i.toneMapping)&&(m.material.needsUpdate=!0,p=I,g=I.version,v=i.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new rn(new Ec(2,2),new Ii({name:"BackgroundMaterial",uniforms:Xo(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(I.colorSpace)!==Xt,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(p!==I||g!==I.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,p=I,g=I.version,v=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function x(R,T){R.getRGB(Yu,tx(i)),n.buffers.color.setClear(Yu.r,Yu.g,Yu.b,T,l)}function C(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,T=1){c.set(R),d=T,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,x(c,d)},render:E,addToRenderList:y,dispose:C}}function xR(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null);let a=s,l=!1;function c(b,B,Y,ee,de){let le=!1;const ue=p(ee,Y,B);a!==ue&&(a=ue,h(a.object)),le=v(b,ee,Y,de),le&&S(b,ee,Y,de),de!==null&&e.update(de,i.ELEMENT_ARRAY_BUFFER),(le||l)&&(l=!1,T(b,B,Y,ee),de!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function d(){return i.createVertexArray()}function h(b){return i.bindVertexArray(b)}function m(b){return i.deleteVertexArray(b)}function p(b,B,Y){const ee=Y.wireframe===!0;let de=n[b.id];de===void 0&&(de={},n[b.id]=de);let le=de[B.id];le===void 0&&(le={},de[B.id]=le);let ue=le[ee];return ue===void 0&&(ue=g(d()),le[ee]=ue),ue}function g(b){const B=[],Y=[],ee=[];for(let de=0;de<t;de++)B[de]=0,Y[de]=0,ee[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:ee,object:b,attributes:{},index:null}}function v(b,B,Y,ee){const de=a.attributes,le=B.attributes;let ue=0;const ie=Y.getAttributes();for(const H in ie)if(ie[H].location>=0){const ne=de[H];let V=le[H];if(V===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(V=b.instanceColor)),ne===void 0||ne.attribute!==V||V&&ne.data!==V.data)return!0;ue++}return a.attributesNum!==ue||a.index!==ee}function S(b,B,Y,ee){const de={},le=B.attributes;let ue=0;const ie=Y.getAttributes();for(const H in ie)if(ie[H].location>=0){let ne=le[H];ne===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor));const V={};V.attribute=ne,ne&&ne.data&&(V.data=ne.data),de[H]=V,ue++}a.attributes=de,a.attributesNum=ue,a.index=ee}function E(){const b=a.newAttributes;for(let B=0,Y=b.length;B<Y;B++)b[B]=0}function y(b){x(b,0)}function x(b,B){const Y=a.newAttributes,ee=a.enabledAttributes,de=a.attributeDivisors;Y[b]=1,ee[b]===0&&(i.enableVertexAttribArray(b),ee[b]=1),de[b]!==B&&(i.vertexAttribDivisor(b,B),de[b]=B)}function C(){const b=a.newAttributes,B=a.enabledAttributes;for(let Y=0,ee=B.length;Y<ee;Y++)B[Y]!==b[Y]&&(i.disableVertexAttribArray(Y),B[Y]=0)}function R(b,B,Y,ee,de,le,ue){ue===!0?i.vertexAttribIPointer(b,B,Y,de,le):i.vertexAttribPointer(b,B,Y,ee,de,le)}function T(b,B,Y,ee){E();const de=ee.attributes,le=Y.getAttributes(),ue=B.defaultAttributeValues;for(const ie in le){const H=le[ie];if(H.location>=0){let ce=de[ie];if(ce===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){const ne=ce.normalized,V=ce.itemSize,oe=e.get(ce);if(oe===void 0)continue;const Ue=oe.buffer,ke=oe.type,me=oe.bytesPerElement,q=ke===i.INT||ke===i.UNSIGNED_INT||ce.gpuType===pp;if(ce.isInterleavedBufferAttribute){const J=ce.data,ge=J.stride,Me=ce.offset;if(J.isInstancedInterleavedBuffer){for(let Ce=0;Ce<H.locationSize;Ce++)x(H.location+Ce,J.meshPerAttribute);b.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ce=0;Ce<H.locationSize;Ce++)y(H.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let Ce=0;Ce<H.locationSize;Ce++)R(H.location+Ce,V/H.locationSize,ke,ne,ge*me,(Me+V/H.locationSize*Ce)*me,q)}else{if(ce.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)x(H.location+J,ce.meshPerAttribute);b.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let J=0;J<H.locationSize;J++)y(H.location+J);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let J=0;J<H.locationSize;J++)R(H.location+J,V/H.locationSize,ke,ne,V*me,V/H.locationSize*J*me,q)}}else if(ue!==void 0){const ne=ue[ie];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(H.location,ne);break;case 3:i.vertexAttrib3fv(H.location,ne);break;case 4:i.vertexAttrib4fv(H.location,ne);break;default:i.vertexAttrib1fv(H.location,ne)}}}}C()}function I(){z();for(const b in n){const B=n[b];for(const Y in B){const ee=B[Y];for(const de in ee)m(ee[de].object),delete ee[de];delete B[Y]}delete n[b]}}function N(b){if(n[b.id]===void 0)return;const B=n[b.id];for(const Y in B){const ee=B[Y];for(const de in ee)m(ee[de].object),delete ee[de];delete B[Y]}delete n[b.id]}function U(b){for(const B in n){const Y=n[B];if(Y[b.id]===void 0)continue;const ee=Y[b.id];for(const de in ee)m(ee[de].object),delete ee[de];delete Y[b.id]}}function z(){P(),l=!0,a!==s&&(a=s,h(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:z,resetDefaultState:P,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:y,disableUnusedAttributes:C}}function yR(i,e,t){let n;function s(h){n=h}function a(h,m){i.drawArrays(n,h,m),t.update(m,n,1)}function l(h,m,p){p!==0&&(i.drawArraysInstanced(n,h,m,p),t.update(m,n,p))}function c(h,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,m,0,p);let v=0;for(let S=0;S<p;S++)v+=m[S];t.update(v,n,1)}function d(h,m,p,g){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<h.length;S++)l(h[S],m[S],g[S]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,m,0,g,0,p);let S=0;for(let E=0;E<p;E++)S+=m[E]*g[E];t.update(S,n,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function MR(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(U){return!(U!==mi&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const z=U===ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==$i&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Pi&&!z)}function d(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=S>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:T,vertexTextures:I,maxSamples:N}}function SR(i){const e=this;let t=null,n=0,s=!1,a=!1;const l=new bs,c=new ot,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const v=p.length!==0||g||n!==0||s;return s=g,n=p.length,v},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,g){t=m(p,g,0)},this.setState=function(p,g,v){const S=p.clippingPlanes,E=p.clipIntersection,y=p.clipShadows,x=i.get(p);if(!s||S===null||S.length===0||a&&!y)a?m(null):h();else{const C=a?0:n,R=C*4;let T=x.clippingState||null;d.value=T,T=m(S,g,R,v);for(let I=0;I!==R;++I)T[I]=t[I];x.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(p,g,v,S){const E=p!==null?p.length:0;let y=null;if(E!==0){if(y=d.value,S!==!0||y===null){const x=v+E*4,C=g.matrixWorldInverse;c.getNormalMatrix(C),(y===null||y.length<x)&&(y=new Float32Array(x));for(let R=0,T=v;R!==E;++R,T+=4)l.copy(p[R]).applyMatrix4(C,c),l.normal.toArray(y,T),y[T+3]=l.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function ER(i){let e=new WeakMap;function t(l,c){return c===Mf?l.mapping=zo:c===Sf&&(l.mapping=Ho),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Mf||c===Sf)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const h=new GE(d.height);return h.fromEquirectangularTexture(i,l),e.set(l,h),l.addEventListener("dispose",s),t(h.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Oo=4,mv=[.125,.215,.35,.446,.526,.582],Ls=20,Hh=new Lp,gv=new Ze;let Gh=null,Wh=0,Xh=0,jh=!1;const Cs=(1+Math.sqrt(5))/2,Co=1/Cs,_v=[new D(-Cs,Co,0),new D(Cs,Co,0),new D(-Co,0,Cs),new D(Co,0,Cs),new D(0,Cs,-Co),new D(0,Cs,Co),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],TR=new D;class vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,a={}){const{size:l=256,position:c=TR}=a;Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,s,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Wh,Xh),this._renderer.xr.enabled=jh,e.scissorTest=!1,qu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zo||e.mapping===Ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:ml,format:mi,colorSpace:Hn,depthBuffer:!1},s=xv(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xv(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wR(a)),this._blurMaterial=AR(a,e,t)}return s}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,Hh)}_sceneToCubeUV(e,t,n,s,a){const d=new Vn(90,1,t,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(gv),p.toneMapping=Qr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));const E=new gi({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),y=new rn(new gl,E);let x=!1;const C=e.background;C?C.isColor&&(E.color.copy(C),e.background=null,x=!0):(E.color.copy(gv),x=!0);for(let R=0;R<6;R++){const T=R%3;T===0?(d.up.set(0,h[R],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+m[R],a.y,a.z)):T===1?(d.up.set(0,0,h[R]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+m[R],a.z)):(d.up.set(0,h[R],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+m[R]));const I=this._cubeSize;qu(s,T*I,R>2?I:0,I,I),p.setRenderTarget(s),x&&p.render(y,d),p.render(e,d)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===zo||e.mapping===Ho;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new rn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;qu(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,Hh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=_v[(s-a-1)%_v.length];this._blur(e,a-1,a,l,c)}t.autoClear=n}_blur(e,t,n,s,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",a),this._halfBlur(l,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,l,c){const d=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new rn(this._lodPlanes[s],h),g=h.uniforms,v=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Ls-1),E=a/S,y=isFinite(a)?1+Math.floor(m*E):Ls;y>Ls&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ls}`);const x=[];let C=0;for(let U=0;U<Ls;++U){const z=U/E,P=Math.exp(-z*z/2);x.push(P),U===0?C+=P:U<y&&(C+=2*P)}for(let U=0;U<x.length;U++)x[U]=x[U]/C;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=l==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:R}=this;g.dTheta.value=S,g.mipInt.value=R-n;const T=this._sizeLods[s],I=3*T*(s>R-Oo?s-R+Oo:0),N=4*(this._cubeSize-T);qu(t,I,N,3*T,2*T),d.setRenderTarget(t),d.render(p,Hh)}}function wR(i){const e=[],t=[],n=[];let s=i;const a=i-Oo+1+mv.length;for(let l=0;l<a;l++){const c=Math.pow(2,s);t.push(c);let d=1/c;l>i-Oo?d=mv[l-i+Oo-1]:l===0&&(d=0),n.push(d);const h=1/(c-2),m=-h,p=1+h,g=[m,m,p,m,p,p,m,m,p,p,m,p],v=6,S=6,E=3,y=2,x=1,C=new Float32Array(E*S*v),R=new Float32Array(y*S*v),T=new Float32Array(x*S*v);for(let N=0;N<v;N++){const U=N%3*2/3-1,z=N>2?0:-1,P=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];C.set(P,E*S*N),R.set(g,y*S*N);const b=[N,N,N,N,N,N];T.set(b,x*S*N)}const I=new Ht;I.setAttribute("position",new St(C,E)),I.setAttribute("uv",new St(R,y)),I.setAttribute("faceIndex",new St(T,x)),e.push(I),s>Oo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xv(i,e,t){const n=new Os(i,e,t);return n.texture.mapping=yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qu(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function AR(i,e,t){const n=new Float32Array(Ls),s=new D(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function yv(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Mv(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Dp(){return`

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
	`}function RR(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,h=d===Mf||d===Sf,m=d===zo||d===Ho;if(h||m){let p=e.get(c);const g=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new vv(i)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const v=c.image;return h&&v&&v.height>0||m&&v&&s(v)?(t===null&&(t=new vv(i)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c}function s(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function bR(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&hl("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function CR(i,e,t,n){const s={},a=new WeakMap;function l(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",l),delete s[g.id];const v=a.get(g);v&&(e.remove(v),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(p,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,t.memory.geometries++),g}function d(p){const g=p.attributes;for(const v in g)e.update(g[v],i.ARRAY_BUFFER)}function h(p){const g=[],v=p.index,S=p.attributes.position;let E=0;if(v!==null){const C=v.array;E=v.version;for(let R=0,T=C.length;R<T;R+=3){const I=C[R+0],N=C[R+1],U=C[R+2];g.push(I,N,N,U,U,I)}}else if(S!==void 0){const C=S.array;E=S.version;for(let R=0,T=C.length/3-1;R<T;R+=3){const I=R+0,N=R+1,U=R+2;g.push(I,N,N,U,U,I)}}else return;const y=new($0(g)?ex:J0)(g,1);y.version=E;const x=a.get(p);x&&e.remove(x),a.set(p,y)}function m(p){const g=a.get(p);if(g){const v=p.index;v!==null&&g.version<v.version&&h(p)}else h(p);return a.get(p)}return{get:c,update:d,getWireframeAttribute:m}}function PR(i,e,t){let n;function s(g){n=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,v){i.drawElements(n,v,a,g*l),t.update(v,n,1)}function h(g,v,S){S!==0&&(i.drawElementsInstanced(n,v,a,g*l,S),t.update(v,n,S))}function m(g,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,g,0,S);let y=0;for(let x=0;x<S;x++)y+=v[x];t.update(y,n,1)}function p(g,v,S,E){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)h(g[x]/l,v[x],E[x]);else{y.multiDrawElementsInstancedWEBGL(n,v,0,a,g,0,E,0,S);let x=0;for(let C=0;C<S;C++)x+=v[C]*E[C];t.update(x,n,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function LR(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function IR(i,e,t){const n=new WeakMap,s=new Ut;function a(l,c,d){const h=l.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=m!==void 0?m.length:0;let g=n.get(c);if(g===void 0||g.count!==p){let b=function(){z.dispose(),n.delete(c),c.removeEventListener("dispose",b)};var v=b;g!==void 0&&g.texture.dispose();const S=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let T=0;S===!0&&(T=1),E===!0&&(T=2),y===!0&&(T=3);let I=c.attributes.position.count*T,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*N*4*p),z=new K0(U,I,N,p);z.type=Pi,z.needsUpdate=!0;const P=T*4;for(let B=0;B<p;B++){const Y=x[B],ee=C[B],de=R[B],le=I*N*4*B;for(let ue=0;ue<Y.count;ue++){const ie=ue*P;S===!0&&(s.fromBufferAttribute(Y,ue),U[le+ie+0]=s.x,U[le+ie+1]=s.y,U[le+ie+2]=s.z,U[le+ie+3]=0),E===!0&&(s.fromBufferAttribute(ee,ue),U[le+ie+4]=s.x,U[le+ie+5]=s.y,U[le+ie+6]=s.z,U[le+ie+7]=0),y===!0&&(s.fromBufferAttribute(de,ue),U[le+ie+8]=s.x,U[le+ie+9]=s.y,U[le+ie+10]=s.z,U[le+ie+11]=de.itemSize===4?s.w:1)}}g={count:p,texture:z,size:new Je(I,N)},n.set(c,g),c.addEventListener("dispose",b)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const E=c.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:a}}function NR(i,e,t,n){let s=new WeakMap;function a(d){const h=n.render.frame,m=d.geometry,p=e.get(d,m);if(s.get(p)!==h&&(e.update(p),s.set(p,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return p}function l(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}const vx=new fn,Sv=new dx(1,1),xx=new K0,yx=new RE,Mx=new rx,Ev=[],Tv=[],wv=new Float32Array(16),Av=new Float32Array(9),Rv=new Float32Array(4);function ta(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Ev[s];if(a===void 0&&(a=new Float32Array(s),Ev[s]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wc(i,e){let t=Tv[e];t===void 0&&(t=new Int32Array(e),Tv[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function DR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function UR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function OR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function FR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function kR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Rv.set(n),i.uniformMatrix2fv(this.addr,!1,Rv),mn(t,n)}}function BR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Av.set(n),i.uniformMatrix3fv(this.addr,!1,Av),mn(t,n)}}function VR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;wv.set(n),i.uniformMatrix4fv(this.addr,!1,wv),mn(t,n)}}function zR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function HR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function GR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function WR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function XR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function YR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function qR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function $R(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Sv.compareFunction=q0,a=Sv):a=vx,t.setTexture2D(e||a,s)}function KR(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yx,s)}function ZR(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Mx,s)}function QR(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xx,s)}function JR(i){switch(i){case 5126:return DR;case 35664:return UR;case 35665:return OR;case 35666:return FR;case 35674:return kR;case 35675:return BR;case 35676:return VR;case 5124:case 35670:return zR;case 35667:case 35671:return HR;case 35668:case 35672:return GR;case 35669:case 35673:return WR;case 5125:return XR;case 36294:return jR;case 36295:return YR;case 36296:return qR;case 35678:case 36198:case 36298:case 36306:case 35682:return $R;case 35679:case 36299:case 36307:return KR;case 35680:case 36300:case 36308:case 36293:return ZR;case 36289:case 36303:case 36311:case 36292:return QR}}function e1(i,e){i.uniform1fv(this.addr,e)}function t1(i,e){const t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function n1(i,e){const t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function i1(i,e){const t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function r1(i,e){const t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s1(i,e){const t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function o1(i,e){const t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function a1(i,e){i.uniform1iv(this.addr,e)}function l1(i,e){i.uniform2iv(this.addr,e)}function u1(i,e){i.uniform3iv(this.addr,e)}function c1(i,e){i.uniform4iv(this.addr,e)}function d1(i,e){i.uniform1uiv(this.addr,e)}function h1(i,e){i.uniform2uiv(this.addr,e)}function f1(i,e){i.uniform3uiv(this.addr,e)}function p1(i,e){i.uniform4uiv(this.addr,e)}function m1(i,e,t){const n=this.cache,s=e.length,a=wc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||vx,a[l])}function g1(i,e,t){const n=this.cache,s=e.length,a=wc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||yx,a[l])}function _1(i,e,t){const n=this.cache,s=e.length,a=wc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||Mx,a[l])}function v1(i,e,t){const n=this.cache,s=e.length,a=wc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||xx,a[l])}function x1(i){switch(i){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return u1;case 35669:case 35673:return c1;case 5125:return d1;case 36294:return h1;case 36295:return f1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return v1}}class y1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=JR(t.type)}}class M1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x1(t.type)}}class S1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const c=s[a];c.setValue(e,t[c.id],n)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function bv(i,e){i.seq.push(e),i.map[e.id]=e}function E1(i,e,t){const n=i.name,s=n.length;for(Yh.lastIndex=0;;){const a=Yh.exec(n),l=Yh.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&l+2===s){bv(t,h===void 0?new y1(c,i,e):new M1(c,i,e));break}else{let p=t.map[c];p===void 0&&(p=new S1(c),bv(t,p)),t=p}}}class sc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);E1(a,l,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,l=t.length;a!==l;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function Cv(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const T1=37297;let w1=0;function A1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=s;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const Pv=new ot;function R1(i){Pt._getMatrix(Pv,Pt.workingColorSpace,i);const e=`mat3( ${Pv.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(i)){case dc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lv(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+A1(i.getShaderSource(e),c)}else return a}function b1(i,e){const t=R1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function C1(i,e){let t;switch(e){case FS:t="Linear";break;case kS:t="Reinhard";break;case BS:t="Cineon";break;case VS:t="ACESFilmic";break;case HS:t="AgX";break;case GS:t="Neutral";break;case zS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $u=new D;function P1(){Pt.getLuminanceCoefficients($u);const i=$u.x.toFixed(4),e=$u.y.toFixed(4),t=$u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function I1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function el(i){return i!==""}function Iv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(i){return i.replace(D1,O1)}const U1=new Map;function O1(i,e){let t=xt[e];if(t===void 0){const n=U1.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ip(t)}const F1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dv(i){return i.replace(F1,k1)}function k1(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Uv(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function B1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===O0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gS?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function V1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zo:case Ho:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ho:e="ENVMAP_MODE_REFRACTION";break}return e}function H1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case F0:e="ENVMAP_BLENDING_MULTIPLY";break;case US:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function G1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function W1(i,e,t,n){const s=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const d=B1(t),h=V1(t),m=z1(t),p=H1(t),g=G1(t),v=L1(t),S=I1(a),E=s.createProgram();let y,x,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(el).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(el).join(`
`),x.length>0&&(x+=`
`)):(y=[Uv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),x=[Uv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qr?"#define TONE_MAPPING":"",t.toneMapping!==Qr?xt.tonemapping_pars_fragment:"",t.toneMapping!==Qr?C1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,b1("linearToOutputTexel",t.outputColorSpace),P1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(el).join(`
`)),l=ip(l),l=Iv(l,t),l=Nv(l,t),c=ip(c),c=Iv(c,t),c=Nv(c,t),l=Dv(l),c=Dv(c),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=C+y+l,T=C+x+c,I=Cv(s,s.VERTEX_SHADER,R),N=Cv(s,s.FRAGMENT_SHADER,T);s.attachShader(E,I),s.attachShader(E,N),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function U(B){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(E)||"",ee=s.getShaderInfoLog(I)||"",de=s.getShaderInfoLog(N)||"",le=Y.trim(),ue=ee.trim(),ie=de.trim();let H=!0,ce=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,I,N);else{const ne=Lv(s,I,"vertex"),V=Lv(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+le+`
`+ne+`
`+V)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ue===""||ie==="")&&(ce=!1);ce&&(B.diagnostics={runnable:H,programLog:le,vertexShader:{log:ue,prefix:y},fragmentShader:{log:ie,prefix:x}})}s.deleteShader(I),s.deleteShader(N),z=new sc(s,E),P=N1(s,E)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(E,T1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=N,this}let X1=0;class j1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Y1(e),t.set(e,n)),n}}class Y1{constructor(e){this.id=X1++,this.code=e,this.usedTimes=0}}function q1(i,e,t,n,s,a,l){const c=new Z0,d=new j1,h=new Set,m=[],p=s.logarithmicDepthBuffer,g=s.vertexTextures;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return h.add(P),P===0?"uv":`uv${P}`}function y(P,b,B,Y,ee){const de=Y.fog,le=ee.geometry,ue=P.isMeshStandardMaterial?Y.environment:null,ie=(P.isMeshStandardMaterial?t:e).get(P.envMap||ue),H=ie&&ie.mapping===yc?ie.image.height:null,ce=S[P.type];P.precision!==null&&(v=s.getMaxPrecision(P.precision),v!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",v,"instead."));const ne=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,V=ne!==void 0?ne.length:0;let oe=0;le.morphAttributes.position!==void 0&&(oe=1),le.morphAttributes.normal!==void 0&&(oe=2),le.morphAttributes.color!==void 0&&(oe=3);let Ue,ke,me,q;if(ce){const bt=ji[ce];Ue=bt.vertexShader,ke=bt.fragmentShader}else Ue=P.vertexShader,ke=P.fragmentShader,d.update(P),me=d.getVertexShaderID(P),q=d.getFragmentShaderID(P);const J=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Me=ee.isInstancedMesh===!0,Ce=ee.isBatchedMesh===!0,ct=!!P.map,Et=!!P.matcap,k=!!ie,Tt=!!P.aoMap,dt=!!P.lightMap,et=!!P.bumpMap,Be=!!P.normalMap,Ot=!!P.displacementMap,Ve=!!P.emissiveMap,ut=!!P.metalnessMap,Gt=!!P.roughnessMap,qt=P.anisotropy>0,O=P.clearcoat>0,A=P.dispersion>0,Q=P.iridescence>0,fe=P.sheen>0,_e=P.transmission>0,he=qt&&!!P.anisotropyMap,$e=O&&!!P.clearcoatMap,Se=O&&!!P.clearcoatNormalMap,ze=O&&!!P.clearcoatRoughnessMap,Ye=Q&&!!P.iridescenceMap,we=Q&&!!P.iridescenceThicknessMap,Ie=fe&&!!P.sheenColorMap,tt=fe&&!!P.sheenRoughnessMap,je=!!P.specularMap,Le=!!P.specularColorMap,ht=!!P.specularIntensityMap,W=_e&&!!P.transmissionMap,Te=_e&&!!P.thicknessMap,Re=!!P.gradientMap,De=!!P.alphaMap,ye=P.alphaTest>0,pe=!!P.alphaHash,He=!!P.extensions;let ft=Qr;P.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ft=i.toneMapping);const Lt={shaderID:ce,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:ke,defines:P.defines,customVertexShaderID:me,customFragmentShaderID:q,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:v,batching:Ce,batchingColor:Ce&&ee._colorsTexture!==null,instancing:Me,instancingColor:Me&&ee.instanceColor!==null,instancingMorph:Me&&ee.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Hn,alphaToCoverage:!!P.alphaToCoverage,map:ct,matcap:Et,envMap:k,envMapMode:k&&ie.mapping,envMapCubeUVHeight:H,aoMap:Tt,lightMap:dt,bumpMap:et,normalMap:Be,displacementMap:g&&Ot,emissiveMap:Ve,normalMapObjectSpace:Be&&P.normalMapType===$S,normalMapTangentSpace:Be&&P.normalMapType===Mp,metalnessMap:ut,roughnessMap:Gt,anisotropy:qt,anisotropyMap:he,clearcoat:O,clearcoatMap:$e,clearcoatNormalMap:Se,clearcoatRoughnessMap:ze,dispersion:A,iridescence:Q,iridescenceMap:Ye,iridescenceThicknessMap:we,sheen:fe,sheenColorMap:Ie,sheenRoughnessMap:tt,specularMap:je,specularColorMap:Le,specularIntensityMap:ht,transmission:_e,transmissionMap:W,thicknessMap:Te,gradientMap:Re,opaque:P.transparent===!1&&P.blending===Fo&&P.alphaToCoverage===!1,alphaMap:De,alphaTest:ye,alphaHash:pe,combine:P.combine,mapUv:ct&&E(P.map.channel),aoMapUv:Tt&&E(P.aoMap.channel),lightMapUv:dt&&E(P.lightMap.channel),bumpMapUv:et&&E(P.bumpMap.channel),normalMapUv:Be&&E(P.normalMap.channel),displacementMapUv:Ot&&E(P.displacementMap.channel),emissiveMapUv:Ve&&E(P.emissiveMap.channel),metalnessMapUv:ut&&E(P.metalnessMap.channel),roughnessMapUv:Gt&&E(P.roughnessMap.channel),anisotropyMapUv:he&&E(P.anisotropyMap.channel),clearcoatMapUv:$e&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:Se&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:we&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:tt&&E(P.sheenRoughnessMap.channel),specularMapUv:je&&E(P.specularMap.channel),specularColorMapUv:Le&&E(P.specularColorMap.channel),specularIntensityMapUv:ht&&E(P.specularIntensityMap.channel),transmissionMapUv:W&&E(P.transmissionMap.channel),thicknessMapUv:Te&&E(P.thicknessMap.channel),alphaMapUv:De&&E(P.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Be||qt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!le.attributes.uv&&(ct||De),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ge,skinning:ee.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:ct&&P.map.isVideoTexture===!0&&Pt.getTransfer(P.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ve&&P.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(P.emissiveMap.colorSpace)===Xt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===fi,flipSided:P.side===In,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:He&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&P.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Lt.vertexUv1s=h.has(1),Lt.vertexUv2s=h.has(2),Lt.vertexUv3s=h.has(3),h.clear(),Lt}function x(P){const b=[];if(P.shaderID?b.push(P.shaderID):(b.push(P.customVertexShaderID),b.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)b.push(B),b.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(C(b,P),R(b,P),b.push(i.outputColorSpace)),b.push(P.customProgramCacheKey),b.join()}function C(P,b){P.push(b.precision),P.push(b.outputColorSpace),P.push(b.envMapMode),P.push(b.envMapCubeUVHeight),P.push(b.mapUv),P.push(b.alphaMapUv),P.push(b.lightMapUv),P.push(b.aoMapUv),P.push(b.bumpMapUv),P.push(b.normalMapUv),P.push(b.displacementMapUv),P.push(b.emissiveMapUv),P.push(b.metalnessMapUv),P.push(b.roughnessMapUv),P.push(b.anisotropyMapUv),P.push(b.clearcoatMapUv),P.push(b.clearcoatNormalMapUv),P.push(b.clearcoatRoughnessMapUv),P.push(b.iridescenceMapUv),P.push(b.iridescenceThicknessMapUv),P.push(b.sheenColorMapUv),P.push(b.sheenRoughnessMapUv),P.push(b.specularMapUv),P.push(b.specularColorMapUv),P.push(b.specularIntensityMapUv),P.push(b.transmissionMapUv),P.push(b.thicknessMapUv),P.push(b.combine),P.push(b.fogExp2),P.push(b.sizeAttenuation),P.push(b.morphTargetsCount),P.push(b.morphAttributeCount),P.push(b.numDirLights),P.push(b.numPointLights),P.push(b.numSpotLights),P.push(b.numSpotLightMaps),P.push(b.numHemiLights),P.push(b.numRectAreaLights),P.push(b.numDirLightShadows),P.push(b.numPointLightShadows),P.push(b.numSpotLightShadows),P.push(b.numSpotLightShadowsWithMaps),P.push(b.numLightProbes),P.push(b.shadowMapType),P.push(b.toneMapping),P.push(b.numClippingPlanes),P.push(b.numClipIntersection),P.push(b.depthPacking)}function R(P,b){c.disableAll(),b.supportsVertexTextures&&c.enable(0),b.instancing&&c.enable(1),b.instancingColor&&c.enable(2),b.instancingMorph&&c.enable(3),b.matcap&&c.enable(4),b.envMap&&c.enable(5),b.normalMapObjectSpace&&c.enable(6),b.normalMapTangentSpace&&c.enable(7),b.clearcoat&&c.enable(8),b.iridescence&&c.enable(9),b.alphaTest&&c.enable(10),b.vertexColors&&c.enable(11),b.vertexAlphas&&c.enable(12),b.vertexUv1s&&c.enable(13),b.vertexUv2s&&c.enable(14),b.vertexUv3s&&c.enable(15),b.vertexTangents&&c.enable(16),b.anisotropy&&c.enable(17),b.alphaHash&&c.enable(18),b.batching&&c.enable(19),b.dispersion&&c.enable(20),b.batchingColor&&c.enable(21),b.gradientMap&&c.enable(22),P.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.reversedDepthBuffer&&c.enable(4),b.skinning&&c.enable(5),b.morphTargets&&c.enable(6),b.morphNormals&&c.enable(7),b.morphColors&&c.enable(8),b.premultipliedAlpha&&c.enable(9),b.shadowMapEnabled&&c.enable(10),b.doubleSided&&c.enable(11),b.flipSided&&c.enable(12),b.useDepthPacking&&c.enable(13),b.dithering&&c.enable(14),b.transmission&&c.enable(15),b.sheen&&c.enable(16),b.opaque&&c.enable(17),b.pointsUvs&&c.enable(18),b.decodeVideoTexture&&c.enable(19),b.decodeVideoTextureEmissive&&c.enable(20),b.alphaToCoverage&&c.enable(21),P.push(c.mask)}function T(P){const b=S[P.type];let B;if(b){const Y=ji[b];B=nx.clone(Y.uniforms)}else B=P.uniforms;return B}function I(P,b){let B;for(let Y=0,ee=m.length;Y<ee;Y++){const de=m[Y];if(de.cacheKey===b){B=de,++B.usedTimes;break}}return B===void 0&&(B=new W1(i,b,P,a),m.push(B)),B}function N(P){if(--P.usedTimes===0){const b=m.indexOf(P);m[b]=m[m.length-1],m.pop(),P.destroy()}}function U(P){d.remove(P)}function z(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:T,acquireProgram:I,releaseProgram:N,releaseShaderCache:U,programs:m,dispose:z}}function $1(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function n(l){i.delete(l)}function s(l,c,d){i.get(l)[c]=d}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function K1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ov(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fv(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function l(p,g,v,S,E,y){let x=i[e];return x===void 0?(x={id:p.id,object:p,geometry:g,material:v,groupOrder:S,renderOrder:p.renderOrder,z:E,group:y},i[e]=x):(x.id=p.id,x.object=p,x.geometry=g,x.material=v,x.groupOrder=S,x.renderOrder=p.renderOrder,x.z=E,x.group=y),e++,x}function c(p,g,v,S,E,y){const x=l(p,g,v,S,E,y);v.transmission>0?n.push(x):v.transparent===!0?s.push(x):t.push(x)}function d(p,g,v,S,E,y){const x=l(p,g,v,S,E,y);v.transmission>0?n.unshift(x):v.transparent===!0?s.unshift(x):t.unshift(x)}function h(p,g){t.length>1&&t.sort(p||K1),n.length>1&&n.sort(g||Ov),s.length>1&&s.sort(g||Ov)}function m(){for(let p=e,g=i.length;p<g;p++){const v=i[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:d,finish:m,sort:h}}function Z1(){let i=new WeakMap;function e(n,s){const a=i.get(n);let l;return a===void 0?(l=new Fv,i.set(n,[l])):s>=a.length?(l=new Fv,a.push(l)):l=a[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ze};break;case"SpotLight":t={position:new D,direction:new D,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function J1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let eb=0;function tb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nb(i){const e=new Q1,t=J1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const s=new D,a=new lt,l=new lt;function c(h){let m=0,p=0,g=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let v=0,S=0,E=0,y=0,x=0,C=0,R=0,T=0,I=0,N=0,U=0;h.sort(tb);for(let P=0,b=h.length;P<b;P++){const B=h[P],Y=B.color,ee=B.intensity,de=B.distance,le=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=Y.r*ee,p+=Y.g*ee,g+=Y.b*ee;else if(B.isLightProbe){for(let ue=0;ue<9;ue++)n.probe[ue].addScaledVector(B.sh.coefficients[ue],ee);U++}else if(B.isDirectionalLight){const ue=e.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ie=B.shadow,H=t.get(B);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,n.directionalShadow[v]=H,n.directionalShadowMap[v]=le,n.directionalShadowMatrix[v]=B.shadow.matrix,C++}n.directional[v]=ue,v++}else if(B.isSpotLight){const ue=e.get(B);ue.position.setFromMatrixPosition(B.matrixWorld),ue.color.copy(Y).multiplyScalar(ee),ue.distance=de,ue.coneCos=Math.cos(B.angle),ue.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ue.decay=B.decay,n.spot[E]=ue;const ie=B.shadow;if(B.map&&(n.spotLightMap[I]=B.map,I++,ie.updateMatrices(B),B.castShadow&&N++),n.spotLightMatrix[E]=ie.matrix,B.castShadow){const H=t.get(B);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,n.spotShadow[E]=H,n.spotShadowMap[E]=le,T++}E++}else if(B.isRectAreaLight){const ue=e.get(B);ue.color.copy(Y).multiplyScalar(ee),ue.halfWidth.set(B.width*.5,0,0),ue.halfHeight.set(0,B.height*.5,0),n.rectArea[y]=ue,y++}else if(B.isPointLight){const ue=e.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity),ue.distance=B.distance,ue.decay=B.decay,B.castShadow){const ie=B.shadow,H=t.get(B);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,H.shadowCameraNear=ie.camera.near,H.shadowCameraFar=ie.camera.far,n.pointShadow[S]=H,n.pointShadowMap[S]=le,n.pointShadowMatrix[S]=B.shadow.matrix,R++}n.point[S]=ue,S++}else if(B.isHemisphereLight){const ue=e.get(B);ue.skyColor.copy(B.color).multiplyScalar(ee),ue.groundColor.copy(B.groundColor).multiplyScalar(ee),n.hemi[x]=ue,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=p,n.ambient[2]=g;const z=n.hash;(z.directionalLength!==v||z.pointLength!==S||z.spotLength!==E||z.rectAreaLength!==y||z.hemiLength!==x||z.numDirectionalShadows!==C||z.numPointShadows!==R||z.numSpotShadows!==T||z.numSpotMaps!==I||z.numLightProbes!==U)&&(n.directional.length=v,n.spot.length=E,n.rectArea.length=y,n.point.length=S,n.hemi.length=x,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=T+I-N,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=U,z.directionalLength=v,z.pointLength=S,z.spotLength=E,z.rectAreaLength=y,z.hemiLength=x,z.numDirectionalShadows=C,z.numPointShadows=R,z.numSpotShadows=T,z.numSpotMaps=I,z.numLightProbes=U,n.version=eb++)}function d(h,m){let p=0,g=0,v=0,S=0,E=0;const y=m.matrixWorldInverse;for(let x=0,C=h.length;x<C;x++){const R=h[x];if(R.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(y),p++}else if(R.isSpotLight){const T=n.spot[v];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(y),v++}else if(R.isRectAreaLight){const T=n.rectArea[S];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(y),l.identity(),a.copy(R.matrixWorld),a.premultiply(y),l.extractRotation(a),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),S++}else if(R.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(y),g++}else if(R.isHemisphereLight){const T=n.hemi[E];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(y),E++}}}return{setup:c,setupView:d,state:n}}function kv(i){const e=new nb(i),t=[],n=[];function s(m){h.camera=m,t.length=0,n.length=0}function a(m){t.push(m)}function l(m){n.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:l}}function ib(i){let e=new WeakMap;function t(s,a=0){const l=e.get(s);let c;return l===void 0?(c=new kv(i),e.set(s,[c])):a>=l.length?(c=new kv(i),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sb=`uniform sampler2D shadow_pass;
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
}`;function ob(i,e,t){let n=new Tp;const s=new Je,a=new Je,l=new Ut,c=new nT({depthPacking:qS}),d=new iT,h={},m=t.maxTextureSize,p={[xr]:In,[In]:xr,[fi]:fi},g=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:rb,fragmentShader:sb}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const S=new Ht;S.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new rn(S,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O0;let x=this.type;this.render=function(N,U,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const P=i.getRenderTarget(),b=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Zr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ee=x!==mr&&this.type===mr,de=x===mr&&this.type!==mr;for(let le=0,ue=N.length;le<ue;le++){const ie=N[le],H=ie.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ce=H.getFrameExtents();if(s.multiply(ce),a.copy(H.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/ce.x),s.x=a.x*ce.x,H.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/ce.y),s.y=a.y*ce.y,H.mapSize.y=a.y)),H.map===null||ee===!0||de===!0){const V=this.type!==mr?{minFilter:zn,magFilter:zn}:{};H.map!==null&&H.map.dispose(),H.map=new Os(s.x,s.y,V),H.map.texture.name=ie.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ne=H.getViewportCount();for(let V=0;V<ne;V++){const oe=H.getViewport(V);l.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),Y.viewport(l),H.updateMatrices(ie,V),n=H.getFrustum(),T(U,z,H.camera,ie,this.type)}H.isPointLightShadow!==!0&&this.type===mr&&C(H,z),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,i.setRenderTarget(P,b,B)};function C(N,U){const z=e.update(E);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,v.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Os(s.x,s.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(U,null,z,g,E,null),v.uniforms.shadow_pass.value=N.mapPass.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(U,null,z,v,E,null)}function R(N,U,z,P){let b=null;const B=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)b=B;else if(b=z.isPointLight===!0?d:c,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Y=b.uuid,ee=U.uuid;let de=h[Y];de===void 0&&(de={},h[Y]=de);let le=de[ee];le===void 0&&(le=b.clone(),de[ee]=le,U.addEventListener("dispose",I)),b=le}if(b.visible=U.visible,b.wireframe=U.wireframe,P===mr?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:p[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=i.properties.get(b);Y.light=z}return b}function T(N,U,z,P,b){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===mr)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const ee=e.update(N),de=N.material;if(Array.isArray(de)){const le=ee.groups;for(let ue=0,ie=le.length;ue<ie;ue++){const H=le[ue],ce=de[H.materialIndex];if(ce&&ce.visible){const ne=R(N,ce,P,b);N.onBeforeShadow(i,N,U,z,ee,ne,H),i.renderBufferDirect(z,null,ee,ne,N,H),N.onAfterShadow(i,N,U,z,ee,ne,H)}}}else if(de.visible){const le=R(N,de,P,b);N.onBeforeShadow(i,N,U,z,ee,le,null),i.renderBufferDirect(z,null,ee,le,N,null),N.onAfterShadow(i,N,U,z,ee,le,null)}}const Y=N.children;for(let ee=0,de=Y.length;ee<de;ee++)T(Y[ee],U,z,P,b)}function I(N){N.target.removeEventListener("dispose",I);for(const z in h){const P=h[z],b=N.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}const ab={[pf]:mf,[gf]:xf,[_f]:yf,[Vo]:vf,[mf]:pf,[xf]:gf,[yf]:_f,[vf]:Vo};function lb(i,e){function t(){let W=!1;const Te=new Ut;let Re=null;const De=new Ut(0,0,0,0);return{setMask:function(ye){Re!==ye&&!W&&(i.colorMask(ye,ye,ye,ye),Re=ye)},setLocked:function(ye){W=ye},setClear:function(ye,pe,He,ft,Lt){Lt===!0&&(ye*=ft,pe*=ft,He*=ft),Te.set(ye,pe,He,ft),De.equals(Te)===!1&&(i.clearColor(ye,pe,He,ft),De.copy(Te))},reset:function(){W=!1,Re=null,De.set(-1,0,0,0)}}}function n(){let W=!1,Te=!1,Re=null,De=null,ye=null;return{setReversed:function(pe){if(Te!==pe){const He=e.get("EXT_clip_control");pe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Te=pe;const ft=ye;ye=null,this.setClear(ft)}},getReversed:function(){return Te},setTest:function(pe){pe?J(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(pe){Re!==pe&&!W&&(i.depthMask(pe),Re=pe)},setFunc:function(pe){if(Te&&(pe=ab[pe]),De!==pe){switch(pe){case pf:i.depthFunc(i.NEVER);break;case mf:i.depthFunc(i.ALWAYS);break;case gf:i.depthFunc(i.LESS);break;case Vo:i.depthFunc(i.LEQUAL);break;case _f:i.depthFunc(i.EQUAL);break;case vf:i.depthFunc(i.GEQUAL);break;case xf:i.depthFunc(i.GREATER);break;case yf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=pe}},setLocked:function(pe){W=pe},setClear:function(pe){ye!==pe&&(Te&&(pe=1-pe),i.clearDepth(pe),ye=pe)},reset:function(){W=!1,Re=null,De=null,ye=null,Te=!1}}}function s(){let W=!1,Te=null,Re=null,De=null,ye=null,pe=null,He=null,ft=null,Lt=null;return{setTest:function(bt){W||(bt?J(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(bt){Te!==bt&&!W&&(i.stencilMask(bt),Te=bt)},setFunc:function(bt,Gn,gn){(Re!==bt||De!==Gn||ye!==gn)&&(i.stencilFunc(bt,Gn,gn),Re=bt,De=Gn,ye=gn)},setOp:function(bt,Gn,gn){(pe!==bt||He!==Gn||ft!==gn)&&(i.stencilOp(bt,Gn,gn),pe=bt,He=Gn,ft=gn)},setLocked:function(bt){W=bt},setClear:function(bt){Lt!==bt&&(i.clearStencil(bt),Lt=bt)},reset:function(){W=!1,Te=null,Re=null,De=null,ye=null,pe=null,He=null,ft=null,Lt=null}}}const a=new t,l=new n,c=new s,d=new WeakMap,h=new WeakMap;let m={},p={},g=new WeakMap,v=[],S=null,E=!1,y=null,x=null,C=null,R=null,T=null,I=null,N=null,U=new Ze(0,0,0),z=0,P=!1,b=null,B=null,Y=null,ee=null,de=null;const le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,ie=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(H)[1]),ue=ie>=1):H.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ue=ie>=2);let ce=null,ne={};const V=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Ue=new Ut().fromArray(V),ke=new Ut().fromArray(oe);function me(W,Te,Re,De){const ye=new Uint8Array(4),pe=i.createTexture();i.bindTexture(W,pe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<Re;He++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(Te+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return pe}const q={};q[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),J(i.DEPTH_TEST),l.setFunc(Vo),et(!1),Be(y_),J(i.CULL_FACE),Tt(Zr);function J(W){m[W]!==!0&&(i.enable(W),m[W]=!0)}function ge(W){m[W]!==!1&&(i.disable(W),m[W]=!1)}function Me(W,Te){return p[W]!==Te?(i.bindFramebuffer(W,Te),p[W]=Te,W===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Te),W===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ce(W,Te){let Re=v,De=!1;if(W){Re=g.get(Te),Re===void 0&&(Re=[],g.set(Te,Re));const ye=W.textures;if(Re.length!==ye.length||Re[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,He=ye.length;pe<He;pe++)Re[pe]=i.COLOR_ATTACHMENT0+pe;Re.length=ye.length,De=!0}}else Re[0]!==i.BACK&&(Re[0]=i.BACK,De=!0);De&&i.drawBuffers(Re)}function ct(W){return S!==W?(i.useProgram(W),S=W,!0):!1}const Et={[Ps]:i.FUNC_ADD,[vS]:i.FUNC_SUBTRACT,[xS]:i.FUNC_REVERSE_SUBTRACT};Et[yS]=i.MIN,Et[MS]=i.MAX;const k={[SS]:i.ZERO,[ES]:i.ONE,[TS]:i.SRC_COLOR,[hf]:i.SRC_ALPHA,[PS]:i.SRC_ALPHA_SATURATE,[bS]:i.DST_COLOR,[AS]:i.DST_ALPHA,[wS]:i.ONE_MINUS_SRC_COLOR,[ff]:i.ONE_MINUS_SRC_ALPHA,[CS]:i.ONE_MINUS_DST_COLOR,[RS]:i.ONE_MINUS_DST_ALPHA,[LS]:i.CONSTANT_COLOR,[IS]:i.ONE_MINUS_CONSTANT_COLOR,[NS]:i.CONSTANT_ALPHA,[DS]:i.ONE_MINUS_CONSTANT_ALPHA};function Tt(W,Te,Re,De,ye,pe,He,ft,Lt,bt){if(W===Zr){E===!0&&(ge(i.BLEND),E=!1);return}if(E===!1&&(J(i.BLEND),E=!0),W!==_S){if(W!==y||bt!==P){if((x!==Ps||T!==Ps)&&(i.blendEquation(i.FUNC_ADD),x=Ps,T=Ps),bt)switch(W){case Fo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFunc(i.ONE,i.ONE);break;case M_:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case S_:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case M_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}C=null,R=null,I=null,N=null,U.set(0,0,0),z=0,y=W,P=bt}return}ye=ye||Te,pe=pe||Re,He=He||De,(Te!==x||ye!==T)&&(i.blendEquationSeparate(Et[Te],Et[ye]),x=Te,T=ye),(Re!==C||De!==R||pe!==I||He!==N)&&(i.blendFuncSeparate(k[Re],k[De],k[pe],k[He]),C=Re,R=De,I=pe,N=He),(ft.equals(U)===!1||Lt!==z)&&(i.blendColor(ft.r,ft.g,ft.b,Lt),U.copy(ft),z=Lt),y=W,P=!1}function dt(W,Te){W.side===fi?ge(i.CULL_FACE):J(i.CULL_FACE);let Re=W.side===In;Te&&(Re=!Re),et(Re),W.blending===Fo&&W.transparent===!1?Tt(Zr):Tt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),a.setMask(W.colorWrite);const De=W.stencilWrite;c.setTest(De),De&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ve(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(W){b!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),b=W)}function Be(W){W!==pS?(J(i.CULL_FACE),W!==B&&(W===y_?i.cullFace(i.BACK):W===mS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),B=W}function Ot(W){W!==Y&&(ue&&i.lineWidth(W),Y=W)}function Ve(W,Te,Re){W?(J(i.POLYGON_OFFSET_FILL),(ee!==Te||de!==Re)&&(i.polygonOffset(Te,Re),ee=Te,de=Re)):ge(i.POLYGON_OFFSET_FILL)}function ut(W){W?J(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function Gt(W){W===void 0&&(W=i.TEXTURE0+le-1),ce!==W&&(i.activeTexture(W),ce=W)}function qt(W,Te,Re){Re===void 0&&(ce===null?Re=i.TEXTURE0+le-1:Re=ce);let De=ne[Re];De===void 0&&(De={type:void 0,texture:void 0},ne[Re]=De),(De.type!==W||De.texture!==Te)&&(ce!==Re&&(i.activeTexture(Re),ce=Re),i.bindTexture(W,Te||q[W]),De.type=W,De.texture=Te)}function O(){const W=ne[ce];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{i.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{i.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{i.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{i.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{i.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{i.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{i.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ye(){try{i.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{i.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(W){Ue.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Ue.copy(W))}function tt(W){ke.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ke.copy(W))}function je(W,Te){let Re=h.get(Te);Re===void 0&&(Re=new WeakMap,h.set(Te,Re));let De=Re.get(W);De===void 0&&(De=i.getUniformBlockIndex(Te,W.name),Re.set(W,De))}function Le(W,Te){const De=h.get(Te).get(W);d.get(Te)!==De&&(i.uniformBlockBinding(Te,De,W.__bindingPointIndex),d.set(Te,De))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ce=null,ne={},p={},g=new WeakMap,v=[],S=null,E=!1,y=null,x=null,C=null,R=null,T=null,I=null,N=null,U=new Ze(0,0,0),z=0,P=!1,b=null,B=null,Y=null,ee=null,de=null,Ue.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:J,disable:ge,bindFramebuffer:Me,drawBuffers:Ce,useProgram:ct,setBlending:Tt,setMaterial:dt,setFlipSided:et,setCullFace:Be,setLineWidth:Ot,setPolygonOffset:Ve,setScissorTest:ut,activeTexture:Gt,bindTexture:qt,unbindTexture:O,compressedTexImage2D:A,compressedTexImage3D:Q,texImage2D:Ye,texImage3D:we,updateUBOMapping:je,uniformBlockBinding:Le,texStorage2D:Se,texStorage3D:ze,texSubImage2D:fe,texSubImage3D:_e,compressedTexSubImage2D:he,compressedTexSubImage3D:$e,scissor:Ie,viewport:tt,reset:ht}}function ub(i,e,t,n,s,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Je,m=new WeakMap;let p;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(O,A){return v?new OffscreenCanvas(O,A):dl("canvas")}function E(O,A,Q){let fe=1;const _e=qt(O);if((_e.width>Q||_e.height>Q)&&(fe=Q/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(fe*_e.width),$e=Math.floor(fe*_e.height);p===void 0&&(p=S(he,$e));const Se=A?S(he,$e):p;return Se.width=he,Se.height=$e,Se.getContext("2d").drawImage(O,0,0,he,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+$e+")."),Se}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),O;return O}function y(O){return O.generateMipmaps}function x(O){i.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(O,A,Q,fe,_e=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=A;if(A===i.RED&&(Q===i.FLOAT&&(he=i.R32F),Q===i.HALF_FLOAT&&(he=i.R16F),Q===i.UNSIGNED_BYTE&&(he=i.R8)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(he=i.R8UI),Q===i.UNSIGNED_SHORT&&(he=i.R16UI),Q===i.UNSIGNED_INT&&(he=i.R32UI),Q===i.BYTE&&(he=i.R8I),Q===i.SHORT&&(he=i.R16I),Q===i.INT&&(he=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(he=i.RG32F),Q===i.HALF_FLOAT&&(he=i.RG16F),Q===i.UNSIGNED_BYTE&&(he=i.RG8)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(he=i.RG8UI),Q===i.UNSIGNED_SHORT&&(he=i.RG16UI),Q===i.UNSIGNED_INT&&(he=i.RG32UI),Q===i.BYTE&&(he=i.RG8I),Q===i.SHORT&&(he=i.RG16I),Q===i.INT&&(he=i.RG32I)),A===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(he=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(he=i.RGB16UI),Q===i.UNSIGNED_INT&&(he=i.RGB32UI),Q===i.BYTE&&(he=i.RGB8I),Q===i.SHORT&&(he=i.RGB16I),Q===i.INT&&(he=i.RGB32I)),A===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),Q===i.UNSIGNED_INT&&(he=i.RGBA32UI),Q===i.BYTE&&(he=i.RGBA8I),Q===i.SHORT&&(he=i.RGBA16I),Q===i.INT&&(he=i.RGBA32I)),A===i.RGB&&(Q===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),A===i.RGBA){const $e=_e?dc:Pt.getTransfer(fe);Q===i.FLOAT&&(he=i.RGBA32F),Q===i.HALF_FLOAT&&(he=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(he=$e===Xt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function T(O,A){let Q;return O?A===null||A===Us||A===ol?Q=i.DEPTH24_STENCIL8:A===Pi?Q=i.DEPTH32F_STENCIL8:A===sl&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Us||A===ol?Q=i.DEPTH_COMPONENT24:A===Pi?Q=i.DEPTH_COMPONENT32F:A===sl&&(Q=i.DEPTH_COMPONENT16),Q}function I(O,A){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==zn&&O.minFilter!==ni?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function N(O){const A=O.target;A.removeEventListener("dispose",N),z(A),A.isVideoTexture&&m.delete(A)}function U(O){const A=O.target;A.removeEventListener("dispose",U),b(A)}function z(O){const A=n.get(O);if(A.__webglInit===void 0)return;const Q=O.source,fe=g.get(Q);if(fe){const _e=fe[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(O),Object.keys(fe).length===0&&g.delete(Q)}n.remove(O)}function P(O){const A=n.get(O);i.deleteTexture(A.__webglTexture);const Q=O.source,fe=g.get(Q);delete fe[A.__cacheKey],l.memory.textures--}function b(O){const A=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(A.__webglFramebuffer[fe]))for(let _e=0;_e<A.__webglFramebuffer[fe].length;_e++)i.deleteFramebuffer(A.__webglFramebuffer[fe][_e]);else i.deleteFramebuffer(A.__webglFramebuffer[fe]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[fe])}else{if(Array.isArray(A.__webglFramebuffer))for(let fe=0;fe<A.__webglFramebuffer.length;fe++)i.deleteFramebuffer(A.__webglFramebuffer[fe]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let fe=0;fe<A.__webglColorRenderbuffer.length;fe++)A.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[fe]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=O.textures;for(let fe=0,_e=Q.length;fe<_e;fe++){const he=n.get(Q[fe]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),l.memory.textures--),n.remove(Q[fe])}n.remove(O)}let B=0;function Y(){B=0}function ee(){const O=B;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),B+=1,O}function de(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function le(O,A){const Q=n.get(O);if(O.isVideoTexture&&ut(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Q.__version!==O.version){const fe=O.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(Q,O,A);return}}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function ue(O,A){const Q=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){q(Q,O,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function ie(O,A){const Q=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){q(Q,O,A);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function H(O,A){const Q=n.get(O);if(O.version>0&&Q.__version!==O.version){J(Q,O,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}const ce={[Go]:i.REPEAT,[Kr]:i.CLAMP_TO_EDGE,[cc]:i.MIRRORED_REPEAT},ne={[zn]:i.NEAREST,[B0]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[ni]:i.LINEAR,[ec]:i.LINEAR_MIPMAP_NEAREST,[gr]:i.LINEAR_MIPMAP_LINEAR},V={[KS]:i.NEVER,[nE]:i.ALWAYS,[ZS]:i.LESS,[q0]:i.LEQUAL,[QS]:i.EQUAL,[tE]:i.GEQUAL,[JS]:i.GREATER,[eE]:i.NOTEQUAL};function oe(O,A){if(A.type===Pi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ni||A.magFilter===ec||A.magFilter===Ja||A.magFilter===gr||A.minFilter===ni||A.minFilter===ec||A.minFilter===Ja||A.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,ce[A.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,ce[A.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,ce[A.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,ne[A.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,ne[A.minFilter]),A.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===zn||A.minFilter!==Ja&&A.minFilter!==gr||A.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ue(O,A){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",N));const fe=A.source;let _e=g.get(fe);_e===void 0&&(_e={},g.set(fe,_e));const he=de(A);if(he!==O.__cacheKey){_e[he]===void 0&&(_e[he]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,Q=!0),_e[he].usedTimes++;const $e=_e[O.__cacheKey];$e!==void 0&&(_e[O.__cacheKey].usedTimes--,$e.usedTimes===0&&P(A)),O.__cacheKey=he,O.__webglTexture=_e[he].texture}return Q}function ke(O,A,Q){return Math.floor(Math.floor(O/Q)/A)}function me(O,A,Q,fe){const he=O.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Q,fe,A.data);else{he.sort((we,Ie)=>we.start-Ie.start);let $e=0;for(let we=1;we<he.length;we++){const Ie=he[$e],tt=he[we],je=Ie.start+Ie.count,Le=ke(tt.start,A.width,4),ht=ke(Ie.start,A.width,4);tt.start<=je+1&&Le===ht&&ke(tt.start+tt.count-1,A.width,4)===Le?Ie.count=Math.max(Ie.count,tt.start+tt.count-Ie.start):(++$e,he[$e]=tt)}he.length=$e+1;const Se=i.getParameter(i.UNPACK_ROW_LENGTH),ze=i.getParameter(i.UNPACK_SKIP_PIXELS),Ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let we=0,Ie=he.length;we<Ie;we++){const tt=he[we],je=Math.floor(tt.start/4),Le=Math.ceil(tt.count/4),ht=je%A.width,W=Math.floor(je/A.width),Te=Le,Re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,ht,W,Te,Re,Q,fe,A.data)}O.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ye)}}function q(O,A,Q){let fe=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(fe=i.TEXTURE_3D);const _e=Ue(O,A),he=A.source;t.bindTexture(fe,O.__webglTexture,i.TEXTURE0+Q);const $e=n.get(he);if(he.version!==$e.__version||_e===!0){t.activeTexture(i.TEXTURE0+Q);const Se=Pt.getPrimaries(Pt.workingColorSpace),ze=A.colorSpace===$r?null:Pt.getPrimaries(A.colorSpace),Ye=A.colorSpace===$r||Se===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let we=E(A.image,!1,s.maxTextureSize);we=Gt(A,we);const Ie=a.convert(A.format,A.colorSpace),tt=a.convert(A.type);let je=R(A.internalFormat,Ie,tt,A.colorSpace,A.isVideoTexture);oe(fe,A);let Le;const ht=A.mipmaps,W=A.isVideoTexture!==!0,Te=$e.__version===void 0||_e===!0,Re=he.dataReady,De=I(A,we);if(A.isDepthTexture)je=T(A.format===ll,A.type),Te&&(W?t.texStorage2D(i.TEXTURE_2D,1,je,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,je,we.width,we.height,0,Ie,tt,null));else if(A.isDataTexture)if(ht.length>0){W&&Te&&t.texStorage2D(i.TEXTURE_2D,De,je,ht[0].width,ht[0].height);for(let ye=0,pe=ht.length;ye<pe;ye++)Le=ht[ye],W?Re&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ie,tt,Le.data):t.texImage2D(i.TEXTURE_2D,ye,je,Le.width,Le.height,0,Ie,tt,Le.data);A.generateMipmaps=!1}else W?(Te&&t.texStorage2D(i.TEXTURE_2D,De,je,we.width,we.height),Re&&me(A,we,Ie,tt)):t.texImage2D(i.TEXTURE_2D,0,je,we.width,we.height,0,Ie,tt,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,je,ht[0].width,ht[0].height,we.depth);for(let ye=0,pe=ht.length;ye<pe;ye++)if(Le=ht[ye],A.format!==mi)if(Ie!==null)if(W){if(Re)if(A.layerUpdates.size>0){const He=pv(Le.width,Le.height,A.format,A.type);for(const ft of A.layerUpdates){const Lt=Le.data.subarray(ft*He/Le.data.BYTES_PER_ELEMENT,(ft+1)*He/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,ft,Le.width,Le.height,1,Ie,Lt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,we.depth,Ie,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,je,Le.width,Le.height,we.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,we.depth,Ie,tt,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,je,Le.width,Le.height,we.depth,0,Ie,tt,Le.data)}else{W&&Te&&t.texStorage2D(i.TEXTURE_2D,De,je,ht[0].width,ht[0].height);for(let ye=0,pe=ht.length;ye<pe;ye++)Le=ht[ye],A.format!==mi?Ie!==null?W?Re&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ie,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ie,tt,Le.data):t.texImage2D(i.TEXTURE_2D,ye,je,Le.width,Le.height,0,Ie,tt,Le.data)}else if(A.isDataArrayTexture)if(W){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,je,we.width,we.height,we.depth),Re)if(A.layerUpdates.size>0){const ye=pv(we.width,we.height,A.format,A.type);for(const pe of A.layerUpdates){const He=we.data.subarray(pe*ye/we.data.BYTES_PER_ELEMENT,(pe+1)*ye/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,we.width,we.height,1,Ie,tt,He)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ie,tt,we.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,je,we.width,we.height,we.depth,0,Ie,tt,we.data);else if(A.isData3DTexture)W?(Te&&t.texStorage3D(i.TEXTURE_3D,De,je,we.width,we.height,we.depth),Re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ie,tt,we.data)):t.texImage3D(i.TEXTURE_3D,0,je,we.width,we.height,we.depth,0,Ie,tt,we.data);else if(A.isFramebufferTexture){if(Te)if(W)t.texStorage2D(i.TEXTURE_2D,De,je,we.width,we.height);else{let ye=we.width,pe=we.height;for(let He=0;He<De;He++)t.texImage2D(i.TEXTURE_2D,He,je,ye,pe,0,Ie,tt,null),ye>>=1,pe>>=1}}else if(ht.length>0){if(W&&Te){const ye=qt(ht[0]);t.texStorage2D(i.TEXTURE_2D,De,je,ye.width,ye.height)}for(let ye=0,pe=ht.length;ye<pe;ye++)Le=ht[ye],W?Re&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ie,tt,Le):t.texImage2D(i.TEXTURE_2D,ye,je,Ie,tt,Le);A.generateMipmaps=!1}else if(W){if(Te){const ye=qt(we);t.texStorage2D(i.TEXTURE_2D,De,je,ye.width,ye.height)}Re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,tt,we)}else t.texImage2D(i.TEXTURE_2D,0,je,Ie,tt,we);y(A)&&x(fe),$e.__version=he.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function J(O,A,Q){if(A.image.length!==6)return;const fe=Ue(O,A),_e=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Q);const he=n.get(_e);if(_e.version!==he.__version||fe===!0){t.activeTexture(i.TEXTURE0+Q);const $e=Pt.getPrimaries(Pt.workingColorSpace),Se=A.colorSpace===$r?null:Pt.getPrimaries(A.colorSpace),ze=A.colorSpace===$r||$e===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let pe=0;pe<6;pe++)!Ye&&!we?Ie[pe]=E(A.image[pe],!0,s.maxCubemapSize):Ie[pe]=we?A.image[pe].image:A.image[pe],Ie[pe]=Gt(A,Ie[pe]);const tt=Ie[0],je=a.convert(A.format,A.colorSpace),Le=a.convert(A.type),ht=R(A.internalFormat,je,Le,A.colorSpace),W=A.isVideoTexture!==!0,Te=he.__version===void 0||fe===!0,Re=_e.dataReady;let De=I(A,tt);oe(i.TEXTURE_CUBE_MAP,A);let ye;if(Ye){W&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ht,tt.width,tt.height);for(let pe=0;pe<6;pe++){ye=Ie[pe].mipmaps;for(let He=0;He<ye.length;He++){const ft=ye[He];A.format!==mi?je!==null?W?Re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,0,0,ft.width,ft.height,je,ft.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,ht,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,0,0,ft.width,ft.height,je,Le,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He,ht,ft.width,ft.height,0,je,Le,ft.data)}}}else{if(ye=A.mipmaps,W&&Te){ye.length>0&&De++;const pe=qt(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(we){W?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ie[pe].width,Ie[pe].height,je,Le,Ie[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,Ie[pe].width,Ie[pe].height,0,je,Le,Ie[pe].data);for(let He=0;He<ye.length;He++){const Lt=ye[He].image[pe].image;W?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,0,0,Lt.width,Lt.height,je,Le,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,ht,Lt.width,Lt.height,0,je,Le,Lt.data)}}else{W?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,je,Le,Ie[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,je,Le,Ie[pe]);for(let He=0;He<ye.length;He++){const ft=ye[He];W?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,0,0,je,Le,ft.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,He+1,ht,je,Le,ft.image[pe])}}}y(A)&&x(i.TEXTURE_CUBE_MAP),he.__version=_e.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function ge(O,A,Q,fe,_e,he){const $e=a.convert(Q.format,Q.colorSpace),Se=a.convert(Q.type),ze=R(Q.internalFormat,$e,Se,Q.colorSpace),Ye=n.get(A),we=n.get(Q);if(we.__renderTarget=A,!Ye.__hasExternalTextures){const Ie=Math.max(1,A.width>>he),tt=Math.max(1,A.height>>he);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,ze,Ie,tt,A.depth,0,$e,Se,null):t.texImage2D(_e,he,ze,Ie,tt,0,$e,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Ve(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,_e,we.__webglTexture,0,Ot(A)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,_e,we.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(O,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,O),A.depthBuffer){const fe=A.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,he=T(A.stencilBuffer,_e),$e=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=Ot(A);Ve(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,he,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,he,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,he,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$e,i.RENDERBUFFER,O)}else{const fe=A.textures;for(let _e=0;_e<fe.length;_e++){const he=fe[_e],$e=a.convert(he.format,he.colorSpace),Se=a.convert(he.type),ze=R(he.internalFormat,$e,Se,he.colorSpace),Ye=Ot(A);Q&&Ve(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,ze,A.width,A.height):Ve(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,ze,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ze,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=n.get(A.depthTexture);fe.__renderTarget=A,(!fe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),le(A.depthTexture,0);const _e=fe.__webglTexture,he=Ot(A);if(A.depthTexture.format===al)Ve(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(A.depthTexture.format===ll)Ve(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function ct(O){const A=n.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const fe=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),fe){const _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=fe}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const fe=O.texture.mipmaps;fe&&fe.length>0?Ce(A.__webglFramebuffer[0],O):Ce(A.__webglFramebuffer,O)}else if(Q){A.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[fe]),A.__webglDepthbuffer[fe]===void 0)A.__webglDepthbuffer[fe]=i.createRenderbuffer(),Me(A.__webglDepthbuffer[fe],O,!1);else{const _e=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,he)}}else{const fe=O.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Me(A.__webglDepthbuffer,O,!1);else{const _e=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(O,A,Q){const fe=n.get(O);A!==void 0&&ge(fe.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&ct(O)}function k(O){const A=O.texture,Q=n.get(O),fe=n.get(A);O.addEventListener("dispose",U);const _e=O.textures,he=O.isWebGLCubeRenderTarget===!0,$e=_e.length>1;if($e||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=A.version,l.memory.textures++),he){Q.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Se]=[];for(let ze=0;ze<A.mipmaps.length;ze++)Q.__webglFramebuffer[Se][ze]=i.createFramebuffer()}else Q.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Se=0;Se<A.mipmaps.length;Se++)Q.__webglFramebuffer[Se]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if($e)for(let Se=0,ze=_e.length;Se<ze;Se++){const Ye=n.get(_e[Se]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),l.memory.textures++)}if(O.samples>0&&Ve(O)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Se=0;Se<_e.length;Se++){const ze=_e[Se];Q.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Se]);const Ye=a.convert(ze.format,ze.colorSpace),we=a.convert(ze.type),Ie=R(ze.internalFormat,Ye,we,ze.colorSpace,O.isXRRenderTarget===!0),tt=Ot(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Ie,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(Q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),oe(i.TEXTURE_CUBE_MAP,A);for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0)for(let ze=0;ze<A.mipmaps.length;ze++)ge(Q.__webglFramebuffer[Se][ze],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ze);else ge(Q.__webglFramebuffer[Se],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);y(A)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Se=0,ze=_e.length;Se<ze;Se++){const Ye=_e[Se],we=n.get(Ye);let Ie=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,we.__webglTexture),oe(Ie,Ye),ge(Q.__webglFramebuffer,O,Ye,i.COLOR_ATTACHMENT0+Se,Ie,0),y(Ye)&&x(Ie)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Se=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,fe.__webglTexture),oe(Se,A),A.mipmaps&&A.mipmaps.length>0)for(let ze=0;ze<A.mipmaps.length;ze++)ge(Q.__webglFramebuffer[ze],O,A,i.COLOR_ATTACHMENT0,Se,ze);else ge(Q.__webglFramebuffer,O,A,i.COLOR_ATTACHMENT0,Se,0);y(A)&&x(Se),t.unbindTexture()}O.depthBuffer&&ct(O)}function Tt(O){const A=O.textures;for(let Q=0,fe=A.length;Q<fe;Q++){const _e=A[Q];if(y(_e)){const he=C(O),$e=n.get(_e).__webglTexture;t.bindTexture(he,$e),x(he),t.unbindTexture()}}}const dt=[],et=[];function Be(O){if(O.samples>0){if(Ve(O)===!1){const A=O.textures,Q=O.width,fe=O.height;let _e=i.COLOR_BUFFER_BIT;const he=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$e=n.get(O),Se=A.length>1;if(Se)for(let Ye=0;Ye<A.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const ze=O.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$e.__webglColorRenderbuffer[Ye]);const we=n.get(A[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,Q,fe,0,0,Q,fe,_e,i.NEAREST),d===!0&&(dt.length=0,et.length=0,dt.push(i.COLOR_ATTACHMENT0+Ye),O.depthBuffer&&O.resolveDepthBuffer===!1&&(dt.push(he),et.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ye=0;Ye<A.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,$e.__webglColorRenderbuffer[Ye]);const we=n.get(A[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const A=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ot(O){return Math.min(s.maxSamples,O.samples)}function Ve(O){const A=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ut(O){const A=l.render.frame;m.get(O)!==A&&(m.set(O,A),O.update())}function Gt(O,A){const Q=O.colorSpace,fe=O.format,_e=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==Hn&&Q!==$r&&(Pt.getTransfer(Q)===Xt?(fe!==mi||_e!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=ee,this.resetTextureUnits=Y,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=ie,this.setTextureCube=H,this.rebindTextures=Et,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ve}function cb(i,e){function t(n,s=$r){let a;const l=Pt.getTransfer(s);if(n===$i)return i.UNSIGNED_BYTE;if(n===mp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===H0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===G0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===V0)return i.BYTE;if(n===z0)return i.SHORT;if(n===sl)return i.UNSIGNED_SHORT;if(n===pp)return i.INT;if(n===Us)return i.UNSIGNED_INT;if(n===Pi)return i.FLOAT;if(n===ml)return i.HALF_FLOAT;if(n===W0)return i.ALPHA;if(n===X0)return i.RGB;if(n===mi)return i.RGBA;if(n===al)return i.DEPTH_COMPONENT;if(n===ll)return i.DEPTH_STENCIL;if(n===_p)return i.RED;if(n===vp)return i.RED_INTEGER;if(n===j0)return i.RG;if(n===xp)return i.RG_INTEGER;if(n===yp)return i.RGBA_INTEGER;if(n===tc||n===nc||n===ic||n===rc)if(l===Xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ef||n===Tf||n===wf||n===Af)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ef)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Af)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rf||n===bf||n===Cf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Rf||n===bf)return l===Xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Cf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pf||n===Lf||n===If||n===Nf||n===Df||n===Uf||n===Of||n===Ff||n===kf||n===Bf||n===Vf||n===zf||n===Hf||n===Gf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Pf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===If)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Df)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Of)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ff)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wf||n===Xf||n===jf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Wf)return l===Xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yf||n===qf||n===$f||n===Kf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Yf)return a.COMPRESSED_RED_RGTC1_EXT;if(n===qf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$f)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ol?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const db=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hb=`
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

}`;class fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ii({vertexShader:db,fragmentShader:hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rn(new Ec(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pb extends $o{constructor(e,t){super();const n=this;let s=null,a=1,l=null,c="local-floor",d=1,h=null,m=null,p=null,g=null,v=null,S=null;const E=typeof XRWebGLBinding<"u",y=new fb,x={},C=t.getContextAttributes();let R=null,T=null;const I=[],N=[],U=new Je;let z=null;const P=new Vn;P.viewport=new Ut;const b=new Vn;b.viewport=new Ut;const B=[P,b],Y=new TT;let ee=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=I[q];return J===void 0&&(J=new Nh,I[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=I[q];return J===void 0&&(J=new Nh,I[q]=J),J.getGripSpace()},this.getHand=function(q){let J=I[q];return J===void 0&&(J=new Nh,I[q]=J),J.getHandSpace()};function le(q){const J=N.indexOf(q.inputSource);if(J===-1)return;const ge=I[J];ge!==void 0&&(ge.update(q.inputSource,q.frame,h||l),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function ue(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",ie);for(let q=0;q<I.length;q++){const J=N[q];J!==null&&(N[q]=null,I[q].disconnect(J))}ee=null,de=null,y.reset();for(const q in x)delete x[q];e.setRenderTarget(R),v=null,g=null,p=null,s=null,T=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){c=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",ie),C.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(U),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Me=null,Ce=null;C.depth&&(Ce=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=C.stencil?ll:al,Me=C.stencil?ol:Us);const ct={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:a};p=this.getBinding(),g=p.createProjectionLayer(ct),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),T=new Os(g.textureWidth,g.textureHeight,{format:mi,type:$i,depthTexture:new dx(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ge={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),T=new Os(v.framebufferWidth,v.framebufferHeight,{format:mi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(d),h=null,l=await s.requestReferenceSpace(c),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ie(q){for(let J=0;J<q.removed.length;J++){const ge=q.removed[J],Me=N.indexOf(ge);Me>=0&&(N[Me]=null,I[Me].disconnect(ge))}for(let J=0;J<q.added.length;J++){const ge=q.added[J];let Me=N.indexOf(ge);if(Me===-1){for(let ct=0;ct<I.length;ct++)if(ct>=N.length){N.push(ge),Me=ct;break}else if(N[ct]===null){N[ct]=ge,Me=ct;break}if(Me===-1)break}const Ce=I[Me];Ce&&Ce.connect(ge)}}const H=new D,ce=new D;function ne(q,J,ge){H.setFromMatrixPosition(J.matrixWorld),ce.setFromMatrixPosition(ge.matrixWorld);const Me=H.distanceTo(ce),Ce=J.projectionMatrix.elements,ct=ge.projectionMatrix.elements,Et=Ce[14]/(Ce[10]-1),k=Ce[14]/(Ce[10]+1),Tt=(Ce[9]+1)/Ce[5],dt=(Ce[9]-1)/Ce[5],et=(Ce[8]-1)/Ce[0],Be=(ct[8]+1)/ct[0],Ot=Et*et,Ve=Et*Be,ut=Me/(-et+Be),Gt=ut*-et;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Gt),q.translateZ(ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const qt=Et+ut,O=k+ut,A=Ot-Gt,Q=Ve+(Me-Gt),fe=Tt*k/O*qt,_e=dt*k/O*qt;q.projectionMatrix.makePerspective(A,Q,fe,_e,qt,O),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function V(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,ge=q.far;y.texture!==null&&(y.depthNear>0&&(J=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),Y.near=b.near=P.near=J,Y.far=b.far=P.far=ge,(ee!==Y.near||de!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ee=Y.near,de=Y.far),Y.layers.mask=q.layers.mask|6,P.layers.mask=Y.layers.mask&3,b.layers.mask=Y.layers.mask&5;const Me=q.parent,Ce=Y.cameras;V(Y,Me);for(let ct=0;ct<Ce.length;ct++)V(Ce[ct],Me);Ce.length===2?ne(Y,P,b):Y.projectionMatrix.copy(P.projectionMatrix),oe(q,Y,Me)};function oe(q,J,ge){ge===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&v===null))return d},this.setFoveation=function(q){d=q,g!==null&&(g.fixedFoveation=q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(q){return x[q]};let Ue=null;function ke(q,J){if(m=J.getViewerPose(h||l),S=J,m!==null){const ge=m.views;v!==null&&(e.setRenderTargetFramebuffer(T,v.framebuffer),e.setRenderTarget(T));let Me=!1;ge.length!==Y.cameras.length&&(Y.cameras.length=0,Me=!0);for(let k=0;k<ge.length;k++){const Tt=ge[k];let dt=null;if(v!==null)dt=v.getViewport(Tt);else{const Be=p.getViewSubImage(g,Tt);dt=Be.viewport,k===0&&(e.setRenderTargetTextures(T,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(T))}let et=B[k];et===void 0&&(et=new Vn,et.layers.enable(k),et.viewport=new Ut,B[k]=et),et.matrix.fromArray(Tt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Tt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(dt.x,dt.y,dt.width,dt.height),k===0&&(Y.matrix.copy(et.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Me===!0&&Y.cameras.push(et)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){p=n.getBinding();const k=p.getDepthInformation(ge[0]);k&&k.isValid&&k.texture&&y.init(k,s.renderState)}if(Ce&&Ce.includes("camera-access")&&E){e.state.unbindTexture(),p=n.getBinding();for(let k=0;k<ge.length;k++){const Tt=ge[k].camera;if(Tt){let dt=x[Tt];dt||(dt=new hx,x[Tt]=dt);const et=p.getCameraImage(Tt);dt.sourceTexture=et}}}}for(let ge=0;ge<I.length;ge++){const Me=N[ge],Ce=I[ge];Me!==null&&Ce!==void 0&&Ce.update(Me,J,h||l)}Ue&&Ue(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),S=null}const me=new _x;me.setAnimationLoop(ke),this.setAnimationLoop=function(q){Ue=q},this.dispose=function(){}}}const Ms=new ii,mb=new lt;function gb(i,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,tx(i)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,C,R,T){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),p(y,x)):x.isMeshPhongMaterial?(a(y,x),m(y,x)):x.isMeshStandardMaterial?(a(y,x),g(y,x),x.isMeshPhysicalMaterial&&v(y,x,T)):x.isMeshMatcapMaterial?(a(y,x),S(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),E(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(l(y,x),x.isLineDashedMaterial&&c(y,x)):x.isPointsMaterial?d(y,x,C,R):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===In&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===In&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const C=e.get(x),R=C.envMap,T=C.envMapRotation;R&&(y.envMap.value=R,Ms.copy(T),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),y.envMapRotation.value.setFromMatrix4(mb.makeRotationFromEuler(Ms)),y.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function l(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function c(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,C,R){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*C,y.scale.value=R*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function p(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function v(y,x,C){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===In&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const C=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _b(i,e,t,n){let s={},a={},l=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,R){const T=R.program;n.uniformBlockBinding(C,T)}function h(C,R){let T=s[C.id];T===void 0&&(S(C),T=m(C),s[C.id]=T,C.addEventListener("dispose",y));const I=R.program;n.updateUBOMapping(C,I);const N=e.render.frame;a[C.id]!==N&&(g(C),a[C.id]=N)}function m(C){const R=p();C.__bindingPointIndex=R;const T=i.createBuffer(),I=C.__size,N=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,T),T}function p(){for(let C=0;C<c;C++)if(l.indexOf(C)===-1)return l.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const R=s[C.id],T=C.uniforms,I=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let N=0,U=T.length;N<U;N++){const z=Array.isArray(T[N])?T[N]:[T[N]];for(let P=0,b=z.length;P<b;P++){const B=z[P];if(v(B,N,P,I)===!0){const Y=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let de=0;for(let le=0;le<ee.length;le++){const ue=ee[le],ie=E(ue);typeof ue=="number"||typeof ue=="boolean"?(B.__data[0]=ue,i.bufferSubData(i.UNIFORM_BUFFER,Y+de,B.__data)):ue.isMatrix3?(B.__data[0]=ue.elements[0],B.__data[1]=ue.elements[1],B.__data[2]=ue.elements[2],B.__data[3]=0,B.__data[4]=ue.elements[3],B.__data[5]=ue.elements[4],B.__data[6]=ue.elements[5],B.__data[7]=0,B.__data[8]=ue.elements[6],B.__data[9]=ue.elements[7],B.__data[10]=ue.elements[8],B.__data[11]=0):(ue.toArray(B.__data,de),de+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(C,R,T,I){const N=C.value,U=R+"_"+T;if(I[U]===void 0)return typeof N=="number"||typeof N=="boolean"?I[U]=N:I[U]=N.clone(),!0;{const z=I[U];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return I[U]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function S(C){const R=C.uniforms;let T=0;const I=16;for(let U=0,z=R.length;U<z;U++){const P=Array.isArray(R[U])?R[U]:[R[U]];for(let b=0,B=P.length;b<B;b++){const Y=P[b],ee=Array.isArray(Y.value)?Y.value:[Y.value];for(let de=0,le=ee.length;de<le;de++){const ue=ee[de],ie=E(ue),H=T%I,ce=H%ie.boundary,ne=H+ce;T+=ce,ne!==0&&I-ne<ie.storage&&(T+=I-ne),Y.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=ie.storage}}}const N=T%I;return N>0&&(T+=I-N),C.__size=T,C.__cache={},this}function E(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function y(C){const R=C.target;R.removeEventListener("dispose",y);const T=l.indexOf(R.__bindingPointIndex);l.splice(T,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete a[R.id]}function x(){for(const C in s)i.deleteBuffer(s[C]);l=[],s={},a={}}return{bind:d,update:h,dispose:x}}class vb{constructor(e={}){const{canvas:t=yE(),context:n=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=l;const S=new Uint32Array(4),E=new Int32Array(4);let y=null,x=null;const C=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let I=!1;this._outputColorSpace=hn;let N=0,U=0,z=null,P=-1,b=null;const B=new Ut,Y=new Ut;let ee=null;const de=new Ze(0);let le=0,ue=t.width,ie=t.height,H=1,ce=null,ne=null;const V=new Ut(0,0,ue,ie),oe=new Ut(0,0,ue,ie);let Ue=!1;const ke=new Tp;let me=!1,q=!1;const J=new lt,ge=new D,Me=new Ut,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Et(){return z===null?H:1}let k=n;function Tt(L,$){return t.getContext(L,$)}try{const L={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ds}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ye,!1),k===null){const $="webgl2";if(k=Tt($,L),k===null)throw Tt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let dt,et,Be,Ot,Ve,ut,Gt,qt,O,A,Q,fe,_e,he,$e,Se,ze,Ye,we,Ie,tt,je,Le,ht;function W(){dt=new bR(k),dt.init(),je=new cb(k,dt),et=new MR(k,dt,e,je),Be=new lb(k,dt),et.reversedDepthBuffer&&g&&Be.buffers.depth.setReversed(!0),Ot=new LR(k),Ve=new $1,ut=new ub(k,dt,Be,Ve,et,je,Ot),Gt=new ER(T),qt=new RR(T),O=new FT(k),Le=new xR(k,O),A=new CR(k,O,Ot,Le),Q=new NR(k,A,O,Ot),we=new IR(k,et,ut),Se=new SR(Ve),fe=new q1(T,Gt,qt,dt,et,Le,Se),_e=new gb(T,Ve),he=new Z1,$e=new ib(dt),Ye=new vR(T,Gt,qt,Be,Q,v,d),ze=new ob(T,Q,et),ht=new _b(k,Ot,et,Be),Ie=new yR(k,dt,Ot),tt=new PR(k,dt,Ot),Ot.programs=fe.programs,T.capabilities=et,T.extensions=dt,T.properties=Ve,T.renderLists=he,T.shadowMap=ze,T.state=Be,T.info=Ot}W();const Te=new pb(T,k);this.xr=Te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const L=dt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=dt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(L){L!==void 0&&(H=L,this.setSize(ue,ie,!1))},this.getSize=function(L){return L.set(ue,ie)},this.setSize=function(L,$,se=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=L,ie=$,t.width=Math.floor(L*H),t.height=Math.floor($*H),se===!0&&(t.style.width=L+"px",t.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(ue*H,ie*H).floor()},this.setDrawingBufferSize=function(L,$,se){ue=L,ie=$,H=se,t.width=Math.floor(L*se),t.height=Math.floor($*se),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(B)},this.getViewport=function(L){return L.copy(V)},this.setViewport=function(L,$,se,ae){L.isVector4?V.set(L.x,L.y,L.z,L.w):V.set(L,$,se,ae),Be.viewport(B.copy(V).multiplyScalar(H).round())},this.getScissor=function(L){return L.copy(oe)},this.setScissor=function(L,$,se,ae){L.isVector4?oe.set(L.x,L.y,L.z,L.w):oe.set(L,$,se,ae),Be.scissor(Y.copy(oe).multiplyScalar(H).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(L){Be.setScissorTest(Ue=L)},this.setOpaqueSort=function(L){ce=L},this.setTransparentSort=function(L){ne=L},this.getClearColor=function(L){return L.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(L=!0,$=!0,se=!0){let ae=0;if(L){let j=!1;if(z!==null){const Ae=z.texture.format;j=Ae===yp||Ae===xp||Ae===vp}if(j){const Ae=z.texture.type,Ne=Ae===$i||Ae===Us||Ae===sl||Ae===ol||Ae===mp||Ae===gp,We=Ye.getClearColor(),Oe=Ye.getClearAlpha(),st=We.r,at=We.g,Qe=We.b;Ne?(S[0]=st,S[1]=at,S[2]=Qe,S[3]=Oe,k.clearBufferuiv(k.COLOR,0,S)):(E[0]=st,E[1]=at,E[2]=Qe,E[3]=Oe,k.clearBufferiv(k.COLOR,0,E))}else ae|=k.COLOR_BUFFER_BIT}$&&(ae|=k.DEPTH_BUFFER_BIT),se&&(ae|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ye.dispose(),he.dispose(),$e.dispose(),Ve.dispose(),Gt.dispose(),qt.dispose(),Q.dispose(),Le.dispose(),ht.dispose(),fe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",gn),Te.removeEventListener("sessionend",Zi),Nn.stop()};function Re(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const L=Ot.autoReset,$=ze.enabled,se=ze.autoUpdate,ae=ze.needsUpdate,j=ze.type;W(),Ot.autoReset=L,ze.enabled=$,ze.autoUpdate=se,ze.needsUpdate=ae,ze.type=j}function ye(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function pe(L){const $=L.target;$.removeEventListener("dispose",pe),He($)}function He(L){ft(L),Ve.remove(L)}function ft(L){const $=Ve.get(L).programs;$!==void 0&&($.forEach(function(se){fe.releaseProgram(se)}),L.isShaderMaterial&&fe.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,se,ae,j,Ae){$===null&&($=Ce);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,We=Fi(L,$,se,ae,j);Be.setMaterial(ae,Ne);let Oe=se.index,st=1;if(ae.wireframe===!0){if(Oe=A.getWireframeAttribute(se),Oe===void 0)return;st=2}const at=se.drawRange,Qe=se.attributes.position;let pt=at.start*st,Ft=(at.start+at.count)*st;Ae!==null&&(pt=Math.max(pt,Ae.start*st),Ft=Math.min(Ft,(Ae.start+Ae.count)*st)),Oe!==null?(pt=Math.max(pt,0),Ft=Math.min(Ft,Oe.count)):Qe!=null&&(pt=Math.max(pt,0),Ft=Math.min(Ft,Qe.count));const Ct=Ft-pt;if(Ct<0||Ct===1/0)return;Le.setup(j,ae,We,se,Oe);let jt,kt=Ie;if(Oe!==null&&(jt=O.get(Oe),kt=tt,kt.setIndex(jt)),j.isMesh)ae.wireframe===!0?(Be.setLineWidth(ae.wireframeLinewidth*Et()),kt.setMode(k.LINES)):kt.setMode(k.TRIANGLES);else if(j.isLine){let nt=ae.linewidth;nt===void 0&&(nt=1),Be.setLineWidth(nt*Et()),j.isLineSegments?kt.setMode(k.LINES):j.isLineLoop?kt.setMode(k.LINE_LOOP):kt.setMode(k.LINE_STRIP)}else j.isPoints?kt.setMode(k.POINTS):j.isSprite&&kt.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)hl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),kt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))kt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nt=j._multiDrawStarts,Wt=j._multiDrawCounts,wt=j._multiDrawCount,un=Oe?O.get(Oe).bytesPerElement:1,xi=Ve.get(ae).currentProgram.getUniforms();for(let Dn=0;Dn<wt;Dn++)xi.setValue(k,"_gl_DrawID",Dn),kt.render(nt[Dn]/un,Wt[Dn])}else if(j.isInstancedMesh)kt.renderInstances(pt,Ct,j.count);else if(se.isInstancedBufferGeometry){const nt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Wt=Math.min(se.instanceCount,nt);kt.renderInstances(pt,Ct,Wt)}else kt.render(pt,Ct)};function Lt(L,$,se){L.transparent===!0&&L.side===fi&&L.forceSinglePass===!1?(L.side=In,L.needsUpdate=!0,Ji(L,$,se),L.side=xr,L.needsUpdate=!0,Ji(L,$,se),L.side=fi):Ji(L,$,se)}this.compile=function(L,$,se=null){se===null&&(se=L),x=$e.get(se),x.init($),R.push(x),se.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),L!==se&&L.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const ae=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ae=j.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const We=Ae[Ne];Lt(We,se,j),ae.add(We)}else Lt(Ae,se,j),ae.add(Ae)}),x=R.pop(),ae},this.compileAsync=function(L,$,se=null){const ae=this.compile(L,$,se);return new Promise(j=>{function Ae(){if(ae.forEach(function(Ne){Ve.get(Ne).currentProgram.isReady()&&ae.delete(Ne)}),ae.size===0){j(L);return}setTimeout(Ae,10)}dt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let bt=null;function Gn(L){bt&&bt(L)}function gn(){Nn.stop()}function Zi(){Nn.start()}const Nn=new _x;Nn.setAnimationLoop(Gn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(L){bt=L,Te.setAnimationLoop(L),L===null?Nn.stop():Nn.start()},Te.addEventListener("sessionstart",gn),Te.addEventListener("sessionend",Zi),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera($),$=Te.getCamera()),L.isScene===!0&&L.onBeforeRender(T,L,$,z),x=$e.get(L,R.length),x.init($),R.push(x),J.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ke.setFromProjectionMatrix(J,Yi,$.reversedDepth),q=this.localClippingEnabled,me=Se.init(this.clippingPlanes,q),y=he.get(L,C.length),y.init(),C.push(y),Te.enabled===!0&&Te.isPresenting===!0){const Ae=T.xr.getDepthSensingMesh();Ae!==null&&es(Ae,$,-1/0,T.sortObjects)}es(L,$,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(ce,ne),ct=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,ct&&Ye.addToRenderList(y,L),this.info.render.frame++,me===!0&&Se.beginShadows();const se=x.state.shadowsArray;ze.render(se,L,$),me===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=y.opaque,j=y.transmissive;if(x.setupLights(),$.isArrayCamera){const Ae=$.cameras;if(j.length>0)for(let Ne=0,We=Ae.length;Ne<We;Ne++){const Oe=Ae[Ne];Qi(ae,j,L,Oe)}ct&&Ye.render(L);for(let Ne=0,We=Ae.length;Ne<We;Ne++){const Oe=Ae[Ne];Ui(y,L,Oe,Oe.viewport)}}else j.length>0&&Qi(ae,j,L,$),ct&&Ye.render(L),Ui(y,L,$);z!==null&&U===0&&(ut.updateMultisampleRenderTarget(z),ut.updateRenderTargetMipmap(z)),L.isScene===!0&&L.onAfterRender(T,L,$),Le.resetDefaultState(),P=-1,b=null,R.pop(),R.length>0?(x=R[R.length-1],me===!0&&Se.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,C.pop(),C.length>0?y=C[C.length-1]:y=null};function es(L,$,se,ae){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ke.intersectsSprite(L)){ae&&Me.setFromMatrixPosition(L.matrixWorld).applyMatrix4(J);const Ne=Q.update(L),We=L.material;We.visible&&y.push(L,Ne,We,se,Me.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ke.intersectsObject(L))){const Ne=Q.update(L),We=L.material;if(ae&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Me.copy(L.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Me.copy(Ne.boundingSphere.center)),Me.applyMatrix4(L.matrixWorld).applyMatrix4(J)),Array.isArray(We)){const Oe=Ne.groups;for(let st=0,at=Oe.length;st<at;st++){const Qe=Oe[st],pt=We[Qe.materialIndex];pt&&pt.visible&&y.push(L,Ne,pt,se,Me.z,Qe)}}else We.visible&&y.push(L,Ne,We,se,Me.z,null)}}const Ae=L.children;for(let Ne=0,We=Ae.length;Ne<We;Ne++)es(Ae[Ne],$,se,ae)}function Ui(L,$,se,ae){const j=L.opaque,Ae=L.transmissive,Ne=L.transparent;x.setupLightsView(se),me===!0&&Se.setGlobalState(T.clippingPlanes,se),ae&&Be.viewport(B.copy(ae)),j.length>0&&vi(j,$,se),Ae.length>0&&vi(Ae,$,se),Ne.length>0&&vi(Ne,$,se),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Qi(L,$,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ae.id]===void 0&&(x.state.transmissionRenderTarget[ae.id]=new Os(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?ml:$i,minFilter:gr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Ae=x.state.transmissionRenderTarget[ae.id],Ne=ae.viewport||B;Ae.setSize(Ne.z*T.transmissionResolutionScale,Ne.w*T.transmissionResolutionScale);const We=T.getRenderTarget(),Oe=T.getActiveCubeFace(),st=T.getActiveMipmapLevel();T.setRenderTarget(Ae),T.getClearColor(de),le=T.getClearAlpha(),le<1&&T.setClearColor(16777215,.5),T.clear(),ct&&Ye.render(se);const at=T.toneMapping;T.toneMapping=Qr;const Qe=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),x.setupLightsView(ae),me===!0&&Se.setGlobalState(T.clippingPlanes,ae),vi(L,se,ae),ut.updateMultisampleRenderTarget(Ae),ut.updateRenderTargetMipmap(Ae),dt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Ft=0,Ct=$.length;Ft<Ct;Ft++){const jt=$[Ft],kt=jt.object,nt=jt.geometry,Wt=jt.material,wt=jt.group;if(Wt.side===fi&&kt.layers.test(ae.layers)){const un=Wt.side;Wt.side=In,Wt.needsUpdate=!0,Oi(kt,se,ae,nt,Wt,wt),Wt.side=un,Wt.needsUpdate=!0,pt=!0}}pt===!0&&(ut.updateMultisampleRenderTarget(Ae),ut.updateRenderTargetMipmap(Ae))}T.setRenderTarget(We,Oe,st),T.setClearColor(de,le),Qe!==void 0&&(ae.viewport=Qe),T.toneMapping=at}function vi(L,$,se){const ae=$.isScene===!0?$.overrideMaterial:null;for(let j=0,Ae=L.length;j<Ae;j++){const Ne=L[j],We=Ne.object,Oe=Ne.geometry,st=Ne.group;let at=Ne.material;at.allowOverride===!0&&ae!==null&&(at=ae),We.layers.test(se.layers)&&Oi(We,$,se,Oe,at,st)}}function Oi(L,$,se,ae,j,Ae){L.onBeforeRender(T,$,se,ae,j,Ae),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(T,$,se,ae,L,Ae),j.transparent===!0&&j.side===fi&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,T.renderBufferDirect(se,$,ae,j,L,Ae),j.side=xr,j.needsUpdate=!0,T.renderBufferDirect(se,$,ae,j,L,Ae),j.side=fi):T.renderBufferDirect(se,$,ae,j,L,Ae),L.onAfterRender(T,$,se,ae,j,Ae)}function Ji(L,$,se){$.isScene!==!0&&($=Ce);const ae=Ve.get(L),j=x.state.lights,Ae=x.state.shadowsArray,Ne=j.state.version,We=fe.getParameters(L,j.state,Ae,$,se),Oe=fe.getProgramCacheKey(We);let st=ae.programs;ae.environment=L.isMeshStandardMaterial?$.environment:null,ae.fog=$.fog,ae.envMap=(L.isMeshStandardMaterial?qt:Gt).get(L.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&L.envMap===null?$.environmentRotation:L.envMapRotation,st===void 0&&(L.addEventListener("dispose",pe),st=new Map,ae.programs=st);let at=st.get(Oe);if(at!==void 0){if(ae.currentProgram===at&&ae.lightsStateVersion===Ne)return ks(L,We),at}else We.uniforms=fe.getUniforms(L),L.onBeforeCompile(We,T),at=fe.acquireProgram(We,Oe),st.set(Oe,at),ae.uniforms=We.uniforms;const Qe=ae.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qe.clippingPlanes=Se.uniform),ks(L,We),ae.needsLights=ts(L),ae.lightsStateVersion=Ne,ae.needsLights&&(Qe.ambientLightColor.value=j.state.ambient,Qe.lightProbe.value=j.state.probe,Qe.directionalLights.value=j.state.directional,Qe.directionalLightShadows.value=j.state.directionalShadow,Qe.spotLights.value=j.state.spot,Qe.spotLightShadows.value=j.state.spotShadow,Qe.rectAreaLights.value=j.state.rectArea,Qe.ltc_1.value=j.state.rectAreaLTC1,Qe.ltc_2.value=j.state.rectAreaLTC2,Qe.pointLights.value=j.state.point,Qe.pointLightShadows.value=j.state.pointShadow,Qe.hemisphereLights.value=j.state.hemi,Qe.directionalShadowMap.value=j.state.directionalShadowMap,Qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Qe.spotShadowMap.value=j.state.spotShadowMap,Qe.spotLightMatrix.value=j.state.spotLightMatrix,Qe.spotLightMap.value=j.state.spotLightMap,Qe.pointShadowMap.value=j.state.pointShadowMap,Qe.pointShadowMatrix.value=j.state.pointShadowMatrix),ae.currentProgram=at,ae.uniformsList=null,at}function Fs(L){if(L.uniformsList===null){const $=L.currentProgram.getUniforms();L.uniformsList=sc.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function ks(L,$){const se=Ve.get(L);se.outputColorSpace=$.outputColorSpace,se.batching=$.batching,se.batchingColor=$.batchingColor,se.instancing=$.instancing,se.instancingColor=$.instancingColor,se.instancingMorph=$.instancingMorph,se.skinning=$.skinning,se.morphTargets=$.morphTargets,se.morphNormals=$.morphNormals,se.morphColors=$.morphColors,se.morphTargetsCount=$.morphTargetsCount,se.numClippingPlanes=$.numClippingPlanes,se.numIntersection=$.numClipIntersection,se.vertexAlphas=$.vertexAlphas,se.vertexTangents=$.vertexTangents,se.toneMapping=$.toneMapping}function Fi(L,$,se,ae,j){$.isScene!==!0&&($=Ce),ut.resetTextureUnits();const Ae=$.fog,Ne=ae.isMeshStandardMaterial?$.environment:null,We=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Hn,Oe=(ae.isMeshStandardMaterial?qt:Gt).get(ae.envMap||Ne),st=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,at=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Qe=!!se.morphAttributes.position,pt=!!se.morphAttributes.normal,Ft=!!se.morphAttributes.color;let Ct=Qr;ae.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ct=T.toneMapping);const jt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,kt=jt!==void 0?jt.length:0,nt=Ve.get(ae),Wt=x.state.lights;if(me===!0&&(q===!0||L!==b)){const sn=L===b&&ae.id===P;Se.setState(ae,L,sn)}let wt=!1;ae.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Wt.state.version||nt.outputColorSpace!==We||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isBatchedMesh&&nt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&nt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&nt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&nt.instancingMorph===!1&&j.morphTexture!==null||nt.envMap!==Oe||ae.fog===!0&&nt.fog!==Ae||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Se.numPlanes||nt.numIntersection!==Se.numIntersection)||nt.vertexAlphas!==st||nt.vertexTangents!==at||nt.morphTargets!==Qe||nt.morphNormals!==pt||nt.morphColors!==Ft||nt.toneMapping!==Ct||nt.morphTargetsCount!==kt)&&(wt=!0):(wt=!0,nt.__version=ae.version);let un=nt.currentProgram;wt===!0&&(un=Ji(ae,$,j));let xi=!1,Dn=!1,ns=!1;const Yt=un.getUniforms(),Un=nt.uniforms;if(Be.useProgram(un.program)&&(xi=!0,Dn=!0,ns=!0),ae.id!==P&&(P=ae.id,Dn=!0),xi||b!==L){Be.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Yt.setValue(k,"projectionMatrix",L.projectionMatrix),Yt.setValue(k,"viewMatrix",L.matrixWorldInverse);const wn=Yt.map.cameraPosition;wn!==void 0&&wn.setValue(k,ge.setFromMatrixPosition(L.matrixWorld)),et.logarithmicDepthBuffer&&Yt.setValue(k,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Yt.setValue(k,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,Dn=!0,ns=!0)}if(j.isSkinnedMesh){Yt.setOptional(k,j,"bindMatrix"),Yt.setOptional(k,j,"bindMatrixInverse");const sn=j.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Yt.setValue(k,"boneTexture",sn.boneTexture,ut))}j.isBatchedMesh&&(Yt.setOptional(k,j,"batchingTexture"),Yt.setValue(k,"batchingTexture",j._matricesTexture,ut),Yt.setOptional(k,j,"batchingIdTexture"),Yt.setValue(k,"batchingIdTexture",j._indirectTexture,ut),Yt.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&Yt.setValue(k,"batchingColorTexture",j._colorsTexture,ut));const Tn=se.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&we.update(j,se,un),(Dn||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,Yt.setValue(k,"receiveShadow",j.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Un.envMap.value=Oe,Un.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&$.environment!==null&&(Un.envMapIntensity.value=$.environmentIntensity),Dn&&(Yt.setValue(k,"toneMappingExposure",T.toneMappingExposure),nt.needsLights&&Bs(Un,ns),Ae&&ae.fog===!0&&_e.refreshFogUniforms(Un,Ae),_e.refreshMaterialUniforms(Un,ae,H,ie,x.state.transmissionRenderTarget[L.id]),sc.upload(k,Fs(nt),Un,ut)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(sc.upload(k,Fs(nt),Un,ut),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Yt.setValue(k,"center",j.center),Yt.setValue(k,"modelViewMatrix",j.modelViewMatrix),Yt.setValue(k,"normalMatrix",j.normalMatrix),Yt.setValue(k,"modelMatrix",j.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const sn=ae.uniformsGroups;for(let wn=0,is=sn.length;wn<is;wn++){const At=sn[wn];ht.update(At,un),ht.bind(At,un)}}return un}function Bs(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function ts(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(L,$,se){const ae=Ve.get(L);ae.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Ve.get(L.texture).__webglTexture=$,Ve.get(L.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:se,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,$){const se=Ve.get(L);se.__webglFramebuffer=$,se.__useDefaultFramebuffer=$===void 0};const na=k.createFramebuffer();this.setRenderTarget=function(L,$=0,se=0){z=L,N=$,U=se;let ae=!0,j=null,Ae=!1,Ne=!1;if(L){const Oe=Ve.get(L);if(Oe.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(k.FRAMEBUFFER,null),ae=!1;else if(Oe.__webglFramebuffer===void 0)ut.setupRenderTarget(L);else if(Oe.__hasExternalTextures)ut.rebindTextures(L,Ve.get(L.texture).__webglTexture,Ve.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Qe=L.depthTexture;if(Oe.__boundDepthTexture!==Qe){if(Qe!==null&&Ve.has(Qe)&&(L.width!==Qe.image.width||L.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(L)}}const st=L.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ne=!0);const at=Ve.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(at[$])?j=at[$][se]:j=at[$],Ae=!0):L.samples>0&&ut.useMultisampledRTT(L)===!1?j=Ve.get(L).__webglMultisampledFramebuffer:Array.isArray(at)?j=at[se]:j=at,B.copy(L.viewport),Y.copy(L.scissor),ee=L.scissorTest}else B.copy(V).multiplyScalar(H).floor(),Y.copy(oe).multiplyScalar(H).floor(),ee=Ue;if(se!==0&&(j=na),Be.bindFramebuffer(k.FRAMEBUFFER,j)&&ae&&Be.drawBuffers(L,j),Be.viewport(B),Be.scissor(Y),Be.setScissorTest(ee),Ae){const Oe=Ve.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+$,Oe.__webglTexture,se)}else if(Ne){const Oe=$;for(let st=0;st<L.textures.length;st++){const at=Ve.get(L.textures[st]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+st,at.__webglTexture,se,Oe)}}else if(L!==null&&se!==0){const Oe=Ve.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,se)}P=-1},this.readRenderTargetPixels=function(L,$,se,ae,j,Ae,Ne,We=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ve.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){Be.bindFramebuffer(k.FRAMEBUFFER,Oe);try{const st=L.textures[We],at=st.format,Qe=st.type;if(!et.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-ae&&se>=0&&se<=L.height-j&&(L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+We),k.readPixels($,se,ae,j,je.convert(at),je.convert(Qe),Ae))}finally{const st=z!==null?Ve.get(z).__webglFramebuffer:null;Be.bindFramebuffer(k.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(L,$,se,ae,j,Ae,Ne,We=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ve.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe)if($>=0&&$<=L.width-ae&&se>=0&&se<=L.height-j){Be.bindFramebuffer(k.FRAMEBUFFER,Oe);const st=L.textures[We],at=st.format,Qe=st.type;if(!et.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.bufferData(k.PIXEL_PACK_BUFFER,Ae.byteLength,k.STREAM_READ),L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+We),k.readPixels($,se,ae,j,je.convert(at),je.convert(Qe),0);const Ft=z!==null?Ve.get(z).__webglFramebuffer:null;Be.bindFramebuffer(k.FRAMEBUFFER,Ft);const Ct=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ME(k,Ct,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ae),k.deleteBuffer(pt),k.deleteSync(Ct),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,$=null,se=0){const ae=Math.pow(2,-se),j=Math.floor(L.image.width*ae),Ae=Math.floor(L.image.height*ae),Ne=$!==null?$.x:0,We=$!==null?$.y:0;ut.setTexture2D(L,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,Ne,We,j,Ae),Be.unbindTexture()};const Vs=k.createFramebuffer(),er=k.createFramebuffer();this.copyTextureToTexture=function(L,$,se=null,ae=null,j=0,Ae=null){Ae===null&&(j!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=j,j=0):Ae=0);let Ne,We,Oe,st,at,Qe,pt,Ft,Ct;const jt=L.isCompressedTexture?L.mipmaps[Ae]:L.image;if(se!==null)Ne=se.max.x-se.min.x,We=se.max.y-se.min.y,Oe=se.isBox3?se.max.z-se.min.z:1,st=se.min.x,at=se.min.y,Qe=se.isBox3?se.min.z:0;else{const Tn=Math.pow(2,-j);Ne=Math.floor(jt.width*Tn),We=Math.floor(jt.height*Tn),L.isDataArrayTexture?Oe=jt.depth:L.isData3DTexture?Oe=Math.floor(jt.depth*Tn):Oe=1,st=0,at=0,Qe=0}ae!==null?(pt=ae.x,Ft=ae.y,Ct=ae.z):(pt=0,Ft=0,Ct=0);const kt=je.convert($.format),nt=je.convert($.type);let Wt;$.isData3DTexture?(ut.setTexture3D($,0),Wt=k.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ut.setTexture2DArray($,0),Wt=k.TEXTURE_2D_ARRAY):(ut.setTexture2D($,0),Wt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);const wt=k.getParameter(k.UNPACK_ROW_LENGTH),un=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xi=k.getParameter(k.UNPACK_SKIP_PIXELS),Dn=k.getParameter(k.UNPACK_SKIP_ROWS),ns=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,jt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,jt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,st),k.pixelStorei(k.UNPACK_SKIP_ROWS,at),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const Yt=L.isDataArrayTexture||L.isData3DTexture,Un=$.isDataArrayTexture||$.isData3DTexture;if(L.isDepthTexture){const Tn=Ve.get(L),sn=Ve.get($),wn=Ve.get(Tn.__renderTarget),is=Ve.get(sn.__renderTarget);Be.bindFramebuffer(k.READ_FRAMEBUFFER,wn.__webglFramebuffer),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let At=0;At<Oe;At++)Yt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ve.get(L).__webglTexture,j,Qe+At),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ve.get($).__webglTexture,Ae,Ct+At)),k.blitFramebuffer(st,at,Ne,We,pt,Ft,Ne,We,k.DEPTH_BUFFER_BIT,k.NEAREST);Be.bindFramebuffer(k.READ_FRAMEBUFFER,null),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||L.isRenderTargetTexture||Ve.has(L)){const Tn=Ve.get(L),sn=Ve.get($);Be.bindFramebuffer(k.READ_FRAMEBUFFER,Vs),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,er);for(let wn=0;wn<Oe;wn++)Yt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Tn.__webglTexture,j,Qe+wn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Tn.__webglTexture,j),Un?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sn.__webglTexture,Ae,Ct+wn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sn.__webglTexture,Ae),j!==0?k.blitFramebuffer(st,at,Ne,We,pt,Ft,Ne,We,k.COLOR_BUFFER_BIT,k.NEAREST):Un?k.copyTexSubImage3D(Wt,Ae,pt,Ft,Ct+wn,st,at,Ne,We):k.copyTexSubImage2D(Wt,Ae,pt,Ft,st,at,Ne,We);Be.bindFramebuffer(k.READ_FRAMEBUFFER,null),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Un?L.isDataTexture||L.isData3DTexture?k.texSubImage3D(Wt,Ae,pt,Ft,Ct,Ne,We,Oe,kt,nt,jt.data):$.isCompressedArrayTexture?k.compressedTexSubImage3D(Wt,Ae,pt,Ft,Ct,Ne,We,Oe,kt,jt.data):k.texSubImage3D(Wt,Ae,pt,Ft,Ct,Ne,We,Oe,kt,nt,jt):L.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ae,pt,Ft,Ne,We,kt,nt,jt.data):L.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ae,pt,Ft,jt.width,jt.height,kt,jt.data):k.texSubImage2D(k.TEXTURE_2D,Ae,pt,Ft,Ne,We,kt,nt,jt);k.pixelStorei(k.UNPACK_ROW_LENGTH,wt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,un),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Dn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ns),Ae===0&&$.generateMipmaps&&k.generateMipmap(Wt),Be.unbindTexture()},this.initRenderTarget=function(L){Ve.get(L).__webglFramebuffer===void 0&&ut.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ut.setTextureCube(L,0):L.isData3DTexture?ut.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ut.setTexture2DArray(L,0):ut.setTexture2D(L,0),Be.unbindTexture()},this.resetState=function(){N=0,U=0,z=null,Be.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}let ja=null;function rp(){if(ja)return ja;const i=128,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.2,"rgba(255,255,255,0.8)"),n.addColorStop(.5,"rgba(255,255,255,0.18)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i),ja=new tT(e),ja.colorSpace=hn,ja}function Up(i,e,t=1){const n=new jE(new ox({map:rp(),color:i,transparent:!0,opacity:t,blending:Is,depthWrite:!1}));return n.scale.setScalar(e),n}const Ss=new Ze("#4aa8ff"),xb=new Ze("#ffb347");class yb{group=new Mn;nodes=[];nodePoints;lines;linkDistance=4.2;earth;orbs=[];stars;box=new D(18,10,6);constructor(e){const t=e==="high"?110:55;this.stars=this.makeStars(e==="high"?1800:800),this.group.add(this.stars);for(let c=0;c<t;c++)this.nodes.push({pos:new D(_t.randFloatSpread(this.box.x*2),_t.randFloatSpread(this.box.y*2),_t.randFloatSpread(this.box.z*2)-14),vel:new D().randomDirection().multiplyScalar(_t.randFloat(.08,.25))});const n=new Ht;n.setAttribute("position",new St(new Float32Array(t*3),3));const s=new Float32Array(t*3);for(let c=0;c<t;c++)(Math.random()<.12?xb:Ss).toArray(s,c*3);n.setAttribute("color",new St(s,3)),this.nodePoints=new tp(n,new mc({size:.35,map:rp(),vertexColors:!0,transparent:!0,blending:Is,depthWrite:!1})),this.group.add(this.nodePoints);const a=t*6,l=new Ht;l.setAttribute("position",new St(new Float32Array(a*6),3)),l.setAttribute("color",new St(new Float32Array(a*6),3)),this.lines=new Zo(l,new Jr({vertexColors:!0,transparent:!0,blending:Is,depthWrite:!1})),this.group.add(this.lines),this.earth=this.makeEarth(),this.group.add(this.earth);for(let c=0;c<7;c++){const d=c%3===0,h=Up(d?"#ffae42":"#5ab4ff",_t.randFloat(.8,2.2),.55),m=new D(_t.randFloatSpread(26),_t.randFloatSpread(14),_t.randFloat(-22,-8));h.position.copy(m),this.orbs.push({sprite:h,base:m,phase:Math.random()*Math.PI*2}),this.group.add(h)}this.updateNetwork(0)}makeStars(e){const t=new Float32Array(e*3),n=new Float32Array(e*3),s=new Ze;for(let l=0;l<e;l++){const c=new D().randomDirection().multiplyScalar(_t.randFloat(60,120));c.z=-Math.abs(c.z),c.toArray(t,l*3),s.setHSL(_t.randFloat(.55,.65),.6,_t.randFloat(.55,.95)),s.toArray(n,l*3)}const a=new Ht;return a.setAttribute("position",new St(t,3)),a.setAttribute("color",new St(n,3)),new tp(a,new mc({size:.5,map:rp(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:Is}))}makeEarth(){const e=new Mn,t=8,n=new rn(new pl(t,64,48),new Ii({uniforms:{uTime:{value:0},uLight:{value:new D(-1,.6,.8).normalize()}},vertexShader:`
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
          }`}));return e.add(s),e.position.set(14,-13,-30),e.rotation.z=.35,e}layout(e){e<1?this.earth.position.set(5,-19,-36):this.earth.position.set(19,-13,-36)}updateNetwork(e){const{nodes:t,box:n}=this,s=this.nodePoints.geometry.getAttribute("position");t.forEach((h,m)=>{h.pos.addScaledVector(h.vel,e),Math.abs(h.pos.x)>n.x&&(h.vel.x*=-1),Math.abs(h.pos.y)>n.y&&(h.vel.y*=-1),Math.abs(h.pos.z+14)>n.z&&(h.vel.z*=-1),s.setXYZ(m,h.pos.x,h.pos.y,h.pos.z)}),s.needsUpdate=!0;const a=this.lines.geometry.getAttribute("position"),l=this.lines.geometry.getAttribute("color"),c=a.count/2;let d=0;for(let h=0;h<t.length&&d<c;h++)for(let m=h+1;m<t.length&&d<c;m++){const p=t[h].pos.distanceTo(t[m].pos);if(p>this.linkDistance)continue;const g=(1-p/this.linkDistance)*.55;a.setXYZ(d*2,t[h].pos.x,t[h].pos.y,t[h].pos.z),a.setXYZ(d*2+1,t[m].pos.x,t[m].pos.y,t[m].pos.z),l.setXYZ(d*2,Ss.r*g,Ss.g*g,Ss.b*g),l.setXYZ(d*2+1,Ss.r*g,Ss.g*g,Ss.b*g),d++}this.lines.geometry.setDrawRange(0,d*2),a.needsUpdate=!0,l.needsUpdate=!0}update(e,t){this.updateNetwork(e),this.earth.rotation.y+=e*.02,this.stars.rotation.z+=e*.004;for(const n of this.orbs)n.sprite.position.set(n.base.x+Math.sin(t*.15+n.phase)*1.5,n.base.y+Math.cos(t*.12+n.phase)*1,n.base.z),n.sprite.material.opacity=.4+Math.sin(t*.8+n.phase)*.15}}function Bv(i,e){if(e===jS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Zf||e===Y0){let t=i.getIndex();if(t===null){const l=[],c=i.getAttribute("position");if(c!==void 0){for(let d=0;d<c.count;d++)l.push(d);i.setIndex(l),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Zf)for(let l=1;l<=n;l++)s.push(t.getX(0)),s.push(t.getX(l)),s.push(t.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(s.push(t.getX(l)),s.push(t.getX(l+1)),s.push(t.getX(l+2))):(s.push(t.getX(l+2)),s.push(t.getX(l+1)),s.push(t.getX(l)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Mb extends ea{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ab(t)}),this.register(function(t){return new Rb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new Vb(t)})}load(e,t,n,s){const a=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const h=rl.extractUrlBase(e);l=rl.resolveURL(h,this.path)}else l=rl.extractUrlBase(e);this.manager.itemStart(e);const c=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},d=new mx(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{a.parse(h,l,function(m){t(m),a.manager.itemEnd(e)},c)}catch(m){c(m)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let a;const l={},c={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===Sx){try{l[Rt.KHR_BINARY_GLTF]=new zb(e)}catch(p){s&&s(p);return}a=JSON.parse(l[Rt.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new eC(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const p=this.pluginCallbacks[m](h);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[p.name]=p,l[p.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const p=a.extensionsUsed[m],g=a.extensionsRequired||[];switch(p){case Rt.KHR_MATERIALS_UNLIT:l[p]=new Tb;break;case Rt.KHR_DRACO_MESH_COMPRESSION:l[p]=new Hb(a,this.dracoLoader);break;case Rt.KHR_TEXTURE_TRANSFORM:l[p]=new Gb;break;case Rt.KHR_MESH_QUANTIZATION:l[p]=new Wb;break;default:g.indexOf(p)>=0&&c[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}h.setExtensions(l),h.setPlugins(c),h.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,a){n.parse(e,t,s,a)})}}function Sb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Eb{constructor(e){this.parser=e,this.name=Rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const m=new Ze(16777215);d.color!==void 0&&m.setRGB(d.color[0],d.color[1],d.color[2],Hn);const p=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new np(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new yT(m),h.distance=p;break;case"spot":h=new vT(m),h.distance=p,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),Xi(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(h),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],c=(a.extensions&&a.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(d){return n._getNodeRef(t.cache,c,d)})}}class Tb{constructor(){this.name=Rt.KHR_MATERIALS_UNLIT}getMaterialType(){return gi}extendParams(e,t,n){const s=[];e.color=new Ze(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const l=a.baseColorFactor;e.color.setRGB(l[0],l[1],l[2],Hn),e.opacity=l[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",a.baseColorTexture,hn))}return Promise.all(s)}}class wb{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class Ab{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];if(l.clearcoatFactor!==void 0&&(t.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const c=l.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(c,c)}return Promise.all(a)}}class Rb{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class bb{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.iridescenceFactor!==void 0&&(t.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(t.iridescenceIOR=l.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(a)}}class Cb{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const l=s.extensions[this.name];if(l.sheenColorFactor!==void 0){const c=l.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Hn)}return l.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",l.sheenColorTexture,hn)),l.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(a)}}class Pb{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.transmissionFactor!==void 0&&(t.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",l.transmissionTexture)),Promise.all(a)}}class Lb{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];t.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",l.thicknessTexture)),t.attenuationDistance=l.attenuationDistance||1/0;const c=l.attenuationColor||[1,1,1];return t.attenuationColor=new Ze().setRGB(c[0],c[1],c[2],Hn),Promise.all(a)}}class Ib{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class Nb{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];t.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",l.specularTexture));const c=l.specularColorFactor||[1,1,1];return t.specularColor=new Ze().setRGB(c[0],c[1],c[2],Hn),l.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",l.specularColorTexture,hn)),Promise.all(a)}}class Db{constructor(e){this.parser=e,this.name=Rt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return t.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",l.bumpTexture)),Promise.all(a)}}class Ub{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.anisotropyStrength!==void 0&&(t.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(t.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",l.anisotropyTexture)),Promise.all(a)}}class Ob{constructor(e){this.parser=e,this.name=Rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],l=t.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,l)}}class Fb{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const l=a.extensions[t],c=s.images[l.source];let d=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(d=h)}return n.loadTextureImage(e,l.source,d)}}class kb{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const l=a.extensions[t],c=s.images[l.source];let d=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(d=h)}return n.loadTextureImage(e,l.source,d)}}class Bb{constructor(e){this.name=Rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(c){const d=s.byteOffset||0,h=s.byteLength||0,m=s.count,p=s.byteStride,g=new Uint8Array(c,d,h);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(m,p,g,s.mode,s.filter).then(function(v){return v.buffer}):l.ready.then(function(){const v=new ArrayBuffer(m*p);return l.decodeGltfBuffer(new Uint8Array(v),m,p,g,s.mode,s.filter),v})})}else return null}}class Vb{constructor(e){this.name=Rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const h of s.primitives)if(h.mode!==hi.TRIANGLES&&h.mode!==hi.TRIANGLE_STRIP&&h.mode!==hi.TRIANGLE_FAN&&h.mode!==void 0)return null;const l=n.extensions[this.name].attributes,c=[],d={};for(const h in l)c.push(this.parser.getDependency("accessor",l[h]).then(m=>(d[h]=m,d[h])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(h=>{const m=h.pop(),p=m.isGroup?m.children:[m],g=h[0].count,v=[];for(const S of p){const E=new lt,y=new D,x=new vt,C=new D(1,1,1),R=new KE(S.geometry,S.material,g);for(let T=0;T<g;T++)d.TRANSLATION&&y.fromBufferAttribute(d.TRANSLATION,T),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,T),d.SCALE&&C.fromBufferAttribute(d.SCALE,T),R.setMatrixAt(T,E.compose(y,x,C));for(const T in d)if(T==="_COLOR_0"){const I=d[T];R.instanceColor=new Jf(I.array,I.itemSize,I.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&S.geometry.setAttribute(T,d[T]);zt.prototype.copy.call(R,S),this.parser.assignFinalMaterial(R),v.push(R)}return m.isGroup?(m.clear(),m.add(...v),m):v[0]}))}}const Sx="glTF",Ya=12,Vv={JSON:1313821514,BIN:5130562};class zb{constructor(e){this.name=Rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ya),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ya,a=new DataView(e,Ya);let l=0;for(;l<s;){const c=a.getUint32(l,!0);l+=4;const d=a.getUint32(l,!0);if(l+=4,d===Vv.JSON){const h=new Uint8Array(e,Ya+l,c);this.content=n.decode(h)}else if(d===Vv.BIN){const h=Ya+l;this.body=e.slice(h,h+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Hb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,l=e.extensions[this.name].attributes,c={},d={},h={};for(const m in l){const p=sp[m]||m.toLowerCase();c[p]=l[m]}for(const m in e.attributes){const p=sp[m]||m.toLowerCase();if(l[m]!==void 0){const g=n.accessors[e.attributes[m]],v=Bo[g.componentType];h[p]=v.name,d[p]=g.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(p,g){s.decodeDracoFile(m,function(v){for(const S in v.attributes){const E=v.attributes[S],y=d[S];y!==void 0&&(E.normalized=y)}p(v)},c,h,Hn,g)})})}}class Gb{constructor(){this.name=Rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Wb{constructor(){this.name=Rt.KHR_MESH_QUANTIZATION}}class Ex extends _l{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let l=0;l!==s;l++)t[l]=n[a+l];return t}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=c*2,h=c*3,m=s-t,p=(n-t)/m,g=p*p,v=g*p,S=e*h,E=S-h,y=-2*v+3*g,x=v-g,C=1-y,R=x-g+p;for(let T=0;T!==c;T++){const I=l[E+T+c],N=l[E+T+d]*m,U=l[S+T+c],z=l[S+T]*m;a[T]=C*I+R*N+y*U+x*z}return a}}const Xb=new vt;class jb extends Ex{interpolate_(e,t,n,s){const a=super.interpolate_(e,t,n,s);return Xb.fromArray(a).normalize().toArray(a),a}}const hi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Bo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zv={9728:zn,9729:ni,9984:B0,9985:ec,9986:Ja,9987:gr},Hv={33071:Kr,33648:cc,10497:Go},qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yb={CUBICSPLINE:void 0,LINEAR:cl,STEP:ul},$h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Cp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xr})),i.DefaultMaterial}function Es(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $b(i,e,t){let n=!1,s=!1,a=!1;for(let h=0,m=e.length;h<m;h++){const p=e[h];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(s=!0),p.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(i);const l=[],c=[],d=[];for(let h=0,m=e.length;h<m;h++){const p=e[h];if(n){const g=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):i.attributes.position;l.push(g)}if(s){const g=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):i.attributes.normal;c.push(g)}if(a){const g=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):i.attributes.color;d.push(g)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const m=h[0],p=h[1],g=h[2];return n&&(i.morphAttributes.position=m),s&&(i.morphAttributes.normal=p),a&&(i.morphAttributes.color=g),i.morphTargetsRelative=!0,i})}function Kb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Zb(i){let e;const t=i.extensions&&i.extensions[Rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kh(t.attributes):e=i.indices+":"+Kh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Kh(i.targets[n]);return e}function Kh(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function op(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Jb=new lt;class eC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,a=!1,l=-1;if(typeof navigator<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const d=c.match(/Version\/(\d+)/);s=n&&d?parseInt(d[1],10):-1,a=c.indexOf("Firefox")>-1,l=a?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||a&&l<98?this.textureLoader=new gT(this.options.manager):this.textureLoader=new ET(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const c={scene:l[0][s.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:s.asset,parser:n,userData:{}};return Es(a,c,s),Xi(c,s),Promise.all(n._invokeAll(function(d){return d.afterRoot&&d.afterRoot(c)})).then(function(){for(const d of c.scenes)d.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const l=t[s].joints;for(let c=0,d=l.length;c<d;c++)e[l[c]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const l=e[s];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),a=(l,c)=>{const d=this.associations.get(l);d!=null&&this.associations.set(c,d);for(const[h,m]of l.children.entries())a(m,c.children[h])};return a(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,l){return n.getDependency(e,l)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Rt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,l){n.load(rl.resolveURL(t.uri,s.path),a,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const l=qh[s.type],c=Bo[s.componentType],d=s.normalized===!0,h=new c(s.count*l);return Promise.resolve(new St(h,l,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(l){const c=l[0],d=qh[s.type],h=Bo[s.componentType],m=h.BYTES_PER_ELEMENT,p=m*d,g=s.byteOffset||0,v=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,S=s.normalized===!0;let E,y;if(v&&v!==p){const x=Math.floor(g/v),C="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let R=t.cache.get(C);R||(E=new h(c,x*v,s.count*v/m),R=new sx(E,v/m),t.cache.add(C,R)),y=new fl(R,d,g%v/m,S)}else c===null?E=new h(s.count*d):E=new h(c,g,s.count*d),y=new St(E,d,S);if(s.sparse!==void 0){const x=qh.SCALAR,C=Bo[s.sparse.indices.componentType],R=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,I=new C(l[1],R,s.sparse.count*x),N=new h(l[2],T,s.sparse.count*d);c!==null&&(y=new St(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let U=0,z=I.length;U<z;U++){const P=I[U];if(y.setX(P,N[U*d]),d>=2&&y.setY(P,N[U*d+1]),d>=3&&y.setZ(P,N[U*d+2]),d>=4&&y.setW(P,N[U*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=S}return y})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,l=t.images[a];let c=this.textureLoader;if(l.uri){const d=n.manager.getHandler(l.uri);d!==null&&(c=d)}return this.loadTextureImage(e,a,c)}loadTextureImage(e,t,n){const s=this,a=this.json,l=a.textures[e],c=a.images[t],d=(c.uri||c.bufferView)+":"+l.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,n).then(function(m){m.flipY=!1,m.name=l.name||c.name||"",m.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(m.name=c.uri);const g=(a.samplers||{})[l.sampler]||{};return m.magFilter=zv[g.magFilter]||ni,m.minFilter=zv[g.minFilter]||gr,m.wrapS=Hv[g.wrapS]||Go,m.wrapT=Hv[g.wrapT]||Go,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==zn&&m.minFilter!==ni,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const n=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const l=s.images[e],c=self.URL||self.webkitURL;let d=l.uri||"",h=!1;if(l.bufferView!==void 0)d=n.getDependency("bufferView",l.bufferView).then(function(p){h=!0;const g=new Blob([p],{type:l.mimeType});return d=c.createObjectURL(g),d});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(d).then(function(p){return new Promise(function(g,v){let S=g;t.isImageBitmapLoader===!0&&(S=function(E){const y=new fn(E);y.needsUpdate=!0,g(y)}),t.load(rl.resolveURL(p,a.path),S,void 0,v)})}).then(function(p){return h===!0&&c.revokeObjectURL(d),Xi(p,l),p.userData.mimeType=l.mimeType||Qb(l.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),p});return this.sourceCache[e]=m,m}assignTexture(e,t,n,s){const a=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),a.extensions[Rt.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[Rt.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const d=a.associations.get(l);l=a.extensions[Rt.KHR_TEXTURE_TRANSFORM].extendTexture(l,c),a.associations.set(l,d)}}return s!==void 0&&(l.colorSpace=s),e[t]=l,l})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,l=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let d=this.cache.get(c);d||(d=new mc,_i.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,d.sizeAttenuation=!1,this.cache.add(c,d)),n=d}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let d=this.cache.get(c);d||(d=new Jr,_i.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,this.cache.add(c,d)),n=d}if(s||a||l){let c="ClonedMaterial:"+n.uuid+":";s&&(c+="derivative-tangents:"),a&&(c+="vertex-colors:"),l&&(c+="flat-shading:");let d=this.cache.get(c);d||(d=n.clone(),a&&(d.vertexColors=!0),l&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(c,d),this.associations.set(d,this.associations.get(n))),n=d}e.material=n}getMaterialType(){return Cp}loadMaterial(e){const t=this,n=this.json,s=this.extensions,a=n.materials[e];let l;const c={},d=a.extensions||{},h=[];if(d[Rt.KHR_MATERIALS_UNLIT]){const p=s[Rt.KHR_MATERIALS_UNLIT];l=p.getMaterialType(),h.push(p.extendParams(c,a,t))}else{const p=a.pbrMetallicRoughness||{};if(c.color=new Ze(1,1,1),c.opacity=1,Array.isArray(p.baseColorFactor)){const g=p.baseColorFactor;c.color.setRGB(g[0],g[1],g[2],Hn),c.opacity=g[3]}p.baseColorTexture!==void 0&&h.push(t.assignTexture(c,"map",p.baseColorTexture,hn)),c.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,c.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(c,"metalnessMap",p.metallicRoughnessTexture)),h.push(t.assignTexture(c,"roughnessMap",p.metallicRoughnessTexture))),l=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,c)})))}a.doubleSided===!0&&(c.side=fi);const m=a.alphaMode||$h.OPAQUE;if(m===$h.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,m===$h.MASK&&(c.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&l!==gi&&(h.push(t.assignTexture(c,"normalMap",a.normalTexture)),c.normalScale=new Je(1,1),a.normalTexture.scale!==void 0)){const p=a.normalTexture.scale;c.normalScale.set(p,p)}if(a.occlusionTexture!==void 0&&l!==gi&&(h.push(t.assignTexture(c,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&l!==gi){const p=a.emissiveFactor;c.emissive=new Ze().setRGB(p[0],p[1],p[2],Hn)}return a.emissiveTexture!==void 0&&l!==gi&&h.push(t.assignTexture(c,"emissiveMap",a.emissiveTexture,hn)),Promise.all(h).then(function(){const p=new l(c);return a.name&&(p.name=a.name),Xi(p,a),t.associations.set(p,{materials:e}),a.extensions&&Es(s,p,a),p})}createUniqueName(e){const t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function a(c){return n[Rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(d){return Gv(d,c,t)})}const l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c],m=Zb(h),p=s[m];if(p)l.push(p.promise);else{let g;h.extensions&&h.extensions[Rt.KHR_DRACO_MESH_COMPRESSION]?g=a(h):g=Gv(new Ht,h,t),s[m]={primitive:h,promise:g},l.push(g)}}return Promise.all(l)}loadMesh(e){const t=this,n=this.json,s=this.extensions,a=n.meshes[e],l=a.primitives,c=[];for(let d=0,h=l.length;d<h;d++){const m=l[d].material===void 0?qb(this.cache):this.getDependency("material",l[d].material);c.push(m)}return c.push(t.loadGeometries(l)),Promise.all(c).then(function(d){const h=d.slice(0,d.length-1),m=d[d.length-1],p=[];for(let v=0,S=m.length;v<S;v++){const E=m[v],y=l[v];let x;const C=h[v];if(y.mode===hi.TRIANGLES||y.mode===hi.TRIANGLE_STRIP||y.mode===hi.TRIANGLE_FAN||y.mode===void 0)x=a.isSkinnedMesh===!0?new lx(E,C):new rn(E,C),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),y.mode===hi.TRIANGLE_STRIP?x.geometry=Bv(x.geometry,Y0):y.mode===hi.TRIANGLE_FAN&&(x.geometry=Bv(x.geometry,Zf));else if(y.mode===hi.LINES)x=new Zo(E,C);else if(y.mode===hi.LINE_STRIP)x=new Sc(E,C);else if(y.mode===hi.LINE_LOOP)x=new eT(E,C);else if(y.mode===hi.POINTS)x=new tp(E,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(x.geometry.morphAttributes).length>0&&Kb(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),Xi(x,a),y.extensions&&Es(s,x,y),t.assignFinalMaterial(x),p.push(x)}for(let v=0,S=p.length;v<S;v++)t.associations.set(p[v],{meshes:e,primitives:v});if(p.length===1)return a.extensions&&Es(s,p[0],a),p[0];const g=new Mn;a.extensions&&Es(s,g,a),t.associations.set(g,{meshes:e});for(let v=0,S=p.length;v<S;v++)g.add(p[v]);return g})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vn(_t.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Lp(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,a=t.joints.length;s<a;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const a=s.pop(),l=s,c=[],d=[];for(let h=0,m=l.length;h<m;h++){const p=l[h];if(p){c.push(p);const g=new lt;a!==null&&g.fromArray(a.array,h*16),d.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Ko(c,d)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,l=[],c=[],d=[],h=[],m=[];for(let p=0,g=s.channels.length;p<g;p++){const v=s.channels[p],S=s.samplers[v.sampler],E=v.target,y=E.node,x=s.parameters!==void 0?s.parameters[S.input]:S.input,C=s.parameters!==void 0?s.parameters[S.output]:S.output;E.node!==void 0&&(l.push(this.getDependency("node",y)),c.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",C)),h.push(S),m.push(E))}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(d),Promise.all(h),Promise.all(m)]).then(function(p){const g=p[0],v=p[1],S=p[2],E=p[3],y=p[4],x=[];for(let R=0,T=g.length;R<T;R++){const I=g[R],N=v[R],U=S[R],z=E[R],P=y[R];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const b=n._createAnimationTracks(I,N,U,z,P);if(b)for(let B=0;B<b.length;B++)x.push(b[B])}const C=new cT(a,void 0,x);return Xi(C,s),C})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){const l=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&l.traverse(function(c){if(c.isMesh)for(let d=0,h=s.weights.length;d<h;d++)c.morphTargetInfluences[d]=s.weights[d]}),l})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],a=n._loadNodeShallow(e),l=[],c=s.children||[];for(let h=0,m=c.length;h<m;h++)l.push(n.getDependency("node",c[h]));const d=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(l),d]).then(function(h){const m=h[0],p=h[1],g=h[2];g!==null&&m.traverse(function(v){v.isSkinnedMesh&&v.bind(g,Jb)});for(let v=0,S=p.length;v<S;v++)m.add(p[v]);return m})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],l=a.name?s.createUniqueName(a.name):"",c=[],d=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&c.push(d),a.camera!==void 0&&c.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)}),this.nodeCache[e]=Promise.all(c).then(function(h){let m;if(a.isBone===!0?m=new ux:h.length>1?m=new Mn:h.length===1?m=h[0]:m=new zt,m!==h[0])for(let p=0,g=h.length;p<g;p++)m.add(h[p]);if(a.name&&(m.userData.name=a.name,m.name=l),Xi(m,a),a.extensions&&Es(n,m,a),a.matrix!==void 0){const p=new lt;p.fromArray(a.matrix),m.applyMatrix4(p)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);if(!s.associations.has(m))s.associations.set(m,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){const p=s.associations.get(m);s.associations.set(m,{...p})}return s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,a=new Mn;n.name&&(a.name=s.createUniqueName(n.name)),Xi(a,n),n.extensions&&Es(t,a,n);const l=n.nodes||[],c=[];for(let d=0,h=l.length;d<h;d++)c.push(s.getDependency("node",l[d]));return Promise.all(c).then(function(d){for(let m=0,p=d.length;m<p;m++)a.add(d[m]);const h=m=>{const p=new Map;for(const[g,v]of s.associations)(g instanceof _i||g instanceof fn)&&p.set(g,v);return m.traverse(g=>{const v=s.associations.get(g);v!=null&&p.set(g,v)}),p};return s.associations=h(a),a})}_createAnimationTracks(e,t,n,s,a){const l=[],c=e.name?e.name:e.uuid,d=[];jr[a.path]===jr.weights?e.traverse(function(g){g.morphTargetInfluences&&d.push(g.name?g.name:g.uuid)}):d.push(c);let h;switch(jr[a.path]){case jr.weights:h=jo;break;case jr.rotation:h=Yo;break;case jr.translation:case jr.scale:h=qo;break;default:switch(n.itemSize){case 1:h=jo;break;case 2:case 3:default:h=qo;break}break}const m=s.interpolation!==void 0?Yb[s.interpolation]:cl,p=this._getArrayFromAccessor(n);for(let g=0,v=d.length;g<v;g++){const S=new h(d[g]+"."+jr[a.path],t.array,p,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),l.push(S)}return l}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=op(t.constructor),s=new Float32Array(t.length);for(let a=0,l=t.length;a<l;a++)s[a]=t[a]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Yo?jb:Ex;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tC(i,e,t){const n=e.attributes,s=new yr;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],d=c.min,h=c.max;if(d!==void 0&&h!==void 0){if(s.set(new D(d[0],d[1],d[2]),new D(h[0],h[1],h[2])),c.normalized){const m=op(Bo[c.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const c=new D,d=new D;for(let h=0,m=a.length;h<m;h++){const p=a[h];if(p.POSITION!==void 0){const g=t.json.accessors[p.POSITION],v=g.min,S=g.max;if(v!==void 0&&S!==void 0){if(d.setX(Math.max(Math.abs(v[0]),Math.abs(S[0]))),d.setY(Math.max(Math.abs(v[1]),Math.abs(S[1]))),d.setZ(Math.max(Math.abs(v[2]),Math.abs(S[2]))),g.normalized){const E=op(Bo[g.componentType]);d.multiplyScalar(E)}c.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}i.boundingBox=s;const l=new Ki;s.getCenter(l.center),l.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=l}function Gv(i,e,t){const n=e.attributes,s=[];function a(l,c){return t.getDependency("accessor",l).then(function(d){i.setAttribute(c,d)})}for(const l in n){const c=sp[l]||l.toLowerCase();c in i.attributes||s.push(a(n[l],c))}if(e.indices!==void 0&&!i.index){const l=t.getDependency("accessor",e.indices).then(function(c){i.setIndex(c)});s.push(l)}return Pt.workingColorSpace!==Hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Pt.workingColorSpace}" not supported.`),Xi(i,e),tC(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?$b(i,e.targets,t):i})}/*!
 * @pixiv/three-vrm v3.4.4
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var Ku=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Dt=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Wv=class extends zt{constructor(i){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${i}`,this.expressionName=i,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(i){this._binds.push(i)}deleteBind(i){const e=this._binds.indexOf(i);e>=0&&this._binds.splice(e,1)}applyWeight(i){var e;let t=this.outputWeight;t*=(e=i?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(i=>i.clearAppliedWeight())}};function Tx(i,e,t){var n,s;const a=i.parser.json,l=(n=a.nodes)==null?void 0:n[e];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const c=l.mesh;if(c==null)return null;const d=(s=a.meshes)==null?void 0:s[c];if(d==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${c}] of glTF but the mesh doesn't exist`),null;const h=d.primitives.length,m=[];return t.traverse(p=>{m.length<h&&p.isMesh&&m.push(p)}),m}function Xv(i,e){return Dt(this,null,function*(){const t=yield i.parser.getDependency("node",e);return Tx(i,e,t)})}function jv(i){return Dt(this,null,function*(){const e=yield i.parser.getDependencies("node"),t=new Map;return e.forEach((n,s)=>{const a=Tx(i,s,n);a!=null&&t.set(s,a)}),t})}var ap={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function wx(i){return Math.max(Math.min(i,1),0)}var Yv=class Ax{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(ap));return Object.entries(this._expressionMap).forEach(([n,s])=>{t.has(n)&&(e[n]=s)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(ap));return Object.entries(this._expressionMap).forEach(([n,s])=>{t.has(n)||(e[n]=s)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new Ax().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const n=this.getExpression(e);return(t=n?.weight)!=null?t:null}setValue(e,t){const n=this.getExpression(e);n&&(n.weight=wx(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1;const s=t.expressionName;this.blinkExpressionNames.indexOf(s)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(s)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(s)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(s=>{e-=s.overrideBlinkAmount,t-=s.overrideLookAtAmount,n-=s.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},qa={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",RimColor:"rimColor",OutlineColor:"outlineColor"},nC={_Color:qa.Color,_EmissionColor:qa.EmissionColor,_ShadeColor:qa.ShadeColor,_RimColor:qa.RimColor,_OutlineColor:qa.OutlineColor},iC=new Ze,Rx=class bx{constructor({material:e,type:t,targetValue:n,targetAlpha:s}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=s??1;const a=this._initColorBindState(),l=this._initAlphaBindState();this._state={color:a,alpha:l}}applyWeight(e){const{color:t,alpha:n}=this._state;if(t!=null){const{propertyName:s,deltaValue:a}=t,l=this.material[s];l?.add(iC.copy(a).multiplyScalar(e))}if(n!=null){const{propertyName:s,deltaValue:a}=n;this.material[s]!=null&&(this.material[s]+=a*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:n,initialValue:s}=e,a=this.material[n];a?.copy(s)}if(t!=null){const{propertyName:n,initialValue:s}=t;this.material[n]!=null&&(this.material[n]=s)}}_initColorBindState(){var e,t,n;const{material:s,type:a,targetValue:l}=this,c=this._getPropertyNameMap(),d=(t=(e=c?.[a])==null?void 0:e[0])!=null?t:null;if(d==null)return console.warn(`Tried to add a material color bind to the material ${(n=s.name)!=null?n:"(no name)"}, the type ${a} but the material or the type is not supported.`),null;const m=s[d].clone(),p=new Ze(l.r-m.r,l.g-m.g,l.b-m.b);return{propertyName:d,initialValue:m,deltaValue:p}}_initAlphaBindState(){var e,t,n;const{material:s,type:a,targetAlpha:l}=this,c=this._getPropertyNameMap(),d=(t=(e=c?.[a])==null?void 0:e[1])!=null?t:null;if(d==null&&l!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=s.name)!=null?n:"(no name)"}, the type ${a} but the material or the type does not support alpha.`),null;if(d==null)return null;const h=s[d],m=l-h;return{propertyName:d,initialValue:h,deltaValue:m}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(bx._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};Rx._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var qv=Rx,gc=class{constructor({primitives:i,index:e,weight:t}){this.primitives=i,this.index=e,this.weight=t}applyWeight(i){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*i)})}clearAppliedWeight(){this.primitives.forEach(i=>{var e;((e=i.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(i.morphTargetInfluences[this.index]=0)})}},$v=new Je,Cx=class Px{constructor({material:e,scale:t,offset:n}){var s,a;this.material=e,this.scale=t,this.offset=n;const l=(s=Object.entries(Px._propertyNamesMap).find(([c])=>e[c]===!0))==null?void 0:s[1];l==null?(console.warn(`Tried to add a texture transform bind to the material ${(a=e.name)!=null?a:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],l.forEach(c=>{var d;const h=(d=e[c])==null?void 0:d.clone();if(!h)return null;e[c]=h;const m=h.offset.clone(),p=h.repeat.clone(),g=n.clone().sub(m),v=t.clone().sub(p);this._properties.push({name:c,initialOffset:m,deltaOffset:g,initialScale:p,deltaScale:v})}))}applyWeight(e){this._properties.forEach(t=>{const n=this.material[t.name];n!==void 0&&(n.offset.add($v.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add($v.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};Cx._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var Kv=Cx,rC=new Set(["1.0","1.0-beta"]),Lx=class Ix{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return Dt(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return Dt(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const n=yield this._v0Import(e);return n||null})}_v1Import(e){return Dt(this,null,function*(){var t,n;const s=this.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const l=(n=s.extensions)==null?void 0:n.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!rC.has(c))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const d=l.expressions;if(!d)return null;const h=new Set(Object.values(ap)),m=new Map;d.preset!=null&&Object.entries(d.preset).forEach(([g,v])=>{if(v!=null){if(!h.has(g)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${g}" detected. Ignoring the expression`);return}m.set(g,v)}}),d.custom!=null&&Object.entries(d.custom).forEach(([g,v])=>{if(h.has(g)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${g}". Ignoring the expression`);return}m.set(g,v)});const p=new Yv;return yield Promise.all(Array.from(m.entries()).map(g=>Dt(this,[g],function*([v,S]){var E,y,x,C,R,T,I;const N=new Wv(v);if(e.scene.add(N),N.isBinary=(E=S.isBinary)!=null?E:!1,N.overrideBlink=(y=S.overrideBlink)!=null?y:"none",N.overrideLookAt=(x=S.overrideLookAt)!=null?x:"none",N.overrideMouth=(C=S.overrideMouth)!=null?C:"none",(R=S.morphTargetBinds)==null||R.forEach(U=>Dt(this,null,function*(){var z;if(U.node===void 0||U.index===void 0)return;const P=yield Xv(e,U.node),b=U.index;if(!P.every(B=>Array.isArray(B.morphTargetInfluences)&&b<B.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${S.name} attempts to index morph #${b} but not found.`);return}N.addBind(new gc({primitives:P,index:b,weight:(z=U.weight)!=null?z:1}))})),S.materialColorBinds||S.textureTransformBinds){const U=[];e.scene.traverse(z=>{const P=z.material;P&&(Array.isArray(P)?U.push(...P):U.push(P))}),(T=S.materialColorBinds)==null||T.forEach(z=>Dt(this,null,function*(){U.filter(b=>{var B;const Y=(B=this.parser.associations.get(b))==null?void 0:B.materials;return z.material===Y}).forEach(b=>{N.addBind(new qv({material:b,type:z.type,targetValue:new Ze().fromArray(z.targetValue),targetAlpha:z.targetValue[3]}))})})),(I=S.textureTransformBinds)==null||I.forEach(z=>Dt(this,null,function*(){U.filter(b=>{var B;const Y=(B=this.parser.associations.get(b))==null?void 0:B.materials;return z.material===Y}).forEach(b=>{var B,Y;N.addBind(new Kv({material:b,offset:new Je().fromArray((B=z.offset)!=null?B:[0,0]),scale:new Je().fromArray((Y=z.scale)!=null?Y:[1,1])}))})}))}p.registerExpression(N)}))),p})}_v0Import(e){return Dt(this,null,function*(){var t;const n=this.parser.json,s=(t=n.extensions)==null?void 0:t.VRM;if(!s)return null;const a=s.blendShapeMaster;if(!a)return null;const l=new Yv,c=a.blendShapeGroups;if(!c)return l;const d=new Set;return yield Promise.all(c.map(h=>Dt(this,null,function*(){var m;const p=h.presetName,g=p!=null&&Ix.v0v1PresetNameMap[p]||null,v=g??h.name;if(v==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(d.has(v)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${p} has duplicated entries. Ignoring the expression`);return}d.add(v);const S=new Wv(v);e.scene.add(S),S.isBinary=(m=h.isBinary)!=null?m:!1,h.binds&&h.binds.forEach(y=>Dt(this,null,function*(){var x;if(y.mesh===void 0||y.index===void 0)return;const C=[];(x=n.nodes)==null||x.forEach((T,I)=>{T.mesh===y.mesh&&C.push(I)});const R=y.index;yield Promise.all(C.map(T=>Dt(this,null,function*(){var I;const N=yield Xv(e,T);if(!N.every(U=>Array.isArray(U.morphTargetInfluences)&&R<U.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${h.name} attempts to index ${R}th morph but not found.`);return}S.addBind(new gc({primitives:N,index:R,weight:.01*((I=y.weight)!=null?I:100)}))})))}));const E=h.materialValues;E&&E.length!==0&&E.forEach(y=>{if(y.materialName===void 0||y.propertyName===void 0||y.targetValue===void 0)return;const x=[];e.scene.traverse(R=>{if(R.material){const T=R.material;Array.isArray(T)?x.push(...T.filter(I=>(I.name===y.materialName||I.name===y.materialName+" (Outline)")&&x.indexOf(I)===-1)):T.name===y.materialName&&x.indexOf(T)===-1&&x.push(T)}});const C=y.propertyName;x.forEach(R=>{if(C==="_MainTex_ST"){const I=new Je(y.targetValue[0],y.targetValue[1]),N=new Je(y.targetValue[2],y.targetValue[3]);N.y=1-N.y-I.y,S.addBind(new Kv({material:R,scale:I,offset:N}));return}const T=nC[C];if(T){S.addBind(new qv({material:R,type:T,targetValue:new Ze().fromArray(y.targetValue),targetAlpha:y.targetValue[3]}));return}console.warn(C+" is not supported")})}),l.registerExpression(S)}))),l})}};Lx.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var sC=Lx,Op=class Do{constructor(e,t){this._firstPersonOnlyLayer=Do.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Do.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Do(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Do.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Do.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(s=>{n.type==="firstPersonOnly"?(s.layers.set(this._firstPersonOnlyLayer),s.traverse(a=>a.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(s.layers.set(this._thirdPersonOnlyLayer),s.traverse(a=>a.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(s)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,s){let a=0;if(t!=null&&t.length>0)for(let l=0;l<e.length;l+=3){const c=e[l],d=e[l+1],h=e[l+2],m=t[c],p=n[c];if(m[0]>0&&s.includes(p[0])||m[1]>0&&s.includes(p[1])||m[2]>0&&s.includes(p[2])||m[3]>0&&s.includes(p[3]))continue;const g=t[d],v=n[d];if(g[0]>0&&s.includes(v[0])||g[1]>0&&s.includes(v[1])||g[2]>0&&s.includes(v[2])||g[3]>0&&s.includes(v[3]))continue;const S=t[h],E=n[h];S[0]>0&&s.includes(E[0])||S[1]>0&&s.includes(E[1])||S[2]>0&&s.includes(E[2])||S[3]>0&&s.includes(E[3])||(e[a++]=c,e[a++]=d,e[a++]=h)}return a}_createErasedMesh(e,t){const n=new lx(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);const s=n.geometry,a=s.getAttribute("skinIndex"),l=a instanceof fv?[]:a.array,c=[];for(let E=0;E<l.length;E+=4)c.push([l[E],l[E+1],l[E+2],l[E+3]]);const d=s.getAttribute("skinWeight"),h=d instanceof fv?[]:d.array,m=[];for(let E=0;E<h.length;E+=4)m.push([h[E],h[E+1],h[E+2],h[E+3]]);const p=s.getIndex();if(!p)throw new Error("The geometry doesn't have an index buffer");const g=Array.from(p.array),v=this._excludeTriangles(g,m,c,t),S=[];for(let E=0;E<v;E++)S[E]=g[E];return s.setIndex(S),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new Ko(e.skeleton.bones,e.skeleton.boneInverses),new lt),n}_createHeadlessModelForSkinnedMesh(e,t){const n=[];if(t.skeleton.bones.forEach((a,l)=>{this._isEraseTarget(a)&&n.push(l)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const s=this._createErasedMesh(t,n);e.add(s)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new Mn;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{const s=n;this._createHeadlessModelForSkinnedMesh(t,s)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Op.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Op.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var Zv=Op,oC=new Set(["1.0","1.0-beta"]),aC=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(i){this.parser=i}afterRoot(i){return Dt(this,null,function*(){const e=i.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");i.userData.vrmFirstPerson=yield this._import(i,e)}})}_import(i,e){return Dt(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(i,e);if(t)return t;const n=yield this._v0Import(i,e);return n||null})}_v1Import(i,e){return Dt(this,null,function*(){var t,n;const s=this.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const l=(n=s.extensions)==null?void 0:n.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!oC.has(c))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const d=l.firstPerson,h=[],m=yield jv(i);return Array.from(m.entries()).forEach(([p,g])=>{var v,S;const E=(v=d?.meshAnnotations)==null?void 0:v.find(y=>y.node===p);h.push({meshes:g,type:(S=E?.type)!=null?S:"auto"})}),new Zv(e,h)})}_v0Import(i,e){return Dt(this,null,function*(){var t;const n=this.parser.json,s=(t=n.extensions)==null?void 0:t.VRM;if(!s)return null;const a=s.firstPerson;if(!a)return null;const l=[],c=yield jv(i);return Array.from(c.entries()).forEach(([d,h])=>{const m=n.nodes[d],p=a.meshAnnotations?a.meshAnnotations.find(g=>g.mesh===m.mesh):void 0;l.push({meshes:h,type:this._convertV0FlagToV1Type(p?.firstPersonFlag)})}),new Zv(e,l)})}_convertV0FlagToV1Type(i){return i==="FirstPersonOnly"?"firstPersonOnly":i==="ThirdPersonOnly"?"thirdPersonOnly":i==="Both"?"both":"auto"}},Qv=new D,Jv=new D,lC=new vt,e0=class extends Mn{constructor(i){super(),this.vrmHumanoid=i,this._boneAxesMap=new Map,Object.values(i.humanBones).forEach(e=>{const t=new UT(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(i=>{i.geometry.dispose(),i.material.dispose()})}updateMatrixWorld(i){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Qv,lC,Jv);const n=Qv.set(.1,.1,.1).divide(Jv);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(i)}},Zh=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],uC={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function Nx(i){return i.invert?i.invert():i.inverse(),i}var Ts=new D,ws=new vt,lp=class{constructor(i){this.humanBones=i,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const i={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);n&&(Ts.copy(n.position),ws.copy(n.quaternion),i[t]={position:Ts.toArray(),rotation:ws.toArray()})}),i}getPose(){const i={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);if(!n)return;Ts.set(0,0,0),ws.identity();const s=this.restPose[t];s?.position&&Ts.fromArray(s.position).negate(),s?.rotation&&Nx(ws.fromArray(s.rotation)),Ts.add(n.position),ws.premultiply(n.quaternion),i[t]={position:Ts.toArray(),rotation:ws.toArray()}}),i}setPose(i){Object.entries(i).forEach(([e,t])=>{const n=e,s=this.getBoneNode(n);if(!s)return;const a=this.restPose[n];a&&(t?.position&&(s.position.fromArray(t.position),a.position&&s.position.add(Ts.fromArray(a.position))),t?.rotation&&(s.quaternion.fromArray(t.rotation),a.rotation&&s.quaternion.multiply(ws.fromArray(a.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([i,e])=>{const t=this.getBoneNode(i);t&&(e?.position&&t.position.fromArray(e.position),e?.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(i){var e;return(e=this.humanBones[i])!=null?e:void 0}getBoneNode(i){var e,t;return(t=(e=this.humanBones[i])==null?void 0:e.node)!=null?t:null}},Qh=new D,cC=new vt,dC=new D,t0=class Dx extends lp{static _setupTransforms(e){const t=new zt;t.name="VRMHumanoidRig";const n={},s={},a={};Zh.forEach(c=>{var d;const h=e.getBoneNode(c);if(h){const m=new D,p=new vt;h.updateWorldMatrix(!0,!1),h.matrixWorld.decompose(m,p,Qh),n[c]=m,s[c]=h.quaternion.clone();const g=new vt;(d=h.parent)==null||d.matrixWorld.decompose(Qh,g,Qh),a[c]=g}});const l={};return Zh.forEach(c=>{var d;const h=e.getBoneNode(c);if(h){const m=n[c];let p=c,g;for(;g==null&&(p=uC[p],p!=null);)g=n[p];const v=new zt;v.name="Normalized_"+h.name,(p?(d=l[p])==null?void 0:d.node:t).add(v),v.position.copy(m),g&&v.position.sub(g),l[c]={node:v}}}),{rigBones:l,root:t,parentWorldRotations:a,boneRotations:s}}constructor(e){const{rigBones:t,root:n,parentWorldRotations:s,boneRotations:a}=Dx._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=s,this._boneRotations=a}update(){Zh.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const n=this.getBoneNode(e),s=this._parentWorldRotations[e],a=cC.copy(s).invert(),l=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(s).premultiply(a).multiply(l),e==="hips"){const c=n.getWorldPosition(dC);t.parent.updateWorldMatrix(!0,!1);const d=t.parent.matrixWorld,h=c.applyMatrix4(d.invert());t.position.copy(h)}}})}},n0=class Ux{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new lp(e),this._normalizedHumanBones=new t0(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new lp(e.humanBones),this._normalizedHumanBones=new t0(this._rawHumanBones),this}clone(){return new Ux(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},hC={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},fC=new Set(["1.0","1.0-beta"]),i0={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},pC=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(i){return Dt(this,null,function*(){i.userData.vrmHumanoid=yield this._import(i)})}_import(i){return Dt(this,null,function*(){const e=yield this._v1Import(i);if(e)return e;const t=yield this._v0Import(i);return t||null})}_v1Import(i){return Dt(this,null,function*(){var e,t;const n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const a=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!a)return null;const l=a.specVersion;if(!fC.has(l))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${l}"`),null;const c=a.humanoid;if(!c)return null;const d=c.humanBones.leftThumbIntermediate!=null||c.humanBones.rightThumbIntermediate!=null,h={};c.humanBones!=null&&(yield Promise.all(Object.entries(c.humanBones).map(p=>Dt(this,[p],function*([g,v]){let S=g;const E=v.node;if(d){const x=i0[S];x!=null&&(S=x)}const y=yield this.parser.getDependency("node",E);if(y==null){console.warn(`A glTF node bound to the humanoid bone ${S} (index = ${E}) does not exist`);return}h[S]={node:y}}))));const m=new n0(this._ensureRequiredBonesExist(h),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(m.normalizedHumanBonesRoot),this.helperRoot){const p=new e0(m);this.helperRoot.add(p),p.renderOrder=this.helperRoot.renderOrder}return m})}_v0Import(i){return Dt(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const s=n.humanoid;if(!s)return null;const a={};s.humanBones!=null&&(yield Promise.all(s.humanBones.map(c=>Dt(this,null,function*(){const d=c.bone,h=c.node;if(d==null||h==null)return;const m=yield this.parser.getDependency("node",h);if(m==null){console.warn(`A glTF node bound to the humanoid bone ${d} (index = ${h}) does not exist`);return}const p=i0[d],g=p??d;if(a[g]!=null){console.warn(`Multiple bone entries for ${g} detected (index = ${h}), ignoring duplicated entries.`);return}a[g]={node:m}}))));const l=new n0(this._ensureRequiredBonesExist(a),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(l.normalizedHumanBonesRoot),this.helperRoot){const c=new e0(l);this.helperRoot.add(c),c.renderOrder=this.helperRoot.renderOrder}return l})}_ensureRequiredBonesExist(i){const e=Object.values(hC).filter(t=>i[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return i}},r0=class extends Ht{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new St(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,i=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let i=0;i<64;i++){const e=i/63*this._currentTheta;this._attrPos.setXYZ(i+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<63;i++)this._attrIndex.setXYZ(i*3,0,i+1,i+2);this._attrIndex.needsUpdate=!0}},mC=class extends Ht{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new D,this._currentTail=new D,this._attrPos=new St(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Zu=new vt,s0=new vt,$a=new D,o0=new D,a0=Math.sqrt(2)/2,gC=new vt(0,0,-a0,a0),_C=new D(0,1,0),vC=class extends Mn{constructor(i){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=i;{const e=new r0;e.radius=.5;const t=new gi({color:65280,transparent:!0,opacity:.5,side:fi,depthTest:!1,depthWrite:!1});this._meshPitch=new rn(e,t),this.add(this._meshPitch)}{const e=new r0;e.radius=.5;const t=new gi({color:16711680,transparent:!0,opacity:.5,side:fi,depthTest:!1,depthWrite:!1});this._meshYaw=new rn(e,t),this.add(this._meshYaw)}{const e=new mC;e.radius=.1;const t=new Jr({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Zo(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(i){const e=_t.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=_t.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition($a),this.vrmLookAt.getLookAtWorldQuaternion(Zu),Zu.multiply(this.vrmLookAt.getFaceFrontQuaternion(s0)),this._meshYaw.position.copy($a),this._meshYaw.quaternion.copy(Zu),this._meshPitch.position.copy($a),this._meshPitch.quaternion.copy(Zu),this._meshPitch.quaternion.multiply(s0.setFromAxisAngle(_C,e)),this._meshPitch.quaternion.multiply(gC);const{target:n,autoUpdate:s}=this.vrmLookAt;n!=null&&s&&(n.getWorldPosition(o0).sub($a),this._lineTarget.geometry.tail.copy(o0),this._lineTarget.geometry.update(),this._lineTarget.position.copy($a)),super.updateMatrixWorld(i)}},xC=new D,yC=new D;function up(i,e){return i.matrixWorld.decompose(xC,e,yC),e}function oc(i){return[Math.atan2(-i.z,i.x),Math.atan2(i.y,Math.sqrt(i.x*i.x+i.z*i.z))]}function l0(i){const e=Math.round(i/2/Math.PI);return i-2*Math.PI*e}var u0=new D(0,0,1),MC=new D,SC=new D,EC=new D,TC=new vt,Jh=new vt,c0=new vt,wC=new vt,ef=new ii,Ox=class Fx{constructor(e,t){this.offsetFromHeadBone=new D,this.autoUpdate=!0,this.faceFront=new D(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new vt)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new ii)}getEuler(e){return e.set(_t.DEG2RAD*this._pitch,_t.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new Fx(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return up(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(u0)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,n]=oc(this.faceFront);return ef.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(ef).premultiply(wC.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Jh),this.getFaceFrontQuaternion(c0),e.copy(u0).applyQuaternion(Jh).applyQuaternion(c0).applyEuler(this.getEuler(ef))}lookAt(e){const t=TC.copy(this._restHeadWorldQuaternion).multiply(Nx(this.getLookAtWorldQuaternion(Jh))),n=this.getLookAtWorldPosition(SC),s=EC.copy(e).sub(n).applyQuaternion(t).normalize(),[a,l]=oc(this.faceFront),[c,d]=oc(s),h=l0(c-a),m=l0(l-d);this._yaw=_t.RAD2DEG*h,this._pitch=_t.RAD2DEG*m,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(MC)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Ox.EULER_ORDER="YXZ";var AC=Ox,RC=new D(0,0,1),Hi=new vt,Po=new vt,di=new ii(0,0,0,"YXZ"),ac=class{constructor(i,e,t,n,s){this.humanoid=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=s,this.faceFront=new D(0,0,1),this._restQuatLeftEye=new vt,this._restQuatRightEye=new vt,this._restLeftEyeParentWorldQuat=new vt,this._restRightEyeParentWorldQuat=new vt;const a=this.humanoid.getRawBoneNode("leftEye"),l=this.humanoid.getRawBoneNode("rightEye");a&&(this._restQuatLeftEye.copy(a.quaternion),up(a.parent,this._restLeftEyeParentWorldQuat)),l&&(this._restQuatRightEye.copy(l.quaternion),up(l.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(i,e){const t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),s=this.humanoid.getNormalizedBoneNode("leftEye"),a=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?di.x=-_t.DEG2RAD*this.rangeMapVerticalDown.map(-e):di.x=_t.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?di.y=-_t.DEG2RAD*this.rangeMapHorizontalInner.map(-i):di.y=_t.DEG2RAD*this.rangeMapHorizontalOuter.map(i),Hi.setFromEuler(di),this._getWorldFaceFrontQuat(Po),s.quaternion.copy(Po).multiply(Hi).multiply(Po.invert()),Hi.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(s.quaternion).multiply(Hi).premultiply(Hi.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?di.x=-_t.DEG2RAD*this.rangeMapVerticalDown.map(-e):di.x=_t.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?di.y=-_t.DEG2RAD*this.rangeMapHorizontalOuter.map(-i):di.y=_t.DEG2RAD*this.rangeMapHorizontalInner.map(i),Hi.setFromEuler(di),this._getWorldFaceFrontQuat(Po),a.quaternion.copy(Po).multiply(Hi).multiply(Po.invert()),Hi.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(a.quaternion).multiply(Hi).premultiply(Hi.invert()).multiply(this._restQuatRightEye))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=_t.RAD2DEG*i.y,t=_t.RAD2DEG*i.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(i){if(this.faceFront.distanceToSquared(RC)<.01)return i.identity();const[e,t]=oc(this.faceFront);return di.set(0,.5*Math.PI+e,t,"YZX"),i.setFromEuler(di)}};ac.type="bone";var cp=class{constructor(i,e,t,n,s){this.expressions=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=s}applyYawPitch(i,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),i<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-i))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(i)))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=_t.RAD2DEG*i.y,t=_t.RAD2DEG*i.x;this.applyYawPitch(e,t)}};cp.type="expression";var d0=class{constructor(i,e){this.inputMaxValue=i,this.outputScale=e}map(i){return this.outputScale*wx(i/this.inputMaxValue)}},bC=new Set(["1.0","1.0-beta"]),Qu=.01,CC=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot}afterRoot(i){return Dt(this,null,function*(){const e=i.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=i.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");i.userData.vrmLookAt=yield this._import(i,e,t)}})}_import(i,e,t){return Dt(this,null,function*(){if(e==null||t==null)return null;const n=yield this._v1Import(i,e,t);if(n)return n;const s=yield this._v0Import(i,e,t);return s||null})}_v1Import(i,e,t){return Dt(this,null,function*(){var n,s,a;const l=this.parser.json;if(!(((n=l.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;const d=(s=l.extensions)==null?void 0:s.VRMC_vrm;if(!d)return null;const h=d.specVersion;if(!bC.has(h))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${h}"`),null;const m=d.lookAt;if(!m)return null;const p=m.type==="expression"?1:10,g=this._v1ImportRangeMap(m.rangeMapHorizontalInner,p),v=this._v1ImportRangeMap(m.rangeMapHorizontalOuter,p),S=this._v1ImportRangeMap(m.rangeMapVerticalDown,p),E=this._v1ImportRangeMap(m.rangeMapVerticalUp,p);let y;m.type==="expression"?y=new cp(t,g,v,S,E):y=new ac(e,g,v,S,E);const x=this._importLookAt(e,y);return x.offsetFromHeadBone.fromArray((a=m.offsetFromHeadBone)!=null?a:[0,.06,0]),x})}_v1ImportRangeMap(i,e){var t,n;let s=(t=i?.inputMaxValue)!=null?t:90;const a=(n=i?.outputScale)!=null?n:e;return s<Qu&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),s=Qu),new d0(s,a)}_v0Import(i,e,t){return Dt(this,null,function*(){var n,s,a,l;const d=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!d)return null;const h=d.firstPerson;if(!h)return null;const m=h.lookAtTypeName==="BlendShape"?1:10,p=this._v0ImportDegreeMap(h.lookAtHorizontalInner,m),g=this._v0ImportDegreeMap(h.lookAtHorizontalOuter,m),v=this._v0ImportDegreeMap(h.lookAtVerticalDown,m),S=this._v0ImportDegreeMap(h.lookAtVerticalUp,m);let E;h.lookAtTypeName==="BlendShape"?E=new cp(t,p,g,v,S):E=new ac(e,p,g,v,S);const y=this._importLookAt(e,E);return h.firstPersonBoneOffset?y.offsetFromHeadBone.set((s=h.firstPersonBoneOffset.x)!=null?s:0,(a=h.firstPersonBoneOffset.y)!=null?a:.06,-((l=h.firstPersonBoneOffset.z)!=null?l:0)):y.offsetFromHeadBone.set(0,.06,0),y.faceFront.set(0,0,-1),E instanceof ac&&E.faceFront.set(0,0,-1),y})}_v0ImportDegreeMap(i,e){var t,n;const s=i?.curve;JSON.stringify(s)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let a=(t=i?.xRange)!=null?t:90;const l=(n=i?.yRange)!=null?n:e;return a<Qu&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),a=Qu),new d0(a,l)}_importLookAt(i,e){const t=new AC(i,e);if(this.helperRoot){const n=new vC(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function PC(i,e){return typeof i!="string"||i===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(i)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(i)||/^data:.*,.*$/i.test(i)||/^blob:.*$/i.test(i)?i:e+i)}var LC=new Set(["1.0","1.0-beta"]),IC=class{get name(){return"VRMMetaLoaderPlugin"}constructor(i,e){var t,n,s;this.parser=i,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e?.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(s=e?.acceptV0Meta)!=null?s:!0}afterRoot(i){return Dt(this,null,function*(){i.userData.vrmMeta=yield this._import(i)})}_import(i){return Dt(this,null,function*(){const e=yield this._v1Import(i);if(e!=null)return e;const t=yield this._v0Import(i);return t??null})}_v1Import(i){return Dt(this,null,function*(){var e,t,n;const s=this.parser.json;if(!(((e=s.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const l=(t=s.extensions)==null?void 0:t.VRMC_vrm;if(l==null)return null;const c=l.specVersion;if(!LC.has(c))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const d=l.meta;if(!d)return null;const h=d.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(h))throw new Error(`VRMMetaLoaderPlugin: The license url "${h}" is not accepted`);let p;return this.needThumbnailImage&&d.thumbnailImage!=null&&(p=(n=yield this._extractGLTFImage(d.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:d.name,version:d.version,authors:d.authors,copyrightInformation:d.copyrightInformation,contactInformation:d.contactInformation,references:d.references,thirdPartyLicenses:d.thirdPartyLicenses,thumbnailImage:p,licenseUrl:d.licenseUrl,avatarPermission:d.avatarPermission,allowExcessivelyViolentUsage:d.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:d.allowExcessivelySexualUsage,commercialUsage:d.commercialUsage,allowPoliticalOrReligiousUsage:d.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:d.allowAntisocialOrHateUsage,creditNotation:d.creditNotation,allowRedistribution:d.allowRedistribution,modification:d.modification,otherLicenseUrl:d.otherLicenseUrl}})}_v0Import(i){return Dt(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const s=n.meta;if(!s)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let a;return this.needThumbnailImage&&s.texture!=null&&s.texture!==-1&&(a=yield this.parser.getDependency("texture",s.texture)),{metaVersion:"0",allowedUserName:s.allowedUserName,author:s.author,commercialUssageName:s.commercialUssageName,contactInformation:s.contactInformation,licenseName:s.licenseName,otherLicenseUrl:s.otherLicenseUrl,otherPermissionUrl:s.otherPermissionUrl,reference:s.reference,sexualUssageName:s.sexualUssageName,texture:a??void 0,title:s.title,version:s.version,violentUssageName:s.violentUssageName}})}_extractGLTFImage(i){return Dt(this,null,function*(){var e;const n=(e=this.parser.json.images)==null?void 0:e[i];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image doesn't exist`),null;let s=n.uri;if(n.bufferView!=null){const l=yield this.parser.getDependency("bufferView",n.bufferView),c=new Blob([l],{type:n.mimeType});s=URL.createObjectURL(c)}return s==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new gx().loadAsync(PC(s,this.parser.options.path)).catch(l=>(console.error(l),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},NC=class{constructor(i){this.scene=i.scene,this.meta=i.meta,this.humanoid=i.humanoid,this.expressionManager=i.expressionManager,this.firstPerson=i.firstPerson,this.lookAt=i.lookAt}update(i){this.humanoid.update(),this.lookAt&&this.lookAt.update(i),this.expressionManager&&this.expressionManager.update()}},DC=class extends NC{constructor(i){super(i),this.materials=i.materials,this.springBoneManager=i.springBoneManager,this.nodeConstraintManager=i.nodeConstraintManager}update(i){super.update(i),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(i),this.materials&&this.materials.forEach(e=>{e.update&&e.update(i)})}},UC=Object.defineProperty,h0=Object.getOwnPropertySymbols,OC=Object.prototype.hasOwnProperty,FC=Object.prototype.propertyIsEnumerable,f0=(i,e,t)=>e in i?UC(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,p0=(i,e)=>{for(var t in e||(e={}))OC.call(e,t)&&f0(i,t,e[t]);if(h0)for(var t of h0(e))FC.call(e,t)&&f0(i,t,e[t]);return i},Ns=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),kC={"":3e3,srgb:3001};function BC(i,e){parseInt(Ds,10)>=152?i.colorSpace=e:i.encoding=kC[e]}var VC=class{get pending(){return Promise.all(this._pendings)}constructor(i,e){this._parser=i,this._materialParams=e,this._pendings=[]}assignPrimitive(i,e){e!=null&&(this._materialParams[i]=e)}assignColor(i,e,t){if(e!=null){const n=new Ze().fromArray(e);t&&n.convertSRGBToLinear(),this._materialParams[i]=n}}assignTexture(i,e,t){return Ns(this,null,function*(){const n=Ns(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,i,e),t&&BC(this._materialParams[i],"srgb"))});return this._pendings.push(n),n})}assignTextureByIndex(i,e,t){return Ns(this,null,function*(){return this.assignTexture(i,e!=null?{index:e}:void 0,t)})}},zC=`// #define PHONG

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

}`,HC=`// #define PHONG

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
`,GC={None:"none"},m0={None:"none",ScreenCoordinates:"screenCoordinates"},WC={3e3:"",3001:"srgb"};function tf(i){return parseInt(Ds,10)>=152?i.colorSpace:WC[i.encoding]}var XC=class extends Ii{constructor(i={}){var e;super({vertexShader:zC,fragmentShader:HC}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=Mp,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=GC.None,this._outlineWidthMode=m0.None,this._isOutline=!1,i.transparentWithZWrite&&(i.depthWrite=!0),delete i.transparentWithZWrite,i.fog=!0,i.lights=!0,i.clipping=!0,this.uniforms=nx.merge([Pe.common,Pe.normalmap,Pe.emissivemap,Pe.fog,Pe.lights,{litFactor:{value:new Ze(1,1,1)},mapUvTransform:{value:new ot},colorAlpha:{value:1},normalMapUvTransform:{value:new ot},shadeColorFactor:{value:new Ze(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new ot},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new ot},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Ze(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new ot},parametricRimColorFactor:{value:new Ze(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new ot},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new Ze(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new ot},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new ot},outlineWidthFactor:{value:0},outlineColorFactor:{value:new Ze(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new ot},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=i.uniforms)!=null?e:{}]),this.setValues(i),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${tf(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${tf(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${tf(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const n=parseInt(Ds,10),s=Object.entries(p0(p0({},this._generateDefines()),this.defines)).filter(([a,l])=>!!l).map(([a,l])=>`#define ${a} ${l}`).join(`
`)+`
`;t.vertexShader=s+t.vertexShader,t.fragmentShader=s+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(i){this.uniforms.litFactor.value=i}get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}get normalMap(){return this.uniforms.normalMap.value}set normalMap(i){this.uniforms.normalMap.value=i}get normalScale(){return this.uniforms.normalScale.value}set normalScale(i){this.uniforms.normalScale.value=i}get emissive(){return this.uniforms.emissive.value}set emissive(i){this.uniforms.emissive.value=i}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(i){this.uniforms.emissiveIntensity.value=i}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(i){this.uniforms.emissiveMap.value=i}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(i){this.uniforms.shadeColorFactor.value=i}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(i){this.uniforms.shadeMultiplyTexture.value=i}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(i){this.uniforms.shadingShiftFactor.value=i}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(i){this.uniforms.shadingShiftTexture.value=i}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(i){this.uniforms.shadingShiftTextureScale.value=i}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(i){this.uniforms.shadingToonyFactor.value=i}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(i){this.uniforms.giEqualizationFactor.value=i}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(i){this.uniforms.matcapFactor.value=i}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(i){this.uniforms.matcapTexture.value=i}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(i){this.uniforms.parametricRimColorFactor.value=i}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(i){this.uniforms.rimMultiplyTexture.value=i}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(i){this.uniforms.rimLightingMixFactor.value=i}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(i){this.uniforms.parametricRimFresnelPowerFactor.value=i}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(i){this.uniforms.parametricRimLiftFactor.value=i}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(i){this.uniforms.outlineWidthMultiplyTexture.value=i}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(i){this.uniforms.outlineWidthFactor.value=i}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(i){this.uniforms.outlineColorFactor.value=i}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(i){this.uniforms.outlineLightingMixFactor.value=i}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(i){this.uniforms.uvAnimationMaskTexture.value=i}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(i){this.uniforms.uvAnimationScrollXOffset.value=i}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(i){this.uniforms.uvAnimationScrollYOffset.value=i}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(i){this.uniforms.uvAnimationRotationPhase.value=i}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(i){this._ignoreVertexColor=i,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(i){this._v0CompatShade=i,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(i){this._debugMode=i,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(i){this._outlineWidthMode=i,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(i){this._isOutline=i,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(i){this._uploadUniformsWorkaround(),this._updateUVAnimation(i)}copy(i){return super.copy(i),this.map=i.map,this.normalMap=i.normalMap,this.emissiveMap=i.emissiveMap,this.shadeMultiplyTexture=i.shadeMultiplyTexture,this.shadingShiftTexture=i.shadingShiftTexture,this.matcapTexture=i.matcapTexture,this.rimMultiplyTexture=i.rimMultiplyTexture,this.outlineWidthMultiplyTexture=i.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=i.uvAnimationMaskTexture,this.normalMapType=i.normalMapType,this.uvAnimationScrollXSpeedFactor=i.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=i.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=i.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=i.ignoreVertexColor,this.v0CompatShade=i.v0CompatShade,this.debugMode=i.debugMode,this.outlineWidthMode=i.outlineWidthMode,this.isOutline=i.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(i){this.uniforms.uvAnimationScrollXOffset.value+=i*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=i*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=i*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const i=parseInt(Ds,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:i,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===m0.ScreenCoordinates}}_updateTextureMatrix(i,e){i.value&&(i.value.matrixAutoUpdate&&i.value.updateMatrix(),e.value.copy(i.value.matrix))}},jC=new Set(["1.0","1.0-beta"]),kx=class lc{get name(){return lc.EXTENSION_NAME}constructor(e,t={}){var n,s,a,l;this.parser=e,this.materialType=(n=t.materialType)!=null?n:XC,this.renderOrderOffset=(s=t.renderOrderOffset)!=null?s:0,this.v0CompatShade=(a=t.v0CompatShade)!=null?a:!1,this.debugMode=(l=t.debugMode)!=null?l:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Ns(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Ns(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return Ns(this,null,function*(){var t;const n=this.parser,a=(t=n.json.meshes)==null?void 0:t[e];if(a==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const l=a.primitives,c=yield n.loadMesh(e);if(l.length===1){const d=c,h=l[0].material;h!=null&&this._setupPrimitive(d,h)}else{const d=c;for(let h=0;h<l.length;h++){const m=d.children[h],p=l[h].material;p!=null&&this._setupPrimitive(m,p)}}return c})}_removeUnlitExtensionIfMToonExists(){const n=this.parser.json.materials;n?.map((s,a)=>{var l;this._getMToonExtension(a)&&((l=s.extensions)!=null&&l.KHR_materials_unlit)&&delete s.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;const l=(t=this.parser.json.materials)==null?void 0:t[e];if(l==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const c=(n=l.extensions)==null?void 0:n[lc.EXTENSION_NAME];if(c==null)return;const d=c.specVersion;if(!jC.has(d)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${lc.EXTENSION_NAME} specVersion "${d}"`);return}return c}_extendMaterialParams(e,t){return Ns(this,null,function*(){var n;delete t.metalness,delete t.roughness;const s=new VC(this.parser,t);s.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),s.assignColor("shadeColorFactor",e.shadeColorFactor),s.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),s.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),s.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),s.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),s.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),s.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),s.assignColor("matcapFactor",e.matcapFactor),s.assignTexture("matcapTexture",e.matcapTexture,!0),s.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),s.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),s.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),s.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),s.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),s.assignPrimitive("outlineWidthMode",e.outlineWidthMode),s.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),s.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),s.assignColor("outlineColorFactor",e.outlineColorFactor),s.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),s.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),s.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),s.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),s.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),s.assignPrimitive("v0CompatShade",this.v0CompatShade),s.assignPrimitive("debugMode",this.debugMode),yield s.pending})}_setupPrimitive(e,t){const n=this._getMToonExtension(t);if(n){const s=this._parseRenderOrder(n);e.renderOrder=s+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof _i)||!this._shouldGenerateOutline(t))return;e.material=[t];const n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=In,e.material.push(n);const s=e.geometry,a=s.index?s.index.count:s.attributes.position.count/3;s.addGroup(0,a,0),s.addGroup(0,a,1)}_addToMaterialSet(e){const t=e.material,n=new Set;Array.isArray(t)?t.forEach(s=>n.add(s)):n.add(t);for(const s of n)this._mToonMaterialSet.add(s)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};kx.EXTENSION_NAME="VRMC_materials_mtoon";var YC=kx,qC=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Bx=class dp{get name(){return dp.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return qC(this,null,function*(){const n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const s=n.emissiveMultiplier;t.emissiveIntensity=s})}_getHDREmissiveMultiplierExtension(e){var t,n;const l=(t=this.parser.json.materials)==null?void 0:t[e];if(l==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const c=(n=l.extensions)==null?void 0:n[dp.EXTENSION_NAME];if(c!=null)return c}};Bx.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var $C=Bx,KC=Object.defineProperty,ZC=Object.defineProperties,QC=Object.getOwnPropertyDescriptors,g0=Object.getOwnPropertySymbols,JC=Object.prototype.hasOwnProperty,eP=Object.prototype.propertyIsEnumerable,_0=(i,e,t)=>e in i?KC(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Gi=(i,e)=>{for(var t in e||(e={}))JC.call(e,t)&&_0(i,t,e[t]);if(g0)for(var t of g0(e))eP.call(e,t)&&_0(i,t,e[t]);return i},v0=(i,e)=>ZC(i,QC(e)),tP=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())});function Lo(i){return Math.pow(i,2.2)}var nP=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(i){var e;this.parser=i,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return tP(this,null,function*(){var i;const e=this.parser.json,t=(i=e.extensions)==null?void 0:i.VRM,n=t?.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((s,a)=>{var l,c;const d=(l=e.materials)==null?void 0:l[a];if(d==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${a}] of glTF but the material doesn't exist`);return}if(s.shader==="VRM/MToon"){const h=this._parseV0MToonProperties(s,d);e.materials[a]=h}else if((c=s.shader)!=null&&c.startsWith("VRM/Unlit")){const h=this._parseV0UnlitProperties(s,d);e.materials[a]=h}else s.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${s.shader}`)}))})}_parseV0MToonProperties(i,e){var t,n,s,a,l,c,d,h,m,p,g,v,S,E,y,x,C,R,T,I,N,U,z,P,b,B,Y,ee,de,le,ue,ie,H,ce,ne,V,oe,Ue,ke,me,q,J,ge,Me,Ce,ct,Et,k,Tt,dt,et,Be,Ot,Ve,ut;const Gt=(n=(t=i.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,O=((s=i.floatProperties)==null?void 0:s._ZWrite)===1&&Gt,A=this._v0ParseRenderQueue(i),Q=(l=(a=i.keywordMap)==null?void 0:a._ALPHATEST_ON)!=null?l:!1,fe=Gt?"BLEND":Q?"MASK":"OPAQUE",_e=Q?(d=(c=i.floatProperties)==null?void 0:c._Cutoff)!=null?d:.5:void 0,$e=((m=(h=i.floatProperties)==null?void 0:h._CullMode)!=null?m:2)===0,Se=this._portTextureTransform(i),ze=((g=(p=i.vectorProperties)==null?void 0:p._Color)!=null?g:[1,1,1,1]).map((se,ae)=>ae===3?se:Lo(se)),Ye=(v=i.textureProperties)==null?void 0:v._MainTex,we=Ye!=null?{index:Ye,extensions:Gi({},Se)}:void 0,Ie=(E=(S=i.floatProperties)==null?void 0:S._BumpScale)!=null?E:1,tt=(y=i.textureProperties)==null?void 0:y._BumpMap,je=tt!=null?{index:tt,scale:Ie,extensions:Gi({},Se)}:void 0,Le=((C=(x=i.vectorProperties)==null?void 0:x._EmissionColor)!=null?C:[0,0,0,1]).map(Lo),ht=(R=i.textureProperties)==null?void 0:R._EmissionMap,W=ht!=null?{index:ht,extensions:Gi({},Se)}:void 0,Te=((I=(T=i.vectorProperties)==null?void 0:T._ShadeColor)!=null?I:[.97,.81,.86,1]).map(Lo),Re=(N=i.textureProperties)==null?void 0:N._ShadeTexture,De=Re!=null?{index:Re,extensions:Gi({},Se)}:void 0;let ye=(z=(U=i.floatProperties)==null?void 0:U._ShadeShift)!=null?z:0,pe=(b=(P=i.floatProperties)==null?void 0:P._ShadeToony)!=null?b:.9;pe=_t.lerp(pe,1,.5+.5*ye),ye=-ye-(1-pe);const He=(Y=(B=i.floatProperties)==null?void 0:B._IndirectLightIntensity)!=null?Y:.1,ft=He?1-He:void 0,Lt=(ee=i.textureProperties)==null?void 0:ee._SphereAdd,bt=Lt!=null?[1,1,1]:void 0,Gn=Lt!=null?{index:Lt}:void 0,gn=(le=(de=i.floatProperties)==null?void 0:de._RimLightingMix)!=null?le:0,Zi=(ue=i.textureProperties)==null?void 0:ue._RimTexture,Nn=Zi!=null?{index:Zi,extensions:Gi({},Se)}:void 0,es=((H=(ie=i.vectorProperties)==null?void 0:ie._RimColor)!=null?H:[0,0,0,1]).map(Lo),Ui=(ne=(ce=i.floatProperties)==null?void 0:ce._RimFresnelPower)!=null?ne:1,Qi=(oe=(V=i.floatProperties)==null?void 0:V._RimLift)!=null?oe:0,vi=["none","worldCoordinates","screenCoordinates"][(ke=(Ue=i.floatProperties)==null?void 0:Ue._OutlineWidthMode)!=null?ke:0];let Oi=(q=(me=i.floatProperties)==null?void 0:me._OutlineWidth)!=null?q:0;Oi=.01*Oi;const Ji=(J=i.textureProperties)==null?void 0:J._OutlineWidthTexture,Fs=Ji!=null?{index:Ji,extensions:Gi({},Se)}:void 0,ks=((Me=(ge=i.vectorProperties)==null?void 0:ge._OutlineColor)!=null?Me:[0,0,0]).map(Lo),Bs=((ct=(Ce=i.floatProperties)==null?void 0:Ce._OutlineColorMode)!=null?ct:0)===1?(k=(Et=i.floatProperties)==null?void 0:Et._OutlineLightingMix)!=null?k:1:0,ts=(Tt=i.textureProperties)==null?void 0:Tt._UvAnimMaskTexture,na=ts!=null?{index:ts,extensions:Gi({},Se)}:void 0,Vs=(et=(dt=i.floatProperties)==null?void 0:dt._UvAnimScrollX)!=null?et:0;let er=(Ot=(Be=i.floatProperties)==null?void 0:Be._UvAnimScrollY)!=null?Ot:0;er!=null&&(er=-er);const L=(ut=(Ve=i.floatProperties)==null?void 0:Ve._UvAnimRotation)!=null?ut:0,$={specVersion:"1.0",transparentWithZWrite:O,renderQueueOffsetNumber:A,shadeColorFactor:Te,shadeMultiplyTexture:De,shadingShiftFactor:ye,shadingToonyFactor:pe,giEqualizationFactor:ft,matcapFactor:bt,matcapTexture:Gn,rimLightingMixFactor:gn,rimMultiplyTexture:Nn,parametricRimColorFactor:es,parametricRimFresnelPowerFactor:Ui,parametricRimLiftFactor:Qi,outlineWidthMode:vi,outlineWidthFactor:Oi,outlineWidthMultiplyTexture:Fs,outlineColorFactor:ks,outlineLightingMixFactor:Bs,uvAnimationMaskTexture:na,uvAnimationScrollXSpeedFactor:Vs,uvAnimationScrollYSpeedFactor:er,uvAnimationRotationSpeedFactor:L};return v0(Gi({},e),{pbrMetallicRoughness:{baseColorFactor:ze,baseColorTexture:we},normalTexture:je,emissiveTexture:W,emissiveFactor:Le,alphaMode:fe,alphaCutoff:_e,doubleSided:$e,extensions:{VRMC_materials_mtoon:$}})}_parseV0UnlitProperties(i,e){var t,n,s,a,l;const c=i.shader==="VRM/UnlitTransparentZWrite",d=i.shader==="VRM/UnlitTransparent"||c,h=this._v0ParseRenderQueue(i),m=i.shader==="VRM/UnlitCutout",p=d?"BLEND":m?"MASK":"OPAQUE",g=m?(n=(t=i.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,v=this._portTextureTransform(i),S=((a=(s=i.vectorProperties)==null?void 0:s._Color)!=null?a:[1,1,1,1]).map(Lo),E=(l=i.textureProperties)==null?void 0:l._MainTex,y=E!=null?{index:E,extensions:Gi({},v)}:void 0,x={specVersion:"1.0",transparentWithZWrite:c,renderQueueOffsetNumber:h,shadeColorFactor:S,shadeMultiplyTexture:y};return v0(Gi({},e),{pbrMetallicRoughness:{baseColorFactor:S,baseColorTexture:y},alphaMode:p,alphaCutoff:g,extensions:{VRMC_materials_mtoon:x}})}_portTextureTransform(i){var e,t,n,s,a;const l=(e=i.vectorProperties)==null?void 0:e._MainTex;if(l==null)return{};const c=[(t=l?.[0])!=null?t:0,(n=l?.[1])!=null?n:0],d=[(s=l?.[2])!=null?s:1,(a=l?.[3])!=null?a:1];return c[1]=1-d[1]-c[1],{KHR_texture_transform:{offset:c,scale:d}}}_v0ParseRenderQueue(i){var e,t;const n=i.shader==="VRM/UnlitTransparentZWrite",s=((e=i.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||n,a=((t=i.floatProperties)==null?void 0:t._ZWrite)===1||n;let l=0;if(s){const c=i.renderQueue;c!=null&&(a?l=this._renderQueueMapTransparentZWrite.get(c):l=this._renderQueueMapTransparent.get(c))}return l}_populateRenderQueueMap(i){const e=new Set,t=new Set;i.forEach(n=>{var s,a;const l=n.shader==="VRM/UnlitTransparentZWrite",c=((s=n.keywordMap)==null?void 0:s._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||l,d=((a=n.floatProperties)==null?void 0:a._ZWrite)===1||l;if(c){const h=n.renderQueue;h!=null&&(d?t.add(h):e.add(h))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,s)=>{const a=Math.min(Math.max(s-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,a)}),Array.from(t).sort().forEach((n,s)=>{const a=Math.min(Math.max(s,0),9);this._renderQueueMapTransparentZWrite.set(n,a)})}},x0=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Yr=new D,nf=class extends Mn{constructor(i){super(),this._attrPosition=new St(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(iE);const e=new Ht;e.setAttribute("position",this._attrPosition);const t=new Jr({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Sc(e,t),this.add(this._line),this.constraint=i}updateMatrixWorld(i){Yr.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,Yr.x,Yr.y,Yr.z),this.constraint.source&&Yr.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,Yr.x,Yr.y,Yr.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(i)}};function y0(i,e){return e.set(i.elements[12],i.elements[13],i.elements[14])}var iP=new D,rP=new D;function sP(i,e){return i.decompose(iP,e,rP),e}function _c(i){return i.invert?i.invert():i.inverse(),i}var Fp=class{constructor(i,e){this.destination=i,this.source=e,this.weight=1}},oP=new D,aP=new D,lP=new D,uP=new vt,cP=new vt,dP=new vt,hP=class extends Fp{get aimAxis(){return this._aimAxis}set aimAxis(i){this._aimAxis=i,this._v3AimAxis.set(i==="PositiveX"?1:i==="NegativeX"?-1:0,i==="PositiveY"?1:i==="NegativeY"?-1:0,i==="PositiveZ"?1:i==="NegativeZ"?-1:0)}get dependencies(){const i=new Set([this.source]);return this.destination.parent&&i.add(this.destination.parent),i}constructor(i,e){super(i,e),this._aimAxis="PositiveX",this._v3AimAxis=new D(1,0,0),this._dstRestQuat=new vt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const i=uP.identity(),e=cP.identity();this.destination.parent&&(sP(this.destination.parent.matrixWorld,i),_c(e.copy(i)));const t=oP.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(i),n=y0(this.source.matrixWorld,aP).sub(y0(this.destination.matrixWorld,lP)).normalize(),s=dP.setFromUnitVectors(t,n).premultiply(e).multiply(i).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(s,this.weight)}};function fP(i,e){const t=[i];let n=i.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(s=>{e(s)})}var pP=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(i){this._constraints.add(i);let e=this._objectConstraintsMap.get(i.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(i.destination,e)),e.add(i)}deleteConstraint(i){this._constraints.delete(i),this._objectConstraintsMap.get(i.destination).delete(i)}setInitState(){const i=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,i,e,n=>n.setInitState())}update(){const i=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,i,e,n=>n.update())}_processConstraint(i,e,t,n){if(t.has(i))return;if(e.has(i))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(i);const s=i.dependencies;for(const a of s)fP(a,l=>{const c=this._objectConstraintsMap.get(l);if(c)for(const d of c)this._processConstraint(d,e,t,n)});n(i),t.add(i)}},mP=new vt,gP=new vt,_P=class extends Fp{get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._dstRestQuat=new vt,this._invSrcRestQuat=new vt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),_c(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const i=mP.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=gP.copy(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},vP=new D,xP=new vt,yP=new vt,MP=class extends Fp{get rollAxis(){return this._rollAxis}set rollAxis(i){this._rollAxis=i,this._v3RollAxis.set(i==="X"?1:0,i==="Y"?1:0,i==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._rollAxis="X",this._v3RollAxis=new D(1,0,0),this._dstRestQuat=new vt,this._invDstRestQuat=new vt,this._invSrcRestQuatMulDstRestQuat=new vt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),_c(this._invDstRestQuat.copy(this._dstRestQuat)),_c(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const i=xP.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=vP.copy(this._v3RollAxis).applyQuaternion(i),n=yP.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},SP=new Set(["1.0","1.0-beta"]),Vx=class tl{get name(){return tl.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return x0(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return x0(this,null,function*(){var t;const n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(tl.EXTENSION_NAME))!==-1))return null;const a=new pP,l=yield this.parser.getDependencies("node");return l.forEach((c,d)=>{var h;const m=n.nodes[d],p=(h=m?.extensions)==null?void 0:h[tl.EXTENSION_NAME];if(p==null)return;const g=p.specVersion;if(!SP.has(g)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${tl.EXTENSION_NAME} specVersion "${g}"`);return}const v=p.constraint;if(v.roll!=null){const S=this._importRollConstraint(c,l,v.roll);a.addConstraint(S)}else if(v.aim!=null){const S=this._importAimConstraint(c,l,v.aim);a.addConstraint(S)}else if(v.rotation!=null){const S=this._importRotationConstraint(c,l,v.rotation);a.addConstraint(S)}}),e.scene.updateMatrixWorld(),a.setInitState(),a})}_importRollConstraint(e,t,n){const{source:s,rollAxis:a,weight:l}=n,c=t[s],d=new MP(e,c);if(a!=null&&(d.rollAxis=a),l!=null&&(d.weight=l),this.helperRoot){const h=new nf(d);this.helperRoot.add(h)}return d}_importAimConstraint(e,t,n){const{source:s,aimAxis:a,weight:l}=n,c=t[s],d=new hP(e,c);if(a!=null&&(d.aimAxis=a),l!=null&&(d.weight=l),this.helperRoot){const h=new nf(d);this.helperRoot.add(h)}return d}_importRotationConstraint(e,t,n){const{source:s,weight:a}=n,l=t[s],c=new _P(e,l);if(a!=null&&(c.weight=a),this.helperRoot){const d=new nf(c);this.helperRoot.add(d)}return c}};Vx.EXTENSION_NAME="VRMC_node_constraint";var EP=Vx,Ju=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),kp=class{},rf=new D,As=new D,zx=class extends kp{get type(){return"capsule"}constructor(i){var e,t,n,s;super(),this.offset=(e=i?.offset)!=null?e:new D(0,0,0),this.tail=(t=i?.tail)!=null?t:new D(0,0,0),this.radius=(n=i?.radius)!=null?n:0,this.inside=(s=i?.inside)!=null?s:!1}calculateCollision(i,e,t,n){rf.setFromMatrixPosition(i),As.subVectors(this.tail,this.offset).applyMatrix4(i),As.sub(rf);const s=As.lengthSq();n.copy(e).sub(rf);const a=As.dot(n);a<=0||(s<=a||As.multiplyScalar(a/s),n.sub(As));const l=n.length(),c=this.inside?this.radius-t-l:l-t-this.radius;return c<0&&(n.multiplyScalar(1/l),this.inside&&n.negate()),c}},sf=new D,M0=new ot,Hx=class extends kp{get type(){return"plane"}constructor(i){var e,t;super(),this.offset=(e=i?.offset)!=null?e:new D(0,0,0),this.normal=(t=i?.normal)!=null?t:new D(0,0,1)}calculateCollision(i,e,t,n){n.setFromMatrixPosition(i),n.negate().add(e),M0.getNormalMatrix(i),sf.copy(this.normal).applyNormalMatrix(M0).normalize();const s=n.dot(sf)-t;return n.copy(sf),s}},TP=new D,Gx=class extends kp{get type(){return"sphere"}constructor(i){var e,t,n;super(),this.offset=(e=i?.offset)!=null?e:new D(0,0,0),this.radius=(t=i?.radius)!=null?t:0,this.inside=(n=i?.inside)!=null?n:!1}calculateCollision(i,e,t,n){n.subVectors(e,TP.setFromMatrixPosition(i));const s=n.length(),a=this.inside?this.radius-t-s:s-t-this.radius;return a<0&&(n.multiplyScalar(1/s),this.inside&&n.negate()),a}},Wi=new D,wP=class extends Ht{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new D,this._currentTail=new D,this._shape=i,this._attrPos=new St(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0);const t=Wi.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),i=!0),i&&this._buildPosition()}_buildPosition(){Wi.copy(this._currentTail).sub(this._currentOffset);const i=Wi.length()/this._currentRadius;for(let n=0;n<=16;n++){const s=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(s),-Math.cos(s),0),this._attrPos.setXYZ(17+n,i+Math.sin(s),Math.cos(s),0),this._attrPos.setXYZ(34+n,-Math.sin(s),0,-Math.cos(s)),this._attrPos.setXYZ(51+n,i+Math.sin(s),0,Math.cos(s))}for(let n=0;n<32;n++){const s=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(s),Math.cos(s)),this._attrPos.setXYZ(100+n,i,Math.sin(s),Math.cos(s))}const e=Math.atan2(Wi.y,Math.sqrt(Wi.x*Wi.x+Wi.z*Wi.z)),t=-Math.atan2(Wi.z,Wi.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<34;i++){const e=(i+1)%34;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(68+i*2,34+i,34+e)}for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(136+i*2,68+i,68+e),this._attrIndex.setXY(200+i*2,100+i,100+e)}this._attrIndex.needsUpdate=!0}},AP=class extends Ht{constructor(i){super(),this.worldScale=1,this._currentOffset=new D,this._currentNormal=new D,this._shape=i,this._attrPos=new St(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},RP=class extends Ht{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new D,this._shape=i,this._attrPos=new St(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.needsUpdate=!0}},bP=new D,of=class extends Mn{constructor(i){if(super(),this.matrixAutoUpdate=!1,this.collider=i,this.collider.shape instanceof Gx)this._geometry=new RP(this.collider.shape);else if(this.collider.shape instanceof zx)this._geometry=new wP(this.collider.shape);else if(this.collider.shape instanceof Hx)this._geometry=new AP(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new Jr({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Zo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=bP.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},CP=class extends Ht{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new D,this._springBone=i,this._attrPos=new St(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new St(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},PP=new D,LP=class extends Mn{constructor(i){super(),this.matrixAutoUpdate=!1,this.springBone=i,this._geometry=new CP(this.springBone);const e=new Jr({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Zo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=PP.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},af=class extends zt{constructor(i){super(),this.colliderMatrix=new lt,this.shape=i}updateWorldMatrix(i,e){super.updateWorldMatrix(i,e),IP(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function IP(i,e,t){const n=e.elements;i.copy(e),t&&(i.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],i.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],i.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}var NP=new lt;function DP(i){return i.invert?i.invert():i.getInverse(NP.copy(i)),i}var UP=class{constructor(i){this._inverseCache=new lt,this._shouldUpdateInverse=!0,this.matrix=i;const e={set:(t,n,s)=>(this._shouldUpdateInverse=!0,t[n]=s,!0)};this._originalElements=i.elements,i.elements=new Proxy(i.elements,e)}get inverse(){return this._shouldUpdateInverse&&(DP(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},lf=new lt,Io=new D,Ka=new D,Za=new D,Qa=new D,OP=new lt,FP=class{constructor(i,e,t={},n=[]){this._currentTail=new D,this._prevTail=new D,this._boneAxis=new D,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new lt,this._initialLocalRotation=new vt,this._initialLocalChildPosition=new D;var s,a,l,c,d,h;this.bone=i,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(s=t.hitRadius)!=null?s:0,stiffness:(a=t.stiffness)!=null?a:1,gravityPower:(l=t.gravityPower)!=null?l:0,gravityDir:(d=(c=t.gravityDir)==null?void 0:c.clone())!=null?d:new D(0,-1,0),dragForce:(h=t.dragForce)!=null?h:.4},this.colliderGroups=n}get dependencies(){const i=new Set,e=this.bone.parent;e&&i.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)i.add(this.colliderGroups[t].colliders[n]);return i}get center(){return this._center}set center(i){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=i,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new UP(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:lf}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail)}update(i){if(i<=0)return;this._calcWorldSpaceBoneLength();const e=Ka.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Qa.copy(this._currentTail).add(Io.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*i).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*i),Za.setFromMatrixPosition(this.bone.matrixWorld),Qa.sub(Za).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Za),this._collision(Qa),this._prevTail.copy(this._currentTail),this._currentTail.copy(Qa).applyMatrix4(this._getMatrixWorldToCenter());const t=OP.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,Io.copy(Qa).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(i){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){const n=this.colliderGroups[e].colliders[t],s=n.shape.calculateCollision(n.colliderMatrix,i,this.settings.hitRadius,Io);if(s<0){i.addScaledVector(Io,-s),i.sub(Za);const a=i.length();i.multiplyScalar(this._worldSpaceBoneLength/a).add(Za)}}}_calcWorldSpaceBoneLength(){Io.setFromMatrixPosition(this.bone.matrixWorld),this.child?Ka.setFromMatrixPosition(this.child.matrixWorld):(Ka.copy(this._initialLocalChildPosition),Ka.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=Io.sub(Ka).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:lf}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:lf}};function kP(i,e){const t=[];let n=i;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(s=>{e(s)})}function hp(i,e){i.children.forEach(t=>{e(t)||hp(t,e)})}function BP(i){var e;const t=new Map;for(const n of i){let s=n;do{const a=((e=t.get(s))!=null?e:0)+1;if(a===i.size)return s;t.set(s,a),s=s.parent}while(s!==null)}return null}var S0=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const i=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{i.add(t)})}),Array.from(i)}get colliders(){const i=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{i.add(t)})}),Array.from(i)}addJoint(i){this._joints.add(i);let e=this._objectSpringBonesMap.get(i.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(i.bone,e)),e.add(i),this._isSortedJointsDirty=!0}addSpringBone(i){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(i)}deleteJoint(i){this._joints.delete(i),this._objectSpringBonesMap.get(i.bone).delete(i),this._isSortedJointsDirty=!0}deleteSpringBone(i){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(i)}setInitState(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){const e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){const e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(i){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(i),hp(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;const i=[],e=new Set,t=new Set,n=new Set;for(const a of this._joints)this._insertJointSort(a,e,t,i,n);this._sortedJoints=i;const s=BP(n);this._ancestors=[],s&&(this._ancestors.push(s),hp(s,a=>{var l,c;return((c=(l=this._objectSpringBonesMap.get(a))==null?void 0:l.size)!=null?c:0)>0?!0:(this._ancestors.push(a),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(i,e,t,n,s){if(t.has(i))return;if(e.has(i)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(i);const a=i.dependencies;for(const l of a){let c=!1,d=null;kP(l,h=>{const m=this._objectSpringBonesMap.get(h);if(m)for(const p of m)c=!0,this._insertJointSort(p,e,t,n,s);else c||(d=h)}),d&&s.add(d)}n.push(i),t.add(i)}_relevantChildrenUpdated(i){var e,t;return((t=(e=this._objectSpringBonesMap.get(i))==null?void 0:e.size)!=null?t:0)>0?!0:(i.updateWorldMatrix(!1,!1),!1)}},E0="VRMC_springBone_extended_collider",VP=new Set(["1.0","1.0-beta"]),zP=new Set(["1.0"]),Wx=class Uo{get name(){return Uo.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(n=t?.useExtendedColliders)!=null?n:!0}afterRoot(e){return Ju(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Ju(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const n=yield this._v0Import(e);return n??null})}_v1Import(e){return Ju(this,null,function*(){var t,n,s,a,l;const c=e.parser.json;if(!(((t=c.extensionsUsed)==null?void 0:t.indexOf(Uo.EXTENSION_NAME))!==-1))return null;const h=new S0,m=yield e.parser.getDependencies("node"),p=(n=c.extensions)==null?void 0:n[Uo.EXTENSION_NAME];if(!p)return null;const g=p.specVersion;if(!VP.has(g))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Uo.EXTENSION_NAME} specVersion "${g}"`),null;const v=(s=p.colliders)==null?void 0:s.map((E,y)=>{var x,C,R,T,I,N,U,z,P,b,B,Y,ee,de,le;const ue=m[E.node];if(ue==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${y} attempted to use the node #${E.node} but not found`),null;const ie=E.shape,H=(x=E.extensions)==null?void 0:x[E0];if(this.useExtendedColliders&&H!=null){const ce=H.specVersion;if(!zP.has(ce))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${E0} specVersion "${ce}". Fallbacking to the ${Uo.EXTENSION_NAME} definition`);else{const ne=H.shape;if(ne.sphere)return this._importSphereCollider(ue,{offset:new D().fromArray((C=ne.sphere.offset)!=null?C:[0,0,0]),radius:(R=ne.sphere.radius)!=null?R:0,inside:(T=ne.sphere.inside)!=null?T:!1});if(ne.capsule)return this._importCapsuleCollider(ue,{offset:new D().fromArray((I=ne.capsule.offset)!=null?I:[0,0,0]),radius:(N=ne.capsule.radius)!=null?N:0,tail:new D().fromArray((U=ne.capsule.tail)!=null?U:[0,0,0]),inside:(z=ne.capsule.inside)!=null?z:!1});if(ne.plane)return this._importPlaneCollider(ue,{offset:new D().fromArray((P=ne.plane.offset)!=null?P:[0,0,0]),normal:new D().fromArray((b=ne.plane.normal)!=null?b:[0,0,1])})}}if(ie.sphere)return this._importSphereCollider(ue,{offset:new D().fromArray((B=ie.sphere.offset)!=null?B:[0,0,0]),radius:(Y=ie.sphere.radius)!=null?Y:0,inside:!1});if(ie.capsule)return this._importCapsuleCollider(ue,{offset:new D().fromArray((ee=ie.capsule.offset)!=null?ee:[0,0,0]),radius:(de=ie.capsule.radius)!=null?de:0,tail:new D().fromArray((le=ie.capsule.tail)!=null?le:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${y} has no valid shape`)}),S=(a=p.colliderGroups)==null?void 0:a.map((E,y)=>{var x;return{colliders:((x=E.colliders)!=null?x:[]).flatMap(R=>{const T=v?.[R];return T??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${y} attempted to use a collider #${R} but not found`),[])}),name:E.name}});return(l=p.springs)==null||l.forEach((E,y)=>{var x;const C=E.joints,R=(x=E.colliderGroups)==null?void 0:x.map(N=>{const U=S?.[N];if(U==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${y} attempted to use a colliderGroup ${N} but not found`);return U}),T=E.center!=null?m[E.center]:void 0;let I;C.forEach(N=>{if(I){const U=I.node,z=m[U],P=N.node,b=m[P],B={hitRadius:I.hitRadius,dragForce:I.dragForce,gravityPower:I.gravityPower,stiffness:I.stiffness,gravityDir:I.gravityDir!=null?new D().fromArray(I.gravityDir):void 0},Y=this._importJoint(z,b,B,R);T&&(Y.center=T),h.addJoint(Y)}I=N})}),h.setInitState(),h})}_v0Import(e){return Ju(this,null,function*(){var t,n,s;const a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const c=(n=a.extensions)==null?void 0:n.VRM,d=c?.secondaryAnimation;if(!d)return null;const h=d?.boneGroups;if(!h)return null;const m=new S0,p=yield e.parser.getDependencies("node"),g=(s=d.colliderGroups)==null?void 0:s.map(v=>{var S;const E=p[v.node];return{colliders:((S=v.colliders)!=null?S:[]).map((x,C)=>{var R,T,I;const N=new D(0,0,0);return x.offset&&N.set((R=x.offset.x)!=null?R:0,(T=x.offset.y)!=null?T:0,x.offset.z?-x.offset.z:0),this._importSphereCollider(E,{offset:N,radius:(I=x.radius)!=null?I:0,inside:!1})})}});return h?.forEach((v,S)=>{const E=v.bones;E&&E.forEach(y=>{var x,C,R,T;const I=p[y],N=new D;v.gravityDir?N.set((x=v.gravityDir.x)!=null?x:0,(C=v.gravityDir.y)!=null?C:0,(R=v.gravityDir.z)!=null?R:0):N.set(0,-1,0);const U=v.center!=null?p[v.center]:void 0,z={hitRadius:v.hitRadius,dragForce:v.dragForce,gravityPower:v.gravityPower,stiffness:v.stiffiness,gravityDir:N},P=(T=v.colliderGroups)==null?void 0:T.map(b=>{const B=g?.[b];if(B==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${S} attempted to use a colliderGroup ${b} but not found`);return B});I.traverse(b=>{var B;const Y=(B=b.children[0])!=null?B:null,ee=this._importJoint(b,Y,z,P);U&&(ee.center=U),m.addJoint(ee)})})}),e.scene.updateMatrixWorld(),m.setInitState(),m})}_importJoint(e,t,n,s){const a=new FP(e,t,n,s);if(this.jointHelperRoot){const l=new LP(a);this.jointHelperRoot.add(l),l.renderOrder=this.jointHelperRoot.renderOrder}return a}_importSphereCollider(e,t){const n=new Gx(t),s=new af(n);if(e.add(s),this.colliderHelperRoot){const a=new of(s);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importCapsuleCollider(e,t){const n=new zx(t),s=new af(n);if(e.add(s),this.colliderHelperRoot){const a=new of(s);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importPlaneCollider(e,t){const n=new Hx(t),s=new af(n);if(e.add(s),this.colliderHelperRoot){const a=new of(s);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return s}};Wx.EXTENSION_NAME="VRMC_springBone";var HP=Wx,GP=class{get name(){return"VRMLoaderPlugin"}constructor(i,e){var t,n,s,a,l,c,d,h,m,p;this.parser=i;const g=e?.helperRoot,v=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new sC(i),this.firstPersonPlugin=(n=e?.firstPersonPlugin)!=null?n:new aC(i),this.humanoidPlugin=(s=e?.humanoidPlugin)!=null?s:new pC(i,{helperRoot:g,autoUpdateHumanBones:v}),this.lookAtPlugin=(a=e?.lookAtPlugin)!=null?a:new CC(i,{helperRoot:g}),this.metaPlugin=(l=e?.metaPlugin)!=null?l:new IC(i),this.mtoonMaterialPlugin=(c=e?.mtoonMaterialPlugin)!=null?c:new YC(i),this.materialsHDREmissiveMultiplierPlugin=(d=e?.materialsHDREmissiveMultiplierPlugin)!=null?d:new $C(i),this.materialsV0CompatPlugin=(h=e?.materialsV0CompatPlugin)!=null?h:new nP(i),this.springBonePlugin=(m=e?.springBonePlugin)!=null?m:new HP(i,{colliderHelperRoot:g,jointHelperRoot:g}),this.nodeConstraintPlugin=(p=e?.nodeConstraintPlugin)!=null?p:new EP(i,{helperRoot:g})}beforeRoot(){return Ku(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(i){return Ku(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(i)})}getMaterialType(i){const e=this.mtoonMaterialPlugin.getMaterialType(i);return e??null}extendMaterialParams(i,e){return Ku(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(i,e),yield this.mtoonMaterialPlugin.extendMaterialParams(i,e)})}afterRoot(i){return Ku(this,null,function*(){yield this.metaPlugin.afterRoot(i),yield this.humanoidPlugin.afterRoot(i),yield this.expressionPlugin.afterRoot(i),yield this.lookAtPlugin.afterRoot(i),yield this.firstPersonPlugin.afterRoot(i),yield this.springBonePlugin.afterRoot(i),yield this.nodeConstraintPlugin.afterRoot(i),yield this.mtoonMaterialPlugin.afterRoot(i);const e=i.userData.vrmMeta,t=i.userData.vrmHumanoid;if(e&&t){const n=new DC({scene:i.scene,expressionManager:i.userData.vrmExpressionManager,firstPerson:i.userData.vrmFirstPerson,humanoid:t,lookAt:i.userData.vrmLookAt,meta:e,materials:i.userData.vrmMToonMaterials,springBoneManager:i.userData.vrmSpringBoneManager,nodeConstraintManager:i.userData.vrmNodeConstraintManager});i.userData.vrm=n}})}};function WP(i){const e=new Set;return i.traverse(t=>{if(!t.isMesh)return;const n=t;e.add(n)}),e}function T0(i,e,t){if(e.size===1){const l=e.values().next().value;if(l.weight===1)return i[l.index]}const n=new Float32Array(i[0].count*3);let s=0;if(t)s=1;else for(const l of e)s+=l.weight;for(const l of e){const c=i[l.index],d=l.weight/s;for(let h=0;h<c.count;h++)n[h*3+0]+=c.getX(h)*d,n[h*3+1]+=c.getY(h)*d,n[h*3+2]+=c.getZ(h)*d}return new St(n,3)}function XP(i){var e;const t=WP(i.scene),n=new Map,s=(e=i.expressionManager)==null?void 0:e.expressionMap;if(s!=null)for(const[a,l]of Object.entries(s)){const c=new Set;for(const d of l.binds)if(d instanceof gc){if(d.weight!==0)for(const h of d.primitives){let m=n.get(h);m==null&&(m=new Map,n.set(h,m));let p=m.get(a);p==null&&(p=new Set,m.set(a,p)),p.add(d)}c.add(d)}for(const d of c)l.deleteBind(d)}for(const a of t){const l=n.get(a);if(l==null)continue;const c=a.geometry.morphAttributes;a.geometry.morphAttributes={};const d=a.geometry.clone();a.geometry=d;const h=d.morphTargetsRelative,m=c.position!=null,p=c.normal!=null,g={},v={},S=[];if(m||p){m&&(g.position=[]),p&&(g.normal=[]);let E=0;for(const[y,x]of l)m&&(g.position[E]=T0(c.position,x,h)),p&&(g.normal[E]=T0(c.normal,x,h)),s?.[y].addBind(new gc({index:E,weight:1,primitives:[a]})),v[y]=E,S.push(0),E++}d.morphAttributes=g,a.morphTargetDictionary=v,a.morphTargetInfluences=S}}function vc(i,e,t){if(i.getComponent)return i.getComponent(e,t);{let n=i.array[e*i.itemSize+t];return i.normalized&&(n=_t.denormalize(n,i.array)),n}}function Xx(i,e,t,n){i.setComponent?i.setComponent(e,t,n):(i.normalized&&(n=_t.normalize(n,i.array)),i.array[e*i.itemSize+t]=n)}function jP(i){var e;const t=YP(i),n=new Set;for(const p of t)n.has(p.geometry)&&(p.geometry=JP(p.geometry)),n.add(p.geometry);const s=new Map;for(const p of n){const g=p.getAttribute("skinIndex"),v=(e=s.get(g))!=null?e:new Map;s.set(g,v);const S=p.getAttribute("skinWeight"),E=qP(g,S);v.set(S,E)}const a=new Map;for(const p of t){const g=$P(p,s);a.set(p,g)}const l=[];for(const[p,g]of a){let v=!1;for(const S of l)if(KP(g,S.boneInverseMap)){v=!0,S.meshes.add(p);for(const[y,x]of g)S.boneInverseMap.set(y,x);break}v||l.push({boneInverseMap:g,meshes:new Set([p])})}const c=new Map,d=new uf,h=new uf,m=new uf;for(const p of l){const{boneInverseMap:g,meshes:v}=p,S=Array.from(g.keys()),E=Array.from(g.values()),y=new Ko(S,E),x=h.getOrCreate(y);for(const C of v){const R=C.geometry.getAttribute("skinIndex"),T=d.getOrCreate(R),I=C.skeleton.bones,N=I.map(P=>m.getOrCreate(P)).join(","),U=`${T};${x};${N}`;let z=c.get(U);z==null&&(z=R.clone(),ZP(z,I,S),c.set(U,z)),C.geometry.setAttribute("skinIndex",z)}for(const C of v)C.bind(y,new lt)}}function YP(i){const e=new Set;return i.traverse(t=>{if(!t.isSkinnedMesh)return;const n=t;e.add(n)}),e}function qP(i,e){const t=new Set;for(let n=0;n<i.count;n++)for(let s=0;s<i.itemSize;s++){const a=vc(i,n,s);vc(e,n,s)!==0&&t.add(a)}return t}function $P(i,e){const t=new Map,n=i.skeleton,s=i.geometry,a=s.getAttribute("skinIndex"),l=s.getAttribute("skinWeight"),c=e.get(a),d=c?.get(l);if(!d)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(const h of d)t.set(n.bones[h],n.boneInverses[h]);return t}function KP(i,e){for(const[t,n]of i.entries()){const s=e.get(t);if(s!=null&&!QP(n,s))return!1}return!0}function ZP(i,e,t){const n=new Map;for(const a of e)n.set(a,n.size);const s=new Map;for(const[a,l]of t.entries()){const c=n.get(l);s.set(c,a)}for(let a=0;a<i.count;a++)for(let l=0;l<i.itemSize;l++){const c=vc(i,a,l),d=s.get(c);Xx(i,a,l,d)}i.needsUpdate=!0}function QP(i,e,t){if(t=t||1e-4,i.elements.length!=e.elements.length)return!1;for(let n=0,s=i.elements.length;n<s;n++)if(Math.abs(i.elements[n]-e.elements[n])>t)return!1;return!0}var uf=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(i){return this._objectIndexMap.get(i)}getOrCreate(i){let e=this._objectIndexMap.get(i);return e==null&&(e=this._index,this._objectIndexMap.set(i,e),this._index++),e}};function JP(i){var e,t,n,s;const a=new Ht;a.name=i.name,a.setIndex(i.index);for(const[l,c]of Object.entries(i.attributes))a.setAttribute(l,c);for(const[l,c]of Object.entries(i.morphAttributes)){const d=l;a.morphAttributes[d]=c.concat()}a.morphTargetsRelative=i.morphTargetsRelative,a.groups=[];for(const l of i.groups)a.addGroup(l.start,l.count,l.materialIndex);return a.boundingSphere=(t=(e=i.boundingSphere)==null?void 0:e.clone())!=null?t:null,a.boundingBox=(s=(n=i.boundingBox)==null?void 0:n.clone())!=null?s:null,a.drawRange.start=i.drawRange.start,a.drawRange.count=i.drawRange.count,a.userData=i.userData,a}function w0(i){if(Object.values(i).forEach(e=>{e?.isTexture&&e.dispose()}),i.isShaderMaterial){const e=i.uniforms;e&&Object.values(e).forEach(t=>{const n=t.value;n?.isTexture&&n.dispose()})}i.dispose()}function eL(i){const e=i.geometry;e&&e.dispose();const t=i.skeleton;t&&t.dispose();const n=i.material;n&&(Array.isArray(n)?n.forEach(s=>w0(s)):n&&w0(n))}function tL(i){i.traverse(eL)}function nL(i,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");const s=(t=e?.experimentalSameBoneCounts)!=null?t:!1,a=[];i.traverse(d=>{d.type==="SkinnedMesh"&&a.push(d)});const l=new Map;let c=0;for(const d of a){const m=d.geometry.getAttribute("skinIndex");if(l.has(m))continue;const p=new Map,g=new Map;for(let v=0;v<m.count;v++)for(let S=0;S<m.itemSize;S++){const E=vc(m,v,S);let y=p.get(E);y==null&&(y=p.size,p.set(E,y),g.set(y,E)),Xx(m,v,S,y)}m.needsUpdate=!0,l.set(m,g),c=Math.max(c,p.size)}for(const d of a){const m=d.geometry.getAttribute("skinIndex"),p=l.get(m),g=[],v=[],S=s?c:p.size;for(let y=0;y<S;y++){const x=(n=p.get(y))!=null?n:0;g.push(d.skeleton.bones[x]),v.push(d.skeleton.boneInverses[x])}const E=new Ko(g,v);d.bind(E,new lt)}}function iL(i){const e=new Map;i.traverse(t=>{var n,s,a,l;if(!t.isMesh)return;const c=t,d=c.geometry,h=d.index;if(h==null)return;const m=e.get(d);if(m!=null){c.geometry=m;return}const p=Object.values(d.attributes)[0].count,g=new Array(p);let v=0;const S=h.array;for(let T=0;T<S.length;T++){const I=S[T];g[I]||(g[I]=!0,v++)}if(v===p)return;const E=[],y=[];let x=0;for(let T=0;T<g.length;T++)if(g[T]){const I=x++;E[T]=I,y[I]=T}const C=new Ht;C.name=d.name,C.morphTargetsRelative=d.morphTargetsRelative,d.groups.forEach(T=>{C.addGroup(T.start,T.count,T.materialIndex)}),C.boundingBox=(s=(n=d.boundingBox)==null?void 0:n.clone())!=null?s:null,C.boundingSphere=(l=(a=d.boundingSphere)==null?void 0:a.clone())!=null?l:null,C.setDrawRange(d.drawRange.start,d.drawRange.count),C.userData=d.userData,e.set(d,C);{const T=h.array,I=new T.constructor(T.length);for(let N=0;N<T.length;N++){const U=T[N],z=E[U];I[N]=z}C.setIndex(new St(I,1,!1))}Object.keys(d.attributes).forEach(T=>{const I=d.attributes[T];if(I.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const N=I.array,{itemSize:U,normalized:z}=I,P=new N.constructor(y.length*U);y.forEach((b,B)=>{for(let Y=0;Y<U;Y++)P[B*U+Y]=N[b*U+Y]}),C.setAttribute(T,new St(P,U,z))});let R=!0;for(const[T,I]of Object.entries(d.morphAttributes)){const N=T;C.morphAttributes[N]=[];for(let U=0;U<I.length;U++){const z=I[U];if(z.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const P=z.array,{itemSize:b,normalized:B}=z,Y=new P.constructor(y.length*b);y.forEach((ee,de)=>{for(let le=0;le<b;le++)Y[de*b+le]=P[ee*b+le]}),R=R&&Y.every(ee=>ee===0),C.morphAttributes[N][U]=new St(Y,b,B)}}R&&(C.morphAttributes={}),c.geometry=C}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function rL(i){var e;((e=i.meta)==null?void 0:e.metaVersion)==="0"&&(i.scene.rotation.y=Math.PI)}var qi=class{constructor(){}};qi.combineMorphs=XP;qi.combineSkeletons=jP;qi.deepDispose=tL;qi.removeUnnecessaryJoints=nL;qi.removeUnnecessaryVertices=iL;qi.rotateVRM0=rL;/*!
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
 */const cf=1.6;async function sL(i){const e=new Mb;e.register(s=>new GP(s));const t=await e.parseAsync(i,""),n=t.userData.vrm;if(!n)throw new Error("VRMファイルではないようです");return qi.removeUnnecessaryVertices(t.scene),qi.combineSkeletons(t.scene),qi.rotateVRM0(n),n.scene.traverse(s=>s.frustumCulled=!1),n}class oL{root=new Mn;body=new Mn;vrm=null;spirit;aura;mood="idle";moodWeight={happy:0,thinking:0,talking:0};blinkTimer=2;blinkPhase=-1;lookTarget=new zt;height=cf;constructor(){this.root.add(this.body),this.spirit=new aL,this.body.add(this.spirit.group),this.aura=Up("#3d9dff",1.6,.45),this.aura.position.y=-.05,this.aura.scale.set(1.4,.45,1),this.root.add(this.aura)}setVrm(e){if(this.vrm&&(this.body.remove(this.vrm.scene),qi.deepDispose(this.vrm.scene)),this.vrm=e,this.spirit.group.visible=!e,e){this.body.add(e.scene),e.lookAt&&(e.lookAt.target=this.lookTarget);const t=e.humanoid.getNormalizedBoneNode("head");this.root.updateMatrixWorld(!0),this.height=t?this.body.worldToLocal(t.getWorldPosition(new D)).y+.15:cf}else this.height=cf}get hasVrm(){return!!this.vrm}setMood(e){this.mood=e}headPosition(e){return e.set(0,this.height*1.02,0).applyMatrix4(this.body.matrixWorld)}update(e,t,n){const s=1-Math.exp(-e*8);for(const d of["happy","thinking","talking"])this.moodWeight[d]+=((this.mood===d?1:0)-this.moodWeight[d])*s;const a=this.updateBlink(e),l=this.moodWeight.talking*(.35+.35*Math.sin(t*17)*Math.sin(t*5.3));this.body.position.y=.06+Math.sin(t*1.4)*.05,this.body.rotation.z=Math.sin(t*.7)*.03+this.moodWeight.thinking*.08,this.body.rotation.x=n*.12;const c=Math.sin(t*2.2);this.aura.material.opacity=.35+.1*Math.sin(t*1.4)+this.moodWeight.happy*.2,this.vrm?this.poseVrm(this.vrm,e,t,c,a,Math.max(0,l)):this.spirit.update(t,a,Math.max(0,l),this.moodWeight)}updateBlink(e){return this.blinkPhase<0?(this.blinkTimer-=e,this.blinkTimer<=0&&(this.blinkPhase=0),0):(this.blinkPhase+=e/.16,this.blinkPhase>=1?(this.blinkPhase=-1,this.blinkTimer=_t.randFloat(1.8,5.5),0):Math.sin(this.blinkPhase*Math.PI))}poseVrm(e,t,n,s,a,l){const c=e.humanoid,d=S=>c.getNormalizedBoneNode(S),{happy:h,thinking:m,talking:p}=this.moodWeight,g=Math.sin(n*1.1)*.05;d("leftUpperArm")?.rotation.set(0,0,-1.35+g-h*.15),d("rightUpperArm")?.rotation.set(0,0,1.35-g+h*.15),d("leftLowerArm")?.rotation.set(0,-.25-m*.3,0),d("rightLowerArm")?.rotation.set(0,.25+m*1.4,0),d("rightHand")?.rotation.set(0,0,m*.4),d("leftUpperLeg")?.rotation.set(.08+Math.sin(n*1.4)*.03,0,.03),d("rightUpperLeg")?.rotation.set(.14+Math.sin(n*1.4+1)*.03,0,-.03),d("leftLowerLeg")?.rotation.set(-.12,0,0),d("rightLowerLeg")?.rotation.set(-.25,0,0),d("spine")?.rotation.set(s*.015,0,0),d("chest")?.rotation.set(s*.02,0,0),d("neck")?.rotation.set(p*Math.sin(n*3)*.04,0,0),d("head")?.rotation.set(-m*.15,0,m*.18+Math.sin(n*.6)*.03);const v=e.expressionManager;v&&(v.setValue("blink",h>.5?0:a),v.setValue("happy",h*.9),v.setValue("relaxed",m*.4),v.setValue("aa",l)),e.update(t)}}class aL{group=new Mn;head;eyes=[];mouth;ring;core;constructor(){const e=new Ni({color:"#9fd4ff",emissive:"#1a4f9c",emissiveIntensity:.6,roughness:.15,transmission:.35,transparent:!0,opacity:.92});this.head=new rn(new pl(.3,48,32),e),this.head.position.y=1.18,this.group.add(this.head);const t=new gi({color:"#f4fbff"});for(const a of[-.12,.12]){const l=new rn(new wp(.03,.06,4,12),t);l.position.set(a,.02,.28),this.head.add(l),this.eyes.push(l)}this.mouth=new rn(new Ap(.035,20),new gi({color:"#ffd59a"})),this.mouth.position.set(0,-.1,.295),this.head.add(this.mouth);const n=[[0,.12],[.1,.13],[.2,.2],[.27,.32],[.29,.45],[.24,.62],[.16,.78],[.1,.88],[0,.92]].map(([a,l])=>new Je(a,l)),s=new rn(new Rp(n,48),e);this.group.add(s),this.ring=new rn(new bp(.46,.012,8,80),new gi({color:"#ffb347",transparent:!0,opacity:.85})),this.ring.position.y=1.18,this.ring.rotation.x=Math.PI/2.4,this.ring.scale.setScalar(.85),this.group.add(this.ring),this.core=Up("#ffcf7a",.45,.9),this.core.position.y=.5,this.group.add(this.core)}update(e,t,n,s){for(const a of this.eyes)a.scale.y=Math.max(.08,1-t)*(1-s.happy*.6);this.mouth.scale.set(1+s.happy*.6,.4+n*2.2+s.happy*.3,1),this.ring.rotation.z=e*(.6+s.thinking*2.5),this.head.rotation.z=s.thinking*.2+Math.sin(e*.6)*.04,this.head.rotation.x=-s.thinking*.15,this.core.material.opacity=.7+.25*Math.sin(e*2.2)+s.happy*.2}}const A0=35,df=10;function lL(){const i=navigator.hardwareConcurrency??4,e=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&innerWidth<1100;return i>=8&&!e?"high":"low"}class uL{constructor(e,t={}){this.canvas=e,this.events=t,this.quality=lL(),this.pixelRatio=Math.min(devicePixelRatio,this.quality==="high"?2:1.5),this.renderer=new vb({canvas:e,antialias:this.quality==="high",alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.outputColorSpace=hn,this.camera.position.set(0,0,df),this.scene.add(new ST("#a9c4ff",.35));const n=new np("#ffffff",2.4);n.position.set(1,2,3),this.scene.add(n);const s=new np("#4aa8ff",1.2);s.position.set(-2,1,-2),this.scene.add(s),this.background=new yb(this.quality),this.scene.add(this.background.group),this.scene.add(this.companion.root),this.scene.add(this.companion.lookTarget),this.resize(),this.companion.root.position.set(0,-this.visible.h*.25,0),this.target.copy(this.companion.root.position),addEventListener("resize",this.resize),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerdown",this.onPointerDown),document.addEventListener("visibilitychange",this.onVisibility),this.loop()}renderer;scene=new XE;camera=new Vn(A0,1,.1,300);clock=new wT;background;companion=new oL;frame=0;quality;pixelRatio;powerSave=!1;visible={w:1,h:1};reserveBottom=0;target=new D;velocity=new D;nextMove=0;hold=0;pointer=new Je(0,0);fps={frames:0,time:0};tmp=new D;disposed=!1;dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),removeEventListener("resize",this.resize),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerdown",this.onPointerDown),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.dispose()}async setVrmData(e){const t=e?await sL(e):null;this.disposed||(this.companion.setVrm(t),this.applyScale())}setMood(e){this.companion.setMood(e),e!=="idle"&&(this.hold=2.5)}setPowerSave(e){this.powerSave=e,this.renderer.setPixelRatio(e?1:this.pixelRatio),this.resize()}setReserveBottom(e){this.reserveBottom=e,this.clampTarget()}onVisibility=()=>{cancelAnimationFrame(this.frame),document.hidden||(this.clock.getDelta(),this.loop())};onPointerMove=e=>{this.pointer.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1)};onPointerDown=e=>{this.onPointerMove(e);const t=this.companion.root,n=this.companion.height*t.scale.y,s=this.toScreen(this.tmp.set(t.position.x,t.position.y+n*.5,0)),a=this.toScreen(this.tmp.set(t.position.x,t.position.y+n,0)),l=Math.abs(s.y-a.y);if(Math.abs(e.clientX-s.x)<l*.6&&Math.abs(e.clientY-s.y)<l*1.05)this.events.onTap?.();else{const c=this.fromScreen(e.clientX,e.clientY);this.target.set(c.x,c.y-n*.5,0),this.clampTarget(),this.nextMove=this.clock.elapsedTime+6}};toScreen(e){return e.project(this.camera),{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}}fromScreen(e,t){return new D((e/innerWidth*2-1)*(this.visible.w/2),(-(t/innerHeight)*2+1)*(this.visible.h/2),0)}resize=()=>{const e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.visible.h=2*df*Math.tan(_t.degToRad(A0/2)),this.visible.w=this.visible.h*this.camera.aspect,this.background.layout(this.camera.aspect),this.applyScale(),this.powerSave&&this.renderer.render(this.scene,this.camera)};applyScale(){const e=this.camera.aspect<1?.36:.5,t=this.visible.h*e/this.companion.height;this.companion.root.scale.setScalar(t),this.clampTarget()}bounds(){const e=this.companion.height*this.companion.root.scale.y,t=this.visible.w/2,n=this.visible.h/2,s=Math.min(e*.3,t*.4),a=-n+this.visible.h*this.reserveBottom,l=Math.max(a,n-e*1.05-this.visible.h*.17);return{minX:-t+s,maxX:t-s,minY:a,maxY:l}}clampTarget(){const e=this.bounds();this.target.x=_t.clamp(this.target.x,e.minX,e.maxX),this.target.y=_t.clamp(this.target.y,e.minY,e.maxY)}pickTarget(){const e=this.bounds();this.target.set(_t.randFloat(e.minX,e.maxX),_t.randFloat(e.minY,e.maxY),0)}loop=()=>{this.frame=requestAnimationFrame(this.loop);const e=Math.min(this.clock.getDelta(),.1),t=this.clock.elapsedTime;this.watchFps(e),this.hold=Math.max(0,this.hold-e),t>this.nextMove&&this.hold===0&&(this.pickTarget(),this.nextMove=t+_t.randFloat(5,11));const n=this.companion.root,a=this.tmp.copy(this.target).sub(n.position).multiplyScalar(this.hold>0?.3:.8).clampLength(0,1.6);this.velocity.lerp(a,1-Math.exp(-e*2)),n.position.addScaledVector(this.velocity,e);const l=this.velocity.length(),c=_t.clamp(this.velocity.x*.45,-.6,.6);n.rotation.y+=(c-n.rotation.y)*(1-Math.exp(-e*3));const d=this.fromScreen((this.pointer.x+1)/2*innerWidth,(1-this.pointer.y)/2*innerHeight);if(this.companion.lookTarget.position.set(d.x,d.y,df*.6),this.companion.update(e,t,Math.min(l,1)),this.powerSave||this.background.update(e,t),this.renderer.render(this.scene,this.camera),this.events.onHead){n.updateMatrixWorld();const h=this.toScreen(this.companion.headPosition(this.tmp));this.events.onHead(h.x,h.y)}};watchFps(e){if(this.fps.frames++,this.fps.time+=e,this.fps.time<3)return;const t=this.fps.frames/this.fps.time;this.fps.frames=0,this.fps.time=0,t<40&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.renderer.setPixelRatio(this.pixelRatio),this.resize())}}const R0=["なあに？","呼んだ？","えへへ、くすぐったいよ","どうしたの？","ちゃんとそばにいるよ"];function cL(){const i=gt.useRef(null),e=gt.useRef(null),t=gt.useRef(null),[n,s]=gt.useState(()=>qr("persona",uc)),[a,l]=gt.useState(()=>{const me=qr("ai",dh);return{...me,models:{...dh.models,...me.models}}}),[c,d]=gt.useState(()=>qr("display",KM)),[h,m]=gt.useState({anthropic:"",openai:"",gemini:""}),[p,g]=gt.useState(!1),[v,S]=gt.useState(()=>lS("chat")),[E,y]=gt.useState(()=>qr("usage",{input:0,output:0})),[x,C]=gt.useState(!1),[R,T]=gt.useState(""),[I,N]=gt.useState(!1),[U,z]=gt.useState(!1),[P,b]=gt.useState({}),[B,Y]=gt.useState(null),[ee,de]=gt.useState({has:!1,name:qr("vrmName",{v:""}).v,error:""}),le=gt.useRef(null),ue=gt.useRef(0);gt.useEffect(()=>Rs("persona",n),[n]),gt.useEffect(()=>Rs("ai",a),[a]),gt.useEffect(()=>Rs("display",c),[c]),gt.useEffect(()=>Rs("chat",v.slice(-200)),[v]),gt.useEffect(()=>Rs("usage",E),[E]);const ie=gt.useCallback((me,q)=>{clearTimeout(ue.current),T(me),q!==1/0&&(ue.current=window.setTimeout(()=>T(""),q??Math.min(15e3,3500+me.length*120)))},[]);gt.useEffect(()=>{const me=new uL(i.current,{onHead:(q,J)=>{const ge=t.current;if(!ge)return;const Me=ge.offsetWidth,Ce=ge.offsetHeight,ct=Math.min(Math.max(12,q-Me/2),innerWidth-Me-12),Et=Math.max(12,J-Ce-14);ge.style.transform=`translate(${ct}px, ${Et}px)`,ge.style.setProperty("--tail",`${Math.min(Math.max(16,q-ct),Me-16)}px`)},onTap:()=>{me.setMood("happy"),setTimeout(()=>me.setMood("idle"),1800),ie(R0[Math.floor(Math.random()*R0.length)])}});return e.current=me,fS("vrm").then(async q=>{if(q)try{await me.setVrmData(await q.arrayBuffer()),de(J=>({...J,has:!0}))}catch(J){de(ge=>({...ge,error:`保存してあったVRMを読み込めませんでした：${J.message}`}))}}),()=>{me.dispose(),e.current=null}},[ie]),gt.useEffect(()=>e.current?.setPowerSave(c.powerSave),[c.powerSave]),gt.useEffect(()=>{(async()=>{const me=await Promise.all(["anthropic","openai","gemini"].map(async Me=>[Me,await dS(`key.${Me}`)])),q=Object.fromEntries(me);m(q),g(!0);const J=qr("persona",uc),ge=qr("ai",dh);ie(q[ge.provider]?FM(new Date,J.userCall):`はじめまして、${J.name}だよ。右上の ? でAPIキーの取り方を見て、⚙ から設定してね`,q[ge.provider]?void 0:2e4)})()},[ie]);const H=gt.useRef(0);gt.useEffect(()=>{if(!c.voiceLines)return;let me=0;const q=()=>{document.hidden||H.current++;const J=kM(new Date,n.userCall)??BM(H.current);J&&!x&&ie(J),me=window.setTimeout(q,6e4-Date.now()%6e4+50)};return me=window.setTimeout(q,6e4-Date.now()%6e4+50),()=>clearTimeout(me)},[c.voiceLines,n.userCall,x,ie]);const ce=gt.useCallback(me=>e.current?.setReserveBottom((me+8)/innerHeight),[]),ne=async me=>{if(!h[a.provider]){e.current?.setMood("happy"),setTimeout(()=>e.current?.setMood("idle"),2e3),ie("まだAIにつながってないの。APIキーの取り方を見せるね。迷ったら、無料枠のある Gemini からがおすすめだよ"),Y(Object.values(h).some(Boolean)?a.provider:"gemini");return}const q=Date.now(),J=[...v,{role:"user",content:me,at:q}];S([...J,{role:"assistant",content:"",at:q}]),C(!0),e.current?.setMood("thinking"),ie("うーん…",1/0);const ge=new AbortController;le.current=ge;let Me="";const Ce=(Et,k=!1)=>S(Tt=>[...Tt.slice(0,-1),{role:"assistant",content:Et,at:q,error:k}]),ct=Et=>qM({provider:a.provider,apiKey:h[a.provider],model:Et,system:sS(n),messages:WM(J.filter(k=>!k.error)),signal:ge.signal,onText:k=>{Me||e.current?.setMood("talking"),Me+=k,Ce(Me),ie(Me,1/0)}});try{let Et;try{Et=await ct(a.models[a.provider])}catch(k){if(!(k instanceof P0)||Me)throw k;const Tt=await V(a.provider,h[a.provider]).catch(()=>null);if(!Tt||Tt===k.model)throw k;Et=await ct(Tt)}if(y(k=>({input:k.input+Et.input,output:k.output+Et.output})),!Me.trim())throw new Error("返事が空っぽでした。もう一度話しかけてみてね");e.current?.setMood("happy"),setTimeout(()=>e.current?.setMood("idle"),2500),ie(Me)}catch(Et){const k=Me?`${Me}

（${Et.message}）`:Et.message;Ce(k,!Me),e.current?.setMood("idle"),ie(Me?k:`ごめんね、${Et.message}`)}finally{C(!1),le.current=null}},V=async(me,q)=>{const J=await jM(me,q);b(Ce=>({...Ce,[me]:J}));const ge=a.models[me];if(J.includes(ge))return ge;const Me=YM(me,J);if(!Me)throw new Error("このキーで使えるモデルが見つかりませんでした");return l(Ce=>({...Ce,models:{...Ce.models,[me]:Me}})),ie(`モデルを「${Me}」に切り替えたよ`),Me},oe=async(me,q)=>{if(await cS(`key.${me}`,q),m(J=>({...J,[me]:q})),!!q){ie("ありがとう！ つながるか確かめてるね…",1/0);try{const J=await V(me,q);ie(`つながったよ！ モデルは「${J}」を使うね。これでお話しできるよ`)}catch(J){const ge=J?.status===400||J?.status===401||J?.status===403?"APIキーが正しくないみたい。コピーし直して貼ってみて":`確かめられなかったよ（${J.message}）。とりあえず話しかけてみてね`;ie(ge)}}},Ue=async me=>{de(q=>({...q,error:""}));try{await e.current?.setVrmData(me?await me.arrayBuffer():null),await hS("vrm",me??void 0),Rs("vrmName",{v:me?.name??""}),de({has:!!me,name:me?.name??"",error:""}),me&&ie("新しい姿、どうかな？")}catch(q){de(J=>({...J,error:`読み込めませんでした：${q.message}`}))}},ke=R.length>220;return K.jsxs(K.Fragment,{children:[K.jsx("div",{className:"space","aria-hidden":!0}),K.jsx("canvas",{ref:i,className:"stage"}),c.clock&&K.jsx(VM,{corner:c.clockCorner,seconds:c.seconds}),K.jsxs("div",{className:"top-actions",children:[K.jsx("button",{className:"icon-btn glow",onClick:()=>Y(a.provider),"aria-label":"APIキーの取り方",children:"?"}),K.jsx("button",{className:"icon-btn glow",onClick:()=>z(!0),"aria-label":"設定",children:"⚙"})]}),K.jsx("div",{ref:t,className:`bubble glass ${R?"show":""}`,"aria-live":"polite",onClick:()=>ke&&N(!0),children:R&&K.jsxs(K.Fragment,{children:[K.jsx("div",{className:"bubble-name",children:n.name}),K.jsx("div",{className:"bubble-text",children:K.jsx(b0,{text:ke?`…${R.slice(-200)}`:R})}),ke&&!x&&K.jsx("div",{className:"bubble-more",children:"タップで全文"})]})}),K.jsx(NM,{name:n.name,messages:v,busy:x||!p,open:I,onToggle:()=>N(!I),onSend:ne,onStop:()=>le.current?.abort(),onHeight:ce}),U&&K.jsx(JM,{persona:n,ai:a,display:c,keys:h,usage:E,hasVrm:ee.has,vrmName:ee.name,vrmError:ee.error,onPersona:s,onAi:l,onDisplay:d,onKey:oe,onVrm:Ue,onResetUsage:()=>y({input:0,output:0}),onClearChat:()=>S([]),available:P,onLoadModels:me=>V(me,h[me]),onGuide:me=>{z(!1),Y(me)},initialTab:U==="ai"?"ai":void 0,onClose:()=>z(!1)}),B&&K.jsx(HM,{initial:B,configured:h,onSetup:me=>{l(q=>({...q,provider:me})),Y(null),z("ai"),ie("コピーしたキーを「APIキー」の欄に貼って、保存を押してね")},onClose:()=>Y(null)})]})}IM.createRoot(document.getElementById("root")).render(K.jsx(gt.StrictMode,{children:K.jsx(cL,{})}));
