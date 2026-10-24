(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var sh={exports:{}},Ua={},oh={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function bM(){if(u_)return Et;u_=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(V){return V===null||typeof V!="object"?null:(V=m&&V[m]||V["@@iterator"],typeof V=="function"?V:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function y(V,oe,Oe){this.props=V,this.context=oe,this.refs=E,this.updater=Oe||v}y.prototype.isReactComponent={},y.prototype.setState=function(V,oe){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,oe,"setState")},y.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function x(){}x.prototype=y.prototype;function b(V,oe,Oe){this.props=V,this.context=oe,this.refs=E,this.updater=Oe||v}var I=b.prototype=new x;I.constructor=b,S(I,y.prototype),I.isPureReactComponent=!0;var T=Array.isArray,N=Object.prototype.hasOwnProperty,L={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function z(V,oe,Oe){var ze,He={},ie=null,de=null;if(oe!=null)for(ze in oe.ref!==void 0&&(de=oe.ref),oe.key!==void 0&&(ie=""+oe.key),oe)N.call(oe,ze)&&!D.hasOwnProperty(ze)&&(He[ze]=oe[ze]);var Q=arguments.length-2;if(Q===1)He.children=Oe;else if(1<Q){for(var me=Array(Q),_e=0;_e<Q;_e++)me[_e]=arguments[_e+2];He.children=me}if(V&&V.defaultProps)for(ze in Q=V.defaultProps,Q)He[ze]===void 0&&(He[ze]=Q[ze]);return{$$typeof:i,type:V,key:ie,ref:de,props:He,_owner:L.current}}function C(V,oe){return{$$typeof:i,type:V.type,key:oe,ref:V.ref,props:V.props,_owner:V._owner}}function R(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function B(V){var oe={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Oe){return oe[Oe]})}var Y=/\/+/g;function J(V,oe){return typeof V=="object"&&V!==null&&V.key!=null?B(""+V.key):oe.toString(36)}function he(V,oe,Oe,ze,He){var ie=typeof V;(ie==="undefined"||ie==="boolean")&&(V=null);var de=!1;if(V===null)de=!0;else switch(ie){case"string":case"number":de=!0;break;case"object":switch(V.$$typeof){case i:case e:de=!0}}if(de)return de=V,He=He(de),V=ze===""?"."+J(de,0):ze,T(He)?(Oe="",V!=null&&(Oe=V.replace(Y,"$&/")+"/"),he(He,oe,Oe,"",function(_e){return _e})):He!=null&&(R(He)&&(He=C(He,Oe+(!He.key||de&&de.key===He.key?"":(""+He.key).replace(Y,"$&/")+"/")+V)),oe.push(He)),1;if(de=0,ze=ze===""?".":ze+":",T(V))for(var Q=0;Q<V.length;Q++){ie=V[Q];var me=ze+J(ie,Q);de+=he(ie,oe,Oe,me,He)}else if(me=g(V),typeof me=="function")for(V=me.call(V),Q=0;!(ie=V.next()).done;)ie=ie.value,me=ze+J(ie,Q++),de+=he(ie,oe,Oe,me,He);else if(ie==="object")throw oe=String(V),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return de}function le(V,oe,Oe){if(V==null)return V;var ze=[],He=0;return he(V,ze,"","",function(ie){return oe.call(Oe,ie,He++)}),ze}function ue(V){if(V._status===-1){var oe=V._result;oe=oe(),oe.then(function(Oe){(V._status===0||V._status===-1)&&(V._status=1,V._result=Oe)},function(Oe){(V._status===0||V._status===-1)&&(V._status=2,V._result=Oe)}),V._status===-1&&(V._status=0,V._result=oe)}if(V._status===1)return V._result.default;throw V._result}var te={current:null},H={transition:null},ce={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:H,ReactCurrentOwner:L};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:le,forEach:function(V,oe,Oe){le(V,function(){oe.apply(this,arguments)},Oe)},count:function(V){var oe=0;return le(V,function(){oe++}),oe},toArray:function(V){return le(V,function(oe){return oe})||[]},only:function(V){if(!R(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Et.Component=y,Et.Fragment=t,Et.Profiler=s,Et.PureComponent=b,Et.StrictMode=n,Et.Suspense=d,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Et.act=ne,Et.cloneElement=function(V,oe,Oe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var ze=S({},V.props),He=V.key,ie=V.ref,de=V._owner;if(oe!=null){if(oe.ref!==void 0&&(ie=oe.ref,de=L.current),oe.key!==void 0&&(He=""+oe.key),V.type&&V.type.defaultProps)var Q=V.type.defaultProps;for(me in oe)N.call(oe,me)&&!D.hasOwnProperty(me)&&(ze[me]=oe[me]===void 0&&Q!==void 0?Q[me]:oe[me])}var me=arguments.length-2;if(me===1)ze.children=Oe;else if(1<me){Q=Array(me);for(var _e=0;_e<me;_e++)Q[_e]=arguments[_e+2];ze.children=Q}return{$$typeof:i,type:V.type,key:He,ref:ie,props:ze,_owner:de}},Et.createContext=function(V){return V={$$typeof:l,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},Et.createElement=z,Et.createFactory=function(V){var oe=z.bind(null,V);return oe.type=V,oe},Et.createRef=function(){return{current:null}},Et.forwardRef=function(V){return{$$typeof:c,render:V}},Et.isValidElement=R,Et.lazy=function(V){return{$$typeof:p,_payload:{_status:-1,_result:V},_init:ue}},Et.memo=function(V,oe){return{$$typeof:h,type:V,compare:oe===void 0?null:oe}},Et.startTransition=function(V){var oe=H.transition;H.transition={};try{V()}finally{H.transition=oe}},Et.unstable_act=ne,Et.useCallback=function(V,oe){return te.current.useCallback(V,oe)},Et.useContext=function(V){return te.current.useContext(V)},Et.useDebugValue=function(){},Et.useDeferredValue=function(V){return te.current.useDeferredValue(V)},Et.useEffect=function(V,oe){return te.current.useEffect(V,oe)},Et.useId=function(){return te.current.useId()},Et.useImperativeHandle=function(V,oe,Oe){return te.current.useImperativeHandle(V,oe,Oe)},Et.useInsertionEffect=function(V,oe){return te.current.useInsertionEffect(V,oe)},Et.useLayoutEffect=function(V,oe){return te.current.useLayoutEffect(V,oe)},Et.useMemo=function(V,oe){return te.current.useMemo(V,oe)},Et.useReducer=function(V,oe,Oe){return te.current.useReducer(V,oe,Oe)},Et.useRef=function(V){return te.current.useRef(V)},Et.useState=function(V){return te.current.useState(V)},Et.useSyncExternalStore=function(V,oe,Oe){return te.current.useSyncExternalStore(V,oe,Oe)},Et.useTransition=function(){return te.current.useTransition()},Et.version="18.3.1",Et}var c_;function mp(){return c_||(c_=1,oh.exports=bM()),oh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function CM(){if(d_)return Ua;d_=1;var i=mp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,d,h){var p,m={},g=null,v=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(v=d.ref);for(p in d)n.call(d,p)&&!a.hasOwnProperty(p)&&(m[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:c,key:g,ref:v,props:m,_owner:s.current}}return Ua.Fragment=t,Ua.jsx=l,Ua.jsxs=l,Ua}var h_;function PM(){return h_||(h_=1,sh.exports=CM()),sh.exports}var $=PM(),vt=mp(),xu={},ah={exports:{}},$n={},lh={exports:{}},uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function LM(){return f_||(f_=1,(function(i){function e(H,ce){var ne=H.length;H.push(ce);e:for(;0<ne;){var V=ne-1>>>1,oe=H[V];if(0<s(oe,ce))H[V]=ce,H[ne]=oe,ne=V;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var ce=H[0],ne=H.pop();if(ne!==ce){H[0]=ne;e:for(var V=0,oe=H.length,Oe=oe>>>1;V<Oe;){var ze=2*(V+1)-1,He=H[ze],ie=ze+1,de=H[ie];if(0>s(He,ne))ie<oe&&0>s(de,He)?(H[V]=de,H[ie]=ne,V=ie):(H[V]=He,H[ze]=ne,V=ze);else if(ie<oe&&0>s(de,ne))H[V]=de,H[ie]=ne,V=ie;else break e}}return ce}function s(H,ce){var ne=H.sortIndex-ce.sortIndex;return ne!==0?ne:H.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;i.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();i.unstable_now=function(){return l.now()-c}}var d=[],h=[],p=1,m=null,g=3,v=!1,S=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(H){for(var ce=t(h);ce!==null;){if(ce.callback===null)n(h);else if(ce.startTime<=H)n(h),ce.sortIndex=ce.expirationTime,e(d,ce);else break;ce=t(h)}}function T(H){if(E=!1,I(H),!S)if(t(d)!==null)S=!0,ue(N);else{var ce=t(h);ce!==null&&te(T,ce.startTime-H)}}function N(H,ce){S=!1,E&&(E=!1,x(z),z=-1),v=!0;var ne=g;try{for(I(ce),m=t(d);m!==null&&(!(m.expirationTime>ce)||H&&!B());){var V=m.callback;if(typeof V=="function"){m.callback=null,g=m.priorityLevel;var oe=V(m.expirationTime<=ce);ce=i.unstable_now(),typeof oe=="function"?m.callback=oe:m===t(d)&&n(d),I(ce)}else n(d);m=t(d)}if(m!==null)var Oe=!0;else{var ze=t(h);ze!==null&&te(T,ze.startTime-ce),Oe=!1}return Oe}finally{m=null,g=ne,v=!1}}var L=!1,D=null,z=-1,C=5,R=-1;function B(){return!(i.unstable_now()-R<C)}function Y(){if(D!==null){var H=i.unstable_now();R=H;var ce=!0;try{ce=D(!0,H)}finally{ce?J():(L=!1,D=null)}}else L=!1}var J;if(typeof b=="function")J=function(){b(Y)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,le=he.port2;he.port1.onmessage=Y,J=function(){le.postMessage(null)}}else J=function(){y(Y,0)};function ue(H){D=H,L||(L=!0,J())}function te(H,ce){z=y(function(){H(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_continueExecution=function(){S||v||(S=!0,ue(N))},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return g},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(H){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var ne=g;g=ce;try{return H()}finally{g=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(H,ce){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ne=g;g=H;try{return ce()}finally{g=ne}},i.unstable_scheduleCallback=function(H,ce,ne){var V=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?V+ne:V):ne=V,H){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ne+oe,H={id:p++,callback:ce,priorityLevel:H,startTime:ne,expirationTime:oe,sortIndex:-1},ne>V?(H.sortIndex=ne,e(h,H),t(d)===null&&H===t(h)&&(E?(x(z),z=-1):E=!0,te(T,ne-V))):(H.sortIndex=oe,e(d,H),S||v||(S=!0,ue(N))),H},i.unstable_shouldYield=B,i.unstable_wrapCallback=function(H){var ce=g;return function(){var ne=g;g=ce;try{return H.apply(this,arguments)}finally{g=ne}}}})(uh)),uh}var p_;function IM(){return p_||(p_=1,lh.exports=LM()),lh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function NM(){if(m_)return $n;m_=1;var i=mp(),e=IM();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(r,o){l(r,o),l(r+"Capture",o)}function l(r,o){for(s[r]=o,r=0;r<o.length;r++)n.add(o[r])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(r){return d.call(m,r)?!0:d.call(p,r)?!1:h.test(r)?m[r]=!0:(p[r]=!0,!1)}function v(r,o,u,f){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:u!==null?!u.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function S(r,o,u,f){if(o===null||typeof o>"u"||v(r,o,u,f))return!0;if(f)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(r,o,u,f,_,M,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=_,this.mustUseProperty=u,this.propertyName=r,this.type=o,this.sanitizeURL=M,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){y[r]=new E(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];y[o]=new E(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){y[r]=new E(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){y[r]=new E(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){y[r]=new E(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){y[r]=new E(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){y[r]=new E(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){y[r]=new E(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){y[r]=new E(r,5,!1,r.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(x,b);y[o]=new E(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(x,b);y[o]=new E(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(x,b);y[o]=new E(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){y[r]=new E(r,1,!1,r.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){y[r]=new E(r,1,!1,r.toLowerCase(),null,!0,!0)});function I(r,o,u,f){var _=y.hasOwnProperty(o)?y[o]:null;(_!==null?_.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(S(o,u,_,f)&&(u=null),f||_===null?g(o)&&(u===null?r.removeAttribute(o):r.setAttribute(o,""+u)):_.mustUseProperty?r[_.propertyName]=u===null?_.type===3?!1:"":u:(o=_.attributeName,f=_.attributeNamespace,u===null?r.removeAttribute(o):(_=_.type,u=_===3||_===4&&u===!0?"":""+u,f?r.setAttributeNS(f,o,u):r.setAttribute(o,u))))}var T=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),L=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),H=Symbol.iterator;function ce(r){return r===null||typeof r!="object"?null:(r=H&&r[H]||r["@@iterator"],typeof r=="function"?r:null)}var ne=Object.assign,V;function oe(r){if(V===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);V=o&&o[1]||""}return`
`+V+r}var Oe=!1;function ze(r,o){if(!r||Oe)return"";Oe=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(re){var f=re}Reflect.construct(r,[],o)}else{try{o.call()}catch(re){f=re}r.call(o.prototype)}else{try{throw Error()}catch(re){f=re}r()}}catch(re){if(re&&f&&typeof re.stack=="string"){for(var _=re.stack.split(`
`),M=f.stack.split(`
`),w=_.length-1,F=M.length-1;1<=w&&0<=F&&_[w]!==M[F];)F--;for(;1<=w&&0<=F;w--,F--)if(_[w]!==M[F]){if(w!==1||F!==1)do if(w--,F--,0>F||_[w]!==M[F]){var G=`
`+_[w].replace(" at new "," at ");return r.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",r.displayName)),G}while(1<=w&&0<=F);break}}}finally{Oe=!1,Error.prepareStackTrace=u}return(r=r?r.displayName||r.name:"")?oe(r):""}function He(r){switch(r.tag){case 5:return oe(r.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return r=ze(r.type,!1),r;case 11:return r=ze(r.type.render,!1),r;case 1:return r=ze(r.type,!0),r;default:return""}}function ie(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case D:return"Fragment";case L:return"Portal";case C:return"Profiler";case z:return"StrictMode";case J:return"Suspense";case he:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case B:return(r.displayName||"Context")+".Consumer";case R:return(r._context.displayName||"Context")+".Provider";case Y:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case le:return o=r.displayName||null,o!==null?o:ie(r.type)||"Memo";case ue:o=r._payload,r=r._init;try{return ie(r(o))}catch{}}return null}function de(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(o);case 8:return o===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Q(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function me(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function _e(r){var o=me(r)?"checked":"value",u=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),f=""+r[o];if(!r.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var _=u.get,M=u.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return _.call(this)},set:function(w){f=""+w,M.call(this,w)}}),Object.defineProperty(r,o,{enumerable:u.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function Ge(r){r._valueTracker||(r._valueTracker=_e(r))}function xt(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var u=o.getValue(),f="";return r&&(f=me(r)?r.checked?"true":"false":r.value),r=f,r!==u?(o.setValue(r),!0):!1}function k(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Qe(r,o){var u=o.checked;return ne({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??r._wrapperState.initialChecked})}function De(r,o){var u=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;u=Q(o.value!=null?o.value:u),r._wrapperState={initialChecked:f,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ke(r,o){o=o.checked,o!=null&&I(r,"checked",o,!1)}function Ce(r,o){ke(r,o);var u=Q(o.value),f=o.type;if(u!=null)f==="number"?(u===0&&r.value===""||r.value!=u)&&(r.value=""+u):r.value!==""+u&&(r.value=""+u);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Fe(r,o.type,u):o.hasOwnProperty("defaultValue")&&Fe(r,o.type,Q(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function it(r,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,u||o===r.value||(r.value=o),r.defaultValue=o}u=r.name,u!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,u!==""&&(r.name=u)}function Fe(r,o,u){(o!=="number"||k(r.ownerDocument)!==r)&&(u==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+u&&(r.defaultValue=""+u))}var ut=Array.isArray;function Gt(r,o,u,f){if(r=r.options,o){o={};for(var _=0;_<u.length;_++)o["$"+u[_]]=!0;for(u=0;u<r.length;u++)_=o.hasOwnProperty("$"+r[u].value),r[u].selected!==_&&(r[u].selected=_),_&&f&&(r[u].defaultSelected=!0)}else{for(u=""+Q(u),o=null,_=0;_<r.length;_++){if(r[_].value===u){r[_].selected=!0,f&&(r[_].defaultSelected=!0);return}o!==null||r[_].disabled||(o=r[_])}o!==null&&(o.selected=!0)}}function qt(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function O(r,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(ut(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}r._wrapperState={initialValue:Q(u)}}function A(r,o){var u=Q(o.value),f=Q(o.defaultValue);u!=null&&(u=""+u,u!==r.value&&(r.value=u),o.defaultValue==null&&r.defaultValue!==u&&(r.defaultValue=u)),f!=null&&(r.defaultValue=""+f)}function Z(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function pe(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?pe(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var fe,Je=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,f,_){MSApp.execUnsafeLocalFunction(function(){return r(o,u,f,_)})}:r})(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=fe.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function Se(r,o){if(o){var u=r.firstChild;if(u&&u===r.lastChild&&u.nodeType===3){u.nodeValue=o;return}}r.textContent=o}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ke=["Webkit","ms","Moz","O"];Object.keys(We).forEach(function(r){Ke.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),We[o]=We[r]})});function we(r,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||We.hasOwnProperty(r)&&We[r]?(""+o).trim():o+"px"}function Ie(r,o){r=r.style;for(var u in o)if(o.hasOwnProperty(u)){var f=u.indexOf("--")===0,_=we(u,o[u],f);u==="float"&&(u="cssFloat"),f?r.setProperty(u,_):r[u]=_}}var st=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(r,o){if(o){if(st[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Le(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pt=null;function W(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Te=null,Re=null,Ue=null;function Me(r){if(r=ya(r)){if(typeof Te!="function")throw Error(t(280));var o=r.stateNode;o&&(o=Dl(o),Te(r.stateNode,r.type,o))}}function ge(r){Re?Ue?Ue.push(r):Ue=[r]:Re=r}function Xe(){if(Re){var r=Re,o=Ue;if(Ue=Re=null,Me(r),o)for(r=0;r<o.length;r++)Me(o[r])}}function mt(r,o){return r(o)}function It(){}var Ct=!1;function Gn(r,o,u){if(Ct)return r(o,u);Ct=!0;try{return mt(r,o,u)}finally{Ct=!1,(Re!==null||Ue!==null)&&(It(),Xe())}}function gn(r,o){var u=r.stateNode;if(u===null)return null;var f=Dl(u);if(f===null)return null;u=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var Zi=!1;if(c)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Zi=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Zi=!1}function es(r,o,u,f,_,M,w,F,G){var re=Array.prototype.slice.call(arguments,3);try{o.apply(u,re)}catch(ye){this.onError(ye)}}var Ui=!1,Qi=null,vi=!1,Oi=null,Ji={onError:function(r){Ui=!0,Qi=r}};function Fs(r,o,u,f,_,M,w,F,G){Ui=!1,Qi=null,es.apply(Ji,arguments)}function ks(r,o,u,f,_,M,w,F,G){if(Fs.apply(this,arguments),Ui){if(Ui){var re=Qi;Ui=!1,Qi=null}else throw Error(t(198));vi||(vi=!0,Oi=re)}}function Fi(r){var o=r,u=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(u=o.return),r=o.return;while(r)}return o.tag===3?u:null}function Bs(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function ts(r){if(Fi(r)!==r)throw Error(t(188))}function ia(r){var o=r.alternate;if(!o){if(o=Fi(r),o===null)throw Error(t(188));return o!==r?null:r}for(var u=r,f=o;;){var _=u.return;if(_===null)break;var M=_.alternate;if(M===null){if(f=_.return,f!==null){u=f;continue}break}if(_.child===M.child){for(M=_.child;M;){if(M===u)return ts(_),r;if(M===f)return ts(_),o;M=M.sibling}throw Error(t(188))}if(u.return!==f.return)u=_,f=M;else{for(var w=!1,F=_.child;F;){if(F===u){w=!0,u=_,f=M;break}if(F===f){w=!0,f=_,u=M;break}F=F.sibling}if(!w){for(F=M.child;F;){if(F===u){w=!0,u=M,f=_;break}if(F===f){w=!0,f=M,u=_;break}F=F.sibling}if(!w)throw Error(t(189))}}if(u.alternate!==f)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?r:o}function Vs(r){return r=ia(r),r!==null?er(r):null}function er(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=er(r);if(o!==null)return o;r=r.sibling}return null}var P=e.unstable_scheduleCallback,q=e.unstable_cancelCallback,se=e.unstable_shouldYield,ae=e.unstable_requestPaint,j=e.unstable_now,Ae=e.unstable_getCurrentPriorityLevel,Ne=e.unstable_ImmediatePriority,Ye=e.unstable_UserBlockingPriority,Be=e.unstable_NormalPriority,ct=e.unstable_LowPriority,ht=e.unstable_IdlePriority,nt=null,gt=null;function Ft(r){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(nt,r,void 0,(r.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:ot,jt=Math.log,kt=Math.LN2;function ot(r){return r>>>=0,r===0?32:31-(jt(r)/kt|0)|0}var Wt=64,At=4194304;function un(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function xi(r,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,_=r.suspendedLanes,M=r.pingedLanes,w=u&268435455;if(w!==0){var F=w&~_;F!==0?f=un(F):(M&=w,M!==0&&(f=un(M)))}else w=u&~_,w!==0?f=un(w):M!==0&&(f=un(M));if(f===0)return 0;if(o!==0&&o!==f&&(o&_)===0&&(_=f&-f,M=o&-o,_>=M||_===16&&(M&4194240)!==0))return o;if((f&4)!==0&&(f|=u&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=f;0<o;)u=31-Pt(o),_=1<<u,f|=r[u],o&=~_;return f}function Dn(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ns(r,o){for(var u=r.suspendedLanes,f=r.pingedLanes,_=r.expirationTimes,M=r.pendingLanes;0<M;){var w=31-Pt(M),F=1<<w,G=_[w];G===-1?((F&u)===0||(F&f)!==0)&&(_[w]=Dn(F,o)):G<=o&&(r.expiredLanes|=F),M&=~F}}function Yt(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Un(){var r=Wt;return Wt<<=1,(Wt&4194240)===0&&(Wt=64),r}function Tn(r){for(var o=[],u=0;31>u;u++)o.push(r);return o}function sn(r,o,u){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-Pt(o),r[o]=u}function wn(r,o){var u=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<u;){var _=31-Pt(u),M=1<<_;o[_]=0,f[_]=-1,r[_]=-1,u&=~M}}function is(r,o){var u=r.entangledLanes|=o;for(r=r.entanglements;u;){var f=31-Pt(u),_=1<<f;_&o|r[f]&o&&(r[f]|=o),u&=~_}}var Rt=0;function zp(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Hp,Cc,Gp,Wp,Xp,Pc=!1,xl=[],Mr=null,Sr=null,Er=null,ra=new Map,sa=new Map,Tr=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(r,o){switch(r){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ra.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(o.pointerId)}}function oa(r,o,u,f,_,M){return r===null||r.nativeEvent!==M?(r={blockedOn:o,domEventName:u,eventSystemFlags:f,nativeEvent:M,targetContainers:[_]},o!==null&&(o=ya(o),o!==null&&Cc(o)),r):(r.eventSystemFlags|=f,o=r.targetContainers,_!==null&&o.indexOf(_)===-1&&o.push(_),r)}function Zx(r,o,u,f,_){switch(o){case"focusin":return Mr=oa(Mr,r,o,u,f,_),!0;case"dragenter":return Sr=oa(Sr,r,o,u,f,_),!0;case"mouseover":return Er=oa(Er,r,o,u,f,_),!0;case"pointerover":var M=_.pointerId;return ra.set(M,oa(ra.get(M)||null,r,o,u,f,_)),!0;case"gotpointercapture":return M=_.pointerId,sa.set(M,oa(sa.get(M)||null,r,o,u,f,_)),!0}return!1}function Yp(r){var o=rs(r.target);if(o!==null){var u=Fi(o);if(u!==null){if(o=u.tag,o===13){if(o=Bs(u),o!==null){r.blockedOn=o,Xp(r.priority,function(){Gp(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){r.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}r.blockedOn=null}function yl(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var u=Ic(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(u===null){u=r.nativeEvent;var f=new u.constructor(u.type,u);pt=f,u.target.dispatchEvent(f),pt=null}else return o=ya(u),o!==null&&Cc(o),r.blockedOn=u,!1;o.shift()}return!0}function qp(r,o,u){yl(r)&&u.delete(o)}function Qx(){Pc=!1,Mr!==null&&yl(Mr)&&(Mr=null),Sr!==null&&yl(Sr)&&(Sr=null),Er!==null&&yl(Er)&&(Er=null),ra.forEach(qp),sa.forEach(qp)}function aa(r,o){r.blockedOn===o&&(r.blockedOn=null,Pc||(Pc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Qx)))}function la(r){function o(_){return aa(_,r)}if(0<xl.length){aa(xl[0],r);for(var u=1;u<xl.length;u++){var f=xl[u];f.blockedOn===r&&(f.blockedOn=null)}}for(Mr!==null&&aa(Mr,r),Sr!==null&&aa(Sr,r),Er!==null&&aa(Er,r),ra.forEach(o),sa.forEach(o),u=0;u<Tr.length;u++)f=Tr[u],f.blockedOn===r&&(f.blockedOn=null);for(;0<Tr.length&&(u=Tr[0],u.blockedOn===null);)Yp(u),u.blockedOn===null&&Tr.shift()}var zs=T.ReactCurrentBatchConfig,Ml=!0;function Jx(r,o,u,f){var _=Rt,M=zs.transition;zs.transition=null;try{Rt=1,Lc(r,o,u,f)}finally{Rt=_,zs.transition=M}}function ey(r,o,u,f){var _=Rt,M=zs.transition;zs.transition=null;try{Rt=4,Lc(r,o,u,f)}finally{Rt=_,zs.transition=M}}function Lc(r,o,u,f){if(Ml){var _=Ic(r,o,u,f);if(_===null)$c(r,o,f,Sl,u),jp(r,f);else if(Zx(_,r,o,u,f))f.stopPropagation();else if(jp(r,f),o&4&&-1<Kx.indexOf(r)){for(;_!==null;){var M=ya(_);if(M!==null&&Hp(M),M=Ic(r,o,u,f),M===null&&$c(r,o,f,Sl,u),M===_)break;_=M}_!==null&&f.stopPropagation()}else $c(r,o,f,null,u)}}var Sl=null;function Ic(r,o,u,f){if(Sl=null,r=W(f),r=rs(r),r!==null)if(o=Fi(r),o===null)r=null;else if(u=o.tag,u===13){if(r=Bs(o),r!==null)return r;r=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return Sl=r,null}function $p(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ae()){case Ne:return 1;case Ye:return 4;case Be:case ct:return 16;case ht:return 536870912;default:return 16}default:return 16}}var wr=null,Nc=null,El=null;function Kp(){if(El)return El;var r,o=Nc,u=o.length,f,_="value"in wr?wr.value:wr.textContent,M=_.length;for(r=0;r<u&&o[r]===_[r];r++);var w=u-r;for(f=1;f<=w&&o[u-f]===_[M-f];f++);return El=_.slice(r,1<f?1-f:void 0)}function Tl(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function wl(){return!0}function Zp(){return!1}function Kn(r){function o(u,f,_,M,w){this._reactName=u,this._targetInst=_,this.type=f,this.nativeEvent=M,this.target=w,this.currentTarget=null;for(var F in r)r.hasOwnProperty(F)&&(u=r[F],this[F]=u?u(M):M[F]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?wl:Zp,this.isPropagationStopped=Zp,this}return ne(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),o}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=Kn(Hs),ua=ne({},Hs,{view:0,detail:0}),ty=Kn(ua),Uc,Oc,ca,Al=ne({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ca&&(ca&&r.type==="mousemove"?(Uc=r.screenX-ca.screenX,Oc=r.screenY-ca.screenY):Oc=Uc=0,ca=r),Uc)},movementY:function(r){return"movementY"in r?r.movementY:Oc}}),Qp=Kn(Al),ny=ne({},Al,{dataTransfer:0}),iy=Kn(ny),ry=ne({},ua,{relatedTarget:0}),Fc=Kn(ry),sy=ne({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),oy=Kn(sy),ay=ne({},Hs,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ly=Kn(ay),uy=ne({},Hs,{data:0}),Jp=Kn(uy),cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=hy[r])?!!o[r]:!1}function kc(){return fy}var py=ne({},ua,{key:function(r){if(r.key){var o=cy[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=Tl(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?dy[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(r){return r.type==="keypress"?Tl(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Tl(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),my=Kn(py),gy=ne({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=Kn(gy),_y=ne({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),vy=Kn(_y),xy=ne({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),yy=Kn(xy),My=ne({},Al,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=Kn(My),Ey=[9,13,27,32],Bc=c&&"CompositionEvent"in window,da=null;c&&"documentMode"in document&&(da=document.documentMode);var Ty=c&&"TextEvent"in window&&!da,tm=c&&(!Bc||da&&8<da&&11>=da),nm=" ",im=!1;function rm(r,o){switch(r){case"keyup":return Ey.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Gs=!1;function wy(r,o){switch(r){case"compositionend":return sm(o);case"keypress":return o.which!==32?null:(im=!0,nm);case"textInput":return r=o.data,r===nm&&im?null:r;default:return null}}function Ay(r,o){if(Gs)return r==="compositionend"||!Bc&&rm(r,o)?(r=Kp(),El=Nc=wr=null,Gs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return tm&&o.locale!=="ko"?null:o.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!Ry[r.type]:o==="textarea"}function am(r,o,u,f){ge(f),o=Ll(o,"onChange"),0<o.length&&(u=new Dc("onChange","change",null,u,f),r.push({event:u,listeners:o}))}var ha=null,fa=null;function by(r){wm(r,0)}function Rl(r){var o=qs(r);if(xt(o))return r}function Cy(r,o){if(r==="change")return o}var lm=!1;if(c){var Vc;if(c){var zc="oninput"in document;if(!zc){var um=document.createElement("div");um.setAttribute("oninput","return;"),zc=typeof um.oninput=="function"}Vc=zc}else Vc=!1;lm=Vc&&(!document.documentMode||9<document.documentMode)}function cm(){ha&&(ha.detachEvent("onpropertychange",dm),fa=ha=null)}function dm(r){if(r.propertyName==="value"&&Rl(fa)){var o=[];am(o,fa,r,W(r)),Gn(by,o)}}function Py(r,o,u){r==="focusin"?(cm(),ha=o,fa=u,ha.attachEvent("onpropertychange",dm)):r==="focusout"&&cm()}function Ly(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Rl(fa)}function Iy(r,o){if(r==="click")return Rl(o)}function Ny(r,o){if(r==="input"||r==="change")return Rl(o)}function Dy(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var yi=typeof Object.is=="function"?Object.is:Dy;function pa(r,o){if(yi(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var u=Object.keys(r),f=Object.keys(o);if(u.length!==f.length)return!1;for(f=0;f<u.length;f++){var _=u[f];if(!d.call(o,_)||!yi(r[_],o[_]))return!1}return!0}function hm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function fm(r,o){var u=hm(r);r=0;for(var f;u;){if(u.nodeType===3){if(f=r+u.textContent.length,r<=o&&f>=o)return{node:u,offset:o-r};r=f}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=hm(u)}}function pm(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?pm(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function mm(){for(var r=window,o=k();o instanceof r.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)r=o.contentWindow;else break;o=k(r.document)}return o}function Hc(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function Uy(r){var o=mm(),u=r.focusedElem,f=r.selectionRange;if(o!==u&&u&&u.ownerDocument&&pm(u.ownerDocument.documentElement,u)){if(f!==null&&Hc(u)){if(o=f.start,r=f.end,r===void 0&&(r=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(r,u.value.length);else if(r=(o=u.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var _=u.textContent.length,M=Math.min(f.start,_);f=f.end===void 0?M:Math.min(f.end,_),!r.extend&&M>f&&(_=f,f=M,M=_),_=fm(u,M);var w=fm(u,f);_&&w&&(r.rangeCount!==1||r.anchorNode!==_.node||r.anchorOffset!==_.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(_.node,_.offset),r.removeAllRanges(),M>f?(r.addRange(o),r.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),r.addRange(o)))}}for(o=[],r=u;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)r=o[u],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Oy=c&&"documentMode"in document&&11>=document.documentMode,Ws=null,Gc=null,ma=null,Wc=!1;function gm(r,o,u){var f=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Wc||Ws==null||Ws!==k(f)||(f=Ws,"selectionStart"in f&&Hc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ma&&pa(ma,f)||(ma=f,f=Ll(Gc,"onSelect"),0<f.length&&(o=new Dc("onSelect","select",null,o,u),r.push({event:o,listeners:f}),o.target=Ws)))}function bl(r,o){var u={};return u[r.toLowerCase()]=o.toLowerCase(),u["Webkit"+r]="webkit"+o,u["Moz"+r]="moz"+o,u}var Xs={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Xc={},_m={};c&&(_m=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function Cl(r){if(Xc[r])return Xc[r];if(!Xs[r])return r;var o=Xs[r],u;for(u in o)if(o.hasOwnProperty(u)&&u in _m)return Xc[r]=o[u];return r}var vm=Cl("animationend"),xm=Cl("animationiteration"),ym=Cl("animationstart"),Mm=Cl("transitionend"),Sm=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(r,o){Sm.set(r,o),a(o,[r])}for(var jc=0;jc<Em.length;jc++){var Yc=Em[jc],Fy=Yc.toLowerCase(),ky=Yc[0].toUpperCase()+Yc.slice(1);Ar(Fy,"on"+ky)}Ar(vm,"onAnimationEnd"),Ar(xm,"onAnimationIteration"),Ar(ym,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Mm,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Tm(r,o,u){var f=r.type||"unknown-event";r.currentTarget=u,ks(f,o,void 0,r),r.currentTarget=null}function wm(r,o){o=(o&4)!==0;for(var u=0;u<r.length;u++){var f=r[u],_=f.event;f=f.listeners;e:{var M=void 0;if(o)for(var w=f.length-1;0<=w;w--){var F=f[w],G=F.instance,re=F.currentTarget;if(F=F.listener,G!==M&&_.isPropagationStopped())break e;Tm(_,F,re),M=G}else for(w=0;w<f.length;w++){if(F=f[w],G=F.instance,re=F.currentTarget,F=F.listener,G!==M&&_.isPropagationStopped())break e;Tm(_,F,re),M=G}}}if(vi)throw r=Oi,vi=!1,Oi=null,r}function Zt(r,o){var u=o[td];u===void 0&&(u=o[td]=new Set);var f=r+"__bubble";u.has(f)||(Am(o,r,2,!1),u.add(f))}function qc(r,o,u){var f=0;o&&(f|=4),Am(u,r,f,o)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function _a(r){if(!r[Pl]){r[Pl]=!0,n.forEach(function(u){u!=="selectionchange"&&(By.has(u)||qc(u,!1,r),qc(u,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[Pl]||(o[Pl]=!0,qc("selectionchange",!1,o))}}function Am(r,o,u,f){switch($p(o)){case 1:var _=Jx;break;case 4:_=ey;break;default:_=Lc}u=_.bind(null,o,u,r),_=void 0,!Zi||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(_=!0),f?_!==void 0?r.addEventListener(o,u,{capture:!0,passive:_}):r.addEventListener(o,u,!0):_!==void 0?r.addEventListener(o,u,{passive:_}):r.addEventListener(o,u,!1)}function $c(r,o,u,f,_){var M=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var F=f.stateNode.containerInfo;if(F===_||F.nodeType===8&&F.parentNode===_)break;if(w===4)for(w=f.return;w!==null;){var G=w.tag;if((G===3||G===4)&&(G=w.stateNode.containerInfo,G===_||G.nodeType===8&&G.parentNode===_))return;w=w.return}for(;F!==null;){if(w=rs(F),w===null)return;if(G=w.tag,G===5||G===6){f=M=w;continue e}F=F.parentNode}}f=f.return}Gn(function(){var re=M,ye=W(u),Ee=[];e:{var xe=Sm.get(r);if(xe!==void 0){var Ve=Dc,qe=r;switch(r){case"keypress":if(Tl(u)===0)break e;case"keydown":case"keyup":Ve=my;break;case"focusin":qe="focus",Ve=Fc;break;case"focusout":qe="blur",Ve=Fc;break;case"beforeblur":case"afterblur":Ve=Fc;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=vy;break;case vm:case xm:case ym:Ve=oy;break;case Mm:Ve=yy;break;case"scroll":Ve=ty;break;case"wheel":Ve=Sy;break;case"copy":case"cut":case"paste":Ve=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=em}var Ze=(o&4)!==0,on=!Ze&&r==="scroll",K=Ze?xe!==null?xe+"Capture":null:xe;Ze=[];for(var X=re,ee;X!==null;){ee=X;var be=ee.stateNode;if(ee.tag===5&&be!==null&&(ee=be,K!==null&&(be=gn(X,K),be!=null&&Ze.push(va(X,be,ee)))),on)break;X=X.return}0<Ze.length&&(xe=new Ve(xe,qe,null,u,ye),Ee.push({event:xe,listeners:Ze}))}}if((o&7)===0){e:{if(xe=r==="mouseover"||r==="pointerover",Ve=r==="mouseout"||r==="pointerout",xe&&u!==pt&&(qe=u.relatedTarget||u.fromElement)&&(rs(qe)||qe[tr]))break e;if((Ve||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ve?(qe=u.relatedTarget||u.toElement,Ve=re,qe=qe?rs(qe):null,qe!==null&&(on=Fi(qe),qe!==on||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(Ve=null,qe=re),Ve!==qe)){if(Ze=Qp,be="onMouseLeave",K="onMouseEnter",X="mouse",(r==="pointerout"||r==="pointerover")&&(Ze=em,be="onPointerLeave",K="onPointerEnter",X="pointer"),on=Ve==null?xe:qs(Ve),ee=qe==null?xe:qs(qe),xe=new Ze(be,X+"leave",Ve,u,ye),xe.target=on,xe.relatedTarget=ee,be=null,rs(ye)===re&&(Ze=new Ze(K,X+"enter",qe,u,ye),Ze.target=ee,Ze.relatedTarget=on,be=Ze),on=be,Ve&&qe)t:{for(Ze=Ve,K=qe,X=0,ee=Ze;ee;ee=js(ee))X++;for(ee=0,be=K;be;be=js(be))ee++;for(;0<X-ee;)Ze=js(Ze),X--;for(;0<ee-X;)K=js(K),ee--;for(;X--;){if(Ze===K||K!==null&&Ze===K.alternate)break t;Ze=js(Ze),K=js(K)}Ze=null}else Ze=null;Ve!==null&&Rm(Ee,xe,Ve,Ze,!1),qe!==null&&on!==null&&Rm(Ee,on,qe,Ze,!0)}}e:{if(xe=re?qs(re):window,Ve=xe.nodeName&&xe.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&xe.type==="file")var et=Cy;else if(om(xe))if(lm)et=Ny;else{et=Ly;var at=Py}else(Ve=xe.nodeName)&&Ve.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(et=Iy);if(et&&(et=et(r,re))){am(Ee,et,u,ye);break e}at&&at(r,xe,re),r==="focusout"&&(at=xe._wrapperState)&&at.controlled&&xe.type==="number"&&Fe(xe,"number",xe.value)}switch(at=re?qs(re):window,r){case"focusin":(om(at)||at.contentEditable==="true")&&(Ws=at,Gc=re,ma=null);break;case"focusout":ma=Gc=Ws=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,gm(Ee,u,ye);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":gm(Ee,u,ye)}var lt;if(Bc)e:{switch(r){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Gs?rm(r,u)&&(_t="onCompositionEnd"):r==="keydown"&&u.keyCode===229&&(_t="onCompositionStart");_t&&(tm&&u.locale!=="ko"&&(Gs||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Gs&&(lt=Kp()):(wr=ye,Nc="value"in wr?wr.value:wr.textContent,Gs=!0)),at=Ll(re,_t),0<at.length&&(_t=new Jp(_t,r,null,u,ye),Ee.push({event:_t,listeners:at}),lt?_t.data=lt:(lt=sm(u),lt!==null&&(_t.data=lt)))),(lt=Ty?wy(r,u):Ay(r,u))&&(re=Ll(re,"onBeforeInput"),0<re.length&&(ye=new Jp("onBeforeInput","beforeinput",null,u,ye),Ee.push({event:ye,listeners:re}),ye.data=lt))}wm(Ee,o)})}function va(r,o,u){return{instance:r,listener:o,currentTarget:u}}function Ll(r,o){for(var u=o+"Capture",f=[];r!==null;){var _=r,M=_.stateNode;_.tag===5&&M!==null&&(_=M,M=gn(r,u),M!=null&&f.unshift(va(r,M,_)),M=gn(r,o),M!=null&&f.push(va(r,M,_))),r=r.return}return f}function js(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Rm(r,o,u,f,_){for(var M=o._reactName,w=[];u!==null&&u!==f;){var F=u,G=F.alternate,re=F.stateNode;if(G!==null&&G===f)break;F.tag===5&&re!==null&&(F=re,_?(G=gn(u,M),G!=null&&w.unshift(va(u,G,F))):_||(G=gn(u,M),G!=null&&w.push(va(u,G,F)))),u=u.return}w.length!==0&&r.push({event:o,listeners:w})}var Vy=/\r\n?/g,zy=/\u0000|\uFFFD/g;function bm(r){return(typeof r=="string"?r:""+r).replace(Vy,`
`).replace(zy,"")}function Il(r,o,u){if(o=bm(o),bm(r)!==o&&u)throw Error(t(425))}function Nl(){}var Kc=null,Zc=null;function Qc(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(r){return Cm.resolve(null).then(r).catch(Wy)}:Jc;function Wy(r){setTimeout(function(){throw r})}function ed(r,o){var u=o,f=0;do{var _=u.nextSibling;if(r.removeChild(u),_&&_.nodeType===8)if(u=_.data,u==="/$"){if(f===0){r.removeChild(_),la(o);return}f--}else u!=="$"&&u!=="$?"&&u!=="$!"||f++;u=_}while(u);la(o)}function Rr(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function Pm(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var u=r.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return r;o--}else u==="/$"&&o++}r=r.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ki="__reactFiber$"+Ys,xa="__reactProps$"+Ys,tr="__reactContainer$"+Ys,td="__reactEvents$"+Ys,Xy="__reactListeners$"+Ys,jy="__reactHandles$"+Ys;function rs(r){var o=r[ki];if(o)return o;for(var u=r.parentNode;u;){if(o=u[tr]||u[ki]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(r=Pm(r);r!==null;){if(u=r[ki])return u;r=Pm(r)}return o}r=u,u=r.parentNode}return null}function ya(r){return r=r[ki]||r[tr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function qs(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Dl(r){return r[xa]||null}var nd=[],$s=-1;function br(r){return{current:r}}function Qt(r){0>$s||(r.current=nd[$s],nd[$s]=null,$s--)}function $t(r,o){$s++,nd[$s]=r.current,r.current=o}var Cr={},An=br(Cr),Wn=br(!1),ss=Cr;function Ks(r,o){var u=r.type.contextTypes;if(!u)return Cr;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var _={},M;for(M in u)_[M]=o[M];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=_),_}function Xn(r){return r=r.childContextTypes,r!=null}function Ul(){Qt(Wn),Qt(An)}function Lm(r,o,u){if(An.current!==Cr)throw Error(t(168));$t(An,o),$t(Wn,u)}function Im(r,o,u){var f=r.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return u;f=f.getChildContext();for(var _ in f)if(!(_ in o))throw Error(t(108,de(r)||"Unknown",_));return ne({},u,f)}function Ol(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Cr,ss=An.current,$t(An,r),$t(Wn,Wn.current),!0}function Nm(r,o,u){var f=r.stateNode;if(!f)throw Error(t(169));u?(r=Im(r,o,ss),f.__reactInternalMemoizedMergedChildContext=r,Qt(Wn),Qt(An),$t(An,r)):Qt(Wn),$t(Wn,u)}var nr=null,Fl=!1,id=!1;function Dm(r){nr===null?nr=[r]:nr.push(r)}function Yy(r){Fl=!0,Dm(r)}function Pr(){if(!id&&nr!==null){id=!0;var r=0,o=Rt;try{var u=nr;for(Rt=1;r<u.length;r++){var f=u[r];do f=f(!0);while(f!==null)}nr=null,Fl=!1}catch(_){throw nr!==null&&(nr=nr.slice(r+1)),P(Ne,Pr),_}finally{Rt=o,id=!1}}return null}var Zs=[],Qs=0,kl=null,Bl=0,ri=[],si=0,os=null,ir=1,rr="";function as(r,o){Zs[Qs++]=Bl,Zs[Qs++]=kl,kl=r,Bl=o}function Um(r,o,u){ri[si++]=ir,ri[si++]=rr,ri[si++]=os,os=r;var f=ir;r=rr;var _=32-Pt(f)-1;f&=~(1<<_),u+=1;var M=32-Pt(o)+_;if(30<M){var w=_-_%5;M=(f&(1<<w)-1).toString(32),f>>=w,_-=w,ir=1<<32-Pt(o)+_|u<<_|f,rr=M+r}else ir=1<<M|u<<_|f,rr=r}function rd(r){r.return!==null&&(as(r,1),Um(r,1,0))}function sd(r){for(;r===kl;)kl=Zs[--Qs],Zs[Qs]=null,Bl=Zs[--Qs],Zs[Qs]=null;for(;r===os;)os=ri[--si],ri[si]=null,rr=ri[--si],ri[si]=null,ir=ri[--si],ri[si]=null}var Zn=null,Qn=null,Jt=!1,Mi=null;function Om(r,o){var u=ui(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=r,o=r.deletions,o===null?(r.deletions=[u],r.flags|=16):o.push(u)}function Fm(r,o){switch(r.tag){case 5:var u=r.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,Zn=r,Qn=Rr(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,Zn=r,Qn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=os!==null?{id:ir,overflow:rr}:null,r.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=ui(18,null,null,0),u.stateNode=o,u.return=r,r.child=u,Zn=r,Qn=null,!0):!1;default:return!1}}function od(r){return(r.mode&1)!==0&&(r.flags&128)===0}function ad(r){if(Jt){var o=Qn;if(o){var u=o;if(!Fm(r,o)){if(od(r))throw Error(t(418));o=Rr(u.nextSibling);var f=Zn;o&&Fm(r,o)?Om(f,u):(r.flags=r.flags&-4097|2,Jt=!1,Zn=r)}}else{if(od(r))throw Error(t(418));r.flags=r.flags&-4097|2,Jt=!1,Zn=r}}}function km(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Zn=r}function Vl(r){if(r!==Zn)return!1;if(!Jt)return km(r),Jt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!Qc(r.type,r.memoizedProps)),o&&(o=Qn)){if(od(r))throw Bm(),Error(t(418));for(;o;)Om(r,o),o=Rr(o.nextSibling)}if(km(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var u=r.data;if(u==="/$"){if(o===0){Qn=Rr(r.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}r=r.nextSibling}Qn=null}}else Qn=Zn?Rr(r.stateNode.nextSibling):null;return!0}function Bm(){for(var r=Qn;r;)r=Rr(r.nextSibling)}function Js(){Qn=Zn=null,Jt=!1}function ld(r){Mi===null?Mi=[r]:Mi.push(r)}var qy=T.ReactCurrentBatchConfig;function Ma(r,o,u){if(r=u.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var f=u.stateNode}if(!f)throw Error(t(147,r));var _=f,M=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===M?o.ref:(o=function(w){var F=_.refs;w===null?delete F[M]:F[M]=w},o._stringRef=M,o)}if(typeof r!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,r))}return r}function zl(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function Vm(r){var o=r._init;return o(r._payload)}function zm(r){function o(K,X){if(r){var ee=K.deletions;ee===null?(K.deletions=[X],K.flags|=16):ee.push(X)}}function u(K,X){if(!r)return null;for(;X!==null;)o(K,X),X=X.sibling;return null}function f(K,X){for(K=new Map;X!==null;)X.key!==null?K.set(X.key,X):K.set(X.index,X),X=X.sibling;return K}function _(K,X){return K=kr(K,X),K.index=0,K.sibling=null,K}function M(K,X,ee){return K.index=ee,r?(ee=K.alternate,ee!==null?(ee=ee.index,ee<X?(K.flags|=2,X):ee):(K.flags|=2,X)):(K.flags|=1048576,X)}function w(K){return r&&K.alternate===null&&(K.flags|=2),K}function F(K,X,ee,be){return X===null||X.tag!==6?(X=Jd(ee,K.mode,be),X.return=K,X):(X=_(X,ee),X.return=K,X)}function G(K,X,ee,be){var et=ee.type;return et===D?ye(K,X,ee.props.children,be,ee.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&Vm(et)===X.type)?(be=_(X,ee.props),be.ref=Ma(K,X,ee),be.return=K,be):(be=du(ee.type,ee.key,ee.props,null,K.mode,be),be.ref=Ma(K,X,ee),be.return=K,be)}function re(K,X,ee,be){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=eh(ee,K.mode,be),X.return=K,X):(X=_(X,ee.children||[]),X.return=K,X)}function ye(K,X,ee,be,et){return X===null||X.tag!==7?(X=ms(ee,K.mode,be,et),X.return=K,X):(X=_(X,ee),X.return=K,X)}function Ee(K,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Jd(""+X,K.mode,ee),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case N:return ee=du(X.type,X.key,X.props,null,K.mode,ee),ee.ref=Ma(K,null,X),ee.return=K,ee;case L:return X=eh(X,K.mode,ee),X.return=K,X;case ue:var be=X._init;return Ee(K,be(X._payload),ee)}if(ut(X)||ce(X))return X=ms(X,K.mode,ee,null),X.return=K,X;zl(K,X)}return null}function xe(K,X,ee,be){var et=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return et!==null?null:F(K,X,""+ee,be);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case N:return ee.key===et?G(K,X,ee,be):null;case L:return ee.key===et?re(K,X,ee,be):null;case ue:return et=ee._init,xe(K,X,et(ee._payload),be)}if(ut(ee)||ce(ee))return et!==null?null:ye(K,X,ee,be,null);zl(K,ee)}return null}function Ve(K,X,ee,be,et){if(typeof be=="string"&&be!==""||typeof be=="number")return K=K.get(ee)||null,F(X,K,""+be,et);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case N:return K=K.get(be.key===null?ee:be.key)||null,G(X,K,be,et);case L:return K=K.get(be.key===null?ee:be.key)||null,re(X,K,be,et);case ue:var at=be._init;return Ve(K,X,ee,at(be._payload),et)}if(ut(be)||ce(be))return K=K.get(ee)||null,ye(X,K,be,et,null);zl(X,be)}return null}function qe(K,X,ee,be){for(var et=null,at=null,lt=X,_t=X=0,xn=null;lt!==null&&_t<ee.length;_t++){lt.index>_t?(xn=lt,lt=null):xn=lt.sibling;var Dt=xe(K,lt,ee[_t],be);if(Dt===null){lt===null&&(lt=xn);break}r&&lt&&Dt.alternate===null&&o(K,lt),X=M(Dt,X,_t),at===null?et=Dt:at.sibling=Dt,at=Dt,lt=xn}if(_t===ee.length)return u(K,lt),Jt&&as(K,_t),et;if(lt===null){for(;_t<ee.length;_t++)lt=Ee(K,ee[_t],be),lt!==null&&(X=M(lt,X,_t),at===null?et=lt:at.sibling=lt,at=lt);return Jt&&as(K,_t),et}for(lt=f(K,lt);_t<ee.length;_t++)xn=Ve(lt,K,_t,ee[_t],be),xn!==null&&(r&&xn.alternate!==null&&lt.delete(xn.key===null?_t:xn.key),X=M(xn,X,_t),at===null?et=xn:at.sibling=xn,at=xn);return r&&lt.forEach(function(Br){return o(K,Br)}),Jt&&as(K,_t),et}function Ze(K,X,ee,be){var et=ce(ee);if(typeof et!="function")throw Error(t(150));if(ee=et.call(ee),ee==null)throw Error(t(151));for(var at=et=null,lt=X,_t=X=0,xn=null,Dt=ee.next();lt!==null&&!Dt.done;_t++,Dt=ee.next()){lt.index>_t?(xn=lt,lt=null):xn=lt.sibling;var Br=xe(K,lt,Dt.value,be);if(Br===null){lt===null&&(lt=xn);break}r&&lt&&Br.alternate===null&&o(K,lt),X=M(Br,X,_t),at===null?et=Br:at.sibling=Br,at=Br,lt=xn}if(Dt.done)return u(K,lt),Jt&&as(K,_t),et;if(lt===null){for(;!Dt.done;_t++,Dt=ee.next())Dt=Ee(K,Dt.value,be),Dt!==null&&(X=M(Dt,X,_t),at===null?et=Dt:at.sibling=Dt,at=Dt);return Jt&&as(K,_t),et}for(lt=f(K,lt);!Dt.done;_t++,Dt=ee.next())Dt=Ve(lt,K,_t,Dt.value,be),Dt!==null&&(r&&Dt.alternate!==null&&lt.delete(Dt.key===null?_t:Dt.key),X=M(Dt,X,_t),at===null?et=Dt:at.sibling=Dt,at=Dt);return r&&lt.forEach(function(RM){return o(K,RM)}),Jt&&as(K,_t),et}function on(K,X,ee,be){if(typeof ee=="object"&&ee!==null&&ee.type===D&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case N:e:{for(var et=ee.key,at=X;at!==null;){if(at.key===et){if(et=ee.type,et===D){if(at.tag===7){u(K,at.sibling),X=_(at,ee.props.children),X.return=K,K=X;break e}}else if(at.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&Vm(et)===at.type){u(K,at.sibling),X=_(at,ee.props),X.ref=Ma(K,at,ee),X.return=K,K=X;break e}u(K,at);break}else o(K,at);at=at.sibling}ee.type===D?(X=ms(ee.props.children,K.mode,be,ee.key),X.return=K,K=X):(be=du(ee.type,ee.key,ee.props,null,K.mode,be),be.ref=Ma(K,X,ee),be.return=K,K=be)}return w(K);case L:e:{for(at=ee.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){u(K,X.sibling),X=_(X,ee.children||[]),X.return=K,K=X;break e}else{u(K,X);break}else o(K,X);X=X.sibling}X=eh(ee,K.mode,be),X.return=K,K=X}return w(K);case ue:return at=ee._init,on(K,X,at(ee._payload),be)}if(ut(ee))return qe(K,X,ee,be);if(ce(ee))return Ze(K,X,ee,be);zl(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,X!==null&&X.tag===6?(u(K,X.sibling),X=_(X,ee),X.return=K,K=X):(u(K,X),X=Jd(ee,K.mode,be),X.return=K,K=X),w(K)):u(K,X)}return on}var eo=zm(!0),Hm=zm(!1),Hl=br(null),Gl=null,to=null,ud=null;function cd(){ud=to=Gl=null}function dd(r){var o=Hl.current;Qt(Hl),r._currentValue=o}function hd(r,o,u){for(;r!==null;){var f=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),r===u)break;r=r.return}}function no(r,o){Gl=r,ud=to=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(jn=!0),r.firstContext=null)}function oi(r){var o=r._currentValue;if(ud!==r)if(r={context:r,memoizedValue:o,next:null},to===null){if(Gl===null)throw Error(t(308));to=r,Gl.dependencies={lanes:0,firstContext:r}}else to=to.next=r;return o}var ls=null;function fd(r){ls===null?ls=[r]:ls.push(r)}function Gm(r,o,u,f){var _=o.interleaved;return _===null?(u.next=u,fd(o)):(u.next=_.next,_.next=u),o.interleaved=u,sr(r,f)}function sr(r,o){r.lanes|=o;var u=r.alternate;for(u!==null&&(u.lanes|=o),u=r,r=r.return;r!==null;)r.childLanes|=o,u=r.alternate,u!==null&&(u.childLanes|=o),u=r,r=r.return;return u.tag===3?u.stateNode:null}var Lr=!1;function pd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wm(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function or(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function Ir(r,o,u){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(Nt&2)!==0){var _=f.pending;return _===null?o.next=o:(o.next=_.next,_.next=o),f.pending=o,sr(r,u)}return _=f.interleaved,_===null?(o.next=o,fd(f)):(o.next=_.next,_.next=o),f.interleaved=o,sr(r,u)}function Wl(r,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var f=o.lanes;f&=r.pendingLanes,u|=f,o.lanes=u,is(r,u)}}function Xm(r,o){var u=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,u===f)){var _=null,M=null;if(u=u.firstBaseUpdate,u!==null){do{var w={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};M===null?_=M=w:M=M.next=w,u=u.next}while(u!==null);M===null?_=M=o:M=M.next=o}else _=M=o;u={baseState:f.baseState,firstBaseUpdate:_,lastBaseUpdate:M,shared:f.shared,effects:f.effects},r.updateQueue=u;return}r=u.lastBaseUpdate,r===null?u.firstBaseUpdate=o:r.next=o,u.lastBaseUpdate=o}function Xl(r,o,u,f){var _=r.updateQueue;Lr=!1;var M=_.firstBaseUpdate,w=_.lastBaseUpdate,F=_.shared.pending;if(F!==null){_.shared.pending=null;var G=F,re=G.next;G.next=null,w===null?M=re:w.next=re,w=G;var ye=r.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==w&&(F===null?ye.firstBaseUpdate=re:F.next=re,ye.lastBaseUpdate=G))}if(M!==null){var Ee=_.baseState;w=0,ye=re=G=null,F=M;do{var xe=F.lane,Ve=F.eventTime;if((f&xe)===xe){ye!==null&&(ye=ye.next={eventTime:Ve,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var qe=r,Ze=F;switch(xe=o,Ve=u,Ze.tag){case 1:if(qe=Ze.payload,typeof qe=="function"){Ee=qe.call(Ve,Ee,xe);break e}Ee=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Ze.payload,xe=typeof qe=="function"?qe.call(Ve,Ee,xe):qe,xe==null)break e;Ee=ne({},Ee,xe);break e;case 2:Lr=!0}}F.callback!==null&&F.lane!==0&&(r.flags|=64,xe=_.effects,xe===null?_.effects=[F]:xe.push(F))}else Ve={eventTime:Ve,lane:xe,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(re=ye=Ve,G=Ee):ye=ye.next=Ve,w|=xe;if(F=F.next,F===null){if(F=_.shared.pending,F===null)break;xe=F,F=xe.next,xe.next=null,_.lastBaseUpdate=xe,_.shared.pending=null}}while(!0);if(ye===null&&(G=Ee),_.baseState=G,_.firstBaseUpdate=re,_.lastBaseUpdate=ye,o=_.shared.interleaved,o!==null){_=o;do w|=_.lane,_=_.next;while(_!==o)}else M===null&&(_.shared.lanes=0);ds|=w,r.lanes=w,r.memoizedState=Ee}}function jm(r,o,u){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var f=r[o],_=f.callback;if(_!==null){if(f.callback=null,f=u,typeof _!="function")throw Error(t(191,_));_.call(f)}}}var Sa={},Bi=br(Sa),Ea=br(Sa),Ta=br(Sa);function us(r){if(r===Sa)throw Error(t(174));return r}function md(r,o){switch($t(Ta,o),$t(Ea,r),$t(Bi,Sa),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:ve(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=ve(o,r)}Qt(Bi),$t(Bi,o)}function io(){Qt(Bi),Qt(Ea),Qt(Ta)}function Ym(r){us(Ta.current);var o=us(Bi.current),u=ve(o,r.type);o!==u&&($t(Ea,r),$t(Bi,u))}function gd(r){Ea.current===r&&(Qt(Bi),Qt(Ea))}var en=br(0);function jl(r){for(var o=r;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var _d=[];function vd(){for(var r=0;r<_d.length;r++)_d[r]._workInProgressVersionPrimary=null;_d.length=0}var Yl=T.ReactCurrentDispatcher,xd=T.ReactCurrentBatchConfig,cs=0,tn=null,cn=null,_n=null,ql=!1,wa=!1,Aa=0,$y=0;function Rn(){throw Error(t(321))}function yd(r,o){if(o===null)return!1;for(var u=0;u<o.length&&u<r.length;u++)if(!yi(r[u],o[u]))return!1;return!0}function Md(r,o,u,f,_,M){if(cs=M,tn=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Yl.current=r===null||r.memoizedState===null?Jy:eM,r=u(f,_),wa){M=0;do{if(wa=!1,Aa=0,25<=M)throw Error(t(301));M+=1,_n=cn=null,o.updateQueue=null,Yl.current=tM,r=u(f,_)}while(wa)}if(Yl.current=Zl,o=cn!==null&&cn.next!==null,cs=0,_n=cn=tn=null,ql=!1,o)throw Error(t(300));return r}function Sd(){var r=Aa!==0;return Aa=0,r}function Vi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?tn.memoizedState=_n=r:_n=_n.next=r,_n}function ai(){if(cn===null){var r=tn.alternate;r=r!==null?r.memoizedState:null}else r=cn.next;var o=_n===null?tn.memoizedState:_n.next;if(o!==null)_n=o,cn=r;else{if(r===null)throw Error(t(310));cn=r,r={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},_n===null?tn.memoizedState=_n=r:_n=_n.next=r}return _n}function Ra(r,o){return typeof o=="function"?o(r):o}function Ed(r){var o=ai(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=r;var f=cn,_=f.baseQueue,M=u.pending;if(M!==null){if(_!==null){var w=_.next;_.next=M.next,M.next=w}f.baseQueue=_=M,u.pending=null}if(_!==null){M=_.next,f=f.baseState;var F=w=null,G=null,re=M;do{var ye=re.lane;if((cs&ye)===ye)G!==null&&(G=G.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),f=re.hasEagerState?re.eagerState:r(f,re.action);else{var Ee={lane:ye,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};G===null?(F=G=Ee,w=f):G=G.next=Ee,tn.lanes|=ye,ds|=ye}re=re.next}while(re!==null&&re!==M);G===null?w=f:G.next=F,yi(f,o.memoizedState)||(jn=!0),o.memoizedState=f,o.baseState=w,o.baseQueue=G,u.lastRenderedState=f}if(r=u.interleaved,r!==null){_=r;do M=_.lane,tn.lanes|=M,ds|=M,_=_.next;while(_!==r)}else _===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function Td(r){var o=ai(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=r;var f=u.dispatch,_=u.pending,M=o.memoizedState;if(_!==null){u.pending=null;var w=_=_.next;do M=r(M,w.action),w=w.next;while(w!==_);yi(M,o.memoizedState)||(jn=!0),o.memoizedState=M,o.baseQueue===null&&(o.baseState=M),u.lastRenderedState=M}return[M,f]}function qm(){}function $m(r,o){var u=tn,f=ai(),_=o(),M=!yi(f.memoizedState,_);if(M&&(f.memoizedState=_,jn=!0),f=f.queue,wd(Qm.bind(null,u,f,r),[r]),f.getSnapshot!==o||M||_n!==null&&_n.memoizedState.tag&1){if(u.flags|=2048,ba(9,Zm.bind(null,u,f,_,o),void 0,null),vn===null)throw Error(t(349));(cs&30)!==0||Km(u,o,_)}return _}function Km(r,o,u){r.flags|=16384,r={getSnapshot:o,value:u},o=tn.updateQueue,o===null?(o={lastEffect:null,stores:null},tn.updateQueue=o,o.stores=[r]):(u=o.stores,u===null?o.stores=[r]:u.push(r))}function Zm(r,o,u,f){o.value=u,o.getSnapshot=f,Jm(o)&&eg(r)}function Qm(r,o,u){return u(function(){Jm(o)&&eg(r)})}function Jm(r){var o=r.getSnapshot;r=r.value;try{var u=o();return!yi(r,u)}catch{return!0}}function eg(r){var o=sr(r,1);o!==null&&wi(o,r,1,-1)}function tg(r){var o=Vi();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:r},o.queue=r,r=r.dispatch=Qy.bind(null,tn,r),[o.memoizedState,r]}function ba(r,o,u,f){return r={tag:r,create:o,destroy:u,deps:f,next:null},o=tn.updateQueue,o===null?(o={lastEffect:null,stores:null},tn.updateQueue=o,o.lastEffect=r.next=r):(u=o.lastEffect,u===null?o.lastEffect=r.next=r:(f=u.next,u.next=r,r.next=f,o.lastEffect=r)),r}function ng(){return ai().memoizedState}function $l(r,o,u,f){var _=Vi();tn.flags|=r,_.memoizedState=ba(1|o,u,void 0,f===void 0?null:f)}function Kl(r,o,u,f){var _=ai();f=f===void 0?null:f;var M=void 0;if(cn!==null){var w=cn.memoizedState;if(M=w.destroy,f!==null&&yd(f,w.deps)){_.memoizedState=ba(o,u,M,f);return}}tn.flags|=r,_.memoizedState=ba(1|o,u,M,f)}function ig(r,o){return $l(8390656,8,r,o)}function wd(r,o){return Kl(2048,8,r,o)}function rg(r,o){return Kl(4,2,r,o)}function sg(r,o){return Kl(4,4,r,o)}function og(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function ag(r,o,u){return u=u!=null?u.concat([r]):null,Kl(4,4,og.bind(null,o,r),u)}function Ad(){}function lg(r,o){var u=ai();o=o===void 0?null:o;var f=u.memoizedState;return f!==null&&o!==null&&yd(o,f[1])?f[0]:(u.memoizedState=[r,o],r)}function ug(r,o){var u=ai();o=o===void 0?null:o;var f=u.memoizedState;return f!==null&&o!==null&&yd(o,f[1])?f[0]:(r=r(),u.memoizedState=[r,o],r)}function cg(r,o,u){return(cs&21)===0?(r.baseState&&(r.baseState=!1,jn=!0),r.memoizedState=u):(yi(u,o)||(u=Un(),tn.lanes|=u,ds|=u,r.baseState=!0),o)}function Ky(r,o){var u=Rt;Rt=u!==0&&4>u?u:4,r(!0);var f=xd.transition;xd.transition={};try{r(!1),o()}finally{Rt=u,xd.transition=f}}function dg(){return ai().memoizedState}function Zy(r,o,u){var f=Or(r);if(u={lane:f,action:u,hasEagerState:!1,eagerState:null,next:null},hg(r))fg(o,u);else if(u=Gm(r,o,u,f),u!==null){var _=Fn();wi(u,r,f,_),pg(u,o,f)}}function Qy(r,o,u){var f=Or(r),_={lane:f,action:u,hasEagerState:!1,eagerState:null,next:null};if(hg(r))fg(o,_);else{var M=r.alternate;if(r.lanes===0&&(M===null||M.lanes===0)&&(M=o.lastRenderedReducer,M!==null))try{var w=o.lastRenderedState,F=M(w,u);if(_.hasEagerState=!0,_.eagerState=F,yi(F,w)){var G=o.interleaved;G===null?(_.next=_,fd(o)):(_.next=G.next,G.next=_),o.interleaved=_;return}}catch{}finally{}u=Gm(r,o,_,f),u!==null&&(_=Fn(),wi(u,r,f,_),pg(u,o,f))}}function hg(r){var o=r.alternate;return r===tn||o!==null&&o===tn}function fg(r,o){wa=ql=!0;var u=r.pending;u===null?o.next=o:(o.next=u.next,u.next=o),r.pending=o}function pg(r,o,u){if((u&4194240)!==0){var f=o.lanes;f&=r.pendingLanes,u|=f,o.lanes=u,is(r,u)}}var Zl={readContext:oi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Jy={readContext:oi,useCallback:function(r,o){return Vi().memoizedState=[r,o===void 0?null:o],r},useContext:oi,useEffect:ig,useImperativeHandle:function(r,o,u){return u=u!=null?u.concat([r]):null,$l(4194308,4,og.bind(null,o,r),u)},useLayoutEffect:function(r,o){return $l(4194308,4,r,o)},useInsertionEffect:function(r,o){return $l(4,2,r,o)},useMemo:function(r,o){var u=Vi();return o=o===void 0?null:o,r=r(),u.memoizedState=[r,o],r},useReducer:function(r,o,u){var f=Vi();return o=u!==void 0?u(o):o,f.memoizedState=f.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},f.queue=r,r=r.dispatch=Zy.bind(null,tn,r),[f.memoizedState,r]},useRef:function(r){var o=Vi();return r={current:r},o.memoizedState=r},useState:tg,useDebugValue:Ad,useDeferredValue:function(r){return Vi().memoizedState=r},useTransition:function(){var r=tg(!1),o=r[0];return r=Ky.bind(null,r[1]),Vi().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,u){var f=tn,_=Vi();if(Jt){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),vn===null)throw Error(t(349));(cs&30)!==0||Km(f,o,u)}_.memoizedState=u;var M={value:u,getSnapshot:o};return _.queue=M,ig(Qm.bind(null,f,M,r),[r]),f.flags|=2048,ba(9,Zm.bind(null,f,M,u,o),void 0,null),u},useId:function(){var r=Vi(),o=vn.identifierPrefix;if(Jt){var u=rr,f=ir;u=(f&~(1<<32-Pt(f)-1)).toString(32)+u,o=":"+o+"R"+u,u=Aa++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=$y++,o=":"+o+"r"+u.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},eM={readContext:oi,useCallback:lg,useContext:oi,useEffect:wd,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:Ed,useRef:ng,useState:function(){return Ed(Ra)},useDebugValue:Ad,useDeferredValue:function(r){var o=ai();return cg(o,cn.memoizedState,r)},useTransition:function(){var r=Ed(Ra)[0],o=ai().memoizedState;return[r,o]},useMutableSource:qm,useSyncExternalStore:$m,useId:dg,unstable_isNewReconciler:!1},tM={readContext:oi,useCallback:lg,useContext:oi,useEffect:wd,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:Td,useRef:ng,useState:function(){return Td(Ra)},useDebugValue:Ad,useDeferredValue:function(r){var o=ai();return cn===null?o.memoizedState=r:cg(o,cn.memoizedState,r)},useTransition:function(){var r=Td(Ra)[0],o=ai().memoizedState;return[r,o]},useMutableSource:qm,useSyncExternalStore:$m,useId:dg,unstable_isNewReconciler:!1};function Si(r,o){if(r&&r.defaultProps){o=ne({},o),r=r.defaultProps;for(var u in r)o[u]===void 0&&(o[u]=r[u]);return o}return o}function Rd(r,o,u,f){o=r.memoizedState,u=u(f,o),u=u==null?o:ne({},o,u),r.memoizedState=u,r.lanes===0&&(r.updateQueue.baseState=u)}var Ql={isMounted:function(r){return(r=r._reactInternals)?Fi(r)===r:!1},enqueueSetState:function(r,o,u){r=r._reactInternals;var f=Fn(),_=Or(r),M=or(f,_);M.payload=o,u!=null&&(M.callback=u),o=Ir(r,M,_),o!==null&&(wi(o,r,_,f),Wl(o,r,_))},enqueueReplaceState:function(r,o,u){r=r._reactInternals;var f=Fn(),_=Or(r),M=or(f,_);M.tag=1,M.payload=o,u!=null&&(M.callback=u),o=Ir(r,M,_),o!==null&&(wi(o,r,_,f),Wl(o,r,_))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var u=Fn(),f=Or(r),_=or(u,f);_.tag=2,o!=null&&(_.callback=o),o=Ir(r,_,f),o!==null&&(wi(o,r,f,u),Wl(o,r,f))}};function mg(r,o,u,f,_,M,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,M,w):o.prototype&&o.prototype.isPureReactComponent?!pa(u,f)||!pa(_,M):!0}function gg(r,o,u){var f=!1,_=Cr,M=o.contextType;return typeof M=="object"&&M!==null?M=oi(M):(_=Xn(o)?ss:An.current,f=o.contextTypes,M=(f=f!=null)?Ks(r,_):Cr),o=new o(u,M),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ql,r.stateNode=o,o._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=_,r.__reactInternalMemoizedMaskedChildContext=M),o}function _g(r,o,u,f){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,f),o.state!==r&&Ql.enqueueReplaceState(o,o.state,null)}function bd(r,o,u,f){var _=r.stateNode;_.props=u,_.state=r.memoizedState,_.refs={},pd(r);var M=o.contextType;typeof M=="object"&&M!==null?_.context=oi(M):(M=Xn(o)?ss:An.current,_.context=Ks(r,M)),_.state=r.memoizedState,M=o.getDerivedStateFromProps,typeof M=="function"&&(Rd(r,o,M,u),_.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(o=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),o!==_.state&&Ql.enqueueReplaceState(_,_.state,null),Xl(r,u,_,f),_.state=r.memoizedState),typeof _.componentDidMount=="function"&&(r.flags|=4194308)}function ro(r,o){try{var u="",f=o;do u+=He(f),f=f.return;while(f);var _=u}catch(M){_=`
Error generating stack: `+M.message+`
`+M.stack}return{value:r,source:o,stack:_,digest:null}}function Cd(r,o,u){return{value:r,source:null,stack:u??null,digest:o??null}}function Pd(r,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var nM=typeof WeakMap=="function"?WeakMap:Map;function vg(r,o,u){u=or(-1,u),u.tag=3,u.payload={element:null};var f=o.value;return u.callback=function(){su||(su=!0,Xd=f),Pd(r,o)},u}function xg(r,o,u){u=or(-1,u),u.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var _=o.value;u.payload=function(){return f(_)},u.callback=function(){Pd(r,o)}}var M=r.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(u.callback=function(){Pd(r,o),typeof f!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),u}function yg(r,o,u){var f=r.pingCache;if(f===null){f=r.pingCache=new nM;var _=new Set;f.set(o,_)}else _=f.get(o),_===void 0&&(_=new Set,f.set(o,_));_.has(u)||(_.add(u),r=gM.bind(null,r,o,u),o.then(r,r))}function Mg(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function Sg(r,o,u,f,_){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=or(-1,1),o.tag=2,Ir(u,o,1))),u.lanes|=1),r):(r.flags|=65536,r.lanes=_,r)}var iM=T.ReactCurrentOwner,jn=!1;function On(r,o,u,f){o.child=r===null?Hm(o,null,u,f):eo(o,r.child,u,f)}function Eg(r,o,u,f,_){u=u.render;var M=o.ref;return no(o,_),f=Md(r,o,u,f,M,_),u=Sd(),r!==null&&!jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~_,ar(r,o,_)):(Jt&&u&&rd(o),o.flags|=1,On(r,o,f,_),o.child)}function Tg(r,o,u,f,_){if(r===null){var M=u.type;return typeof M=="function"&&!Qd(M)&&M.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=M,wg(r,o,M,f,_)):(r=du(u.type,null,f,o,o.mode,_),r.ref=o.ref,r.return=o,o.child=r)}if(M=r.child,(r.lanes&_)===0){var w=M.memoizedProps;if(u=u.compare,u=u!==null?u:pa,u(w,f)&&r.ref===o.ref)return ar(r,o,_)}return o.flags|=1,r=kr(M,f),r.ref=o.ref,r.return=o,o.child=r}function wg(r,o,u,f,_){if(r!==null){var M=r.memoizedProps;if(pa(M,f)&&r.ref===o.ref)if(jn=!1,o.pendingProps=f=M,(r.lanes&_)!==0)(r.flags&131072)!==0&&(jn=!0);else return o.lanes=r.lanes,ar(r,o,_)}return Ld(r,o,u,f,_)}function Ag(r,o,u){var f=o.pendingProps,_=f.children,M=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(oo,Jn),Jn|=u;else{if((u&1073741824)===0)return r=M!==null?M.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,$t(oo,Jn),Jn|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=M!==null?M.baseLanes:u,$t(oo,Jn),Jn|=f}else M!==null?(f=M.baseLanes|u,o.memoizedState=null):f=u,$t(oo,Jn),Jn|=f;return On(r,o,_,u),o.child}function Rg(r,o){var u=o.ref;(r===null&&u!==null||r!==null&&r.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Ld(r,o,u,f,_){var M=Xn(u)?ss:An.current;return M=Ks(o,M),no(o,_),u=Md(r,o,u,f,M,_),f=Sd(),r!==null&&!jn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~_,ar(r,o,_)):(Jt&&f&&rd(o),o.flags|=1,On(r,o,u,_),o.child)}function bg(r,o,u,f,_){if(Xn(u)){var M=!0;Ol(o)}else M=!1;if(no(o,_),o.stateNode===null)eu(r,o),gg(o,u,f),bd(o,u,f,_),f=!0;else if(r===null){var w=o.stateNode,F=o.memoizedProps;w.props=F;var G=w.context,re=u.contextType;typeof re=="object"&&re!==null?re=oi(re):(re=Xn(u)?ss:An.current,re=Ks(o,re));var ye=u.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==f||G!==re)&&_g(o,w,f,re),Lr=!1;var xe=o.memoizedState;w.state=xe,Xl(o,f,w,_),G=o.memoizedState,F!==f||xe!==G||Wn.current||Lr?(typeof ye=="function"&&(Rd(o,u,ye,f),G=o.memoizedState),(F=Lr||mg(o,u,F,f,xe,G,re))?(Ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=G),w.props=f,w.state=G,w.context=re,f=F):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{w=o.stateNode,Wm(r,o),F=o.memoizedProps,re=o.type===o.elementType?F:Si(o.type,F),w.props=re,Ee=o.pendingProps,xe=w.context,G=u.contextType,typeof G=="object"&&G!==null?G=oi(G):(G=Xn(u)?ss:An.current,G=Ks(o,G));var Ve=u.getDerivedStateFromProps;(ye=typeof Ve=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==Ee||xe!==G)&&_g(o,w,f,G),Lr=!1,xe=o.memoizedState,w.state=xe,Xl(o,f,w,_);var qe=o.memoizedState;F!==Ee||xe!==qe||Wn.current||Lr?(typeof Ve=="function"&&(Rd(o,u,Ve,f),qe=o.memoizedState),(re=Lr||mg(o,u,re,f,xe,qe,G)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,qe,G),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,qe,G)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===r.memoizedProps&&xe===r.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===r.memoizedProps&&xe===r.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=qe),w.props=f,w.state=qe,w.context=G,f=re):(typeof w.componentDidUpdate!="function"||F===r.memoizedProps&&xe===r.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===r.memoizedProps&&xe===r.memoizedState||(o.flags|=1024),f=!1)}return Id(r,o,u,f,M,_)}function Id(r,o,u,f,_,M){Rg(r,o);var w=(o.flags&128)!==0;if(!f&&!w)return _&&Nm(o,u,!1),ar(r,o,M);f=o.stateNode,iM.current=o;var F=w&&typeof u.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,r!==null&&w?(o.child=eo(o,r.child,null,M),o.child=eo(o,null,F,M)):On(r,o,F,M),o.memoizedState=f.state,_&&Nm(o,u,!0),o.child}function Cg(r){var o=r.stateNode;o.pendingContext?Lm(r,o.pendingContext,o.pendingContext!==o.context):o.context&&Lm(r,o.context,!1),md(r,o.containerInfo)}function Pg(r,o,u,f,_){return Js(),ld(_),o.flags|=256,On(r,o,u,f),o.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Dd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Lg(r,o,u){var f=o.pendingProps,_=en.current,M=!1,w=(o.flags&128)!==0,F;if((F=w)||(F=r!==null&&r.memoizedState===null?!1:(_&2)!==0),F?(M=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(_|=1),$t(en,_&1),r===null)return ad(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=f.children,r=f.fallback,M?(f=o.mode,M=o.child,w={mode:"hidden",children:w},(f&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=w):M=hu(w,f,0,null),r=ms(r,f,u,null),M.return=o,r.return=o,M.sibling=r,o.child=M,o.child.memoizedState=Dd(u),o.memoizedState=Nd,r):Ud(o,w));if(_=r.memoizedState,_!==null&&(F=_.dehydrated,F!==null))return rM(r,o,w,f,F,_,u);if(M){M=f.fallback,w=o.mode,_=r.child,F=_.sibling;var G={mode:"hidden",children:f.children};return(w&1)===0&&o.child!==_?(f=o.child,f.childLanes=0,f.pendingProps=G,o.deletions=null):(f=kr(_,G),f.subtreeFlags=_.subtreeFlags&14680064),F!==null?M=kr(F,M):(M=ms(M,w,u,null),M.flags|=2),M.return=o,f.return=o,f.sibling=M,o.child=f,f=M,M=o.child,w=r.child.memoizedState,w=w===null?Dd(u):{baseLanes:w.baseLanes|u,cachePool:null,transitions:w.transitions},M.memoizedState=w,M.childLanes=r.childLanes&~u,o.memoizedState=Nd,f}return M=r.child,r=M.sibling,f=kr(M,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=u),f.return=o,f.sibling=null,r!==null&&(u=o.deletions,u===null?(o.deletions=[r],o.flags|=16):u.push(r)),o.child=f,o.memoizedState=null,f}function Ud(r,o){return o=hu({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function Jl(r,o,u,f){return f!==null&&ld(f),eo(o,r.child,null,u),r=Ud(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function rM(r,o,u,f,_,M,w){if(u)return o.flags&256?(o.flags&=-257,f=Cd(Error(t(422))),Jl(r,o,w,f)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(M=f.fallback,_=o.mode,f=hu({mode:"visible",children:f.children},_,0,null),M=ms(M,_,w,null),M.flags|=2,f.return=o,M.return=o,f.sibling=M,o.child=f,(o.mode&1)!==0&&eo(o,r.child,null,w),o.child.memoizedState=Dd(w),o.memoizedState=Nd,M);if((o.mode&1)===0)return Jl(r,o,w,null);if(_.data==="$!"){if(f=_.nextSibling&&_.nextSibling.dataset,f)var F=f.dgst;return f=F,M=Error(t(419)),f=Cd(M,f,void 0),Jl(r,o,w,f)}if(F=(w&r.childLanes)!==0,jn||F){if(f=vn,f!==null){switch(w&-w){case 4:_=2;break;case 16:_=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:_=32;break;case 536870912:_=268435456;break;default:_=0}_=(_&(f.suspendedLanes|w))!==0?0:_,_!==0&&_!==M.retryLane&&(M.retryLane=_,sr(r,_),wi(f,r,_,-1))}return Zd(),f=Cd(Error(t(421))),Jl(r,o,w,f)}return _.data==="$?"?(o.flags|=128,o.child=r.child,o=_M.bind(null,r),_._reactRetry=o,null):(r=M.treeContext,Qn=Rr(_.nextSibling),Zn=o,Jt=!0,Mi=null,r!==null&&(ri[si++]=ir,ri[si++]=rr,ri[si++]=os,ir=r.id,rr=r.overflow,os=o),o=Ud(o,f.children),o.flags|=4096,o)}function Ig(r,o,u){r.lanes|=o;var f=r.alternate;f!==null&&(f.lanes|=o),hd(r.return,o,u)}function Od(r,o,u,f,_){var M=r.memoizedState;M===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:u,tailMode:_}:(M.isBackwards=o,M.rendering=null,M.renderingStartTime=0,M.last=f,M.tail=u,M.tailMode=_)}function Ng(r,o,u){var f=o.pendingProps,_=f.revealOrder,M=f.tail;if(On(r,o,f.children,u),f=en.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ig(r,u,o);else if(r.tag===19)Ig(r,u,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if($t(en,f),(o.mode&1)===0)o.memoizedState=null;else switch(_){case"forwards":for(u=o.child,_=null;u!==null;)r=u.alternate,r!==null&&jl(r)===null&&(_=u),u=u.sibling;u=_,u===null?(_=o.child,o.child=null):(_=u.sibling,u.sibling=null),Od(o,!1,_,u,M);break;case"backwards":for(u=null,_=o.child,o.child=null;_!==null;){if(r=_.alternate,r!==null&&jl(r)===null){o.child=_;break}r=_.sibling,_.sibling=u,u=_,_=r}Od(o,!0,u,null,M);break;case"together":Od(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function eu(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function ar(r,o,u){if(r!==null&&(o.dependencies=r.dependencies),ds|=o.lanes,(u&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,u=kr(r,r.pendingProps),o.child=u,u.return=o;r.sibling!==null;)r=r.sibling,u=u.sibling=kr(r,r.pendingProps),u.return=o;u.sibling=null}return o.child}function sM(r,o,u){switch(o.tag){case 3:Cg(o),Js();break;case 5:Ym(o);break;case 1:Xn(o.type)&&Ol(o);break;case 4:md(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,_=o.memoizedProps.value;$t(Hl,f._currentValue),f._currentValue=_;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?($t(en,en.current&1),o.flags|=128,null):(u&o.child.childLanes)!==0?Lg(r,o,u):($t(en,en.current&1),r=ar(r,o,u),r!==null?r.sibling:null);$t(en,en.current&1);break;case 19:if(f=(u&o.childLanes)!==0,(r.flags&128)!==0){if(f)return Ng(r,o,u);o.flags|=128}if(_=o.memoizedState,_!==null&&(_.rendering=null,_.tail=null,_.lastEffect=null),$t(en,en.current),f)break;return null;case 22:case 23:return o.lanes=0,Ag(r,o,u)}return ar(r,o,u)}var Dg,Fd,Ug,Og;Dg=function(r,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)r.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Fd=function(){},Ug=function(r,o,u,f){var _=r.memoizedProps;if(_!==f){r=o.stateNode,us(Bi.current);var M=null;switch(u){case"input":_=Qe(r,_),f=Qe(r,f),M=[];break;case"select":_=ne({},_,{value:void 0}),f=ne({},f,{value:void 0}),M=[];break;case"textarea":_=qt(r,_),f=qt(r,f),M=[];break;default:typeof _.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Nl)}$e(u,f);var w;u=null;for(re in _)if(!f.hasOwnProperty(re)&&_.hasOwnProperty(re)&&_[re]!=null)if(re==="style"){var F=_[re];for(w in F)F.hasOwnProperty(w)&&(u||(u={}),u[w]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(s.hasOwnProperty(re)?M||(M=[]):(M=M||[]).push(re,null));for(re in f){var G=f[re];if(F=_?.[re],f.hasOwnProperty(re)&&G!==F&&(G!=null||F!=null))if(re==="style")if(F){for(w in F)!F.hasOwnProperty(w)||G&&G.hasOwnProperty(w)||(u||(u={}),u[w]="");for(w in G)G.hasOwnProperty(w)&&F[w]!==G[w]&&(u||(u={}),u[w]=G[w])}else u||(M||(M=[]),M.push(re,u)),u=G;else re==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,F=F?F.__html:void 0,G!=null&&F!==G&&(M=M||[]).push(re,G)):re==="children"?typeof G!="string"&&typeof G!="number"||(M=M||[]).push(re,""+G):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(s.hasOwnProperty(re)?(G!=null&&re==="onScroll"&&Zt("scroll",r),M||F===G||(M=[])):(M=M||[]).push(re,G))}u&&(M=M||[]).push("style",u);var re=M;(o.updateQueue=re)&&(o.flags|=4)}},Og=function(r,o,u,f){u!==f&&(o.flags|=4)};function Ca(r,o){if(!Jt)switch(r.tailMode){case"hidden":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r.tail=null:u.sibling=null;break;case"collapsed":u=r.tail;for(var f=null;u!==null;)u.alternate!==null&&(f=u),u=u.sibling;f===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function bn(r){var o=r.alternate!==null&&r.alternate.child===r.child,u=0,f=0;if(o)for(var _=r.child;_!==null;)u|=_.lanes|_.childLanes,f|=_.subtreeFlags&14680064,f|=_.flags&14680064,_.return=r,_=_.sibling;else for(_=r.child;_!==null;)u|=_.lanes|_.childLanes,f|=_.subtreeFlags,f|=_.flags,_.return=r,_=_.sibling;return r.subtreeFlags|=f,r.childLanes=u,o}function oM(r,o,u){var f=o.pendingProps;switch(sd(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(o),null;case 1:return Xn(o.type)&&Ul(),bn(o),null;case 3:return f=o.stateNode,io(),Qt(Wn),Qt(An),vd(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(Vl(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Mi!==null&&(qd(Mi),Mi=null))),Fd(r,o),bn(o),null;case 5:gd(o);var _=us(Ta.current);if(u=o.type,r!==null&&o.stateNode!=null)Ug(r,o,u,f,_),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return bn(o),null}if(r=us(Bi.current),Vl(o)){f=o.stateNode,u=o.type;var M=o.memoizedProps;switch(f[ki]=o,f[xa]=M,r=(o.mode&1)!==0,u){case"dialog":Zt("cancel",f),Zt("close",f);break;case"iframe":case"object":case"embed":Zt("load",f);break;case"video":case"audio":for(_=0;_<ga.length;_++)Zt(ga[_],f);break;case"source":Zt("error",f);break;case"img":case"image":case"link":Zt("error",f),Zt("load",f);break;case"details":Zt("toggle",f);break;case"input":De(f,M),Zt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!M.multiple},Zt("invalid",f);break;case"textarea":O(f,M),Zt("invalid",f)}$e(u,M),_=null;for(var w in M)if(M.hasOwnProperty(w)){var F=M[w];w==="children"?typeof F=="string"?f.textContent!==F&&(M.suppressHydrationWarning!==!0&&Il(f.textContent,F,r),_=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(M.suppressHydrationWarning!==!0&&Il(f.textContent,F,r),_=["children",""+F]):s.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Zt("scroll",f)}switch(u){case"input":Ge(f),it(f,M,!0);break;case"textarea":Ge(f),Z(f);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(f.onclick=Nl)}f=_,o.updateQueue=f,f!==null&&(o.flags|=4)}else{w=_.nodeType===9?_:_.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=pe(u)),r==="http://www.w3.org/1999/xhtml"?u==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=w.createElement(u,{is:f.is}):(r=w.createElement(u),u==="select"&&(w=r,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):r=w.createElementNS(r,u),r[ki]=o,r[xa]=f,Dg(r,o,!1,!1),o.stateNode=r;e:{switch(w=Le(u,f),u){case"dialog":Zt("cancel",r),Zt("close",r),_=f;break;case"iframe":case"object":case"embed":Zt("load",r),_=f;break;case"video":case"audio":for(_=0;_<ga.length;_++)Zt(ga[_],r);_=f;break;case"source":Zt("error",r),_=f;break;case"img":case"image":case"link":Zt("error",r),Zt("load",r),_=f;break;case"details":Zt("toggle",r),_=f;break;case"input":De(r,f),_=Qe(r,f),Zt("invalid",r);break;case"option":_=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},_=ne({},f,{value:void 0}),Zt("invalid",r);break;case"textarea":O(r,f),_=qt(r,f),Zt("invalid",r);break;default:_=f}$e(u,_),F=_;for(M in F)if(F.hasOwnProperty(M)){var G=F[M];M==="style"?Ie(r,G):M==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Je(r,G)):M==="children"?typeof G=="string"?(u!=="textarea"||G!=="")&&Se(r,G):typeof G=="number"&&Se(r,""+G):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?G!=null&&M==="onScroll"&&Zt("scroll",r):G!=null&&I(r,M,G,w))}switch(u){case"input":Ge(r),it(r,f,!1);break;case"textarea":Ge(r),Z(r);break;case"option":f.value!=null&&r.setAttribute("value",""+Q(f.value));break;case"select":r.multiple=!!f.multiple,M=f.value,M!=null?Gt(r,!!f.multiple,M,!1):f.defaultValue!=null&&Gt(r,!!f.multiple,f.defaultValue,!0);break;default:typeof _.onClick=="function"&&(r.onclick=Nl)}switch(u){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return bn(o),null;case 6:if(r&&o.stateNode!=null)Og(r,o,r.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(u=us(Ta.current),us(Bi.current),Vl(o)){if(f=o.stateNode,u=o.memoizedProps,f[ki]=o,(M=f.nodeValue!==u)&&(r=Zn,r!==null))switch(r.tag){case 3:Il(f.nodeValue,u,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Il(f.nodeValue,u,(r.mode&1)!==0)}M&&(o.flags|=4)}else f=(u.nodeType===9?u:u.ownerDocument).createTextNode(f),f[ki]=o,o.stateNode=f}return bn(o),null;case 13:if(Qt(en),f=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Jt&&Qn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Bm(),Js(),o.flags|=98560,M=!1;else if(M=Vl(o),f!==null&&f.dehydrated!==null){if(r===null){if(!M)throw Error(t(318));if(M=o.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[ki]=o}else Js(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;bn(o),M=!1}else Mi!==null&&(qd(Mi),Mi=null),M=!0;if(!M)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=u,o):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(en.current&1)!==0?dn===0&&(dn=3):Zd())),o.updateQueue!==null&&(o.flags|=4),bn(o),null);case 4:return io(),Fd(r,o),r===null&&_a(o.stateNode.containerInfo),bn(o),null;case 10:return dd(o.type._context),bn(o),null;case 17:return Xn(o.type)&&Ul(),bn(o),null;case 19:if(Qt(en),M=o.memoizedState,M===null)return bn(o),null;if(f=(o.flags&128)!==0,w=M.rendering,w===null)if(f)Ca(M,!1);else{if(dn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(w=jl(r),w!==null){for(o.flags|=128,Ca(M,!1),f=w.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=u,u=o.child;u!==null;)M=u,r=f,M.flags&=14680066,w=M.alternate,w===null?(M.childLanes=0,M.lanes=r,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=w.childLanes,M.lanes=w.lanes,M.child=w.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=w.memoizedProps,M.memoizedState=w.memoizedState,M.updateQueue=w.updateQueue,M.type=w.type,r=w.dependencies,M.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),u=u.sibling;return $t(en,en.current&1|2),o.child}r=r.sibling}M.tail!==null&&j()>ao&&(o.flags|=128,f=!0,Ca(M,!1),o.lanes=4194304)}else{if(!f)if(r=jl(w),r!==null){if(o.flags|=128,f=!0,u=r.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),Ca(M,!0),M.tail===null&&M.tailMode==="hidden"&&!w.alternate&&!Jt)return bn(o),null}else 2*j()-M.renderingStartTime>ao&&u!==1073741824&&(o.flags|=128,f=!0,Ca(M,!1),o.lanes=4194304);M.isBackwards?(w.sibling=o.child,o.child=w):(u=M.last,u!==null?u.sibling=w:o.child=w,M.last=w)}return M.tail!==null?(o=M.tail,M.rendering=o,M.tail=o.sibling,M.renderingStartTime=j(),o.sibling=null,u=en.current,$t(en,f?u&1|2:u&1),o):(bn(o),null);case 22:case 23:return Kd(),f=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(Jn&1073741824)!==0&&(bn(o),o.subtreeFlags&6&&(o.flags|=8192)):bn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function aM(r,o){switch(sd(o),o.tag){case 1:return Xn(o.type)&&Ul(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return io(),Qt(Wn),Qt(An),vd(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return gd(o),null;case 13:if(Qt(en),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Js()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return Qt(en),null;case 4:return io(),null;case 10:return dd(o.type._context),null;case 22:case 23:return Kd(),null;case 24:return null;default:return null}}var tu=!1,Cn=!1,lM=typeof WeakSet=="function"?WeakSet:Set,je=null;function so(r,o){var u=r.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(f){nn(r,o,f)}else u.current=null}function kd(r,o,u){try{u()}catch(f){nn(r,o,f)}}var Fg=!1;function uM(r,o){if(Kc=Ml,r=mm(),Hc(r)){if("selectionStart"in r)var u={start:r.selectionStart,end:r.selectionEnd};else e:{u=(u=r.ownerDocument)&&u.defaultView||window;var f=u.getSelection&&u.getSelection();if(f&&f.rangeCount!==0){u=f.anchorNode;var _=f.anchorOffset,M=f.focusNode;f=f.focusOffset;try{u.nodeType,M.nodeType}catch{u=null;break e}var w=0,F=-1,G=-1,re=0,ye=0,Ee=r,xe=null;t:for(;;){for(var Ve;Ee!==u||_!==0&&Ee.nodeType!==3||(F=w+_),Ee!==M||f!==0&&Ee.nodeType!==3||(G=w+f),Ee.nodeType===3&&(w+=Ee.nodeValue.length),(Ve=Ee.firstChild)!==null;)xe=Ee,Ee=Ve;for(;;){if(Ee===r)break t;if(xe===u&&++re===_&&(F=w),xe===M&&++ye===f&&(G=w),(Ve=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=Ve}u=F===-1||G===-1?null:{start:F,end:G}}else u=null}u=u||{start:0,end:0}}else u=null;for(Zc={focusedElem:r,selectionRange:u},Ml=!1,je=o;je!==null;)if(o=je,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,je=r;else for(;je!==null;){o=je;try{var qe=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Ze=qe.memoizedProps,on=qe.memoizedState,K=o.stateNode,X=K.getSnapshotBeforeUpdate(o.elementType===o.type?Ze:Si(o.type,Ze),on);K.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ee=o.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){nn(o,o.return,be)}if(r=o.sibling,r!==null){r.return=o.return,je=r;break}je=o.return}return qe=Fg,Fg=!1,qe}function Pa(r,o,u){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var _=f=f.next;do{if((_.tag&r)===r){var M=_.destroy;_.destroy=void 0,M!==void 0&&kd(o,u,M)}_=_.next}while(_!==f)}}function nu(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&r)===r){var f=u.create;u.destroy=f()}u=u.next}while(u!==o)}}function Bd(r){var o=r.ref;if(o!==null){var u=r.stateNode;switch(r.tag){case 5:r=u;break;default:r=u}typeof o=="function"?o(r):o.current=r}}function kg(r){var o=r.alternate;o!==null&&(r.alternate=null,kg(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[ki],delete o[xa],delete o[td],delete o[Xy],delete o[jy])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Bg(r){return r.tag===5||r.tag===3||r.tag===4}function Vg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Bg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Vd(r,o,u){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(r,o):u.insertBefore(r,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(r,u)):(o=u,o.appendChild(r)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=Nl));else if(f!==4&&(r=r.child,r!==null))for(Vd(r,o,u),r=r.sibling;r!==null;)Vd(r,o,u),r=r.sibling}function zd(r,o,u){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?u.insertBefore(r,o):u.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(zd(r,o,u),r=r.sibling;r!==null;)zd(r,o,u),r=r.sibling}var Sn=null,Ei=!1;function Nr(r,o,u){for(u=u.child;u!==null;)zg(r,o,u),u=u.sibling}function zg(r,o,u){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(nt,u)}catch{}switch(u.tag){case 5:Cn||so(u,o);case 6:var f=Sn,_=Ei;Sn=null,Nr(r,o,u),Sn=f,Ei=_,Sn!==null&&(Ei?(r=Sn,u=u.stateNode,r.nodeType===8?r.parentNode.removeChild(u):r.removeChild(u)):Sn.removeChild(u.stateNode));break;case 18:Sn!==null&&(Ei?(r=Sn,u=u.stateNode,r.nodeType===8?ed(r.parentNode,u):r.nodeType===1&&ed(r,u),la(r)):ed(Sn,u.stateNode));break;case 4:f=Sn,_=Ei,Sn=u.stateNode.containerInfo,Ei=!0,Nr(r,o,u),Sn=f,Ei=_;break;case 0:case 11:case 14:case 15:if(!Cn&&(f=u.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){_=f=f.next;do{var M=_,w=M.destroy;M=M.tag,w!==void 0&&((M&2)!==0||(M&4)!==0)&&kd(u,o,w),_=_.next}while(_!==f)}Nr(r,o,u);break;case 1:if(!Cn&&(so(u,o),f=u.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=u.memoizedProps,f.state=u.memoizedState,f.componentWillUnmount()}catch(F){nn(u,o,F)}Nr(r,o,u);break;case 21:Nr(r,o,u);break;case 22:u.mode&1?(Cn=(f=Cn)||u.memoizedState!==null,Nr(r,o,u),Cn=f):Nr(r,o,u);break;default:Nr(r,o,u)}}function Hg(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var u=r.stateNode;u===null&&(u=r.stateNode=new lM),o.forEach(function(f){var _=vM.bind(null,r,f);u.has(f)||(u.add(f),f.then(_,_))})}}function Ti(r,o){var u=o.deletions;if(u!==null)for(var f=0;f<u.length;f++){var _=u[f];try{var M=r,w=o,F=w;e:for(;F!==null;){switch(F.tag){case 5:Sn=F.stateNode,Ei=!1;break e;case 3:Sn=F.stateNode.containerInfo,Ei=!0;break e;case 4:Sn=F.stateNode.containerInfo,Ei=!0;break e}F=F.return}if(Sn===null)throw Error(t(160));zg(M,w,_),Sn=null,Ei=!1;var G=_.alternate;G!==null&&(G.return=null),_.return=null}catch(re){nn(_,o,re)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Gg(o,r),o=o.sibling}function Gg(r,o){var u=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Ti(o,r),zi(r),f&4){try{Pa(3,r,r.return),nu(3,r)}catch(Ze){nn(r,r.return,Ze)}try{Pa(5,r,r.return)}catch(Ze){nn(r,r.return,Ze)}}break;case 1:Ti(o,r),zi(r),f&512&&u!==null&&so(u,u.return);break;case 5:if(Ti(o,r),zi(r),f&512&&u!==null&&so(u,u.return),r.flags&32){var _=r.stateNode;try{Se(_,"")}catch(Ze){nn(r,r.return,Ze)}}if(f&4&&(_=r.stateNode,_!=null)){var M=r.memoizedProps,w=u!==null?u.memoizedProps:M,F=r.type,G=r.updateQueue;if(r.updateQueue=null,G!==null)try{F==="input"&&M.type==="radio"&&M.name!=null&&ke(_,M),Le(F,w);var re=Le(F,M);for(w=0;w<G.length;w+=2){var ye=G[w],Ee=G[w+1];ye==="style"?Ie(_,Ee):ye==="dangerouslySetInnerHTML"?Je(_,Ee):ye==="children"?Se(_,Ee):I(_,ye,Ee,re)}switch(F){case"input":Ce(_,M);break;case"textarea":A(_,M);break;case"select":var xe=_._wrapperState.wasMultiple;_._wrapperState.wasMultiple=!!M.multiple;var Ve=M.value;Ve!=null?Gt(_,!!M.multiple,Ve,!1):xe!==!!M.multiple&&(M.defaultValue!=null?Gt(_,!!M.multiple,M.defaultValue,!0):Gt(_,!!M.multiple,M.multiple?[]:"",!1))}_[xa]=M}catch(Ze){nn(r,r.return,Ze)}}break;case 6:if(Ti(o,r),zi(r),f&4){if(r.stateNode===null)throw Error(t(162));_=r.stateNode,M=r.memoizedProps;try{_.nodeValue=M}catch(Ze){nn(r,r.return,Ze)}}break;case 3:if(Ti(o,r),zi(r),f&4&&u!==null&&u.memoizedState.isDehydrated)try{la(o.containerInfo)}catch(Ze){nn(r,r.return,Ze)}break;case 4:Ti(o,r),zi(r);break;case 13:Ti(o,r),zi(r),_=r.child,_.flags&8192&&(M=_.memoizedState!==null,_.stateNode.isHidden=M,!M||_.alternate!==null&&_.alternate.memoizedState!==null||(Wd=j())),f&4&&Hg(r);break;case 22:if(ye=u!==null&&u.memoizedState!==null,r.mode&1?(Cn=(re=Cn)||ye,Ti(o,r),Cn=re):Ti(o,r),zi(r),f&8192){if(re=r.memoizedState!==null,(r.stateNode.isHidden=re)&&!ye&&(r.mode&1)!==0)for(je=r,ye=r.child;ye!==null;){for(Ee=je=ye;je!==null;){switch(xe=je,Ve=xe.child,xe.tag){case 0:case 11:case 14:case 15:Pa(4,xe,xe.return);break;case 1:so(xe,xe.return);var qe=xe.stateNode;if(typeof qe.componentWillUnmount=="function"){f=xe,u=xe.return;try{o=f,qe.props=o.memoizedProps,qe.state=o.memoizedState,qe.componentWillUnmount()}catch(Ze){nn(f,u,Ze)}}break;case 5:so(xe,xe.return);break;case 22:if(xe.memoizedState!==null){jg(Ee);continue}}Ve!==null?(Ve.return=xe,je=Ve):jg(Ee)}ye=ye.sibling}e:for(ye=null,Ee=r;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{_=Ee.stateNode,re?(M=_.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(F=Ee.stateNode,G=Ee.memoizedProps.style,w=G!=null&&G.hasOwnProperty("display")?G.display:null,F.style.display=we("display",w))}catch(Ze){nn(r,r.return,Ze)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=re?"":Ee.memoizedProps}catch(Ze){nn(r,r.return,Ze)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===r)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===r)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===r)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Ti(o,r),zi(r),f&4&&Hg(r);break;case 21:break;default:Ti(o,r),zi(r)}}function zi(r){var o=r.flags;if(o&2){try{e:{for(var u=r.return;u!==null;){if(Bg(u)){var f=u;break e}u=u.return}throw Error(t(160))}switch(f.tag){case 5:var _=f.stateNode;f.flags&32&&(Se(_,""),f.flags&=-33);var M=Vg(r);zd(r,M,_);break;case 3:case 4:var w=f.stateNode.containerInfo,F=Vg(r);Vd(r,F,w);break;default:throw Error(t(161))}}catch(G){nn(r,r.return,G)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function cM(r,o,u){je=r,Wg(r)}function Wg(r,o,u){for(var f=(r.mode&1)!==0;je!==null;){var _=je,M=_.child;if(_.tag===22&&f){var w=_.memoizedState!==null||tu;if(!w){var F=_.alternate,G=F!==null&&F.memoizedState!==null||Cn;F=tu;var re=Cn;if(tu=w,(Cn=G)&&!re)for(je=_;je!==null;)w=je,G=w.child,w.tag===22&&w.memoizedState!==null?Yg(_):G!==null?(G.return=w,je=G):Yg(_);for(;M!==null;)je=M,Wg(M),M=M.sibling;je=_,tu=F,Cn=re}Xg(r)}else(_.subtreeFlags&8772)!==0&&M!==null?(M.return=_,je=M):Xg(r)}}function Xg(r){for(;je!==null;){var o=je;if((o.flags&8772)!==0){var u=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Cn||nu(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!Cn)if(u===null)f.componentDidMount();else{var _=o.elementType===o.type?u.memoizedProps:Si(o.type,u.memoizedProps);f.componentDidUpdate(_,u.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var M=o.updateQueue;M!==null&&jm(o,M,f);break;case 3:var w=o.updateQueue;if(w!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}jm(o,w,u)}break;case 5:var F=o.stateNode;if(u===null&&o.flags&4){u=F;var G=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&u.focus();break;case"img":G.src&&(u.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var re=o.alternate;if(re!==null){var ye=re.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&la(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||o.flags&512&&Bd(o)}catch(xe){nn(o,o.return,xe)}}if(o===r){je=null;break}if(u=o.sibling,u!==null){u.return=o.return,je=u;break}je=o.return}}function jg(r){for(;je!==null;){var o=je;if(o===r){je=null;break}var u=o.sibling;if(u!==null){u.return=o.return,je=u;break}je=o.return}}function Yg(r){for(;je!==null;){var o=je;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{nu(4,o)}catch(G){nn(o,u,G)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var _=o.return;try{f.componentDidMount()}catch(G){nn(o,_,G)}}var M=o.return;try{Bd(o)}catch(G){nn(o,M,G)}break;case 5:var w=o.return;try{Bd(o)}catch(G){nn(o,w,G)}}}catch(G){nn(o,o.return,G)}if(o===r){je=null;break}var F=o.sibling;if(F!==null){F.return=o.return,je=F;break}je=o.return}}var dM=Math.ceil,iu=T.ReactCurrentDispatcher,Hd=T.ReactCurrentOwner,li=T.ReactCurrentBatchConfig,Nt=0,vn=null,an=null,En=0,Jn=0,oo=br(0),dn=0,La=null,ds=0,ru=0,Gd=0,Ia=null,Yn=null,Wd=0,ao=1/0,lr=null,su=!1,Xd=null,Dr=null,ou=!1,Ur=null,au=0,Na=0,jd=null,lu=-1,uu=0;function Fn(){return(Nt&6)!==0?j():lu!==-1?lu:lu=j()}function Or(r){return(r.mode&1)===0?1:(Nt&2)!==0&&En!==0?En&-En:qy.transition!==null?(uu===0&&(uu=Un()),uu):(r=Rt,r!==0||(r=window.event,r=r===void 0?16:$p(r.type)),r)}function wi(r,o,u,f){if(50<Na)throw Na=0,jd=null,Error(t(185));sn(r,u,f),((Nt&2)===0||r!==vn)&&(r===vn&&((Nt&2)===0&&(ru|=u),dn===4&&Fr(r,En)),qn(r,f),u===1&&Nt===0&&(o.mode&1)===0&&(ao=j()+500,Fl&&Pr()))}function qn(r,o){var u=r.callbackNode;ns(r,o);var f=xi(r,r===vn?En:0);if(f===0)u!==null&&q(u),r.callbackNode=null,r.callbackPriority=0;else if(o=f&-f,r.callbackPriority!==o){if(u!=null&&q(u),o===1)r.tag===0?Yy($g.bind(null,r)):Dm($g.bind(null,r)),Gy(function(){(Nt&6)===0&&Pr()}),u=null;else{switch(zp(f)){case 1:u=Ne;break;case 4:u=Ye;break;case 16:u=Be;break;case 536870912:u=ht;break;default:u=Be}u=i_(u,qg.bind(null,r))}r.callbackPriority=o,r.callbackNode=u}}function qg(r,o){if(lu=-1,uu=0,(Nt&6)!==0)throw Error(t(327));var u=r.callbackNode;if(lo()&&r.callbackNode!==u)return null;var f=xi(r,r===vn?En:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||o)o=cu(r,f);else{o=f;var _=Nt;Nt|=2;var M=Zg();(vn!==r||En!==o)&&(lr=null,ao=j()+500,fs(r,o));do try{pM();break}catch(F){Kg(r,F)}while(!0);cd(),iu.current=M,Nt=_,an!==null?o=0:(vn=null,En=0,o=dn)}if(o!==0){if(o===2&&(_=Yt(r),_!==0&&(f=_,o=Yd(r,_))),o===1)throw u=La,fs(r,0),Fr(r,f),qn(r,j()),u;if(o===6)Fr(r,f);else{if(_=r.current.alternate,(f&30)===0&&!hM(_)&&(o=cu(r,f),o===2&&(M=Yt(r),M!==0&&(f=M,o=Yd(r,M))),o===1))throw u=La,fs(r,0),Fr(r,f),qn(r,j()),u;switch(r.finishedWork=_,r.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:ps(r,Yn,lr);break;case 3:if(Fr(r,f),(f&130023424)===f&&(o=Wd+500-j(),10<o)){if(xi(r,0)!==0)break;if(_=r.suspendedLanes,(_&f)!==f){Fn(),r.pingedLanes|=r.suspendedLanes&_;break}r.timeoutHandle=Jc(ps.bind(null,r,Yn,lr),o);break}ps(r,Yn,lr);break;case 4:if(Fr(r,f),(f&4194240)===f)break;for(o=r.eventTimes,_=-1;0<f;){var w=31-Pt(f);M=1<<w,w=o[w],w>_&&(_=w),f&=~M}if(f=_,f=j()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*dM(f/1960))-f,10<f){r.timeoutHandle=Jc(ps.bind(null,r,Yn,lr),f);break}ps(r,Yn,lr);break;case 5:ps(r,Yn,lr);break;default:throw Error(t(329))}}}return qn(r,j()),r.callbackNode===u?qg.bind(null,r):null}function Yd(r,o){var u=Ia;return r.current.memoizedState.isDehydrated&&(fs(r,o).flags|=256),r=cu(r,o),r!==2&&(o=Yn,Yn=u,o!==null&&qd(o)),r}function qd(r){Yn===null?Yn=r:Yn.push.apply(Yn,r)}function hM(r){for(var o=r;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var f=0;f<u.length;f++){var _=u[f],M=_.getSnapshot;_=_.value;try{if(!yi(M(),_))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Fr(r,o){for(o&=~Gd,o&=~ru,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var u=31-Pt(o),f=1<<u;r[u]=-1,o&=~f}}function $g(r){if((Nt&6)!==0)throw Error(t(327));lo();var o=xi(r,0);if((o&1)===0)return qn(r,j()),null;var u=cu(r,o);if(r.tag!==0&&u===2){var f=Yt(r);f!==0&&(o=f,u=Yd(r,f))}if(u===1)throw u=La,fs(r,0),Fr(r,o),qn(r,j()),u;if(u===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,ps(r,Yn,lr),qn(r,j()),null}function $d(r,o){var u=Nt;Nt|=1;try{return r(o)}finally{Nt=u,Nt===0&&(ao=j()+500,Fl&&Pr())}}function hs(r){Ur!==null&&Ur.tag===0&&(Nt&6)===0&&lo();var o=Nt;Nt|=1;var u=li.transition,f=Rt;try{if(li.transition=null,Rt=1,r)return r()}finally{Rt=f,li.transition=u,Nt=o,(Nt&6)===0&&Pr()}}function Kd(){Jn=oo.current,Qt(oo)}function fs(r,o){r.finishedWork=null,r.finishedLanes=0;var u=r.timeoutHandle;if(u!==-1&&(r.timeoutHandle=-1,Hy(u)),an!==null)for(u=an.return;u!==null;){var f=u;switch(sd(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Ul();break;case 3:io(),Qt(Wn),Qt(An),vd();break;case 5:gd(f);break;case 4:io();break;case 13:Qt(en);break;case 19:Qt(en);break;case 10:dd(f.type._context);break;case 22:case 23:Kd()}u=u.return}if(vn=r,an=r=kr(r.current,null),En=Jn=o,dn=0,La=null,Gd=ru=ds=0,Yn=Ia=null,ls!==null){for(o=0;o<ls.length;o++)if(u=ls[o],f=u.interleaved,f!==null){u.interleaved=null;var _=f.next,M=u.pending;if(M!==null){var w=M.next;M.next=_,f.next=w}u.pending=f}ls=null}return r}function Kg(r,o){do{var u=an;try{if(cd(),Yl.current=Zl,ql){for(var f=tn.memoizedState;f!==null;){var _=f.queue;_!==null&&(_.pending=null),f=f.next}ql=!1}if(cs=0,_n=cn=tn=null,wa=!1,Aa=0,Hd.current=null,u===null||u.return===null){dn=1,La=o,an=null;break}e:{var M=r,w=u.return,F=u,G=o;if(o=En,F.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var re=G,ye=F,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ve=Mg(w);if(Ve!==null){Ve.flags&=-257,Sg(Ve,w,F,M,o),Ve.mode&1&&yg(M,re,o),o=Ve,G=re;var qe=o.updateQueue;if(qe===null){var Ze=new Set;Ze.add(G),o.updateQueue=Ze}else qe.add(G);break e}else{if((o&1)===0){yg(M,re,o),Zd();break e}G=Error(t(426))}}else if(Jt&&F.mode&1){var on=Mg(w);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),Sg(on,w,F,M,o),ld(ro(G,F));break e}}M=G=ro(G,F),dn!==4&&(dn=2),Ia===null?Ia=[M]:Ia.push(M),M=w;do{switch(M.tag){case 3:M.flags|=65536,o&=-o,M.lanes|=o;var K=vg(M,G,o);Xm(M,K);break e;case 1:F=G;var X=M.type,ee=M.stateNode;if((M.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Dr===null||!Dr.has(ee)))){M.flags|=65536,o&=-o,M.lanes|=o;var be=xg(M,F,o);Xm(M,be);break e}}M=M.return}while(M!==null)}Jg(u)}catch(et){o=et,an===u&&u!==null&&(an=u=u.return);continue}break}while(!0)}function Zg(){var r=iu.current;return iu.current=Zl,r===null?Zl:r}function Zd(){(dn===0||dn===3||dn===2)&&(dn=4),vn===null||(ds&268435455)===0&&(ru&268435455)===0||Fr(vn,En)}function cu(r,o){var u=Nt;Nt|=2;var f=Zg();(vn!==r||En!==o)&&(lr=null,fs(r,o));do try{fM();break}catch(_){Kg(r,_)}while(!0);if(cd(),Nt=u,iu.current=f,an!==null)throw Error(t(261));return vn=null,En=0,dn}function fM(){for(;an!==null;)Qg(an)}function pM(){for(;an!==null&&!se();)Qg(an)}function Qg(r){var o=n_(r.alternate,r,Jn);r.memoizedProps=r.pendingProps,o===null?Jg(r):an=o,Hd.current=null}function Jg(r){var o=r;do{var u=o.alternate;if(r=o.return,(o.flags&32768)===0){if(u=oM(u,o,Jn),u!==null){an=u;return}}else{if(u=aM(u,o),u!==null){u.flags&=32767,an=u;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{dn=6,an=null;return}}if(o=o.sibling,o!==null){an=o;return}an=o=r}while(o!==null);dn===0&&(dn=5)}function ps(r,o,u){var f=Rt,_=li.transition;try{li.transition=null,Rt=1,mM(r,o,u,f)}finally{li.transition=_,Rt=f}return null}function mM(r,o,u,f){do lo();while(Ur!==null);if((Nt&6)!==0)throw Error(t(327));u=r.finishedWork;var _=r.finishedLanes;if(u===null)return null;if(r.finishedWork=null,r.finishedLanes=0,u===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var M=u.lanes|u.childLanes;if(wn(r,M),r===vn&&(an=vn=null,En=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||ou||(ou=!0,i_(Be,function(){return lo(),null})),M=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||M){M=li.transition,li.transition=null;var w=Rt;Rt=1;var F=Nt;Nt|=4,Hd.current=null,uM(r,u),Gg(u,r),Uy(Zc),Ml=!!Kc,Zc=Kc=null,r.current=u,cM(u),ae(),Nt=F,Rt=w,li.transition=M}else r.current=u;if(ou&&(ou=!1,Ur=r,au=_),M=r.pendingLanes,M===0&&(Dr=null),Ft(u.stateNode),qn(r,j()),o!==null)for(f=r.onRecoverableError,u=0;u<o.length;u++)_=o[u],f(_.value,{componentStack:_.stack,digest:_.digest});if(su)throw su=!1,r=Xd,Xd=null,r;return(au&1)!==0&&r.tag!==0&&lo(),M=r.pendingLanes,(M&1)!==0?r===jd?Na++:(Na=0,jd=r):Na=0,Pr(),null}function lo(){if(Ur!==null){var r=zp(au),o=li.transition,u=Rt;try{if(li.transition=null,Rt=16>r?16:r,Ur===null)var f=!1;else{if(r=Ur,Ur=null,au=0,(Nt&6)!==0)throw Error(t(331));var _=Nt;for(Nt|=4,je=r.current;je!==null;){var M=je,w=M.child;if((je.flags&16)!==0){var F=M.deletions;if(F!==null){for(var G=0;G<F.length;G++){var re=F[G];for(je=re;je!==null;){var ye=je;switch(ye.tag){case 0:case 11:case 15:Pa(8,ye,M)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,je=Ee;else for(;je!==null;){ye=je;var xe=ye.sibling,Ve=ye.return;if(kg(ye),ye===re){je=null;break}if(xe!==null){xe.return=Ve,je=xe;break}je=Ve}}}var qe=M.alternate;if(qe!==null){var Ze=qe.child;if(Ze!==null){qe.child=null;do{var on=Ze.sibling;Ze.sibling=null,Ze=on}while(Ze!==null)}}je=M}}if((M.subtreeFlags&2064)!==0&&w!==null)w.return=M,je=w;else e:for(;je!==null;){if(M=je,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:Pa(9,M,M.return)}var K=M.sibling;if(K!==null){K.return=M.return,je=K;break e}je=M.return}}var X=r.current;for(je=X;je!==null;){w=je;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,je=ee;else e:for(w=X;je!==null;){if(F=je,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:nu(9,F)}}catch(et){nn(F,F.return,et)}if(F===w){je=null;break e}var be=F.sibling;if(be!==null){be.return=F.return,je=be;break e}je=F.return}}if(Nt=_,Pr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(nt,r)}catch{}f=!0}return f}finally{Rt=u,li.transition=o}}return!1}function e_(r,o,u){o=ro(u,o),o=vg(r,o,1),r=Ir(r,o,1),o=Fn(),r!==null&&(sn(r,1,o),qn(r,o))}function nn(r,o,u){if(r.tag===3)e_(r,r,u);else for(;o!==null;){if(o.tag===3){e_(o,r,u);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Dr===null||!Dr.has(f))){r=ro(u,r),r=xg(o,r,1),o=Ir(o,r,1),r=Fn(),o!==null&&(sn(o,1,r),qn(o,r));break}}o=o.return}}function gM(r,o,u){var f=r.pingCache;f!==null&&f.delete(o),o=Fn(),r.pingedLanes|=r.suspendedLanes&u,vn===r&&(En&u)===u&&(dn===4||dn===3&&(En&130023424)===En&&500>j()-Wd?fs(r,0):Gd|=u),qn(r,o)}function t_(r,o){o===0&&((r.mode&1)===0?o=1:(o=At,At<<=1,(At&130023424)===0&&(At=4194304)));var u=Fn();r=sr(r,o),r!==null&&(sn(r,o,u),qn(r,u))}function _M(r){var o=r.memoizedState,u=0;o!==null&&(u=o.retryLane),t_(r,u)}function vM(r,o){var u=0;switch(r.tag){case 13:var f=r.stateNode,_=r.memoizedState;_!==null&&(u=_.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),t_(r,u)}var n_;n_=function(r,o,u){if(r!==null)if(r.memoizedProps!==o.pendingProps||Wn.current)jn=!0;else{if((r.lanes&u)===0&&(o.flags&128)===0)return jn=!1,sM(r,o,u);jn=(r.flags&131072)!==0}else jn=!1,Jt&&(o.flags&1048576)!==0&&Um(o,Bl,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;eu(r,o),r=o.pendingProps;var _=Ks(o,An.current);no(o,u),_=Md(null,o,f,r,_,u);var M=Sd();return o.flags|=1,typeof _=="object"&&_!==null&&typeof _.render=="function"&&_.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Xn(f)?(M=!0,Ol(o)):M=!1,o.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,pd(o),_.updater=Ql,o.stateNode=_,_._reactInternals=o,bd(o,f,r,u),o=Id(null,o,f,!0,M,u)):(o.tag=0,Jt&&M&&rd(o),On(null,o,_,u),o=o.child),o;case 16:f=o.elementType;e:{switch(eu(r,o),r=o.pendingProps,_=f._init,f=_(f._payload),o.type=f,_=o.tag=yM(f),r=Si(f,r),_){case 0:o=Ld(null,o,f,r,u);break e;case 1:o=bg(null,o,f,r,u);break e;case 11:o=Eg(null,o,f,r,u);break e;case 14:o=Tg(null,o,f,Si(f.type,r),u);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),Ld(r,o,f,_,u);case 1:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),bg(r,o,f,_,u);case 3:e:{if(Cg(o),r===null)throw Error(t(387));f=o.pendingProps,M=o.memoizedState,_=M.element,Wm(r,o),Xl(o,f,null,u);var w=o.memoizedState;if(f=w.element,M.isDehydrated)if(M={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=M,o.memoizedState=M,o.flags&256){_=ro(Error(t(423)),o),o=Pg(r,o,f,u,_);break e}else if(f!==_){_=ro(Error(t(424)),o),o=Pg(r,o,f,u,_);break e}else for(Qn=Rr(o.stateNode.containerInfo.firstChild),Zn=o,Jt=!0,Mi=null,u=Hm(o,null,f,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Js(),f===_){o=ar(r,o,u);break e}On(r,o,f,u)}o=o.child}return o;case 5:return Ym(o),r===null&&ad(o),f=o.type,_=o.pendingProps,M=r!==null?r.memoizedProps:null,w=_.children,Qc(f,_)?w=null:M!==null&&Qc(f,M)&&(o.flags|=32),Rg(r,o),On(r,o,w,u),o.child;case 6:return r===null&&ad(o),null;case 13:return Lg(r,o,u);case 4:return md(o,o.stateNode.containerInfo),f=o.pendingProps,r===null?o.child=eo(o,null,f,u):On(r,o,f,u),o.child;case 11:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),Eg(r,o,f,_,u);case 7:return On(r,o,o.pendingProps,u),o.child;case 8:return On(r,o,o.pendingProps.children,u),o.child;case 12:return On(r,o,o.pendingProps.children,u),o.child;case 10:e:{if(f=o.type._context,_=o.pendingProps,M=o.memoizedProps,w=_.value,$t(Hl,f._currentValue),f._currentValue=w,M!==null)if(yi(M.value,w)){if(M.children===_.children&&!Wn.current){o=ar(r,o,u);break e}}else for(M=o.child,M!==null&&(M.return=o);M!==null;){var F=M.dependencies;if(F!==null){w=M.child;for(var G=F.firstContext;G!==null;){if(G.context===f){if(M.tag===1){G=or(-1,u&-u),G.tag=2;var re=M.updateQueue;if(re!==null){re=re.shared;var ye=re.pending;ye===null?G.next=G:(G.next=ye.next,ye.next=G),re.pending=G}}M.lanes|=u,G=M.alternate,G!==null&&(G.lanes|=u),hd(M.return,u,o),F.lanes|=u;break}G=G.next}}else if(M.tag===10)w=M.type===o.type?null:M.child;else if(M.tag===18){if(w=M.return,w===null)throw Error(t(341));w.lanes|=u,F=w.alternate,F!==null&&(F.lanes|=u),hd(w,u,o),w=M.sibling}else w=M.child;if(w!==null)w.return=M;else for(w=M;w!==null;){if(w===o){w=null;break}if(M=w.sibling,M!==null){M.return=w.return,w=M;break}w=w.return}M=w}On(r,o,_.children,u),o=o.child}return o;case 9:return _=o.type,f=o.pendingProps.children,no(o,u),_=oi(_),f=f(_),o.flags|=1,On(r,o,f,u),o.child;case 14:return f=o.type,_=Si(f,o.pendingProps),_=Si(f.type,_),Tg(r,o,f,_,u);case 15:return wg(r,o,o.type,o.pendingProps,u);case 17:return f=o.type,_=o.pendingProps,_=o.elementType===f?_:Si(f,_),eu(r,o),o.tag=1,Xn(f)?(r=!0,Ol(o)):r=!1,no(o,u),gg(o,f,_),bd(o,f,_,u),Id(null,o,f,!0,r,u);case 19:return Ng(r,o,u);case 22:return Ag(r,o,u)}throw Error(t(156,o.tag))};function i_(r,o){return P(r,o)}function xM(r,o,u,f){this.tag=r,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(r,o,u,f){return new xM(r,o,u,f)}function Qd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function yM(r){if(typeof r=="function")return Qd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Y)return 11;if(r===le)return 14}return 2}function kr(r,o){var u=r.alternate;return u===null?(u=ui(r.tag,o,r.key,r.mode),u.elementType=r.elementType,u.type=r.type,u.stateNode=r.stateNode,u.alternate=r,r.alternate=u):(u.pendingProps=o,u.type=r.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=r.flags&14680064,u.childLanes=r.childLanes,u.lanes=r.lanes,u.child=r.child,u.memoizedProps=r.memoizedProps,u.memoizedState=r.memoizedState,u.updateQueue=r.updateQueue,o=r.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=r.sibling,u.index=r.index,u.ref=r.ref,u}function du(r,o,u,f,_,M){var w=2;if(f=r,typeof r=="function")Qd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case D:return ms(u.children,_,M,o);case z:w=8,_|=8;break;case C:return r=ui(12,u,o,_|2),r.elementType=C,r.lanes=M,r;case J:return r=ui(13,u,o,_),r.elementType=J,r.lanes=M,r;case he:return r=ui(19,u,o,_),r.elementType=he,r.lanes=M,r;case te:return hu(u,_,M,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case R:w=10;break e;case B:w=9;break e;case Y:w=11;break e;case le:w=14;break e;case ue:w=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=ui(w,u,o,_),o.elementType=r,o.type=f,o.lanes=M,o}function ms(r,o,u,f){return r=ui(7,r,f,o),r.lanes=u,r}function hu(r,o,u,f){return r=ui(22,r,f,o),r.elementType=te,r.lanes=u,r.stateNode={isHidden:!1},r}function Jd(r,o,u){return r=ui(6,r,null,o),r.lanes=u,r}function eh(r,o,u){return o=ui(4,r.children!==null?r.children:[],r.key,o),o.lanes=u,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function MM(r,o,u,f,_){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tn(0),this.expirationTimes=Tn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.identifierPrefix=f,this.onRecoverableError=_,this.mutableSourceEagerHydrationData=null}function th(r,o,u,f,_,M,w,F,G){return r=new MM(r,o,u,F,G),o===1?(o=1,M===!0&&(o|=8)):o=0,M=ui(3,null,null,o),r.current=M,M.stateNode=r,M.memoizedState={element:f,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},pd(M),r}function SM(r,o,u){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:f==null?null:""+f,children:r,containerInfo:o,implementation:u}}function r_(r){if(!r)return Cr;r=r._reactInternals;e:{if(Fi(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Xn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var u=r.type;if(Xn(u))return Im(r,u,o)}return o}function s_(r,o,u,f,_,M,w,F,G){return r=th(u,f,!0,r,_,M,w,F,G),r.context=r_(null),u=r.current,f=Fn(),_=Or(u),M=or(f,_),M.callback=o??null,Ir(u,M,_),r.current.lanes=_,sn(r,_,f),qn(r,f),r}function fu(r,o,u,f){var _=o.current,M=Fn(),w=Or(_);return u=r_(u),o.context===null?o.context=u:o.pendingContext=u,o=or(M,w),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=Ir(_,o,w),r!==null&&(wi(r,_,w,M),Wl(r,_,w)),w}function pu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function o_(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var u=r.retryLane;r.retryLane=u!==0&&u<o?u:o}}function nh(r,o){o_(r,o),(r=r.alternate)&&o_(r,o)}function EM(){return null}var a_=typeof reportError=="function"?reportError:function(r){console.error(r)};function ih(r){this._internalRoot=r}mu.prototype.render=ih.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));fu(r,o,null,null)},mu.prototype.unmount=ih.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;hs(function(){fu(null,r,null,null)}),o[tr]=null}};function mu(r){this._internalRoot=r}mu.prototype.unstable_scheduleHydration=function(r){if(r){var o=Wp();r={blockedOn:null,target:r,priority:o};for(var u=0;u<Tr.length&&o!==0&&o<Tr[u].priority;u++);Tr.splice(u,0,r),u===0&&Yp(r)}};function rh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function gu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function l_(){}function TM(r,o,u,f,_){if(_){if(typeof f=="function"){var M=f;f=function(){var re=pu(w);M.call(re)}}var w=s_(o,f,r,0,null,!1,!1,"",l_);return r._reactRootContainer=w,r[tr]=w.current,_a(r.nodeType===8?r.parentNode:r),hs(),w}for(;_=r.lastChild;)r.removeChild(_);if(typeof f=="function"){var F=f;f=function(){var re=pu(G);F.call(re)}}var G=th(r,0,!1,null,null,!1,!1,"",l_);return r._reactRootContainer=G,r[tr]=G.current,_a(r.nodeType===8?r.parentNode:r),hs(function(){fu(o,G,u,f)}),G}function _u(r,o,u,f,_){var M=u._reactRootContainer;if(M){var w=M;if(typeof _=="function"){var F=_;_=function(){var G=pu(w);F.call(G)}}fu(o,w,r,_)}else w=TM(u,o,r,_,f);return pu(w)}Hp=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var u=un(o.pendingLanes);u!==0&&(is(o,u|1),qn(o,j()),(Nt&6)===0&&(ao=j()+500,Pr()))}break;case 13:hs(function(){var f=sr(r,1);if(f!==null){var _=Fn();wi(f,r,1,_)}}),nh(r,1)}},Cc=function(r){if(r.tag===13){var o=sr(r,134217728);if(o!==null){var u=Fn();wi(o,r,134217728,u)}nh(r,134217728)}},Gp=function(r){if(r.tag===13){var o=Or(r),u=sr(r,o);if(u!==null){var f=Fn();wi(u,r,o,f)}nh(r,o)}},Wp=function(){return Rt},Xp=function(r,o){var u=Rt;try{return Rt=r,o()}finally{Rt=u}},Te=function(r,o,u){switch(o){case"input":if(Ce(r,u),o=u.name,u.type==="radio"&&o!=null){for(u=r;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var f=u[o];if(f!==r&&f.form===r.form){var _=Dl(f);if(!_)throw Error(t(90));xt(f),Ce(f,_)}}}break;case"textarea":A(r,u);break;case"select":o=u.value,o!=null&&Gt(r,!!u.multiple,o,!1)}},mt=$d,It=hs;var wM={usingClientEntryPoint:!1,Events:[ya,qs,Dl,ge,Xe,$d]},Da={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AM={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Vs(r),r===null?null:r.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||EM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{nt=vu.inject(AM),gt=vu}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wM,$n.createPortal=function(r,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(o))throw Error(t(200));return SM(r,o,null,u)},$n.createRoot=function(r,o){if(!rh(r))throw Error(t(299));var u=!1,f="",_=a_;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),o=th(r,1,!1,null,null,u,!1,f,_),r[tr]=o.current,_a(r.nodeType===8?r.parentNode:r),new ih(o)},$n.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Vs(o),r=r===null?null:r.stateNode,r},$n.flushSync=function(r){return hs(r)},$n.hydrate=function(r,o,u){if(!gu(o))throw Error(t(200));return _u(null,r,o,!0,u)},$n.hydrateRoot=function(r,o,u){if(!rh(r))throw Error(t(405));var f=u!=null&&u.hydratedSources||null,_=!1,M="",w=a_;if(u!=null&&(u.unstable_strictMode===!0&&(_=!0),u.identifierPrefix!==void 0&&(M=u.identifierPrefix),u.onRecoverableError!==void 0&&(w=u.onRecoverableError)),o=s_(o,null,r,1,u??null,_,!1,M,w),r[tr]=o.current,_a(r),f)for(r=0;r<f.length;r++)u=f[r],_=u._getVersion,_=_(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,_]:o.mutableSourceEagerHydrationData.push(u,_);return new mu(o)},$n.render=function(r,o,u){if(!gu(o))throw Error(t(200));return _u(null,r,o,!1,u)},$n.unmountComponentAtNode=function(r){if(!gu(r))throw Error(t(40));return r._reactRootContainer?(hs(function(){_u(null,null,r,!1,function(){r._reactRootContainer=null,r[tr]=null})}),!0):!1},$n.unstable_batchedUpdates=$d,$n.unstable_renderSubtreeIntoContainer=function(r,o,u,f){if(!gu(u))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return _u(r,o,u,!1,f)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var g_;function DM(){if(g_)return ah.exports;g_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),ah.exports=NM(),ah.exports}var __;function UM(){if(__)return xu;__=1;var i=DM();return xu.createRoot=i.createRoot,xu.hydrateRoot=i.hydrateRoot,xu}var OM=UM();function I0({text:i}){const e=i.split(/```/);return $.jsx($.Fragment,{children:e.map((t,n)=>n%2===1?$.jsx("pre",{className:"code",children:$.jsx("code",{children:t.replace(/^[\w+-]*\n/,"")})},n):$.jsx("span",{className:"prose",children:t},n))})}function FM({name:i,messages:e,busy:t,open:n,onToggle:s,onSend:a,onStop:l,onHeight:c}){const[d,h]=vt.useState(""),p=vt.useRef(null),m=vt.useRef(null),g=vt.useRef(!1);vt.useEffect(()=>{const S=p.current,E=new ResizeObserver(()=>c(S.getBoundingClientRect().height));return E.observe(S),()=>E.disconnect()},[c]),vt.useEffect(()=>{m.current?.scrollTo({top:m.current.scrollHeight})},[e,n]);const v=S=>{S?.preventDefault();const E=d.trim();!E||t||(a(E),h(""))};return $.jsxs("div",{className:`chat glass ${n?"open":""}`,ref:p,children:[n&&$.jsxs("div",{className:"chat-log",ref:m,children:[e.length===0&&$.jsx("p",{className:"chat-empty",children:"ここに会話の履歴が残ります"}),e.map((S,E)=>$.jsxs("div",{className:`msg ${S.role} ${S.error?"error":""}`,children:[$.jsx("div",{className:"msg-who",children:S.role==="user"?"YOU":i}),$.jsx("div",{className:"msg-body",children:$.jsx(I0,{text:S.content||"…"})})]},E))]}),$.jsxs("form",{className:"chat-input",onSubmit:v,children:[$.jsx("button",{type:"button",className:"icon-btn",onClick:s,"aria-label":n?"履歴を閉じる":"履歴を開く","aria-expanded":n,children:n?"▾":"▴"}),$.jsx("textarea",{rows:1,value:d,placeholder:`${i}に話しかける…`,onChange:S=>h(S.target.value),onCompositionStart:()=>g.current=!0,onCompositionEnd:()=>g.current=!1,onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&!g.current&&!S.nativeEvent.isComposing&&(S.preventDefault(),v())}}),t?$.jsx("button",{type:"button",className:"send-btn stop",onClick:l,children:"停止"}):$.jsx("button",{type:"submit",className:"send-btn",disabled:!d.trim(),children:"送信"})]}),$.jsx("p",{className:"chat-note",children:"患者情報など業務上の個人情報は入力しないでください"})]})}const kM=["SUN","MON","TUE","WED","THU","FRI","SAT"],BM="日月火水木金土",No=i=>String(i).padStart(2,"0");function VM(i,e){return{time:`${No(i.getHours())}:${No(i.getMinutes())}${e?`:${No(i.getSeconds())}`:""}`,date:`${i.getFullYear()}.${No(i.getMonth()+1)}.${No(i.getDate())}`,week:kM[i.getDay()],weekJa:BM[i.getDay()]}}function zM(i,e){const t=i.getHours();return t>=5&&t<11?`おはよう、${e}。今日もよろしくね`:t>=11&&t<17?`こんにちは、${e}。何か手伝えることある？`:t>=17&&t<23?`おかえり、${e}。今日もおつかれさま`:`こんな時間まで起きてるの？ ${e}、無理しないでね`}function HM(i,e){const t=`${i.getHours()}:${No(i.getMinutes())}`;return{"7:00":`おはよう、${e}。朝ごはん食べた？`,"12:00":"お昼の時間だよ。ちゃんと食べてね","15:00":"そろそろ休憩しよう。お茶でもどう？","18:00":"もう夕方だね。今日やり残したことはない？","22:00":"そろそろ明日の準備をしておこうか","0:00":"日付が変わったよ。早めに休んでね"}[t]??null}function GM(i){return i>0&&i%90===0?`${i}分続けてがんばってるね。少し目を休めよう`:null}function WM({corner:i,seconds:e}){const[t,n]=vt.useState(()=>new Date);vt.useEffect(()=>{let a=0;const l=()=>{n(new Date),a=window.setTimeout(l,1e3-Date.now()%1e3+5)};return l(),()=>clearTimeout(a)},[]);const s=VM(t,e);return $.jsxs("div",{className:`clock ${i}`,"aria-label":`${s.date} ${s.weekJa}曜日 ${s.time}`,children:[$.jsxs("div",{className:"clock-date",children:[s.date," ",$.jsx("span",{className:"clock-week",children:s.week})]}),$.jsx("div",{className:"clock-time",children:s.time})]})}const v_=[{id:"gemini",name:"Gemini（Google）",summary:"Googleアカウントがあればすぐ作れて、無料枠があります。まず試すならこれがおすすめ。",cost:"無料枠あり（回数に上限）。上限を超えて使う時は Google Cloud で支払い設定をする。",steps:[{title:"Google AI Studio を開く",body:"スマホのブラウザでも開けます。Googleアカウントでログインし、初回は利用規約に同意します。",link:{label:"Google AI Studio を開く",url:"https://aistudio.google.com/apikey"}},{title:"キーを作る",body:"「Get API key」または「APIキーを作成」を押します。プロジェクトを聞かれたら、新しく作る方を選べばOKです。"},{title:"キーをコピーする",body:"「AIza」で始まる文字列が表示されるので、コピーボタンでコピーします。"},{title:"このアプリに貼る",body:"⚙ →「AI」→ 使うAIを「Gemini（Google）」にして、APIキーの欄に貼り付けて「保存」。"}],models:"おすすめ：gemini-flash-latest（いつも最新の Flash。速くて安い）。よく考えてほしい時：gemini-pro-latest。キーを保存すると、使えるモデルを確かめて自動で選び直します。",cautions:["無料枠で送った内容は、Googleのサービス改善に使われることがあります。個人情報や仕事の情報は入れないでください。"]},{id:"anthropic",name:"Claude（Anthropic）",summary:"文章や考える力が強いAI。先にクレジット（前払い）を買う方式です。",cost:"前払い制（最低5ドル程度から）。使った分だけ減っていきます。Claude の有料プラン（Pro など）とは別の支払いです。",steps:[{title:"Claude Console を開いて登録する",body:"メールアドレスまたはGoogleアカウントで登録・ログインします。",link:{label:"Claude Console を開く",url:"https://console.anthropic.com/"}},{title:"クレジットを買う",body:"「Billing」（請求）からカードを登録し、クレジットを購入します。残高がないとAIは返事をしません。",link:{label:"Billing を開く",url:"https://console.anthropic.com/settings/billing"}},{title:"キーを作る",body:"「API Keys」→「Create Key」を押し、名前（例：YUI）を付けて作成します。",link:{label:"API Keys を開く",url:"https://console.anthropic.com/settings/keys"}},{title:"キーをコピーする",body:"「sk-ant-」で始まる文字列をコピーします。この画面を閉じると二度と表示されないので、必ずここでコピーしてください。"},{title:"このアプリに貼る",body:"⚙ →「AI」→ 使うAIを「Claude（Anthropic）」にして、APIキーの欄に貼り付けて「保存」。"},{title:"使いすぎ防止（おすすめ）",body:"「Limits」で1か月に使える上限額を決めておくと安心です。",link:{label:"Limits を開く",url:"https://console.anthropic.com/settings/limits"}}],models:"おすすめ：claude-sonnet-5-5（バランス型）。安く速く：claude-haiku-5-5。いちばん賢い：claude-opus-5-5（高め）。キーを保存すると、使えるモデルを確かめて自動で選び直します。",cautions:[]},{id:"openai",name:"ChatGPT（OpenAI）",summary:"ChatGPT と同じ会社のAI。支払い設定をしてから使います。",cost:"前払い（クレジット購入）制。ChatGPT Plus などの月額プランとは別の支払いです。",steps:[{title:"OpenAI Platform を開いて登録する",body:"ChatGPT と同じアカウントでログインできます。",link:{label:"OpenAI Platform を開く",url:"https://platform.openai.com/"}},{title:"支払い設定をする",body:"「Settings」→「Billing」でカードを登録し、クレジットを購入します。",link:{label:"Billing を開く",url:"https://platform.openai.com/settings/organization/billing/overview"}},{title:"キーを作る",body:"「API keys」→「Create new secret key」を押し、名前（例：YUI）を付けて作成します。",link:{label:"API keys を開く",url:"https://platform.openai.com/api-keys"}},{title:"キーをコピーする",body:"「sk-」で始まる文字列をコピーします。閉じると二度と表示されないので、ここで必ずコピーしてください。"},{title:"このアプリに貼る",body:"⚙ →「AI」→ 使うAIを「ChatGPT（OpenAI）」にして、APIキーの欄に貼り付けて「保存」。"},{title:"使いすぎ防止（おすすめ）",body:"「Limits」で月の予算（上限）を決めておくと安心です。",link:{label:"Limits を開く",url:"https://platform.openai.com/settings/organization/limits"}}],models:"おすすめ：gpt-5-mini（安くて速い）。よく考えてほしい時：gpt-5。キーを保存すると、使えるモデルを確かめて自動で選び直します。",cautions:[]}],XM=["APIキーはお金がかかる「合い鍵」です。人に見せたり、SNS・チャットに貼ったりしないでください。","もし漏れたかもと思ったら、各サービスの管理画面でそのキーを削除して、新しく作り直してください。","キーはこのアプリの中で暗号化して、この端末にだけ保存します。別の端末で使う時は、その端末でも設定が必要です。","画面のボタン名は各社の変更で変わることがあります。見つからない時は「API Keys」「Billing」に近い名前のメニューを探してください。"];function jM({initial:i="gemini",configured:e,onSetup:t,onClose:n}){const[s,a]=vt.useState(i),l=v_.find(c=>c.id===s);return $.jsx("div",{className:"overlay",onClick:n,children:$.jsxs("div",{className:"settings glass",role:"dialog","aria-label":"APIキーの取り方",onClick:c=>c.stopPropagation(),children:[$.jsxs("header",{className:"settings-head",children:[$.jsx("h2",{children:"GUIDE"}),$.jsx("button",{className:"icon-btn",onClick:n,"aria-label":"閉じる",children:"✕"})]}),$.jsx("nav",{className:"tabs",role:"tablist",children:v_.map(c=>$.jsxs("button",{role:"tab","aria-selected":s===c.id,className:s===c.id?"active":"",onClick:()=>a(c.id),children:[c.name.replace(/（.*）/,""),e[c.id]?" ✓":""]},c.id))}),$.jsxs("div",{className:"settings-body guide",children:[$.jsxs("p",{className:"guide-title",children:[l.name," の APIキーの取り方"]}),$.jsx("p",{children:l.summary}),$.jsxs("p",{className:"hint",children:["料金：",l.cost]}),$.jsx("ol",{className:"steps",children:l.steps.map((c,d)=>$.jsxs("li",{children:[$.jsx("strong",{children:c.title}),$.jsx("span",{children:c.body}),c.link&&$.jsxs("a",{className:"ghost-btn link-btn",href:c.link.url,target:"_blank",rel:"noreferrer",children:[c.link.label," ↗"]})]},d))}),$.jsx("h3",{children:"モデル名"}),$.jsx("p",{className:"hint",children:l.models}),$.jsx("h3",{children:"注意"}),$.jsx("ul",{className:"cautions",children:[...l.cautions,...XM].map(c=>$.jsx("li",{children:c},c))}),$.jsxs("button",{className:"primary-btn",onClick:()=>t(l.id),children:["キーをコピーしたら：",l.name.replace(/（.*）/,"")," を設定する"]})]})]})})}const ch={anthropic:{label:"Claude（Anthropic）",keyHint:"sk-ant-…",models:["claude-sonnet-5-5","claude-haiku-5-5","claude-opus-5-5"],policy:"https://www.anthropic.com/legal/commercial-terms"},openai:{label:"ChatGPT（OpenAI）",keyHint:"sk-…",models:["gpt-5-mini","gpt-5"],policy:"https://openai.com/policies/api-data-usage-policies"},gemini:{label:"Gemini（Google）",keyHint:"AIza…",models:["gemini-flash-latest","gemini-pro-latest"],policy:"https://ai.google.dev/gemini-api/terms"}},YM=20;function qM(i,e=YM){let t=i.filter(n=>n.content.trim()).slice(-e);for(;t.length&&t[0].role!=="user";)t=t.slice(1);return t}let N0=class extends Error{constructor(e,t){super(e),this.status=t}};async function dh(i,e){const t=i.body.getReader(),n=new TextDecoder;let s="";for(;;){const{done:a,value:l}=await t.read();s+=n.decode(l,{stream:!a});const c=s.split(/\r?\n\r?\n/);s=a?"":c.pop();for(const d of c){const h=d.split(/\r?\n/).filter(m=>m.startsWith("data:")).map(m=>m.slice(5).trimStart()).join(`
`);if(!h||h==="[DONE]")continue;let p;try{p=JSON.parse(h)}catch{continue}e(p)}if(a)return}}async function hh(i,e,t,n){const s=await fetch(i,{method:"POST",headers:{"content-type":"application/json",...e},body:JSON.stringify(t),signal:n});if(!s.ok){const a=await s.json().catch(()=>({})),l=Array.isArray(a)?a[0]?.error:a?.error;throw new N0(l?.message??`HTTP ${s.status}`,s.status)}return s}const $M={async anthropic({apiKey:i,model:e,system:t,messages:n,onText:s,signal:a}){const l=await hh("https://api.anthropic.com/v1/messages",{"x-api-key":i,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},{model:e,max_tokens:4e3,system:t,messages:n,stream:!0},a),c={input:0,output:0};let d=!1;if(await dh(l,h=>{if(h.type==="message_start")c.input=h.message?.usage?.input_tokens??0;else if(h.type==="content_block_delta"&&h.delta?.type==="text_delta")s(h.delta.text);else if(h.type==="message_delta")c.output=h.usage?.output_tokens??c.output,h.delta?.stop_reason==="refusal"&&(d=!0);else if(h.type==="error")throw new Error(h.error?.message??"AIの返答が途中で止まりました")}),d)throw new Error("AIがこの内容には答えませんでした");return c},async openai({apiKey:i,model:e,system:t,messages:n,onText:s,signal:a}){const l=await hh("https://api.openai.com/v1/chat/completions",{authorization:`Bearer ${i}`},{model:e,stream:!0,stream_options:{include_usage:!0},messages:[{role:"system",content:t},...n]},a),c={input:0,output:0};return await dh(l,d=>{const h=d.choices?.[0]?.delta?.content;h&&s(h),d.usage&&(c.input=d.usage.prompt_tokens??0),d.usage&&(c.output=d.usage.completion_tokens??0)}),c},async gemini({apiKey:i,model:e,system:t,messages:n,onText:s,signal:a}){const l=await hh(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(e)}:streamGenerateContent?alt=sse`,{"x-goog-api-key":i},{systemInstruction:{parts:[{text:t}]},contents:n.map(p=>({role:p.role==="assistant"?"model":"user",parts:[{text:p.content}]}))},a),c={input:0,output:0};let d="",h=!1;if(await dh(l,p=>{p.promptFeedback?.blockReason&&(d=p.promptFeedback.blockReason);const m=p.candidates?.[0]?.finishReason;m&&!["STOP","MAX_TOKENS"].includes(m)&&(d=m);for(const g of p.candidates?.[0]?.content?.parts??[])g.text&&!g.thought&&(h=!0,s(g.text));p.usageMetadata&&(c.input=p.usageMetadata.promptTokenCount??0,c.output=(p.usageMetadata.candidatesTokenCount??0)+(p.usageMetadata.thoughtsTokenCount??0))}),!h&&d)throw new Error(`AIが返事を止めました（理由：${d}）`);return c}};class Fo extends Error{constructor(e,t,n=!1){super(t?"利用回数の上限に達しました。少し待ってから試してください":n?"AIから返事が届きませんでした。混み合っているみたい。少し時間をおいて試してね":"今AIが混み合っていて返事できませんでした。少し時間をおいて試してね"),this.model=e,this.rateLimited=t,this.timedOut=n}}const KM={gemini:["gemini-flash-lite-latest","gemini-3-flash-preview","gemini-3.1-flash-lite-preview","gemini-pro-latest"],anthropic:["claude-haiku-5-5","claude-sonnet-5-5","claude-opus-5-5"],openai:["gpt-5-mini","gpt-5"]};class nc extends Error{constructor(e){super(`モデル「${e}」が見つかりません。設定でモデル名を確認してください`),this.model=e}}async function fh(i,e){const t=await fetch(i,{headers:e}),n=await t.json().catch(()=>({}));if(!t.ok)throw new N0(n?.error?.message??`HTTP ${t.status}`,t.status);return n}const D0={gemini:/^gemini-[12]\./};async function x_(i,e){return i==="gemini"?((await fh("https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000",{"x-goog-api-key":e})).models??[]).filter(s=>(s.supportedGenerationMethods??[]).includes("generateContent")).map(s=>String(s.name).replace(/^models\//,"")).filter(s=>/^gemini/.test(s)&&!D0.gemini.test(s)&&!/(image|tts|audio|live|embedding|vision|robotics|computer)/.test(s)):i==="openai"?((await fh("https://api.openai.com/v1/models",{authorization:`Bearer ${e}`})).data??[]).map(s=>String(s.id)).filter(s=>/^(gpt-|o\d|chatgpt-)/.test(s)&&!/(audio|realtime|image|tts|transcribe|search|embedding|instruct|codex|moderation)/.test(s)):((await fh("https://api.anthropic.com/v1/models?limit=100",{"x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"})).data??[]).map(n=>String(n.id))}const ZM={gemini:["gemini-flash-latest","gemini-3-flash-preview","gemini-flash-lite-latest","gemini-pro-latest"],anthropic:["claude-sonnet-5-5","claude-haiku-5-5","claude-opus-5-5"],openai:["gpt-5-mini","gpt-5"]};function y_(i,e){if(!e.length)return null;const t={gemini:[/^gemini-flash-latest$/,/^gemini-[\d.]+-flash$/,/flash(?!.*lite)/,/flash/,/pro/],anthropic:[/sonnet/,/haiku/,/opus/],openai:[/^gpt-[\d.]+-mini$/,/^gpt-[\d.]+$/,/mini/,/^gpt/]},n=/(preview|exp|latest-preview|\d{4}-\d{2}-\d{2}|\d{8}$)/,s=a=>(a.match(/\d+(?:[.-]\d+)?/g)??[]).map(l=>parseFloat(l.replace("-","."))).filter(l=>l<100)[0]??0;for(const a of t[i]){const l=e.filter(h=>a.test(h));if(!l.length)continue;const c=l.filter(h=>!n.test(h));return(c.length?c:l).sort((h,p)=>s(p)-s(h)||h.length-p.length)[0]}return e[0]}const QM=3e4,JM=18e4;async function eS(i){if(!i.apiKey)throw new Error("APIキーが設定されていません。右上の ⚙ から設定してください");const e=new AbortController;let t="",n=!1;const s=d=>{t=d,e.abort()},a=()=>e.abort();i.signal?.addEventListener("abort",a);const l=setTimeout(()=>{n=!0,s("")},QM),c=setTimeout(()=>s("AIの返事が長すぎるので途中で止めました"),JM);try{return await $M[i.provider]({...i,signal:e.signal,onText:d=>{clearTimeout(l),i.onText(d)}})}catch(d){throw d?.name==="AbortError"?n?new Fo(i.model,!1,!0):new Error(t||"止めました"):d instanceof TypeError?new Error("通信できませんでした。ネットワークを確認してください"):d?.status===401||d?.status===403?new Error("APIキーが正しくないか、使えない状態です"):d?.status===404?new nc(i.model):d?.status===429?new Fo(i.model,!0):[500,502,503,504,529].includes(d?.status)||/overloaded|high demand|unavailable/i.test(d?.message??"")?new Fo(i.model,!1):d}finally{clearTimeout(l),clearTimeout(c),i.signal?.removeEventListener("abort",a)}}async function tS(i,e,t){const n=Date.now(),s="接続テストです。「OK」とだけ返してください。",l={gemini:{url:`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(t)}:generateContent`,headers:{"x-goog-api-key":e},body:{contents:[{role:"user",parts:[{text:s}]}]}},anthropic:{url:"https://api.anthropic.com/v1/messages",headers:{"x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:{model:t,max_tokens:50,messages:[{role:"user",content:s}]}},openai:{url:"https://api.openai.com/v1/chat/completions",headers:{authorization:`Bearer ${e}`},body:{model:t,messages:[{role:"user",content:s}]}}}[i],c=new AbortController,d=setTimeout(()=>c.abort(),6e4);try{const h=await fetch(l.url,{method:"POST",headers:{"content-type":"application/json",...l.headers},body:JSON.stringify(l.body),signal:c.signal}),p=await h.text(),m=((Date.now()-n)/1e3).toFixed(1);return`HTTP ${h.status}（${m}秒）
${p.slice(0,600)}`}catch(h){return h?.name==="AbortError"?"60秒たっても返事がありませんでした":`通信エラー：${h?.message??h}`}finally{clearTimeout(d)}}function nS(i,e,t){return e==null||t==null?null:(i.input*e+i.output*t)/1e6}const U0=[{id:"schedule",label:"日程管理"},{id:"documents",label:"書類"},{id:"study",label:"勉強"},{id:"dev",label:"アプリ開発"},{id:"invest",label:"投資ニュース"},{id:"chat",label:"雑談"}],hc={name:"ユイ",userCall:"あなた",tone:"やわらかいタメ口",personality:"明るくて気が利く。相手のペースに合わせ、がんばりすぎていたら休むよう声をかける。",purposes:["schedule","documents","study","dev","chat"]},yu={provider:"anthropic",models:{anthropic:"claude-sonnet-5-5",openai:"gpt-5-mini",gemini:"gemini-flash-latest"},priceIn:null,priceOut:null},iS={clock:!0,clockCorner:"top-left",seconds:!0,powerSave:!1,voiceLines:!0},rS=[{id:"ai",label:"AI"},{id:"persona",label:"性格"},{id:"character",label:"キャラ"},{id:"display",label:"表示"}],sS=[{id:"top-left",label:"左上"},{id:"top-right",label:"右上"},{id:"bottom-left",label:"左下"},{id:"bottom-right",label:"右下"}];function oS(i){const[e,t]=vt.useState(i.initialTab??(i.keys[i.ai.provider]?"persona":"ai"));return $.jsx("div",{className:"overlay",onClick:i.onClose,children:$.jsxs("div",{className:"settings glass",role:"dialog","aria-label":"設定",onClick:n=>n.stopPropagation(),children:[$.jsxs("header",{className:"settings-head",children:[$.jsx("h2",{children:"SETTINGS"}),$.jsx("button",{className:"icon-btn",onClick:i.onClose,"aria-label":"閉じる",children:"✕"})]}),$.jsx("nav",{className:"tabs",role:"tablist",children:rS.map(n=>$.jsx("button",{role:"tab","aria-selected":e===n.id,className:e===n.id?"active":"",onClick:()=>t(n.id),children:n.label},n.id))}),$.jsxs("div",{className:"settings-body",children:[e==="ai"&&$.jsx(aS,{...i}),e==="persona"&&$.jsx(lS,{...i}),e==="character"&&$.jsx(uS,{...i}),e==="display"&&$.jsx(cS,{...i}),$.jsxs("p",{className:"version",children:["Project YUI v","0.1.9"]})]})]})})}function aS({ai:i,keys:e,usage:t,onAi:n,onKey:s,onResetUsage:a,onGuide:l,available:c,onLoadModels:d,onTest:h}){const[p,m]=vt.useState(""),g=ch[i.provider],[v,S]=vt.useState(""),E=c[i.provider],[y,x]=vt.useState(e[i.provider]),[b,I]=vt.useState(!1),T=nS(t,i.priceIn,i.priceOut),N=L=>L.trim()===""?null:Math.max(0,Number(L))||0;return $.jsxs($.Fragment,{children:[$.jsxs("label",{className:"field",children:[$.jsx("span",{children:"使うAI"}),$.jsx("select",{value:i.provider,onChange:L=>{const D=L.target.value;n({...i,provider:D}),x(e[D])},children:Object.keys(ch).map(L=>$.jsx("option",{value:L,children:ch[L].label},L))})]}),$.jsxs("label",{className:"field",children:[$.jsx("span",{children:"モデル"}),E?.length?$.jsx("select",{value:i.models[i.provider],onChange:L=>n({...i,models:{...i.models,[i.provider]:L.target.value}}),children:[...new Set([i.models[i.provider],...E])].map(L=>$.jsxs("option",{value:L,children:[L,E.includes(L)?"":"（使えません）"]},L))}):$.jsxs($.Fragment,{children:[$.jsx("input",{list:"models",value:i.models[i.provider],onChange:L=>n({...i,models:{...i.models,[i.provider]:L.target.value.trim()}})}),$.jsx("datalist",{id:"models",children:g.models.map(L=>$.jsx("option",{value:L},L))})]})]}),e[i.provider]&&$.jsxs("div",{className:"row",children:[$.jsx("button",{type:"button",className:"ghost-btn",disabled:v==="…",onClick:async()=>{S("…");try{const L=await d(i.provider);S(`使えるモデルを確認しました（今は ${L}）`)}catch(L){S(`確認できませんでした：${L.message}`)}},children:"使えるモデルを確認"}),$.jsx("button",{type:"button",className:"ghost-btn",disabled:p==="…",onClick:async()=>{m("…"),m(await h(i.provider))},children:"接続テスト"})]}),v&&$.jsx("p",{className:"hint",children:v==="…"?"確認中…":v}),p&&$.jsx("pre",{className:"test-result",children:p==="…"?"テスト中…（最大60秒）":p}),E&&$.jsxs("p",{className:"hint",children:["モデル欄をタップすると、このキーで使える ",E.length," 個のモデルから選べます。"]}),$.jsxs("button",{type:"button",className:"text-link",onClick:()=>l(i.provider),children:["📖 ",g.label," の APIキーの取り方を見る"]}),$.jsxs("label",{className:"field",children:[$.jsx("span",{children:"APIキー"}),$.jsxs("div",{className:"row",children:[$.jsx("input",{type:b?"text":"password",value:y,placeholder:g.keyHint,autoComplete:"off",spellCheck:!1,onChange:L=>x(L.target.value.trim())}),$.jsx("button",{type:"button",className:"ghost-btn",onClick:()=>I(!b),children:b?"隠す":"表示"})]})]}),$.jsxs("div",{className:"row end",children:[e[i.provider]&&$.jsx("button",{className:"ghost-btn",onClick:()=>{s(i.provider,""),x("")},children:"削除"}),$.jsx("button",{className:"primary-btn",disabled:y===e[i.provider],onClick:()=>s(i.provider,y),children:e[i.provider]&&y===e[i.provider]?"保存済み":"保存"})]}),$.jsxs("p",{className:"hint",children:["キーはこの端末の中だけに暗号化して保存し、AIサービスへの接続にだけ使います。念のため、各サービスの管理画面で利用上限額を設定してください。",$.jsx("br",{}),$.jsxs("a",{href:g.policy,target:"_blank",rel:"noreferrer",children:[g.label," のデータの取り扱い"]})]}),$.jsx("h3",{children:"利用量の目安"}),$.jsxs("p",{className:"usage",children:["入力 ",t.input.toLocaleString()," ／ 出力 ",t.output.toLocaleString()," トークン",T!=null&&$.jsxs("strong",{children:["　約 ",T<1?T.toFixed(2):Math.round(T).toLocaleString()," 円"]})]}),$.jsxs("div",{className:"row",children:[$.jsxs("label",{className:"field small",children:[$.jsx("span",{children:"入力の単価（円／100万トークン）"}),$.jsx("input",{inputMode:"decimal",value:i.priceIn??"",onChange:L=>n({...i,priceIn:N(L.target.value)})})]}),$.jsxs("label",{className:"field small",children:[$.jsx("span",{children:"出力の単価"}),$.jsx("input",{inputMode:"decimal",value:i.priceOut??"",onChange:L=>n({...i,priceOut:N(L.target.value)})})]})]}),$.jsx("p",{className:"hint",children:"単価は使っているモデルの料金表を見て入れてください。入れると金額の目安を出します。会話は直近20件だけを送って量を抑えています。"}),$.jsx("button",{className:"ghost-btn",onClick:a,children:"利用量をリセット"})]})}function lS({persona:i,onPersona:e}){const t=n=>e({...i,...n});return $.jsxs($.Fragment,{children:[$.jsxs("label",{className:"field",children:[$.jsx("span",{children:"名前"}),$.jsx("input",{value:i.name,maxLength:20,onChange:n=>t({name:n.target.value}),onBlur:()=>!i.name.trim()&&t({name:hc.name})})]}),$.jsxs("label",{className:"field",children:[$.jsx("span",{children:"あなたの呼び方"}),$.jsx("input",{value:i.userCall,maxLength:20,onChange:n=>t({userCall:n.target.value})})]}),$.jsxs("label",{className:"field",children:[$.jsx("span",{children:"口調"}),$.jsx("input",{value:i.tone,maxLength:40,placeholder:"例：丁寧語、元気なタメ口、関西弁",onChange:n=>t({tone:n.target.value})})]}),$.jsxs("label",{className:"field",children:[$.jsx("span",{children:"性格"}),$.jsx("textarea",{rows:3,value:i.personality,maxLength:400,onChange:n=>t({personality:n.target.value})})]}),$.jsxs("fieldset",{className:"field",children:[$.jsx("legend",{children:"サポートしてほしいこと（複数選べます）"}),$.jsx("div",{className:"chips",children:U0.map(n=>{const s=i.purposes.includes(n.id);return $.jsx("button",{type:"button",className:`chip ${s?"on":""}`,"aria-pressed":s,onClick:()=>t({purposes:s?i.purposes.filter(a=>a!==n.id):[...i.purposes,n.id]}),children:n.label},n.id)})})]}),$.jsx("p",{className:"hint",children:"選んだ内容に合わせて、AIへの指示を自動で切り替えます。健康の話題で診断はせず、投資の売買の助言もしません。"}),$.jsx("button",{className:"ghost-btn",onClick:()=>e(hc),children:"初期設定に戻す"})]})}function uS({hasVrm:i,vrmName:e,vrmError:t,onVrm:n}){return $.jsxs($.Fragment,{children:[$.jsxs("p",{children:["いまのキャラクター：",$.jsx("strong",{children:i?e||"読み込んだVRM":"仮のキャラクター（光の精）"})]}),$.jsxs("label",{className:"primary-btn file-btn",children:["VRMファイルを読み込む",$.jsx("input",{type:"file",onChange:s=>{const a=s.target.files?.[0];a&&n(a),s.target.value=""}})]}),i&&$.jsx("button",{className:"ghost-btn",onClick:()=>n(null),children:"仮のキャラクターに戻す"}),t&&$.jsx("p",{className:"error-text",children:t}),$.jsx("p",{className:"hint",children:"VRoid Studio で作ったモデルや、VRoid Hub でダウンロードできるモデル（利用条件を確認してください）が使えます。iPhone では「ファイル」アプリの「ダウンロード」フォルダから選べます。読み込んだファイルはこの端末の中だけに保存します。自分で作ったものか、使う権利のあるモデルだけを読み込んでください。"}),$.jsx("p",{className:"hint",children:"キャラクターをタップすると反応します。何もないところをタップすると、そこへ移動します。"})]})}function cS({display:i,onDisplay:e,onClearChat:t}){const n=s=>e({...i,...s});return $.jsxs($.Fragment,{children:[$.jsx(Mu,{label:"時計を表示",checked:i.clock,onChange:s=>n({clock:s})}),$.jsx(Mu,{label:"秒を表示",checked:i.seconds,disabled:!i.clock,onChange:s=>n({seconds:s})}),$.jsxs("fieldset",{className:"field",children:[$.jsx("legend",{children:"時計の位置"}),$.jsx("div",{className:"chips",children:sS.map(s=>$.jsx("button",{type:"button",className:`chip ${i.clockCorner===s.id?"on":""}`,"aria-pressed":i.clockCorner===s.id,onClick:()=>n({clockCorner:s.id}),children:s.label},s.id))})]}),$.jsx(Mu,{label:"時刻に合わせた声かけ",checked:i.voiceLines,onChange:s=>n({voiceLines:s})}),$.jsx(Mu,{label:"省電力モード（背景を止める）",checked:i.powerSave,onChange:s=>n({powerSave:s})}),$.jsx("p",{className:"hint",children:"画質は端末の性能に合わせて自動で調整します。動きが重い時は省電力モードにしてください。"}),$.jsx("h3",{children:"データ"}),$.jsx("button",{className:"ghost-btn danger",onClick:()=>{confirm("会話の履歴をすべて消しますか？")&&t()},children:"会話の履歴を消す"})]})}function Mu({label:i,checked:e,disabled:t,onChange:n}){return $.jsxs("label",{className:`toggle ${t?"disabled":""}`,children:[$.jsx("span",{children:i}),$.jsx("input",{type:"checkbox",role:"switch",checked:e,disabled:t,onChange:s=>n(s.target.checked)}),$.jsx("i",{"aria-hidden":!0})]})}const M_={schedule:"日程管理：予定の整理、勤務シフトを踏まえた予定の組み方、やることの優先順位づけを手伝う。今の版ではカレンダーの読み書きや通知はまだできないので、登録したふりはせず「メモしておいてね」と伝える。",documents:"書類：報告書・申請書・資料の構成案や下書き、文章の校正・要約を手伝う。直した箇所と理由を短く添える。",study:"勉強：資格や業務知識の問題を出し、答え合わせと解説をする。一度に1問ずつ出し、相手の答えを待つ。",dev:"アプリ開発：企画の壁打ち、設計やコードの相談、エラーの原因探しを手伝う。コードはコードブロックで示す。",invest:"投資ニュース：市場や銘柄の話題を整理して説明する。今の版ではニュースを取得できないので、最新情報は分からないと正直に伝える。売買の判断や助言（買う・売る・持ち続ける等）は行わない。",chat:"雑談：気軽な話し相手になる。相手の気分や体調に気を配る。"},dS=["健康の話題は一般的な情報にとどめ、診断・治療・薬の判断はしない。必要なら医療機関の受診を勧める。","死にたい気持ちや身の危険など深刻な相談には、まず気持ちを受け止め、いのちの電話（0570-783-556）やよりそいホットライン（0120-279-338）、緊急時は119・110を案内する。","投資について売買の助言はしない。","患者情報など業務上の個人情報が書かれていたら、それ以上入力しないよう、やさしく注意する。","知らないこと・できないことは正直に言い、作り話をしない。"];function hS(i,e=new Date){const t=U0.filter(s=>i.purposes.includes(s.id));return[`あなたは「${i.name}」。ユーザーのそばにいる3Dキャラクターの AI パートナーです。`,`ユーザーのことは「${i.userCall}」と呼ぶ。口調は${i.tone}。`,i.personality?`性格：${i.personality}`:"","","## 返答のしかた","- 画面の吹き出しで読まれるので、ふだんは2〜4文で短く答える。書類やコードなど長い内容を頼まれた時だけ長く書く。","- 見出しや表は必要な時だけ使う。","","## 手伝うこと",...t.length?t.map(s=>`- ${M_[s.id]}`):[`- ${M_.chat}`],"","## 守ること",...dS.map(s=>`- ${s}`),"",`現在の日時：${fS(e)}`].filter((s,a,l)=>!(s===""&&l[a-1]==="")).join(`
`)}function fS(i){const e="日月火水木金土"[i.getDay()],t=n=>String(n).padStart(2,"0");return`${i.getFullYear()}年${i.getMonth()+1}月${i.getDate()}日（${e}）${t(i.getHours())}:${t(i.getMinutes())}`}const Sc="yui.";function qr(i,e){try{const t=localStorage.getItem(Sc+i);return t?{...pS(e),...JSON.parse(t)}:e}catch{return e}}function pS(i){return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}function mS(i){try{const e=localStorage.getItem(Sc+i),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function Rs(i,e){try{localStorage.setItem(Sc+i,JSON.stringify(e))}catch{}}function gS(i){try{localStorage.removeItem(Sc+i)}catch{}}function O0(){return new Promise((i,e)=>{const t=indexedDB.open("yui",1);t.onupgradeneeded=()=>{t.result.createObjectStore("keys"),t.result.createObjectStore("files")},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function F0(i,e){const t=await O0();return new Promise((n,s)=>{const a=t.transaction(i).objectStore(i).get(e);a.onsuccess=()=>n(a.result),a.onerror=()=>s(a.error)})}async function k0(i,e,t){const n=await O0();return new Promise((s,a)=>{const l=n.transaction(i,"readwrite");t===void 0?l.objectStore(i).delete(e):l.objectStore(i).put(t,e),l.oncomplete=()=>s(),l.onerror=()=>a(l.error)})}async function B0(){let i=await F0("keys","aes");return i||(i=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!1,["encrypt","decrypt"]),await k0("keys","aes",i)),i}const S_=i=>btoa(String.fromCharCode(...new Uint8Array(i))),E_=i=>Uint8Array.from(atob(i),e=>e.charCodeAt(0));async function _S(i,e){if(!e){gS(`secret.${i}`);return}const t=await B0(),n=crypto.getRandomValues(new Uint8Array(12)),s=await crypto.subtle.encrypt({name:"AES-GCM",iv:n},t,new TextEncoder().encode(e));Rs(`secret.${i}`,{iv:S_(n),data:S_(s)})}async function vS(i){const e=qr(`secret.${i}`,null);if(!e)return"";try{const t=await B0(),n=await crypto.subtle.decrypt({name:"AES-GCM",iv:E_(e.iv)},t,E_(e.data));return new TextDecoder().decode(n)}catch{return""}}const xS=(i,e)=>k0("files",i,e),yS=i=>F0("files",i).catch(()=>{});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ds="180",MS=0,T_=1,SS=2,V0=1,ES=2,mr=3,xr=0,In=1,fi=2,Zr=0,ko=1,Is=2,w_=3,A_=4,TS=5,Ps=100,wS=101,AS=102,RS=103,bS=104,CS=200,PS=201,LS=202,IS=203,pf=204,mf=205,NS=206,DS=207,US=208,OS=209,FS=210,kS=211,BS=212,VS=213,zS=214,gf=0,_f=1,vf=2,zo=3,xf=4,yf=5,Mf=6,Sf=7,z0=0,HS=1,GS=2,Qr=0,WS=1,XS=2,jS=3,YS=4,qS=5,$S=6,KS=7,R_="attached",ZS="detached",H0=300,Ho=301,Go=302,Ef=303,Tf=304,Ec=306,Wo=1e3,Kr=1001,fc=1002,zn=1003,G0=1004,el=1005,ni=1006,ic=1007,gr=1008,$i=1009,W0=1010,X0=1011,ol=1012,gp=1013,Us=1014,Pi=1015,gl=1016,_p=1017,vp=1018,al=1020,j0=35902,Y0=35899,q0=1021,$0=1022,mi=1023,ll=1026,ul=1027,xp=1028,yp=1029,K0=1030,Mp=1031,Sp=1033,rc=33776,sc=33777,oc=33778,ac=33779,wf=35840,Af=35841,Rf=35842,bf=35843,Cf=36196,Pf=37492,Lf=37496,If=37808,Nf=37809,Df=37810,Uf=37811,Of=37812,Ff=37813,kf=37814,Bf=37815,Vf=37816,zf=37817,Hf=37818,Gf=37819,Wf=37820,Xf=37821,jf=36492,Yf=36494,qf=36495,$f=36283,Kf=36284,Zf=36285,Qf=36286,cl=2300,dl=2301,ph=2302,b_=2400,C_=2401,P_=2402,QS=2500,JS=0,Z0=1,Jf=2,eE=3200,tE=3201,Ep=0,nE=1,$r="",hn="srgb",Hn="srgb-linear",pc="linear",Xt="srgb",uo=7680,L_=519,iE=512,rE=513,sE=514,Q0=515,oE=516,aE=517,lE=518,uE=519,ep=35044,cE=35048,I_="300 es",Yi=2e3,mc=2001;class Ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let N_=1234567;const il=Math.PI/180,Xo=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function Tp(i,e){return(i%e+e)%e}function dE(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hE(i,e,t){return i!==e?(t-i)/(e-i):0}function rl(i,e,t){return(1-t)*i+t*e}function fE(i,e,t,n){return rl(i,e,1-Math.exp(-t*n))}function pE(i,e=1){return e-Math.abs(Tp(i,e*2)-e)}function mE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _E(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vE(i,e){return i+Math.random()*(e-i)}function xE(i){return i*(.5-Math.random())}function yE(i){i!==void 0&&(N_=i);let e=N_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ME(i){return i*il}function SE(i){return i*Xo}function EE(i){return(i&i-1)===0&&i!==0}function TE(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wE(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function AE(i,e,t,n,s){const a=Math.cos,l=Math.sin,c=a(t/2),d=l(t/2),h=a((e+n)/2),p=l((e+n)/2),m=a((e-n)/2),g=l((e-n)/2),v=a((n-e)/2),S=l((n-e)/2);switch(s){case"XYX":i.set(c*p,d*m,d*g,c*h);break;case"YZY":i.set(d*g,c*p,d*m,c*h);break;case"ZXZ":i.set(d*m,d*g,c*p,c*h);break;case"XZX":i.set(c*p,d*S,d*v,c*h);break;case"YXY":i.set(d*v,c*p,d*S,c*h);break;case"ZYZ":i.set(d*S,d*v,c*p,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yt={DEG2RAD:il,RAD2DEG:Xo,generateUUID:Li,clamp:Tt,euclideanModulo:Tp,mapLinear:dE,inverseLerp:hE,lerp:rl,damp:fE,pingpong:pE,smoothstep:mE,smootherstep:gE,randInt:_E,randFloat:vE,randFloatSpread:xE,seededRandom:yE,degToRad:ME,radToDeg:SE,isPowerOfTwo:EE,ceilPowerOfTwo:TE,floorPowerOfTwo:wE,setQuaternionFromProperEuler:AE,normalize:Bt,denormalize:Ci};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*s+e.x,this.y=a*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,l,c){let d=n[s+0],h=n[s+1],p=n[s+2],m=n[s+3];const g=a[l+0],v=a[l+1],S=a[l+2],E=a[l+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(c===1){e[t+0]=g,e[t+1]=v,e[t+2]=S,e[t+3]=E;return}if(m!==E||d!==g||h!==v||p!==S){let y=1-c;const x=d*g+h*v+p*S+m*E,b=x>=0?1:-1,I=1-x*x;if(I>Number.EPSILON){const N=Math.sqrt(I),L=Math.atan2(N,x*b);y=Math.sin(y*L)/N,c=Math.sin(c*L)/N}const T=c*b;if(d=d*y+g*T,h=h*y+v*T,p=p*y+S*T,m=m*y+E*T,y===1-c){const N=1/Math.sqrt(d*d+h*h+p*p+m*m);d*=N,h*=N,p*=N,m*=N}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,a,l){const c=n[s],d=n[s+1],h=n[s+2],p=n[s+3],m=a[l],g=a[l+1],v=a[l+2],S=a[l+3];return e[t]=c*S+p*m+d*v-h*g,e[t+1]=d*S+p*g+h*m-c*v,e[t+2]=h*S+p*v+c*g-d*m,e[t+3]=p*S-c*m-d*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,l=e._order,c=Math.cos,d=Math.sin,h=c(n/2),p=c(s/2),m=c(a/2),g=d(n/2),v=d(s/2),S=d(a/2);switch(l){case"XYZ":this._x=g*p*m+h*v*S,this._y=h*v*m-g*p*S,this._z=h*p*S+g*v*m,this._w=h*p*m-g*v*S;break;case"YXZ":this._x=g*p*m+h*v*S,this._y=h*v*m-g*p*S,this._z=h*p*S-g*v*m,this._w=h*p*m+g*v*S;break;case"ZXY":this._x=g*p*m-h*v*S,this._y=h*v*m+g*p*S,this._z=h*p*S+g*v*m,this._w=h*p*m-g*v*S;break;case"ZYX":this._x=g*p*m-h*v*S,this._y=h*v*m+g*p*S,this._z=h*p*S-g*v*m,this._w=h*p*m+g*v*S;break;case"YZX":this._x=g*p*m+h*v*S,this._y=h*v*m+g*p*S,this._z=h*p*S-g*v*m,this._w=h*p*m-g*v*S;break;case"XZY":this._x=g*p*m-h*v*S,this._y=h*v*m-g*p*S,this._z=h*p*S+g*v*m,this._w=h*p*m+g*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],l=t[1],c=t[5],d=t[9],h=t[2],p=t[6],m=t[10],g=n+c+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-d)*v,this._y=(a-h)*v,this._z=(l-s)*v}else if(n>c&&n>m){const v=2*Math.sqrt(1+n-c-m);this._w=(p-d)/v,this._x=.25*v,this._y=(s+l)/v,this._z=(a+h)/v}else if(c>m){const v=2*Math.sqrt(1+c-n-m);this._w=(a-h)/v,this._x=(s+l)/v,this._y=.25*v,this._z=(d+p)/v}else{const v=2*Math.sqrt(1+m-n-c);this._w=(l-s)/v,this._x=(a+h)/v,this._y=(d+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,l=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=n*p+l*c+s*h-a*d,this._y=s*p+l*d+a*c-n*h,this._z=a*p+l*h+n*d-s*c,this._w=l*p-n*c-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=s,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*s+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),m=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=l*m+this._w*g,this._x=n*m+this._x*g,this._y=s*m+this._y*g,this._z=a*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(D_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(D_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,l=e.y,c=e.z,d=e.w,h=2*(l*s-c*n),p=2*(c*t-a*s),m=2*(a*n-l*t);return this.x=t+d*h+l*m-c*p,this.y=n+d*p+c*h-a*m,this.z=s+d*m+a*p-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,l=t.x,c=t.y,d=t.z;return this.x=s*d-a*c,this.y=a*l-n*d,this.z=n*c-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mh=new U,D_=new Mt;class dt{constructor(e,t,n,s,a,l,c,d,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,c,d,h)}set(e,t,n,s,a,l,c,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],c=n[3],d=n[6],h=n[1],p=n[4],m=n[7],g=n[2],v=n[5],S=n[8],E=s[0],y=s[3],x=s[6],b=s[1],I=s[4],T=s[7],N=s[2],L=s[5],D=s[8];return a[0]=l*E+c*b+d*N,a[3]=l*y+c*I+d*L,a[6]=l*x+c*T+d*D,a[1]=h*E+p*b+m*N,a[4]=h*y+p*I+m*L,a[7]=h*x+p*T+m*D,a[2]=g*E+v*b+S*N,a[5]=g*y+v*I+S*L,a[8]=g*x+v*T+S*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*l*p-t*c*h-n*a*p+n*c*d+s*a*h-s*l*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],p=e[8],m=p*l-c*h,g=c*d-p*a,v=h*a-l*d,S=t*m+n*g+s*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=m*E,e[1]=(s*h-p*n)*E,e[2]=(c*n-s*l)*E,e[3]=g*E,e[4]=(p*t-s*d)*E,e[5]=(s*a-c*t)*E,e[6]=v*E,e[7]=(n*d-h*t)*E,e[8]=(l*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,l,c){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*l+h*c)+l+e,-s*h,s*d,-s*(-h*l+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(gh.makeScale(e,t)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,t){return this.premultiply(gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new dt;function J0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function RE(){const i=hl("canvas");return i.style.display="block",i}const U_={};function fl(i){i in U_||(U_[i]=!0,console.warn(i))}function bE(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const O_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CE(){const i={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(s,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Xt&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Xt&&(s.r=Bo(s.r),s.g=Bo(s.g),s.b=Bo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$r?pc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,l){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return fl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return fl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hn]:{primaries:e,whitePoint:n,transfer:pc,toXYZ:O_,fromXYZ:F_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:Xt,toXYZ:O_,fromXYZ:F_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const Lt=CE();function vr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let co;class PE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{co===void 0&&(co=hl("canvas")),co.width=e.width,co.height=e.height;const s=co.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=co}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=vr(a[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LE=0;class wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,c=s.length;l<c;l++)s[l].isDataTexture?a.push(_h(s[l].image)):a.push(_h(s[l]))}else a=_h(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function _h(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?PE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IE=0;const vh=new U;class fn extends Ko{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Kr,s=Kr,a=ni,l=gr,c=mi,d=$i,h=fn.DEFAULT_ANISOTROPY,p=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Li(),this.name="",this.source=new wp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=H0;fn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,n=0,s=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const d=e.elements,h=d[0],p=d[4],m=d[8],g=d[1],v=d[5],S=d[9],E=d[2],y=d[6],x=d[10];if(Math.abs(p-g)<.01&&Math.abs(m-E)<.01&&Math.abs(S-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+E)<.1&&Math.abs(S+y)<.1&&Math.abs(h+v+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,T=(v+1)/2,N=(x+1)/2,L=(p+g)/4,D=(m+E)/4,z=(S+y)/4;return I>T&&I>N?I<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(I),s=L/n,a=D/n):T>N?T<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(T),n=L/s,a=z/s):N<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(N),n=D/a,s=z/a),this.set(n,s,a,t),this}let b=Math.sqrt((y-S)*(y-S)+(m-E)*(m-E)+(g-p)*(g-p));return Math.abs(b)<.001&&(b=1),this.x=(y-S)/b,this.y=(m-E)/b,this.z=(g-p)/b,this.w=Math.acos((h+v+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NE extends Ko{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const s={width:e,height:t,depth:n.depth},a=new fn(s);this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends NE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ex extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DE extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Ai):Ai.fromBufferAttribute(a,l),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Su.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Su.copy(n.boundingBox)),Su.applyMatrix4(e.matrixWorld),this.union(Su)}const s=e.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),Eu.subVectors(this.max,Oa),ho.subVectors(e.a,Oa),fo.subVectors(e.b,Oa),po.subVectors(e.c,Oa),Vr.subVectors(fo,ho),zr.subVectors(po,fo),gs.subVectors(ho,po);let t=[0,-Vr.z,Vr.y,0,-zr.z,zr.y,0,-gs.z,gs.y,Vr.z,0,-Vr.x,zr.z,0,-zr.x,gs.z,0,-gs.x,-Vr.y,Vr.x,0,-zr.y,zr.x,0,-gs.y,gs.x,0];return!xh(t,ho,fo,po,Eu)||(t=[1,0,0,0,1,0,0,0,1],!xh(t,ho,fo,po,Eu))?!1:(Tu.crossVectors(Vr,zr),t=[Tu.x,Tu.y,Tu.z],xh(t,ho,fo,po,Eu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ur=[new U,new U,new U,new U,new U,new U,new U,new U],Ai=new U,Su=new yr,ho=new U,fo=new U,po=new U,Vr=new U,zr=new U,gs=new U,Oa=new U,Eu=new U,Tu=new U,_s=new U;function xh(i,e,t,n,s){for(let a=0,l=i.length-3;a<=l;a+=3){_s.fromArray(i,a);const c=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),d=e.dot(_s),h=t.dot(_s),p=n.dot(_s);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const UE=new yr,Fa=new U,yh=new U;class Ki{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):UE.setFromPoints(e).getCenter(n);let s=0;for(let a=0,l=e.length;a<l;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const t=Fa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(yh)),this.expandByPoint(Fa.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cr=new U,Mh=new U,wu=new U,Hr=new U,Sh=new U,Au=new U,Eh=new U;class Tc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mh.copy(e).add(t).multiplyScalar(.5),wu.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(Mh);const a=e.distanceTo(t)*.5,l=-this.direction.dot(wu),c=Hr.dot(this.direction),d=-Hr.dot(wu),h=Hr.lengthSq(),p=Math.abs(1-l*l);let m,g,v,S;if(p>0)if(m=l*d-c,g=l*c-d,S=a*p,m>=0)if(g>=-S)if(g<=S){const E=1/p;m*=E,g*=E,v=m*(m+l*g+2*c)+g*(l*m+g+2*d)+h}else g=a,m=Math.max(0,-(l*g+c)),v=-m*m+g*(g+2*d)+h;else g=-a,m=Math.max(0,-(l*g+c)),v=-m*m+g*(g+2*d)+h;else g<=-S?(m=Math.max(0,-(-l*a+c)),g=m>0?-a:Math.min(Math.max(-a,-d),a),v=-m*m+g*(g+2*d)+h):g<=S?(m=0,g=Math.min(Math.max(-a,-d),a),v=g*(g+2*d)+h):(m=Math.max(0,-(l*a+c)),g=m>0?a:Math.min(Math.max(-a,-d),a),v=-m*m+g*(g+2*d)+h);else g=l>0?-a:a,m=Math.max(0,-(l*g+c)),v=-m*m+g*(g+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Mh).addScaledVector(wu,g),v}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const n=cr.dot(this.direction),s=cr.dot(cr)-n*n,a=e.radius*e.radius;if(s>a)return null;const l=Math.sqrt(a-s),c=n-l,d=n+l;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,l,c,d;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,l=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,l=(e.min.y-g.y)*p),n>l||a>s||((a>n||isNaN(n))&&(n=a),(l<s||isNaN(s))&&(s=l),m>=0?(c=(e.min.z-g.z)*m,d=(e.max.z-g.z)*m):(c=(e.max.z-g.z)*m,d=(e.min.z-g.z)*m),n>d||c>s)||((c>n||n!==n)&&(n=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,n,s,a){Sh.subVectors(t,e),Au.subVectors(n,e),Eh.crossVectors(Sh,Au);let l=this.direction.dot(Eh),c;if(l>0){if(s)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Hr.subVectors(this.origin,e);const d=c*this.direction.dot(Au.crossVectors(Hr,Au));if(d<0)return null;const h=c*this.direction.dot(Sh.cross(Hr));if(h<0||d+h>l)return null;const p=-c*Hr.dot(Eh);return p<0?null:this.at(p/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,s,a,l,c,d,h,p,m,g,v,S,E,y){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,c,d,h,p,m,g,v,S,E,y)}set(e,t,n,s,a,l,c,d,h,p,m,g,v,S,E,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=a,x[5]=l,x[9]=c,x[13]=d,x[2]=h,x[6]=p,x[10]=m,x[14]=g,x[3]=v,x[7]=S,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/mo.setFromMatrixColumn(e,0).length(),a=1/mo.setFromMatrixColumn(e,1).length(),l=1/mo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),d=Math.cos(s),h=Math.sin(s),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const g=l*p,v=l*m,S=c*p,E=c*m;t[0]=d*p,t[4]=-d*m,t[8]=h,t[1]=v+S*h,t[5]=g-E*h,t[9]=-c*d,t[2]=E-g*h,t[6]=S+v*h,t[10]=l*d}else if(e.order==="YXZ"){const g=d*p,v=d*m,S=h*p,E=h*m;t[0]=g+E*c,t[4]=S*c-v,t[8]=l*h,t[1]=l*m,t[5]=l*p,t[9]=-c,t[2]=v*c-S,t[6]=E+g*c,t[10]=l*d}else if(e.order==="ZXY"){const g=d*p,v=d*m,S=h*p,E=h*m;t[0]=g-E*c,t[4]=-l*m,t[8]=S+v*c,t[1]=v+S*c,t[5]=l*p,t[9]=E-g*c,t[2]=-l*h,t[6]=c,t[10]=l*d}else if(e.order==="ZYX"){const g=l*p,v=l*m,S=c*p,E=c*m;t[0]=d*p,t[4]=S*h-v,t[8]=g*h+E,t[1]=d*m,t[5]=E*h+g,t[9]=v*h-S,t[2]=-h,t[6]=c*d,t[10]=l*d}else if(e.order==="YZX"){const g=l*d,v=l*h,S=c*d,E=c*h;t[0]=d*p,t[4]=E-g*m,t[8]=S*m+v,t[1]=m,t[5]=l*p,t[9]=-c*p,t[2]=-h*p,t[6]=v*m+S,t[10]=g-E*m}else if(e.order==="XZY"){const g=l*d,v=l*h,S=c*d,E=c*h;t[0]=d*p,t[4]=-m,t[8]=h*p,t[1]=g*m+E,t[5]=l*p,t[9]=v*m-S,t[2]=S*m-v,t[6]=c*p,t[10]=E*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OE,e,FE)}lookAt(e,t,n){const s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Gr.crossVectors(n,ei),Gr.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Gr.crossVectors(n,ei)),Gr.normalize(),Ru.crossVectors(ei,Gr),s[0]=Gr.x,s[4]=Ru.x,s[8]=ei.x,s[1]=Gr.y,s[5]=Ru.y,s[9]=ei.y,s[2]=Gr.z,s[6]=Ru.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],c=n[4],d=n[8],h=n[12],p=n[1],m=n[5],g=n[9],v=n[13],S=n[2],E=n[6],y=n[10],x=n[14],b=n[3],I=n[7],T=n[11],N=n[15],L=s[0],D=s[4],z=s[8],C=s[12],R=s[1],B=s[5],Y=s[9],J=s[13],he=s[2],le=s[6],ue=s[10],te=s[14],H=s[3],ce=s[7],ne=s[11],V=s[15];return a[0]=l*L+c*R+d*he+h*H,a[4]=l*D+c*B+d*le+h*ce,a[8]=l*z+c*Y+d*ue+h*ne,a[12]=l*C+c*J+d*te+h*V,a[1]=p*L+m*R+g*he+v*H,a[5]=p*D+m*B+g*le+v*ce,a[9]=p*z+m*Y+g*ue+v*ne,a[13]=p*C+m*J+g*te+v*V,a[2]=S*L+E*R+y*he+x*H,a[6]=S*D+E*B+y*le+x*ce,a[10]=S*z+E*Y+y*ue+x*ne,a[14]=S*C+E*J+y*te+x*V,a[3]=b*L+I*R+T*he+N*H,a[7]=b*D+I*B+T*le+N*ce,a[11]=b*z+I*Y+T*ue+N*ne,a[15]=b*C+I*J+T*te+N*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],l=e[1],c=e[5],d=e[9],h=e[13],p=e[2],m=e[6],g=e[10],v=e[14],S=e[3],E=e[7],y=e[11],x=e[15];return S*(+a*d*m-s*h*m-a*c*g+n*h*g+s*c*v-n*d*v)+E*(+t*d*v-t*h*g+a*l*g-s*l*v+s*h*p-a*d*p)+y*(+t*h*m-t*c*v-a*l*m+n*l*v+a*c*p-n*h*p)+x*(-s*c*p-t*d*m+t*c*g+s*l*m-n*l*g+n*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],p=e[8],m=e[9],g=e[10],v=e[11],S=e[12],E=e[13],y=e[14],x=e[15],b=m*y*h-E*g*h+E*d*v-c*y*v-m*d*x+c*g*x,I=S*g*h-p*y*h-S*d*v+l*y*v+p*d*x-l*g*x,T=p*E*h-S*m*h+S*c*v-l*E*v-p*c*x+l*m*x,N=S*m*d-p*E*d-S*c*g+l*E*g+p*c*y-l*m*y,L=t*b+n*I+s*T+a*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=b*D,e[1]=(E*g*a-m*y*a-E*s*v+n*y*v+m*s*x-n*g*x)*D,e[2]=(c*y*a-E*d*a+E*s*h-n*y*h-c*s*x+n*d*x)*D,e[3]=(m*d*a-c*g*a-m*s*h+n*g*h+c*s*v-n*d*v)*D,e[4]=I*D,e[5]=(p*y*a-S*g*a+S*s*v-t*y*v-p*s*x+t*g*x)*D,e[6]=(S*d*a-l*y*a-S*s*h+t*y*h+l*s*x-t*d*x)*D,e[7]=(l*g*a-p*d*a+p*s*h-t*g*h-l*s*v+t*d*v)*D,e[8]=T*D,e[9]=(S*m*a-p*E*a-S*n*v+t*E*v+p*n*x-t*m*x)*D,e[10]=(l*E*a-S*c*a+S*n*h-t*E*h-l*n*x+t*c*x)*D,e[11]=(p*c*a-l*m*a-p*n*h+t*m*h+l*n*v-t*c*v)*D,e[12]=N*D,e[13]=(p*E*s-S*m*s+S*n*g-t*E*g-p*n*y+t*m*y)*D,e[14]=(S*c*s-l*E*s-S*n*d+t*E*d+l*n*y-t*c*y)*D,e[15]=(l*m*s-p*c*s+p*n*d-t*m*d-l*n*g+t*c*g)*D,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,l=e.x,c=e.y,d=e.z,h=a*l,p=a*c;return this.set(h*l+n,h*c-s*d,h*d+s*c,0,h*c+s*d,p*c+n,p*d-s*l,0,h*d-s*c,p*d+s*l,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,l){return this.set(1,n,a,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,l=t._y,c=t._z,d=t._w,h=a+a,p=l+l,m=c+c,g=a*h,v=a*p,S=a*m,E=l*p,y=l*m,x=c*m,b=d*h,I=d*p,T=d*m,N=n.x,L=n.y,D=n.z;return s[0]=(1-(E+x))*N,s[1]=(v+T)*N,s[2]=(S-I)*N,s[3]=0,s[4]=(v-T)*L,s[5]=(1-(g+x))*L,s[6]=(y+b)*L,s[7]=0,s[8]=(S+I)*D,s[9]=(y-b)*D,s[10]=(1-(g+E))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=mo.set(s[0],s[1],s[2]).length();const l=mo.set(s[4],s[5],s[6]).length(),c=mo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ri.copy(this);const h=1/a,p=1/l,m=1/c;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=p,Ri.elements[5]*=p,Ri.elements[6]*=p,Ri.elements[8]*=m,Ri.elements[9]*=m,Ri.elements[10]*=m,t.setFromRotationMatrix(Ri),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,s,a,l,c=Yi,d=!1){const h=this.elements,p=2*a/(t-e),m=2*a/(n-s),g=(t+e)/(t-e),v=(n+s)/(n-s);let S,E;if(d)S=a/(l-a),E=l*a/(l-a);else if(c===Yi)S=-(l+a)/(l-a),E=-2*l*a/(l-a);else if(c===mc)S=-l/(l-a),E=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,a,l,c=Yi,d=!1){const h=this.elements,p=2/(t-e),m=2/(n-s),g=-(t+e)/(t-e),v=-(n+s)/(n-s);let S,E;if(d)S=1/(l-a),E=l/(l-a);else if(c===Yi)S=-2/(l-a),E=-(l+a)/(l-a);else if(c===mc)S=-1/(l-a),E=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=m,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mo=new U,Ri=new ft,OE=new U(0,0,0),FE=new U(1,1,1),Gr=new U,Ru=new U,ei=new U,k_=new ft,B_=new Mt;class ii{constructor(e=0,t=0,n=0,s=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],l=s[4],c=s[8],d=s[1],h=s[5],p=s[9],m=s[2],g=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return k_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return B_.setFromEuler(this),this.setFromQuaternion(B_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kE=0;const V_=new U,go=new Mt,dr=new ft,bu=new U,ka=new U,BE=new U,VE=new Mt,z_=new U(1,0,0),H_=new U(0,1,0),G_=new U(0,0,1),W_={type:"added"},zE={type:"removed"},_o={type:"childadded",child:null},Th={type:"childremoved",child:null};class zt extends Ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new U,t=new ii,n=new Mt,s=new U(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new dt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(z_,e)}rotateY(e){return this.rotateOnAxis(H_,e)}rotateZ(e){return this.rotateOnAxis(G_,e)}translateOnAxis(e,t){return V_.copy(e).applyQuaternion(this.quaternion),this.position.add(V_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(z_,e)}translateY(e){return this.translateOnAxis(H_,e)}translateZ(e){return this.translateOnAxis(G_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bu.copy(e):bu.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(ka,bu,this.up):dr.lookAt(bu,ka,this.up),this.quaternion.setFromRotationMatrix(dr),s&&(dr.extractRotation(s.matrixWorld),go.setFromRotationMatrix(dr),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(W_),_o.child=e,this.dispatchEvent(_o),_o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zE),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(W_),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,BE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,VE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const m=d[h];a(e.shapes,m)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(a(e.animations,d))}}if(t){const c=l(e.geometries),d=l(e.materials),h=l(e.textures),p=l(e.images),m=l(e.shapes),g=l(e.skeletons),v=l(e.animations),S=l(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),S.length>0&&(n.nodes=S)}return n.object=s,n;function l(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}zt.DEFAULT_UP=new U(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new U,hr=new U,wh=new U,fr=new U,vo=new U,xo=new U,X_=new U,Ah=new U,Rh=new U,bh=new U,Ch=new Ot,Ph=new Ot,Lh=new Ot;class pi{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bi.subVectors(e,t),s.cross(bi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){bi.subVectors(s,t),hr.subVectors(n,t),wh.subVectors(e,t);const l=bi.dot(bi),c=bi.dot(hr),d=bi.dot(wh),h=hr.dot(hr),p=hr.dot(wh),m=l*h-c*c;if(m===0)return a.set(0,0,0),null;const g=1/m,v=(h*d-c*p)*g,S=(l*p-c*d)*g;return a.set(1-v-S,S,v)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,n,s,a,l,c,d){return this.getBarycoord(e,t,n,s,fr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,fr.x),d.addScaledVector(l,fr.y),d.addScaledVector(c,fr.z),d)}static getInterpolatedAttribute(e,t,n,s,a,l){return Ch.setScalar(0),Ph.setScalar(0),Lh.setScalar(0),Ch.fromBufferAttribute(e,t),Ph.fromBufferAttribute(e,n),Lh.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(Ch,a.x),l.addScaledVector(Ph,a.y),l.addScaledVector(Lh,a.z),l}static isFrontFacing(e,t,n,s){return bi.subVectors(n,t),hr.subVectors(e,t),bi.cross(hr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),bi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return pi.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let l,c;vo.subVectors(s,n),xo.subVectors(a,n),Ah.subVectors(e,n);const d=vo.dot(Ah),h=xo.dot(Ah);if(d<=0&&h<=0)return t.copy(n);Rh.subVectors(e,s);const p=vo.dot(Rh),m=xo.dot(Rh);if(p>=0&&m<=p)return t.copy(s);const g=d*m-p*h;if(g<=0&&d>=0&&p<=0)return l=d/(d-p),t.copy(n).addScaledVector(vo,l);bh.subVectors(e,a);const v=vo.dot(bh),S=xo.dot(bh);if(S>=0&&v<=S)return t.copy(a);const E=v*h-d*S;if(E<=0&&h>=0&&S<=0)return c=h/(h-S),t.copy(n).addScaledVector(xo,c);const y=p*S-v*m;if(y<=0&&m-p>=0&&v-S>=0)return X_.subVectors(a,s),c=(m-p)/(m-p+(v-S)),t.copy(s).addScaledVector(X_,c);const x=1/(y+E+g);return l=E*x,c=g*x,t.copy(n).addScaledVector(vo,l).addScaledVector(xo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Cu={h:0,s:0,l:0};function Ih(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Lt.workingColorSpace){if(e=Tp(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Ih(l,a,e+1/3),this.g=Ih(l,a,e),this.b=Ih(l,a,e-1/3)}return Lt.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=s[1],c=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=nx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Lt.workingToColorSpace(Ln.copy(this),e),Math.round(Tt(Ln.r*255,0,255))*65536+Math.round(Tt(Ln.g*255,0,255))*256+Math.round(Tt(Ln.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,s=Ln.g,a=Ln.b,l=Math.max(n,s,a),c=Math.min(n,s,a);let d,h;const p=(c+l)/2;if(c===l)d=0,h=0;else{const m=l-c;switch(h=p<=.5?m/(l+c):m/(2-l-c),l){case n:d=(s-a)/m+(s<a?6:0);break;case s:d=(a-n)/m+2;break;case a:d=(n-s)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hn){Lt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,s=Ln.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Cu);const n=rl(Wr.h,Cu.h,t),s=rl(Wr.s,Cu.s,t),a=rl(Wr.l,Cu.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new tt;tt.NAMES=nx;let HE=0;class _i extends Ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=ko,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ko&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pf&&(n.blendSrc=this.blendSrc),this.blendDst!==mf&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L_&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}if(t){const a=s(e.textures),l=s(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gi extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new U,Pu=new rt;let GE=0;class wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ep,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pu.fromBufferAttribute(this,t),Pu.applyMatrix3(e),this.setXY(t,Pu.x,Pu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),a=Bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ep&&(e.usage=this.usage),e}}class ix extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rx extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let WE=0;const ci=new ft,Nh=new zt,yo=new U,ti=new yr,Ba=new yr,yn=new U;class Ht extends Ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J0(e)?rx:ix)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new dt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];Ba.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(ti.min,Ba.min),ti.expandByPoint(yn),yn.addVectors(ti.max,Ba.max),ti.expandByPoint(yn)):(ti.expandByPoint(Ba.min),ti.expandByPoint(Ba.max))}ti.getCenter(n);let s=0;for(let a=0,l=e.count;a<l;a++)yn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(yn));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)yn.fromBufferAttribute(c,h),d&&(yo.fromBufferAttribute(e,h),yn.add(yo)),s=Math.max(s,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],d=[];for(let z=0;z<n.count;z++)c[z]=new U,d[z]=new U;const h=new U,p=new U,m=new U,g=new rt,v=new rt,S=new rt,E=new U,y=new U;function x(z,C,R){h.fromBufferAttribute(n,z),p.fromBufferAttribute(n,C),m.fromBufferAttribute(n,R),g.fromBufferAttribute(a,z),v.fromBufferAttribute(a,C),S.fromBufferAttribute(a,R),p.sub(h),m.sub(h),v.sub(g),S.sub(g);const B=1/(v.x*S.y-S.x*v.y);isFinite(B)&&(E.copy(p).multiplyScalar(S.y).addScaledVector(m,-v.y).multiplyScalar(B),y.copy(m).multiplyScalar(v.x).addScaledVector(p,-S.x).multiplyScalar(B),c[z].add(E),c[C].add(E),c[R].add(E),d[z].add(y),d[C].add(y),d[R].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let z=0,C=b.length;z<C;++z){const R=b[z],B=R.start,Y=R.count;for(let J=B,he=B+Y;J<he;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const I=new U,T=new U,N=new U,L=new U;function D(z){N.fromBufferAttribute(s,z),L.copy(N);const C=c[z];I.copy(C),I.sub(N.multiplyScalar(N.dot(C))).normalize(),T.crossVectors(L,C);const B=T.dot(d[z])<0?-1:1;l.setXYZW(z,I.x,I.y,I.z,B)}for(let z=0,C=b.length;z<C;++z){const R=b[z],B=R.start,Y=R.count;for(let J=B,he=B+Y;J<he;J+=3)D(e.getX(J+0)),D(e.getX(J+1)),D(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const s=new U,a=new U,l=new U,c=new U,d=new U,h=new U,p=new U,m=new U;if(e)for(let g=0,v=e.count;g<v;g+=3){const S=e.getX(g+0),E=e.getX(g+1),y=e.getX(g+2);s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,y),p.subVectors(l,a),m.subVectors(s,a),p.cross(m),c.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),c.add(p),d.add(p),h.add(p),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(E,d.x,d.y,d.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),p.subVectors(l,a),m.subVectors(s,a),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,m=c.normalized,g=new h.constructor(d.length*p);let v=0,S=0;for(let E=0,y=d.length;E<y;E++){c.isInterleavedBufferAttribute?v=d[E]*c.data.stride+c.offset:v=d[E]*p;for(let x=0;x<p;x++)g[S++]=h[v++]}return new wt(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,m=h.length;p<m;p++){const g=h[p],v=e(g,n);d.push(v)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,d=l.length;c<d;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let m=0,g=h.length;m<g;m++){const v=h[m];p.push(v.toJSON(e.data))}p.length>0&&(s[d]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],m=a[h];for(let g=0,v=m.length;g<v;g++)p.push(m[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const m=l[h];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j_=new ft,vs=new Tc,Lu=new Ki,Y_=new U,Iu=new U,Nu=new U,Du=new U,Dh=new U,Uu=new U,q_=new U,Ou=new U;class rn extends zt{constructor(e=new Ht,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){Uu.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],m=a[d];p!==0&&(Dh.fromBufferAttribute(m,e),l?Uu.addScaledVector(Dh,p):Uu.addScaledVector(Dh.sub(t),p))}t.add(Uu)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lu.copy(n.boundingSphere),Lu.applyMatrix4(a),vs.copy(e.ray).recast(e.near),!(Lu.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Lu,Y_)===null||vs.origin.distanceToSquared(Y_)>(e.far-e.near)**2))&&(j_.copy(a).invert(),vs.copy(e.ray).applyMatrix4(j_),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s;const a=this.geometry,l=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,g=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(l))for(let S=0,E=g.length;S<E;S++){const y=g[S],x=l[y.materialIndex],b=Math.max(y.start,v.start),I=Math.min(c.count,Math.min(y.start+y.count,v.start+v.count));for(let T=b,N=I;T<N;T+=3){const L=c.getX(T),D=c.getX(T+1),z=c.getX(T+2);s=Fu(this,x,e,n,h,p,m,L,D,z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const S=Math.max(0,v.start),E=Math.min(c.count,v.start+v.count);for(let y=S,x=E;y<x;y+=3){const b=c.getX(y),I=c.getX(y+1),T=c.getX(y+2);s=Fu(this,l,e,n,h,p,m,b,I,T),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(l))for(let S=0,E=g.length;S<E;S++){const y=g[S],x=l[y.materialIndex],b=Math.max(y.start,v.start),I=Math.min(d.count,Math.min(y.start+y.count,v.start+v.count));for(let T=b,N=I;T<N;T+=3){const L=T,D=T+1,z=T+2;s=Fu(this,x,e,n,h,p,m,L,D,z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const S=Math.max(0,v.start),E=Math.min(d.count,v.start+v.count);for(let y=S,x=E;y<x;y+=3){const b=y,I=y+1,T=y+2;s=Fu(this,l,e,n,h,p,m,b,I,T),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function XE(i,e,t,n,s,a,l,c){let d;if(e.side===In?d=n.intersectTriangle(l,a,s,!0,c):d=n.intersectTriangle(s,a,l,e.side===xr,c),d===null)return null;Ou.copy(c),Ou.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Ou);return h<t.near||h>t.far?null:{distance:h,point:Ou.clone(),object:i}}function Fu(i,e,t,n,s,a,l,c,d,h){i.getVertexPosition(c,Iu),i.getVertexPosition(d,Nu),i.getVertexPosition(h,Du);const p=XE(i,e,t,n,Iu,Nu,Du,q_);if(p){const m=new U;pi.getBarycoord(q_,Iu,Nu,Du,m),s&&(p.uv=pi.getInterpolatedAttribute(s,c,d,h,m,new rt)),a&&(p.uv1=pi.getInterpolatedAttribute(a,c,d,h,m,new rt)),l&&(p.normal=pi.getInterpolatedAttribute(l,c,d,h,m,new U),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new U,materialIndex:0};pi.getNormal(Iu,Nu,Du,g.normal),p.face=g,p.barycoord=m}return p}class _l extends Ht{constructor(e=1,t=1,n=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:l};const c=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const d=[],h=[],p=[],m=[];let g=0,v=0;S("z","y","x",-1,-1,n,t,e,l,a,0),S("z","y","x",1,-1,n,t,-e,l,a,1),S("x","z","y",1,1,e,n,t,s,l,2),S("x","z","y",1,-1,e,n,-t,s,l,3),S("x","y","z",1,-1,e,t,n,s,a,4),S("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(d),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(p,3)),this.setAttribute("uv",new Kt(m,2));function S(E,y,x,b,I,T,N,L,D,z,C){const R=T/D,B=N/z,Y=T/2,J=N/2,he=L/2,le=D+1,ue=z+1;let te=0,H=0;const ce=new U;for(let ne=0;ne<ue;ne++){const V=ne*B-J;for(let oe=0;oe<le;oe++){const Oe=oe*R-Y;ce[E]=Oe*b,ce[y]=V*I,ce[x]=he,h.push(ce.x,ce.y,ce.z),ce[E]=0,ce[y]=0,ce[x]=L>0?1:-1,p.push(ce.x,ce.y,ce.z),m.push(oe/D),m.push(1-ne/z),te+=1}}for(let ne=0;ne<z;ne++)for(let V=0;V<D;V++){const oe=g+V+le*ne,Oe=g+V+le*(ne+1),ze=g+(V+1)+le*(ne+1),He=g+(V+1)+le*ne;d.push(oe,Oe,He),d.push(Oe,ze,He),H+=6}c.addGroup(v,H,C),v+=H,g+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bn(i){const e={};for(let t=0;t<i.length;t++){const n=jo(i[t]);for(const s in n)e[s]=n[s]}return e}function jE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sx(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const ox={clone:jo,merge:Bn};var YE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YE,this.fragmentShader=qE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=jE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ax extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new U,$_=new rt,K_=new rt;class Vn extends ax{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,$_,K_),t.subVectors(K_,$_)}setViewOffset(e,t,n,s,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(il*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,h=l.fullHeight;a+=l.offsetX*s/d,t-=l.offsetY*n/h,s*=l.width/d,n*=l.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mo=-90,So=1;class $E extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vn(Mo,So,e,t);s.layers=this.layers,this.add(s);const a=new Vn(Mo,So,e,t);a.layers=this.layers,this.add(a);const l=new Vn(Mo,So,e,t);l.layers=this.layers,this.add(l);const c=new Vn(Mo,So,e,t);c.layers=this.layers,this.add(c);const d=new Vn(Mo,So,e,t);d.layers=this.layers,this.add(d);const h=new Vn(Mo,So,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,l,c,d]=t;for(const h of t)this.remove(h);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===mc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,d,h,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,p),e.setRenderTarget(m,g,v),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class lx extends fn{constructor(e=[],t=Ho,n,s,a,l,c,d,h,p){super(e,t,n,s,a,l,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KE extends Os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new lx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _l(5,5,5),a=new Ii({name:"CubemapFromEquirect",uniforms:jo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:Zr});a.uniforms.tEquirect.value=t;const l=new rn(s,a),c=t.minFilter;return t.minFilter===gr&&(t.minFilter=ni),new $E(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(a)}}class Mn extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZE={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,l=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,n),x=this._getHandJoint(h,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),v=.02,S=.005;h.inputState.pinching&&g>v+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(ZE)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class QE extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ux{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ep,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new U;class pl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),a=Bt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cx extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Eo;const Va=new U,To=new U,wo=new U,Ao=new rt,za=new rt,dx=new ft,ku=new U,Ha=new U,Bu=new U,Z_=new rt,Oh=new rt,Q_=new rt;class JE extends zt{constructor(e=new cx){if(super(),this.isSprite=!0,this.type="Sprite",Eo===void 0){Eo=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ux(t,5);Eo.setIndex([0,1,2,0,2,3]),Eo.setAttribute("position",new pl(n,3,0,!1)),Eo.setAttribute("uv",new pl(n,2,3,!1))}this.geometry=Eo,this.material=e,this.center=new rt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),To.setFromMatrixScale(this.matrixWorld),dx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&To.multiplyScalar(-wo.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const l=this.center;Vu(ku.set(-.5,-.5,0),wo,l,To,s,a),Vu(Ha.set(.5,-.5,0),wo,l,To,s,a),Vu(Bu.set(.5,.5,0),wo,l,To,s,a),Z_.set(0,0),Oh.set(1,0),Q_.set(1,1);let c=e.ray.intersectTriangle(ku,Ha,Bu,!1,Va);if(c===null&&(Vu(Ha.set(-.5,.5,0),wo,l,To,s,a),Oh.set(0,1),c=e.ray.intersectTriangle(ku,Bu,Ha,!1,Va),c===null))return;const d=e.ray.origin.distanceTo(Va);d<e.near||d>e.far||t.push({distance:d,point:Va.clone(),uv:pi.getInterpolation(Va,ku,Ha,Bu,Z_,Oh,Q_,new rt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vu(i,e,t,n,s,a){Ao.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(za.x=a*Ao.x-s*Ao.y,za.y=s*Ao.x+a*Ao.y):za.copy(Ao),i.copy(e),i.x+=za.x,i.y+=za.y,i.applyMatrix4(dx)}const J_=new U,ev=new Ot,tv=new Ot,eT=new U,nv=new ft,zu=new U,Fh=new Ki,iv=new ft,kh=new Tc;class hx extends rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=R_,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zu),this.boundingBox.expandByPoint(zu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zu),this.boundingSphere.expandByPoint(zu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fh.copy(this.boundingSphere),Fh.applyMatrix4(s),e.ray.intersectsSphere(Fh)!==!1&&(iv.copy(s).invert(),kh.copy(e.ray).applyMatrix4(iv),!(this.boundingBox!==null&&kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===R_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ZS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ev.fromBufferAttribute(s.attributes.skinIndex,e),tv.fromBufferAttribute(s.attributes.skinWeight,e),J_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const l=tv.getComponent(a);if(l!==0){const c=ev.getComponent(a);nv.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(eT.copy(J_).applyMatrix4(nv),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fx extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class px extends fn{constructor(e=null,t=1,n=1,s,a,l,c,d,h=zn,p=zn,m,g){super(null,l,c,d,h,p,s,a,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rv=new ft,tT=new ft;class Zo{constructor(e=[],t=[]){this.uuid=Li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ft;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,l=e.length;a<l;a++){const c=e[a]?e[a].matrixWorld:tT;rv.multiplyMatrices(c,t[a]),rv.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Zo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new px(t,e,e,mi,Pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let l=t[a];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),l=new fx),this.bones.push(l),this.boneInverses.push(new ft().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const l=t[s];e.bones.push(l.uuid);const c=n[s];e.boneInverses.push(c.toArray())}return e}}class tp extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ro=new ft,sv=new ft,Hu=[],ov=new yr,nT=new ft,Ga=new rn,Wa=new Ki;class iT extends rn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tp(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),ov.copy(e.boundingBox).applyMatrix4(Ro),this.boundingBox.union(ov)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),Wa.copy(e.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(Wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,l=e*a+1;for(let c=0;c<n.length;c++)n[c]=s[l+c]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ga.geometry=this.geometry,Ga.material=this.material,Ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(n),e.ray.intersectsSphere(Wa)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Ro),sv.multiplyMatrices(n,Ro),Ga.matrixWorld=sv,Ga.raycast(e,Hu);for(let l=0,c=Hu.length;l<c;l++){const d=Hu[l];d.instanceId=a,d.object=this,t.push(d)}Hu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new px(new Float32Array(s*this.count),s,this.count,xp,Pi));const a=this.morphTexture.source.data.data;let l=0;for(let h=0;h<n.length;h++)l+=n[h];const c=this.geometry.morphTargetsRelative?1:1-l,d=s*e;a[d]=c,a.set(n,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bh=new U,rT=new U,sT=new dt;class bs{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Bh.subVectors(n,t).cross(rT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sT.getNormalMatrix(e),s=this.coplanarPoint(Bh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Ki,oT=new rt(.5,.5),Gu=new U;class Ap{constructor(e=new bs,t=new bs,n=new bs,s=new bs,a=new bs,l=new bs){this.planes=[e,t,n,s,a,l]}set(e,t,n,s,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yi,n=!1){const s=this.planes,a=e.elements,l=a[0],c=a[1],d=a[2],h=a[3],p=a[4],m=a[5],g=a[6],v=a[7],S=a[8],E=a[9],y=a[10],x=a[11],b=a[12],I=a[13],T=a[14],N=a[15];if(s[0].setComponents(h-l,v-p,x-S,N-b).normalize(),s[1].setComponents(h+l,v+p,x+S,N+b).normalize(),s[2].setComponents(h+c,v+m,x+E,N+I).normalize(),s[3].setComponents(h-c,v-m,x-E,N-I).normalize(),n)s[4].setComponents(d,g,y,T).normalize(),s[5].setComponents(h-d,v-g,x-y,N-T).normalize();else if(s[4].setComponents(h-d,v-g,x-y,N-T).normalize(),t===Yi)s[5].setComponents(h+d,v+g,x+y,N+T).normalize();else if(t===mc)s[5].setComponents(d,g,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=oT.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Gu.x=s.normal.x>0?e.max.x:e.min.x,Gu.y=s.normal.y>0?e.max.y:e.min.y,Gu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jr extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gc=new U,_c=new U,av=new ft,Xa=new Tc,Wu=new Ki,Vh=new U,lv=new U;class wc extends zt{constructor(e=new Ht,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)gc.fromBufferAttribute(t,s-1),_c.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=gc.distanceTo(_c);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wu.copy(n.boundingSphere),Wu.applyMatrix4(s),Wu.radius+=a,e.ray.intersectsSphere(Wu)===!1)return;av.copy(s).invert(),Xa.copy(e.ray).applyMatrix4(av);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const v=Math.max(0,l.start),S=Math.min(p.count,l.start+l.count);for(let E=v,y=S-1;E<y;E+=h){const x=p.getX(E),b=p.getX(E+1),I=Xu(this,e,Xa,d,x,b,E);I&&t.push(I)}if(this.isLineLoop){const E=p.getX(S-1),y=p.getX(v),x=Xu(this,e,Xa,d,E,y,S-1);x&&t.push(x)}}else{const v=Math.max(0,l.start),S=Math.min(g.count,l.start+l.count);for(let E=v,y=S-1;E<y;E+=h){const x=Xu(this,e,Xa,d,E,E+1,E);x&&t.push(x)}if(this.isLineLoop){const E=Xu(this,e,Xa,d,S-1,v,S-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Xu(i,e,t,n,s,a,l){const c=i.geometry.attributes.position;if(gc.fromBufferAttribute(c,s),_c.fromBufferAttribute(c,a),t.distanceSqToSegment(gc,_c,Vh,lv)>n)return;Vh.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Vh);if(!(h<e.near||h>e.far))return{distance:h,point:lv.clone().applyMatrix4(i.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:i}}const uv=new U,cv=new U;class Qo extends wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)uv.fromBufferAttribute(t,s),cv.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uv.distanceTo(cv);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class aT extends wc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vc extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dv=new ft,np=new Tc,ju=new Ki,Yu=new U;class ip extends zt{constructor(e=new Ht,t=new vc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ju.copy(n.boundingSphere),ju.applyMatrix4(s),ju.radius+=a,e.ray.intersectsSphere(ju)===!1)return;dv.copy(s).invert(),np.copy(e.ray).applyMatrix4(dv);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=n.index,m=n.attributes.position;if(h!==null){const g=Math.max(0,l.start),v=Math.min(h.count,l.start+l.count);for(let S=g,E=v;S<E;S++){const y=h.getX(S);Yu.fromBufferAttribute(m,y),hv(Yu,y,d,s,e,t,this)}}else{const g=Math.max(0,l.start),v=Math.min(m.count,l.start+l.count);for(let S=g,E=v;S<E;S++)Yu.fromBufferAttribute(m,S),hv(Yu,S,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function hv(i,e,t,n,s,a,l){const c=np.distanceSqToPoint(i);if(c<t){const d=new U;np.closestPointToPoint(i,d),d.applyMatrix4(n);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class lT extends fn{constructor(e,t,n,s,a,l,c,d,h){super(e,t,n,s,a,l,c,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mx extends fn{constructor(e,t,n=Us,s,a,l,c=zn,d=zn,h,p=ll,m=1){if(p!==ll&&p!==ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,s,a,l,c,d,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gx extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rp extends Ht{constructor(e=1,t=1,n=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));const l=[],c=[],d=[],h=[],p=t/2,m=Math.PI/2*e,g=t,v=2*m+g,S=n*2+a,E=s+1,y=new U,x=new U;for(let b=0;b<=S;b++){let I=0,T=0,N=0,L=0;if(b<=n){const C=b/n,R=C*Math.PI/2;T=-p-e*Math.cos(R),N=e*Math.sin(R),L=-e*Math.cos(R),I=C*m}else if(b<=n+a){const C=(b-n)/a;T=-p+C*t,N=e,L=0,I=m+C*g}else{const C=(b-n-a)/n,R=C*Math.PI/2;T=p+e*Math.sin(R),N=e*Math.cos(R),L=e*Math.sin(R),I=m+g+C*m}const D=Math.max(0,Math.min(1,I/v));let z=0;b===0?z=.5/s:b===S&&(z=-.5/s);for(let C=0;C<=s;C++){const R=C/s,B=R*Math.PI*2,Y=Math.sin(B),J=Math.cos(B);x.x=-N*J,x.y=T,x.z=N*Y,c.push(x.x,x.y,x.z),y.set(-N*J,L,N*Y),y.normalize(),d.push(y.x,y.y,y.z),h.push(R+z,D)}if(b>0){const C=(b-1)*E;for(let R=0;R<s;R++){const B=C+R,Y=C+R+1,J=b*E+R,he=b*E+R+1;l.push(B,Y,J),l.push(Y,he,J)}}}this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rp(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class bp extends Ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],l=[],c=[],d=[],h=new U,p=new rt;l.push(0,0,0),c.push(0,0,1),d.push(.5,.5);for(let m=0,g=3;m<=t;m++,g+=3){const v=n+m/t*s;h.x=e*Math.cos(v),h.y=e*Math.sin(v),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(l[g]/e+1)/2,p.y=(l[g+1]/e+1)/2,d.push(p.x,p.y)}for(let m=1;m<=t;m++)a.push(m,m+1,0);this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Cp extends Ht{constructor(e=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Tt(s,0,Math.PI*2);const a=[],l=[],c=[],d=[],h=[],p=1/t,m=new U,g=new rt,v=new U,S=new U,E=new U;let y=0,x=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:y=e[b+1].x-e[b].x,x=e[b+1].y-e[b].y,v.x=x*1,v.y=-y,v.z=x*0,E.copy(v),v.normalize(),d.push(v.x,v.y,v.z);break;case e.length-1:d.push(E.x,E.y,E.z);break;default:y=e[b+1].x-e[b].x,x=e[b+1].y-e[b].y,v.x=x*1,v.y=-y,v.z=x*0,S.copy(v),v.x+=E.x,v.y+=E.y,v.z+=E.z,v.normalize(),d.push(v.x,v.y,v.z),E.copy(S)}for(let b=0;b<=t;b++){const I=n+b*p*s,T=Math.sin(I),N=Math.cos(I);for(let L=0;L<=e.length-1;L++){m.x=e[L].x*T,m.y=e[L].y,m.z=e[L].x*N,l.push(m.x,m.y,m.z),g.x=b/t,g.y=L/(e.length-1),c.push(g.x,g.y);const D=d[3*L+0]*T,z=d[3*L+1],C=d[3*L+0]*N;h.push(D,z,C)}}for(let b=0;b<t;b++)for(let I=0;I<e.length-1;I++){const T=I+b*e.length,N=T,L=T+e.length,D=T+e.length+1,z=T+1;a.push(N,L,z),a.push(D,z,L)}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2)),this.setAttribute("normal",new Kt(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cp(e.points,e.segments,e.phiStart,e.phiLength)}}class Ac extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,l=t/2,c=Math.floor(n),d=Math.floor(s),h=c+1,p=d+1,m=e/c,g=t/d,v=[],S=[],E=[],y=[];for(let x=0;x<p;x++){const b=x*g-l;for(let I=0;I<h;I++){const T=I*m-a;S.push(T,-b,0),E.push(0,0,1),y.push(I/c),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let b=0;b<c;b++){const I=b+h*x,T=b+h*(x+1),N=b+1+h*(x+1),L=b+1+h*x;v.push(I,T,L),v.push(T,N,L)}this.setIndex(v),this.setAttribute("position",new Kt(S,3)),this.setAttribute("normal",new Kt(E,3)),this.setAttribute("uv",new Kt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class ml extends Ht{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(l+c,Math.PI);let h=0;const p=[],m=new U,g=new U,v=[],S=[],E=[],y=[];for(let x=0;x<=n;x++){const b=[],I=x/n;let T=0;x===0&&l===0?T=.5/t:x===n&&d===Math.PI&&(T=-.5/t);for(let N=0;N<=t;N++){const L=N/t;m.x=-e*Math.cos(s+L*a)*Math.sin(l+I*c),m.y=e*Math.cos(l+I*c),m.z=e*Math.sin(s+L*a)*Math.sin(l+I*c),S.push(m.x,m.y,m.z),g.copy(m).normalize(),E.push(g.x,g.y,g.z),y.push(L+T,1-I),b.push(h++)}p.push(b)}for(let x=0;x<n;x++)for(let b=0;b<t;b++){const I=p[x][b+1],T=p[x][b],N=p[x+1][b],L=p[x+1][b+1];(x!==0||l>0)&&v.push(I,T,L),(x!==n-1||d<Math.PI)&&v.push(T,N,L)}this.setIndex(v),this.setAttribute("position",new Kt(S,3)),this.setAttribute("normal",new Kt(E,3)),this.setAttribute("uv",new Kt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pp extends Ht{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],d=[],h=[],p=new U,m=new U,g=new U;for(let v=0;v<=n;v++)for(let S=0;S<=s;S++){const E=S/s*a,y=v/n*Math.PI*2;m.x=(e+t*Math.cos(y))*Math.cos(E),m.y=(e+t*Math.cos(y))*Math.sin(E),m.z=t*Math.sin(y),c.push(m.x,m.y,m.z),p.x=e*Math.cos(E),p.y=e*Math.sin(E),g.subVectors(m,p).normalize(),d.push(g.x,g.y,g.z),h.push(S/s),h.push(v/n)}for(let v=1;v<=n;v++)for(let S=1;S<=s;S++){const E=(s+1)*v+S-1,y=(s+1)*(v-1)+S-1,x=(s+1)*(v-1)+S,b=(s+1)*v+S;l.push(E,y,b),l.push(y,x,b)}this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lp extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ni extends Lp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class uT extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cT extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function qu(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dT(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function hT(i){function e(s,a){return i[s]-i[a]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function fv(i,e,t){const n=i.length,s=new i.constructor(n);for(let a=0,l=0;l!==n;++a){const c=t[a]*e;for(let d=0;d!==e;++d)s[l++]=i[c+d]}return s}function _x(i,e,t,n){let s=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[s++];if(a===void 0)return;let l=a[n];if(l!==void 0)if(Array.isArray(l))do l=a[n],l!==void 0&&(e.push(a.time),t.push(...l)),a=i[s++];while(a!==void 0);else if(l.toArray!==void 0)do l=a[n],l!==void 0&&(e.push(a.time),l.toArray(t,t.length)),a=i[s++];while(a!==void 0);else do l=a[n],l!==void 0&&(e.push(a.time),t.push(l)),a=i[s++];while(a!==void 0)}class vl{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];e:{t:{let l;n:{i:if(!(e<s)){for(let c=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(a=s,s=t[++n],e<s)break t}l=t.length;break n}if(!(e>=a)){const c=t[1];e<c&&(n=2,a=c);for(let d=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(s=a,a=t[--n-1],e>=a)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let l=0;l!==s;++l)t[l]=n[a+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fT extends vl{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:b_,endingEnd:b_}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,l=e+1,c=s[a],d=s[l];if(c===void 0)switch(this.getSettings_().endingStart){case C_:a=e,c=2*t-n;break;case P_:a=s.length-2,c=t+s[a]-s[a+1];break;default:a=e,c=n}if(d===void 0)switch(this.getSettings_().endingEnd){case C_:l=e,d=2*n-t;break;case P_:l=1,d=n+s[1]-s[0];break;default:l=e-1,d=t}const h=(n-t)*.5,p=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(d-n),this._offsetPrev=a*p,this._offsetNext=l*p}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,p=this._offsetPrev,m=this._offsetNext,g=this._weightPrev,v=this._weightNext,S=(n-t)/(s-t),E=S*S,y=E*S,x=-g*y+2*g*E-g*S,b=(1+g)*y+(-1.5-2*g)*E+(-.5+g)*S+1,I=(-1-v)*y+(1.5+v)*E+.5*S,T=v*y-v*E;for(let N=0;N!==c;++N)a[N]=x*l[p+N]+b*l[h+N]+I*l[d+N]+T*l[m+N];return a}}class pT extends vl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,p=(n-t)/(s-t),m=1-p;for(let g=0;g!==c;++g)a[g]=l[h+g]*m+l[d+g]*p;return a}}class mT extends vl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Di{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qu(t,this.TimeBufferType),this.values=qu(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qu(e.times,Array),values:qu(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cl:t=this.InterpolantFactoryMethodDiscrete;break;case dl:t=this.InterpolantFactoryMethodLinear;break;case ph:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cl;case this.InterpolantFactoryMethodLinear:return dl;case this.InterpolantFactoryMethodSmooth:return ph}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,l=s-1;for(;a!==s&&n[a]<e;)++a;for(;l!==-1&&n[l]>t;)--l;if(++l,a!==0||l!==s){a>=l&&(l=Math.max(l,1),a=l-1);const c=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==a;c++){const d=n[c];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,d),e=!1;break}if(l!==null&&l>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,d,l),e=!1;break}l=d}if(s!==void 0&&dT(s))for(let c=0,d=s.length;c!==d;++c){const h=s[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ph,a=e.length-1;let l=1;for(let c=1;c<a;++c){let d=!1;const h=e[c],p=e[c+1];if(h!==p&&(c!==1||h!==e[0]))if(s)d=!0;else{const m=c*n,g=m-n,v=m+n;for(let S=0;S!==n;++S){const E=t[m+S];if(E!==t[g+S]||E!==t[v+S]){d=!0;break}}}if(d){if(c!==l){e[l]=e[c];const m=c*n,g=l*n;for(let v=0;v!==n;++v)t[g+v]=t[m+v]}++l}}if(a>0){e[l]=e[a];for(let c=a*n,d=l*n,h=0;h!==n;++h)t[d+h]=t[c+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=dl;class Jo extends Di{constructor(e,t,n){super(e,t,n)}}Jo.prototype.ValueTypeName="bool";Jo.prototype.ValueBufferType=Array;Jo.prototype.DefaultInterpolation=cl;Jo.prototype.InterpolantFactoryMethodLinear=void 0;Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class vx extends Di{constructor(e,t,n,s){super(e,t,n,s)}}vx.prototype.ValueTypeName="color";class Yo extends Di{constructor(e,t,n,s){super(e,t,n,s)}}Yo.prototype.ValueTypeName="number";class gT extends vl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=(n-t)/(s-t);let h=e*c;for(let p=h+c;h!==p;h+=4)Mt.slerpFlat(a,0,l,h-c,l,h,d);return a}}class qo extends Di{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new gT(this.times,this.values,this.getValueSize(),e)}}qo.prototype.ValueTypeName="quaternion";qo.prototype.InterpolantFactoryMethodSmooth=void 0;class ea extends Di{constructor(e,t,n){super(e,t,n)}}ea.prototype.ValueTypeName="string";ea.prototype.ValueBufferType=Array;ea.prototype.DefaultInterpolation=cl;ea.prototype.InterpolantFactoryMethodLinear=void 0;ea.prototype.InterpolantFactoryMethodSmooth=void 0;class $o extends Di{constructor(e,t,n,s){super(e,t,n,s)}}$o.prototype.ValueTypeName="vector";class _T{constructor(e="",t=-1,n=[],s=QS){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Li(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(xT(n[l]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,l=n.length;a!==l;++a)t.push(Di.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,l=[];for(let c=0;c<a;c++){let d=[],h=[];d.push((c+a-1)%a,c,(c+1)%a),h.push(0,1,0);const p=hT(d);d=fv(d,1,p),h=fv(h,1,p),!s&&d[0]===0&&(d.push(a),h.push(h[0])),l.push(new Yo(".morphTargetInfluences["+t[c].name+"]",d,h).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,d=e.length;c<d;c++){const h=e[c],p=h.name.match(a);if(p&&p.length>1){const m=p[1];let g=s[m];g||(s[m]=g=[]),g.push(h)}}const l=[];for(const c in s)l.push(this.CreateFromMorphTargetSequence(c,s[c],t,n));return l}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,g,v,S,E){if(v.length!==0){const y=[],x=[];_x(v,y,x,S),y.length!==0&&E.push(new m(g,y,x))}},s=[],a=e.name||"default",l=e.fps||30,c=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let m=0;m<h.length;m++){const g=h[m].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const v={};let S;for(S=0;S<g.length;S++)if(g[S].morphTargets)for(let E=0;E<g[S].morphTargets.length;E++)v[g[S].morphTargets[E]]=-1;for(const E in v){const y=[],x=[];for(let b=0;b!==g[S].morphTargets.length;++b){const I=g[S];y.push(I.time),x.push(I.morphTarget===E?1:0)}s.push(new Yo(".morphTargetInfluence["+E+"]",y,x))}d=v.length*l}else{const v=".bones["+t[m].name+"]";n($o,v+".position",g,"pos",s),n(qo,v+".quaternion",g,"rot",s),n($o,v+".scale",g,"scl",s)}}return s.length===0?null:new this(a,d,s,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function vT(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yo;case"vector":case"vector2":case"vector3":case"vector4":return $o;case"color":return vx;case"quaternion":return qo;case"bool":case"boolean":return Jo;case"string":return ea}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function xT(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vT(i.type);if(i.times===void 0){const t=[],n=[];_x(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const _r={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class yT{constructor(e,t,n){const s=this;let a=!1,l=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(p){c++,a===!1&&s.onStart!==void 0&&s.onStart(p,l,c),a=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,c),l===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=h.length;m<g;m+=2){const v=h[m],S=h[m+1];if(v.global&&(v.lastIndex=0),v.test(p))return S}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const MT=new yT;class ta{constructor(e){this.manager=e!==void 0?e:MT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ta.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr={};class ST extends Error{constructor(e,t){super(e),this.response=t}}class xx extends ta{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=_r.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(pr[e]!==void 0){pr[e].push({onLoad:t,onProgress:n,onError:s});return}pr[e]=[],pr[e].push({onLoad:t,onProgress:n,onError:s});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,d=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=pr[e],m=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=g?parseInt(g):0,S=v!==0;let E=0;const y=new ReadableStream({start(x){b();function b(){m.read().then(({done:I,value:T})=>{if(I)x.close();else{E+=T.byteLength;const N=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:v});for(let L=0,D=p.length;L<D;L++){const z=p[L];z.onProgress&&z.onProgress(N)}x.enqueue(T),b()}},I=>{x.error(I)})}}});return new Response(y)}else throw new ST(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return h.json();default:if(c==="")return h.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),g=m&&m[1]?m[1].toLowerCase():void 0,v=new TextDecoder(g);return h.arrayBuffer().then(S=>v.decode(S))}}}).then(h=>{_r.add(`file:${e}`,h);const p=pr[e];delete pr[e];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onLoad&&v.onLoad(h)}}).catch(h=>{const p=pr[e];if(p===void 0)throw this.manager.itemError(e),h;delete pr[e];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const bo=new WeakMap;class yx extends ta{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=_r.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0);else{let m=bo.get(l);m===void 0&&(m=[],bo.set(l,m)),m.push({onLoad:t,onError:s})}return l}const c=hl("img");function d(){p(),t&&t(this);const m=bo.get(this)||[];for(let g=0;g<m.length;g++){const v=m[g];v.onLoad&&v.onLoad(this)}bo.delete(this),a.manager.itemEnd(e)}function h(m){p(),s&&s(m),_r.remove(`image:${e}`);const g=bo.get(this)||[];for(let v=0;v<g.length;v++){const S=g[v];S.onError&&S.onError(m)}bo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),_r.add(`image:${e}`,c),a.manager.itemStart(e),c.src=e,c}}class ET extends ta{constructor(e){super(e)}load(e,t,n,s){const a=new fn,l=new yx(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class Rc extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const zh=new ft,pv=new U,mv=new U;class Ip{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ap,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pv.setFromMatrixPosition(e.matrixWorld),t.position.copy(pv),mv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mv),t.updateMatrixWorld(),zh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class TT extends Ip{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Xo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wT extends Rc{constructor(e,t,n=0,s=Math.PI/3,a=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=l,this.map=null,this.shadow=new TT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gv=new ft,ja=new U,Hh=new U;class AT extends Ip{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ja.setFromMatrixPosition(e.matrixWorld),n.position.copy(ja),Hh.copy(n.position),Hh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hh),n.updateMatrixWorld(),s.makeTranslation(-ja.x,-ja.y,-ja.z),gv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gv,n.coordinateSystem,n.reversedDepth)}}class RT extends Rc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new AT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Np extends ax{constructor(e=-1,t=1,n=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bT extends Ip{constructor(){super(new Np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rp extends Rc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new bT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CT extends Rc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Gh=new WeakMap;class PT extends ta{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=_r.get(`image-bitmap:${e}`);if(l!==void 0){if(a.manager.itemStart(e),l.then){l.then(h=>{if(Gh.has(l)===!0)s&&s(Gh.get(l)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(h),a.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const d=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return _r.add(`image-bitmap:${e}`,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Gh.set(d,h),_r.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});_r.add(`image-bitmap:${e}`,d),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class LT extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class IT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Dp="\\[\\]\\.:\\/",NT=new RegExp("["+Dp+"]","g"),Up="[^"+Dp+"]",DT="[^"+Dp.replace("\\.","")+"]",UT=/((?:WC+[\/:])*)/.source.replace("WC",Up),OT=/(WCOD+)?/.source.replace("WCOD",DT),FT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Up),kT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Up),BT=new RegExp("^"+UT+OT+FT+kT+"$"),VT=["material","materials","bones","map"];class zT{constructor(e,t,n){const s=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Vt{constructor(e,t,n){this.path=t,this.parsedPath=n||Vt.parseTrackName(t),this.node=Vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Vt.Composite(e,t,n):new Vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(NT,"")}static parseTrackName(e){const t=BT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);VT.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let l=0;l<a.length;l++){const c=a[l];if(c.name===t||c.uuid===t)return c;const d=n(c.children);if(d)return d}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const l=e[s];if(l===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(d=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Vt.Composite=zT;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _v{constructor(e,t,n,s,a,l=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=a,this.normalized=l,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class HT extends Qo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Ht;s.setAttribute("position",new Kt(t,3)),s.setAttribute("color",new Kt(n,3));const a=new Jr({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(e,t,n){const s=new tt,a=this.geometry.attributes.color.array;return s.set(e),s.toArray(a,0),s.toArray(a,3),s.set(t),s.toArray(a,6),s.toArray(a,9),s.set(n),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function vv(i,e,t,n){const s=GT(n);switch(t){case q0:return i*e;case xp:return i*e/s.components*s.byteLength;case yp:return i*e/s.components*s.byteLength;case K0:return i*e*2/s.components*s.byteLength;case Mp:return i*e*2/s.components*s.byteLength;case $0:return i*e*3/s.components*s.byteLength;case mi:return i*e*4/s.components*s.byteLength;case Sp:return i*e*4/s.components*s.byteLength;case rc:case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oc:case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Af:case bf:return Math.max(i,16)*Math.max(e,8)/4;case wf:case Rf:return Math.max(i,8)*Math.max(e,8)/2;case Cf:case Pf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Df:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Of:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kf:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jf:case Yf:case qf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $f:case Kf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zf:case Qf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function GT(i){switch(i){case $i:case W0:return{byteLength:1,components:1};case ol:case X0:case gl:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case Us:case gp:case Pi:return{byteLength:4,components:1};case j0:case Y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ds}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ds);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mx(){let i=null,e=!1,t=null,n=null;function s(a,l){t(a,l),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function WT(i){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(d,g),i.bufferData(d,h,p),c.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,d,h){const p=d.array,m=d.updateRanges;if(i.bindBuffer(h,c),m.length===0)i.bufferSubData(h,0,p);else{m.sort((v,S)=>v.start-S.start);let g=0;for(let v=1;v<m.length;v++){const S=m[g],E=m[v];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++g,m[g]=E)}m.length=g+1;for(let v=0,S=m.length;v<S;v++){const E=m[v];i.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(i.deleteBuffer(d.buffer),e.delete(c))}function l(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:s,remove:a,update:l}}var XT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jT=`#ifdef USE_ALPHAHASH
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
#endif`,YT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$T=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZT=`#ifdef USE_AOMAP
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
#endif`,QT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JT=`#ifdef USE_BATCHING
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
#endif`,ew=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rw=`#ifdef USE_IRIDESCENCE
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
#endif`,sw=`#ifdef USE_BUMPMAP
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
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pw=`#define PI 3.141592653589793
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
} // validated`,mw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gw=`vec3 transformedNormal = objectNormal;
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
#endif`,_w=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ew=`#ifdef USE_ENVMAP
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
#endif`,Tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ww=`#ifdef USE_ENVMAP
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
#endif`,Aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rw=`#ifdef USE_ENVMAP
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
#endif`,bw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iw=`#ifdef USE_GRADIENTMAP
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
}`,Nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ow=`uniform bool receiveShadow;
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
#endif`,Fw=`#ifdef USE_ENVMAP
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
#endif`,kw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hw=`PhysicalMaterial material;
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
#endif`,Gw=`struct PhysicalMaterial {
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
}`,Ww=`
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
#endif`,Xw=`#if defined( RE_IndirectDiffuse )
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
#endif`,jw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eA=`#if defined( USE_POINTS_UV )
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
#endif`,tA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oA=`#ifdef USE_MORPHTARGETS
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
#endif`,aA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fA=`#ifdef USE_NORMALMAP
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
#endif`,pA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CA=`float getShadowMask() {
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
}`,PA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LA=`#ifdef USE_SKINNING
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
#endif`,IA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NA=`#ifdef USE_SKINNING
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
#endif`,DA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kA=`#ifdef USE_TRANSMISSION
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
#endif`,BA=`#ifdef USE_TRANSMISSION
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
#endif`,VA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XA=`uniform sampler2D t2D;
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
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`#include <common>
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
}`,ZA=`#if DEPTH_PACKING == 3200
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
}`,QA=`#define DISTANCE
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
}`,JA=`#define DISTANCE
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
}`,eR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`uniform float scale;
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
}`,iR=`uniform vec3 diffuse;
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
}`,rR=`#include <common>
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
}`,sR=`uniform vec3 diffuse;
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
}`,oR=`#define LAMBERT
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
}`,aR=`#define LAMBERT
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
}`,lR=`#define MATCAP
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
}`,uR=`#define MATCAP
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
}`,cR=`#define NORMAL
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
}`,dR=`#define NORMAL
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
}`,hR=`#define PHONG
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
}`,fR=`#define PHONG
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
}`,pR=`#define STANDARD
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
}`,mR=`#define STANDARD
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
}`,gR=`#define TOON
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
}`,_R=`#define TOON
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
}`,vR=`uniform float size;
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
}`,xR=`uniform vec3 diffuse;
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
}`,yR=`#include <common>
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
}`,MR=`uniform vec3 color;
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
}`,SR=`uniform float rotation;
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
}`,ER=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:XT,alphahash_pars_fragment:jT,alphamap_fragment:YT,alphamap_pars_fragment:qT,alphatest_fragment:$T,alphatest_pars_fragment:KT,aomap_fragment:ZT,aomap_pars_fragment:QT,batching_pars_vertex:JT,batching_vertex:ew,begin_vertex:tw,beginnormal_vertex:nw,bsdfs:iw,iridescence_fragment:rw,bumpmap_pars_fragment:sw,clipping_planes_fragment:ow,clipping_planes_pars_fragment:aw,clipping_planes_pars_vertex:lw,clipping_planes_vertex:uw,color_fragment:cw,color_pars_fragment:dw,color_pars_vertex:hw,color_vertex:fw,common:pw,cube_uv_reflection_fragment:mw,defaultnormal_vertex:gw,displacementmap_pars_vertex:_w,displacementmap_vertex:vw,emissivemap_fragment:xw,emissivemap_pars_fragment:yw,colorspace_fragment:Mw,colorspace_pars_fragment:Sw,envmap_fragment:Ew,envmap_common_pars_fragment:Tw,envmap_pars_fragment:ww,envmap_pars_vertex:Aw,envmap_physical_pars_fragment:Fw,envmap_vertex:Rw,fog_vertex:bw,fog_pars_vertex:Cw,fog_fragment:Pw,fog_pars_fragment:Lw,gradientmap_pars_fragment:Iw,lightmap_pars_fragment:Nw,lights_lambert_fragment:Dw,lights_lambert_pars_fragment:Uw,lights_pars_begin:Ow,lights_toon_fragment:kw,lights_toon_pars_fragment:Bw,lights_phong_fragment:Vw,lights_phong_pars_fragment:zw,lights_physical_fragment:Hw,lights_physical_pars_fragment:Gw,lights_fragment_begin:Ww,lights_fragment_maps:Xw,lights_fragment_end:jw,logdepthbuf_fragment:Yw,logdepthbuf_pars_fragment:qw,logdepthbuf_pars_vertex:$w,logdepthbuf_vertex:Kw,map_fragment:Zw,map_pars_fragment:Qw,map_particle_fragment:Jw,map_particle_pars_fragment:eA,metalnessmap_fragment:tA,metalnessmap_pars_fragment:nA,morphinstance_vertex:iA,morphcolor_vertex:rA,morphnormal_vertex:sA,morphtarget_pars_vertex:oA,morphtarget_vertex:aA,normal_fragment_begin:lA,normal_fragment_maps:uA,normal_pars_fragment:cA,normal_pars_vertex:dA,normal_vertex:hA,normalmap_pars_fragment:fA,clearcoat_normal_fragment_begin:pA,clearcoat_normal_fragment_maps:mA,clearcoat_pars_fragment:gA,iridescence_pars_fragment:_A,opaque_fragment:vA,packing:xA,premultiplied_alpha_fragment:yA,project_vertex:MA,dithering_fragment:SA,dithering_pars_fragment:EA,roughnessmap_fragment:TA,roughnessmap_pars_fragment:wA,shadowmap_pars_fragment:AA,shadowmap_pars_vertex:RA,shadowmap_vertex:bA,shadowmask_pars_fragment:CA,skinbase_vertex:PA,skinning_pars_vertex:LA,skinning_vertex:IA,skinnormal_vertex:NA,specularmap_fragment:DA,specularmap_pars_fragment:UA,tonemapping_fragment:OA,tonemapping_pars_fragment:FA,transmission_fragment:kA,transmission_pars_fragment:BA,uv_pars_fragment:VA,uv_pars_vertex:zA,uv_vertex:HA,worldpos_vertex:GA,background_vert:WA,background_frag:XA,backgroundCube_vert:jA,backgroundCube_frag:YA,cube_vert:qA,cube_frag:$A,depth_vert:KA,depth_frag:ZA,distanceRGBA_vert:QA,distanceRGBA_frag:JA,equirect_vert:eR,equirect_frag:tR,linedashed_vert:nR,linedashed_frag:iR,meshbasic_vert:rR,meshbasic_frag:sR,meshlambert_vert:oR,meshlambert_frag:aR,meshmatcap_vert:lR,meshmatcap_frag:uR,meshnormal_vert:cR,meshnormal_frag:dR,meshphong_vert:hR,meshphong_frag:fR,meshphysical_vert:pR,meshphysical_frag:mR,meshtoon_vert:gR,meshtoon_frag:_R,points_vert:vR,points_frag:xR,shadow_vert:yR,shadow_frag:MR,sprite_vert:SR,sprite_frag:ER},Pe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ji={basic:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Bn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Bn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Bn([Pe.points,Pe.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Bn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Bn([Pe.common,Pe.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Bn([Pe.sprite,Pe.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Bn([Pe.common,Pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Bn([Pe.lights,Pe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};ji.physical={uniforms:Bn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const $u={r:0,b:0,g:0},ys=new ii,TR=new ft;function wR(i,e,t,n,s,a,l){const c=new tt(0);let d=a===!0?0:1,h,p,m=null,g=0,v=null;function S(I){let T=I.isScene===!0?I.background:null;return T&&T.isTexture&&(T=(I.backgroundBlurriness>0?t:e).get(T)),T}function E(I){let T=!1;const N=S(I);N===null?x(c,d):N&&N.isColor&&(x(N,1),T=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(I,T){const N=S(T);N&&(N.isCubeTexture||N.mapping===Ec)?(p===void 0&&(p=new rn(new _l(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:jo(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),ys.copy(T.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(TR.makeRotationFromEuler(ys)),p.material.toneMapped=Lt.getTransfer(N.colorSpace)!==Xt,(m!==N||g!==N.version||v!==i.toneMapping)&&(p.material.needsUpdate=!0,m=N,g=N.version,v=i.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new rn(new Ac(2,2),new Ii({name:"BackgroundMaterial",uniforms:jo(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(N.colorSpace)!==Xt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(m!==N||g!==N.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,m=N,g=N.version,v=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function x(I,T){I.getRGB($u,sx(i)),n.buffers.color.setClear($u.r,$u.g,$u.b,T,l)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(I,T=1){c.set(I),d=T,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,x(c,d)},render:E,addToRenderList:y,dispose:b}}function AR(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null);let a=s,l=!1;function c(R,B,Y,J,he){let le=!1;const ue=m(J,Y,B);a!==ue&&(a=ue,h(a.object)),le=v(R,J,Y,he),le&&S(R,J,Y,he),he!==null&&e.update(he,i.ELEMENT_ARRAY_BUFFER),(le||l)&&(l=!1,T(R,B,Y,J),he!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function d(){return i.createVertexArray()}function h(R){return i.bindVertexArray(R)}function p(R){return i.deleteVertexArray(R)}function m(R,B,Y){const J=Y.wireframe===!0;let he=n[R.id];he===void 0&&(he={},n[R.id]=he);let le=he[B.id];le===void 0&&(le={},he[B.id]=le);let ue=le[J];return ue===void 0&&(ue=g(d()),le[J]=ue),ue}function g(R){const B=[],Y=[],J=[];for(let he=0;he<t;he++)B[he]=0,Y[he]=0,J[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:J,object:R,attributes:{},index:null}}function v(R,B,Y,J){const he=a.attributes,le=B.attributes;let ue=0;const te=Y.getAttributes();for(const H in te)if(te[H].location>=0){const ne=he[H];let V=le[H];if(V===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(V=R.instanceColor)),ne===void 0||ne.attribute!==V||V&&ne.data!==V.data)return!0;ue++}return a.attributesNum!==ue||a.index!==J}function S(R,B,Y,J){const he={},le=B.attributes;let ue=0;const te=Y.getAttributes();for(const H in te)if(te[H].location>=0){let ne=le[H];ne===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const V={};V.attribute=ne,ne&&ne.data&&(V.data=ne.data),he[H]=V,ue++}a.attributes=he,a.attributesNum=ue,a.index=J}function E(){const R=a.newAttributes;for(let B=0,Y=R.length;B<Y;B++)R[B]=0}function y(R){x(R,0)}function x(R,B){const Y=a.newAttributes,J=a.enabledAttributes,he=a.attributeDivisors;Y[R]=1,J[R]===0&&(i.enableVertexAttribArray(R),J[R]=1),he[R]!==B&&(i.vertexAttribDivisor(R,B),he[R]=B)}function b(){const R=a.newAttributes,B=a.enabledAttributes;for(let Y=0,J=B.length;Y<J;Y++)B[Y]!==R[Y]&&(i.disableVertexAttribArray(Y),B[Y]=0)}function I(R,B,Y,J,he,le,ue){ue===!0?i.vertexAttribIPointer(R,B,Y,he,le):i.vertexAttribPointer(R,B,Y,J,he,le)}function T(R,B,Y,J){E();const he=J.attributes,le=Y.getAttributes(),ue=B.defaultAttributeValues;for(const te in le){const H=le[te];if(H.location>=0){let ce=he[te];if(ce===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const ne=ce.normalized,V=ce.itemSize,oe=e.get(ce);if(oe===void 0)continue;const Oe=oe.buffer,ze=oe.type,He=oe.bytesPerElement,ie=ze===i.INT||ze===i.UNSIGNED_INT||ce.gpuType===gp;if(ce.isInterleavedBufferAttribute){const de=ce.data,Q=de.stride,me=ce.offset;if(de.isInstancedInterleavedBuffer){for(let _e=0;_e<H.locationSize;_e++)x(H.location+_e,de.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<H.locationSize;_e++)y(H.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let _e=0;_e<H.locationSize;_e++)I(H.location+_e,V/H.locationSize,ze,ne,Q*He,(me+V/H.locationSize*_e)*He,ie)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)x(H.location+de,ce.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<H.locationSize;de++)y(H.location+de);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let de=0;de<H.locationSize;de++)I(H.location+de,V/H.locationSize,ze,ne,V*He,V/H.locationSize*de*He,ie)}}else if(ue!==void 0){const ne=ue[te];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(H.location,ne);break;case 3:i.vertexAttrib3fv(H.location,ne);break;case 4:i.vertexAttrib4fv(H.location,ne);break;default:i.vertexAttrib1fv(H.location,ne)}}}}b()}function N(){z();for(const R in n){const B=n[R];for(const Y in B){const J=B[Y];for(const he in J)p(J[he].object),delete J[he];delete B[Y]}delete n[R]}}function L(R){if(n[R.id]===void 0)return;const B=n[R.id];for(const Y in B){const J=B[Y];for(const he in J)p(J[he].object),delete J[he];delete B[Y]}delete n[R.id]}function D(R){for(const B in n){const Y=n[B];if(Y[R.id]===void 0)continue;const J=Y[R.id];for(const he in J)p(J[he].object),delete J[he];delete Y[R.id]}}function z(){C(),l=!0,a!==s&&(a=s,h(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:z,resetDefaultState:C,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:y,disableUnusedAttributes:b}}function RR(i,e,t){let n;function s(h){n=h}function a(h,p){i.drawArrays(n,h,p),t.update(p,n,1)}function l(h,p,m){m!==0&&(i.drawArraysInstanced(n,h,p,m),t.update(p,n,m))}function c(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,m);let v=0;for(let S=0;S<m;S++)v+=p[S];t.update(v,n,1)}function d(h,p,m,g){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<h.length;S++)l(h[S],p[S],g[S]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,p,0,g,0,m);let S=0;for(let E=0;E<m;E++)S+=p[E]*g[E];t.update(S,n,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function bR(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(D){return!(D!==mi&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const z=D===gl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==$i&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Pi&&!z)}function d(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=S>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:b,maxVaryings:I,maxFragmentUniforms:T,vertexTextures:N,maxSamples:L}}function CR(i){const e=this;let t=null,n=0,s=!1,a=!1;const l=new bs,c=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||n!==0||s;return s=g,n=m.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,v){const S=m.clippingPlanes,E=m.clipIntersection,y=m.clipShadows,x=i.get(m);if(!s||S===null||S.length===0||a&&!y)a?p(null):h();else{const b=a?0:n,I=b*4;let T=x.clippingState||null;d.value=T,T=p(S,g,I,v);for(let N=0;N!==I;++N)T[N]=t[N];x.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,v,S){const E=m!==null?m.length:0;let y=null;if(E!==0){if(y=d.value,S!==!0||y===null){const x=v+E*4,b=g.matrixWorldInverse;c.getNormalMatrix(b),(y===null||y.length<x)&&(y=new Float32Array(x));for(let I=0,T=v;I!==E;++I,T+=4)l.copy(m[I]).applyMatrix4(b,c),l.normal.toArray(y,T),y[T+3]=l.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function PR(i){let e=new WeakMap;function t(l,c){return c===Ef?l.mapping=Ho:c===Tf&&(l.mapping=Go),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Ef||c===Tf)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const h=new KE(d.height);return h.fromEquirectangularTexture(i,l),e.set(l,h),l.addEventListener("dispose",s),t(h.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Oo=4,xv=[.125,.215,.35,.446,.526,.582],Ls=20,Wh=new Np,yv=new tt;let Xh=null,jh=0,Yh=0,qh=!1;const Cs=(1+Math.sqrt(5))/2,Co=1/Cs,Mv=[new U(-Cs,Co,0),new U(Cs,Co,0),new U(-Co,0,Cs),new U(Co,0,Cs),new U(0,Cs,-Co),new U(0,Cs,Co),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],LR=new U;class Sv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,a={}){const{size:l=256,position:c=LR}=a;Xh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,s,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,jh,Yh),this._renderer.xr.enabled=qh,e.scissorTest=!1,Ku(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ho||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:gl,format:mi,colorSpace:Hn,depthBuffer:!1},s=Ev(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ev(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IR(a)),this._blurMaterial=NR(a,e,t)}return s}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,Wh)}_sceneToCubeUV(e,t,n,s,a){const d=new Vn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(yv),m.toneMapping=Qr,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null));const E=new gi({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),y=new rn(new _l,E);let x=!1;const b=e.background;b?b.isColor&&(E.color.copy(b),e.background=null,x=!0):(E.color.copy(yv),x=!0);for(let I=0;I<6;I++){const T=I%3;T===0?(d.up.set(0,h[I],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[I],a.y,a.z)):T===1?(d.up.set(0,0,h[I]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[I],a.z)):(d.up.set(0,h[I],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[I]));const N=this._cubeSize;Ku(s,T*N,I>2?N:0,N,N),m.setRenderTarget(s),x&&m.render(y,d),m.render(e,d)}y.geometry.dispose(),y.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ho||e.mapping===Go;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tv());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new rn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;Ku(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,Wh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Mv[(s-a-1)%Mv.length];this._blur(e,a-1,a,l,c)}t.autoClear=n}_blur(e,t,n,s,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",a),this._halfBlur(l,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,l,c){const d=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new rn(this._lodPlanes[s],h),g=h.uniforms,v=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Ls-1),E=a/S,y=isFinite(a)?1+Math.floor(p*E):Ls;y>Ls&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ls}`);const x=[];let b=0;for(let D=0;D<Ls;++D){const z=D/E,C=Math.exp(-z*z/2);x.push(C),D===0?b+=C:D<y&&(b+=2*C)}for(let D=0;D<x.length;D++)x[D]=x[D]/b;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=l==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:I}=this;g.dTheta.value=S,g.mipInt.value=I-n;const T=this._sizeLods[s],N=3*T*(s>I-Oo?s-I+Oo:0),L=4*(this._cubeSize-T);Ku(t,N,L,3*T,2*T),d.setRenderTarget(t),d.render(m,Wh)}}function IR(i){const e=[],t=[],n=[];let s=i;const a=i-Oo+1+xv.length;for(let l=0;l<a;l++){const c=Math.pow(2,s);t.push(c);let d=1/c;l>i-Oo?d=xv[l-i+Oo-1]:l===0&&(d=0),n.push(d);const h=1/(c-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,S=6,E=3,y=2,x=1,b=new Float32Array(E*S*v),I=new Float32Array(y*S*v),T=new Float32Array(x*S*v);for(let L=0;L<v;L++){const D=L%3*2/3-1,z=L>2?0:-1,C=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];b.set(C,E*S*L),I.set(g,y*S*L);const R=[L,L,L,L,L,L];T.set(R,x*S*L)}const N=new Ht;N.setAttribute("position",new wt(b,E)),N.setAttribute("uv",new wt(I,y)),N.setAttribute("faceIndex",new wt(T,x)),e.push(N),s>Oo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ev(i,e,t){const n=new Os(i,e,t);return n.texture.mapping=Ec,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ku(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function NR(i,e,t){const n=new Float32Array(Ls),s=new U(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Op(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Tv(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Op(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function wv(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Op(){return`

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
	`}function DR(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,h=d===Ef||d===Tf,p=d===Ho||d===Go;if(h||p){let m=e.get(c);const g=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new Sv(i)),m=h?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const v=c.image;return h&&v&&v.height>0||p&&v&&s(v)?(t===null&&(t=new Sv(i)),m=h?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",a),m.texture):null}}}return c}function s(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function UR(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&fl("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function OR(i,e,t,n){const s={},a=new WeakMap;function l(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",l),delete s[g.id];const v=a.get(g);v&&(e.remove(v),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(m,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,t.memory.geometries++),g}function d(m){const g=m.attributes;for(const v in g)e.update(g[v],i.ARRAY_BUFFER)}function h(m){const g=[],v=m.index,S=m.attributes.position;let E=0;if(v!==null){const b=v.array;E=v.version;for(let I=0,T=b.length;I<T;I+=3){const N=b[I+0],L=b[I+1],D=b[I+2];g.push(N,L,L,D,D,N)}}else if(S!==void 0){const b=S.array;E=S.version;for(let I=0,T=b.length/3-1;I<T;I+=3){const N=I+0,L=I+1,D=I+2;g.push(N,L,L,D,D,N)}}else return;const y=new(J0(g)?rx:ix)(g,1);y.version=E;const x=a.get(m);x&&e.remove(x),a.set(m,y)}function p(m){const g=a.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&h(m)}else h(m);return a.get(m)}return{get:c,update:d,getWireframeAttribute:p}}function FR(i,e,t){let n;function s(g){n=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,v){i.drawElements(n,v,a,g*l),t.update(v,n,1)}function h(g,v,S){S!==0&&(i.drawElementsInstanced(n,v,a,g*l,S),t.update(v,n,S))}function p(g,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,g,0,S);let y=0;for(let x=0;x<S;x++)y+=v[x];t.update(y,n,1)}function m(g,v,S,E){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)h(g[x]/l,v[x],E[x]);else{y.multiDrawElementsInstancedWEBGL(n,v,0,a,g,0,E,0,S);let x=0;for(let b=0;b<S;b++)x+=v[b]*E[b];t.update(x,n,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function kR(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function BR(i,e,t){const n=new WeakMap,s=new Ot;function a(l,c,d){const h=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(c);if(g===void 0||g.count!==m){let R=function(){z.dispose(),n.delete(c),c.removeEventListener("dispose",R)};var v=R;g!==void 0&&g.texture.dispose();const S=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let T=0;S===!0&&(T=1),E===!0&&(T=2),y===!0&&(T=3);let N=c.attributes.position.count*T,L=1;N>e.maxTextureSize&&(L=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const D=new Float32Array(N*L*4*m),z=new ex(D,N,L,m);z.type=Pi,z.needsUpdate=!0;const C=T*4;for(let B=0;B<m;B++){const Y=x[B],J=b[B],he=I[B],le=N*L*4*B;for(let ue=0;ue<Y.count;ue++){const te=ue*C;S===!0&&(s.fromBufferAttribute(Y,ue),D[le+te+0]=s.x,D[le+te+1]=s.y,D[le+te+2]=s.z,D[le+te+3]=0),E===!0&&(s.fromBufferAttribute(J,ue),D[le+te+4]=s.x,D[le+te+5]=s.y,D[le+te+6]=s.z,D[le+te+7]=0),y===!0&&(s.fromBufferAttribute(he,ue),D[le+te+8]=s.x,D[le+te+9]=s.y,D[le+te+10]=s.z,D[le+te+11]=he.itemSize===4?s.w:1)}}g={count:m,texture:z,size:new rt(N,L)},n.set(c,g),c.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const E=c.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:a}}function VR(i,e,t,n){let s=new WeakMap;function a(d){const h=n.render.frame,p=d.geometry,m=e.get(d,p);if(s.get(m)!==h&&(e.update(m),s.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return m}function l(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}const Sx=new fn,Av=new mx(1,1),Ex=new ex,Tx=new DE,wx=new lx,Rv=[],bv=[],Cv=new Float32Array(16),Pv=new Float32Array(9),Lv=new Float32Array(4);function na(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Rv[s];if(a===void 0&&(a=new Float32Array(s),Rv[s]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bc(i,e){let t=bv[e];t===void 0&&(t=new Int32Array(e),bv[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function HR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function GR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function WR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function XR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Lv.set(n),i.uniformMatrix2fv(this.addr,!1,Lv),mn(t,n)}}function jR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Pv.set(n),i.uniformMatrix3fv(this.addr,!1,Pv),mn(t,n)}}function YR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Cv.set(n),i.uniformMatrix4fv(this.addr,!1,Cv),mn(t,n)}}function qR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $R(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function KR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function ZR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function QR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function JR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function e1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function t1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function n1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Av.compareFunction=Q0,a=Av):a=Sx,t.setTexture2D(e||a,s)}function i1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tx,s)}function r1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wx,s)}function s1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ex,s)}function o1(i){switch(i){case 5126:return zR;case 35664:return HR;case 35665:return GR;case 35666:return WR;case 35674:return XR;case 35675:return jR;case 35676:return YR;case 5124:case 35670:return qR;case 35667:case 35671:return $R;case 35668:case 35672:return KR;case 35669:case 35673:return ZR;case 5125:return QR;case 36294:return JR;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return s1}}function a1(i,e){i.uniform1fv(this.addr,e)}function l1(i,e){const t=na(e,this.size,2);i.uniform2fv(this.addr,t)}function u1(i,e){const t=na(e,this.size,3);i.uniform3fv(this.addr,t)}function c1(i,e){const t=na(e,this.size,4);i.uniform4fv(this.addr,t)}function d1(i,e){const t=na(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h1(i,e){const t=na(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f1(i,e){const t=na(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p1(i,e){i.uniform1iv(this.addr,e)}function m1(i,e){i.uniform2iv(this.addr,e)}function g1(i,e){i.uniform3iv(this.addr,e)}function _1(i,e){i.uniform4iv(this.addr,e)}function v1(i,e){i.uniform1uiv(this.addr,e)}function x1(i,e){i.uniform2uiv(this.addr,e)}function y1(i,e){i.uniform3uiv(this.addr,e)}function M1(i,e){i.uniform4uiv(this.addr,e)}function S1(i,e,t){const n=this.cache,s=e.length,a=bc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||Sx,a[l])}function E1(i,e,t){const n=this.cache,s=e.length,a=bc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||Tx,a[l])}function T1(i,e,t){const n=this.cache,s=e.length,a=bc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||wx,a[l])}function w1(i,e,t){const n=this.cache,s=e.length,a=bc(t,s);pn(n,a)||(i.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||Ex,a[l])}function A1(i){switch(i){case 5126:return a1;case 35664:return l1;case 35665:return u1;case 35666:return c1;case 35674:return d1;case 35675:return h1;case 35676:return f1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return x1;case 36295:return y1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return w1}}class R1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o1(t.type)}}class b1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A1(t.type)}}class C1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const c=s[a];c.setValue(e,t[c.id],n)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function Iv(i,e){i.seq.push(e),i.map[e.id]=e}function P1(i,e,t){const n=i.name,s=n.length;for($h.lastIndex=0;;){const a=$h.exec(n),l=$h.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&l+2===s){Iv(t,h===void 0?new R1(c,i,e):new b1(c,i,e));break}else{let m=t.map[c];m===void 0&&(m=new C1(c),Iv(t,m)),t=m}}}class lc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);P1(a,l,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,l=t.length;a!==l;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function Nv(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const L1=37297;let I1=0;function N1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=s;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const Dv=new dt;function D1(i){Lt._getMatrix(Dv,Lt.workingColorSpace,i);const e=`mat3( ${Dv.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(i)){case pc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uv(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+N1(i.getShaderSource(e),c)}else return a}function U1(i,e){const t=D1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function O1(i,e){let t;switch(e){case WS:t="Linear";break;case XS:t="Reinhard";break;case jS:t="Cineon";break;case YS:t="ACESFilmic";break;case $S:t="AgX";break;case KS:t="Neutral";break;case qS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zu=new U;function F1(){Lt.getLuminanceCoefficients(Zu);const i=Zu.x.toFixed(4),e=Zu.y.toFixed(4),t=Zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function B1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function tl(i){return i!==""}function Ov(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(i){return i.replace(z1,G1)}const H1=new Map;function G1(i,e){let t=St[e];if(t===void 0){const n=H1.get(e);if(n!==void 0)t=St[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sp(t)}const W1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kv(i){return i.replace(W1,X1)}function X1(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Bv(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function j1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===V0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ES?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function Y1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ho:case Go:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function $1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case z0:e="ENVMAP_BLENDING_MULTIPLY";break;case HS:e="ENVMAP_BLENDING_MIX";break;case GS:e="ENVMAP_BLENDING_ADD";break}return e}function K1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Z1(i,e,t,n){const s=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const d=j1(t),h=Y1(t),p=q1(t),m=$1(t),g=K1(t),v=k1(t),S=B1(a),E=s.createProgram();let y,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(tl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(tl).join(`
`),x.length>0&&(x+=`
`)):(y=[Bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),x=[Bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qr?"#define TONE_MAPPING":"",t.toneMapping!==Qr?St.tonemapping_pars_fragment:"",t.toneMapping!==Qr?O1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,U1("linearToOutputTexel",t.outputColorSpace),F1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tl).join(`
`)),l=sp(l),l=Ov(l,t),l=Fv(l,t),c=sp(c),c=Ov(c,t),c=Fv(c,t),l=kv(l),c=kv(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===I_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===I_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=b+y+l,T=b+x+c,N=Nv(s,s.VERTEX_SHADER,I),L=Nv(s,s.FRAGMENT_SHADER,T);s.attachShader(E,N),s.attachShader(E,L),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function D(B){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(E)||"",J=s.getShaderInfoLog(N)||"",he=s.getShaderInfoLog(L)||"",le=Y.trim(),ue=J.trim(),te=he.trim();let H=!0,ce=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,N,L);else{const ne=Uv(s,N,"vertex"),V=Uv(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+le+`
`+ne+`
`+V)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ue===""||te==="")&&(ce=!1);ce&&(B.diagnostics={runnable:H,programLog:le,vertexShader:{log:ue,prefix:y},fragmentShader:{log:te,prefix:x}})}s.deleteShader(N),s.deleteShader(L),z=new lc(s,E),C=V1(s,E)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(E,L1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=N,this.fragmentShader=L,this}let Q1=0;class J1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new eb(e),t.set(e,n)),n}}class eb{constructor(e){this.id=Q1++,this.code=e,this.usedTimes=0}}function tb(i,e,t,n,s,a,l){const c=new tx,d=new J1,h=new Set,p=[],m=s.logarithmicDepthBuffer,g=s.vertexTextures;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return h.add(C),C===0?"uv":`uv${C}`}function y(C,R,B,Y,J){const he=Y.fog,le=J.geometry,ue=C.isMeshStandardMaterial?Y.environment:null,te=(C.isMeshStandardMaterial?t:e).get(C.envMap||ue),H=te&&te.mapping===Ec?te.image.height:null,ce=S[C.type];C.precision!==null&&(v=s.getMaxPrecision(C.precision),v!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const ne=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,V=ne!==void 0?ne.length:0;let oe=0;le.morphAttributes.position!==void 0&&(oe=1),le.morphAttributes.normal!==void 0&&(oe=2),le.morphAttributes.color!==void 0&&(oe=3);let Oe,ze,He,ie;if(ce){const Ct=ji[ce];Oe=Ct.vertexShader,ze=Ct.fragmentShader}else Oe=C.vertexShader,ze=C.fragmentShader,d.update(C),He=d.getVertexShaderID(C),ie=d.getFragmentShaderID(C);const de=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),me=J.isInstancedMesh===!0,_e=J.isBatchedMesh===!0,Ge=!!C.map,xt=!!C.matcap,k=!!te,Qe=!!C.aoMap,De=!!C.lightMap,ke=!!C.bumpMap,Ce=!!C.normalMap,it=!!C.displacementMap,Fe=!!C.emissiveMap,ut=!!C.metalnessMap,Gt=!!C.roughnessMap,qt=C.anisotropy>0,O=C.clearcoat>0,A=C.dispersion>0,Z=C.iridescence>0,pe=C.sheen>0,ve=C.transmission>0,fe=qt&&!!C.anisotropyMap,Je=O&&!!C.clearcoatMap,Se=O&&!!C.clearcoatNormalMap,We=O&&!!C.clearcoatRoughnessMap,Ke=Z&&!!C.iridescenceMap,we=Z&&!!C.iridescenceThicknessMap,Ie=pe&&!!C.sheenColorMap,st=pe&&!!C.sheenRoughnessMap,$e=!!C.specularMap,Le=!!C.specularColorMap,pt=!!C.specularIntensityMap,W=ve&&!!C.transmissionMap,Te=ve&&!!C.thicknessMap,Re=!!C.gradientMap,Ue=!!C.alphaMap,Me=C.alphaTest>0,ge=!!C.alphaHash,Xe=!!C.extensions;let mt=Qr;C.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(mt=i.toneMapping);const It={shaderID:ce,shaderType:C.type,shaderName:C.name,vertexShader:Oe,fragmentShader:ze,defines:C.defines,customVertexShaderID:He,customFragmentShaderID:ie,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:_e,batchingColor:_e&&J._colorsTexture!==null,instancing:me,instancingColor:me&&J.instanceColor!==null,instancingMorph:me&&J.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Hn,alphaToCoverage:!!C.alphaToCoverage,map:Ge,matcap:xt,envMap:k,envMapMode:k&&te.mapping,envMapCubeUVHeight:H,aoMap:Qe,lightMap:De,bumpMap:ke,normalMap:Ce,displacementMap:g&&it,emissiveMap:Fe,normalMapObjectSpace:Ce&&C.normalMapType===nE,normalMapTangentSpace:Ce&&C.normalMapType===Ep,metalnessMap:ut,roughnessMap:Gt,anisotropy:qt,anisotropyMap:fe,clearcoat:O,clearcoatMap:Je,clearcoatNormalMap:Se,clearcoatRoughnessMap:We,dispersion:A,iridescence:Z,iridescenceMap:Ke,iridescenceThicknessMap:we,sheen:pe,sheenColorMap:Ie,sheenRoughnessMap:st,specularMap:$e,specularColorMap:Le,specularIntensityMap:pt,transmission:ve,transmissionMap:W,thicknessMap:Te,gradientMap:Re,opaque:C.transparent===!1&&C.blending===ko&&C.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Me,alphaHash:ge,combine:C.combine,mapUv:Ge&&E(C.map.channel),aoMapUv:Qe&&E(C.aoMap.channel),lightMapUv:De&&E(C.lightMap.channel),bumpMapUv:ke&&E(C.bumpMap.channel),normalMapUv:Ce&&E(C.normalMap.channel),displacementMapUv:it&&E(C.displacementMap.channel),emissiveMapUv:Fe&&E(C.emissiveMap.channel),metalnessMapUv:ut&&E(C.metalnessMap.channel),roughnessMapUv:Gt&&E(C.roughnessMap.channel),anisotropyMapUv:fe&&E(C.anisotropyMap.channel),clearcoatMapUv:Je&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Se&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:we&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:st&&E(C.sheenRoughnessMap.channel),specularMapUv:$e&&E(C.specularMap.channel),specularColorMapUv:Le&&E(C.specularColorMap.channel),specularIntensityMapUv:pt&&E(C.specularIntensityMap.channel),transmissionMapUv:W&&E(C.transmissionMap.channel),thicknessMapUv:Te&&E(C.thicknessMap.channel),alphaMapUv:Ue&&E(C.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Ce||qt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!le.attributes.uv&&(Ge||Ue),fog:!!he,useFog:C.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Q,skinning:J.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:oe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:Ge&&C.map.isVideoTexture===!0&&Lt.getTransfer(C.map.colorSpace)===Xt,decodeVideoTextureEmissive:Fe&&C.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(C.emissiveMap.colorSpace)===Xt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===fi,flipSided:C.side===In,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Xe&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&C.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return It.vertexUv1s=h.has(1),It.vertexUv2s=h.has(2),It.vertexUv3s=h.has(3),h.clear(),It}function x(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)R.push(B),R.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(b(R,C),I(R,C),R.push(i.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function b(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function I(C,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),R.gradientMap&&c.enable(22),C.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),C.push(c.mask)}function T(C){const R=S[C.type];let B;if(R){const Y=ji[R];B=ox.clone(Y.uniforms)}else B=C.uniforms;return B}function N(C,R){let B;for(let Y=0,J=p.length;Y<J;Y++){const he=p[Y];if(he.cacheKey===R){B=he,++B.usedTimes;break}}return B===void 0&&(B=new Z1(i,R,C,a),p.push(B)),B}function L(C){if(--C.usedTimes===0){const R=p.indexOf(C);p[R]=p[p.length-1],p.pop(),C.destroy()}}function D(C){d.remove(C)}function z(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:T,acquireProgram:N,releaseProgram:L,releaseShaderCache:D,programs:p,dispose:z}}function nb(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function n(l){i.delete(l)}function s(l,c,d){i.get(l)[c]=d}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function ib(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zv(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function l(m,g,v,S,E,y){let x=i[e];return x===void 0?(x={id:m.id,object:m,geometry:g,material:v,groupOrder:S,renderOrder:m.renderOrder,z:E,group:y},i[e]=x):(x.id=m.id,x.object=m,x.geometry=g,x.material=v,x.groupOrder=S,x.renderOrder=m.renderOrder,x.z=E,x.group=y),e++,x}function c(m,g,v,S,E,y){const x=l(m,g,v,S,E,y);v.transmission>0?n.push(x):v.transparent===!0?s.push(x):t.push(x)}function d(m,g,v,S,E,y){const x=l(m,g,v,S,E,y);v.transmission>0?n.unshift(x):v.transparent===!0?s.unshift(x):t.unshift(x)}function h(m,g){t.length>1&&t.sort(m||ib),n.length>1&&n.sort(g||Vv),s.length>1&&s.sort(g||Vv)}function p(){for(let m=e,g=i.length;m<g;m++){const v=i[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:d,finish:p,sort:h}}function rb(){let i=new WeakMap;function e(n,s){const a=i.get(n);let l;return a===void 0?(l=new zv,i.set(n,[l])):s>=a.length?(l=new zv,a.push(l)):l=a[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function sb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new tt};break;case"SpotLight":t={position:new U,direction:new U,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function ob(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ab=0;function lb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ub(i){const e=new sb,t=ob(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);const s=new U,a=new ft,l=new ft;function c(h){let p=0,m=0,g=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let v=0,S=0,E=0,y=0,x=0,b=0,I=0,T=0,N=0,L=0,D=0;h.sort(lb);for(let C=0,R=h.length;C<R;C++){const B=h[C],Y=B.color,J=B.intensity,he=B.distance,le=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=Y.r*J,m+=Y.g*J,g+=Y.b*J;else if(B.isLightProbe){for(let ue=0;ue<9;ue++)n.probe[ue].addScaledVector(B.sh.coefficients[ue],J);D++}else if(B.isDirectionalLight){const ue=e.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const te=B.shadow,H=t.get(B);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,n.directionalShadow[v]=H,n.directionalShadowMap[v]=le,n.directionalShadowMatrix[v]=B.shadow.matrix,b++}n.directional[v]=ue,v++}else if(B.isSpotLight){const ue=e.get(B);ue.position.setFromMatrixPosition(B.matrixWorld),ue.color.copy(Y).multiplyScalar(J),ue.distance=he,ue.coneCos=Math.cos(B.angle),ue.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ue.decay=B.decay,n.spot[E]=ue;const te=B.shadow;if(B.map&&(n.spotLightMap[N]=B.map,N++,te.updateMatrices(B),B.castShadow&&L++),n.spotLightMatrix[E]=te.matrix,B.castShadow){const H=t.get(B);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,n.spotShadow[E]=H,n.spotShadowMap[E]=le,T++}E++}else if(B.isRectAreaLight){const ue=e.get(B);ue.color.copy(Y).multiplyScalar(J),ue.halfWidth.set(B.width*.5,0,0),ue.halfHeight.set(0,B.height*.5,0),n.rectArea[y]=ue,y++}else if(B.isPointLight){const ue=e.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity),ue.distance=B.distance,ue.decay=B.decay,B.castShadow){const te=B.shadow,H=t.get(B);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,H.shadowCameraNear=te.camera.near,H.shadowCameraFar=te.camera.far,n.pointShadow[S]=H,n.pointShadowMap[S]=le,n.pointShadowMatrix[S]=B.shadow.matrix,I++}n.point[S]=ue,S++}else if(B.isHemisphereLight){const ue=e.get(B);ue.skyColor.copy(B.color).multiplyScalar(J),ue.groundColor.copy(B.groundColor).multiplyScalar(J),n.hemi[x]=ue,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const z=n.hash;(z.directionalLength!==v||z.pointLength!==S||z.spotLength!==E||z.rectAreaLength!==y||z.hemiLength!==x||z.numDirectionalShadows!==b||z.numPointShadows!==I||z.numSpotShadows!==T||z.numSpotMaps!==N||z.numLightProbes!==D)&&(n.directional.length=v,n.spot.length=E,n.rectArea.length=y,n.point.length=S,n.hemi.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=T+N-L,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=D,z.directionalLength=v,z.pointLength=S,z.spotLength=E,z.rectAreaLength=y,z.hemiLength=x,z.numDirectionalShadows=b,z.numPointShadows=I,z.numSpotShadows=T,z.numSpotMaps=N,z.numLightProbes=D,n.version=ab++)}function d(h,p){let m=0,g=0,v=0,S=0,E=0;const y=p.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){const I=h[x];if(I.isDirectionalLight){const T=n.directional[m];T.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(y),m++}else if(I.isSpotLight){const T=n.spot[v];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(y),v++}else if(I.isRectAreaLight){const T=n.rectArea[S];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(y),l.identity(),a.copy(I.matrixWorld),a.premultiply(y),l.extractRotation(a),T.halfWidth.set(I.width*.5,0,0),T.halfHeight.set(0,I.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),S++}else if(I.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(y),g++}else if(I.isHemisphereLight){const T=n.hemi[E];T.direction.setFromMatrixPosition(I.matrixWorld),T.direction.transformDirection(y),E++}}}return{setup:c,setupView:d,state:n}}function Hv(i){const e=new ub(i),t=[],n=[];function s(p){h.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function l(p){n.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:l}}function cb(i){let e=new WeakMap;function t(s,a=0){const l=e.get(s);let c;return l===void 0?(c=new Hv(i),e.set(s,[c])):a>=l.length?(c=new Hv(i),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hb=`uniform sampler2D shadow_pass;
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
}`;function fb(i,e,t){let n=new Ap;const s=new rt,a=new rt,l=new Ot,c=new uT({depthPacking:tE}),d=new cT,h={},p=t.maxTextureSize,m={[xr]:In,[In]:xr,[fi]:fi},g=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:db,fragmentShader:hb}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const S=new Ht;S.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new rn(S,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=V0;let x=this.type;this.render=function(L,D,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const C=i.getRenderTarget(),R=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Zr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const J=x!==mr&&this.type===mr,he=x===mr&&this.type!==mr;for(let le=0,ue=L.length;le<ue;le++){const te=L[le],H=te.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ce=H.getFrameExtents();if(s.multiply(ce),a.copy(H.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/ce.x),s.x=a.x*ce.x,H.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/ce.y),s.y=a.y*ce.y,H.mapSize.y=a.y)),H.map===null||J===!0||he===!0){const V=this.type!==mr?{minFilter:zn,magFilter:zn}:{};H.map!==null&&H.map.dispose(),H.map=new Os(s.x,s.y,V),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ne=H.getViewportCount();for(let V=0;V<ne;V++){const oe=H.getViewport(V);l.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),Y.viewport(l),H.updateMatrices(te,V),n=H.getFrustum(),T(D,z,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===mr&&b(H,z),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,i.setRenderTarget(C,R,B)};function b(L,D){const z=e.update(E);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Os(s.x,s.y)),g.uniforms.shadow_pass.value=L.map.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(D,null,z,g,E,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(D,null,z,v,E,null)}function I(L,D,z,C){let R=null;const B=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)R=B;else if(R=z.isPointLight===!0?d:c,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const Y=R.uuid,J=D.uuid;let he=h[Y];he===void 0&&(he={},h[Y]=he);let le=he[J];le===void 0&&(le=R.clone(),he[J]=le,D.addEventListener("dispose",N)),R=le}if(R.visible=D.visible,R.wireframe=D.wireframe,C===mr?R.side=D.shadowSide!==null?D.shadowSide:D.side:R.side=D.shadowSide!==null?D.shadowSide:m[D.side],R.alphaMap=D.alphaMap,R.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,R.map=D.map,R.clipShadows=D.clipShadows,R.clippingPlanes=D.clippingPlanes,R.clipIntersection=D.clipIntersection,R.displacementMap=D.displacementMap,R.displacementScale=D.displacementScale,R.displacementBias=D.displacementBias,R.wireframeLinewidth=D.wireframeLinewidth,R.linewidth=D.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=i.properties.get(R);Y.light=z}return R}function T(L,D,z,C,R){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===mr)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const J=e.update(L),he=L.material;if(Array.isArray(he)){const le=J.groups;for(let ue=0,te=le.length;ue<te;ue++){const H=le[ue],ce=he[H.materialIndex];if(ce&&ce.visible){const ne=I(L,ce,C,R);L.onBeforeShadow(i,L,D,z,J,ne,H),i.renderBufferDirect(z,null,J,ne,L,H),L.onAfterShadow(i,L,D,z,J,ne,H)}}}else if(he.visible){const le=I(L,he,C,R);L.onBeforeShadow(i,L,D,z,J,le,null),i.renderBufferDirect(z,null,J,le,L,null),L.onAfterShadow(i,L,D,z,J,le,null)}}const Y=L.children;for(let J=0,he=Y.length;J<he;J++)T(Y[J],D,z,C,R)}function N(L){L.target.removeEventListener("dispose",N);for(const z in h){const C=h[z],R=L.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const pb={[gf]:_f,[vf]:Mf,[xf]:Sf,[zo]:yf,[_f]:gf,[Mf]:vf,[Sf]:xf,[yf]:zo};function mb(i,e){function t(){let W=!1;const Te=new Ot;let Re=null;const Ue=new Ot(0,0,0,0);return{setMask:function(Me){Re!==Me&&!W&&(i.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){W=Me},setClear:function(Me,ge,Xe,mt,It){It===!0&&(Me*=mt,ge*=mt,Xe*=mt),Te.set(Me,ge,Xe,mt),Ue.equals(Te)===!1&&(i.clearColor(Me,ge,Xe,mt),Ue.copy(Te))},reset:function(){W=!1,Re=null,Ue.set(-1,0,0,0)}}}function n(){let W=!1,Te=!1,Re=null,Ue=null,Me=null;return{setReversed:function(ge){if(Te!==ge){const Xe=e.get("EXT_clip_control");ge?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Te=ge;const mt=Me;Me=null,this.setClear(mt)}},getReversed:function(){return Te},setTest:function(ge){ge?de(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(ge){Re!==ge&&!W&&(i.depthMask(ge),Re=ge)},setFunc:function(ge){if(Te&&(ge=pb[ge]),Ue!==ge){switch(ge){case gf:i.depthFunc(i.NEVER);break;case _f:i.depthFunc(i.ALWAYS);break;case vf:i.depthFunc(i.LESS);break;case zo:i.depthFunc(i.LEQUAL);break;case xf:i.depthFunc(i.EQUAL);break;case yf:i.depthFunc(i.GEQUAL);break;case Mf:i.depthFunc(i.GREATER);break;case Sf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=ge}},setLocked:function(ge){W=ge},setClear:function(ge){Me!==ge&&(Te&&(ge=1-ge),i.clearDepth(ge),Me=ge)},reset:function(){W=!1,Re=null,Ue=null,Me=null,Te=!1}}}function s(){let W=!1,Te=null,Re=null,Ue=null,Me=null,ge=null,Xe=null,mt=null,It=null;return{setTest:function(Ct){W||(Ct?de(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(Ct){Te!==Ct&&!W&&(i.stencilMask(Ct),Te=Ct)},setFunc:function(Ct,Gn,gn){(Re!==Ct||Ue!==Gn||Me!==gn)&&(i.stencilFunc(Ct,Gn,gn),Re=Ct,Ue=Gn,Me=gn)},setOp:function(Ct,Gn,gn){(ge!==Ct||Xe!==Gn||mt!==gn)&&(i.stencilOp(Ct,Gn,gn),ge=Ct,Xe=Gn,mt=gn)},setLocked:function(Ct){W=Ct},setClear:function(Ct){It!==Ct&&(i.clearStencil(Ct),It=Ct)},reset:function(){W=!1,Te=null,Re=null,Ue=null,Me=null,ge=null,Xe=null,mt=null,It=null}}}const a=new t,l=new n,c=new s,d=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,v=[],S=null,E=!1,y=null,x=null,b=null,I=null,T=null,N=null,L=null,D=new tt(0,0,0),z=0,C=!1,R=null,B=null,Y=null,J=null,he=null;const le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,te=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),ue=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ue=te>=2);let ce=null,ne={};const V=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Oe=new Ot().fromArray(V),ze=new Ot().fromArray(oe);function He(W,Te,Re,Ue){const Me=new Uint8Array(4),ge=i.createTexture();i.bindTexture(W,ge),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<Re;Xe++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Te+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ge}const ie={};ie[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(i.DEPTH_TEST),l.setFunc(zo),ke(!1),Ce(T_),de(i.CULL_FACE),Qe(Zr);function de(W){p[W]!==!0&&(i.enable(W),p[W]=!0)}function Q(W){p[W]!==!1&&(i.disable(W),p[W]=!1)}function me(W,Te){return m[W]!==Te?(i.bindFramebuffer(W,Te),m[W]=Te,W===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Te),W===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function _e(W,Te){let Re=v,Ue=!1;if(W){Re=g.get(Te),Re===void 0&&(Re=[],g.set(Te,Re));const Me=W.textures;if(Re.length!==Me.length||Re[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Xe=Me.length;ge<Xe;ge++)Re[ge]=i.COLOR_ATTACHMENT0+ge;Re.length=Me.length,Ue=!0}}else Re[0]!==i.BACK&&(Re[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(Re)}function Ge(W){return S!==W?(i.useProgram(W),S=W,!0):!1}const xt={[Ps]:i.FUNC_ADD,[wS]:i.FUNC_SUBTRACT,[AS]:i.FUNC_REVERSE_SUBTRACT};xt[RS]=i.MIN,xt[bS]=i.MAX;const k={[CS]:i.ZERO,[PS]:i.ONE,[LS]:i.SRC_COLOR,[pf]:i.SRC_ALPHA,[FS]:i.SRC_ALPHA_SATURATE,[US]:i.DST_COLOR,[NS]:i.DST_ALPHA,[IS]:i.ONE_MINUS_SRC_COLOR,[mf]:i.ONE_MINUS_SRC_ALPHA,[OS]:i.ONE_MINUS_DST_COLOR,[DS]:i.ONE_MINUS_DST_ALPHA,[kS]:i.CONSTANT_COLOR,[BS]:i.ONE_MINUS_CONSTANT_COLOR,[VS]:i.CONSTANT_ALPHA,[zS]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(W,Te,Re,Ue,Me,ge,Xe,mt,It,Ct){if(W===Zr){E===!0&&(Q(i.BLEND),E=!1);return}if(E===!1&&(de(i.BLEND),E=!0),W!==TS){if(W!==y||Ct!==C){if((x!==Ps||T!==Ps)&&(i.blendEquation(i.FUNC_ADD),x=Ps,T=Ps),Ct)switch(W){case ko:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFunc(i.ONE,i.ONE);break;case w_:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case A_:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ko:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case w_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case A_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,I=null,N=null,L=null,D.set(0,0,0),z=0,y=W,C=Ct}return}Me=Me||Te,ge=ge||Re,Xe=Xe||Ue,(Te!==x||Me!==T)&&(i.blendEquationSeparate(xt[Te],xt[Me]),x=Te,T=Me),(Re!==b||Ue!==I||ge!==N||Xe!==L)&&(i.blendFuncSeparate(k[Re],k[Ue],k[ge],k[Xe]),b=Re,I=Ue,N=ge,L=Xe),(mt.equals(D)===!1||It!==z)&&(i.blendColor(mt.r,mt.g,mt.b,It),D.copy(mt),z=It),y=W,C=!1}function De(W,Te){W.side===fi?Q(i.CULL_FACE):de(i.CULL_FACE);let Re=W.side===In;Te&&(Re=!Re),ke(Re),W.blending===ko&&W.transparent===!1?Qe(Zr):Qe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),a.setMask(W.colorWrite);const Ue=W.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Fe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(W){R!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),R=W)}function Ce(W){W!==MS?(de(i.CULL_FACE),W!==B&&(W===T_?i.cullFace(i.BACK):W===SS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),B=W}function it(W){W!==Y&&(ue&&i.lineWidth(W),Y=W)}function Fe(W,Te,Re){W?(de(i.POLYGON_OFFSET_FILL),(J!==Te||he!==Re)&&(i.polygonOffset(Te,Re),J=Te,he=Re)):Q(i.POLYGON_OFFSET_FILL)}function ut(W){W?de(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function Gt(W){W===void 0&&(W=i.TEXTURE0+le-1),ce!==W&&(i.activeTexture(W),ce=W)}function qt(W,Te,Re){Re===void 0&&(ce===null?Re=i.TEXTURE0+le-1:Re=ce);let Ue=ne[Re];Ue===void 0&&(Ue={type:void 0,texture:void 0},ne[Re]=Ue),(Ue.type!==W||Ue.texture!==Te)&&(ce!==Re&&(i.activeTexture(Re),ce=Re),i.bindTexture(W,Te||ie[W]),Ue.type=W,Ue.texture=Te)}function O(){const W=ne[ce];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{i.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{i.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{i.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(){try{i.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{i.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{i.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{i.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{i.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(W){Oe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Oe.copy(W))}function st(W){ze.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ze.copy(W))}function $e(W,Te){let Re=h.get(Te);Re===void 0&&(Re=new WeakMap,h.set(Te,Re));let Ue=Re.get(W);Ue===void 0&&(Ue=i.getUniformBlockIndex(Te,W.name),Re.set(W,Ue))}function Le(W,Te){const Ue=h.get(Te).get(W);d.get(Te)!==Ue&&(i.uniformBlockBinding(Te,Ue,W.__bindingPointIndex),d.set(Te,Ue))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ce=null,ne={},m={},g=new WeakMap,v=[],S=null,E=!1,y=null,x=null,b=null,I=null,T=null,N=null,L=null,D=new tt(0,0,0),z=0,C=!1,R=null,B=null,Y=null,J=null,he=null,Oe.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:de,disable:Q,bindFramebuffer:me,drawBuffers:_e,useProgram:Ge,setBlending:Qe,setMaterial:De,setFlipSided:ke,setCullFace:Ce,setLineWidth:it,setPolygonOffset:Fe,setScissorTest:ut,activeTexture:Gt,bindTexture:qt,unbindTexture:O,compressedTexImage2D:A,compressedTexImage3D:Z,texImage2D:Ke,texImage3D:we,updateUBOMapping:$e,uniformBlockBinding:Le,texStorage2D:Se,texStorage3D:We,texSubImage2D:pe,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:Je,scissor:Ie,viewport:st,reset:pt}}function gb(i,e,t,n,s,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new rt,p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(O,A){return v?new OffscreenCanvas(O,A):hl("canvas")}function E(O,A,Z){let pe=1;const ve=qt(O);if((ve.width>Z||ve.height>Z)&&(pe=Z/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const fe=Math.floor(pe*ve.width),Je=Math.floor(pe*ve.height);m===void 0&&(m=S(fe,Je));const Se=A?S(fe,Je):m;return Se.width=fe,Se.height=Je,Se.getContext("2d").drawImage(O,0,0,fe,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Je+")."),Se}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),O;return O}function y(O){return O.generateMipmaps}function x(O){i.generateMipmap(O)}function b(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(O,A,Z,pe,ve=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let fe=A;if(A===i.RED&&(Z===i.FLOAT&&(fe=i.R32F),Z===i.HALF_FLOAT&&(fe=i.R16F),Z===i.UNSIGNED_BYTE&&(fe=i.R8)),A===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(fe=i.R8UI),Z===i.UNSIGNED_SHORT&&(fe=i.R16UI),Z===i.UNSIGNED_INT&&(fe=i.R32UI),Z===i.BYTE&&(fe=i.R8I),Z===i.SHORT&&(fe=i.R16I),Z===i.INT&&(fe=i.R32I)),A===i.RG&&(Z===i.FLOAT&&(fe=i.RG32F),Z===i.HALF_FLOAT&&(fe=i.RG16F),Z===i.UNSIGNED_BYTE&&(fe=i.RG8)),A===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(fe=i.RG8UI),Z===i.UNSIGNED_SHORT&&(fe=i.RG16UI),Z===i.UNSIGNED_INT&&(fe=i.RG32UI),Z===i.BYTE&&(fe=i.RG8I),Z===i.SHORT&&(fe=i.RG16I),Z===i.INT&&(fe=i.RG32I)),A===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),Z===i.UNSIGNED_INT&&(fe=i.RGB32UI),Z===i.BYTE&&(fe=i.RGB8I),Z===i.SHORT&&(fe=i.RGB16I),Z===i.INT&&(fe=i.RGB32I)),A===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),Z===i.UNSIGNED_INT&&(fe=i.RGBA32UI),Z===i.BYTE&&(fe=i.RGBA8I),Z===i.SHORT&&(fe=i.RGBA16I),Z===i.INT&&(fe=i.RGBA32I)),A===i.RGB&&(Z===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(fe=i.R11F_G11F_B10F)),A===i.RGBA){const Je=ve?pc:Lt.getTransfer(pe);Z===i.FLOAT&&(fe=i.RGBA32F),Z===i.HALF_FLOAT&&(fe=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(fe=Je===Xt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function T(O,A){let Z;return O?A===null||A===Us||A===al?Z=i.DEPTH24_STENCIL8:A===Pi?Z=i.DEPTH32F_STENCIL8:A===ol&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Us||A===al?Z=i.DEPTH_COMPONENT24:A===Pi?Z=i.DEPTH_COMPONENT32F:A===ol&&(Z=i.DEPTH_COMPONENT16),Z}function N(O,A){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==zn&&O.minFilter!==ni?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function L(O){const A=O.target;A.removeEventListener("dispose",L),z(A),A.isVideoTexture&&p.delete(A)}function D(O){const A=O.target;A.removeEventListener("dispose",D),R(A)}function z(O){const A=n.get(O);if(A.__webglInit===void 0)return;const Z=O.source,pe=g.get(Z);if(pe){const ve=pe[A.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(O),Object.keys(pe).length===0&&g.delete(Z)}n.remove(O)}function C(O){const A=n.get(O);i.deleteTexture(A.__webglTexture);const Z=O.source,pe=g.get(Z);delete pe[A.__cacheKey],l.memory.textures--}function R(O){const A=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let ve=0;ve<A.__webglFramebuffer[pe].length;ve++)i.deleteFramebuffer(A.__webglFramebuffer[pe][ve]);else i.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)i.deleteFramebuffer(A.__webglFramebuffer[pe]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=O.textures;for(let pe=0,ve=Z.length;pe<ve;pe++){const fe=n.get(Z[pe]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),l.memory.textures--),n.remove(Z[pe])}n.remove(O)}let B=0;function Y(){B=0}function J(){const O=B;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),B+=1,O}function he(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function le(O,A){const Z=n.get(O);if(O.isVideoTexture&&ut(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Z.__version!==O.version){const pe=O.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Z,O,A);return}}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+A)}function ue(O,A){const Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){ie(Z,O,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+A)}function te(O,A){const Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){ie(Z,O,A);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+A)}function H(O,A){const Z=n.get(O);if(O.version>0&&Z.__version!==O.version){de(Z,O,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+A)}const ce={[Wo]:i.REPEAT,[Kr]:i.CLAMP_TO_EDGE,[fc]:i.MIRRORED_REPEAT},ne={[zn]:i.NEAREST,[G0]:i.NEAREST_MIPMAP_NEAREST,[el]:i.NEAREST_MIPMAP_LINEAR,[ni]:i.LINEAR,[ic]:i.LINEAR_MIPMAP_NEAREST,[gr]:i.LINEAR_MIPMAP_LINEAR},V={[iE]:i.NEVER,[uE]:i.ALWAYS,[rE]:i.LESS,[Q0]:i.LEQUAL,[sE]:i.EQUAL,[lE]:i.GEQUAL,[oE]:i.GREATER,[aE]:i.NOTEQUAL};function oe(O,A){if(A.type===Pi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ni||A.magFilter===ic||A.magFilter===el||A.magFilter===gr||A.minFilter===ni||A.minFilter===ic||A.minFilter===el||A.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,ce[A.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,ce[A.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,ce[A.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,ne[A.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,ne[A.minFilter]),A.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===zn||A.minFilter!==el&&A.minFilter!==gr||A.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Oe(O,A){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",L));const pe=A.source;let ve=g.get(pe);ve===void 0&&(ve={},g.set(pe,ve));const fe=he(A);if(fe!==O.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,Z=!0),ve[fe].usedTimes++;const Je=ve[O.__cacheKey];Je!==void 0&&(ve[O.__cacheKey].usedTimes--,Je.usedTimes===0&&C(A)),O.__cacheKey=fe,O.__webglTexture=ve[fe].texture}return Z}function ze(O,A,Z){return Math.floor(Math.floor(O/Z)/A)}function He(O,A,Z,pe){const fe=O.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Z,pe,A.data);else{fe.sort((we,Ie)=>we.start-Ie.start);let Je=0;for(let we=1;we<fe.length;we++){const Ie=fe[Je],st=fe[we],$e=Ie.start+Ie.count,Le=ze(st.start,A.width,4),pt=ze(Ie.start,A.width,4);st.start<=$e+1&&Le===pt&&ze(st.start+st.count-1,A.width,4)===Le?Ie.count=Math.max(Ie.count,st.start+st.count-Ie.start):(++Je,fe[Je]=st)}fe.length=Je+1;const Se=i.getParameter(i.UNPACK_ROW_LENGTH),We=i.getParameter(i.UNPACK_SKIP_PIXELS),Ke=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let we=0,Ie=fe.length;we<Ie;we++){const st=fe[we],$e=Math.floor(st.start/4),Le=Math.ceil(st.count/4),pt=$e%A.width,W=Math.floor($e/A.width),Te=Le,Re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,pt,W,Te,Re,Z,pe,A.data)}O.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ke)}}function ie(O,A,Z){let pe=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=i.TEXTURE_3D);const ve=Oe(O,A),fe=A.source;t.bindTexture(pe,O.__webglTexture,i.TEXTURE0+Z);const Je=n.get(fe);if(fe.version!==Je.__version||ve===!0){t.activeTexture(i.TEXTURE0+Z);const Se=Lt.getPrimaries(Lt.workingColorSpace),We=A.colorSpace===$r?null:Lt.getPrimaries(A.colorSpace),Ke=A.colorSpace===$r||Se===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let we=E(A.image,!1,s.maxTextureSize);we=Gt(A,we);const Ie=a.convert(A.format,A.colorSpace),st=a.convert(A.type);let $e=I(A.internalFormat,Ie,st,A.colorSpace,A.isVideoTexture);oe(pe,A);let Le;const pt=A.mipmaps,W=A.isVideoTexture!==!0,Te=Je.__version===void 0||ve===!0,Re=fe.dataReady,Ue=N(A,we);if(A.isDepthTexture)$e=T(A.format===ul,A.type),Te&&(W?t.texStorage2D(i.TEXTURE_2D,1,$e,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,$e,we.width,we.height,0,Ie,st,null));else if(A.isDataTexture)if(pt.length>0){W&&Te&&t.texStorage2D(i.TEXTURE_2D,Ue,$e,pt[0].width,pt[0].height);for(let Me=0,ge=pt.length;Me<ge;Me++)Le=pt[Me],W?Re&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Le.width,Le.height,Ie,st,Le.data):t.texImage2D(i.TEXTURE_2D,Me,$e,Le.width,Le.height,0,Ie,st,Le.data);A.generateMipmaps=!1}else W?(Te&&t.texStorage2D(i.TEXTURE_2D,Ue,$e,we.width,we.height),Re&&He(A,we,Ie,st)):t.texImage2D(i.TEXTURE_2D,0,$e,we.width,we.height,0,Ie,st,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,$e,pt[0].width,pt[0].height,we.depth);for(let Me=0,ge=pt.length;Me<ge;Me++)if(Le=pt[Me],A.format!==mi)if(Ie!==null)if(W){if(Re)if(A.layerUpdates.size>0){const Xe=vv(Le.width,Le.height,A.format,A.type);for(const mt of A.layerUpdates){const It=Le.data.subarray(mt*Xe/Le.data.BYTES_PER_ELEMENT,(mt+1)*Xe/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,mt,Le.width,Le.height,1,Ie,It)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,we.depth,Ie,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,$e,Le.width,Le.height,we.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,we.depth,Ie,st,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,$e,Le.width,Le.height,we.depth,0,Ie,st,Le.data)}else{W&&Te&&t.texStorage2D(i.TEXTURE_2D,Ue,$e,pt[0].width,pt[0].height);for(let Me=0,ge=pt.length;Me<ge;Me++)Le=pt[Me],A.format!==mi?Ie!==null?W?Re&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,Le.width,Le.height,Ie,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,$e,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Le.width,Le.height,Ie,st,Le.data):t.texImage2D(i.TEXTURE_2D,Me,$e,Le.width,Le.height,0,Ie,st,Le.data)}else if(A.isDataArrayTexture)if(W){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,$e,we.width,we.height,we.depth),Re)if(A.layerUpdates.size>0){const Me=vv(we.width,we.height,A.format,A.type);for(const ge of A.layerUpdates){const Xe=we.data.subarray(ge*Me/we.data.BYTES_PER_ELEMENT,(ge+1)*Me/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,we.width,we.height,1,Ie,st,Xe)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ie,st,we.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,we.width,we.height,we.depth,0,Ie,st,we.data);else if(A.isData3DTexture)W?(Te&&t.texStorage3D(i.TEXTURE_3D,Ue,$e,we.width,we.height,we.depth),Re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ie,st,we.data)):t.texImage3D(i.TEXTURE_3D,0,$e,we.width,we.height,we.depth,0,Ie,st,we.data);else if(A.isFramebufferTexture){if(Te)if(W)t.texStorage2D(i.TEXTURE_2D,Ue,$e,we.width,we.height);else{let Me=we.width,ge=we.height;for(let Xe=0;Xe<Ue;Xe++)t.texImage2D(i.TEXTURE_2D,Xe,$e,Me,ge,0,Ie,st,null),Me>>=1,ge>>=1}}else if(pt.length>0){if(W&&Te){const Me=qt(pt[0]);t.texStorage2D(i.TEXTURE_2D,Ue,$e,Me.width,Me.height)}for(let Me=0,ge=pt.length;Me<ge;Me++)Le=pt[Me],W?Re&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ie,st,Le):t.texImage2D(i.TEXTURE_2D,Me,$e,Ie,st,Le);A.generateMipmaps=!1}else if(W){if(Te){const Me=qt(we);t.texStorage2D(i.TEXTURE_2D,Ue,$e,Me.width,Me.height)}Re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,st,we)}else t.texImage2D(i.TEXTURE_2D,0,$e,Ie,st,we);y(A)&&x(pe),Je.__version=fe.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function de(O,A,Z){if(A.image.length!==6)return;const pe=Oe(O,A),ve=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Z);const fe=n.get(ve);if(ve.version!==fe.__version||pe===!0){t.activeTexture(i.TEXTURE0+Z);const Je=Lt.getPrimaries(Lt.workingColorSpace),Se=A.colorSpace===$r?null:Lt.getPrimaries(A.colorSpace),We=A.colorSpace===$r||Je===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Ke=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let ge=0;ge<6;ge++)!Ke&&!we?Ie[ge]=E(A.image[ge],!0,s.maxCubemapSize):Ie[ge]=we?A.image[ge].image:A.image[ge],Ie[ge]=Gt(A,Ie[ge]);const st=Ie[0],$e=a.convert(A.format,A.colorSpace),Le=a.convert(A.type),pt=I(A.internalFormat,$e,Le,A.colorSpace),W=A.isVideoTexture!==!0,Te=fe.__version===void 0||pe===!0,Re=ve.dataReady;let Ue=N(A,st);oe(i.TEXTURE_CUBE_MAP,A);let Me;if(Ke){W&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,pt,st.width,st.height);for(let ge=0;ge<6;ge++){Me=Ie[ge].mipmaps;for(let Xe=0;Xe<Me.length;Xe++){const mt=Me[Xe];A.format!==mi?$e!==null?W?Re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,0,0,mt.width,mt.height,$e,mt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,0,0,mt.width,mt.height,$e,Le,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,pt,mt.width,mt.height,0,$e,Le,mt.data)}}}else{if(Me=A.mipmaps,W&&Te){Me.length>0&&Ue++;const ge=qt(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,pt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(we){W?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ie[ge].width,Ie[ge].height,$e,Le,Ie[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,Ie[ge].width,Ie[ge].height,0,$e,Le,Ie[ge].data);for(let Xe=0;Xe<Me.length;Xe++){const It=Me[Xe].image[ge].image;W?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,0,0,It.width,It.height,$e,Le,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,pt,It.width,It.height,0,$e,Le,It.data)}}else{W?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,$e,Le,Ie[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,$e,Le,Ie[ge]);for(let Xe=0;Xe<Me.length;Xe++){const mt=Me[Xe];W?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,0,0,$e,Le,mt.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,pt,$e,Le,mt.image[ge])}}}y(A)&&x(i.TEXTURE_CUBE_MAP),fe.__version=ve.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Q(O,A,Z,pe,ve,fe){const Je=a.convert(Z.format,Z.colorSpace),Se=a.convert(Z.type),We=I(Z.internalFormat,Je,Se,Z.colorSpace),Ke=n.get(A),we=n.get(Z);if(we.__renderTarget=A,!Ke.__hasExternalTextures){const Ie=Math.max(1,A.width>>fe),st=Math.max(1,A.height>>fe);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,fe,We,Ie,st,A.depth,0,Je,Se,null):t.texImage2D(ve,fe,We,Ie,st,0,Je,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Fe(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ve,we.__webglTexture,0,it(A)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,ve,we.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(O,A,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,O),A.depthBuffer){const pe=A.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,fe=T(A.stencilBuffer,ve),Je=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=it(A);Fe(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,fe,A.width,A.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,fe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,fe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Je,i.RENDERBUFFER,O)}else{const pe=A.textures;for(let ve=0;ve<pe.length;ve++){const fe=pe[ve],Je=a.convert(fe.format,fe.colorSpace),Se=a.convert(fe.type),We=I(fe.internalFormat,Je,Se,fe.colorSpace),Ke=it(A);Z&&Fe(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,We,A.width,A.height):Fe(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,We,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,We,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=n.get(A.depthTexture);pe.__renderTarget=A,(!pe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),le(A.depthTexture,0);const ve=pe.__webglTexture,fe=it(A);if(A.depthTexture.format===ll)Fe(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0);else if(A.depthTexture.format===ul)Fe(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ge(O){const A=n.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const pe=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const ve=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),A.__depthDisposeCallback=ve}A.__boundDepthTexture=pe}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const pe=O.texture.mipmaps;pe&&pe.length>0?_e(A.__webglFramebuffer[0],O):_e(A.__webglFramebuffer,O)}else if(Z){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=i.createRenderbuffer(),me(A.__webglDepthbuffer[pe],O,!1);else{const ve=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,fe)}}else{const pe=O.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),me(A.__webglDepthbuffer,O,!1);else{const ve=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(O,A,Z){const pe=n.get(O);A!==void 0&&Q(pe.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Ge(O)}function k(O){const A=O.texture,Z=n.get(O),pe=n.get(A);O.addEventListener("dispose",D);const ve=O.textures,fe=O.isWebGLCubeRenderTarget===!0,Je=ve.length>1;if(Je||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=A.version,l.memory.textures++),fe){Z.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Se]=[];for(let We=0;We<A.mipmaps.length;We++)Z.__webglFramebuffer[Se][We]=i.createFramebuffer()}else Z.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Se=0;Se<A.mipmaps.length;Se++)Z.__webglFramebuffer[Se]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Je)for(let Se=0,We=ve.length;Se<We;Se++){const Ke=n.get(ve[Se]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),l.memory.textures++)}if(O.samples>0&&Fe(O)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Se=0;Se<ve.length;Se++){const We=ve[Se];Z.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Se]);const Ke=a.convert(We.format,We.colorSpace),we=a.convert(We.type),Ie=I(We.internalFormat,Ke,we,We.colorSpace,O.isXRRenderTarget===!0),st=it(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Ie,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),me(Z.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),oe(i.TEXTURE_CUBE_MAP,A);for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0)for(let We=0;We<A.mipmaps.length;We++)Q(Z.__webglFramebuffer[Se][We],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We);else Q(Z.__webglFramebuffer[Se],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);y(A)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Je){for(let Se=0,We=ve.length;Se<We;Se++){const Ke=ve[Se],we=n.get(Ke);let Ie=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,we.__webglTexture),oe(Ie,Ke),Q(Z.__webglFramebuffer,O,Ke,i.COLOR_ATTACHMENT0+Se,Ie,0),y(Ke)&&x(Ie)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Se=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,pe.__webglTexture),oe(Se,A),A.mipmaps&&A.mipmaps.length>0)for(let We=0;We<A.mipmaps.length;We++)Q(Z.__webglFramebuffer[We],O,A,i.COLOR_ATTACHMENT0,Se,We);else Q(Z.__webglFramebuffer,O,A,i.COLOR_ATTACHMENT0,Se,0);y(A)&&x(Se),t.unbindTexture()}O.depthBuffer&&Ge(O)}function Qe(O){const A=O.textures;for(let Z=0,pe=A.length;Z<pe;Z++){const ve=A[Z];if(y(ve)){const fe=b(O),Je=n.get(ve).__webglTexture;t.bindTexture(fe,Je),x(fe),t.unbindTexture()}}}const De=[],ke=[];function Ce(O){if(O.samples>0){if(Fe(O)===!1){const A=O.textures,Z=O.width,pe=O.height;let ve=i.COLOR_BUFFER_BIT;const fe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Je=n.get(O),Se=A.length>1;if(Se)for(let Ke=0;Ke<A.length;Ke++)t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);const We=O.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let Ke=0;Ke<A.length;Ke++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Je.__webglColorRenderbuffer[Ke]);const we=n.get(A[Ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ve,i.NEAREST),d===!0&&(De.length=0,ke.length=0,De.push(i.COLOR_ATTACHMENT0+Ke),O.depthBuffer&&O.resolveDepthBuffer===!1&&(De.push(fe),ke.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ke=0;Ke<A.length;Ke++){t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.RENDERBUFFER,Je.__webglColorRenderbuffer[Ke]);const we=n.get(A[Ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const A=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function it(O){return Math.min(s.maxSamples,O.samples)}function Fe(O){const A=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ut(O){const A=l.render.frame;p.get(O)!==A&&(p.set(O,A),O.update())}function Gt(O,A){const Z=O.colorSpace,pe=O.format,ve=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==Hn&&Z!==$r&&(Lt.getTransfer(Z)===Xt?(pe!==mi||ve!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=Y,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=te,this.setTextureCube=H,this.rebindTextures=xt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Fe}function _b(i,e){function t(n,s=$r){let a;const l=Lt.getTransfer(s);if(n===$i)return i.UNSIGNED_BYTE;if(n===_p)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===j0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Y0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===W0)return i.BYTE;if(n===X0)return i.SHORT;if(n===ol)return i.UNSIGNED_SHORT;if(n===gp)return i.INT;if(n===Us)return i.UNSIGNED_INT;if(n===Pi)return i.FLOAT;if(n===gl)return i.HALF_FLOAT;if(n===q0)return i.ALPHA;if(n===$0)return i.RGB;if(n===mi)return i.RGBA;if(n===ll)return i.DEPTH_COMPONENT;if(n===ul)return i.DEPTH_STENCIL;if(n===xp)return i.RED;if(n===yp)return i.RED_INTEGER;if(n===K0)return i.RG;if(n===Mp)return i.RG_INTEGER;if(n===Sp)return i.RGBA_INTEGER;if(n===rc||n===sc||n===oc||n===ac)if(l===Xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===rc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===rc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wf||n===Af||n===Rf||n===bf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===wf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Af)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cf||n===Pf||n===Lf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Cf||n===Pf)return l===Xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Lf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===If||n===Nf||n===Df||n===Uf||n===Of||n===Ff||n===kf||n===Bf||n===Vf||n===zf||n===Hf||n===Gf||n===Wf||n===Xf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===If)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Df)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Of)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ff)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xf)return l===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jf||n===Yf||n===qf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===jf)return l===Xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$f||n===Kf||n===Zf||n===Qf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===$f)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Kf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===al?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xb=`
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

}`;class yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new gx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ii({vertexShader:vb,fragmentShader:xb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rn(new Ac(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mb extends Ko{constructor(e,t){super();const n=this;let s=null,a=1,l=null,c="local-floor",d=1,h=null,p=null,m=null,g=null,v=null,S=null;const E=typeof XRWebGLBinding<"u",y=new yb,x={},b=t.getContextAttributes();let I=null,T=null;const N=[],L=[],D=new rt;let z=null;const C=new Vn;C.viewport=new Ot;const R=new Vn;R.viewport=new Ot;const B=[C,R],Y=new LT;let J=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let de=N[ie];return de===void 0&&(de=new Uh,N[ie]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ie){let de=N[ie];return de===void 0&&(de=new Uh,N[ie]=de),de.getGripSpace()},this.getHand=function(ie){let de=N[ie];return de===void 0&&(de=new Uh,N[ie]=de),de.getHandSpace()};function le(ie){const de=L.indexOf(ie.inputSource);if(de===-1)return;const Q=N[de];Q!==void 0&&(Q.update(ie.inputSource,ie.frame,h||l),Q.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ue(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",te);for(let ie=0;ie<N.length;ie++){const de=L[ie];de!==null&&(L[ie]=null,N[ie].disconnect(de))}J=null,he=null,y.reset();for(const ie in x)delete x[ie];e.setRenderTarget(I),v=null,g=null,m=null,s=null,T=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){c=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",te),b.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(D),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,me=null,_e=null;b.depth&&(_e=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=b.stencil?ul:ll,me=b.stencil?al:Us);const Ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:a};m=this.getBinding(),g=m.createProjectionLayer(Ge),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),T=new Os(g.textureWidth,g.textureHeight,{format:mi,type:$i,depthTexture:new mx(g.textureWidth,g.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Q={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),T=new Os(v.framebufferWidth,v.framebufferHeight,{format:mi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(d),h=null,l=await s.requestReferenceSpace(c),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function te(ie){for(let de=0;de<ie.removed.length;de++){const Q=ie.removed[de],me=L.indexOf(Q);me>=0&&(L[me]=null,N[me].disconnect(Q))}for(let de=0;de<ie.added.length;de++){const Q=ie.added[de];let me=L.indexOf(Q);if(me===-1){for(let Ge=0;Ge<N.length;Ge++)if(Ge>=L.length){L.push(Q),me=Ge;break}else if(L[Ge]===null){L[Ge]=Q,me=Ge;break}if(me===-1)break}const _e=N[me];_e&&_e.connect(Q)}}const H=new U,ce=new U;function ne(ie,de,Q){H.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Q.matrixWorld);const me=H.distanceTo(ce),_e=de.projectionMatrix.elements,Ge=Q.projectionMatrix.elements,xt=_e[14]/(_e[10]-1),k=_e[14]/(_e[10]+1),Qe=(_e[9]+1)/_e[5],De=(_e[9]-1)/_e[5],ke=(_e[8]-1)/_e[0],Ce=(Ge[8]+1)/Ge[0],it=xt*ke,Fe=xt*Ce,ut=me/(-ke+Ce),Gt=ut*-ke;if(de.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Gt),ie.translateZ(ut),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),_e[10]===-1)ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const qt=xt+ut,O=k+ut,A=it-Gt,Z=Fe+(me-Gt),pe=Qe*k/O*qt,ve=De*k/O*qt;ie.projectionMatrix.makePerspective(A,Z,pe,ve,qt,O),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function V(ie,de){de===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(de.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let de=ie.near,Q=ie.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Q=y.depthFar)),Y.near=R.near=C.near=de,Y.far=R.far=C.far=Q,(J!==Y.near||he!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),J=Y.near,he=Y.far),Y.layers.mask=ie.layers.mask|6,C.layers.mask=Y.layers.mask&3,R.layers.mask=Y.layers.mask&5;const me=ie.parent,_e=Y.cameras;V(Y,me);for(let Ge=0;Ge<_e.length;Ge++)V(_e[Ge],me);_e.length===2?ne(Y,C,R):Y.projectionMatrix.copy(C.projectionMatrix),oe(ie,Y,me)};function oe(ie,de,Q){Q===null?ie.matrix.copy(de.matrixWorld):(ie.matrix.copy(Q.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(de.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Xo*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&v===null))return d},this.setFoveation=function(ie){d=ie,g!==null&&(g.fixedFoveation=ie),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(ie){return x[ie]};let Oe=null;function ze(ie,de){if(p=de.getViewerPose(h||l),S=de,p!==null){const Q=p.views;v!==null&&(e.setRenderTargetFramebuffer(T,v.framebuffer),e.setRenderTarget(T));let me=!1;Q.length!==Y.cameras.length&&(Y.cameras.length=0,me=!0);for(let k=0;k<Q.length;k++){const Qe=Q[k];let De=null;if(v!==null)De=v.getViewport(Qe);else{const Ce=m.getViewSubImage(g,Qe);De=Ce.viewport,k===0&&(e.setRenderTargetTextures(T,Ce.colorTexture,Ce.depthStencilTexture),e.setRenderTarget(T))}let ke=B[k];ke===void 0&&(ke=new Vn,ke.layers.enable(k),ke.viewport=new Ot,B[k]=ke),ke.matrix.fromArray(Qe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Qe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(De.x,De.y,De.width,De.height),k===0&&(Y.matrix.copy(ke.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),me===!0&&Y.cameras.push(ke)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){m=n.getBinding();const k=m.getDepthInformation(Q[0]);k&&k.isValid&&k.texture&&y.init(k,s.renderState)}if(_e&&_e.includes("camera-access")&&E){e.state.unbindTexture(),m=n.getBinding();for(let k=0;k<Q.length;k++){const Qe=Q[k].camera;if(Qe){let De=x[Qe];De||(De=new gx,x[Qe]=De);const ke=m.getCameraImage(Qe);De.sourceTexture=ke}}}}for(let Q=0;Q<N.length;Q++){const me=L[Q],_e=N[Q];me!==null&&_e!==void 0&&_e.update(me,de,h||l)}Oe&&Oe(ie,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),S=null}const He=new Mx;He.setAnimationLoop(ze),this.setAnimationLoop=function(ie){Oe=ie},this.dispose=function(){}}}const Ms=new ii,Sb=new ft;function Eb(i,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,sx(i)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,b,I,T){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),m(y,x)):x.isMeshPhongMaterial?(a(y,x),p(y,x)):x.isMeshStandardMaterial?(a(y,x),g(y,x),x.isMeshPhysicalMaterial&&v(y,x,T)):x.isMeshMatcapMaterial?(a(y,x),S(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),E(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(l(y,x),x.isLineDashedMaterial&&c(y,x)):x.isPointsMaterial?d(y,x,b,I):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===In&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===In&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const b=e.get(x),I=b.envMap,T=b.envMapRotation;I&&(y.envMap.value=I,Ms.copy(T),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),y.envMapRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(Ms)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function l(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function c(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,b,I){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*b,y.scale.value=I*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function m(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function v(y,x,b){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===In&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const b=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tb(i,e,t,n){let s={},a={},l=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,I){const T=I.program;n.uniformBlockBinding(b,T)}function h(b,I){let T=s[b.id];T===void 0&&(S(b),T=p(b),s[b.id]=T,b.addEventListener("dispose",y));const N=I.program;n.updateUBOMapping(b,N);const L=e.render.frame;a[b.id]!==L&&(g(b),a[b.id]=L)}function p(b){const I=m();b.__bindingPointIndex=I;const T=i.createBuffer(),N=b.__size,L=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,N,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,T),T}function m(){for(let b=0;b<c;b++)if(l.indexOf(b)===-1)return l.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const I=s[b.id],T=b.uniforms,N=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let L=0,D=T.length;L<D;L++){const z=Array.isArray(T[L])?T[L]:[T[L]];for(let C=0,R=z.length;C<R;C++){const B=z[C];if(v(B,L,C,N)===!0){const Y=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let he=0;for(let le=0;le<J.length;le++){const ue=J[le],te=E(ue);typeof ue=="number"||typeof ue=="boolean"?(B.__data[0]=ue,i.bufferSubData(i.UNIFORM_BUFFER,Y+he,B.__data)):ue.isMatrix3?(B.__data[0]=ue.elements[0],B.__data[1]=ue.elements[1],B.__data[2]=ue.elements[2],B.__data[3]=0,B.__data[4]=ue.elements[3],B.__data[5]=ue.elements[4],B.__data[6]=ue.elements[5],B.__data[7]=0,B.__data[8]=ue.elements[6],B.__data[9]=ue.elements[7],B.__data[10]=ue.elements[8],B.__data[11]=0):(ue.toArray(B.__data,he),he+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(b,I,T,N){const L=b.value,D=I+"_"+T;if(N[D]===void 0)return typeof L=="number"||typeof L=="boolean"?N[D]=L:N[D]=L.clone(),!0;{const z=N[D];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return N[D]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function S(b){const I=b.uniforms;let T=0;const N=16;for(let D=0,z=I.length;D<z;D++){const C=Array.isArray(I[D])?I[D]:[I[D]];for(let R=0,B=C.length;R<B;R++){const Y=C[R],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let he=0,le=J.length;he<le;he++){const ue=J[he],te=E(ue),H=T%N,ce=H%te.boundary,ne=H+ce;T+=ce,ne!==0&&N-ne<te.storage&&(T+=N-ne),Y.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=te.storage}}}const L=T%N;return L>0&&(T+=N-L),b.__size=T,b.__cache={},this}function E(b){const I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),I}function y(b){const I=b.target;I.removeEventListener("dispose",y);const T=l.indexOf(I.__bindingPointIndex);l.splice(T,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete a[I.id]}function x(){for(const b in s)i.deleteBuffer(s[b]);l=[],s={},a={}}return{bind:d,update:h,dispose:x}}class wb{constructor(e={}){const{canvas:t=RE(),context:n=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=l;const S=new Uint32Array(4),E=new Int32Array(4);let y=null,x=null;const b=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let N=!1;this._outputColorSpace=hn;let L=0,D=0,z=null,C=-1,R=null;const B=new Ot,Y=new Ot;let J=null;const he=new tt(0);let le=0,ue=t.width,te=t.height,H=1,ce=null,ne=null;const V=new Ot(0,0,ue,te),oe=new Ot(0,0,ue,te);let Oe=!1;const ze=new Ap;let He=!1,ie=!1;const de=new ft,Q=new U,me=new Ot,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function xt(){return z===null?H:1}let k=n;function Qe(P,q){return t.getContext(P,q)}try{const P={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ds}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Me,!1),k===null){const q="webgl2";if(k=Qe(q,P),k===null)throw Qe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let De,ke,Ce,it,Fe,ut,Gt,qt,O,A,Z,pe,ve,fe,Je,Se,We,Ke,we,Ie,st,$e,Le,pt;function W(){De=new UR(k),De.init(),$e=new _b(k,De),ke=new bR(k,De,e,$e),Ce=new mb(k,De),ke.reversedDepthBuffer&&g&&Ce.buffers.depth.setReversed(!0),it=new kR(k),Fe=new nb,ut=new gb(k,De,Ce,Fe,ke,$e,it),Gt=new PR(T),qt=new DR(T),O=new WT(k),Le=new AR(k,O),A=new OR(k,O,it,Le),Z=new VR(k,A,O,it),we=new BR(k,ke,ut),Se=new CR(Fe),pe=new tb(T,Gt,qt,De,ke,Le,Se),ve=new Eb(T,Fe),fe=new rb,Je=new cb(De),Ke=new wR(T,Gt,qt,Ce,Z,v,d),We=new fb(T,Z,ke),pt=new Tb(k,it,ke,Ce),Ie=new RR(k,De,it),st=new FR(k,De,it),it.programs=pe.programs,T.capabilities=ke,T.extensions=De,T.properties=Fe,T.renderLists=fe,T.shadowMap=We,T.state=Ce,T.info=it}W();const Te=new Mb(T,k);this.xr=Te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=De.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=De.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(ue,te,!1))},this.getSize=function(P){return P.set(ue,te)},this.setSize=function(P,q,se=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=P,te=q,t.width=Math.floor(P*H),t.height=Math.floor(q*H),se===!0&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(ue*H,te*H).floor()},this.setDrawingBufferSize=function(P,q,se){ue=P,te=q,H=se,t.width=Math.floor(P*se),t.height=Math.floor(q*se),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(B)},this.getViewport=function(P){return P.copy(V)},this.setViewport=function(P,q,se,ae){P.isVector4?V.set(P.x,P.y,P.z,P.w):V.set(P,q,se,ae),Ce.viewport(B.copy(V).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(oe)},this.setScissor=function(P,q,se,ae){P.isVector4?oe.set(P.x,P.y,P.z,P.w):oe.set(P,q,se,ae),Ce.scissor(Y.copy(oe).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(P){Ce.setScissorTest(Oe=P)},this.setOpaqueSort=function(P){ce=P},this.setTransparentSort=function(P){ne=P},this.getClearColor=function(P){return P.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,se=!0){let ae=0;if(P){let j=!1;if(z!==null){const Ae=z.texture.format;j=Ae===Sp||Ae===Mp||Ae===yp}if(j){const Ae=z.texture.type,Ne=Ae===$i||Ae===Us||Ae===ol||Ae===al||Ae===_p||Ae===vp,Ye=Ke.getClearColor(),Be=Ke.getClearAlpha(),ct=Ye.r,ht=Ye.g,nt=Ye.b;Ne?(S[0]=ct,S[1]=ht,S[2]=nt,S[3]=Be,k.clearBufferuiv(k.COLOR,0,S)):(E[0]=ct,E[1]=ht,E[2]=nt,E[3]=Be,k.clearBufferiv(k.COLOR,0,E))}else ae|=k.COLOR_BUFFER_BIT}q&&(ae|=k.DEPTH_BUFFER_BIT),se&&(ae|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ke.dispose(),fe.dispose(),Je.dispose(),Fe.dispose(),Gt.dispose(),qt.dispose(),Z.dispose(),Le.dispose(),pt.dispose(),pe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",gn),Te.removeEventListener("sessionend",Zi),Nn.stop()};function Re(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const P=it.autoReset,q=We.enabled,se=We.autoUpdate,ae=We.needsUpdate,j=We.type;W(),it.autoReset=P,We.enabled=q,We.autoUpdate=se,We.needsUpdate=ae,We.type=j}function Me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ge(P){const q=P.target;q.removeEventListener("dispose",ge),Xe(q)}function Xe(P){mt(P),Fe.remove(P)}function mt(P){const q=Fe.get(P).programs;q!==void 0&&(q.forEach(function(se){pe.releaseProgram(se)}),P.isShaderMaterial&&pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,se,ae,j,Ae){q===null&&(q=_e);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,Ye=Fi(P,q,se,ae,j);Ce.setMaterial(ae,Ne);let Be=se.index,ct=1;if(ae.wireframe===!0){if(Be=A.getWireframeAttribute(se),Be===void 0)return;ct=2}const ht=se.drawRange,nt=se.attributes.position;let gt=ht.start*ct,Ft=(ht.start+ht.count)*ct;Ae!==null&&(gt=Math.max(gt,Ae.start*ct),Ft=Math.min(Ft,(Ae.start+Ae.count)*ct)),Be!==null?(gt=Math.max(gt,0),Ft=Math.min(Ft,Be.count)):nt!=null&&(gt=Math.max(gt,0),Ft=Math.min(Ft,nt.count));const Pt=Ft-gt;if(Pt<0||Pt===1/0)return;Le.setup(j,ae,Ye,se,Be);let jt,kt=Ie;if(Be!==null&&(jt=O.get(Be),kt=st,kt.setIndex(jt)),j.isMesh)ae.wireframe===!0?(Ce.setLineWidth(ae.wireframeLinewidth*xt()),kt.setMode(k.LINES)):kt.setMode(k.TRIANGLES);else if(j.isLine){let ot=ae.linewidth;ot===void 0&&(ot=1),Ce.setLineWidth(ot*xt()),j.isLineSegments?kt.setMode(k.LINES):j.isLineLoop?kt.setMode(k.LINE_LOOP):kt.setMode(k.LINE_STRIP)}else j.isPoints?kt.setMode(k.POINTS):j.isSprite&&kt.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)fl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),kt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))kt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const ot=j._multiDrawStarts,Wt=j._multiDrawCounts,At=j._multiDrawCount,un=Be?O.get(Be).bytesPerElement:1,xi=Fe.get(ae).currentProgram.getUniforms();for(let Dn=0;Dn<At;Dn++)xi.setValue(k,"_gl_DrawID",Dn),kt.render(ot[Dn]/un,Wt[Dn])}else if(j.isInstancedMesh)kt.renderInstances(gt,Pt,j.count);else if(se.isInstancedBufferGeometry){const ot=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Wt=Math.min(se.instanceCount,ot);kt.renderInstances(gt,Pt,Wt)}else kt.render(gt,Pt)};function It(P,q,se){P.transparent===!0&&P.side===fi&&P.forceSinglePass===!1?(P.side=In,P.needsUpdate=!0,Ji(P,q,se),P.side=xr,P.needsUpdate=!0,Ji(P,q,se),P.side=fi):Ji(P,q,se)}this.compile=function(P,q,se=null){se===null&&(se=P),x=Je.get(se),x.init(q),I.push(x),se.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),P!==se&&P.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const ae=new Set;return P.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ae=j.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const Ye=Ae[Ne];It(Ye,se,j),ae.add(Ye)}else It(Ae,se,j),ae.add(Ae)}),x=I.pop(),ae},this.compileAsync=function(P,q,se=null){const ae=this.compile(P,q,se);return new Promise(j=>{function Ae(){if(ae.forEach(function(Ne){Fe.get(Ne).currentProgram.isReady()&&ae.delete(Ne)}),ae.size===0){j(P);return}setTimeout(Ae,10)}De.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Ct=null;function Gn(P){Ct&&Ct(P)}function gn(){Nn.stop()}function Zi(){Nn.start()}const Nn=new Mx;Nn.setAnimationLoop(Gn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(P){Ct=P,Te.setAnimationLoop(P),P===null?Nn.stop():Nn.start()},Te.addEventListener("sessionstart",gn),Te.addEventListener("sessionend",Zi),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(q),q=Te.getCamera()),P.isScene===!0&&P.onBeforeRender(T,P,q,z),x=Je.get(P,I.length),x.init(q),I.push(x),de.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ze.setFromProjectionMatrix(de,Yi,q.reversedDepth),ie=this.localClippingEnabled,He=Se.init(this.clippingPlanes,ie),y=fe.get(P,b.length),y.init(),b.push(y),Te.enabled===!0&&Te.isPresenting===!0){const Ae=T.xr.getDepthSensingMesh();Ae!==null&&es(Ae,q,-1/0,T.sortObjects)}es(P,q,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(ce,ne),Ge=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Ge&&Ke.addToRenderList(y,P),this.info.render.frame++,He===!0&&Se.beginShadows();const se=x.state.shadowsArray;We.render(se,P,q),He===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=y.opaque,j=y.transmissive;if(x.setupLights(),q.isArrayCamera){const Ae=q.cameras;if(j.length>0)for(let Ne=0,Ye=Ae.length;Ne<Ye;Ne++){const Be=Ae[Ne];Qi(ae,j,P,Be)}Ge&&Ke.render(P);for(let Ne=0,Ye=Ae.length;Ne<Ye;Ne++){const Be=Ae[Ne];Ui(y,P,Be,Be.viewport)}}else j.length>0&&Qi(ae,j,P,q),Ge&&Ke.render(P),Ui(y,P,q);z!==null&&D===0&&(ut.updateMultisampleRenderTarget(z),ut.updateRenderTargetMipmap(z)),P.isScene===!0&&P.onAfterRender(T,P,q),Le.resetDefaultState(),C=-1,R=null,I.pop(),I.length>0?(x=I[I.length-1],He===!0&&Se.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,b.pop(),b.length>0?y=b[b.length-1]:y=null};function es(P,q,se,ae){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ze.intersectsSprite(P)){ae&&me.setFromMatrixPosition(P.matrixWorld).applyMatrix4(de);const Ne=Z.update(P),Ye=P.material;Ye.visible&&y.push(P,Ne,Ye,se,me.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ze.intersectsObject(P))){const Ne=Z.update(P),Ye=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),me.copy(P.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),me.copy(Ne.boundingSphere.center)),me.applyMatrix4(P.matrixWorld).applyMatrix4(de)),Array.isArray(Ye)){const Be=Ne.groups;for(let ct=0,ht=Be.length;ct<ht;ct++){const nt=Be[ct],gt=Ye[nt.materialIndex];gt&&gt.visible&&y.push(P,Ne,gt,se,me.z,nt)}}else Ye.visible&&y.push(P,Ne,Ye,se,me.z,null)}}const Ae=P.children;for(let Ne=0,Ye=Ae.length;Ne<Ye;Ne++)es(Ae[Ne],q,se,ae)}function Ui(P,q,se,ae){const j=P.opaque,Ae=P.transmissive,Ne=P.transparent;x.setupLightsView(se),He===!0&&Se.setGlobalState(T.clippingPlanes,se),ae&&Ce.viewport(B.copy(ae)),j.length>0&&vi(j,q,se),Ae.length>0&&vi(Ae,q,se),Ne.length>0&&vi(Ne,q,se),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Qi(P,q,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ae.id]===void 0&&(x.state.transmissionRenderTarget[ae.id]=new Os(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?gl:$i,minFilter:gr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Ae=x.state.transmissionRenderTarget[ae.id],Ne=ae.viewport||B;Ae.setSize(Ne.z*T.transmissionResolutionScale,Ne.w*T.transmissionResolutionScale);const Ye=T.getRenderTarget(),Be=T.getActiveCubeFace(),ct=T.getActiveMipmapLevel();T.setRenderTarget(Ae),T.getClearColor(he),le=T.getClearAlpha(),le<1&&T.setClearColor(16777215,.5),T.clear(),Ge&&Ke.render(se);const ht=T.toneMapping;T.toneMapping=Qr;const nt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),x.setupLightsView(ae),He===!0&&Se.setGlobalState(T.clippingPlanes,ae),vi(P,se,ae),ut.updateMultisampleRenderTarget(Ae),ut.updateRenderTargetMipmap(Ae),De.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Ft=0,Pt=q.length;Ft<Pt;Ft++){const jt=q[Ft],kt=jt.object,ot=jt.geometry,Wt=jt.material,At=jt.group;if(Wt.side===fi&&kt.layers.test(ae.layers)){const un=Wt.side;Wt.side=In,Wt.needsUpdate=!0,Oi(kt,se,ae,ot,Wt,At),Wt.side=un,Wt.needsUpdate=!0,gt=!0}}gt===!0&&(ut.updateMultisampleRenderTarget(Ae),ut.updateRenderTargetMipmap(Ae))}T.setRenderTarget(Ye,Be,ct),T.setClearColor(he,le),nt!==void 0&&(ae.viewport=nt),T.toneMapping=ht}function vi(P,q,se){const ae=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Ae=P.length;j<Ae;j++){const Ne=P[j],Ye=Ne.object,Be=Ne.geometry,ct=Ne.group;let ht=Ne.material;ht.allowOverride===!0&&ae!==null&&(ht=ae),Ye.layers.test(se.layers)&&Oi(Ye,q,se,Be,ht,ct)}}function Oi(P,q,se,ae,j,Ae){P.onBeforeRender(T,q,se,ae,j,Ae),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(T,q,se,ae,P,Ae),j.transparent===!0&&j.side===fi&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,T.renderBufferDirect(se,q,ae,j,P,Ae),j.side=xr,j.needsUpdate=!0,T.renderBufferDirect(se,q,ae,j,P,Ae),j.side=fi):T.renderBufferDirect(se,q,ae,j,P,Ae),P.onAfterRender(T,q,se,ae,j,Ae)}function Ji(P,q,se){q.isScene!==!0&&(q=_e);const ae=Fe.get(P),j=x.state.lights,Ae=x.state.shadowsArray,Ne=j.state.version,Ye=pe.getParameters(P,j.state,Ae,q,se),Be=pe.getProgramCacheKey(Ye);let ct=ae.programs;ae.environment=P.isMeshStandardMaterial?q.environment:null,ae.fog=q.fog,ae.envMap=(P.isMeshStandardMaterial?qt:Gt).get(P.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,ct===void 0&&(P.addEventListener("dispose",ge),ct=new Map,ae.programs=ct);let ht=ct.get(Be);if(ht!==void 0){if(ae.currentProgram===ht&&ae.lightsStateVersion===Ne)return ks(P,Ye),ht}else Ye.uniforms=pe.getUniforms(P),P.onBeforeCompile(Ye,T),ht=pe.acquireProgram(Ye,Be),ct.set(Be,ht),ae.uniforms=Ye.uniforms;const nt=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(nt.clippingPlanes=Se.uniform),ks(P,Ye),ae.needsLights=ts(P),ae.lightsStateVersion=Ne,ae.needsLights&&(nt.ambientLightColor.value=j.state.ambient,nt.lightProbe.value=j.state.probe,nt.directionalLights.value=j.state.directional,nt.directionalLightShadows.value=j.state.directionalShadow,nt.spotLights.value=j.state.spot,nt.spotLightShadows.value=j.state.spotShadow,nt.rectAreaLights.value=j.state.rectArea,nt.ltc_1.value=j.state.rectAreaLTC1,nt.ltc_2.value=j.state.rectAreaLTC2,nt.pointLights.value=j.state.point,nt.pointLightShadows.value=j.state.pointShadow,nt.hemisphereLights.value=j.state.hemi,nt.directionalShadowMap.value=j.state.directionalShadowMap,nt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,nt.spotShadowMap.value=j.state.spotShadowMap,nt.spotLightMatrix.value=j.state.spotLightMatrix,nt.spotLightMap.value=j.state.spotLightMap,nt.pointShadowMap.value=j.state.pointShadowMap,nt.pointShadowMatrix.value=j.state.pointShadowMatrix),ae.currentProgram=ht,ae.uniformsList=null,ht}function Fs(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=lc.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function ks(P,q){const se=Fe.get(P);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function Fi(P,q,se,ae,j){q.isScene!==!0&&(q=_e),ut.resetTextureUnits();const Ae=q.fog,Ne=ae.isMeshStandardMaterial?q.environment:null,Ye=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Hn,Be=(ae.isMeshStandardMaterial?qt:Gt).get(ae.envMap||Ne),ct=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ht=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),nt=!!se.morphAttributes.position,gt=!!se.morphAttributes.normal,Ft=!!se.morphAttributes.color;let Pt=Qr;ae.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Pt=T.toneMapping);const jt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,kt=jt!==void 0?jt.length:0,ot=Fe.get(ae),Wt=x.state.lights;if(He===!0&&(ie===!0||P!==R)){const sn=P===R&&ae.id===C;Se.setState(ae,P,sn)}let At=!1;ae.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Wt.state.version||ot.outputColorSpace!==Ye||j.isBatchedMesh&&ot.batching===!1||!j.isBatchedMesh&&ot.batching===!0||j.isBatchedMesh&&ot.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ot.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ot.instancing===!1||!j.isInstancedMesh&&ot.instancing===!0||j.isSkinnedMesh&&ot.skinning===!1||!j.isSkinnedMesh&&ot.skinning===!0||j.isInstancedMesh&&ot.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ot.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ot.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ot.instancingMorph===!1&&j.morphTexture!==null||ot.envMap!==Be||ae.fog===!0&&ot.fog!==Ae||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Se.numPlanes||ot.numIntersection!==Se.numIntersection)||ot.vertexAlphas!==ct||ot.vertexTangents!==ht||ot.morphTargets!==nt||ot.morphNormals!==gt||ot.morphColors!==Ft||ot.toneMapping!==Pt||ot.morphTargetsCount!==kt)&&(At=!0):(At=!0,ot.__version=ae.version);let un=ot.currentProgram;At===!0&&(un=Ji(ae,q,j));let xi=!1,Dn=!1,ns=!1;const Yt=un.getUniforms(),Un=ot.uniforms;if(Ce.useProgram(un.program)&&(xi=!0,Dn=!0,ns=!0),ae.id!==C&&(C=ae.id,Dn=!0),xi||R!==P){Ce.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Yt.setValue(k,"projectionMatrix",P.projectionMatrix),Yt.setValue(k,"viewMatrix",P.matrixWorldInverse);const wn=Yt.map.cameraPosition;wn!==void 0&&wn.setValue(k,Q.setFromMatrixPosition(P.matrixWorld)),ke.logarithmicDepthBuffer&&Yt.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Yt.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,Dn=!0,ns=!0)}if(j.isSkinnedMesh){Yt.setOptional(k,j,"bindMatrix"),Yt.setOptional(k,j,"bindMatrixInverse");const sn=j.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Yt.setValue(k,"boneTexture",sn.boneTexture,ut))}j.isBatchedMesh&&(Yt.setOptional(k,j,"batchingTexture"),Yt.setValue(k,"batchingTexture",j._matricesTexture,ut),Yt.setOptional(k,j,"batchingIdTexture"),Yt.setValue(k,"batchingIdTexture",j._indirectTexture,ut),Yt.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&Yt.setValue(k,"batchingColorTexture",j._colorsTexture,ut));const Tn=se.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&we.update(j,se,un),(Dn||ot.receiveShadow!==j.receiveShadow)&&(ot.receiveShadow=j.receiveShadow,Yt.setValue(k,"receiveShadow",j.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Un.envMap.value=Be,Un.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&q.environment!==null&&(Un.envMapIntensity.value=q.environmentIntensity),Dn&&(Yt.setValue(k,"toneMappingExposure",T.toneMappingExposure),ot.needsLights&&Bs(Un,ns),Ae&&ae.fog===!0&&ve.refreshFogUniforms(Un,Ae),ve.refreshMaterialUniforms(Un,ae,H,te,x.state.transmissionRenderTarget[P.id]),lc.upload(k,Fs(ot),Un,ut)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(lc.upload(k,Fs(ot),Un,ut),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Yt.setValue(k,"center",j.center),Yt.setValue(k,"modelViewMatrix",j.modelViewMatrix),Yt.setValue(k,"normalMatrix",j.normalMatrix),Yt.setValue(k,"modelMatrix",j.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const sn=ae.uniformsGroups;for(let wn=0,is=sn.length;wn<is;wn++){const Rt=sn[wn];pt.update(Rt,un),pt.bind(Rt,un)}}return un}function Bs(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function ts(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(P,q,se){const ae=Fe.get(P);ae.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Fe.get(P.texture).__webglTexture=q,Fe.get(P.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:se,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){const se=Fe.get(P);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const ia=k.createFramebuffer();this.setRenderTarget=function(P,q=0,se=0){z=P,L=q,D=se;let ae=!0,j=null,Ae=!1,Ne=!1;if(P){const Be=Fe.get(P);if(Be.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(k.FRAMEBUFFER,null),ae=!1;else if(Be.__webglFramebuffer===void 0)ut.setupRenderTarget(P);else if(Be.__hasExternalTextures)ut.rebindTextures(P,Fe.get(P.texture).__webglTexture,Fe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const nt=P.depthTexture;if(Be.__boundDepthTexture!==nt){if(nt!==null&&Fe.has(nt)&&(P.width!==nt.image.width||P.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(P)}}const ct=P.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ne=!0);const ht=Fe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ht[q])?j=ht[q][se]:j=ht[q],Ae=!0):P.samples>0&&ut.useMultisampledRTT(P)===!1?j=Fe.get(P).__webglMultisampledFramebuffer:Array.isArray(ht)?j=ht[se]:j=ht,B.copy(P.viewport),Y.copy(P.scissor),J=P.scissorTest}else B.copy(V).multiplyScalar(H).floor(),Y.copy(oe).multiplyScalar(H).floor(),J=Oe;if(se!==0&&(j=ia),Ce.bindFramebuffer(k.FRAMEBUFFER,j)&&ae&&Ce.drawBuffers(P,j),Ce.viewport(B),Ce.scissor(Y),Ce.setScissorTest(J),Ae){const Be=Fe.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,se)}else if(Ne){const Be=q;for(let ct=0;ct<P.textures.length;ct++){const ht=Fe.get(P.textures[ct]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ct,ht.__webglTexture,se,Be)}}else if(P!==null&&se!==0){const Be=Fe.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,se)}C=-1},this.readRenderTargetPixels=function(P,q,se,ae,j,Ae,Ne,Ye=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Fe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){Ce.bindFramebuffer(k.FRAMEBUFFER,Be);try{const ct=P.textures[Ye],ht=ct.format,nt=ct.type;if(!ke.textureFormatReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-ae&&se>=0&&se<=P.height-j&&(P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ye),k.readPixels(q,se,ae,j,$e.convert(ht),$e.convert(nt),Ae))}finally{const ct=z!==null?Fe.get(z).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(P,q,se,ae,j,Ae,Ne,Ye=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Fe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be)if(q>=0&&q<=P.width-ae&&se>=0&&se<=P.height-j){Ce.bindFramebuffer(k.FRAMEBUFFER,Be);const ct=P.textures[Ye],ht=ct.format,nt=ct.type;if(!ke.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,gt),k.bufferData(k.PIXEL_PACK_BUFFER,Ae.byteLength,k.STREAM_READ),P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ye),k.readPixels(q,se,ae,j,$e.convert(ht),$e.convert(nt),0);const Ft=z!==null?Fe.get(z).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,Ft);const Pt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await bE(k,Pt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,gt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ae),k.deleteBuffer(gt),k.deleteSync(Pt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,se=0){const ae=Math.pow(2,-se),j=Math.floor(P.image.width*ae),Ae=Math.floor(P.image.height*ae),Ne=q!==null?q.x:0,Ye=q!==null?q.y:0;ut.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,Ne,Ye,j,Ae),Ce.unbindTexture()};const Vs=k.createFramebuffer(),er=k.createFramebuffer();this.copyTextureToTexture=function(P,q,se=null,ae=null,j=0,Ae=null){Ae===null&&(j!==0?(fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=j,j=0):Ae=0);let Ne,Ye,Be,ct,ht,nt,gt,Ft,Pt;const jt=P.isCompressedTexture?P.mipmaps[Ae]:P.image;if(se!==null)Ne=se.max.x-se.min.x,Ye=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,ct=se.min.x,ht=se.min.y,nt=se.isBox3?se.min.z:0;else{const Tn=Math.pow(2,-j);Ne=Math.floor(jt.width*Tn),Ye=Math.floor(jt.height*Tn),P.isDataArrayTexture?Be=jt.depth:P.isData3DTexture?Be=Math.floor(jt.depth*Tn):Be=1,ct=0,ht=0,nt=0}ae!==null?(gt=ae.x,Ft=ae.y,Pt=ae.z):(gt=0,Ft=0,Pt=0);const kt=$e.convert(q.format),ot=$e.convert(q.type);let Wt;q.isData3DTexture?(ut.setTexture3D(q,0),Wt=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ut.setTexture2DArray(q,0),Wt=k.TEXTURE_2D_ARRAY):(ut.setTexture2D(q,0),Wt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const At=k.getParameter(k.UNPACK_ROW_LENGTH),un=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xi=k.getParameter(k.UNPACK_SKIP_PIXELS),Dn=k.getParameter(k.UNPACK_SKIP_ROWS),ns=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,jt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,jt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ct),k.pixelStorei(k.UNPACK_SKIP_ROWS,ht),k.pixelStorei(k.UNPACK_SKIP_IMAGES,nt);const Yt=P.isDataArrayTexture||P.isData3DTexture,Un=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){const Tn=Fe.get(P),sn=Fe.get(q),wn=Fe.get(Tn.__renderTarget),is=Fe.get(sn.__renderTarget);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,wn.__webglFramebuffer),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let Rt=0;Rt<Be;Rt++)Yt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(P).__webglTexture,j,nt+Rt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(q).__webglTexture,Ae,Pt+Rt)),k.blitFramebuffer(ct,ht,Ne,Ye,gt,Ft,Ne,Ye,k.DEPTH_BUFFER_BIT,k.NEAREST);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||P.isRenderTargetTexture||Fe.has(P)){const Tn=Fe.get(P),sn=Fe.get(q);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,Vs),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,er);for(let wn=0;wn<Be;wn++)Yt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Tn.__webglTexture,j,nt+wn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Tn.__webglTexture,j),Un?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sn.__webglTexture,Ae,Pt+wn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sn.__webglTexture,Ae),j!==0?k.blitFramebuffer(ct,ht,Ne,Ye,gt,Ft,Ne,Ye,k.COLOR_BUFFER_BIT,k.NEAREST):Un?k.copyTexSubImage3D(Wt,Ae,gt,Ft,Pt+wn,ct,ht,Ne,Ye):k.copyTexSubImage2D(Wt,Ae,gt,Ft,ct,ht,Ne,Ye);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Un?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(Wt,Ae,gt,Ft,Pt,Ne,Ye,Be,kt,ot,jt.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(Wt,Ae,gt,Ft,Pt,Ne,Ye,Be,kt,jt.data):k.texSubImage3D(Wt,Ae,gt,Ft,Pt,Ne,Ye,Be,kt,ot,jt):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ae,gt,Ft,Ne,Ye,kt,ot,jt.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ae,gt,Ft,jt.width,jt.height,kt,jt.data):k.texSubImage2D(k.TEXTURE_2D,Ae,gt,Ft,Ne,Ye,kt,ot,jt);k.pixelStorei(k.UNPACK_ROW_LENGTH,At),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,un),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Dn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ns),Ae===0&&q.generateMipmaps&&k.generateMipmap(Wt),Ce.unbindTexture()},this.initRenderTarget=function(P){Fe.get(P).__webglFramebuffer===void 0&&ut.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ut.setTextureCube(P,0):P.isData3DTexture?ut.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ut.setTexture2DArray(P,0):ut.setTexture2D(P,0),Ce.unbindTexture()},this.resetState=function(){L=0,D=0,z=null,Ce.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}let Ya=null;function op(){if(Ya)return Ya;const i=128,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.2,"rgba(255,255,255,0.8)"),n.addColorStop(.5,"rgba(255,255,255,0.18)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i),Ya=new lT(e),Ya.colorSpace=hn,Ya}function Fp(i,e,t=1){const n=new JE(new cx({map:op(),color:i,transparent:!0,opacity:t,blending:Is,depthWrite:!1}));return n.scale.setScalar(e),n}const Ss=new tt("#4aa8ff"),Ab=new tt("#ffb347");class Rb{group=new Mn;nodes=[];nodePoints;lines;linkDistance=4.2;earth;orbs=[];stars;box=new U(18,10,6);constructor(e){const t=e==="high"?110:55;this.stars=this.makeStars(e==="high"?1800:800),this.group.add(this.stars);for(let c=0;c<t;c++)this.nodes.push({pos:new U(yt.randFloatSpread(this.box.x*2),yt.randFloatSpread(this.box.y*2),yt.randFloatSpread(this.box.z*2)-14),vel:new U().randomDirection().multiplyScalar(yt.randFloat(.08,.25))});const n=new Ht;n.setAttribute("position",new wt(new Float32Array(t*3),3));const s=new Float32Array(t*3);for(let c=0;c<t;c++)(Math.random()<.12?Ab:Ss).toArray(s,c*3);n.setAttribute("color",new wt(s,3)),this.nodePoints=new ip(n,new vc({size:.35,map:op(),vertexColors:!0,transparent:!0,blending:Is,depthWrite:!1})),this.group.add(this.nodePoints);const a=t*6,l=new Ht;l.setAttribute("position",new wt(new Float32Array(a*6),3)),l.setAttribute("color",new wt(new Float32Array(a*6),3)),this.lines=new Qo(l,new Jr({vertexColors:!0,transparent:!0,blending:Is,depthWrite:!1})),this.group.add(this.lines),this.earth=this.makeEarth(),this.group.add(this.earth);for(let c=0;c<7;c++){const d=c%3===0,h=Fp(d?"#ffae42":"#5ab4ff",yt.randFloat(.8,2.2),.55),p=new U(yt.randFloatSpread(26),yt.randFloatSpread(14),yt.randFloat(-22,-8));h.position.copy(p),this.orbs.push({sprite:h,base:p,phase:Math.random()*Math.PI*2}),this.group.add(h)}this.updateNetwork(0)}makeStars(e){const t=new Float32Array(e*3),n=new Float32Array(e*3),s=new tt;for(let l=0;l<e;l++){const c=new U().randomDirection().multiplyScalar(yt.randFloat(60,120));c.z=-Math.abs(c.z),c.toArray(t,l*3),s.setHSL(yt.randFloat(.55,.65),.6,yt.randFloat(.55,.95)),s.toArray(n,l*3)}const a=new Ht;return a.setAttribute("position",new wt(t,3)),a.setAttribute("color",new wt(n,3)),new ip(a,new vc({size:.5,map:op(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:Is}))}makeEarth(){const e=new Mn,t=8,n=new rn(new ml(t,64,48),new Ii({uniforms:{uTime:{value:0},uLight:{value:new U(-1,.6,.8).normalize()}},vertexShader:`
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
          }`}));e.add(n);const s=new rn(new ml(t*1.08,48,32),new Ii({transparent:!0,side:In,blending:Is,depthWrite:!1,vertexShader:`
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
          }`}));return e.add(s),e.position.set(14,-13,-30),e.rotation.z=.35,e}layout(e){e<1?this.earth.position.set(5,-19,-36):this.earth.position.set(19,-13,-36)}updateNetwork(e){const{nodes:t,box:n}=this,s=this.nodePoints.geometry.getAttribute("position");t.forEach((h,p)=>{h.pos.addScaledVector(h.vel,e),Math.abs(h.pos.x)>n.x&&(h.vel.x*=-1),Math.abs(h.pos.y)>n.y&&(h.vel.y*=-1),Math.abs(h.pos.z+14)>n.z&&(h.vel.z*=-1),s.setXYZ(p,h.pos.x,h.pos.y,h.pos.z)}),s.needsUpdate=!0;const a=this.lines.geometry.getAttribute("position"),l=this.lines.geometry.getAttribute("color"),c=a.count/2;let d=0;for(let h=0;h<t.length&&d<c;h++)for(let p=h+1;p<t.length&&d<c;p++){const m=t[h].pos.distanceTo(t[p].pos);if(m>this.linkDistance)continue;const g=(1-m/this.linkDistance)*.55;a.setXYZ(d*2,t[h].pos.x,t[h].pos.y,t[h].pos.z),a.setXYZ(d*2+1,t[p].pos.x,t[p].pos.y,t[p].pos.z),l.setXYZ(d*2,Ss.r*g,Ss.g*g,Ss.b*g),l.setXYZ(d*2+1,Ss.r*g,Ss.g*g,Ss.b*g),d++}this.lines.geometry.setDrawRange(0,d*2),a.needsUpdate=!0,l.needsUpdate=!0}update(e,t){this.updateNetwork(e),this.earth.rotation.y+=e*.02,this.stars.rotation.z+=e*.004;for(const n of this.orbs)n.sprite.position.set(n.base.x+Math.sin(t*.15+n.phase)*1.5,n.base.y+Math.cos(t*.12+n.phase)*1,n.base.z),n.sprite.material.opacity=.4+Math.sin(t*.8+n.phase)*.15}}function Gv(i,e){if(e===JS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Jf||e===Z0){let t=i.getIndex();if(t===null){const l=[],c=i.getAttribute("position");if(c!==void 0){for(let d=0;d<c.count;d++)l.push(d);i.setIndex(l),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Jf)for(let l=1;l<=n;l++)s.push(t.getX(0)),s.push(t.getX(l)),s.push(t.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(s.push(t.getX(l)),s.push(t.getX(l+1)),s.push(t.getX(l+2))):(s.push(t.getX(l+2)),s.push(t.getX(l+1)),s.push(t.getX(l)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class bb extends ta{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Nb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new Yb(t)})}load(e,t,n,s){const a=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const h=sl.extractUrlBase(e);l=sl.resolveURL(h,this.path)}else l=sl.extractUrlBase(e);this.manager.itemStart(e);const c=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},d=new xx(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{a.parse(h,l,function(p){t(p),a.manager.itemEnd(e)},c)}catch(p){c(p)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let a;const l={},c={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===Ax){try{l[bt.KHR_BINARY_GLTF]=new qb(e)}catch(m){s&&s(m);return}a=JSON.parse(l[bt.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new aC(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](h);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[m.name]=m,l[m.name]=!0}if(a.extensionsUsed)for(let p=0;p<a.extensionsUsed.length;++p){const m=a.extensionsUsed[p],g=a.extensionsRequired||[];switch(m){case bt.KHR_MATERIALS_UNLIT:l[m]=new Lb;break;case bt.KHR_DRACO_MESH_COMPRESSION:l[m]=new $b(a,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:l[m]=new Kb;break;case bt.KHR_MESH_QUANTIZATION:l[m]=new Zb;break;default:g.indexOf(m)>=0&&c[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}h.setExtensions(l),h.setPlugins(c),h.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,a){n.parse(e,t,s,a)})}}function Cb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Pb{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const p=new tt(16777215);d.color!==void 0&&p.setRGB(d.color[0],d.color[1],d.color[2],Hn);const m=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new rp(p),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new RT(p),h.distance=m;break;case"spot":h=new wT(p),h.distance=m,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),Xi(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(h),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],c=(a.extensions&&a.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(d){return n._getNodeRef(t.cache,c,d)})}}class Lb{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return gi}extendParams(e,t,n){const s=[];e.color=new tt(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const l=a.baseColorFactor;e.color.setRGB(l[0],l[1],l[2],Hn),e.opacity=l[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",a.baseColorTexture,hn))}return Promise.all(s)}}class Ib{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class Nb{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];if(l.clearcoatFactor!==void 0&&(t.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const c=l.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new rt(c,c)}return Promise.all(a)}}class Db{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class Ub{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.iridescenceFactor!==void 0&&(t.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(t.iridescenceIOR=l.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(a)}}class Ob{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1;const l=s.extensions[this.name];if(l.sheenColorFactor!==void 0){const c=l.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Hn)}return l.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",l.sheenColorTexture,hn)),l.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(a)}}class Fb{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.transmissionFactor!==void 0&&(t.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",l.transmissionTexture)),Promise.all(a)}}class kb{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];t.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",l.thicknessTexture)),t.attenuationDistance=l.attenuationDistance||1/0;const c=l.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(c[0],c[1],c[2],Hn),Promise.all(a)}}class Bb{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class Vb{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];t.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",l.specularTexture));const c=l.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(c[0],c[1],c[2],Hn),l.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",l.specularColorTexture,hn)),Promise.all(a)}}class zb{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return t.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",l.bumpTexture)),Promise.all(a)}}class Hb{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.anisotropyStrength!==void 0&&(t.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(t.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",l.anisotropyTexture)),Promise.all(a)}}class Gb{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],l=t.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,l)}}class Wb{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const l=a.extensions[t],c=s.images[l.source];let d=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(d=h)}return n.loadTextureImage(e,l.source,d)}}class Xb{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const l=a.extensions[t],c=s.images[l.source];let d=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(d=h)}return n.loadTextureImage(e,l.source,d)}}class jb{constructor(e){this.name=bt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(c){const d=s.byteOffset||0,h=s.byteLength||0,p=s.count,m=s.byteStride,g=new Uint8Array(c,d,h);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(p,m,g,s.mode,s.filter).then(function(v){return v.buffer}):l.ready.then(function(){const v=new ArrayBuffer(p*m);return l.decodeGltfBuffer(new Uint8Array(v),p,m,g,s.mode,s.filter),v})})}else return null}}class Yb{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const h of s.primitives)if(h.mode!==hi.TRIANGLES&&h.mode!==hi.TRIANGLE_STRIP&&h.mode!==hi.TRIANGLE_FAN&&h.mode!==void 0)return null;const l=n.extensions[this.name].attributes,c=[],d={};for(const h in l)c.push(this.parser.getDependency("accessor",l[h]).then(p=>(d[h]=p,d[h])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(h=>{const p=h.pop(),m=p.isGroup?p.children:[p],g=h[0].count,v=[];for(const S of m){const E=new ft,y=new U,x=new Mt,b=new U(1,1,1),I=new iT(S.geometry,S.material,g);for(let T=0;T<g;T++)d.TRANSLATION&&y.fromBufferAttribute(d.TRANSLATION,T),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,T),d.SCALE&&b.fromBufferAttribute(d.SCALE,T),I.setMatrixAt(T,E.compose(y,x,b));for(const T in d)if(T==="_COLOR_0"){const N=d[T];I.instanceColor=new tp(N.array,N.itemSize,N.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&S.geometry.setAttribute(T,d[T]);zt.prototype.copy.call(I,S),this.parser.assignFinalMaterial(I),v.push(I)}return p.isGroup?(p.clear(),p.add(...v),p):v[0]}))}}const Ax="glTF",qa=12,Wv={JSON:1313821514,BIN:5130562};class qb{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ax)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-qa,a=new DataView(e,qa);let l=0;for(;l<s;){const c=a.getUint32(l,!0);l+=4;const d=a.getUint32(l,!0);if(l+=4,d===Wv.JSON){const h=new Uint8Array(e,qa+l,c);this.content=n.decode(h)}else if(d===Wv.BIN){const h=qa+l;this.body=e.slice(h,h+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $b{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,l=e.extensions[this.name].attributes,c={},d={},h={};for(const p in l){const m=ap[p]||p.toLowerCase();c[m]=l[p]}for(const p in e.attributes){const m=ap[p]||p.toLowerCase();if(l[p]!==void 0){const g=n.accessors[e.attributes[p]],v=Vo[g.componentType];h[m]=v.name,d[m]=g.normalized===!0}}return t.getDependency("bufferView",a).then(function(p){return new Promise(function(m,g){s.decodeDracoFile(p,function(v){for(const S in v.attributes){const E=v.attributes[S],y=d[S];y!==void 0&&(E.normalized=y)}m(v)},c,h,Hn,g)})})}}class Kb{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Zb{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}}class Rx extends vl{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let l=0;l!==s;l++)t[l]=n[a+l];return t}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=c*2,h=c*3,p=s-t,m=(n-t)/p,g=m*m,v=g*m,S=e*h,E=S-h,y=-2*v+3*g,x=v-g,b=1-y,I=x-g+m;for(let T=0;T!==c;T++){const N=l[E+T+c],L=l[E+T+d]*p,D=l[S+T+c],z=l[S+T]*p;a[T]=b*N+I*L+y*D+x*z}return a}}const Qb=new Mt;class Jb extends Rx{interpolate_(e,t,n,s){const a=super.interpolate_(e,t,n,s);return Qb.fromArray(a).normalize().toArray(a),a}}const hi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xv={9728:zn,9729:ni,9984:G0,9985:ic,9986:el,9987:gr},jv={33071:Kr,33648:fc,10497:Wo},Kh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ap={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eC={CUBICSPLINE:void 0,LINEAR:dl,STEP:cl},Zh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tC(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Lp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xr})),i.DefaultMaterial}function Es(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nC(i,e,t){let n=!1,s=!1,a=!1;for(let h=0,p=e.length;h<p;h++){const m=e[h];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(s=!0),m.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(i);const l=[],c=[],d=[];for(let h=0,p=e.length;h<p;h++){const m=e[h];if(n){const g=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):i.attributes.position;l.push(g)}if(s){const g=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):i.attributes.normal;c.push(g)}if(a){const g=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):i.attributes.color;d.push(g)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const p=h[0],m=h[1],g=h[2];return n&&(i.morphAttributes.position=p),s&&(i.morphAttributes.normal=m),a&&(i.morphAttributes.color=g),i.morphTargetsRelative=!0,i})}function iC(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rC(i){let e;const t=i.extensions&&i.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qh(t.attributes):e=i.indices+":"+Qh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Qh(i.targets[n]);return e}function Qh(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function lp(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sC(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const oC=new ft;class aC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,a=!1,l=-1;if(typeof navigator<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const d=c.match(/Version\/(\d+)/);s=n&&d?parseInt(d[1],10):-1,a=c.indexOf("Firefox")>-1,l=a?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||a&&l<98?this.textureLoader=new ET(this.options.manager):this.textureLoader=new PT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const c={scene:l[0][s.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:s.asset,parser:n,userData:{}};return Es(a,c,s),Xi(c,s),Promise.all(n._invokeAll(function(d){return d.afterRoot&&d.afterRoot(c)})).then(function(){for(const d of c.scenes)d.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const l=t[s].joints;for(let c=0,d=l.length;c<d;c++)e[l[c]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const l=e[s];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),a=(l,c)=>{const d=this.associations.get(l);d!=null&&this.associations.set(c,d);for(const[h,p]of l.children.entries())a(p,c.children[h])};return a(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,l){return n.getDependency(e,l)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,l){n.load(sl.resolveURL(t.uri,s.path),a,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const l=Kh[s.type],c=Vo[s.componentType],d=s.normalized===!0,h=new c(s.count*l);return Promise.resolve(new wt(h,l,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(l){const c=l[0],d=Kh[s.type],h=Vo[s.componentType],p=h.BYTES_PER_ELEMENT,m=p*d,g=s.byteOffset||0,v=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,S=s.normalized===!0;let E,y;if(v&&v!==m){const x=Math.floor(g/v),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let I=t.cache.get(b);I||(E=new h(c,x*v,s.count*v/p),I=new ux(E,v/p),t.cache.add(b,I)),y=new pl(I,d,g%v/p,S)}else c===null?E=new h(s.count*d):E=new h(c,g,s.count*d),y=new wt(E,d,S);if(s.sparse!==void 0){const x=Kh.SCALAR,b=Vo[s.sparse.indices.componentType],I=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,N=new b(l[1],I,s.sparse.count*x),L=new h(l[2],T,s.sparse.count*d);c!==null&&(y=new wt(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let D=0,z=N.length;D<z;D++){const C=N[D];if(y.setX(C,L[D*d]),d>=2&&y.setY(C,L[D*d+1]),d>=3&&y.setZ(C,L[D*d+2]),d>=4&&y.setW(C,L[D*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=S}return y})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,l=t.images[a];let c=this.textureLoader;if(l.uri){const d=n.manager.getHandler(l.uri);d!==null&&(c=d)}return this.loadTextureImage(e,a,c)}loadTextureImage(e,t,n){const s=this,a=this.json,l=a.textures[e],c=a.images[t],d=(c.uri||c.bufferView)+":"+l.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=l.name||c.name||"",p.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(p.name=c.uri);const g=(a.samplers||{})[l.sampler]||{};return p.magFilter=Xv[g.magFilter]||ni,p.minFilter=Xv[g.minFilter]||gr,p.wrapS=jv[g.wrapS]||Wo,p.wrapT=jv[g.wrapT]||Wo,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==zn&&p.minFilter!==ni,s.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const n=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const l=s.images[e],c=self.URL||self.webkitURL;let d=l.uri||"",h=!1;if(l.bufferView!==void 0)d=n.getDependency("bufferView",l.bufferView).then(function(m){h=!0;const g=new Blob([m],{type:l.mimeType});return d=c.createObjectURL(g),d});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(d).then(function(m){return new Promise(function(g,v){let S=g;t.isImageBitmapLoader===!0&&(S=function(E){const y=new fn(E);y.needsUpdate=!0,g(y)}),t.load(sl.resolveURL(m,a.path),S,void 0,v)})}).then(function(m){return h===!0&&c.revokeObjectURL(d),Xi(m,l),m.userData.mimeType=l.mimeType||sC(l.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),m});return this.sourceCache[e]=p,p}assignTexture(e,t,n,s){const a=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),a.extensions[bt.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const d=a.associations.get(l);l=a.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(l,c),a.associations.set(l,d)}}return s!==void 0&&(l.colorSpace=s),e[t]=l,l})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,l=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let d=this.cache.get(c);d||(d=new vc,_i.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,d.sizeAttenuation=!1,this.cache.add(c,d)),n=d}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let d=this.cache.get(c);d||(d=new Jr,_i.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,this.cache.add(c,d)),n=d}if(s||a||l){let c="ClonedMaterial:"+n.uuid+":";s&&(c+="derivative-tangents:"),a&&(c+="vertex-colors:"),l&&(c+="flat-shading:");let d=this.cache.get(c);d||(d=n.clone(),a&&(d.vertexColors=!0),l&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(c,d),this.associations.set(d,this.associations.get(n))),n=d}e.material=n}getMaterialType(){return Lp}loadMaterial(e){const t=this,n=this.json,s=this.extensions,a=n.materials[e];let l;const c={},d=a.extensions||{},h=[];if(d[bt.KHR_MATERIALS_UNLIT]){const m=s[bt.KHR_MATERIALS_UNLIT];l=m.getMaterialType(),h.push(m.extendParams(c,a,t))}else{const m=a.pbrMetallicRoughness||{};if(c.color=new tt(1,1,1),c.opacity=1,Array.isArray(m.baseColorFactor)){const g=m.baseColorFactor;c.color.setRGB(g[0],g[1],g[2],Hn),c.opacity=g[3]}m.baseColorTexture!==void 0&&h.push(t.assignTexture(c,"map",m.baseColorTexture,hn)),c.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,c.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(c,"metalnessMap",m.metallicRoughnessTexture)),h.push(t.assignTexture(c,"roughnessMap",m.metallicRoughnessTexture))),l=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,c)})))}a.doubleSided===!0&&(c.side=fi);const p=a.alphaMode||Zh.OPAQUE;if(p===Zh.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,p===Zh.MASK&&(c.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&l!==gi&&(h.push(t.assignTexture(c,"normalMap",a.normalTexture)),c.normalScale=new rt(1,1),a.normalTexture.scale!==void 0)){const m=a.normalTexture.scale;c.normalScale.set(m,m)}if(a.occlusionTexture!==void 0&&l!==gi&&(h.push(t.assignTexture(c,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&l!==gi){const m=a.emissiveFactor;c.emissive=new tt().setRGB(m[0],m[1],m[2],Hn)}return a.emissiveTexture!==void 0&&l!==gi&&h.push(t.assignTexture(c,"emissiveMap",a.emissiveTexture,hn)),Promise.all(h).then(function(){const m=new l(c);return a.name&&(m.name=a.name),Xi(m,a),t.associations.set(m,{materials:e}),a.extensions&&Es(s,m,a),m})}createUniqueName(e){const t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function a(c){return n[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(d){return Yv(d,c,t)})}const l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c],p=rC(h),m=s[p];if(m)l.push(m.promise);else{let g;h.extensions&&h.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?g=a(h):g=Yv(new Ht,h,t),s[p]={primitive:h,promise:g},l.push(g)}}return Promise.all(l)}loadMesh(e){const t=this,n=this.json,s=this.extensions,a=n.meshes[e],l=a.primitives,c=[];for(let d=0,h=l.length;d<h;d++){const p=l[d].material===void 0?tC(this.cache):this.getDependency("material",l[d].material);c.push(p)}return c.push(t.loadGeometries(l)),Promise.all(c).then(function(d){const h=d.slice(0,d.length-1),p=d[d.length-1],m=[];for(let v=0,S=p.length;v<S;v++){const E=p[v],y=l[v];let x;const b=h[v];if(y.mode===hi.TRIANGLES||y.mode===hi.TRIANGLE_STRIP||y.mode===hi.TRIANGLE_FAN||y.mode===void 0)x=a.isSkinnedMesh===!0?new hx(E,b):new rn(E,b),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),y.mode===hi.TRIANGLE_STRIP?x.geometry=Gv(x.geometry,Z0):y.mode===hi.TRIANGLE_FAN&&(x.geometry=Gv(x.geometry,Jf));else if(y.mode===hi.LINES)x=new Qo(E,b);else if(y.mode===hi.LINE_STRIP)x=new wc(E,b);else if(y.mode===hi.LINE_LOOP)x=new aT(E,b);else if(y.mode===hi.POINTS)x=new ip(E,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(x.geometry.morphAttributes).length>0&&iC(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),Xi(x,a),y.extensions&&Es(s,x,y),t.assignFinalMaterial(x),m.push(x)}for(let v=0,S=m.length;v<S;v++)t.associations.set(m[v],{meshes:e,primitives:v});if(m.length===1)return a.extensions&&Es(s,m[0],a),m[0];const g=new Mn;a.extensions&&Es(s,g,a),t.associations.set(g,{meshes:e});for(let v=0,S=m.length;v<S;v++)g.add(m[v]);return g})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vn(yt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Np(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,a=t.joints.length;s<a;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const a=s.pop(),l=s,c=[],d=[];for(let h=0,p=l.length;h<p;h++){const m=l[h];if(m){c.push(m);const g=new ft;a!==null&&g.fromArray(a.array,h*16),d.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Zo(c,d)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,l=[],c=[],d=[],h=[],p=[];for(let m=0,g=s.channels.length;m<g;m++){const v=s.channels[m],S=s.samplers[v.sampler],E=v.target,y=E.node,x=s.parameters!==void 0?s.parameters[S.input]:S.input,b=s.parameters!==void 0?s.parameters[S.output]:S.output;E.node!==void 0&&(l.push(this.getDependency("node",y)),c.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",b)),h.push(S),p.push(E))}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(d),Promise.all(h),Promise.all(p)]).then(function(m){const g=m[0],v=m[1],S=m[2],E=m[3],y=m[4],x=[];for(let I=0,T=g.length;I<T;I++){const N=g[I],L=v[I],D=S[I],z=E[I],C=y[I];if(N===void 0)continue;N.updateMatrix&&N.updateMatrix();const R=n._createAnimationTracks(N,L,D,z,C);if(R)for(let B=0;B<R.length;B++)x.push(R[B])}const b=new _T(a,void 0,x);return Xi(b,s),b})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){const l=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&l.traverse(function(c){if(c.isMesh)for(let d=0,h=s.weights.length;d<h;d++)c.morphTargetInfluences[d]=s.weights[d]}),l})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],a=n._loadNodeShallow(e),l=[],c=s.children||[];for(let h=0,p=c.length;h<p;h++)l.push(n.getDependency("node",c[h]));const d=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(l),d]).then(function(h){const p=h[0],m=h[1],g=h[2];g!==null&&p.traverse(function(v){v.isSkinnedMesh&&v.bind(g,oC)});for(let v=0,S=m.length;v<S;v++)p.add(m[v]);return p})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],l=a.name?s.createUniqueName(a.name):"",c=[],d=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&c.push(d),a.camera!==void 0&&c.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)}),this.nodeCache[e]=Promise.all(c).then(function(h){let p;if(a.isBone===!0?p=new fx:h.length>1?p=new Mn:h.length===1?p=h[0]:p=new zt,p!==h[0])for(let m=0,g=h.length;m<g;m++)p.add(h[m]);if(a.name&&(p.userData.name=a.name,p.name=l),Xi(p,a),a.extensions&&Es(n,p,a),a.matrix!==void 0){const m=new ft;m.fromArray(a.matrix),p.applyMatrix4(m)}else a.translation!==void 0&&p.position.fromArray(a.translation),a.rotation!==void 0&&p.quaternion.fromArray(a.rotation),a.scale!==void 0&&p.scale.fromArray(a.scale);if(!s.associations.has(p))s.associations.set(p,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){const m=s.associations.get(p);s.associations.set(p,{...m})}return s.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,a=new Mn;n.name&&(a.name=s.createUniqueName(n.name)),Xi(a,n),n.extensions&&Es(t,a,n);const l=n.nodes||[],c=[];for(let d=0,h=l.length;d<h;d++)c.push(s.getDependency("node",l[d]));return Promise.all(c).then(function(d){for(let p=0,m=d.length;p<m;p++)a.add(d[p]);const h=p=>{const m=new Map;for(const[g,v]of s.associations)(g instanceof _i||g instanceof fn)&&m.set(g,v);return p.traverse(g=>{const v=s.associations.get(g);v!=null&&m.set(g,v)}),m};return s.associations=h(a),a})}_createAnimationTracks(e,t,n,s,a){const l=[],c=e.name?e.name:e.uuid,d=[];jr[a.path]===jr.weights?e.traverse(function(g){g.morphTargetInfluences&&d.push(g.name?g.name:g.uuid)}):d.push(c);let h;switch(jr[a.path]){case jr.weights:h=Yo;break;case jr.rotation:h=qo;break;case jr.translation:case jr.scale:h=$o;break;default:switch(n.itemSize){case 1:h=Yo;break;case 2:case 3:default:h=$o;break}break}const p=s.interpolation!==void 0?eC[s.interpolation]:dl,m=this._getArrayFromAccessor(n);for(let g=0,v=d.length;g<v;g++){const S=new h(d[g]+"."+jr[a.path],t.array,m,p);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),l.push(S)}return l}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=lp(t.constructor),s=new Float32Array(t.length);for(let a=0,l=t.length;a<l;a++)s[a]=t[a]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof qo?Jb:Rx;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lC(i,e,t){const n=e.attributes,s=new yr;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],d=c.min,h=c.max;if(d!==void 0&&h!==void 0){if(s.set(new U(d[0],d[1],d[2]),new U(h[0],h[1],h[2])),c.normalized){const p=lp(Vo[c.componentType]);s.min.multiplyScalar(p),s.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const c=new U,d=new U;for(let h=0,p=a.length;h<p;h++){const m=a[h];if(m.POSITION!==void 0){const g=t.json.accessors[m.POSITION],v=g.min,S=g.max;if(v!==void 0&&S!==void 0){if(d.setX(Math.max(Math.abs(v[0]),Math.abs(S[0]))),d.setY(Math.max(Math.abs(v[1]),Math.abs(S[1]))),d.setZ(Math.max(Math.abs(v[2]),Math.abs(S[2]))),g.normalized){const E=lp(Vo[g.componentType]);d.multiplyScalar(E)}c.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}i.boundingBox=s;const l=new Ki;s.getCenter(l.center),l.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=l}function Yv(i,e,t){const n=e.attributes,s=[];function a(l,c){return t.getDependency("accessor",l).then(function(d){i.setAttribute(c,d)})}for(const l in n){const c=ap[l]||l.toLowerCase();c in i.attributes||s.push(a(n[l],c))}if(e.indices!==void 0&&!i.index){const l=t.getDependency("accessor",e.indices).then(function(c){i.setIndex(c)});s.push(l)}return Lt.workingColorSpace!==Hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Lt.workingColorSpace}" not supported.`),Xi(i,e),lC(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nC(i,e.targets,t):i})}/*!
 * @pixiv/three-vrm v3.4.4
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var Qu=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Ut=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),qv=class extends zt{constructor(i){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${i}`,this.expressionName=i,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(i){this._binds.push(i)}deleteBind(i){const e=this._binds.indexOf(i);e>=0&&this._binds.splice(e,1)}applyWeight(i){var e;let t=this.outputWeight;t*=(e=i?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(i=>i.clearAppliedWeight())}};function bx(i,e,t){var n,s;const a=i.parser.json,l=(n=a.nodes)==null?void 0:n[e];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const c=l.mesh;if(c==null)return null;const d=(s=a.meshes)==null?void 0:s[c];if(d==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${c}] of glTF but the mesh doesn't exist`),null;const h=d.primitives.length,p=[];return t.traverse(m=>{p.length<h&&m.isMesh&&p.push(m)}),p}function $v(i,e){return Ut(this,null,function*(){const t=yield i.parser.getDependency("node",e);return bx(i,e,t)})}function Kv(i){return Ut(this,null,function*(){const e=yield i.parser.getDependencies("node"),t=new Map;return e.forEach((n,s)=>{const a=bx(i,s,n);a!=null&&t.set(s,a)}),t})}var up={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Cx(i){return Math.max(Math.min(i,1),0)}var Zv=class Px{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(up));return Object.entries(this._expressionMap).forEach(([n,s])=>{t.has(n)&&(e[n]=s)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(up));return Object.entries(this._expressionMap).forEach(([n,s])=>{t.has(n)||(e[n]=s)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new Px().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const n=this.getExpression(e);return(t=n?.weight)!=null?t:null}setValue(e,t){const n=this.getExpression(e);n&&(n.weight=Cx(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1;const s=t.expressionName;this.blinkExpressionNames.indexOf(s)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(s)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(s)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(s=>{e-=s.overrideBlinkAmount,t-=s.overrideLookAtAmount,n-=s.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},$a={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",RimColor:"rimColor",OutlineColor:"outlineColor"},uC={_Color:$a.Color,_EmissionColor:$a.EmissionColor,_ShadeColor:$a.ShadeColor,_RimColor:$a.RimColor,_OutlineColor:$a.OutlineColor},cC=new tt,Lx=class Ix{constructor({material:e,type:t,targetValue:n,targetAlpha:s}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=s??1;const a=this._initColorBindState(),l=this._initAlphaBindState();this._state={color:a,alpha:l}}applyWeight(e){const{color:t,alpha:n}=this._state;if(t!=null){const{propertyName:s,deltaValue:a}=t,l=this.material[s];l?.add(cC.copy(a).multiplyScalar(e))}if(n!=null){const{propertyName:s,deltaValue:a}=n;this.material[s]!=null&&(this.material[s]+=a*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:n,initialValue:s}=e,a=this.material[n];a?.copy(s)}if(t!=null){const{propertyName:n,initialValue:s}=t;this.material[n]!=null&&(this.material[n]=s)}}_initColorBindState(){var e,t,n;const{material:s,type:a,targetValue:l}=this,c=this._getPropertyNameMap(),d=(t=(e=c?.[a])==null?void 0:e[0])!=null?t:null;if(d==null)return console.warn(`Tried to add a material color bind to the material ${(n=s.name)!=null?n:"(no name)"}, the type ${a} but the material or the type is not supported.`),null;const p=s[d].clone(),m=new tt(l.r-p.r,l.g-p.g,l.b-p.b);return{propertyName:d,initialValue:p,deltaValue:m}}_initAlphaBindState(){var e,t,n;const{material:s,type:a,targetAlpha:l}=this,c=this._getPropertyNameMap(),d=(t=(e=c?.[a])==null?void 0:e[1])!=null?t:null;if(d==null&&l!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=s.name)!=null?n:"(no name)"}, the type ${a} but the material or the type does not support alpha.`),null;if(d==null)return null;const h=s[d],p=l-h;return{propertyName:d,initialValue:h,deltaValue:p}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(Ix._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};Lx._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Qv=Lx,xc=class{constructor({primitives:i,index:e,weight:t}){this.primitives=i,this.index=e,this.weight=t}applyWeight(i){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*i)})}clearAppliedWeight(){this.primitives.forEach(i=>{var e;((e=i.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(i.morphTargetInfluences[this.index]=0)})}},Jv=new rt,Nx=class Dx{constructor({material:e,scale:t,offset:n}){var s,a;this.material=e,this.scale=t,this.offset=n;const l=(s=Object.entries(Dx._propertyNamesMap).find(([c])=>e[c]===!0))==null?void 0:s[1];l==null?(console.warn(`Tried to add a texture transform bind to the material ${(a=e.name)!=null?a:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],l.forEach(c=>{var d;const h=(d=e[c])==null?void 0:d.clone();if(!h)return null;e[c]=h;const p=h.offset.clone(),m=h.repeat.clone(),g=n.clone().sub(p),v=t.clone().sub(m);this._properties.push({name:c,initialOffset:p,deltaOffset:g,initialScale:m,deltaScale:v})}))}applyWeight(e){this._properties.forEach(t=>{const n=this.material[t.name];n!==void 0&&(n.offset.add(Jv.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(Jv.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};Nx._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var e0=Nx,dC=new Set(["1.0","1.0-beta"]),Ux=class Ox{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return Ut(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return Ut(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const n=yield this._v0Import(e);return n||null})}_v1Import(e){return Ut(this,null,function*(){var t,n;const s=this.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const l=(n=s.extensions)==null?void 0:n.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!dC.has(c))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const d=l.expressions;if(!d)return null;const h=new Set(Object.values(up)),p=new Map;d.preset!=null&&Object.entries(d.preset).forEach(([g,v])=>{if(v!=null){if(!h.has(g)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${g}" detected. Ignoring the expression`);return}p.set(g,v)}}),d.custom!=null&&Object.entries(d.custom).forEach(([g,v])=>{if(h.has(g)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${g}". Ignoring the expression`);return}p.set(g,v)});const m=new Zv;return yield Promise.all(Array.from(p.entries()).map(g=>Ut(this,[g],function*([v,S]){var E,y,x,b,I,T,N;const L=new qv(v);if(e.scene.add(L),L.isBinary=(E=S.isBinary)!=null?E:!1,L.overrideBlink=(y=S.overrideBlink)!=null?y:"none",L.overrideLookAt=(x=S.overrideLookAt)!=null?x:"none",L.overrideMouth=(b=S.overrideMouth)!=null?b:"none",(I=S.morphTargetBinds)==null||I.forEach(D=>Ut(this,null,function*(){var z;if(D.node===void 0||D.index===void 0)return;const C=yield $v(e,D.node),R=D.index;if(!C.every(B=>Array.isArray(B.morphTargetInfluences)&&R<B.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${S.name} attempts to index morph #${R} but not found.`);return}L.addBind(new xc({primitives:C,index:R,weight:(z=D.weight)!=null?z:1}))})),S.materialColorBinds||S.textureTransformBinds){const D=[];e.scene.traverse(z=>{const C=z.material;C&&(Array.isArray(C)?D.push(...C):D.push(C))}),(T=S.materialColorBinds)==null||T.forEach(z=>Ut(this,null,function*(){D.filter(R=>{var B;const Y=(B=this.parser.associations.get(R))==null?void 0:B.materials;return z.material===Y}).forEach(R=>{L.addBind(new Qv({material:R,type:z.type,targetValue:new tt().fromArray(z.targetValue),targetAlpha:z.targetValue[3]}))})})),(N=S.textureTransformBinds)==null||N.forEach(z=>Ut(this,null,function*(){D.filter(R=>{var B;const Y=(B=this.parser.associations.get(R))==null?void 0:B.materials;return z.material===Y}).forEach(R=>{var B,Y;L.addBind(new e0({material:R,offset:new rt().fromArray((B=z.offset)!=null?B:[0,0]),scale:new rt().fromArray((Y=z.scale)!=null?Y:[1,1])}))})}))}m.registerExpression(L)}))),m})}_v0Import(e){return Ut(this,null,function*(){var t;const n=this.parser.json,s=(t=n.extensions)==null?void 0:t.VRM;if(!s)return null;const a=s.blendShapeMaster;if(!a)return null;const l=new Zv,c=a.blendShapeGroups;if(!c)return l;const d=new Set;return yield Promise.all(c.map(h=>Ut(this,null,function*(){var p;const m=h.presetName,g=m!=null&&Ox.v0v1PresetNameMap[m]||null,v=g??h.name;if(v==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(d.has(v)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${m} has duplicated entries. Ignoring the expression`);return}d.add(v);const S=new qv(v);e.scene.add(S),S.isBinary=(p=h.isBinary)!=null?p:!1,h.binds&&h.binds.forEach(y=>Ut(this,null,function*(){var x;if(y.mesh===void 0||y.index===void 0)return;const b=[];(x=n.nodes)==null||x.forEach((T,N)=>{T.mesh===y.mesh&&b.push(N)});const I=y.index;yield Promise.all(b.map(T=>Ut(this,null,function*(){var N;const L=yield $v(e,T);if(!L.every(D=>Array.isArray(D.morphTargetInfluences)&&I<D.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${h.name} attempts to index ${I}th morph but not found.`);return}S.addBind(new xc({primitives:L,index:I,weight:.01*((N=y.weight)!=null?N:100)}))})))}));const E=h.materialValues;E&&E.length!==0&&E.forEach(y=>{if(y.materialName===void 0||y.propertyName===void 0||y.targetValue===void 0)return;const x=[];e.scene.traverse(I=>{if(I.material){const T=I.material;Array.isArray(T)?x.push(...T.filter(N=>(N.name===y.materialName||N.name===y.materialName+" (Outline)")&&x.indexOf(N)===-1)):T.name===y.materialName&&x.indexOf(T)===-1&&x.push(T)}});const b=y.propertyName;x.forEach(I=>{if(b==="_MainTex_ST"){const N=new rt(y.targetValue[0],y.targetValue[1]),L=new rt(y.targetValue[2],y.targetValue[3]);L.y=1-L.y-N.y,S.addBind(new e0({material:I,scale:N,offset:L}));return}const T=uC[b];if(T){S.addBind(new Qv({material:I,type:T,targetValue:new tt().fromArray(y.targetValue),targetAlpha:y.targetValue[3]}));return}console.warn(b+" is not supported")})}),l.registerExpression(S)}))),l})}};Ux.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var hC=Ux,kp=class Do{constructor(e,t){this._firstPersonOnlyLayer=Do.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Do.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Do(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Do.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Do.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(s=>{n.type==="firstPersonOnly"?(s.layers.set(this._firstPersonOnlyLayer),s.traverse(a=>a.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(s.layers.set(this._thirdPersonOnlyLayer),s.traverse(a=>a.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(s)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,s){let a=0;if(t!=null&&t.length>0)for(let l=0;l<e.length;l+=3){const c=e[l],d=e[l+1],h=e[l+2],p=t[c],m=n[c];if(p[0]>0&&s.includes(m[0])||p[1]>0&&s.includes(m[1])||p[2]>0&&s.includes(m[2])||p[3]>0&&s.includes(m[3]))continue;const g=t[d],v=n[d];if(g[0]>0&&s.includes(v[0])||g[1]>0&&s.includes(v[1])||g[2]>0&&s.includes(v[2])||g[3]>0&&s.includes(v[3]))continue;const S=t[h],E=n[h];S[0]>0&&s.includes(E[0])||S[1]>0&&s.includes(E[1])||S[2]>0&&s.includes(E[2])||S[3]>0&&s.includes(E[3])||(e[a++]=c,e[a++]=d,e[a++]=h)}return a}_createErasedMesh(e,t){const n=new hx(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);const s=n.geometry,a=s.getAttribute("skinIndex"),l=a instanceof _v?[]:a.array,c=[];for(let E=0;E<l.length;E+=4)c.push([l[E],l[E+1],l[E+2],l[E+3]]);const d=s.getAttribute("skinWeight"),h=d instanceof _v?[]:d.array,p=[];for(let E=0;E<h.length;E+=4)p.push([h[E],h[E+1],h[E+2],h[E+3]]);const m=s.getIndex();if(!m)throw new Error("The geometry doesn't have an index buffer");const g=Array.from(m.array),v=this._excludeTriangles(g,p,c,t),S=[];for(let E=0;E<v;E++)S[E]=g[E];return s.setIndex(S),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new Zo(e.skeleton.bones,e.skeleton.boneInverses),new ft),n}_createHeadlessModelForSkinnedMesh(e,t){const n=[];if(t.skeleton.bones.forEach((a,l)=>{this._isEraseTarget(a)&&n.push(l)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const s=this._createErasedMesh(t,n);e.add(s)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new Mn;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{const s=n;this._createHeadlessModelForSkinnedMesh(t,s)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};kp.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;kp.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var t0=kp,fC=new Set(["1.0","1.0-beta"]),pC=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(i){this.parser=i}afterRoot(i){return Ut(this,null,function*(){const e=i.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");i.userData.vrmFirstPerson=yield this._import(i,e)}})}_import(i,e){return Ut(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(i,e);if(t)return t;const n=yield this._v0Import(i,e);return n||null})}_v1Import(i,e){return Ut(this,null,function*(){var t,n;const s=this.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const l=(n=s.extensions)==null?void 0:n.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!fC.has(c))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const d=l.firstPerson,h=[],p=yield Kv(i);return Array.from(p.entries()).forEach(([m,g])=>{var v,S;const E=(v=d?.meshAnnotations)==null?void 0:v.find(y=>y.node===m);h.push({meshes:g,type:(S=E?.type)!=null?S:"auto"})}),new t0(e,h)})}_v0Import(i,e){return Ut(this,null,function*(){var t;const n=this.parser.json,s=(t=n.extensions)==null?void 0:t.VRM;if(!s)return null;const a=s.firstPerson;if(!a)return null;const l=[],c=yield Kv(i);return Array.from(c.entries()).forEach(([d,h])=>{const p=n.nodes[d],m=a.meshAnnotations?a.meshAnnotations.find(g=>g.mesh===p.mesh):void 0;l.push({meshes:h,type:this._convertV0FlagToV1Type(m?.firstPersonFlag)})}),new t0(e,l)})}_convertV0FlagToV1Type(i){return i==="FirstPersonOnly"?"firstPersonOnly":i==="ThirdPersonOnly"?"thirdPersonOnly":i==="Both"?"both":"auto"}},n0=new U,i0=new U,mC=new Mt,r0=class extends Mn{constructor(i){super(),this.vrmHumanoid=i,this._boneAxesMap=new Map,Object.values(i.humanBones).forEach(e=>{const t=new HT(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(i=>{i.geometry.dispose(),i.material.dispose()})}updateMatrixWorld(i){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(n0,mC,i0);const n=n0.set(.1,.1,.1).divide(i0);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(i)}},Jh=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],gC={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function Fx(i){return i.invert?i.invert():i.inverse(),i}var Ts=new U,ws=new Mt,cp=class{constructor(i){this.humanBones=i,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const i={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);n&&(Ts.copy(n.position),ws.copy(n.quaternion),i[t]={position:Ts.toArray(),rotation:ws.toArray()})}),i}getPose(){const i={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);if(!n)return;Ts.set(0,0,0),ws.identity();const s=this.restPose[t];s?.position&&Ts.fromArray(s.position).negate(),s?.rotation&&Fx(ws.fromArray(s.rotation)),Ts.add(n.position),ws.premultiply(n.quaternion),i[t]={position:Ts.toArray(),rotation:ws.toArray()}}),i}setPose(i){Object.entries(i).forEach(([e,t])=>{const n=e,s=this.getBoneNode(n);if(!s)return;const a=this.restPose[n];a&&(t?.position&&(s.position.fromArray(t.position),a.position&&s.position.add(Ts.fromArray(a.position))),t?.rotation&&(s.quaternion.fromArray(t.rotation),a.rotation&&s.quaternion.multiply(ws.fromArray(a.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([i,e])=>{const t=this.getBoneNode(i);t&&(e?.position&&t.position.fromArray(e.position),e?.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(i){var e;return(e=this.humanBones[i])!=null?e:void 0}getBoneNode(i){var e,t;return(t=(e=this.humanBones[i])==null?void 0:e.node)!=null?t:null}},ef=new U,_C=new Mt,vC=new U,s0=class kx extends cp{static _setupTransforms(e){const t=new zt;t.name="VRMHumanoidRig";const n={},s={},a={};Jh.forEach(c=>{var d;const h=e.getBoneNode(c);if(h){const p=new U,m=new Mt;h.updateWorldMatrix(!0,!1),h.matrixWorld.decompose(p,m,ef),n[c]=p,s[c]=h.quaternion.clone();const g=new Mt;(d=h.parent)==null||d.matrixWorld.decompose(ef,g,ef),a[c]=g}});const l={};return Jh.forEach(c=>{var d;const h=e.getBoneNode(c);if(h){const p=n[c];let m=c,g;for(;g==null&&(m=gC[m],m!=null);)g=n[m];const v=new zt;v.name="Normalized_"+h.name,(m?(d=l[m])==null?void 0:d.node:t).add(v),v.position.copy(p),g&&v.position.sub(g),l[c]={node:v}}}),{rigBones:l,root:t,parentWorldRotations:a,boneRotations:s}}constructor(e){const{rigBones:t,root:n,parentWorldRotations:s,boneRotations:a}=kx._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=s,this._boneRotations=a}update(){Jh.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const n=this.getBoneNode(e),s=this._parentWorldRotations[e],a=_C.copy(s).invert(),l=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(s).premultiply(a).multiply(l),e==="hips"){const c=n.getWorldPosition(vC);t.parent.updateWorldMatrix(!0,!1);const d=t.parent.matrixWorld,h=c.applyMatrix4(d.invert());t.position.copy(h)}}})}},o0=class Bx{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new cp(e),this._normalizedHumanBones=new s0(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new cp(e.humanBones),this._normalizedHumanBones=new s0(this._rawHumanBones),this}clone(){return new Bx(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},xC={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},yC=new Set(["1.0","1.0-beta"]),a0={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},MC=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(i){return Ut(this,null,function*(){i.userData.vrmHumanoid=yield this._import(i)})}_import(i){return Ut(this,null,function*(){const e=yield this._v1Import(i);if(e)return e;const t=yield this._v0Import(i);return t||null})}_v1Import(i){return Ut(this,null,function*(){var e,t;const n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const a=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!a)return null;const l=a.specVersion;if(!yC.has(l))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${l}"`),null;const c=a.humanoid;if(!c)return null;const d=c.humanBones.leftThumbIntermediate!=null||c.humanBones.rightThumbIntermediate!=null,h={};c.humanBones!=null&&(yield Promise.all(Object.entries(c.humanBones).map(m=>Ut(this,[m],function*([g,v]){let S=g;const E=v.node;if(d){const x=a0[S];x!=null&&(S=x)}const y=yield this.parser.getDependency("node",E);if(y==null){console.warn(`A glTF node bound to the humanoid bone ${S} (index = ${E}) does not exist`);return}h[S]={node:y}}))));const p=new o0(this._ensureRequiredBonesExist(h),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(p.normalizedHumanBonesRoot),this.helperRoot){const m=new r0(p);this.helperRoot.add(m),m.renderOrder=this.helperRoot.renderOrder}return p})}_v0Import(i){return Ut(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const s=n.humanoid;if(!s)return null;const a={};s.humanBones!=null&&(yield Promise.all(s.humanBones.map(c=>Ut(this,null,function*(){const d=c.bone,h=c.node;if(d==null||h==null)return;const p=yield this.parser.getDependency("node",h);if(p==null){console.warn(`A glTF node bound to the humanoid bone ${d} (index = ${h}) does not exist`);return}const m=a0[d],g=m??d;if(a[g]!=null){console.warn(`Multiple bone entries for ${g} detected (index = ${h}), ignoring duplicated entries.`);return}a[g]={node:p}}))));const l=new o0(this._ensureRequiredBonesExist(a),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(l.normalizedHumanBonesRoot),this.helperRoot){const c=new r0(l);this.helperRoot.add(c),c.renderOrder=this.helperRoot.renderOrder}return l})}_ensureRequiredBonesExist(i){const e=Object.values(xC).filter(t=>i[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return i}},l0=class extends Ht{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new wt(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new wt(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,i=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let i=0;i<64;i++){const e=i/63*this._currentTheta;this._attrPos.setXYZ(i+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<63;i++)this._attrIndex.setXYZ(i*3,0,i+1,i+2);this._attrIndex.needsUpdate=!0}},SC=class extends Ht{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new U,this._currentTail=new U,this._attrPos=new wt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new wt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Ju=new Mt,u0=new Mt,Ka=new U,c0=new U,d0=Math.sqrt(2)/2,EC=new Mt(0,0,-d0,d0),TC=new U(0,1,0),wC=class extends Mn{constructor(i){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=i;{const e=new l0;e.radius=.5;const t=new gi({color:65280,transparent:!0,opacity:.5,side:fi,depthTest:!1,depthWrite:!1});this._meshPitch=new rn(e,t),this.add(this._meshPitch)}{const e=new l0;e.radius=.5;const t=new gi({color:16711680,transparent:!0,opacity:.5,side:fi,depthTest:!1,depthWrite:!1});this._meshYaw=new rn(e,t),this.add(this._meshYaw)}{const e=new SC;e.radius=.1;const t=new Jr({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Qo(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(i){const e=yt.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=yt.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Ka),this.vrmLookAt.getLookAtWorldQuaternion(Ju),Ju.multiply(this.vrmLookAt.getFaceFrontQuaternion(u0)),this._meshYaw.position.copy(Ka),this._meshYaw.quaternion.copy(Ju),this._meshPitch.position.copy(Ka),this._meshPitch.quaternion.copy(Ju),this._meshPitch.quaternion.multiply(u0.setFromAxisAngle(TC,e)),this._meshPitch.quaternion.multiply(EC);const{target:n,autoUpdate:s}=this.vrmLookAt;n!=null&&s&&(n.getWorldPosition(c0).sub(Ka),this._lineTarget.geometry.tail.copy(c0),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Ka)),super.updateMatrixWorld(i)}},AC=new U,RC=new U;function dp(i,e){return i.matrixWorld.decompose(AC,e,RC),e}function uc(i){return[Math.atan2(-i.z,i.x),Math.atan2(i.y,Math.sqrt(i.x*i.x+i.z*i.z))]}function h0(i){const e=Math.round(i/2/Math.PI);return i-2*Math.PI*e}var f0=new U(0,0,1),bC=new U,CC=new U,PC=new U,LC=new Mt,tf=new Mt,p0=new Mt,IC=new Mt,nf=new ii,Vx=class zx{constructor(e,t){this.offsetFromHeadBone=new U,this.autoUpdate=!0,this.faceFront=new U(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new Mt)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new ii)}getEuler(e){return e.set(yt.DEG2RAD*this._pitch,yt.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new zx(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return dp(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(f0)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,n]=uc(this.faceFront);return nf.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(nf).premultiply(IC.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(tf),this.getFaceFrontQuaternion(p0),e.copy(f0).applyQuaternion(tf).applyQuaternion(p0).applyEuler(this.getEuler(nf))}lookAt(e){const t=LC.copy(this._restHeadWorldQuaternion).multiply(Fx(this.getLookAtWorldQuaternion(tf))),n=this.getLookAtWorldPosition(CC),s=PC.copy(e).sub(n).applyQuaternion(t).normalize(),[a,l]=uc(this.faceFront),[c,d]=uc(s),h=h0(c-a),p=h0(l-d);this._yaw=yt.RAD2DEG*h,this._pitch=yt.RAD2DEG*p,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(bC)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Vx.EULER_ORDER="YXZ";var NC=Vx,DC=new U(0,0,1),Hi=new Mt,Po=new Mt,di=new ii(0,0,0,"YXZ"),cc=class{constructor(i,e,t,n,s){this.humanoid=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=s,this.faceFront=new U(0,0,1),this._restQuatLeftEye=new Mt,this._restQuatRightEye=new Mt,this._restLeftEyeParentWorldQuat=new Mt,this._restRightEyeParentWorldQuat=new Mt;const a=this.humanoid.getRawBoneNode("leftEye"),l=this.humanoid.getRawBoneNode("rightEye");a&&(this._restQuatLeftEye.copy(a.quaternion),dp(a.parent,this._restLeftEyeParentWorldQuat)),l&&(this._restQuatRightEye.copy(l.quaternion),dp(l.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(i,e){const t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),s=this.humanoid.getNormalizedBoneNode("leftEye"),a=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?di.x=-yt.DEG2RAD*this.rangeMapVerticalDown.map(-e):di.x=yt.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?di.y=-yt.DEG2RAD*this.rangeMapHorizontalInner.map(-i):di.y=yt.DEG2RAD*this.rangeMapHorizontalOuter.map(i),Hi.setFromEuler(di),this._getWorldFaceFrontQuat(Po),s.quaternion.copy(Po).multiply(Hi).multiply(Po.invert()),Hi.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(s.quaternion).multiply(Hi).premultiply(Hi.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?di.x=-yt.DEG2RAD*this.rangeMapVerticalDown.map(-e):di.x=yt.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?di.y=-yt.DEG2RAD*this.rangeMapHorizontalOuter.map(-i):di.y=yt.DEG2RAD*this.rangeMapHorizontalInner.map(i),Hi.setFromEuler(di),this._getWorldFaceFrontQuat(Po),a.quaternion.copy(Po).multiply(Hi).multiply(Po.invert()),Hi.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(a.quaternion).multiply(Hi).premultiply(Hi.invert()).multiply(this._restQuatRightEye))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=yt.RAD2DEG*i.y,t=yt.RAD2DEG*i.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(i){if(this.faceFront.distanceToSquared(DC)<.01)return i.identity();const[e,t]=uc(this.faceFront);return di.set(0,.5*Math.PI+e,t,"YZX"),i.setFromEuler(di)}};cc.type="bone";var hp=class{constructor(i,e,t,n,s){this.expressions=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=s}applyYawPitch(i,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),i<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-i))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(i)))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=yt.RAD2DEG*i.y,t=yt.RAD2DEG*i.x;this.applyYawPitch(e,t)}};hp.type="expression";var m0=class{constructor(i,e){this.inputMaxValue=i,this.outputScale=e}map(i){return this.outputScale*Cx(i/this.inputMaxValue)}},UC=new Set(["1.0","1.0-beta"]),ec=.01,OC=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot}afterRoot(i){return Ut(this,null,function*(){const e=i.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=i.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");i.userData.vrmLookAt=yield this._import(i,e,t)}})}_import(i,e,t){return Ut(this,null,function*(){if(e==null||t==null)return null;const n=yield this._v1Import(i,e,t);if(n)return n;const s=yield this._v0Import(i,e,t);return s||null})}_v1Import(i,e,t){return Ut(this,null,function*(){var n,s,a;const l=this.parser.json;if(!(((n=l.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;const d=(s=l.extensions)==null?void 0:s.VRMC_vrm;if(!d)return null;const h=d.specVersion;if(!UC.has(h))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${h}"`),null;const p=d.lookAt;if(!p)return null;const m=p.type==="expression"?1:10,g=this._v1ImportRangeMap(p.rangeMapHorizontalInner,m),v=this._v1ImportRangeMap(p.rangeMapHorizontalOuter,m),S=this._v1ImportRangeMap(p.rangeMapVerticalDown,m),E=this._v1ImportRangeMap(p.rangeMapVerticalUp,m);let y;p.type==="expression"?y=new hp(t,g,v,S,E):y=new cc(e,g,v,S,E);const x=this._importLookAt(e,y);return x.offsetFromHeadBone.fromArray((a=p.offsetFromHeadBone)!=null?a:[0,.06,0]),x})}_v1ImportRangeMap(i,e){var t,n;let s=(t=i?.inputMaxValue)!=null?t:90;const a=(n=i?.outputScale)!=null?n:e;return s<ec&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),s=ec),new m0(s,a)}_v0Import(i,e,t){return Ut(this,null,function*(){var n,s,a,l;const d=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!d)return null;const h=d.firstPerson;if(!h)return null;const p=h.lookAtTypeName==="BlendShape"?1:10,m=this._v0ImportDegreeMap(h.lookAtHorizontalInner,p),g=this._v0ImportDegreeMap(h.lookAtHorizontalOuter,p),v=this._v0ImportDegreeMap(h.lookAtVerticalDown,p),S=this._v0ImportDegreeMap(h.lookAtVerticalUp,p);let E;h.lookAtTypeName==="BlendShape"?E=new hp(t,m,g,v,S):E=new cc(e,m,g,v,S);const y=this._importLookAt(e,E);return h.firstPersonBoneOffset?y.offsetFromHeadBone.set((s=h.firstPersonBoneOffset.x)!=null?s:0,(a=h.firstPersonBoneOffset.y)!=null?a:.06,-((l=h.firstPersonBoneOffset.z)!=null?l:0)):y.offsetFromHeadBone.set(0,.06,0),y.faceFront.set(0,0,-1),E instanceof cc&&E.faceFront.set(0,0,-1),y})}_v0ImportDegreeMap(i,e){var t,n;const s=i?.curve;JSON.stringify(s)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let a=(t=i?.xRange)!=null?t:90;const l=(n=i?.yRange)!=null?n:e;return a<ec&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),a=ec),new m0(a,l)}_importLookAt(i,e){const t=new NC(i,e);if(this.helperRoot){const n=new wC(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function FC(i,e){return typeof i!="string"||i===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(i)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(i)||/^data:.*,.*$/i.test(i)||/^blob:.*$/i.test(i)?i:e+i)}var kC=new Set(["1.0","1.0-beta"]),BC=class{get name(){return"VRMMetaLoaderPlugin"}constructor(i,e){var t,n,s;this.parser=i,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e?.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(s=e?.acceptV0Meta)!=null?s:!0}afterRoot(i){return Ut(this,null,function*(){i.userData.vrmMeta=yield this._import(i)})}_import(i){return Ut(this,null,function*(){const e=yield this._v1Import(i);if(e!=null)return e;const t=yield this._v0Import(i);return t??null})}_v1Import(i){return Ut(this,null,function*(){var e,t,n;const s=this.parser.json;if(!(((e=s.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const l=(t=s.extensions)==null?void 0:t.VRMC_vrm;if(l==null)return null;const c=l.specVersion;if(!kC.has(c))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const d=l.meta;if(!d)return null;const h=d.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(h))throw new Error(`VRMMetaLoaderPlugin: The license url "${h}" is not accepted`);let m;return this.needThumbnailImage&&d.thumbnailImage!=null&&(m=(n=yield this._extractGLTFImage(d.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:d.name,version:d.version,authors:d.authors,copyrightInformation:d.copyrightInformation,contactInformation:d.contactInformation,references:d.references,thirdPartyLicenses:d.thirdPartyLicenses,thumbnailImage:m,licenseUrl:d.licenseUrl,avatarPermission:d.avatarPermission,allowExcessivelyViolentUsage:d.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:d.allowExcessivelySexualUsage,commercialUsage:d.commercialUsage,allowPoliticalOrReligiousUsage:d.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:d.allowAntisocialOrHateUsage,creditNotation:d.creditNotation,allowRedistribution:d.allowRedistribution,modification:d.modification,otherLicenseUrl:d.otherLicenseUrl}})}_v0Import(i){return Ut(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const s=n.meta;if(!s)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let a;return this.needThumbnailImage&&s.texture!=null&&s.texture!==-1&&(a=yield this.parser.getDependency("texture",s.texture)),{metaVersion:"0",allowedUserName:s.allowedUserName,author:s.author,commercialUssageName:s.commercialUssageName,contactInformation:s.contactInformation,licenseName:s.licenseName,otherLicenseUrl:s.otherLicenseUrl,otherPermissionUrl:s.otherPermissionUrl,reference:s.reference,sexualUssageName:s.sexualUssageName,texture:a??void 0,title:s.title,version:s.version,violentUssageName:s.violentUssageName}})}_extractGLTFImage(i){return Ut(this,null,function*(){var e;const n=(e=this.parser.json.images)==null?void 0:e[i];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image doesn't exist`),null;let s=n.uri;if(n.bufferView!=null){const l=yield this.parser.getDependency("bufferView",n.bufferView),c=new Blob([l],{type:n.mimeType});s=URL.createObjectURL(c)}return s==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new yx().loadAsync(FC(s,this.parser.options.path)).catch(l=>(console.error(l),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},VC=class{constructor(i){this.scene=i.scene,this.meta=i.meta,this.humanoid=i.humanoid,this.expressionManager=i.expressionManager,this.firstPerson=i.firstPerson,this.lookAt=i.lookAt}update(i){this.humanoid.update(),this.lookAt&&this.lookAt.update(i),this.expressionManager&&this.expressionManager.update()}},zC=class extends VC{constructor(i){super(i),this.materials=i.materials,this.springBoneManager=i.springBoneManager,this.nodeConstraintManager=i.nodeConstraintManager}update(i){super.update(i),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(i),this.materials&&this.materials.forEach(e=>{e.update&&e.update(i)})}},HC=Object.defineProperty,g0=Object.getOwnPropertySymbols,GC=Object.prototype.hasOwnProperty,WC=Object.prototype.propertyIsEnumerable,_0=(i,e,t)=>e in i?HC(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,v0=(i,e)=>{for(var t in e||(e={}))GC.call(e,t)&&_0(i,t,e[t]);if(g0)for(var t of g0(e))WC.call(e,t)&&_0(i,t,e[t]);return i},Ns=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),XC={"":3e3,srgb:3001};function jC(i,e){parseInt(Ds,10)>=152?i.colorSpace=e:i.encoding=XC[e]}var YC=class{get pending(){return Promise.all(this._pendings)}constructor(i,e){this._parser=i,this._materialParams=e,this._pendings=[]}assignPrimitive(i,e){e!=null&&(this._materialParams[i]=e)}assignColor(i,e,t){if(e!=null){const n=new tt().fromArray(e);t&&n.convertSRGBToLinear(),this._materialParams[i]=n}}assignTexture(i,e,t){return Ns(this,null,function*(){const n=Ns(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,i,e),t&&jC(this._materialParams[i],"srgb"))});return this._pendings.push(n),n})}assignTextureByIndex(i,e,t){return Ns(this,null,function*(){return this.assignTexture(i,e!=null?{index:e}:void 0,t)})}},qC=`// #define PHONG

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

}`,$C=`// #define PHONG

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
`,KC={None:"none"},x0={None:"none",ScreenCoordinates:"screenCoordinates"},ZC={3e3:"",3001:"srgb"};function rf(i){return parseInt(Ds,10)>=152?i.colorSpace:ZC[i.encoding]}var QC=class extends Ii{constructor(i={}){var e;super({vertexShader:qC,fragmentShader:$C}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=Ep,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=KC.None,this._outlineWidthMode=x0.None,this._isOutline=!1,i.transparentWithZWrite&&(i.depthWrite=!0),delete i.transparentWithZWrite,i.fog=!0,i.lights=!0,i.clipping=!0,this.uniforms=ox.merge([Pe.common,Pe.normalmap,Pe.emissivemap,Pe.fog,Pe.lights,{litFactor:{value:new tt(1,1,1)},mapUvTransform:{value:new dt},colorAlpha:{value:1},normalMapUvTransform:{value:new dt},shadeColorFactor:{value:new tt(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new dt},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new dt},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new tt(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new dt},parametricRimColorFactor:{value:new tt(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new dt},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new tt(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new dt},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new dt},outlineWidthFactor:{value:0},outlineColorFactor:{value:new tt(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new dt},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=i.uniforms)!=null?e:{}]),this.setValues(i),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${rf(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${rf(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${rf(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const n=parseInt(Ds,10),s=Object.entries(v0(v0({},this._generateDefines()),this.defines)).filter(([a,l])=>!!l).map(([a,l])=>`#define ${a} ${l}`).join(`
`)+`
`;t.vertexShader=s+t.vertexShader,t.fragmentShader=s+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(i){this.uniforms.litFactor.value=i}get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}get normalMap(){return this.uniforms.normalMap.value}set normalMap(i){this.uniforms.normalMap.value=i}get normalScale(){return this.uniforms.normalScale.value}set normalScale(i){this.uniforms.normalScale.value=i}get emissive(){return this.uniforms.emissive.value}set emissive(i){this.uniforms.emissive.value=i}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(i){this.uniforms.emissiveIntensity.value=i}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(i){this.uniforms.emissiveMap.value=i}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(i){this.uniforms.shadeColorFactor.value=i}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(i){this.uniforms.shadeMultiplyTexture.value=i}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(i){this.uniforms.shadingShiftFactor.value=i}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(i){this.uniforms.shadingShiftTexture.value=i}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(i){this.uniforms.shadingShiftTextureScale.value=i}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(i){this.uniforms.shadingToonyFactor.value=i}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(i){this.uniforms.giEqualizationFactor.value=i}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(i){this.uniforms.matcapFactor.value=i}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(i){this.uniforms.matcapTexture.value=i}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(i){this.uniforms.parametricRimColorFactor.value=i}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(i){this.uniforms.rimMultiplyTexture.value=i}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(i){this.uniforms.rimLightingMixFactor.value=i}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(i){this.uniforms.parametricRimFresnelPowerFactor.value=i}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(i){this.uniforms.parametricRimLiftFactor.value=i}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(i){this.uniforms.outlineWidthMultiplyTexture.value=i}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(i){this.uniforms.outlineWidthFactor.value=i}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(i){this.uniforms.outlineColorFactor.value=i}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(i){this.uniforms.outlineLightingMixFactor.value=i}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(i){this.uniforms.uvAnimationMaskTexture.value=i}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(i){this.uniforms.uvAnimationScrollXOffset.value=i}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(i){this.uniforms.uvAnimationScrollYOffset.value=i}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(i){this.uniforms.uvAnimationRotationPhase.value=i}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(i){this._ignoreVertexColor=i,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(i){this._v0CompatShade=i,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(i){this._debugMode=i,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(i){this._outlineWidthMode=i,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(i){this._isOutline=i,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(i){this._uploadUniformsWorkaround(),this._updateUVAnimation(i)}copy(i){return super.copy(i),this.map=i.map,this.normalMap=i.normalMap,this.emissiveMap=i.emissiveMap,this.shadeMultiplyTexture=i.shadeMultiplyTexture,this.shadingShiftTexture=i.shadingShiftTexture,this.matcapTexture=i.matcapTexture,this.rimMultiplyTexture=i.rimMultiplyTexture,this.outlineWidthMultiplyTexture=i.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=i.uvAnimationMaskTexture,this.normalMapType=i.normalMapType,this.uvAnimationScrollXSpeedFactor=i.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=i.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=i.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=i.ignoreVertexColor,this.v0CompatShade=i.v0CompatShade,this.debugMode=i.debugMode,this.outlineWidthMode=i.outlineWidthMode,this.isOutline=i.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(i){this.uniforms.uvAnimationScrollXOffset.value+=i*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=i*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=i*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const i=parseInt(Ds,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:i,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===x0.ScreenCoordinates}}_updateTextureMatrix(i,e){i.value&&(i.value.matrixAutoUpdate&&i.value.updateMatrix(),e.value.copy(i.value.matrix))}},JC=new Set(["1.0","1.0-beta"]),Hx=class dc{get name(){return dc.EXTENSION_NAME}constructor(e,t={}){var n,s,a,l;this.parser=e,this.materialType=(n=t.materialType)!=null?n:QC,this.renderOrderOffset=(s=t.renderOrderOffset)!=null?s:0,this.v0CompatShade=(a=t.v0CompatShade)!=null?a:!1,this.debugMode=(l=t.debugMode)!=null?l:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Ns(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Ns(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return Ns(this,null,function*(){var t;const n=this.parser,a=(t=n.json.meshes)==null?void 0:t[e];if(a==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const l=a.primitives,c=yield n.loadMesh(e);if(l.length===1){const d=c,h=l[0].material;h!=null&&this._setupPrimitive(d,h)}else{const d=c;for(let h=0;h<l.length;h++){const p=d.children[h],m=l[h].material;m!=null&&this._setupPrimitive(p,m)}}return c})}_removeUnlitExtensionIfMToonExists(){const n=this.parser.json.materials;n?.map((s,a)=>{var l;this._getMToonExtension(a)&&((l=s.extensions)!=null&&l.KHR_materials_unlit)&&delete s.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;const l=(t=this.parser.json.materials)==null?void 0:t[e];if(l==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const c=(n=l.extensions)==null?void 0:n[dc.EXTENSION_NAME];if(c==null)return;const d=c.specVersion;if(!JC.has(d)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${dc.EXTENSION_NAME} specVersion "${d}"`);return}return c}_extendMaterialParams(e,t){return Ns(this,null,function*(){var n;delete t.metalness,delete t.roughness;const s=new YC(this.parser,t);s.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),s.assignColor("shadeColorFactor",e.shadeColorFactor),s.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),s.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),s.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),s.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),s.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),s.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),s.assignColor("matcapFactor",e.matcapFactor),s.assignTexture("matcapTexture",e.matcapTexture,!0),s.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),s.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),s.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),s.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),s.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),s.assignPrimitive("outlineWidthMode",e.outlineWidthMode),s.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),s.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),s.assignColor("outlineColorFactor",e.outlineColorFactor),s.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),s.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),s.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),s.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),s.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),s.assignPrimitive("v0CompatShade",this.v0CompatShade),s.assignPrimitive("debugMode",this.debugMode),yield s.pending})}_setupPrimitive(e,t){const n=this._getMToonExtension(t);if(n){const s=this._parseRenderOrder(n);e.renderOrder=s+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof _i)||!this._shouldGenerateOutline(t))return;e.material=[t];const n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=In,e.material.push(n);const s=e.geometry,a=s.index?s.index.count:s.attributes.position.count/3;s.addGroup(0,a,0),s.addGroup(0,a,1)}_addToMaterialSet(e){const t=e.material,n=new Set;Array.isArray(t)?t.forEach(s=>n.add(s)):n.add(t);for(const s of n)this._mToonMaterialSet.add(s)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};Hx.EXTENSION_NAME="VRMC_materials_mtoon";var eP=Hx,tP=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Gx=class fp{get name(){return fp.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return tP(this,null,function*(){const n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const s=n.emissiveMultiplier;t.emissiveIntensity=s})}_getHDREmissiveMultiplierExtension(e){var t,n;const l=(t=this.parser.json.materials)==null?void 0:t[e];if(l==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const c=(n=l.extensions)==null?void 0:n[fp.EXTENSION_NAME];if(c!=null)return c}};Gx.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var nP=Gx,iP=Object.defineProperty,rP=Object.defineProperties,sP=Object.getOwnPropertyDescriptors,y0=Object.getOwnPropertySymbols,oP=Object.prototype.hasOwnProperty,aP=Object.prototype.propertyIsEnumerable,M0=(i,e,t)=>e in i?iP(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Gi=(i,e)=>{for(var t in e||(e={}))oP.call(e,t)&&M0(i,t,e[t]);if(y0)for(var t of y0(e))aP.call(e,t)&&M0(i,t,e[t]);return i},S0=(i,e)=>rP(i,sP(e)),lP=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())});function Lo(i){return Math.pow(i,2.2)}var uP=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(i){var e;this.parser=i,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return lP(this,null,function*(){var i;const e=this.parser.json,t=(i=e.extensions)==null?void 0:i.VRM,n=t?.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((s,a)=>{var l,c;const d=(l=e.materials)==null?void 0:l[a];if(d==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${a}] of glTF but the material doesn't exist`);return}if(s.shader==="VRM/MToon"){const h=this._parseV0MToonProperties(s,d);e.materials[a]=h}else if((c=s.shader)!=null&&c.startsWith("VRM/Unlit")){const h=this._parseV0UnlitProperties(s,d);e.materials[a]=h}else s.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${s.shader}`)}))})}_parseV0MToonProperties(i,e){var t,n,s,a,l,c,d,h,p,m,g,v,S,E,y,x,b,I,T,N,L,D,z,C,R,B,Y,J,he,le,ue,te,H,ce,ne,V,oe,Oe,ze,He,ie,de,Q,me,_e,Ge,xt,k,Qe,De,ke,Ce,it,Fe,ut;const Gt=(n=(t=i.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,O=((s=i.floatProperties)==null?void 0:s._ZWrite)===1&&Gt,A=this._v0ParseRenderQueue(i),Z=(l=(a=i.keywordMap)==null?void 0:a._ALPHATEST_ON)!=null?l:!1,pe=Gt?"BLEND":Z?"MASK":"OPAQUE",ve=Z?(d=(c=i.floatProperties)==null?void 0:c._Cutoff)!=null?d:.5:void 0,Je=((p=(h=i.floatProperties)==null?void 0:h._CullMode)!=null?p:2)===0,Se=this._portTextureTransform(i),We=((g=(m=i.vectorProperties)==null?void 0:m._Color)!=null?g:[1,1,1,1]).map((se,ae)=>ae===3?se:Lo(se)),Ke=(v=i.textureProperties)==null?void 0:v._MainTex,we=Ke!=null?{index:Ke,extensions:Gi({},Se)}:void 0,Ie=(E=(S=i.floatProperties)==null?void 0:S._BumpScale)!=null?E:1,st=(y=i.textureProperties)==null?void 0:y._BumpMap,$e=st!=null?{index:st,scale:Ie,extensions:Gi({},Se)}:void 0,Le=((b=(x=i.vectorProperties)==null?void 0:x._EmissionColor)!=null?b:[0,0,0,1]).map(Lo),pt=(I=i.textureProperties)==null?void 0:I._EmissionMap,W=pt!=null?{index:pt,extensions:Gi({},Se)}:void 0,Te=((N=(T=i.vectorProperties)==null?void 0:T._ShadeColor)!=null?N:[.97,.81,.86,1]).map(Lo),Re=(L=i.textureProperties)==null?void 0:L._ShadeTexture,Ue=Re!=null?{index:Re,extensions:Gi({},Se)}:void 0;let Me=(z=(D=i.floatProperties)==null?void 0:D._ShadeShift)!=null?z:0,ge=(R=(C=i.floatProperties)==null?void 0:C._ShadeToony)!=null?R:.9;ge=yt.lerp(ge,1,.5+.5*Me),Me=-Me-(1-ge);const Xe=(Y=(B=i.floatProperties)==null?void 0:B._IndirectLightIntensity)!=null?Y:.1,mt=Xe?1-Xe:void 0,It=(J=i.textureProperties)==null?void 0:J._SphereAdd,Ct=It!=null?[1,1,1]:void 0,Gn=It!=null?{index:It}:void 0,gn=(le=(he=i.floatProperties)==null?void 0:he._RimLightingMix)!=null?le:0,Zi=(ue=i.textureProperties)==null?void 0:ue._RimTexture,Nn=Zi!=null?{index:Zi,extensions:Gi({},Se)}:void 0,es=((H=(te=i.vectorProperties)==null?void 0:te._RimColor)!=null?H:[0,0,0,1]).map(Lo),Ui=(ne=(ce=i.floatProperties)==null?void 0:ce._RimFresnelPower)!=null?ne:1,Qi=(oe=(V=i.floatProperties)==null?void 0:V._RimLift)!=null?oe:0,vi=["none","worldCoordinates","screenCoordinates"][(ze=(Oe=i.floatProperties)==null?void 0:Oe._OutlineWidthMode)!=null?ze:0];let Oi=(ie=(He=i.floatProperties)==null?void 0:He._OutlineWidth)!=null?ie:0;Oi=.01*Oi;const Ji=(de=i.textureProperties)==null?void 0:de._OutlineWidthTexture,Fs=Ji!=null?{index:Ji,extensions:Gi({},Se)}:void 0,ks=((me=(Q=i.vectorProperties)==null?void 0:Q._OutlineColor)!=null?me:[0,0,0]).map(Lo),Bs=((Ge=(_e=i.floatProperties)==null?void 0:_e._OutlineColorMode)!=null?Ge:0)===1?(k=(xt=i.floatProperties)==null?void 0:xt._OutlineLightingMix)!=null?k:1:0,ts=(Qe=i.textureProperties)==null?void 0:Qe._UvAnimMaskTexture,ia=ts!=null?{index:ts,extensions:Gi({},Se)}:void 0,Vs=(ke=(De=i.floatProperties)==null?void 0:De._UvAnimScrollX)!=null?ke:0;let er=(it=(Ce=i.floatProperties)==null?void 0:Ce._UvAnimScrollY)!=null?it:0;er!=null&&(er=-er);const P=(ut=(Fe=i.floatProperties)==null?void 0:Fe._UvAnimRotation)!=null?ut:0,q={specVersion:"1.0",transparentWithZWrite:O,renderQueueOffsetNumber:A,shadeColorFactor:Te,shadeMultiplyTexture:Ue,shadingShiftFactor:Me,shadingToonyFactor:ge,giEqualizationFactor:mt,matcapFactor:Ct,matcapTexture:Gn,rimLightingMixFactor:gn,rimMultiplyTexture:Nn,parametricRimColorFactor:es,parametricRimFresnelPowerFactor:Ui,parametricRimLiftFactor:Qi,outlineWidthMode:vi,outlineWidthFactor:Oi,outlineWidthMultiplyTexture:Fs,outlineColorFactor:ks,outlineLightingMixFactor:Bs,uvAnimationMaskTexture:ia,uvAnimationScrollXSpeedFactor:Vs,uvAnimationScrollYSpeedFactor:er,uvAnimationRotationSpeedFactor:P};return S0(Gi({},e),{pbrMetallicRoughness:{baseColorFactor:We,baseColorTexture:we},normalTexture:$e,emissiveTexture:W,emissiveFactor:Le,alphaMode:pe,alphaCutoff:ve,doubleSided:Je,extensions:{VRMC_materials_mtoon:q}})}_parseV0UnlitProperties(i,e){var t,n,s,a,l;const c=i.shader==="VRM/UnlitTransparentZWrite",d=i.shader==="VRM/UnlitTransparent"||c,h=this._v0ParseRenderQueue(i),p=i.shader==="VRM/UnlitCutout",m=d?"BLEND":p?"MASK":"OPAQUE",g=p?(n=(t=i.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,v=this._portTextureTransform(i),S=((a=(s=i.vectorProperties)==null?void 0:s._Color)!=null?a:[1,1,1,1]).map(Lo),E=(l=i.textureProperties)==null?void 0:l._MainTex,y=E!=null?{index:E,extensions:Gi({},v)}:void 0,x={specVersion:"1.0",transparentWithZWrite:c,renderQueueOffsetNumber:h,shadeColorFactor:S,shadeMultiplyTexture:y};return S0(Gi({},e),{pbrMetallicRoughness:{baseColorFactor:S,baseColorTexture:y},alphaMode:m,alphaCutoff:g,extensions:{VRMC_materials_mtoon:x}})}_portTextureTransform(i){var e,t,n,s,a;const l=(e=i.vectorProperties)==null?void 0:e._MainTex;if(l==null)return{};const c=[(t=l?.[0])!=null?t:0,(n=l?.[1])!=null?n:0],d=[(s=l?.[2])!=null?s:1,(a=l?.[3])!=null?a:1];return c[1]=1-d[1]-c[1],{KHR_texture_transform:{offset:c,scale:d}}}_v0ParseRenderQueue(i){var e,t;const n=i.shader==="VRM/UnlitTransparentZWrite",s=((e=i.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||n,a=((t=i.floatProperties)==null?void 0:t._ZWrite)===1||n;let l=0;if(s){const c=i.renderQueue;c!=null&&(a?l=this._renderQueueMapTransparentZWrite.get(c):l=this._renderQueueMapTransparent.get(c))}return l}_populateRenderQueueMap(i){const e=new Set,t=new Set;i.forEach(n=>{var s,a;const l=n.shader==="VRM/UnlitTransparentZWrite",c=((s=n.keywordMap)==null?void 0:s._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||l,d=((a=n.floatProperties)==null?void 0:a._ZWrite)===1||l;if(c){const h=n.renderQueue;h!=null&&(d?t.add(h):e.add(h))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,s)=>{const a=Math.min(Math.max(s-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,a)}),Array.from(t).sort().forEach((n,s)=>{const a=Math.min(Math.max(s,0),9);this._renderQueueMapTransparentZWrite.set(n,a)})}},E0=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Yr=new U,sf=class extends Mn{constructor(i){super(),this._attrPosition=new wt(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(cE);const e=new Ht;e.setAttribute("position",this._attrPosition);const t=new Jr({color:16711935,depthTest:!1,depthWrite:!1});this._line=new wc(e,t),this.add(this._line),this.constraint=i}updateMatrixWorld(i){Yr.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,Yr.x,Yr.y,Yr.z),this.constraint.source&&Yr.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,Yr.x,Yr.y,Yr.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(i)}};function T0(i,e){return e.set(i.elements[12],i.elements[13],i.elements[14])}var cP=new U,dP=new U;function hP(i,e){return i.decompose(cP,e,dP),e}function yc(i){return i.invert?i.invert():i.inverse(),i}var Bp=class{constructor(i,e){this.destination=i,this.source=e,this.weight=1}},fP=new U,pP=new U,mP=new U,gP=new Mt,_P=new Mt,vP=new Mt,xP=class extends Bp{get aimAxis(){return this._aimAxis}set aimAxis(i){this._aimAxis=i,this._v3AimAxis.set(i==="PositiveX"?1:i==="NegativeX"?-1:0,i==="PositiveY"?1:i==="NegativeY"?-1:0,i==="PositiveZ"?1:i==="NegativeZ"?-1:0)}get dependencies(){const i=new Set([this.source]);return this.destination.parent&&i.add(this.destination.parent),i}constructor(i,e){super(i,e),this._aimAxis="PositiveX",this._v3AimAxis=new U(1,0,0),this._dstRestQuat=new Mt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const i=gP.identity(),e=_P.identity();this.destination.parent&&(hP(this.destination.parent.matrixWorld,i),yc(e.copy(i)));const t=fP.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(i),n=T0(this.source.matrixWorld,pP).sub(T0(this.destination.matrixWorld,mP)).normalize(),s=vP.setFromUnitVectors(t,n).premultiply(e).multiply(i).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(s,this.weight)}};function yP(i,e){const t=[i];let n=i.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(s=>{e(s)})}var MP=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(i){this._constraints.add(i);let e=this._objectConstraintsMap.get(i.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(i.destination,e)),e.add(i)}deleteConstraint(i){this._constraints.delete(i),this._objectConstraintsMap.get(i.destination).delete(i)}setInitState(){const i=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,i,e,n=>n.setInitState())}update(){const i=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,i,e,n=>n.update())}_processConstraint(i,e,t,n){if(t.has(i))return;if(e.has(i))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(i);const s=i.dependencies;for(const a of s)yP(a,l=>{const c=this._objectConstraintsMap.get(l);if(c)for(const d of c)this._processConstraint(d,e,t,n)});n(i),t.add(i)}},SP=new Mt,EP=new Mt,TP=class extends Bp{get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._dstRestQuat=new Mt,this._invSrcRestQuat=new Mt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),yc(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const i=SP.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=EP.copy(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},wP=new U,AP=new Mt,RP=new Mt,bP=class extends Bp{get rollAxis(){return this._rollAxis}set rollAxis(i){this._rollAxis=i,this._v3RollAxis.set(i==="X"?1:0,i==="Y"?1:0,i==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._rollAxis="X",this._v3RollAxis=new U(1,0,0),this._dstRestQuat=new Mt,this._invDstRestQuat=new Mt,this._invSrcRestQuatMulDstRestQuat=new Mt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),yc(this._invDstRestQuat.copy(this._dstRestQuat)),yc(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const i=AP.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=wP.copy(this._v3RollAxis).applyQuaternion(i),n=RP.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},CP=new Set(["1.0","1.0-beta"]),Wx=class nl{get name(){return nl.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return E0(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return E0(this,null,function*(){var t;const n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(nl.EXTENSION_NAME))!==-1))return null;const a=new MP,l=yield this.parser.getDependencies("node");return l.forEach((c,d)=>{var h;const p=n.nodes[d],m=(h=p?.extensions)==null?void 0:h[nl.EXTENSION_NAME];if(m==null)return;const g=m.specVersion;if(!CP.has(g)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${nl.EXTENSION_NAME} specVersion "${g}"`);return}const v=m.constraint;if(v.roll!=null){const S=this._importRollConstraint(c,l,v.roll);a.addConstraint(S)}else if(v.aim!=null){const S=this._importAimConstraint(c,l,v.aim);a.addConstraint(S)}else if(v.rotation!=null){const S=this._importRotationConstraint(c,l,v.rotation);a.addConstraint(S)}}),e.scene.updateMatrixWorld(),a.setInitState(),a})}_importRollConstraint(e,t,n){const{source:s,rollAxis:a,weight:l}=n,c=t[s],d=new bP(e,c);if(a!=null&&(d.rollAxis=a),l!=null&&(d.weight=l),this.helperRoot){const h=new sf(d);this.helperRoot.add(h)}return d}_importAimConstraint(e,t,n){const{source:s,aimAxis:a,weight:l}=n,c=t[s],d=new xP(e,c);if(a!=null&&(d.aimAxis=a),l!=null&&(d.weight=l),this.helperRoot){const h=new sf(d);this.helperRoot.add(h)}return d}_importRotationConstraint(e,t,n){const{source:s,weight:a}=n,l=t[s],c=new TP(e,l);if(a!=null&&(c.weight=a),this.helperRoot){const d=new sf(c);this.helperRoot.add(d)}return c}};Wx.EXTENSION_NAME="VRMC_node_constraint";var PP=Wx,tc=(i,e,t)=>new Promise((n,s)=>{var a=d=>{try{c(t.next(d))}catch(h){s(h)}},l=d=>{try{c(t.throw(d))}catch(h){s(h)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,l);c((t=t.apply(i,e)).next())}),Vp=class{},of=new U,As=new U,Xx=class extends Vp{get type(){return"capsule"}constructor(i){var e,t,n,s;super(),this.offset=(e=i?.offset)!=null?e:new U(0,0,0),this.tail=(t=i?.tail)!=null?t:new U(0,0,0),this.radius=(n=i?.radius)!=null?n:0,this.inside=(s=i?.inside)!=null?s:!1}calculateCollision(i,e,t,n){of.setFromMatrixPosition(i),As.subVectors(this.tail,this.offset).applyMatrix4(i),As.sub(of);const s=As.lengthSq();n.copy(e).sub(of);const a=As.dot(n);a<=0||(s<=a||As.multiplyScalar(a/s),n.sub(As));const l=n.length(),c=this.inside?this.radius-t-l:l-t-this.radius;return c<0&&(n.multiplyScalar(1/l),this.inside&&n.negate()),c}},af=new U,w0=new dt,jx=class extends Vp{get type(){return"plane"}constructor(i){var e,t;super(),this.offset=(e=i?.offset)!=null?e:new U(0,0,0),this.normal=(t=i?.normal)!=null?t:new U(0,0,1)}calculateCollision(i,e,t,n){n.setFromMatrixPosition(i),n.negate().add(e),w0.getNormalMatrix(i),af.copy(this.normal).applyNormalMatrix(w0).normalize();const s=n.dot(af)-t;return n.copy(af),s}},LP=new U,Yx=class extends Vp{get type(){return"sphere"}constructor(i){var e,t,n;super(),this.offset=(e=i?.offset)!=null?e:new U(0,0,0),this.radius=(t=i?.radius)!=null?t:0,this.inside=(n=i?.inside)!=null?n:!1}calculateCollision(i,e,t,n){n.subVectors(e,LP.setFromMatrixPosition(i));const s=n.length(),a=this.inside?this.radius-t-s:s-t-this.radius;return a<0&&(n.multiplyScalar(1/s),this.inside&&n.negate()),a}},Wi=new U,IP=class extends Ht{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new U,this._currentTail=new U,this._shape=i,this._attrPos=new wt(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new wt(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0);const t=Wi.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),i=!0),i&&this._buildPosition()}_buildPosition(){Wi.copy(this._currentTail).sub(this._currentOffset);const i=Wi.length()/this._currentRadius;for(let n=0;n<=16;n++){const s=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(s),-Math.cos(s),0),this._attrPos.setXYZ(17+n,i+Math.sin(s),Math.cos(s),0),this._attrPos.setXYZ(34+n,-Math.sin(s),0,-Math.cos(s)),this._attrPos.setXYZ(51+n,i+Math.sin(s),0,Math.cos(s))}for(let n=0;n<32;n++){const s=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(s),Math.cos(s)),this._attrPos.setXYZ(100+n,i,Math.sin(s),Math.cos(s))}const e=Math.atan2(Wi.y,Math.sqrt(Wi.x*Wi.x+Wi.z*Wi.z)),t=-Math.atan2(Wi.z,Wi.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<34;i++){const e=(i+1)%34;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(68+i*2,34+i,34+e)}for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(136+i*2,68+i,68+e),this._attrIndex.setXY(200+i*2,100+i,100+e)}this._attrIndex.needsUpdate=!0}},NP=class extends Ht{constructor(i){super(),this.worldScale=1,this._currentOffset=new U,this._currentNormal=new U,this._shape=i,this._attrPos=new wt(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new wt(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},DP=class extends Ht{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new U,this._shape=i,this._attrPos=new wt(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new wt(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.needsUpdate=!0}},UP=new U,lf=class extends Mn{constructor(i){if(super(),this.matrixAutoUpdate=!1,this.collider=i,this.collider.shape instanceof Yx)this._geometry=new DP(this.collider.shape);else if(this.collider.shape instanceof Xx)this._geometry=new IP(this.collider.shape);else if(this.collider.shape instanceof jx)this._geometry=new NP(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new Jr({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Qo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=UP.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},OP=class extends Ht{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new U,this._springBone=i,this._attrPos=new wt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new wt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},FP=new U,kP=class extends Mn{constructor(i){super(),this.matrixAutoUpdate=!1,this.springBone=i,this._geometry=new OP(this.springBone);const e=new Jr({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Qo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=FP.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},uf=class extends zt{constructor(i){super(),this.colliderMatrix=new ft,this.shape=i}updateWorldMatrix(i,e){super.updateWorldMatrix(i,e),BP(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function BP(i,e,t){const n=e.elements;i.copy(e),t&&(i.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],i.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],i.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}var VP=new ft;function zP(i){return i.invert?i.invert():i.getInverse(VP.copy(i)),i}var HP=class{constructor(i){this._inverseCache=new ft,this._shouldUpdateInverse=!0,this.matrix=i;const e={set:(t,n,s)=>(this._shouldUpdateInverse=!0,t[n]=s,!0)};this._originalElements=i.elements,i.elements=new Proxy(i.elements,e)}get inverse(){return this._shouldUpdateInverse&&(zP(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},cf=new ft,Io=new U,Za=new U,Qa=new U,Ja=new U,GP=new ft,WP=class{constructor(i,e,t={},n=[]){this._currentTail=new U,this._prevTail=new U,this._boneAxis=new U,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new ft,this._initialLocalRotation=new Mt,this._initialLocalChildPosition=new U;var s,a,l,c,d,h;this.bone=i,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(s=t.hitRadius)!=null?s:0,stiffness:(a=t.stiffness)!=null?a:1,gravityPower:(l=t.gravityPower)!=null?l:0,gravityDir:(d=(c=t.gravityDir)==null?void 0:c.clone())!=null?d:new U(0,-1,0),dragForce:(h=t.dragForce)!=null?h:.4},this.colliderGroups=n}get dependencies(){const i=new Set,e=this.bone.parent;e&&i.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)i.add(this.colliderGroups[t].colliders[n]);return i}get center(){return this._center}set center(i){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=i,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new HP(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:cf}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail)}update(i){if(i<=0)return;this._calcWorldSpaceBoneLength();const e=Za.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Ja.copy(this._currentTail).add(Io.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*i).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*i),Qa.setFromMatrixPosition(this.bone.matrixWorld),Ja.sub(Qa).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Qa),this._collision(Ja),this._prevTail.copy(this._currentTail),this._currentTail.copy(Ja).applyMatrix4(this._getMatrixWorldToCenter());const t=GP.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,Io.copy(Ja).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(i){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){const n=this.colliderGroups[e].colliders[t],s=n.shape.calculateCollision(n.colliderMatrix,i,this.settings.hitRadius,Io);if(s<0){i.addScaledVector(Io,-s),i.sub(Qa);const a=i.length();i.multiplyScalar(this._worldSpaceBoneLength/a).add(Qa)}}}_calcWorldSpaceBoneLength(){Io.setFromMatrixPosition(this.bone.matrixWorld),this.child?Za.setFromMatrixPosition(this.child.matrixWorld):(Za.copy(this._initialLocalChildPosition),Za.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=Io.sub(Za).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:cf}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:cf}};function XP(i,e){const t=[];let n=i;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(s=>{e(s)})}function pp(i,e){i.children.forEach(t=>{e(t)||pp(t,e)})}function jP(i){var e;const t=new Map;for(const n of i){let s=n;do{const a=((e=t.get(s))!=null?e:0)+1;if(a===i.size)return s;t.set(s,a),s=s.parent}while(s!==null)}return null}var A0=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const i=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{i.add(t)})}),Array.from(i)}get colliders(){const i=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{i.add(t)})}),Array.from(i)}addJoint(i){this._joints.add(i);let e=this._objectSpringBonesMap.get(i.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(i.bone,e)),e.add(i),this._isSortedJointsDirty=!0}addSpringBone(i){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(i)}deleteJoint(i){this._joints.delete(i),this._objectSpringBonesMap.get(i.bone).delete(i),this._isSortedJointsDirty=!0}deleteSpringBone(i){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(i)}setInitState(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){const e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){const e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(i){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(i),pp(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;const i=[],e=new Set,t=new Set,n=new Set;for(const a of this._joints)this._insertJointSort(a,e,t,i,n);this._sortedJoints=i;const s=jP(n);this._ancestors=[],s&&(this._ancestors.push(s),pp(s,a=>{var l,c;return((c=(l=this._objectSpringBonesMap.get(a))==null?void 0:l.size)!=null?c:0)>0?!0:(this._ancestors.push(a),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(i,e,t,n,s){if(t.has(i))return;if(e.has(i)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(i);const a=i.dependencies;for(const l of a){let c=!1,d=null;XP(l,h=>{const p=this._objectSpringBonesMap.get(h);if(p)for(const m of p)c=!0,this._insertJointSort(m,e,t,n,s);else c||(d=h)}),d&&s.add(d)}n.push(i),t.add(i)}_relevantChildrenUpdated(i){var e,t;return((t=(e=this._objectSpringBonesMap.get(i))==null?void 0:e.size)!=null?t:0)>0?!0:(i.updateWorldMatrix(!1,!1),!1)}},R0="VRMC_springBone_extended_collider",YP=new Set(["1.0","1.0-beta"]),qP=new Set(["1.0"]),qx=class Uo{get name(){return Uo.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(n=t?.useExtendedColliders)!=null?n:!0}afterRoot(e){return tc(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return tc(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const n=yield this._v0Import(e);return n??null})}_v1Import(e){return tc(this,null,function*(){var t,n,s,a,l;const c=e.parser.json;if(!(((t=c.extensionsUsed)==null?void 0:t.indexOf(Uo.EXTENSION_NAME))!==-1))return null;const h=new A0,p=yield e.parser.getDependencies("node"),m=(n=c.extensions)==null?void 0:n[Uo.EXTENSION_NAME];if(!m)return null;const g=m.specVersion;if(!YP.has(g))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Uo.EXTENSION_NAME} specVersion "${g}"`),null;const v=(s=m.colliders)==null?void 0:s.map((E,y)=>{var x,b,I,T,N,L,D,z,C,R,B,Y,J,he,le;const ue=p[E.node];if(ue==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${y} attempted to use the node #${E.node} but not found`),null;const te=E.shape,H=(x=E.extensions)==null?void 0:x[R0];if(this.useExtendedColliders&&H!=null){const ce=H.specVersion;if(!qP.has(ce))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${R0} specVersion "${ce}". Fallbacking to the ${Uo.EXTENSION_NAME} definition`);else{const ne=H.shape;if(ne.sphere)return this._importSphereCollider(ue,{offset:new U().fromArray((b=ne.sphere.offset)!=null?b:[0,0,0]),radius:(I=ne.sphere.radius)!=null?I:0,inside:(T=ne.sphere.inside)!=null?T:!1});if(ne.capsule)return this._importCapsuleCollider(ue,{offset:new U().fromArray((N=ne.capsule.offset)!=null?N:[0,0,0]),radius:(L=ne.capsule.radius)!=null?L:0,tail:new U().fromArray((D=ne.capsule.tail)!=null?D:[0,0,0]),inside:(z=ne.capsule.inside)!=null?z:!1});if(ne.plane)return this._importPlaneCollider(ue,{offset:new U().fromArray((C=ne.plane.offset)!=null?C:[0,0,0]),normal:new U().fromArray((R=ne.plane.normal)!=null?R:[0,0,1])})}}if(te.sphere)return this._importSphereCollider(ue,{offset:new U().fromArray((B=te.sphere.offset)!=null?B:[0,0,0]),radius:(Y=te.sphere.radius)!=null?Y:0,inside:!1});if(te.capsule)return this._importCapsuleCollider(ue,{offset:new U().fromArray((J=te.capsule.offset)!=null?J:[0,0,0]),radius:(he=te.capsule.radius)!=null?he:0,tail:new U().fromArray((le=te.capsule.tail)!=null?le:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${y} has no valid shape`)}),S=(a=m.colliderGroups)==null?void 0:a.map((E,y)=>{var x;return{colliders:((x=E.colliders)!=null?x:[]).flatMap(I=>{const T=v?.[I];return T??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${y} attempted to use a collider #${I} but not found`),[])}),name:E.name}});return(l=m.springs)==null||l.forEach((E,y)=>{var x;const b=E.joints,I=(x=E.colliderGroups)==null?void 0:x.map(L=>{const D=S?.[L];if(D==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${y} attempted to use a colliderGroup ${L} but not found`);return D}),T=E.center!=null?p[E.center]:void 0;let N;b.forEach(L=>{if(N){const D=N.node,z=p[D],C=L.node,R=p[C],B={hitRadius:N.hitRadius,dragForce:N.dragForce,gravityPower:N.gravityPower,stiffness:N.stiffness,gravityDir:N.gravityDir!=null?new U().fromArray(N.gravityDir):void 0},Y=this._importJoint(z,R,B,I);T&&(Y.center=T),h.addJoint(Y)}N=L})}),h.setInitState(),h})}_v0Import(e){return tc(this,null,function*(){var t,n,s;const a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const c=(n=a.extensions)==null?void 0:n.VRM,d=c?.secondaryAnimation;if(!d)return null;const h=d?.boneGroups;if(!h)return null;const p=new A0,m=yield e.parser.getDependencies("node"),g=(s=d.colliderGroups)==null?void 0:s.map(v=>{var S;const E=m[v.node];return{colliders:((S=v.colliders)!=null?S:[]).map((x,b)=>{var I,T,N;const L=new U(0,0,0);return x.offset&&L.set((I=x.offset.x)!=null?I:0,(T=x.offset.y)!=null?T:0,x.offset.z?-x.offset.z:0),this._importSphereCollider(E,{offset:L,radius:(N=x.radius)!=null?N:0,inside:!1})})}});return h?.forEach((v,S)=>{const E=v.bones;E&&E.forEach(y=>{var x,b,I,T;const N=m[y],L=new U;v.gravityDir?L.set((x=v.gravityDir.x)!=null?x:0,(b=v.gravityDir.y)!=null?b:0,(I=v.gravityDir.z)!=null?I:0):L.set(0,-1,0);const D=v.center!=null?m[v.center]:void 0,z={hitRadius:v.hitRadius,dragForce:v.dragForce,gravityPower:v.gravityPower,stiffness:v.stiffiness,gravityDir:L},C=(T=v.colliderGroups)==null?void 0:T.map(R=>{const B=g?.[R];if(B==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${S} attempted to use a colliderGroup ${R} but not found`);return B});N.traverse(R=>{var B;const Y=(B=R.children[0])!=null?B:null,J=this._importJoint(R,Y,z,C);D&&(J.center=D),p.addJoint(J)})})}),e.scene.updateMatrixWorld(),p.setInitState(),p})}_importJoint(e,t,n,s){const a=new WP(e,t,n,s);if(this.jointHelperRoot){const l=new kP(a);this.jointHelperRoot.add(l),l.renderOrder=this.jointHelperRoot.renderOrder}return a}_importSphereCollider(e,t){const n=new Yx(t),s=new uf(n);if(e.add(s),this.colliderHelperRoot){const a=new lf(s);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importCapsuleCollider(e,t){const n=new Xx(t),s=new uf(n);if(e.add(s),this.colliderHelperRoot){const a=new lf(s);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importPlaneCollider(e,t){const n=new jx(t),s=new uf(n);if(e.add(s),this.colliderHelperRoot){const a=new lf(s);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return s}};qx.EXTENSION_NAME="VRMC_springBone";var $P=qx,KP=class{get name(){return"VRMLoaderPlugin"}constructor(i,e){var t,n,s,a,l,c,d,h,p,m;this.parser=i;const g=e?.helperRoot,v=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new hC(i),this.firstPersonPlugin=(n=e?.firstPersonPlugin)!=null?n:new pC(i),this.humanoidPlugin=(s=e?.humanoidPlugin)!=null?s:new MC(i,{helperRoot:g,autoUpdateHumanBones:v}),this.lookAtPlugin=(a=e?.lookAtPlugin)!=null?a:new OC(i,{helperRoot:g}),this.metaPlugin=(l=e?.metaPlugin)!=null?l:new BC(i),this.mtoonMaterialPlugin=(c=e?.mtoonMaterialPlugin)!=null?c:new eP(i),this.materialsHDREmissiveMultiplierPlugin=(d=e?.materialsHDREmissiveMultiplierPlugin)!=null?d:new nP(i),this.materialsV0CompatPlugin=(h=e?.materialsV0CompatPlugin)!=null?h:new uP(i),this.springBonePlugin=(p=e?.springBonePlugin)!=null?p:new $P(i,{colliderHelperRoot:g,jointHelperRoot:g}),this.nodeConstraintPlugin=(m=e?.nodeConstraintPlugin)!=null?m:new PP(i,{helperRoot:g})}beforeRoot(){return Qu(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(i){return Qu(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(i)})}getMaterialType(i){const e=this.mtoonMaterialPlugin.getMaterialType(i);return e??null}extendMaterialParams(i,e){return Qu(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(i,e),yield this.mtoonMaterialPlugin.extendMaterialParams(i,e)})}afterRoot(i){return Qu(this,null,function*(){yield this.metaPlugin.afterRoot(i),yield this.humanoidPlugin.afterRoot(i),yield this.expressionPlugin.afterRoot(i),yield this.lookAtPlugin.afterRoot(i),yield this.firstPersonPlugin.afterRoot(i),yield this.springBonePlugin.afterRoot(i),yield this.nodeConstraintPlugin.afterRoot(i),yield this.mtoonMaterialPlugin.afterRoot(i);const e=i.userData.vrmMeta,t=i.userData.vrmHumanoid;if(e&&t){const n=new zC({scene:i.scene,expressionManager:i.userData.vrmExpressionManager,firstPerson:i.userData.vrmFirstPerson,humanoid:t,lookAt:i.userData.vrmLookAt,meta:e,materials:i.userData.vrmMToonMaterials,springBoneManager:i.userData.vrmSpringBoneManager,nodeConstraintManager:i.userData.vrmNodeConstraintManager});i.userData.vrm=n}})}};function ZP(i){const e=new Set;return i.traverse(t=>{if(!t.isMesh)return;const n=t;e.add(n)}),e}function b0(i,e,t){if(e.size===1){const l=e.values().next().value;if(l.weight===1)return i[l.index]}const n=new Float32Array(i[0].count*3);let s=0;if(t)s=1;else for(const l of e)s+=l.weight;for(const l of e){const c=i[l.index],d=l.weight/s;for(let h=0;h<c.count;h++)n[h*3+0]+=c.getX(h)*d,n[h*3+1]+=c.getY(h)*d,n[h*3+2]+=c.getZ(h)*d}return new wt(n,3)}function QP(i){var e;const t=ZP(i.scene),n=new Map,s=(e=i.expressionManager)==null?void 0:e.expressionMap;if(s!=null)for(const[a,l]of Object.entries(s)){const c=new Set;for(const d of l.binds)if(d instanceof xc){if(d.weight!==0)for(const h of d.primitives){let p=n.get(h);p==null&&(p=new Map,n.set(h,p));let m=p.get(a);m==null&&(m=new Set,p.set(a,m)),m.add(d)}c.add(d)}for(const d of c)l.deleteBind(d)}for(const a of t){const l=n.get(a);if(l==null)continue;const c=a.geometry.morphAttributes;a.geometry.morphAttributes={};const d=a.geometry.clone();a.geometry=d;const h=d.morphTargetsRelative,p=c.position!=null,m=c.normal!=null,g={},v={},S=[];if(p||m){p&&(g.position=[]),m&&(g.normal=[]);let E=0;for(const[y,x]of l)p&&(g.position[E]=b0(c.position,x,h)),m&&(g.normal[E]=b0(c.normal,x,h)),s?.[y].addBind(new xc({index:E,weight:1,primitives:[a]})),v[y]=E,S.push(0),E++}d.morphAttributes=g,a.morphTargetDictionary=v,a.morphTargetInfluences=S}}function Mc(i,e,t){if(i.getComponent)return i.getComponent(e,t);{let n=i.array[e*i.itemSize+t];return i.normalized&&(n=yt.denormalize(n,i.array)),n}}function $x(i,e,t,n){i.setComponent?i.setComponent(e,t,n):(i.normalized&&(n=yt.normalize(n,i.array)),i.array[e*i.itemSize+t]=n)}function JP(i){var e;const t=eL(i),n=new Set;for(const m of t)n.has(m.geometry)&&(m.geometry=oL(m.geometry)),n.add(m.geometry);const s=new Map;for(const m of n){const g=m.getAttribute("skinIndex"),v=(e=s.get(g))!=null?e:new Map;s.set(g,v);const S=m.getAttribute("skinWeight"),E=tL(g,S);v.set(S,E)}const a=new Map;for(const m of t){const g=nL(m,s);a.set(m,g)}const l=[];for(const[m,g]of a){let v=!1;for(const S of l)if(iL(g,S.boneInverseMap)){v=!0,S.meshes.add(m);for(const[y,x]of g)S.boneInverseMap.set(y,x);break}v||l.push({boneInverseMap:g,meshes:new Set([m])})}const c=new Map,d=new df,h=new df,p=new df;for(const m of l){const{boneInverseMap:g,meshes:v}=m,S=Array.from(g.keys()),E=Array.from(g.values()),y=new Zo(S,E),x=h.getOrCreate(y);for(const b of v){const I=b.geometry.getAttribute("skinIndex"),T=d.getOrCreate(I),N=b.skeleton.bones,L=N.map(C=>p.getOrCreate(C)).join(","),D=`${T};${x};${L}`;let z=c.get(D);z==null&&(z=I.clone(),rL(z,N,S),c.set(D,z)),b.geometry.setAttribute("skinIndex",z)}for(const b of v)b.bind(y,new ft)}}function eL(i){const e=new Set;return i.traverse(t=>{if(!t.isSkinnedMesh)return;const n=t;e.add(n)}),e}function tL(i,e){const t=new Set;for(let n=0;n<i.count;n++)for(let s=0;s<i.itemSize;s++){const a=Mc(i,n,s);Mc(e,n,s)!==0&&t.add(a)}return t}function nL(i,e){const t=new Map,n=i.skeleton,s=i.geometry,a=s.getAttribute("skinIndex"),l=s.getAttribute("skinWeight"),c=e.get(a),d=c?.get(l);if(!d)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(const h of d)t.set(n.bones[h],n.boneInverses[h]);return t}function iL(i,e){for(const[t,n]of i.entries()){const s=e.get(t);if(s!=null&&!sL(n,s))return!1}return!0}function rL(i,e,t){const n=new Map;for(const a of e)n.set(a,n.size);const s=new Map;for(const[a,l]of t.entries()){const c=n.get(l);s.set(c,a)}for(let a=0;a<i.count;a++)for(let l=0;l<i.itemSize;l++){const c=Mc(i,a,l),d=s.get(c);$x(i,a,l,d)}i.needsUpdate=!0}function sL(i,e,t){if(t=t||1e-4,i.elements.length!=e.elements.length)return!1;for(let n=0,s=i.elements.length;n<s;n++)if(Math.abs(i.elements[n]-e.elements[n])>t)return!1;return!0}var df=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(i){return this._objectIndexMap.get(i)}getOrCreate(i){let e=this._objectIndexMap.get(i);return e==null&&(e=this._index,this._objectIndexMap.set(i,e),this._index++),e}};function oL(i){var e,t,n,s;const a=new Ht;a.name=i.name,a.setIndex(i.index);for(const[l,c]of Object.entries(i.attributes))a.setAttribute(l,c);for(const[l,c]of Object.entries(i.morphAttributes)){const d=l;a.morphAttributes[d]=c.concat()}a.morphTargetsRelative=i.morphTargetsRelative,a.groups=[];for(const l of i.groups)a.addGroup(l.start,l.count,l.materialIndex);return a.boundingSphere=(t=(e=i.boundingSphere)==null?void 0:e.clone())!=null?t:null,a.boundingBox=(s=(n=i.boundingBox)==null?void 0:n.clone())!=null?s:null,a.drawRange.start=i.drawRange.start,a.drawRange.count=i.drawRange.count,a.userData=i.userData,a}function C0(i){if(Object.values(i).forEach(e=>{e?.isTexture&&e.dispose()}),i.isShaderMaterial){const e=i.uniforms;e&&Object.values(e).forEach(t=>{const n=t.value;n?.isTexture&&n.dispose()})}i.dispose()}function aL(i){const e=i.geometry;e&&e.dispose();const t=i.skeleton;t&&t.dispose();const n=i.material;n&&(Array.isArray(n)?n.forEach(s=>C0(s)):n&&C0(n))}function lL(i){i.traverse(aL)}function uL(i,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");const s=(t=e?.experimentalSameBoneCounts)!=null?t:!1,a=[];i.traverse(d=>{d.type==="SkinnedMesh"&&a.push(d)});const l=new Map;let c=0;for(const d of a){const p=d.geometry.getAttribute("skinIndex");if(l.has(p))continue;const m=new Map,g=new Map;for(let v=0;v<p.count;v++)for(let S=0;S<p.itemSize;S++){const E=Mc(p,v,S);let y=m.get(E);y==null&&(y=m.size,m.set(E,y),g.set(y,E)),$x(p,v,S,y)}p.needsUpdate=!0,l.set(p,g),c=Math.max(c,m.size)}for(const d of a){const p=d.geometry.getAttribute("skinIndex"),m=l.get(p),g=[],v=[],S=s?c:m.size;for(let y=0;y<S;y++){const x=(n=m.get(y))!=null?n:0;g.push(d.skeleton.bones[x]),v.push(d.skeleton.boneInverses[x])}const E=new Zo(g,v);d.bind(E,new ft)}}function cL(i){const e=new Map;i.traverse(t=>{var n,s,a,l;if(!t.isMesh)return;const c=t,d=c.geometry,h=d.index;if(h==null)return;const p=e.get(d);if(p!=null){c.geometry=p;return}const m=Object.values(d.attributes)[0].count,g=new Array(m);let v=0;const S=h.array;for(let T=0;T<S.length;T++){const N=S[T];g[N]||(g[N]=!0,v++)}if(v===m)return;const E=[],y=[];let x=0;for(let T=0;T<g.length;T++)if(g[T]){const N=x++;E[T]=N,y[N]=T}const b=new Ht;b.name=d.name,b.morphTargetsRelative=d.morphTargetsRelative,d.groups.forEach(T=>{b.addGroup(T.start,T.count,T.materialIndex)}),b.boundingBox=(s=(n=d.boundingBox)==null?void 0:n.clone())!=null?s:null,b.boundingSphere=(l=(a=d.boundingSphere)==null?void 0:a.clone())!=null?l:null,b.setDrawRange(d.drawRange.start,d.drawRange.count),b.userData=d.userData,e.set(d,b);{const T=h.array,N=new T.constructor(T.length);for(let L=0;L<T.length;L++){const D=T[L],z=E[D];N[L]=z}b.setIndex(new wt(N,1,!1))}Object.keys(d.attributes).forEach(T=>{const N=d.attributes[T];if(N.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const L=N.array,{itemSize:D,normalized:z}=N,C=new L.constructor(y.length*D);y.forEach((R,B)=>{for(let Y=0;Y<D;Y++)C[B*D+Y]=L[R*D+Y]}),b.setAttribute(T,new wt(C,D,z))});let I=!0;for(const[T,N]of Object.entries(d.morphAttributes)){const L=T;b.morphAttributes[L]=[];for(let D=0;D<N.length;D++){const z=N[D];if(z.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const C=z.array,{itemSize:R,normalized:B}=z,Y=new C.constructor(y.length*R);y.forEach((J,he)=>{for(let le=0;le<R;le++)Y[he*R+le]=C[J*R+le]}),I=I&&Y.every(J=>J===0),b.morphAttributes[L][D]=new wt(Y,R,B)}}I&&(b.morphAttributes={}),c.geometry=b}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function dL(i){var e;((e=i.meta)==null?void 0:e.metaVersion)==="0"&&(i.scene.rotation.y=Math.PI)}var qi=class{constructor(){}};qi.combineMorphs=QP;qi.combineSkeletons=JP;qi.deepDispose=lL;qi.removeUnnecessaryJoints=uL;qi.removeUnnecessaryVertices=cL;qi.rotateVRM0=dL;/*!
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
 */const hf=1.6;async function hL(i){const e=new bb;e.register(s=>new KP(s));const t=await e.parseAsync(i,""),n=t.userData.vrm;if(!n)throw new Error("VRMファイルではないようです");return qi.removeUnnecessaryVertices(t.scene),qi.combineSkeletons(t.scene),qi.rotateVRM0(n),n.scene.traverse(s=>s.frustumCulled=!1),n}class fL{root=new Mn;body=new Mn;vrm=null;spirit;aura;mood="idle";moodWeight={happy:0,thinking:0,talking:0};blinkTimer=2;blinkPhase=-1;lookTarget=new zt;height=hf;constructor(){this.root.add(this.body),this.spirit=new pL,this.body.add(this.spirit.group),this.aura=Fp("#3d9dff",1.6,.45),this.aura.position.y=-.05,this.aura.scale.set(1.4,.45,1),this.root.add(this.aura)}setVrm(e){if(this.vrm&&(this.body.remove(this.vrm.scene),qi.deepDispose(this.vrm.scene)),this.vrm=e,this.spirit.group.visible=!e,e){this.body.add(e.scene),e.lookAt&&(e.lookAt.target=this.lookTarget);const t=e.humanoid.getNormalizedBoneNode("head");this.root.updateMatrixWorld(!0),this.height=t?this.body.worldToLocal(t.getWorldPosition(new U)).y+.15:hf}else this.height=hf}get hasVrm(){return!!this.vrm}setMood(e){this.mood=e}headPosition(e){return e.set(0,this.height*1.02,0).applyMatrix4(this.body.matrixWorld)}update(e,t,n){const s=1-Math.exp(-e*8);for(const d of["happy","thinking","talking"])this.moodWeight[d]+=((this.mood===d?1:0)-this.moodWeight[d])*s;const a=this.updateBlink(e),l=this.moodWeight.talking*(.35+.35*Math.sin(t*17)*Math.sin(t*5.3));this.body.position.y=.06+Math.sin(t*1.4)*.05,this.body.rotation.z=Math.sin(t*.7)*.03+this.moodWeight.thinking*.08,this.body.rotation.x=n*.12;const c=Math.sin(t*2.2);this.aura.material.opacity=.35+.1*Math.sin(t*1.4)+this.moodWeight.happy*.2,this.vrm?this.poseVrm(this.vrm,e,t,c,a,Math.max(0,l)):this.spirit.update(t,a,Math.max(0,l),this.moodWeight)}updateBlink(e){return this.blinkPhase<0?(this.blinkTimer-=e,this.blinkTimer<=0&&(this.blinkPhase=0),0):(this.blinkPhase+=e/.16,this.blinkPhase>=1?(this.blinkPhase=-1,this.blinkTimer=yt.randFloat(1.8,5.5),0):Math.sin(this.blinkPhase*Math.PI))}poseVrm(e,t,n,s,a,l){const c=e.humanoid,d=S=>c.getNormalizedBoneNode(S),{happy:h,thinking:p,talking:m}=this.moodWeight,g=Math.sin(n*1.1)*.05;d("leftUpperArm")?.rotation.set(0,0,-1.35+g-h*.15),d("rightUpperArm")?.rotation.set(0,0,1.35-g+h*.15),d("leftLowerArm")?.rotation.set(0,-.25-p*.3,0),d("rightLowerArm")?.rotation.set(0,.25+p*1.4,0),d("rightHand")?.rotation.set(0,0,p*.4),d("leftUpperLeg")?.rotation.set(.08+Math.sin(n*1.4)*.03,0,.03),d("rightUpperLeg")?.rotation.set(.14+Math.sin(n*1.4+1)*.03,0,-.03),d("leftLowerLeg")?.rotation.set(-.12,0,0),d("rightLowerLeg")?.rotation.set(-.25,0,0),d("spine")?.rotation.set(s*.015,0,0),d("chest")?.rotation.set(s*.02,0,0),d("neck")?.rotation.set(m*Math.sin(n*3)*.04,0,0),d("head")?.rotation.set(-p*.15,0,p*.18+Math.sin(n*.6)*.03);const v=e.expressionManager;v&&(v.setValue("blink",h>.5?0:a),v.setValue("happy",h*.9),v.setValue("relaxed",p*.4),v.setValue("aa",l)),e.update(t)}}class pL{group=new Mn;head;eyes=[];mouth;ring;core;constructor(){const e=new Ni({color:"#9fd4ff",emissive:"#1a4f9c",emissiveIntensity:.6,roughness:.15,transmission:.35,transparent:!0,opacity:.92});this.head=new rn(new ml(.3,48,32),e),this.head.position.y=1.18,this.group.add(this.head);const t=new gi({color:"#f4fbff"});for(const a of[-.12,.12]){const l=new rn(new Rp(.03,.06,4,12),t);l.position.set(a,.02,.28),this.head.add(l),this.eyes.push(l)}this.mouth=new rn(new bp(.035,20),new gi({color:"#ffd59a"})),this.mouth.position.set(0,-.1,.295),this.head.add(this.mouth);const n=[[0,.12],[.1,.13],[.2,.2],[.27,.32],[.29,.45],[.24,.62],[.16,.78],[.1,.88],[0,.92]].map(([a,l])=>new rt(a,l)),s=new rn(new Cp(n,48),e);this.group.add(s),this.ring=new rn(new Pp(.46,.012,8,80),new gi({color:"#ffb347",transparent:!0,opacity:.85})),this.ring.position.y=1.18,this.ring.rotation.x=Math.PI/2.4,this.ring.scale.setScalar(.85),this.group.add(this.ring),this.core=Fp("#ffcf7a",.45,.9),this.core.position.y=.5,this.group.add(this.core)}update(e,t,n,s){for(const a of this.eyes)a.scale.y=Math.max(.08,1-t)*(1-s.happy*.6);this.mouth.scale.set(1+s.happy*.6,.4+n*2.2+s.happy*.3,1),this.ring.rotation.z=e*(.6+s.thinking*2.5),this.head.rotation.z=s.thinking*.2+Math.sin(e*.6)*.04,this.head.rotation.x=-s.thinking*.15,this.core.material.opacity=.7+.25*Math.sin(e*2.2)+s.happy*.2}}const P0=35,ff=10;function mL(){const i=navigator.hardwareConcurrency??4,e=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&innerWidth<1100;return i>=8&&!e?"high":"low"}class gL{constructor(e,t={}){this.canvas=e,this.events=t,this.quality=mL(),this.pixelRatio=Math.min(devicePixelRatio,this.quality==="high"?2:1.5),this.renderer=new wb({canvas:e,antialias:this.quality==="high",alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.outputColorSpace=hn,this.camera.position.set(0,0,ff),this.scene.add(new CT("#a9c4ff",.35));const n=new rp("#ffffff",2.4);n.position.set(1,2,3),this.scene.add(n);const s=new rp("#4aa8ff",1.2);s.position.set(-2,1,-2),this.scene.add(s),this.background=new Rb(this.quality),this.scene.add(this.background.group),this.scene.add(this.companion.root),this.scene.add(this.companion.lookTarget),this.resize(),this.companion.root.position.set(0,-this.visible.h*.25,0),this.target.copy(this.companion.root.position),addEventListener("resize",this.resize),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerdown",this.onPointerDown),document.addEventListener("visibilitychange",this.onVisibility),this.loop()}renderer;scene=new QE;camera=new Vn(P0,1,.1,300);clock=new IT;background;companion=new fL;frame=0;quality;pixelRatio;powerSave=!1;visible={w:1,h:1};reserveBottom=0;target=new U;velocity=new U;nextMove=0;hold=0;pointer=new rt(0,0);fps={frames:0,time:0};tmp=new U;disposed=!1;dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),removeEventListener("resize",this.resize),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerdown",this.onPointerDown),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.dispose()}async setVrmData(e){const t=e?await hL(e):null;this.disposed||(this.companion.setVrm(t),this.applyScale())}setMood(e){this.companion.setMood(e),e!=="idle"&&(this.hold=2.5)}setPowerSave(e){this.powerSave=e,this.renderer.setPixelRatio(e?1:this.pixelRatio),this.resize()}setReserveBottom(e){this.reserveBottom=e,this.clampTarget()}onVisibility=()=>{cancelAnimationFrame(this.frame),document.hidden||(this.clock.getDelta(),this.loop())};onPointerMove=e=>{this.pointer.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1)};onPointerDown=e=>{this.onPointerMove(e);const t=this.companion.root,n=this.companion.height*t.scale.y,s=this.toScreen(this.tmp.set(t.position.x,t.position.y+n*.5,0)),a=this.toScreen(this.tmp.set(t.position.x,t.position.y+n,0)),l=Math.abs(s.y-a.y);if(Math.abs(e.clientX-s.x)<l*.6&&Math.abs(e.clientY-s.y)<l*1.05)this.events.onTap?.();else{const c=this.fromScreen(e.clientX,e.clientY);this.target.set(c.x,c.y-n*.5,0),this.clampTarget(),this.nextMove=this.clock.elapsedTime+6}};toScreen(e){return e.project(this.camera),{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}}fromScreen(e,t){return new U((e/innerWidth*2-1)*(this.visible.w/2),(-(t/innerHeight)*2+1)*(this.visible.h/2),0)}resize=()=>{const e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.visible.h=2*ff*Math.tan(yt.degToRad(P0/2)),this.visible.w=this.visible.h*this.camera.aspect,this.background.layout(this.camera.aspect),this.applyScale(),this.powerSave&&this.renderer.render(this.scene,this.camera)};applyScale(){const e=this.camera.aspect<1?.36:.5,t=this.visible.h*e/this.companion.height;this.companion.root.scale.setScalar(t),this.clampTarget()}bounds(){const e=this.companion.height*this.companion.root.scale.y,t=this.visible.w/2,n=this.visible.h/2,s=Math.min(e*.3,t*.4),a=-n+this.visible.h*this.reserveBottom,l=Math.max(a,n-e*1.05-this.visible.h*.17);return{minX:-t+s,maxX:t-s,minY:a,maxY:l}}clampTarget(){const e=this.bounds();this.target.x=yt.clamp(this.target.x,e.minX,e.maxX),this.target.y=yt.clamp(this.target.y,e.minY,e.maxY)}pickTarget(){const e=this.bounds();this.target.set(yt.randFloat(e.minX,e.maxX),yt.randFloat(e.minY,e.maxY),0)}loop=()=>{this.frame=requestAnimationFrame(this.loop);const e=Math.min(this.clock.getDelta(),.1),t=this.clock.elapsedTime;this.watchFps(e),this.hold=Math.max(0,this.hold-e),t>this.nextMove&&this.hold===0&&(this.pickTarget(),this.nextMove=t+yt.randFloat(5,11));const n=this.companion.root,a=this.tmp.copy(this.target).sub(n.position).multiplyScalar(this.hold>0?.3:.8).clampLength(0,1.6);this.velocity.lerp(a,1-Math.exp(-e*2)),n.position.addScaledVector(this.velocity,e);const l=this.velocity.length(),c=yt.clamp(this.velocity.x*.45,-.6,.6);n.rotation.y+=(c-n.rotation.y)*(1-Math.exp(-e*3));const d=this.fromScreen((this.pointer.x+1)/2*innerWidth,(1-this.pointer.y)/2*innerHeight);if(this.companion.lookTarget.position.set(d.x,d.y,ff*.6),this.companion.update(e,t,Math.min(l,1)),this.powerSave||this.background.update(e,t),this.renderer.render(this.scene,this.camera),this.events.onHead){n.updateMatrixWorld();const h=this.toScreen(this.companion.headPosition(this.tmp));this.events.onHead(h.x,h.y)}};watchFps(e){if(this.fps.frames++,this.fps.time+=e,this.fps.time<3)return;const t=this.fps.frames/this.fps.time;this.fps.frames=0,this.fps.time=0,t<40&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.renderer.setPixelRatio(this.pixelRatio),this.resize())}}const L0=["なあに？","呼んだ？","えへへ、くすぐったいよ","どうしたの？","ちゃんとそばにいるよ"];function _L(){const i=vt.useRef(null),e=vt.useRef(null),t=vt.useRef(null),[n,s]=vt.useState(()=>qr("persona",hc)),[a,l]=vt.useState(()=>{const Q=qr("ai",yu),me={...yu.models,...Q.models};return D0.gemini.test(me.gemini)&&(me.gemini=yu.models.gemini),{...Q,models:me}}),[c,d]=vt.useState(()=>qr("display",iS)),[h,p]=vt.useState({anthropic:"",openai:"",gemini:""}),[m,g]=vt.useState(!1),[v,S]=vt.useState(()=>mS("chat")),[E,y]=vt.useState(()=>qr("usage",{input:0,output:0})),[x,b]=vt.useState(!1),[I,T]=vt.useState(""),[N,L]=vt.useState(!1),[D,z]=vt.useState(!1),[C,R]=vt.useState({}),[B,Y]=vt.useState(null),[J,he]=vt.useState({has:!1,name:qr("vrmName",{v:""}).v,error:""}),le=vt.useRef(null),ue=vt.useRef(0);vt.useEffect(()=>Rs("persona",n),[n]),vt.useEffect(()=>Rs("ai",a),[a]),vt.useEffect(()=>Rs("display",c),[c]),vt.useEffect(()=>Rs("chat",v.slice(-200)),[v]),vt.useEffect(()=>Rs("usage",E),[E]);const te=vt.useCallback((Q,me)=>{clearTimeout(ue.current),T(Q),me!==1/0&&(ue.current=window.setTimeout(()=>T(""),me??Math.min(15e3,3500+Q.length*120)))},[]);vt.useEffect(()=>{const Q=new gL(i.current,{onHead:(me,_e)=>{const Ge=t.current;if(!Ge)return;const xt=Ge.offsetWidth,k=Ge.offsetHeight,Qe=Math.min(Math.max(12,me-xt/2),innerWidth-xt-12),De=Math.max(12,_e-k-14);Ge.style.transform=`translate(${Qe}px, ${De}px)`,Ge.style.setProperty("--tail",`${Math.min(Math.max(16,me-Qe),xt-16)}px`)},onTap:()=>{Q.setMood("happy"),setTimeout(()=>Q.setMood("idle"),1800),te(L0[Math.floor(Math.random()*L0.length)])}});return e.current=Q,yS("vrm").then(async me=>{if(me)try{await Q.setVrmData(await me.arrayBuffer()),he(_e=>({..._e,has:!0}))}catch(_e){he(Ge=>({...Ge,error:`保存してあったVRMを読み込めませんでした：${_e.message}`}))}}),()=>{Q.dispose(),e.current=null}},[te]),vt.useEffect(()=>e.current?.setPowerSave(c.powerSave),[c.powerSave]),vt.useEffect(()=>{(async()=>{const Q=await Promise.all(["anthropic","openai","gemini"].map(async xt=>[xt,await vS(`key.${xt}`)])),me=Object.fromEntries(Q);p(me),g(!0);const _e=qr("persona",hc),Ge=qr("ai",yu);te(me[Ge.provider]?zM(new Date,_e.userCall):`はじめまして、${_e.name}だよ。右上の ? でAPIキーの取り方を見て、⚙ から設定してね`,me[Ge.provider]?void 0:2e4)})()},[te]);const H=vt.useRef(0);vt.useEffect(()=>{if(!c.voiceLines)return;let Q=0;const me=()=>{document.hidden||H.current++;const _e=HM(new Date,n.userCall)??GM(H.current);_e&&!x&&te(_e),Q=window.setTimeout(me,6e4-Date.now()%6e4+50)};return Q=window.setTimeout(me,6e4-Date.now()%6e4+50),()=>clearTimeout(Q)},[c.voiceLines,n.userCall,x,te]);const ce=vt.useCallback(Q=>e.current?.setReserveBottom((Q+8)/innerHeight),[]),ne=async Q=>{if(!h[a.provider]){e.current?.setMood("happy"),setTimeout(()=>e.current?.setMood("idle"),2e3),te("まだAIにつながってないの。APIキーの取り方を見せるね。迷ったら、無料枠のある Gemini からがおすすめだよ"),Y(Object.values(h).some(Boolean)?a.provider:"gemini");return}const me=Date.now(),_e=[...v,{role:"user",content:Q,at:me}];S([..._e,{role:"assistant",content:"",at:me}]),b(!0),e.current?.setMood("thinking"),te("うーん…",1/0);const Ge=Date.now(),xt=window.setInterval(()=>{const Ce=Math.round((Date.now()-Ge)/1e3);Qe||te(Ce<8?"うーん…":`うーん…（${Ce}秒）考え中`,1/0)},1e3),k=new AbortController;le.current=k;let Qe="";const De=(Ce,it=!1)=>S(Fe=>[...Fe.slice(0,-1),{role:"assistant",content:Ce,at:me,error:it}]),ke=Ce=>eS({provider:a.provider,apiKey:h[a.provider],model:Ce,system:hS(n),messages:qM(_e.filter(it=>!it.error)),signal:k.signal,onText:it=>{Qe||e.current?.setMood("talking"),Qe+=it,De(Qe),te(Qe,1/0)}});try{let Ce;try{const it=V.current,Fe=a.models[a.provider],ut=it&&it.from===Fe&&it.until>Date.now();Ce=await ke(ut?it.to:Fe)}catch(it){if(Qe)throw it;if(it instanceof nc)Ce=await Oe(it.model,ke);else if(it instanceof Fo)Ce=await oe(it,ke,k.signal);else throw it}if(y(it=>({input:it.input+Ce.input,output:it.output+Ce.output})),!Qe.trim())throw new Error("返事が空っぽでした。もう一度話しかけてみてね");e.current?.setMood("happy"),setTimeout(()=>e.current?.setMood("idle"),2500),te(Qe)}catch(Ce){const it=Qe?`${Qe}

（${Ce.message}）`:Ce.message;De(it,!Qe),e.current?.setMood("idle"),te(Qe?it:`ごめんね、${Ce.message}`)}finally{clearInterval(xt),b(!1),le.current=null}},V=vt.useRef(null),oe=async(Q,me,_e)=>{const Ge=a.provider,xt=De=>new Promise(ke=>setTimeout(ke,De));if(!Q.rateLimited&&!Q.timedOut){if(te("混んでるみたい。ちょっと待ってもう一回試すね…",1/0),await xt(2500),_e.aborted)throw new Error("止めました");try{return await me(Q.model)}catch(De){if(!(De instanceof Fo))throw De}}const k=C[Ge],Qe=KM[Ge].filter(De=>De!==Q.model&&(!k||k.includes(De)));for(const De of Qe){if(_e.aborted)throw new Error("止めました");te(`混んでるから、「${De}」で答えるね…`,1/0);try{const ke=await me(De);return V.current={from:Q.model,to:De,until:Date.now()+30*6e4},ke}catch(ke){if(!(ke instanceof Fo)&&!(ke instanceof nc))throw ke}}throw Q},Oe=async(Q,me)=>{const _e=a.provider,Ge=new Set([Q]);let xt="";const k=[];try{const Qe=await x_(_e,h[_e]);R(ke=>({...ke,[_e]:Qe}));const De=y_(_e,Qe);De&&k.push(De)}catch(Qe){xt=Qe?.message??String(Qe)}k.push(...ZM[_e]);for(const Qe of k)if(!Ge.has(Qe)){Ge.add(Qe),te(`モデル「${Q}」が使えないみたい。「${Qe}」で試してみるね…`,1/0);try{const De=await me(Qe);return l(ke=>({...ke,models:{...ke.models,[_e]:Qe}})),De}catch(De){if(!(De instanceof nc))throw De}}throw new Error(`使えるモデルが見つかりませんでした（試したもの：${[...Ge].join("、")}${xt?`／一覧の取得：${xt}`:""}）。⚙ →「AI」でモデル名を入れてください`)},ze=async(Q,me)=>{const _e=await x_(Q,me);R(k=>({...k,[Q]:_e}));const Ge=a.models[Q];if(_e.includes(Ge))return Ge;const xt=y_(Q,_e);if(!xt)throw new Error("このキーで使えるモデルが見つかりませんでした");return l(k=>({...k,models:{...k.models,[Q]:xt}})),te(`モデルを「${xt}」に切り替えたよ`),xt},He=async(Q,me)=>{if(await _S(`key.${Q}`,me),p(_e=>({..._e,[Q]:me})),!!me){te("ありがとう！ つながるか確かめてるね…",1/0);try{const _e=await ze(Q,me);te(`つながったよ！ モデルは「${_e}」を使うね。これでお話しできるよ`)}catch(_e){const Ge=_e?.status===400||_e?.status===401||_e?.status===403?"APIキーが正しくないみたい。コピーし直して貼ってみて":`確かめられなかったよ（${_e.message}）。とりあえず話しかけてみてね`;te(Ge)}}},ie=async Q=>{if(he(me=>({...me,error:""})),Q&&new TextDecoder().decode(await Q.slice(0,4).arrayBuffer())!=="glTF"){he(me=>({...me,error:`「${Q.name}」はVRMファイルではないようです。拡張子が .vrm のファイルを選んでください`}));return}try{await e.current?.setVrmData(Q?await Q.arrayBuffer():null),await xS("vrm",Q??void 0),Rs("vrmName",{v:Q?.name??""}),he({has:!!Q,name:Q?.name??"",error:""}),Q&&te("新しい姿、どうかな？")}catch(me){he(_e=>({..._e,error:`読み込めませんでした：${me.message}`}))}},de=I.length>220;return $.jsxs($.Fragment,{children:[$.jsx("div",{className:"space","aria-hidden":!0}),$.jsx("canvas",{ref:i,className:"stage"}),c.clock&&$.jsx(WM,{corner:c.clockCorner,seconds:c.seconds}),$.jsxs("div",{className:"top-actions",children:[$.jsx("button",{className:"icon-btn glow",onClick:()=>Y(a.provider),"aria-label":"APIキーの取り方",children:"?"}),$.jsx("button",{className:"icon-btn glow",onClick:()=>z(!0),"aria-label":"設定",children:"⚙"})]}),$.jsx("div",{ref:t,className:`bubble glass ${I?"show":""}`,"aria-live":"polite",onClick:()=>de&&L(!0),children:I&&$.jsxs($.Fragment,{children:[$.jsx("div",{className:"bubble-name",children:n.name}),$.jsx("div",{className:"bubble-text",children:$.jsx(I0,{text:de?`…${I.slice(-200)}`:I})}),de&&!x&&$.jsx("div",{className:"bubble-more",children:"タップで全文"})]})}),$.jsx(FM,{name:n.name,messages:v,busy:x||!m,open:N,onToggle:()=>L(!N),onSend:ne,onStop:()=>le.current?.abort(),onHeight:ce}),D&&$.jsx(oS,{persona:n,ai:a,display:c,keys:h,usage:E,hasVrm:J.has,vrmName:J.name,vrmError:J.error,onPersona:s,onAi:l,onDisplay:d,onKey:He,onVrm:ie,onResetUsage:()=>y({input:0,output:0}),onClearChat:()=>S([]),available:C,onLoadModels:Q=>ze(Q,h[Q]),onTest:Q=>tS(Q,h[Q],a.models[Q]),onGuide:Q=>{z(!1),Y(Q)},initialTab:D==="ai"?"ai":void 0,onClose:()=>z(!1)}),B&&$.jsx(jM,{initial:B,configured:h,onSetup:Q=>{l(me=>({...me,provider:Q})),Y(null),z("ai"),te("コピーしたキーを「APIキー」の欄に貼って、保存を押してね")},onClose:()=>Y(null)})]})}OM.createRoot(document.getElementById("root")).render($.jsx(vt.StrictMode,{children:$.jsx(_L,{})}));
