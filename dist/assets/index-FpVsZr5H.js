function zu(n,t){for(var a=0;a<t.length;a++){const s=t[a];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in n)){const i=Object.getOwnPropertyDescriptor(s,r);i&&Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();function _u(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var pc={exports:{}},Ps={},hc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),Wu=Symbol.for("react.portal"),Hu=Symbol.for("react.fragment"),Fu=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),Ou=Symbol.for("react.provider"),Uu=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),$u=Symbol.for("react.memo"),qu=Symbol.for("react.lazy"),wl=Symbol.iterator;function Xu(n){return n===null||typeof n!="object"?null:(n=wl&&n[wl]||n["@@iterator"],typeof n=="function"?n:null)}var fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gc=Object.assign,xc={};function Ct(n,t,a){this.props=n,this.context=t,this.refs=xc,this.updater=a||fc}Ct.prototype.isReactComponent={};Ct.prototype.setState=function(n,t){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,t,"setState")};Ct.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function vc(){}vc.prototype=Ct.prototype;function ji(n,t,a){this.props=n,this.context=t,this.refs=xc,this.updater=a||fc}var wi=ji.prototype=new vc;wi.constructor=ji;gc(wi,Ct.prototype);wi.isPureReactComponent=!0;var Nl=Array.isArray,yc=Object.prototype.hasOwnProperty,Ni={current:null},bc={key:!0,ref:!0,__self:!0,__source:!0};function jc(n,t,a){var s,r={},i=null,l=null;if(t!=null)for(s in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)yc.call(t,s)&&!bc.hasOwnProperty(s)&&(r[s]=t[s]);var o=arguments.length-2;if(o===1)r.children=a;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];r.children=c}if(n&&n.defaultProps)for(s in o=n.defaultProps,o)r[s]===void 0&&(r[s]=o[s]);return{$$typeof:Na,type:n,key:i,ref:l,props:r,_owner:Ni.current}}function Ju(n,t){return{$$typeof:Na,type:n.type,key:t,ref:n.ref,props:n.props,_owner:n._owner}}function Si(n){return typeof n=="object"&&n!==null&&n.$$typeof===Na}function Ku(n){var t={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(a){return t[a]})}var Sl=/\/+/g;function Qs(n,t){return typeof n=="object"&&n!==null&&n.key!=null?Ku(""+n.key):t.toString(36)}function qa(n,t,a,s,r){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var l=!1;if(n===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case Na:case Wu:l=!0}}if(l)return l=n,r=r(l),n=s===""?"."+Qs(l,0):s,Nl(r)?(a="",n!=null&&(a=n.replace(Sl,"$&/")+"/"),qa(r,t,a,"",function(d){return d})):r!=null&&(Si(r)&&(r=Ju(r,a+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Sl,"$&/")+"/")+n)),t.push(r)),1;if(l=0,s=s===""?".":s+":",Nl(n))for(var o=0;o<n.length;o++){i=n[o];var c=s+Qs(i,o);l+=qa(i,t,a,c,r)}else if(c=Xu(n),typeof c=="function")for(n=c.call(n),o=0;!(i=n.next()).done;)i=i.value,c=s+Qs(i,o++),l+=qa(i,t,a,c,r);else if(i==="object")throw t=String(n),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Pa(n,t,a){if(n==null)return n;var s=[],r=0;return qa(n,s,"","",function(i){return t.call(a,i,r++)}),s}function Qu(n){if(n._status===-1){var t=n._result;t=t(),t.then(function(a){(n._status===0||n._status===-1)&&(n._status=1,n._result=a)},function(a){(n._status===0||n._status===-1)&&(n._status=2,n._result=a)}),n._status===-1&&(n._status=0,n._result=t)}if(n._status===1)return n._result.default;throw n._result}var ve={current:null},Xa={transition:null},Zu={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:Ni};function wc(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Pa,forEach:function(n,t,a){Pa(n,function(){t.apply(this,arguments)},a)},count:function(n){var t=0;return Pa(n,function(){t++}),t},toArray:function(n){return Pa(n,function(t){return t})||[]},only:function(n){if(!Si(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};L.Component=Ct;L.Fragment=Hu;L.Profiler=Gu;L.PureComponent=ji;L.StrictMode=Fu;L.Suspense=Yu;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zu;L.act=wc;L.cloneElement=function(n,t,a){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var s=gc({},n.props),r=n.key,i=n.ref,l=n._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ni.current),t.key!==void 0&&(r=""+t.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(c in t)yc.call(t,c)&&!bc.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=a;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];s.children=o}return{$$typeof:Na,type:n.type,key:r,ref:i,props:s,_owner:l}};L.createContext=function(n){return n={$$typeof:Uu,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Ou,_context:n},n.Consumer=n};L.createElement=jc;L.createFactory=function(n){var t=jc.bind(null,n);return t.type=n,t};L.createRef=function(){return{current:null}};L.forwardRef=function(n){return{$$typeof:Vu,render:n}};L.isValidElement=Si;L.lazy=function(n){return{$$typeof:qu,_payload:{_status:-1,_result:n},_init:Qu}};L.memo=function(n,t){return{$$typeof:$u,type:n,compare:t===void 0?null:t}};L.startTransition=function(n){var t=Xa.transition;Xa.transition={};try{n()}finally{Xa.transition=t}};L.unstable_act=wc;L.useCallback=function(n,t){return ve.current.useCallback(n,t)};L.useContext=function(n){return ve.current.useContext(n)};L.useDebugValue=function(){};L.useDeferredValue=function(n){return ve.current.useDeferredValue(n)};L.useEffect=function(n,t){return ve.current.useEffect(n,t)};L.useId=function(){return ve.current.useId()};L.useImperativeHandle=function(n,t,a){return ve.current.useImperativeHandle(n,t,a)};L.useInsertionEffect=function(n,t){return ve.current.useInsertionEffect(n,t)};L.useLayoutEffect=function(n,t){return ve.current.useLayoutEffect(n,t)};L.useMemo=function(n,t){return ve.current.useMemo(n,t)};L.useReducer=function(n,t,a){return ve.current.useReducer(n,t,a)};L.useRef=function(n){return ve.current.useRef(n)};L.useState=function(n){return ve.current.useState(n)};L.useSyncExternalStore=function(n,t,a){return ve.current.useSyncExternalStore(n,t,a)};L.useTransition=function(){return ve.current.useTransition()};L.version="18.3.1";hc.exports=L;var y=hc.exports;const Nc=_u(y),em=zu({__proto__:null,default:Nc},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm=y,tm=Symbol.for("react.element"),am=Symbol.for("react.fragment"),sm=Object.prototype.hasOwnProperty,rm=nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,im={key:!0,ref:!0,__self:!0,__source:!0};function Sc(n,t,a){var s,r={},i=null,l=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(s in t)sm.call(t,s)&&!im.hasOwnProperty(s)&&(r[s]=t[s]);if(n&&n.defaultProps)for(s in t=n.defaultProps,t)r[s]===void 0&&(r[s]=t[s]);return{$$typeof:tm,type:n,key:i,ref:l,props:r,_owner:rm.current}}Ps.Fragment=am;Ps.jsx=Sc;Ps.jsxs=Sc;pc.exports=Ps;var e=pc.exports,kr={},kc={exports:{}},De={},Ec={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function t(A,P){var I=A.length;A.push(P);e:for(;0<I;){var V=I-1>>>1,K=A[V];if(0<r(K,P))A[V]=P,A[I]=K,I=V;else break e}}function a(A){return A.length===0?null:A[0]}function s(A){if(A.length===0)return null;var P=A[0],I=A.pop();if(I!==P){A[0]=I;e:for(var V=0,K=A.length,pn=K>>>1;V<pn;){var He=2*(V+1)-1,tt=A[He],Fe=He+1,at=A[Fe];if(0>r(tt,I))Fe<K&&0>r(at,tt)?(A[V]=at,A[Fe]=I,V=Fe):(A[V]=tt,A[He]=I,V=He);else if(Fe<K&&0>r(at,I))A[V]=at,A[Fe]=I,V=Fe;else break e}}return P}function r(A,P){var I=A.sortIndex-P.sortIndex;return I!==0?I:A.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var l=Date,o=l.now();n.unstable_now=function(){return l.now()-o}}var c=[],d=[],g=1,h=null,f=3,b=!1,j=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(A){for(var P=a(d);P!==null;){if(P.callback===null)s(d);else if(P.startTime<=A)s(d),P.sortIndex=P.expirationTime,t(c,P);else break;P=a(d)}}function v(A){if(w=!1,p(A),!j)if(a(c)!==null)j=!0,re(k);else{var P=a(d);P!==null&&mn(v,P.startTime-A)}}function k(A,P){j=!1,w&&(w=!1,m(T),T=-1),b=!0;var I=f;try{for(p(P),h=a(c);h!==null&&(!(h.expirationTime>P)||A&&!fe());){var V=h.callback;if(typeof V=="function"){h.callback=null,f=h.priorityLevel;var K=V(h.expirationTime<=P);P=n.unstable_now(),typeof K=="function"?h.callback=K:h===a(c)&&s(c),p(P)}else s(c);h=a(c)}if(h!==null)var pn=!0;else{var He=a(d);He!==null&&mn(v,He.startTime-P),pn=!1}return pn}finally{h=null,f=I,b=!1}}var C=!1,S=null,T=-1,z=5,R=-1;function fe(){return!(n.unstable_now()-R<z)}function Pe(){if(S!==null){var A=n.unstable_now();R=A;var P=!0;try{P=S(!0,A)}finally{P?We():(C=!1,S=null)}}else C=!1}var We;if(typeof u=="function")We=function(){u(Pe)};else if(typeof MessageChannel<"u"){var un=new MessageChannel,nt=un.port2;un.port1.onmessage=Pe,We=function(){nt.postMessage(null)}}else We=function(){E(Pe,0)};function re(A){S=A,C||(C=!0,We())}function mn(A,P){T=E(function(){A(n.unstable_now())},P)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(A){A.callback=null},n.unstable_continueExecution=function(){j||b||(j=!0,re(k))},n.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<A?Math.floor(1e3/A):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return a(c)},n.unstable_next=function(A){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var I=f;f=P;try{return A()}finally{f=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(A,P){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var I=f;f=A;try{return P()}finally{f=I}},n.unstable_scheduleCallback=function(A,P,I){var V=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,A){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=I+K,A={id:g++,callback:P,priorityLevel:A,startTime:I,expirationTime:K,sortIndex:-1},I>V?(A.sortIndex=I,t(d,A),a(c)===null&&A===a(d)&&(w?(m(T),T=-1):w=!0,mn(v,I-V))):(A.sortIndex=K,t(c,A),j||b||(j=!0,re(k))),A},n.unstable_shouldYield=fe,n.unstable_wrapCallback=function(A){var P=f;return function(){var I=f;f=P;try{return A.apply(this,arguments)}finally{f=I}}}})(Tc);Ec.exports=Tc;var lm=Ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om=y,Ae=lm;function N(n){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ac=new Set,sa={};function Zn(n,t){Nt(n,t),Nt(n+"Capture",t)}function Nt(n,t){for(sa[n]=t,n=0;n<t.length;n++)Ac.add(t[n])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Er=Object.prototype.hasOwnProperty,cm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kl={},El={};function dm(n){return Er.call(El,n)?!0:Er.call(kl,n)?!1:cm.test(n)?El[n]=!0:(kl[n]=!0,!1)}function um(n,t,a,s){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function mm(n,t,a,s){if(t===null||typeof t>"u"||um(n,t,a,s))return!0;if(s)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(n,t,a,s,r,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=a,this.propertyName=n,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){oe[n]=new ye(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var t=n[0];oe[t]=new ye(t,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){oe[n]=new ye(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){oe[n]=new ye(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){oe[n]=new ye(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){oe[n]=new ye(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){oe[n]=new ye(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){oe[n]=new ye(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){oe[n]=new ye(n,5,!1,n.toLowerCase(),null,!1,!1)});var ki=/[\-:]([a-z])/g;function Ei(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var t=n.replace(ki,Ei);oe[t]=new ye(t,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var t=n.replace(ki,Ei);oe[t]=new ye(t,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var t=n.replace(ki,Ei);oe[t]=new ye(t,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){oe[n]=new ye(n,1,!1,n.toLowerCase(),null,!1,!1)});oe.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){oe[n]=new ye(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ti(n,t,a,s){var r=oe.hasOwnProperty(t)?oe[t]:null;(r!==null?r.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mm(t,a,r,s)&&(a=null),s||r===null?dm(t)&&(a===null?n.removeAttribute(t):n.setAttribute(t,""+a)):r.mustUseProperty?n[r.propertyName]=a===null?r.type===3?!1:"":a:(t=r.attributeName,s=r.attributeNamespace,a===null?n.removeAttribute(t):(r=r.type,a=r===3||r===4&&a===!0?"":""+a,s?n.setAttributeNS(s,t,a):n.setAttribute(t,a))))}var dn=om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),rt=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),Ai=Symbol.for("react.strict_mode"),Tr=Symbol.for("react.profiler"),Dc=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),Di=Symbol.for("react.forward_ref"),Ar=Symbol.for("react.suspense"),Dr=Symbol.for("react.suspense_list"),Ci=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),Pc=Symbol.for("react.offscreen"),Tl=Symbol.iterator;function zt(n){return n===null||typeof n!="object"?null:(n=Tl&&n[Tl]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,Zs;function Vt(n){if(Zs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Zs=t&&t[1]||""}return`
`+Zs+n}var er=!1;function nr(n,t){if(!n||er)return"";er=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var s=d}Reflect.construct(n,[],t)}else{try{t.call()}catch(d){s=d}n.call(t.prototype)}else{try{throw Error()}catch(d){s=d}n()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),i=s.stack.split(`
`),l=r.length-1,o=i.length-1;1<=l&&0<=o&&r[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(r[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||r[l]!==i[o]){var c=`
`+r[l].replace(" at new "," at ");return n.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",n.displayName)),c}while(1<=l&&0<=o);break}}}finally{er=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Vt(n):""}function pm(n){switch(n.tag){case 5:return Vt(n.type);case 16:return Vt("Lazy");case 13:return Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 2:case 15:return n=nr(n.type,!1),n;case 11:return n=nr(n.type.render,!1),n;case 1:return n=nr(n.type,!0),n;default:return""}}function Cr(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case it:return"Fragment";case rt:return"Portal";case Tr:return"Profiler";case Ai:return"StrictMode";case Ar:return"Suspense";case Dr:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Cc:return(n.displayName||"Context")+".Consumer";case Dc:return(n._context.displayName||"Context")+".Provider";case Di:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ci:return t=n.displayName||null,t!==null?t:Cr(n.type)||"Memo";case xn:t=n._payload,n=n._init;try{return Cr(n(t))}catch{}}return null}function hm(n){var t=n.type;switch(n.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=t.render,n=n.displayName||n.name||"",t.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cr(t);case 8:return t===Ai?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ic(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fm(n){var t=Ic(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),s=""+n[t];if(!n.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return r.call(this)},set:function(l){s=""+l,i.call(this,l)}}),Object.defineProperty(n,t,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function Ra(n){n._valueTracker||(n._valueTracker=fm(n))}function Rc(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return n&&(s=Ic(n)?n.checked?"true":"false":n.value),n=s,n!==a?(t.setValue(n),!0):!1}function is(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Pr(n,t){var a=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Al(n,t){var a=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;a=Rn(t.value!=null?t.value:a),n._wrapperState={initialChecked:s,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lc(n,t){t=t.checked,t!=null&&Ti(n,"checked",t,!1)}function Ir(n,t){Lc(n,t);var a=Rn(t.value),s=t.type;if(a!=null)s==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(s==="submit"||s==="reset"){n.removeAttribute("value");return}t.hasOwnProperty("value")?Rr(n,t.type,a):t.hasOwnProperty("defaultValue")&&Rr(n,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(n.defaultChecked=!!t.defaultChecked)}function Dl(n,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+n._wrapperState.initialValue,a||t===n.value||(n.value=t),n.defaultValue=t}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rr(n,t,a){(t!=="number"||is(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Yt=Array.isArray;function xt(n,t,a,s){if(n=n.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<n.length;a++)r=t.hasOwnProperty("$"+n[a].value),n[a].selected!==r&&(n[a].selected=r),r&&s&&(n[a].defaultSelected=!0)}else{for(a=""+Rn(a),t=null,r=0;r<n.length;r++){if(n[r].value===a){n[r].selected=!0,s&&(n[r].defaultSelected=!0);return}t!==null||n[r].disabled||(t=n[r])}t!==null&&(t.selected=!0)}}function Lr(n,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Cl(n,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(N(92));if(Yt(a)){if(1<a.length)throw Error(N(93));a=a[0]}t=a}t==null&&(t=""),a=t}n._wrapperState={initialValue:Rn(a)}}function Mc(n,t){var a=Rn(t.value),s=Rn(t.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),t.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),s!=null&&(n.defaultValue=""+s)}function Pl(n){var t=n.textContent;t===n._wrapperState.initialValue&&t!==""&&t!==null&&(n.value=t)}function Bc(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mr(n,t){return n==null||n==="http://www.w3.org/1999/xhtml"?Bc(t):n==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var La,zc=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,s,r){MSApp.execUnsafeLocalFunction(function(){return n(t,a,s,r)})}:n}(function(n,t){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=t;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=La.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;t.firstChild;)n.appendChild(t.firstChild)}});function ra(n,t){if(t){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=t;return}}n.textContent=t}var Xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gm=["Webkit","ms","Moz","O"];Object.keys(Xt).forEach(function(n){gm.forEach(function(t){t=t+n.charAt(0).toUpperCase()+n.substring(1),Xt[t]=Xt[n]})});function _c(n,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Xt.hasOwnProperty(n)&&Xt[n]?(""+t).trim():t+"px"}function Wc(n,t){n=n.style;for(var a in t)if(t.hasOwnProperty(a)){var s=a.indexOf("--")===0,r=_c(a,t[a],s);a==="float"&&(a="cssFloat"),s?n.setProperty(a,r):n[a]=r}}var xm=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Br(n,t){if(t){if(xm[n]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,n));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function zr(n,t){if(n.indexOf("-")===-1)return typeof t.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _r=null;function Pi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Wr=null,vt=null,yt=null;function Il(n){if(n=Ea(n)){if(typeof Wr!="function")throw Error(N(280));var t=n.stateNode;t&&(t=Bs(t),Wr(n.stateNode,n.type,t))}}function Hc(n){vt?yt?yt.push(n):yt=[n]:vt=n}function Fc(){if(vt){var n=vt,t=yt;if(yt=vt=null,Il(n),t)for(n=0;n<t.length;n++)Il(t[n])}}function Gc(n,t){return n(t)}function Oc(){}var tr=!1;function Uc(n,t,a){if(tr)return n(t,a);tr=!0;try{return Gc(n,t,a)}finally{tr=!1,(vt!==null||yt!==null)&&(Oc(),Fc())}}function ia(n,t){var a=n.stateNode;if(a===null)return null;var s=Bs(a);if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(n=n.type,s=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!s;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(N(231,t,typeof a));return a}var Hr=!1;if(rn)try{var _t={};Object.defineProperty(_t,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",_t,_t),window.removeEventListener("test",_t,_t)}catch{Hr=!1}function vm(n,t,a,s,r,i,l,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(a,d)}catch(g){this.onError(g)}}var Jt=!1,ls=null,os=!1,Fr=null,ym={onError:function(n){Jt=!0,ls=n}};function bm(n,t,a,s,r,i,l,o,c){Jt=!1,ls=null,vm.apply(ym,arguments)}function jm(n,t,a,s,r,i,l,o,c){if(bm.apply(this,arguments),Jt){if(Jt){var d=ls;Jt=!1,ls=null}else throw Error(N(198));os||(os=!0,Fr=d)}}function et(n){var t=n,a=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,t.flags&4098&&(a=t.return),n=t.return;while(n)}return t.tag===3?a:null}function Vc(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function Rl(n){if(et(n)!==n)throw Error(N(188))}function wm(n){var t=n.alternate;if(!t){if(t=et(n),t===null)throw Error(N(188));return t!==n?null:n}for(var a=n,s=t;;){var r=a.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){a=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===a)return Rl(r),n;if(i===s)return Rl(r),t;i=i.sibling}throw Error(N(188))}if(a.return!==s.return)a=r,s=i;else{for(var l=!1,o=r.child;o;){if(o===a){l=!0,a=r,s=i;break}if(o===s){l=!0,s=r,a=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===a){l=!0,a=i,s=r;break}if(o===s){l=!0,s=i,a=r;break}o=o.sibling}if(!l)throw Error(N(189))}}if(a.alternate!==s)throw Error(N(190))}if(a.tag!==3)throw Error(N(188));return a.stateNode.current===a?n:t}function Yc(n){return n=wm(n),n!==null?$c(n):null}function $c(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var t=$c(n);if(t!==null)return t;n=n.sibling}return null}var qc=Ae.unstable_scheduleCallback,Ll=Ae.unstable_cancelCallback,Nm=Ae.unstable_shouldYield,Sm=Ae.unstable_requestPaint,Q=Ae.unstable_now,km=Ae.unstable_getCurrentPriorityLevel,Ii=Ae.unstable_ImmediatePriority,Xc=Ae.unstable_UserBlockingPriority,cs=Ae.unstable_NormalPriority,Em=Ae.unstable_LowPriority,Jc=Ae.unstable_IdlePriority,Is=null,Qe=null;function Tm(n){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Is,n,void 0,(n.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Cm,Am=Math.log,Dm=Math.LN2;function Cm(n){return n>>>=0,n===0?32:31-(Am(n)/Dm|0)|0}var Ma=64,Ba=4194304;function $t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ds(n,t){var a=n.pendingLanes;if(a===0)return 0;var s=0,r=n.suspendedLanes,i=n.pingedLanes,l=a&268435455;if(l!==0){var o=l&~r;o!==0?s=$t(o):(i&=l,i!==0&&(s=$t(i)))}else l=a&~r,l!==0?s=$t(l):i!==0&&(s=$t(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&r)&&(r=s&-s,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if(s&4&&(s|=a&16),t=n.entangledLanes,t!==0)for(n=n.entanglements,t&=s;0<t;)a=31-Ye(t),r=1<<a,s|=n[a],t&=~r;return s}function Pm(n,t){switch(n){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Im(n,t){for(var a=n.suspendedLanes,s=n.pingedLanes,r=n.expirationTimes,i=n.pendingLanes;0<i;){var l=31-Ye(i),o=1<<l,c=r[l];c===-1?(!(o&a)||o&s)&&(r[l]=Pm(o,t)):c<=t&&(n.expiredLanes|=o),i&=~o}}function Gr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Kc(){var n=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),n}function ar(n){for(var t=[],a=0;31>a;a++)t.push(n);return t}function Sa(n,t,a){n.pendingLanes|=t,t!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,t=31-Ye(t),n[t]=a}function Rm(n,t){var a=n.pendingLanes&~t;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=t,n.mutableReadLanes&=t,n.entangledLanes&=t,t=n.entanglements;var s=n.eventTimes;for(n=n.expirationTimes;0<a;){var r=31-Ye(a),i=1<<r;t[r]=0,s[r]=-1,n[r]=-1,a&=~i}}function Ri(n,t){var a=n.entangledLanes|=t;for(n=n.entanglements;a;){var s=31-Ye(a),r=1<<s;r&t|n[s]&t&&(n[s]|=t),a&=~r}}var H=0;function Qc(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Zc,Li,ed,nd,td,Or=!1,za=[],Sn=null,kn=null,En=null,la=new Map,oa=new Map,yn=[],Lm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ml(n,t){switch(n){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":la.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(t.pointerId)}}function Wt(n,t,a,s,r,i){return n===null||n.nativeEvent!==i?(n={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Ea(t),t!==null&&Li(t)),n):(n.eventSystemFlags|=s,t=n.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),n)}function Mm(n,t,a,s,r){switch(t){case"focusin":return Sn=Wt(Sn,n,t,a,s,r),!0;case"dragenter":return kn=Wt(kn,n,t,a,s,r),!0;case"mouseover":return En=Wt(En,n,t,a,s,r),!0;case"pointerover":var i=r.pointerId;return la.set(i,Wt(la.get(i)||null,n,t,a,s,r)),!0;case"gotpointercapture":return i=r.pointerId,oa.set(i,Wt(oa.get(i)||null,n,t,a,s,r)),!0}return!1}function ad(n){var t=On(n.target);if(t!==null){var a=et(t);if(a!==null){if(t=a.tag,t===13){if(t=Vc(a),t!==null){n.blockedOn=t,td(n.priority,function(){ed(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ja(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var a=Ur(n.domEventName,n.eventSystemFlags,t[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var s=new a.constructor(a.type,a);_r=s,a.target.dispatchEvent(s),_r=null}else return t=Ea(a),t!==null&&Li(t),n.blockedOn=a,!1;t.shift()}return!0}function Bl(n,t,a){Ja(n)&&a.delete(t)}function Bm(){Or=!1,Sn!==null&&Ja(Sn)&&(Sn=null),kn!==null&&Ja(kn)&&(kn=null),En!==null&&Ja(En)&&(En=null),la.forEach(Bl),oa.forEach(Bl)}function Ht(n,t){n.blockedOn===t&&(n.blockedOn=null,Or||(Or=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Bm)))}function ca(n){function t(r){return Ht(r,n)}if(0<za.length){Ht(za[0],n);for(var a=1;a<za.length;a++){var s=za[a];s.blockedOn===n&&(s.blockedOn=null)}}for(Sn!==null&&Ht(Sn,n),kn!==null&&Ht(kn,n),En!==null&&Ht(En,n),la.forEach(t),oa.forEach(t),a=0;a<yn.length;a++)s=yn[a],s.blockedOn===n&&(s.blockedOn=null);for(;0<yn.length&&(a=yn[0],a.blockedOn===null);)ad(a),a.blockedOn===null&&yn.shift()}var bt=dn.ReactCurrentBatchConfig,us=!0;function zm(n,t,a,s){var r=H,i=bt.transition;bt.transition=null;try{H=1,Mi(n,t,a,s)}finally{H=r,bt.transition=i}}function _m(n,t,a,s){var r=H,i=bt.transition;bt.transition=null;try{H=4,Mi(n,t,a,s)}finally{H=r,bt.transition=i}}function Mi(n,t,a,s){if(us){var r=Ur(n,t,a,s);if(r===null)pr(n,t,s,ms,a),Ml(n,s);else if(Mm(r,n,t,a,s))s.stopPropagation();else if(Ml(n,s),t&4&&-1<Lm.indexOf(n)){for(;r!==null;){var i=Ea(r);if(i!==null&&Zc(i),i=Ur(n,t,a,s),i===null&&pr(n,t,s,ms,a),i===r)break;r=i}r!==null&&s.stopPropagation()}else pr(n,t,s,null,a)}}var ms=null;function Ur(n,t,a,s){if(ms=null,n=Pi(s),n=On(n),n!==null)if(t=et(n),t===null)n=null;else if(a=t.tag,a===13){if(n=Vc(t),n!==null)return n;n=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null);return ms=n,null}function sd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(km()){case Ii:return 1;case Xc:return 4;case cs:case Em:return 16;case Jc:return 536870912;default:return 16}default:return 16}}var jn=null,Bi=null,Ka=null;function rd(){if(Ka)return Ka;var n,t=Bi,a=t.length,s,r="value"in jn?jn.value:jn.textContent,i=r.length;for(n=0;n<a&&t[n]===r[n];n++);var l=a-n;for(s=1;s<=l&&t[a-s]===r[i-s];s++);return Ka=r.slice(n,1<s?1-s:void 0)}function Qa(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function _a(){return!0}function zl(){return!1}function Ce(n){function t(a,s,r,i,l){this._reactName=a,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(a=n[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_a:zl,this.isPropagationStopped=zl,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),t}var Pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=Ce(Pt),ka=X({},Pt,{view:0,detail:0}),Wm=Ce(ka),sr,rr,Ft,Rs=X({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_i,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ft&&(Ft&&n.type==="mousemove"?(sr=n.screenX-Ft.screenX,rr=n.screenY-Ft.screenY):rr=sr=0,Ft=n),sr)},movementY:function(n){return"movementY"in n?n.movementY:rr}}),_l=Ce(Rs),Hm=X({},Rs,{dataTransfer:0}),Fm=Ce(Hm),Gm=X({},ka,{relatedTarget:0}),ir=Ce(Gm),Om=X({},Pt,{animationName:0,elapsedTime:0,pseudoElement:0}),Um=Ce(Om),Vm=X({},Pt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ym=Ce(Vm),$m=X({},Pt,{data:0}),Wl=Ce($m),qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Km(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=Jm[n])?!!t[n]:!1}function _i(){return Km}var Qm=X({},ka,{key:function(n){if(n.key){var t=qm[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=Qa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xm[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_i,charCode:function(n){return n.type==="keypress"?Qa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zm=Ce(Qm),ep=X({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hl=Ce(ep),np=X({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_i}),tp=Ce(np),ap=X({},Pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),sp=Ce(ap),rp=X({},Rs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ip=Ce(rp),lp=[9,13,27,32],Wi=rn&&"CompositionEvent"in window,Kt=null;rn&&"documentMode"in document&&(Kt=document.documentMode);var op=rn&&"TextEvent"in window&&!Kt,id=rn&&(!Wi||Kt&&8<Kt&&11>=Kt),Fl=" ",Gl=!1;function ld(n,t){switch(n){case"keyup":return lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var lt=!1;function cp(n,t){switch(n){case"compositionend":return od(t);case"keypress":return t.which!==32?null:(Gl=!0,Fl);case"textInput":return n=t.data,n===Fl&&Gl?null:n;default:return null}}function dp(n,t){if(lt)return n==="compositionend"||!Wi&&ld(n,t)?(n=rd(),Ka=Bi=jn=null,lt=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return id&&t.locale!=="ko"?null:t.data;default:return null}}var up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ol(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!up[n.type]:t==="textarea"}function cd(n,t,a,s){Hc(s),t=ps(t,"onChange"),0<t.length&&(a=new zi("onChange","change",null,a,s),n.push({event:a,listeners:t}))}var Qt=null,da=null;function mp(n){bd(n,0)}function Ls(n){var t=dt(n);if(Rc(t))return n}function pp(n,t){if(n==="change")return t}var dd=!1;if(rn){var lr;if(rn){var or="oninput"in document;if(!or){var Ul=document.createElement("div");Ul.setAttribute("oninput","return;"),or=typeof Ul.oninput=="function"}lr=or}else lr=!1;dd=lr&&(!document.documentMode||9<document.documentMode)}function Vl(){Qt&&(Qt.detachEvent("onpropertychange",ud),da=Qt=null)}function ud(n){if(n.propertyName==="value"&&Ls(da)){var t=[];cd(t,da,n,Pi(n)),Uc(mp,t)}}function hp(n,t,a){n==="focusin"?(Vl(),Qt=t,da=a,Qt.attachEvent("onpropertychange",ud)):n==="focusout"&&Vl()}function fp(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ls(da)}function gp(n,t){if(n==="click")return Ls(t)}function xp(n,t){if(n==="input"||n==="change")return Ls(t)}function vp(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var qe=typeof Object.is=="function"?Object.is:vp;function ua(n,t){if(qe(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var a=Object.keys(n),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var r=a[s];if(!Er.call(t,r)||!qe(n[r],t[r]))return!1}return!0}function Yl(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $l(n,t){var a=Yl(n);n=0;for(var s;a;){if(a.nodeType===3){if(s=n+a.textContent.length,n<=t&&s>=t)return{node:a,offset:t-n};n=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yl(a)}}function md(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?md(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function pd(){for(var n=window,t=is();t instanceof n.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)n=t.contentWindow;else break;t=is(n.document)}return t}function Hi(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}function yp(n){var t=pd(),a=n.focusedElem,s=n.selectionRange;if(t!==a&&a&&a.ownerDocument&&md(a.ownerDocument.documentElement,a)){if(s!==null&&Hi(a)){if(t=s.start,n=s.end,n===void 0&&(n=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(n,a.value.length);else if(n=(t=a.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var r=a.textContent.length,i=Math.min(s.start,r);s=s.end===void 0?i:Math.min(s.end,r),!n.extend&&i>s&&(r=s,s=i,i=r),r=$l(a,i);var l=$l(a,s);r&&l&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==l.node||n.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),n.removeAllRanges(),i>s?(n.addRange(t),n.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),n.addRange(t)))}}for(t=[],n=a;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)n=t[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var bp=rn&&"documentMode"in document&&11>=document.documentMode,ot=null,Vr=null,Zt=null,Yr=!1;function ql(n,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yr||ot==null||ot!==is(s)||(s=ot,"selectionStart"in s&&Hi(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Zt&&ua(Zt,s)||(Zt=s,s=ps(Vr,"onSelect"),0<s.length&&(t=new zi("onSelect","select",null,t,a),n.push({event:t,listeners:s}),t.target=ot)))}function Wa(n,t){var a={};return a[n.toLowerCase()]=t.toLowerCase(),a["Webkit"+n]="webkit"+t,a["Moz"+n]="moz"+t,a}var ct={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},cr={},hd={};rn&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete ct.animationend.animation,delete ct.animationiteration.animation,delete ct.animationstart.animation),"TransitionEvent"in window||delete ct.transitionend.transition);function Ms(n){if(cr[n])return cr[n];if(!ct[n])return n;var t=ct[n],a;for(a in t)if(t.hasOwnProperty(a)&&a in hd)return cr[n]=t[a];return n}var fd=Ms("animationend"),gd=Ms("animationiteration"),xd=Ms("animationstart"),vd=Ms("transitionend"),yd=new Map,Xl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(n,t){yd.set(n,t),Zn(t,[n])}for(var dr=0;dr<Xl.length;dr++){var ur=Xl[dr],jp=ur.toLowerCase(),wp=ur[0].toUpperCase()+ur.slice(1);Mn(jp,"on"+wp)}Mn(fd,"onAnimationEnd");Mn(gd,"onAnimationIteration");Mn(xd,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(vd,"onTransitionEnd");Nt("onMouseEnter",["mouseout","mouseover"]);Nt("onMouseLeave",["mouseout","mouseover"]);Nt("onPointerEnter",["pointerout","pointerover"]);Nt("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Np=new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));function Jl(n,t,a){var s=n.type||"unknown-event";n.currentTarget=a,jm(s,t,void 0,n),n.currentTarget=null}function bd(n,t){t=(t&4)!==0;for(var a=0;a<n.length;a++){var s=n[a],r=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var l=s.length-1;0<=l;l--){var o=s[l],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==i&&r.isPropagationStopped())break e;Jl(r,o,d),i=c}else for(l=0;l<s.length;l++){if(o=s[l],c=o.instance,d=o.currentTarget,o=o.listener,c!==i&&r.isPropagationStopped())break e;Jl(r,o,d),i=c}}}if(os)throw n=Fr,os=!1,Fr=null,n}function O(n,t){var a=t[Kr];a===void 0&&(a=t[Kr]=new Set);var s=n+"__bubble";a.has(s)||(jd(t,n,2,!1),a.add(s))}function mr(n,t,a){var s=0;t&&(s|=4),jd(a,n,s,t)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function ma(n){if(!n[Ha]){n[Ha]=!0,Ac.forEach(function(a){a!=="selectionchange"&&(Np.has(a)||mr(a,!1,n),mr(a,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[Ha]||(t[Ha]=!0,mr("selectionchange",!1,t))}}function jd(n,t,a,s){switch(sd(t)){case 1:var r=zm;break;case 4:r=_m;break;default:r=Mi}a=r.bind(null,t,a,n),r=void 0,!Hr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),s?r!==void 0?n.addEventListener(t,a,{capture:!0,passive:r}):n.addEventListener(t,a,!0):r!==void 0?n.addEventListener(t,a,{passive:r}):n.addEventListener(t,a,!1)}function pr(n,t,a,s,r){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var o=s.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;l=l.return}for(;o!==null;){if(l=On(o),l===null)return;if(c=l.tag,c===5||c===6){s=i=l;continue e}o=o.parentNode}}s=s.return}Uc(function(){var d=i,g=Pi(a),h=[];e:{var f=yd.get(n);if(f!==void 0){var b=zi,j=n;switch(n){case"keypress":if(Qa(a)===0)break e;case"keydown":case"keyup":b=Zm;break;case"focusin":j="focus",b=ir;break;case"focusout":j="blur",b=ir;break;case"beforeblur":case"afterblur":b=ir;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=_l;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=tp;break;case fd:case gd:case xd:b=Um;break;case vd:b=sp;break;case"scroll":b=Wm;break;case"wheel":b=ip;break;case"copy":case"cut":case"paste":b=Ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Hl}var w=(t&4)!==0,E=!w&&n==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var u=d,p;u!==null;){p=u;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,m!==null&&(v=ia(u,m),v!=null&&w.push(pa(u,v,p)))),E)break;u=u.return}0<w.length&&(f=new b(f,j,null,a,g),h.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=n==="mouseover"||n==="pointerover",b=n==="mouseout"||n==="pointerout",f&&a!==_r&&(j=a.relatedTarget||a.fromElement)&&(On(j)||j[ln]))break e;if((b||f)&&(f=g.window===g?g:(f=g.ownerDocument)?f.defaultView||f.parentWindow:window,b?(j=a.relatedTarget||a.toElement,b=d,j=j?On(j):null,j!==null&&(E=et(j),j!==E||j.tag!==5&&j.tag!==6)&&(j=null)):(b=null,j=d),b!==j)){if(w=_l,v="onMouseLeave",m="onMouseEnter",u="mouse",(n==="pointerout"||n==="pointerover")&&(w=Hl,v="onPointerLeave",m="onPointerEnter",u="pointer"),E=b==null?f:dt(b),p=j==null?f:dt(j),f=new w(v,u+"leave",b,a,g),f.target=E,f.relatedTarget=p,v=null,On(g)===d&&(w=new w(m,u+"enter",j,a,g),w.target=p,w.relatedTarget=E,v=w),E=v,b&&j)n:{for(w=b,m=j,u=0,p=w;p;p=st(p))u++;for(p=0,v=m;v;v=st(v))p++;for(;0<u-p;)w=st(w),u--;for(;0<p-u;)m=st(m),p--;for(;u--;){if(w===m||m!==null&&w===m.alternate)break n;w=st(w),m=st(m)}w=null}else w=null;b!==null&&Kl(h,f,b,w,!1),j!==null&&E!==null&&Kl(h,E,j,w,!0)}}e:{if(f=d?dt(d):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var k=pp;else if(Ol(f))if(dd)k=xp;else{k=fp;var C=hp}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=gp);if(k&&(k=k(n,d))){cd(h,k,a,g);break e}C&&C(n,f,d),n==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Rr(f,"number",f.value)}switch(C=d?dt(d):window,n){case"focusin":(Ol(C)||C.contentEditable==="true")&&(ot=C,Vr=d,Zt=null);break;case"focusout":Zt=Vr=ot=null;break;case"mousedown":Yr=!0;break;case"contextmenu":case"mouseup":case"dragend":Yr=!1,ql(h,a,g);break;case"selectionchange":if(bp)break;case"keydown":case"keyup":ql(h,a,g)}var S;if(Wi)e:{switch(n){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else lt?ld(n,a)&&(T="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(T="onCompositionStart");T&&(id&&a.locale!=="ko"&&(lt||T!=="onCompositionStart"?T==="onCompositionEnd"&&lt&&(S=rd()):(jn=g,Bi="value"in jn?jn.value:jn.textContent,lt=!0)),C=ps(d,T),0<C.length&&(T=new Wl(T,n,null,a,g),h.push({event:T,listeners:C}),S?T.data=S:(S=od(a),S!==null&&(T.data=S)))),(S=op?cp(n,a):dp(n,a))&&(d=ps(d,"onBeforeInput"),0<d.length&&(g=new Wl("onBeforeInput","beforeinput",null,a,g),h.push({event:g,listeners:d}),g.data=S))}bd(h,t)})}function pa(n,t,a){return{instance:n,listener:t,currentTarget:a}}function ps(n,t){for(var a=t+"Capture",s=[];n!==null;){var r=n,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=ia(n,a),i!=null&&s.unshift(pa(n,i,r)),i=ia(n,t),i!=null&&s.push(pa(n,i,r))),n=n.return}return s}function st(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kl(n,t,a,s,r){for(var i=t._reactName,l=[];a!==null&&a!==s;){var o=a,c=o.alternate,d=o.stateNode;if(c!==null&&c===s)break;o.tag===5&&d!==null&&(o=d,r?(c=ia(a,i),c!=null&&l.unshift(pa(a,c,o))):r||(c=ia(a,i),c!=null&&l.push(pa(a,c,o)))),a=a.return}l.length!==0&&n.push({event:t,listeners:l})}var Sp=/\r\n?/g,kp=/\u0000|\uFFFD/g;function Ql(n){return(typeof n=="string"?n:""+n).replace(Sp,`
`).replace(kp,"")}function Fa(n,t,a){if(t=Ql(t),Ql(n)!==t&&a)throw Error(N(425))}function hs(){}var $r=null,qr=null;function Xr(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jr=typeof setTimeout=="function"?setTimeout:void 0,Ep=typeof clearTimeout=="function"?clearTimeout:void 0,Zl=typeof Promise=="function"?Promise:void 0,Tp=typeof queueMicrotask=="function"?queueMicrotask:typeof Zl<"u"?function(n){return Zl.resolve(null).then(n).catch(Ap)}:Jr;function Ap(n){setTimeout(function(){throw n})}function hr(n,t){var a=t,s=0;do{var r=a.nextSibling;if(n.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(s===0){n.removeChild(r),ca(t);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=r}while(a);ca(t)}function Tn(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return n}function eo(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return n;t--}else a==="/$"&&t++}n=n.previousSibling}return null}var It=Math.random().toString(36).slice(2),Ke="__reactFiber$"+It,ha="__reactProps$"+It,ln="__reactContainer$"+It,Kr="__reactEvents$"+It,Dp="__reactListeners$"+It,Cp="__reactHandles$"+It;function On(n){var t=n[Ke];if(t)return t;for(var a=n.parentNode;a;){if(t=a[ln]||a[Ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(n=eo(n);n!==null;){if(a=n[Ke])return a;n=eo(n)}return t}n=a,a=n.parentNode}return null}function Ea(n){return n=n[Ke]||n[ln],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function dt(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(N(33))}function Bs(n){return n[ha]||null}var Qr=[],ut=-1;function Bn(n){return{current:n}}function U(n){0>ut||(n.current=Qr[ut],Qr[ut]=null,ut--)}function F(n,t){ut++,Qr[ut]=n.current,n.current=t}var Ln={},pe=Bn(Ln),we=Bn(!1),qn=Ln;function St(n,t){var a=n.type.contextTypes;if(!a)return Ln;var s=n.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in a)r[i]=t[i];return s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=t,n.__reactInternalMemoizedMaskedChildContext=r),r}function Ne(n){return n=n.childContextTypes,n!=null}function fs(){U(we),U(pe)}function no(n,t,a){if(pe.current!==Ln)throw Error(N(168));F(pe,t),F(we,a)}function wd(n,t,a){var s=n.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return a;s=s.getChildContext();for(var r in s)if(!(r in t))throw Error(N(108,hm(n)||"Unknown",r));return X({},a,s)}function gs(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ln,qn=pe.current,F(pe,n),F(we,we.current),!0}function to(n,t,a){var s=n.stateNode;if(!s)throw Error(N(169));a?(n=wd(n,t,qn),s.__reactInternalMemoizedMergedChildContext=n,U(we),U(pe),F(pe,n)):U(we),F(we,a)}var nn=null,zs=!1,fr=!1;function Nd(n){nn===null?nn=[n]:nn.push(n)}function Pp(n){zs=!0,Nd(n)}function zn(){if(!fr&&nn!==null){fr=!0;var n=0,t=H;try{var a=nn;for(H=1;n<a.length;n++){var s=a[n];do s=s(!0);while(s!==null)}nn=null,zs=!1}catch(r){throw nn!==null&&(nn=nn.slice(n+1)),qc(Ii,zn),r}finally{H=t,fr=!1}}return null}var mt=[],pt=0,xs=null,vs=0,Re=[],Le=0,Xn=null,tn=1,an="";function Fn(n,t){mt[pt++]=vs,mt[pt++]=xs,xs=n,vs=t}function Sd(n,t,a){Re[Le++]=tn,Re[Le++]=an,Re[Le++]=Xn,Xn=n;var s=tn;n=an;var r=32-Ye(s)-1;s&=~(1<<r),a+=1;var i=32-Ye(t)+r;if(30<i){var l=r-r%5;i=(s&(1<<l)-1).toString(32),s>>=l,r-=l,tn=1<<32-Ye(t)+r|a<<r|s,an=i+n}else tn=1<<i|a<<r|s,an=n}function Fi(n){n.return!==null&&(Fn(n,1),Sd(n,1,0))}function Gi(n){for(;n===xs;)xs=mt[--pt],mt[pt]=null,vs=mt[--pt],mt[pt]=null;for(;n===Xn;)Xn=Re[--Le],Re[Le]=null,an=Re[--Le],Re[Le]=null,tn=Re[--Le],Re[Le]=null}var Te=null,Ee=null,Y=!1,Ve=null;function kd(n,t){var a=Me(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=n,t=n.deletions,t===null?(n.deletions=[a],n.flags|=16):t.push(a)}function ao(n,t){switch(n.tag){case 5:var a=n.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(n.stateNode=t,Te=n,Ee=Tn(t.firstChild),!0):!1;case 6:return t=n.pendingProps===""||t.nodeType!==3?null:t,t!==null?(n.stateNode=t,Te=n,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Xn!==null?{id:tn,overflow:an}:null,n.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=Me(18,null,null,0),a.stateNode=t,a.return=n,n.child=a,Te=n,Ee=null,!0):!1;default:return!1}}function Zr(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ei(n){if(Y){var t=Ee;if(t){var a=t;if(!ao(n,t)){if(Zr(n))throw Error(N(418));t=Tn(a.nextSibling);var s=Te;t&&ao(n,t)?kd(s,a):(n.flags=n.flags&-4097|2,Y=!1,Te=n)}}else{if(Zr(n))throw Error(N(418));n.flags=n.flags&-4097|2,Y=!1,Te=n}}}function so(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Te=n}function Ga(n){if(n!==Te)return!1;if(!Y)return so(n),Y=!0,!1;var t;if((t=n.tag!==3)&&!(t=n.tag!==5)&&(t=n.type,t=t!=="head"&&t!=="body"&&!Xr(n.type,n.memoizedProps)),t&&(t=Ee)){if(Zr(n))throw Ed(),Error(N(418));for(;t;)kd(n,t),t=Tn(t.nextSibling)}if(so(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(N(317));e:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(t===0){Ee=Tn(n.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}n=n.nextSibling}Ee=null}}else Ee=Te?Tn(n.stateNode.nextSibling):null;return!0}function Ed(){for(var n=Ee;n;)n=Tn(n.nextSibling)}function kt(){Ee=Te=null,Y=!1}function Oi(n){Ve===null?Ve=[n]:Ve.push(n)}var Ip=dn.ReactCurrentBatchConfig;function Gt(n,t,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(N(309));var s=a.stateNode}if(!s)throw Error(N(147,n));var r=s,i=""+n;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var o=r.refs;l===null?delete o[i]:o[i]=l},t._stringRef=i,t)}if(typeof n!="string")throw Error(N(284));if(!a._owner)throw Error(N(290,n))}return n}function Oa(n,t){throw n=Object.prototype.toString.call(t),Error(N(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n))}function ro(n){var t=n._init;return t(n._payload)}function Td(n){function t(m,u){if(n){var p=m.deletions;p===null?(m.deletions=[u],m.flags|=16):p.push(u)}}function a(m,u){if(!n)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function s(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function r(m,u){return m=Pn(m,u),m.index=0,m.sibling=null,m}function i(m,u,p){return m.index=p,n?(p=m.alternate,p!==null?(p=p.index,p<u?(m.flags|=2,u):p):(m.flags|=2,u)):(m.flags|=1048576,u)}function l(m){return n&&m.alternate===null&&(m.flags|=2),m}function o(m,u,p,v){return u===null||u.tag!==6?(u=wr(p,m.mode,v),u.return=m,u):(u=r(u,p),u.return=m,u)}function c(m,u,p,v){var k=p.type;return k===it?g(m,u,p.props.children,v,p.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xn&&ro(k)===u.type)?(v=r(u,p.props),v.ref=Gt(m,u,p),v.return=m,v):(v=rs(p.type,p.key,p.props,null,m.mode,v),v.ref=Gt(m,u,p),v.return=m,v)}function d(m,u,p,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Nr(p,m.mode,v),u.return=m,u):(u=r(u,p.children||[]),u.return=m,u)}function g(m,u,p,v,k){return u===null||u.tag!==7?(u=$n(p,m.mode,v,k),u.return=m,u):(u=r(u,p),u.return=m,u)}function h(m,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=wr(""+u,m.mode,p),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ia:return p=rs(u.type,u.key,u.props,null,m.mode,p),p.ref=Gt(m,null,u),p.return=m,p;case rt:return u=Nr(u,m.mode,p),u.return=m,u;case xn:var v=u._init;return h(m,v(u._payload),p)}if(Yt(u)||zt(u))return u=$n(u,m.mode,p,null),u.return=m,u;Oa(m,u)}return null}function f(m,u,p,v){var k=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:o(m,u,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ia:return p.key===k?c(m,u,p,v):null;case rt:return p.key===k?d(m,u,p,v):null;case xn:return k=p._init,f(m,u,k(p._payload),v)}if(Yt(p)||zt(p))return k!==null?null:g(m,u,p,v,null);Oa(m,p)}return null}function b(m,u,p,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(p)||null,o(u,m,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ia:return m=m.get(v.key===null?p:v.key)||null,c(u,m,v,k);case rt:return m=m.get(v.key===null?p:v.key)||null,d(u,m,v,k);case xn:var C=v._init;return b(m,u,p,C(v._payload),k)}if(Yt(v)||zt(v))return m=m.get(p)||null,g(u,m,v,k,null);Oa(u,v)}return null}function j(m,u,p,v){for(var k=null,C=null,S=u,T=u=0,z=null;S!==null&&T<p.length;T++){S.index>T?(z=S,S=null):z=S.sibling;var R=f(m,S,p[T],v);if(R===null){S===null&&(S=z);break}n&&S&&R.alternate===null&&t(m,S),u=i(R,u,T),C===null?k=R:C.sibling=R,C=R,S=z}if(T===p.length)return a(m,S),Y&&Fn(m,T),k;if(S===null){for(;T<p.length;T++)S=h(m,p[T],v),S!==null&&(u=i(S,u,T),C===null?k=S:C.sibling=S,C=S);return Y&&Fn(m,T),k}for(S=s(m,S);T<p.length;T++)z=b(S,m,T,p[T],v),z!==null&&(n&&z.alternate!==null&&S.delete(z.key===null?T:z.key),u=i(z,u,T),C===null?k=z:C.sibling=z,C=z);return n&&S.forEach(function(fe){return t(m,fe)}),Y&&Fn(m,T),k}function w(m,u,p,v){var k=zt(p);if(typeof k!="function")throw Error(N(150));if(p=k.call(p),p==null)throw Error(N(151));for(var C=k=null,S=u,T=u=0,z=null,R=p.next();S!==null&&!R.done;T++,R=p.next()){S.index>T?(z=S,S=null):z=S.sibling;var fe=f(m,S,R.value,v);if(fe===null){S===null&&(S=z);break}n&&S&&fe.alternate===null&&t(m,S),u=i(fe,u,T),C===null?k=fe:C.sibling=fe,C=fe,S=z}if(R.done)return a(m,S),Y&&Fn(m,T),k;if(S===null){for(;!R.done;T++,R=p.next())R=h(m,R.value,v),R!==null&&(u=i(R,u,T),C===null?k=R:C.sibling=R,C=R);return Y&&Fn(m,T),k}for(S=s(m,S);!R.done;T++,R=p.next())R=b(S,m,T,R.value,v),R!==null&&(n&&R.alternate!==null&&S.delete(R.key===null?T:R.key),u=i(R,u,T),C===null?k=R:C.sibling=R,C=R);return n&&S.forEach(function(Pe){return t(m,Pe)}),Y&&Fn(m,T),k}function E(m,u,p,v){if(typeof p=="object"&&p!==null&&p.type===it&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ia:e:{for(var k=p.key,C=u;C!==null;){if(C.key===k){if(k=p.type,k===it){if(C.tag===7){a(m,C.sibling),u=r(C,p.props.children),u.return=m,m=u;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xn&&ro(k)===C.type){a(m,C.sibling),u=r(C,p.props),u.ref=Gt(m,C,p),u.return=m,m=u;break e}a(m,C);break}else t(m,C);C=C.sibling}p.type===it?(u=$n(p.props.children,m.mode,v,p.key),u.return=m,m=u):(v=rs(p.type,p.key,p.props,null,m.mode,v),v.ref=Gt(m,u,p),v.return=m,m=v)}return l(m);case rt:e:{for(C=p.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){a(m,u.sibling),u=r(u,p.children||[]),u.return=m,m=u;break e}else{a(m,u);break}else t(m,u);u=u.sibling}u=Nr(p,m.mode,v),u.return=m,m=u}return l(m);case xn:return C=p._init,E(m,u,C(p._payload),v)}if(Yt(p))return j(m,u,p,v);if(zt(p))return w(m,u,p,v);Oa(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(a(m,u.sibling),u=r(u,p),u.return=m,m=u):(a(m,u),u=wr(p,m.mode,v),u.return=m,m=u),l(m)):a(m,u)}return E}var Et=Td(!0),Ad=Td(!1),ys=Bn(null),bs=null,ht=null,Ui=null;function Vi(){Ui=ht=bs=null}function Yi(n){var t=ys.current;U(ys),n._currentValue=t}function ni(n,t,a){for(;n!==null;){var s=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),n===a)break;n=n.return}}function jt(n,t){bs=n,Ui=ht=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&t&&(je=!0),n.firstContext=null)}function ze(n){var t=n._currentValue;if(Ui!==n)if(n={context:n,memoizedValue:t,next:null},ht===null){if(bs===null)throw Error(N(308));ht=n,bs.dependencies={lanes:0,firstContext:n}}else ht=ht.next=n;return t}var Un=null;function $i(n){Un===null?Un=[n]:Un.push(n)}function Dd(n,t,a,s){var r=t.interleaved;return r===null?(a.next=a,$i(t)):(a.next=r.next,r.next=a),t.interleaved=a,on(n,s)}function on(n,t){n.lanes|=t;var a=n.alternate;for(a!==null&&(a.lanes|=t),a=n,n=n.return;n!==null;)n.childLanes|=t,a=n.alternate,a!==null&&(a.childLanes|=t),a=n,n=n.return;return a.tag===3?a.stateNode:null}var vn=!1;function qi(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cd(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function sn(n,t){return{eventTime:n,lane:t,tag:0,payload:null,callback:null,next:null}}function An(n,t,a){var s=n.updateQueue;if(s===null)return null;if(s=s.shared,B&2){var r=s.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),s.pending=t,on(n,a)}return r=s.interleaved,r===null?(t.next=t,$i(s)):(t.next=r.next,r.next=t),s.interleaved=t,on(n,a)}function Za(n,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var s=t.lanes;s&=n.pendingLanes,a|=s,t.lanes=a,Ri(n,a)}}function io(n,t){var a=n.updateQueue,s=n.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var r=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var l={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?r=i=l:i=i.next=l,a=a.next}while(a!==null);i===null?r=i=t:i=i.next=t}else r=i=t;a={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,effects:s.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=t:n.next=t,a.lastBaseUpdate=t}function js(n,t,a,s){var r=n.updateQueue;vn=!1;var i=r.firstBaseUpdate,l=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,d=c.next;c.next=null,l===null?i=d:l.next=d,l=c;var g=n.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==l&&(o===null?g.firstBaseUpdate=d:o.next=d,g.lastBaseUpdate=c))}if(i!==null){var h=r.baseState;l=0,g=d=c=null,o=i;do{var f=o.lane,b=o.eventTime;if((s&f)===f){g!==null&&(g=g.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var j=n,w=o;switch(f=t,b=a,w.tag){case 1:if(j=w.payload,typeof j=="function"){h=j.call(b,h,f);break e}h=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=w.payload,f=typeof j=="function"?j.call(b,h,f):j,f==null)break e;h=X({},h,f);break e;case 2:vn=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else b={eventTime:b,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(d=g=b,c=h):g=g.next=b,l|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(g===null&&(c=h),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=g,t=r.shared.interleaved,t!==null){r=t;do l|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);Kn|=l,n.lanes=l,n.memoizedState=h}}function lo(n,t,a){if(n=t.effects,t.effects=null,n!==null)for(t=0;t<n.length;t++){var s=n[t],r=s.callback;if(r!==null){if(s.callback=null,s=a,typeof r!="function")throw Error(N(191,r));r.call(s)}}}var Ta={},Ze=Bn(Ta),fa=Bn(Ta),ga=Bn(Ta);function Vn(n){if(n===Ta)throw Error(N(174));return n}function Xi(n,t){switch(F(ga,t),F(fa,n),F(Ze,Ta),n=t.nodeType,n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mr(null,"");break;default:n=n===8?t.parentNode:t,t=n.namespaceURI||null,n=n.tagName,t=Mr(t,n)}U(Ze),F(Ze,t)}function Tt(){U(Ze),U(fa),U(ga)}function Pd(n){Vn(ga.current);var t=Vn(Ze.current),a=Mr(t,n.type);t!==a&&(F(fa,n),F(Ze,a))}function Ji(n){fa.current===n&&(U(Ze),U(fa))}var $=Bn(0);function ws(n){for(var t=n;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gr=[];function Ki(){for(var n=0;n<gr.length;n++)gr[n]._workInProgressVersionPrimary=null;gr.length=0}var es=dn.ReactCurrentDispatcher,xr=dn.ReactCurrentBatchConfig,Jn=0,q=null,ne=null,ae=null,Ns=!1,ea=!1,xa=0,Rp=0;function ce(){throw Error(N(321))}function Qi(n,t){if(t===null)return!1;for(var a=0;a<t.length&&a<n.length;a++)if(!qe(n[a],t[a]))return!1;return!0}function Zi(n,t,a,s,r,i){if(Jn=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,es.current=n===null||n.memoizedState===null?zp:_p,n=a(s,r),ea){i=0;do{if(ea=!1,xa=0,25<=i)throw Error(N(301));i+=1,ae=ne=null,t.updateQueue=null,es.current=Wp,n=a(s,r)}while(ea)}if(es.current=Ss,t=ne!==null&&ne.next!==null,Jn=0,ae=ne=q=null,Ns=!1,t)throw Error(N(300));return n}function el(){var n=xa!==0;return xa=0,n}function Je(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?q.memoizedState=ae=n:ae=ae.next=n,ae}function _e(){if(ne===null){var n=q.alternate;n=n!==null?n.memoizedState:null}else n=ne.next;var t=ae===null?q.memoizedState:ae.next;if(t!==null)ae=t,ne=n;else{if(n===null)throw Error(N(310));ne=n,n={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ae===null?q.memoizedState=ae=n:ae=ae.next=n}return ae}function va(n,t){return typeof t=="function"?t(n):t}function vr(n){var t=_e(),a=t.queue;if(a===null)throw Error(N(311));a.lastRenderedReducer=n;var s=ne,r=s.baseQueue,i=a.pending;if(i!==null){if(r!==null){var l=r.next;r.next=i.next,i.next=l}s.baseQueue=r=i,a.pending=null}if(r!==null){i=r.next,s=s.baseState;var o=l=null,c=null,d=i;do{var g=d.lane;if((Jn&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:n(s,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=h,l=s):c=c.next=h,q.lanes|=g,Kn|=g}d=d.next}while(d!==null&&d!==i);c===null?l=s:c.next=o,qe(s,t.memoizedState)||(je=!0),t.memoizedState=s,t.baseState=l,t.baseQueue=c,a.lastRenderedState=s}if(n=a.interleaved,n!==null){r=n;do i=r.lane,q.lanes|=i,Kn|=i,r=r.next;while(r!==n)}else r===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function yr(n){var t=_e(),a=t.queue;if(a===null)throw Error(N(311));a.lastRenderedReducer=n;var s=a.dispatch,r=a.pending,i=t.memoizedState;if(r!==null){a.pending=null;var l=r=r.next;do i=n(i,l.action),l=l.next;while(l!==r);qe(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,s]}function Id(){}function Rd(n,t){var a=q,s=_e(),r=t(),i=!qe(s.memoizedState,r);if(i&&(s.memoizedState=r,je=!0),s=s.queue,nl(Bd.bind(null,a,s,n),[n]),s.getSnapshot!==t||i||ae!==null&&ae.memoizedState.tag&1){if(a.flags|=2048,ya(9,Md.bind(null,a,s,r,t),void 0,null),se===null)throw Error(N(349));Jn&30||Ld(a,t,r)}return r}function Ld(n,t,a){n.flags|=16384,n={getSnapshot:t,value:a},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[n]):(a=t.stores,a===null?t.stores=[n]:a.push(n))}function Md(n,t,a,s){t.value=a,t.getSnapshot=s,zd(t)&&_d(n)}function Bd(n,t,a){return a(function(){zd(t)&&_d(n)})}function zd(n){var t=n.getSnapshot;n=n.value;try{var a=t();return!qe(n,a)}catch{return!0}}function _d(n){var t=on(n,1);t!==null&&$e(t,n,1,-1)}function oo(n){var t=Je();return typeof n=="function"&&(n=n()),t.memoizedState=t.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:n},t.queue=n,n=n.dispatch=Bp.bind(null,q,n),[t.memoizedState,n]}function ya(n,t,a,s){return n={tag:n,create:t,destroy:a,deps:s,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=n.next=n):(a=t.lastEffect,a===null?t.lastEffect=n.next=n:(s=a.next,a.next=n,n.next=s,t.lastEffect=n)),n}function Wd(){return _e().memoizedState}function ns(n,t,a,s){var r=Je();q.flags|=n,r.memoizedState=ya(1|t,a,void 0,s===void 0?null:s)}function _s(n,t,a,s){var r=_e();s=s===void 0?null:s;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,s!==null&&Qi(s,l.deps)){r.memoizedState=ya(t,a,i,s);return}}q.flags|=n,r.memoizedState=ya(1|t,a,i,s)}function co(n,t){return ns(8390656,8,n,t)}function nl(n,t){return _s(2048,8,n,t)}function Hd(n,t){return _s(4,2,n,t)}function Fd(n,t){return _s(4,4,n,t)}function Gd(n,t){if(typeof t=="function")return n=n(),t(n),function(){t(null)};if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function Od(n,t,a){return a=a!=null?a.concat([n]):null,_s(4,4,Gd.bind(null,t,n),a)}function tl(){}function Ud(n,t){var a=_e();t=t===void 0?null:t;var s=a.memoizedState;return s!==null&&t!==null&&Qi(t,s[1])?s[0]:(a.memoizedState=[n,t],n)}function Vd(n,t){var a=_e();t=t===void 0?null:t;var s=a.memoizedState;return s!==null&&t!==null&&Qi(t,s[1])?s[0]:(n=n(),a.memoizedState=[n,t],n)}function Yd(n,t,a){return Jn&21?(qe(a,t)||(a=Kc(),q.lanes|=a,Kn|=a,n.baseState=!0),t):(n.baseState&&(n.baseState=!1,je=!0),n.memoizedState=a)}function Lp(n,t){var a=H;H=a!==0&&4>a?a:4,n(!0);var s=xr.transition;xr.transition={};try{n(!1),t()}finally{H=a,xr.transition=s}}function $d(){return _e().memoizedState}function Mp(n,t,a){var s=Cn(n);if(a={lane:s,action:a,hasEagerState:!1,eagerState:null,next:null},qd(n))Xd(t,a);else if(a=Dd(n,t,a,s),a!==null){var r=xe();$e(a,n,s,r),Jd(a,t,s)}}function Bp(n,t,a){var s=Cn(n),r={lane:s,action:a,hasEagerState:!1,eagerState:null,next:null};if(qd(n))Xd(t,r);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,o=i(l,a);if(r.hasEagerState=!0,r.eagerState=o,qe(o,l)){var c=t.interleaved;c===null?(r.next=r,$i(t)):(r.next=c.next,c.next=r),t.interleaved=r;return}}catch{}finally{}a=Dd(n,t,r,s),a!==null&&(r=xe(),$e(a,n,s,r),Jd(a,t,s))}}function qd(n){var t=n.alternate;return n===q||t!==null&&t===q}function Xd(n,t){ea=Ns=!0;var a=n.pending;a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t}function Jd(n,t,a){if(a&4194240){var s=t.lanes;s&=n.pendingLanes,a|=s,t.lanes=a,Ri(n,a)}}var Ss={readContext:ze,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},zp={readContext:ze,useCallback:function(n,t){return Je().memoizedState=[n,t===void 0?null:t],n},useContext:ze,useEffect:co,useImperativeHandle:function(n,t,a){return a=a!=null?a.concat([n]):null,ns(4194308,4,Gd.bind(null,t,n),a)},useLayoutEffect:function(n,t){return ns(4194308,4,n,t)},useInsertionEffect:function(n,t){return ns(4,2,n,t)},useMemo:function(n,t){var a=Je();return t=t===void 0?null:t,n=n(),a.memoizedState=[n,t],n},useReducer:function(n,t,a){var s=Je();return t=a!==void 0?a(t):t,s.memoizedState=s.baseState=t,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:t},s.queue=n,n=n.dispatch=Mp.bind(null,q,n),[s.memoizedState,n]},useRef:function(n){var t=Je();return n={current:n},t.memoizedState=n},useState:oo,useDebugValue:tl,useDeferredValue:function(n){return Je().memoizedState=n},useTransition:function(){var n=oo(!1),t=n[0];return n=Lp.bind(null,n[1]),Je().memoizedState=n,[t,n]},useMutableSource:function(){},useSyncExternalStore:function(n,t,a){var s=q,r=Je();if(Y){if(a===void 0)throw Error(N(407));a=a()}else{if(a=t(),se===null)throw Error(N(349));Jn&30||Ld(s,t,a)}r.memoizedState=a;var i={value:a,getSnapshot:t};return r.queue=i,co(Bd.bind(null,s,i,n),[n]),s.flags|=2048,ya(9,Md.bind(null,s,i,a,t),void 0,null),a},useId:function(){var n=Je(),t=se.identifierPrefix;if(Y){var a=an,s=tn;a=(s&~(1<<32-Ye(s)-1)).toString(32)+a,t=":"+t+"R"+a,a=xa++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=Rp++,t=":"+t+"r"+a.toString(32)+":";return n.memoizedState=t},unstable_isNewReconciler:!1},_p={readContext:ze,useCallback:Ud,useContext:ze,useEffect:nl,useImperativeHandle:Od,useInsertionEffect:Hd,useLayoutEffect:Fd,useMemo:Vd,useReducer:vr,useRef:Wd,useState:function(){return vr(va)},useDebugValue:tl,useDeferredValue:function(n){var t=_e();return Yd(t,ne.memoizedState,n)},useTransition:function(){var n=vr(va)[0],t=_e().memoizedState;return[n,t]},useMutableSource:Id,useSyncExternalStore:Rd,useId:$d,unstable_isNewReconciler:!1},Wp={readContext:ze,useCallback:Ud,useContext:ze,useEffect:nl,useImperativeHandle:Od,useInsertionEffect:Hd,useLayoutEffect:Fd,useMemo:Vd,useReducer:yr,useRef:Wd,useState:function(){return yr(va)},useDebugValue:tl,useDeferredValue:function(n){var t=_e();return ne===null?t.memoizedState=n:Yd(t,ne.memoizedState,n)},useTransition:function(){var n=yr(va)[0],t=_e().memoizedState;return[n,t]},useMutableSource:Id,useSyncExternalStore:Rd,useId:$d,unstable_isNewReconciler:!1};function Oe(n,t){if(n&&n.defaultProps){t=X({},t),n=n.defaultProps;for(var a in n)t[a]===void 0&&(t[a]=n[a]);return t}return t}function ti(n,t,a,s){t=n.memoizedState,a=a(s,t),a=a==null?t:X({},t,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ws={isMounted:function(n){return(n=n._reactInternals)?et(n)===n:!1},enqueueSetState:function(n,t,a){n=n._reactInternals;var s=xe(),r=Cn(n),i=sn(s,r);i.payload=t,a!=null&&(i.callback=a),t=An(n,i,r),t!==null&&($e(t,n,r,s),Za(t,n,r))},enqueueReplaceState:function(n,t,a){n=n._reactInternals;var s=xe(),r=Cn(n),i=sn(s,r);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=An(n,i,r),t!==null&&($e(t,n,r,s),Za(t,n,r))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var a=xe(),s=Cn(n),r=sn(a,s);r.tag=2,t!=null&&(r.callback=t),t=An(n,r,s),t!==null&&($e(t,n,s,a),Za(t,n,s))}};function uo(n,t,a,s,r,i,l){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(s,i,l):t.prototype&&t.prototype.isPureReactComponent?!ua(a,s)||!ua(r,i):!0}function Kd(n,t,a){var s=!1,r=Ln,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(r=Ne(t)?qn:pe.current,s=t.contextTypes,i=(s=s!=null)?St(n,r):Ln),t=new t(a,i),n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ws,n.stateNode=t,t._reactInternals=n,s&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=i),t}function mo(n,t,a,s){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==n&&Ws.enqueueReplaceState(t,t.state,null)}function ai(n,t,a,s){var r=n.stateNode;r.props=a,r.state=n.memoizedState,r.refs={},qi(n);var i=t.contextType;typeof i=="object"&&i!==null?r.context=ze(i):(i=Ne(t)?qn:pe.current,r.context=St(n,i)),r.state=n.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ti(n,t,i,a),r.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Ws.enqueueReplaceState(r,r.state,null),js(n,a,r,s),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function At(n,t){try{var a="",s=t;do a+=pm(s),s=s.return;while(s);var r=a}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:n,source:t,stack:r,digest:null}}function br(n,t,a){return{value:n,source:null,stack:a??null,digest:t??null}}function si(n,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var Hp=typeof WeakMap=="function"?WeakMap:Map;function Qd(n,t,a){a=sn(-1,a),a.tag=3,a.payload={element:null};var s=t.value;return a.callback=function(){Es||(Es=!0,hi=s),si(n,t)},a}function Zd(n,t,a){a=sn(-1,a),a.tag=3;var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=t.value;a.payload=function(){return s(r)},a.callback=function(){si(n,t)}}var i=n.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){si(n,t),typeof s!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),a}function po(n,t,a){var s=n.pingCache;if(s===null){s=n.pingCache=new Hp;var r=new Set;s.set(t,r)}else r=s.get(t),r===void 0&&(r=new Set,s.set(t,r));r.has(a)||(r.add(a),n=eh.bind(null,n,t,a),t.then(n,n))}function ho(n){do{var t;if((t=n.tag===13)&&(t=n.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return n;n=n.return}while(n!==null);return null}function fo(n,t,a,s,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===t?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=sn(-1,1),t.tag=2,An(a,t,1))),a.lanes|=1),n)}var Fp=dn.ReactCurrentOwner,je=!1;function ge(n,t,a,s){t.child=n===null?Ad(t,null,a,s):Et(t,n.child,a,s)}function go(n,t,a,s,r){a=a.render;var i=t.ref;return jt(t,r),s=Zi(n,t,a,s,i,r),a=el(),n!==null&&!je?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~r,cn(n,t,r)):(Y&&a&&Fi(t),t.flags|=1,ge(n,t,s,r),t.child)}function xo(n,t,a,s,r){if(n===null){var i=a.type;return typeof i=="function"&&!dl(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,eu(n,t,i,s,r)):(n=rs(a.type,null,s,t,t.mode,r),n.ref=t.ref,n.return=t,t.child=n)}if(i=n.child,!(n.lanes&r)){var l=i.memoizedProps;if(a=a.compare,a=a!==null?a:ua,a(l,s)&&n.ref===t.ref)return cn(n,t,r)}return t.flags|=1,n=Pn(i,s),n.ref=t.ref,n.return=t,t.child=n}function eu(n,t,a,s,r){if(n!==null){var i=n.memoizedProps;if(ua(i,s)&&n.ref===t.ref)if(je=!1,t.pendingProps=s=i,(n.lanes&r)!==0)n.flags&131072&&(je=!0);else return t.lanes=n.lanes,cn(n,t,r)}return ri(n,t,a,s,r)}function nu(n,t,a){var s=t.pendingProps,r=s.children,i=n!==null?n.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(gt,ke),ke|=a;else{if(!(a&1073741824))return n=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:n,cachePool:null,transitions:null},t.updateQueue=null,F(gt,ke),ke|=n,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:a,F(gt,ke),ke|=s}else i!==null?(s=i.baseLanes|a,t.memoizedState=null):s=a,F(gt,ke),ke|=s;return ge(n,t,r,a),t.child}function tu(n,t){var a=t.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function ri(n,t,a,s,r){var i=Ne(a)?qn:pe.current;return i=St(t,i),jt(t,r),a=Zi(n,t,a,s,i,r),s=el(),n!==null&&!je?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~r,cn(n,t,r)):(Y&&s&&Fi(t),t.flags|=1,ge(n,t,a,r),t.child)}function vo(n,t,a,s,r){if(Ne(a)){var i=!0;gs(t)}else i=!1;if(jt(t,r),t.stateNode===null)ts(n,t),Kd(t,a,s),ai(t,a,s,r),s=!0;else if(n===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,d=a.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=Ne(a)?qn:pe.current,d=St(t,d));var g=a.getDerivedStateFromProps,h=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==s||c!==d)&&mo(t,l,s,d),vn=!1;var f=t.memoizedState;l.state=f,js(t,s,l,r),c=t.memoizedState,o!==s||f!==c||we.current||vn?(typeof g=="function"&&(ti(t,a,g,s),c=t.memoizedState),(o=vn||uo(t,a,o,s,f,c,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),l.props=s,l.state=c,l.context=d,s=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,Cd(n,t),o=t.memoizedProps,d=t.type===t.elementType?o:Oe(t.type,o),l.props=d,h=t.pendingProps,f=l.context,c=a.contextType,typeof c=="object"&&c!==null?c=ze(c):(c=Ne(a)?qn:pe.current,c=St(t,c));var b=a.getDerivedStateFromProps;(g=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||f!==c)&&mo(t,l,s,c),vn=!1,f=t.memoizedState,l.state=f,js(t,s,l,r);var j=t.memoizedState;o!==h||f!==j||we.current||vn?(typeof b=="function"&&(ti(t,a,b,s),j=t.memoizedState),(d=vn||uo(t,a,d,s,f,j,c)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,j,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,j,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=j),l.props=s,l.state=j,l.context=c,s=d):(typeof l.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(t.flags|=1024),s=!1)}return ii(n,t,a,s,i,r)}function ii(n,t,a,s,r,i){tu(n,t);var l=(t.flags&128)!==0;if(!s&&!l)return r&&to(t,a,!1),cn(n,t,i);s=t.stateNode,Fp.current=t;var o=l&&typeof a.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,n!==null&&l?(t.child=Et(t,n.child,null,i),t.child=Et(t,null,o,i)):ge(n,t,o,i),t.memoizedState=s.state,r&&to(t,a,!0),t.child}function au(n){var t=n.stateNode;t.pendingContext?no(n,t.pendingContext,t.pendingContext!==t.context):t.context&&no(n,t.context,!1),Xi(n,t.containerInfo)}function yo(n,t,a,s,r){return kt(),Oi(r),t.flags|=256,ge(n,t,a,s),t.child}var li={dehydrated:null,treeContext:null,retryLane:0};function oi(n){return{baseLanes:n,cachePool:null,transitions:null}}function su(n,t,a){var s=t.pendingProps,r=$.current,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(i=!0,t.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),F($,r&1),n===null)return ei(t),n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(t.mode&1?n.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=s.children,n=s.fallback,i?(s=t.mode,i=t.child,l={mode:"hidden",children:l},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Gs(l,s,0,null),n=$n(n,s,a,null),i.return=t,n.return=t,i.sibling=n,t.child=i,t.child.memoizedState=oi(a),t.memoizedState=li,n):al(t,l));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Gp(n,t,l,s,o,r,a);if(i){i=s.fallback,l=t.mode,r=n.child,o=r.sibling;var c={mode:"hidden",children:s.children};return!(l&1)&&t.child!==r?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Pn(r,c),s.subtreeFlags=r.subtreeFlags&14680064),o!==null?i=Pn(o,i):(i=$n(i,l,a,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,l=n.child.memoizedState,l=l===null?oi(a):{baseLanes:l.baseLanes|a,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=n.childLanes&~a,t.memoizedState=li,s}return i=n.child,n=i.sibling,s=Pn(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=a),s.return=t,s.sibling=null,n!==null&&(a=t.deletions,a===null?(t.deletions=[n],t.flags|=16):a.push(n)),t.child=s,t.memoizedState=null,s}function al(n,t){return t=Gs({mode:"visible",children:t},n.mode,0,null),t.return=n,n.child=t}function Ua(n,t,a,s){return s!==null&&Oi(s),Et(t,n.child,null,a),n=al(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function Gp(n,t,a,s,r,i,l){if(a)return t.flags&256?(t.flags&=-257,s=br(Error(N(422))),Ua(n,t,l,s)):t.memoizedState!==null?(t.child=n.child,t.flags|=128,null):(i=s.fallback,r=t.mode,s=Gs({mode:"visible",children:s.children},r,0,null),i=$n(i,r,l,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&Et(t,n.child,null,l),t.child.memoizedState=oi(l),t.memoizedState=li,i);if(!(t.mode&1))return Ua(n,t,l,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var o=s.dgst;return s=o,i=Error(N(419)),s=br(i,s,void 0),Ua(n,t,l,s)}if(o=(l&n.childLanes)!==0,je||o){if(s=se,s!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|l)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,on(n,r),$e(s,n,r,-1))}return cl(),s=br(Error(N(421))),Ua(n,t,l,s)}return r.data==="$?"?(t.flags|=128,t.child=n.child,t=nh.bind(null,n),r._reactRetry=t,null):(n=i.treeContext,Ee=Tn(r.nextSibling),Te=t,Y=!0,Ve=null,n!==null&&(Re[Le++]=tn,Re[Le++]=an,Re[Le++]=Xn,tn=n.id,an=n.overflow,Xn=t),t=al(t,s.children),t.flags|=4096,t)}function bo(n,t,a){n.lanes|=t;var s=n.alternate;s!==null&&(s.lanes|=t),ni(n.return,t,a)}function jr(n,t,a,s,r){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=a,i.tailMode=r)}function ru(n,t,a){var s=t.pendingProps,r=s.revealOrder,i=s.tail;if(ge(n,t,s.children,a),s=$.current,s&2)s=s&1|2,t.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bo(n,a,t);else if(n.tag===19)bo(n,a,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}s&=1}if(F($,s),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(a=t.child,r=null;a!==null;)n=a.alternate,n!==null&&ws(n)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),jr(t,!1,r,a,i);break;case"backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(n=r.alternate,n!==null&&ws(n)===null){t.child=r;break}n=r.sibling,r.sibling=a,a=r,r=n}jr(t,!0,a,null,i);break;case"together":jr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ts(n,t){!(t.mode&1)&&n!==null&&(n.alternate=null,t.alternate=null,t.flags|=2)}function cn(n,t,a){if(n!==null&&(t.dependencies=n.dependencies),Kn|=t.lanes,!(a&t.childLanes))return null;if(n!==null&&t.child!==n.child)throw Error(N(153));if(t.child!==null){for(n=t.child,a=Pn(n,n.pendingProps),t.child=a,a.return=t;n.sibling!==null;)n=n.sibling,a=a.sibling=Pn(n,n.pendingProps),a.return=t;a.sibling=null}return t.child}function Op(n,t,a){switch(t.tag){case 3:au(t),kt();break;case 5:Pd(t);break;case 1:Ne(t.type)&&gs(t);break;case 4:Xi(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,r=t.memoizedProps.value;F(ys,s._currentValue),s._currentValue=r;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(F($,$.current&1),t.flags|=128,null):a&t.child.childLanes?su(n,t,a):(F($,$.current&1),n=cn(n,t,a),n!==null?n.sibling:null);F($,$.current&1);break;case 19:if(s=(a&t.childLanes)!==0,n.flags&128){if(s)return ru(n,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),F($,$.current),s)break;return null;case 22:case 23:return t.lanes=0,nu(n,t,a)}return cn(n,t,a)}var iu,ci,lu,ou;iu=function(n,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};ci=function(){};lu=function(n,t,a,s){var r=n.memoizedProps;if(r!==s){n=t.stateNode,Vn(Ze.current);var i=null;switch(a){case"input":r=Pr(n,r),s=Pr(n,s),i=[];break;case"select":r=X({},r,{value:void 0}),s=X({},s,{value:void 0}),i=[];break;case"textarea":r=Lr(n,r),s=Lr(n,s),i=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(n.onclick=hs)}Br(a,s);var l;a=null;for(d in r)if(!s.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var o=r[d];for(l in o)o.hasOwnProperty(l)&&(a||(a={}),a[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(sa.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in s){var c=s[d];if(o=r!=null?r[d]:void 0,s.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(a||(a={}),a[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(a||(a={}),a[l]=c[l])}else a||(i||(i=[]),i.push(d,a)),a=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(sa.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&O("scroll",n),i||o===c||(i=[])):(i=i||[]).push(d,c))}a&&(i=i||[]).push("style",a);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};ou=function(n,t,a,s){a!==s&&(t.flags|=4)};function Ot(n,t){if(!Y)switch(n.tailMode){case"hidden":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:s.sibling=null}}function de(n){var t=n.alternate!==null&&n.alternate.child===n.child,a=0,s=0;if(t)for(var r=n.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=s,n.childLanes=a,t}function Up(n,t,a){var s=t.pendingProps;switch(Gi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ne(t.type)&&fs(),de(t),null;case 3:return s=t.stateNode,Tt(),U(we),U(pe),Ki(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Ga(t)?t.flags|=4:n===null||n.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(xi(Ve),Ve=null))),ci(n,t),de(t),null;case 5:Ji(t);var r=Vn(ga.current);if(a=t.type,n!==null&&t.stateNode!=null)lu(n,t,a,s,r),n.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(N(166));return de(t),null}if(n=Vn(Ze.current),Ga(t)){s=t.stateNode,a=t.type;var i=t.memoizedProps;switch(s[Ke]=t,s[ha]=i,n=(t.mode&1)!==0,a){case"dialog":O("cancel",s),O("close",s);break;case"iframe":case"object":case"embed":O("load",s);break;case"video":case"audio":for(r=0;r<qt.length;r++)O(qt[r],s);break;case"source":O("error",s);break;case"img":case"image":case"link":O("error",s),O("load",s);break;case"details":O("toggle",s);break;case"input":Al(s,i),O("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},O("invalid",s);break;case"textarea":Cl(s,i),O("invalid",s)}Br(a,i),r=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?s.textContent!==o&&(i.suppressHydrationWarning!==!0&&Fa(s.textContent,o,n),r=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Fa(s.textContent,o,n),r=["children",""+o]):sa.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&O("scroll",s)}switch(a){case"input":Ra(s),Dl(s,i,!0);break;case"textarea":Ra(s),Pl(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=hs)}s=r,t.updateQueue=s,s!==null&&(t.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Bc(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof s.is=="string"?n=l.createElement(a,{is:s.is}):(n=l.createElement(a),a==="select"&&(l=n,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):n=l.createElementNS(n,a),n[Ke]=t,n[ha]=s,iu(n,t,!1,!1),t.stateNode=n;e:{switch(l=zr(a,s),a){case"dialog":O("cancel",n),O("close",n),r=s;break;case"iframe":case"object":case"embed":O("load",n),r=s;break;case"video":case"audio":for(r=0;r<qt.length;r++)O(qt[r],n);r=s;break;case"source":O("error",n),r=s;break;case"img":case"image":case"link":O("error",n),O("load",n),r=s;break;case"details":O("toggle",n),r=s;break;case"input":Al(n,s),r=Pr(n,s),O("invalid",n);break;case"option":r=s;break;case"select":n._wrapperState={wasMultiple:!!s.multiple},r=X({},s,{value:void 0}),O("invalid",n);break;case"textarea":Cl(n,s),r=Lr(n,s),O("invalid",n);break;default:r=s}Br(a,r),o=r;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?Wc(n,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&zc(n,c)):i==="children"?typeof c=="string"?(a!=="textarea"||c!=="")&&ra(n,c):typeof c=="number"&&ra(n,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(sa.hasOwnProperty(i)?c!=null&&i==="onScroll"&&O("scroll",n):c!=null&&Ti(n,i,c,l))}switch(a){case"input":Ra(n),Dl(n,s,!1);break;case"textarea":Ra(n),Pl(n);break;case"option":s.value!=null&&n.setAttribute("value",""+Rn(s.value));break;case"select":n.multiple=!!s.multiple,i=s.value,i!=null?xt(n,!!s.multiple,i,!1):s.defaultValue!=null&&xt(n,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=hs)}switch(a){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(n&&t.stateNode!=null)ou(n,t,n.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(N(166));if(a=Vn(ga.current),Vn(Ze.current),Ga(t)){if(s=t.stateNode,a=t.memoizedProps,s[Ke]=t,(i=s.nodeValue!==a)&&(n=Te,n!==null))switch(n.tag){case 3:Fa(s.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fa(s.nodeValue,a,(n.mode&1)!==0)}i&&(t.flags|=4)}else s=(a.nodeType===9?a:a.ownerDocument).createTextNode(s),s[Ke]=t,t.stateNode=s}return de(t),null;case 13:if(U($),s=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Y&&Ee!==null&&t.mode&1&&!(t.flags&128))Ed(),kt(),t.flags|=98560,i=!1;else if(i=Ga(t),s!==null&&s.dehydrated!==null){if(n===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Ke]=t}else kt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ve!==null&&(xi(Ve),Ve=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=a,t):(s=s!==null,s!==(n!==null&&n.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(n===null||$.current&1?te===0&&(te=3):cl())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Tt(),ci(n,t),n===null&&ma(t.stateNode.containerInfo),de(t),null;case 10:return Yi(t.type._context),de(t),null;case 17:return Ne(t.type)&&fs(),de(t),null;case 19:if(U($),i=t.memoizedState,i===null)return de(t),null;if(s=(t.flags&128)!==0,l=i.rendering,l===null)if(s)Ot(i,!1);else{if(te!==0||n!==null&&n.flags&128)for(n=t.child;n!==null;){if(l=ws(n),l!==null){for(t.flags|=128,Ot(i,!1),s=l.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=a,a=t.child;a!==null;)i=a,n=s,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=n,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,n=l.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return F($,$.current&1|2),t.child}n=n.sibling}i.tail!==null&&Q()>Dt&&(t.flags|=128,s=!0,Ot(i,!1),t.lanes=4194304)}else{if(!s)if(n=ws(l),n!==null){if(t.flags|=128,s=!0,a=n.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),Ot(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Y)return de(t),null}else 2*Q()-i.renderingStartTime>Dt&&a!==1073741824&&(t.flags|=128,s=!0,Ot(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(a=i.last,a!==null?a.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,a=$.current,F($,s?a&1|2:a&1),t):(de(t),null);case 22:case 23:return ol(),s=t.memoizedState!==null,n!==null&&n.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?ke&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Vp(n,t){switch(Gi(t),t.tag){case 1:return Ne(t.type)&&fs(),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return Tt(),U(we),U(pe),Ki(),n=t.flags,n&65536&&!(n&128)?(t.flags=n&-65537|128,t):null;case 5:return Ji(t),null;case 13:if(U($),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(N(340));kt()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return U($),null;case 4:return Tt(),null;case 10:return Yi(t.type._context),null;case 22:case 23:return ol(),null;case 24:return null;default:return null}}var Va=!1,me=!1,Yp=typeof WeakSet=="function"?WeakSet:Set,D=null;function ft(n,t){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(s){J(n,t,s)}else a.current=null}function di(n,t,a){try{a()}catch(s){J(n,t,s)}}var jo=!1;function $p(n,t){if($r=us,n=pd(),Hi(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var r=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var l=0,o=-1,c=-1,d=0,g=0,h=n,f=null;n:for(;;){for(var b;h!==a||r!==0&&h.nodeType!==3||(o=l+r),h!==i||s!==0&&h.nodeType!==3||(c=l+s),h.nodeType===3&&(l+=h.nodeValue.length),(b=h.firstChild)!==null;)f=h,h=b;for(;;){if(h===n)break n;if(f===a&&++d===r&&(o=l),f===i&&++g===s&&(c=l),(b=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=b}a=o===-1||c===-1?null:{start:o,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(qr={focusedElem:n,selectionRange:a},us=!1,D=t;D!==null;)if(t=D,n=t.child,(t.subtreeFlags&1028)!==0&&n!==null)n.return=t,D=n;else for(;D!==null;){t=D;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var w=j.memoizedProps,E=j.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Oe(t.type,w),E);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(v){J(t,t.return,v)}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}return j=jo,jo=!1,j}function na(n,t,a){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&n)===n){var i=r.destroy;r.destroy=void 0,i!==void 0&&di(t,a,i)}r=r.next}while(r!==s)}}function Hs(n,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&n)===n){var s=a.create;a.destroy=s()}a=a.next}while(a!==t)}}function ui(n){var t=n.ref;if(t!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof t=="function"?t(n):t.current=n}}function cu(n){var t=n.alternate;t!==null&&(n.alternate=null,cu(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&(delete t[Ke],delete t[ha],delete t[Kr],delete t[Dp],delete t[Cp])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function du(n){return n.tag===5||n.tag===3||n.tag===4}function wo(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||du(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mi(n,t,a){var s=n.tag;if(s===5||s===6)n=n.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(n,t):a.insertBefore(n,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(n,a)):(t=a,t.appendChild(n)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=hs));else if(s!==4&&(n=n.child,n!==null))for(mi(n,t,a),n=n.sibling;n!==null;)mi(n,t,a),n=n.sibling}function pi(n,t,a){var s=n.tag;if(s===5||s===6)n=n.stateNode,t?a.insertBefore(n,t):a.appendChild(n);else if(s!==4&&(n=n.child,n!==null))for(pi(n,t,a),n=n.sibling;n!==null;)pi(n,t,a),n=n.sibling}var ie=null,Ue=!1;function gn(n,t,a){for(a=a.child;a!==null;)uu(n,t,a),a=a.sibling}function uu(n,t,a){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Is,a)}catch{}switch(a.tag){case 5:me||ft(a,t);case 6:var s=ie,r=Ue;ie=null,gn(n,t,a),ie=s,Ue=r,ie!==null&&(Ue?(n=ie,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):ie.removeChild(a.stateNode));break;case 18:ie!==null&&(Ue?(n=ie,a=a.stateNode,n.nodeType===8?hr(n.parentNode,a):n.nodeType===1&&hr(n,a),ca(n)):hr(ie,a.stateNode));break;case 4:s=ie,r=Ue,ie=a.stateNode.containerInfo,Ue=!0,gn(n,t,a),ie=s,Ue=r;break;case 0:case 11:case 14:case 15:if(!me&&(s=a.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var i=r,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&di(a,t,l),r=r.next}while(r!==s)}gn(n,t,a);break;case 1:if(!me&&(ft(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=a.memoizedProps,s.state=a.memoizedState,s.componentWillUnmount()}catch(o){J(a,t,o)}gn(n,t,a);break;case 21:gn(n,t,a);break;case 22:a.mode&1?(me=(s=me)||a.memoizedState!==null,gn(n,t,a),me=s):gn(n,t,a);break;default:gn(n,t,a)}}function No(n){var t=n.updateQueue;if(t!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Yp),t.forEach(function(s){var r=th.bind(null,n,s);a.has(s)||(a.add(s),s.then(r,r))})}}function Ge(n,t){var a=t.deletions;if(a!==null)for(var s=0;s<a.length;s++){var r=a[s];try{var i=n,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:ie=o.stateNode,Ue=!1;break e;case 3:ie=o.stateNode.containerInfo,Ue=!0;break e;case 4:ie=o.stateNode.containerInfo,Ue=!0;break e}o=o.return}if(ie===null)throw Error(N(160));uu(i,l,r),ie=null,Ue=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){J(r,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mu(t,n),t=t.sibling}function mu(n,t){var a=n.alternate,s=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ge(t,n),Xe(n),s&4){try{na(3,n,n.return),Hs(3,n)}catch(w){J(n,n.return,w)}try{na(5,n,n.return)}catch(w){J(n,n.return,w)}}break;case 1:Ge(t,n),Xe(n),s&512&&a!==null&&ft(a,a.return);break;case 5:if(Ge(t,n),Xe(n),s&512&&a!==null&&ft(a,a.return),n.flags&32){var r=n.stateNode;try{ra(r,"")}catch(w){J(n,n.return,w)}}if(s&4&&(r=n.stateNode,r!=null)){var i=n.memoizedProps,l=a!==null?a.memoizedProps:i,o=n.type,c=n.updateQueue;if(n.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Lc(r,i),zr(o,l);var d=zr(o,i);for(l=0;l<c.length;l+=2){var g=c[l],h=c[l+1];g==="style"?Wc(r,h):g==="dangerouslySetInnerHTML"?zc(r,h):g==="children"?ra(r,h):Ti(r,g,h,d)}switch(o){case"input":Ir(r,i);break;case"textarea":Mc(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?xt(r,!!i.multiple,b,!1):f!==!!i.multiple&&(i.defaultValue!=null?xt(r,!!i.multiple,i.defaultValue,!0):xt(r,!!i.multiple,i.multiple?[]:"",!1))}r[ha]=i}catch(w){J(n,n.return,w)}}break;case 6:if(Ge(t,n),Xe(n),s&4){if(n.stateNode===null)throw Error(N(162));r=n.stateNode,i=n.memoizedProps;try{r.nodeValue=i}catch(w){J(n,n.return,w)}}break;case 3:if(Ge(t,n),Xe(n),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ca(t.containerInfo)}catch(w){J(n,n.return,w)}break;case 4:Ge(t,n),Xe(n);break;case 13:Ge(t,n),Xe(n),r=n.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(il=Q())),s&4&&No(n);break;case 22:if(g=a!==null&&a.memoizedState!==null,n.mode&1?(me=(d=me)||g,Ge(t,n),me=d):Ge(t,n),Xe(n),s&8192){if(d=n.memoizedState!==null,(n.stateNode.isHidden=d)&&!g&&n.mode&1)for(D=n,g=n.child;g!==null;){for(h=D=g;D!==null;){switch(f=D,b=f.child,f.tag){case 0:case 11:case 14:case 15:na(4,f,f.return);break;case 1:ft(f,f.return);var j=f.stateNode;if(typeof j.componentWillUnmount=="function"){s=f,a=f.return;try{t=s,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(w){J(s,a,w)}}break;case 5:ft(f,f.return);break;case 22:if(f.memoizedState!==null){ko(h);continue}}b!==null?(b.return=f,D=b):ko(h)}g=g.sibling}e:for(g=null,h=n;;){if(h.tag===5){if(g===null){g=h;try{r=h.stateNode,d?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=_c("display",l))}catch(w){J(n,n.return,w)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){J(n,n.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ge(t,n),Xe(n),s&4&&No(n);break;case 21:break;default:Ge(t,n),Xe(n)}}function Xe(n){var t=n.flags;if(t&2){try{e:{for(var a=n.return;a!==null;){if(du(a)){var s=a;break e}a=a.return}throw Error(N(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(ra(r,""),s.flags&=-33);var i=wo(n);pi(n,i,r);break;case 3:case 4:var l=s.stateNode.containerInfo,o=wo(n);mi(n,o,l);break;default:throw Error(N(161))}}catch(c){J(n,n.return,c)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function qp(n,t,a){D=n,pu(n)}function pu(n,t,a){for(var s=(n.mode&1)!==0;D!==null;){var r=D,i=r.child;if(r.tag===22&&s){var l=r.memoizedState!==null||Va;if(!l){var o=r.alternate,c=o!==null&&o.memoizedState!==null||me;o=Va;var d=me;if(Va=l,(me=c)&&!d)for(D=r;D!==null;)l=D,c=l.child,l.tag===22&&l.memoizedState!==null?Eo(r):c!==null?(c.return=l,D=c):Eo(r);for(;i!==null;)D=i,pu(i),i=i.sibling;D=r,Va=o,me=d}So(n)}else r.subtreeFlags&8772&&i!==null?(i.return=r,D=i):So(n)}}function So(n){for(;D!==null;){var t=D;if(t.flags&8772){var a=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Hs(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!me)if(a===null)s.componentDidMount();else{var r=t.elementType===t.type?a.memoizedProps:Oe(t.type,a.memoizedProps);s.componentDidUpdate(r,a.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&lo(t,i,s);break;case 3:var l=t.updateQueue;if(l!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}lo(t,l,a)}break;case 5:var o=t.stateNode;if(a===null&&t.flags&4){a=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&a.focus();break;case"img":c.src&&(a.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&ca(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}me||t.flags&512&&ui(t)}catch(f){J(t,t.return,f)}}if(t===n){D=null;break}if(a=t.sibling,a!==null){a.return=t.return,D=a;break}D=t.return}}function ko(n){for(;D!==null;){var t=D;if(t===n){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}function Eo(n){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{Hs(4,t)}catch(c){J(t,a,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var r=t.return;try{s.componentDidMount()}catch(c){J(t,r,c)}}var i=t.return;try{ui(t)}catch(c){J(t,i,c)}break;case 5:var l=t.return;try{ui(t)}catch(c){J(t,l,c)}}}catch(c){J(t,t.return,c)}if(t===n){D=null;break}var o=t.sibling;if(o!==null){o.return=t.return,D=o;break}D=t.return}}var Xp=Math.ceil,ks=dn.ReactCurrentDispatcher,sl=dn.ReactCurrentOwner,Be=dn.ReactCurrentBatchConfig,B=0,se=null,ee=null,le=0,ke=0,gt=Bn(0),te=0,ba=null,Kn=0,Fs=0,rl=0,ta=null,be=null,il=0,Dt=1/0,en=null,Es=!1,hi=null,Dn=null,Ya=!1,wn=null,Ts=0,aa=0,fi=null,as=-1,ss=0;function xe(){return B&6?Q():as!==-1?as:as=Q()}function Cn(n){return n.mode&1?B&2&&le!==0?le&-le:Ip.transition!==null?(ss===0&&(ss=Kc()),ss):(n=H,n!==0||(n=window.event,n=n===void 0?16:sd(n.type)),n):1}function $e(n,t,a,s){if(50<aa)throw aa=0,fi=null,Error(N(185));Sa(n,a,s),(!(B&2)||n!==se)&&(n===se&&(!(B&2)&&(Fs|=a),te===4&&bn(n,le)),Se(n,s),a===1&&B===0&&!(t.mode&1)&&(Dt=Q()+500,zs&&zn()))}function Se(n,t){var a=n.callbackNode;Im(n,t);var s=ds(n,n===se?le:0);if(s===0)a!==null&&Ll(a),n.callbackNode=null,n.callbackPriority=0;else if(t=s&-s,n.callbackPriority!==t){if(a!=null&&Ll(a),t===1)n.tag===0?Pp(To.bind(null,n)):Nd(To.bind(null,n)),Tp(function(){!(B&6)&&zn()}),a=null;else{switch(Qc(s)){case 1:a=Ii;break;case 4:a=Xc;break;case 16:a=cs;break;case 536870912:a=Jc;break;default:a=cs}a=ju(a,hu.bind(null,n))}n.callbackPriority=t,n.callbackNode=a}}function hu(n,t){if(as=-1,ss=0,B&6)throw Error(N(327));var a=n.callbackNode;if(wt()&&n.callbackNode!==a)return null;var s=ds(n,n===se?le:0);if(s===0)return null;if(s&30||s&n.expiredLanes||t)t=As(n,s);else{t=s;var r=B;B|=2;var i=gu();(se!==n||le!==t)&&(en=null,Dt=Q()+500,Yn(n,t));do try{Qp();break}catch(o){fu(n,o)}while(!0);Vi(),ks.current=i,B=r,ee!==null?t=0:(se=null,le=0,t=te)}if(t!==0){if(t===2&&(r=Gr(n),r!==0&&(s=r,t=gi(n,r))),t===1)throw a=ba,Yn(n,0),bn(n,s),Se(n,Q()),a;if(t===6)bn(n,s);else{if(r=n.current.alternate,!(s&30)&&!Jp(r)&&(t=As(n,s),t===2&&(i=Gr(n),i!==0&&(s=i,t=gi(n,i))),t===1))throw a=ba,Yn(n,0),bn(n,s),Se(n,Q()),a;switch(n.finishedWork=r,n.finishedLanes=s,t){case 0:case 1:throw Error(N(345));case 2:Gn(n,be,en);break;case 3:if(bn(n,s),(s&130023424)===s&&(t=il+500-Q(),10<t)){if(ds(n,0)!==0)break;if(r=n.suspendedLanes,(r&s)!==s){xe(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Jr(Gn.bind(null,n,be,en),t);break}Gn(n,be,en);break;case 4:if(bn(n,s),(s&4194240)===s)break;for(t=n.eventTimes,r=-1;0<s;){var l=31-Ye(s);i=1<<l,l=t[l],l>r&&(r=l),s&=~i}if(s=r,s=Q()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Xp(s/1960))-s,10<s){n.timeoutHandle=Jr(Gn.bind(null,n,be,en),s);break}Gn(n,be,en);break;case 5:Gn(n,be,en);break;default:throw Error(N(329))}}}return Se(n,Q()),n.callbackNode===a?hu.bind(null,n):null}function gi(n,t){var a=ta;return n.current.memoizedState.isDehydrated&&(Yn(n,t).flags|=256),n=As(n,t),n!==2&&(t=be,be=a,t!==null&&xi(t)),n}function xi(n){be===null?be=n:be.push.apply(be,n)}function Jp(n){for(var t=n;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var s=0;s<a.length;s++){var r=a[s],i=r.getSnapshot;r=r.value;try{if(!qe(i(),r))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(n,t){for(t&=~rl,t&=~Fs,n.suspendedLanes|=t,n.pingedLanes&=~t,n=n.expirationTimes;0<t;){var a=31-Ye(t),s=1<<a;n[a]=-1,t&=~s}}function To(n){if(B&6)throw Error(N(327));wt();var t=ds(n,0);if(!(t&1))return Se(n,Q()),null;var a=As(n,t);if(n.tag!==0&&a===2){var s=Gr(n);s!==0&&(t=s,a=gi(n,s))}if(a===1)throw a=ba,Yn(n,0),bn(n,t),Se(n,Q()),a;if(a===6)throw Error(N(345));return n.finishedWork=n.current.alternate,n.finishedLanes=t,Gn(n,be,en),Se(n,Q()),null}function ll(n,t){var a=B;B|=1;try{return n(t)}finally{B=a,B===0&&(Dt=Q()+500,zs&&zn())}}function Qn(n){wn!==null&&wn.tag===0&&!(B&6)&&wt();var t=B;B|=1;var a=Be.transition,s=H;try{if(Be.transition=null,H=1,n)return n()}finally{H=s,Be.transition=a,B=t,!(B&6)&&zn()}}function ol(){ke=gt.current,U(gt)}function Yn(n,t){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Ep(a)),ee!==null)for(a=ee.return;a!==null;){var s=a;switch(Gi(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&fs();break;case 3:Tt(),U(we),U(pe),Ki();break;case 5:Ji(s);break;case 4:Tt();break;case 13:U($);break;case 19:U($);break;case 10:Yi(s.type._context);break;case 22:case 23:ol()}a=a.return}if(se=n,ee=n=Pn(n.current,null),le=ke=t,te=0,ba=null,rl=Fs=Kn=0,be=ta=null,Un!==null){for(t=0;t<Un.length;t++)if(a=Un[t],s=a.interleaved,s!==null){a.interleaved=null;var r=s.next,i=a.pending;if(i!==null){var l=i.next;i.next=r,s.next=l}a.pending=s}Un=null}return n}function fu(n,t){do{var a=ee;try{if(Vi(),es.current=Ss,Ns){for(var s=q.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Ns=!1}if(Jn=0,ae=ne=q=null,ea=!1,xa=0,sl.current=null,a===null||a.return===null){te=1,ba=t,ee=null;break}e:{var i=n,l=a.return,o=a,c=t;if(t=le,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=o,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var f=g.alternate;f?(g.updateQueue=f.updateQueue,g.memoizedState=f.memoizedState,g.lanes=f.lanes):(g.updateQueue=null,g.memoizedState=null)}var b=ho(l);if(b!==null){b.flags&=-257,fo(b,l,o,i,t),b.mode&1&&po(i,d,t),t=b,c=d;var j=t.updateQueue;if(j===null){var w=new Set;w.add(c),t.updateQueue=w}else j.add(c);break e}else{if(!(t&1)){po(i,d,t),cl();break e}c=Error(N(426))}}else if(Y&&o.mode&1){var E=ho(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),fo(E,l,o,i,t),Oi(At(c,o));break e}}i=c=At(c,o),te!==4&&(te=2),ta===null?ta=[i]:ta.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Qd(i,c,t);io(i,m);break e;case 1:o=c;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Dn===null||!Dn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Zd(i,o,t);io(i,v);break e}}i=i.return}while(i!==null)}vu(a)}catch(k){t=k,ee===a&&a!==null&&(ee=a=a.return);continue}break}while(!0)}function gu(){var n=ks.current;return ks.current=Ss,n===null?Ss:n}function cl(){(te===0||te===3||te===2)&&(te=4),se===null||!(Kn&268435455)&&!(Fs&268435455)||bn(se,le)}function As(n,t){var a=B;B|=2;var s=gu();(se!==n||le!==t)&&(en=null,Yn(n,t));do try{Kp();break}catch(r){fu(n,r)}while(!0);if(Vi(),B=a,ks.current=s,ee!==null)throw Error(N(261));return se=null,le=0,te}function Kp(){for(;ee!==null;)xu(ee)}function Qp(){for(;ee!==null&&!Nm();)xu(ee)}function xu(n){var t=bu(n.alternate,n,ke);n.memoizedProps=n.pendingProps,t===null?vu(n):ee=t,sl.current=null}function vu(n){var t=n;do{var a=t.alternate;if(n=t.return,t.flags&32768){if(a=Vp(a,t),a!==null){a.flags&=32767,ee=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{te=6,ee=null;return}}else if(a=Up(a,t,ke),a!==null){ee=a;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=n}while(t!==null);te===0&&(te=5)}function Gn(n,t,a){var s=H,r=Be.transition;try{Be.transition=null,H=1,Zp(n,t,a,s)}finally{Be.transition=r,H=s}return null}function Zp(n,t,a,s){do wt();while(wn!==null);if(B&6)throw Error(N(327));a=n.finishedWork;var r=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(N(177));n.callbackNode=null,n.callbackPriority=0;var i=a.lanes|a.childLanes;if(Rm(n,i),n===se&&(ee=se=null,le=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Ya||(Ya=!0,ju(cs,function(){return wt(),null})),i=(a.flags&15990)!==0,a.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=H;H=1;var o=B;B|=4,sl.current=null,$p(n,a),mu(a,n),yp(qr),us=!!$r,qr=$r=null,n.current=a,qp(a),Sm(),B=o,H=l,Be.transition=i}else n.current=a;if(Ya&&(Ya=!1,wn=n,Ts=r),i=n.pendingLanes,i===0&&(Dn=null),Tm(a.stateNode),Se(n,Q()),t!==null)for(s=n.onRecoverableError,a=0;a<t.length;a++)r=t[a],s(r.value,{componentStack:r.stack,digest:r.digest});if(Es)throw Es=!1,n=hi,hi=null,n;return Ts&1&&n.tag!==0&&wt(),i=n.pendingLanes,i&1?n===fi?aa++:(aa=0,fi=n):aa=0,zn(),null}function wt(){if(wn!==null){var n=Qc(Ts),t=Be.transition,a=H;try{if(Be.transition=null,H=16>n?16:n,wn===null)var s=!1;else{if(n=wn,wn=null,Ts=0,B&6)throw Error(N(331));var r=B;for(B|=4,D=n.current;D!==null;){var i=D,l=i.child;if(D.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(D=d;D!==null;){var g=D;switch(g.tag){case 0:case 11:case 15:na(8,g,i)}var h=g.child;if(h!==null)h.return=g,D=h;else for(;D!==null;){g=D;var f=g.sibling,b=g.return;if(cu(g),g===d){D=null;break}if(f!==null){f.return=b,D=f;break}D=b}}}var j=i.alternate;if(j!==null){var w=j.child;if(w!==null){j.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}D=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,D=l;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:na(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,D=m;break e}D=i.return}}var u=n.current;for(D=u;D!==null;){l=D;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,D=p;else e:for(l=u;D!==null;){if(o=D,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Hs(9,o)}}catch(k){J(o,o.return,k)}if(o===l){D=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,D=v;break e}D=o.return}}if(B=r,zn(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Is,n)}catch{}s=!0}return s}finally{H=a,Be.transition=t}}return!1}function Ao(n,t,a){t=At(a,t),t=Qd(n,t,1),n=An(n,t,1),t=xe(),n!==null&&(Sa(n,1,t),Se(n,t))}function J(n,t,a){if(n.tag===3)Ao(n,n,a);else for(;t!==null;){if(t.tag===3){Ao(t,n,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Dn===null||!Dn.has(s))){n=At(a,n),n=Zd(t,n,1),t=An(t,n,1),n=xe(),t!==null&&(Sa(t,1,n),Se(t,n));break}}t=t.return}}function eh(n,t,a){var s=n.pingCache;s!==null&&s.delete(t),t=xe(),n.pingedLanes|=n.suspendedLanes&a,se===n&&(le&a)===a&&(te===4||te===3&&(le&130023424)===le&&500>Q()-il?Yn(n,0):rl|=a),Se(n,t)}function yu(n,t){t===0&&(n.mode&1?(t=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):t=1);var a=xe();n=on(n,t),n!==null&&(Sa(n,t,a),Se(n,a))}function nh(n){var t=n.memoizedState,a=0;t!==null&&(a=t.retryLane),yu(n,a)}function th(n,t){var a=0;switch(n.tag){case 13:var s=n.stateNode,r=n.memoizedState;r!==null&&(a=r.retryLane);break;case 19:s=n.stateNode;break;default:throw Error(N(314))}s!==null&&s.delete(t),yu(n,a)}var bu;bu=function(n,t,a){if(n!==null)if(n.memoizedProps!==t.pendingProps||we.current)je=!0;else{if(!(n.lanes&a)&&!(t.flags&128))return je=!1,Op(n,t,a);je=!!(n.flags&131072)}else je=!1,Y&&t.flags&1048576&&Sd(t,vs,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;ts(n,t),n=t.pendingProps;var r=St(t,pe.current);jt(t,a),r=Zi(null,t,s,n,r,a);var i=el();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(s)?(i=!0,gs(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qi(t),r.updater=Ws,t.stateNode=r,r._reactInternals=t,ai(t,s,n,a),t=ii(null,t,s,!0,i,a)):(t.tag=0,Y&&i&&Fi(t),ge(null,t,r,a),t=t.child),t;case 16:s=t.elementType;e:{switch(ts(n,t),n=t.pendingProps,r=s._init,s=r(s._payload),t.type=s,r=t.tag=sh(s),n=Oe(s,n),r){case 0:t=ri(null,t,s,n,a);break e;case 1:t=vo(null,t,s,n,a);break e;case 11:t=go(null,t,s,n,a);break e;case 14:t=xo(null,t,s,Oe(s.type,n),a);break e}throw Error(N(306,s,""))}return t;case 0:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:Oe(s,r),ri(n,t,s,r,a);case 1:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:Oe(s,r),vo(n,t,s,r,a);case 3:e:{if(au(t),n===null)throw Error(N(387));s=t.pendingProps,i=t.memoizedState,r=i.element,Cd(n,t),js(t,s,null,a);var l=t.memoizedState;if(s=l.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=At(Error(N(423)),t),t=yo(n,t,s,a,r);break e}else if(s!==r){r=At(Error(N(424)),t),t=yo(n,t,s,a,r);break e}else for(Ee=Tn(t.stateNode.containerInfo.firstChild),Te=t,Y=!0,Ve=null,a=Ad(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(kt(),s===r){t=cn(n,t,a);break e}ge(n,t,s,a)}t=t.child}return t;case 5:return Pd(t),n===null&&ei(t),s=t.type,r=t.pendingProps,i=n!==null?n.memoizedProps:null,l=r.children,Xr(s,r)?l=null:i!==null&&Xr(s,i)&&(t.flags|=32),tu(n,t),ge(n,t,l,a),t.child;case 6:return n===null&&ei(t),null;case 13:return su(n,t,a);case 4:return Xi(t,t.stateNode.containerInfo),s=t.pendingProps,n===null?t.child=Et(t,null,s,a):ge(n,t,s,a),t.child;case 11:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:Oe(s,r),go(n,t,s,r,a);case 7:return ge(n,t,t.pendingProps,a),t.child;case 8:return ge(n,t,t.pendingProps.children,a),t.child;case 12:return ge(n,t,t.pendingProps.children,a),t.child;case 10:e:{if(s=t.type._context,r=t.pendingProps,i=t.memoizedProps,l=r.value,F(ys,s._currentValue),s._currentValue=l,i!==null)if(qe(i.value,l)){if(i.children===r.children&&!we.current){t=cn(n,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var c=o.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=sn(-1,a&-a),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),ni(i.return,a,t),o.lanes|=a;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(N(341));l.lanes|=a,o=l.alternate,o!==null&&(o.lanes|=a),ni(l,a,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ge(n,t,r.children,a),t=t.child}return t;case 9:return r=t.type,s=t.pendingProps.children,jt(t,a),r=ze(r),s=s(r),t.flags|=1,ge(n,t,s,a),t.child;case 14:return s=t.type,r=Oe(s,t.pendingProps),r=Oe(s.type,r),xo(n,t,s,r,a);case 15:return eu(n,t,t.type,t.pendingProps,a);case 17:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:Oe(s,r),ts(n,t),t.tag=1,Ne(s)?(n=!0,gs(t)):n=!1,jt(t,a),Kd(t,s,r),ai(t,s,r,a),ii(null,t,s,!0,n,a);case 19:return ru(n,t,a);case 22:return nu(n,t,a)}throw Error(N(156,t.tag))};function ju(n,t){return qc(n,t)}function ah(n,t,a,s){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(n,t,a,s){return new ah(n,t,a,s)}function dl(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sh(n){if(typeof n=="function")return dl(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Di)return 11;if(n===Ci)return 14}return 2}function Pn(n,t){var a=n.alternate;return a===null?(a=Me(n.tag,t,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=t,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,t=n.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function rs(n,t,a,s,r,i){var l=2;if(s=n,typeof n=="function")dl(n)&&(l=1);else if(typeof n=="string")l=5;else e:switch(n){case it:return $n(a.children,r,i,t);case Ai:l=8,r|=8;break;case Tr:return n=Me(12,a,t,r|2),n.elementType=Tr,n.lanes=i,n;case Ar:return n=Me(13,a,t,r),n.elementType=Ar,n.lanes=i,n;case Dr:return n=Me(19,a,t,r),n.elementType=Dr,n.lanes=i,n;case Pc:return Gs(a,r,i,t);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Dc:l=10;break e;case Cc:l=9;break e;case Di:l=11;break e;case Ci:l=14;break e;case xn:l=16,s=null;break e}throw Error(N(130,n==null?n:typeof n,""))}return t=Me(l,a,t,r),t.elementType=n,t.type=s,t.lanes=i,t}function $n(n,t,a,s){return n=Me(7,n,s,t),n.lanes=a,n}function Gs(n,t,a,s){return n=Me(22,n,s,t),n.elementType=Pc,n.lanes=a,n.stateNode={isHidden:!1},n}function wr(n,t,a){return n=Me(6,n,null,t),n.lanes=a,n}function Nr(n,t,a){return t=Me(4,n.children!==null?n.children:[],n.key,t),t.lanes=a,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}function rh(n,t,a,s,r){this.tag=t,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ar(0),this.expirationTimes=ar(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ar(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ul(n,t,a,s,r,i,l,o,c){return n=new rh(n,t,a,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Me(3,null,null,t),n.current=i,i.stateNode=n,i.memoizedState={element:s,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qi(i),n}function ih(n,t,a){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rt,key:s==null?null:""+s,children:n,containerInfo:t,implementation:a}}function wu(n){if(!n)return Ln;n=n._reactInternals;e:{if(et(n)!==n||n.tag!==1)throw Error(N(170));var t=n;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(n.tag===1){var a=n.type;if(Ne(a))return wd(n,a,t)}return t}function Nu(n,t,a,s,r,i,l,o,c){return n=ul(a,s,!0,n,r,i,l,o,c),n.context=wu(null),a=n.current,s=xe(),r=Cn(a),i=sn(s,r),i.callback=t??null,An(a,i,r),n.current.lanes=r,Sa(n,r,s),Se(n,s),n}function Os(n,t,a,s){var r=t.current,i=xe(),l=Cn(r);return a=wu(a),t.context===null?t.context=a:t.pendingContext=a,t=sn(i,l),t.payload={element:n},s=s===void 0?null:s,s!==null&&(t.callback=s),n=An(r,t,l),n!==null&&($e(n,r,l,i),Za(n,r,l)),l}function Ds(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Do(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<t?a:t}}function ml(n,t){Do(n,t),(n=n.alternate)&&Do(n,t)}function lh(){return null}var Su=typeof reportError=="function"?reportError:function(n){console.error(n)};function pl(n){this._internalRoot=n}Us.prototype.render=pl.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(N(409));Os(n,t,null,null)};Us.prototype.unmount=pl.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;Qn(function(){Os(null,n,null,null)}),t[ln]=null}};function Us(n){this._internalRoot=n}Us.prototype.unstable_scheduleHydration=function(n){if(n){var t=nd();n={blockedOn:null,target:n,priority:t};for(var a=0;a<yn.length&&t!==0&&t<yn[a].priority;a++);yn.splice(a,0,n),a===0&&ad(n)}};function hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vs(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Co(){}function oh(n,t,a,s,r){if(r){if(typeof s=="function"){var i=s;s=function(){var d=Ds(l);i.call(d)}}var l=Nu(t,s,n,0,null,!1,!1,"",Co);return n._reactRootContainer=l,n[ln]=l.current,ma(n.nodeType===8?n.parentNode:n),Qn(),l}for(;r=n.lastChild;)n.removeChild(r);if(typeof s=="function"){var o=s;s=function(){var d=Ds(c);o.call(d)}}var c=ul(n,0,!1,null,null,!1,!1,"",Co);return n._reactRootContainer=c,n[ln]=c.current,ma(n.nodeType===8?n.parentNode:n),Qn(function(){Os(t,c,a,s)}),c}function Ys(n,t,a,s,r){var i=a._reactRootContainer;if(i){var l=i;if(typeof r=="function"){var o=r;r=function(){var c=Ds(l);o.call(c)}}Os(t,l,n,r)}else l=oh(a,t,n,r,s);return Ds(l)}Zc=function(n){switch(n.tag){case 3:var t=n.stateNode;if(t.current.memoizedState.isDehydrated){var a=$t(t.pendingLanes);a!==0&&(Ri(t,a|1),Se(t,Q()),!(B&6)&&(Dt=Q()+500,zn()))}break;case 13:Qn(function(){var s=on(n,1);if(s!==null){var r=xe();$e(s,n,1,r)}}),ml(n,1)}};Li=function(n){if(n.tag===13){var t=on(n,134217728);if(t!==null){var a=xe();$e(t,n,134217728,a)}ml(n,134217728)}};ed=function(n){if(n.tag===13){var t=Cn(n),a=on(n,t);if(a!==null){var s=xe();$e(a,n,t,s)}ml(n,t)}};nd=function(){return H};td=function(n,t){var a=H;try{return H=n,t()}finally{H=a}};Wr=function(n,t,a){switch(t){case"input":if(Ir(n,a),t=a.name,a.type==="radio"&&t!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==n&&s.form===n.form){var r=Bs(s);if(!r)throw Error(N(90));Rc(s),Ir(s,r)}}}break;case"textarea":Mc(n,a);break;case"select":t=a.value,t!=null&&xt(n,!!a.multiple,t,!1)}};Gc=ll;Oc=Qn;var ch={usingClientEntryPoint:!1,Events:[Ea,dt,Bs,Hc,Fc,ll]},Ut={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dh={bundleType:Ut.bundleType,version:Ut.version,rendererPackageName:Ut.rendererPackageName,rendererConfig:Ut.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Yc(n),n===null?null:n.stateNode},findFiberByHostInstance:Ut.findFiberByHostInstance||lh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Is=$a.inject(dh),Qe=$a}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ch;De.createPortal=function(n,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hl(t))throw Error(N(200));return ih(n,t,null,a)};De.createRoot=function(n,t){if(!hl(n))throw Error(N(299));var a=!1,s="",r=Su;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=ul(n,1,!1,null,null,a,!1,s,r),n[ln]=t.current,ma(n.nodeType===8?n.parentNode:n),new pl(t)};De.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(N(188)):(n=Object.keys(n).join(","),Error(N(268,n)));return n=Yc(t),n=n===null?null:n.stateNode,n};De.flushSync=function(n){return Qn(n)};De.hydrate=function(n,t,a){if(!Vs(t))throw Error(N(200));return Ys(null,n,t,!0,a)};De.hydrateRoot=function(n,t,a){if(!hl(n))throw Error(N(405));var s=a!=null&&a.hydratedSources||null,r=!1,i="",l=Su;if(a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),t=Nu(t,null,n,1,a??null,r,!1,i,l),n[ln]=t.current,ma(n),s)for(n=0;n<s.length;n++)a=s[n],r=a._getVersion,r=r(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,r]:t.mutableSourceEagerHydrationData.push(a,r);return new Us(t)};De.render=function(n,t,a){if(!Vs(t))throw Error(N(200));return Ys(null,n,t,!1,a)};De.unmountComponentAtNode=function(n){if(!Vs(n))throw Error(N(40));return n._reactRootContainer?(Qn(function(){Ys(null,null,n,!1,function(){n._reactRootContainer=null,n[ln]=null})}),!0):!1};De.unstable_batchedUpdates=ll;De.unstable_renderSubtreeIntoContainer=function(n,t,a,s){if(!Vs(a))throw Error(N(200));if(n==null||n._reactInternals===void 0)throw Error(N(38));return Ys(n,t,a,!1,s)};De.version="18.3.1-next-f1338f8080-20240426";function ku(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ku)}catch(n){console.error(n)}}ku(),kc.exports=De;var uh=kc.exports,Po=uh;kr.createRoot=Po.createRoot,kr.hydrateRoot=Po.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},ja.apply(this,arguments)}var Nn;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Nn||(Nn={}));const Io="popstate";function mh(n){n===void 0&&(n={});function t(s,r){let{pathname:i,search:l,hash:o}=s.location;return vi("",{pathname:i,search:l,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function a(s,r){return typeof r=="string"?r:Cs(r)}return hh(t,a,null,n)}function Z(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function fl(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ph(){return Math.random().toString(36).substr(2,8)}function Ro(n,t){return{usr:n.state,key:n.key,idx:t}}function vi(n,t,a,s){return a===void 0&&(a=null),ja({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof t=="string"?Rt(t):t,{state:a,key:t&&t.key||s||ph()})}function Cs(n){let{pathname:t="/",search:a="",hash:s=""}=n;return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function Rt(n){let t={};if(n){let a=n.indexOf("#");a>=0&&(t.hash=n.substr(a),n=n.substr(0,a));let s=n.indexOf("?");s>=0&&(t.search=n.substr(s),n=n.substr(0,s)),n&&(t.pathname=n)}return t}function hh(n,t,a,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,l=r.history,o=Nn.Pop,c=null,d=g();d==null&&(d=0,l.replaceState(ja({},l.state,{idx:d}),""));function g(){return(l.state||{idx:null}).idx}function h(){o=Nn.Pop;let E=g(),m=E==null?null:E-d;d=E,c&&c({action:o,location:w.location,delta:m})}function f(E,m){o=Nn.Push;let u=vi(w.location,E,m);d=g()+1;let p=Ro(u,d),v=w.createHref(u);try{l.pushState(p,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;r.location.assign(v)}i&&c&&c({action:o,location:w.location,delta:1})}function b(E,m){o=Nn.Replace;let u=vi(w.location,E,m);d=g();let p=Ro(u,d),v=w.createHref(u);l.replaceState(p,"",v),i&&c&&c({action:o,location:w.location,delta:0})}function j(E){let m=r.location.origin!=="null"?r.location.origin:r.location.href,u=typeof E=="string"?E:Cs(E);return u=u.replace(/ $/,"%20"),Z(m,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,m)}let w={get action(){return o},get location(){return n(r,l)},listen(E){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Io,h),c=E,()=>{r.removeEventListener(Io,h),c=null}},createHref(E){return t(r,E)},createURL:j,encodeLocation(E){let m=j(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:b,go(E){return l.go(E)}};return w}var Lo;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Lo||(Lo={}));function fh(n,t,a){return a===void 0&&(a="/"),gh(n,t,a)}function gh(n,t,a,s){let r=typeof t=="string"?Rt(t):t,i=gl(r.pathname||"/",a);if(i==null)return null;let l=Eu(n);xh(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let d=Dh(i);o=Eh(l[c],d)}return o}function Eu(n,t,a,s){t===void 0&&(t=[]),a===void 0&&(a=[]),s===void 0&&(s="");let r=(i,l,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(Z(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let d=In([s,c.relativePath]),g=a.concat(c);i.children&&i.children.length>0&&(Z(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Eu(i.children,t,g,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:Sh(d,i.index),routesMeta:g})};return n.forEach((i,l)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))r(i,l);else for(let c of Tu(i.path))r(i,l,c)}),t}function Tu(n){let t=n.split("/");if(t.length===0)return[];let[a,...s]=t,r=a.endsWith("?"),i=a.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let l=Tu(s.join("/")),o=[];return o.push(...l.map(c=>c===""?i:[i,c].join("/"))),r&&o.push(...l),o.map(c=>n.startsWith("/")&&c===""?"/":c)}function xh(n){n.sort((t,a)=>t.score!==a.score?a.score-t.score:kh(t.routesMeta.map(s=>s.childrenIndex),a.routesMeta.map(s=>s.childrenIndex)))}const vh=/^:[\w-]+$/,yh=3,bh=2,jh=1,wh=10,Nh=-2,Mo=n=>n==="*";function Sh(n,t){let a=n.split("/"),s=a.length;return a.some(Mo)&&(s+=Nh),t&&(s+=bh),a.filter(r=>!Mo(r)).reduce((r,i)=>r+(vh.test(i)?yh:i===""?jh:wh),s)}function kh(n,t){return n.length===t.length&&n.slice(0,-1).every((s,r)=>s===t[r])?n[n.length-1]-t[t.length-1]:0}function Eh(n,t,a){let{routesMeta:s}=n,r={},i="/",l=[];for(let o=0;o<s.length;++o){let c=s[o],d=o===s.length-1,g=i==="/"?t:t.slice(i.length)||"/",h=Th({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},g),f=c.route;if(!h)return null;Object.assign(r,h.params),l.push({params:r,pathname:In([i,h.pathname]),pathnameBase:Lh(In([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=In([i,h.pathnameBase]))}return l}function Th(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[a,s]=Ah(n.path,n.caseSensitive,n.end),r=t.match(a);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:s.reduce((d,g,h)=>{let{paramName:f,isOptional:b}=g;if(f==="*"){let w=o[h]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const j=o[h];return b&&!j?d[f]=void 0:d[f]=(j||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:n}}function Ah(n,t,a){t===void 0&&(t=!1),a===void 0&&(a=!0),fl(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let s=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(s.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),s]}function Dh(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return fl(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),n}}function gl(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,s=n.charAt(a);return s&&s!=="/"?null:n.slice(a)||"/"}const Ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ph=n=>Ch.test(n);function Ih(n,t){t===void 0&&(t="/");let{pathname:a,search:s="",hash:r=""}=typeof n=="string"?Rt(n):n,i;if(a)if(Ph(a))i=a;else{if(a.includes("//")){let l=a;a=a.replace(/\/\/+/g,"/"),fl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+a))}a.startsWith("/")?i=Bo(a.substring(1),"/"):i=Bo(a,t)}else i=t;return{pathname:i,search:Mh(s),hash:Bh(r)}}function Bo(n,t){let a=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function Sr(n,t,a,s){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rh(n){return n.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function xl(n,t){let a=Rh(n);return t?a.map((s,r)=>r===a.length-1?s.pathname:s.pathnameBase):a.map(s=>s.pathnameBase)}function vl(n,t,a,s){s===void 0&&(s=!1);let r;typeof n=="string"?r=Rt(n):(r=ja({},n),Z(!r.pathname||!r.pathname.includes("?"),Sr("?","pathname","search",r)),Z(!r.pathname||!r.pathname.includes("#"),Sr("#","pathname","hash",r)),Z(!r.search||!r.search.includes("#"),Sr("#","search","hash",r)));let i=n===""||r.pathname==="",l=i?"/":r.pathname,o;if(l==null)o=a;else{let h=t.length-1;if(!s&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}o=h>=0?t[h]:"/"}let c=Ih(r,o),d=l&&l!=="/"&&l.endsWith("/"),g=(i||l===".")&&a.endsWith("/");return!c.pathname.endsWith("/")&&(d||g)&&(c.pathname+="/"),c}const In=n=>n.join("/").replace(/\/\/+/g,"/"),Lh=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Mh=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Bh=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function zh(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Au=["post","put","patch","delete"];new Set(Au);const _h=["get",...Au];new Set(_h);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wa(){return wa=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},wa.apply(this,arguments)}const yl=y.createContext(null),Wh=y.createContext(null),_n=y.createContext(null),$s=y.createContext(null),Wn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Du=y.createContext(null);function Hh(n,t){let{relative:a}=t===void 0?{}:t;Lt()||Z(!1);let{basename:s,navigator:r}=y.useContext(_n),{hash:i,pathname:l,search:o}=Pu(n,{relative:a}),c=l;return s!=="/"&&(c=l==="/"?s:In([s,l])),r.createHref({pathname:c,search:o,hash:i})}function Lt(){return y.useContext($s)!=null}function Aa(){return Lt()||Z(!1),y.useContext($s).location}function Cu(n){y.useContext(_n).static||y.useLayoutEffect(n)}function he(){let{isDataRoute:n}=y.useContext(Wn);return n?Zh():Fh()}function Fh(){Lt()||Z(!1);let n=y.useContext(yl),{basename:t,future:a,navigator:s}=y.useContext(_n),{matches:r}=y.useContext(Wn),{pathname:i}=Aa(),l=JSON.stringify(xl(r,a.v7_relativeSplatPath)),o=y.useRef(!1);return Cu(()=>{o.current=!0}),y.useCallback(function(d,g){if(g===void 0&&(g={}),!o.current)return;if(typeof d=="number"){s.go(d);return}let h=vl(d,JSON.parse(l),i,g.relative==="path");n==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:In([t,h.pathname])),(g.replace?s.replace:s.push)(h,g.state,g)},[t,s,l,i,n])}function Pu(n,t){let{relative:a}=t===void 0?{}:t,{future:s}=y.useContext(_n),{matches:r}=y.useContext(Wn),{pathname:i}=Aa(),l=JSON.stringify(xl(r,s.v7_relativeSplatPath));return y.useMemo(()=>vl(n,JSON.parse(l),i,a==="path"),[n,l,i,a])}function Gh(n,t){return Oh(n,t)}function Oh(n,t,a,s){Lt()||Z(!1);let{navigator:r}=y.useContext(_n),{matches:i}=y.useContext(Wn),l=i[i.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Aa(),g;if(t){var h;let E=typeof t=="string"?Rt(t):t;c==="/"||(h=E.pathname)!=null&&h.startsWith(c)||Z(!1),g=E}else g=d;let f=g.pathname||"/",b=f;if(c!=="/"){let E=c.replace(/^\//,"").split("/");b="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let j=fh(n,{pathname:b}),w=qh(j&&j.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:In([c,r.encodeLocation?r.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?c:In([c,r.encodeLocation?r.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,a,s);return t&&w?y.createElement($s.Provider,{value:{location:wa({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Nn.Pop}},w):w}function Uh(){let n=Qh(),t=zh(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),a=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),a?y.createElement("pre",{style:r},a):null,null)}const Vh=y.createElement(Uh,null);class Yh extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){console.error("React Router caught the following error during render",t,a)}render(){return this.state.error!==void 0?y.createElement(Wn.Provider,{value:this.props.routeContext},y.createElement(Du.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $h(n){let{routeContext:t,match:a,children:s}=n,r=y.useContext(yl);return r&&r.static&&r.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=a.route.id),y.createElement(Wn.Provider,{value:t},s)}function qh(n,t,a,s){var r;if(t===void 0&&(t=[]),a===void 0&&(a=null),s===void 0&&(s=null),n==null){var i;if(!a)return null;if(a.errors)n=a.matches;else if((i=s)!=null&&i.v7_partialHydration&&t.length===0&&!a.initialized&&a.matches.length>0)n=a.matches;else return null}let l=n,o=(r=a)==null?void 0:r.errors;if(o!=null){let g=l.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);g>=0||Z(!1),l=l.slice(0,Math.min(l.length,g+1))}let c=!1,d=-1;if(a&&s&&s.v7_partialHydration)for(let g=0;g<l.length;g++){let h=l[g];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=g),h.route.id){let{loaderData:f,errors:b}=a,j=h.route.loader&&f[h.route.id]===void 0&&(!b||b[h.route.id]===void 0);if(h.route.lazy||j){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((g,h,f)=>{let b,j=!1,w=null,E=null;a&&(b=o&&h.route.id?o[h.route.id]:void 0,w=h.route.errorElement||Vh,c&&(d<0&&f===0?(ef("route-fallback"),j=!0,E=null):d===f&&(j=!0,E=h.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,f+1)),u=()=>{let p;return b?p=w:j?p=E:h.route.Component?p=y.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=g,y.createElement($h,{match:h,routeContext:{outlet:g,matches:m,isDataRoute:a!=null},children:p})};return a&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?y.createElement(Yh,{location:a.location,revalidation:a.revalidation,component:w,error:b,children:u(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):u()},null)}var Iu=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Iu||{}),Ru=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Ru||{});function Xh(n){let t=y.useContext(yl);return t||Z(!1),t}function Jh(n){let t=y.useContext(Wh);return t||Z(!1),t}function Kh(n){let t=y.useContext(Wn);return t||Z(!1),t}function Lu(n){let t=Kh(),a=t.matches[t.matches.length-1];return a.route.id||Z(!1),a.route.id}function Qh(){var n;let t=y.useContext(Du),a=Jh(),s=Lu();return t!==void 0?t:(n=a.errors)==null?void 0:n[s]}function Zh(){let{router:n}=Xh(Iu.UseNavigateStable),t=Lu(Ru.UseNavigateStable),a=y.useRef(!1);return Cu(()=>{a.current=!0}),y.useCallback(function(r,i){i===void 0&&(i={}),a.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,wa({fromRouteId:t},i)))},[n,t])}const zo={};function ef(n,t,a){zo[n]||(zo[n]=!0)}function nf(n,t){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function tf(n){let{to:t,replace:a,state:s,relative:r}=n;Lt()||Z(!1);let{future:i,static:l}=y.useContext(_n),{matches:o}=y.useContext(Wn),{pathname:c}=Aa(),d=he(),g=vl(t,xl(o,i.v7_relativeSplatPath),c,r==="path"),h=JSON.stringify(g);return y.useEffect(()=>d(JSON.parse(h),{replace:a,state:s,relative:r}),[d,h,r,a,s]),null}function ue(n){Z(!1)}function af(n){let{basename:t="/",children:a=null,location:s,navigationType:r=Nn.Pop,navigator:i,static:l=!1,future:o}=n;Lt()&&Z(!1);let c=t.replace(/^\/*/,"/"),d=y.useMemo(()=>({basename:c,navigator:i,static:l,future:wa({v7_relativeSplatPath:!1},o)}),[c,o,i,l]);typeof s=="string"&&(s=Rt(s));let{pathname:g="/",search:h="",hash:f="",state:b=null,key:j="default"}=s,w=y.useMemo(()=>{let E=gl(g,c);return E==null?null:{location:{pathname:E,search:h,hash:f,state:b,key:j},navigationType:r}},[c,g,h,f,b,j,r]);return w==null?null:y.createElement(_n.Provider,{value:d},y.createElement($s.Provider,{children:a,value:w}))}function sf(n){let{children:t,location:a}=n;return Gh(yi(t),a)}new Promise(()=>{});function yi(n,t){t===void 0&&(t=[]);let a=[];return y.Children.forEach(n,(s,r)=>{if(!y.isValidElement(s))return;let i=[...t,r];if(s.type===y.Fragment){a.push.apply(a,yi(s.props.children,i));return}s.type!==ue&&Z(!1),!s.props.index||!s.props.children||Z(!1);let l={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=yi(s.props.children,i)),a.push(l)}),a}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},bi.apply(this,arguments)}function rf(n,t){if(n==null)return{};var a={},s=Object.keys(n),r,i;for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&(a[r]=n[r]);return a}function lf(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function of(n,t){return n.button===0&&(!t||t==="_self")&&!lf(n)}const cf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],df="6";try{window.__reactRouterVersion=df}catch{}const uf="startTransition",_o=em[uf];function mf(n){let{basename:t,children:a,future:s,window:r}=n,i=y.useRef();i.current==null&&(i.current=mh({window:r,v5Compat:!0}));let l=i.current,[o,c]=y.useState({action:l.action,location:l.location}),{v7_startTransition:d}=s||{},g=y.useCallback(h=>{d&&_o?_o(()=>c(h)):c(h)},[c,d]);return y.useLayoutEffect(()=>l.listen(g),[l,g]),y.useEffect(()=>nf(s),[s]),y.createElement(af,{basename:t,children:a,location:o.location,navigationType:o.action,navigator:l,future:s})}const pf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,x=y.forwardRef(function(t,a){let{onClick:s,relative:r,reloadDocument:i,replace:l,state:o,target:c,to:d,preventScrollReset:g,viewTransition:h}=t,f=rf(t,cf),{basename:b}=y.useContext(_n),j,w=!1;if(typeof d=="string"&&hf.test(d)&&(j=d,pf))try{let p=new URL(window.location.href),v=d.startsWith("//")?new URL(p.protocol+d):new URL(d),k=gl(v.pathname,b);v.origin===p.origin&&k!=null?d=k+v.search+v.hash:w=!0}catch{}let E=Hh(d,{relative:r}),m=ff(d,{replace:l,state:o,target:c,preventScrollReset:g,relative:r,viewTransition:h});function u(p){s&&s(p),p.defaultPrevented||m(p)}return y.createElement("a",bi({},f,{href:j||E,onClick:w||i?s:u,ref:a,target:c}))});var Wo;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Wo||(Wo={}));var Ho;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Ho||(Ho={}));function ff(n,t){let{target:a,replace:s,state:r,preventScrollReset:i,relative:l,viewTransition:o}=t===void 0?{}:t,c=he(),d=Aa(),g=Pu(n,{relative:l});return y.useCallback(h=>{if(of(h,a)){h.preventDefault();let f=s!==void 0?s:Cs(d)===Cs(g);c(n,{replace:f,state:r,preventScrollReset:i,relative:l,viewTransition:o})}},[d,c,g,s,r,a,n,i,l,o])}function gf(){const n=he(),t=y.useRef(null),a=y.useRef(null),s=y.useRef(null),r=y.useRef(null),i=y.useRef(null),l=y.useRef(null);return y.useEffect(()=>{let o=!1,c=null,d=null,g=null,h=null,f=null,b=null,j=null,w=null,E=null,m=null;const p=window.innerWidth<=600?"/m/home":"/home",v=()=>{o||n(p)},k=()=>{const T=document.createElement("canvas");return!!(T.getContext("webgl")||T.getContext("experimental-webgl"))},C=()=>{if(o)return;console.warn("Switching to fallback loader"),t.current&&(t.current.style.display="none");const T=document.querySelector(".entry-loader-page .progress-holo");T&&(T.style.display="none"),s.current&&(s.current.style.display="none"),r.current&&(r.current.style.display="none"),l.current&&l.current.classList.add("active");let z=0;h=setInterval(()=>{z+=2,l.current&&(l.current.textContent=`Loading... ${Math.round(z)}%`),z>=100&&(clearInterval(h),h=null,setTimeout(()=>{i.current&&i.current.classList.add("hidden"),v()},1e3))},50)};if(!k()||typeof window.THREE>"u")return console.warn("WebGL not supported (or three.js not loaded), using fallback"),C(),()=>{o=!0,h&&clearInterval(h)};const S=window.THREE;try{const T=new S.Scene,z=new S.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);f=new S.WebGLRenderer({alpha:!0,antialias:!0}),f.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),f.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(f.domElement);const R=new S.DodecahedronGeometry(1.3,1),fe=new S.ShaderMaterial({uniforms:{uTime:{value:0},uGlow:{value:.8},uColor1:{value:new S.Color(16766720)},uColor2:{value:new S.Color(65535)}},vertexShader:`
            varying vec3 vPosition;
            uniform float uTime;
            void main() {
              vPosition = position;
              vec3 pos = position;
              pos += sin(uTime + position.x * 2.0) * 0.08;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,fragmentShader:`
            uniform float uTime;
            uniform float uGlow;
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            varying vec3 vPosition;
            void main() {
              float pulse = sin(uTime * 2.5 + vPosition.y) * 0.5 + 0.5;
              vec3 color = mix(uColor1, uColor2, pulse);
              float rim = 1.0 - abs(dot(normalize(vPosition), vec3(0, 0, 1)));
              gl_FragColor = vec4(color * rim, uGlow * (0.6 + 0.4 * pulse));
            }
          `,transparent:!0,side:S.DoubleSide,wireframe:!0}),Pe=new S.Mesh(R,fe);T.add(Pe);const We=4e3,un=new S.BufferGeometry,nt=new Float32Array(We*3),re=new Float32Array(We*3),mn=new Float32Array(We*3);for(let _=0;_<We*3;_+=3){const W=Math.random()*Math.PI*2,M=Math.random()*10+5;nt[_]=M*Math.cos(W),nt[_+1]=(Math.random()-.5)*5,nt[_+2]=M*Math.sin(W),re[_]=(Math.random()-.5)*.012,re[_+1]=(Math.random()-.5)*.012,re[_+2]=(Math.random()-.5)*.012;const hn=Math.random()>.33?[1,.84,.4]:Math.random()>.66?[0,1,1]:[1,0,.47];mn[_]=hn[0],mn[_+1]=hn[1],mn[_+2]=hn[2]}un.setAttribute("position",new S.BufferAttribute(nt,3)),un.setAttribute("color",new S.BufferAttribute(mn,3));const A=new S.PointsMaterial({size:.09,vertexColors:!0,transparent:!0,opacity:.95,blending:S.AdditiveBlending}),P=new S.Points(un,A);T.add(P);const I=new S.AmbientLight(4210752,.6);T.add(I);const V=new S.PointLight(65535,2,12);V.position.set(6,6,6),T.add(V);const K=new S.PointLight(16719446,1.5,10);K.position.set(-6,-6,-6),T.add(K),z.position.set(0,2,7),z.lookAt(0,0,0);let pn=0,He=0;j=_=>{pn=_.clientX/window.innerWidth*2-1,He=-(_.clientY/window.innerHeight)*2+1},w=_=>{const W=_.touches[0];W&&(pn=W.clientX/window.innerWidth*2-1,He=-(W.clientY/window.innerHeight)*2+1)},document.addEventListener("mousemove",j),document.addEventListener("touchmove",w);const tt=()=>{if(!m){const _=window.AudioContext||window.webkitAudioContext;if(!_)return Promise.resolve();m=new _}return m.state==="running"?Promise.resolve():m.resume()},Fe=(_,W="sine",M=.3,hn=.2)=>{tt().then(()=>{if(!m)return;const Ie=m.createOscillator(),fn=m.createGain();Ie.type=W,Ie.frequency.setValueAtTime(_,m.currentTime),fn.gain.setValueAtTime(hn,m.currentTime),Ie.connect(fn),fn.connect(m.destination),Ie.start(),fn.gain.exponentialRampToValueAtTime(.01,m.currentTime+M),Ie.stop(m.currentTime+M)}).catch(Ie=>{console.warn("AudioContext error:",Ie)})},at=()=>{const _=performance.now()*.001,W=un.attributes.position.array;for(let M=0;M<We*3;M+=3){W[M]+=re[M],W[M+1]+=re[M+1],W[M+2]+=re[M+2];const hn=Math.atan2(W[M+2],W[M])+.01,Ie=Math.sqrt(W[M]*W[M]+W[M+2]*W[M+2]);W[M]=Ie*Math.cos(hn),W[M+2]=Ie*Math.sin(hn);const fn=Pe.position.x-W[M],qs=Pe.position.y-W[M+1],Xs=Pe.position.z-W[M+2];Math.sqrt(fn*fn+qs*qs+Xs*Xs)<4&&(re[M]+=fn*.001,re[M+1]+=qs*.001,re[M+2]+=Xs*.001);const Js=pn*10-W[M],Ks=He*10-W[M+1];if(Math.sqrt(Js*Js+Ks*Ks)<5&&(re[M]+=Js*.006,re[M+1]+=Ks*.006),Ie>15){const jl=5/Ie;W[M]*=jl,W[M+2]*=jl,re[M]*=-.7,re[M+2]*=-.7}}un.attributes.position.needsUpdate=!0,Pe.rotation.x+=.008,Pe.rotation.y+=.012,fe.uniforms.uTime.value=_,fe.uniforms.uGlow.value=.7+Math.sin(_*2)*.3},Da=a.current,Mu=Da.r.baseVal.value,Mt=2*Math.PI*Mu;Da.style.strokeDasharray=`${Mt} ${Mt}`,Da.style.strokeDashoffset=Mt;const Bu=_=>{const W=Mt-_/100*Mt;Da.style.strokeDashoffset=W,s.current&&(s.current.textContent=`${Math.round(_)}%`)};let Ca=0;const Bt=[{max:20,speed:1.5,text:"Loading TaruGuardians..."},{max:40,speed:1.2,text:"Just Wait..."},{max:60,speed:1,text:"Loading Website..."},{max:80,speed:.8,text:"Loaded..."},{max:100,speed:.6,text:"get ready..."}];let Hn=0;d=setInterval(()=>{try{Ca+=Bt[Hn].speed,Bu(Ca),r.current&&(r.current.textContent=Bt[Hn].text),Ca>=Bt[Hn].max&&(Hn++,Hn<Bt.length&&Fe(200+Hn*100,"sine",.4,.2),Hn>=Bt.length&&(clearInterval(d),d=null,setTimeout(()=>{Fe(150,"sine",.8,.3),i.current&&i.current.classList.add("hidden"),v()},2e3)))}catch(_){console.error("Progress interval error:",_),clearInterval(d),d=null,C()}},50),g=setTimeout(()=>{Ca===0&&(console.warn("Progress stuck at 0%, switching to fallback"),d&&clearInterval(d),d=null,C())},3e3);const bl=()=>{try{c=requestAnimationFrame(bl),at(),f.render(T,z)}catch(_){console.error("Animation loop error:",_),c&&cancelAnimationFrame(c),c=null,C()}};bl(),b=()=>{z.aspect=window.innerWidth/window.innerHeight,z.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)},window.addEventListener("resize",b),E=()=>{tt().then(()=>{Fe(100,"sine",.5,.2)})},document.addEventListener("click",E,{once:!0})}catch(T){console.error("Initialization error:",T),C()}return()=>{if(o=!0,c&&cancelAnimationFrame(c),d&&clearInterval(d),h&&clearInterval(h),g&&clearTimeout(g),b&&window.removeEventListener("resize",b),j&&document.removeEventListener("mousemove",j),w&&document.removeEventListener("touchmove",w),E&&document.removeEventListener("click",E),f)try{f.dispose(),f.domElement&&f.domElement.parentNode&&f.domElement.parentNode.removeChild(f.domElement)}catch{}if(m&&m.state!=="closed")try{m.close()}catch{}}},[n]),e.jsxs("div",{className:"entry-loader-page",children:[e.jsxs("div",{className:"loader-container",id:"loader",ref:i,"aria-busy":"true",children:[e.jsx("div",{id:"scene-container",ref:t}),e.jsx("svg",{className:"filters",children:e.jsx("defs",{children:e.jsxs("filter",{id:"glow",children:[e.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"5",result:"blur"}),e.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 22 -9",result:"glow"}),e.jsx("feBlend",{in:"SourceGraphic",in2:"glow",mode:"normal"})]})})}),e.jsxs("svg",{className:"progress-holo",viewBox:"0 0 260 260",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"etherealGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#FFD700",stopOpacity:1}}),e.jsx("stop",{offset:"20%",style:{stopColor:"#00FFFF",stopOpacity:1}}),e.jsx("stop",{offset:"40%",style:{stopColor:"#FF1E56",stopOpacity:1}}),e.jsx("stop",{offset:"60%",style:{stopColor:"#00FFFF",stopOpacity:1}}),e.jsx("stop",{offset:"80%",style:{stopColor:"#FFD700",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#FF1E56",stopOpacity:1}})]})}),e.jsx("circle",{ref:a,className:"progress-holo__ring",strokeWidth:"10",fill:"transparent",r:"120",cx:"130",cy:"130"})]}),e.jsx("div",{className:"progress-text",id:"progress-text",ref:s,children:"0%"}),e.jsx("div",{className:"loader-text",id:"loader-text",ref:r,children:"Initializing Ethereal Nexus..."}),e.jsx("div",{className:"fallback-loader",id:"fallback-loader",ref:l,children:"Loading..."})]}),e.jsxs("div",{className:"content",id:"content",children:[e.jsx("h1",{children:"Ethereal Infinity Unleashed"}),e.jsx("p",{children:"Journey into a realm of boundless elegance and innovation."})]})]})}const xf=[{kind:"external",src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",type:"text/javascript"},{kind:"external",src:"https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js",type:"text/javascript"},{kind:"external",src:"https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js",type:"text/javascript"},{kind:"external",src:"https://unpkg.com/aos@2.3.1/dist/aos.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
    // === RECRUITMENT FORM FUNCTIONS ===
    function openRecruitmentModal() {
        document.getElementById('recruitmentModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
        resetForm();
    }
    
    function closeRecruitmentModal() {
        document.getElementById('recruitmentModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function resetForm() {
        document.getElementById('step1').style.display = 'block';
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'none';
        document.getElementById('stepSuccess').style.display = 'none';
        document.getElementById('formProgress').style.width = '33%';
        
        // Clear all fields
        document.getElementById('recName').value = '';
        document.getElementById('recEmail').value = '';
        document.getElementById('recPhone').value = '';
        document.getElementById('recWhatsapp').value = '';
        document.getElementById('recRoll').value = '';
        document.getElementById('recDepartment').value = '';
        document.getElementById('recYear').value = '';
        document.getElementById('recWhyJoin').value = '';
        document.querySelectorAll('input[name="recPosition"]').forEach(r => r.checked = false);
        
        // Clear role-specific fields
        const roleSpecific = document.getElementById('roleSpecificFields');
        if (roleSpecific) roleSpecific.innerHTML = '';
    }
    
    function nextStep(step) {
        if (step === 2 && !validateStep1()) return;
        if (step === 3 && !validateStep2()) return;
        
        document.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
        document.getElementById('step' + step).style.display = 'block';
        
        // Update progress bar
        const progress = step === 4 ? 100 : (step - 1) * 33;
        document.getElementById('formProgress').style.width = progress + '%';
        
        // If going to step 3, render role-specific fields
        if (step === 3) {
            renderRoleSpecificFields();
        }
    }
    
    function validateStep1() {
        const name = document.getElementById('recName').value.trim();
        const email = document.getElementById('recEmail').value.trim();
        const phone = document.getElementById('recPhone').value.trim();
        const whatsapp = document.getElementById('recWhatsapp').value.trim();
        const roll = document.getElementById('recRoll').value.trim();
        const department = document.getElementById('recDepartment').value;
        const year = document.getElementById('recYear').value;
        
        if (!name || !email || !phone || !whatsapp || !roll || !department || !year) {
            alert('Please fill in all required fields');
            return false;
        }
        
        if (!email.includes('@')) {
            alert('Please enter a valid email');
            return false;
        }
        
        return true;
    }
    
    function validateStep2() {
        const position = document.querySelector('input[name="recPosition"]:checked');
        if (!position) {
            alert('Please select a role');
            return false;
        }
        return true;
    }
    
    function renderRoleSpecificFields() {
        const position = document.querySelector('input[name="recPosition"]:checked').value;
        const container = document.getElementById('roleSpecificFields');
        
        let html = '';
        
        if (position === 'Web/App Developer') {
            html = \`
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Programming Languages you know *</label>
                    <input type="text" id="recLanguages" placeholder="e.g., Python, JavaScript, Java..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Projects (GitHub/Live Links)</label>
                    <textarea id="recProjects" rows="3" placeholder="Share your project links..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem; resize: vertical;"></textarea>
                </div>
            \`;
        } else if (position === 'Photographer/Videographer') {
            html = \`
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Camera/Equipment you have *</label>
                    <input type="text" id="recCamera" placeholder="e.g., DSLR, Mirrorless, Smartphone..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Portfolio/Work Samples (Links or PDF)</label>
                    <input type="text" id="recPortfolio" placeholder="Google Drive/Dropbox/Behance links..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Upload PDF with sample links (optional)</label>
                    <input type="file" id="recSamplePdf" accept=".pdf" style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Photography Certificate/Achievements (optional)</label>
                    <input type="file" id="recCertificate" accept=".pdf,.jpg,.jpeg,.png,.webp" style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
            \`;
        } else if (position === 'Video Editor') {
            html = \`
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Video Editing Software you use *</label>
                    <input type="text" id="recSoftware" placeholder="e.g., Premiere Pro, DaVinci Resolve, Final Cut..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Video Samples (YouTube/Vimeo Links)</label>
                    <input type="text" id="recVideoSamples" placeholder="Your edited videos links..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
            \`;
        } else if (position === 'Graphics Designer') {
            html = \`
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Design Tools you use *</label>
                    <input type="text" id="recDesignTools" placeholder="e.g., Photoshop, Illustrator, Figma..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Design Portfolio (Links)</label>
                    <input type="text" id="recDesignPortfolio" placeholder="Behance/Dribbble/Instagram links..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
            \`;
        } else if (position === 'Content Writer') {
            html = \`
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Writing Samples/Blogs (Links)</label>
                    <input type="text" id="recWritingSamples" placeholder="Medium/Blog/Article links..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Topics you can write about</label>
                    <input type="text" id="recTopics" placeholder="e.g., Tech, Lifestyle, Education..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
            \`;
        } else if (position === 'Public Relation') {
            html = \`
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Social Media Handles</label>
                    <input type="text" id="recSocialHandles" placeholder="Instagram/LinkedIn/Twitter handles..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 8px; display: block;">Any PR Experience?</label>
                    <textarea id="recPRExperience" rows="3" placeholder="Describe your PR experience..." style="width: 100%; padding: 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 1rem; resize: vertical;"></textarea>
                </div>
            \`;
        }
        
        container.innerHTML = html;
    }
    
    async function submitRecruitment() {
        const whyJoin = document.getElementById('recWhyJoin').value.trim();
        if (!whyJoin) {
            alert('Please tell us why you want to join TaruGuardians');
            return;
        }
        
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        
        const position = document.querySelector('input[name="recPosition"]:checked').value;
        const roleSpecificData = {};
        
        // Collect role-specific data
        if (position === 'Web/App Developer') {
            roleSpecificData.languages = document.getElementById('recLanguages').value;
            roleSpecificData.projects = document.getElementById('recProjects').value;
        } else if (position === 'Photographer/Videographer') {
            roleSpecificData.camera = document.getElementById('recCamera').value;
            roleSpecificData.portfolio = document.getElementById('recPortfolio').value;
        } else if (position === 'Video Editor') {
            roleSpecificData.software = document.getElementById('recSoftware').value;
            roleSpecificData.videoSamples = document.getElementById('recVideoSamples').value;
        } else if (position === 'Graphics Designer') {
            roleSpecificData.tools = document.getElementById('recDesignTools').value;
            roleSpecificData.portfolio = document.getElementById('recDesignPortfolio').value;
        } else if (position === 'Content Writer') {
            roleSpecificData.samples = document.getElementById('recWritingSamples').value;
            roleSpecificData.topics = document.getElementById('recTopics').value;
        } else if (position === 'Public Relation') {
            roleSpecificData.socialHandles = document.getElementById('recSocialHandles').value;
            roleSpecificData.experience = document.getElementById('recPRExperience').value;
        }
        
        const formData = new FormData();
        formData.append('name', document.getElementById('recName').value.trim());
        formData.append('email', document.getElementById('recEmail').value.trim());
        formData.append('phone', document.getElementById('recPhone').value.trim());
        formData.append('whatsapp', document.getElementById('recWhatsapp').value.trim());
        formData.append('classRoll', document.getElementById('recRoll').value.trim());
        formData.append('department', document.getElementById('recDepartment').value);
        formData.append('year', document.getElementById('recYear').value);
        formData.append('position', position);
        formData.append('whyJoin', whyJoin);
        formData.append('roleSpecificData', JSON.stringify(roleSpecificData));
        
        if (position === 'Photographer/Videographer') {
            const samplePdf = document.getElementById('recSamplePdf');
            const certificate = document.getElementById('recCertificate');
            if (samplePdf && samplePdf.files[0]) formData.append('samplePdf', samplePdf.files[0]);
            if (certificate && certificate.files[0]) formData.append('certificate', certificate.files[0]);
        }
        
        try {
            const response = await fetch('/api/recruitment/apply', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                document.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
                document.getElementById('stepSuccess').style.display = 'block';
                document.getElementById('formProgress').style.width = '100%';
            } else {
                alert(data.message || 'Something went wrong. Please try again.');
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Submit <i class="fas fa-paper-plane"></i>';
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Network error. Please try again.');
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Submit <i class="fas fa-paper-plane"></i>';
        }
    }
    
    // Close modal on outside click
    document.getElementById('recruitmentModal').addEventListener('click', function(e) {
        if (e.target === this) closeRecruitmentModal();
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize slideshows
        initSlideshow('left-slideshow');
        initSlideshow('right-slideshow');

        // Ensure navbar doesn't have parallax behavior
        const navbar = document.querySelector('header.modern-navbar');
        if (navbar) {
            navbar.classList.remove('parallax');
            navbar.removeAttribute('data-speed');
        }

        function initSlideshow(slideshowId) {
            const slideshow = document.getElementById(slideshowId);
            const slides = slideshow.querySelectorAll('.slide');
            let currentSlide = 0;
            let cycleCount = 0;
            const maxCycles = 10;

            function nextSlide() {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                if (currentSlide === 0) {
                    cycleCount++;
                    if (cycleCount >= maxCycles) {
                        cycleCount = 0;
                    }
                }
                slides[currentSlide].classList.add('active');
            }

            setInterval(nextSlide, 3000);
        }

        // Navbar Variables
        const navLinks = document.querySelectorAll('.navbar-links a, .navbar-blog-btn');
        const sections = document.querySelectorAll('section[id], footer[id]');
        // Tech Wheel Variables
        const techWheelSection = document.getElementById('tech-wheel');
        const techWheel = document.getElementById('techWheel');
        const webDevText = document.getElementById('webDevText');
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.getElementById('progress-text');
        const scrollHint = document.querySelector('.scroll-hint');
        const body = document.body;
        const techItems = [
            { id: 'competitive', name: 'PHOTOGRAPHER', desc: 'The Photographer is in charge of taking pictures at all club events and promotions. Whenever there is a need to capture moments,They handle all types of photography work the club requires', url: 'taru wing photographer.html' },
            { id: 'design', name: 'Graphics Designer', desc: 'The GD team handles all the poster designs, templates, and creative work for social media,They have the most consistent work, as they create posters for every single event.', url: 'taru wing GD.html' },
            { id: 'web', name: 'Web Developer', desc: 'The Web Developer manages the club\\'s official website,ensure the website runs smoothly at all times.', url: 'taru wing web.html' },
            { id: 'ai', name: 'VIDEO EDITOR', desc: 'The Video Editor creates all the videos that are posted on the club\\'s social media, responsible for shooting, recording, and editing any video content.', url: 'taru wing video editor.html' },
            { id: 'cyber', name: 'PR ', desc: 'The PR team promotes all club events and recruitments, both online and offline, PR make sure all social media posts egularly and on time', url: 'taru wing pr.html' },
            { id: 'app', name: 'Web Developer', desc: 'The Web Developer manages the club\\'s official website,ensure the website runs smoothly at all times.', url: 'taru wing web.html' },
            { id: 'blockchain', name: 'CONTENT WRITER', desc: 'WIll Be Added Soon', url: 'taru wing content .html' },
            { id: 'foss', name: 'Web Developer ', desc: 'The Web Developer manages the club\\'s official website,ensure the website runs smoothly at all times', url: 'taru wing web.html' }
        ];
        let currentRotation = 0;
        let targetRotation = 0;
        let isWheelActive = false;
        let scrollLocked = false;
        let rotationCompleted = false;
        let isDragging = false;
        let lastX = 0;
        let rotationSpeed = 0;
        let totalRotation = 0;
        const techItemElements = [];
        const easing = 0.08;
        const maxSpeed = 2.5;
        let currentActiveItem = null;
        let isNavigating = false;
        const itemsShown = new Set();

        function updateActiveLink() {
            const hash = window.location.hash;
            if (!hash || hash === '#home') {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector('.navbar-links a[href="#home"]').classList.add('active');
            }
        }

        function createTechItems() {
            techWheel.innerHTML = '';
            techItems.forEach((item, index) => {
                const techItem = document.createElement('div');
                techItem.className = 'tech-item';
                techItem.dataset.id = item.id;
                const dot = document.createElement('div');
                dot.className = 'dot';
                const span = document.createElement('span');
                span.textContent = item.name;
                techItem.appendChild(dot);
                techItem.appendChild(span);
                techWheel.appendChild(techItem);
                const angle = index * (360 / techItems.length);
                techItemElements.push({ element: techItem, angle, data: item });
            });
        }

        function openPage(url) {
            try {
                window.open('./' + url, '_blank', 'noopener,noreferrer');
            } catch (err) {
                console.error('Failed to open page:', err);
                (window.__legacyTryNavigate && window.__legacyTryNavigate('./')) || (window.location.href = './' )+ url;
            }
        }

        function updateContent(item) {
            if (currentActiveItem && currentActiveItem.id === item.id) return;
            currentActiveItem = item;
            webDevText.innerHTML = '';
            const h3 = document.createElement('h3');
            h3.textContent = \`\${item.name} Wing\`;
            const p = document.createElement('p');
            p.textContent = item.desc;
            const readMoreLink = document.createElement('a');
            readMoreLink.className = 'read-more';
            readMoreLink.href = './' + item.url;
            readMoreLink.setAttribute('target', '_blank');
            readMoreLink.textContent = 'Read More →';
            readMoreLink.onclick = (e) => {
                e.preventDefault();
                openPage(item.url);
            };
            webDevText.appendChild(h3);
            webDevText.appendChild(p);
            webDevText.appendChild(readMoreLink);
        }

        function animate() {
            const delta = targetRotation - currentRotation;
            const rotationChange = delta * easing;
            if (!isDragging) {
                rotationSpeed *= 0.95;
                if (Math.abs(rotationSpeed) < 0.01) rotationSpeed = 0;
                currentRotation += rotationSpeed;
                totalRotation += Math.abs(rotationSpeed);
            }
            currentRotation += rotationChange;
            totalRotation += Math.abs(rotationChange);
            updateWheel();
            requestAnimationFrame(animate);
        }

        function updateWheel() {
            techWheel.style.transform = \`translate(-50%, -50%) rotate(\${currentRotation}deg)\`;
            let closestItem = null;
            let minDiff = Infinity;
            techItemElements.forEach(({ element, angle, data }) => {
                const currentAngle = angle + currentRotation;
                const translateX = window.innerWidth < 900 ? 250 : 400;
                element.style.transform = \`rotate(\${currentAngle}deg) translateX(\${translateX}px) rotate(\${-currentAngle}deg)\`;
                const normalized = (currentAngle + 360) % 360;
                const diff = Math.min(
                    Math.abs((normalized - 230 + 360) % 360),
                    Math.abs((230 - normalized + 360) % 360)
                );
                if (diff < 30) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
                if (diff < minDiff) {
                    minDiff = diff;
                    closestItem = data;
                }
                if (diff < 10) {
                    itemsShown.add(data.id);
                }
            });
            if (closestItem) {
                updateContent(closestItem);
            }
            updateProgress();
        }

        function updateProgress() {
            const progress = Math.min((itemsShown.size / techItems.length) * 100, 100);
            progressFill.style.width = \`\${progress}%\`;
            progressText.textContent = \`\${Math.round(progress)}%\`;
            if (itemsShown.size >= techItems.length && !rotationCompleted) {
                rotationCompleted = true;
                scrollLocked = false;
                body.classList.remove('scroll-locked');
                if (scrollHint) scrollHint.classList.add('hidden');
            }
        }

        function resetWheelState() {
            rotationCompleted = false;
            scrollLocked = true;
            isWheelActive = true;
            body.classList.add('scroll-locked');
            if (scrollHint) scrollHint.classList.remove('hidden');
            currentRotation = 0;
            targetRotation = 0;
            totalRotation = 0;
            itemsShown.clear();
            updateWheel();
        }

        function setupEventListeners() {
            techWheelSection.addEventListener('mousedown', startDrag);
            techWheelSection.addEventListener('touchstart', startDrag, { passive: false });
            window.addEventListener('wheel', handleWheelEvent, { passive: false });
            window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
            window.addEventListener('scroll', preventDefaultScroll, { passive: false });
            window.addEventListener('resize', handleResize);
        }

        function startDrag(e) {
            if (!isWheelActive || rotationCompleted) return;
            if (e.target.closest('.tech-item') || e.target.closest('.read-more')) {
                return;
            }
            isDragging = true;
            lastX = e.clientX || e.touches[0].clientX;
            e.preventDefault();
            document.addEventListener('mousemove', drag);
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('mouseup', endDrag);
            document.addEventListener('touchend', endDrag);
        }

        function drag(e) {
            if (!isDragging) return;
            const currentX = e.clientX || e.touches[0].clientX;
            const deltaX = currentX - lastX;
            lastX = currentX;
            rotationSpeed = deltaX * 0.4;
            rotationSpeed = Math.min(Math.max(rotationSpeed, -maxSpeed), maxSpeed);
            targetRotation += rotationSpeed;
        }

        function endDrag() {
            isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchend', endDrag);
        }

        function handleWheelEvent(e) {
            if (!isWheelActive || rotationCompleted) return;
            if (e.target.closest('.tech-item') || e.target.closest('.read-more')) {
                return;
            }
            if (scrollLocked) {
                e.preventDefault();
                const delta = e.deltaY > 0 ? 1.5 : -1.5;
                targetRotation += delta;
                return false;
            }
        }

        function preventDefaultScroll(e) {
            if (scrollLocked && isWheelActive && !e.target.closest('.tech-item') && !e.target.closest('.read-more')) {
                e.preventDefault();
                return false;
            }
        }

        function handleResize() {
            adjustWheelForScreenSize();
            updateActiveLink();
        }

        function initWheel() {
            createTechItems();
            resetWheelState();
            animate();
            setupEventListeners();
            if (techItems.length > 0) {
                updateContent(techItems[0]);
                itemsShown.add(techItems[0].id);
            }
        }

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && (!isNavigating || window.location.hash === '#tech-wheel')) {
                    initWheel();
                    if (scrollLocked) {
                        techWheelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                } else {
                    isWheelActive = false;
                    scrollLocked = false;
                    body.classList.remove('scroll-locked');
                    if (scrollHint) scrollHint.classList.add('hidden');
                }
            });
        }, { threshold: 0.5 });
        sectionObserver.observe(techWheelSection);

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (!href || !href.startsWith('#')) return;
                e.preventDefault();
                const targetId = href.substring(1);
                if (targetId === 'tech-wheel') {
                    isNavigating = false;
                } else {
                    isNavigating = true;
                }
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    scrollLocked = false;
                    isWheelActive = false;
                    rotationCompleted = true;
                    body.classList.remove('scroll-locked');
                    if (scrollHint) scrollHint.classList.add('hidden');
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveLink(targetId);
                    if (targetId !== 'tech-wheel') {
                        setTimeout(() => {
                            isNavigating = false;
                        }, 1000);
                    }
                }
            });
        });

        function handleHashNavigation() {
            const hash = window.location.hash;
            if (hash) {
                const targetId = hash.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveLink(targetId);
                    if (targetId === 'team-organizers') console.log('Navigated to Team Organizers via hash');
                    if (targetId === 'tech-wheel') {
                        initWheel();
                    } else {
                        isNavigating = true;
                        setTimeout(() => {
                            isNavigating = false;
                        }, 1000);
                    }
                }
            }
        }

        handleHashNavigation();
        window.addEventListener('resize', updateActiveLink);
        window.addEventListener('hashchange', updateActiveLink);
        updateActiveLink();

        function adjustWheelForScreenSize() {
            const wheelContainer = document.getElementById('techWheelContainer');
            if (wheelContainer) {
                if (window.innerWidth < 900) {
                    wheelContainer.style.width = '600px';
                    wheelContainer.style.height = '600px';
                    techWheel.style.width = '600px';
                    techWheel.style.height = '600px';
                } else {
                    wheelContainer.style.width = '1200px';
                    wheelContainer.style.height = '1200px';
                    techWheel.style.width = '1200px';
                    techWheel.style.height = '1200px';
                }
            }
        }

        window.addEventListener('resize', adjustWheelForScreenSize);
        if (techWheel) {
            adjustWheelForScreenSize();
            animate();
        }

        const announcementBox = document.getElementById('announcementBox');
        const headerEl = document.getElementById('headerText');
        const headerStatic = document.querySelector('.simple-announcement1 h1');
        const textEls = [
            document.getElementById('text1'),
            document.getElementById('text2'),
            document.getElementById('text3')
        ];
        if (!announcementBox || !headerEl || !headerStatic || textEls.some(el => !el)) {
            console.error('Announcement Box: Missing DOM elements', {
                announcementBox: !!announcementBox,
                headerEl: !!headerEl,
                headerStatic: !!headerStatic,
                textEls: textEls.map(el => !!el)
            });
        } else {
            console.log('Announcement Box: All DOM elements found');
        }

        const headerText = "LEADERSHIP TEAM";
        const texts = {
            text1: [
                " PRESIDENT: PRAKASH KUMAR",
                " VICE PRESIDENT: MUKUL ANAND",
                "JOINT SECRETARY: Akshat Thakur",
                "JOINT SECRETARY: Kriti Divyansha",
                "TREASURER: Pushkar Aditya",
                "TREASURER: Santripti"
            ],
            text2: [
                " TECH HEAD: Aashish Kishore",
                "ADMINSTRATIVE HEAD: Ritik Kumar",
                "EVENT & MANAGEMENT HEAD: Hrithik Bhadani",
                "MEDIA HEAD: Manyata Manas",
                "MEDIA HEAD: Sneh Raj",
                "CONTENT HEAD: Sarthak Kumar"
            ],
            text3: [
                "EVENT & MANAGEMENT HEAD: Namya Singh",
                "PR HEAD: Saikat Bhattacharya",
                "PR HEAD: Nakshatra Sarkar",
                "PROGRAM HEAD: Piyali Nath",
                "MEMBERSHIP HEAD: Pawan Gope",
                "MEMBERSHIP HEAD: Abhijit Choudhury"
            ]
        };

        function typeMonsterText(el, texts, speed = 100, deleteSpeed = 50) {
            if (!el) return;
            let i = 0, charIndex = 0, isDeleting = false, current = "";
            function type() {
                const full = texts[i];
                if (isDeleting) {
                    current = full.substring(0, --charIndex);
                } else {
                    current = full.substring(0, ++charIndex);
                }
                el.textContent = current;
                announcementBox.classList.add('shake');
                setTimeout(() => announcementBox.classList.remove('shake'), 100);
                if (!isDeleting && charIndex === full.length) {
                    isDeleting = true;
                    setTimeout(type, 1200);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    i = (i + 1) % texts.length;
                    setTimeout(type, 600);
                } else {
                    setTimeout(type, isDeleting ? deleteSpeed : speed);
                }
            }
            console.log(\`Announcement Box: Starting typewriter for element \${el.id}\`);
            type();
        }

        if (headerEl) typeMonsterText(headerEl, [headerText], 100, 50);
        if (textEls[0]) typeMonsterText(textEls[0], texts.text1, 100, 50);
        if (textEls[1]) typeMonsterText(textEls[1], texts.text2, 100, 50);
        if (textEls[2]) typeMonsterText(textEls[2], texts.text3, 100, 50);
        if (headerStatic) {
            setTimeout(() => {
                headerStatic.style.visibility = 'visible';
                console.log('Announcement Box: Static header revealed');
            }, headerText.length * 100 + 1000);
        }

        function adjustAnnouncementBoxForScreenSize() {
            if (announcementBox) {
                if (window.innerWidth < 900) {
                    announcementBox.style.minWidth = '200px';
                    announcementBox.style.fontSize = '1rem';
                    announcementBox.style.top = '30px';
                    announcementBox.style.right = '40px';
                    announcementBox.style.padding = '12px 20px 10px 16px';
                } else {
                    announcementBox.style.minWidth = '280px';
                    announcementBox.style.fontSize = '1.2rem';
                    announcementBox.style.top = '30px';
                    announcementBox.style.right = '40px';
                    announcementBox.style.padding = '18px 28px 14px 24px';
                }
            }
        }

        window.addEventListener('resize', adjustAnnouncementBoxForScreenSize);
        adjustAnnouncementBoxForScreenSize();

        function removeActiveClasses() {
            navLinks.forEach(link => link.classList.remove('active'));
        }

        function setActiveLink(sectionId) {
            const activeLink = document.querySelector(\`.navbar-links a[href="#\${sectionId}"], .navbar-blog-btn[href="#\${sectionId}"]\`);
            if (activeLink) {
                removeActiveClasses();
                activeLink.classList.add('active');
                console.log(\`Highlighted section: \${sectionId}\`);
            } else {
                console.warn(\`No link found for section ID: \${sectionId}\`);
            }
        }

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',
            threshold: [0.1, 0.3, 0.5]
        };

        const observer = new IntersectionObserver((entries) => {
            if (scrollLocked && isWheelActive) {
                console.log('Scroll locked, skipping navbar update');
                return;
            }
            let highestRatio = 0;
            let activeSectionId = null;
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
                    highestRatio = entry.intersectionRatio;
                    activeSectionId = entry.target.id;
                    console.log(\`Section in view: \${activeSectionId}, ratio: \${entry.intersectionRatio}\`);
                }
            });
            if (activeSectionId) {
                setActiveLink(activeSectionId);
            }
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        window.addEventListener('scroll', () => {
            if (scrollLocked && isWheelActive) return;
            let closestSection = null;
            let minDistance = Infinity;
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const distance = Math.abs(rect.top);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestSection = section.id;
                }
            });
            if (closestSection) {
                setActiveLink(closestSection);
            }
        });

        // Initialize line canvas
        const lineCanvas = document.querySelector('#line-canvas');
        const ctx = lineCanvas.getContext('2d');
        lineCanvas.width = window.innerWidth;
        lineCanvas.height = window.innerHeight;

        // Inject CSS for parallax effects
        const style = document.createElement('style');
        style.textContent = \`
        .luxury-particle {
            position: fixed;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #ffe066 0%, rgba(255, 224, 102, 0.5) 70%, transparent 100%);
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 10px rgba(255, 224, 102, 0.8), 0 0 20px rgba(255, 224, 102, 0.5);
            z-index: 1000;
        }
        .ripple-effect {
            position: fixed;
            border-radius: 50%;
            background: rgba(255, 224, 102, 0.3);
            pointer-events: none;
            transform: translate(-50%, -50%) scale(0);
            z-index: 999;
        }
        .ripple-effect-secondary {
            position: fixed;
            border-radius: 50%;
            background: rgba(37, 99, 235, 0.3);
            pointer-events: none;
            transform: translate(-50%, -50%) scale(0);
            z-index: 999;
        }
        .shake-home {
            animation: shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
        @keyframes shake {
            10%, 90% { transform: translate3d(-2px, 0, 0) rotate(1deg) scale(1.02); }
            20%, 80% { transform: translate3d(2px, 0, 0) rotate(-1deg) scale(1.01); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0) rotate(2deg) scale(1.03); }
            40%, 60% { transform: translate3d(4px, 0, 0) rotate(-2deg) scale(1.02); }
        }
        .parallax {
            transition: transform 0.1s ease-out;
        }
    \`;
        document.head.appendChild(style);

        // Parallax effect on mousemove with lines and tilt
        const elements = document.querySelectorAll('.parallax');
        document.addEventListener('mousemove', throttle((event) => {
            const homeSection = document.querySelector('#home');
            const homeRect = homeSection.getBoundingClientRect();
            if (
                event.clientX < homeRect.left ||
                event.clientX > homeRect.right ||
                event.clientY < homeRect.top ||
                event.clientY > homeRect.bottom
            ) {
                ctx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
                return;
            }

            const rect = document.body.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = (event.clientY - rect.top) / rect.height;
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Parallax and tilt for elements
            elements.forEach(el => {
                if (!el.classList.contains('bottom-text') && !el.classList.contains('luxury-particle') && !el.classList.contains('ripple-effect')) {
                    const speed = parseFloat(el.dataset.speed) || 0.1;
                    const moveX = (x - 0.5) * 50 * speed;
                    const moveY = (y - 0.5) * 50 * speed;
                    const rotateX = (y - 0.5) * 10 * speed;
                    const rotateY = (x - 0.5) * -10 * speed;
                    const baseTransform = el.classList.contains('center-text') || el.classList.contains('mobile-center-text') ? 'translate(-50%, -50%)' : '';
                    gsap.to(el, {
                        x: moveX,
                        y: moveY,
                        rotateX: rotateX,
                        rotateY: rotateY,
                        transformPerspective: 500,
                        duration: 0.2,
                        ease: 'power2.out'
                    });
                }
            });

            // Draw connecting lines
            ctx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
            ctx.strokeStyle = 'rgba(255, 224, 102, 0.5)';
            ctx.lineWidth = 1;
            const corners = [
                { x: 0, y: 0 },
                { x: window.innerWidth, y: 0 },
                { x: 0, y: window.innerHeight },
                { x: window.innerWidth, y: window.innerHeight }
            ];
            corners.forEach(corner => {
                const distance = Math.hypot(mouseX - corner.x, mouseY - corner.y);
                if (distance < 300) {
                    ctx.beginPath();
                    ctx.moveTo(mouseX, mouseY);
                    ctx.lineTo(corner.x, corner.y);
                    ctx.stroke();
                }
            });
            const floatingElements = document.querySelectorAll('.floating-element, .center-text, .mobile-center-text');
            floatingElements.forEach(el => {
                const elRect = el.getBoundingClientRect();
                const elX = elRect.left + elRect.width / 2;
                const elY = elRect.top + elRect.height / 2;
                const distance = Math.hypot(mouseX - elX, mouseY - elY);
                if (distance < 300) {
                    ctx.beginPath();
                    ctx.moveTo(mouseX, mouseY);
                    ctx.lineTo(elX, elY);
                    ctx.stroke();
                }
            });
        }, 16));

        // GSAP optimization
        gsap.ticker.lagSmoothing(500, 16);
        gsap.ticker.fps(-1);

        // Throttle function
        function throttle(func, limit) {
            let lastCall = 0;
            return function (...args) {
                const now = Date.now();
                if (now - lastCall >= limit) {
                    lastCall = now;
                    return func.apply(this, args);
                }
            };
        }

        // Dramatic click effect with homepage shake and dual ripples
        document.addEventListener('click', throttle((event) => {
            if (event.target.closest('header.modern-navbar')) return;
            const homeSection = document.querySelector('#home');
            const homeRect = homeSection.getBoundingClientRect();
            if (
                event.clientX >= homeRect.left &&
                event.clientX <= homeRect.right &&
                event.clientY >= homeRect.top &&
                event.clientY <= homeRect.bottom
            ) {
                // Shake the homepage
                homeSection.classList.add('shake-home');
                setTimeout(() => homeSection.classList.remove('shake-home'), 800);

                // Create primary ripple effect
                const ripple = document.createElement('div');
                ripple.className = 'ripple-effect';
                ripple.style.left = \`\${event.clientX}px\`;
                ripple.style.top = \`\${event.clientY}px\`;
                document.body.appendChild(ripple);
                gsap.to(ripple, {
                    width: 400,
                    height: 400,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                    onComplete: () => ripple.remove()
                });

                // Create secondary ripple effect
                const rippleSecondary = document.createElement('div');
                rippleSecondary.className = 'ripple-effect-secondary';
                rippleSecondary.style.left = \`\${event.clientX}px\`;
                rippleSecondary.style.top = \`\${event.clientY}px\`;
                document.body.appendChild(rippleSecondary);
                gsap.to(rippleSecondary, {
                    width: 500,
                    height: 500,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power2.out',
                    onComplete: () => rippleSecondary.remove()
                });

                // Create particle explosion with document fragment for efficiency
                const particleCount = 50;
                const fragment = document.createDocumentFragment();
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'luxury-particle';
                    particle.style.left = \`\${event.clientX}px\`;
                    particle.style.top = \`\${event.clientY}px\`;
                    fragment.appendChild(particle);
                    const angle = (i / particleCount) * Math.PI * 2;
                    const distance = 100 + Math.random() * 150;
                    const size = 5 + Math.random() * 10;
                    particle.style.width = \`\${size}px\`;
                    particle.style.height = \`\${size}px\`;
                    gsap.to(particle, {
                        x: Math.cos(angle) * distance,
                        y: Math.sin(angle) * distance,
                        autoAlpha: 0,
                        scale: 0.2 + Math.random() * 0.8,
                        rotation: Math.random() * 360,
                        duration: 1 + Math.random() * 1,
                        ease: 'power3.out',
                        onComplete: () => particle.remove()
                    });
                }
                document.body.appendChild(fragment);
            }
        }, 1000));
    });

    function checkScreenSizeAndRedirect() {
        if (window.innerWidth < 600) {
            (window.__legacyTryNavigate && window.__legacyTryNavigate("responsive part mobile.html")) || (window.location.href = "responsive part mobile.html");
        }
    }

    window.addEventListener('load', function() {
        const loader = document.getElementById('website-loader');
        if (loader) {
            loader.style.display = 'block';
        }
        setTimeout(checkScreenSizeAndRedirect, 2000);
    });

    let isLargeScreen = window.innerWidth >= 600;
    window.addEventListener('resize', function() {
        if (isLargeScreen && window.innerWidth < 600) {
            const loader = document.getElementById('website-loader');
            if (loader) {
                loader.style.display = 'block';
            }
            setTimeout(() => {
                (window.__legacyTryNavigate && window.__legacyTryNavigate("responsive part mobile.html")) || (window.location.href = "responsive part mobile.html");
            }, 1000);
        }
        isLargeScreen = window.innerWidth >= 600;
    });

    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#three-canvas'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;
    const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xffe066, wireframe: true });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    function animate3D() {
        requestAnimationFrame(animate3D);
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate3D();

    function initializeParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffe066" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffe066",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: false },
                        resize: true
                    },
                    modes: { grab: { distance: 400, line_linked: { opacity: 1 } } }
                },
                retina_detect: true
            });
        }
    }

    document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            document.querySelector('#home').style.background = '#f0f0f0';
            document.querySelectorAll('.center-text h1, .center-text h2, .center-text p, .mobile-center-text h1, .mobile-center-text h2, .mobile-center-text p, .bottom-text h1, .bottom-text h2, .bottom-text p').forEach(el => {
                el.style.color = '#2563eb';
                el.style.textShadow = 'none';
            });
        } else {
            document.querySelector('#home').style.background = 'transparent';
            document.querySelectorAll('.center-text h1, .bottom-text h1').forEach(el => {
                el.style.color = '#ffe066';
            });
            document.querySelectorAll('.center-text h2, .bottom-text h2').forEach(el => {
                el.style.color = '#2563eb';
            });
            document.querySelectorAll('.center-text p, .bottom-text p').forEach(el => {
                el.style.color = '#fff';
            });
            document.querySelectorAll('.mobile-center-text h1').forEach(el => {
                el.style.color = '#ffe066';
            });
            document.querySelectorAll('.mobile-center-text h2').forEach(el => {
                el.style.color = '#2563eb';
            });
            document.querySelectorAll('.mobile-center-text p').forEach(el => {
                el.style.color = '#fff';
            });
        }
    });

    const bot = document.getElementById('bot');
    const chatModal = document.getElementById('chat-modal');
    const closeBtn = document.getElementById('close-btn');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    let isDraggingBot = false;
    let currentX, currentY, initialX, initialY;

    bot.addEventListener('mousedown', startDraggingBot);
    document.addEventListener('mousemove', dragBot);
    document.addEventListener('mouseup', stopDraggingBot);

    function startDraggingBot(e) {
        initialX = e.clientX - currentX;
        initialY = e.clientY - currentY;
        isDraggingBot = true;
        bot.style.cursor = 'grabbing';
    }

    function dragBot(e) {
        if (isDraggingBot) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            bot.style.left = currentX + 'px';
            bot.style.top = currentY + 'px';
            bot.style.bottom = 'auto';
            bot.style.right = 'auto';
        }
    }

    function stopDraggingBot() {
        isDraggingBot = false;
        bot.style.cursor = 'grab';
    }

    bot.addEventListener('click', () => {
        chatModal.style.display = chatModal.style.display === 'flex' ? 'none' : 'flex';
        if (chatModal.style.display === 'flex') {
            chatModal.style.top = '50%';
            chatModal.style.left = '50%';
            chatModal.style.transform = 'translate(-50%, -50%)';
            userInput.focus();
        }
    });

    closeBtn.addEventListener('click', () => {
        chatModal.style.display = 'none';
    });

    function addMessage(content, type) {
        const message = document.createElement('div');
        message.className = \`message \${type}\`;
        message.textContent = content;
        chatBody.appendChild(message);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            userInput.value = '';
            setTimeout(() => {
                addMessage('Thank you for your query! Taru AI is processing...', 'bot-message');
            }, 1000);
        }
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        lineCanvas.width = window.innerWidth;
        lineCanvas.height = window.innerHeight;
    });

    if (window.innerWidth > 768) {
        const techWheelEl = document.querySelector('#tech-wheel');
        if (techWheelEl) {
            techWheelEl.style.scrollSnapType = 'y mandatory';
        }
    } else {
        const techWheelEl = document.querySelector('#tech-wheel');
        if (techWheelEl) {
            techWheelEl.style.scrollSnapType = 'none';
        }
    }

    initializeParticles();
    currentX = bot.offsetLeft;
    currentY = bot.offsetTop;
    console.log('Page initialization complete');
    // /* global THREE, gsap, AOS, particlesJS */
    // document.addEventListener('DOMContentLoaded', function() {
    //     // Initialize slideshows
    //     initSlideshow('left-slideshow');
    //     initSlideshow('right-slideshow');
    //
    //     function initSlideshow(slideshowId) {
    //         const slideshow = document.getElementById(slideshowId);
    //         const slides = slideshow.querySelectorAll('.slide');
    //         let currentSlide = 0;
    //         let cycleCount = 0;
    //         const maxCycles = 10; // Show 10 times then restart
    //
    //         // Function to show next slide
    //         function nextSlide() {
    //             // Hide current slide
    //             slides[currentSlide].classList.remove('active');
    //
    //             // Move to next slide
    //             currentSlide = (currentSlide + 1) % slides.length;
    //
    //             // If we've completed a full cycle
    //             if (currentSlide === 0) {
    //                 cycleCount++;
    //
    //                 // If we've completed 10 cycles, reset counter
    //                 if (cycleCount >= maxCycles) {
    //                     cycleCount = 0;
    //                 }
    //             }
    //
    //             // Show next slide
    //             slides[currentSlide].classList.add('active');
    //         }
    //
    //         // Start the slideshow (change slide every 3 seconds)
    //         setInterval(nextSlide, 3000);
    //     }
    //
    //     // Navbar Variables
    //     const navLinks = document.querySelectorAll('.navbar-links a, .navbar-blog-btn');
    //     const sections = document.querySelectorAll('section[id], footer[id]');
    //     // Tech Wheel Variables
    //     const techWheelSection = document.getElementById('tech-wheel');
    //     const techWheel = document.getElementById('techWheel');
    //     const webDevText = document.getElementById('webDevText');
    //     const progressFill = document.querySelector('.progress-fill');
    //     const progressText = document.getElementById('progress-text');
    //     const scrollHint = document.querySelector('.scroll-hint');
    //     const body = document.body;
    //     const techItems = [
    //         { id: 'competitive', name: 'PHOTOGRAPHER', desc: 'Capture Vibrant Moments during events and acttivites.Mainly Focus On The Caputure Moments During Events or Activities.', url: 'taru wing photographer.html' },
    //         { id: 'design', name: 'Graphics Designer', desc: 'The GRAPHICS Design Members Works On to UI/UX and graphic design using Figma.', url: 'taru wing GD.html' },
    //         { id: 'web', name: 'Web Development', desc: 'The Web Development WOrk On website And Teach In Campus about Web Development.', url: 'taru wing web.html' },
    //         { id: 'ai', name: 'VIDEO EDITOR', desc: 'The Video Editing Wing teaches the art of video storytelling using tools like Premiere Pro and CapCut, where members work on editing reels, promotional videos, and event highlights to craft engaging and dynamic visual stories.', url: 'taru wing video editor.html' },
    //         { id: 'cyber', name: 'PR ', desc: 'WIll Be Added Soon', url: 'taru wing photographer.html' },
    //         { id: 'app', name: 'App Development', desc: 'The App Development Wing focuses on building Android and iOS apps.', url: 'taru wing web.html' },
    //         { id: 'blockchain', name: 'CONTENT WRITER', desc: 'TWIll Be Added Soon', url: 'taru wing content .html' },
    //         { id: 'foss', name: 'Web DEVELOPER ', desc: 'WIll Be Added Soon', url: 'taru wing web.html' }
    //     ];
    //     let currentRotation = 0;
    //     let targetRotation = 0;
    //     let isWheelActive = false;
    //     let scrollLocked = false;
    //     let rotationCompleted = false;
    //     let isDragging = false;
    //     let lastX = 0;
    //     let rotationSpeed = 0;
    //     let totalRotation = 0;
    //     const techItemElements = [];
    //     const easing = 0.05;
    //     const maxSpeed = 1.5;
    //     let currentActiveItem = null;
    //     let isNavigating = false;
    //
    //     // Check if device is mobile
    //     function isMobile() {
    //         return window.innerWidth <= 768;
    //     }
    //
    //     // Update active link based on scroll position for mobile
    //     function updateActiveLink() {
    //         if (isMobile()) {
    //             const hash = window.location.hash;
    //             if (!hash || hash === '#home') {
    //                 navLinks.forEach(link => link.classList.remove('active'));
    //                 document.querySelector('.navbar-links a[href="#home"]').classList.add('active');
    //             }
    //         }
    //     }
    //
    //     function createTechItems() {
    //         if (isMobile()) {
    //             techWheel.innerHTML = ''; // Clear wheel content on mobile
    //             return;
    //         }
    //         techItems.forEach((item, index) => {
    //             const techItem = document.createElement('div');
    //             techItem.className = 'tech-item';
    //             techItem.dataset.id = item.id;
    //             const dot = document.createElement('div');
    //             dot.className = 'dot';
    //             const span = document.createElement('span');
    //             span.textContent = item.name;
    //             techItem.appendChild(dot);
    //             techItem.appendChild(span);
    //             techWheel.appendChild(techItem);
    //             const angle = index * (360 / techItems.length);
    //             techItemElements.push({ element: techItem, angle, data: item });
    //         });
    //     }
    //
    //     function openPage(url) {
    //         try {
    //             window.open('./' + url, '_blank', 'noopener,noreferrer');
    //         } catch (err) {
    //             console.error('Failed to open page:', err);
    //             (window.__legacyTryNavigate && window.__legacyTryNavigate('./')) || (window.location.href = './' )+ url;
    //         }
    //     }
    //
    //     function updateContent(item) {
    //         if (isMobile()) return; // Skip content update on mobile
    //         if (currentActiveItem && currentActiveItem.id === item.id) return;
    //         currentActiveItem = item;
    //         webDevText.innerHTML = '';
    //         const h3 = document.createElement('h3');
    //         h3.textContent = \`\${item.name} Wing\`;
    //         const p = document.createElement('p');
    //         p.textContent = item.desc;
    //         const readMoreLink = document.createElement('a');
    //         readMoreLink.className = 'read-more';
    //         readMoreLink.href = './' + item.url;
    //         readMoreLink.setAttribute('target', '_blank');
    //         readMoreLink.textContent = 'Read More →';
    //         readMoreLink.onclick = (e) => {
    //             e.preventDefault();
    //             openPage(item.url);
    //         };
    //         webDevText.appendChild(h3);
    //         webDevText.appendChild(p);
    //         webDevText.appendChild(readMoreLink);
    //     }
    //
    //     function animate() {
    //         if (isMobile()) return; // Skip animation on mobile
    //         const delta = targetRotation - currentRotation;
    //         const rotationChange = delta * easing;
    //         if (!isDragging) {
    //             rotationSpeed *= 0.92;
    //             if (Math.abs(rotationSpeed) < 0.01) rotationSpeed = 0;
    //             currentRotation += rotationSpeed;
    //             totalRotation += Math.abs(rotationSpeed);
    //         }
    //         currentRotation += rotationChange;
    //         totalRotation += Math.abs(rotationChange);
    //         updateWheel();
    //         requestAnimationFrame(animate);
    //     }
    //
    //     function updateWheel() {
    //         if (isMobile()) return; // Skip wheel update on mobile
    //         techWheel.style.transform = \`translate(-50%, -50%) rotate(\${currentRotation}deg)\`;
    //         techItemElements.forEach(({ element, angle, data }) => {
    //             const currentAngle = angle + currentRotation;
    //             const translateX = window.innerWidth < 900 ? 250 : 400;
    //             element.style.transform = \`rotate(\${currentAngle}deg) translateX(\${translateX}px) rotate(\${-currentAngle}deg)\`;
    //             const normalized = (currentAngle + 360) % 360;
    //             const diff = Math.min(
    //                 Math.abs((normalized - 230 + 360) % 360),
    //                 Math.abs((230 - normalized + 360) % 360)
    //             );
    //             if (diff < 30) {
    //                 element.classList.add('active');
    //                 if (diff < 15) {
    //                     updateContent(data);
    //                 }
    //             } else {
    //                 element.classList.remove('active');
    //             }
    //         });
    //         updateProgress();
    //     }
    //
    //     function updateProgress() {
    //         if (isMobile()) return; // Skip progress update on mobile
    //         const progress = Math.min((totalRotation / 230) * 100, 100);
    //         progressFill.style.width = \`\${progress}%\`;
    //         progressText.textContent = \`\${Math.round(progress)}%\`;
    //         if (progress >= 100 && !rotationCompleted) {
    //             rotationCompleted = true;
    //             scrollLocked = false;
    //             body.classList.remove('scroll-locked');
    //             if (scrollHint) scrollHint.classList.add('hidden');
    //         }
    //     }
    //
    //     function resetWheelState() {
    //         if (isMobile()) return; // Skip wheel state reset on mobile
    //         rotationCompleted = false;
    //         scrollLocked = true;
    //         isWheelActive = true;
    //         body.classList.add('scroll-locked');
    //         if (scrollHint) scrollHint.classList.remove('hidden');
    //         currentRotation = 0;
    //         targetRotation = 0;
    //         totalRotation = 0;
    //         updateWheel();
    //     }
    //
    //     function setupEventListeners() {
    //         if (isMobile()) return; // Skip event listeners on mobile
    //         techWheelSection.addEventListener('mousedown', startDrag);
    //         techWheelSection.addEventListener('touchstart', startDrag, { passive: false });
    //         window.addEventListener('wheel', handleWheelEvent, { passive: false });
    //         window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
    //         window.addEventListener('scroll', preventDefaultScroll, { passive: false });
    //         window.addEventListener('resize', handleResize);
    //     }
    //
    //     function startDrag(e) {
    //         if (isMobile() || !isWheelActive || rotationCompleted) return;
    //         if (e.target.closest('.tech-item') || e.target.closest('.read-more')) {
    //             return;
    //         }
    //         isDragging = true;
    //         lastX = e.clientX || e.touches[0].clientX;
    //         e.preventDefault();
    //         document.addEventListener('mousemove', drag);
    //         document.addEventListener('touchmove', drag, { passive: false });
    //         document.addEventListener('mouseup', endDrag);
    //         document.addEventListener('touchend', endDrag);
    //     }
    //
    //     function drag(e) {
    //         if (!isDragging) return;
    //         const currentX = e.clientX || e.touches[0].clientX;
    //         const deltaX = currentX - lastX;
    //         lastX = currentX;
    //         rotationSpeed = deltaX * 0.15;
    //         rotationSpeed = Math.min(Math.max(rotationSpeed, -maxSpeed), maxSpeed);
    //         targetRotation += rotationSpeed;
    //     }
    //
    //     function endDrag() {
    //         isDragging = false;
    //         document.removeEventListener('mousemove', drag);
    //         document.removeEventListener('touchmove', drag);
    //         document.removeEventListener('mouseup', endDrag);
    //         document.removeEventListener('touchend', endDrag);
    //     }
    //
    //     function handleWheelEvent(e) {
    //         if (isMobile() || !isWheelActive || rotationCompleted) return;
    //         if (e.target.closest('.tech-item') || e.target.closest('.read-more')) {
    //             return;
    //         }
    //         if (scrollLocked) {
    //             e.preventDefault();
    //             const delta = e.deltaY > 0 ? 0.3 : -0.3;
    //             targetRotation += delta;
    //             return false;
    //         }
    //     }
    //
    //     function preventDefaultScroll(e) {
    //         if (isMobile()) return; // Allow normal scrolling on mobile
    //         if (scrollLocked && isWheelActive && !e.target.closest('.tech-item') && !e.target.closest('.read-more')) {
    //             e.preventDefault();
    //             return false;
    //         }
    //     }
    //
    //     function handleResize() {
    //         adjustWheelForScreenSize();
    //         updateActiveLink();
    //         if (isMobile()) {
    //             // Disable wheel functionality on mobile
    //             isWheelActive = false;
    //             scrollLocked = false;
    //             body.classList.remove('scroll-locked');
    //             if (scrollHint) scrollHint.classList.add('hidden');
    //             techWheel.innerHTML = ''; // Clear wheel content
    //             document.querySelector('#tech-wheel').style.scrollSnapType = 'none';
    //         } else {
    //             // Reinitialize wheel on desktop if needed
    //             if (!techWheel.innerHTML) {
    //                 createTechItems();
    //                 if (techItems.length > 0) {
    //                     updateContent(techItems[0]);
    //                 }
    //             }
    //             document.querySelector('#tech-wheel').style.scrollSnapType = 'y mandatory';
    //         }
    //     }
    //
    //     function initWheel() {
    //         if (isMobile()) return; // Skip initialization on mobile
    //         createTechItems();
    //         resetWheelState();
    //         animate();
    //         setupEventListeners();
    //         if (techItems.length > 0) {
    //             updateContent(techItems[0]);
    //         }
    //     }
    //
    //     // IntersectionObserver for tech wheel
    //     const sectionObserver = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting && (!isNavigating || window.location.hash === '#tech-wheel')) {
    //                 if (!isMobile()) {
    //                     initWheel();
    //                     if (scrollLocked) {
    //                         techWheelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //                     }
    //                 }
    //             } else {
    //                 isWheelActive = false;
    //                 scrollLocked = false;
    //                 body.classList.remove('scroll-locked');
    //                 if (scrollHint) scrollHint.classList.add('hidden');
    //             }
    //         });
    //     }, { threshold: 0.5 });
    //     sectionObserver.observe(techWheelSection);
    //
    //     // Navbar navigation handling
    //     navLinks.forEach(link => {
    //         link.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             const targetId = link.getAttribute('href').substring(1);
    //             if (targetId === 'tech-wheel') {
    //                 isNavigating = false;
    //             } else {
    //                 isNavigating = true;
    //             }
    //             const targetSection = document.getElementById(targetId);
    //             if (targetSection) {
    //                 // Reset scroll lock and wheel states when navigating
    //                 scrollLocked = false;
    //                 isWheelActive = false;
    //                 rotationCompleted = true;
    //                 body.classList.remove('scroll-locked');
    //                 if (scrollHint) scrollHint.classList.add('hidden');
    //                 targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //                 setActiveLink(targetId);
    //                 if (targetId !== 'tech-wheel') {
    //                     setTimeout(() => {
    //                         isNavigating = false;
    //                     }, 1000);
    //                 }
    //             }
    //         });
    //     });
    //
    //     // Handle URL hash for redirects from other pages
    //     function handleHashNavigation() {
    //         const hash = window.location.hash;
    //         if (hash) {
    //             const targetId = hash.substring(1);
    //             const targetSection = document.getElementById(targetId);
    //             if (targetSection) {
    //                 targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //                 setActiveLink(targetId);
    //                 if (targetId === 'team-organizers') console.log('Navigated to Team Organizers via hash');
    //                 if (targetId === 'tech-wheel' && !isMobile()) {
    //                     initWheel();
    //                 } else {
    //                     isNavigating = true;
    //                     setTimeout(() => {
    //                         isNavigating = false;
    //                     }, 1000);
    //                 }
    //             }
    //         }
    //     }
    //
    //     // Call handleHashNavigation on page load
    //     handleHashNavigation();
    //
    //     // Update active link on resize and hash change
    //     window.addEventListener('resize', updateActiveLink);
    //     window.addEventListener('hashchange', updateActiveLink);
    //     updateActiveLink();
    //
    //     // Responsive adjustments for tech wheel
    //     function adjustWheelForScreenSize() {
    //         if (isMobile()) return; // Skip adjustments on mobile
    //         const wheelContainer = document.getElementById('techWheelContainer');
    //         if (wheelContainer) {
    //             if (window.innerWidth < 900) {
    //                 wheelContainer.style.width = '600px';
    //                 wheelContainer.style.height = '600px';
    //                 techWheel.style.width = '600px';
    //                 techWheel.style.height = '600px';
    //             } else {
    //                 wheelContainer.style.width = '1200px';
    //                 wheelContainer.style.height = '1200px';
    //                 techWheel.style.width = '1200px';
    //                 techWheel.style.height = '1200px';
    //             }
    //         }
    //     }
    //
    //     window.addEventListener('resize', adjustWheelForScreenSize);
    //     if (!isMobile() && techWheel) {
    //         adjustWheelForScreenSize();
    //         animate();
    //     }
    //
    //     // --- Announcement Box Setup ---
    //     const announcementBox = document.getElementById('announcementBox');
    //     const headerEl = document.getElementById('headerText');
    //     const headerStatic = document.querySelector('.simple-announcement1 h1');
    //     const textEls = [
    //         document.getElementById('text1'),
    //         document.getElementById('text2'),
    //         document.getElementById('text3')
    //     ];
    //     if (!announcementBox || !headerEl || !headerStatic || textEls.some(el => !el)) {
    //         console.error('Announcement Box: Missing DOM elements', {
    //             announcementBox: !!announcementBox,
    //             headerEl: !!headerEl,
    //             headerStatic: !!headerStatic,
    //             textEls: textEls.map(el => !!el)
    //         });
    //     } else {
    //         console.log('Announcement Box: All DOM elements found');
    //     }
    //
    //     const headerText = "LEADERSHIP TEAM";
    //     const texts = {
    //         text1: [
    //             " PRESIDENT: PRAKASH KUMAR",
    //             " VICE PRESIDENT: MUKUL ANAND",
    //             "JOINT SECRETARY: Akshat Thakur",
    //             "JOINT SECRETARY: Kriti Divyansha",
    //             "TREASURER: Pushkar Aditya",
    //             "TREASURER: Santripti"
    //         ],
    //         text2: [
    //             " TECH HEAD: Aashish Kishore",
    //             "ADMINSTRATIVE HEAD: Ritik Kumar",
    //             "EVENT & MANAGEMENT HEAD: Hrithik Bhadani",
    //             "MEDIA HEAD: Manyata Manas",
    //             "MEDIA HEAD: Sneh Raj",
    //             "CONTENT HEAD: Sarthak Kumar"
    //         ],
    //         text3: [
    //             "EVENT & MANAGEMENT HEAD: Namya Singh",
    //             "PR HEAD: Saikat Bhattacharya",
    //             "PR HEAD: Nakshatra Sarkar",
    //             "PROGRAM HEAD: Piyali Nath",
    //             "MEMBERSHIP HEAD: Pawan Gope",
    //             "MEMBERSHIP HEAD: Abhijit Choudhury"
    //         ]
    //     };
    //
    //     function typeMonsterText(el, texts, speed = 100, deleteSpeed = 50) {
    //         if (!el) return;
    //         let i = 0, charIndex = 0, isDeleting = false, current = "";
    //         function type() {
    //             const full = texts[i];
    //             if (isDeleting) {
    //                 current = full.substring(0, --charIndex);
    //             } else {
    //                 current = full.substring(0, ++charIndex);
    //             }
    //             el.textContent = current;
    //             announcementBox.classList.add('shake');
    //             setTimeout(() => announcementBox.classList.remove('shake'), 100);
    //             if (!isDeleting && charIndex === full.length) {
    //                 isDeleting = true;
    //                 setTimeout(type, 1200);
    //             } else if (isDeleting && charIndex === 0) {
    //                 isDeleting = false;
    //                 i = (i + 1) % texts.length;
    //                 setTimeout(type, 600);
    //             } else {
    //                 setTimeout(type, isDeleting ? deleteSpeed : speed);
    //             }
    //         }
    //         console.log(\`Announcement Box: Starting typewriter for element \${el.id}\`);
    //         type();
    //     }
    //
    //     if (headerEl) typeMonsterText(headerEl, [headerText], 100, 50);
    //     if (textEls[0]) typeMonsterText(textEls[0], texts.text1, 100, 50);
    //     if (textEls[1]) typeMonsterText(textEls[1], texts.text2, 100, 50);
    //     if (textEls[2]) typeMonsterText(textEls[2], texts.text3, 100, 50);
    //     if (headerStatic) {
    //         setTimeout(() => {
    //             headerStatic.style.visibility = 'visible';
    //             console.log('Announcement Box: Static header revealed');
    //         }, headerText.length * 100 + 1000);
    //     }
    //
    //     function adjustAnnouncementBoxForScreenSize() {
    //         if (announcementBox) {
    //             if (window.innerWidth < 900) {
    //                 announcementBox.style.minWidth = '200px';
    //                 announcementBox.style.fontSize = '1rem';
    //                 announcementBox.style.top = '30px';
    //                 announcementBox.style.right = '40px';
    //                 announcementBox.style.padding = '12px 20px 10px 16px';
    //             } else {
    //                 announcementBox.style.minWidth = '280px';
    //                 announcementBox.style.fontSize = '1.2rem';
    //                 announcementBox.style.top = '30px';
    //                 announcementBox.style.right = '40px';
    //                 announcementBox.style.padding = '18px 28px 14px 24px';
    //             }
    //         }
    //     }
    //
    //     window.addEventListener('resize', adjustAnnouncementBoxForScreenSize);
    //     adjustAnnouncementBoxForScreenSize();
    //
    //     // --- Navbar Highlighting Logic ---
    //     function removeActiveClasses() {
    //         navLinks.forEach(link => link.classList.remove('active'));
    //     }
    //
    //     function setActiveLink(sectionId) {
    //         const activeLink = document.querySelector(\`.navbar-links a[href="#\${sectionId}"], .navbar-blog-btn[href="#\${sectionId}"]\`);
    //         if (activeLink) {
    //             removeActiveClasses();
    //             activeLink.classList.add('active');
    //             console.log(\`Highlighted section: \${sectionId}\`);
    //         } else {
    //             console.warn(\`No link found for section ID: \${sectionId}\`);
    //         }
    //     }
    //
    //     const observerOptions = {
    //         root: null,
    //         rootMargin: '-20% 0px -20% 0px', // Adjusted for better detection
    //         threshold: [0.1, 0.3, 0.5] // Multiple thresholds for smoother transitions
    //     };
    //
    //     const observer = new IntersectionObserver((entries) => {
    //         // Skip if scroll is locked and tech wheel is active
    //         if (scrollLocked && isWheelActive && !isMobile()) {
    //             console.log('Scroll locked, skipping navbar update');
    //             return;
    //         }
    //         let highestRatio = 0;
    //         let activeSectionId = null;
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
    //                 highestRatio = entry.intersectionRatio;
    //                 activeSectionId = entry.target.id;
    //                 console.log(\`Section in view: \${activeSectionId}, ratio: \${entry.intersectionRatio}\`);
    //             }
    //         });
    //         if (activeSectionId) {
    //             setActiveLink(activeSectionId);
    //         }
    //     }, observerOptions);
    //
    //     sections.forEach(section => {
    //         observer.observe(section);
    //     });
    //
    //     navLinks.forEach(link => {
    //         link.addEventListener('click', function (e) {
    //             e.preventDefault();
    //             removeActiveClasses();
    //             this.classList.add('active');
    //             const targetId = this.getAttribute('href').substring(1);
    //             const targetElement = document.getElementById(targetId);
    //             if (targetElement) {
    //                 // Reset scroll lock and wheel states when navigating
    //                 scrollLocked = false;
    //                 isWheelActive = false;
    //                 rotationCompleted = true;
    //                 body.classList.remove('scroll-locked');
    //                 if (scrollHint) scrollHint.classList.add('hidden');
    //                 targetElement.scrollIntoView({ behavior: 'smooth' });
    //                 console.log(\`Clicked link: \${targetId}\`);
    //             } else {
    //                 console.warn(\`Target section not found: \${targetId}\`);
    //             }
    //         });
    //     });
    //
    //     // Fallback: Check scroll position on manual scroll
    //     window.addEventListener('scroll', () => {
    //         if (scrollLocked && isWheelActive && !isMobile()) return;
    //         let closestSection = null;
    //         let minDistance = Infinity;
    //         sections.forEach(section => {
    //             const rect = section.getBoundingClientRect();
    //             const distance = Math.abs(rect.top);
    //             if (distance < minDistance) {
    //                 minDistance = distance;
    //                 closestSection = section.id;
    //             }
    //         });
    //         if (closestSection) {
    //             setActiveLink(closestSection);
    //         }
    //     });
    // });
    //
    // // Website Loader Logic
    // function checkScreenSizeAndRedirect() {
    //     const isLargeScreen = window.innerWidth >= 1024;
    //     if (isLargeScreen) {
    //         // Redirect to laptop version
    //         (window.__legacyTryNavigate && window.__legacyTryNavigate("launching website depression.html")) || (window.location.href = "launching website depression.html");
    //     } else {
    //         // Redirect to mobile version
    //         (window.__legacyTryNavigate && window.__legacyTryNavigate("responsive premium 3.html")) || (window.location.href = "responsive premium 3.html");
    //     }
    // }
    //
    // // Run on page load
    // window.addEventListener('load', function() {
    //     // Show the website loader
    //     document.getElementById('website-loader').style.display = 'block';
    //     // Check screen size and redirect after a brief delay
    //     setTimeout(checkScreenSizeAndRedirect, 2000);
    // });
    //
    // // Initialize AOS
    // AOS.init({
    //     duration: 1200,
    //     easing: 'ease-in-out',
    //     once: true
    // });
    //
    // // Three.js Setup
    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#three-canvas'), alpha: true });
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // camera.position.z = 5;
    // const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
    // const material = new THREE.MeshStandardMaterial({ color: 0xffe066, wireframe: true });
    // const torusKnot = new THREE.Mesh(geometry, material);
    // scene.add(torusKnot);
    // const light = new THREE.PointLight(0xffffff, 1, 100);
    // light.position.set(5, 5, 5);
    // scene.add(light);
    //
    // function animate3D() {
    //     requestAnimationFrame(animate3D);
    //     torusKnot.rotation.x += 0.01;
    //     torusKnot.rotation.y += 0.01;
    //     renderer.render(scene, camera);
    // }
    // animate3D();
    //
    // // Line Canvas for Connections
    // const lineCanvas = document.querySelector('#line-canvas');
    // const ctx = lineCanvas.getContext('2d');
    // lineCanvas.width = window.innerWidth;
    // lineCanvas.height = window.innerHeight;
    //
    // // Throttle Function
    // function throttle(func, limit) {
    //     let inThrottle;
    //     return function (...args) {
    //         if (!inThrottle) {
    //             func.apply(this, args);
    //             inThrottle = true;
    //             setTimeout(() => (inThrottle = false), limit);
    //         }
    //     };
    // }
    //
    // // Parallax and Connections - Enhanced for More Pronounced Effect
    // const mainContent = document.querySelector('.main-content, .mobile-home-section');
    // const elements = document.querySelectorAll('.parallax');
    // document.addEventListener('mousemove', throttle((event) => {
    //     const rect = document.body.getBoundingClientRect();
    //     const x = (event.clientX - rect.left) / rect.width;
    //     const y = (event.clientY - rect.top) / rect.height;
    //     elements.forEach(el => {
    //         if (!el.classList.contains('bottom-text')) {
    //             const speed = parseFloat(el.dataset.speed) || 0.1;
    //             const moveX = (x - 0.5) * 50 * speed;
    //             const moveY = (y - 0.5) * 50 * speed;
    //             const baseTransform = el.classList.contains('center-text') || el.classList.contains('mobile-center-text') ? 'translate(-50%, -50%)' : '';
    //             el.style.transform = \`\${baseTransform} translate(\${moveX}px, \${moveY}px)\`;
    //         }
    //     });
    //     // Cursor Connections
    //     ctx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
    //     ctx.strokeStyle = 'rgba(255, 224, 102, 0.5)';
    //     ctx.lineWidth = 1;
    //     const mouseX = event.clientX;
    //     const mouseY = event.clientY;
    //     const corners = [
    //         {x: 0, y: 0},
    //         {x: window.innerWidth, y: 0},
    //         {x: 0, y: window.innerHeight},
    //         {x: window.innerWidth, y: window.innerHeight}
    //     ];
    //     corners.forEach(corner => {
    //         const distance = Math.hypot(mouseX - corner.x, mouseY - corner.y);
    //         if (distance < 300) {
    //             ctx.beginPath();
    //             ctx.moveTo(mouseX, mouseY);
    //             ctx.lineTo(corner.x, corner.y);
    //             ctx.stroke();
    //         }
    //     });
    //     const floatingElements = document.querySelectorAll(".floating-element");
    //     floatingElements.forEach(el => {
    //         const elRect = el.getBoundingClientRect();
    //         const elX = elRect.left + elRect.width / 2;
    //         const elY = elRect.top + elRect.height / 2;
    //         const distance = Math.hypot(mouseX - elX, mouseY - elY);
    //         if (distance < 300) {
    //             ctx.beginPath();
    //             ctx.moveTo(mouseX, mouseY);
    //             ctx.lineTo(elX, elY);
    //             ctx.stroke();
    //         }
    //     });
    //     const textElements = document.querySelectorAll(".center-text, .mobile-center-text");
    //     textElements.forEach(el => {
    //         const elRect = el.getBoundingClientRect();
    //         const elX = elRect.left + elRect.width / 2;
    //         const elY = elRect.top + elRect.height / 2;
    //         const distance = Math.hypot(mouseX - elX, mouseY - elY);
    //         if (distance < 300) {
    //             ctx.beginPath();
    //             ctx.moveTo(mouseX, mouseY);
    //             ctx.lineTo(elX, elY);
    //             ctx.stroke();
    //         }
    //     });
    // }, 16));
    //
    // // Luxurious Click Effect
    // document.addEventListener('click', (event) => {
    //     const particleCount = 50;
    //     for (let i = 0; i < particleCount; i++) {
    //         const particle = document.createElement('div');
    //         particle.className = 'luxury-particle parallax';
    //         particle.dataset.speed = (Math.random() * 0.3 + 0.1).toFixed(2);
    //         particle.style.left = \`\${event.clientX}px\`;
    //         particle.style.top = \`\${event.clientY}px\`;
    //         document.body.appendChild(particle);
    //         const angle = (i / particleCount) * Math.PI * 2;
    //         const distance = 150 + Math.random() * 100;
    //         gsap.to(particle, {
    //             x: Math.cos(angle) * distance,
    //             y: Math.sin(angle) * distance,
    //             scale: 0.5 + Math.random() * 1.5,
    //             opacity: 0,
    //             rotation: Math.random() * 360,
    //             duration: 2 + Math.random() * 1.5,
    //             ease: "power3.out",
    //             onComplete: () => particle.remove()
    //         });
    //     }
    // });
    //
    // // Particles.js
    // function initializeParticles() {
    //     if (typeof particlesJS !== 'undefined') {
    //         particlesJS('particles-js', {
    //             particles: {
    //                 number: { value: 80, density: { enable: true, value_area: 800 } },
    //                 color: { value: "#ffe066" },
    //                 shape: { type: "circle" },
    //                 opacity: { value: 0.5, random: true },
    //                 size: { value: 3, random: true },
    //                 line_linked: {
    //                     enable: true,
    //                     distance: 150,
    //                     color: "#ffe066",
    //                     opacity: 0.4,
    //                     width: 1
    //                 },
    //                 move: {
    //                     enable: true,
    //                     speed: 2,
    //                     direction: "none",
    //                     random: true,
    //                     straight: false,
    //                     out_mode: "out",
    //                     bounce: false
    //                 }
    //             },
    //             interactivity: {
    //                 detect_on: "canvas",
    //                 events: {
    //                     onhover: { enable: true, mode: "grab" },
    //                     onclick: { enable: false },
    //                     resize: true
    //                 },
    //                 modes: { grab: { distance: 400, line_linked: { opacity: 1 } } }
    //             },
    //             retina_detect: true
    //         });
    //     }
    // }
    //
    // // Dark Mode Toggle
    // document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
    //     document.body.classList.toggle('light-mode');
    //     if (document.body.classList.contains('light-mode')) {
    //         document.querySelector('#home').style.background = '#f0f0f0';
    //         document.querySelectorAll('.center-text h1, .center-text h2, .center-text p, .mobile-center-text h1, .mobile-center-text h2, .mobile-center-text p, .bottom-text h1, .bottom-text h2, .bottom-text p').forEach(el => {
    //             el.style.color = '#2563eb';
    //             el.style.textShadow = 'none';
    //         });
    //     } else {
    //         document.querySelector('#home').style.background = 'transparent';
    //         document.querySelectorAll('.center-text h1, .bottom-text h1').forEach(el => {
    //             el.style.color = '#ffe066';
    //         });
    //         document.querySelectorAll('.center-text h2, .bottom-text h2').forEach(el => {
    //             el.style.color = '#2563eb';
    //         });
    //         document.querySelectorAll('.center-text p, .bottom-text p').forEach(el => {
    //             el.style.color = '#fff';
    //         });
    //         document.querySelectorAll('.mobile-center-text h1').forEach(el => {
    //             el.style.color = '#ffe066';
    //         });
    //         document.querySelectorAll('.mobile-center-text h2').forEach(el => {
    //             el.style.color = '#2563eb';
    //         });
    //         document.querySelectorAll('.mobile-center-text p').forEach(el => {
    //             el.style.color = '#fff';
    //         });
    //     }
    // });
    //
    // // Chatbot
    // const bot = document.getElementById('bot');
    // const chatModal = document.getElementById('chat-modal');
    // const closeBtn = document.getElementById('close-btn');
    // const sendBtn = document.getElementById('send-btn');
    // const userInput = document.getElementById('user-input');
    // const chatBody = document.getElementById('chat-body');
    // let isDragging = false;
    // let currentX, currentY, initialX, initialY;
    //
    // bot.addEventListener('mousedown', startDragging);
    // document.addEventListener('mousemove', drag);
    // document.addEventListener('mouseup', stopDragging);
    //
    // function startDragging(e) {
    //     initialX = e.clientX - currentX;
    //     initialY = e.clientY - currentY;
    //     isDragging = true;
    //     bot.style.cursor = 'grabbing';
    // }
    //
    // function drag(e) {
    //     if (isDragging) {
    //         e.preventDefault();
    //         currentX = e.clientX - initialX;
    //         currentY = e.clientY - initialY;
    //         bot.style.left = currentX + 'px';
    //         bot.style.top = currentY + 'px';
    //         bot.style.bottom = 'auto';
    //         bot.style.right = 'auto';
    //     }
    // }
    //
    // function stopDragging() {
    //     isDragging = false;
    //     bot.style.cursor = 'grab';
    // }
    //
    // bot.addEventListener('click', () => {
    //     chatModal.style.display = chatModal.style.display === 'flex' ? 'none' : 'flex';
    //     if (chatModal.style.display === 'flex') {
    //         chatModal.style.top = '50%';
    //         chatModal.style.left = '50%';
    //         chatModal.style.transform = 'translate(-50%, -50%)';
    //         userInput.focus();
    //     }
    // });
    //
    // closeBtn.addEventListener('click', () => {
    //     chatModal.style.display = 'none';
    // });
    //
    // function addMessage(content, type) {
    //     const message = document.createElement('div');
    //     message.className = \`message \${type}\`;
    //     message.textContent = content;
    //     chatBody.appendChild(message);
    //     chatBody.scrollTop = chatBody.scrollHeight;
    // }
    //
    // sendBtn.addEventListener('click', sendMessage);
    // userInput.addEventListener('keypress', (e) => {
    //     if (e.key === 'Enter') sendMessage();
    // });
    //
    // function sendMessage() {
    //     const message = userInput.value.trim();
    //     if (message) {
    //         addMessage(message, 'user');
    //         userInput.value = '';
    //         setTimeout(() => {
    //             addMessage('Thank you for your query! Taru AI is processing...', 'bot-message');
    //         }, 1000);
    //     }
    // }
    //
    // // Window Resize
    // window.addEventListener('resize', () => {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     lineCanvas.width = window.innerWidth;
    //     lineCanvas.height = window.innerHeight;
    // });
    //
    // // Scroll snapping based on window width
    // if (window.innerWidth > 768) {
    //     document.querySelector('#tech-wheel').style.scrollSnapType = 'y mandatory';
    // } else {
    //     document.querySelector('#tech-wheel').style.scrollSnapType = 'none';
    // }
    //
    // // Add this redirect logic for navbar links
    // document.addEventListener('DOMContentLoaded', function() {
    //     const navLinks = document.querySelectorAll('.navbar-links a, .navbar-blog-btn');
    //     navLinks.forEach(link => {
    //         link.addEventListener('click', function(e) {
    //             e.preventDefault();
    //             const href = this.getAttribute('href');
    //             window.location.href = href;
    //         });
    //     });
    // });
    //
    // // Scroll snapping based on window width
    // if (window.innerWidth > 768) {
    //     document.querySelector('#tech-wheel').style.scrollSnapType = 'y mandatory';
    // } else {
    //     document.querySelector('#tech-wheel').style.scrollSnapType = 'none';
    // }
    //
    // initializeParticles();
    // currentX = bot.offsetLeft;
    // currentY = bot.offsetTop;
    // console.log('Page initialization complete');
`},{kind:"external",src:"frontend-auth.js",type:"text/javascript"}],Fo=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function vf(n){for(const t of xf)if(t.kind==="external"){if(Fo.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),Fo.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function yf(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const bf={"index.html":"/","taruguardians first page.html":"/home","responsive part mobile.html":"/m/home","auth.html":"/auth","admin.html":"/admin","dashboard.html":"/dashboard","recruitment.html":"/recruitment","responsive event page.html":"/events","responsive instagram highlight.html":"/instagram","responsive interview.html":"/interview","responsive roadmap 12.html":"/roadmap","roadmap12.html":"/roadmap-old","resposnsivealumnipage24.html":"/alumni","responsive premium 3.html":"/premium","roadmap11.html":"/roadmap","launching website depression.html":"/home"};function G(n){if(!n)return null;let t=n.trim();const a=t.search(/[?#]/);a!==-1&&(t=t.slice(0,a));try{t=decodeURIComponent(t)}catch{}return t=t.replace(/\\/g,"/").replace(/^\.\//,"").toLowerCase(),bf[t]||null}const Go="DesktopHome";function jf(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},vf(Go);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{yf(Go),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-DesktopHome",children:[e.jsx("div",{className:"dark-mode-toggle parallax custom-cursor","data-speed":"0.05",children:e.jsx("i",{className:"fas fa-moon"})}),e.jsx("header",{className:"modern-navbar",children:e.jsxs("div",{className:"navbar-container",children:[e.jsxs("div",{className:"navbar-logo",children:[e.jsx("span",{className:"logo-arrow left",children:"<"}),e.jsx("img",{src:"Taru%20Wing.png",alt:"Tech Club Logo"}),e.jsx("span",{children:"TaruGuardians"}),e.jsx("span",{className:"logo-arrow right",children:">"})]}),e.jsx("div",{className:"navbar-center",children:e.jsxs("nav",{className:"navbar-links",children:[e.jsx("a",{href:"#home",className:"active custom-cursor",children:"Home"}),e.jsx("a",{href:"#events",className:"custom-cursor",children:"Event"}),e.jsx("a",{href:"#tech-wheel",className:"custom-cursor",children:"TARU WINGS"}),e.jsx("a",{href:"#roadmaps",className:"custom-cursor",children:"Roadmap"}),e.jsx("a",{href:"#projects",className:"custom-cursor",children:"Placement Guide"}),e.jsx("a",{href:"#team",className:"custom-cursor",children:"Team"})]})}),e.jsx(x,{to:"/auth",className:"navbar-blog-btn custom-cursor auth-login-btn",style:{marginLeft:"12px",background:"linear-gradient(90deg,#1a8a3f 0%,#0d9e5e 100%)"},children:"Login"}),e.jsxs("div",{className:"auth-user-menu",style:{display:"none",alignItems:"center",gap:"10px",marginLeft:"12px"},children:[e.jsx("img",{className:"auth-user-avatar",src:!0,alt:!0,style:{width:"34px",height:"34px",borderRadius:"50%",border:"2px solid #3b82f6",objectFit:"cover"}}),e.jsx(x,{to:"/dashboard",className:"navbar-blog-btn custom-cursor",style:{padding:"8px 18px",fontSize:"14px",background:"linear-gradient(90deg,#0a1b4c,#1e2761)"},children:"Dashboard"})]})]})}),e.jsx("section",{id:"home",className:"content-section",children:e.jsxs("div",{className:"main-content",children:[e.jsx("canvas",{id:"three-canvas"}),e.jsx("div",{id:"particles-js"}),e.jsxs("div",{className:"floating-elements",children:[e.jsx("div",{className:"floating-element parallax","data-speed":"0.05",children:e.jsx("i",{className:"fas fa-code"})}),e.jsx("div",{className:"floating-element parallax","data-speed":"0.1",children:e.jsx("i",{className:"fas fa-laptop-code"})}),e.jsx("div",{className:"floating-element parallax","data-speed":"0.15",children:e.jsx("i",{className:"fas fa-rocket"})}),e.jsx("div",{className:"floating-element parallax","data-speed":"0.2",children:e.jsx("i",{className:"fas fa-lightbulb"})})]}),e.jsx("canvas",{id:"line-canvas"}),e.jsxs("div",{className:"main-heading",children:[e.jsx("h1",{children:"taruguardians"}),e.jsxs("p",{children:["Where Code Meets Creativity, The Sole Architect of Your Tech and Non-Tech Ascent",e.jsx("br",{}),"Beyond the Code, Beyond the Ordinary,",e.jsx("br",{}),"The Fusion of 95% Tech, 5% Non-Tech, Equip, Build, and Conquer with Our Roadmaps and Placement Guides"]}),e.jsxs("div",{style:{marginTop:"30px"},children:[e.jsx("h3",{style:{color:"#00f0ff",fontSize:"24px",fontWeight:"700",marginBottom:"10px"},children:"Be a part of TaruGuardians"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.7)",fontSize:"14px",marginBottom:"18px"},children:"Join TaruGuardians to learn, grow, and lead."}),e.jsx(x,{to:"/recruitment",style:{display:"inline-block",textDecoration:"none",background:"linear-gradient(90deg, #00f0ff, #00b4d8)",color:"#000",fontSize:"15px",fontWeight:"700",padding:"12px 35px",borderRadius:"25px",boxShadow:"0 4px 25px rgba(0,240,255,0.4)"},children:"Apply Now →"})]})]}),e.jsx("div",{className:"left-slideshow-container",children:e.jsxs("div",{className:"circular-slideshow",id:"left-slideshow",children:[e.jsx("div",{className:"slide active",children:e.jsx("img",{src:"Event%201.png",alt:"Slide 1"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:"Event%202.png",alt:"Slide 2"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:"Event%203.png",alt:"Slide 3"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:"Event%204.png",alt:"Slide 4"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:"Event%205.png",alt:"Slide 5"})})]})}),e.jsx("div",{className:"right-slideshow-container",children:e.jsxs("div",{className:"circular-slideshow",id:"right-slideshow",children:[e.jsx("div",{className:"slide active",children:e.jsx("img",{src:"Event%206.png",alt:"Slide 1"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:"Event%207.png",alt:"Slide 2"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:"Event%208.png",alt:"Slide 3"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:"Event%209.png",alt:"Slide 4"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:"Event%2010.png",alt:"Slide 5"})})]})})]})}),e.jsx("div",{id:"bot",className:"parallax custom-cursor","data-speed":"0.05"}),e.jsxs("div",{id:"chat-modal",className:"parallax","data-speed":"0.05",children:[e.jsxs("div",{id:"chat-header",children:[" ",e.jsx("span",{id:"close-btn",className:"custom-cursor",children:"×"})]}),e.jsx("div",{id:"chat-body"}),e.jsxs("div",{id:"chat-input",children:[e.jsx("a",{id:"user-input",type:"text",className:"custom-cursor"}),e.jsx("a",{id:"send-btn",className:"custom-cursor"})]})]}),e.jsxs("section",{id:"blog",className:"blog-section",children:[e.jsx("h2",{className:"blog-title",children:"What's New in TaruGuardians"}),e.jsxs("div",{className:"blog-cards",children:[e.jsxs("div",{className:"blog-card",children:[e.jsx("img",{src:"post%204.png",alt:"eid-e-milad"}),e.jsxs("div",{className:"blog-card-content",children:[e.jsx("div",{className:"blog-card-heading",children:"TaruGuardians Post On Children's Day"}),e.jsx("div",{className:"blog-card-title",children:"(14 November 2025)"}),e.jsxs("div",{className:"blog-card-desc",children:["TaruGuardians wish every child a happy children's day",e.jsx("br",{}),"Every child has the potential, imagination and courage to do something big in life . It’s about listening to their thoughts, respecting their voices, and encouraging their dreams. Let us promise to support their ambition and encourage their dreams ❤️"]})]}),e.jsx("div",{className:"blog-card-footer",children:e.jsxs("a",{href:"https://www.instagram.com/p/DRB8UvxkigJ/",className:"blog-card-link",children:[e.jsxs("svg",{width:"18",height:"18",fill:"none",stroke:"#3b82f6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("polyline",{points:"15 3 21 3 21 9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"More"]})})]}),e.jsxs("div",{className:"blog-card",children:[e.jsx("img",{src:"post%203.png",alt:"Engineers Day"}),e.jsxs("div",{className:"blog-card-content",children:[e.jsx("div",{className:"blog-card-heading",children:"TaruGuardians Post On Guru Nanak’s Jayanti"}),e.jsx("div",{className:"blog-card-title",children:"(5 November 2025)"}),e.jsxs("div",{className:"blog-card-desc",children:["Without a Guru, none can cross over",e.jsx("br",{}),"Guru Nanak’s life advice could double as a modern cheat code for a kinder world—compassion, unity, equality, and selfless service, all summed up in “Ik Onkar” (there’s one God), invite us to swap judgment for kindness and celebrate what connects us ❤️"]})]}),e.jsx("div",{className:"blog-card-footer",children:e.jsxs("a",{href:"https://www.instagram.com/p/DQqGIjvkgqO/",className:"blog-card-link",children:[e.jsxs("svg",{width:"18",height:"18",fill:"none",stroke:"#3b82f6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("polyline",{points:"15 3 21 3 21 9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"More"]})})]}),e.jsxs("div",{className:"blog-card",children:[e.jsx("img",{src:"post%202.png",alt:"Hindi Diwas"}),e.jsxs("div",{className:"blog-card-content",children:[e.jsx("div",{className:"blog-card-heading",children:"TaruGuardians Post On Diwali"}),e.jsx("div",{className:"blog-card-title",children:"(20 October 2025)"}),e.jsxs("div",{className:"blog-card-desc",children:["Team TaruGuardians wish everyone a very Happy and Joyous Diwali 🪔💛!",e.jsx("br",{}),"The festival of lights is here— time to glow brighter than your diyas and sparkle from inside out ✨",e.jsx("br",{}),"Diwali, celebrated on the 15th day of the Karthika month, marks the day when Lord Rama returned to Ayodhya after 14 years of exile"]})]}),e.jsx("div",{className:"blog-card-footer",children:e.jsxs("a",{href:"https://www.instagram.com/p/DQBB_1FEpXA/",className:"blog-card-link",children:[e.jsxs("svg",{width:"18",height:"18",fill:"none",stroke:"#3b82f6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("polyline",{points:"15 3 21 3 21 9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"More"]})})]}),e.jsxs("div",{className:"blog-card",children:[e.jsx("img",{src:"post%201.png",alt:"literacy Day"}),e.jsxs("div",{className:"blog-card-content",children:[e.jsx("div",{className:"blog-card-heading",children:"TaruGuardians Post On Dhanteras"}),e.jsx("div",{className:"blog-card-title",children:"(18 October 2025)"}),e.jsxs("div",{className:"blog-card-desc",children:["The air fills with echoes of joy as our home glows with the light of Diya 🪔",e.jsx("br",{}),"Team TaruGuardians wish everyone a bright , blessed and blissful Dhanteras 🙌🏻. Let's welcome abundance with gratitude,spread light with kindness and step into a new year of growth, positivity and prosperity 💛"]})]}),e.jsx("div",{className:"blog-card-footer",children:e.jsxs("a",{href:"https://www.instagram.com/p/DP7-NWwEt3J/",className:"blog-card-link",children:[e.jsxs("svg",{width:"18",height:"18",fill:"none",stroke:"#3b82f6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("polyline",{points:"15 3 21 3 21 9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"More"]})})]})]}),e.jsx("div",{className:"blog-see-more",children:e.jsx(x,{to:"/instagram",style:{backgroundColor:"#37B88C"},className:"blog-see-more-btn",children:"See All Post Of TaruGuardians →"})})]}),e.jsxs("section",{id:"events",className:"overhyped-section",children:[e.jsx("div",{className:"overhyped-title",children:"Events "}),e.jsx("div",{className:"events-title",children:" Organized By The TaruGuardians"}),e.jsxs("div",{className:"events-grid",children:[e.jsxs("div",{className:"event-card",style:{backgroundImage:"url('QUIZ MANIA .png')",backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"event-date",children:"November 2, 2025"}),e.jsx("div",{className:"event-title",children:"QUIZ-O-MANIA 3.0"}),e.jsx("div",{className:"event-desc",children:"Quiz-O-Mania 3.0 by TaruGuardians — Successfully completed online quiz on November 2 2025 | Free entry, 5 mar points, & certificates For Everyone! "})]}),e.jsxs("div",{className:"event-card",style:{backgroundImage:"url('Event 2.png')",backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"event-date",children:"September 13, 2025"}),e.jsx("div",{className:"event-title",children:"अभिyukti"}),e.jsxs("div",{className:"event-desc",children:["an offline non-technical event which is about communication and fun.",e.jsx("br",{}),"At Annex Building Room no 205 & 206"]})]}),e.jsxs("div",{className:"event-card",style:{backgroundImage:"url('Event 1.png')",backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"event-date",children:"August 17, 2025"}),e.jsx("div",{className:"event-title"}),e.jsxs("div",{className:"event-desc",children:["Python Workshop",e.jsx("br",{}),"At CSE department Ground Floor"]})]}),e.jsxs("div",{className:"event-card",style:{backgroundImage:"url('tree.png')",backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"event-date",children:"june 6, 2025"}),e.jsx("div",{className:"event-title",children:"TREE PLANTATION Drive BY TARUGUARDIANS"}),e.jsx("div",{className:"event-desc",children:"Taruguardians planted trees All Over The Hit Haldia Campus"})]}),e.jsxs("div",{className:"event-card",style:{backgroundImage:"url('Gate.jpg')",backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"event-date",children:"March 23, 2025"}),e.jsx("div",{className:"event-title",children:"GATE & PLACEMENT"}),e.jsx("div",{className:"event-desc",children:"Crack GATE & Placements with Chandan Jha (AVP, GFG) | Mar 23, 2 PM | Free Entry!"})]}),e.jsxs("div",{className:"event-card",style:{backgroundImage:"url('FIFMAIMAGE.jpg')",backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"event-date",children:"1st & 2nd March, 2025"}),e.jsx("div",{className:"event-title",children:"FIGMA CRAFT 2.0"}),e.jsx("div",{className:"event-desc",children:"Design, Collaborate, Create By TaruGuardians"}),e.jsx("div",{className:"event-desc",children:"At ECE DEPT. HIT, Haldia"})]})]}),e.jsx("div",{className:"events-viewall",children:e.jsx(x,{to:"/events",style:{backgroundColor:"#37B88C"},className:"events-viewall-btn",children:"View All Events →"})})]}),e.jsxs("section",{id:"tech-wheel",className:"extra-section",children:[e.jsx("div",{className:"scroll-trigger"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:[e.jsxs("div",{className:"wing-title-big",id:"wingTitle",children:["TARU",e.jsx("br",{}),"WINGS"]}),e.jsx("div",{className:"tech-wheel-container",id:"techWheelContainer",children:e.jsx("div",{className:"tech-wheel",id:"techWheel",children:e.jsx("div",{className:"tech-wheel-inner"})})}),e.jsx("div",{className:"content-area",id:"contentArea",children:e.jsxs("div",{id:"webDevText",className:"web-dev-text",children:[e.jsx("h3",{children:"Explore Our Wings"}),e.jsx("p",{children:"Scroll to rotate the wheel and discover the various technical wings of our club."}),e.jsx("a",{className:"read-more",href:"#",children:"Get Started →"})]})}),e.jsxs("div",{className:"scroll-hint",children:[e.jsx("div",{children:"🔄 Scroll to rotate the wheel"}),e.jsx("div",{style:{fontSize:"0.8rem",marginTop:"5px"},children:"Complete one full rotation to continue And Move On the Next Section"})]}),e.jsxs("div",{className:"progress-indicator",children:[e.jsx("span",{children:"Rotation Progress:"}),e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill"})}),e.jsx("span",{id:"progress-text",children:"0%"})]}),e.jsxs("div",{className:"wheel",children:[e.jsx("h2",{children:"TaruGuardians Wing"}),e.jsx("p",{children:"All types of TaruGuardians club posts"})]})]})]}),e.jsxs("section",{id:"roadmaps",className:"roadmaps-section",children:[e.jsx("h2",{className:"roadmaps-title",children:"Roadmaps By TaruGuardians Team"}),e.jsxs("div",{className:"roadmaps-cards",children:[e.jsxs(x,{to:"/roadmap",className:"roadmap-card",children:[e.jsx("img",{src:"webd2.jpg",alt:"WebDevelopemnt"}),e.jsx("span",{className:"roadmap-label",children:"Web Development"}),e.jsx("span",{className:"roadmap-label",children:"Roadmap"})]}),e.jsxs(x,{to:"/roadmap-old",className:"roadmap-card",children:[e.jsx("img",{src:"cp2.jpg",alt:"Competetiitve Programing"}),e.jsx("span",{className:"roadmap-label",children:"Competetive programming"}),e.jsx("span",{className:"roadmap-label",children:"   Roadmap"})]}),e.jsxs(x,{to:"/roadmap-old",className:"roadmap-card",children:[e.jsx("img",{src:"appd2.jpg",alt:"App Development"}),e.jsx("span",{className:"roadmap-label",children:"App Development"}),e.jsx("span",{className:"roadmap-label",children:" Roadmap "})]})]}),e.jsx("div",{className:"roadmaps-viewall",children:e.jsxs(x,{to:"/roadmap",className:"glow-viewall-btn",children:["View All Roadmaps",e.jsx("span",{style:{color:"deepskyblue"},children:"→"})]})})]}),e.jsxs("section",{id:"projects",className:"projects-section",children:[e.jsx("h1",{style:{marginBottom:"8px"},className:"projects-title",children:"On & Off Campus Placement Roadmap"}),e.jsx("h2",{style:{marginTop:"0",fontSize:"2rem"},className:"projects-title",children:"by TaruGuardians Team"}),e.jsxs("div",{className:"projects-grid",children:[e.jsx("div",{className:"project-card",style:{backgroundImage:"url('walmart3.jpg')"},children:e.jsx("div",{className:"project-overlay",children:e.jsxs("div",{className:"project-card-content",children:[e.jsx("h3",{className:"project-name",children:"Roadmap To Crack Off Campus Placement"}),e.jsx("div",{className:"project-desc",children:"Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency."}),e.jsxs("div",{className:"project-tags",children:[e.jsx("span",{className:"tag",children:"DSA"}),e.jsx("span",{className:"tag",children:"DEVELOPMENT"}),e.jsx("span",{className:"tag",children:"QUANT APTITUDE"})]}),e.jsx("div",{className:"project-links",children:e.jsx("a",{href:"#",className:"project-link",children:"Visit To See More"})})]})})}),e.jsx("div",{className:"project-card",style:{backgroundImage:"url('tcs2.jpg')"},children:e.jsx("div",{className:"project-overlay",children:e.jsxs("div",{className:"project-card-content",children:[e.jsx("h3",{className:"project-name",children:"On Campus Placement Roadmap"}),e.jsx("div",{className:"project-desc",children:"Cracking on-campus placements involves a different strategy from off-campus since it typically includes a predefined process organized by college."}),e.jsxs("div",{className:"project-tags",children:[e.jsx("span",{className:"tag",children:"DSA"}),e.jsx("span",{className:"tag",children:"DEVELOPMENT"}),e.jsx("span",{className:"tag",children:"QUANT APTITUDE"})]}),e.jsx("a",{href:"#",className:"project-link",children:"Visit To See More"})]})})}),e.jsx("div",{className:"project-card",style:{backgroundImage:"url('infosys2.jpg')"},children:e.jsx("div",{className:"project-overlay",children:e.jsxs("div",{className:"project-card-content",children:[e.jsx("h3",{className:"project-name",children:"On Campus Placement Roadmap"}),e.jsx("div",{className:"project-desc",children:"Cracking on-campus placements involves a different strategy from off-campus since it typically includes a predefined process organized by college."}),e.jsxs("div",{className:"project-tags",children:[e.jsx("span",{className:"tag",children:"DSA"}),e.jsx("span",{className:"tag",children:"DEVELOPMENT"}),e.jsx("span",{className:"tag",children:"QUANT APTITUDE"})]}),e.jsx("div",{className:"project-links",children:e.jsx("a",{href:"#",className:"project-link",children:"Visit To See More"})})]})})}),e.jsx("div",{className:"project-card",style:{backgroundImage:"url('pwc.jpg')"},children:e.jsx("div",{className:"project-overlay",children:e.jsxs("div",{className:"project-card-content",children:[e.jsx("h3",{className:"project-name",children:"On Campus Placement Roadmap"}),e.jsx("div",{className:"project-desc",children:"Cracking on-campus placements involves a different strategy from off-campus since it typically includes a predefined process organized by College."}),e.jsxs("div",{className:"project-tags",children:[e.jsx("span",{className:"tag",children:"DSA"}),e.jsx("span",{className:"tag",children:"DEVELOPMENT"}),e.jsx("span",{className:"tag",children:"QUANT APTITUDE"})]}),e.jsx("div",{className:"project-links",children:e.jsx("a",{href:"#",className:"project-link",children:"Visit To See More"})})]})})})]}),e.jsx("div",{className:"projects-viewall",children:e.jsx(x,{to:"/interview",className:"glow-viewall-btn",children:"View All Interview Guide→"})})]}),e.jsxs("section",{id:"team",className:"team-organizers-section",children:[e.jsx("h2",{className:"team-organizers-title",children:"TaruGuardians Leadership Team"}),e.jsxs("div",{className:"team-organizers-container",children:[e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"new1president.png",alt:"PRAKSH KUMAR"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"President"}),e.jsx("div",{className:"organizer-name",children:"PRAKASH KUMAR"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"new2vicepresident.png",alt:"MUKUL ANAND"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Vice President"}),e.jsx("div",{className:"organizer-name",children:"MUKUL ANAND"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"newjs.png",alt:"Akshat Thakur"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Joint Secretary"}),e.jsx("div",{className:"organizer-name",children:"Akshat Thakur"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"newjs2.png",alt:"Kriti DIvyansha"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Joint Secretary"}),e.jsx("div",{className:"organizer-name",children:"Kriti Divyansha"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"treasurer.png",alt:"Pushkar Aditya"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Treasurer"}),e.jsx("div",{className:"organizer-name",children:"Pushkar Aditya"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"treasurer3.png",alt:"Santripti"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Treasurer"}),e.jsx("div",{className:"organizer-name",children:"Santripti"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"techhead.png",alt:"Mulesoft Salesforce"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Tech Head"}),e.jsx("div",{className:"organizer-name",children:"Aashish Kishore"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"adminstrative.png",alt:"Ritik Kumar"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Adminstrative Head"}),e.jsx("div",{className:"organizer-name",children:"Ritik Kumar"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"event.png",alt:"Hrithik Bhadani"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Event and Management Head"}),e.jsx("div",{className:"organizer-name",children:"Hrithik Bhadani"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"event2.png",alt:"Namya Singh"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Event and Management Head"}),e.jsx("div",{className:"organizer-name",children:"Namya Singh"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"mediahead.png",alt:"Manyata Manas"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"MEDIA HEAD"}),e.jsx("div",{className:"organizer-name",children:" Manyata Manas"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"mediahead2.png",alt:"Sneh Raj"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"MEDIA HEAD"}),e.jsx("div",{className:"organizer-name",children:"Sneh Raj"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"content.png",alt:"Sarthak Kumar"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Content Head"}),e.jsx("div",{className:"organizer-name",children:"Sarthak Kumar"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"content2.png",alt:"Keshav Sarkar"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Content Head"}),e.jsx("div",{className:"organizer-name",children:"Keshav Sarkar"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"Pr.png",alt:"Saikat Bhattacharya"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"PR HEAD"}),e.jsx("div",{className:"organizer-name",children:"Saikat Bhattacharya"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"pr2.png",alt:"Nakshatra Sarkar"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"PR Head"}),e.jsx("div",{className:"organizer-name",children:"Nakshatra Sarkar"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"program.png",alt:"Piyali Nath"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Program Head"}),e.jsx("div",{className:"organizer-name",children:"Piyali Nath"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"memebership.png",alt:"Pawan Gope"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Membership Head"}),e.jsx("div",{className:"organizer-name",children:"Pawan Gope"})]})]}),e.jsxs("div",{className:"organizer-card",children:[e.jsx("img",{src:"membership2.png",alt:"Abhijit Choudhary"}),e.jsxs("div",{className:"organizer-info",children:[e.jsx("div",{className:"organizer-company",children:"Membership Head"}),e.jsx("div",{className:"organizer-name",children:"Abhijit Choudhury"})]})]})]}),e.jsxs("div",{style:{position:"absolute",top:"38%",left:"50%",transform:"translateX(-50%)",textAlign:"center",zIndex:"20"},children:[e.jsx("h3",{style:{color:"#fff",fontSize:"28px",fontWeight:"700",marginBottom:"12px",textShadow:"0 0 20px rgba(0,240,255,0.5)"},children:"Be a part of TaruGuardians"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.8)",fontSize:"14px",marginBottom:"18px",maxWidth:"450px"},children:"Join TaruGuardians to learn, grow, and lead."}),e.jsx(x,{to:"/recruitment",style:{display:"inline-block",textDecoration:"none",background:"linear-gradient(90deg, #00f0ff, #00b4d8)",color:"#000",fontSize:"16px",fontWeight:"700",padding:"14px 40px",borderRadius:"30px",boxShadow:"0 4px 30px rgba(0,240,255,0.4)",transition:"all 0.3s"},children:"Apply Now →"})]}),e.jsx("h2",{className:"alumni-title",children:"TaruGuardians Alumni"}),e.jsxs("div",{className:"alumni-row",children:[e.jsxs("div",{className:"alumni-card",children:[e.jsx("img",{src:"president.jpg",alt:"Alumni 1"}),e.jsxs("div",{className:"alumni-info",children:[e.jsx("div",{className:"alumni-name",children:"ROHAN KUMAR SINGH"}),e.jsx("div",{className:"alumni-role",children:"SDE,BlueStock"}),e.jsx("div",{className:"alumni-batch",children:"Batch of 2021-2025"})]})]}),e.jsxs("div",{className:"alumni-card",children:[e.jsx("img",{src:"programhead.jpg",alt:"Alumni 2"}),e.jsxs("div",{className:"alumni-info",children:[e.jsx("div",{className:"alumni-name",children:"ARYAN RAJ"}),e.jsx("div",{className:"alumni-role"}),e.jsx("div",{className:"alumni-batch",children:"Batch of 2021-2025"})]})]}),e.jsxs("div",{className:"alumni-card",children:[e.jsx("img",{src:"GateTopper.png",alt:"Alumni 3"}),e.jsxs("div",{className:"alumni-info",children:[e.jsx("div",{className:"alumni-name",children:"ADI NATH BHAWANI"}),e.jsxs("div",{className:"alumni-role",children:["Country Topper(nptel), Computer Science",e.jsx("br",{}),"Gate: AIR: 456"]}),e.jsx("div",{className:"alumni-batch",children:"Batch of 2021-2025"})]})]}),e.jsxs("div",{className:"alumni-card",children:[e.jsx("img",{src:"vicepresident.jpg",alt:"Alumni 4"}),e.jsxs("div",{className:"alumni-info",children:[e.jsx("div",{className:"alumni-name",children:"ANAND KUMAR JHA"}),e.jsx("div",{className:"alumni-role",children:"Intern,  Oasis Infobyte"}),e.jsx("div",{className:"alumni-batch",children:"Batch of 2021-2025"})]})]}),e.jsxs("div",{className:"alumni-card",children:[e.jsx("img",{src:"pr.jpg",alt:"Alumni 5"}),e.jsxs("div",{className:"alumni-info",children:[e.jsx("div",{className:"alumni-name",children:"UTSAV RAJ"}),e.jsx("div",{className:"alumni-role",children:"Intern, TDS Advenue"}),e.jsx("div",{className:"alumni-batch",children:"Batch of 2021-2025"})]})]}),e.jsxs("div",{className:"alumni-card",children:[e.jsx("img",{src:"jsnontech.jpg",alt:"Alumni 6"}),e.jsxs("div",{className:"alumni-info",children:[e.jsx("div",{className:"alumni-name",children:"ADARSH RANJAN"}),e.jsx("div",{className:"alumni-role",children:"Campus Ambassdor, GeeksforGeeks"}),e.jsx("div",{className:"alumni-batch",children:"Batch of 2021-2025"})]})]}),e.jsxs("div",{className:"alumni-card",children:[e.jsx("img",{src:"Treasure.jpg",alt:"Alumni 7"}),e.jsxs("div",{className:"alumni-info",children:[e.jsx("div",{className:"alumni-name",children:"BISHNU CHATTERJEE"}),e.jsx("div",{className:"alumni-role",children:"NEC finalist, IIT Bombay"}),e.jsx("div",{className:"alumni-batch",children:"Batch of 2021-2025"})]})]}),e.jsxs("div",{className:"alumni-card",children:[e.jsx("img",{src:"Adminstrativehead.jpg",alt:"Alumni 8"}),e.jsxs("div",{className:"alumni-info",children:[e.jsx("div",{className:"alumni-name",children:"MOHIT KUMAR SINGH"}),e.jsx("div",{className:"alumni-role",children:"NEC finalist, IIT Bombay"}),e.jsx("div",{className:"alumni-batch",children:"Batch of 2021-2025"})]})]})]}),e.jsx(x,{to:"/alumni",target:"_blank",children:e.jsx("button",{className:"glow-btn",children:e.jsx("span",{children:"SEE ALL TaruGuardians ALUMINI→"})})})]}),e.jsx("div",{id:"recruitmentModal",style:{display:"none",position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(0,0,0,0.85)",zIndex:"10000",justifyContent:"center",alignItems:"center",padding:"20px"},children:e.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a2e, #16213e)",borderRadius:"20px",maxWidth:"600px",width:"100%",maxHeight:"90vh",overflowY:"auto",position:"relative",border:"1px solid rgba(255,255,255,0.1)"},children:[e.jsx("button",{"data-legacy-onclick":"closeRecruitmentModal()",style:{position:"absolute",top:"15px",right:"15px",background:"none",border:"none",color:"#fff",fontSize:"24px",cursor:"pointer",zIndex:"10"},children:"×"}),e.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",margin:"0"},children:e.jsx("div",{id:"formProgress",style:{height:"100%",background:"linear-gradient(90deg, #00f0ff, #ff2d75)",width:"33%",transition:"width 0.3s ease",borderRadius:"2px"}})}),e.jsxs("div",{style:{padding:"30px"},children:[e.jsxs("div",{id:"step1",className:"form-step",children:[e.jsxs("h2",{style:{color:"#fff",fontSize:"1.5rem",marginBottom:"25px",textAlign:"center"},children:[e.jsx("span",{style:{color:"#00f0ff"},children:"Join"})," TaruGuardians"]}),e.jsxs("div",{style:{display:"grid",gap:"15px"},children:[e.jsx("input",{type:"text",id:"recName",placeholder:"Full Name *",style:{width:"100%",padding:"14px 18px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"#fff",fontSize:"1rem",outline:"none"}}),e.jsx("input",{type:"email",id:"recEmail",placeholder:"Email Address *",style:{width:"100%",padding:"14px 18px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"#fff",fontSize:"1rem",outline:"none"}}),e.jsx("input",{type:"tel",id:"recPhone",placeholder:"Phone Number *",style:{width:"100%",padding:"14px 18px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"#fff",fontSize:"1rem",outline:"none"}}),e.jsx("input",{type:"text",id:"recWhatsapp",placeholder:"WhatsApp Number *",style:{width:"100%",padding:"14px 18px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"#fff",fontSize:"1rem",outline:"none"}}),e.jsx("input",{type:"text",id:"recRoll",placeholder:"Class Roll Number *",style:{width:"100%",padding:"14px 18px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"#fff",fontSize:"1rem",outline:"none"}}),e.jsxs("select",{id:"recDepartment",style:{width:"100%",padding:"14px 18px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",color:"#fff",fontSize:"1rem",outline:"none"},children:[e.jsx("option",{value:!0,style:{color:"#000"},children:"Select Department *"}),e.jsx("option",{value:"CSE",style:{color:"#000"},children:"Computer Science & Engineering"}),e.jsx("option",{value:"IT",style:{color:"#000"},children:"Information Technology"}),e.jsx("option",{value:"ECE",style:{color:"#000"},children:"Electronics & Communication"}),e.jsx("option",{value:"EE",style:{color:"#000"},children:"Electrical Engineering"}),e.jsx("option",{value:"ME",style:{color:"#000"},children:"Mechanical Engineering"}),e.jsx("option",{value:"CE",style:{color:"#000"},children:"Civil Engineering"}),e.jsx("option",{value:"Other",style:{color:"#000"},children:"Other"})]}),e.jsxs("select",{id:"recYear",style:{width:"100%",padding:"14px 18px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",color:"#fff",fontSize:"1rem",outline:"none"},children:[e.jsx("option",{value:!0,style:{color:"#000"},children:"Select Year *"}),e.jsx("option",{value:"1st",style:{color:"#000"},children:"1st Year"}),e.jsx("option",{value:"2nd",style:{color:"#000"},children:"2nd Year"}),e.jsx("option",{value:"3rd",style:{color:"#000"},children:"3rd Year"}),e.jsx("option",{value:"4th",style:{color:"#000"},children:"4th Year"})]})]}),e.jsxs("button",{"data-legacy-onclick":"nextStep(2)",style:{width:"100%",marginTop:"20px",background:"linear-gradient(135deg, #00f0ff, #00b4d8)",color:"#000",border:"none",padding:"14px",fontSize:"1rem",fontWeight:"600",borderRadius:"10px",cursor:"pointer"},children:["Next ",e.jsx("i",{className:"fas fa-arrow-right"})]})]}),e.jsxs("div",{id:"step2",className:"form-step",style:{display:"none"},children:[e.jsxs("h2",{style:{color:"#fff",fontSize:"1.5rem",marginBottom:"25px",textAlign:"center"},children:["Choose Your ",e.jsx("span",{style:{color:"#ff2d75"},children:"Role"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"15px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Public Relation",style:{display:"none"}}),e.jsx("i",{className:"fas fa-bullhorn",style:{fontSize:"1.5rem",color:"#00f0ff",marginBottom:"8px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.9rem",fontWeight:"500"},children:"Public Relation"})]}),e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"15px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Web/App Developer",style:{display:"none"}}),e.jsx("i",{className:"fas fa-code",style:{fontSize:"1.5rem",color:"#7b2ff7",marginBottom:"8px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.9rem",fontWeight:"500"},children:"Web/App Developer"})]}),e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"15px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Photographer/Videographer",style:{display:"none"}}),e.jsx("i",{className:"fas fa-camera",style:{fontSize:"1.5rem",color:"#ff2d75",marginBottom:"8px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.9rem",fontWeight:"500"},children:"Photographer"})]}),e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"15px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Video Editor",style:{display:"none"}}),e.jsx("i",{className:"fas fa-video",style:{fontSize:"1.5rem",color:"#ffd700",marginBottom:"8px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.9rem",fontWeight:"500"},children:"Video Editor"})]}),e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"15px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Graphics Designer",style:{display:"none"}}),e.jsx("i",{className:"fas fa-paint-brush",style:{fontSize:"1.5rem",color:"#00ff88",marginBottom:"8px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.9rem",fontWeight:"500"},children:"Graphics Designer"})]}),e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"15px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Content Writer",style:{display:"none"}}),e.jsx("i",{className:"fas fa-pen",style:{fontSize:"1.5rem",color:"#ffaa00",marginBottom:"8px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.9rem",fontWeight:"500"},children:"Content Writer"})]})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"20px"},children:[e.jsxs("button",{"data-legacy-onclick":"nextStep(1)",style:{flex:"1",background:"rgba(255,255,255,0.1)",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",padding:"14px",fontSize:"1rem",borderRadius:"10px",cursor:"pointer"},children:[e.jsx("i",{className:"fas fa-arrow-left"})," Back"]}),e.jsxs("button",{"data-legacy-onclick":"nextStep(3)",style:{flex:"1",background:"linear-gradient(135deg, #00f0ff, #00b4d8)",color:"#000",border:"none",padding:"14px",fontSize:"1rem",fontWeight:"600",borderRadius:"10px",cursor:"pointer"},children:["Next ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]}),e.jsxs("div",{id:"step3",className:"form-step",style:{display:"none"},children:[e.jsxs("h2",{style:{color:"#fff",fontSize:"1.5rem",marginBottom:"25px",textAlign:"center"},children:["Tell Us ",e.jsx("span",{style:{color:"#7b2ff7"},children:"More"})]}),e.jsx("div",{id:"roleSpecificFields"}),e.jsxs("div",{style:{marginTop:"15px"},children:[e.jsx("label",{style:{color:"rgba(255,255,255,0.8)",fontSize:"0.9rem",marginBottom:"8px",display:"block"},children:"Why do you want to join TaruGuardians? *"}),e.jsx("textarea",{id:"recWhyJoin",rows:"4",placeholder:"Share your motivation...",style:{width:"100%",padding:"14px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"#fff",fontSize:"1rem",outline:"none",resize:"vertical"}})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"20px"},children:[e.jsxs("button",{"data-legacy-onclick":"nextStep(2)",style:{flex:"1",background:"rgba(255,255,255,0.1)",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",padding:"14px",fontSize:"1rem",borderRadius:"10px",cursor:"pointer"},children:[e.jsx("i",{className:"fas fa-arrow-left"})," Back"]}),e.jsxs("button",{"data-legacy-onclick":"submitRecruitment()",id:"submitBtn",style:{flex:"1",background:"linear-gradient(135deg, #ff2d75, #7b2ff7)",color:"#fff",border:"none",padding:"14px",fontSize:"1rem",fontWeight:"600",borderRadius:"10px",cursor:"pointer"},children:["Submit ",e.jsx("i",{className:"fas fa-paper-plane"})]})]})]}),e.jsxs("div",{id:"stepSuccess",className:"form-step",style:{display:"none",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"4rem",marginBottom:"20px"},children:"🎉"}),e.jsx("h2",{style:{color:"#00ff88",fontSize:"1.8rem",marginBottom:"15px"},children:"Application Submitted!"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.8)",marginBottom:"25px"},children:"Thank you for applying to TaruGuardians. We'll review your application and get back to you soon."}),e.jsxs("div",{style:{background:"rgba(0,240,255,0.1)",border:"1px solid rgba(0,240,255,0.3)",borderRadius:"12px",padding:"20px",marginBottom:"20px"},children:[e.jsx("p",{style:{color:"#00f0ff",fontWeight:"600",marginBottom:"10px"},children:"Join our WhatsApp Community"}),e.jsxs("a",{href:"https://chat.whatsapp.com/IKUt4M5NcHVKYyoTezoJYi",target:"_blank",style:{color:"#fff",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"8px",background:"#25D366",padding:"10px 20px",borderRadius:"25px",fontWeight:"500"},children:[e.jsx("i",{className:"fab fa-whatsapp"})," Join WhatsApp Group"]})]}),e.jsx("button",{"data-legacy-onclick":"closeRecruitmentModal()",style:{background:"linear-gradient(135deg, #00f0ff, #00b4d8)",color:"#000",border:"none",padding:"12px 30px",fontSize:"1rem",fontWeight:"600",borderRadius:"25px",cursor:"pointer"},children:"Done"})]})]})]})}),e.jsxs("footer",{id:"footer",className:"footer",children:[e.jsxs("div",{style:{textAlign:"center",margin:"20px 0"},children:[e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians",style:{width:"120px",height:"auto",display:"block",margin:"0 auto 10px auto"}}),e.jsx("h3",{children:"(Turn Passion Into Purpose)"})]}),e.jsxs("div",{className:"footer-content",children:[e.jsxs("div",{className:"footer-section about",children:[e.jsx("span",{style:{fontSize:"2.5rem"}}),e.jsx("h2",{children:"𝐓𝐚𝐫𝐮𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧𝐬"}),e.jsx("p",{children:"𝔄𝔰 𝔱𝔯𝔢𝔢𝔰 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔯𝔬𝔬𝔱𝔰, 𝔴𝔢 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔱𝔢𝔠𝔥. 𝔉𝔯𝔬𝔪 𝔰𝔢𝔢𝔡𝔰 𝔬𝔣 𝔠𝔬𝔡𝔢 𝔱𝔬 𝔠𝔞𝔫𝔬𝔭𝔦𝔢𝔰 𝔬𝔣 𝔠𝔥𝔞𝔫𝔤𝔢 — 𝔟𝔲𝔦𝔩𝔡𝔦𝔫𝔤 𝔞 𝔤𝔯𝔢𝔢𝔫𝔢𝔯, 𝔰𝔪𝔞𝔯𝔱𝔢𝔯 𝔣𝔲𝔱𝔲𝔯𝔢."}),e.jsx("p",{children:"(𝚁𝙾𝙾𝚃𝙴𝙳 𝙸𝙽 𝙽𝙰𝚃𝚄𝚁𝙴, 𝙳𝚁𝙸𝚅𝙴𝙽 𝙱𝚈 𝚃𝙴𝙲𝙷)"})]}),e.jsxs("div",{className:"footer-section contact",children:[e.jsx("h3",{children:"𝓒𝓸𝓷𝓽𝓪𝓬𝓽"}),e.jsx("p",{children:"𝓣𝓪𝓻𝓾𝓖𝓾𝓪𝓻𝓭𝓲𝓪𝓷𝓼@𝓰𝓶𝓪𝓲𝓵.𝓬𝓸𝓶"})]}),e.jsx("div",{className:"footer-section follow",children:e.jsxs("div",{className:"follow-us",children:[e.jsx("h3",{children:"𝓕𝓸𝓵𝓵𝓸𝔀 𝓤𝓼"}),e.jsxs("div",{className:"social-icons",children:[e.jsx("a",{href:"https://www.instagram.com/_taruguardians_/",target:"_blank","aria-label":"YouTube",children:e.jsx("img",{src:"instag.png",alt:"TaruGuardians",style:{width:"30px",height:"auto",display:"block",margin:"0 auto 10px auto"}})}),e.jsx("a",{href:"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in",target:"_blank","aria-label":"Instagram",children:e.jsx("img",{src:"linkden.png",alt:"TaruGuardians",style:{width:"30px",height:"auto",display:"block",margin:"0 auto 10px auto"}})}),e.jsx("a",{href:"https://www.facebook.com/TaruGuardians/",target:"_blank","aria-label":"Twitter",children:e.jsx("img",{src:"facebook.png",alt:"TaruGuardians",style:{width:"30px",height:"auto",display:"block",margin:"0 auto 10px auto"}})}),e.jsx("a",{href:"https://www.youtube.com/@TaruGuardians",target:"_blank","aria-label":"LinkedIn",children:e.jsx("img",{src:"youtube.webp",alt:"TaruGuardians",style:{width:"30px",height:"auto",display:"block",margin:"0 auto 10px auto"}})})]}),e.jsx("p",{children:"𝓢𝓽𝓪𝔂 𝓾𝓹𝓭𝓪𝓽𝓮𝓭 𝔀𝓲𝓽𝓱 𝓸𝓾𝓻 𝓵𝓪𝓽𝓮𝓼𝓽 𝓹𝓸𝓼𝓽𝓼, 𝓮𝓿𝓮𝓷𝓽𝓼, 𝓪𝓷𝓭 𝓦𝓸𝓻𝓴𝓼𝓱𝓸𝓹𝓼!"})]})})]}),e.jsx("hr",{}),e.jsx("div",{className:"footer-bottom",children:e.jsx("p",{children:"© 2025 TaruGuardians. All rights reserved."})})]})]})}const wf=[{kind:"external",src:"https://cdn.tailwindcss.com",type:"text/javascript"},{kind:"external",src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",type:"text/javascript"},{kind:"external",src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",type:"text/javascript"},{kind:"external",src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js",type:"text/javascript"},{kind:"external",src:"https://unpkg.com/aos@2.3.1/dist/aos.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
    // IMPROVED: Device Detection and Redirection
    // Function to check screen size and redirect if necessary
    function checkScreenSize() {
        if (window.innerWidth > 600) {
            (window.__legacyTryNavigate && window.__legacyTryNavigate("TARUGUARDIANS FIRST PAGE.html")) || (window.location.href = "TARUGUARDIANS FIRST PAGE.html");
        }
    }

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);
    // Initial check on load
    window.addEventListener('load', checkScreenSize);
    // NEW: Super Ultra Advanced Premium Pro Max Mouse-based 3D Tilt Effect
    function initMouseBased3DTilt() {
        const tiltElements = document.querySelectorAll('.super-ultra-advanced-3d-tilt');
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const tiltX = (y - centerY) / centerY * 3; // Subtle tilt: max 3deg
                const tiltY = (centerX - x) / centerX * 3; // Subtle tilt: max 3deg
                element.style.transform = \`perspective(1200px) rotateX(\${tiltX}deg) rotateY(\${tiltY}deg) translateZ(15px) scale(1.02)\`;
                element.style.boxShadow = \`0 15px 30px rgba(0, 0, 0, 0.6), 0 0 25px var(--premium-glow-strong)\`;
            });
            element.addEventListener('mouseleave', () => {
                element.style.transform = \`perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)\`;
                element.style.boxShadow = \`0 5px 15px rgba(0, 0, 0, 0.5)\`;
            });
        });
    }
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    // Mobile Menu Toggle - Updated for original navbar
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburger.textContent = mobileMenu.classList.contains('active') ? '✕' : '≡';
        });
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.textContent = '≡';
            });
        });
    }
    // Binary Rain Effect
    function createBinaryRain() {
        const binaryRain = document.getElementById('binaryRain');
        if (!binaryRain) return;
        const digits = ['0', '1'];
        for (let i = 0; i < 30; i++) {
            const digit = document.createElement('div');
            digit.className = 'binary-digit-rain';
            digit.textContent = digits[Math.floor(Math.random() * digits.length)];
            digit.style.left = Math.random() * 100 + '%';
            digit.style.animationDelay = Math.random() * 8 + 's';
            digit.style.animationDuration = (Math.random() * 4 + 6) + 's';
            binaryRain.appendChild(digit);
        }
    }
    // Advanced Binary Matrix Rain
    function createBinaryMatrixRain() {
        const binaryMatrixRain = document.getElementById('binaryMatrixRain');
        if (!binaryMatrixRain) return;
        const digits = ['0', '1'];
        const columns = Math.floor(window.innerWidth / 20);
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'binary-column';
            column.style.left = (i * 20) + 'px';
            // Create multiple digits in each column
            const digitCount = Math.floor(window.innerHeight / 20);
            for (let j = 0; j < digitCount; j++) {
                const digit = document.createElement('div');
                digit.className = 'binary-digit';
                digit.textContent = digits[Math.floor(Math.random() * digits.length)];
                // Random properties for each digit
                const delay = Math.random() * 15;
                const duration = 8 + Math.random() * 12;
                const opacity = 0.3 + Math.random() * 0.6;
                digit.style.animationDelay = delay + 's';
                digit.style.animationDuration = duration + 's';
                digit.style.opacity = opacity;
                // Occasionally highlight a digit
                if (Math.random() < 0.15) {
                    digit.classList.add('highlight');
                }
                column.appendChild(digit);
            }
            binaryMatrixRain.appendChild(column);
        }
    }
    // ULTRA PREMIUM RAIN EFFECT - SUPER ADVANCED
    function createUltraPremiumRain() {
        const rainContainer = document.getElementById('rainContainer');
        if (!rainContainer) return;
        const rainDrops = [];
        const rainSplashes = [];
        const rainStreaks = [];
        // Create rain drops
        for (let i = 0; i < 100; i++) {
            const drop = document.createElement('div');
            drop.className = 'rain-drop';
            drop.style.left = Math.random() * 100 + '%';
            drop.style.top = Math.random() * -100 + 'px';
            drop.style.animationDelay = Math.random() * 5 + 's';
            drop.style.opacity = Math.random() * 0.7 + 0.3;
            rainContainer.appendChild(drop);
            rainDrops.push(drop);
            // Create splash for each drop
            const splash = document.createElement('div');
            splash.className = 'rain-splash';
            splash.style.left = drop.style.left;
            splash.style.top = 'calc(100vh - 20px)';
            splash.style.opacity = '0';
            rainContainer.appendChild(splash);
            rainSplashes.push(splash);
            // Create streaks for some drops
            if (i % 3 === 0) {
                const streak = document.createElement('div');
                streak.className = 'rain-streak';
                streak.style.left = drop.style.left;
                streak.style.top = Math.random() * -100 + 'px';
                streak.style.animationDelay = Math.random() * 3 + 's';
                streak.style.opacity = Math.random() * 0.5 + 0.2;
                rainContainer.appendChild(streak);
                rainStreaks.push(streak);
            }
        }
        rainDrops.forEach((drop, index) => {
            const duration = Math.random() * 2 + 1;
            const delay = Math.random() * 5;
            gsap.to(drop, {
                y: '100vh',
                duration: duration,
                delay: delay,
                ease: 'power1.in',
                repeat: -1,
                onRepeat: function() {
                    // Reset position and create splash
                    gsap.set(drop, { y: '-100px', x: Math.random() * 100 + '%' });
                    // Create splash effect
                    const splash = rainSplashes[index];
                    gsap.set(splash, {
                        x: drop.style.left,
                        opacity: 0.8,
                        scale: 0
                    });
                    gsap.to(splash, {
                        scale: 1,
                        duration: 0.3,
                        ease: 'power2.out',
                        onComplete: function() {
                            gsap.to(splash, {
                                opacity: 0,
                                duration: 0.5,
                                ease: 'power2.in'
                            });
                        }
                    });
                }
            });
        });
        // Animate rain streaks
        rainStreaks.forEach(streak => {
            const duration = Math.random() * 1.5 + 0.5;
            const delay = Math.random() * 3;
            gsap.to(streak, {
                y: '100vh',
                duration: duration,
                delay: delay,
                ease: 'power1.in',
                repeat: -1,
                onRepeat: function() {
                    gsap.set(streak, {
                        y: '-100px',
                        x: Math.random() * 100 + '%',
                        opacity: Math.random() * 0.5 + 0.2
                    });
                }
            });
        });
    }
    // NEW: Static Circular Gallery Functionality - FIXED
    function initStaticCircularGallery() {
        const gallery = document.getElementById('staticCircularGallery');
        if (!gallery) return;
        const images = gallery.querySelectorAll('img');
        const controlsContainer = document.getElementById('staticGalleryControls');
        let currentIndex = 0;
        // Clear existing controls
        if (controlsContainer) {
            controlsContainer.innerHTML = '';
            // Create control dots
            images.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = 'gallery-dot';
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    showImage(index);
                });
                controlsContainer.appendChild(dot);
            });
        }
        // Function to show specific image
        function showImage(index) {
            // Hide all images
            images.forEach(img => img.classList.remove('active'));
            // Show selected image
            images[index].classList.add('active');
            // Update active dot
            if (controlsContainer) {
                document.querySelectorAll('#staticGalleryControls .gallery-dot').forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            }
            currentIndex = index;
        }
        // Auto-rotate images - FIXED
        let galleryInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 2000); // Change image every 2 seconds for faster rotation
        // Clear interval when page is not visible (for performance)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                clearInterval(galleryInterval);
            } else {
                galleryInterval = setInterval(() => {
                    currentIndex = (currentIndex + 1) % images.length;
                    showImage(currentIndex);
                }, 2000);
            }
        });
    }
    // Advanced Content Loading Animation
    function initContentFadeIn() {
        const contentElements = document.querySelectorAll('.content-fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        contentElements.forEach(el => {
            observer.observe(el);
        });
    }
    // Ultra Premium Falling Poster Animation
    function createFallingPoster() {
        const poster = document.createElement('div');
        poster.className = 'falling-poster';
        poster.textContent = 'TaruGuardians\\nTech Club';
        poster.style.left = Math.random() * 80 + 10 + '%';
        document.body.appendChild(poster);
        // Animate falling with rotation
        gsap.to(poster, {
            y: '100vh',
            rotation: Math.random() * 360,
            opacity: 0.8,
            duration: 8,
            ease: 'power1.in',
            onComplete: function() {
                document.body.removeChild(poster);
                // Create next poster after random delay
                setTimeout(createFallingPoster, Math.random() * 10000 + 5000);
            }
        });
    }
    // Initialize all effects after page load
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize mouse-based 3D tilt effect
        initMouseBased3DTilt();
        createBinaryRain();
        createBinaryMatrixRain();
        createUltraPremiumRain();
        initContentFadeIn();
        initStaticCircularGallery();
        // Start falling posters after page loads
        // setTimeout(() => {
        // createFallingPoster();
        // }, 3000);
        // Hide loading screen after page loads
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        }, 1000);
        // Fast card animations - FIXED to work in both scroll directions
        gsap.utils.toArray('.premium-card, .alumni-card').forEach(card => {
            gsap.fromTo(card, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse" // This makes it work in both directions
                }
            });
        });
        // Fast section title animations - FIXED to work in both scroll directions
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.fromTo(title, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play none none reverse" // This makes it work in both directions
                }
            });
        });
    });
    // Optimized scroll performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                // Any scroll-based updates here
                ticking = false;
            });
            ticking = true;
        }
    });
    // Window resize handler
    window.addEventListener('resize', function() {
        // Recreate rain effects on resize for responsiveness
        const binaryMatrixRain = document.getElementById('binaryMatrixRain');
        if (binaryMatrixRain) {
            binaryMatrixRain.innerHTML = '';
            createBinaryMatrixRain();
        }
    });
`},{kind:"inline",type:"text/javascript",body:`
// === RECRUITMENT FORM FUNCTIONS FOR MOBILE ===
function openRecruitmentForm() {
    document.getElementById('recruitmentModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    resetMobileForm();
}

function closeRecruitmentModal() {
    document.getElementById('recruitmentModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function resetMobileForm() {
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'none';
    document.getElementById('stepSuccess').style.display = 'none';
    document.getElementById('formProgress').style.width = '33%';
    
    document.getElementById('recName').value = '';
    document.getElementById('recEmail').value = '';
    document.getElementById('recPhone').value = '';
    document.getElementById('recWhatsapp').value = '';
    document.getElementById('recRoll').value = '';
    document.getElementById('recDepartment').value = '';
    document.getElementById('recYear').value = '';
    document.getElementById('recWhyJoin').value = '';
    document.querySelectorAll('input[name="recPosition"]').forEach(r => r.checked = false);
    document.getElementById('roleSpecificFields').innerHTML = '';
}

function nextStep(step) {
    if (step === 2 && !validateStep1()) return;
    if (step === 3 && !validateStep2()) return;
    
    document.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
    document.getElementById('step' + step).style.display = 'block';
    
    const progress = step === 4 ? 100 : (step - 1) * 33;
    document.getElementById('formProgress').style.width = progress + '%';
    
    if (step === 3) {
        renderRoleSpecificFieldsMobile();
    }
}

function validateStep1() {
    const name = document.getElementById('recName').value.trim();
    const email = document.getElementById('recEmail').value.trim();
    const phone = document.getElementById('recPhone').value.trim();
    const whatsapp = document.getElementById('recWhatsapp').value.trim();
    const roll = document.getElementById('recRoll').value.trim();
    const department = document.getElementById('recDepartment').value;
    const year = document.getElementById('recYear').value;
    
    if (!name || !email || !phone || !whatsapp || !roll || !department || !year) {
        alert('Please fill in all required fields');
        return false;
    }
    if (!email.includes('@')) {
        alert('Please enter a valid email');
        return false;
    }
    return true;
}

function validateStep2() {
    const position = document.querySelector('input[name="recPosition"]:checked');
    if (!position) {
        alert('Please select a role');
        return false;
    }
    return true;
}

function renderRoleSpecificFieldsMobile() {
    const position = document.querySelector('input[name="recPosition"]:checked').value;
    const container = document.getElementById('roleSpecificFields');
    let html = '';
    
    if (position === 'Web/App Developer') {
        html = \`
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">Programming Languages *</label>
                <input type="text" id="recLanguages" placeholder="e.g., Python, JavaScript..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem;">
            </div>
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">Projects (Links)</label>
                <textarea id="recProjects" rows="2" placeholder="GitHub/Live links..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem; resize: vertical;"></textarea>
            </div>
        \`;
    } else if (position === 'Photographer/Videographer') {
        html = \`
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">Camera/Equipment *</label>
                <input type="text" id="recCamera" placeholder="DSLR, Smartphone..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem;">
            </div>
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">Portfolio (Links)</label>
                <input type="text" id="recPortfolio" placeholder="Drive/Behance links..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem;">
            </div>
        \`;
    } else if (position === 'Video Editor') {
        html = \`
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">Editing Software *</label>
                <input type="text" id="recSoftware" placeholder="Premiere Pro, DaVinci..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem;">
            </div>
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">Video Samples (Links)</label>
                <input type="text" id="recVideoSamples" placeholder="YouTube/Vimeo links..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem;">
            </div>
        \`;
    } else if (position === 'Graphics Designer') {
        html = \`
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">Design Tools *</label>
                <input type="text" id="recDesignTools" placeholder="Photoshop, Figma..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem;">
            </div>
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">Portfolio (Links)</label>
                <input type="text" id="recDesignPortfolio" placeholder="Behance/Dribbble links..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem;">
            </div>
        \`;
    } else if (position === 'Content Writer') {
        html = \`
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">Writing Samples (Links)</label>
                <input type="text" id="recWritingSamples" placeholder="Medium/Blog links..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem;">
            </div>
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">Topics you can write about</label>
                <input type="text" id="recTopics" placeholder="Tech, Lifestyle..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem;">
            </div>
        \`;
    } else if (position === 'Public Relation') {
        html = \`
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">Social Media Handles</label>
                <input type="text" id="recSocialHandles" placeholder="Instagram/LinkedIn..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem;">
            </div>
            <div style="margin-bottom: 12px;">
                <label style="color: rgba(255,255,255,0.8); font-size: 0.85rem; margin-bottom: 6px; display: block;">PR Experience</label>
                <textarea id="recPRExperience" rows="2" placeholder="Describe your experience..." style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; color: #fff; font-size: 0.95rem; resize: vertical;"></textarea>
            </div>
        \`;
    }
    
    container.innerHTML = html;
}

async function submitRecruitment() {
    const whyJoin = document.getElementById('recWhyJoin').value.trim();
    if (!whyJoin) {
        alert('Please tell us why you want to join TaruGuardians');
        return;
    }
    
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    
    const position = document.querySelector('input[name="recPosition"]:checked').value;
    const roleSpecificData = {};
    
    if (position === 'Web/App Developer') {
        roleSpecificData.languages = document.getElementById('recLanguages').value;
        roleSpecificData.projects = document.getElementById('recProjects').value;
        } else if (position === 'Photographer/Videographer') {
            roleSpecificData.camera = document.getElementById('recCamera').value;
            roleSpecificData.portfolio = document.getElementById('recPortfolio').value;
        } else if (position === 'Video Editor') {
            roleSpecificData.software = document.getElementById('recSoftware').value;
            roleSpecificData.videoSamples = document.getElementById('recVideoSamples').value;
        } else if (position === 'Graphics Designer') {
            roleSpecificData.tools = document.getElementById('recDesignTools').value;
            roleSpecificData.portfolio = document.getElementById('recDesignPortfolio').value;
        } else if (position === 'Content Writer') {
            roleSpecificData.samples = document.getElementById('recWritingSamples').value;
            roleSpecificData.topics = document.getElementById('recTopics').value;
        } else if (position === 'Public Relation') {
            roleSpecificData.socialHandles = document.getElementById('recSocialHandles').value;
            roleSpecificData.experience = document.getElementById('recPRExperience').value;
        }
        
        const formData = new FormData();
        formData.append('name', document.getElementById('recName').value.trim());
        formData.append('email', document.getElementById('recEmail').value.trim());
        formData.append('phone', document.getElementById('recPhone').value.trim());
        formData.append('whatsapp', document.getElementById('recWhatsapp').value.trim());
        formData.append('classRoll', document.getElementById('recRoll').value.trim());
        formData.append('department', document.getElementById('recDepartment').value);
        formData.append('year', document.getElementById('recYear').value);
        formData.append('position', position);
        formData.append('whyJoin', whyJoin);
        formData.append('roleSpecificData', JSON.stringify(roleSpecificData));
        
        try {
            const response = await fetch('/api/recruitment/apply', {
                method: 'POST',
                body: formData
            });
        
        const data = await response.json();
        
        if (data.success) {
            document.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
            document.getElementById('stepSuccess').style.display = 'block';
            document.getElementById('formProgress').style.width = '100%';
        } else {
            alert(data.message || 'Something went wrong. Please try again.');
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Submit <i class="fas fa-paper-plane"></i>';
        }
    } catch (error) {
        console.error('Submission error:', error);
        alert('Network error. Please try again.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit <i class="fas fa-paper-plane"></i>';
    }
}

document.getElementById('recruitmentModal').addEventListener('click', function(e) {
    if (e.target === this) closeRecruitmentModal();
});
`},{kind:"inline",type:"text/javascript",body:`
    
    function updateBottomNav() {
        let current = '';
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = sectionId;
                }
            }
        });
        bottomNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateBottomNav);
    updateBottomNav();
`}],Oo=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function Nf(n){for(const t of wf)if(t.kind==="external"){if(Oo.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),Oo.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function Sf(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const Uo="MobileHome";function kf(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},Nf(Uo);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{Sf(Uo),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-MobileHome",children:[e.jsxs("div",{className:"premium-coding-rain-bg",children:[e.jsx("div",{className:"binary-matrix-rain",id:"binaryMatrixRain"}),e.jsx("div",{className:"tech-grid-overlay"})]}),e.jsx("div",{className:"rain-container",id:"rainContainer"}),e.jsxs("header",{className:"modern-navbar",children:[e.jsxs("div",{className:"navbar-container",children:[e.jsxs("div",{className:"navbar-logo premium-tooltip","data-tooltip":"Welcome to TaruGuardians",children:[e.jsx("span",{className:"logo-arrow left",children:"<"}),e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians Logo",loading:"eager"}),e.jsx("span",{children:"TaruGuardians"}),e.jsx("span",{className:"logo-arrow right",children:">"})]}),e.jsx("nav",{className:"navbar-center",children:e.jsxs("div",{className:"navbar-links",children:[e.jsx("a",{href:"#home",className:"active fade-in-up",children:"Home"}),e.jsx("a",{href:"#instagram",className:"slide-in-left",children:"Instagram Post"}),e.jsx("a",{href:"#events",className:"slide-in-right",children:"Events"}),e.jsx("a",{href:"#roadmap",className:"bounce-in",children:"Tech roadmap"}),e.jsx("a",{href:"#team",className:"tada",children:"Team Members"}),e.jsx("a",{href:"#alumni",className:"tada",children:"Alumni"})]})}),e.jsx(x,{to:"/auth",className:"auth-login-btn",style:{background:"linear-gradient(135deg,#D4AF37,#B8962E)",color:"#000",padding:"8px 16px",borderRadius:"20px",fontSize:"13px",fontWeight:"700",textDecoration:"none",marginLeft:"8px"},children:"Login"}),e.jsx("div",{className:"auth-user-menu",style:{display:"none",alignItems:"center",gap:"8px",marginLeft:"8px"},children:e.jsx(x,{to:"/dashboard",style:{background:"var(--premium-gradient)",color:"#000",padding:"8px 14px",borderRadius:"20px",fontSize:"12px",fontWeight:"700",textDecoration:"none"},children:"Dashboard"})}),e.jsx("div",{className:"hamburger",children:"≡"})]}),e.jsxs("div",{className:"mobile-menu",children:[e.jsx("a",{href:"#home",children:"Home"}),e.jsx("a",{href:"#instagram",children:"Our Instagram Post"}),e.jsx("a",{href:"#events",children:"Events"}),e.jsx("a",{href:"#roadmap",children:"Tech roadmap"}),e.jsx("a",{href:"#team",children:"Team Members"}),e.jsx("a",{href:"#alumni",children:"Alumni"}),e.jsx(x,{to:"/auth",className:"auth-login-btn",style:{color:"var(--premium-gold)",fontWeight:"700"},children:"Login / Sign Up"}),e.jsx(x,{to:"/dashboard",className:"auth-user-menu",style:{display:"none",color:"var(--premium-gold)",fontWeight:"700"},children:"My Dashboard"})]})]}),e.jsxs("section",{className:"hero-scene",id:"home",children:[e.jsxs("div",{className:"floating-tech-elements",children:[e.jsx("div",{className:"tech-element",style:{width:"80px",height:"80px",top:"20%",left:"10%",animationDelay:"0s"}}),e.jsx("div",{className:"tech-element",style:{width:"100px",height:"100px",top:"60%",left:"80%",animationDelay:"1s"}}),e.jsx("div",{className:"tech-element",style:{width:"70px",height:"70px",top:"80%",left:"20%",animationDelay:"2s"}}),e.jsx("div",{className:"tech-element",style:{width:"90px",height:"90px",top:"30%",left:"70%",animationDelay:"3s"}})]}),e.jsxs("div",{className:"premium-circular-elements",children:[e.jsx("div",{className:"circular-element"}),e.jsx("div",{className:"circular-element"}),e.jsx("div",{className:"circular-element"}),e.jsx("div",{className:"circular-element"})]}),e.jsx("div",{className:"binary-rain",id:"binaryRain"}),e.jsx("div",{className:"tech-orb",style:{top:"20%",left:"20%"}}),e.jsx("div",{className:"tech-orb",style:{top:"70%",left:"70%"}}),e.jsxs("div",{className:"holographic-logo",children:[e.jsx("h1",{className:"holographic-title",children:"TARUGUARDIANS"}),e.jsx("p",{className:"holographic-subtitle",children:"Where Code Meets Creativity"}),e.jsx("p",{className:"holographic-subtitle",children:"The Fusion of 95% Tech, 5% Non-Tech"}),e.jsx("div",{className:"hero-cta",children:e.jsx(x,{to:"/events",className:"premium-btn",children:"Explore Events"})}),e.jsxs("div",{style:{textAlign:"center",marginTop:"30px"},children:[e.jsx("h3",{style:{color:"var(--premium-gold)",fontSize:"1.5rem",fontWeight:"700",marginBottom:"10px"},children:"Be a part of TaruGuardians"}),e.jsx("p",{style:{color:"var(--premium-white)",fontSize:"0.9rem",marginBottom:"15px",opacity:"0.8"},children:"Join TaruGuardians to learn, grow, and lead."}),e.jsx("button",{"data-legacy-onclick":"window.location.href='recruitment.html'",style:{background:"linear-gradient(135deg, var(--premium-gold), var(--premium-gold-light))",border:"none",color:"#000",fontSize:"1rem",fontWeight:"700",padding:"14px 35px",borderRadius:"30px",cursor:"pointer",boxShadow:"0 4px 20px var(--premium-shadow)"},children:"Apply Now →"})]})]})]}),e.jsxs("section",{className:"content-section",id:"instagram",children:[e.jsx("h2",{className:"section-title",children:"Our Instagram Post"}),e.jsxs("div",{className:"responsive-grid",children:[e.jsx(x,{to:"/instagram",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"post%204.png",alt:"Gandhi Jayanti",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Children's Day"}),e.jsx("p",{className:"card-content",children:"TaruGuardians wish every child a happy children's day"})]})}),e.jsx(x,{to:"/instagram",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"post%203.png",alt:"Gandhi Jayanti",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Without a Guru, none can cross over"}),e.jsx("p",{className:"card-content",children:"TaruGuardians wish everyone a happy Guru Nanak jayanti ✨"})]})}),e.jsx(x,{to:"/instagram",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"post 2`",alt:"Gandhi Jayanti",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Diwali Post"}),e.jsx("p",{className:"card-content",children:"Team TaruGuardians wish everyone a very Happy and Joyous Diwali 🪔💛!"})]})}),e.jsx(x,{to:"/instagram",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"post%201.png",alt:"Gandhi Jayanti",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Dhanteras Post"}),e.jsx("p",{className:"card-content",children:"Team TaruGuardians wish everyone a bright , blessed and blissful Dhanteras 🙌🏻."})]})}),e.jsx(x,{to:"/instagram",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"r7.png",alt:"From circuits to saplings",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"From circuits to saplings"}),e.jsx("p",{className:"card-content",children:"Join TaruGuardians and start your journey of coding, creating, and conserving."})]})}),e.jsx(x,{to:"/instagram",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"r6.png",alt:"Touching Skies with Unwavering Glory",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Touching Skies with Unwavering Glory"}),e.jsx("p",{className:"card-content",children:"Team TaruGuardians extends its heartfelt gratitude to the heroes of the Indian Air Force."})]})}),e.jsx(x,{to:"/instagram",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"r5.png",alt:"धर्मो जयति नाधर्मः",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"धर्मो जयति नाधर्मः"}),e.jsx("p",{className:"card-content",children:"Team TaruGuardians wishes everyone a Happy Dussehra."})]})})]})]}),e.jsxs("section",{className:"content-section",id:"events",children:[e.jsx("h2",{className:"section-title",children:"Events"}),e.jsxs("div",{className:"responsive-grid",children:[e.jsx(x,{to:"/events",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"Event%202.png",alt:"Abhivyakti(hindi diwas) 2025",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Abhivyakti 2025"}),e.jsx("p",{className:"card-content",children:"TaruGuardians bringing an offline non-technical event about communication and fun."}),e.jsx("p",{className:"card-content",style:{color:"var(--premium-gold)",marginTop:"0.5rem"},children:"Date: September 13, 2025"})]})}),e.jsx(x,{to:"/events",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"Event%201.png",alt:"Python Workshop 2025",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Python Workshop"}),e.jsx("p",{className:"card-content",children:"Step into the world where ideas turn into code!"}),e.jsx("p",{className:"card-content",style:{color:"var(--premium-gold)",marginTop:"0.5rem"},children:"Date: August 17, 2025"})]})}),e.jsx(x,{to:"/events",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"Gate.jpg",alt:"GATE & Placement Talk 2025",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"GATE & Placement Talk"}),e.jsx("p",{className:"card-content",children:"Crack GATE & Placements with Chandan Jha (AVP, GFG)."}),e.jsx("p",{className:"card-content",style:{color:"var(--premium-gold)",marginTop:"0.5rem"},children:"Date: March 23, 2025"})]})}),e.jsx(x,{to:"/events",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"FIFMAIMAGE.jpg",alt:"FIGMA CRAFT 2.0 event 2025",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"FIGMA CRAFT 2.0"}),e.jsx("p",{className:"card-content",children:"Design, Collaborate, Create by TaruGuardians."}),e.jsx("p",{className:"card-content",style:{color:"var(--premium-gold)",marginTop:"0.5rem"},children:"Date: March 1st & 2nd, 2025"})]})})]})]}),e.jsxs("section",{className:"content-section",id:"roadmap",children:[e.jsx("h2",{className:"section-title",children:"Tech Roadmap"}),e.jsxs("div",{className:"responsive-grid",children:[e.jsx(x,{to:"/roadmap",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"cp2.jpg",alt:"Competitive Programming",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Competitive Programming"}),e.jsx("p",{className:"card-content",children:"Roadmap By TaruGuardians team for Competitive Programming. Master algorithms, data structures, and problem-solving techniques."})]})}),e.jsx(x,{to:"/roadmap",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"cp.jpg",alt:"Web Development",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Web Development"}),e.jsx("p",{className:"card-content",children:"Roadmap for cracking tech placements in Web Development. From HTML/CSS to advanced frameworks and deployment."})]})}),e.jsx(x,{to:"/roadmap",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"ios.jpg",alt:"iOS Development",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"iOS Development"}),e.jsx("p",{className:"card-content",children:"Roadmap By TaruGuardians team for iOS Development. Learn Swift, UIKit, SwiftUI and build amazing iOS applications."})]})}),e.jsx(x,{to:"/roadmap",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"code.jpg",alt:"Blockchain Development",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Blockchain Development"}),e.jsx("p",{className:"card-content",children:"Roadmap By TaruGuardians team for Blockchain Development. Explore smart contracts, DApps, and decentralized technologies."})]})}),e.jsx(x,{to:"/roadmap",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"gamedeveloper2.jpg",alt:"Game Development",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Game Development"}),e.jsx("p",{className:"card-content",children:"Roadmap By TaruGuardians team for Game Development. Create immersive gaming experiences with Unity, Unreal Engine, and more."})]})}),e.jsx(x,{to:"/roadmap",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"cyber%20security.jpg",alt:"Cybersecurity",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Cybersecurity"}),e.jsx("p",{className:"card-content",children:"Roadmap By TaruGuardians team for Cybersecurity. Learn ethical hacking, network security, and protection strategies."})]})})]})]}),e.jsxs("section",{className:"content-section",id:"team",children:[e.jsx("h2",{className:"section-title",children:"Team Members"}),e.jsxs("div",{className:"responsive-grid",children:[e.jsx(x,{to:"/alumni",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"New President.jpg",alt:"Prakash Kumar",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Prakash Kumar"}),e.jsx("p",{className:"card-content",children:"President"})]})}),e.jsx(x,{to:"/alumni",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"new2vicepresident.png",alt:"Mukul Anand",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Mukul Anand"}),e.jsx("p",{className:"card-content",children:"Vice President"})]})}),e.jsx(x,{to:"/alumni",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"treasurer.png",alt:"Pushkar Aditya",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Pushkar Aditya"}),e.jsx("p",{className:"card-content",children:"Treasurer"})]})}),e.jsx(x,{to:"/alumni",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"techhead.png",alt:"Aashish Kishore",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Aashish Kishore"}),e.jsx("p",{className:"card-content",children:"Tech Head"})]})}),e.jsx(x,{to:"/alumni",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"newjs.png",alt:"Akshat Thakur",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Akshat Thakur"}),e.jsx("p",{className:"card-content",children:"Joint Secretary"})]})}),e.jsx(x,{to:"/alumni",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"adminstrative.png",alt:"Ritik Kumar",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Ritik Kumar"}),e.jsx("p",{className:"card-content",children:"Administrative Head"})]})}),e.jsx(x,{to:"/alumni",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"premium-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"card-image-container",children:e.jsx("img",{src:"newjs2.png",alt:"Kriti Divyansha",className:"card-image"})}),e.jsx("h3",{className:"card-title",children:"Kriti Divyansha"}),e.jsx("p",{className:"card-content",children:"Joint Secretary"})]})})]})]}),e.jsxs("section",{className:"content-section",id:"alumni",children:[e.jsx("h2",{className:"section-title",children:"Our Distinguished Alumni"}),e.jsxs("div",{className:"alumni-grid",children:[e.jsx(x,{to:"/alumni",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"alumni-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"alumni-image-container",children:e.jsx("img",{src:"rohan%20kumar%20singh.jpg",alt:"Rohan Kumar Singh",className:"alumni-image"})}),e.jsx("h3",{className:"alumni-name",children:"Rohan Kumar Singh"}),e.jsx("p",{className:"alumni-role",children:"President"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2025"})]})}),e.jsx(x,{to:"/alumni",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"alumni-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"alumni-image-container",children:e.jsx("img",{src:"anand%20kumar%20jha.jpg",alt:"Anand Kumar Jha",className:"alumni-image"})}),e.jsx("h3",{className:"alumni-name",children:"Anand Kumar Jha"}),e.jsx("p",{className:"alumni-role",children:"Vice President"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2025"})]})}),e.jsx(x,{to:"/alumni",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"alumni-card content-fade-in super-ultra-advanced-3d-tilt",children:[e.jsx("div",{className:"alumni-image-container",children:e.jsx("img",{src:"utsav%20raj.png",alt:"Utsav Raj",className:"alumni-image"})}),e.jsx("h3",{className:"alumni-name",children:"Utsav Raj"}),e.jsx("p",{className:"alumni-role",children:"PR Head"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2025"})]})})]})]}),e.jsxs("footer",{className:"footer",children:[e.jsxs("div",{className:"footer-logo-container",children:[e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians Logo",loading:"eager"}),e.jsx("h3",{children:"(Turn Passion Into Purpose)"})]}),e.jsxs("div",{className:"footer-columns",children:[e.jsxs("div",{className:"footer-column",children:[e.jsx("h2",{children:"TaruGuardians"}),e.jsx("p",{children:"Just as trees grow with deep roots, we grow with deep tech. From seeds of code to canopies of change — building a greener, smarter future."}),e.jsx("p",{children:"(ROOTED IN NATURE, DRIVEN BY TECH)"})]}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h3",{children:"Contact"}),e.jsx("p",{children:"Taru.Guardians@gmail.com"})]}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h3",{children:"Follow Us"}),e.jsxs("div",{className:"social-icons",children:[e.jsx("a",{href:"#",children:e.jsx("img",{src:"instag.png",alt:"Instagram",loading:"eager"})}),e.jsx("a",{href:"#",children:e.jsx("img",{src:"linkden.png",alt:"LinkedIn",loading:"eager"})}),e.jsx("a",{href:"#",children:e.jsx("img",{src:"facebook.png",alt:"Facebook",loading:"eager"})}),e.jsx("a",{href:"#",children:e.jsx("img",{src:"youtube.webp",alt:"YouTube",loading:"eager"})})]}),e.jsx("em",{children:"Stay updated with our latest posts, events, and workshops"})]})]}),e.jsx("small",{children:"© 2025 TaruGuardians. All rights reserved."})]}),e.jsx("div",{id:"recruitmentModal",style:{display:"none",position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(0,0,0,0.95)",zIndex:"10000",justifyContent:"center",alignItems:"flex-start",padding:"20px",overflowY:"auto"},children:e.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a2e, #16213e)",borderRadius:"20px",maxWidth:"500px",width:"100%",maxHeight:"90vh",overflowY:"auto",position:"relative",border:"1px solid rgba(212,175,55,0.3)",margin:"auto"},children:[e.jsx("button",{"data-legacy-onclick":"closeRecruitmentModal()",style:{position:"absolute",top:"15px",right:"15px",background:"none",border:"none",color:"var(--premium-gold)",fontSize:"28px",cursor:"pointer",zIndex:"10"},children:"×"}),e.jsx("div",{style:{height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",margin:"0"},children:e.jsx("div",{id:"formProgress",style:{height:"100%",background:"linear-gradient(90deg, var(--premium-gold), var(--premium-gold-light))",width:"33%",transition:"width 0.3s ease",borderRadius:"2px"}})}),e.jsxs("div",{style:{padding:"25px"},children:[e.jsxs("div",{id:"step1",className:"form-step",children:[e.jsxs("h2",{style:{color:"var(--premium-gold)",fontSize:"1.3rem",marginBottom:"20px",textAlign:"center"},children:["Join ",e.jsx("span",{style:{color:"var(--premium-gold-light)"},children:"TaruGuardians"})]}),e.jsxs("div",{style:{display:"grid",gap:"12px"},children:[e.jsx("input",{type:"text",id:"recName",placeholder:"Full Name *",style:{width:"100%",padding:"12px 15px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,175,55,0.2)",borderRadius:"10px",color:"#fff",fontSize:"0.95rem",outline:"none"}}),e.jsx("input",{type:"email",id:"recEmail",placeholder:"Email Address *",style:{width:"100%",padding:"12px 15px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,175,55,0.2)",borderRadius:"10px",color:"#fff",fontSize:"0.95rem",outline:"none"}}),e.jsx("input",{type:"tel",id:"recPhone",placeholder:"Phone Number *",style:{width:"100%",padding:"12px 15px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,175,55,0.2)",borderRadius:"10px",color:"#fff",fontSize:"0.95rem",outline:"none"}}),e.jsx("input",{type:"text",id:"recWhatsapp",placeholder:"WhatsApp Number *",style:{width:"100%",padding:"12px 15px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,175,55,0.2)",borderRadius:"10px",color:"#fff",fontSize:"0.95rem",outline:"none"}}),e.jsx("input",{type:"text",id:"recRoll",placeholder:"Class Roll Number *",style:{width:"100%",padding:"12px 15px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,175,55,0.2)",borderRadius:"10px",color:"#fff",fontSize:"0.95rem",outline:"none"}}),e.jsxs("select",{id:"recDepartment",style:{width:"100%",padding:"12px 15px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,175,55,0.2)",borderRadius:"10px",color:"#fff",fontSize:"0.95rem",outline:"none"},children:[e.jsx("option",{value:!0,children:"Select Department *"}),e.jsx("option",{value:"CSE",children:"Computer Science & Engineering"}),e.jsx("option",{value:"IT",children:"Information Technology"}),e.jsx("option",{value:"ECE",children:"Electronics & Communication"}),e.jsx("option",{value:"EE",children:"Electrical Engineering"}),e.jsx("option",{value:"ME",children:"Mechanical Engineering"}),e.jsx("option",{value:"CE",children:"Civil Engineering"}),e.jsx("option",{value:"Other",children:"Other"})]}),e.jsxs("select",{id:"recYear",style:{width:"100%",padding:"12px 15px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,175,55,0.2)",borderRadius:"10px",color:"#fff",fontSize:"0.95rem",outline:"none"},children:[e.jsx("option",{value:!0,children:"Select Year *"}),e.jsx("option",{value:"1st",children:"1st Year"}),e.jsx("option",{value:"2nd",children:"2nd Year"}),e.jsx("option",{value:"3rd",children:"3rd Year"}),e.jsx("option",{value:"4th",children:"4th Year"})]})]}),e.jsxs("button",{"data-legacy-onclick":"nextStep(2)",style:{width:"100%",marginTop:"18px",background:"linear-gradient(135deg, var(--premium-gold), var(--premium-gold-light))",color:"#000",border:"none",padding:"12px",fontSize:"0.95rem",fontWeight:"600",borderRadius:"10px",cursor:"pointer"},children:["Next ",e.jsx("i",{className:"fas fa-arrow-right"})]})]}),e.jsxs("div",{id:"step2",className:"form-step",style:{display:"none"},children:[e.jsxs("h2",{style:{color:"var(--premium-gold)",fontSize:"1.3rem",marginBottom:"20px",textAlign:"center"},children:["Choose Your ",e.jsx("span",{style:{color:"var(--premium-gold-light)"},children:"Role"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px"},children:[e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(212,175,55,0.2)",borderRadius:"12px",padding:"12px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Public Relation",style:{display:"none"}}),e.jsx("i",{className:"fas fa-bullhorn",style:{fontSize:"1.3rem",color:"var(--premium-gold)",marginBottom:"6px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.8rem",fontWeight:"500"},children:"PR"})]}),e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(212,175,55,0.2)",borderRadius:"12px",padding:"12px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Web/App Developer",style:{display:"none"}}),e.jsx("i",{className:"fas fa-code",style:{fontSize:"1.3rem",color:"var(--premium-gold)",marginBottom:"6px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.8rem",fontWeight:"500"},children:"Developer"})]}),e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(212,175,55,0.2)",borderRadius:"12px",padding:"12px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Photographer/Videographer",style:{display:"none"}}),e.jsx("i",{className:"fas fa-camera",style:{fontSize:"1.3rem",color:"var(--premium-gold)",marginBottom:"6px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.8rem",fontWeight:"500"},children:"Photo"})]}),e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(212,175,55,0.2)",borderRadius:"12px",padding:"12px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Video Editor",style:{display:"none"}}),e.jsx("i",{className:"fas fa-video",style:{fontSize:"1.3rem",color:"var(--premium-gold)",marginBottom:"6px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.8rem",fontWeight:"500"},children:"Video"})]}),e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(212,175,55,0.2)",borderRadius:"12px",padding:"12px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Graphics Designer",style:{display:"none"}}),e.jsx("i",{className:"fas fa-paint-brush",style:{fontSize:"1.3rem",color:"var(--premium-gold)",marginBottom:"6px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.8rem",fontWeight:"500"},children:"Designer"})]}),e.jsxs("label",{className:"role-option",style:{background:"rgba(255,255,255,0.05)",border:"2px solid rgba(212,175,55,0.2)",borderRadius:"12px",padding:"12px",cursor:"pointer",transition:"all 0.3s",textAlign:"center"},children:[e.jsx("input",{type:"radio",name:"recPosition",value:"Content Writer",style:{display:"none"}}),e.jsx("i",{className:"fas fa-pen",style:{fontSize:"1.3rem",color:"var(--premium-gold)",marginBottom:"6px"}}),e.jsx("div",{style:{color:"#fff",fontSize:"0.8rem",fontWeight:"500"},children:"Writer"})]})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"18px"},children:[e.jsxs("button",{"data-legacy-onclick":"nextStep(1)",style:{flex:"1",background:"rgba(255,255,255,0.1)",color:"#fff",border:"1px solid rgba(212,175,55,0.3)",padding:"12px",fontSize:"0.95rem",borderRadius:"10px",cursor:"pointer"},children:[e.jsx("i",{className:"fas fa-arrow-left"})," Back"]}),e.jsxs("button",{"data-legacy-onclick":"nextStep(3)",style:{flex:"1",background:"linear-gradient(135deg, var(--premium-gold), var(--premium-gold-light))",color:"#000",border:"none",padding:"12px",fontSize:"0.95rem",fontWeight:"600",borderRadius:"10px",cursor:"pointer"},children:["Next ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]}),e.jsxs("div",{id:"step3",className:"form-step",style:{display:"none"},children:[e.jsxs("h2",{style:{color:"var(--premium-gold)",fontSize:"1.3rem",marginBottom:"20px",textAlign:"center"},children:["Tell Us ",e.jsx("span",{style:{color:"var(--premium-gold-light)"},children:"More"})]}),e.jsx("div",{id:"roleSpecificFields"}),e.jsxs("div",{style:{marginTop:"12px"},children:[e.jsx("label",{style:{color:"rgba(255,255,255,0.8)",fontSize:"0.85rem",marginBottom:"6px",display:"block"},children:"Why do you want to join TaruGuardians? *"}),e.jsx("textarea",{id:"recWhyJoin",rows:"3",placeholder:"Share your motivation...",style:{width:"100%",padding:"12px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,175,55,0.2)",borderRadius:"10px",color:"#fff",fontSize:"0.95rem",outline:"none",resize:"vertical"}})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"18px"},children:[e.jsxs("button",{"data-legacy-onclick":"nextStep(2)",style:{flex:"1",background:"rgba(255,255,255,0.1)",color:"#fff",border:"1px solid rgba(212,175,55,0.3)",padding:"12px",fontSize:"0.95rem",borderRadius:"10px",cursor:"pointer"},children:[e.jsx("i",{className:"fas fa-arrow-left"})," Back"]}),e.jsxs("button",{"data-legacy-onclick":"submitRecruitment()",id:"submitBtn",style:{flex:"1",background:"linear-gradient(135deg, var(--premium-gold), var(--premium-gold-light))",color:"#000",border:"none",padding:"12px",fontSize:"0.95rem",fontWeight:"600",borderRadius:"10px",cursor:"pointer"},children:["Submit ",e.jsx("i",{className:"fas fa-paper-plane"})]})]})]}),e.jsxs("div",{id:"stepSuccess",className:"form-step",style:{display:"none",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"3.5rem",marginBottom:"15px"},children:"🎉"}),e.jsx("h2",{style:{color:"var(--premium-gold)",fontSize:"1.5rem",marginBottom:"12px"},children:"Application Submitted!"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.8)",marginBottom:"20px",fontSize:"0.9rem"},children:"Thank you for applying to TaruGuardians. We'll review your application soon."}),e.jsxs("div",{style:{background:"rgba(212,175,55,0.1)",border:"1px solid rgba(212,175,55,0.3)",borderRadius:"12px",padding:"15px",marginBottom:"18px"},children:[e.jsx("p",{style:{color:"var(--premium-gold)",fontWeight:"600",marginBottom:"8px",fontSize:"0.9rem"},children:"Join our WhatsApp Community"}),e.jsxs("a",{href:"https://chat.whatsapp.com/IKUt4M5NcHVKYyoTezoJYi",target:"_blank",style:{color:"#000",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"8px",background:"#25D366",padding:"10px 18px",borderRadius:"25px",fontWeight:"600",fontSize:"0.85rem"},children:[e.jsx("i",{className:"fab fa-whatsapp"})," Join Group"]})]}),e.jsx("button",{"data-legacy-onclick":"closeRecruitmentModal()",style:{background:"linear-gradient(135deg, var(--premium-gold), var(--premium-gold-light))",color:"#000",border:"none",padding:"10px 25px",fontSize:"0.95rem",fontWeight:"600",borderRadius:"25px",cursor:"pointer"},children:"Done"})]})]})]})})]})}const Ef=[{kind:"external",src:"https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js",type:"text/javascript"},{kind:"external",src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",type:"text/javascript"},{kind:"external",src:"https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js",type:"text/javascript"},{kind:"external",src:"https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
        // Firebase Configuration for TaruGuardians
        const firebaseConfig = {
            apiKey: "AIzaSyAWdW4_LQLjXBEcjmkckO51BW7AnZAmYcY",
            authDomain: "taruguardians-489fd.firebaseapp.com",
            projectId: "taruguardians-489fd",
            storageBucket: "taruguardians-489fd.firebasestorage.app",
            messagingSenderId: "1093933233137",
            appId: "1:1093933233137:web:61c81f04c1e41407edca50",
            measurementId: "G-38NYZ0WHVN"
        };

        // Initialize Firebase
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            window.googleProvider = new firebase.auth.GoogleAuthProvider();
            console.log('Firebase initialized successfully');
        } catch (error) {
            console.error('Firebase initialization error:', error);
            // Force hide loading screen on error
            setTimeout(() => {
                const loading = document.getElementById('loadingScreen');
                if (loading) loading.style.display = 'none';
            }, 1000);
        }
    `},{kind:"external",src:"frontend-auth.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
        /* ============================================================
           LEGENDARY ANIMATION ENGINE
           Ultra Premium Interactive Effects System
           ============================================================ */

        // === API Configuration ===
        const API_BASE = 'https://backend-wyab.onrender.com/api';

        // === Loading Screen ===
        // Force hide after 3 seconds no matter what
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                loadingScreen.classList.add('hide');
                loadingScreen.style.display = 'none';
            }
        }, 3000);

        window.addEventListener('load', () => {
            setTimeout(() => {
                const loadingScreen = document.getElementById('loadingScreen');
                if (loadingScreen) {
                    loadingScreen.classList.add('hide');
                    loadingScreen.style.display = 'none';
                }
            }, 1500);

            // Check for Firebase redirect result
            if (typeof firebase !== 'undefined' && typeof firebase.auth !== 'undefined') {
                console.log('Checking for Firebase redirect result...');
                firebase.auth().getRedirectResult()
                    .then((result) => {
                        console.log('Redirect result:', result);
                        if (result && result.user) {
                            console.log('User from redirect:', result.user);
                            handleFirebaseRedirectSuccess(result);
                        } else {
                            console.log('No user in redirect result');
                            googleLoginInProgress = false;
                        }
                    })
                    .catch((error) => {
                        console.error('Redirect result error:', error);
                        showNotification('Authentication error: ' + error.message, 'error');
                        if (error.code !== 'auth/cancelled-popup-request') {
                            googleLoginInProgress = false;
                        }
                    });
            }
        });

        // Handle successful Firebase redirect
        function handleFirebaseRedirectSuccess(result) {
            console.log('handleFirebaseRedirectSuccess called');
            const user = result.user;
            
            if (!user || !user.uid) {
                console.error('No user data in redirect result');
                showNotification('Authentication failed. No user data received.', 'error');
                googleLoginInProgress = false;
                return;
            }
            
            console.log('Firebase user:', user.uid, user.email);
            
            fetch(API_BASE + '/auth/firebase-register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName,
                    profilePicture: user.photoURL
                })
            })
            .then((res) => {
                console.log('Backend response status:', res.status);
                return res.json();
            })
            .then((data) => {
                console.log('Backend response data:', data);
                googleLoginInProgress = false;
                if (data.success) {
                    TaruAuth.saveAuth(data.token, data.refreshToken, data.user);
                    createSuccessBurst();
                    showNotification('Welcome, ' + data.user.name + '!', 'success');
                    setTimeout(() => {
                        if (data.user.role === 'admin') {
                            (window.__legacyTryNavigate && window.__legacyTryNavigate('admin.html')) || (window.location.href = 'admin.html');
                        } else {
                            (window.__legacyTryNavigate && window.__legacyTryNavigate('TARUGUARDIANS FIRST PAGE.html')) || (window.location.href = 'TARUGUARDIANS FIRST PAGE.html');
                        }
                    }, 1500);
                } else {
                    showNotification(data.message || 'Google Sign-In failed', 'error');
                }
            })
            .catch((error) => {
                googleLoginInProgress = false;
                console.error('Firebase register error:', error);
                showNotification('Authentication failed. Please try again.', 'error');
            });
        }

        // === Three.js 3D Background ===
        (function initThreeScene() {
            try {
                const canvas = document.getElementById('three-canvas');
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                renderer.setSize(window.innerWidth, window.innerHeight);

                // Icosahedron wireframe core
                const icoGeo = new THREE.IcosahedronGeometry(2.5, 1);
                const icoMat = new THREE.ShaderMaterial({
                    uniforms: {
                        uTime: { value: 0 },
                        uMouse: { value: new THREE.Vector2(0, 0) }
                    },
                    vertexShader: \`
                        varying vec3 vPos;
                        uniform float uTime;
                        void main() {
                            vPos = position;
                            vec3 p = position;
                            p += sin(uTime * 0.5 + position.x * 3.0) * 0.15;
                            p += cos(uTime * 0.3 + position.y * 2.0) * 0.1;
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
                        }
                    \`,
                    fragmentShader: \`
                        uniform float uTime;
                        varying vec3 vPos;
                        void main() {
                            float pulse = sin(uTime * 2.0 + vPos.y * 3.0) * 0.5 + 0.5;
                            vec3 c1 = vec3(0.0, 0.94, 1.0);
                            vec3 c2 = vec3(0.48, 0.18, 0.97);
                            vec3 color = mix(c1, c2, pulse);
                            float rim = 1.0 - abs(dot(normalize(vPos), vec3(0.0, 0.0, 1.0)));
                            float alpha = rim * 0.4 * (0.6 + 0.4 * pulse);
                            gl_FragColor = vec4(color, alpha);
                        }
                    \`,
                    transparent: true,
                    wireframe: true,
                    side: THREE.DoubleSide
                });
                const ico = new THREE.Mesh(icoGeo, icoMat);
                scene.add(ico);

                // Torus knot
                const torusGeo = new THREE.TorusKnotGeometry(1.2, 0.3, 100, 16);
                const torusMat = new THREE.ShaderMaterial({
                    uniforms: { uTime: { value: 0 } },
                    vertexShader: \`
                        varying vec3 vPos;
                        uniform float uTime;
                        void main() {
                            vPos = position;
                            vec3 p = position;
                            p += sin(uTime + position.z * 2.0) * 0.08;
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
                        }
                    \`,
                    fragmentShader: \`
                        uniform float uTime;
                        varying vec3 vPos;
                        void main() {
                            float pulse = sin(uTime * 1.5 + vPos.x * 4.0) * 0.5 + 0.5;
                            vec3 color = mix(vec3(1.0, 0.18, 0.46), vec3(1.0, 0.84, 0.0), pulse);
                            float rim = pow(1.0 - abs(dot(normalize(vPos), vec3(0.0, 0.0, 1.0))), 2.0);
                            gl_FragColor = vec4(color, rim * 0.2);
                        }
                    \`,
                    transparent: true,
                    wireframe: true
                });
                const torus = new THREE.Mesh(torusGeo, torusMat);
                scene.add(torus);

                // Particle field
                const pCount = 3000;
                const pGeo = new THREE.BufferGeometry();
                const pPos = new Float32Array(pCount * 3);
                const pColors = new Float32Array(pCount * 3);
                const pVelocities = [];

                for (let i = 0; i < pCount; i++) {
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(2 * Math.random() - 1);
                    const r = 5 + Math.random() * 15;
                    pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
                    pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                    pPos[i * 3 + 2] = r * Math.cos(phi);

                    const colorChoice = Math.random();
                    if (colorChoice < 0.33) {
                        pColors[i * 3] = 0; pColors[i * 3 + 1] = 0.94; pColors[i * 3 + 2] = 1;
                    } else if (colorChoice < 0.66) {
                        pColors[i * 3] = 0.48; pColors[i * 3 + 1] = 0.18; pColors[i * 3 + 2] = 0.97;
                    } else {
                        pColors[i * 3] = 1; pColors[i * 3 + 1] = 0.18; pColors[i * 3 + 2] = 0.46;
                    }

                    pVelocities.push({
                        x: (Math.random() - 0.5) * 0.005,
                        y: (Math.random() - 0.5) * 0.005,
                        z: (Math.random() - 0.5) * 0.005
                    });
                }

                pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
                pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));
                const pMat = new THREE.PointsMaterial({
                    size: 0.06,
                    vertexColors: true,
                    transparent: true,
                    opacity: 0.8,
                    blending: THREE.AdditiveBlending
                });
                const particles = new THREE.Points(pGeo, pMat);
                scene.add(particles);

                // Lighting
                scene.add(new THREE.AmbientLight(0x404040, 0.5));
                const pLight1 = new THREE.PointLight(0x00f0ff, 2, 20);
                pLight1.position.set(5, 5, 5);
                scene.add(pLight1);
                const pLight2 = new THREE.PointLight(0x7b2ff7, 1.5, 15);
                pLight2.position.set(-5, -5, -5);
                scene.add(pLight2);

                camera.position.set(0, 0, 8);

                let mouseX = 0, mouseY = 0;
                document.addEventListener('mousemove', (e) => {
                    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
                    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
                    icoMat.uniforms.uMouse.value.set(mouseX, mouseY);
                });

                function animate() {
                    requestAnimationFrame(animate);
                    const t = performance.now() * 0.001;

                    icoMat.uniforms.uTime.value = t;
                    torusMat.uniforms.uTime.value = t;

                    ico.rotation.x = t * 0.15 + mouseY * 0.3;
                    ico.rotation.y = t * 0.2 + mouseX * 0.3;

                    torus.rotation.x = t * 0.1;
                    torus.rotation.y = t * 0.15;
                    torus.rotation.z = t * 0.05;

                    const positions = pGeo.attributes.position.array;
                    for (let i = 0; i < pCount; i++) {
                        positions[i * 3] += pVelocities[i].x;
                        positions[i * 3 + 1] += pVelocities[i].y;
                        positions[i * 3 + 2] += pVelocities[i].z;

                        const dist = Math.sqrt(
                            positions[i * 3] ** 2 +
                            positions[i * 3 + 1] ** 2 +
                            positions[i * 3 + 2] ** 2
                        );

                        if (dist > 20 || dist < 3) {
                            pVelocities[i].x *= -1;
                            pVelocities[i].y *= -1;
                            pVelocities[i].z *= -1;
                        }
                    }
                    pGeo.attributes.position.needsUpdate = true;

                    particles.rotation.y = t * 0.02;

                    renderer.render(scene, camera);
                }
                animate();

                window.addEventListener('resize', () => {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                });
            } catch (e) {
                console.warn('WebGL not available, continuing without 3D');
            }
        })();

        // === Matrix Rain Generator ===
        (function initMatrixRain() {
            const container = document.getElementById('matrixRain');
            const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            const columns = Math.floor(window.innerWidth / 30);

            for (let i = 0; i < columns; i++) {
                const column = document.createElement('div');
                column.className = 'matrix-column';
                column.style.left = (i * 30 + Math.random() * 10) + 'px';
                column.style.animationDuration = (8 + Math.random() * 12) + 's';
                column.style.animationDelay = Math.random() * 8 + 's';
                column.style.fontSize = (10 + Math.random() * 6) + 'px';

                let text = '';
                const length = 10 + Math.floor(Math.random() * 20);
                for (let j = 0; j < length; j++) {
                    text += chars[Math.floor(Math.random() * chars.length)] + '\\n';
                }
                column.textContent = text;
                container.appendChild(column);
            }
        })();

        // === Floating Geometric Particles ===
        (function initFloatingParticles() {
            const container = document.getElementById('floatingParticles');
            const types = ['circle', 'triangle', 'diamond', 'hexagon', 'ring'];

            for (let i = 0; i < 40; i++) {
                const particle = document.createElement('div');
                const type = types[Math.floor(Math.random() * types.length)];
                particle.className = \`geo-particle \${type}\`;

                const size = 6 + Math.random() * 20;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (15 + Math.random() * 25) + 's';
                particle.style.animationDelay = Math.random() * 15 + 's';

                container.appendChild(particle);
            }
        })();

        // === Energy Lines ===
        (function initEnergyLines() {
            const container = document.getElementById('energyLines');
            for (let i = 0; i < 8; i++) {
                const line = document.createElement('div');
                line.className = 'energy-line';
                line.style.top = (10 + Math.random() * 80) + '%';
                line.style.width = (20 + Math.random() * 40) + '%';
                line.style.animationDuration = (4 + Math.random() * 8) + 's';
                line.style.animationDelay = Math.random() * 6 + 's';
                container.appendChild(line);
            }
        })();

        // === DNA Helix ===
        (function initDNAHelix() {
            const container = document.getElementById('dnaHelix');
            for (let i = 0; i < 30; i++) {
                const dot1 = document.createElement('div');
                dot1.className = 'dna-dot';
                dot1.style.top = (i * 3.3) + '%';
                dot1.style.animationDelay = (i * 0.15) + 's';
                container.appendChild(dot1);

                const dot2 = document.createElement('div');
                dot2.className = 'dna-dot reverse';
                dot2.style.top = (i * 3.3) + '%';
                dot2.style.animationDelay = (i * 0.15) + 's';
                container.appendChild(dot2);
            }
        })();

        // === Mouse Follower ===
        (function initMouseFollower() {
            const follower = document.getElementById('mouseFollower');
            let mx = window.innerWidth / 2, my = window.innerHeight / 2;
            let fx = mx, fy = my;

            document.addEventListener('mousemove', (e) => {
                mx = e.clientX;
                my = e.clientY;
            });

            function updateFollower() {
                fx += (mx - fx) * 0.08;
                fy += (my - fy) * 0.08;
                follower.style.left = fx + 'px';
                follower.style.top = fy + 'px';
                requestAnimationFrame(updateFollower);
            }
            updateFollower();
        })();

        // === HUD Clock ===
        (function initHUD() {
            function updateHUD() {
                const now = new Date();
                document.getElementById('hudTime').textContent =
                    now.toTimeString().split(' ')[0];
                document.getElementById('hudDate').textContent =
                    now.toISOString().split('T')[0].replace(/-/g, '.');
                document.getElementById('hudLatency').textContent =
                    Math.floor(8 + Math.random() * 15);
            }
            updateHUD();
            setInterval(updateHUD, 1000);
        })();

        // === 3D Card Tilt Effect ===
        (function initCardTilt() {
            const card = document.getElementById('authCard');
            const wrapper = document.querySelector('.auth-card-wrapper');

            wrapper.addEventListener('mousemove', (e) => {
                const rect = wrapper.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;

                const rotateX = (y - 0.5) * -8;
                const rotateY = (x - 0.5) * 8;

                card.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
            });

            wrapper.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0) rotateY(0)';
            });
        })();

        // === Tab Switching ===
        let currentTab = 'login';

        // Show Google button on initial load for login
        const externalGoogleBtn = document.querySelector('.external-google-btn');
        if (externalGoogleBtn && currentTab === 'login') {
            externalGoogleBtn.style.display = 'flex';
        }

        function switchTab(tab) {
            if (tab === currentTab) return;

            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            const loginTabBtn = document.getElementById('loginTab');
            const signupTabBtn = document.getElementById('signupTab');
            const indicator = document.getElementById('tabIndicator');
            const formsContainer = document.querySelector('.forms-container');
            const authCard = document.getElementById('authCard');
            const externalGoogleBtn = document.querySelector('.external-google-btn');

            clearErrors();

            if (tab === 'signup') {
                loginForm.style.display = 'none';
                signupForm.classList.remove('hidden');
                signupForm.style.display = 'block';

                loginTabBtn.classList.remove('active');
                signupTabBtn.classList.add('active');
                indicator.classList.add('signup');
                
                formsContainer.classList.add('signup-mode');
                authCard.classList.add('signup-mode');
                
                externalGoogleBtn.style.display = 'none';

                // Re-trigger input animations
                signupForm.querySelectorAll('.input-group').forEach((g, i) => {
                    g.style.animation = 'none';
                    g.offsetHeight;
                    g.style.animation = \`inputAppear 0.5s ease \${i * 0.08}s forwards\`;
                    g.style.opacity = '0';
                });
            } else {
                signupForm.style.display = 'none';
                signupForm.classList.add('hidden');
                loginForm.style.display = 'block';

                signupTabBtn.classList.remove('active');
                loginTabBtn.classList.add('active');
                indicator.classList.remove('signup');
                
                formsContainer.classList.remove('signup-mode');
                authCard.classList.remove('signup-mode');
                
                externalGoogleBtn.style.display = 'flex';

                loginForm.querySelectorAll('.input-group').forEach((g, i) => {
                    g.style.animation = 'none';
                    g.offsetHeight;
                    g.style.animation = \`inputAppear 0.5s ease \${i * 0.08}s forwards\`;
                    g.style.opacity = '0';
                });
            }

            currentTab = tab;

            // GSAP card morph
            if (typeof gsap !== 'undefined') {
                gsap.fromTo('.auth-card', {
                    scale: 0.98,
                    boxShadow: '0 0 60px rgba(0, 240, 255, 0.15)'
                }, {
                    scale: 1,
                    boxShadow: '0 0 40px rgba(0, 240, 255, 0.05), 0 25px 60px rgba(0, 0, 0, 0.5)',
                    duration: 0.5,
                    ease: 'back.out(1.7)'
                });
            }
        }

        // === Password Toggle ===
        function togglePassword(inputId, btn) {
            const input = document.getElementById(inputId);
            const icon = btn.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        }

        // === Password Strength ===
        function checkPasswordStrength(password) {
            const bar = document.getElementById('strengthBar');
            const text = document.getElementById('strengthText');
            let score = 0;

            if (password.length >= 6) score++;
            if (password.length >= 10) score++;
            if (/[A-Z]/.test(password)) score++;
            if (/[0-9]/.test(password)) score++;
            if (/[^A-Za-z0-9]/.test(password)) score++;

            bar.className = 'strength-bar';
            text.className = 'strength-text';

            if (password.length === 0) {
                text.textContent = '';
                bar.style.width = '0%';
                return;
            }

            if (score <= 1) {
                bar.classList.add('weak');
                text.classList.add('weak');
                text.textContent = '● WEAK - Add uppercase, numbers & symbols';
            } else if (score <= 2) {
                bar.classList.add('fair');
                text.classList.add('fair');
                text.textContent = '●● FAIR - Getting better';
            } else if (score <= 3) {
                bar.classList.add('good');
                text.classList.add('good');
                text.textContent = '●●● GOOD - Almost there';
            } else {
                bar.classList.add('strong');
                text.classList.add('strong');
                text.textContent = '●●●● STRONG - Excellent password!';
            }
        }

        // === Validation ===
        function validateEmail(email) {
            return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
        }

        function clearErrors() {
            document.querySelectorAll('.input-group').forEach(g => {
                g.classList.remove('error', 'success');
            });
        }

        function showError(inputId, errorId, message) {
            const group = document.getElementById(inputId).closest('.input-group');
            group.classList.add('error');
            group.classList.remove('success');
            if (errorId) {
                const errorEl = document.getElementById(errorId);
                if (errorEl) errorEl.textContent = message;
            }
        }

        function showSuccess(inputId) {
            const group = document.getElementById(inputId).closest('.input-group');
            group.classList.remove('error');
            group.classList.add('success');
        }

        // === Notification ===
        function showNotification(message, type = 'success') {
            const notif = document.getElementById('notification');
            notif.textContent = message;
            notif.className = \`auth-notification \${type} show\`;

            setTimeout(() => {
                notif.classList.remove('show');
            }, 4000);
        }

        // === Success Particle Burst ===
        function createSuccessBurst() {
            const container = document.getElementById('successParticles');
            const colors = ['#00f0ff', '#7b2ff7', '#ff2d75', '#ffd700', '#00ff88'];
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            for (let i = 0; i < 60; i++) {
                const particle = document.createElement('div');
                particle.className = 'success-particle';
                particle.style.left = centerX + 'px';
                particle.style.top = centerY + 'px';
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.boxShadow = \`0 0 6px \${particle.style.background}\`;

                const angle = (Math.PI * 2 * i) / 60;
                const velocity = 100 + Math.random() * 200;
                particle.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
                particle.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');

                container.appendChild(particle);
                setTimeout(() => particle.remove(), 1000);
            }
        }

        // === Login Handler ===
        async function handleLogin(e) {
            e.preventDefault();
            clearErrors();

            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;

            let hasError = false;

            if (!validateEmail(email)) {
                showError('loginEmail', 'loginEmailError', 'Please enter a valid email address');
                hasError = true;
            }

            if (!password) {
                showError('loginPassword', 'loginPasswordError', 'Password is required');
                hasError = true;
            }

            if (hasError) return;

            const btn = document.getElementById('loginBtn');
            btn.classList.add('loading');

            try {
                const response = await fetch(API_BASE + '/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (data.success) {
                    TaruAuth.saveAuth(data.token, data.refreshToken, data.user);
                    createSuccessBurst();
                    showNotification('Welcome back, ' + data.user.name + '!', 'success');

                    setTimeout(() => {
                        // Role-based redirect
                        if (data.user.role === 'admin') {
                            (window.__legacyTryNavigate && window.__legacyTryNavigate('admin.html')) || (window.location.href = 'admin.html');
                        } else {
                            (window.__legacyTryNavigate && window.__legacyTryNavigate('TARUGUARDIANS FIRST PAGE.html')) || (window.location.href = 'TARUGUARDIANS FIRST PAGE.html');
                        }
                    }, 1500);
                } else {
                    showNotification(data.message || 'Login failed', 'error');
                    showError('loginEmail', 'loginEmailError', data.message || 'Invalid credentials');
                }
            } catch (error) {
                console.error('Login error:', error);
                showNotification('Cannot connect to server. Make sure backend is running on port 5000.', 'error');
            } finally {
                btn.classList.remove('loading');
            }
        }

        // === Signup Handler ===
        async function handleSignup(e) {
            e.preventDefault();
            clearErrors();

            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;

            let hasError = false;

            if (!name) {
                showError('signupName', 'signupNameError', 'Full name is required');
                hasError = true;
            }

            if (!validateEmail(email)) {
                showError('signupEmail', 'signupEmailError', 'Please enter a valid email address');
                hasError = true;
            }

            if (password.length < 6) {
                showError('signupPassword', 'signupPasswordError', 'Password must be at least 6 characters');
                hasError = true;
            }

            if (password !== confirmPassword) {
                showError('signupConfirmPassword', 'signupConfirmError', 'Passwords do not match');
                hasError = true;
            }

            if (hasError) return;

            const btn = document.getElementById('signupBtn');
            btn.classList.add('loading');

            try {
                const response = await fetch(API_BASE + '/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password })
                });

                const data = await response.json();

                if (data.success) {
                    TaruAuth.saveAuth(data.token, data.refreshToken, data.user);
                    createSuccessBurst();
                    showNotification('Account created! Welcome, ' + data.user.name + '!', 'success');

                    setTimeout(() => {
                        // Role-based redirect
                        if (data.user.role === 'admin') {
                            (window.__legacyTryNavigate && window.__legacyTryNavigate('admin.html')) || (window.location.href = 'admin.html');
                        } else {
                            (window.__legacyTryNavigate && window.__legacyTryNavigate('TARUGUARDIANS FIRST PAGE.html')) || (window.location.href = 'TARUGUARDIANS FIRST PAGE.html');
                        }
                    }, 1500);
                } else {
                    showNotification(data.message || 'Registration failed', 'error');
                    if (data.message && data.message.includes('email')) {
                        showError('signupEmail', 'signupEmailError', data.message);
                    }
                }
            } catch (error) {
                console.error('Signup error:', error);
                showNotification('Cannot connect to server. Make sure backend is running on port 5000.', 'error');
            } finally {
                btn.classList.remove('loading');
            }
        }

        let googleLoginInProgress = false;

        // === Firebase Google Login ===
        async function handleGoogleLogin() {
            console.log('handleGoogleLogin started');
            
            if (googleLoginInProgress) {
                showNotification('Login in progress. Please wait...', 'error');
                return;
            }

            if (typeof firebase === 'undefined' || typeof firebase.auth === 'undefined') {
                showNotification('Firebase is loading. Please wait a moment and try again.', 'error');
                console.error('Firebase not loaded');
                return;
            }

            googleLoginInProgress = true;
            showNotification('Connecting to Google...', 'success');

            try {
                // Check for pending redirect result
                console.log('Checking for pending redirect result...');
                try {
                    const result = await firebase.auth().getRedirectResult();
                    console.log('getRedirectResult:', result);
                    
                    if (result && result.user) {
                        console.log('Processing user from redirect...');
                        await processFirebaseUser(result.user);
                        return;
                    }
                } catch (redirectError) {
                    console.log('Redirect result check failed:', redirectError.code);
                }
                
                // Use redirect instead of popup
                console.log('Starting redirect login...');
                await firebase.auth().signInWithRedirect(window.googleProvider);
            } catch (error) {
                console.error('Firebase Error:', error);
                googleLoginInProgress = false;
                
                if (error.code === 'auth/cancelled-popup-request') {
                    showNotification('Please try again.', 'error');
                } else if (error.code === 'auth/popup-blocked') {
                    showNotification('Popup blocked. Try again.', 'error');
                } else if (error.code === 'auth/popup-closed-by-user') {
                    showNotification('Login cancelled. Try again.', 'error');
                } else if (error.code === 'auth/operation-not-allowed') {
                    showNotification('Google Sign-In not enabled.', 'error');
                } else {
                    showNotification(error.message || 'Google Sign-In failed', 'error');
                }
            }
        }
                    throw popupError;
                }
            } catch (error) {
                console.error('Firebase Google Error:', error.code, error.message);
                googleLoginInProgress = false;
                
                // Detailed error messages
                if (error.code === 'auth/cancelled-popup-request') {
                    showNotification('Login cancelled. Please try again.', 'error');
                } else if (error.code === 'auth/popup-blocked') {
                    showNotification('Popup blocked by browser. Please allow popups or try a different browser.', 'error');
                } else if (error.code === 'auth/popup-closed-by-user') {
                    showNotification('You closed the popup before completing login.', 'error');
                } else if (error.code === 'auth/operation-not-allowed') {
                    showNotification('Google Sign-In is not enabled. Ask admin to enable it in Firebase Console.', 'error');
                } else if (error.code === 'auth/unauthorized-domain') {
                    showNotification('This domain is not authorized. Add it to Firebase Console > Authentication > Authorized domains.', 'error');
                } else if (error.code === 'auth/developer-error') {
                    showNotification('Firebase configuration error. Contact administrator.', 'error');
                } else if (error.code === 'auth/network-request-failed') {
                    showNotification('Network error. Check your internet connection and try again.', 'error');
                } else if (error.code === 'auth/too-many-requests') {
                    showNotification('Too many attempts. Please wait a moment and try again.', 'error');
                } else {
                    showNotification(error.message || 'Google Sign-In failed. Please try again.', 'error');
                }
            }
            // Note: don't reset flag here - popup success returns above, redirect causes navigation
        }

        async function processFirebaseUser(user) {
            const response = await fetch(API_BASE + '/auth/firebase-register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName,
                    profilePicture: user.photoURL
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                TaruAuth.saveAuth(data.token, data.refreshToken, data.user);
                createSuccessBurst();
                showNotification('Welcome, ' + data.user.name + '!', 'success');
                setTimeout(() => {
                    if (data.user.role === 'admin') {
                        (window.__legacyTryNavigate && window.__legacyTryNavigate('admin.html')) || (window.location.href = 'admin.html');
                    } else {
                        (window.__legacyTryNavigate && window.__legacyTryNavigate('TARUGUARDIANS FIRST PAGE.html')) || (window.location.href = 'TARUGUARDIANS FIRST PAGE.html');
                    }
                }, 1500);
            } else {
                showNotification(data.message || 'Google Sign-In failed', 'error');
            }
        }

        // === Input Real-time Validation ===
        document.querySelectorAll('input[type="email"]').forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value && !validateEmail(this.value)) {
                    this.closest('.input-group').classList.add('error');
                } else if (this.value) {
                    this.closest('.input-group').classList.add('success');
                    this.closest('.input-group').classList.remove('error');
                }
            });
        });

        // === GSAP Entrance Animations ===
        if (typeof gsap !== 'undefined') {
            gsap.from('.auth-logo-icon', {
                duration: 1.2,
                scale: 0,
                rotation: 720,
                ease: 'back.out(1.7)',
                delay: 1.5
            });

            gsap.from('.auth-logo h1', {
                duration: 0.8,
                y: 30,
                opacity: 0,
                ease: 'power3.out',
                delay: 2
            });

            gsap.from('.auth-logo .subtitle', {
                duration: 0.6,
                y: 20,
                opacity: 0,
                ease: 'power3.out',
                delay: 2.3
            });

            gsap.from('.auth-tabs', {
                duration: 0.6,
                y: 20,
                opacity: 0,
                ease: 'power3.out',
                delay: 2.5
            });
        }

        // === Auto redirect if already logged in ===
        if (typeof TaruAuth !== 'undefined' && TaruAuth.isLoggedIn()) {
            window.location.href = window.innerWidth <= 768 ? 'responsive part mobile.html' : 'TARUGUARDIANS FIRST PAGE.html';
        }

        // === Check URL params for tab ===
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('tab') === 'signup') {
            setTimeout(() => switchTab('signup'), 100);
        }
    `}],Vo=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function Tf(n){for(const t of Ef)if(t.kind==="external"){if(Vo.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),Vo.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function Af(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const Yo="Auth";function Df(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},Tf(Yo);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{Af(Yo),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-Auth",children:[e.jsxs("div",{className:"auth-loading-screen",id:"loadingScreen",style:{zIndex:"999999"},children:[e.jsxs("div",{className:"loading-orb",children:[e.jsx("div",{className:"loading-orb-ring"}),e.jsx("div",{className:"loading-orb-ring"}),e.jsx("div",{className:"loading-orb-ring"})]}),e.jsx("div",{className:"loading-text",children:"INITIALIZING"})]}),e.jsx("div",{className:"mouse-follower",id:"mouseFollower"}),e.jsx("canvas",{id:"three-canvas"}),e.jsx("div",{className:"nebula-overlay"}),e.jsx("div",{className:"cyber-grid",children:e.jsx("div",{className:"cyber-grid-plane"})}),e.jsx("div",{className:"matrix-rain",id:"matrixRain"}),e.jsx("div",{className:"floating-particles",id:"floatingParticles"}),e.jsx("div",{className:"energy-lines",id:"energyLines"}),e.jsx("div",{className:"dna-helix",id:"dnaHelix"}),e.jsx("div",{className:"scanner-line"}),e.jsx("div",{className:"corner-decor top-left"}),e.jsx("div",{className:"corner-decor top-right"}),e.jsx("div",{className:"corner-decor bottom-left"}),e.jsx("div",{className:"corner-decor bottom-right"}),e.jsxs("div",{className:"hud-element hud-top-left",children:[e.jsx("div",{children:"SYS.AUTH.V2.0"}),e.jsx("div",{id:"hudTime",children:"00:00:00"})]}),e.jsxs("div",{className:"hud-element hud-top-right",children:[e.jsx("div",{children:"SECURE CONNECTION"}),e.jsx("div",{children:"ENCRYPTED: AES-256"})]}),e.jsxs("div",{className:"hud-element hud-bottom-left",children:[e.jsx("div",{children:"PROTOCOL: TG-AUTH"}),e.jsx("div",{id:"hudDate",children:"2024.01.01"})]}),e.jsxs("div",{className:"hud-element hud-bottom-right",children:[e.jsx("div",{children:"STATUS: ONLINE"}),e.jsxs("div",{children:["LATENCY: ",e.jsx("span",{id:"hudLatency",children:"12"}),"ms"]})]}),e.jsx("div",{className:"auth-notification",id:"notification"}),e.jsx("div",{className:"success-particles",id:"successParticles"}),e.jsx("div",{className:"auth-universe",children:e.jsx("div",{className:"auth-card-wrapper",children:e.jsxs("div",{className:"auth-card",id:"authCard",children:[e.jsxs("div",{className:"auth-logo",children:[e.jsxs("div",{className:"auth-logo-icon",children:[e.jsx("div",{className:"logo-ring"}),e.jsx("div",{className:"logo-ring"}),e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians","data-legacy-onerror":"this.style.display='none'"})]}),e.jsx("h1",{children:"TaruGuardians"}),e.jsx("div",{className:"subtitle",children:"Authentication Portal"})]}),e.jsxs("div",{className:"auth-tabs",children:[e.jsx("button",{className:"auth-tab active",id:"loginTab","data-legacy-onclick":"switchTab('login')",children:"Login"}),e.jsx("button",{className:"auth-tab",id:"signupTab","data-legacy-onclick":"switchTab('signup')",children:"Sign Up"}),e.jsx("div",{className:"tab-indicator",id:"tabIndicator"})]}),e.jsxs("div",{className:"forms-container",children:[e.jsxs("form",{className:"auth-form",id:"loginForm","data-legacy-onsubmit":"handleLogin(event)",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("i",{className:"fas fa-envelope input-icon"}),e.jsx("input",{type:"email",id:"loginEmail",placeholder:"Email Address",required:!0,autoComplete:"email"}),e.jsx("div",{className:"input-glow"}),e.jsx("div",{className:"error-message",id:"loginEmailError",children:"Please enter a valid email"})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("i",{className:"fas fa-lock input-icon"}),e.jsx("input",{type:"password",id:"loginPassword",placeholder:"Password",required:!0,autoComplete:"current-password"}),e.jsx("button",{type:"button",className:"password-toggle","data-legacy-onclick":"togglePassword('loginPassword', this)",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsx("div",{className:"input-glow"}),e.jsx("div",{className:"error-message",id:"loginPasswordError",children:"Password is required"})]}),e.jsxs("button",{type:"submit",className:"auth-submit",id:"loginBtn",children:[e.jsx("span",{className:"btn-text",children:"Access Portal"}),e.jsx("div",{className:"btn-loader",children:e.jsx("div",{className:"spinner"})})]})]}),e.jsxs("form",{className:"auth-form hidden",id:"signupForm","data-legacy-onsubmit":"handleSignup(event)",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("i",{className:"fas fa-user input-icon"}),e.jsx("input",{type:"text",id:"signupName",placeholder:"Full Name",required:!0,autoComplete:"name"}),e.jsx("div",{className:"input-glow"}),e.jsx("div",{className:"error-message",id:"signupNameError",children:"Name is required"})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("i",{className:"fas fa-envelope input-icon"}),e.jsx("input",{type:"email",id:"signupEmail",placeholder:"Email Address",required:!0,autoComplete:"email"}),e.jsx("div",{className:"input-glow"}),e.jsx("div",{className:"error-message",id:"signupEmailError",children:"Please enter a valid email"})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("i",{className:"fas fa-lock input-icon"}),e.jsx("input",{type:"password",id:"signupPassword",placeholder:"Create Password",required:!0,autoComplete:"new-password"}),e.jsx("button",{type:"button",className:"password-toggle","data-legacy-onclick":"togglePassword('signupPassword', this)",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsx("div",{className:"input-glow"}),e.jsx("div",{className:"error-message",id:"signupPasswordError",children:"Password must be at least 6 characters"})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("i",{className:"fas fa-lock input-icon"}),e.jsx("input",{type:"password",id:"signupConfirmPassword",placeholder:"Confirm Password",required:!0,autoComplete:"new-password"}),e.jsx("button",{type:"button",className:"password-toggle","data-legacy-onclick":"togglePassword('signupConfirmPassword', this)",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsx("div",{className:"input-glow"}),e.jsx("div",{className:"error-message",id:"signupConfirmPasswordError",children:"Passwords do not match"})]}),e.jsxs("button",{type:"submit",className:"auth-submit",id:"signupBtn",children:[e.jsx("span",{className:"btn-text",children:"Sign Up"}),e.jsx("div",{className:"btn-loader",children:e.jsx("div",{className:"spinner"})})]}),e.jsxs("button",{type:"button",className:"google-btn signup-google-btn","data-legacy-onclick":"handleGoogleLogin()",children:[e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"}),e.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),e.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),e.jsx("span",{children:"Continue with Google"})]})]})]}),e.jsxs("button",{type:"button",className:"external-google-btn","data-legacy-onclick":"handleGoogleLogin()",children:[e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"}),e.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),e.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),e.jsx("span",{children:"Continue with Google"})]})]})})})]})}const Cf=[{kind:"external",src:"frontend-auth.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
        if (!TaruAuth.requireAdmin()) { /* redirects */ }

        var usersPage = 1;
        var subsPage = 1;

        async function initAdmin() {
            try {
                var res = await TaruAuth.authFetch('/admin/stats');
                var data = await res.json();
                if (data.success) {
                    renderStats(data.stats);
                }
                loadAllUsers(1);
                var user = TaruAuth.getUser();
                if (user) {
                    document.getElementById('sidebarUserName').textContent = user.name || 'Admin';
                    document.getElementById('sidebarAvatarText').textContent = (user.name || 'A').charAt(0).toUpperCase();
                }
            } catch (err) { console.error('Admin init error:', err); }
        }

        function renderStats(stats) {
            document.getElementById('statVisitors').textContent = stats.totalVisitors || stats.totalUsers * 10 || 0;
            document.getElementById('statOnline').textContent = stats.onlineUsers || Math.floor((stats.totalUsers || 0) * 0.3);
            document.getElementById('statTotal').textContent = stats.totalUsers || 0;
            document.getElementById('statActive').textContent = stats.activeUsers || 0;
            
            // Update recruitment stat if present
            if (stats.totalRecruitment !== undefined) {
                var recTotalEl = document.getElementById('recTotal');
                if (recTotalEl) recTotalEl.textContent = stats.totalRecruitment;
            }
        }

        async function loadAllUsers(page) {
            var pageNum = page || 1;
            try {
                var res = await TaruAuth.authFetch('/admin/users?page=' + pageNum + '&limit=20');
                var data = await res.json();
                if (data.success) {
                    renderAllUsersTable(data.users);
                    renderPagination('allUsersPagination', data.pagination, 'loadAllUsers');
                }
            } catch (err) { console.error('Load all users error:', err); }
        }

        function renderAllUsersTable(users) {
            var container = document.getElementById('allUsersTable');
            if (!users || users.length === 0) {
                container.innerHTML = '<div class="empty-state"><i class="fas fa-users"></i><p>No users found.</p></div>';
                return;
            }
            var html = '<table class="dash-table"><thead><tr><th>User</th><th>Email</th><th>Role</th><th>Status</th><th>Joined</th></tr></thead><tbody>';
            users.forEach(function(u) {
                var initial = (u.name || 'U').charAt(0).toUpperCase();
                var avatar = u.profilePicture ? '<img src="' + u.profilePicture + '" alt="">' : initial;
                html += '<tr><td><div class="user-cell"><div class="user-cell-avatar">' + avatar + '</div><div class="user-cell-info"><div class="user-cell-name">' + escapeHtml(u.name || 'Unknown') + '</div></div></div></td>';
                html += '<td>' + escapeHtml(u.email || 'N/A') + '</td>';
                html += '<td><span class="role-badge role-' + u.role + '">' + (u.role || 'user') + '</span></td>';
                html += '<td><span class="status-badge status-' + (u.isActive ? 'active' : 'inactive') + '">' + (u.isActive ? 'Active' : 'Inactive') + '</span></td>';
                html += '<td>' + new Date(u.createdAt).toLocaleDateString() + '</td></tr>';
            });
            container.innerHTML = html + '</tbody></table>';
        }

        async function searchUsers() {
            usersPage = 1;
            await loadUsers();
        }

        async function loadUsers(page) {
            page = page || usersPage;
            usersPage = page;
            var search = document.getElementById('userSearch').value.trim();
            var role = document.getElementById('roleFilter').value;
            var status = document.getElementById('statusFilter').value;
            var query = '?page=' + page + '&limit=15';
            if (search) query += '&search=' + encodeURIComponent(search);
            if (role) query += '&role=' + role;
            if (status) query += '&status=' + status;

            try {
                var res = await TaruAuth.authFetch('/admin/users' + query);
                var data = await res.json();
                if (data.success) {
                    renderUsersTable(data.users);
                    renderPagination('usersPagination', data.pagination, 'loadUsers');
                }
            } catch (err) { console.error('Load users error:', err); }
        }

        function renderUsersTable(users) {
            var container = document.getElementById('usersTableContainer');
            if (!users || users.length === 0) {
                container.innerHTML = '<div class="empty-state"><i class="fas fa-users"></i><p>No users found.</p></div>';
                return;
            }
            var html = '<table class="dash-table"><thead><tr><th>User</th><th>Role</th><th>Status</th><th>Auth</th><th>Joined</th><th>Actions</th></tr></thead><tbody>';
            users.forEach(function(u) {
                var initial = (u.name || 'U').charAt(0).toUpperCase();
                var avatar = u.profilePicture ? '<img src="' + u.profilePicture + '" alt="">' : initial;
                html += '<tr><td><div class="user-cell"><div class="user-cell-avatar">' + avatar + '</div><div class="user-cell-info"><div class="user-cell-name">' + escapeHtml(u.name) + '</div><div class="user-cell-email">' + escapeHtml(u.email) + '</div></div></div></td>';
                html += '<td><span class="role-badge role-' + u.role + '">' + u.role + '</span></td>';
                html += '<td><span class="status-badge status-' + (u.isActive ? 'active' : 'inactive') + '">' + (u.isActive ? 'Active' : 'Inactive') + '</span></td>';
                html += '<td>' + (u.authProvider || 'local') + '</td>';
                html += '<td>' + new Date(u.createdAt).toLocaleDateString() + '</td>';
                html += '<td style="white-space:nowrap;">';
                if (u.role === 'user') {
                    html += '<button class="btn btn-outline btn-sm" onclick="changeRole(\\'' + u._id + '\\', \\'admin\\')" title="Make Admin"><i class="fas fa-crown"></i></button> ';
                } else {
                    html += '<button class="btn btn-outline btn-sm" onclick="changeRole(\\'' + u._id + '\\', \\'user\\')" title="Remove Admin"><i class="fas fa-user"></i></button> ';
                }
                if (u.isActive) {
                    html += '<button class="btn btn-outline btn-sm" onclick="toggleUserStatus(\\'' + u._id + '\\', false)" title="Deactivate"><i class="fas fa-ban"></i></button> ';
                } else {
                    html += '<button class="btn btn-success btn-sm" onclick="toggleUserStatus(\\'' + u._id + '\\', true)" title="Activate"><i class="fas fa-check"></i></button> ';
                }
                html += '<button class="btn btn-danger btn-sm" onclick="deleteUser(\\'' + u._id + '\\')" title="Delete"><i class="fas fa-trash"></i></button>';
                html += '</td></tr>';
            });
            container.innerHTML = html + '</tbody></table>';
        }

        async function changeRole(userId, newRole) {
            if (!confirm('Change this user\\'s role to ' + newRole + '?')) return;
            try {
                var res = await TaruAuth.authFetch('/admin/users/' + userId, { method: 'PUT', body: JSON.stringify({ role: newRole }) });
                var data = await res.json();
                if (data.success) { showNotification('Role updated', 'success'); loadUsers(); initAdmin(); }
                else { showNotification(data.message || 'Failed', 'error'); }
            } catch (err) { showNotification('Error', 'error'); }
        }

        async function toggleUserStatus(userId, isActive) {
            try {
                var res = await TaruAuth.authFetch('/admin/users/' + userId, { method: 'PUT', body: JSON.stringify({ isActive: isActive }) });
                var data = await res.json();
                if (data.success) { showNotification('User ' + (isActive ? 'activated' : 'deactivated'), 'success'); loadUsers(); initAdmin(); }
                else { showNotification(data.message || 'Failed', 'error'); }
            } catch (err) { showNotification('Error', 'error'); }
        }

        async function deleteUser(userId) {
            if (!confirm('Are you sure you want to permanently delete this user? This cannot be undone.')) return;
            try {
                var res = await TaruAuth.authFetch('/admin/users/' + userId, { method: 'DELETE' });
                var data = await res.json();
                if (data.success) { showNotification('User deleted', 'success'); loadUsers(); initAdmin(); }
                else { showNotification(data.message || 'Failed', 'error'); }
            } catch (err) { showNotification('Error', 'error'); }
        }

        async function loadSubmissions(page) {
            page = page || subsPage;
            subsPage = page;
            var status = document.getElementById('subStatusFilter').value;
            var query = '?page=' + page + '&limit=15';
            if (status) query += '&status=' + status;

            try {
                var res = await TaruAuth.authFetch('/admin/submissions' + query);
                var data = await res.json();
                if (data.success) {
                    renderSubmissionsTable(data.submissions);
                    renderPagination('subsPagination', data.pagination, 'loadSubmissions');
                }
            } catch (err) { console.error('Load submissions error:', err); }
        }

        function renderSubmissionsTable(subs) {
            var container = document.getElementById('submissionsTableContainer');
            if (!subs || subs.length === 0) {
                container.innerHTML = '<div class="empty-state"><i class="fas fa-file-alt"></i><p>No submissions found.</p></div>';
                return;
            }
            var html = '<table class="dash-table"><thead><tr><th>User</th><th>Form Type</th><th>Submitted</th><th>Status</th><th>Actions</th></tr></thead><tbody>';
            subs.forEach(function(s) {
                html += '<tr><td><div class="user-cell-info"><div class="user-cell-name">' + escapeHtml(s.userName) + '</div><div class="user-cell-email">' + escapeHtml(s.userEmail) + '</div></div></td>';
                html += '<td>' + escapeHtml(s.formType) + '</td>';
                html += '<td>' + new Date(s.submittedAt).toLocaleDateString() + '</td>';
                html += '<td><span class="status-badge status-' + s.status + '">' + s.status + '</span></td>';
                html += '<td style="white-space:nowrap;">';
                html += '<select class="search-input" style="padding:6px 8px;font-size:12px;min-width:100px;" onchange="updateSubmissionStatus(\\'' + s.userId + '\\', \\'' + s._id + '\\', this.value)">';
                ['pending', 'reviewed', 'approved', 'rejected'].forEach(function(st) {
                    html += '<option value="' + st + '"' + (s.status === st ? ' selected' : '') + '>' + st.charAt(0).toUpperCase() + st.slice(1) + '</option>';
                });
                html += '</select></td></tr>';
            });
            container.innerHTML = html + '</tbody></table>';
        }

        async function updateSubmissionStatus(userId, subId, status) {
            try {
                var res = await TaruAuth.authFetch('/admin/submissions/' + userId + '/' + subId, { method: 'PUT', body: JSON.stringify({ status: status }) });
                var data = await res.json();
                if (data.success) { showNotification('Status updated', 'success'); }
                else { showNotification(data.message || 'Failed', 'error'); loadSubmissions(); }
            } catch (err) { showNotification('Error', 'error'); }
        }

        function renderPagination(containerId, pagination, fnName) {
            var container = document.getElementById(containerId);
            if (!pagination || pagination.pages <= 1) { container.innerHTML = ''; return; }
            var html = '';
            html += '<button class="page-btn" onclick="' + fnName + '(' + (pagination.page - 1) + ')"' + (pagination.page <= 1 ? ' disabled' : '') + '><i class="fas fa-chevron-left"></i></button>';
            for (var i = 1; i <= pagination.pages; i++) {
                if (i === pagination.page || i === 1 || i === pagination.pages || Math.abs(i - pagination.page) <= 2) {
                    html += '<button class="page-btn' + (i === pagination.page ? ' active' : '') + '" onclick="' + fnName + '(' + i + ')">' + i + '</button>';
                } else if (Math.abs(i - pagination.page) === 3) {
                    html += '<span style="color:var(--text-muted);padding:8px 4px;">...</span>';
                }
            }
            html += '<button class="page-btn" onclick="' + fnName + '(' + (pagination.page + 1) + ')"' + (pagination.page >= pagination.pages ? ' disabled' : '') + '><i class="fas fa-chevron-right"></i></button>';
            container.innerHTML = html;
        }

        function switchSection(section) {
            document.querySelectorAll('.tab-content').forEach(function(t) { t.classList.remove('active'); });
            document.getElementById('section-' + section).classList.add('active');
            document.querySelectorAll('.sidebar-nav-item').forEach(function(n) { n.classList.remove('active'); });
            var navItem = document.querySelector('.sidebar-nav-item[data-section="' + section + '"]');
            if (navItem) navItem.classList.add('active');
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('sidebarOverlay').classList.remove('show');
            if (section === 'users') loadUsers();
            if (section === 'submissions') loadSubmissions();
            if (section === 'recruitment') loadRecruitmentStats();
        }

        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('open');
            document.getElementById('sidebarOverlay').classList.toggle('show');
        }

        function showNotification(msg, type) {
            var el = document.getElementById('notification');
            el.textContent = msg;
            el.className = 'dash-notification ' + type + ' show';
            setTimeout(function() { el.classList.remove('show'); }, 4000);
        }

        function escapeHtml(text) { var div = document.createElement('div'); div.textContent = text || ''; return div.innerHTML; }

        var recPage = 1;

        async function loadRecruitmentStats() {
            try {
                var res = await TaruAuth.authFetch('/api/recruitment/stats');
                var data = await res.json();
                if (data.success) {
                    document.getElementById('recTotal').textContent = data.data.total || 0;
                    document.getElementById('recPending').textContent = data.data.byStatus?.pending || 0;
                    document.getElementById('recReviewed').textContent = data.data.byStatus?.reviewed || 0;
                    document.getElementById('recApproved').textContent = data.data.byStatus?.approved || 0;
                }
                loadRecruitment();
            } catch (err) { console.error('Recruitment stats error:', err); loadRecruitment(); }
        }

        async function loadRecruitment(page) {
            page = page || recPage;
            recPage = page;
            var position = document.getElementById('recPositionFilter').value;
            var status = document.getElementById('recStatusFilter').value;
            var search = document.getElementById('recSearch').value;
            var query = '?page=' + page + '&limit=15';
            if (position) query += '&position=' + position;
            if (status) query += '&status=' + status;
            if (search) query += '&search=' + encodeURIComponent(search);

            try {
                var res = await TaruAuth.authFetch('/api/recruitment/all' + query);
                var data = await res.json();
                if (data.success) {
                    renderRecruitmentTable(data.data);
                }
            } catch (err) { console.error('Load recruitment error:', err); }
        }

        function renderRecruitmentTable(applicants) {
            var container = document.getElementById('recruitmentTableContainer');
            if (!applicants || applicants.length === 0) {
                container.innerHTML = '<div style="text-align: center; padding: 40px; color: rgba(255,255,255,0.5);"><i class="fas fa-users" style="font-size: 3rem; margin-bottom: 15px;"></i><p>No applicants found.</p></div>';
                return;
            }
            var html = '<table style="width: 100%; border-collapse: collapse; color: #fff;"><thead><tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><th style="padding: 15px; text-align: left; color: rgba(255,255,255,0.7);">Applicant</th><th style="padding: 15px; text-align: left; color: rgba(255,255,255,0.7);">Position</th><th style="padding: 15px; text-align: left; color: rgba(255,255,255,0.7);">Department</th><th style="padding: 15px; text-align: left; color: rgba(255,255,255,0.7);">Year</th><th style="padding: 15px; text-align: left; color: rgba(255,255,255,0.7);">Applied</th><th style="padding: 15px; text-align: left; color: rgba(255,255,255,0.7);">Status</th><th style="padding: 15px; text-align: left; color: rgba(255,255,255,0.7);">Actions</th></tr></thead><tbody>';
            applicants.forEach(function(a) {
                var initial = (a.name || 'A').charAt(0).toUpperCase();
                html += '<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">';
                html += '<td style="padding: 15px;"><div style="display: flex; align-items: center; gap: 10px;"><div style="width: 35px; height: 35px; border-radius: 50%; background: linear-gradient(135deg, #00f0ff, #7b2ff7); display: flex; align-items: center; justify-content: center; font-weight: 600;">' + initial + '</div><div><div style="font-weight: 500;">' + escapeHtml(a.name) + '</div><div style="font-size: 0.85rem; color: rgba(255,255,255,0.5);">' + escapeHtml(a.email) + '</div></div></div></td>';
                html += '<td style="padding: 15px;"><span style="background: rgba(0,240,255,0.15); color: #00f0ff; padding: 4px 10px; border-radius: 12px; font-size: 0.85rem;">' + escapeHtml(a.position) + '</span></td>';
                html += '<td style="padding: 15px;">' + escapeHtml(a.department) + '</td>';
                html += '<td style="padding: 15px;">' + escapeHtml(a.year) + '</td>';
                html += '<td style="padding: 15px;">' + new Date(a.submittedAt).toLocaleDateString() + '</td>';
                var statusColor = a.status === 'approved' ? '#00ff88' : a.status === 'rejected' ? '#ff4444' : a.status === 'reviewed' ? '#7b2ff7' : '#ffd700';
                html += '<td style="padding: 15px;"><span style="background: rgba(255,255,255,0.1); color: ' + statusColor + '; padding: 4px 10px; border-radius: 12px; font-size: 0.85rem; text-transform: capitalize;">' + (a.status || 'pending') + '</span></td>';
                html += '<td style="padding: 15px; white-space: nowrap;">';
                html += '<button style="background: rgba(0,240,255,0.1); border: 1px solid rgba(0,240,255,0.3); color: #00f0ff; padding: 6px 10px; border-radius: 6px; cursor: pointer; margin-right: 5px;" onclick="viewApplicant(\\'' + a._id + '\\')" title="View Details"><i class="fas fa-eye"></i></button> ';
                html += '<select style="padding: 6px 8px; background: #1a1a3e; border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: #fff; font-size: 12px; min-width: 100px; cursor: pointer;" onchange="updateRecruitmentStatus(\\'' + a._id + '\\', this.value)">';
                ['pending', 'reviewed', 'approved', 'rejected'].forEach(function(st) {
                    html += '<option value="' + st + '"' + (a.status === st ? ' selected' : '') + '">' + st.charAt(0).toUpperCase() + st.slice(1) + '</option>';
                });
                html += '</select></td></tr>';
            });
            container.innerHTML = html + '</tbody></table>';
        }

        async function viewApplicant(id) {
            try {
                var res = await TaruAuth.authFetch('/api/recruitment/' + id);
                var data = await res.json();
                if (data.success) {
                    showApplicantModal(data.data);
                }
            } catch (err) { showNotification('Error loading applicant', 'error'); }
        }

        function showApplicantModal(app) {
            var details = document.getElementById('applicantDetails');
            var roleData = app.roleSpecificData || {};
            
            var html = '<h2 style="color:var(--accent);margin-bottom:20px;">Applicant Details</h2>';
            html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:20px;">';
            html += '<div><p style="color:var(--text-muted);font-size:12px;">Name</p><p style="font-weight:600;">' + escapeHtml(app.name) + '</p></div>';
            html += '<div><p style="color:var(--text-muted);font-size:12px;">Email</p><p>' + escapeHtml(app.email) + '</p></div>';
            html += '<div><p style="color:var(--text-muted);font-size:12px;">Phone</p><p>' + escapeHtml(app.phone) + '</p></div>';
            html += '<div><p style="color:var(--text-muted);font-size:12px;">WhatsApp</p><p>' + escapeHtml(app.whatsapp) + '</p></div>';
            html += '<div><p style="color:var(--text-muted);font-size:12px;">Roll Number</p><p>' + escapeHtml(app.classRoll) + '</p></div>';
            html += '<div><p style="color:var(--text-muted);font-size:12px;">Department</p><p>' + escapeHtml(app.department) + '</p></div>';
            html += '<div><p style="color:var(--text-muted);font-size:12px;">Year</p><p>' + escapeHtml(app.year) + '</p></div>';
            html += '<div><p style="color:var(--text-muted);font-size:12px;">Position Applied</p><p><span class="role-badge role-user">' + escapeHtml(app.position) + '</span></p></div>';
            html += '</div>';
            
            html += '<div style="margin-bottom:20px;"><p style="color:var(--text-muted);font-size:12px;margin-bottom:5px;">Why do they want to join?</p><p style="background:rgba(255,255,255,0.05);padding:12px;border-radius:8px;">' + escapeHtml(app.whyJoin) + '</p></div>';
            
            if (Object.keys(roleData).length > 0) {
                html += '<div style="margin-bottom:20px;"><p style="color:var(--accent);font-size:14px;font-weight:600;margin-bottom:10px;">Role-Specific Details</p>';
                html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">';
                for (var key in roleData) {
                    if (roleData[key]) {
                        html += '<div><p style="color:var(--text-muted);font-size:11px;">' + key.charAt(0).toUpperCase() + key.slice(1) + '</p><p>' + escapeHtml(roleData[key]) + '</p></div>';
                    }
                }
                html += '</div></div>';
            }
            
            if (app.files) {
                html += '<div style="margin-bottom:20px;"><p style="color:var(--accent);font-size:14px;font-weight:600;margin-bottom:10px;">Uploaded Files</p>';
                if (app.files.samplePdf) {
                    html += '<a href="' + app.files.samplePdf + '" target="_blank" class="btn btn-outline btn-sm" style="margin-right:10px;"><i class="fas fa-file-pdf"></i> View Sample</a>';
                }
                if (app.files.certificate) {
                    html += '<a href="' + app.files.certificate + '" target="_blank" class="btn btn-outline btn-sm"><i class="fas fa-certificate"></i> View Certificate</a>';
                }
                html += '</div>';
            }
            
            html += '<div><p style="color:var(--text-muted);font-size:12px;">Applied On</p><p>' + new Date(app.submittedAt).toLocaleString() + '</p></div>';
            
            details.innerHTML = html;
            document.getElementById('applicantModal').style.display = 'flex';
        }

        function closeApplicantModal() {
            document.getElementById('applicantModal').style.display = 'none';
        }

        async function updateRecruitmentStatus(id, status) {
            try {
                var res = await TaruAuth.authFetch('/api/recruitment/' + id + '/status', { method: 'PUT', body: JSON.stringify({ status: status }) });
                var data = await res.json();
                if (data.success) { showNotification('Status updated', 'success'); loadRecruitment(); }
                else { showNotification(data.message || 'Failed', 'error'); }
            } catch (err) { showNotification('Error', 'error'); }
        }

        initAdmin();
    `}],$o=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function Pf(n){for(const t of Cf)if(t.kind==="external"){if($o.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),$o.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function If(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const qo="Admin";function Rf(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},Pf(qo);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{If(qo),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-Admin",children:[e.jsx("div",{className:"dash-bg"}),e.jsx("div",{className:"dash-grid"}),e.jsx("div",{className:"dash-notification",id:"notification"}),e.jsxs("div",{className:"mobile-header",children:[e.jsx("button",{className:"mobile-menu-btn","data-legacy-onclick":"toggleSidebar()",children:e.jsx("i",{className:"fas fa-bars"})}),e.jsx("div",{className:"mobile-logo",children:"ADMIN PANEL"}),e.jsx("button",{className:"mobile-menu-btn","data-legacy-onclick":"TaruAuth.logout()",children:e.jsx("i",{className:"fas fa-sign-out-alt"})})]}),e.jsx("div",{className:"sidebar-overlay",id:"sidebarOverlay","data-legacy-onclick":"toggleSidebar()"}),e.jsxs("div",{className:"sidebar",id:"sidebar",children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("div",{className:"sidebar-logo",children:"TARUGUARDIANS"}),e.jsx("div",{className:"sidebar-logo-sub",children:"Admin Panel"})]}),e.jsxs("div",{className:"sidebar-user",children:[e.jsx("div",{className:"sidebar-avatar",id:"sidebarAvatar",children:e.jsx("span",{id:"sidebarAvatarText",children:"A"})}),e.jsxs("div",{className:"sidebar-user-info",children:[e.jsx("div",{className:"sidebar-user-name",id:"sidebarUserName",children:"Admin"}),e.jsx("div",{className:"sidebar-user-role",children:"Administrator"})]})]}),e.jsxs("nav",{className:"sidebar-nav",children:[e.jsxs("a",{className:"sidebar-nav-item active","data-section":"overview","data-legacy-onclick":"switchSection('overview')",children:[e.jsx("i",{className:"fas fa-th-large"})," Dashboard"]}),e.jsxs("a",{className:"sidebar-nav-item","data-section":"users","data-legacy-onclick":"switchSection('users')",children:[e.jsx("i",{className:"fas fa-users"})," Users"]}),e.jsxs("a",{className:"sidebar-nav-item","data-section":"submissions","data-legacy-onclick":"switchSection('submissions')",children:[e.jsx("i",{className:"fas fa-file-alt"})," Submissions"]}),e.jsxs("a",{className:"sidebar-nav-item","data-section":"recruitment","data-legacy-onclick":"switchSection('recruitment')",children:[e.jsx("i",{className:"fas fa-user-plus"})," Recruitment"]}),e.jsxs(x,{to:"/home",className:"sidebar-nav-item",children:[e.jsx("i",{className:"fas fa-home"})," Back to Home"]})]}),e.jsx("div",{className:"sidebar-footer",children:e.jsxs("button",{className:"sidebar-logout","data-legacy-onclick":"TaruAuth.logout()",children:[e.jsx("i",{className:"fas fa-sign-out-alt"})," Logout"]})})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"tab-content active",id:"section-overview",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"Admin Dashboard"}),e.jsx("p",{className:"page-subtitle",children:"System overview and management"})]}),e.jsxs("div",{className:"stats-grid",id:"statsGrid",children:[e.jsxs("div",{className:"stat-card",title:"Total website visitors",children:[e.jsx("div",{className:"stat-icon gold",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsx("div",{className:"stat-value",id:"statVisitors",children:"0"}),e.jsx("div",{className:"stat-label",children:"Total Visitors"})]}),e.jsxs("div",{className:"stat-card",title:"Currently online users",children:[e.jsx("div",{className:"stat-icon green",children:e.jsx("i",{className:"fas fa-users"})}),e.jsx("div",{className:"stat-value",id:"statOnline",children:"0"}),e.jsx("div",{className:"stat-label",children:"Online Now"})]}),e.jsxs("div",{className:"stat-card",title:"Total registered users",children:[e.jsx("div",{className:"stat-icon blue",children:e.jsx("i",{className:"fas fa-user-plus"})}),e.jsx("div",{className:"stat-value",id:"statTotal",children:"0"}),e.jsx("div",{className:"stat-label",children:"Total Users"})]}),e.jsxs("div",{className:"stat-card",title:"Active users in last 30 days",children:[e.jsx("div",{className:"stat-icon purple",children:e.jsx("i",{className:"fas fa-user-check"})}),e.jsx("div",{className:"stat-value",id:"statActive",children:"0"}),e.jsx("div",{className:"stat-label",children:"Active (30d)"})]})]}),e.jsxs("div",{className:"dash-section",style:{marginTop:"24px"},children:[e.jsx("div",{className:"section-header",children:e.jsxs("h2",{className:"section-title",children:[e.jsx("i",{className:"fas fa-list"})," All Registered Users"]})}),e.jsx("div",{className:"table-container",id:"allUsersTable",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-users"}),e.jsx("p",{children:"Loading users..."})]})}),e.jsx("div",{className:"pagination",id:"allUsersPagination"})]})]}),e.jsxs("div",{className:"tab-content",id:"section-users",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"User Management"}),e.jsx("p",{className:"page-subtitle",children:"Manage all registered users"})]}),e.jsxs("div",{className:"dash-section",children:[e.jsxs("div",{className:"section-header",children:[e.jsxs("h2",{className:"section-title",children:[e.jsx("i",{className:"fas fa-users"})," All Users"]}),e.jsxs("div",{className:"search-bar",children:[e.jsx("input",{type:"text",className:"search-input",id:"userSearch",placeholder:"Search users...","data-legacy-oninput":"searchUsers()"}),e.jsxs("select",{className:"search-input",id:"roleFilter","data-legacy-onchange":"searchUsers()",style:{minWidth:"120px"},children:[e.jsx("option",{value:!0,children:"All Roles"}),e.jsx("option",{value:"user",children:"User"}),e.jsx("option",{value:"admin",children:"Admin"})]}),e.jsxs("select",{className:"search-input",id:"statusFilter","data-legacy-onchange":"searchUsers()",style:{minWidth:"130px"},children:[e.jsx("option",{value:!0,children:"All Status"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"})]})]})]}),e.jsx("div",{className:"table-container",id:"usersTableContainer",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-users"}),e.jsx("p",{children:"Loading users..."})]})}),e.jsx("div",{className:"pagination",id:"usersPagination"})]})]}),e.jsxs("div",{className:"tab-content",id:"section-submissions",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"Form Submissions"}),e.jsx("p",{className:"page-subtitle",children:"View and manage all form submissions"})]}),e.jsxs("div",{className:"dash-section",children:[e.jsxs("div",{className:"section-header",children:[e.jsxs("h2",{className:"section-title",children:[e.jsx("i",{className:"fas fa-file-alt"})," All Submissions"]}),e.jsx("div",{className:"search-bar",children:e.jsxs("select",{className:"search-input",id:"subStatusFilter","data-legacy-onchange":"loadSubmissions()",style:{minWidth:"130px"},children:[e.jsx("option",{value:!0,children:"All Status"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"reviewed",children:"Reviewed"}),e.jsx("option",{value:"approved",children:"Approved"}),e.jsx("option",{value:"rejected",children:"Rejected"})]})})]}),e.jsx("div",{className:"table-container",id:"submissionsTableContainer",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-file-alt"}),e.jsx("p",{children:"Loading submissions..."})]})}),e.jsx("div",{className:"pagination",id:"subsPagination"})]})]}),e.jsxs("div",{className:"tab-content",id:"section-recruitment",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"Recruitment Management"}),e.jsx("p",{className:"page-subtitle",children:"View and manage all recruitment applications"})]}),e.jsxs("div",{className:"stats-grid",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px",marginBottom:"30px"},children:[e.jsxs("div",{className:"stat-card",style:{background:"linear-gradient(135deg, #1a1a2e, #16213e)",border:"1px solid rgba(0,240,255,0.3)",borderRadius:"16px",padding:"25px",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"2.5rem",color:"#00f0ff",fontWeight:"700"},id:"recTotal",children:"0"}),e.jsx("div",{style:{color:"rgba(255,255,255,0.7)",fontSize:"0.9rem",marginTop:"5px"},children:"Total Applicants"})]}),e.jsxs("div",{className:"stat-card",style:{background:"linear-gradient(135deg, #1a1a2e, #16213e)",border:"1px solid rgba(255,215,0,0.3)",borderRadius:"16px",padding:"25px",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"2.5rem",color:"#ffd700",fontWeight:"700"},id:"recPending",children:"0"}),e.jsx("div",{style:{color:"rgba(255,255,255,0.7)",fontSize:"0.9rem",marginTop:"5px"},children:"Pending"})]}),e.jsxs("div",{className:"stat-card",style:{background:"linear-gradient(135deg, #1a1a2e, #16213e)",border:"1px solid rgba(123,47,247,0.3)",borderRadius:"16px",padding:"25px",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"2.5rem",color:"#7b2ff7",fontWeight:"700"},id:"recReviewed",children:"0"}),e.jsx("div",{style:{color:"rgba(255,255,255,0.7)",fontSize:"0.9rem",marginTop:"5px"},children:"Reviewed"})]}),e.jsxs("div",{className:"stat-card",style:{background:"linear-gradient(135deg, #1a1a2e, #16213e)",border:"1px solid rgba(0,255,136,0.3)",borderRadius:"16px",padding:"25px",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"2.5rem",color:"#00ff88",fontWeight:"700"},id:"recApproved",children:"0"}),e.jsx("div",{style:{color:"rgba(255,255,255,0.7)",fontSize:"0.9rem",marginTop:"5px"},children:"Approved"})]})]}),e.jsxs("div",{className:"dash-section",style:{background:"linear-gradient(135deg, #1a1a2e, #16213e)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"20px",padding:"25px"},children:[e.jsxs("div",{className:"section-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"25px",flexWrap:"wrap",gap:"15px"},children:[e.jsxs("h2",{className:"section-title",style:{color:"#fff",fontSize:"1.3rem",margin:"0"},children:[e.jsx("i",{className:"fas fa-users",style:{color:"#00f0ff",marginRight:"10px"}})," All Applicants"]}),e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsxs("select",{"data-legacy-onchange":"loadRecruitment()",style:{padding:"10px 15px",background:"#1a1a3e",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",color:"#fff",minWidth:"150px",cursor:"pointer"},id:"recPositionFilter",children:[e.jsx("option",{value:!0,children:"All Positions"}),e.jsx("option",{value:"Public Relation",children:"Public Relation"}),e.jsx("option",{value:"Web/App Developer",children:"Web/App Developer"}),e.jsx("option",{value:"Photographer/Videographer",children:"Photographer"}),e.jsx("option",{value:"Video Editor",children:"Video Editor"}),e.jsx("option",{value:"Graphics Designer",children:"Graphics Designer"}),e.jsx("option",{value:"Content Writer",children:"Content Writer"})]}),e.jsxs("select",{"data-legacy-onchange":"loadRecruitment()",style:{padding:"10px 15px",background:"#1a1a3e",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",color:"#fff",minWidth:"130px",cursor:"pointer"},id:"recStatusFilter",children:[e.jsx("option",{value:!0,children:"All Status"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"reviewed",children:"Reviewed"}),e.jsx("option",{value:"approved",children:"Approved"}),e.jsx("option",{value:"rejected",children:"Rejected"})]}),e.jsx("input",{type:"text","data-legacy-oninput":"loadRecruitment()",placeholder:"Search by name/email...",style:{padding:"10px 15px",background:"#1a1a3e",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",color:"#fff",minWidth:"200px"}})]})]}),e.jsx("div",{style:{overflowX:"auto",color:"#fff"},id:"recruitmentTableContainer",children:e.jsxs("div",{style:{textAlign:"center",padding:"40px",color:"rgba(255,255,255,0.5)"},children:[e.jsx("i",{className:"fas fa-spinner fa-spin",style:{fontSize:"2rem",marginBottom:"15px"}}),e.jsx("p",{children:"Loading applicants..."})]})}),e.jsx("div",{id:"recPagination",style:{marginTop:"20px",textAlign:"center"}})]})]})]}),e.jsx("div",{id:"applicantModal",style:{display:"none",position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(0,0,0,0.8)",zIndex:"2000",justifyContent:"center",alignItems:"center",padding:"20px"},children:e.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--glass-border)",borderRadius:"16px",maxWidth:"700px",width:"100%",maxHeight:"85vh",overflowY:"auto",position:"relative"},children:[e.jsx("button",{"data-legacy-onclick":"closeApplicantModal()",style:{position:"absolute",top:"15px",right:"15px",background:"none",border:"none",color:"var(--text)",fontSize:"24px",cursor:"pointer"},children:"×"}),e.jsx("div",{style:{padding:"25px"},id:"applicantDetails"})]})})]})}const Lf=[{kind:"external",src:"frontend-auth.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
        if (!TaruAuth.requireUser()) { /* redirects */ }

        var userData = null;

        async function initDashboard() {
            try {
                var res = await TaruAuth.authFetch('/users/profile');
                var data = await res.json();
                if (data.success) {
                    userData = data.user;
                    renderUserInfo();
                    renderStats();
                    loadCertificates();
                    loadSubmissions();
                    renderAccountInfo();
                }
            } catch (err) {
                console.error('Dashboard init error:', err);
            }
        }

        function renderUserInfo() {
            if (!userData) return;
            var initial = userData.name ? userData.name.charAt(0).toUpperCase() : 'U';
            document.getElementById('welcomeName').textContent = userData.name || 'User';
            document.getElementById('sidebarUserName').textContent = userData.name || 'User';
            document.getElementById('sidebarUserRole').textContent = userData.role || 'Member';
            document.getElementById('sidebarAvatarText').textContent = initial;
            document.getElementById('profileName').value = userData.name || '';
            document.getElementById('profileEmail').value = userData.email || '';
            document.getElementById('profilePhone').value = userData.phone || '';
            document.getElementById('profileCollege').value = userData.college || '';
            document.getElementById('profileYear').value = userData.year || '';
            document.getElementById('profileBio').value = userData.bio || '';
            if (userData.profilePicture) {
                var profileImg = document.getElementById('profileAvatarImg');
                var profileText = document.getElementById('profileAvatarText');
                profileImg.src = userData.profilePicture;
                profileImg.style.display = 'block';
                profileText.style.display = 'none';
                var sidebarAvatar = document.getElementById('sidebarAvatar');
                if (sidebarAvatar) {
                    sidebarAvatar.innerHTML = '<img src="' + userData.profilePicture + '" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">';
                }
            } else {
                document.getElementById('profileAvatarText').textContent = initial;
                document.getElementById('profileAvatarText').style.display = 'block';
                document.getElementById('profileAvatarImg').style.display = 'none';
            }
        }

        function renderStats() {
            if (!userData) return;
            document.getElementById('statCerts').textContent = userData.certificates ? userData.certificates.length : 0;
            document.getElementById('statSubmissions').textContent = userData.formSubmissions ? userData.formSubmissions.length : 0;
            document.getElementById('statEvents').textContent = userData.events ? userData.events.length : 0;
            var days = Math.floor((Date.now() - new Date(userData.createdAt).getTime()) / (1000 * 60 * 60 * 24));
            document.getElementById('statDays').textContent = days || 1;
        }

        function loadCertificates() {
            var certs = userData.certificates || [];
            var grid = document.getElementById('certGrid');
            var recentDiv = document.getElementById('recentCerts');
            if (certs.length === 0) {
                grid.innerHTML = '<div class="empty-state"><i class="fas fa-certificate"></i><p>No certificates yet.</p></div>';
                return;
            }
            grid.innerHTML = certs.map(function(cert) {
                return '<div class="cert-card"><div class="cert-icon"><i class="fas fa-award"></i></div>' +
                    '<div class="cert-name">' + escapeHtml(cert.certificateName) + '</div>' +
                    '<div class="cert-desc">' + escapeHtml(cert.description || '') + '</div>' +
                    '<div class="cert-date"><i class="fas fa-calendar"></i> ' + new Date(cert.issueDate).toLocaleDateString() + '</div>' +
                    '<div class="cert-actions">' +
                    (cert.filePath ? '<a href="' + cert.filePath + '" target="_blank" class="btn btn-outline" style="font-size:12px;padding:6px 12px;"><i class="fas fa-download"></i> View</a>' : '') +
                    '<button class="btn btn-danger" style="font-size:12px;padding:6px 12px;" onclick="deleteCertificate(\\'' + cert._id + '\\')"><i class="fas fa-trash"></i></button></div></div>';
            }).join('');
            var recent = certs.slice(-3).reverse();
            recentDiv.innerHTML = '<div class="cert-grid">' + recent.map(function(cert) {
                return '<div class="cert-card"><div class="cert-icon"><i class="fas fa-award"></i></div><div class="cert-name">' + escapeHtml(cert.certificateName) + '</div><div class="cert-date">' + new Date(cert.issueDate).toLocaleDateString() + '</div></div>';
            }).join('') + '</div>';
        }

        async function addCertificate(e) {
            e.preventDefault();
            var certName = document.getElementById('certName').value.trim();
            if (!certName) {
                showNotification('Please enter certificate name', 'error');
                return;
            }
            var formData = new FormData();
            formData.append('certificateName', certName);
            formData.append('description', document.getElementById('certDesc').value.trim());
            var file = document.getElementById('certFile').files[0];
            if (file) formData.append('certificate', file);
            try {
                var res = await TaruAuth.authFetch('/users/certificates', { method: 'POST', body: formData });
                var data = await res.json();
                if (data.success) { 
                    showNotification('Certificate added successfully!', 'success'); 
                    closeModal('addCertModal'); 
                    document.getElementById('certName').value = '';
                    document.getElementById('certDesc').value = '';
                    document.getElementById('certFile').value = '';
                    initDashboard(); 
                }
                else { showNotification(data.message || 'Failed to add certificate', 'error'); }
            } catch (err) { 
                console.error('Certificate error:', err); 
                showNotification('Error adding certificate. Please try again.', 'error'); 
            }
        }

        async function deleteCertificate(certId) {
            if (!confirm('Delete this certificate?')) return;
            try {
                var res = await TaruAuth.authFetch('/users/certificates/' + certId, { method: 'DELETE' });
                var data = await res.json();
                if (data.success) { showNotification('Deleted', 'success'); initDashboard(); }
            } catch (err) { showNotification('Error', 'error'); }
        }

        function loadSubmissions() {
            var subs = userData.formSubmissions || [];
            var container = document.getElementById('submissionsTable');
            var recentDiv = document.getElementById('recentSubmissions');
            if (subs.length === 0) { container.innerHTML = '<div class="empty-state"><i class="fas fa-file-alt"></i><p>No submissions yet.</p></div>'; return; }
            var tableHTML = '<table class="dash-table"><thead><tr><th>Form Type</th><th>Submitted At</th><th>Status</th></tr></thead><tbody>';
            subs.forEach(function(sub) {
                tableHTML += '<tr><td>' + escapeHtml(sub.formType) + '</td><td>' + new Date(sub.submittedAt).toLocaleDateString() + '</td><td><span class="status-badge status-' + sub.status + '">' + sub.status + '</span></td></tr>';
            });
            container.innerHTML = tableHTML + '</tbody></table>';
            var recent = subs.slice(-3).reverse();
            var rHTML = '<table class="dash-table"><thead><tr><th>Form</th><th>Date</th><th>Status</th></tr></thead><tbody>';
            recent.forEach(function(sub) { rHTML += '<tr><td>' + escapeHtml(sub.formType) + '</td><td>' + new Date(sub.submittedAt).toLocaleDateString() + '</td><td><span class="status-badge status-' + sub.status + '">' + sub.status + '</span></td></tr>'; });
            recentDiv.innerHTML = rHTML + '</tbody></table>';
        }

        async function loadApplications() {
            var user = TaruAuth.getUser();
            if (!user || !user.email) return;
            
            try {
                var res = await TaruAuth.authFetch('/recruitment/user/' + encodeURIComponent(user.email));
                var data = await res.json();
                var container = document.getElementById('applicationsTable');
                
                if (data.success && data.data && data.data.length > 0) {
                    var html = '<table class="dash-table"><thead><tr><th>Position</th><th>Department</th><th>Year</th><th>Applied On</th><th>Status</th></tr></thead><tbody>';
                    data.data.forEach(function(app) {
                        var statusClass = app.status || 'pending';
                        html += '<tr>';
                        html += '<td><strong style="color: #00f0ff;">' + escapeHtml(app.position) + '</strong></td>';
                        html += '<td>' + escapeHtml(app.department) + '</td>';
                        html += '<td>' + escapeHtml(app.year) + '</td>';
                        html += '<td>' + new Date(app.submittedAt).toLocaleDateString() + '</td>';
                        html += '<td><span class="status-badge status-' + statusClass + '">' + statusClass.charAt(0).toUpperCase() + statusClass.slice(1) + '</span></td>';
                        html += '</tr>';
                    });
                    html += '</tbody></table>';
                    
                    // Add view details button
                    html += '<div style="margin-top: 20px;">';
                    html += '<button class="btn btn-outline" onclick="viewApplicationDetails(\\'' + data.data[0]._id + '\\')"><i class="fas fa-eye"></i> View Full Details</button>';
                    html += '</div>';
                    
                    container.innerHTML = html;
                } else {
                    container.innerHTML = '<div class="empty-state"><i class="fas fa-paper-plane"></i><p>You haven\\'t applied for any positions yet.</p><a href="recruitment.html" class="btn btn-primary" style="margin-top: 15px;">Apply Now</a></div>';
                }
            } catch (err) {
                console.error('Load applications error:', err);
                document.getElementById('applicationsTable').innerHTML = '<div class="empty-state"><i class="fas fa-exclamation-circle"></i><p>Error loading applications.</p></div>';
            }
        }

        async function viewApplicationDetails(appId) {
            try {
                var res = await TaruAuth.authFetch('/recruitment/' + appId);
                var data = await res.json();
                
                if (data.success && data.data) {
                    var app = data.data;
                    var details = 'Applied Position: ' + app.position + '\\n';
                    details += 'Name: ' + app.name + '\\n';
                    details += 'Email: ' + app.email + '\\n';
                    details += 'Phone: ' + app.phone + '\\n';
                    details += 'Department: ' + app.department + '\\n';
                    details += 'Year: ' + app.year + '\\n';
                    details += 'Why Join: ' + app.whyJoin + '\\n';
                    details += 'Status: ' + app.status + '\\n';
                    
                    if (app.roleSpecificData && Object.keys(app.roleSpecificData).length > 0) {
                        details += '\\nRole-specific Details:\\n';
                        for (var key in app.roleSpecificData) {
                            details += key + ': ' + app.roleSpecificData[key] + '\\n';
                        }
                    }
                    
                    alert(details);
                }
            } catch (err) {
                showNotification('Error loading details', 'error');
            }
        }

        async function updateProfile(e) {
            e.preventDefault();
            var body = { name: document.getElementById('profileName').value.trim(), phone: document.getElementById('profilePhone').value.trim(), college: document.getElementById('profileCollege').value.trim(), year: document.getElementById('profileYear').value.trim(), bio: document.getElementById('profileBio').value.trim() };
            try {
                var res = await TaruAuth.authFetch('/users/profile', { method: 'PUT', body: JSON.stringify(body) });
                var data = await res.json();
                if (data.success) { TaruAuth.saveAuth(TaruAuth.getToken(), TaruAuth.getRefreshToken(), data.user); showNotification('Profile updated!', 'success'); initDashboard(); }
                else { showNotification(data.message || 'Failed', 'error'); }
            } catch (err) { showNotification('Error', 'error'); }
        }

        async function uploadAvatar(input) {
            if (!input.files[0]) return;
            
            var file = input.files[0];
            var reader = new FileReader();
            
            reader.onload = function(e) {
                var img = document.getElementById('profileAvatarImg');
                var text = document.getElementById('profileAvatarText');
                img.src = e.target.result;
                img.style.display = 'block';
                text.style.display = 'none';
            };
            reader.readAsDataURL(file);

            var formData = new FormData();
            formData.append('profilePicture', file);
            try {
                var res = await TaruAuth.authFetch('/users/profile', { method: 'PUT', body: formData });
                var data = await res.json();
                if (data.success) { 
                    TaruAuth.saveAuth(TaruAuth.getToken(), TaruAuth.getRefreshToken(), data.user); 
                    showNotification('Profile photo updated!', 'success'); 
                    initDashboard(); 
                } else {
                    showNotification(data.message || 'Upload failed', 'error');
                }
            } catch (err) { 
                showNotification('Error uploading avatar', 'error'); 
            }
        }

        async function changePassword(e) {
            e.preventDefault();
            var np = document.getElementById('newPassword').value;
            var cn = document.getElementById('confirmNewPassword').value;
            if (np !== cn) { showNotification('Passwords do not match', 'error'); return; }
            if (np.length < 6) { showNotification('Min 6 characters', 'error'); return; }
            try {
                var res = await TaruAuth.authFetch('/users/change-password', { method: 'PUT', body: JSON.stringify({ currentPassword: document.getElementById('currentPassword').value, newPassword: np }) });
                var data = await res.json();
                if (data.success) { showNotification('Password changed!', 'success'); document.getElementById('currentPassword').value = ''; document.getElementById('newPassword').value = ''; document.getElementById('confirmNewPassword').value = ''; }
                else { showNotification(data.message || 'Failed', 'error'); }
            } catch (err) { showNotification('Error', 'error'); }
        }

        function renderAccountInfo() {
            if (!userData) return;
            document.getElementById('accountInfo').innerHTML = '<div class="profile-details" style="max-width:500px;">' +
                '<div class="profile-field"><div class="profile-field-label">Account Created</div><div class="profile-field-value">' + new Date(userData.createdAt).toLocaleDateString() + '</div></div>' +
                '<div class="profile-field"><div class="profile-field-label">Auth Provider</div><div class="profile-field-value">' + (userData.authProvider || 'Local') + '</div></div>' +
                '<div class="profile-field"><div class="profile-field-label">Last Login</div><div class="profile-field-value">' + (userData.lastLogin ? new Date(userData.lastLogin).toLocaleString() : 'N/A') + '</div></div>' +
                '<div class="profile-field"><div class="profile-field-label">Role</div><div class="profile-field-value" style="text-transform:capitalize;">' + (userData.role || 'User') + '</div></div></div>';
        }

        function switchSection(section) {
            document.querySelectorAll('.tab-content').forEach(function(t) { t.classList.remove('active'); });
            document.getElementById('section-' + section).classList.add('active');
            document.querySelectorAll('.sidebar-nav-item').forEach(function(n) { n.classList.remove('active'); });
            var navItem = document.querySelector('.sidebar-nav-item[data-section="' + section + '"]');
            if (navItem) navItem.classList.add('active');
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('sidebarOverlay').classList.remove('show');
            
            // Load applications when switching to applications section
            if (section === 'applications') {
                loadApplications();
            }
        }

        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('open');
            document.getElementById('sidebarOverlay').classList.toggle('show');
        }

        function openModal(id) { document.getElementById(id).classList.add('show'); }
        function closeModal(id) { document.getElementById(id).classList.remove('show'); }

        function showNotification(msg, type) {
            var el = document.getElementById('notification');
            el.textContent = msg;
            el.className = 'dash-notification ' + type + ' show';
            setTimeout(function() { el.classList.remove('show'); }, 4000);
        }

        function escapeHtml(text) { var div = document.createElement('div'); div.textContent = text; return div.innerHTML; }

        // === Anime Floating Particles ===
        function createAnimeParticles() {
            var container = document.createElement('div');
            container.id = 'anime-particles';
            container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:hidden;';
            document.body.appendChild(container);
            
            var particles = ['✦', '⚡', '❀', '✿', '★', '☆', '⚔', '✧', '❦', '☯'];
            var colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff69b4', '#00ff88'];
            
            for (var i = 0; i < 20; i++) {
                (function(index) {
                    setTimeout(function() {
                        var particle = document.createElement('div');
                        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
                        particle.style.cssText = 
                            'position:absolute;' +
                            'font-size:' + (15 + Math.random() * 25) + 'px;' +
                            'left:' + Math.random() * 100 + '%;' +
                            'top:100%;' +
                            'color:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
                            'opacity:0.4;' +
                            'animation:floatUp ' + (8 + Math.random() * 8) + 's linear infinite;' +
                            'animation-delay:' + (Math.random() * 5) + 's;' +
                            'text-shadow:0 0 20px currentColor;';
                        container.appendChild(particle);
                    }, index * 500);
                })(i);
            }
            
            var style = document.createElement('style');
            style.textContent = '@keyframes floatUp {0%{transform:translateY(0) rotate(0deg);opacity:0.4;}50%{opacity:0.8;}100%{transform:translateY(-100vh) rotate(360deg);opacity:0;}}';
            document.head.appendChild(style);
        }
        
        createAnimeParticles();

        initDashboard();
    `}],Xo=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function Mf(n){for(const t of Lf)if(t.kind==="external"){if(Xo.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),Xo.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function Bf(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const Jo="Dashboard";function zf(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},Mf(Jo);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{Bf(Jo),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-Dashboard",children:[e.jsx("div",{className:"dash-bg"}),e.jsx("div",{className:"dash-grid"}),e.jsx("div",{className:"dash-notification",id:"notification"}),e.jsxs("div",{className:"mobile-header",children:[e.jsx("button",{className:"mobile-menu-btn","data-legacy-onclick":"toggleSidebar()",children:e.jsx("i",{className:"fas fa-bars"})}),e.jsx("div",{className:"mobile-logo",children:"TARUGUARDIANS"}),e.jsx("button",{className:"mobile-menu-btn","data-legacy-onclick":"TaruAuth.logout()",children:e.jsx("i",{className:"fas fa-sign-out-alt"})})]}),e.jsx("div",{className:"sidebar-overlay",id:"sidebarOverlay","data-legacy-onclick":"toggleSidebar()"}),e.jsxs("div",{className:"sidebar",id:"sidebar",children:[e.jsx("div",{className:"sidebar-header",children:e.jsx("div",{className:"sidebar-logo",children:"TARUGUARDIANS"})}),e.jsxs("div",{className:"sidebar-user",children:[e.jsx("div",{className:"sidebar-avatar",id:"sidebarAvatar",children:e.jsx("span",{id:"sidebarAvatarText",children:"U"})}),e.jsxs("div",{className:"sidebar-user-info",children:[e.jsx("div",{className:"sidebar-user-name",id:"sidebarUserName",children:"User"}),e.jsx("div",{className:"sidebar-user-role",id:"sidebarUserRole",children:"Member"})]})]}),e.jsxs("nav",{className:"sidebar-nav",children:[e.jsxs("a",{className:"sidebar-nav-item active","data-section":"overview","data-legacy-onclick":"switchSection('overview')",children:[e.jsx("i",{className:"fas fa-th-large"})," Overview"]}),e.jsxs("a",{className:"sidebar-nav-item","data-section":"profile","data-legacy-onclick":"switchSection('profile')",children:[e.jsx("i",{className:"fas fa-user"})," Profile"]}),e.jsxs("a",{className:"sidebar-nav-item","data-section":"certificates","data-legacy-onclick":"switchSection('certificates')",children:[e.jsx("i",{className:"fas fa-certificate"})," Certificates"]}),e.jsxs("a",{className:"sidebar-nav-item","data-section":"submissions","data-legacy-onclick":"switchSection('submissions')",children:[e.jsx("i",{className:"fas fa-file-alt"})," Submissions"]}),e.jsxs("a",{className:"sidebar-nav-item active","data-section":"applications","data-legacy-onclick":"switchSection('applications')",children:[e.jsx("i",{className:"fas fa-paper-plane"})," My Applications"]}),e.jsxs("a",{className:"sidebar-nav-item","data-section":"settings","data-legacy-onclick":"switchSection('settings')",children:[e.jsx("i",{className:"fas fa-cog"})," Settings"]}),e.jsxs(x,{to:"/home",className:"sidebar-nav-item",children:[e.jsx("i",{className:"fas fa-home"})," Back to Home"]})]}),e.jsx("div",{className:"sidebar-footer",children:e.jsxs("button",{className:"sidebar-logout","data-legacy-onclick":"TaruAuth.logout()",children:[e.jsx("i",{className:"fas fa-sign-out-alt"})," Logout"]})})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"tab-content active",id:"section-overview",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("h1",{className:"page-title",children:["Welcome back, ",e.jsx("span",{id:"welcomeName",children:"User"}),"!"]}),e.jsx("p",{className:"page-subtitle",children:"Here's your dashboard overview"})]}),e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon blue",children:e.jsx("i",{className:"fas fa-certificate"})}),e.jsx("div",{className:"stat-value",id:"statCerts",children:"0"}),e.jsx("div",{className:"stat-label",children:"Certificates"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon purple",children:e.jsx("i",{className:"fas fa-file-alt"})}),e.jsx("div",{className:"stat-value",id:"statSubmissions",children:"0"}),e.jsx("div",{className:"stat-label",children:"Submissions"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon pink",children:e.jsx("i",{className:"fas fa-calendar-check"})}),e.jsx("div",{className:"stat-value",id:"statEvents",children:"0"}),e.jsx("div",{className:"stat-label",children:"Events"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon gold",children:e.jsx("i",{className:"fas fa-clock"})}),e.jsx("div",{className:"stat-value",id:"statDays",children:"0"}),e.jsx("div",{className:"stat-label",children:"Days Active"})]})]}),e.jsxs("div",{className:"dash-section",children:[e.jsx("div",{className:"section-header",children:e.jsxs("h2",{className:"section-title",children:[e.jsx("i",{className:"fas fa-history"})," Recent Certificates"]})}),e.jsx("div",{id:"recentCerts",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-certificate"}),e.jsx("p",{children:"No certificates yet."}),e.jsxs("button",{className:"btn btn-primary","data-legacy-onclick":"switchSection('certificates')",children:[e.jsx("i",{className:"fas fa-plus"})," Add Certificate"]})]})})]}),e.jsxs("div",{className:"dash-section",children:[e.jsx("div",{className:"section-header",children:e.jsxs("h2",{className:"section-title",children:[e.jsx("i",{className:"fas fa-file-alt"})," Recent Submissions"]})}),e.jsx("div",{id:"recentSubmissions",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-file-alt"}),e.jsx("p",{children:"No submissions yet."})]})})]})]}),e.jsxs("div",{className:"tab-content",id:"section-profile",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"My Profile"}),e.jsx("p",{className:"page-subtitle",children:"Manage your personal information"})]}),e.jsx("div",{className:"dash-section",children:e.jsxs("div",{className:"profile-grid",children:[e.jsxs("div",{className:"profile-avatar-container",children:[e.jsxs("div",{className:"profile-avatar-wrapper",children:[e.jsx("div",{className:"profile-avatar-glow"}),e.jsx("div",{className:"profile-avatar-ring"}),e.jsx("div",{className:"profile-avatar-inner",children:e.jsxs("div",{className:"profile-avatar-large",id:"profileAvatarLarge",children:[e.jsx("img",{id:"profileAvatarImg",src:!0,alt:!0,style:{display:"none"}}),e.jsx("span",{className:"profile-avatar-text",id:"profileAvatarText",children:"U"})]})})]}),e.jsxs("button",{className:"avatar-upload-btn","data-legacy-onclick":"document.getElementById('avatarUpload').click()",children:[e.jsx("i",{className:"fas fa-camera"})," UPLOAD PHOTO"]}),e.jsx("input",{type:"file",id:"avatarUpload",accept:"image/*",style:{display:"none"},"data-legacy-onchange":"uploadAvatar(this)"})]}),e.jsx("div",{children:e.jsxs("form",{id:"profileForm","data-legacy-onsubmit":"updateProfile(event)",children:[e.jsxs("div",{className:"profile-details",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Full Name"}),e.jsx("input",{className:"form-input",type:"text",id:"profileName",placeholder:"Your name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsx("input",{className:"form-input",type:"email",id:"profileEmail",disabled:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Phone"}),e.jsx("input",{className:"form-input",type:"tel",id:"profilePhone",placeholder:"Phone number"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"College"}),e.jsx("input",{className:"form-input",type:"text",id:"profileCollege",placeholder:"Your college"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Year"}),e.jsx("input",{className:"form-input",type:"text",id:"profileYear",placeholder:"Your year"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Bio"}),e.jsx("textarea",{className:"form-input",id:"profileBio",placeholder:"Tell us about yourself"})]})]}),e.jsxs("button",{type:"submit",className:"btn btn-primary",style:{marginTop:"16px"},children:[e.jsx("i",{className:"fas fa-save"})," Save Changes"]})]})})]})})]}),e.jsxs("div",{className:"tab-content",id:"section-certificates",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"My Certificates"}),e.jsx("p",{className:"page-subtitle",children:"Manage your certificates"})]}),e.jsxs("div",{className:"dash-section",children:[e.jsxs("div",{className:"section-header",children:[e.jsxs("h2",{className:"section-title",children:[e.jsx("i",{className:"fas fa-certificate"})," Certificates"]}),e.jsxs("button",{className:"btn btn-primary","data-legacy-onclick":"openModal('addCertModal')",children:[e.jsx("i",{className:"fas fa-plus"})," Add Certificate"]})]}),e.jsx("div",{className:"cert-grid",id:"certGrid",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-certificate"}),e.jsx("p",{children:"No certificates yet."})]})})]})]}),e.jsxs("div",{className:"tab-content",id:"section-submissions",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"Form Submissions"}),e.jsx("p",{className:"page-subtitle",children:"View all your submissions"})]}),e.jsxs("div",{className:"dash-section",children:[e.jsx("div",{className:"section-header",children:e.jsxs("h2",{className:"section-title",children:[e.jsx("i",{className:"fas fa-file-alt"})," All Submissions"]})}),e.jsx("div",{className:"table-container",id:"submissionsTable",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-file-alt"}),e.jsx("p",{children:"No submissions yet."})]})})]})]}),e.jsxs("div",{className:"tab-content",id:"section-settings",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"Settings"}),e.jsx("p",{className:"page-subtitle",children:"Account settings"})]}),e.jsxs("div",{className:"dash-section",children:[e.jsx("div",{className:"section-header",children:e.jsxs("h2",{className:"section-title",children:[e.jsx("i",{className:"fas fa-lock"})," Change Password"]})}),e.jsxs("form",{"data-legacy-onsubmit":"changePassword(event)",style:{maxWidth:"400px"},children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Current Password"}),e.jsx("input",{className:"form-input",type:"password",id:"currentPassword",placeholder:"Current password"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"New Password"}),e.jsx("input",{className:"form-input",type:"password",id:"newPassword",placeholder:"New password",minLength:"6"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Confirm Password"}),e.jsx("input",{className:"form-input",type:"password",id:"confirmNewPassword",placeholder:"Confirm password"})]}),e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[e.jsx("i",{className:"fas fa-key"})," Update Password"]})]})]}),e.jsxs("div",{className:"dash-section",style:{marginTop:"24px"},children:[e.jsx("div",{className:"section-header",children:e.jsxs("h2",{className:"section-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," Account Info"]})}),e.jsx("div",{id:"accountInfo"})]})]}),e.jsxs("div",{className:"tab-content",id:"section-applications",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:"My Applications"}),e.jsx("p",{className:"page-subtitle",children:"Track your recruitment applications"})]}),e.jsxs("div",{className:"dash-section",children:[e.jsx("div",{className:"section-header",children:e.jsxs("h2",{className:"section-title",children:[e.jsx("i",{className:"fas fa-paper-plane"})," Applied Positions"]})}),e.jsx("div",{id:"applicationsTable",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"fas fa-paper-plane"}),e.jsx("p",{children:"Loading your applications..."})]})})]})]})]}),e.jsx("div",{className:"modal-overlay",id:"addCertModal",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h3",{className:"modal-title",children:"Add Certificate"}),e.jsx("button",{className:"modal-close","data-legacy-onclick":"closeModal('addCertModal')",children:"×"})]}),e.jsxs("form",{"data-legacy-onsubmit":"addCertificate(event)",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Certificate Name"}),e.jsx("input",{className:"form-input",type:"text",id:"certName",placeholder:"e.g., Web Dev Certificate",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Description"}),e.jsx("textarea",{className:"form-input",id:"certDesc",placeholder:"Brief description"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Certificate File"}),e.jsx("input",{className:"form-input",type:"file",id:"certFile",accept:".pdf,.jpg,.jpeg,.png,.webp"})]}),e.jsxs("button",{type:"submit",className:"btn btn-primary",style:{width:"100%",marginTop:"8px"},children:[e.jsx("i",{className:"fas fa-plus"})," Add Certificate"]})]})]})})]})}const _f=[{kind:"inline",type:"text/javascript",body:`
        let currentStep = 1;
        
        function nextStep(step) {
            if (step === 2 && !validateStep1()) return;
            if (step === 3 && !validateStep2()) return;
            
            document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
            document.getElementById('step' + step).classList.add('active');
            
            const progress = step === 4 ? 100 : (step - 1) * 33;
            document.getElementById('progressFill').style.width = progress + '%';
            
            if (step === 3) renderRoleFields();
        }
        
        function validateStep1() {
            const required = ['recName', 'recEmail', 'recPhone', 'recWhatsapp', 'recRoll', 'recDepartment', 'recYear'];
            for (let id of required) {
                if (!document.getElementById(id).value) {
                    alert('Please fill in all required fields');
                    return false;
                }
            }
            return true;
        }
        
        function validateStep2() {
            if (!document.getElementById('selectedRole').value) {
                alert('Please select a position');
                return false;
            }
            return true;
        }
        
        function selectRole(role, element) {
            document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
            element.classList.add('selected');
            document.getElementById('selectedRole').value = role;
        }
        
        function renderRoleFields() {
            const role = document.getElementById('selectedRole').value;
            const container = document.getElementById('roleSpecificFields');
            let html = '<div class="role-specific"><h4><i class="fas fa-user-tag"></i> ' + role + ' Details</h4>';
            
            if (role === 'Web/App Developer') {
                html += \`
                    <div class="form-group">
                        <label class="form-label">Programming Languages Known *</label>
                        <input type="text" id="recLanguages" class="form-input" placeholder="e.g., Python, JavaScript, Java, C++">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Projects (GitHub/Live Links)</label>
                        <textarea id="recProjects" class="form-textarea" placeholder="Share your project links..."></textarea>
                    </div>
                \`;
            } else if (role === 'Photographer/Videographer') {
                html += \`
                    <div class="form-group">
                        <label class="form-label">Camera/Equipment *</label>
                        <input type="text" id="recCamera" class="form-input" placeholder="DSLR, Mirrorless, Smartphone model">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Portfolio/Work Samples (Links)</label>
                        <input type="text" id="recPortfolio" class="form-input" placeholder="Google Drive, Behance, Dropbox links">
                    </div>
                \`;
            } else if (role === 'Video Editor') {
                html += \`
                    <div class="form-group">
                        <label class="form-label">Video Editing Software *</label>
                        <input type="text" id="recSoftware" class="form-input" placeholder="e.g., Premiere Pro, DaVinci Resolve, Final Cut">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Video Samples (YouTube/Vimeo Links)</label>
                        <input type="text" id="recVideoSamples" class="form-input" placeholder="Your edited video links">
                    </div>
                \`;
            } else if (role === 'Graphics Designer') {
                html += \`
                    <div class="form-group">
                        <label class="form-label">Design Tools Known *</label>
                        <input type="text" id="recDesignTools" class="form-input" placeholder="e.g., Photoshop, Illustrator, Figma, Canva">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Design Portfolio (Links)</label>
                        <input type="text" id="recDesignPortfolio" class="form-input" placeholder="Behance, Dribbble, Instagram links">
                    </div>
                \`;
            } else if (role === 'Content Writer') {
                html += \`
                    <div class="form-group">
                        <label class="form-label">Writing Samples/Blogs (Links)</label>
                        <input type="text" id="recWritingSamples" class="form-input" placeholder="Medium, Blog, Article links">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Topics You Can Write About</label>
                        <input type="text" id="recTopics" class="form-input" placeholder="e.g., Tech, Lifestyle, Education, Environment">
                    </div>
                \`;
            } else if (role === 'Public Relation') {
                html += \`
                    <div class="form-group">
                        <label class="form-label">Social Media Handles</label>
                        <input type="text" id="recSocialHandles" class="form-input" placeholder="Instagram, LinkedIn, Twitter handles">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Any PR Experience?</label>
                        <textarea id="recPRExperience" class="form-textarea" placeholder="Describe your PR experience..."></textarea>
                    </div>
                \`;
            }
            
            html += '</div>';
            container.innerHTML = html;
        }
        
        async function submitRecruitment() {
            const whyJoin = document.getElementById('recWhyJoin').value.trim();
            if (!whyJoin) {
                alert('Please tell us why you want to join TaruGuardians');
                return;
            }
            
            const btn = document.getElementById('submitBtn');
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            
            const role = document.getElementById('selectedRole').value;
            const roleData = {};
            
            if (role === 'Web/App Developer') {
                roleData.languages = document.getElementById('recLanguages').value;
                roleData.projects = document.getElementById('recProjects').value;
            } else if (role === 'Photographer/Videographer') {
                roleData.camera = document.getElementById('recCamera').value;
                roleData.portfolio = document.getElementById('recPortfolio').value;
            } else if (role === 'Video Editor') {
                roleData.software = document.getElementById('recSoftware').value;
                roleData.videoSamples = document.getElementById('recVideoSamples').value;
            } else if (role === 'Graphics Designer') {
                roleData.tools = document.getElementById('recDesignTools').value;
                roleData.portfolio = document.getElementById('recDesignPortfolio').value;
            } else if (role === 'Content Writer') {
                roleData.samples = document.getElementById('recWritingSamples').value;
                roleData.topics = document.getElementById('recTopics').value;
            } else if (role === 'Public Relation') {
                roleData.socialHandles = document.getElementById('recSocialHandles').value;
                roleData.experience = document.getElementById('recPRExperience').value;
            }
            
            const formData = {
                name: document.getElementById('recName').value.trim(),
                email: document.getElementById('recEmail').value.trim(),
                phone: document.getElementById('recPhone').value.trim(),
                whatsapp: document.getElementById('recWhatsapp').value.trim(),
                classRoll: document.getElementById('recRoll').value.trim(),
                department: document.getElementById('recDepartment').value,
                year: document.getElementById('recYear').value,
                position: role,
                whyJoin: whyJoin,
                roleSpecificData: JSON.stringify(roleData)
            };
            
            try {
                const response = await fetch('/api/recruitment/apply', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                
                const data = await response.json();
                
                if (data.success) {
                    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
                    document.getElementById('stepSuccess').classList.add('active');
                    document.getElementById('progressFill').style.width = '100%';
                } else {
                    alert(data.message || 'Something went wrong. Please try again.');
                    btn.disabled = false;
                    btn.innerHTML = 'Submit Application <i class="fas fa-paper-plane"></i>';
                }
            } catch (error) {
                console.error('Submission error:', error);
                alert('Network error. Please try again.');
                btn.disabled = false;
                btn.innerHTML = 'Submit Application <i class="fas fa-paper-plane"></i>';
            }
        }
    `}],Ko=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function Wf(n){for(const t of _f)if(t.kind==="external"){if(Ko.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),Ko.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function Hf(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const Qo="Recruitment";function Ff(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},Wf(Qo);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{Hf(Qo),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsx("div",{ref:t,className:"legacy-page legacy-Recruitment",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"form-card",children:[e.jsxs("h1",{className:"form-title",children:["Join ",e.jsx("span",{children:"TaruGuardians"})]}),e.jsx("p",{className:"form-subtitle",children:"The only club at HIT that conducts both technical and non-technical events"}),e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",id:"progressFill"})}),e.jsxs("div",{className:"step active",id:"step1",children:[e.jsxs("div",{className:"info-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-info-circle"})," Welcome to TaruGuardians"]}),e.jsx("p",{children:"TaruGuardians focuses on overall development of students by enhancing skills such as leadership, management, communication, and creativity. Join us to learn, grow, and lead!"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Full Name *"}),e.jsx("input",{type:"text",id:"recName",className:"form-input",placeholder:"Enter your full name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email Address *"}),e.jsx("input",{type:"email",id:"recEmail",className:"form-input",placeholder:"Enter your email"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Phone Number *"}),e.jsx("input",{type:"tel",id:"recPhone",className:"form-input",placeholder:"Enter phone number"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"WhatsApp Number *"}),e.jsx("input",{type:"tel",id:"recWhatsapp",className:"form-input",placeholder:"Enter WhatsApp number"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Class Roll Number *"}),e.jsx("input",{type:"text",id:"recRoll",className:"form-input",placeholder:"e.g., 25/IT/001"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Department *"}),e.jsxs("select",{id:"recDepartment",className:"form-select",children:[e.jsx("option",{value:!0,children:"Select Department"}),e.jsx("option",{value:"CSE",children:"Computer Science & Engineering"}),e.jsx("option",{value:"IT",children:"Information Technology"}),e.jsx("option",{value:"ECE",children:"Electronics & Communication"}),e.jsx("option",{value:"EE",children:"Electrical Engineering"}),e.jsx("option",{value:"ME",children:"Mechanical Engineering"}),e.jsx("option",{value:"CE",children:"Civil Engineering"}),e.jsx("option",{value:"Other",children:"Other"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Year *"}),e.jsxs("select",{id:"recYear",className:"form-select",children:[e.jsx("option",{value:!0,children:"Select Year"}),e.jsx("option",{value:"1st",children:"1st Year"}),e.jsx("option",{value:"2nd",children:"2nd Year"}),e.jsx("option",{value:"3rd",children:"3rd Year"}),e.jsx("option",{value:"4th",children:"4th Year"})]})]}),e.jsxs("button",{className:"btn btn-primary","data-legacy-onclick":"nextStep(2)",children:["Next Step ",e.jsx("i",{className:"fas fa-arrow-right"})]})]}),e.jsxs("div",{className:"step",id:"step2",children:[e.jsxs("h3",{style:{textAlign:"center",marginBottom:"20px"},children:["Choose Your ",e.jsx("span",{style:{color:"var(--accent)"},children:"Position"})]}),e.jsxs("div",{className:"roles-grid",children:[e.jsxs("div",{className:"role-card","data-legacy-onclick":"selectRole('Public Relation', this)",children:[e.jsx("i",{className:"fas fa-bullhorn"}),e.jsx("span",{children:"Public Relation"})]}),e.jsxs("div",{className:"role-card","data-legacy-onclick":"selectRole('Web/App Developer', this)",children:[e.jsx("i",{className:"fas fa-code"}),e.jsx("span",{children:"Web/App Developer"})]}),e.jsxs("div",{className:"role-card","data-legacy-onclick":"selectRole('Photographer/Videographer', this)",children:[e.jsx("i",{className:"fas fa-camera"}),e.jsx("span",{children:"Photographer"})]}),e.jsxs("div",{className:"role-card","data-legacy-onclick":"selectRole('Video Editor', this)",children:[e.jsx("i",{className:"fas fa-video"}),e.jsx("span",{children:"Video Editor"})]}),e.jsxs("div",{className:"role-card","data-legacy-onclick":"selectRole('Graphics Designer', this)",children:[e.jsx("i",{className:"fas fa-paint-brush"}),e.jsx("span",{children:"Graphics Designer"})]}),e.jsxs("div",{className:"role-card","data-legacy-onclick":"selectRole('Content Writer', this)",children:[e.jsx("i",{className:"fas fa-pen"}),e.jsx("span",{children:"Content Writer"})]})]}),e.jsx("input",{type:"hidden",id:"selectedRole",value:!0}),e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{className:"btn btn-secondary","data-legacy-onclick":"nextStep(1)",children:[e.jsx("i",{className:"fas fa-arrow-left"})," Back"]}),e.jsxs("button",{className:"btn btn-primary","data-legacy-onclick":"nextStep(3)",children:["Next ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]}),e.jsxs("div",{className:"step",id:"step3",children:[e.jsx("div",{id:"roleSpecificFields"}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Why do you want to join TaruGuardians? *"}),e.jsx("textarea",{id:"recWhyJoin",className:"form-textarea",placeholder:"Share your motivation and reasons for joining..."})]}),e.jsxs("div",{className:"btn-group",children:[e.jsxs("button",{className:"btn btn-secondary","data-legacy-onclick":"nextStep(2)",children:[e.jsx("i",{className:"fas fa-arrow-left"})," Back"]}),e.jsxs("button",{className:"btn btn-primary","data-legacy-onclick":"submitRecruitment()",id:"submitBtn",children:["Submit Application ",e.jsx("i",{className:"fas fa-paper-plane"})]})]})]}),e.jsx("div",{className:"step",id:"stepSuccess",children:e.jsxs("div",{className:"success-message",children:[e.jsx("div",{className:"success-icon",children:"🎉"}),e.jsx("h2",{className:"success-title",children:"Application Submitted!"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.8)",marginBottom:"20px"},children:"Thank you for applying to TaruGuardians. We'll review your application and get back to you soon!"}),e.jsxs("div",{className:"whatsapp-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fab fa-whatsapp"})," Join Our WhatsApp Community"]}),e.jsx("p",{style:{marginBottom:"15px",fontSize:"0.9rem"},children:"Stay updated with latest events and announcements!"}),e.jsxs("a",{href:"https://chat.whatsapp.com/IKUt4M5NcHVKYyoTezoJYi",target:"_blank",className:"whatsapp-link",children:[e.jsx("i",{className:"fab fa-whatsapp"})," Join WhatsApp Group"]})]})]})})]})})})}const Gf=[{kind:"external",src:"https://cdn.tailwindcss.com",type:"text/javascript"},{kind:"external",src:"frontend-auth.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
  const events = [
    {
      id: 1,
      title: "Something is coming soon",
      type: "dance & Singing",
      description: "Get ready to be part of a high-energy, singing & dance experience! ⚡💻",
      date: "",
      location: "in person, HIT Haldia",
      participants: "Form Not Open Till Now",
      image: "figma 4.png",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Quiz-O-Mania 3.0",
      type: "TaruGuardians x AlgoZenith HIT Chapter",
      description: "Whether you're a quiz enthusiast, a curious learner or someone who loves the rush of competition —this event is made for you💥",
      date: "2025-11-02",
      location: "Online",
      participants: "458+",
      image: "QUIZ MANIA .png",
      status: "completed"
    },
    {
      id: 9,
      title: "अभिyukti",
      type: "Poem/shayari,Content writing,Debate,Quiz Competition",
      description: "offline non-technical event about communication and fun.",
      date: "2025-09-013",
      location: "Annex building Room No (205 & 206)",
      participants: "80",
      image: "event 2.png",
      status: "completed"
    },
    {
      id: 2,
      title: "Pyexpress",
      type: "Workshop",
      description: "step into the world where ideas turn into code! 🚀",
      date: "2025-08-015",
      location: "CSE Department Ground Floor",
      participants: "50",
      image: "Event 1.png",
      status: "completed"
    },
    {
      id: 3,
      title: "Taruguardians Tree Plantation Drive",
      type: "Sustainable Developemnt ",
      description: "Plant Today For a Greener Tommorow",
      date: "2025-06-06",
      location: "Hit Haldia(inside Campus)",
      participants: "20(taru Members)",
      image: "plant.png",
      status: "completed"
    },
    {
      id: 5,
      title: "GATE & PLACEMENT",
      type: "Tech Talk",
      description: "Crack GATE & Placements with Chandan Jha (AVP, GFG) | Mar 23, 2 PM | Free Entry!",
      date: "2025-03-23",
      location: "Virtual",
      participants: "350+ Participants",
      image: "Gate.jpg",
      status: "completed"
    },
    {
      id: 6,
      title: "FIGMA CRAFT 2.0",
      type: "Workshop",
      description: "Design, Collaborate, Create By TaruGuardians",
      date: "2025-03-01",
      location: "At ECE DEPT. HIT, Haldia",
      participants: "100+ Participants",
      image: "FIFMAIMAGE.jpg",
      status: "completed"
    },
    {
      id: 7,
      title: "QUIZ-O-MANIA 2.0",
      type: "Quiz",
      description: "Build decentralized apps in a 48-hour coding sprint.",
      date: "2025-12-16",
      location: "Virtual",
      participants: "150+ Participants",
      image: "quiz-o-mmania.png",
      status: "completed"
    },
    {
      id: 8,
      title: "HIT-A-THON 2024",
      type: "Hackathon",
      description: "Get ready to be part of a high-energy, innovation-packed hackathon experience! ⚡💻",
      date: "2024-8-12",
      location: "Hit Haldia",
      participants: "80+ Participants",
      image: "hit-hackathon.png",
      status: "completed"
    },
    {
      id: 9,
      title: "Tech Talk 2.0 — Bridging the Cloud Gap with AWS!",
      type: "Tech Talk",
      description: "Join industry experts on April 21, 1 PM | Free online session with certificates & career insig",
      date: "2024-04-21",
      location: "Virtual",
      participants: "200+ Participants",
      image: "tech_talk_2160p.png",
      status: "completed"
    },
    {
      id: 10,
      title: "TREE PLANTATION",
      type: "Sustainable Developemnt",
      description: "Taruguardians planted trees at the P5 hostel ground",
      date: "2024-03-23",
      location: "Hit Haldia(inside Campus)",
      participants: "N/A Participants",
      image: "nature.png",
      status: "completed"
    },
    {
      id: 11,
      title: "FIGMA CRAFT",
      type: "Workshop",
      description: "Figma is a powerful web-based design tool that helps you to create anything, website, application, a logo and much more",
      date: "2023-12-09",
      location: "Virtual",
      participants: "100+ Participants",
      image: "figmna1.jpg",
      status: "completed"
    },
    {
      id: 12,
      title: "CodeScape(Taruguardians in collaboration with @GeeksforGeeks)",
      type: "Workshop",
      description: "put your skills to the test and compete against other talented coders",
      date: "2023-08-17",
      location: "Edusat Lab, 2nd floor",
      participants: "150+ Participants",
      image: "codescape.jpg",
      status: "completed"
    },
    {
      id: 13,
      title: "Google Summer of Code",
      type: "Talk",
      description: "\\"BRIDGING THE GAP\\"\\nTech Talk with Taru, Full guidance regarding GSoC and the plan to crack.",
      date: "2023-07-30",
      location: "Virtual",
      participants: "140+ Participants",
      image: "gsoc.jpg",
      status: "completed"
    },
    {
      id: 14,
      title: "QUIZ-O-MANIA",
      type: "Quiz",
      description: "Team 𝙏𝙖𝙧𝙪𝙜𝙪𝙖𝙧𝙙𝙞𝙖𝙣𝙨 is proud to announce \\"Quiz-o-mania\\",",
      date: "2023-05-15",
      location: "Edusat Lab, 2nd floor, Mechanical Department",
      participants: "180+ Participants",
      image: "quiz3.jpg",
      status: "completed"
    },
    {
      id: 15,
      title: "World Water Day",
      type: "Sustainable Developemnt",
      description: "TaruGuardians hosted a plantation drive on World Water Day occasion,",
      date: "2023-03-23",
      location: "Hit Haldia P4 Ground",
      participants: "180+ Participants",
      image: "23.jpg",
      status: "completed"
    },
    {
      id: 16,
      title: "Online Workshop On Crypto Currency",
      type: "Workshop",
      description: "Team TaruGuardians are Hosted a free workshop on the latest financial trend \\"Cryptocurrency Trading",
      date: "2023-03-10",
      location: "Virtual",
      participants: "130+ Participants",
      image: "crypto.jpg",
      status: "completed"
    },
    {
      id: 17,
      title: "30 Days Coding Challenge(Taruguardians Collaboration With Arsh Goyal)",
      type: "Coding Challenge",
      description: "This is an initiative By TaruGuardians to improve a coding culture in our college",
      date: "2023-01-03",
      location: "Virtual",
      participants: "200+ Participants",
      image: "arsh.jpg",
      status: "completed"
    },
    {
      id: 18,
      title: "Taruguardians Tree Plantation Drive",
      type: "Sustainable Developemnt",
      description: "We are planting a tree to teach ourselves to gather strength from our deepest roots",
      date: "2022-06-11",
      location: "Hit Haldia(inside Campus)",
      participants: "All Taru members",
      image: "tree3e.jpg",
      status: "completed"
    },
    {
      id: 19,
      title: "Model Display By Taruguardians",
      type: "Model Display",
      description: "Model Display by Taruguardians, gear up, and get ready for the first offline event by The TaruGuardians",
      date: "2022-03-22",
      location: "MBA Seminar Hall (IT Department, 1st floor)",
      participants: "110+ Participants",
      image: "model5.jpg",
      status: "completed"
    },
    {
      id: 20,
      title: "workshop on Open-source and GitHub(𝗩𝗶𝘀𝗵𝗮𝗹 𝗥𝗮𝗷𝗽𝘂𝘁, from 𝗡𝗦𝗨𝗧, 𝗗𝗲𝗹𝗵𝗶.)",
      type: "Workshop",
      description: "Top Performers will get the Annual Subscription of Scrimba as prizes",
      date: "2021-6-28",
      location: "Virtual",
      participants: "95+ Participants",
      image: "talk.jpg",
      status: "completed"
    },
    {
      id: 21,
      title: "quiz on environment",
      type: "Quiz",
      description: "Let's unite and contribute a little to our environs. We will plant a tree for every 100 participation.",
      date: "2021-06-1",
      location: "Virtual",
      participants: "50+ Participants",
      image: "paryavaryan.jpg",
      status: "completed"
    },
    {
      id: 22,
      title: "Taruguardians Tree Plantation Drive",
      type: "Sustainable Developemnt",
      description: "We are planting a tree to teach ourselves to gather strength from our deepest roots",
      date: "2021-05-15",
      location: "Hit Haldia(inside Campus)",
      participants: "All Taru members",
      image: "tre55.jpg",
      status: "completed"
    }
  ];

  function createSmallEventCard(event) {
    return \`
                <div class="event-card bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] rounded-xl shadow-md overflow-hidden flex flex-col text-sm">
                    <div class="h-32 w-full bg-black">
                        <img src="\${event.image}" alt="\${event.title}" class="w-full h-full object-cover" />
                    </div>
                    <div class="p-3 flex-1 flex flex-col justify-between">
                        <span class="inline-block mb-2 px-3 py-1 rounded-full \${["Program", "Talk", "Competition"].includes(event.type) ? "bg-blue-600 text-white" : "bg-blue-900 text-blue-200"} text-xs font-bold uppercase">
                            \${event.type}
                        </span>
                        <h3 class="text-lg font-semibold mb-1 truncate text-gray-900">\${event.title}</h3>
                        <p class="text-gray-700 text-xs mb-2 line-clamp-2">\${event.description}</p>
                        <div class="text-gray-500 text-xs space-y-0.5">
                            <div class="flex items-center"><span class="mr-1">📅</span> \${event.date ? new Date(event.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'TBA'}</div>
                            <div class="flex items-center"><span class="mr-1">📍</span> \${event.location}</div>
                            <div class="flex items-center"><span class="mr-1">👥</span> \${event.participants}</div>
                        </div>
                    </div>
                </div>
            \`;
  }

  function createEventCard(event) {
    return \`
                <div class="event-card bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] rounded-2xl shadow-lg overflow-hidden flex flex-col">
                    <div class="h-40 w-full bg-black">
                        <img src="\${event.image}" alt="\${event.title}" class="w-full h-full object-cover" />
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <span class="inline-block mb-1 px-2 py-0.5 rounded-full \${["Program", "Talk", "Competition"].includes(event.type) ? "bg-blue-600 text-white" : "bg-blue-900 text-blue-200"} text-[10px] font-bold uppercase">
                            \${event.type}
                        </span>
                        <h2 class="text-xl font-bold mb-1 text-gray-900">\${event.title}</h2>
                        <p class="text-gray-700 mb-4">\${event.description}</p>
                        <div class="text-gray-500 text-sm space-y-1 mb-2">
                            <div class="flex items-center"><span class="mr-2">📅</span> \${new Date(event.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                            <div class="flex items-center"><span class="mr-2">📍</span> \${event.location}</div>
                            <div class="flex items-center"><span class="mr-2">👥</span> \${event.participants}</div>
                        </div>
                        <a href="#" class="inline-block mt-2 text-blue-700 hover:text-blue-900" title="Event Link">
                            <svg class="h-5 w-5 inline" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            \`;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a');

    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      hamburger.textContent = mobileMenu.classList.contains('active') ? '×' : '≡';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        window.location.href = href;
        mobileMenu.classList.remove('active');
        hamburger.textContent = '≡';
      });
    });

    // Populate event cards
    const upcomingContainer = document.getElementById('upcoming-event');
    const ongoingContainer = document.getElementById('ongoing-event');
    const completedContainer = document.getElementById('completed-events');

    upcomingContainer.innerHTML = '';
    ongoingContainer.innerHTML = '';
    completedContainer.innerHTML = '';

    let hasOngoing = false;
    events.forEach(event => {
      if (event.status === 'upcoming') {
        upcomingContainer.innerHTML += createSmallEventCard(event);
      } else if (event.status === 'ongoing') {
        ongoingContainer.innerHTML += createSmallEventCard(event);
        hasOngoing = true;
      } else if (event.status === 'completed') {
        completedContainer.innerHTML += createEventCard(event);
      }
    });

    if (!hasOngoing) {
      ongoingContainer.innerHTML = \`<div class="col-span-full text-center text-gray-400 py-8 text-lg">Not any ongoing event</div>\`;
    }
  });
`}],Zo=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function Of(n){for(const t of Gf)if(t.kind==="external"){if(Zo.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),Zo.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function Uf(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const ec="Events";function Vf(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},Of(ec);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{Uf(ec),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-Events min-h-screen bg-black text-white font-sans",children:[e.jsxs("header",{className:"modern-navbar",children:[e.jsxs("div",{className:"navbar-container",children:[e.jsxs("div",{className:"navbar-logo",children:[e.jsx("span",{className:"logo-arrow left",children:"<"}),e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians Logo"}),e.jsx("span",{children:"TaruGuardians"}),e.jsx("span",{className:"logo-arrow right",children:">"})]}),e.jsx("div",{className:"navbar-center",children:e.jsxs("div",{className:"navbar-links",children:[e.jsx(x,{to:"/home",className:"active",children:"Home"}),e.jsx(x,{to:"/home",children:"Event"}),e.jsx(x,{to:"/home",children:"TARU WINGS"}),e.jsx(x,{to:"/home",children:"Roadmap"}),e.jsx(x,{to:"/home",children:"Placement Guide"}),e.jsx(x,{to:"/home",children:"Team"})]})}),e.jsx(x,{to:"/auth",className:"navbar-blog-btn auth-login-btn",children:"Login"}),e.jsx("div",{className:"auth-user-menu",style:{display:"none"},children:e.jsx(x,{to:"/dashboard",className:"navbar-blog-btn",children:"Dashboard"})}),e.jsx("div",{className:"hamburger",children:"≡"})]}),e.jsxs("div",{className:"mobile-menu",children:[e.jsx(x,{to:"/home",className:"active",children:"Home"}),e.jsx(x,{to:"/home",children:"Event"}),e.jsx(x,{to:"/home",children:"TARU WINGS"}),e.jsx(x,{to:"/home",children:"Roadmap"}),e.jsx(x,{to:"/home",children:"Placement Guide"}),e.jsx(x,{to:"/home",children:"Team"}),e.jsx(x,{to:"/auth",className:"auth-login-btn",children:"Login"}),e.jsx(x,{to:"/dashboard",className:"auth-user-menu",style:{display:"none"},children:"Dashboard"})]})]}),e.jsx("div",{className:"h-20"}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4 border-b border-gray-700 pb-2",children:"Upcoming Event"}),e.jsx("div",{id:"upcoming-event",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10"}),e.jsx("h2",{className:"text-2xl font-semibold mb-4 border-b border-gray-700 pb-2",children:"Ongoing Event"}),e.jsx("div",{id:"ongoing-event",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10"}),e.jsx("h2",{className:"text-2xl font-semibold mb-4 border-b border-gray-700 pb-2",children:"Completed Events"}),e.jsx("div",{id:"completed-events",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10"})]}),e.jsxs("footer",{className:"bg-black text-white py-10",children:[e.jsxs("div",{className:"flex flex-col items-center mb-10",children:[e.jsx("img",{src:"tarulogo.png",alt:"TaruGuardians Logo",className:"w-28 h-28 rounded-full object-cover mb-3 shadow-lg"}),e.jsx("p",{className:"font-bold text-lg",children:"(Turn Passion Into Purpose)"})]}),e.jsxs("div",{className:"container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10 items-start text-center md:text-left",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"TaruGuardians"}),e.jsx("p",{className:"font-[cursive] text-sm leading-relaxed",children:"𝔄𝔰 𝔱𝔯𝔢𝔢𝔰 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔯𝔬𝔬𝔱𝔰, 𝔴𝔢 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔱𝔢𝔠𝔥. 𝔉𝔯𝔬𝔪 𝔰𝔢𝔢𝔡𝔰 𝔬𝔣 𝔠𝔬𝔡𝔢 𝔱𝔬 𝔠𝔞𝔫𝔬𝔭𝔦𝔢𝔰 𝔬𝔣 𝔠𝔥𝔞𝔫𝔤𝔢 — 𝔟𝔲𝔦𝔩𝔡𝔦𝔫𝔤 𝔞 𝔤𝔯𝔢𝔢𝔫𝔢𝔯, 𝔰𝔪𝔞𝔯𝔱𝔢𝔯 𝔣𝔲𝔱𝔲𝔯𝔢."}),e.jsx("p",{className:"mt-3 text-xs font-bold",children:"(𝚁𝙾𝙾𝚃𝙴𝙳 𝙸𝙽 𝙽𝙰𝚃𝚄𝚁𝙴, 𝙳𝚁𝙸𝚅𝙴𝙽 𝙱𝚈 𝚃𝙴𝙲𝙷)"})]}),e.jsx("div",{className:"flex justify-center md:justify-start",children:e.jsx("a",{href:"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about",className:"bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition",children:" Our Blog "})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Contact"}),e.jsx("p",{className:"text-sm",children:"TaruGuardians@gmail.com"})]}),e.jsxs("div",{className:"text-center md:text-left",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Follow Us"}),e.jsxs("div",{className:"flex justify-center md:justify-start gap-4 mb-3",children:[e.jsx("a",{href:"https://www.instagram.com/_taruguardians_/",children:e.jsx("img",{src:"instag.png",alt:"Instagram",className:"w-7"})}),e.jsx("a",{href:"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in",children:e.jsx("img",{src:"linkden.png",alt:"LinkedIn",className:"w-7"})}),e.jsx("a",{href:"https://www.facebook.com/TaruGuardians/",children:e.jsx("img",{src:"facebook.png",alt:"Facebook",className:"w-7"})}),e.jsx("a",{href:"https://www.youtube.com/@TaruGuardians",children:e.jsx("img",{src:"youtube.webp",alt:"YouTube",className:"w-7"})})]}),e.jsx("p",{className:"italic text-sm font-[cursive]",children:"𝓢𝓽𝓪𝔂 𝓾𝓹𝓭𝓪𝓽𝓮𝓭 𝔀𝓲𝓽𝓱 𝓸𝓾𝓻 𝓵𝓪𝓽𝓮𝓼𝓽 𝓹𝓸𝓼𝓽𝓼, 𝓮𝓿𝓮𝓷𝓽𝓼, 𝓪𝓷𝓭 𝓦𝓸𝓻𝓴𝓼𝓱𝓸𝓹𝓼!"})]})]}),e.jsx("hr",{className:"my-6 border-gray-700"}),e.jsx("div",{className:"text-center text-sm text-gray-400",children:"© 2025 TaruGuardians. All rights reserved."})]})]})}const Yf=[{kind:"external",src:"https://cdn.tailwindcss.com",type:"text/javascript"},{kind:"external",src:"frontend-auth.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a');

        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburger.textContent = mobileMenu.classList.contains('active') ? '×' : '≡';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (!href || !href.startsWith('#')) return;
                e.preventDefault();
                window.location.href = href;
                mobileMenu.classList.remove('active');
                hamburger.textContent = '≡';
            });
        });
        
        if (typeof TaruAuth !== 'undefined') {
            TaruAuth.updateNavbar();
        }
    });

    function navigate(page) {
        document.querySelectorAll('#spa-content > div').forEach(div => div.classList.add('hidden'));
        const el = document.querySelector('#page-' + page);
        if (el) {
            el.classList.remove('hidden');
        } else {
            document.getElementById('page-home').classList.remove('hidden');
        }
        window.scrollTo(0, 0);
    }
    navigate('home');
`}],nc=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function $f(n){for(const t of Yf)if(t.kind==="external"){if(nc.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),nc.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function qf(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const tc="InstagramHighlight";function Xf(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},$f(tc);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{qf(tc),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-InstagramHighlight bg-gray-50 text-gray-900 font-sans",children:[e.jsxs("header",{className:"modern-navbar",children:[e.jsxs("div",{className:"navbar-container",children:[e.jsxs("div",{className:"navbar-logo",children:[e.jsx("span",{className:"logo-arrow left",children:"<"}),e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians Logo"}),e.jsx("span",{children:"TaruGuardians"}),e.jsx("span",{className:"logo-arrow right",children:">"})]}),e.jsx("div",{className:"navbar-center",children:e.jsxs("div",{className:"navbar-links",children:[e.jsx(x,{to:"/home",className:"active",children:"Home"}),e.jsx(x,{to:"/home",children:"Event"}),e.jsx(x,{to:"/home",children:"TARU WINGS"}),e.jsx(x,{to:"/home",children:"Roadmap"}),e.jsx(x,{to:"/home",children:"Placement Guide"}),e.jsx(x,{to:"/home",children:"Team"})]})}),e.jsx(x,{to:"/auth",className:"navbar-blog-btn auth-login-btn",children:"Login"}),e.jsx("div",{className:"auth-user-menu",style:{display:"none"},children:e.jsx(x,{to:"/dashboard",className:"navbar-blog-btn",children:"Dashboard"})}),e.jsx("div",{className:"hamburger",children:"≡"})]}),e.jsxs("div",{className:"mobile-menu",children:[e.jsx(x,{to:"/home",className:"active",children:"Home"}),e.jsx(x,{to:"/home",children:"Event"}),e.jsx(x,{to:"/home",children:"TARU WINGS"}),e.jsx(x,{to:"/home",children:"Roadmap"}),e.jsx(x,{to:"/home",children:"Placement Guide"}),e.jsx(x,{to:"/home",children:"Team"}),e.jsx(x,{to:"/auth",className:"auth-login-btn",style:{color:"#D4AF37",fontWeight:"700"},children:"Login"}),e.jsx(x,{to:"/dashboard",className:"auth-user-menu",style:{display:"none",color:"#D4AF37",fontWeight:"700"},children:"Dashboard"})]})]}),e.jsx("div",{id:"spa-content",className:"mt-16",children:e.jsxs("div",{id:"page-home",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow p-6 mt-8 mx-4",children:[e.jsx("h3",{className:"font-bold text-xl mb-4 text-center",children:"All Instagram Posts Of TaruGuardians"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4",children:[e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"post%204.png",className:"w-full rounded-lg mb-2",alt:"freshers Welcome GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"14 November 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["TaruGuardians wish every child a happy children's day",e.jsx("br",{}),"Children's Day is a reminder of joy, purity and hope that every child brings into this world. Their laughter and nuisance can light up even the dullest moments"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"post%203.png",className:"w-full rounded-lg mb-2",alt:"freshers Welcome GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"5 November 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["Without a Guru, none can cross over",e.jsx("br",{}),"Guru Nanak’s life advice could double as a modern cheat code for a kinder world—compassion, unity, equality, and selfless service, all summed up in “Ik Onkar” (there’s one God)"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"post%202.png",className:"w-full rounded-lg mb-2",alt:"freshers Welcome GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"20 October 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["Team TaruGuardians wish everyone a very Happy and Joyous Diwali 🪔💛!",e.jsx("br",{}),"Diwali, celebrated on the 15th day of the Karthika month, marks the day when Lord Rama returned to Ayodhya after 14 years of exile."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"post%201.png",className:"w-full rounded-lg mb-2",alt:"freshers Welcome GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"18 October 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["Team TaruGuardians wish everyone a bright , blessed and blissful Dhanteras 🙌🏻",e.jsx("br",{}),"⭐ Happy Dhanteras !⭐ to everyone. Dhanteras marks the start of the glorious Diwali festivities. This day is dedicated to Goddess Lakshmi, the goddess of wealth"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"r7.png",className:"w-full rounded-lg mb-2",alt:"freshers Welcome GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"15 October 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"Freshers, let’s debug the planet... and have fun doing it! 💻🌱"',e.jsx("br",{}),"Welcome to a club where code meets care, and logic meets leaves! 🌍 Join TaruGuardians and start your journey of coding, creating, and conserving - all at once."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"r6.png",className:"w-full rounded-lg mb-2",alt:"Indian airforce day GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"8 October 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"Touching Skies with Unwavering Glory" ✈️',e.jsx("br",{}),"On the occasion of Indian Air Force Day, October 8th, we pay tribute to the fearless air warriors who safeguard our nation's skies with unparalleled valour, discipline, and dedication.Team TaruGuardians extends its heartfelt gratitude and respect to the heroes of the Indian Air Force"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"r5.png",className:"w-full rounded-lg mb-2",alt:"Dusshers GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"2 October 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["धर्मो जयति नाधर्मः ✨ सत्यं जयति नानृतम् 🕉️",e.jsx("br",{}),"Dussehra is the universe’s reminder that good does win—cue dramatic battles ⚔️, epic fireworks 🎆, and villains with unforgettable mustaches!"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"r4.png",className:"w-full rounded-lg mb-2",alt:"Gandhi jayanti GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"2 October 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['“Gandhi Jayanti reminds us that truth and non-violence are timeless strengths, not weaknesses"🙏🏻',e.jsx("br",{}),"Team TaruGuardians wish everyone a Happy Gandhi jayanti and requests everyone to follow the path of truth and non-violence ✨"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"r8.png",className:"w-full rounded-lg mb-2",alt:"Maha navmi GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"1 October 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"या देवी सर्वभूतेषु माँ सिद्धिदात्री रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः। 🙏',e.jsx("br",{}),"Team TaruGuardians wishes you a Happy Maha Navami! 🎉 Shubh Maha Navami! 🙏 May Maa Siddhidatri empower you with natural powers and strength 💪."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"r3.png",className:"w-full rounded-lg mb-2",alt:"Eight day GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"30 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["या देवी सर्वभूतेषु शक्ति-रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",e.jsx("br",{}),"On the eighth day of Navratri, Mahagauri is worshipped 🌼. She is depicted with four arms—her upper right hand in abhaya mudra (blessing pose) , the lower right holding trishul 🔱, the upper left with a damaru (drum) 🥁, and the lower left hand bestowing blessings and boons 🌟."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"r2.png",className:"w-full rounded-lg mb-2",alt:"Seventh Day GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"29 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['✨"ॐ देवी कालरात्र्यै नमः। शत्रुनाशं करोतु मां रक्षतु च सर्वदा॥"✨',e.jsx("br",{}),"May Maa Kaalratri give you the strength to overcome all obstacles and achieve your goals✨. TaruGuardians wish everyone a blessed Mahasaptami!🌸✨"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"r1.png",className:"w-full rounded-lg mb-2",alt:"SIxth day GD"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"28 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['कात्यायनि महामाये महायोगिन्यधीश्वरी ।नन्दगोपालसिंहसि पतिं मे कुरु ते नमः || ✨ “On this sacred Shashti, let Maa Katyayani light your heart with bravery, love, and boundless energy".',e.jsx("br",{}),"We offer Maa yellow flowers and , honey and chant her mantras and keep fasts to take her blessings for a sweet and successful life 🌼. TaruGuardians wish everyone a happy Sasthi and may Maa Katyayani remove negativity, and fill your life with love and strength ❤️🙏🏻."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"durga7.png",className:"w-full rounded-lg mb-2",alt:"Durga puja Day 5"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"26 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"তুমিই সর্বমঙ্গলময়ী, সর্বার্থসাধিকা ও শরণাগতপালিনী নারায়ণী, তোমায় প্রণাম।"🙏🏻',e.jsx("br",{}),"As Goddess of Purity, worshipping her is believed to lead to contentment, peace of mind, and a departure from life's sorrows.🌼🔱"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"durga6.png",className:"w-full rounded-lg mb-2",alt:"abhiyukti"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"25 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["TaruGuardians congratulate the winners and wish them a successful career ahead ❤️",e.jsx("br",{}),"Poem/shayari - Gopesh Anupam(24/CSE-AIML/053)",e.jsx("br",{}),"Content Writing - Shubham Kumar (24/IT/179)",e.jsx("br",{}),"Debate - Rudra Prasad Bera(24/ME/076)",e.jsx("br",{}),"Quiz competition - Arunava Biswas(24/ME/022)"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"durga5.png",className:"w-full rounded-lg mb-2",alt:"Durga puja Day 4"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"25 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["On the fourth day of Navratri, devotees worship Goddess Kushmanda, the radiant fourth form of Shakti, whose brilliance is said to rival the sun itself ☀",e.jsx("br",{}),"TaruGuardians wishes you happy Navratri 🙏"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"durga4.png",className:"w-full rounded-lg mb-2",alt:"Durga puja Day 3"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"24 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['✨"या देवी सर्वभू‍तेषु माँ चंद्रघंटा रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नम:।।"✨',e.jsx("br",{}),"On this auspicious day, as you pray to Maa Chandraghanta, may your life be filled with joy, hope and positive change.🙏🏾✨",e.jsx("br",{}),"TaruGuardians wish you a Happy Tritiya.🌸"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"durga3.png",className:"w-full rounded-lg mb-2",alt:"Durga puja Day 2"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"23 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['On Dwitiya, may Maa Brahmacharini bless you with strength, devotion, and the power of perseverance."',e.jsx("br",{}),"Dwitiya is all about welcoming Maa into our hearts and home with devotion, lighting diyas,offering prayers and celebrating the win of good over evil 🌼.",e.jsx("br",{})]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"durga2.png",className:"w-full rounded-lg mb-2",alt:" Durga puja Day 1"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"22 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["“ঢাকের আওয়াজে, আলোর রঙে — শুরু হোক মায়ের আগমন।” 🐚🪔",e.jsx("br",{}),"Team TaruGuardians wish you all a very happy Navaratri.May these nine days of Navratri bring love and prosperity to everyone.✨🌸🪔"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"durga1.png",className:"w-full rounded-lg mb-2",alt:"Mahalya Durga puja"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"21 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["Mahalaya is the celestial alarm clock that wakes up an entire region before dawn — not with coffee ☕, but with chants 📿and conch shells 📯.",e.jsx("br",{}),"TaruGuardians wishes everyone a power-packed Mahalaya! 💫"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"vishwakarma.jpg",className:"w-full rounded-lg mb-2",alt:"Vishwakarma puja"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"17 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["✨“From tools to technology, from crafts to creations – all begin with the grace of Vishwakarma.”✨",e.jsx("br",{}),"🌸 Team TaruGuardians wishes every creator and builder a Happy Vishwakarma Puja!🌸"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"13.png",className:"w-full rounded-lg mb-2",alt:"engineers day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"15 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"The engineer has been, and is, a maker of history." — James Kip Finch',e.jsx("br",{}),"Whether it's developing software that evolves with time 💻, designing buildings and bridges 🏗️, or creating high-performance supercars 🚗 — they’re experts in everything they do."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"12.png",className:"w-full rounded-lg mb-2",alt:"Hindi Diwas"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"14 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['हिन्दी को राजभाषा बनाने का निर्णय इसलिए लिया गया क्योंकि यह देश की जनभाषा है।" - राजेंद्र प्रसाद',e.jsx("br",{}),"इए हम सब अपनी समृद्ध संस्कृति का जश्न मनाएं और अपनी राजभाषा का सम्मान करें। TaruGuardians इस राष्ट्रीय हिंदी दिवस पर सभी को हार्दिक शुभकामनाएं देते हैं।✨🌸"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"11.png",className:"w-full rounded-lg mb-2",alt:"Literacy Day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"8 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"Literacy is a bridge from misery to hope." – Kofi Annan 📖',e.jsx("br",{}),"TaruGuardians tips its hat 🎩 to every word warrior out there — stay curious, stay clever, and keep turning those pages! 🔍📘"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"10.png",className:"w-full rounded-lg mb-2",alt:"Muslims Festival"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"5 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"Twinkling lights, joyous hearts: Celebrating the birth of the Prophet! ✨',e.jsx("br",{}),"Muslims around the world rejoice, share happiness, and exchange gifts with family and friends to celebrate this auspicious occasion ❤️"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"9.png",className:"w-full rounded-lg mb-2",alt:"Teachers Day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"5 September 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"A good teacher can inspire hope, ignite the imagination, and instill a love of learning."💫',e.jsx("br",{}),"Teachers day serves to recognise the invaluable contribution and efforts of teachers, whose guidance shapes us who we are"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"8.png",className:"w-full rounded-lg mb-2",alt:"National Sports Day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"29 August 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"Champions are not born, they are made in the field through sweat, discipline, and resilience."',e.jsx("br",{}),`National Sports Day is celebrated on August 29, to commemorate the birthday of Major Dhyan Chand's to honor his sporting spirit, dedication and his remarkable contribution to Indian hockey. This year's theme "Sport to Promote Peaceful Societies," emphasizes sports' role in fostering unity and teamwork`]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"7.png",className:"w-full rounded-lg mb-2",alt:"ganesh chaturathi"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"27 August 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["ॐ एकदन्ताय विद्महे वक्रतुंडाय धीमहि तन्नो बुदि्ध प्रचोदयात।।",e.jsx("br",{}),"Ganesh Chaturthi, or Vinayaka Chaturthi, is a popular Indian festival celebrating the birth of Lord Ganesha , usually observed in August or September. The festival begins with the installation of clay idols in homes and public pandals 🎪, followed by daily pujas, bhajans 🎶, and offerings of sweets like modaks 🍬."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"6.png",className:"w-full rounded-lg mb-2",alt:"Krishan Janamashtmi"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"16 August 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"The flute of Krishna calls to the soul — follow it to find your true self."',e.jsx("br",{}),"let us all celebrate Janmashtami — a festival that brings out the child within each of us, whether young or old . On this joyous occasion, TaruGuardians extends warm wishes to everyone 🙏🏼. Happy Janmashtami! Jai Shri Krishna! 🦚"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"6.png",className:"w-full rounded-lg mb-2",alt:"Independence day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"15 August 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["Our freedom is our pride and also our responsibility. On the 15th of August 1947, we got our independence from the long rule of the British. It wouldn't have been possible without the sacrifices of our freedom fighters",e.jsx("br",{}),"HAPPY INDEPENDENCE DAY"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"5.png",className:"w-full rounded-lg mb-2",alt:"Raksha bandhan"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"9 August 2025"}),e.jsx("div",{className:"font-semibold text-sm news-card-text",children:`"A brother is a best friend given by Nature." Team TaruGuardians wish everyone a happy and blissful Raksha Bandhan. On this Rakhi let's take a vow to make our world a better place for our daughters and sisters ❤️.`})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"4.png",className:"w-full rounded-lg mb-2",alt:"World enviornments Day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"28 July 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:[`"The Earth provides enough to satisfy every man's need, but not every man's greed." — Mahatma Gandhi`,e.jsx("br",{}),"Nature nurtures us but it doesn't mean that we should exploit it. It should be conserved for future generations. Water , electricity and natural resources shouldn't be wasted."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"3.png",className:"w-full rounded-lg mb-2",alt:"Kargil War"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"26 July 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"Some goals are pious, some are glorious, but to defend the nation is the most sacred."',e.jsx("br",{}),"The Kargil War was a test to India's strength and resilience. Our heroes faced disastarous terrain, freezing temperatures, and a formidable enemy, but their spirit remained unbroken"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"2.png",className:"w-full rounded-lg mb-2",alt:"Guru Purnima"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"10 July 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"A teacher affects eternity; no one can tell where his influence stops."',e.jsx("br",{})," On this sacred day, let us express our gratitude to the ones who illuminate our path with wisdom and knowledge.May we acknowledge their profound impact on our lives.",e.jsx("br",{})," Team TaruGuardians wishes you a very happy guru purnima.🪔🙏🏻"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"muharam.png",className:"w-full rounded-lg mb-2",alt:"Muharram"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"6 July 2025"}),e.jsx("div",{className:"font-semibold text-sm news-card-text",children:"🌙 Muharram marks the start of the Islamic New Year, a month filled with introspection, prayer, and intense feeling. 🖤 Ashura, the tenth day, brings to mind a historical event that still stirs people's emotions: Imam Hussain's (RA) martyrdom at Karbala."})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"1.png",className:"w-full rounded-lg mb-2",alt:"Rath yatra"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"27 June 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["जय जगन्नाथ! जो खींचे रथ की डोरी, उस पर कृपा हो त्रिलोकीनाथ की भारी। ",e.jsx("br",{}),"The Rath Yatra symbolizes Lord Jagannath's journey from his home(Jagannath Temple) to his aunt's home(Gundicha Temple) along with his brother Balabhadra and sister Shubhadra❤️🙏🏻."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web1.jpg",className:"w-full rounded-lg mb-2",alt:"Yoga"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"21 June 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['Yoga is the journey of the self, through the self, to the self." — Bhagavad Gita',e.jsx("br",{})," yoga should be done everyday by everyone for their well being. Let's take a little step by celebrating international yoga day. TaruGuardians respects and encourages everyone to be a part of it"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web1.jpg",className:"w-full rounded-lg mb-2",alt:"Fathers Day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"16 June 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"A father doesn’t tell you how to live; he lives, and lets you watch him do it." — Clarence Budington Kelland .',e.jsx("br",{}),"Even though fathers deserve to be celebrated every day, let's make a start with this simple gesture.TaruGuardians admires and respects each and every beautiful creature of god who's supple enough and wishes them A Happy Father's Day 💐."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web1.jpg",className:"w-full rounded-lg mb-2",alt:"kabira jayanti"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"15 June 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['बुरा जो देखन मैं चला, बुरा न मिलिया कोय। जो मन खोजा आपना, मुझसे बुरा न कोय।"',e.jsx("br",{})," ne of India's most revered spiritual figures, Kabir Das is known for his revolutionary ideas and poems. Disciple of Ramananda, his teachings blended Hindu Bhakti and Islamic Sufi traditions."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web1.jpg",className:"w-full rounded-lg mb-2",alt:"Eid-al-Adha"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"11 June 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["Eid-Al-Adha also known as the festival of sacrifice is a celebration of generosity and unwavering faith",e.jsx("br",{}),"Team TaruGuardians wishes you a blessed Eid al-Adha. May your beliefs and faith be showered with divine love and peace. Eid mubarak!🌙✨"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web1.jpg",className:"w-full rounded-lg mb-2",alt:"Tree Planting Drive"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"7 June 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["Trees are the lungs of the earth, purifying the air and soothing the soul.",e.jsx("br",{})," This initiative embodies our club's pledge to nurture a sustainable future, fostering eco-awareness and community involvement."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web2.jpg",className:"w-full rounded-lg mb-2",alt:"World Environment Day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"5 June 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"What we are doing to the forests of the world is a mirror reflection of what we are doing to ourselves and to one another." — Mahatma Gandhi',e.jsx("br",{})," TaruGuardians encourages and respects every citizen who is determined for the betterment of our environment."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web3.jpg",className:"w-full rounded-lg mb-2",alt:"Tobacco Day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"31 May 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["You might think Cigarettes make you Cool! But It's Killing you Foo.",e.jsx("br",{})," TaruGuardians values every citizen who's conscious of this topic and is trying to make an impact."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web6.jpg",className:"w-full rounded-lg mb-2",alt:"Buddha Purnima"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"12 May 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["Under the shade of the Bodhi tree, a soul awakened 🌳.",e.jsx("br",{})," Team TaruGuardians extends heartfelt wishes for a peaceful, enlightened, and meaningful Buddha Purnima."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web7.jpg",className:"w-full rounded-lg mb-2",alt:"Mother's Day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"11 May 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["Existence, Confidence, Reliance all come from one. She is none other than your MOTHER❤.",e.jsx("br",{})," Team TaruGuardians wish each and every MOTHER, A HAPPY MOTHER’S DAY❤."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web8.jpg",className:"w-full rounded-lg mb-2",alt:"Maharana Pratap Jayanti"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"9 May 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"I prefer to sleep on the ground with my people than live in palaces as a traitor." – Maharana Pratap',e.jsx("br",{})," Team TaruGuardians wishes everyone a proud and inspiring Maharana Pratap Jayanti!!"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web9.jpg",className:"w-full rounded-lg mb-2",alt:"Rabindranath Tagore Jayanti"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"9 May 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:[`"You can't cross the sea merely by standing and staring at the water." — Rabindranath Tagore`,e.jsx("br",{})," On this day, may we celebrate the spirit of knowledge, freedom, and unity."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web11.jpg",className:"w-full rounded-lg mb-2",alt:"Labour Day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"1 May 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"All labor that uplifts humanity has dignity and importance." - Martin Luther King Jr.',e.jsx("br",{})," Team TaruGuardians wishes everyone a meaningful Labour Day."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web10.jpg",className:"w-full rounded-lg mb-2",alt:"Orientation Session"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"23 April 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["The TaruGuardians Orientation Session 2025.🎉",e.jsx("br",{})," The session marked the beginning of an exciting journey for all the fresh faces of the team."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web12.jpg",className:"w-full rounded-lg mb-2",alt:"Bengali New Year"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"15 April 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["A new year, a new light that opens doors to happiness, kindness, and positivity.✨",e.jsx("br",{})," Team TaruGuardians wishes you all a very happy Bengali New Year."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web13.jpg",className:"w-full rounded-lg mb-2",alt:"Ram Navami"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"6 April 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["रामो विग्रहवान् धर्मः सत्यसन्धो जितेन्द्रियः।",e.jsx("br",{})," Team TaruGuardians wishes you a very happy Ram Navami."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web14.jpg",className:"w-full rounded-lg mb-2",alt:"Eid Mubarak"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"31 March 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["TaruGuardians Wishes You Eid Mubarak✨",e.jsx("br",{})," May your days be blessed and hearts be full.🌼"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web15.jpg",className:"w-full rounded-lg mb-2",alt:"Holi"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"14 March 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["Splash into the Colors of Joy! ✨",e.jsx("br",{})," Team TaruGuardians wish you all a very happy and vibrant Holi!🌈"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web16.jpg",className:"w-full rounded-lg mb-2",alt:"International Women's Day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"8 March 2025"}),e.jsx("div",{className:"font-semibold text-sm news-card-text",children:"On this International Women's Day, we celebrate the relentless hard work and dedication of women across the globe. 🌍✨"})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web17.jpg",className:"w-full rounded-lg mb-2",alt:"Ramadan"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"1 March 2025"}),e.jsx("div",{className:"font-semibold text-sm news-card-text",children:"As the crescent moon appears, signaling the start of the holy month of Ramadan, Muslims worldwide embark on a spiritual journey."})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web18.jpg",className:"w-full rounded-lg mb-2",alt:"Mahashivratri"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"26 February 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।",e.jsx("br",{})," Team TaruGuardians wishes you all a very auspicious Mahashivratri. ||ॐ नमः शिवाय ||🔱🔥"]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web19.jpg",className:"w-full rounded-lg mb-2",alt:"Pulwama Attack Commemoration"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"14 February 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["We may not redeem the lives lost, but we will always bear them in our heart.🫡",e.jsx("br",{})," On this day, we commemorate the tragic events of the Pulwama attack."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web20.jpg",className:"w-full rounded-lg mb-2",alt:"Saraswati Puja"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"2 February 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:["वन्दे भक्तया वन्दिता च। ऊं ऐं सरस्वत्यै ऐं नमः।",e.jsx("br",{})," Team TaruGuardians wish everyone a Happy Saraswati Puja."]})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web21.jpg",className:"w-full rounded-lg mb-2",alt:"Republic Day"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"26 January 2025"}),e.jsx("div",{className:"font-semibold text-sm news-card-text",children:'"At the dawn of history, India started on her unending quest..." ~Jawaharlal Nehru'})]}),e.jsxs("div",{className:"w-full flex-shrink-0 cursor-pointer news-card",children:[e.jsx("img",{src:"web22.jpg",className:"w-full rounded-lg mb-2",alt:"Netaji Jayanti"}),e.jsx("span",{className:"uppercase text-xs text-red-700 font-bold mb-1",children:"23 January 2025"}),e.jsxs("div",{className:"font-semibold text-sm news-card-text",children:['"Give me blood, and I shall give you freedom." ~ Netaji Subhas Chandra Bose',e.jsx("br",{})," Team TaruGuardians wish everyone a HAPPY 128th NETAJI JAYANTI 🙏"]})]})]})]}),e.jsx("div",{className:"container mx-auto mt-8 px-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-white border rounded-lg overflow-hidden shadow p-3 news-card",children:[e.jsx("img",{src:"web23.jpg",className:"w-full rounded-lg mb-2",alt:"Army Day"}),e.jsx("span",{className:"text-xs uppercase text-red-700 font-bold mb-1",children:"15 January 2025"}),e.jsx("h3",{className:"font-semibold text-sm mt-1 news-card-text",children:"Our flag does not fly because the wind moves it; it flies with the last breath of each soldier who died protecting it."})]}),e.jsxs("div",{className:"bg-white border rounded-lg overflow-hidden shadow p-3 news-card",children:[e.jsx("img",{src:"web24.jpg",className:"w-full rounded-lg mb-2",alt:"Makar Sankranti"}),e.jsx("span",{className:"text-xs uppercase text-red-700 font-bold mb-1",children:"14 January 2025"}),e.jsx("h3",{className:"font-semibold text-sm mt-1 news-card-text",children:"Celebrate the harvest, cherish the sun, and fly the kites of hope and ambition.🪁"})]}),e.jsxs("div",{className:"bg-white border rounded-lg overflow-hidden shadow p-3 news-card",children:[e.jsx("img",{src:"web25.jpg",className:"w-full rounded-lg mb-2",alt:"Swami Vivekananda Jayanti"}),e.jsx("span",{className:"text-xs uppercase text-red-700 font-bold mb-1",children:"12 January 2025"}),e.jsx("h3",{className:"font-semibold text-sm mt-1 news-card-text",children:'"Arise, awake, and stop not until the goal is reached 🎯." ~Swami Vivekananda'})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-white border rounded-lg overflow-hidden shadow p-3 news-card",children:[e.jsx("img",{src:"web26.jpg",className:"w-full rounded-lg mb-2",alt:"Hindi Diwas"}),e.jsx("span",{className:"text-xs uppercase text-red-700 font-bold mb-1",children:"10 January 2025"}),e.jsx("h3",{className:"font-semibold text-sm mt-1 news-card-text",children:"हिंदी हमारी पहचान है, हमारी संस्कृति की जान है। 🌟"})]}),e.jsxs("div",{className:"bg-white border rounded-lg overflow-hidden shadow p-3 news-card",children:[e.jsx("img",{src:"web27.jpg",className:"w-full rounded-lg mb-2",alt:"Guru Gobind Singh Jayanti"}),e.jsx("span",{className:"text-xs uppercase text-red-700 font-bold mb-1",children:"6 January 2025"}),e.jsx("h3",{className:"font-semibold text-sm mt-1 news-card-text",children:'"The greatest comfort and lasting peace are obtained when one eradicates selfishness from within." ~Guru Gobind Singh Ji 🙏'})]})]}),e.jsx("div",{className:"flex items-center justify-center mt-4",children:e.jsx("a",{href:"https://www.instagram.com/_taruguardians_/",className:"text-blue-700 font-semibold hover:underline clickable","data-legacy-onclick":"navigate('more')",children:"SEE MORE →"})})]})})]})}),e.jsxs("footer",{className:"footer",children:[e.jsxs("div",{className:"footer-logo-container",children:[e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians Logo"}),e.jsx("h3",{})]}),e.jsxs("div",{className:"footer-columns",children:[e.jsxs("div",{className:"footer-column",children:[e.jsx("h2",{children:"𝐓𝐚𝐫𝐮𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧𝐬"}),e.jsx("p",{children:" 𝔄𝔰 𝔱𝔯𝔢𝔢𝔰 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔯𝔬𝔬𝔱𝔰, 𝔴𝔢 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔱𝔢𝔠𝔥. 𝔉𝔯𝔬𝔪 𝔰𝔢𝔢𝔡𝔰 𝔬𝔣 𝔠𝔬𝔡𝔢 𝔱𝔬 𝔠𝔞𝔫𝔬𝔭𝔦𝔢𝔰 𝔬𝔣 𝔠𝔥𝔞𝔫𝔤𝔢 — 𝔟𝔲𝔦𝔩𝔡𝔦𝔫𝔤 𝔞 𝔤𝔯𝔢𝔢𝔫𝔢𝔯, 𝔰𝔪𝔞𝔯𝔱𝔢𝔯 𝔣𝔲𝔱𝔲𝔯𝔢."}),e.jsx("p",{children:"(𝚁𝙾𝙾𝚃𝙴𝙳 𝙸𝙽 𝙽𝙰𝚃𝚄𝚁𝙴, 𝙳𝚁𝙸𝚅𝙴𝙽 𝙱𝚈 𝚃𝙴𝙲𝙷)"})]}),e.jsx("div",{className:"footer-column",children:e.jsx("a",{href:"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about",className:"blog-button",children:" 𝓞𝓾𝓻 𝓑𝓵𝓸𝓰"})}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h3",{children:"𝓒𝓸𝓷𝓽𝓪𝓬𝓽"}),e.jsx("p",{children:"𝓣𝓪𝓻𝓾𝓖𝓾𝓪𝓻𝓭𝓲𝓪𝓷𝓼@𝓰𝓶𝓪𝓲𝓵.𝓬𝓸𝓶"})]}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h3",{children:"𝓕𝓸𝓵𝓵𝓸𝔀 𝓤𝓼"}),e.jsxs("div",{className:"social-icons",children:[e.jsx("a",{href:"https://www.instagram.com/_taruguardians_/",children:e.jsx("img",{src:"instag.png",alt:"Instagram"})}),e.jsx("a",{href:"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in",children:e.jsx("img",{src:"linkden.png",alt:"LinkedIn"})}),e.jsx("a",{href:"https://www.facebook.com/TaruGuardians/",children:e.jsx("img",{src:"facebook.png",alt:"Facebook"})}),e.jsx("a",{href:"https://www.youtube.com/@TaruGuardians",children:e.jsx("img",{src:"youtube.webp",alt:"YouTube"})})]}),e.jsx("em",{children:"𝓢𝓽𝓪𝔂 𝓾𝓹𝓭𝓪𝓽𝓮𝓭 𝔀𝓲𝓽𝓱 𝓸𝓾𝓻 𝓵𝓪𝓽𝓮𝓼𝓽 𝓹𝓸𝓼𝓽𝓼, 𝓮𝓿𝓮𝓷𝓽𝓼, 𝓪𝓷𝓭 𝓦𝓸𝓻𝓴𝓼𝓱𝓸𝓹𝓼!"})]})]}),e.jsx("small",{children:"© 2025 TaruGuardians. All rights reserved."})]})]})}const Jf=[{kind:"external",src:"https://cdn.tailwindcss.com",type:"text/javascript"},{kind:"external",src:"https://unpkg.com/@lottiefiles/lottie-player@1.7.1/dist/lottie-player.js",type:"text/javascript"},{kind:"external",src:"frontend-auth.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a');
        const blogButtons = document.querySelectorAll('.taru-blog-btn');
        const bottomNavLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');
        const mainPage = 'TARUGUARDIANS FIRST PAGE.html';

        // Toggle mobile menu
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburger.textContent = mobileMenu.classList.contains('active') ? '×' : '≡';
        });

        // Handle navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');

                // Handle blog button separately
                if (this.classList.contains('taru-blog-btn')) {
                    window.open('https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about', '_blank');
                    return;
                }

                // Update active state
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                // Extract section ID from href
                const sectionId = href.includes('#') ? href.split('#')[1] : null;
                const isMainPageLink = href.startsWith(mainPage);

                // Redirect to main page with section
                if (isMainPageLink && sectionId) {
                    window.location.href = href; // Redirect to TARUGUARDIANS FIRST PAGE.html#section
                } else if (sectionId) {
                    // If on current page, scroll to section
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }

                // Close mobile menu if open
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    hamburger.textContent = '≡';
                }
            });
        });

        // Placeholder for details page navigation
        function openDetailsPage() {
            console.log('Opening details page...');
        }

        // Debounce function to limit scroll event frequency
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Scroll event listener for bottom navigation highlighting
        const updateActiveNav = debounce(() => {
            let currentSection = '';
            let minDistance = Infinity;

            if (window.scrollY < 100) {
                currentSection = 'home';
            } else {
                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    const distance = Math.abs(rect.top);
                    if (distance < minDistance && rect.top <= window.innerHeight * 0.3) {
                        minDistance = distance;
                        currentSection = section.getAttribute('id');
                    }
                });
            }

            bottomNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === \`#\${currentSection}\`) {
                    link.classList.add('active');
                }
            });
        }, 50);

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();

        // Expose functions to global scope for oninput event
        window.openDetailsPage = openDetailsPage;
    });
`}],ac=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function Kf(n){for(const t of Jf)if(t.kind==="external"){if(ac.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),ac.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function Qf(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const sc="Interview";function Zf(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},Kf(sc);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{Qf(sc),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-Interview",children:[e.jsxs("header",{className:"modern-navbar",children:[e.jsxs("div",{className:"navbar-container",children:[e.jsxs("div",{className:"navbar-logo",children:[e.jsx("span",{className:"logo-arrow left",children:"<"}),e.jsx("img",{src:"tarulogo.png",alt:"TaruGuardians Logo"}),e.jsx("span",{children:"TaruGuardians"}),e.jsx("span",{className:"logo-arrow right",children:">"})]}),e.jsx("nav",{className:"navbar-center",children:e.jsxs("div",{className:"navbar-links",children:[e.jsx(x,{to:"/home",className:"active",children:"Home"}),e.jsx(x,{to:"/home",children:"Event"}),e.jsx(x,{to:"/home",children:"TARU WINGS"}),e.jsx(x,{to:"/home",children:"Roadmap"}),e.jsx(x,{to:"/home",children:"Placement Guide"}),e.jsx(x,{to:"/home",children:"Team"})]})}),e.jsx(x,{to:"/auth",className:"taru-blog-btn auth-login-btn",children:"Login"}),e.jsx("div",{className:"auth-user-menu",style:{display:"none"},children:e.jsx(x,{to:"/dashboard",className:"taru-blog-btn",children:"Dashboard"})}),e.jsx("div",{className:"hamburger",children:"≡"})]}),e.jsx("div",{className:"mobile-menu",children:e.jsxs("div",{className:"navbar-links",children:[e.jsx(x,{to:"/home",className:"active",children:"Home"}),e.jsx(x,{to:"/home",children:"Event"}),e.jsx(x,{to:"/home",children:"TARU WINGS"}),e.jsx(x,{to:"/home",children:"Roadmap"}),e.jsx(x,{to:"/home",children:"Placement Guide"}),e.jsx(x,{to:"/home",children:"Team"}),e.jsx(x,{to:"/auth",className:"auth-login-btn",children:"Login"}),e.jsx(x,{to:"/dashboard",className:"auth-user-menu",style:{display:"none"},children:"Dashboard"})]})})]}),e.jsxs("div",{className:"scene section",id:"home",children:[e.jsx("div",{className:"cloud",style:{top:"5%",animationDelay:"0s"}}),e.jsx("div",{className:"cloud",style:{top:"5%",animationDelay:"5s"}}),e.jsx("div",{className:"cloud",style:{top:"5%",animationDelay:"10s"}}),e.jsx("div",{className:"bird-container",style:{top:"20%",left:"-100px",animationDelay:"0s"},children:e.jsx("lottie-player",{src:"bird2.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"bird-container",style:{top:"21%",left:"-150px",animationDelay:"0.5s"},children:e.jsx("lottie-player",{src:"Animation - 1744827928378.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"bird-container",style:{top:"22%",left:"-200px",animationDelay:"1s"},children:e.jsx("lottie-player",{src:"Animation - 1744827928378.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"bird-container",style:{top:"24%",left:"-300px",animationDelay:"2s"},children:e.jsx("lottie-player",{src:"Animation - 1744827928378.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"bird-container",style:{top:"25%",left:"-350px",animationDelay:"2.5s"},children:e.jsx("lottie-player",{src:"bird2.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"bird-container",style:{top:"26%",left:"-400px",animationDelay:"3s"},children:e.jsx("lottie-player",{src:"Animation - 1744827928378.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"tree-container",style:{left:"5vw"},children:e.jsx("lottie-player",{src:"Animation - 1744827567361.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"tree-container",style:{left:"25vw",animationDelay:"1s"},children:e.jsx("lottie-player",{src:"Animation - 1744827567361.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"tree-container",style:{left:"50vw",animationDelay:"2s"},children:e.jsx("lottie-player",{src:"Animation - 1744827567361.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"tree-container",style:{left:"75vw",animationDelay:"2.5s"},children:e.jsx("lottie-player",{src:"Animation - 1744827567361.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"tree-container",style:{left:"100vw",animationDelay:"3s"},children:e.jsx("lottie-player",{src:"Animation - 1744827567361.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"tree-container",style:{left:"125vw",animationDelay:"3s"},children:e.jsx("lottie-player",{src:"Animation - 1744827567361.json",background:"transparent",speed:"1",loop:!0,autoPlay:!0})}),e.jsx("div",{className:"smoke"}),e.jsx("div",{className:"ground"})]}),e.jsxs("div",{className:"roadmap-container",id:"spa-content",children:[e.jsxs("div",{className:"tech-section section",id:"tech",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box1","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com",className:"box-button",children:"DSA"}),e.jsx("a",{href:"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com",className:"box-button",children:"Development"}),e.jsx("a",{href:"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box2","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box3","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com",className:"box-button",children:"DSA"}),e.jsx("a",{href:"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com",className:"box-button",children:"Development"}),e.jsx("a",{href:"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box4","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box5","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box6","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box7","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box8","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box9","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements involves includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box10","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box11","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box12","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box13","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box14","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box15","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"On Campus Placement Roadmap"}),e.jsxs("div",{className:"box-description",children:["Cracking on-campus placements typically includes a predefined process organized ",e.jsx("span",{children:"BY"})," college."]}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"DSA"}),e.jsx("a",{href:"#",className:"box-button",children:"Development"}),e.jsx("a",{href:"#",className:"box-button",children:"Quant Aptitude"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]})]}),e.jsxs("div",{className:"nontech-section section",id:"nontech",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box16","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Roadmap To Crack Off Campus Placement"}),e.jsx("div",{className:"box-description",children:"Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Resume Building"}),e.jsx("a",{href:"#",className:"box-button",children:"Interview Prep"}),e.jsx("a",{href:"#",className:"box-button",children:"Mock Tests"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box17","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Roadmap To Crack Off Campus Placement"}),e.jsx("div",{className:"box-description",children:"Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Resume Building"}),e.jsx("a",{href:"#",className:"box-button",children:"Interview Prep"}),e.jsx("a",{href:"#",className:"box-button",children:"Mock Tests"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box18","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Roadmap To Crack Off Campus Placement"}),e.jsx("div",{className:"box-description",children:"Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Resume Building"}),e.jsx("a",{href:"#",className:"box-button",children:"Interview Prep"}),e.jsx("a",{href:"#",className:"box-button",children:"Mock Tests"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box19","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Roadmap To Crack Off Campus Placement"}),e.jsx("div",{className:"box-description",children:"Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Resume Building"}),e.jsx("a",{href:"#",className:"box-button",children:"Interview Prep"}),e.jsx("a",{href:"#",className:"box-button",children:"Mock Tests"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box20","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Roadmap To Crack Off Campus Placement"}),e.jsx("div",{className:"box-description",children:"Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Resume Building"}),e.jsx("a",{href:"#",className:"box-button",children:"Interview Prep"}),e.jsx("a",{href:"#",className:"box-button",children:"Mock Tests"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box21","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Roadmap To Crack Off Campus Placement"}),e.jsx("div",{className:"box-description",children:"Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Resume Building"}),e.jsx("a",{href:"#",className:"box-button",children:"Interview Prep"}),e.jsx("a",{href:"#",className:"box-button",children:"Mock Tests"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box22","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Roadmap To Crack Off Campus Placement"}),e.jsx("div",{className:"box-description",children:"Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Resume Building"}),e.jsx("a",{href:"#",className:"box-button",children:"Interview Prep"}),e.jsx("a",{href:"#",className:"box-button",children:"Mock Tests"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box23","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Roadmap To Crack Off Campus Placement"}),e.jsx("div",{className:"box-description",children:"Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Resume Building"}),e.jsx("a",{href:"#",className:"box-button",children:"Interview Prep"}),e.jsx("a",{href:"#",className:"box-button",children:"Mock Tests"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box24","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Roadmap To Crack Off Campus Placement"}),e.jsx("div",{className:"box-description",children:"Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Resume Building"}),e.jsx("a",{href:"#",className:"box-button",children:"Interview Prep"}),e.jsx("a",{href:"#",className:"box-button",children:"Mock Tests"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box25","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Video Editor – Freelancing"}),e.jsx("div",{className:"box-description",children:"Master editing tools, storytelling, and reels optimization using Premiere Pro, After Effects & trendy transitions."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Communication"}),e.jsx("a",{href:"#",className:"box-button",children:"Skills"}),e.jsx("a",{href:"#",className:"box-button",children:"Time Management"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box26","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Content Writer – Freelancing"}),e.jsx("div",{className:"box-description",children:"Strong grammar, SEO basics, and niche writing samples with tools like Grammarly & Ubersuggest are must-haves."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Communication"}),e.jsx("a",{href:"#",className:"box-button",children:"Skills"}),e.jsx("a",{href:"#",className:"box-button",children:"Time Management"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box27","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Photography & Photo Editing – Freelancing"}),e.jsx("div",{className:"box-description",children:"Start by editing photos for friends/family and showcase the results as your portfolio on Fiverr or Behance."}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Communication"}),e.jsx("a",{href:"#",className:"box-button",children:"Skills"}),e.jsx("a",{href:"#",className:"box-button",children:"Time Management"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]})]}),e.jsxs("div",{className:"taruplacement-section section",id:"taruplacement",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box28","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Graphics Designer"}),e.jsx("div",{className:"box-description",children:"Roadmap to Logos, social media posts, branding"}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Canva"}),e.jsx("a",{href:"#",className:"box-button",children:"Adobe Illustrator"}),e.jsx("a",{href:"#",className:"box-button",children:"Figma"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box29","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"UI/UX Designer"}),e.jsx("div",{className:"box-description",children:"Roadmap To UI/UX Designer"}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Figma"}),e.jsx("a",{href:"#",className:"box-button",children:"Adobe XD"}),e.jsx("a",{href:"#",className:"box-button",children:"Sketch"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box30","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Motion Graphics Roadmap"}),e.jsx("div",{className:"box-description",children:"Roadmap To Motion Graphics Artist"}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Blender"}),e.jsx("a",{href:"#",className:"box-button",children:"Adobe Animate"}),e.jsx("a",{href:"#",className:"box-button",children:"Vyond"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box31","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Video Editor"}),e.jsx("div",{className:"box-description",children:"Roadmap To YouTube, reels, event footage"}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Adobe Premiere Pro"}),e.jsx("a",{href:"#",className:"box-button",children:"Final Cut Pro"}),e.jsx("a",{href:"#",className:"box-button",children:"CapCut"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box32","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Roadmap To Illustrator"}),e.jsx("div",{className:"box-description",children:"Roadmap To Comics, children's books, merchandise art"}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Procreate (iPad)"}),e.jsx("a",{href:"#",className:"box-button",children:"Adobe Illustrator"}),e.jsx("a",{href:"#",className:"box-button",children:"Krita"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box33","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Content Writer"}),e.jsx("div",{className:"box-description",children:"Roadmap To Writing Blogs, newsletters, articles"}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Google Docs"}),e.jsx("a",{href:"#",className:"box-button",children:"Grammarly"}),e.jsx("a",{href:"#",className:"box-button",children:"MS Word"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"box",id:"box34","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Script Writer"}),e.jsx("div",{className:"box-description",children:"Roadmap To Script Writer For YouTube, reels, animations"}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"YouTube video scripts"}),e.jsx("a",{href:"#",className:"box-button",children:"vloggers"}),e.jsx("a",{href:"#",className:"box-button",children:"educators"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box35","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Performance Marketer (Google/Facebook Ads)"}),e.jsx("div",{className:"box-description",children:"Roadmap To Performance Marketer (Google/Facebook Ads)"}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Google Ads"}),e.jsx("a",{href:"#",className:"box-button",children:"Meta Ads Manager"}),e.jsx("a",{href:"#",className:"box-button",children:"LinkedIn Ads"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})}),e.jsx("div",{className:"box",id:"box36","data-legacy-onclick":"openDetailsPage()",children:e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-title",children:"Brand Strategist"}),e.jsx("div",{className:"box-description",children:"Roadmap To Google Analytics, Looker Studio, Hotjar"}),e.jsxs("div",{className:"box-buttons",children:[e.jsx("a",{href:"#",className:"box-button",children:"Graphics Design"}),e.jsx("a",{href:"#",className:"box-button",children:"Video Editing"}),e.jsx("a",{href:"#",className:"box-button",children:"Content Creation"})]}),e.jsx("a",{href:"#",className:"box-link","data-legacy-onclick":"openDetailsPage()",children:"Visit to See More"})]})})]})]})]}),e.jsxs("div",{className:"nav",id:"navbar",children:[e.jsx("a",{href:"#home",className:"nav-link active",children:"Home"}),e.jsx("a",{href:"#tech",className:"nav-link",children:"On Campus Placement"}),e.jsx("a",{href:"#nontech",className:"nav-link",children:"Off Campus"}),e.jsx("a",{href:"#taruplacement",className:"nav-link",children:"Nontech Skills"})]}),e.jsxs("footer",{children:[e.jsxs("div",{className:"footer-logo-container",children:[e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians Logo"}),e.jsx("h3",{children:"(TURN PASSION INTO PURPOSE)"})]}),e.jsxs("div",{className:"footer-columns",children:[e.jsxs("div",{className:"footer-column",children:[e.jsx("h2",{children:"TaruGuardians"}),e.jsx("p",{children:"Just as trees grow with deep roots, we grow with deep tech. From seeds of code to canopies of change — building a greener, smarter future."}),e.jsx("p",{children:"(ROOTED IN NATURE, DRIVEN BY TECH)"})]}),e.jsx("div",{className:"footer-column",children:e.jsx("a",{href:"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about",className:"footer-blog-btn",children:"Our Blog"})}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h3",{children:"Contact"}),e.jsx("p",{children:"Taru.Guardians@gmail.com"})]}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h3",{children:"Follow Us"}),e.jsxs("div",{className:"social-icons",children:[e.jsx("a",{href:"https://www.instagram.com/_taruguardians_/",children:e.jsx("i",{className:"fab fa-instagram"})}),e.jsx("a",{href:"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in",children:e.jsx("i",{className:"fab fa-linkedin"})}),e.jsx("a",{href:"https://www.facebook.com/TaruGuardians/",children:e.jsx("i",{className:"fab fa-facebook"})}),e.jsx("a",{href:"https://www.youtube.com/@TaruGuardians",children:e.jsx("i",{className:"fab fa-youtube"})})]}),e.jsx("p",{style:{fontStyle:"italic"},children:"Stay updated with our latest posts, events, and workshops"})]})]}),e.jsx("small",{children:"© 2025 TaruGuardians. All rights reserved."})]})]})}const eg=[{kind:"external",src:"frontend-auth.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
    document.addEventListener('DOMContentLoaded', function() {
        const blogButtons = document.querySelectorAll('.taru-blog-btn');
        const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a');

        // Handle blog button clicks separately
        // blogButtons.forEach(button => {
        //     button.addEventListener('click', function(e) {
        //         e.preventDefault();
        //         window.open('https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about', '_blank');
        //     });
        // });

        // Handle internal navigation links, bypassing SPA for blog button
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (this.classList.contains('taru-blog-btn')) {
                    window.open('https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about', '_blank');
                    return;
                }
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.navbar-links a, .navbar-blog-btn');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                window.location.href = href; // Redirect to index.html with hash
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a, .navbar-blog-btn');

        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburger.textContent = mobileMenu.classList.contains('active') ? '×' : '≡';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                window.location.href = href;
                mobileMenu.classList.remove('active');
                hamburger.textContent = '≡';
            });
        });
    });
`}],rc=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function ng(n){for(const t of eg)if(t.kind==="external"){if(rc.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),rc.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function tg(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const ic="Roadmap";function ag(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},ng(ic);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{tg(ic),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-Roadmap",children:[e.jsxs("header",{className:"modern-navbar",children:[e.jsxs("div",{className:"navbar-container",children:[e.jsxs("div",{className:"navbar-logo",children:[e.jsx("span",{className:"logo-arrow left",children:"<"}),e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians Logo"}),e.jsx("span",{children:"TaruGuardians"}),e.jsx("span",{className:"logo-arrow right",children:">"})]}),e.jsx("div",{className:"navbar-center",children:e.jsxs("div",{className:"navbar-links",children:[e.jsx(x,{to:"/home",className:"active",children:"Home"}),e.jsx(x,{to:"/home",children:"Event"}),e.jsx(x,{to:"/home",children:"TARU WINGS"}),e.jsx(x,{to:"/home",children:"Roadmap"}),e.jsx(x,{to:"/home",children:"Placement Guide"}),e.jsx(x,{to:"/home",children:"Team"})]})}),e.jsx(x,{to:"/auth",className:"navbar-blog-btn auth-login-btn",children:"Login"}),e.jsx("div",{className:"auth-user-menu",style:{display:"none"},children:e.jsx(x,{to:"/dashboard",className:"navbar-blog-btn",children:"Dashboard"})}),e.jsx("div",{className:"hamburger",children:"≡"})]}),e.jsxs("div",{className:"mobile-menu",children:[e.jsx(x,{to:"/home",className:"active",children:"Home"}),e.jsx(x,{to:"/home",children:"Event"}),e.jsx(x,{to:"/home",children:"TARU WINGS"}),e.jsx(x,{to:"/home",children:"Roadmap"}),e.jsx(x,{to:"/home",children:"Placement Guide"}),e.jsx(x,{to:"/home",children:"Team"}),e.jsx(x,{to:"/auth",className:"auth-login-btn",children:"Login"}),e.jsx(x,{to:"/dashboard",className:"auth-user-menu",style:{display:"none"},children:"Dashboard"})]})]}),e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"roadmaps-title",children:"Roadmaps By TaruGuardians Team"}),e.jsxs("div",{className:"roadmap-grid",children:[e.jsx("a",{href:"https://roadmap.sh/full-stack",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"web5.jpg",alt:"Web Development Roadmap"}),e.jsx("h2",{children:"Web Development Roadmap"})]})}),e.jsx("a",{href:"https://www.codechef.com/roadmap/become-5-star",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"cp2.jpg",alt:"Competitive Programming Roadmap"}),e.jsx("h2",{children:"Competitive Programming Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/ios",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"ios.jpg",alt:"iOS Development Roadmap"}),e.jsx("h2",{children:"iOS Development Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/game-developer",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"gamedeveloper2.jpg",alt:"Game Development Roadmap"}),e.jsx("h2",{children:"Game Development Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/android",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"app.jpg",alt:"Android Development Roadmap"}),e.jsx("h2",{children:"Android Development Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/blockchain",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"blockchasin.jpg",alt:"Blockchain Developer Roadmap"}),e.jsx("h2",{children:"Blockchain Developer Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/datastructures-and-algorithms",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"cp.jpg",alt:"DSA Roadmap"}),e.jsx("h2",{children:"DSA Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/software-architect",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"architect.jpg",alt:"Software Architect Roadmap"}),e.jsx("h2",{children:"Software Architect Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/cyber-security",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"cyber%20security.jpg",alt:"Cyber Security Roadmap"}),e.jsx("h2",{children:"Cyber Security Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/data-analyst",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"data%20analyst.jpg",alt:"Data Analyst Roadmap"}),e.jsx("h2",{children:"Data Analyst Roadmap"})]})})]})]}),e.jsxs("footer",{className:"footer",children:[e.jsxs("div",{className:"footer-logo-container",children:[e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians Logo"}),e.jsx("h3",{children:"(Turn Passion Into Purpose)"})]}),e.jsxs("div",{className:"footer-columns",children:[e.jsxs("div",{className:"footer-column",children:[e.jsx("h2",{children:"TaruGuardians"}),e.jsx("p",{children:"Just as trees grow with deep roots, we grow with deep tech. From seeds of code to canopies of change — building a greener, smarter future."}),e.jsx("p",{children:"(ROOTED IN NATURE, DRIVEN BY TECH)"})]}),e.jsx("div",{className:"footer-column",children:e.jsx("a",{href:"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about",className:"blog-button",children:"Our Blog"})}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h3",{children:"Contact"}),e.jsx("p",{children:"Taru.Guardians@gmail.com"})]}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h3",{children:"Follow Us"}),e.jsxs("div",{className:"social-icons",children:[e.jsx("a",{href:"https://www.instagram.com/_taruguardians_/",children:e.jsx("img",{src:"instag.png",alt:"Instagram"})}),e.jsx("a",{href:"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in",children:e.jsx("img",{src:"linkden.png",alt:"LinkedIn"})}),e.jsx("a",{href:`https://www.facebook.com/TaruGuardians/
`,children:e.jsx("img",{src:"facebook.png",alt:"Facebook"})}),e.jsx("a",{href:"https://www.youtube.com/@TaruGuardians",children:e.jsx("img",{src:"youtube.webp",alt:"YouTube"})})]}),e.jsx("em",{children:"Stay updated with our latest posts, events, and workshops"})]})]}),e.jsx("small",{children:"© 2025 TaruGuardians. All rights reserved."})]})]})}const sg=[{kind:"external",src:"https://kit.fontawesome.com/a076d05399.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.navbar-links a, .navbar-blog-btn');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                window.location.href = href; // Redirect to index.html with hash
            });
        });
    });
`}],lc=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function rg(n){for(const t of sg)if(t.kind==="external"){if(lc.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),lc.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function ig(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const oc="RoadmapOld";function lg(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},rg(oc);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{ig(oc),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-RoadmapOld",children:[e.jsx("header",{className:"modern-navbar",children:e.jsxs("div",{className:"navbar-container",children:[e.jsxs("div",{className:"navbar-logo",children:[e.jsx("span",{className:"logo-arrow left",children:"<"}),e.jsx("img",{src:"tarulogo.png",alt:"TaruGuardians Logo"}),"TaruGuardians",e.jsx("span",{className:"logo-arrow right",children:">"})]}),e.jsx("nav",{className:"navbar-center",children:e.jsxs("div",{className:"navbar-links",children:[e.jsx("a",{href:"navbarsuccessful.html#home",children:"Home"}),e.jsx("a",{href:"navbarsuccessful.html#tech-wheel",children:"Tech Tool"}),e.jsx("a",{href:"navbarsuccessful.html#events",children:"Events"}),e.jsx("a",{href:"#",className:"active",children:"Roadmaps"}),e.jsx("a",{href:"navbarsuccessful.html#projects",children:"Projects"}),e.jsx("a",{href:"navbarsuccessful.html#team",children:"Team"}),e.jsx("a",{href:"navbarsuccessful.html#alumni",children:"Alumni"})]})}),e.jsx("a",{href:"#",className:"navbar-blog-btn",children:"Our Blog"})]})}),e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"roadmaps-title",children:"Roadmaps By TaruGuardians Team"}),e.jsxs("div",{className:"roadmap-grid",children:[e.jsx("a",{href:" https://roadmap.sh/full-stack",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"web5.jpg",alt:"Roadmap 1"}),e.jsx("h2",{children:"Web Development Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/devops",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"cp2.jpg",alt:"Roadmap 2"}),e.jsx("h2",{children:"Competetive programming Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/data-analyst",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"ios.jpg",alt:"NLP Roadmap"}),e.jsx("h2",{children:"ios Development Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/android",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"gamedeveloper2.jpg",alt:"Machine Learning Roadmap"}),e.jsx("h2",{children:"Game Development Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/ios",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"app.jpg",alt:"Competitive Programming Roadmap"}),e.jsx("h2",{children:"Android Development Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/blockchain",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"blockchasin.jpg",alt:"Information Security Roadmap"}),e.jsx("h2",{children:"Blockchain Developer Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/cyber-security",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"cp.jpg",alt:"Machine Learning Roadmap"}),e.jsx("h2",{children:"DSA Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/game-developer",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"architect.jpg",alt:"Competitive Programming Roadmap"}),e.jsx("h2",{children:"Software Architect Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/mlops",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"cyber%20security.jpg",alt:"Information Security Roadmap"}),e.jsx("h2",{children:"Cyber Security Roadmap"})]})}),e.jsx("a",{href:"https://roadmap.sh/software-architect",target:"_blank",style:{textDecoration:"none"},children:e.jsxs("div",{className:"roadmap-card",children:[e.jsx("img",{src:"data%20analyst.jpg",alt:"Machine Learning Roadmap"}),e.jsx("h2",{children:"Data Analyst Roadmap"})]})})]})]}),e.jsxs("footer",{style:{backgroundColor:"#000",color:"#fff",padding:"40px 20px",fontFamily:"Arial, sans-serif",position:"relative",textAlign:"center"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians Logo",style:{width:"100px",height:"100px",borderRadius:"50%",display:"block",margin:"0 auto 5px"}}),e.jsx("h3",{style:{fontSize:"18px",color:"#fff",margin:"0"},children:"(TURN PASSION INTO PURPOSE)"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("div",{style:{margin:"20px",minWidth:"200px"},children:[e.jsx("h2",{style:{fontSize:"24px",marginBottom:"15px"},children:"TaruGuardians"}),e.jsx("p",{style:{fontSize:"14px",color:"#ccc",lineHeight:"1.6",maxWidth:"300px"},children:"Just as trees grow with deep roots, we grow with deep tech. From seeds of code to canopies of change — building a greener, smarter future."}),e.jsx("p",{style:{fontSize:"12px",color:"#ccc",marginTop:"10px"},children:"(ROOTED IN NATURE, DRIVEN BY TECH)"})]}),e.jsx("div",{style:{margin:"20px",minWidth:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("a",{href:"#",style:{backgroundColor:"#1e90ff",color:"#fff",padding:"10px 20px",borderRadius:"25px",textDecoration:"none",fontSize:"16px"},children:"Our Blog"})}),e.jsxs("div",{style:{margin:"20px",minWidth:"200px"},children:[e.jsx("h3",{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact"}),e.jsx("p",{style:{fontSize:"14px",color:"#ccc"},children:"Taru.Guardians@gmail.com"})]}),e.jsxs("div",{style:{margin:"20px",minWidth:"200px"},children:[e.jsx("h3",{style:{fontSize:"18px",marginBottom:"15px"},children:"Follow Us"}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"10px",marginBottom:"10px"},children:[e.jsx("a",{href:"#",style:{color:"#ff69b4",fontSize:"20px"},children:e.jsx("i",{className:"fab fa-instagram"})}),e.jsx("a",{href:"#",style:{color:"#1e90ff",fontSize:"20px"},children:e.jsx("i",{className:"fab fa-linkedin"})}),e.jsx("a",{href:"#",style:{color:"#3b5998",fontSize:"20px"},children:e.jsx("i",{className:"fab fa-facebook"})}),e.jsx("a",{href:"#",style:{color:"#ff0000",fontSize:"20px"},children:e.jsx("i",{className:"fab fa-youtube"})})]}),e.jsx("p",{style:{fontSize:"12px",color:"#ccc",fontStyle:"italic"},children:"Stay updated with our latest posts, events, and workshops"})]})]}),e.jsx("div",{style:{textAlign:"center",marginTop:"20px",fontSize:"12px",color:"#ccc"},children:"© 2025 TaruGuardians. All rights reserved."})]})]})}const og=[{kind:"external",src:"https://cdn.tailwindcss.com",type:"text/javascript"},{kind:"external",src:"frontend-auth.js",type:"text/javascript"},{kind:"external",src:"https://kit.fontawesome.com/a076d05399.js",type:"text/javascript"},{kind:"external",src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a, .navbar-blog-btn');

        // Toggle mobile menu
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburger.innerHTML = mobileMenu.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close menu on link click and navigate
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                window.location.href = href;
                mobileMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target) && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
`}],cc=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function cg(n){for(const t of og)if(t.kind==="external"){if(cc.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),cc.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function dg(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const dc="Alumni";function ug(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},cg(dc);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{dg(dc),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-Alumni",children:[e.jsxs("video",{className:"video-bg",autoPlay:!0,muted:!0,loop:!0,playsinline:!0,children:[e.jsx("source",{src:"hithaldia.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsx("header",{className:"modern-navbar",children:e.jsxs("div",{className:"navbar-container",children:[e.jsxs("div",{className:"navbar-logo",children:[e.jsx("span",{className:"logo-arrow left",children:"<"}),e.jsx("img",{src:"tarulogo.png",alt:"Tech Club Logo"}),e.jsx("span",{children:"TaruGuardians"}),e.jsx("span",{className:"logo-arrow right",children:">"})]}),e.jsx("button",{className:"hamburger",children:e.jsx("i",{className:"fas fa-bars"})}),e.jsxs("div",{className:"navbar-center",children:[e.jsxs("div",{className:"navbar-links",children:[e.jsx(x,{to:"/home",className:"active",children:"Home"}),e.jsx(x,{to:"/home",children:"Event"}),e.jsx(x,{to:"/home",children:"TARU WINGS"}),e.jsx(x,{to:"/home",children:"Roadmap"}),e.jsx(x,{to:"/home",children:"Placement Guide"}),e.jsx(x,{to:"/home",children:"Team"})]}),e.jsx(x,{to:"/auth",className:"navbar-blog-btn auth-login-btn",children:"Login"}),e.jsx("div",{className:"auth-user-menu",style:{display:"none"},children:e.jsx(x,{to:"/dashboard",className:"navbar-blog-btn",children:"Dashboard"})})]}),e.jsxs("div",{className:"mobile-menu",children:[e.jsx(x,{to:"/home",children:"Home"}),e.jsx(x,{to:"/home",children:"Event"}),e.jsx(x,{to:"/home",children:"TARU WINGS"}),e.jsx(x,{to:"/home",children:"Roadmap"}),e.jsx(x,{to:"/home",children:"Placement Guide"}),e.jsx(x,{to:"/home",children:"Team"}),e.jsx(x,{to:"/auth",className:"auth-login-btn",children:"Login"}),e.jsx(x,{to:"/dashboard",className:"auth-user-menu",style:{display:"none"},children:"Dashboard"})]})]})}),e.jsxs("div",{className:"main-content",children:[e.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{minHeight:"80vh"},children:e.jsx("div",{id:"bannerCarousel",className:"carousel slide","data-bs-ride":"carousel","data-bs-interval":"2000","data-bs-wrap":"true",children:e.jsxs("div",{className:"carousel-inner",children:[e.jsx("div",{className:"carousel-item active",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"tarulogo.png",alt:"Taru Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"Program Head @ TaruGuadians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Electrical Engineering"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Placed At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"Birla Soft"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: Apprentice"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Khushi Kumari(Batch Of 2020-2024)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"Khushi%20Kumari.png",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"tarulogo.png",alt:"taru Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"President @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"CSE(DATA SCIENCE)"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Placed At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"BlueStock"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: SDE"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Rohan Kumar Singh(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"presidentrohan.jpg",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"Taru Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"Program Head @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Electrical Engineering"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Placed At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"Amazon"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: SDE"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Aryan Raj(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"aryan.jpg",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"tarulogo.png",alt:"Taru Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"Vice President @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"CSE(main)"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Internship At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"Oasis Infobyte"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: Web Developer"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Anand Kumar Jha(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"vicepresident.jpg",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"TARU Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"PR Head @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"CSE(Data Science)"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Internship At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"TDS Avenue"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: Web Developer"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Utsav Raj(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"utsav%20raj.png",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"TARU Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"Adminstrative Head @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Information Technology"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:" Forward Program At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"MCKinsey & Company"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: Forward Program "}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Mohit Kumar Singh(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"Mohit.jpg",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"TARU Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"Js Non Tech @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Cyber Security"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Campus Representative  At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"GeeksForGeeks"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: Campus Ambassdor"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Adarsh Ranjan(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"adarsh%20ranjan.jpg",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"TARU Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"Treasurer @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"E.C.E"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"TalentNext Trainee AT"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"Wipro"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: Trainee"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Bishnu Chatterjee(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"Bishnu.jpg",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"TARU Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"JS Tech @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Electrical Engineering "}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Campus Ambassdor At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"IIT Kharagpur"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: Campus Ambassdor"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Harshita Sinha(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"harshita%20sinha.jpg",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"taru Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"Management Head @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Civil Engineering"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Internship At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"Bureau Of Indian Standards"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: Web Content Writer"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Bhumika Singh(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"Bhimika%20singh.jpg",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"taru Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"Tech Head @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"CSE(AIML)"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Cracked Gate"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"AIR: 456, country Topper(CSE),NPTEL"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: None"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"ADI NATH BHAWANI(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"GateTopper.png",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"taru Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"Management Head @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Chemical Engineering"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Placed At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"Integri Robotics & Automation"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: Sales and Application Engineer"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Prasoon Kumar(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"Prasoon%20Kumar.jpg",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"taru Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"Media Head @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"CSE(main)"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Placed At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"XYZ Comapany"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: None"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Supreeta Roy(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"mediA3.jpg",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"taru Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"Media Head @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"E.C.E"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Internship At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"BCCl"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: Telecommunication Engineer"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Sandeep Jha(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"media24.jpg",alt:"Student",className:"banner-img"})})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"custom-banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"Taru.png",alt:"taru Logo",style:{height:"32px"}})}),e.jsx("h2",{className:"text-white fw-bold mb-1",style:{fontSize:"1.4rem"},children:"PR Head @ TaruGuardians"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Not Known"}),e.jsx("div",{className:"text-white mb-1",style:{fontSize:"1rem"},children:"Placed At"}),e.jsx("div",{className:"fw-bold mb-2",style:{fontSize:"2.1rem",background:"#ffd600",color:"#002147",display:"inline-block",padding:"0.2em 0.7em",borderRadius:"0.25em"},children:"XYZ Company"}),e.jsx("div",{className:"fw-semibold mb-2",style:{color:"#ffd600",fontSize:"1.1rem"},children:"Position: None"}),e.jsx("button",{className:"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2",children:"Ashna Thakur(Batch Of 2021-2025)"})]}),e.jsx("div",{className:"banner-right",children:e.jsx("img",{src:"ashnatahkurreal.png",alt:"Student",className:"banner-img"})})]})})]})})}),e.jsx("div",{className:"admissions-section",children:e.jsxs("div",{className:"admissions-container",children:[e.jsxs("div",{className:"admissions-images",children:[e.jsxs("div",{className:"admissions-img-group",children:[e.jsx("img",{src:"rohanbhaiyaiit.png",alt:"students",className:"admissions-img-main"}),e.jsx("img",{src:"rohanbhaiyaiit2.jpeg",alt:"students",className:"admissions-img-side"})]}),e.jsx("img",{src:"rohanbhaiyaiit3.jpeg",alt:"students",className:"admissions-img-bottom"})]}),e.jsxs("div",{className:"admissions-content",children:[e.jsxs("h3",{children:[e.jsx("span",{style:{fontSize:"1.5em",verticalAlign:"middle"}}),"TaruGuardians Alumni: Pioneering Legends of Haldia Institute of Technology"]}),e.jsx("h2",{children:" pride of the TaruGuardians "}),e.jsx("p",{children:"TaruGuardians, the only club from Haldia Institute of Technology (HIT) to shine at IIT Bombay, secured a Top 7 startup rank in India and became NEC finalists."}),e.jsx("p",{children:"Our Proud Alumni From the batch of 2021–2025, four exceptional individuals from TaruGuardians represented HIT at IIT Bombay with their innovative startup:"}),e.jsxs("div",{className:"admissions-options",children:[e.jsx("button",{children:"Rohan Kumar Singh"}),e.jsx("button",{children:"Aryan Raj"}),e.jsx("button",{children:"Mohit Kumar Singh"}),e.jsx("button",{children:"Bishnu Chatterjee"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"#22223b",fontSize:"1.02rem",marginBottom:"1.2em"}}),e.jsxs("button",{className:"explore-btn",children:["#NEC finalists IIT Bombay  ",e.jsx("span",{style:{fontSize:"1.3em"}})]})]})]})]})}),e.jsx("div",{className:"alumni-section",children:e.jsxs("div",{className:"alumni-grid",children:[e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"presidentrohan.jpg",alt:"Alumni 1"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#President"})}),e.jsxs("div",{className:"alumni-name",children:["Rohan Kumar Singh",e.jsx("br",{}),"SDE, BlueStcok",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"programhead2.jpg",alt:"Alumni 2"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#Program Head"})}),e.jsxs("div",{className:"alumni-name",children:["Aryan Raj",e.jsx("br",{}),"Placed ",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"Khushi Kumari.png",alt:"Alumni 16"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#Program Head"})}),e.jsxs("div",{className:"alumni-name",children:["Khushi Kumari",e.jsx("br",{}),"Apprentice, Birla Soft",e.jsx("br",{}),"Batch of 2020-2024"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"anand%20kumar%20jha.jpg",alt:"Alumni 3"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#Vice President"})}),e.jsxs("div",{className:"alumni-name",children:["Anand Kumar Jha",e.jsx("br",{}),"Placed, XYZ Compnay",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"Mohit.jpg",alt:"Alumni 4"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#Adminstrative Head"})}),e.jsxs("div",{className:"alumni-name",children:["MOHIT KUMAR SINGH",e.jsx("br",{}),"NEC finalist, IIT Bombay",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"harshita%20sinha.jpg",alt:"Alumni 5"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#JS TECH"})}),e.jsxs("div",{className:"alumni-name",children:["HARSHITA SINHA",e.jsx("br",{}),"Placed, XYZ Compnay",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"GateTopper.png",alt:"Alumni 6"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#TECH HEAD"})}),e.jsxs("div",{className:"alumni-name",children:["ADI NATH BHAWANI",e.jsx("br",{}),"Country Topper,NPTEL(CSE),",e.jsx("br",{}),"Gate: AIR 456 ",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"utsav%20raj.png",alt:"Alumni 7"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#PR HEAD"})}),e.jsxs("div",{className:"alumni-name",children:["UTSAV RAJ",e.jsx("br",{}),"Placed, XYZ Company",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"adarsh%20ranjan.jpg",alt:"Alumni 8"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#JS Non TECH"})}),e.jsxs("div",{className:"alumni-name",children:["ADARSH RANJAN",e.jsx("br",{}),"Placed, XYZ Company",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"Prasoon%20Kumar.jpg",alt:"Alumni 10"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#Management Head"})}),e.jsxs("div",{className:"alumni-name",children:["PRASOON KUMAR",e.jsx("br",{}),"Placed,Integri Robotics & Automation",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"member.jpg",alt:"Alumni 11"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#Membership Head"})}),e.jsxs("div",{className:"alumni-name",children:["Ashish Kumar",e.jsx("br",{}),"Placed, XYZ Company",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"sandeep.jpg",alt:"Alumni 12"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#Media Head"})}),e.jsxs("div",{className:"alumni-name",children:["Sandeep Jha",e.jsx("br",{}),"Placed,XYZ Compnay",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"Bhimika%20singh.jpg",alt:"Alumni 13"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#Management Head"})}),e.jsxs("div",{className:"alumni-name",children:["Bhumika Singh",e.jsx("br",{}),"Placed, XYZ Company",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"mediA3.jpg",alt:"Alumni 14"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#Media Head"})}),e.jsxs("div",{className:"alumni-name",children:["Supreeta Roy",e.jsx("br",{}),"Placed, XYZ Company",e.jsx("br",{}),"Batch of 2021-2025"]})]}),e.jsxs("div",{className:"alumni-box",children:[e.jsx("img",{src:"ashnatahkurreal.png",alt:"Alumni 15"}),e.jsx("div",{className:"alumni-overlay",children:e.jsx("div",{className:"open-circle",children:"#PR Head"})}),e.jsxs("div",{className:"alumni-name",children:["Ashna Thakur",e.jsx("br",{}),"Placed, XYZ Company",e.jsx("br",{}),"Batch of 2021-2025"]})]})]})}),e.jsxs("footer",{style:{fontFamily:"Arial, sans-serif",color:"white",margin:"0",padding:"0"},children:[e.jsxs("div",{style:{position:"relative",width:"100%",height:"90vh",backgroundImage:"url('aluminifooter.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[e.jsx("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.7)"}}),e.jsxs("div",{style:{position:"absolute",top:"20px",left:"40px",fontSize:"48px",fontWeight:"bold",zIndex:"1"},children:["TaruGuardians  ",e.jsx("span",{style:{fontStyle:"italic"},children:"Alumni Page"})]}),e.jsxs("div",{style:{position:"relative",zIndex:"1",display:"flex",flexWrap:"wrap",justifyContent:"space-between",padding:"100px 40px 20px",maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("div",{style:{flex:"1",minWidth:"250px",marginBottom:"20px"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"Batch of 2021–2025"}),e.jsx("p",{style:{margin:"5px 0"}}),e.jsx("p",{style:{margin:"5px 0"},children:e.jsx(x,{to:"/alumni",children:"Explore Taruguardians Alumni Page"})}),e.jsx("p",{style:{margin:"5px 0"}}),e.jsx("a",{href:"#",style:{color:"#8C1515",textDecoration:"none",fontWeight:"bold"},"data-legacy-onmouseover":"this.style.textDecoration='underline'","data-legacy-onmouseout":"this.style.textDecoration='none'"})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",flex:"3",gap:"40px"},children:[e.jsxs("div",{style:{minWidth:"150px"},children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:"bold",marginBottom:"10px",textTransform:"uppercase"}}),e.jsx("p",{children:e.jsxs("a",{style:{color:"white",textDecoration:"none"},"data-legacy-onmouseover":"this.style.textDecoration='underline'","data-legacy-onmouseout":"this.style.textDecoration='none'",children:["Aryan Raj",e.jsx("br",{}),'" Software Development Engineer (SDE)"']})}),e.jsx("p",{children:e.jsxs("a",{style:{color:"white",textDecoration:"none"},"data-legacy-onmouseover":"this.style.textDecoration='underline'","data-legacy-onmouseout":"this.style.textDecoration='none'",children:["Rohan Kumar Singh",e.jsx("br",{}),'"Software Development Engineer (SDE) at Bluestock"']})}),e.jsx("p",{children:e.jsxs("a",{style:{color:"white",textDecoration:"none"},"data-legacy-onmouseover":"this.style.textDecoration='underline'","data-legacy-onmouseout":"this.style.textDecoration='none'",children:["Utsav Raj",e.jsx("br",{}),'"CSE Branch Topper"']})})]}),e.jsxs("div",{style:{minWidth:"150px"},children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:"bold",marginBottom:"10px",textTransform:"uppercase"}}),e.jsx("p",{children:e.jsxs("a",{style:{color:"white",textDecoration:"none"},"data-legacy-onmouseover":"this.style.textDecoration='underline'","data-legacy-onmouseout":"this.style.textDecoration='none'",children:["Anand Kumar Jha",e.jsx("br",{}),'"Distinguished Sportsperson & Topper in Sports"']})}),e.jsx("p",{children:e.jsxs("a",{style:{color:"white",textDecoration:"none"},"data-legacy-onmouseover":"this.style.textDecoration='underline'","data-legacy-onmouseout":"this.style.textDecoration='none'",children:["Mohit Kumar Singh",e.jsx("br",{}),'" NEC Finalist at IIT Bombay"']})}),e.jsx("p",{children:e.jsxs("a",{style:{color:"white",textDecoration:"none"},"data-legacy-onmouseover":"this.style.textDecoration='underline'","data-legacy-onmouseout":"this.style.textDecoration='none'",children:["Harshita Sinha",e.jsx("br",{}),'"Basketball Player & Placed at XYZ Company"']})})]}),e.jsxs("div",{style:{minWidth:"150px"},children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:"bold",marginBottom:"10px",textTransform:"uppercase"}}),e.jsx("p",{children:e.jsx("a",{href:"#",style:{color:"white",textDecoration:"none"},"data-legacy-onmouseover":"this.style.textDecoration='underline'","data-legacy-onmouseout":"this.style.textDecoration='none'"})}),e.jsx("p",{children:e.jsx("a",{href:"#",style:{color:"white",textDecoration:"none"},"data-legacy-onmouseover":"this.style.textDecoration='underline'","data-legacy-onmouseout":"this.style.textDecoration='none'"})}),e.jsx("p",{children:e.jsx("a",{href:"#",style:{color:"white",textDecoration:"none"},"data-legacy-onmouseover":"this.style.textDecoration='underline'","data-legacy-onmouseout":"this.style.textDecoration='none'"})})]})]})]}),e.jsxs("div",{style:{position:"relative",zIndex:"1",padding:"0 40px 40px",maxWidth:"1200px",margin:"0 auto"},children:[e.jsx("a",{href:"#",style:{marginRight:"20px",textDecoration:"none",color:"white",fontSize:"20px"}}),e.jsx("a",{href:"#",style:{marginRight:"20px",textDecoration:"none",color:"white",fontSize:"20px"}}),e.jsx("a",{href:"#",style:{marginRight:"20px",textDecoration:"none",color:"white",fontSize:"20px"}}),e.jsx("a",{href:"#",style:{textDecoration:"none",color:"white",fontSize:"20px"}})]})]}),e.jsxs("footer",{style:{backgroundColor:"#000",color:"#fff",padding:"40px 20px",fontFamily:"Arial, sans-serif",position:"relative",textAlign:"center"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[e.jsx("img",{src:"circlelogotaru.png",alt:"TaruGuardians Logo",style:{width:"100px",height:"100px",borderRadius:"50%",display:"block",margin:"0 auto 5px"}}),e.jsx("h3",{style:{fontSize:"18px",color:"#fff",margin:"0"},children:"(TURN PASSION INTO PURPOSE)"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("div",{style:{margin:"20px",minWidth:"200px"},children:[e.jsx("h2",{style:{fontSize:"24px",marginBottom:"15px"},children:"TaruGuardians"}),e.jsx("p",{style:{fontSize:"14px",color:"#ccc",lineHeight:"1.6",maxWidth:"300px"},children:"Just as trees grow with deep roots, we grow with deep tech. From seeds of code to canopies of change — building a greener, smarter future."}),e.jsx("p",{style:{fontSize:"12px",color:"#ccc",marginTop:"10px"},children:"(ROOTED IN NATURE, DRIVEN BY TECH)"})]}),e.jsx("div",{style:{margin:"20px",minWidth:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("a",{href:"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about",style:{backgroundColor:"#1e90ff",color:"#fff",padding:"10px 20px",borderRadius:"25px",textDecoration:"none",fontSize:"16px"},children:"Our Blog"})}),e.jsxs("div",{style:{margin:"20px",minWidth:"200px"},children:[e.jsx("h3",{style:{fontSize:"18px",marginBottom:"15px"},children:"Contact"}),e.jsx("p",{style:{fontSize:"14px",color:"#ccc"},children:"Taru.Guardians@gmail.com"})]}),e.jsxs("div",{style:{margin:"20px",minWidth:"200px"},children:[e.jsx("h3",{style:{fontSize:"18px",marginBottom:"15px"},children:"Follow Us"}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"10px",marginBottom:"10px"},children:[e.jsx("a",{href:"https://www.instagram.com/_taruguardians_/",children:e.jsx("img",{src:"instag.png",alt:"Instagram",className:"w-7"})}),e.jsx("a",{href:"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in",children:e.jsx("img",{src:"linkden.png",alt:"LinkedIn",className:"w-7"})}),e.jsx("a",{href:"https://www.facebook.com/TaruGuardians/",children:e.jsx("img",{src:"facebook.png",alt:"Facebook",className:"w-7"})}),e.jsx("a",{href:"https://www.youtube.com/@TaruGuardians",children:e.jsx("img",{src:"youtube.webp",alt:"YouTube",className:"w-7"})})]}),e.jsx("p",{style:{fontSize:"13px",color:"#ccc",fontStyle:"italic"},children:"Stay updated with our latest posts, events, and workshops"})]})]}),e.jsx("div",{style:{textAlign:"center",marginTop:"20px",fontSize:"12px",color:"#ccc"},children:"© 2025 TaruGuardians. All rights reserved."})]})]})]})]})}const mg=[{kind:"external",src:"https://cdn.tailwindcss.com",type:"text/javascript"},{kind:"external",src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",type:"text/javascript"},{kind:"external",src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",type:"text/javascript"},{kind:"external",src:"https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js",type:"text/javascript"},{kind:"external",src:"https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js",type:"text/javascript"},{kind:"external",src:"https://unpkg.com/aos@2.3.1/dist/aos.js",type:"text/javascript"},{kind:"external",src:"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",type:"text/javascript"},{kind:"inline",type:"text/javascript",body:`
    /* global THREE, gsap, ScrollTrigger, AOS, Swiper, particlesJS */
    // Initialize AOS for On-Scroll Animations
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true
    });
    // GSAP Parallax for Layers
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.layer-bg', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.scene',
            scrub: true
        }
    });
    gsap.to('.layer-mid', {
        y: '10%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.scene',
            scrub: true
        }
    });
    // Three.js 3D Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('three-canvas'),
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;
    const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
    const material = new THREE.MeshStandardMaterial({
        color: 0xD4AF37,
        wireframe: true
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);
    function animate3D() {
        requestAnimationFrame(animate3D);
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate3D();
    // Line Canvas Setup
    const lineCanvas = document.getElementById('line-canvas');
    const ctx = lineCanvas.getContext('2d');
    lineCanvas.width = window.innerWidth;
    lineCanvas.height = window.innerHeight;
    // Throttle function to optimize mousemove
    function throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }
    // Mouse Move Parallax and Line Connections
    const heroScene = document.querySelector('.scene');
    heroScene.addEventListener('mousemove', throttle((event) => {
        const elements = heroScene.querySelectorAll(".parallax-layer, .floating-element, .parallax-particle");
        elements.forEach(el => {
            const speed = parseFloat(el.dataset.speed) || 0;
            const x = (heroScene.offsetWidth / 2 - (event.pageX - heroScene.offsetLeft)) * speed;
            const y = (heroScene.offsetHeight / 2 - (event.pageY - heroScene.offsetTop)) * speed;
            el.style.transform = \`translate(\${x}px, \${y}px)\`;
        });
        // Draw connections
        ctx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
        ctx.lineWidth = 1;
        const floatingElements = heroScene.querySelectorAll(".floating-element, .parallax-particle");
        const heroRect = heroScene.getBoundingClientRect();
        const mouseX = event.clientX - heroRect.left;
        const mouseY = event.clientY - heroRect.top;
        floatingElements.forEach((el, index) => {
            const rect = el.getBoundingClientRect();
            const elX = rect.left - heroRect.left + rect.width / 2;
            const elY = rect.top - heroRect.top + rect.height / 2;
            const distance = Math.hypot(mouseX - elX, mouseY - elY);
            if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(mouseX, mouseY);
                ctx.lineTo(elX, elY);
                ctx.stroke();
            }
            for (let i = index + 1; i < floatingElements.length; i++) {
                const otherEl = floatingElements[i];
                const otherRect = otherEl.getBoundingClientRect();
                const otherX = otherRect.left - heroRect.left + otherRect.width / 2;
                const otherY = otherRect.top - heroRect.top + otherRect.height / 2;
                const elDistance = Math.hypot(elX - otherX, elY - otherY);
                if (elDistance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(elX, elY);
                    ctx.lineTo(otherX, otherY);
                    ctx.stroke();
                }
            }
        });
    }, 16)); // Throttle to ~60fps
    // Loader Three.js Particle Wave
    const loaderScene = new THREE.Scene();
    const loaderCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const loaderRenderer = new THREE.WebGLRenderer({ alpha: true });
    loaderRenderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(loaderRenderer.domElement);
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const posArray = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 10;
        posArray[i + 1] = (Math.random() - 0.5) * 10;
        posArray[i + 2] = (Math.random() - 0.5) * 10;
        velocities[i] = 0;
        velocities[i + 1] = Math.random() * 0.02 - 0.01;
        velocities[i + 2] = 0;
        const color = Math.random() > 0.66 ? [1, 0.84, 0.4] : Math.random() > 0.33 ? [0, 0.77, 0.71] : [0.56, 0.27, 0.68];
        colors[i] = color[0];
        colors[i + 1] = color[1];
        colors[i + 2] = color[2];
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const loaderMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.6
    });
    const particles = new THREE.Points(particlesGeometry, loaderMaterial);
    loaderScene.add(particles);
    loaderCamera.position.z = 5;
    // Loader Mouse Interaction
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
    function animateLoaderParticles() {
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] += velocities[i];
            positions[i + 1] += velocities[i + 1];
            positions[i + 2] += velocities[i + 2];
            const dx = mouseX * 5 - positions[i];
            const dy = mouseY * 5 - positions[i + 1];
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 2) {
                positions[i] += dx * 0.01;
                positions[i + 1] += dy * 0.01;
            }
            if (positions[i + 1] > 5) positions[i + 1] = -5;
        }
        particlesGeometry.attributes.position.needsUpdate = true;
        loaderRenderer.render(loaderScene, loaderCamera);
    }
    // Progress Arc Animation
    const circle = document.querySelector('.progress-arc__circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = \`\${circumference} \${circumference}\`;
    circle.style.strokeDashoffset = circumference;
    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        document.getElementById('progress-text').textContent = \`\${Math.round(percent)}%\`;
    }
    // Simulate Loading Progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 1;
        setProgress(progress);
        if (progress >= 100) {
            clearInterval(progressInterval);
            document.getElementById('loader').classList.add('hidden');
        }
    }, 40);
    // Loader Animation Loop
    function animateLoader() {
        requestAnimationFrame(animateLoader);
        animateLoaderParticles();
    }
    animateLoader();
    // Window Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        loaderCamera.aspect = window.innerWidth / window.innerHeight;
        loaderCamera.updateProjectionMatrix();
        loaderRenderer.setSize(window.innerWidth, window.innerHeight);
        lineCanvas.width = window.innerWidth;
        lineCanvas.height = window.innerHeight;
    });
    // Particles.js Configuration
    function initializeParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#D4AF37"
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 0.6,
                        random: true
                    },
                    size: {
                        value: 4,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#D4AF37",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "grab"
                        },
                        onclick: {
                            enable: false
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        }
                    }
                },
                retina_detect: true
            });
        } else {
            console.warn('Particles.js not loaded');
        }
    }
    // Generate Parallax Particles on Click
    heroScene.addEventListener('click', (event) => {
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'parallax-particle';
            const heroRect = heroScene.getBoundingClientRect();
            const x = event.clientX - heroRect.left;
            const y = event.clientY - heroRect.top;
            particle.style.left = \`\${x}px\`;
            particle.style.top = \`\${y}px\`;
            particle.dataset.speed = (Math.random() * 0.2 + 0.05).toFixed(2);
            heroScene.appendChild(particle);
            gsap.to(particle, {
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                opacity: 0,
                scale: 0.5,
                duration: 2 + Math.random() * 2,
                ease: "power2.out",
                onComplete: () => particle.remove()
            });
        }
    });
    // Swiper for Testimonials Slider
    function initializeSwiper() {
        if (typeof Swiper !== 'undefined') {
            new Swiper('.testimonials-slider', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                speed: 1000
            });
        } else {
            console.warn('Swiper not loaded');
        }
    }
    // Navbar Scrolled Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('.modern-navbar').classList.add('scrolled');
        } else {
            document.querySelector('.modern-navbar').classList.remove('scrolled');
        }
    });
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburger.textContent = mobileMenu.classList.contains('active') ? '×' : '≡';
    });
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburger.textContent = '≡';
        });
    });
    // Scroll Progress Update
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.querySelector('.scroll-progress').style.width = scrolled + '%';
    });
    // Dark Mode Toggle
    document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            document.body.style.backgroundColor = '#FFFFFF';
            document.body.style.color = '#000000';
            document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
                el.style.color = '#000000';
                el.style.textShadow = 'none';
            });
            document.querySelectorAll('p, a, li, span').forEach(el => {
                el.style.color = '#000000';
            });
            document.querySelectorAll('.premium-btn, .taru-blog-btn').forEach(btn => {
                btn.style.background = 'linear-gradient(135deg, #FFD700, #B8860B)';
                btn.style.color = '#000000';
            });
        } else {
            document.body.style.backgroundColor = '#000000';
            document.body.style.color = '#D4AF37';
            document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
                el.style.color = '#D4AF37';
                el.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.2)';
            });
            document.querySelectorAll('p, a, li, span').forEach(el => {
                el.style.color = '#FFFFFF';
            });
            document.querySelectorAll('.premium-btn, .taru-blog-btn').forEach(btn => {
                btn.style.background = 'linear-gradient(135deg, #D4AF37, #B8962E)';
                btn.style.color = '#000000';
            });
        }
    });
    // Chatbot Functionality
    const bot = document.getElementById('bot');
    const chatModal = document.getElementById('chat-modal');
    const closeBtn = document.getElementById('close-btn');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    // Drag Functionality for Chatbot
    let isDragging = false;
    let currentX, currentY, initialX, initialY;
    bot.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
    function startDragging(e) {
        initialX = e.clientX - currentX;
        initialY = e.clientY - currentY;
        isDragging = true;
        bot.style.cursor = 'grabbing';
    }
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            bot.style.left = currentX + 'px';
            bot.style.top = currentY + 'px';
            bot.style.bottom = 'auto';
            bot.style.right = 'auto';
        }
    }
    function stopDragging() {
        isDragging = false;
        bot.style.cursor = 'grab';
    }
    // Chatbot Toggle
    bot.addEventListener('click', () => {
        chatModal.style.display = chatModal.style.display === 'flex' ? 'none' : 'flex';
        if (chatModal.style.display === 'flex') {
            chatModal.style.top = '50%';
            chatModal.style.left = '50%';
            chatModal.style.transform = 'translate(-50%, -50%)';
            userInput.focus();
        }
    });
    closeBtn.addEventListener('click', () => {
        chatModal.style.display = 'none';
    });
    // Chatbot Message Handling
    function addMessage(content, type) {
        const message = document.createElement('div');
        message.className = \`message \${type}\`;
        message.textContent = content;
        chatBody.appendChild(message);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            userInput.value = '';
            setTimeout(() => {
                addMessage('Thank you for your query! Our premium AI is processing your request...', 'bot-message');
            }, 1000);
        }
    }
    // Initialize on Load
    window.addEventListener('load', () => {
        initializeParticles();
        initializeSwiper();
        currentX = bot.offsetLeft;
        currentY = bot.offsetTop;
    });
`}],uc=typeof window<"u"&&(window.__legacyLoadedExternalScripts||(window.__legacyLoadedExternalScripts=new Set))||new Set;async function pg(n){for(const t of mg)if(t.kind==="external"){if(uc.has(t.src))continue;await new Promise(a=>{const s=document.createElement("script");s.src=t.src,t.type&&(s.type=t.type),s.async=!1,s.onload=()=>a(),s.onerror=()=>a(),s.setAttribute("data-legacy-page",n),document.body.appendChild(s),uc.add(t.src)})}else{if(t.type&&t.type!=="text/javascript"&&t.type!=="application/javascript")continue;try{new Function(t.body).call(window)}catch(a){console.warn("["+n+"] script error:",a)}}}function hg(n){document.querySelectorAll('[data-legacy-page="'+n+'"]').forEach(t=>t.remove())}const mc="PremiumLoader";function fg(){const n=he(),t=y.useRef(null);return y.useEffect(()=>{const a=window.__legacyTryNavigate;window.__legacyTryNavigate=i=>{const l=G(i);return l?(Promise.resolve().then(()=>n(l)),!0):!1},pg(mc);const s=t.current,r=i=>{const l=i.target.closest&&i.target.closest("a");if(!l)return;const o=l.getAttribute("href");if(!o||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#"))return;const c=G(o);c&&(i.preventDefault(),n(c))};return s&&s.addEventListener("click",r),()=>{hg(mc),s&&s.removeEventListener("click",r),window.__legacyTryNavigate=a}},[n]),e.jsxs("div",{ref:t,className:"legacy-page legacy-PremiumLoader",children:[e.jsx("div",{className:"dark-mode-toggle",children:e.jsx("i",{className:"fas fa-moon"})}),e.jsxs("header",{className:"modern-navbar",children:[e.jsxs("div",{className:"navbar-container",children:[e.jsxs("div",{className:"navbar-logo premium-tooltip","data-tooltip":"Welcome to Luxury Tech Hub",children:[e.jsx("img",{src:"tarulogo.png",alt:"TaruGuardians Logo"}),"TaruGuardians"]}),e.jsx("nav",{className:"navbar-center",children:e.jsxs("div",{className:"navbar-links",children:[e.jsx("a",{href:"#hero",className:"active fade-in-up",children:"Home"}),e.jsx("a",{href:"#features",className:"slide-in-left",children:"Tech Tools"}),e.jsx("a",{href:"#testimonials",className:"slide-in-right",children:"Events"}),e.jsx("a",{href:"#cta",className:"zoom-in",children:"Roadmaps"}),e.jsx("a",{href:"#placement",className:"rotate-in",children:"Placement Guide"}),e.jsx("a",{href:"#team",className:"bounce-in",children:"Team"}),e.jsx("a",{href:"#alumni",className:"tada",children:"Alumni"})]})}),e.jsx("div",{className:"hamburger",children:"≡"})]}),e.jsxs("div",{className:"mobile-menu",children:[e.jsx("a",{href:"#hero",children:"Home"}),e.jsx("a",{href:"#features",children:"Tech Tools"}),e.jsx("a",{href:"#testimonials",children:"Events"}),e.jsx("a",{href:"#cta",children:"Roadmaps"}),e.jsx("a",{href:"#placement",children:"Placement Guide"}),e.jsx("a",{href:"#team",children:"Team"}),e.jsx("a",{href:"#alumni",children:"Alumni"}),e.jsx("a",{className:"taru-blog-btn",href:"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about",children:"Our Blog"})]})]}),e.jsxs("div",{className:"scene",id:"hero",children:[e.jsx("canvas",{id:"three-canvas"}),e.jsx("div",{id:"particles-js"}),e.jsxs("div",{className:"floating-elements",children:[e.jsx("div",{className:"floating-element","data-speed":"0.05",children:e.jsx("i",{className:"fas fa-code"})}),e.jsx("div",{className:"floating-element","data-speed":"0.1",children:e.jsx("i",{className:"fas fa-laptop-code"})}),e.jsx("div",{className:"floating-element","data-speed":"0.15",children:e.jsx("i",{className:"fas fa-rocket"})}),e.jsx("div",{className:"floating-element","data-speed":"0.2",children:e.jsx("i",{className:"fas fa-lightbulb"})})]}),e.jsx("div",{className:"parallax-layer layer-bg","data-speed":"0.5"}),e.jsx("div",{className:"parallax-layer layer-mid","data-speed":"0.3"}),e.jsx("div",{className:"parallax-layer layer-front","data-speed":"0.1"}),e.jsx("canvas",{id:"line-canvas"}),e.jsx("div",{className:"premium-overlay"}),e.jsxs("div",{className:"hero-content","data-aos":"fade-up","data-aos-duration":"1500",children:[e.jsx("div",{className:"hero-badge",children:"Turn Passion Into Purpose"}),e.jsx("h1",{className:"hero-title",children:"Ultra Premium Tech Hub"}),e.jsx("p",{className:"hero-subtitle",children:"Elevate Your Campus Placement Journey with Cutting-Edge Innovations and Luxurious Guidance"}),e.jsx("a",{href:"#features",className:"premium-btn",children:"Discover Premium Roadmaps"})]}),e.jsxs("div",{className:"hero-social","data-aos":"fade-up","data-aos-delay":"500",children:[e.jsx("a",{href:"#",className:"fab fa-twitter premium-tooltip","data-tooltip":"Follow on Twitter"}),e.jsx("a",{href:"#",className:"fab fa-linkedin premium-tooltip","data-tooltip":"Connect on LinkedIn"}),e.jsx("a",{href:"#",className:"fab fa-github premium-tooltip","data-tooltip":"View on GitHub"})]})]}),e.jsxs("section",{className:"premium-instagram",id:"instagram","data-aos":"fade-in",children:[e.jsx("h2",{className:"section-title","data-aos":"fade-down",children:"Our Instagram Highlights"}),e.jsxs("div",{className:"instagram-grid",children:[e.jsxs("div",{className:"instagram-card fade-in-up","data-aos":"zoom-in","data-aos-delay":"100",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+1",alt:"Instagram Post 1",className:"instagram-image"}),e.jsx("p",{className:"instagram-content",children:"Exciting moments from our latest hackathon! #TechHub"}),e.jsx("p",{className:"instagram-date",children:"Posted on: September 1, 2025"})]}),e.jsxs("div",{className:"instagram-card slide-in-left","data-aos":"zoom-in","data-aos-delay":"200",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+2",alt:"Instagram Post 2",className:"instagram-image"}),e.jsx("p",{className:"instagram-content",children:"Behind the scenes of AI workshop preparations. #Innovation"}),e.jsx("p",{className:"instagram-date",children:"Posted on: September 5, 2025"})]}),e.jsxs("div",{className:"instagram-card slide-in-right","data-aos":"zoom-in","data-aos-delay":"300",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+3",alt:"Instagram Post 3",className:"instagram-image"}),e.jsx("p",{className:"instagram-content",children:"Team bonding at tech talk series. #Community"}),e.jsx("p",{className:"instagram-date",children:"Posted on: September 10, 2025"})]}),e.jsxs("div",{className:"instagram-card zoom-in","data-aos":"zoom-in","data-aos-delay":"400",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+4",alt:"Instagram Post 4",className:"instagram-image"}),e.jsx("p",{className:"instagram-content",children:"Highlights from cybersecurity summit. #SecurityFirst"}),e.jsx("p",{className:"instagram-date",children:"Posted on: September 15, 2025"})]}),e.jsxs("div",{className:"instagram-card rotate-in","data-aos":"zoom-in","data-aos-delay":"500",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+5",alt:"Instagram Post 5",className:"instagram-image"}),e.jsx("p",{className:"instagram-content",children:"Data science bootcamp in action! #DataDriven"}),e.jsx("p",{className:"instagram-date",children:"Posted on: September 20, 2025"})]}),e.jsxs("div",{className:"instagram-card bounce-in","data-aos":"zoom-in","data-aos-delay":"600",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+6",alt:"Instagram Post 6",className:"instagram-image"}),e.jsx("p",{className:"instagram-content",children:"Blockchain conference vibes. #FutureTech"}),e.jsx("p",{className:"instagram-date",children:"Posted on: September 25, 2025"})]}),e.jsxs("div",{className:"instagram-card flip-in-x","data-aos":"zoom-in","data-aos-delay":"700",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+7",alt:"Instagram Post 7",className:"instagram-image"}),e.jsx("p",{className:"instagram-content",children:"DevOps masterclass sessions. #Efficiency"}),e.jsx("p",{className:"instagram-date",children:"Posted on: September 30, 2025"})]}),e.jsxs("div",{className:"instagram-card light-speed-in","data-aos":"zoom-in","data-aos-delay":"800",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+8",alt:"Instagram Post 8",className:"instagram-image"}),e.jsx("p",{className:"instagram-content",children:"Innovation expo showcases. #Creativity"}),e.jsx("p",{className:"instagram-date",children:"Posted on: October 5, 2025"})]})]})]}),e.jsx("div",{className:"premium-divider"}),e.jsxs("section",{className:"premium-events",id:"events","data-aos":"fade-in",children:[e.jsx("h2",{className:"section-title","data-aos":"fade-down",children:"Upcoming Premium Events"}),e.jsxs("div",{className:"events-grid",children:[e.jsxs("div",{className:"event-card fade-in-up","data-aos":"zoom-in","data-aos-delay":"100",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Hackathon+2025",alt:"Hackathon 2025",className:"event-poster"}),e.jsx("h3",{className:"event-title",children:"Hackathon 2025"}),e.jsx("p",{className:"event-desc",children:"Join the ultimate coding challenge with premium prizes and networking opportunities."}),e.jsx("p",{className:"event-date",children:"Date: October 15, 2025"})]}),e.jsxs("div",{className:"event-card slide-in-left","data-aos":"zoom-in","data-aos-delay":"200",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=AI+Workshop",alt:"AI Workshop",className:"event-poster"}),e.jsx("h3",{className:"event-title",children:"AI Workshop"}),e.jsx("p",{className:"event-desc",children:"Dive deep into artificial intelligence with hands-on sessions from industry experts."}),e.jsx("p",{className:"event-date",children:"Date: November 5, 2025"})]}),e.jsxs("div",{className:"event-card slide-in-right","data-aos":"zoom-in","data-aos-delay":"300",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Tech+Talk+Series",alt:"Tech Talk Series",className:"event-poster"}),e.jsx("h3",{className:"event-title",children:"Tech Talk Series"}),e.jsx("p",{className:"event-desc",children:"Insights from top tech leaders on emerging trends and innovations."}),e.jsx("p",{className:"event-date",children:"Date: December 10, 2025"})]}),e.jsxs("div",{className:"event-card zoom-in","data-aos":"zoom-in","data-aos-delay":"400",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Cybersecurity+Summit",alt:"Cybersecurity Summit",className:"event-poster"}),e.jsx("h3",{className:"event-title",children:"Cybersecurity Summit"}),e.jsx("p",{className:"event-desc",children:"Explore advanced security strategies in a premium setting."}),e.jsx("p",{className:"event-date",children:"Date: January 20, 2026"})]}),e.jsxs("div",{className:"event-card rotate-in","data-aos":"zoom-in","data-aos-delay":"500",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Data+Science+Bootcamp",alt:"Data Science Bootcamp",className:"event-poster"}),e.jsx("h3",{className:"event-title",children:"Data Science Bootcamp"}),e.jsx("p",{className:"event-desc",children:"Intensive training for aspiring data scientists with real-world projects."}),e.jsx("p",{className:"event-date",children:"Date: February 15, 2026"})]}),e.jsxs("div",{className:"event-card bounce-in","data-aos":"zoom-in","data-aos-delay":"600",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Blockchain+Conference",alt:"Blockchain Conference",className:"event-poster"}),e.jsx("h3",{className:"event-title",children:"Blockchain Conference"}),e.jsx("p",{className:"event-desc",children:"Discuss the future of decentralized technologies with global experts."}),e.jsx("p",{className:"event-date",children:"Date: March 10, 2026"})]}),e.jsxs("div",{className:"event-card flip-in-x","data-aos":"zoom-in","data-aos-delay":"700",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=DevOps+Masterclass",alt:"DevOps Masterclass",className:"event-poster"}),e.jsx("h3",{className:"event-title",children:"DevOps Masterclass"}),e.jsx("p",{className:"event-desc",children:"Learn elite DevOps practices for seamless deployments."}),e.jsx("p",{className:"event-date",children:"Date: April 5, 2026"})]}),e.jsxs("div",{className:"event-card light-speed-in","data-aos":"zoom-in","data-aos-delay":"800",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Innovation+Expo",alt:"Innovation Expo",className:"event-poster"}),e.jsx("h3",{className:"event-title",children:"Innovation Expo"}),e.jsx("p",{className:"event-desc",children:"Showcase and discover cutting-edge tech innovations."}),e.jsx("p",{className:"event-date",children:"Date: May 20, 2026"})]})]})]}),e.jsx("div",{className:"premium-divider"}),e.jsxs("section",{className:"premium-features",id:"features","data-aos":"fade-in",children:[e.jsx("h2",{className:"section-title","data-aos":"fade-down",children:"Premium Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card fade-in-up","data-aos":"zoom-in",children:[e.jsx("i",{className:"feature-icon fas fa-microchip"}),e.jsx("h3",{className:"feature-title",children:"Advanced DSA Mastery"}),e.jsx("p",{className:"feature-desc",children:"Unlock elite algorithms with luxurious interactive tutorials."})]}),e.jsxs("div",{className:"feature-card slide-in-left","data-aos":"zoom-in","data-aos-delay":"200",children:[e.jsx("i",{className:"feature-icon fas fa-robot"}),e.jsx("h3",{className:"feature-title",children:"AI-Powered Mock Interviews"}),e.jsx("p",{className:"feature-desc",children:"Experience high-end simulation for tech placements."})]}),e.jsxs("div",{className:"feature-card slide-in-right","data-aos":"zoom-in","data-aos-delay":"400",children:[e.jsx("i",{className:"feature-icon fas fa-code"}),e.jsx("h3",{className:"feature-title",children:"Coding Challenges Suite"}),e.jsx("p",{className:"feature-desc",children:"Premium problems curated for top-tier preparation."})]}),e.jsxs("div",{className:"feature-card zoom-in","data-aos":"zoom-in","data-aos-delay":"600",children:[e.jsx("i",{className:"feature-icon fas fa-cloud"}),e.jsx("h3",{className:"feature-title",children:"Cloud-Based Resume Builder"}),e.jsx("p",{className:"feature-desc",children:"Craft luxurious resumes with AI assistance."})]}),e.jsxs("div",{className:"feature-card rotate-in","data-aos":"zoom-in","data-aos-delay":"800",children:[e.jsx("i",{className:"feature-icon fas fa-database"}),e.jsx("h3",{className:"feature-title",children:"Data Science Roadmaps"}),e.jsx("p",{className:"feature-desc",children:"Elite paths for data-driven careers."})]}),e.jsxs("div",{className:"feature-card bounce-in","data-aos":"zoom-in","data-aos-delay":"1000",children:[e.jsx("i",{className:"feature-icon fas fa-shield"}),e.jsx("h3",{className:"feature-title",children:"Cybersecurity Essentials"}),e.jsx("p",{className:"feature-desc",children:"Premium protection knowledge for tech roles."})]}),e.jsxs("div",{className:"feature-card flip-in-x","data-aos":"zoom-in","data-aos-delay":"1200",children:[e.jsx("i",{className:"feature-icon fas fa-chart-line"}),e.jsx("h3",{className:"feature-title",children:"Analytics Dashboard"}),e.jsx("p",{className:"feature-desc",children:"Track progress with luxurious visualizations."})]}),e.jsxs("div",{className:"feature-card light-speed-in","data-aos":"zoom-in","data-aos-delay":"1400",children:[e.jsx("i",{className:"feature-icon fas fa-laptop-code"}),e.jsx("h3",{className:"feature-title",children:"DevOps Mastery"}),e.jsx("p",{className:"feature-desc",children:"High-end deployment strategies."})]}),e.jsxs("div",{className:"feature-card roll-in","data-aos":"zoom-in","data-aos-delay":"1600",children:[e.jsx("i",{className:"feature-icon fas fa-server"}),e.jsx("h3",{className:"feature-title",children:"Serverless Computing"}),e.jsx("p",{className:"feature-desc",children:"Premium cloud architectures."})]}),e.jsxs("div",{className:"feature-card rubber-band","data-aos":"zoom-in","data-aos-delay":"1800",children:[e.jsx("i",{className:"feature-icon fas fa-mobile-alt"}),e.jsx("h3",{className:"feature-title",children:"Mobile App Development"}),e.jsx("p",{className:"feature-desc",children:"Luxurious cross-platform solutions."})]})]})]}),e.jsx("div",{className:"premium-divider"}),e.jsxs("section",{className:"premium-team",id:"team","data-aos":"fade-in",children:[e.jsx("h2",{className:"section-title","data-aos":"fade-down",children:"Elite Team Members"}),e.jsxs("div",{className:"team-grid",children:[e.jsxs("div",{className:"team-card fade-in-up","data-aos":"zoom-in","data-aos-delay":"100",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=John+Doe",alt:"John Doe",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"John Doe"}),e.jsx("p",{className:"team-post",children:"Founder & CEO"})]}),e.jsxs("div",{className:"team-card slide-in-left","data-aos":"zoom-in","data-aos-delay":"200",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Jane+Smith",alt:"Jane Smith",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Jane Smith"}),e.jsx("p",{className:"team-post",children:"CTO & Tech Lead"})]}),e.jsxs("div",{className:"team-card slide-in-right","data-aos":"zoom-in","data-aos-delay":"300",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Mike+Johnson",alt:"Mike Johnson",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Mike Johnson"}),e.jsx("p",{className:"team-post",children:"Senior Developer"})]}),e.jsxs("div",{className:"team-card zoom-in","data-aos":"zoom-in","data-aos-delay":"400",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Emily+Davis",alt:"Emily Davis",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Emily Davis"}),e.jsx("p",{className:"team-post",children:"AI Specialist"})]}),e.jsxs("div",{className:"team-card rotate-in","data-aos":"zoom-in","data-aos-delay":"500",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Alex+Wilson",alt:"Alex Wilson",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Alex Wilson"}),e.jsx("p",{className:"team-post",children:"Data Scientist"})]}),e.jsxs("div",{className:"team-card bounce-in","data-aos":"zoom-in","data-aos-delay":"600",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Sarah+Brown",alt:"Sarah Brown",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Sarah Brown"}),e.jsx("p",{className:"team-post",children:"UX/UI Designer"})]}),e.jsxs("div",{className:"team-card flip-in-x","data-aos":"zoom-in","data-aos-delay":"700",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=David+Lee",alt:"David Lee",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"David Lee"}),e.jsx("p",{className:"team-post",children:"DevOps Engineer"})]}),e.jsxs("div",{className:"team-card light-speed-in","data-aos":"zoom-in","data-aos-delay":"800",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Lisa+Garcia",alt:"Lisa Garcia",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Lisa Garcia"}),e.jsx("p",{className:"team-post",children:"Product Manager"})]}),e.jsxs("div",{className:"team-card roll-in","data-aos":"zoom-in","data-aos-delay":"900",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Tom+Martinez",alt:"Tom Martinez",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Tom Martinez"}),e.jsx("p",{className:"team-post",children:"Blockchain Expert"})]}),e.jsxs("div",{className:"team-card rubber-band","data-aos":"zoom-in","data-aos-delay":"1000",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Anna+Taylor",alt:"Anna Taylor",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Anna Taylor"}),e.jsx("p",{className:"team-post",children:"Cybersecurity Lead"})]}),e.jsxs("div",{className:"team-card wobble","data-aos":"zoom-in","data-aos-delay":"1100",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Chris+Anderson",alt:"Chris Anderson",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Chris Anderson"}),e.jsx("p",{className:"team-post",children:"Full Stack Developer"})]}),e.jsxs("div",{className:"team-card jello","data-aos":"zoom-in","data-aos-delay":"1200",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Rachel+Thomas",alt:"Rachel Thomas",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Rachel Thomas"}),e.jsx("p",{className:"team-post",children:"ML Engineer"})]}),e.jsxs("div",{className:"team-card swing","data-aos":"zoom-in","data-aos-delay":"1300",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Kevin+White",alt:"Kevin White",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Kevin White"}),e.jsx("p",{className:"team-post",children:"Cloud Architect"})]}),e.jsxs("div",{className:"team-card tada","data-aos":"zoom-in","data-aos-delay":"1400",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Nina+Harris",alt:"Nina Harris",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Nina Harris"}),e.jsx("p",{className:"team-post",children:"Content Strategist"})]}),e.jsxs("div",{className:"team-card bounce-in","data-aos":"zoom-in","data-aos-delay":"1500",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Mark+Clark",alt:"Mark Clark",className:"team-photo"}),e.jsx("h3",{className:"team-name",children:"Mark Clark"}),e.jsx("p",{className:"team-post",children:"QA Lead"})]})]})]}),e.jsx("div",{className:"premium-divider"}),e.jsxs("section",{className:"premium-alumni",id:"alumni","data-aos":"fade-in",children:[e.jsx("h2",{className:"section-title","data-aos":"fade-down",children:"Distinguished Alumni Success"}),e.jsxs("div",{className:"alumni-grid",children:[e.jsxs("div",{className:"alumni-card fade-in-up","data-aos":"zoom-in","data-aos-delay":"100",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Alice+Johnson",alt:"Alice Johnson",className:"alumni-photo"}),e.jsx("h3",{className:"alumni-name",children:"Alice Johnson"}),e.jsx("p",{className:"alumni-company",children:"Google"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2023"})]}),e.jsxs("div",{className:"alumni-card slide-in-left","data-aos":"zoom-in","data-aos-delay":"200",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Bob+Smith",alt:"Bob Smith",className:"alumni-photo"}),e.jsx("h3",{className:"alumni-name",children:"Bob Smith"}),e.jsx("p",{className:"alumni-company",children:"Microsoft"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2022"})]}),e.jsxs("div",{className:"alumni-card slide-in-right","data-aos":"zoom-in","data-aos-delay":"300",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Carol+Davis",alt:"Carol Davis",className:"alumni-photo"}),e.jsx("h3",{className:"alumni-name",children:"Carol Davis"}),e.jsx("p",{className:"alumni-company",children:"Amazon"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2024"})]}),e.jsxs("div",{className:"alumni-card zoom-in","data-aos":"zoom-in","data-aos-delay":"400",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=David+Wilson",alt:"David Wilson",className:"alumni-photo"}),e.jsx("h3",{className:"alumni-name",children:"David Wilson"}),e.jsx("p",{className:"alumni-company",children:"Meta"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2021"})]}),e.jsxs("div",{className:"alumni-card rotate-in","data-aos":"zoom-in","data-aos-delay":"500",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Eva+Martinez",alt:"Eva Martinez",className:"alumni-photo"}),e.jsx("h3",{className:"alumni-name",children:"Eva Martinez"}),e.jsx("p",{className:"alumni-company",children:"Apple"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2023"})]}),e.jsxs("div",{className:"alumni-card bounce-in","data-aos":"zoom-in","data-aos-delay":"600",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Frank+Lee",alt:"Frank Lee",className:"alumni-photo"}),e.jsx("h3",{className:"alumni-name",children:"Frank Lee"}),e.jsx("p",{className:"alumni-company",children:"Tesla"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2022"})]}),e.jsxs("div",{className:"alumni-card flip-in-x","data-aos":"zoom-in","data-aos-delay":"700",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Grace+Taylor",alt:"Grace Taylor",className:"alumni-photo"}),e.jsx("h3",{className:"alumni-name",children:"Grace Taylor"}),e.jsx("p",{className:"alumni-company",children:"Netflix"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2024"})]}),e.jsxs("div",{className:"alumni-card light-speed-in","data-aos":"zoom-in","data-aos-delay":"800",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Henry+Garcia",alt:"Henry Garcia",className:"alumni-photo"}),e.jsx("h3",{className:"alumni-name",children:"Henry Garcia"}),e.jsx("p",{className:"alumni-company",children:"SpaceX"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2020"})]}),e.jsxs("div",{className:"alumni-card roll-in","data-aos":"zoom-in","data-aos-delay":"900",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Ivy+Anderson",alt:"Ivy Anderson",className:"alumni-photo"}),e.jsx("h3",{className:"alumni-name",children:"Ivy Anderson"}),e.jsx("p",{className:"alumni-company",children:"IBM"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2023"})]}),e.jsxs("div",{className:"alumni-card rubber-band","data-aos":"zoom-in","data-aos-delay":"1000",children:[e.jsx("img",{src:"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Jack+White",alt:"Jack White",className:"alumni-photo"}),e.jsx("h3",{className:"alumni-name",children:"Jack White"}),e.jsx("p",{className:"alumni-company",children:"Oracle"}),e.jsx("p",{className:"alumni-batch",children:"Batch of 2022"})]})]})]}),e.jsx("div",{className:"premium-divider"}),e.jsx("div",{id:"bot",children:"🤖"}),e.jsxs("div",{id:"chat-modal",children:[e.jsxs("div",{id:"chat-header",children:["Luxury AI Assistant ",e.jsx("span",{id:"close-btn",children:"×"})]}),e.jsx("div",{id:"chat-body"}),e.jsxs("div",{id:"chat-input",children:[e.jsx("input",{id:"user-input",type:"text",placeholder:"Inquire about premium tech..."}),e.jsx("button",{id:"send-btn",children:"Send"})]})]})]})}function gg(){return e.jsxs(sf,{children:[e.jsx(ue,{path:"/",element:e.jsx(gf,{})}),e.jsx(ue,{path:"/home",element:e.jsx(jf,{})}),e.jsx(ue,{path:"/m/home",element:e.jsx(kf,{})}),e.jsx(ue,{path:"/auth",element:e.jsx(Df,{})}),e.jsx(ue,{path:"/admin",element:e.jsx(Rf,{})}),e.jsx(ue,{path:"/dashboard",element:e.jsx(zf,{})}),e.jsx(ue,{path:"/recruitment",element:e.jsx(Ff,{})}),e.jsx(ue,{path:"/events",element:e.jsx(Vf,{})}),e.jsx(ue,{path:"/instagram",element:e.jsx(Xf,{})}),e.jsx(ue,{path:"/interview",element:e.jsx(Zf,{})}),e.jsx(ue,{path:"/roadmap",element:e.jsx(ag,{})}),e.jsx(ue,{path:"/roadmap-old",element:e.jsx(lg,{})}),e.jsx(ue,{path:"/alumni",element:e.jsx(ug,{})}),e.jsx(ue,{path:"/premium",element:e.jsx(fg,{})}),e.jsx(ue,{path:"*",element:e.jsx(tf,{to:"/",replace:!0})})]})}kr.createRoot(document.getElementById("root")).render(e.jsx(Nc.StrictMode,{children:e.jsx(mf,{children:e.jsx(gg,{})})}));
