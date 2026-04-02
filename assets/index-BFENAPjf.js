var e=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function k(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function A(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ne(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ne(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+k(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),ne(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+k(a,u),c+=ne(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+k(a,u++),c+=ne(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ne(A(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function re(e,t,n){if(e==null)return e;var r=[],i=0;return ne(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ie(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},M={map:re,forEach:function(e,t,n){re(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=M,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ie}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,j)}catch(e){j(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&k(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&k(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=D,O=function(){te.postMessage(null)}}else O=function(){_(D,0)};function k(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,k(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.4`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),k=Symbol.iterator;function A(e){return typeof e!=`object`||!e?null:(e=k&&e[k]||e[`@@iterator`],typeof e==`function`?e:null)}var ne=Symbol.for(`react.client.reference`);function re(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?re(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var ie=Array.isArray,j=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},oe=[],se=-1;function ce(e){return{current:e}}function N(e){0>se||(e.current=oe[se],oe[se]=null,se--)}function P(e,t){se++,oe[se]=e.current,e.current=t}var le=ce(null),ue=ce(null),de=ce(null),fe=ce(null);function pe(e,t){switch(P(de,t),P(ue,e),P(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}N(le),P(le,e)}function F(){N(le),N(ue),N(de)}function me(e){e.memoizedState!==null&&P(fe,e);var t=le.current,n=Hd(t,e.type);t!==n&&(P(ue,e),P(le,n))}function he(e){ue.current===e&&(N(le),N(ue)),fe.current===e&&(N(fe),Qf._currentValue=ae)}var ge,_e;function ve(e){if(ge===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ge=t&&t[1]||``,_e=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ge+e+_e}var ye=!1;function be(e,t){if(!e||ye)return``;ye=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ye=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ve(n):``}function xe(e,t){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve(`Lazy`);case 13:return e.child!==t&&t!==null?ve(`Suspense Fallback`):ve(`Suspense`);case 19:return ve(`SuspenseList`);case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return ve(`Activity`);default:return``}}function Se(e){try{var t=``,n=null;do t+=xe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ce=Object.prototype.hasOwnProperty,we=t.unstable_scheduleCallback,Te=t.unstable_cancelCallback,Ee=t.unstable_shouldYield,De=t.unstable_requestPaint,Oe=t.unstable_now,ke=t.unstable_getCurrentPriorityLevel,I=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Pe=t.log,Fe=t.unstable_setDisableYieldValue,Ie=null,Le=null;function L(e){if(typeof Pe==`function`&&Fe(e),Le&&typeof Le.setStrictMode==`function`)try{Le.setStrictMode(Ie,e)}catch{}}var Re=Math.clz32?Math.clz32:Ve,ze=Math.log,Be=Math.LN2;function Ve(e){return e>>>=0,e===0?32:31-(ze(e)/Be|0)|0}var He=256,Ue=262144,We=4194304;function Ge(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ge(n))):i=Ge(o):i=Ge(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ge(n))):i=Ge(o)):i=Ge(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=We;return We<<=1,!(We&62914560)&&(We=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Re(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&$e(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Re(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function et(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function tt(e,t){var n=t&-t;return n=n&42?1:nt(n),(n&(e.suspendedLanes|t))===0?n:0}function nt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function it(){var e=M.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function at(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var ot=Math.random().toString(36).slice(2),st=`__reactFiber$`+ot,R=`__reactProps$`+ot,ct=`__reactContainer$`+ot,lt=`__reactEvents$`+ot,ut=`__reactListeners$`+ot,dt=`__reactHandles$`+ot,ft=`__reactResources$`+ot,pt=`__reactMarker$`+ot;function mt(e){delete e[st],delete e[R],delete e[lt],delete e[ut],delete e[dt]}function ht(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[st])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function gt(e){if(e=e[st]||e[ct]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _t(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function vt(e){var t=e[ft];return t||=e[ft]={hoistableStyles:new Map,hoistableScripts:new Map},t}function z(e){e[pt]=!0}var yt=new Set,bt={};function xt(e,t){St(e,t),St(e+`Capture`,t)}function St(e,t){for(bt[e]=t,e=0;e<t.length;e++)yt.add(t[e])}var Ct=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),wt={},Tt={};function Et(e){return Ce.call(Tt,e)?!0:Ce.call(wt,e)?!1:Ct.test(e)?Tt[e]=!0:(wt[e]=!0,!1)}function Dt(e,t,n){if(Et(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ot(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function kt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function B(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function At(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function jt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mt(e){if(!e._valueTracker){var t=At(e)?`checked`:`value`;e._valueTracker=jt(e,t,``+e[t])}}function Nt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=At(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Pt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ft=/[\n"\\]/g;function It(e){return e.replace(Ft,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Lt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+B(t)):e.value!==``+B(t)&&(e.value=``+B(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):zt(e,o,B(n)):zt(e,o,B(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+B(s):e.removeAttribute(`name`)}function Rt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Mt(e);return}n=n==null?``:``+B(n),t=t==null?n:``+B(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Mt(e)}function zt(e,t,n){t===`number`&&Pt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function V(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+B(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bt(e,t,n){if(t!=null&&(t=``+B(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+B(n)}function Vt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ie(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=B(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Mt(e)}function Ht(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ut=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Wt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Ut.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Gt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Wt(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Wt(e,a,t[a])}function Kt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yt(e){return Jt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function H(){}var Xt=null;function Zt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qt=null,$t=null;function en(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[R]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Lt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+It(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[R]||null;if(!i)throw Error(s(90));Lt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Nt(r)}break a;case`textarea`:Bt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&V(e,!!n.multiple,t,!1)}}}var tn=!1;function nn(e,t,n){if(tn)return e(t,n);tn=!0;try{return e(t)}finally{if(tn=!1,(Qt!==null||$t!==null)&&(bu(),Qt&&(t=Qt,e=$t,$t=Qt=null,en(t),e)))for(t=0;t<e.length;t++)en(e[t])}}function rn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[R]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var an=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),on=!1;if(an)try{var sn={};Object.defineProperty(sn,`passive`,{get:function(){on=!0}}),window.addEventListener(`test`,sn,sn),window.removeEventListener(`test`,sn,sn)}catch{on=!1}var cn=null,ln=null,un=null;function dn(){if(un)return un;var e,t=ln,n=t.length,r,i=`value`in cn?cn.value:cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return un=i.slice(e,1<r?1-r:void 0)}function fn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pn(){return!0}function mn(){return!1}function hn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?pn:mn,this.isPropagationStopped=mn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=pn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=pn)},persist:function(){},isPersistent:pn}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=hn(gn),vn=h({},gn,{view:0,detail:0}),yn=hn(vn),bn,xn,Sn,Cn=h({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Sn&&(Sn&&e.type===`mousemove`?(bn=e.screenX-Sn.screenX,xn=e.screenY-Sn.screenY):xn=bn=0,Sn=e),bn)},movementY:function(e){return`movementY`in e?e.movementY:xn}}),wn=hn(Cn),Tn=hn(h({},Cn,{dataTransfer:0})),En=hn(h({},vn,{relatedTarget:0})),Dn=hn(h({},gn,{animationName:0,elapsedTime:0,pseudoElement:0})),On=hn(h({},gn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),kn=hn(h({},gn,{data:0})),An={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},jn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Mn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Nn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mn[e])?!!t[e]:!1}function Pn(){return Nn}var Fn=hn(h({},vn,{key:function(e){if(e.key){var t=An[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=fn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?jn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pn,charCode:function(e){return e.type===`keypress`?fn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?fn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),In=hn(h({},Cn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ln=hn(h({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pn})),Rn=hn(h({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0})),zn=hn(h({},Cn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Bn=hn(h({},gn,{newState:0,oldState:0})),Vn=[9,13,27,32],Hn=an&&`CompositionEvent`in window,Un=null;an&&`documentMode`in document&&(Un=document.documentMode);var Wn=an&&`TextEvent`in window&&!Un,Gn=an&&(!Hn||Un&&8<Un&&11>=Un),Kn=` `,qn=!1;function Jn(e,t){switch(e){case`keyup`:return Vn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Yn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Xn=!1;function Zn(e,t){switch(e){case`compositionend`:return Yn(t);case`keypress`:return t.which===32?(qn=!0,Kn):null;case`textInput`:return e=t.data,e===Kn&&qn?null:e;default:return null}}function Qn(e,t){if(Xn)return e===`compositionend`||!Hn&&Jn(e,t)?(e=dn(),un=ln=cn=null,Xn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Gn&&t.locale!==`ko`?null:t.data;default:return null}}var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!$n[e.type]:t===`textarea`}function tr(e,t,n,r){Qt?$t?$t.push(r):$t=[r]:Qt=r,t=Ed(t,`onChange`),0<t.length&&(n=new _n(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function ir(e){yd(e,0)}function ar(e){if(Nt(_t(e)))return e}function or(e,t){if(e===`change`)return t}var sr=!1;if(an){var cr;if(an){var lr=`oninput`in document;if(!lr){var ur=document.createElement(`div`);ur.setAttribute(`oninput`,`return;`),lr=typeof ur.oninput==`function`}cr=lr}else cr=!1;sr=cr&&(!document.documentMode||9<document.documentMode)}function dr(){nr&&(nr.detachEvent(`onpropertychange`,fr),rr=nr=null)}function fr(e){if(e.propertyName===`value`&&ar(rr)){var t=[];tr(t,rr,e,Zt(e)),nn(ir,t)}}function pr(e,t,n){e===`focusin`?(dr(),nr=t,rr=n,nr.attachEvent(`onpropertychange`,fr)):e===`focusout`&&dr()}function mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ar(rr)}function hr(e,t){if(e===`click`)return ar(t)}function gr(e,t){if(e===`input`||e===`change`)return ar(t)}function _r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var vr=typeof Object.is==`function`?Object.is:_r;function yr(e,t){if(vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ce.call(t,i)||!vr(e[i],t[i]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var n=br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=br(n)}}function Sr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Pt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pt(e.document)}return t}function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Tr=an&&`documentMode`in document&&11>=document.documentMode,Er=null,Dr=null,Or=null,kr=!1;function Ar(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kr||Er==null||Er!==Pt(r)||(r=Er,`selectionStart`in r&&wr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&yr(Or,r)||(Or=r,r=Ed(Dr,`onSelect`),0<r.length&&(t=new _n(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Mr={animationend:jr(`Animation`,`AnimationEnd`),animationiteration:jr(`Animation`,`AnimationIteration`),animationstart:jr(`Animation`,`AnimationStart`),transitionrun:jr(`Transition`,`TransitionRun`),transitionstart:jr(`Transition`,`TransitionStart`),transitioncancel:jr(`Transition`,`TransitionCancel`),transitionend:jr(`Transition`,`TransitionEnd`)},Nr={},Pr={};an&&(Pr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),`TransitionEvent`in window||delete Mr.transitionend.transition);function Fr(e){if(Nr[e])return Nr[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pr)return Nr[e]=t[n];return e}var Ir=Fr(`animationend`),Lr=Fr(`animationiteration`),Rr=Fr(`animationstart`),zr=Fr(`transitionrun`),Br=Fr(`transitionstart`),Vr=Fr(`transitioncancel`),Hr=Fr(`transitionend`),Ur=new Map,Wr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Wr.push(`scrollEnd`);function Gr(e,t){Ur.set(e,t),xt(t,[e])}var Kr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},qr=[],Jr=0,Yr=0;function Xr(){for(var e=Jr,t=Yr=Jr=0;t<e;){var n=qr[t];qr[t++]=null;var r=qr[t];qr[t++]=null;var i=qr[t];qr[t++]=null;var a=qr[t];if(qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ei(n,i,a)}}function Zr(e,t,n,r){qr[Jr++]=e,qr[Jr++]=t,qr[Jr++]=n,qr[Jr++]=r,Yr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Qr(e,t,n,r){return Zr(e,t,n,r),ti(e)}function $r(e,t){return Zr(e,null,null,t),ti(e)}function ei(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Re(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ti(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,t,n,r){return new ri(e,t,n,r)}function ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oi(e,t){var n=e.alternate;return n===null?(n=ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function si(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ci(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)ai(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,le.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=ii(31,n,t,i),e.elementType=ee,e.lanes=a,e;case y:return li(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=ii(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case T:return e=ii(13,n,t,i),e.elementType=T,e.lanes=a,e;case E:return e=ii(19,n,t,i),e.elementType=E,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:o=10;break a;case S:o=9;break a;case w:o=11;break a;case D:o=14;break a;case O:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=ii(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function li(e,t,n,r){return e=ii(7,e,r,t),e.lanes=n,e}function ui(e,t,n){return e=ii(6,e,null,t),e.lanes=n,e}function di(e){var t=ii(18,null,null,0);return t.stateNode=e,t}function fi(e,t,n){return t=ii(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pi=new WeakMap;function mi(e,t){if(typeof e==`object`&&e){var n=pi.get(e);return n===void 0?(t={value:e,source:t,stack:Se(t)},pi.set(e,t),t):n}return{value:e,source:t,stack:Se(t)}}var hi=[],gi=0,_i=null,vi=0,yi=[],bi=0,xi=null,Si=1,Ci=``;function wi(e,t){hi[gi++]=vi,hi[gi++]=_i,_i=e,vi=t}function Ti(e,t,n){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,xi=e;var r=Si;e=Ci;var i=32-Re(r)-1;r&=~(1<<i),n+=1;var a=32-Re(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Si=1<<32-Re(t)+i|n<<i|r,Ci=a+e}else Si=1<<a|n<<i|r,Ci=e}function Ei(e){e.return!==null&&(wi(e,1),Ti(e,1,0))}function Di(e){for(;e===_i;)_i=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null;for(;e===xi;)xi=yi[--bi],yi[bi]=null,Ci=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null}function Oi(e,t){yi[bi++]=Si,yi[bi++]=Ci,yi[bi++]=xi,Si=t.id,Ci=t.overflow,xi=e}var ki=null,Ai=null,U=!1,ji=null,Mi=!1,Ni=Error(s(519));function Pi(e){throw Bi(mi(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[st]=e,t[R]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Rt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Vt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=H),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(ki=e.return;ki;)switch(ki.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:ki=ki.return}}function Li(e){if(e!==ki)return!1;if(!U)return Ii(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ai&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));Ai=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));Ai=uf(e)}else t===27?(t=Ai,Zd(e.type)?(e=lf,lf=null,Ai=e):Ai=t):Ai=ki?cf(e.stateNode.nextSibling):null;return!0}function Ri(){Ai=ki=null,U=!1}function zi(){var e=ji;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),ji=null),e}function Bi(e){ji===null?ji=[e]:ji.push(e)}var Vi=ce(null),Hi=null,Ui=null;function Wi(e,t,n){P(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,N(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ki(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ki(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Ji(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;vr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===fe.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!vr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(s(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=dd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=j.S;j.S=function(e,t){eu=Oe(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=ce(null);function ha(){var e=ma.current;return e===null?q.pooledCache:e}function ga(e,t){t===null?P(ma,ma.current):P(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(s(460)),ya=Error(s(474)),ba=Error(s(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(H,H),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then(H,H);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(s(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(s(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=oi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ui(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===O&&wa(a)===t.type)?(t=i(t,n.props),ja(t,n),t.return=e,t):(t=ci(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=fi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=li(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ui(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ci(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=fi(t,e.mode,n),t.return=e,t;case O:return t=wa(t),f(e,t,n)}if(ie(t)||A(t))return t=li(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=wa(n),p(e,t,n,r)}if(ie(n)||A(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=wa(r),m(e,t,n,r,i)}if(ie(r)||A(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&wi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return U&&wi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&wi(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),U&&wi(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return U&&wi(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),U&&wi(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&wa(l)===r.type){n(e,r.sibling),c=i(r,a.props),ja(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=li(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=ci(a.type,a.key,a.props,null,e.mode,c),ja(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=fi(a,e.mode,c),c.return=e,e=c}return o(e);case O:return a=wa(a),b(e,r,a,c)}if(ie(a))return h(e,r,a,c);if(A(a)){if(l=A(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Aa(a),c);if(a.$$typeof===C)return b(e,r,Qi(e,a),c);Ma(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=ui(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=ii(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ti(e),ei(e,null,n),t}return Zr(e,r,t,n),ti(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ia=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=ce(null),Ya=ce(0);function Xa(e,t){e=Ul,P(Ya,e),P(Ja,t),Ul=e|t.baseLanes}function Za(){P(Ya,Ul),P(Ja,Ja.current)}function Qa(){Ul=Ya.current,N(Ja),N(Ya)}var $a=ce(null),eo=null;function to(e){var t=e.alternate;P(oo,oo.current&1),P($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){P(oo,oo.current),P($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(P(oo,oo.current),P($a,e),eo===null&&(eo=e)):io(e)}function io(){P(oo,oo.current),P($a,$a.current)}function ao(e){N($a),eo===e&&(eo=null),N(oo)}var oo=ce(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,G=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(s(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vr(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Ls:Rs,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){j.H=Is;var t=G!==null&&G.next!==null;if(co=0,lo=G=W=null,uo=!1,ho=0,go=null,t)throw Error(s(300));e===null||tc||(e=e.dependencies,e!==null&&Yi(e)&&(tc=!0))}function So(e,t,n,r){W=e;var i=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=i)throw Error(s(301));if(i+=1,lo=G=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}j.H=zs,a=t(n,r)}while(fo);return a}function Co(){var e=j.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(G===null?null:G.memoizedState)!==e&&(W.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}co=0,lo=G=W=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?W.memoizedState=lo=e:lo=lo.next=e,lo}function Oo(){if(G===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=G.next;var t=lo===null?W.memoizedState:lo.next;if(t!==null)lo=t,G=e;else{if(e===null)throw W.alternate===null?Error(s(467)):Error(s(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},lo===null?W.memoizedState=lo=e:lo=lo.next=e}return lo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=ho;return ho+=1,go===null&&(go=[]),e=Ca(go,e,t),t=W,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===C)return Zi(e)}throw Error(s(438,String(e)))}function Mo(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),G,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((co&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,W.lanes|=p,Gl|=p;f=u.action,po&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,W.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!vr(a,e.memoizedState)&&(tc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);vr(a,t.memoizedState)||(tc=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Lo(e,t,n){var r=W,i=Oo(),a=U;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!vr((G||i).memoizedState,n);if(o&&(i.memoizedState=n,tc=!0),i=i.queue,cs(Bo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,i,n,t),null),q===null)throw Error(s(349));a||co&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=ko(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vr(e,n)}catch{return!0}}function Ho(e){var t=$r(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){L(!0);try{n()}finally{L(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,G,typeof r==`function`?r:No)}function Go(e,t,n,r,i){if(Ns(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};j.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Ko(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=j.T,o={};j.T=o;try{var s=n(i,r),c=j.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),j.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(U){var n=q.formState;if(n!==null){a:{var r=W;if(U){if(Ai){b:{for(var i=Ai,a=Mi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ai=cf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,W,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,W,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),G,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===va?ba:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=G;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=ko(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();W.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;G!==null&&r!==null&&yo(r,G.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(W.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=ko(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(K&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){L(!0);try{e()}finally{L(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||co&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),W.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return vr(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),W.lanes|=e,Gl|=e,t):(e=vs(e,n,r),vr(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=M.p;M.p=a!==0&&8>a?a:8;var o=j.T,s={};j.T=s,Ms(e,!1,t,n);try{var c=i(),l=j.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,fa(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{M.p=a,o!==null&&s.types!==null&&(o.types=s.types),j.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=Cs(e).queue;bs(e,i,t,ae,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return Zi(Qf)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=za(n);var r=Ba(t,e,n);r!==null&&(hu(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=Qr(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,vr(s,o))return Zr(e,t,i,0),q===null&&Xr(),!1}catch{}if(n=Qr(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(s(479))}else t=Qr(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ps(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}var Is={readContext:Zi,use:jo,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Is.useEffectEvent=vo;var Ls={readContext:Zi,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){L(!0);try{e()}finally{L(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){L(!0);try{n(t)}finally{L(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,W,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,i=Do();if(U){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),q===null)throw Error(s(349));Y&127||Ro(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ss(Bo.bind(null,r,a,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),n},useId:function(){var e=Do(),t=q.identifierPrefix;if(U){var n=Ci,r=Si;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,W)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),G.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return G===null?vs(n,e,t):ys(n,G.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return G===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(hu(t,e,n),Va(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){Kr(e)}function Ks(e){console.error(e)}function qs(e){Kr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=za(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,i,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(U)return t=$a.current,t===null?(r!==Ni&&(t=Error(s(423),{cause:r}),Bi(mi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=mi(r,n),i=Xs(e.stateNode,r,i),Ha(e,i),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Ni&&(e=Error(s(422),{cause:r}),Bi(mi(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=mi(a,n),Xl===null?Xl=[a]:Xl.push(a),Wl!==4&&(Wl=2),t===null)return!0;r=mi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Xs(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(ru===null||!ru.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Zs(i),Qs(i,e,n,r),Ha(n,i),!1}n=n.return}while(n!==null);return!1}var ec=Error(s(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&s&&Ei(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ai(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?yr:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=oi(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(yr(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Pa(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(no(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return lc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(no(t),i)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(tc||Ji(e,t,n,!1),i=(n&e.childLanes)!==0,tc||i){if(r=q,r!==null&&(o=tt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,$r(e,o),hu(r,e,o),ec;Du(),t=uc(e,t,n)}else e=a.treeContext,Ai=cf(o.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=lc(t,r),t.flags|=4096;return t}return e=oi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Xi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(U&&r&&Ei(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ni,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ni,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Ia||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ni,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Ia||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Ri(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:_a()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(oo.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(U){if(i?to(t):io(t),(e=Ai)?(e=rf(e,Mi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xi===null?null:{id:Si,overflow:Ci},retryLane:536870912,hydrationErrors:null},n=di(e),n.return=t,t.child=n,ki=t,Ai=null)):e=null,e===null)throw Pi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(io(t),i=t.mode,c=Sc({mode:`hidden`,children:c},i),r=li(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,o,n),t.memoizedState=_c,sc(null,r)):(to(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(to(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,i=t.mode,r=Sc({mode:`visible`,children:r.children},i),c=li(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,o,n),t.memoizedState=_c,t=sc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Bi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Ji(e,t,n,!1),o=(n&e.childLanes)!==0,tc||o){if(o=q,o!==null&&(r=tt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,$r(e,r),hu(o,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ai=cf(c.nextSibling),ki=t,U=!0,ji=null,Mi=!1,e!==null&&Oi(t,e),t=xc(t,r.children),t.flags|=4096);return t}return i?(io(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=oi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=li(c,i,n,null),c.flags|=2):c=oi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(i=c.cachePool,i===null?i=_a():(l=ra._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=yc(e,o,n),t.memoizedState=_c,sc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=oi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=ii(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Pa(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,P(oo,o),nc(e,t,r,n),r=U?vi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Yi(e))):!0}function kc(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:me(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(oo,oo.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,U&&t.flags&1048576&&Ti(t,vi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)ai(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===w){t.tag=11,t=rc(null,t,e,r,n);break a}else if(i===D){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=re(e)||e,Error(s(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Ws(r,t.pendingProps),hc(e,t,r,i,n);case 3:a:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ra(e,t),Ga(t,r,null,n);var o=t.memoizedState;if(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0),Wa(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==i){i=mi(Error(s(424)),t),Bi(i),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ai=cf(e.firstChild),ki=t,U=!0,ji=null,Mi=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===i){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(n=t.type,e=t.pendingProps,r=Bd(de.current).createElement(n),r[st]=t,r[R]=e,Pd(r,n,e),z(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return me(t),e===null&&U&&(r=t.stateNode=ff(t.type,t.pendingProps,de.current),ki=t,Mi=!0,i=Ai,Zd(t.type)?(lf=i,Ai=cf(r.firstChild)):Ai=i),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((i=r=Ai)&&(r=tf(r,t.type,t.pendingProps,Mi),r===null?i=!1:(t.stateNode=r,ki=t,Ai=cf(r.firstChild),Mi=!1,i=!0)),i||Pi(t)),me(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=bo(e,t,Co,null,null,n),Qf._currentValue=i),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=Ai)&&(n=nf(n,t.pendingProps,Mi),n===null?e=!1:(t.stateNode=n,ki=t,Ai=null,e=!0)),e||Pi(t)),null;case 13:return bc(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Xi(t),i=Zi(i),r=r(i),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(i=ha(),i===null&&(i=q,a=ia(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},La(t),Wi(t,ra,i)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Wi(t,ra,r),r!==i.cache&&qi(t,[ra],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Wi(t,ra,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ta=xa,ya}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ta=xa,ya}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),F(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Ic(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(jc(t),a===null?(Ic(t),Mc(t,i,null,r,n)):(Ic(t),Nc(t,a))):a?a===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,a)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,i,e,r,n)),null;case 27:if(he(t),n=de.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ic(t),null}e=le.current,Li(t)?Fi(t,e):(e=ff(i,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(he(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ic(t),null}if(a=le.current,Li(t))Fi(t,a);else{var o=Bd(de.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[st]=t,a[R]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=de.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=ki,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Pi(t,!0)}else e=Bd(e).createTextNode(r),e[st]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[st]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(s(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[st]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),i=!1}else i=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return F(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return Gi(t.type),Ic(t),null;case 19:if(N(oo),r=t.memoizedState,r===null)return Ic(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=so(e),a!==null){for(t.flags|=128,Fc(r,!1),e=a.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)si(n,e),n=n.sibling;return P(oo,oo.current&1|2),U&&wi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Oe()>tu&&(t.flags|=128,i=!0,Fc(r,!1),t.lanes=4194304)}else{if(!i)if(e=so(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!U)return Ic(t),null}else 2*Oe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,i=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Oe(),e.sibling=null,n=oo.current,P(oo,i?n&1|2:n&1),U&&wi(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&N(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Ic(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Rc(e,t){switch(Di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),F(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return he(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(s(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(oo),null;case 4:return F(),null;case 10:return Gi(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&N(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function zc(e,t){switch(Di(t),t.tag){case 3:Gi(ra),F();break;case 26:case 27:case 5:he(t);break;case 4:F();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:N(oo);break;case 10:Gi(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&N(ma);break;case 24:Gi(ra)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[R]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=H));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[st]=e,t[R]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Cr(e),wr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Ws(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Le&&typeof Le.onCommitFiberUnmount==`function`)try{Le.onCommitFiberUnmount(Ie,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(s(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(s(160));ul(a,o,i),sl=null,cl=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[pt]||a[st]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[st]=e,z(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[st]=e,z(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){i=e.stateNode;try{Ht(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=gl,gl=gf(t.containerInfo),hl(t,e),gl=i,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Oe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||i,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;Zc(e,Yc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(Ht(a,``),n.flags&=-33),Zc(e,Yc(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;Xc(e,Yc(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:j.T===null?it():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||U){var e=Ue;Ue<<=1,!(Ue&3932160)&&(Ue=262144),Jl=e}else Jl=536870912;return e=$a.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Ze(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||qe(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=a,Kl|=a,i=4;break a}a=Zl,Zl=i,a!==null&&(Zl===null?Zl=a:Zl.push.apply(Zl,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=$l+300-Oe(),10<i)){if(yu(r,t,Jl,!Bl),Ke(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,`Throttled`,-0,0),i);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:H},jl(t,a,d);var m=(a&62914560)===a?$l-Oe():(a&4194048)===a?eu-Oe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!vr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Re(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&$e(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ui=Hi=null,Eo(e),Oa=null,ka=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=oi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=qe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Re(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Xr(),n}function Cu(e,t){W=null,j.H=Is,t===va||t===ba?(t=Ea(),X=3):t===ya?(t=Ea(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Js(e,mi(t,e.current)))}function wu(){var e=$a.current;return e===null?!0:(Y&4194048)===Y?eo===null:(Y&62914560)===Y||Y&536870912?e===eo:!1}function Tu(){var e=j.H;return j.H=Is,e===null?Is:e}function Eu(){var e=j.A;return j.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&$a.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,K=r,j.H=i,j.A=a,J===null&&(q=null,Y=0,Xr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),i=Eu();q!==e||Y!==t?(nu=null,tu=Oe()+500,Su(e,t)):Vl=qe(e,t);a:do try{if(X!==0&&J!==null){t=J;var a=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,a,1);break;case 2:case 9:if(Sa(a)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},a.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Sa(a)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(J.tag){case 26:o=J.memoizedState;case 5:case 27:var c=J;if(o?Wf(o):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,a,5);break;case 6:X=0,zl=null,Pu(e,t,a,6);break;case 8:xu(),Wl=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ui=Hi=null,j.H=r,j.A=i,K=n,J===null?(q=null,Y=0,Xr(),Wl):0}function ju(){for(;J!==null&&!Ee();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Eo(t);default:zc(n,t),t=J=si(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ui=Hi=null,Eo(t),Oa=null,ka=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Js(e,mi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Js(e,mi(n,e.current)),J=null;return}t.flags&32768?(U||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=Yr,Qe(e,n,a,o,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(je,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=j.T,j.T=null,i=M.p,M.p=2,o=K,K|=4;try{il(e,t,n)}finally{K=o,M.p=i,j.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Cr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Sr(s.ownerDocument.documentElement,s)){if(c!==null&&wr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=xr(s,h),v=xr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,M.p=r,j.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,M.p=r,j.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,De();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),rt(n),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot==`function`)try{Le.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=j.T,i=M.p,M.p=2,j.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{j.T=t,M.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=rt(su),r=j.T,i=M.p;try{M.p=32>n?32:n,j.T=null,n=lu,lu=null;var a=au,o=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(s(331));var c=K;if(K|=4,Pl(a.current),El(a,a.current,o,n),K=c,id(0,!1),Le&&typeof Le.onPostCommitFiberRoot==`function`)try{Le.onPostCommitFiberRoot(Ie,a)}catch{}return!0}finally{M.p=i,j.T=r,Vu(e,t)}}function Wu(e,t,n){t=mi(n,t),t=Xs(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Ze(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=mi(n,e),n=Zs(2),r=Ba(t,n,2),r!==null&&(Qs(n,r,t,e),Ze(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Oe()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ye()),e=$r(e,t),e!==null&&(Ze(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return we(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Re(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ke(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Oe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Re(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Te(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Te(r),rt(n)){case 2:case 8:n=Ae;break;case 32:n=je;break;case 268435456:n=Ne;break;default:n=je}return r=cd.bind(null,e),n=we(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Te(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ke(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Oe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?we(I,ad):od()})}function dd(){if(nd===0){var e=ca;e===0&&(e=He,He<<=1,!(He&261888)&&(He=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Yt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[R]||null).action),o=r.submitter;o&&(t=(t=o[R]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new _n(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Wr.length;hd++){var gd=Wr[hd];Gr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Gr(Ir,`onAnimationEnd`),Gr(Lr,`onAnimationIteration`),Gr(Rr,`onAnimationStart`),Gr(`dblclick`,`onDoubleClick`),Gr(`focusin`,`onFocus`),Gr(`focusout`,`onBlur`),Gr(zr,`onTransitionRun`),Gr(Br,`onTransitionStart`),Gr(Vr,`onTransitionCancel`),Gr(Hr,`onTransitionEnd`),St(`onMouseEnter`,[`mouseout`,`mouseover`]),St(`onMouseLeave`,[`mouseout`,`mouseover`]),St(`onPointerEnter`,[`pointerout`,`pointerover`]),St(`onPointerLeave`,[`pointerout`,`pointerover`]),xt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),xt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),xt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),xt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Kr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[lt];n===void 0&&(n=t[lt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,yt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!on||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=ht(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}nn(function(){var r=a,i=Zt(n),o=[];a:{var s=Ur.get(e);if(s!==void 0){var c=_n,u=e;switch(e){case`keypress`:if(fn(n)===0)break a;case`keydown`:case`keyup`:c=Fn;break;case`focusin`:u=`focus`,c=En;break;case`focusout`:u=`blur`,c=En;break;case`beforeblur`:case`afterblur`:c=En;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Tn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Ln;break;case Ir:case Lr:case Rr:c=Dn;break;case Hr:c=Rn;break;case`scroll`:case`scrollend`:c=yn;break;case`wheel`:c=zn;break;case`copy`:case`cut`:case`paste`:c=On;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=In;break;case`toggle`:case`beforetoggle`:c=Bn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=rn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Xt&&(u=n.relatedTarget||n.fromElement)&&(ht(u)||u[ct]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?ht(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=wn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=In,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:_t(c),h=u==null?s:_t(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,ht(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?_t(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=or;else if(er(s))if(sr)v=gr;else{v=mr;var y=pr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&Kt(r.elementType)&&(v=or):v=hr;if(v&&=v(e,r)){tr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&zt(s,`number`,s.value)}switch(y=r?_t(r):window,e){case`focusin`:(er(y)||y.contentEditable===`true`)&&(Er=y,Dr=r,Or=null);break;case`focusout`:Or=Dr=Er=null;break;case`mousedown`:kr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:kr=!1,Ar(o,n,i);break;case`selectionchange`:if(Tr)break;case`keydown`:case`keyup`:Ar(o,n,i)}var b;if(Hn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Xn?Jn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Gn&&n.locale!==`ko`&&(Xn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Xn&&(b=dn()):(cn=i,ln=`value`in cn?cn.value:cn.textContent,Xn=!0)),y=Ed(r,x),0<y.length&&(x=new kn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=Yn(n),b!==null&&(x.data=b)))),(b=Wn?Zn(e,n):Qn(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new kn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=rn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=rn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=rn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=rn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Ht(e,``+r);break;case`className`:Ot(e,`class`,r);break;case`tabIndex`:Ot(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ot(e,n,r);break;case`style`:Gt(e,r,a);break;case`data`:if(t!==`object`){Ot(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Yt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Yt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=H);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Yt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Dt(e,`popover`,r);break;case`xlinkActuate`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Dt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=qt.get(n)||n,Dt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:Gt(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&Ht(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=H);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!bt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[R]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Dt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Rt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&V(e,!!r,n,!0):V(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Vt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(Kt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Lt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?V(e,!!n,n?[]:``,!1):V(e,!!n,t,!0)):V(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Bt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Kt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=M.d;M.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=gt(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=It(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),z(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+It(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+It(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+It(n.imageSizes)+`"]`)):i+=`[href="`+It(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),z(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+It(r)+`"][href="`+It(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),z(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=vt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);z(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=vt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),z(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=vt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),z(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=de.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=vt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=vt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=vt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+It(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),z(t),e.head.appendChild(t))}function Pf(e){return`[src="`+It(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+It(n.href)+`"]`);if(r)return t.instance=r,z(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),z(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,z(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),z(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,z(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),z(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[pt]||a[st]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,z(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),z(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ii(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=ni,e):ni}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(hu(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=$r(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=nt(t);var n=$r(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=2,up(e,t,n,r)}finally{M.p=a,j.T=i}}function lp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=8,up(e,t,n,r)}finally{M.p=a,j.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ge(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Re(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Oe()+500,id(0,!1))}}break;case 31:case 13:s=$r(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=Zt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=ht(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(ke()){case I:return 2;case Ae:return 8;case je:case Me:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=gt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=ht(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xt=r,n.target.dispatchEvent(r),Xt=null}else return t=gt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=gt(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[R]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[R]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ct]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=it();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.4`)throw Error(s(527,Lp,`19.2.4`));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:j,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ie=zp.inject(Rp),Le=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Gs,a=Ks,o=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[ct]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=e((e=>{var t=n().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),f=e(((e,t)=>{t.exports=d()})),p=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),m=e(((e,t)=>{t.exports=p()})),h=f(),g=m(),_=[`Pascal`,`C++`,`Python`,`SQL`,`HTML`],v={Pascal:{color:`#e8a020`,accent:`#fff3d4`,icon:`🟡`,topics:[{id:`p1`,title:`Introduction to Pascal`,form:1,lesson:`Pascal is a structured programming language created by Niklaus Wirth in 1970. It was designed to teach good programming habits, which is why it is still used in Zambian secondary schools today.

Every Pascal program follows the same clear structure:
1. The PROGRAM header gives your program a name
2. Declarations where you define variables and constants
3. The main block wrapped in BEGIN...END.

Here is what each part does:
PROGRAM HelloZambia; labels the program. The name cannot have spaces.
BEGIN tells Pascal to start running code from here.
WriteLn(...) prints text to the screen and moves to the next line automatically.
END. with a full stop is very important — it closes the entire program. END; with a semicolon only closes an inner block.

Pascal forces you to think carefully about program organisation before you write code. You will use Pascal to solve real problems — calculating school fees, tracking exam results, and managing records at markets like Soweto or Kalingalinga.`,code:`PROGRAM HelloZambia;
BEGIN
  WriteLn('Welcome to Lusaka Coding Academy!');
  WriteLn('Pascal is fun and easy to learn.');
END.`,explanation:`PROGRAM declares the program name. WriteLn prints a line of text. BEGIN and END. wrap the main code block.`,question:{text:`Chanda is writing her first Pascal program to display her school name, Munali Girls Secondary School. Which line correctly prints the school name?`,options:[`Print('Munali Girls Secondary School');`,`WriteLn('Munali Girls Secondary School');`,`Display Munali Girls Secondary School;`,`Echo 'Munali Girls Secondary School';`],answer:1,hint:`Pascal uses WriteLn to output text to the screen.`},q2:{text:`What punctuation correctly ends the final Pascal program block?`,options:[`END;`,`END.`,`ENDPROGRAM.`,`FINISH;`],answer:1,hint:`END. with a full stop closes the program. END; closes an inner block.`},q3:{text:`Lombe writes: BEGIN WriteLn('A'); WriteLn('B'); END. — how many lines print?`,options:[`0`,`1`,`2`,`3`],answer:2,hint:`Each WriteLn prints one line. Two WriteLn calls = two lines of output.`},trace:[{line:1,explanation:`PROGRAM HelloZambia; — declares the program name. Pascal uses this as a label. Nothing is printed yet.`,vars:{},output:null},{line:2,explanation:`BEGIN — marks the start of the main code block. Execution now enters this block.`,vars:{},output:null},{line:3,explanation:`WriteLn('Welcome to Lusaka Coding Academy!') — prints the text and moves the cursor to the next line.`,vars:{},output:`Welcome to Lusaka Coding Academy!`},{line:4,explanation:`WriteLn('Pascal is fun and easy to learn.') — prints the second line of text.`,vars:{},output:`Welcome to Lusaka Coding Academy!
Pascal is fun and easy to learn.`},{line:5,explanation:`END. — the full stop ends the entire program. Execution stops here.`,vars:{},output:`Welcome to Lusaka Coding Academy!
Pascal is fun and easy to learn.`}],worked:{scenario:`A teacher at Munali Girls wants to display a welcome message on the school computer lab screens.`,problem:`Write a Pascal program that prints two lines: 'Welcome to Munali Girls Secondary School' and 'Pascal Programming — Form 1'.`,steps:[{explain:`Every Pascal program starts with the PROGRAM keyword followed by a name. Choose a meaningful name with no spaces.`,code:`PROGRAM WelcomeScreen;`},{explain:`Open the main code block with BEGIN.`,code:`BEGIN`},{explain:`Use WriteLn to print each line. WriteLn automatically moves to the next line after printing.`,code:`  WriteLn('Welcome to Munali Girls Secondary School');
  WriteLn('Pascal Programming — Form 1');`},{explain:`Close the program with END followed by a full stop (not a semicolon).`,code:`END.`}],answer:`The program prints two lines exactly as specified. Each WriteLn call outputs one line.`,answerCode:`PROGRAM WelcomeScreen;
BEGIN
  WriteLn('Welcome to Munali Girls Secondary School');
  WriteLn('Pascal Programming — Form 1');
END.`,insight:`END. (full stop) closes the whole program. END; (semicolon) would close an inner block. This is one of the most common Pascal mistakes.`}},{id:`p2`,title:`Variables & Data Types`,form:1,lesson:`Variables are containers that store information your program needs to remember. In Pascal, you MUST declare every variable before you use it — this forces you to plan your data needs in advance.

The VAR section lists all variables and their data types. Pascal reserves the right amount of memory for each one.

The four most common Pascal data types:
INTEGER stores whole numbers with no decimal point. Use for things you count: students, bags of maize, a pupil's age. Range: roughly -32,000 to 32,000.
REAL stores decimal numbers. Use for things you measure: exam scores like 87.5, prices in Kwacha, rainfall in millimetres. Format output with :0:2 to control decimal places.
STRING stores text of any length. Always put string values in single quotes like 'Chanda Mutale'.
BOOLEAN stores only TRUE or FALSE. Use for yes/no situations: is a student enrolled? Did they pass?

The assignment operator in Pascal is := (colon then equals). The single = is only for comparing values. Writing x = 5 instead of x := 5 is one of the most common beginner mistakes — Pascal will give a compile error.`,code:`PROGRAM StudentRecord;
VAR
  studentName : String;
  age         : Integer;
  score       : Real;
BEGIN
  studentName := 'Mwansa Banda';
  age := 15;
  score := 87.5;
  WriteLn('Name: ', studentName);
  WriteLn('Age: ', age);
  WriteLn('Score: ', score:0:1, '%');
END.`,explanation:`VAR declares variables. := is the assignment operator. Each variable must have a declared type.`,question:{text:`Mutale tracks maize harvest (whole bags) at her farm in Mkushi. Which data type should she use?`,options:[`Real`,`String`,`Boolean`,`Integer`],answer:3,hint:`Whole numbers like bags of maize are best stored as Integer.`},q2:{text:`Which Pascal operator assigns a value to a variable?`,options:[`=`,`==`,`:=`,`->`],answer:2,hint:`Pascal uses := for assignment. = is used only for comparison.`},q3:{text:`A variable is declared as Integer. What happens if you assign 3.14 to it?`,options:[`Stores 3.14`,`Stores 3 (truncated)`,`Compile error`,`Stores '3.14' as text`],answer:2,hint:`An Integer cannot hold decimals — the compiler will reject it.`},trace:[{line:1,explanation:`PROGRAM StudentRecord; — names the program. No output yet.`,vars:{},output:null},{line:3,explanation:`VAR section — Pascal requires all variables to be declared here before BEGIN. No values assigned yet.`,vars:{studentName:`?`,age:`?`,score:`?`},output:null},{line:8,explanation:`studentName := 'Mwansa Banda'; — assigns the string value to studentName using the Pascal assignment operator :=`,vars:{studentName:`Mwansa Banda`,age:`?`,score:`?`},output:null},{line:9,explanation:`age := 15; — assigns the integer 15 to age.`,vars:{studentName:`Mwansa Banda`,age:15,score:`?`},output:null},{line:10,explanation:`score := 87.5; — assigns the real number 87.5 to score.`,vars:{studentName:`Mwansa Banda`,age:15,score:87.5},output:null},{line:11,explanation:`WriteLn('Name: ', studentName) — prints the label and the value of studentName.`,vars:{studentName:`Mwansa Banda`,age:15,score:87.5},output:`Name: Mwansa Banda`},{line:12,explanation:`WriteLn('Age: ', age) — prints the label and the integer value.`,vars:{studentName:`Mwansa Banda`,age:15,score:87.5},output:`Name: Mwansa Banda
Age: 15`},{line:13,explanation:`WriteLn('Score: ', score:0:1, '%') — :0:1 formats the real number to 1 decimal place.`,vars:{studentName:`Mwansa Banda`,age:15,score:87.5},output:`Name: Mwansa Banda
Age: 15
Score: 87.5%`}],worked:{scenario:`Bwalya is building a student record system for Choma Secondary School.`,problem:`Declare variables for a student's name (text), form (whole number), and exam score (decimal). Assign: name='Bwalya Mwale', form=3, score=74.5. Print all three.`,steps:[{explain:`Declare all variables in the VAR section with correct types. Text uses String, whole numbers use Integer, decimals use Real.`,code:`VAR
  name  : String;
  form  : Integer;
  score : Real;`},{explain:`In the BEGIN block, assign values using the := operator.`,code:`name  := 'Bwalya Mwale';
form  := 3;
score := 74.5;`},{explain:`Print each variable with a label. Use :0:1 to format the real number to 1 decimal place.`,code:`WriteLn('Name: ', name);
WriteLn('Form: ', form);
WriteLn('Score: ', score:0:1, '%');`}],answer:`Output: Name: Bwalya Mwale / Form: 3 / Score: 74.5%`,answerCode:`PROGRAM StudentRecord;
VAR
  name  : String;
  form  : Integer;
  score : Real;
BEGIN
  name  := 'Bwalya Mwale';
  form  := 3;
  score := 74.5;
  WriteLn('Name: ', name);
  WriteLn('Form: ', form);
  WriteLn('Score: ', score:0:1, '%');
END.`,insight:`:0:1 means minimum 0 characters wide, 1 decimal place. This is Pascal's way of formatting real numbers. Without it, 74.5 might print as 7.4500000E+01.`}},{id:`p3`,title:`IF...THEN...ELSE`,form:2,lesson:`Programs need to make decisions. Without conditions, every program would always do the same thing no matter what input it receives.

The IF...THEN...ELSE structure is Pascal's way of asking a question and acting differently depending on the answer. Think of it like a guard at a school gate: IF you have your ID THEN you can enter, ELSE you must go to the office.

How it works step by step:
Pascal evaluates the condition after IF. A condition is either TRUE or FALSE.
If TRUE, the code after THEN runs.
If FALSE, Pascal skips to ELSE or moves on.
You can chain conditions using ELSE IF to check several possibilities.

Very important Pascal rule: there must be NO semicolon on the line before ELSE. Writing WriteLn('Pass'); ELSE causes a compile error because the semicolon ends the IF statement early — then ELSE appears alone with nothing to attach to. This is one of the most common errors in Zambian exam answers.

Comparison operators you can use: = (equal), <> (not equal), > (greater than), < (less than), >= (greater or equal), <= (less or equal).

Always check from HIGHEST value to LOWEST when chaining conditions. If you check >= 50 before >= 80, a student scoring 90 gets the wrong grade.`,code:`PROGRAM GradeChecker;
VAR mark : Integer;
BEGIN
  mark := 72;
  IF mark >= 80 THEN
    WriteLn('Distinction')
  ELSE IF mark >= 65 THEN
    WriteLn('Merit')
  ELSE IF mark >= 50 THEN
    WriteLn('Credit')
  ELSE
    WriteLn('Fail');
END.`,explanation:`The IF checks a condition. If TRUE, the THEN block runs. Otherwise it tries the next ELSE IF, or falls to the final ELSE.`,question:{text:`Bwalya scored 58 on her exam at Choma Secondary School. What message will she receive?`,options:[`Distinction`,`Merit`,`Credit`,`Fail`],answer:2,hint:`58 is ≥50 but not ≥65. Which branch does that satisfy?`},q2:{text:`In Pascal, what is wrong with: IF mark > 50 THEN WriteLn('Pass'); ELSE WriteLn('Fail');`,options:[`Nothing — correct`,`Semicolon before ELSE causes error`,`THEN is missing`,`WriteLn needs brackets`],answer:1,hint:`There must be NO semicolon before ELSE in Pascal.`},q3:{text:`A student scores 80. Which branch runs: IF mark > 80 THEN WriteLn('A') ELSE IF mark >= 80 THEN WriteLn('B') ELSE WriteLn('C')?`,options:[`A`,`B`,`C`,`Both A and B`],answer:1,hint:`80 > 80 is FALSE (strict greater than). So it falls to ELSE IF mark >= 80 which is TRUE.`},trace:[{line:2,explanation:`VAR mark : Integer; — declares mark. No value yet.`,vars:{mark:`?`},output:null},{line:4,explanation:`mark := 72; — assigns 72 to mark.`,vars:{mark:72},output:null},{line:5,explanation:`IF mark >= 80 — evaluates: is 72 >= 80? FALSE. Skip the THEN branch.`,vars:{mark:72,test:`72 >= 80 → FALSE`},output:null},{line:7,explanation:`ELSE IF mark >= 65 — evaluates: is 72 >= 65? TRUE. Enter this branch.`,vars:{mark:72,test:`72 >= 65 → TRUE`},output:null},{line:8,explanation:`WriteLn('Merit') — condition was true so this prints. All remaining ELSE branches are skipped.`,vars:{mark:72},output:`Merit`}],worked:{scenario:`ECZ uses a grading system: 80+ = Distinction, 65–79 = Merit, 50–64 = Credit, below 50 = Fail.`,problem:`Write a Pascal program that reads a mark and prints the correct grade for a student at Kabulonga Boys.`,steps:[{explain:`Declare a variable for the mark and read it from the user.`,code:`VAR mark : Integer;
BEGIN
  ReadLn(mark);`},{explain:`Check the highest grade first — IF 80 or above, print Distinction.`,code:`IF mark >= 80 THEN
  WriteLn('Distinction')`},{explain:`Chain the remaining grades with ELSE IF. Each checks a lower threshold.`,code:`ELSE IF mark >= 65 THEN
  WriteLn('Merit')
ELSE IF mark >= 50 THEN
  WriteLn('Credit')
ELSE
  WriteLn('Fail');`}],answer:`For mark=72: 72>=80 is FALSE, 72>=65 is TRUE → prints Merit.`,answerCode:`PROGRAM GradeChecker;
VAR mark : Integer;
BEGIN
  ReadLn(mark);
  IF mark >= 80 THEN
    WriteLn('Distinction')
  ELSE IF mark >= 65 THEN
    WriteLn('Merit')
  ELSE IF mark >= 50 THEN
    WriteLn('Credit')
  ELSE
    WriteLn('Fail');
END.`,insight:`Always check from highest to lowest. If you checked >= 50 first, a student scoring 80 would get 'Credit' and never reach the Distinction branch.`}},{id:`p4`,title:`FOR Loops`,form:2,lesson:`A loop is a block of code that repeats automatically. Without loops, printing 100 student names would require 100 WriteLn statements. With a loop, you write it once and let the computer repeat it.

The FOR loop is the simplest Pascal loop. Use it when you know EXACTLY how many times to repeat. It has a counter that starts at one value and counts up to another.

Syntax: FOR counter := start TO finish DO statement

How it works:
1. Pascal sets counter to the start value
2. Checks: is counter <= finish? If YES, runs the statement
3. After running, automatically adds 1 to counter
4. When counter exceeds finish, the loop stops

For more than one statement inside the loop, wrap them in BEGIN...END like this:
FOR i := 1 TO 5 DO
BEGIN
  WriteLn(i);
  WriteLn('hello');
END;

Without BEGIN...END, only the first statement after DO belongs to the loop. This is a very common exam mistake.

The FOR loop is ideal for printing multiplication tables, processing every item in an array, counting totals, and repeating a task a fixed number of times.`,code:`PROGRAM MarketStall;
VAR item, price : Integer;
BEGIN
  WriteLn('Soweto Market Prices:');
  FOR item := 1 TO 5 DO
  BEGIN
    price := item * 5;
    WriteLn('Item ', item, ': K', price);
  END;
END.`,explanation:`FOR item := 1 TO 5 DO runs the block 5 times. Each iteration, item increases by 1 automatically.`,question:{text:`FOR i := 1 TO 4 DO WriteLn(i * 3). What are the four numbers printed?`,options:[`1, 2, 3, 4`,`3, 6, 9, 12`,`4, 8, 12, 16`,`1, 3, 9, 27`],answer:1,hint:`Multiply each value of i (1,2,3,4) by 3.`},q2:{text:`How many times does FOR i := 5 TO 5 DO WriteLn(i) execute?`,options:[`0 times`,`1 time`,`5 times`,`Infinite`],answer:1,hint:`When start equals finish the loop runs exactly once.`},q3:{text:`A Soweto Market stall has 12 items. Which FOR loop header processes all of them?`,options:[`FOR i := 0 TO 12 DO`,`FOR i := 1 TO 12 DO`,`FOR i := 1 TO 11 DO`,`FOR i := 12 DOWNTO 1 DO`],answer:1,hint:`Pascal arrays and loops typically start at 1. TO 12 includes the 12th item.`},trace:[{line:3,explanation:`item := 0, price := 0 — loop counter and price start uninitialised. BEGIN starts execution.`,vars:{item:`?`,price:`?`},output:null},{line:5,explanation:`FOR item := 1 TO 5 DO — loop starts. item = 1. Condition 1 <= 5 is TRUE.`,vars:{item:1,price:`?`},output:null},{line:7,explanation:`price := item * 5 → 1 * 5 = 5.`,vars:{item:1,price:5},output:null},{line:8,explanation:`WriteLn('Item ', item, ': K', price) → prints Item 1: K5.`,vars:{item:1,price:5},output:`Item 1: K5`},{line:5,explanation:`item increments to 2. Condition 2 <= 5 TRUE. price := 2*5 = 10.`,vars:{item:2,price:10},output:`Item 1: K5
Item 2: K10`},{line:5,explanation:`item = 3. price = 15. Prints Item 3: K15.`,vars:{item:3,price:15},output:`Item 1: K5
Item 2: K10
Item 3: K15`},{line:5,explanation:`item = 4. price = 20. item = 5. price = 25. Loop finishes when item reaches 6 > 5.`,vars:{item:5,price:25},output:`Item 1: K5
Item 2: K10
Item 3: K15
Item 4: K20
Item 5: K25`}],worked:{scenario:`A teacher at Matero Boys wants to print the 5-times table to display on the classroom wall.`,problem:`Use a FOR loop to print the 5-times table from 1×5 to 12×5.`,steps:[{explain:`Declare a counter variable i and a result variable.`,code:`VAR i, result : Integer;`},{explain:`Loop from 1 to 12 using FOR...TO...DO.`,code:`FOR i := 1 TO 12 DO`},{explain:`Inside the loop, calculate the result and print a formatted line.`,code:`BEGIN
  result := i * 5;
  WriteLn(i, ' x 5 = ', result);
END;`}],answer:`Prints: 1 x 5 = 5 / 2 x 5 = 10 / ... / 12 x 5 = 60`,answerCode:`PROGRAM TimesTable;
VAR i, result : Integer;
BEGIN
  FOR i := 1 TO 12 DO
  BEGIN
    result := i * 5;
    WriteLn(i, ' x 5 = ', result);
  END;
END.`,insight:`When a FOR loop body has more than one statement, wrap it in BEGIN...END. Without them, only the first statement is part of the loop.`}},{id:`p5`,title:`WHILE Loops`,form:2,lesson:`The WHILE loop is more flexible than the FOR loop — it does not require a fixed number of repetitions. It keeps running as long as a condition remains TRUE and stops the moment the condition becomes FALSE.

Syntax: WHILE condition DO statement

Key difference from FOR:
FOR loop: you decide in advance how many times it runs.
WHILE loop: it keeps running until something changes.

How it works:
1. Pascal checks the condition BEFORE running the body
2. If TRUE, runs the body
3. Goes back and checks the condition again
4. If FALSE, exits the loop

A WHILE loop can run ZERO times if the condition is already FALSE at the start.

The most dangerous mistake: forgetting to update the condition variable inside the loop. If litres never increases, then litres < 100 is always TRUE and the loop runs forever — this is called an infinite loop. Your program appears to freeze and you must force-quit it.

Always ensure something changes inside the loop that will eventually make the condition FALSE. In Zambia, WHILE loops model real situations: filling a ZESCO water tank, prompting a user to enter valid data, or reading records from a file until you reach the end.`,code:`PROGRAM WaterTank;
VAR litres : Integer;
BEGIN
  litres := 0;
  WriteLn('Filling borehole tank at Kafue:');
  WHILE litres < 100 DO
  BEGIN
    litres := litres + 20;
    WriteLn('Tank level: ', litres, 'L');
  END;
  WriteLn('Tank is full!');
END.`,explanation:`The loop keeps running while litres < 100. Each iteration adds 20L. When litres reaches 100 the condition is FALSE and the loop stops.`,question:{text:`How many times does the WHILE loop above execute before stopping?`,options:[`4 times`,`5 times`,`6 times`,`It never stops`],answer:1,hint:`20, 40, 60, 80, 100 — count the steps.`},q2:{text:`What is the key danger if the condition variable is never updated inside a WHILE loop?`,options:[`Runs zero times`,`Compile error`,`Infinite loop — program freezes`,`Runs once`],answer:2,hint:`If the condition never becomes FALSE the loop never exits.`},q3:{text:`WHILE litres < 50 DO litres := litres + 15; starts with litres=0. What is litres when it ends?`,options:[`45`,`50`,`60`,`15`],answer:2,hint:`0→15→30→45→60. At 60, the condition 60 < 50 is FALSE so the loop stops.`},trace:[{line:3,explanation:`litres := 0; — tank starts empty.`,vars:{litres:0},output:null},{line:6,explanation:`WHILE litres < 100 — check: 0 < 100? TRUE. Enter loop body.`,vars:{litres:0},output:null},{line:8,explanation:`litres := litres + 20 → 0 + 20 = 20.`,vars:{litres:20},output:null},{line:9,explanation:`WriteLn('Tank level: ', litres, 'L') → prints Tank level: 20L.`,vars:{litres:20},output:`Tank level: 20L`},{line:6,explanation:`Check: 20 < 100? TRUE. litres := 40. Print Tank level: 40L.`,vars:{litres:40},output:`Tank level: 20L
Tank level: 40L`},{line:6,explanation:`60 < 100 TRUE → 60. 80 < 100 TRUE → 80. 100 < 100? FALSE — exit loop.`,vars:{litres:100},output:`Tank level: 20L
Tank level: 40L
Tank level: 60L
Tank level: 80L
Tank level: 100L`},{line:11,explanation:`WriteLn('Tank is full!') — loop has exited. Prints final message.`,vars:{litres:100},output:`Tank level: 20L
Tank level: 40L
Tank level: 60L
Tank level: 80L
Tank level: 100L
Tank is full!`}],worked:{scenario:`ZESCO monitors water levels in a Kafue dam. They need to track filling until it reaches capacity.`,problem:`Write a WHILE loop that adds 15 litres per pump cycle until the tank reaches or exceeds 100 litres. Print the level after each cycle.`,steps:[{explain:`Initialise the water level to 0 before the loop.`,code:`litres := 0;`},{explain:`The WHILE condition checks BEFORE each iteration — stop when litres reaches 100.`,code:`WHILE litres < 100 DO`},{explain:`Inside the loop, add 15 litres and print the current level.`,code:`BEGIN
  litres := litres + 15;
  WriteLn('Level: ', litres, 'L');
END;`},{explain:`After the loop, print the final status.`,code:`WriteLn('Capacity reached!');`}],answer:`Prints levels: 15, 30, 45, 60, 75, 90, 105 — loop exits when 105 >= 100.`,answerCode:`PROGRAM DamMonitor;
VAR litres : Integer;
BEGIN
  litres := 0;
  WHILE litres < 100 DO
  BEGIN
    litres := litres + 15;
    WriteLn('Level: ', litres, 'L');
  END;
  WriteLn('Capacity reached!');
END.`,insight:`The loop may overshoot — 90+15=105, not exactly 100. A WHILE loop stops when the condition becomes false, not when it hits the exact target value.`}},{id:`p6`,title:`Procedures & Functions`,form:3,lesson:`As programs grow larger, writing all code in one long block becomes messy. Pascal solves this with PROCEDURES and FUNCTIONS — named blocks of code you can call from anywhere in your program.

A PROCEDURE performs an action but does NOT return a value. It is like asking someone to print the report — they do the task and that is it.

A FUNCTION performs a calculation and RETURNS a value back to the caller. It is like asking what is the total — they calculate and give you the answer.

Both can accept PARAMETERS — values you pass in when calling them. Parameters let the same procedure or function work with different data each time.

How to return a value from a Pascal function: Pascal does NOT use a return keyword. Instead, you assign the result to the function's own name:
Revenue := tonnes * pricePerTonne;

This is unique to Pascal and is a common source of mistakes for students who have seen other languages first.

Why use procedures and functions?
Reusability: write the code once, call it many times.
Readability: your main program reads like a list of clear actions.
Avoiding repetition: change logic in one place and it updates everywhere.

In Zambia, you might write a function CalcTax(income) that computes ZRA tax and a procedure PrintReceipt(amount) that displays a formatted receipt.`,code:`PROGRAM CopperCalc;
FUNCTION Revenue(t : Real) : Real;
CONST price = 8500.0;
BEGIN
  Revenue := t * price;
END;
PROCEDURE PrintReport(t, r : Real);
BEGIN
  WriteLn('Tonnes: ', t:0:1);
  WriteLn('Revenue: $', r:0:2);
END;
VAR tonnes, rev : Real;
BEGIN
  tonnes := 12.5;
  rev := Revenue(tonnes);
  PrintReport(tonnes, rev);
END.`,explanation:`Revenue is a FUNCTION — it takes input and returns a value. PrintReport is a PROCEDURE — it only prints.`,ecz:`ECZ loves asking you to write a FUNCTION that returns a value (e.g. calculate VAT or tax). Know the difference between PROCEDURE (no return) and FUNCTION (returns a value using FunctionName := value).`,question:{text:`A Kitwe mine extracted 20 tonnes. Using Revenue(20) at $8,500/tonne, what is returned?`,options:[`$85,000`,`$170,000`,`$8,500`,`$425,000`],answer:1,hint:`20 × 8500 = ?`},q2:{text:`Which correctly defines a Pascal FUNCTION returning an Integer?`,options:[`PROCEDURE Calc(n:Integer):Integer;`,`FUNCTION Calc(n:Integer);`,`FUNCTION Calc(n:Integer):Integer;`,`FUNCTION Calc:Integer(n);`],answer:2,hint:`Include FUNCTION keyword, name, parameters, colon, then return type.`},q3:{text:`Inside a Pascal FUNCTION named Total, how do you return the value 99?`,options:[`return 99;`,`RETURN := 99;`,`Total := 99;`,`EXIT(99);`],answer:2,hint:`In Pascal, assign to the function name itself: Total := 99.`},trace:[{line:2,explanation:`FUNCTION Revenue(t:Real):Real — defines a function. Not called yet, just stored in memory.`,vars:{},output:null},{line:13,explanation:`tonnes := 12.5; — assigns the input value.`,vars:{tonnes:12.5,rev:`?`},output:null},{line:14,explanation:`rev := Revenue(tonnes) — calls Revenue(12.5). Jumps into the function.`,vars:{tonnes:12.5,t:12.5,rev:`?`},output:null},{line:4,explanation:`CONST price = 8500.0. Revenue := 12.5 * 8500.0 = 106250.0. Return value set.`,vars:{tonnes:12.5,t:12.5,price:8500,rev:`106250.0 (returning)`},output:null},{line:14,explanation:`Back in main: rev receives the returned value 106250.0.`,vars:{tonnes:12.5,rev:106250},output:null},{line:15,explanation:`PrintReport(tonnes, rev) called — jumps into the PROCEDURE.`,vars:{tonnes:12.5,rev:106250},output:null},{line:8,explanation:`WriteLn('Tonnes: ', t:0:1) prints the tonnage.`,vars:{t:12.5,r:106250},output:`Tonnes: 12.5`},{line:9,explanation:`WriteLn('Revenue: $', r:0:2) prints the revenue formatted to 2 decimal places.`,vars:{t:12.5,r:106250},output:`Tonnes: 12.5
Revenue: $106250.00`}],worked:{scenario:`A Zambian tax system calculates income tax at 25% on amounts above K5,000.`,problem:`Write a FUNCTION called CalcTax that takes gross income as a Real and returns the tax amount. Test it with K12,000.`,steps:[{explain:`Define the function with its parameter and return type. The return type comes after the colon.`,code:`FUNCTION CalcTax(gross : Real) : Real;`},{explain:`Inside the function, calculate tax on the amount above K5,000. Assign to the function name to set the return value.`,code:`BEGIN
  CalcTax := (gross - 5000) * 0.25;
END;`},{explain:`In the main block, call the function and print the result.`,code:`WriteLn('Tax: K', CalcTax(12000):0:2);`}],answer:`Tax on K12,000 = (12000 - 5000) × 0.25 = 7000 × 0.25 = K1,750.00`,answerCode:`PROGRAM TaxCalc;
FUNCTION CalcTax(gross : Real) : Real;
BEGIN
  CalcTax := (gross - 5000) * 0.25;
END;
BEGIN
  WriteLn('Tax: K', CalcTax(12000):0:2);
END.`,insight:`In Pascal, you return a value by assigning to the function name itself: CalcTax := value. There is no 'return' keyword like in C++ or Python.`}},{id:`p7`,title:`Arrays in Pascal`,form:3,lesson:`An array is a variable that holds MULTIPLE values of the SAME data type under a single name. Instead of declaring 30 separate variables for 30 student scores, you declare one array that holds all 30.

Think of an array as a row of labelled boxes. Each box has an index number. In Pascal, array indices start at 1 by default.

Declaration: VAR scores : ARRAY[1..30] OF Integer;

Accessing elements:
scores[1] is the first element
scores[15] is the 15th element
scores[30] is the last element

Use a FOR loop to process all elements:
FOR i := 1 TO 30 DO
  total := total + scores[i];

Common array operations tested in ECZ exams:
1. Sum all elements: add each to a running total variable
2. Find maximum: start with max := scores[1] then compare each element
3. Find minimum: same idea but look for smaller values
4. Count matching items: use an IF inside the loop and increment a counter
5. Search: loop comparing each element to a target value

Arrays are used everywhere: storing student marks, tracking daily rainfall, holding product prices at a Lusaka supermarket, or keeping match scores for the Chipolopolo squad.`,code:`PROGRAM RainfallTracker;
VAR
  rain : ARRAY[1..6] OF Real;
  i : Integer; total : Real;
BEGIN
  { Lusaka monthly rainfall mm }
  rain[1]:=220; rain[2]:=180; rain[3]:=90;
  rain[4]:=20;  rain[5]:=5;  rain[6]:=0;
  total := 0;
  FOR i := 1 TO 6 DO
    total := total + rain[i];
  WriteLn('Total: ', total:0:1, 'mm');
END.`,explanation:`ARRAY[1..6] holds 6 values. Loop index i visits each element from 1 to 6. total accumulates the rainfall sum.`,ecz:`Arrays appear every year. Common question: declare an array, fill it in a loop, find the largest/smallest value. Always use 1-based indexing in Pascal.`,question:{text:`What is rain[3] in the program above?`,options:[`180`,`90`,`20`,`5`],answer:1,hint:`rain[1]=220, rain[2]=180, rain[3]=?`},q2:{text:`How do you declare a Pascal array to hold 10 student names?`,options:[`VAR n:ARRAY(10) OF String;`,`VAR n:ARRAY[1..10] OF String;`,`VAR n[10]:String;`,`VAR n:STRING[10];`],answer:1,hint:`Pascal array syntax: ARRAY[lower..upper] OF Type.`},q3:{text:`What is the correct loop to sum all values in rain[1..6] into total?`,options:[`FOR i:=0 TO 6 DO total:=total+rain[i];`,`FOR i:=1 TO 6 DO total:=total+rain[i];`,`FOR i:=1 TO 5 DO total:=total+rain[i];`,`WHILE i<6 DO total:=rain[i];`],answer:1,hint:`Pascal 1-based arrays: loop from 1 TO 6 to visit all 6 elements.`},trace:[{line:4,explanation:`rain : ARRAY[1..6] OF Real — declares array of 6 real numbers. All slots empty.`,vars:{rain:`[?,?,?,?,?,?]`,total:`?`,i:`?`},output:null},{line:8,explanation:`rain[1]:=220 through rain[6]:=0 — all 6 slots assigned.`,vars:{rain:`[220,180,90,20,5,0]`,total:`?`,i:`?`},output:null},{line:9,explanation:`total := 0 — accumulator initialised.`,vars:{rain:`[220,180,90,20,5,0]`,total:0,i:`?`},output:null},{line:10,explanation:`FOR i:=1 TO 6. i=1: total := 0 + 220 = 220.`,vars:{rain:`[220,180,90,20,5,0]`,total:220,i:1},output:null},{line:10,explanation:`i=2: total := 220 + 180 = 400.`,vars:{total:400,i:2},output:null},{line:10,explanation:`i=3: total = 490. i=4: total = 510. i=5: total = 515. i=6: total = 515. Loop ends.`,vars:{total:515,i:6},output:null},{line:12,explanation:`WriteLn('Total: ', total:0:1, 'mm') — total:0:1 formats to 1 decimal place.`,vars:{total:515},output:`Total: 515.0mm`}],worked:{scenario:`A Form 3 class at Sikombe Secondary sat 5 maths tests. Store and find the highest score.`,problem:`Store scores [78, 65, 91, 54, 83] in an array and find and print the highest score.`,steps:[{explain:`Declare the array and helper variables.`,code:`VAR scores : ARRAY[1..5] OF Integer;
    i, highest : Integer;`},{explain:`Assign the five scores.`,code:`scores[1]:=78; scores[2]:=65; scores[3]:=91;
scores[4]:=54; scores[5]:=83;`},{explain:`Initialise highest to the first element, then loop comparing.`,code:`highest := scores[1];
FOR i := 2 TO 5 DO
  IF scores[i] > highest THEN
    highest := scores[i];`},{explain:`Print the result.`,code:`WriteLn('Highest: ', highest);`}],answer:`Prints: Highest: 91`,answerCode:`PROGRAM FindHighest;
VAR scores : ARRAY[1..5] OF Integer;
    i, highest : Integer;
BEGIN
  scores[1]:=78; scores[2]:=65; scores[3]:=91;
  scores[4]:=54; scores[5]:=83;
  highest := scores[1];
  FOR i := 2 TO 5 DO
    IF scores[i] > highest THEN
      highest := scores[i];
  WriteLn('Highest: ', highest);
END.`,insight:`Initialise highest to scores[1] (not 0), then loop from index 2. This works correctly even if all scores are negative.`}},{id:`p8`,title:`Records`,form:4,lesson:`While an array stores values of the SAME type, a RECORD groups values of DIFFERENT types into one unit — like one row in a spreadsheet.

A student record might contain a name (String), a form number (Integer), an exam score (Real), and enrolment status (Boolean). These different types cannot go in one array — a record holds them all together under one variable name.

The process has two steps:
Step 1: Define the record TYPE — the blueprint
Step 2: Declare a VARIABLE of that type — the actual storage

TYPE must come BEFORE VAR in your program. The correct order is:
PROGRAM then CONST then TYPE then VAR then procedures then BEGIN

Accessing fields uses DOT NOTATION: pupil.name, pupil.score
The dot connects the variable name to the field inside it.

You can combine records with arrays to create a list of records:
VAR myClass : ARRAY[1..30] OF StudentRec;
Then myClass[5].name gives you the 5th student's name.

Records model real-world data perfectly: hospital patient records, bank account details, product inventory — all have mixed data types that naturally belong together.`,code:`PROGRAM SchoolRecord;
TYPE
  StudentRec = RECORD
    name  : String;
    form  : Integer;
    score : Real;
  END;
VAR pupil : StudentRec;
BEGIN
  pupil.name  := 'Lombe Mutale';
  pupil.form  := 3;
  pupil.score := 88.5;
  WriteLn('Pupil: ', pupil.name);
  WriteLn('Form:  ', pupil.form);
  WriteLn('Score: ', pupil.score:0:1, '%');
END.`,explanation:`TYPE defines the record structure. Fields are accessed with dot notation (pupil.name). Records are similar to a single row in a spreadsheet.`,ecz:`Records come up in Form 4 papers. Expect: define a RECORD type, declare a variable, assign fields using dot notation, and print them.`,question:{text:`Which statement correctly sets the student's form to 4?`,options:[`form := 4;`,`pupil := 4;`,`pupil.form := 4;`,`StudentRec.form := 4;`],answer:2,hint:`Fields inside a record are accessed using the variable name and a dot.`},q2:{text:`Where must the TYPE keyword for records be declared?`,options:[`Inside BEGIN...END`,`After VAR`,`Before VAR`,`After PROGRAM header, before CONST`],answer:2,hint:`Order: PROGRAM → CONST → TYPE → VAR → procedures → BEGIN...END`},q3:{text:`VAR class:ARRAY[1..30] OF StudentRec; How do you set the 5th student's name?`,options:[`class.name[5]:='Chanda';`,`class[5].name:='Chanda';`,`StudentRec[5].name:='Chanda';`,`name[5]:='Chanda';`],answer:1,hint:`Index into the array first: class[5], then dot notation: class[5].name`},trace:[{line:3,explanation:`TYPE StudentRec = RECORD — defines the record blueprint. No memory allocated yet.`,vars:{},output:null},{line:8,explanation:`VAR pupil : StudentRec — now memory is allocated for one StudentRec variable with 3 fields.`,vars:{"pupil.name":`?`,"pupil.form":`?`,"pupil.score":`?`},output:null},{line:10,explanation:`pupil.name := 'Lombe Mutale' — dot notation assigns to the name field.`,vars:{"pupil.name":`Lombe Mutale`,"pupil.form":`?`,"pupil.score":`?`},output:null},{line:11,explanation:`pupil.form := 3 — assigns to the form field.`,vars:{"pupil.name":`Lombe Mutale`,"pupil.form":3,"pupil.score":`?`},output:null},{line:12,explanation:`pupil.score := 88.5 — assigns to the score field. Record is now fully populated.`,vars:{"pupil.name":`Lombe Mutale`,"pupil.form":3,"pupil.score":88.5},output:null},{line:13,explanation:`WriteLn prints all three fields in one line.`,vars:{"pupil.name":`Lombe Mutale`,"pupil.form":3,"pupil.score":88.5},output:`Lombe Mutale Form 3: 88.5%`}],worked:{scenario:`A school needs to store and display one student's full record including name, form, and score.`,problem:`Define a StudentRec record with name (String), form (Integer), score (Real). Create one record for 'Mwila Banda', Form 4, score 88.5 and print it.`,steps:[{explain:`Define the record type in the TYPE section (before VAR).`,code:`TYPE
  StudentRec = RECORD
    name  : String;
    form  : Integer;
    score : Real;
  END;`},{explain:`Declare a variable of that type.`,code:`VAR pupil : StudentRec;`},{explain:`Assign each field using dot notation.`,code:`pupil.name  := 'Mwila Banda';
pupil.form  := 4;
pupil.score := 88.5;`},{explain:`Print all fields.`,code:`WriteLn(pupil.name, ' Form ', pupil.form, ': ', pupil.score:0:1, '%');`}],answer:`Prints: Mwila Banda Form 4: 88.5%`,answerCode:`PROGRAM RecordDemo;
TYPE
  StudentRec = RECORD
    name : String; form : Integer; score : Real;
  END;
VAR pupil : StudentRec;
BEGIN
  pupil.name := 'Mwila Banda';
  pupil.form := 4; pupil.score := 88.5;
  WriteLn(pupil.name, ' Form ', pupil.form, ': ', pupil.score:0:1, '%');
END.`,insight:`TYPE must come before VAR in the declaration section. A record is like a row in a spreadsheet — one variable that holds multiple related pieces of data.`}},{id:`p9`,title:`Constants (CONST)`,form:2,lesson:`A constant is a named value that NEVER changes during the program. You declare it once in the CONST section and use its name everywhere.

Compare these two approaches:
Without CONST: total := 850 * 3;
With CONST: total := FeePerTerm * NumTerms;

The second version is far clearer — anyone reading it instantly understands what the numbers mean. If the school fee changes from K850 to K950, you change ONE line instead of hunting through the entire program.

Common uses of constants in Zambian programs:
School fees and term counts, ZRA tax rates (16% VAT), maximum class size (40 students), passing mark threshold (50%), and mathematical values like PI.

Constants vs Variables:
Variables are declared in VAR and can be changed with :=
Constants are declared in CONST and CANNOT be changed. Trying to assign a new value to a constant causes a compile error.

Pascal comments use curly braces { } or (* *). They are ignored by the compiler and serve as notes for the programmer. Always comment your constants:
CONST
  FeePerTerm = 850; { School fees in Kwacha per term }
  VATRate = 0.16;   { ZRA standard VAT rate }`,code:`PROGRAM SchoolFees;
CONST
  FeePerTerm  = 850;     { Kwacha }
  NumTerms    = 3;
  LateFeePct  = 0.10;   { 10% penalty }
VAR
  totalFees, lateFee, grandTotal : Real;
BEGIN
  totalFees := FeePerTerm * NumTerms;
  lateFee   := totalFees * LateFeePct;
  grandTotal := totalFees + lateFee;
  WriteLn('Annual fees:  K', totalFees:0:2);
  WriteLn('Late penalty: K', lateFee:0:2);
  WriteLn('Grand total:  K', grandTotal:0:2);
END.`,explanation:`CONST values cannot be changed by the program. Using named constants like FeePerTerm is clearer than typing 850 everywhere. Curly braces { } are Pascal comments.`,question:{text:`What is the grand total printed by the program above?`,options:[`K2,550`,`K2,805`,`K2,975`,`K3,000`],answer:1,hint:`3 × 850 = 2550, late fee = 2550 × 0.10 = 255, total = 2550 + 255.`},q2:{text:`Why use CONST VAT=0.16 instead of 0.16 directly in code?`,options:[`Constants are faster`,`One change updates every use`,`Constants use less memory`,`Pascal requires it`],answer:1,hint:`Named constants make code easier to maintain — change one line, updates everywhere.`},q3:{text:`Can you do this: VAT := 0.20; where VAT was declared as CONST?`,options:[`Yes — constants can be updated`,`No — compile error`,`Yes — inside a procedure only`,`No — but you can use a same-named variable`],answer:1,hint:`CONST values are fixed at compile time. Any attempt to reassign causes a compile error.`},trace:[{line:3,explanation:`CONST declarations — FeePerTerm=850, NumTerms=3, LatePct=0.10. These are fixed; they cannot be changed.`,vars:{FeePerTerm:850,NumTerms:3,LatePct:.1},output:null},{line:8,explanation:`VAR section — total, late, grand declared but not yet assigned.`,vars:{total:`?`,late:`?`,grand:`?`},output:null},{line:10,explanation:`total := FeePerTerm * NumTerms → 850 * 3 = 2550.`,vars:{total:2550,late:`?`,grand:`?`},output:null},{line:11,explanation:`late := total * LatePct → 2550 * 0.10 = 255.`,vars:{total:2550,late:255,grand:`?`},output:null},{line:12,explanation:`grand := total + late → 2550 + 255 = 2805.`,vars:{total:2550,late:255,grand:2805},output:null},{line:13,explanation:`WriteLn prints annual fees.`,vars:{total:2550},output:`Annual fees:  K2550.00`},{line:14,explanation:`WriteLn prints late penalty.`,vars:{late:255},output:`Annual fees:  K2550.00
Late penalty: K255.00`},{line:15,explanation:`WriteLn prints grand total.`,vars:{grand:2805},output:`Annual fees:  K2550.00
Late penalty: K255.00
Grand total:  K2805.00`}],worked:{scenario:`A tuck shop at Munali needs to calculate prices with VAT. The VAT rate is 16% and must be easy to update.`,problem:`Use a CONST for the VAT rate. Calculate and print the VAT-inclusive price for a K25 item.`,steps:[{explain:`Declare the VAT rate as a constant so it's easy to change later.`,code:`CONST VATRate = 0.16;`},{explain:`Declare variables for the base price and final price.`,code:`VAR base, final : Real;`},{explain:`Assign the base price and calculate the final price using the constant.`,code:`base  := 25.0;
final := base + (base * VATRate);`},{explain:`Print the result formatted to 2 decimal places.`,code:`WriteLn('Price with VAT: K', final:0:2);`}],answer:`K25 + K25×0.16 = K25 + K4 = K29.00`,answerCode:`PROGRAM TuckShop;
CONST VATRate = 0.16;
VAR base, final : Real;
BEGIN
  base  := 25.0;
  final := base + (base * VATRate);
  WriteLn('Price with VAT: K', final:0:2);
END.`,insight:`If VAT changes to 18%, you update one line: VATRate = 0.18. Without CONST you would have to find every 0.16 in the code — easy to miss one.`}},{id:`p10`,title:`CASE Statement`,form:3,lesson:`The CASE statement provides a clean, readable alternative to long IF...ELSE IF chains. Instead of checking the same variable against many different values with repeated IF statements, CASE lists all possible values neatly in one place.

When to use CASE vs IF:
Use CASE when testing ONE variable against MULTIPLE specific values.
Use IF when conditions involve ranges (>= 80), multiple variables, or complex logic.
CASE only works with ordinal types: Integer, Char, Boolean — NOT with Real or String.

Structure:
CASE variable OF
  value1: action;
  value2: action;
  value3, value4: shared action;
  ELSE default_action;
END;

The ELSE clause handles any value not matching any listed case — always include it.

After the matching case executes, Pascal automatically exits the CASE block. There is NO break statement needed — this is a key difference from C++.

Examiner tip: you may be asked to convert an IF...ELSE IF chain into CASE. Remember that CASE can only handle exact values, not ranges. IF mark >= 80 cannot directly become a CASE because marks span a range, not a single specific value.

CASE is commonly used for menu systems, day-of-week programs, grade letter lookups, and month name conversions.`,code:`PROGRAM ProvinceCapital;
VAR province : Integer;
BEGIN
  Write('Enter province number (1-4): ');
  ReadLn(province);
  CASE province OF
    1: WriteLn('Lusaka     - Capital: Lusaka');
    2: WriteLn('Copperbelt - Capital: Ndola');
    3: WriteLn('Southern   - Capital: Livingstone');
    4: WriteLn('Eastern    - Capital: Chipata');
    ELSE WriteLn('Unknown province number.');
  END;
END.`,explanation:`CASE checks one variable (province) against several values. It is neater than four ELSE IF blocks. ELSE handles any value not listed. END closes the CASE block.`,ecz:`CASE statements are tested as an alternative to IF-ELSE. Expect to convert an IF-ELSE chain into a CASE, or trace what a CASE outputs for a given input.`,question:{text:`What output does the program produce when the user enters 3?`,options:[`Lusaka - Capital: Lusaka`,`Copperbelt - Capital: Ndola`,`Southern - Capital: Livingstone`,`Unknown province number.`],answer:2,hint:`Case 3 matches the third option.`},q2:{text:`Which C++ keyword handles values not matched by any case in a switch?`,options:[`else`,`otherwise`,`default`,`catch`],answer:2,hint:`default: in a switch is the fallback when no case matches.`},q3:{text:`What happens if you forget break; after a case in a switch statement?`,options:[`Compile error`,`Case is skipped`,`Execution falls through into the next case`,`Switch exits automatically`],answer:2,hint:`Without break, C++ continues into the next case — called fall-through.`},trace:[{line:4,explanation:`ReadLn(day) — user enters 3. day is now 3.`,vars:{day:3},output:null},{line:5,explanation:`CASE day OF — starts checking cases. Is day = 1? No. Is day = 2? No.`,vars:{day:3},output:null},{line:8,explanation:`3: — matches! Execute WriteLn('Southern - Capital: Livingstone').`,vars:{day:3},output:`Southern - Capital: Livingstone`},{line:9,explanation:`After the matching case executes, CASE statement ends. No other cases run.`,vars:{day:3},output:`Southern - Capital: Livingstone`}],worked:{scenario:`A Zambian geography quiz program asks students to identify province capitals.`,problem:`Use a CASE statement to print the capital city when the user enters a province number (1=Lusaka, 2=Copperbelt, 3=Southern).`,steps:[{explain:`Read the province number from the user.`,code:`VAR choice : Integer;
BEGIN
  ReadLn(choice);`},{explain:`Use CASE to match the number to its capital.`,code:`CASE choice OF
  1: WriteLn('Capital: Lusaka');
  2: WriteLn('Capital: Ndola');
  3: WriteLn('Capital: Livingstone');`},{explain:`Add a ELSE clause for invalid entries.`,code:`ELSE WriteLn('Invalid province number.');
END;`}],answer:`If user enters 2: prints 'Capital: Ndola'. If user enters 5: prints 'Invalid province number.'`,answerCode:`PROGRAM ProvinceQuiz;
VAR choice : Integer;
BEGIN
  ReadLn(choice);
  CASE choice OF
    1: WriteLn('Capital: Lusaka');
    2: WriteLn('Capital: Ndola');
    3: WriteLn('Capital: Livingstone');
  ELSE
    WriteLn('Invalid province number.');
  END;
END.`,insight:`CASE is cleaner than multiple IF...ELSE IF for fixed integer values. However, you cannot use CASE with Real or String variables — only ordinal types.`}},{id:`p11`,title:`REPEAT...UNTIL Loop`,form:3,lesson:`The REPEAT...UNTIL loop is Pascal's third loop type. Like WHILE, it can repeat an unknown number of times. But it has one crucial difference: it ALWAYS runs at least once.

Compare the three Pascal loops:
FOR: runs a fixed number of times you know in advance
WHILE: checks condition BEFORE running — may run zero times
REPEAT...UNTIL: checks condition AFTER running — always runs at least once

The structure:
REPEAT
  statements;
UNTIL condition;

REPEAT...UNTIL does NOT need BEGIN...END — the REPEAT and UNTIL keywords act as the brackets themselves.

Another key difference: the condition is an EXIT condition. The loop STOPS when the condition is TRUE. This is the OPPOSITE of WHILE which runs while the condition is TRUE.

This makes REPEAT...UNTIL perfect for:
PIN entry systems — you must ask at least once before you can check
Menu systems — you must show the menu at least once
Data validation — you must ask for input before checking if it is valid

The Airtel Money PIN example: you always need to ask for the PIN at least once. You cannot check if a PIN is correct before the user has entered anything.

In ECZ exams, expect questions asking you to trace the output of a REPEAT loop, or to explain whether WHILE or REPEAT is more appropriate for a given scenario.`,code:`PROGRAM PinValidator;
VAR pin, attempts : Integer;
BEGIN
  attempts := 0;
  REPEAT
    Write('Enter your Airtel Money PIN: ');
    ReadLn(pin);
    attempts := attempts + 1;
    IF pin <> 1234 THEN
      WriteLn('Wrong PIN. Try again.');
  UNTIL (pin = 1234) OR (attempts = 3);
  IF pin = 1234 THEN
    WriteLn('Access granted!')
  ELSE
    WriteLn('Account locked after 3 attempts.');
END.`,explanation:`REPEAT runs the body first, then checks the condition. It stops when pin=1234 OR attempts reach 3. This models a real PIN entry system like Airtel Money.`,ecz:`REPEAT...UNTIL appears alongside WHILE. The key exam point: REPEAT always runs at least once. Expect to trace output or spot the difference between REPEAT and WHILE.`,question:{text:`What is the key difference between REPEAT...UNTIL and WHILE...DO?`,options:[`REPEAT is faster`,`REPEAT always runs at least once; WHILE may run zero times`,`WHILE always runs at least once`,`They are identical`],answer:1,hint:`REPEAT checks the condition AFTER running the body. WHILE checks BEFORE.`},q2:{text:`What does REPEAT x:=x+1; UNTIL x>3; produce if x starts at 1?`,options:[`x=1`,`x=3`,`x=4`,`Infinite loop`],answer:2,hint:`1→2→3→4. At x=4, condition x>3 is TRUE so the loop stops.`},q3:{text:`REPEAT always runs at least once. WHILE may run zero times. Why?`,options:[`REPEAT is faster`,`REPEAT checks condition AFTER body; WHILE checks BEFORE`,`WHILE requires a counter`,`They are identical`],answer:1,hint:`REPEAT checks AFTER executing. So the body always runs at least once before checking.`},trace:[{line:2,explanation:`x := 1 — initialise x before the REPEAT loop.`,vars:{x:1},output:null},{line:3,explanation:`REPEAT — enter loop body immediately. No condition check yet.`,vars:{x:1},output:null},{line:4,explanation:`WriteLn(x) — prints 1.`,vars:{x:1},output:`1`},{line:5,explanation:`x := x + 1 → x = 2.`,vars:{x:2},output:`1`},{line:6,explanation:`UNTIL x > 3 — check: 2 > 3? FALSE. Loop again.`,vars:{x:2},output:`1`},{line:4,explanation:`WriteLn(2). x := 3. Check: 3 > 3? FALSE. Loop again.`,vars:{x:3},output:`1
2`},{line:4,explanation:`WriteLn(3). x := 4. Check: 4 > 3? TRUE. Exit loop.`,vars:{x:4},output:`1
2
3`}],worked:{scenario:`A program counts down to the start of a Chipolopolo football match.`,problem:`Use REPEAT...UNTIL to count down from 5 to 1 and then print 'Kick off!'`,steps:[{explain:`Initialise the countdown variable.`,code:`VAR n : Integer;
BEGIN
  n := 5;`},{explain:`REPEAT always runs the body at least once before checking the condition.`,code:`REPEAT
  WriteLn(n, '...');
  n := n - 1;
UNTIL n = 0;`},{explain:`After the loop ends, print the final message.`,code:`WriteLn('Kick off!');`}],answer:`Prints: 5... 4... 3... 2... 1... Kick off!`,answerCode:`PROGRAM Countdown;
VAR n : Integer;
BEGIN
  n := 5;
  REPEAT
    WriteLn(n, '...');
    n := n - 1;
  UNTIL n = 0;
  WriteLn('Kick off!');
END.`,insight:`REPEAT...UNTIL exits when the condition is TRUE (opposite of WHILE which exits when FALSE). UNTIL n=0 means 'stop when n reaches 0'.`}},{id:`p12`,title:`Nested Loops`,form:3,lesson:`A nested loop is a loop placed inside another loop. The inner loop runs completely from beginning to end EVERY TIME the outer loop completes one step.

This creates a multiplication effect:
Outer loop runs n times.
For EACH outer iteration, the inner loop runs m times.
Total inner executions = n times m.

Nested loops are used to create 2D structures like grids, tables, and multiplication charts.

Visualising execution step by step:
Outer i = 1: Inner j runs 1, 2, 3 — prints three things on row 1
Outer i = 2: Inner j runs 1, 2, 3 — prints three things on row 2
Outer i = 3: Inner j runs 1, 2, 3 — prints three things on row 3

An important technique: Write(value) stays on the same line. WriteLn moves to the next line. In a grid, use Write inside the inner loop to stay on the same row, then WriteLn after the inner loop ends to move to a new row.

Common nested loop applications:
Multiplication tables — the most common ECZ question
Printing star patterns like pyramids and rectangles
Processing 2D arrays with rows and columns
Comparing every pair of elements in an array

Performance note: a nested loop with outer 1-100 and inner 1-100 runs 10,000 iterations. This is why nested loops can be slow on large datasets.`,code:`PROGRAM TimeTable;
VAR row, col, product : Integer;
BEGIN
  WriteLn('=== Multiplication Table ===');
  FOR row := 1 TO 5 DO
  BEGIN
    FOR col := 1 TO 5 DO
    BEGIN
      product := row * col;
      Write(product:4);
    END;
    WriteLn; { new line after each row }
  END;
END.`,explanation:`The outer loop controls rows (1 to 5). The inner loop controls columns (1 to 5). For row=1 the inner loop runs 5 times. Write without WriteLn stays on the same line.`,ecz:`Nested loops are frequently traced in exams. Given outer 1-3 and inner 1-3, how many times does the inner body run? (Answer: 9). Multiplication tables are a common question.`,question:{text:`When row=3 and col=4 in the nested loop above, what value is printed?`,options:[`7`,`12`,`34`,`9`],answer:1,hint:`product := row * col → 3 × 4 = ?`},q2:{text:`In a nested loop with outer 1 TO 3 and inner 1 TO 4, how many total iterations occur?`,options:[`7`,`12`,`6`,`16`],answer:1,hint:`Total = outer count × inner count = 3 × 4 = 12.`},q3:{text:`In a nested loop, which counter changes fastest?`,options:[`Outer counter`,`Inner counter`,`Both equally`,`Depends on values`],answer:1,hint:`The inner loop completes all its iterations for each single step of the outer loop.`},trace:[{line:4,explanation:`Outer FOR row := 1 TO 3 — row starts at 1.`,vars:{row:1,col:`?`,product:`?`},output:null},{line:6,explanation:`Inner FOR col := 1 TO 4 — col starts at 1. product := 1 * 1 = 1. Print 1.`,vars:{row:1,col:1,product:1},output:`1`},{line:6,explanation:`col = 2: product = 2. col = 3: product = 3. col = 4: product = 4. Inner loop done.`,vars:{row:1,col:4,product:4},output:`1  2  3  4`},{line:4,explanation:`row = 2. Inner loop runs again: products 2,4,6,8.`,vars:{row:2},output:`1  2  3  4
2  4  6  8`},{line:4,explanation:`row = 3. Inner loop runs: products 3,6,9,12. Both loops complete.`,vars:{row:3},output:`1  2  3  4
2  4  6  8
3  6  9  12`}],worked:{scenario:`A teacher wants a multiplication table grid for a classroom display.`,problem:`Use nested FOR loops to print a 3×3 multiplication table (rows 1–3, columns 1–3).`,steps:[{explain:`The outer loop controls the row (first factor).`,code:`FOR row := 1 TO 3 DO`},{explain:`The inner loop runs completely for each row value, controlling the column.`,code:`  FOR col := 1 TO 3 DO`},{explain:`Print each product. Use Write (not WriteLn) to stay on the same line, then WriteLn at end of each row.`,code:`    Write(row * col, '  ');
  WriteLn;`}],answer:`Prints a 3×3 grid: 1 2 3 / 2 4 6 / 3 6 9`,answerCode:`PROGRAM MultiTable;
VAR row, col : Integer;
BEGIN
  FOR row := 1 TO 3 DO
  BEGIN
    FOR col := 1 TO 3 DO
      Write(row * col, '  ');
    WriteLn;
  END;
END.`,insight:`Write stays on the same line; WriteLn moves to the next line. The inner loop completes all 3 columns before the outer loop increments the row.`}},{id:`p13`,title:`String Functions`,form:4,lesson:`Strings in Pascal are sequences of characters. Pascal provides built-in functions to manipulate string data — essential for processing names, addresses, and text input from users.

The key string functions every student must know:

LENGTH(s) returns the number of characters in string s including spaces.
Length('Chanda Mutale') returns 13.

POS(sub, s) finds the position of substring sub inside string s. Returns 0 if not found. Position numbering starts at 1.
Pos(' ', 'Chanda Mutale') returns 7 because the space is at position 7.

COPY(s, start, length) extracts a portion of s. It starts at position start and takes length characters.
Copy('Livingstone', 1, 6) returns 'Living'.
Copy('Livingstone', 7, 4) returns 'ston'.

CONCAT(s1, s2) joins two strings. You can also use the + operator.
Concat('Zam', 'bia') returns 'Zambia'.

UPCASE(c) converts a single CHARACTER to uppercase. This works one character at a time, not on a whole string.

A very common exam question: given 'Chanda Mutale', extract just the first name. The solution: find the space with Pos, then use Copy from position 1 for (spacePos minus 1) characters.

String indices in Pascal start at 1, not 0 — this differs from Python and C++.`,code:`PROGRAM StudentNameTool;
VAR
  fullName, firstName : String;
  spacePos, nameLen   : Integer;
BEGIN
  fullName := 'Chanda Mutale';
  nameLen  := Length(fullName);
  spacePos := Pos(' ', fullName);
  firstName := Copy(fullName, 1, spacePos - 1);
  WriteLn('Full name:  ', fullName);
  WriteLn('Length:     ', nameLen);
  WriteLn('First name: ', firstName);
  WriteLn('Greeting:   Hello, ', firstName, '!');
END.`,explanation:`Length counts all characters including spaces. Pos finds the space position. Copy extracts from position 1 for (spacePos-1) characters to get just the first name.`,ecz:`String functions are tested with Copy, Pos, and Length. Common question: extract a first name from a full name using Pos to find the space and Copy to extract.`,question:{text:`What does Copy('Livingstone', 1, 6) return?`,options:[`Living`,`Livingst`,`stone`,`ngston`],answer:0,hint:`Copy(string, start, length) — start at 1, take 6 characters.`},q2:{text:`What does Pos(' ', 'Chanda Mutale') return?`,options:[`0`,`7`,`8`,`1`],answer:1,hint:`Pos finds the first space. 'Chanda' is 6 chars, space is at position 7.`},q3:{text:`What does Copy('Copperbelt', 1, 6) return?`,options:[`'Copper'`,`'Copperb'`,`'belt'`,`'Copperbelt'`],answer:0,hint:`Copy(string, start, length) — start at 1, take 6 characters: C-o-p-p-e-r.`},trace:[{line:2,explanation:`s := 'Livingstone' — assigns the string.`,vars:{s:`Livingstone`},output:null},{line:3,explanation:`result := Copy(s, 1, 6) — Copy takes 6 characters starting at position 1 (1-based in Pascal).`,vars:{s:`Livingstone`,result:`Living`},output:null},{line:4,explanation:`WriteLn(result) — prints the extracted substring.`,vars:{s:`Livingstone`,result:`Living`},output:`Living`},{line:5,explanation:`pos := Pos('stone', s) — finds where 'stone' starts in 'Livingstone'. L=1,i=2,v=3,i=4,n=5,g=6,s=7.`,vars:{s:`Livingstone`,pos:7},output:`Living`},{line:6,explanation:`WriteLn(pos) — prints position 7.`,vars:{pos:7},output:`Living
7`},{line:7,explanation:`WriteLn(Length(s)) — Length('Livingstone') = 10 characters.`,vars:{},output:`Living
7
10`}],worked:{scenario:`A name validation program checks whether a Zambian student's full name is correctly formatted.`,problem:`Given the string 'Chanda Mutale', extract the first name using Copy, find where the space is using Pos, and print the name length.`,steps:[{explain:`Assign the full name to a string variable.`,code:`VAR full, first : String;
    spacePos, len : Integer;
BEGIN
  full := 'Chanda Mutale';`},{explain:`Use Pos to find the position of the space character.`,code:`spacePos := Pos(' ', full);
{ spacePos = 7 }`},{explain:`Use Copy to extract the first name — start at 1, take (spacePos-1) characters.`,code:`first := Copy(full, 1, spacePos - 1);
{ first = 'Chanda' }`},{explain:`Use Length to get the full name length.`,code:`len := Length(full);
WriteLn(first, ' (', len, ' chars total)');`}],answer:`Prints: Chanda (13 chars total)`,answerCode:`PROGRAM NameCheck;
VAR full, first : String; spacePos, len : Integer;
BEGIN
  full := 'Chanda Mutale';
  spacePos := Pos(' ', full);
  first := Copy(full, 1, spacePos - 1);
  len := Length(full);
  WriteLn(first, ' (', len, ' chars total)');
END.`,insight:`Copy(s, 1, spacePos-1) takes characters from position 1 up to (but not including) the space. If spacePos=7, Copy takes 6 characters: C-h-a-n-d-a.`}},{id:`p14`,title:`DOWNTO & STEP in Loops`,form:3,lesson:`Pascal's FOR loop can count downwards as well as upwards. Instead of TO, you use DOWNTO to make the counter decrease by 1 on each step.

Standard counting up: FOR i := 1 TO 10 DO
Counting down: FOR i := 10 DOWNTO 1 DO

DOWNTO is useful for countdown programs, displaying results in reverse order, and certain sorting techniques.

The loop variable still changes by exactly 1 step — you cannot specify a custom step size directly in Pascal's FOR loop. If you need to count in steps other than 1, you have two options:
Option 1: Use a WHILE loop and manually update the counter yourself.
Option 2: Use a FOR loop counting 1, 2, 3 and MULTIPLY inside the loop.

To print even numbers 2, 4, 6, 8, 10:
FOR i := 1 TO 5 DO
  WriteLn(i * 2);

This prints i times 2 on each iteration giving 2, 4, 6, 8, 10.
To print multiples of 5: WriteLn(i * 5).
To print odd numbers: WriteLn(i * 2 - 1).

DOWNTO is commonly used in countdown timers, reverse printing of arrays, and bubble sort implementations.

In ECZ exams, you may be asked to trace the output of a DOWNTO loop or to write a loop that produces a specific descending sequence.`,code:`PROGRAM Countdown;
VAR i : Integer;
BEGIN
  WriteLn('ZESCO scheduled maintenance countdown:');
  FOR i := 5 DOWNTO 1 DO
  BEGIN
    WriteLn(i, ' hours remaining...');
  END;
  WriteLn('Power restored! Welcome back, Lusaka.');
  WriteLn;
  WriteLn('Even numbers 2 to 10:');
  FOR i := 1 TO 5 DO
    WriteLn(i * 2);
END.`,explanation:`DOWNTO counts backwards — i starts at 5 and decreases to 1. To print even numbers, we multiply the counter by 2 each iteration: 1×2=2, 2×2=4, etc.`,question:{text:`What is the first number printed by: FOR i := 10 DOWNTO 7 DO WriteLn(i)?`,options:[`7`,`8`,`10`,`1`],answer:2,hint:`DOWNTO starts at the higher number and counts down.`},q2:{text:`FOR i := 5 DOWNTO 3 DO WriteLn(i); — what three values print?`,options:[`3,4,5`,`5,4,3`,`1,2,3`,`3,2,1`],answer:1,hint:`DOWNTO counts from higher to lower: 5, then 4, then 3.`},q3:{text:`To print even numbers 2,4,6,8,10 using a FOR loop with no DOWNTO, what is inside the body?`,options:[`WriteLn(i)`,`WriteLn(i*2)`,`WriteLn(i+2)`,`WriteLn(i-1)`],answer:1,hint:`Loop FOR i:=1 TO 5, multiply by 2 each iteration: 1×2=2, 2×2=4, etc.`},trace:[{line:2,explanation:`FOR i := 10 DOWNTO 7 — starts at 10, will count DOWN to 7.`,vars:{i:10},output:null},{line:3,explanation:`WriteLn(i) — prints 10.`,vars:{i:10},output:`10`},{line:2,explanation:`DOWNTO: i decrements to 9. Condition 9 >= 7 TRUE.`,vars:{i:9},output:`10`},{line:3,explanation:`WriteLn(9).`,vars:{i:9},output:`10
9`},{line:2,explanation:`i = 8. Print 8.`,vars:{i:8},output:`10
9
8`},{line:2,explanation:`i = 7. Print 7. Then i would be 6 < 7 — loop ends.`,vars:{i:7},output:`10
9
8
7`}],worked:{scenario:`A school timetable program prints periods in reverse order for end-of-day announcements.`,problem:`Use DOWNTO to print 'Period 5 ending' down to 'Period 1 ending'.`,steps:[{explain:`Declare the counter variable.`,code:`VAR period : Integer;`},{explain:`Use FOR...DOWNTO to count from 5 down to 1.`,code:`FOR period := 5 DOWNTO 1 DO`},{explain:`Print the announcement for each period.`,code:`  WriteLn('Period ', period, ' ending');`}],answer:`Prints: Period 5 ending / Period 4 ending / Period 3 ending / Period 2 ending / Period 1 ending`,answerCode:`PROGRAM Timetable;
VAR period : Integer;
BEGIN
  FOR period := 5 DOWNTO 1 DO
    WriteLn('Period ', period, ' ending');
END.`,insight:`DOWNTO decrements the counter by 1 each iteration automatically, just as TO increments it. You cannot specify a step size other than 1 in Pascal's FOR loop.`}},{id:`p15`,title:`Nested Procedures`,form:4,lesson:`In Pascal, procedures and functions can be declared inside other procedures. The inner nested procedure is only visible within the outer one — this is the concept of SCOPE.

Scope determines which parts of your program can see and use a variable or procedure.

LOCAL VARIABLES are declared inside a procedure. They only exist while that procedure is running. Each call creates a fresh copy. When the procedure ends, local variables disappear completely.

GLOBAL VARIABLES are declared in the main VAR section before any procedures. They are visible everywhere — in the main body and inside any procedure.

What happens when local and global variables share the same name? The LOCAL variable takes priority inside its procedure — it shadows the global one. This can cause confusing bugs if you are not aware of it.

Why scope matters:
It prevents procedures from accidentally interfering with each other's data.
It makes programs safer and easier to reason about.
It allows the same variable name to be used in different procedures without conflict.

A practical example: a school attendance system might have a global variable totalStudents visible everywhere, and a local variable count inside each class-processing procedure that only exists during that call.

Good practice: keep variables as local as possible. Only make something global if multiple procedures genuinely need to share it.`,code:`PROGRAM ScopeDemo;
VAR globalScore : Integer;

PROCEDURE ProcessStudent(name : String);
VAR localScore : Integer;  { only visible here }
BEGIN
  localScore := 75;
  globalScore := globalScore + localScore;
  WriteLn(name, ' processed. Local: ', localScore);
END;

BEGIN
  globalScore := 0;
  ProcessStudent('Chanda Mutale');
  ProcessStudent('Bupe Zulu');
  WriteLn('Total score: ', globalScore);
  { WriteLn(localScore); <- this would FAIL }
END.`,explanation:`globalScore is accessible everywhere. localScore only exists inside ProcessStudent — trying to use it in the main body would cause an error. Each call creates a fresh localScore.`,question:{text:`What is the value of globalScore printed at the end?`,options:[`75`,`100`,`150`,`0`],answer:2,hint:`Each call adds 75 to globalScore: 0 + 75 + 75 = ?`},q2:{text:`A variable declared inside a procedure is called what type?`,options:[`Global variable`,`Local variable`,`Static variable`,`Public variable`],answer:1,hint:`Variables declared inside a procedure are local — only visible within that procedure.`},q3:{text:`If a local and global variable share the same name, which one is used inside the procedure?`,options:[`Global — always takes priority`,`Local — takes priority inside its procedure`,`Compile error`,`Depends on declaration order`],answer:1,hint:`Local variables shadow global ones with the same name inside their procedure.`},trace:[{line:1,explanation:`globalScore := 0 — global variable initialised at program start.`,vars:{globalScore:0},output:null},{line:5,explanation:`AddScore(75) called — jumps into the procedure. n=75.`,vars:{globalScore:0,n:75},output:null},{line:6,explanation:`globalScore := globalScore + n → 0 + 75 = 75. Modifies the global variable.`,vars:{globalScore:75,n:75},output:null},{line:8,explanation:`Procedure returns. Back in main. AddScore(75) called again.`,vars:{globalScore:75},output:null},{line:6,explanation:`globalScore := 75 + 75 = 150.`,vars:{globalScore:150,n:75},output:null},{line:10,explanation:`WriteLn(globalScore) — prints 150.`,vars:{globalScore:150},output:`150`}],worked:{scenario:`A banking program tracks a shared account balance that multiple procedures update.`,problem:`Write two procedures: Deposit(amount) and Withdraw(amount) that both modify a global balance. Start with K1000, deposit K500, withdraw K200.`,steps:[{explain:`Declare a global variable before any procedures.`,code:`VAR balance : Real;`},{explain:`Write a Deposit procedure that adds to the global balance.`,code:`PROCEDURE Deposit(amount : Real);
BEGIN
  balance := balance + amount;
END;`},{explain:`Write a Withdraw procedure that subtracts from the global balance.`,code:`PROCEDURE Withdraw(amount : Real);
BEGIN
  balance := balance - amount;
END;`},{explain:`In the main block, initialise and call both procedures.`,code:`BEGIN
  balance := 1000;
  Deposit(500);
  Withdraw(200);
  WriteLn('Balance: K', balance:0:2);
END.`}],answer:`1000 + 500 - 200 = K1300.00`,answerCode:`PROGRAM Banking;
VAR balance : Real;
PROCEDURE Deposit(amount:Real);
BEGIN balance := balance + amount; END;
PROCEDURE Withdraw(amount:Real);
BEGIN balance := balance - amount; END;
BEGIN
  balance := 1000;
  Deposit(500); Withdraw(200);
  WriteLn('Balance: K', balance:0:2);
END.`,insight:`balance is a global variable — both procedures can see and modify it. Local variables declared inside a procedure are only visible within that procedure.`}},{id:`p16`,title:`Text File Handling`,form:4,lesson:`Files allow programs to store data permanently. Without files, everything disappears when the program stops running. With files, you can save student results, market records, or any data to disk and read it back later.

Pascal uses TEXT file type for reading and writing plain text files. The process always follows these five steps:

Step 1 DECLARE: VAR f : TEXT;
This creates a file variable — a handle you use to work with the file.

Step 2 ASSIGN: Assign(f, 'filename.txt');
This links your file variable to an actual file on disk. The file does not open yet.

Step 3 OPEN: Use Rewrite(f) to create or overwrite, Reset(f) to open for reading, or Append(f) to add without erasing.

Step 4 USE: WriteLn(f, data) to write. ReadLn(f, variable) to read. The file variable is the first argument.

Step 5 CLOSE: Close(f);
This is essential. Until you close a file, data may not be fully saved to disk. Always Close after you finish.

Reading files uses WHILE NOT EOF(f):
WHILE NOT EOF(f) DO
BEGIN
  ReadLn(f, line);
  { process line }
END;

EOF stands for End Of File. It returns TRUE when there is no more data to read.`,code:`PROGRAM ResultsFile;
VAR
  f      : TEXT;
  name   : String;
  score  : Integer;
BEGIN
  { Write results }
  Assign(f, 'results.txt');
  Rewrite(f);
  WriteLn(f, 'Mwamba Phiri,88');
  WriteLn(f, 'Chilufya Besa,74');
  WriteLn(f, 'Thandiwe Zulu,91');
  Close(f);

  { Read back }
  Reset(f);
  WriteLn('=== Exam Results ===');
  WHILE NOT EOF(f) DO
  BEGIN
    ReadLn(f, name);
    WriteLn('  ', name);
  END;
  Close(f);
END.`,explanation:`Assign links the variable to a filename. Rewrite creates/overwrites the file. Reset opens for reading. EOF(f) returns TRUE when the end of file is reached. Always Close when done.`,ecz:`File handling is a Form 4 staple. Know: Assign, Rewrite (write), Reset (read), Close, and the WHILE NOT EOF loop. Expect to write a program that saves and reads back student results.`,question:{text:`Which procedure opens a Pascal file for reading (not writing)?`,options:[`Rewrite`,`Assign`,`Reset`,`Open`],answer:2,hint:`Reset sets the file position back to the start for reading.`},q2:{text:`What does Rewrite(f) do to an existing file?`,options:[`Opens for reading`,`Appends to end`,`Creates/overwrites it`,`Reads first line`],answer:2,hint:`Rewrite creates a new file or completely overwrites an existing one.`},q3:{text:`You want to add records to an existing Pascal file without erasing it. Which procedure do you use?`,options:[`Rewrite`,`Reset`,`Append`,`Open`],answer:2,hint:`Append opens an existing file and positions the write pointer at the end.`},trace:[{line:3,explanation:`Assign(f, 'results.txt') — links the file variable f to the file name on disk.`,vars:{f:`results.txt (not open)`},output:null},{line:4,explanation:`Rewrite(f) — creates (or overwrites) the file and opens it for writing.`,vars:{f:`results.txt (open, empty)`},output:null},{line:5,explanation:`WriteLn(f, 'Chanda: Pass') — writes the first line to the file.`,vars:{file_content:`Chanda: Pass`},output:null},{line:6,explanation:`WriteLn(f, 'Mwamba: Fail') — writes the second line.`,vars:{file_content:`Chanda: Pass\\nMwamba: Fail`},output:null},{line:7,explanation:`Close(f) — closes the file. It is now saved on disk.`,vars:{f:`results.txt (closed)`},output:null},{line:8,explanation:`Reset(f) — reopens the file for reading from the beginning.`,vars:{f:`results.txt (open for reading)`},output:null},{line:9,explanation:`ReadLn(f, line) reads first line → 'Chanda: Pass'. WriteLn prints it.`,vars:{line:`Chanda: Pass`},output:`Chanda: Pass`},{line:9,explanation:`ReadLn reads second line → 'Mwamba: Fail'. WriteLn prints it. EOF reached.`,vars:{line:`Mwamba: Fail`},output:`Chanda: Pass
Mwamba: Fail`}],worked:{scenario:`A school needs to save student names to a file and read them back.`,problem:`Write a program that saves three student names to 'students.txt', then reads and prints them back.`,steps:[{explain:`Declare file and string variables. Use Assign to link the file variable to a filename.`,code:`VAR f : TextFile;
    name : String;
BEGIN
  Assign(f, 'students.txt');`},{explain:`Use Rewrite to create/open the file for writing, write three names, then Close.`,code:`Rewrite(f);
WriteLn(f, 'Chanda Mutale');
WriteLn(f, 'Bupe Zulu');
WriteLn(f, 'Mwamba Phiri');
Close(f);`},{explain:`Use Reset to open for reading. Loop until EOF, reading and printing each line.`,code:`Reset(f);
WHILE NOT EOF(f) DO
BEGIN
  ReadLn(f, name);
  WriteLn(name);
END;
Close(f);`}],answer:`Prints: Chanda Mutale / Bupe Zulu / Mwamba Phiri`,answerCode:`PROGRAM FileDemo;
VAR f:TextFile; name:String;
BEGIN
  Assign(f,'students.txt');
  Rewrite(f);
  WriteLn(f,'Chanda Mutale'); WriteLn(f,'Bupe Zulu'); WriteLn(f,'Mwamba Phiri');
  Close(f);
  Reset(f);
  WHILE NOT EOF(f) DO BEGIN ReadLn(f,name); WriteLn(name); END;
  Close(f);
END.`,insight:`Always Close(f) after writing before you can Reset and read. Rewrite creates or overwrites. Append adds to an existing file without deleting its contents.`}},{id:`p17`,title:`Searching Arrays`,form:4,lesson:`Searching means looking through data to find a specific item. LINEAR SEARCH is the simplest algorithm — it checks each element one by one from beginning to end.

How linear search works:
1. Start at the first element (index 1 in Pascal)
2. Compare the current element to the target value
3. If they match — found! Record the position
4. If not — move to the next element
5. Continue until found or all elements checked

The FOUND FLAG technique is essential and always appears in ECZ exam answers. Before the loop, set found := FALSE. Inside the loop when the target is found, set found := TRUE. After the loop, check IF NOT found to handle the case where nothing matched.

Performance analysis:
Best case: target is the first element — only 1 comparison needed
Average case: target is somewhere in the middle — about n divided by 2 comparisons
Worst case: target is last OR not present at all — n comparisons needed

Linear search works on ANY array — sorted or unsorted. It does not require the data to be in any particular order.

In Zambian ECZ exams, you will be asked to:
1. Write a linear search program for a given array
2. State the worst-case number of comparisons for an array of n elements
3. Explain the purpose of the found flag variable
4. Trace the search step by step for a given target value`,code:`PROGRAM LinearSearch;
CONST SIZE = 6;
VAR
  marks : ARRAY[1..SIZE] OF Integer;
  target, i : Integer;
  found : Boolean;
BEGIN
  marks[1]:=78; marks[2]:=91; marks[3]:=55;
  marks[4]:=63; marks[5]:=88; marks[6]:=47;

  target := 63;
  found  := FALSE;
  FOR i := 1 TO SIZE DO
    IF marks[i] = target THEN
    BEGIN
      WriteLn('Found ', target, ' at position ', i);
      found := TRUE;
    END;
  IF NOT found THEN
    WriteLn(target, ' not found in array.');
END.`,explanation:`The loop checks every element. When marks[i] = target, it prints the position and sets found := TRUE. After the loop, if found is still FALSE, the value was not in the array.`,ecz:`Linear search appears every year. Know the found-flag pattern: found := FALSE before the loop, found := TRUE inside when target matches. Always explain worst-case: n comparisons.`,question:{text:`At which position (index) will the search find the value 63?`,options:[`3`,`4`,`5`,`6`],answer:1,hint:`marks[1]=78, marks[2]=91, marks[3]=55, marks[4]=63...`},q2:{text:`What is the worst case for linear search on 100 elements?`,options:[`1 comparison`,`50 comparisons`,`100 comparisons`,`log(100) comparisons`],answer:2,hint:`Worst case: target is last or not present — must check all 100 elements.`},q3:{text:`What boolean variable technique helps track whether a linear search found its target?`,options:[`A counter variable`,`A found flag set to FALSE then TRUE when found`,`A second loop`,`Comparing to zero`],answer:1,hint:`Declare found:=FALSE before the loop. Set found:=TRUE inside when the target is matched.`},trace:[{line:7,explanation:`target := 63 — the value we are searching for. found := FALSE.`,vars:{target:63,found:!1,i:`?`},output:null},{line:9,explanation:`FOR i := 1 TO 6 — i=1. marks[1]=78. Is 78 = 63? FALSE.`,vars:{i:1,marks_i:78,found:!1},output:null},{line:10,explanation:`i=2: marks[2]=91. 91 = 63? FALSE. i=3: marks[3]=55. FALSE.`,vars:{i:3,marks_i:55,found:!1},output:null},{line:10,explanation:`i=4: marks[4]=63. 63 = 63? TRUE! Enter the IF block.`,vars:{i:4,marks_i:63,found:!1},output:null},{line:11,explanation:`WriteLn('Found 63 at position 4') — prints the result.`,vars:{i:4,found:!1},output:`Found 63 at position 4`},{line:12,explanation:`found := TRUE — flag is set.`,vars:{i:4,found:!0},output:`Found 63 at position 4`},{line:14,explanation:`Loop continues: i=5,6 but found is already TRUE. Loop ends. IF NOT found is FALSE — no 'not found' message.`,vars:{i:6,found:!0},output:`Found 63 at position 4`}],worked:{scenario:`A teacher stores class scores and wants to know if a student's score exists in the records.`,problem:`Search an array [88, 72, 45, 91, 63] for the value 45. Print its position or 'Not found'.`,steps:[{explain:`Declare the array, a target value, a loop counter, and a found flag.`,code:`VAR scores : ARRAY[1..5] OF Integer;
    target, i : Integer; found : Boolean;`},{explain:`Initialise the array and set target and found.`,code:`scores[1]:=88; scores[2]:=72; scores[3]:=45;
scores[4]:=91; scores[5]:=63;
target := 45; found := FALSE;`},{explain:`Loop through the array. When found, print position and set flag.`,code:`FOR i := 1 TO 5 DO
  IF scores[i] = target THEN
  BEGIN
    WriteLn('Found at position ', i);
    found := TRUE;
  END;`},{explain:`After the loop, check if it was ever found.`,code:`IF NOT found THEN WriteLn('Not found');`}],answer:`Prints: Found at position 3`,answerCode:`PROGRAM LinearSearch;
VAR scores:ARRAY[1..5] OF Integer; target,i:Integer; found:Boolean;
BEGIN
  scores[1]:=88;scores[2]:=72;scores[3]:=45;scores[4]:=91;scores[5]:=63;
  target:=45; found:=FALSE;
  FOR i:=1 TO 5 DO
    IF scores[i]=target THEN BEGIN WriteLn('Found at position ',i); found:=TRUE; END;
  IF NOT found THEN WriteLn('Not found');
END.`,insight:`A linear search checks every element in order. The found flag prevents printing 'Not found' when the value was actually found. Worst case: check all n elements.`}}]},"C++":{color:`#2e86de`,accent:`#dceeff`,icon:`🔵`,topics:[{id:`c1`,title:`Introduction to C++`,form:2,lesson:`C++ is a powerful, professional programming language used to build operating systems, games, web browsers, and financial systems. It was created by Bjarne Stroustrup in the early 1980s as an extension of the C language.

Every C++ program must have exactly one main() function — this is where execution begins. When you run a C++ program, the computer goes straight to main() and starts executing from there.

Understanding the essential components:

#include <iostream> is a preprocessor directive that includes the iostream library. Without it, cout and cin are undefined and your program will not compile.

using namespace std; lets you write cout instead of std::cout every time. All standard C++ functions live in the std namespace.

int main() returns an integer. return 0 means the program ran successfully. Any non-zero value signals an error.

cout sends data to the screen. The << operator pushes data into the output stream. endl ends the line and flushes the buffer so output appears immediately.

Zambia's growing technology sector increasingly requires C++ developers for companies like Airtel, MTN, and various fintech startups in Lusaka's tech hubs.`,code:`#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to Kabwe Technical!" << endl;
    cout << "C++ is powerful." << endl;
    return 0;
}`,explanation:`#include <iostream> gives us cout. cout << prints text. endl moves to a new line. main() returns 0 on success.`,question:{text:`Lombe is writing a C++ program at his school in Ndola. Which line correctly outputs 'Zambia is beautiful'?`,options:[`print("Zambia is beautiful");`,`WriteLn("Zambia is beautiful");`,`cout << "Zambia is beautiful" << endl;`,`Console.WriteLine("Zambia is beautiful");`],answer:2,hint:`C++ uses cout with << to output text.`},q2:{text:`What does 'using namespace std;' do?`,options:[`Imports all variables`,`Lets you write cout instead of std::cout`,`Makes the program faster`,`Declares the main function`],answer:1,hint:`It means you can use standard names directly without the std:: prefix.`},q3:{text:`What value should main() return to signal successful completion?`,options:[`1`,`-1`,`0`,`NULL`],answer:2,hint:`return 0 is the convention for successful program completion in C++.`},trace:[{line:1,explanation:`#include <iostream> — loads the iostream library so we can use cout and cin. This runs before the program starts.`,vars:{},output:null},{line:2,explanation:`using namespace std; — allows cout instead of std::cout throughout the program.`,vars:{},output:null},{line:4,explanation:`int main() { — program execution begins here.`,vars:{},output:null},{line:5,explanation:`cout << 'Welcome to Kabwe Technical!' << endl; — outputs the first line. endl moves to the next line.`,vars:{},output:`Welcome to Kabwe Technical!`},{line:6,explanation:`cout << 'C++ is powerful.' << endl; — outputs the second line.`,vars:{},output:`Welcome to Kabwe Technical!
C++ is powerful.`},{line:7,explanation:`return 0; — signals the OS that the program finished successfully. main() exits.`,vars:{},output:`Welcome to Kabwe Technical!
C++ is powerful.`}],worked:{scenario:`A student at Kabwe Technical is writing their first C++ program for a computer science assignment.`,problem:`Write a C++ program that prints 'Zambia: Land of the Victoria Falls' and 'C++ Programming — Form 3' on separate lines.`,steps:[{explain:`Include the iostream library for cout and add the namespace shortcut.`,code:`#include <iostream>
using namespace std;`},{explain:`Define the main function — this is where execution starts.`,code:`int main() {`},{explain:`Use cout with << to output each line. endl moves to the next line.`,code:`    cout << "Zambia: Land of the Victoria Falls" << endl;
    cout << "C++ Programming — Form 3" << endl;`},{explain:`Return 0 to signal successful completion.`,code:`    return 0;
}`}],answer:`Outputs two lines exactly as specified. return 0 signals the OS that the program ran successfully.`,answerCode:`#include <iostream>
using namespace std;
int main() {
    cout << "Zambia: Land of the Victoria Falls" << endl;
    cout << "C++ Programming — Form 3" << endl;
    return 0;
}`,insight:`Without #include <iostream>, cout is undefined. Without using namespace std, you must write std::cout. Both are required for basic output in C++.`}},{id:`c2`,title:`Variables & User Input`,form:2,lesson:`In C++, every variable must be declared with a data type before it can be used. The data type tells the compiler how much memory to reserve and what operations are allowed.

The fundamental C++ data types:
int stores whole numbers. Range is approximately -2 billion to +2 billion. Use for ages, counts, scores, and quantities.
double stores decimal numbers with high precision. Use for prices in Kwacha, percentages, and calculations requiring decimal places.
string stores text of any length. Requires #include <string>. Use for names, addresses, and sentences.
bool stores only true or false. Use for on/off switches, pass/fail flags, and yes/no answers.
char stores a single character. Use for menu choices and individual letters.

Getting input from the user:
cin >> variable reads input from the keyboard. The >> operator extracts data from the input stream and stores it in the variable.

Important limitation: cin >> stops reading at whitespace. If a user types Chanda Mutale, cin >> name only stores Chanda. To read a full line including spaces, use getline(cin, name) instead.

Always initialise variables before use. int total = 0; is safer than just int total; because uninitialised variables contain whatever random data is in memory at that moment.`,code:`#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int age;
    cout << "Enter name: ";
    cin >> name;
    cout << "Enter age: ";
    cin >> age;
    cout << "Hello " << name
         << ", aged " << age << endl;
    return 0;
}`,explanation:`cin >> reads user input. #include <string> is needed for the string type. Variables must be declared before use.`,question:{text:`Thandiwe's program stores the number of chickens at her farm in Chipata. Which declaration is correct?`,options:[`double chickens;`,`string chickens;`,`int chickens;`,`bool chickens;`],answer:2,hint:`int stores whole numbers.`},q2:{text:`Which header is needed to use the string type in C++?`,options:[`#include <string>`,`#include <text>`,`#include <iostream>`,`#include <stdlib>`],answer:0,hint:`string requires #include <string> separately from iostream.`},q3:{text:`A user enters 'Chanda Mutale' and code has cin >> name. What is stored in name?`,options:[`'Chanda Mutale'`,`'Chanda'`,`'Mutale'`,`Empty string`],answer:1,hint:`cin >> stops at whitespace. Only the first word 'Chanda' is stored.`},trace:[{line:5,explanation:`string name; int age; — two variables declared but not yet assigned. Memory is allocated.`,vars:{name:`?`,age:`?`},output:null},{line:6,explanation:`cout << 'Enter name: ' — prints the prompt. No endl so cursor stays on same line.`,vars:{name:`?`,age:`?`},output:`Enter name: `},{line:7,explanation:`cin >> name — user types 'Chanda'. cin stops at whitespace. name = 'Chanda'.`,vars:{name:`Chanda`,age:`?`},output:`Enter name: Chanda`},{line:8,explanation:`cout << 'Enter age: ' — prints age prompt.`,vars:{name:`Chanda`,age:`?`},output:`Enter name: Chanda
Enter age: `},{line:9,explanation:`cin >> age — user types 16. Stored as integer.`,vars:{name:`Chanda`,age:16},output:`Enter name: Chanda
Enter age: 16`},{line:10,explanation:`cout outputs the greeting using << to chain name and age.`,vars:{name:`Chanda`,age:16},output:`Enter name: Chanda
Enter age: 16
Hello Chanda, aged 16`}],worked:{scenario:`A Zambian ID registration system needs to record a citizen's name and year of birth.`,problem:`Write a C++ program that asks for a name and birth year, then calculates and prints the person's age in 2024.`,steps:[{explain:`Include string for text input and declare variables.`,code:`#include <iostream>
#include <string>
using namespace std;
int main() {
    string name;
    int birthYear, age;`},{explain:`Read the name (use getline for full name with spaces).`,code:`    cout << "Enter full name: ";
    getline(cin, name);`},{explain:`Read the birth year and calculate age.`,code:`    cout << "Enter birth year: ";
    cin >> birthYear;
    age = 2024 - birthYear;`},{explain:`Print the result.`,code:`    cout << name << " is " << age << " years old." << endl;
    return 0;
}`}],answer:`For name='Chanda Mutale', birthYear=2008: prints 'Chanda Mutale is 16 years old.'`,answerCode:`#include <iostream>
#include <string>
using namespace std;
int main() {
    string name; int birthYear, age;
    cout << "Enter full name: ";
    getline(cin, name);
    cout << "Enter birth year: ";
    cin >> birthYear;
    age = 2024 - birthYear;
    cout << name << " is " << age << " years old." << endl;
    return 0;
}`,insight:`Use getline() for names with spaces — cin >> stops at the first space. After cin >> number, call cin.ignore() before getline() to skip the leftover newline.`}},{id:`c3`,title:`Conditionals (if / else)`,form:2,lesson:`Decision-making in C++ uses if, else if, and else statements. These allow your program to choose between different paths based on conditions.

The structure:
if (condition) {
    code that runs when condition is true
} else if (another_condition) {
    code that runs when first is false but this is true
} else {
    code that runs when all above are false
}

Comparison operators in C++:
== double equals for comparison, single = for assignment — this is the most important distinction
!= not equal to
> greater than, < less than, >= greater or equal, <= less or equal

The most common C++ mistake is writing = instead of == in a condition:
if (score = 90) assigns 90 to score and is always true — this is a bug
if (score == 90) compares score to 90 — this is correct

Logical operators:
&& (AND) — both conditions must be true
|| (OR) — at least one condition must be true
! (NOT) — reverses a boolean value

Chaining with else if: conditions are checked top to bottom. The FIRST true condition runs its block and all others are skipped. Always order conditions from most specific to least specific.`,code:`#include <iostream>
using namespace std;

int main() {
    double rainfall;
    cin >> rainfall;
    if (rainfall >= 200)
        cout << "Heavy rains!" << endl;
    else if (rainfall >= 100)
        cout << "Moderate rains." << endl;
    else if (rainfall >= 30)
        cout << "Light rains." << endl;
    else
        cout << "Drought alert!" << endl;
    return 0;
}`,explanation:`Conditions are checked top to bottom. The first TRUE condition runs its block; the rest are skipped.`,question:{text:`Lusaka receives 45mm of rain this month. What message does the program print?`,options:[`Heavy rains!`,`Moderate rains.`,`Light rains.`,`Drought alert!`],answer:2,hint:`45 is ≥30 but not ≥100.`},q2:{text:`What is the difference between == and = in C++?`,options:[`They are identical`,`== compares; = assigns`,`= compares; == assigns`,`Both assign values`],answer:1,hint:`= assigns a value. == compares two values. Using = inside if() is a very common bug.`},q3:{text:`if (score = 90) — what is wrong with this C++ code?`,options:[`Nothing — it checks if score is 90`,`= assigns 90 to score; it does not compare`,`score must be declared first`,`The brackets are wrong`],answer:1,hint:`= assigns, == compares. This always evaluates to true (since 90 is non-zero).`},trace:[{line:3,explanation:`int rain = 45; — rain assigned the value 45.`,vars:{rain:45},output:null},{line:4,explanation:`if (rain >= 100) — is 45 >= 100? FALSE. Skip this block.`,vars:{rain:45,test:`45 >= 100 → false`},output:null},{line:6,explanation:`else if (rain >= 50) — is 45 >= 50? FALSE. Skip.`,vars:{rain:45,test:`45 >= 50 → false`},output:null},{line:8,explanation:`else if (rain >= 30) — is 45 >= 30? TRUE. Enter this block.`,vars:{rain:45,test:`45 >= 30 → true`},output:null},{line:9,explanation:`cout << 'Light rains.' — prints the matching message.`,vars:{rain:45},output:`Light rains.`},{line:10,explanation:`Remaining else block is skipped. Program ends.`,vars:{rain:45},output:`Light rains.`}],worked:{scenario:`The Zambia Meteorological Department classifies daily rainfall into warning levels.`,problem:`Write a C++ program that reads rainfall in mm and prints: 'Flood Warning' if >=100, 'Heavy Rain' if >=50, 'Normal' if >=10, else 'Dry'.`,steps:[{explain:`Declare the rainfall variable and read it.`,code:`int rain;
cout << "Rainfall (mm): ";
cin >> rain;`},{explain:`Check from highest to lowest — first condition that matches wins.`,code:`if (rain >= 100)
    cout << "Flood Warning" << endl;`},{explain:`Chain remaining conditions with else if.`,code:`else if (rain >= 50)
    cout << "Heavy Rain" << endl;
else if (rain >= 10)
    cout << "Normal" << endl;
else
    cout << "Dry" << endl;`}],answer:`rain=45: 45>=100 false, 45>=50 false, 45>=10 true → prints 'Normal'`,answerCode:`#include <iostream>
using namespace std;
int main() {
    int rain;
    cout << "Rainfall (mm): "; cin >> rain;
    if (rain >= 100) cout << "Flood Warning" << endl;
    else if (rain >= 50) cout << "Heavy Rain" << endl;
    else if (rain >= 10) cout << "Normal" << endl;
    else cout << "Dry" << endl;
    return 0;
}`,insight:`Always order from most specific (highest) to least specific (lowest). If you checked >= 10 first, a 45mm reading would match 'Normal' and never reach 'Heavy Rain'.`}},{id:`c4`,title:`Loops (for & while)`,form:3,lesson:`Loops allow a block of code to run repeatedly. C++ has three main loop types, each suited to different situations.

THE FOR LOOP is used when you know exactly how many repetitions are needed.
Syntax: for (initialisation; condition; update) { body }
Initialisation runs once before the loop starts. Condition is checked before each iteration — loop stops when false. Update runs after each iteration.

for (int i = 1; i <= 5; i++) creates a loop that counts 1, 2, 3, 4, 5.

THE WHILE LOOP is used when the number of repetitions depends on a condition.
while (condition) { body }
Checks condition BEFORE each iteration. May run zero times if condition is initially false.

break and continue are two special statements:
break immediately exits the loop regardless of the condition.
continue skips the rest of the current iteration and jumps to the next one.

i++ increments by 1, i-- decrements by 1, i+=2 increases by 2, i*=2 doubles each iteration.

Nested loops: a loop inside a loop. The inner loop completes fully for each single step of the outer loop. Used for multiplication tables, processing grids, and comparing pairs of items.`,code:`#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++)
        cout << "Student " << i
             << " collected water." << endl;

    int litres = 0;
    while (litres < 100) {
        litres += 25;
        cout << "Tank: " << litres << "L" << endl;
    }
    return 0;
}`,explanation:`for(int i=1; i<=5; i++) — starts at 1, runs while i≤5, adds 1 each time. while(litres<100) runs until the tank is full.`,ecz:`Loops are core to every C++ paper. The for loop syntax (init; condition; update) is always tested. Expect: count how many times a loop runs, or trace the output of a nested loop.`,question:{text:`How many times does for(int x = 0; x < 6; x++) execute?`,options:[`5 times`,`6 times`,`7 times`,`Infinite times`],answer:1,hint:`x goes 0,1,2,3,4,5 — that's 6 values.`},q2:{text:`What does break; do inside a C++ loop?`,options:[`Skips to next iteration`,`Exits the loop immediately`,`Pauses the loop`,`Causes a compile error`],answer:1,hint:`break exits the loop immediately. continue skips to the next iteration.`},q3:{text:`for(int i=10; i>0; i-=3) — what values of i are printed?`,options:[`10,7,4,1`,`10,7,4`,`9,6,3`,`10,8,6,4,2`],answer:0,hint:`Start at 10, subtract 3 each time: 10→7→4→1. At -2 the condition i>0 is FALSE.`},trace:[{line:3,explanation:`for(int x=0; x<6; x++) — initialise x=0. Check 0<6? TRUE. Enter body.`,vars:{x:0},output:null},{line:4,explanation:`cout << x << ' '; — prints 0 with a space.`,vars:{x:0},output:`0 `},{line:3,explanation:`x++ → x=1. 1<6 TRUE. Print 1.`,vars:{x:1},output:`0 1 `},{line:3,explanation:`x=2→3→4→5. Print each.`,vars:{x:5},output:`0 1 2 3 4 5 `},{line:3,explanation:`x++ → x=6. Check 6<6? FALSE. Exit loop.`,vars:{x:6},output:`0 1 2 3 4 5 `},{line:6,explanation:`cout << endl — moves to next line. Loop done.`,vars:{x:6},output:`0 1 2 3 4 5 
`}],worked:{scenario:`A teacher wants to sum the marks of 5 students at Sikombe Secondary.`,problem:`Use a for loop to read 5 integer marks and print their total and average.`,steps:[{explain:`Declare variables for counting, each mark, the running total, and the average.`,code:`int i, mark, total = 0;
double average;`},{explain:`Loop 5 times, reading one mark per iteration and accumulating the total.`,code:`for (i = 1; i <= 5; i++) {
    cout << "Mark " << i << ": ";
    cin >> mark;
    total += mark;
}`},{explain:`Calculate and print average after the loop.`,code:`average = total / 5.0;
cout << "Total: " << total << endl;
cout << "Average: " << average << endl;`}],answer:`For marks 70,65,80,55,90: Total=360, Average=72.0`,answerCode:`#include <iostream>
using namespace std;
int main() {
    int i, mark, total = 0; double average;
    for (i = 1; i <= 5; i++) {
        cout << "Mark " << i << ": ";
        cin >> mark;
        total += mark;
    }
    average = total / 5.0;
    cout << "Total: " << total << endl;
    cout << "Average: " << average << endl;
    return 0;
}`,insight:`Use 5.0 not 5 for division to get a decimal result. Integer division: 360/5 = 72 (fine here). But 361/5 = 72 (truncated!) — so always divide by 5.0 for averages.`}},{id:`c5`,title:`Arrays in C++`,form:3,lesson:`An array in C++ is a collection of variables of the SAME type stored in consecutive memory locations, all accessible through one variable name and an index number.

Declaration: int scores[5] = {78, 92, 65, 88, 74};
This creates 5 integer boxes. C++ arrays start at INDEX 0, not 1.
scores[0] = 78 is the first element.
scores[4] = 74 is the last element — NOT scores[5].

Accessing scores[5] when the array size is 5 is an out-of-bounds error. C++ does NOT catch this automatically. Your program may crash or produce wrong results silently.

Iterating with a for loop:
for (int i = 0; i < 5; i++) { cout << scores[i]; }

Note: i < 5, NOT i <= 5, because the last valid index is 4 not 5.

Initialising arrays:
int arr[5] = {0}; sets all elements to 0.
int arr[5]; leaves elements with random garbage values — dangerous.

Common array algorithms:
Sum: accumulate in a total variable.
Average: sum divided by count (use double for the result).
Maximum and minimum: initialise to the first element then compare each subsequent element.
Linear search: loop through checking each element against the target.`,code:`#include <iostream>
using namespace std;

int main() {
    int scores[5] = {78, 92, 65, 88, 74};
    int total = 0;
    for (int i = 0; i < 5; i++) {
        cout << "Student " << i+1
             << ": " << scores[i] << endl;
        total += scores[i];
    }
    cout << "Average: " << total/5 << endl;
    return 0;
}`,explanation:`int scores[5] creates an array of 5 integers. Loop visits each element using index i from 0 to 4.`,ecz:`Arrays in C++ start at index 0 — examiners test this specifically. Common questions: find max/min in an array, sum all elements, or access a specific index.`,question:{text:`In the array above, what is scores[3]?`,options:[`92`,`65`,`88`,`74`],answer:2,hint:`scores[0]=78, scores[1]=92, scores[2]=65, scores[3]=?`},q2:{text:`int arr[4]={10,20,30,40}. What is arr[0] + arr[3]?`,options:[`30`,`40`,`50`,`60`],answer:2,hint:`arr[0]=10 and arr[3]=40. 10+40=50.`},q3:{text:`Why is accessing arr[5] dangerous when arr has size 5?`,options:[`Prints zero`,`Causes compile error`,`Reads random memory — undefined behaviour`,`Automatically resizes array`],answer:2,hint:`C++ does not bounds-check arrays. arr[5] reads memory beyond the array — undefined behaviour.`},trace:[{line:3,explanation:`int scores[5] = {78,91,55,63,88}; — array of 5 integers created. Index 0–4.`,vars:{scores:`[78,91,55,63,88]`},output:null},{line:4,explanation:`int total = 0; — accumulator starts at zero.`,vars:{scores:`[78,91,55,63,88]`,total:0},output:null},{line:5,explanation:`for(int i=0; i<5; i++) — i=0. total += scores[0] = 78.`,vars:{i:0,total:78},output:null},{line:5,explanation:`i=1: total += 91 = 169. i=2: += 55 = 224.`,vars:{i:2,total:224},output:null},{line:5,explanation:`i=3: += 63 = 287. i=4: += 88 = 375. i=5: 5<5 FALSE. Loop ends.`,vars:{i:5,total:375},output:null},{line:7,explanation:`cout << total / 5 — integer division: 375 / 5 = 75.`,vars:{total:375},output:`75`}],worked:{scenario:`A Copperbelt mining company tracks weekly copper output for 6 weeks.`,problem:`Store outputs {1200, 980, 1450, 1100, 1320, 890} in an array. Find and print the maximum output and which week it occurred.`,steps:[{explain:`Declare the array and initialise it.`,code:`int output[] = {1200, 980, 1450, 1100, 1320, 890};
int maxVal = output[0], maxWeek = 1;`},{explain:`Loop from index 1, comparing each value to the current maximum.`,code:`for (int i = 1; i < 6; i++) {
    if (output[i] > maxVal) {
        maxVal = output[i];
        maxWeek = i + 1;
    }
}`},{explain:`Print the result.`,code:`cout << "Best week: " << maxWeek << " (" << maxVal << " tonnes)" << endl;`}],answer:`output[2]=1450 is highest. maxWeek = 2+1 = 3. Prints: Best week: 3 (1450 tonnes)`,answerCode:`#include <iostream>
using namespace std;
int main() {
    int output[] = {1200,980,1450,1100,1320,890};
    int maxVal=output[0], maxWeek=1;
    for (int i=1; i<6; i++)
        if (output[i]>maxVal) { maxVal=output[i]; maxWeek=i+1; }
    cout << "Best week: " << maxWeek << " (" << maxVal << " tonnes)" << endl;
    return 0;
}`,insight:`Initialise maxVal to output[0] (first element), not 0. If all outputs were negative, starting at 0 would incorrectly claim the maximum is 0.`}},{id:`c6`,title:`Functions in C++`,form:4,lesson:`Functions allow you to break a large program into smaller, reusable pieces. Instead of writing the same logic multiple times, you write it once as a function and call it whenever needed.

Function anatomy: returnType functionName(parameterType parameterName) { body }

The returnType tells the compiler what kind of value the function sends back. If the function performs an action but does NOT return a value, use void as the return type.

Parameters vs Arguments:
Parameters are the variable names listed in the function definition — the slots.
Arguments are the actual values you pass when calling the function.
double calcTax(double amount) — amount is the parameter.
calcTax(500.0) — 500.0 is the argument.

Scope: variables declared inside a function are LOCAL — they only exist while the function is running. This prevents functions from accidentally interfering with each other.

Function prototypes: if you define a function AFTER main(), you need a prototype before main() to inform the compiler the function exists. A prototype ends with a semicolon.

Return statement: the moment a return statement executes, the function immediately ends and sends back the value. A void function can use return; with no value to exit early.

Function design principle: each function should do ONE thing well.`,code:`#include <iostream>
using namespace std;

double calcTax(double amount) {
    return amount * 0.16; // ZRA VAT 16%
}

void printReceipt(double amount, double tax) {
    cout << "Amount: K" << amount << endl;
    cout << "VAT:    K" << tax << endl;
    cout << "Total:  K" << amount+tax << endl;
}

int main() {
    double price = 500.0;
    double vat = calcTax(price);
    printReceipt(price, vat);
    return 0;
}`,explanation:`calcTax returns a double. printReceipt is void — it only prints. Functions keep code organised and reusable.`,ecz:`Functions are heavily tested in Form 4. Know: return type, parameters, calling a function, and void vs non-void. A common question asks you to write a function that calculates and returns a value.`,question:{text:`What total amount does the receipt print when price = K500?`,options:[`K500`,`K80`,`K580`,`K16`],answer:2,hint:`500 + 16% of 500 = 500 + 80 = ?`},q2:{text:`What does a void function return?`,options:[`0`,`NULL`,`An empty string`,`Nothing — void means no return value`],answer:3,hint:`void means the function performs actions but returns no value.`},q3:{text:`Where should a function prototype be placed relative to main()?`,options:[`After main()`,`Inside main()`,`Before main()`,`At the very end of the file`],answer:2,hint:`Prototypes go before main() so the compiler knows the function exists before it is called.`},trace:[{line:2,explanation:`double calcReceipt — function defined but not called yet. Just stored.`,vars:{},output:null},{line:11,explanation:`double price = 500; — price variable in main().`,vars:{price:500},output:null},{line:12,explanation:`double total = calcReceipt(price) — calls calcReceipt(500). Jumps to function.`,vars:{price:500,p:500},output:null},{line:3,explanation:`double vat = p * 0.16 → 500 * 0.16 = 80.`,vars:{p:500,vat:80},output:null},{line:4,explanation:`return p + vat → 500 + 80 = 580. Returns 580 to caller.`,vars:{p:500,vat:80,returns:580},output:null},{line:12,explanation:`total receives 580 in main().`,vars:{price:500,total:580},output:null},{line:13,explanation:`cout prints the receipt total.`,vars:{total:580},output:`Total with VAT: K580.00`}],worked:{scenario:`A Zambian mobile money app calculates transaction fees.`,problem:`Write a function calcFee(double amount) that returns 1.5% of amount as the fee. Test with K500 and K1200.`,steps:[{explain:`Define the function before main with its return type, parameter, and return statement.`,code:`double calcFee(double amount) {
    return amount * 0.015;
}`},{explain:`In main, call the function with both test amounts.`,code:`int main() {
    double fee1 = calcFee(500);
    double fee2 = calcFee(1200);`},{explain:`Print both fees formatted to 2 decimal places.`,code:`    cout << "Fee on K500: K" << fee1 << endl;
    cout << "Fee on K1200: K" << fee2 << endl;
    return 0;
}`}],answer:`Fee on K500: K7.50 / Fee on K1200: K18.00`,answerCode:`#include <iostream>
using namespace std;
double calcFee(double amount) {
    return amount * 0.015;
}
int main() {
    cout << "Fee on K500: K" << calcFee(500) << endl;
    cout << "Fee on K1200: K" << calcFee(1200) << endl;
    return 0;
}`,insight:`Functions must be defined (or declared with a prototype) before they are called in main(). Placing the full function definition above main() satisfies this requirement.`}},{id:`c7`,title:`String Operations`,form:3,lesson:`Strings in C++ are objects representing sequences of characters. C++ strings from the string library are flexible, safe, and come with many built-in methods.

Always include: #include <string>

Essential string methods called using dot notation:

length() or size() returns the number of characters. "Zambia".length() returns 6.

substr(position, length) extracts a portion of the string. Position is 0-based.
"Copperbelt".substr(0, 6) returns "Copper".
"Copperbelt".substr(6, 4) returns "belt".

find(substring) returns the index of the first occurrence, or string::npos if not found.

The + operator concatenates two strings: "Zam" + "bia" returns "Zambia".

at(index) safely accesses a character at a given position with bounds checking.

Comparing strings: use == to compare correctly. if (province == "Lusaka") works correctly for C++ strings.

Converting between types:
stoi(string) converts string to integer: stoi("42") returns 42.
to_string(number) converts number to string: to_string(42) returns "42".
These conversions are important when reading numbers as text and needing to calculate with them.`,code:`#include <iostream>
#include <string>
using namespace std;

int main() {
    string school = "Munali Girls Secondary";
    cout << "School: " << school << endl;
    cout << "Length: " << school.length() << endl;
    cout << "First 6: " << school.substr(0,6) << endl;

    string city = "Lusaka";
    string full = school + ", " + city;
    cout << "Full: " << full << endl;
    return 0;
}`,explanation:`String methods use dot notation (school.length()). substr(0,6) extracts 6 characters starting at position 0. + concatenates strings.`,question:{text:`What does school.substr(0, 6) return for "Munali Girls Secondary"?`,options:[`Girls `,`Munali`,`Munali Girls`,`Secondary`],answer:1,hint:`substr(start, length) — start at 0, take 6 characters.`},q2:{text:`string s='Ndola'. What does s.length() return?`,options:[`4`,`5`,`6`,`N`],answer:1,hint:`'Ndola' has 5 characters: N-d-o-l-a.`},q3:{text:`string s='Copperbelt'. What does s.find('belt') return?`,options:[`0`,`6`,`7`,`string::npos`],answer:1,hint:`'belt' starts at index 6 in 'Copperbelt' (0-based: C=0,o=1,p=2,p=3,e=4,r=5,b=6).`},trace:[{line:3,explanation:`string school = 'Kabulonga Girls'; — string variable assigned.`,vars:{school:`Kabulonga Girls`},output:null},{line:4,explanation:`cout << school.substr(0, 6) — substr(start, length): start=0, take 6 chars → 'Kabulo'.`,vars:{school:`Kabulonga Girls`},output:`Kabulo`},{line:5,explanation:`school.length() — counts all characters including spaces: 'Kabulonga Girls' = 15.`,vars:{school:`Kabulonga Girls`},output:`Kabulo
15`},{line:6,explanation:`school.find('Girls') — searches for 'Girls'. K=0,a=1,b=2,u=3,l=4,o=5,n=6,g=7,a=8, =9,G=10. Returns 10.`,vars:{school:`Kabulonga Girls`},output:`Kabulo
15
10`},{line:7,explanation:`school.replace(0, 9, 'Munali') — replaces 9 chars from index 0 ('Kabulonga') with 'Munali'.`,vars:{school:`Munali Girls`},output:`Kabulo
15
10
Munali Girls`}],worked:{scenario:`An enrollment system needs to check if a school name contains the word 'Secondary'.`,problem:`Given the string 'Kabulonga Boys Secondary School', check if it contains 'Secondary' and print the position.`,steps:[{explain:`Declare and assign the school name string.`,code:`string school = "Kabulonga Boys Secondary School";`},{explain:`Use find() to search for the substring. It returns the index or string::npos if not found.`,code:`size_t pos = school.find("Secondary");`},{explain:`Check the result and print appropriately.`,code:`if (pos != string::npos)
    cout << "Found 'Secondary' at index " << pos << endl;
else
    cout << "Not found" << endl;`}],answer:`'Secondary' starts at index 15 in 'Kabulonga Boys Secondary School'. Prints: Found 'Secondary' at index 15`,answerCode:`#include <iostream>
#include <string>
using namespace std;
int main() {
    string school = "Kabulonga Boys Secondary School";
    size_t pos = school.find("Secondary");
    if (pos != string::npos)
        cout << "Found 'Secondary' at index " << pos << endl;
    else
        cout << "Not found" << endl;
    return 0;
}`,insight:`string::npos is a special constant meaning 'not found'. Always compare find() result to npos — never to -1 or 0, as those are valid index positions.`}},{id:`c8`,title:`File Input & Output`,form:4,lesson:`File handling in C++ uses the fstream library, which provides stream classes for working with files.

Include: #include <fstream>

The three file stream types:
ofstream is for WRITING to files.
ifstream is for READING from files.
fstream is for both reading and writing.

Writing to a file:
ofstream outFile("results.txt");
outFile << "Chanda: 88" << endl;
outFile.close(); — ALWAYS close when done

Reading from a file:
ifstream inFile("results.txt");
string line;
while (getline(inFile, line)) { cout << line << endl; }
inFile.close();

Always check if a file opened successfully:
if (!outFile) { cout << "Error opening file"; return 1; }

File modes passed as second argument:
ios::app — append mode adds to end of existing file without erasing.
ios::trunc — erases existing content (default for ofstream).

Why close files? Data is written to a BUFFER first, not directly to disk. close() flushes the buffer and writes everything. If you forget close() and your program crashes, the last data may be lost.

Use case: an ECZ results system might write each student's name and score to a file as they are entered, then read back and display all results at the end.`,code:`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ofstream outFile("results.txt");
    outFile << "=== Form 4 Results ===" << endl;
    outFile << "Nakamba Phiri: 78% Pass" << endl;
    outFile << "Chibwe Mutale: 45% Fail" << endl;
    outFile.close();

    ifstream inFile("results.txt");
    string line;
    while (getline(inFile, line))
        cout << line << endl;
    inFile.close();
    return 0;
}`,explanation:`ofstream creates/writes a file. ifstream reads a file. getline() reads one line at a time. Always close files when done.`,ecz:`File I/O is a Form 4 favourite. Know ofstream (write) and ifstream (read). Expect: write student results to a file, read them back. Always close() the file.`,question:{text:`Which C++ class is used to write data to a file?`,options:[`ifstream`,`fstream`,`ofstream`,`wstream`],answer:2,hint:`'o' in ofstream stands for output — writing to a file.`},q2:{text:`Which C++ stream object reads data FROM a file?`,options:[`ofstream`,`iostream`,`ifstream`,`fstream`],answer:2,hint:`ifstream = input file stream — for reading. ofstream = output file stream — for writing.`},q3:{text:`After writing with ofstream, you want to add more data without erasing. Which flag do you use?`,options:[`ios::read`,`ios::app`,`ios::trunc`,`ios::binary`],answer:1,hint:`ios::app (append) opens an existing file and adds to the end without erasing.`},trace:[{line:3,explanation:`ofstream file('results.txt') — creates/opens file for writing.`,vars:{file:`results.txt (open)`},output:null},{line:4,explanation:`if(!file) — check if file opened successfully. It did, so skip error block.`,vars:{file:`results.txt (open)`},output:null},{line:6,explanation:`file << 'Chanda: 88' << endl — writes first line to file.`,vars:{file_content:`Chanda: 88`},output:null},{line:7,explanation:`file << 'Mwamba: 72' << endl — writes second line.`,vars:{file_content:`Chanda: 88\\nMwamba: 72`},output:null},{line:8,explanation:`file.close() — file is saved and closed.`,vars:{file:`results.txt (closed)`},output:null},{line:10,explanation:`ifstream fin('results.txt') — opens same file for reading.`,vars:{fin:`results.txt (open for reading)`},output:null},{line:11,explanation:`getline(fin, line) reads 'Chanda: 88'. while(!fin.eof()) loops.`,vars:{line:`Chanda: 88`},output:`Chanda: 88`},{line:11,explanation:`getline reads 'Mwamba: 72'. Prints it. Next getline hits EOF — loop exits.`,vars:{line:`Mwamba: 72`},output:`Chanda: 88
Mwamba: 72`}],worked:{scenario:`ECZ wants to save exam results to a file for archiving.`,problem:`Write a program that saves three results to 'ecz_results.txt', then reads and prints them back.`,steps:[{explain:`Include fstream for file I/O. Open an ofstream for writing.`,code:`#include <fstream>
ofstream outFile("ecz_results.txt");`},{explain:`Write three results and close the file.`,code:`outFile << "Chanda: 88" << endl;
outFile << "Mwamba: 72" << endl;
outFile << "Bupe: 45" << endl;
outFile.close();`},{explain:`Open an ifstream for reading. Loop until end of file.`,code:`ifstream inFile("ecz_results.txt");
string line;
while (getline(inFile, line))
    cout << line << endl;
inFile.close();`}],answer:`Reads back and prints all three lines: Chanda: 88 / Mwamba: 72 / Bupe: 45`,answerCode:`#include <iostream>
#include <fstream>
#include <string>
using namespace std;
int main() {
    ofstream out("ecz_results.txt");
    out<<"Chanda: 88"<<endl; out<<"Mwamba: 72"<<endl; out<<"Bupe: 45"<<endl;
    out.close();
    ifstream in("ecz_results.txt");
    string line;
    while(getline(in,line)) cout<<line<<endl;
    in.close(); return 0;
}`,insight:`Always close() the output file before opening it for reading. Unclosed files may not have been fully flushed to disk, so your reads could miss the last few lines.`}},{id:`c9`,title:`Switch Statement`,form:3,lesson:`The switch statement provides a clean way to handle multiple possible values of a single variable. It is a more readable alternative to long if-else if chains when testing one variable against several specific values.

Syntax:
switch (variable) {
    case value1: code; break;
    case value2: code; break;
    default: code;
}

THE BREAK STATEMENT IS CRITICAL. Without break, C++ continues executing the code of the NEXT case — this is called fall-through. Sometimes intentional when multiple values share the same action, but usually a bug.

Example of accidental fall-through:
case 1: cout << "Monday";   — forgot break!
case 2: cout << "Tuesday";  — this also runs when day==1!

default handles any value not matched by any case. Always include it as a safety net.

What switch can handle:
CAN: int, char, bool, enum values
CANNOT: double, float, string

Switch vs if-else:
Use switch when: testing one variable against specific values, many cases needed.
Use if-else when: testing ranges, multiple variables, complex conditions.

Common use cases in Zambia: menu systems, day-of-week programs, grade categories, command selection.`,code:`#include <iostream>
using namespace std;
int main() {
    int day;
    cout << "Enter day (1-7): ";
    cin >> day;
    switch(day) {
        case 1: cout << "Monday - School day" << endl; break;
        case 2: cout << "Tuesday - School day" << endl; break;
        case 6: cout << "Saturday - Football at Independence!" << endl; break;
        case 7: cout << "Sunday - Rest day" << endl; break;
        default: cout << "Another school day." << endl;
    }
    return 0;
}`,explanation:`switch(day) checks the value of day. Each case handles one value. break; exits the switch. default runs when no case matches. Without break, execution falls into the next case.`,ecz:`Switch statements appear as an alternative to if-else chains. The most common exam trap: forgetting break; causes fall-through. Expect a question asking what happens without break.`,question:{text:`What happens if you forget to add break; after a case in a switch statement?`,options:[`Compile error`,`The program skips that case`,`Execution falls into the next case`,`The switch exits automatically`],answer:2,hint:`Without break, C++ continues running the next case's code — called 'fall-through'.`},q2:{text:`Which C++ keyword handles values not matched by any case in a switch?`,options:[`else`,`otherwise`,`default`,`catch`],answer:2,hint:`default: is the fallback that runs when no case matches — always include it.`},q3:{text:`Can a C++ switch statement test a double (decimal) variable?`,options:[`Yes — works for all types`,`No — switch only works with integer types and char`,`Yes — but only positive doubles`,`No — switch only works with strings`],answer:1,hint:`switch requires an ordinal type (int, char, enum). Floating-point types like double are not allowed.`},trace:[{line:4,explanation:`cin >> day — user enters 6. day = 6.`,vars:{day:6},output:null},{line:5,explanation:`switch(day) — starts checking cases.`,vars:{day:6},output:null},{line:6,explanation:`case 1: — day is 6, not 1. Skip.`,vars:{day:6},output:null},{line:7,explanation:`case 2: — not 2. Skip.`,vars:{day:6},output:null},{line:8,explanation:`case 6: — matches! Execute cout.`,vars:{day:6},output:`Saturday - Football at Independence!`},{line:9,explanation:`break; — exits the switch. No other cases execute.`,vars:{day:6},output:`Saturday - Football at Independence!`}],worked:{scenario:`A school menu program shows different meal options based on the day number.`,problem:`Use switch to print the lunch menu for days 1–3. Day 1: Nshima and chicken, Day 2: Rice and beef, Day 3: Nshima and fish. Any other number: 'No menu'.`,steps:[{explain:`Read the day number.`,code:`int day;
cout << "Day (1-3): ";
cin >> day;`},{explain:`Use switch with a case for each day. Remember break after each.`,code:`switch (day) {
    case 1: cout << "Nshima and chicken" << endl; break;
    case 2: cout << "Rice and beef" << endl; break;
    case 3: cout << "Nshima and fish" << endl; break;`},{explain:`Add default for invalid input.`,code:`    default: cout << "No menu" << endl;
}`}],answer:`Input 2 → 'Rice and beef'. Input 5 → 'No menu'.`,answerCode:`#include <iostream>
using namespace std;
int main() {
    int day; cout << "Day (1-3): "; cin >> day;
    switch(day) {
        case 1: cout<<"Nshima and chicken"<<endl; break;
        case 2: cout<<"Rice and beef"<<endl; break;
        case 3: cout<<"Nshima and fish"<<endl; break;
        default: cout<<"No menu"<<endl;
    }
    return 0;
}`,insight:`Without break, execution falls through to the next case. In a menu like this, forgetting break on case 1 would print both 'Nshima and chicken' AND 'Rice and beef'.`}},{id:`c10`,title:`Structs`,form:4,lesson:`A struct in C++ is a user-defined data type that groups related variables of DIFFERENT types under one name. Instead of separate variables for a student's name, form, and score, you have one Student struct containing all three.

Defining a struct:
struct Student {
    string name;
    int form;
    double score;
};

Creating a struct variable:
Student pupil;
pupil.name = "Chanda Mutale";
pupil.form = 3;
pupil.score = 87.5;

Access fields using dot notation: pupil.name, pupil.form, pupil.score

Arrays of structs give you the real power:
Student myClass[30];
myClass[0].name = "First student";
myClass[0].score = 78.5;

Passing structs to functions:
void printStudent(Student s) { cout << s.name << endl; }
printStudent(pupil);

Struct vs separate variables:
Without struct you need string name1, name2; int form1, form2; double score1, score2;
With struct you just need Student students[30] — all data organised together.

Struct vs Class: struct members are public by default while class members are private by default. Use struct for simple data grouping and class for complex OOP with methods and encapsulation.`,code:`#include <iostream>
#include <string>
using namespace std;
struct Student {
    string name;
    int    form;
    double score;
};
void printStudent(Student s) {
    cout << "Name:  " << s.name << endl;
    cout << "Form:  " << s.form << endl;
    cout << "Score: " << s.score << "%" << endl;
}
int main() {
    Student pupil;
    pupil.name  = "Kapembwa Sinkala";
    pupil.form  = 4;
    pupil.score = 91.5;
    printStudent(pupil);
    return 0;
}`,explanation:`struct defines a custom data type. pupil.name accesses the name field. Structs can be passed to functions like any variable.`,question:{text:`How do you access the score field of a Student struct variable called pupil?`,options:[`Student.score`,`score.pupil`,`pupil->score`,`pupil.score`],answer:3,hint:`Fields in a struct are accessed using dot notation: variable.field`},q2:{text:`In C++, what is the default access level of struct members?`,options:[`private`,`protected`,`public`,`static`],answer:2,hint:`Unlike class, struct members are public by default.`},worked:{scenario:`A mining company stores ore sample data.`,problem:`Create a struct Sample with location (string), depth (int), grade (double). Store: Nchanga, 450m, 0.023 grade.`,steps:[{explain:`Define the struct before main.`,code:`struct Sample { string location; int depth; double grade; };`},{explain:`Declare and assign fields.`,code:`Sample ore; ore.location="Nchanga"; ore.depth=450; ore.grade=0.023;`},{explain:`Print the details.`,code:`cout<<ore.location<<": "<<ore.depth<<"m, grade "<<ore.grade<<endl;`}],answer:`Prints: Nchanga: 450m, grade 0.023`,answerCode:`struct Sample{string location;int depth;double grade;}; Sample ore; ore.location="Nchanga";ore.depth=450;ore.grade=0.023; cout<<ore.location<<": "<<ore.depth<<"m, grade "<<ore.grade;`,insight:`A struct groups related variables under one name — cleaner than 3 separate variables and easy to pass as one argument to a function.`},trace:[{line:11,explanation:`Student pupil; — creates a Student struct variable. All fields uninitialised.`,vars:{"pupil.name":`?`,"pupil.form":`?`,"pupil.score":`?`},output:null},{line:12,explanation:`pupil.name = 'Kapembwa Sinkala' — assigns name field using dot notation.`,vars:{"pupil.name":`Kapembwa Sinkala`,"pupil.form":`?`,"pupil.score":`?`},output:null},{line:13,explanation:`pupil.form = 4.`,vars:{"pupil.name":`Kapembwa Sinkala`,"pupil.form":4,"pupil.score":`?`},output:null},{line:14,explanation:`pupil.score = 91.5.`,vars:{"pupil.name":`Kapembwa Sinkala`,"pupil.form":4,"pupil.score":91.5},output:null},{line:15,explanation:`printStudent(pupil) — passes the whole struct to the function.`,vars:{"pupil.name":`Kapembwa Sinkala`,"pupil.form":4,"pupil.score":91.5},output:null},{line:5,explanation:`Inside printStudent: prints name.`,vars:{},output:`Name:  Kapembwa Sinkala`},{line:6,explanation:`Prints form.`,vars:{},output:`Name:  Kapembwa Sinkala
Form:  4`},{line:7,explanation:`Prints score.`,vars:{},output:`Name:  Kapembwa Sinkala
Form:  4
Score: 91.5%`}],q3:{text:`struct Point{int x;int y;}; — which correctly initialises a Point at (3,7)?`,options:[`Point p={3,7};`,`Point p(3,7);`,`Point p=new Point(3,7);`,`All of the above`],answer:3,hint:`All three syntaxes are valid ways to initialise a simple C++ struct.`}},{id:`c11`,title:`Classes & OOP Basics`,form:4,lesson:`Object-Oriented Programming is a paradigm that models the world as objects. Each object has data (attributes) and behaviour (methods). OOP makes programs easier to understand, maintain, and extend.

Core OOP concepts:

CLASS is a blueprint or template defining what attributes and methods objects of that type will have — like architectural plans for a building.

OBJECT is an instance of a class. You can create many objects from one class, each with its own data — like actual buildings built from the same plans.

CONSTRUCTOR is a special method that runs automatically when an object is created. It has the same name as the class and no return type. Used to initialise attributes.

ENCAPSULATION hides internal data from direct outside access:
private: members only accessible from inside the class.
public: members accessible from anywhere.

Why make attributes private? If balance is public, any code could write account.balance = 0 and wipe the account. Making it private means it can ONLY be changed through controlled methods like deposit() and withdraw() which can validate input first.

METHODS are functions that belong to a class and can access its private data.

The class approach models real-world systems naturally: a BankAccount class for Zanaco accounts, a Student class for ECZ registration, a Product class for a Lusaka market inventory system.`,code:`#include <iostream>
#include <string>
using namespace std;
class BankAccount {
private:
    string owner;
    double balance;
public:
    BankAccount(string name, double initial) {
        owner = name; balance = initial;
    }
    void deposit(double amount)  { balance += amount; }
    void withdraw(double amount) {
        if (amount <= balance) balance -= amount;
        else cout << "Insufficient funds!" << endl;
    }
    void printBalance() {
        cout << owner << ": K" << balance << endl;
    }
};
int main() {
    BankAccount acc("Mwila Banda", 1000.0); // Zanaco
    acc.deposit(500);
    acc.withdraw(200);
    acc.printBalance();
    return 0;
}`,explanation:`class defines the blueprint. private data is hidden from main(). public methods provide controlled access. The constructor sets up the object when created.`,ecz:`OOP basics are tested in Form 4. Know: class, private/public, constructor, and calling methods. Expect to write a simple class like BankAccount with deposit() and withdraw().`,question:{text:`What is Mwila's final balance after deposit(500) then withdraw(200)?`,options:[`K1,000`,`K1,300`,`K1,500`,`K800`],answer:1,hint:`1000 + 500 - 200 = ?`},q2:{text:`Why is the balance field declared private: in BankAccount?`,options:[`Faster access`,`Prevents direct modification from outside the class`,`Private uses less memory`,`Compiler requires it`],answer:1,hint:`Encapsulation: private hides data so it can only change through controlled methods.`},q3:{text:`What is the name of the special C++ method that runs automatically when an object is created?`,options:[`init()`,`create()`,`Constructor`,`begin()`],answer:2,hint:`The constructor has the same name as the class and runs automatically on object creation.`},trace:[{line:11,explanation:`BankAccount acc('Mwila', 1000) — constructor called. name='Mwila', balance=1000.`,vars:{name:`Mwila`,balance:1e3},output:null},{line:12,explanation:`acc.deposit(500) — calls deposit(500). balance = 1000 + 500 = 1500.`,vars:{name:`Mwila`,balance:1500},output:null},{line:13,explanation:`acc.withdraw(200) — checks: 200 <= 1500? YES. balance = 1500 - 200 = 1300.`,vars:{name:`Mwila`,balance:1300},output:null},{line:14,explanation:`acc.showBalance() — prints the balance.`,vars:{name:`Mwila`,balance:1300},output:`Mwila's balance: K1300.00`}],worked:{scenario:`A mining company stores ore sample data with multiple properties.`,problem:`Create a struct Sample with fields: location (string), depth (int), grade (double). Create one sample for 'Nchanga, 450m deep, 0.023 grade' and print it.`,steps:[{explain:`Define the struct before main.`,code:`struct Sample {
    string location;
    int depth;
    double grade;
};`},{explain:`In main, declare a Sample variable and assign its fields.`,code:`Sample ore;
ore.location = "Nchanga";
ore.depth = 450;
ore.grade = 0.023;`},{explain:`Print the sample details.`,code:`cout << ore.location << ": " << ore.depth << "m deep, grade " << ore.grade << endl;`}],answer:`Prints: Nchanga: 450m deep, grade 0.023`,answerCode:`#include <iostream>
#include <string>
using namespace std;
struct Sample { string location; int depth; double grade; };
int main() {
    Sample ore;
    ore.location="Nchanga"; ore.depth=450; ore.grade=0.023;
    cout<<ore.location<<": "<<ore.depth<<"m deep, grade "<<ore.grade<<endl;
    return 0;
}`,insight:`A struct groups related data under one name. Instead of 3 separate variables (location, depth, grade), you have one ore variable — cleaner and easier to pass to functions.`}},{id:`c12`,title:`Sorting Arrays (Bubble Sort)`,form:4,lesson:`Sorting means arranging data into a specific order. BUBBLE SORT is the simplest sorting algorithm — it repeatedly compares pairs of adjacent elements and swaps them if they are in the wrong order. The largest unsorted value bubbles up to its correct position after each pass.

How one pass works on {5, 3, 8, 1}:
Compare 5 and 3 — swap — {3, 5, 8, 1}
Compare 5 and 8 — no swap — {3, 5, 8, 1}
Compare 8 and 1 — swap — {3, 5, 1, 8}
After pass 1, the value 8 is in its correct final position.

The swap mechanism requires a temporary variable:
int temp = arr[j];
arr[j] = arr[j+1];
arr[j+1] = temp;
Without temp, you overwrite a value before saving it and the data is permanently lost.

Efficiency: bubble sort requires n-1 passes for n elements. After each pass, one more element is in its final position, so the inner loop can run one fewer comparison each time.

Performance: bubble sort is slow for large datasets — approximately n squared comparisons. Professional programmers use faster algorithms like quicksort. But bubble sort is simple to understand and implement, making it ideal for learning and for ECZ exams.`,code:`#include <iostream>
using namespace std;
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j]   = arr[j+1];
                arr[j+1] = temp;
            }
}
int main() {
    int scores[] = {72, 45, 88, 61, 93, 55};
    int n = 6;
    bubbleSort(scores, n);
    cout << "Sorted: ";
    for (int i = 0; i < n; i++)
        cout << scores[i] << " ";
    cout << endl;
    return 0;
}`,explanation:`Nested loops compare adjacent pairs. A temp variable holds one value during the swap. After sorting, values are in ascending order from index 0.`,ecz:`Bubble sort is the only sorting algorithm tested at secondary level. Know the swap using a temp variable. Expect to trace one pass of the sort on a small array.`,question:{text:`After bubble sort, what is the first (index 0) value in scores[] = {72,45,88,61,93,55}?`,options:[`72`,`45`,`55`,`61`],answer:1,hint:`Bubble sort arranges in ascending order. What is the smallest value?`},q2:{text:`What is the purpose of the temp variable when swapping arr[j] and arr[j+1]?`,options:[`Count swaps`,`Hold one value while the other overwrites it`,`Track sorted boundary`,`Store array size`],answer:1,hint:`Without temp you'd lose one value. temp=arr[j]; arr[j]=arr[j+1]; arr[j+1]=temp;`},q3:{text:`How many comparisons does bubble sort make on the first pass through 5 elements?`,options:[`5`,`4`,`3`,`10`],answer:1,hint:`First pass: compare (0,1),(1,2),(2,3),(3,4) — that is n-1 = 4 comparisons.`},trace:[{line:2,explanation:`int scores[] = {72,45,88,61} — 4-element array.`,vars:{scores:`[72,45,88,61]`},output:null},{line:4,explanation:`Outer pass i=0. j=0: compare 72 and 45. 72>45? YES — swap.`,vars:{scores:`[45,72,88,61]`,i:0,j:0},output:null},{line:4,explanation:`j=1: 72 vs 88. 72>88? NO. j=2: 88 vs 61. 88>61? YES — swap. End pass 0.`,vars:{scores:`[45,72,61,88]`,i:0},output:null},{line:3,explanation:`Pass i=1. j=0: 45 vs 72. No swap. j=1: 72 vs 61. Swap.`,vars:{scores:`[45,61,72,88]`,i:1},output:null},{line:3,explanation:`Pass i=2. j=0: 45 vs 61. No swap. Array sorted.`,vars:{scores:`[45,61,72,88]`,i:2},output:null},{line:8,explanation:`Print sorted array: 45 61 72 88.`,vars:{scores:`[45,61,72,88]`},output:`45 61 72 88`}],worked:{scenario:`A bank account class models Zanaco accounts with deposit and withdraw operations.`,problem:`Create a BankAccount class with a private balance, constructor, deposit(), withdraw(), and getBalance(). Test with K1000 starting balance.`,steps:[{explain:`Define the class with private balance and public methods.`,code:`class BankAccount {
private:
    double balance;
public:
    BankAccount(double initial) { balance = initial; }
    void deposit(double amt)   { balance += amt; }
    void withdraw(double amt)  { if (amt <= balance) balance -= amt; }
    double getBalance()        { return balance; }
};`},{explain:`In main, create an account and test operations.`,code:`BankAccount acc(1000);
acc.deposit(500);
acc.withdraw(200);
cout << "Balance: K" << acc.getBalance() << endl;`}],answer:`1000 + 500 - 200 = K1300. Prints: Balance: K1300`,answerCode:`#include <iostream>
using namespace std;
class BankAccount {
private: double balance;
public:
    BankAccount(double i){balance=i;}
    void deposit(double a){balance+=a;}
    void withdraw(double a){if(a<=balance)balance-=a;}
    double getBalance(){return balance;}
};
int main(){
    BankAccount acc(1000);
    acc.deposit(500); acc.withdraw(200);
    cout<<"Balance: K"<<acc.getBalance()<<endl;
    return 0;
}`,insight:`balance is private — external code cannot write acc.balance = 0. It can only be changed through deposit() and withdraw(). This is encapsulation — protecting data integrity.`}},{id:`c13`,title:`Recursion`,form:4,lesson:`Recursion is a technique where a function solves a problem by calling ITSELF. Each call works on a smaller version of the problem until it reaches a base case — a simple situation solved directly without further recursion.

Every recursive function MUST have:
1. BASE CASE — the simple case solved without recursion that stops the chain
2. RECURSIVE CASE — calls itself with a smaller input moving towards the base case

Without a base case, the function calls itself forever and crashes with a stack overflow error.

Tracing factorial(4):
factorial(4) calls factorial(3) and waits
  factorial(3) calls factorial(2) and waits
    factorial(2) calls factorial(1) and waits
      factorial(1) returns 1 — BASE CASE reached
    factorial(2) returns 2 times 1 = 2
  factorial(3) returns 3 times 2 = 6
factorial(4) returns 4 times 6 = 24

The call stack stores each function call in memory. Deep recursion uses significant memory and can eventually overflow the stack.

When to use recursion: problems that naturally break into smaller identical subproblems, tree traversal, mathematical sequences.

When NOT to use: when a simple loop would work — recursion has overhead from function call costs and memory for each stack frame.`,code:`#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) return 1;       // base case
    return n * factorial(n-1); // recursive case
}

long fibonacci(int n) {
    if (n <= 1) return n;       // base case
    return fibonacci(n-1) + fibonacci(n-2);
}

int main() {
    // How many ways to arrange 5 Chipolopolo players?
    cout << "5! = " << factorial(5) << endl;
    cout << "Fibonacci(8) = " << fibonacci(8) << endl;
    return 0;
}`,explanation:`factorial(5) calls factorial(4), which calls factorial(3)... until it hits factorial(1)=1. Then results multiply back up: 1×2×3×4×5=120.`,ecz:`Recursion questions always include factorial or Fibonacci. Know: base case stops the recursion, recursive case calls itself with a smaller value. Expect to trace factorial(4) step by step.`,question:{text:`What does factorial(4) return?`,options:[`4`,`8`,`24`,`16`],answer:2,hint:`4 × 3 × 2 × 1 = ?`},q2:{text:`What is Python's default recursion depth limit?`,options:[`100`,`1000`,`10000`,`Unlimited`],answer:1,hint:`Python's default is 1000 recursive calls. Raise with sys.setrecursionlimit(n).`},q3:{text:`What does memoisation do in recursive fibonacci()?`,options:[`Stores results so they aren't recalculated`,`Converts recursion to a loop`,`Limits recursion depth`,`Uses less memory`],answer:0,hint:`Without memoisation fibonacci(50) recalculates billions of values. Memoisation caches each result.`},trace:[{line:2,explanation:`factorial(4) called. n=4. Is n<=1? NO. Must compute 4 * factorial(3). Call stacks up.`,vars:{n:4,status:`waiting for factorial(3)`},output:null},{line:2,explanation:`factorial(3) called. n=3. 3<=1? NO. Waiting for factorial(2).`,vars:{n:3,status:`waiting for factorial(2)`},output:null},{line:2,explanation:`factorial(2). 2<=1? NO. Waiting for factorial(1).`,vars:{n:2,status:`waiting for factorial(1)`},output:null},{line:2,explanation:`factorial(1). 1<=1? YES — BASE CASE. Returns 1.`,vars:{n:1,returns:1},output:null},{line:2,explanation:`Unwinding: factorial(2) = 2 * 1 = 2. Returns 2.`,vars:{n:2,returns:2},output:null},{line:2,explanation:`factorial(3) = 3 * 2 = 6. Returns 6.`,vars:{n:3,returns:6},output:null},{line:2,explanation:`factorial(4) = 4 * 6 = 24. Returns 24. Back in main.`,vars:{n:4,returns:24},output:null},{line:9,explanation:`cout << factorial(4) prints 24.`,vars:{},output:`24`}],worked:{scenario:`A teacher wants to sort student scores in ascending order for a grade report.`,problem:`Use bubble sort to sort the array {65, 42, 88, 31, 76} in ascending order and print the result.`,steps:[{explain:`Declare the array and its size.`,code:`int scores[] = {65, 42, 88, 31, 76};
int n = 5;`},{explain:`Outer loop runs n-1 passes. Inner loop compares adjacent pairs.`,code:`for (int i = 0; i < n-1; i++)
    for (int j = 0; j < n-1-i; j++)`},{explain:`Swap if left element is greater than right.`,code:`        if (scores[j] > scores[j+1]) {
            int temp = scores[j];
            scores[j] = scores[j+1];
            scores[j+1] = temp;
        }`},{explain:`Print the sorted array.`,code:`for (int k = 0; k < n; k++)
    cout << scores[k] << " ";`}],answer:`Sorted: 31 42 65 76 88`,answerCode:`#include <iostream>
using namespace std;
int main() {
    int scores[]={65,42,88,31,76}, n=5;
    for(int i=0;i<n-1;i++)
        for(int j=0;j<n-1-i;j++)
            if(scores[j]>scores[j+1]){
                int t=scores[j]; scores[j]=scores[j+1]; scores[j+1]=t;
            }
    for(int k=0;k<n;k++) cout<<scores[k]<<" ";
    return 0;
}`,insight:`The inner loop runs n-1-i times because after each pass, the largest unsorted element 'bubbles' to its correct position at the end — no need to check it again.`}},{id:`c14`,title:`2D Arrays (Matrices)`,form:4,lesson:`A 2D array is an array of arrays — a table or grid with rows and columns. Where a regular array gives you a single row of boxes, a 2D array gives you a complete grid.

Declaration: int grid[3][4];
This creates a grid with 3 rows and 4 columns giving 12 total elements.
The first index is row (0 to 2) and second index is column (0 to 3).
grid[0][0] is the top-left corner and grid[2][3] is the bottom-right corner.

Initialisation with values:
int marks[3][4] = {
    {78, 85, 91, 74},  // row 0
    {65, 72, 68, 80},  // row 1
    {90, 88, 95, 92}   // row 2
};

Processing with nested loops — outer loop controls rows, inner controls columns:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        cout << marks[i][j] << " ";
    }
    cout << endl;
}

Real-world 2D array applications in Zambia:
Mark sheets where rows are students and columns are subjects.
Rainfall grids where rows are months and columns are weather stations.
Game boards and seating plans.`,code:`#include <iostream>
using namespace std;
int main() {
    // Term marks for 3 students, 4 subjects
    int marks[3][4] = {
        {78, 85, 91, 74},  // Chanda
        {65, 72, 68, 80},  // Mwamba
        {90, 88, 95, 92}   // Bupe
    };
    string names[3] = {"Chanda","Mwamba","Bupe"};
    for (int i = 0; i < 3; i++) {
        int total = 0;
        for (int j = 0; j < 4; j++)
            total += marks[i][j];
        cout << names[i] << " avg: "
             << total/4 << "%" << endl;
    }
    return 0;
}`,explanation:`marks[i][j] accesses row i, column j. The outer loop iterates students; the inner loop iterates subjects. total/4 computes the average across 4 subjects.`,question:{text:`What is Chanda's average mark (row 0: 78, 85, 91, 74)?`,options:[`82%`,`84%`,`86%`,`80%`],answer:1,hint:`(78 + 85 + 91 + 74) / 4 = 328 / 4 = ?`},q2:{text:`Given int grid[3][4], how many total elements does it hold?`,options:[`3`,`4`,`7`,`12`],answer:3,hint:`Total elements = rows × columns = 3 × 4 = 12.`},q3:{text:`In int marks[3][4], what does marks[2][0] access?`,options:[`Row 2 column 0 — start of third row`,`Row 0 column 2`,`Element 6 overall`,`Out of bounds`],answer:0,hint:`First index is row (0-based), second is column. marks[2][0] is row 3, first column.`},trace:[{line:2,explanation:`int marks[3][4] — 3 rows, 4 columns. Total 12 integers. Row 0 = Chanda.`,vars:{marks:`3×4 grid`},output:null},{line:8,explanation:`Outer loop r=0 (Chanda's row). total=0.`,vars:{r:0,total:0},output:null},{line:9,explanation:`Inner loop c=0: total += marks[0][0] = 78.`,vars:{r:0,c:0,total:78},output:null},{line:9,explanation:`c=1: +=85=163. c=2: +=91=254. c=3: +=74=328. Inner loop ends.`,vars:{r:0,c:3,total:328},output:null},{line:11,explanation:`cout prints row 0 average: 328/4 = 82.`,vars:{r:0,total:328},output:`Row 0 avg: 82`},{line:8,explanation:`r=1 (row 1). Repeats for rows 1 and 2.`,vars:{r:1},output:`Row 0 avg: 82
Row 1 avg: ...
Row 2 avg: ...`}],worked:{scenario:`A school fete is selling raffle tickets. Prizes double each round.`,problem:`Write a recursive function power(base, exp) that calculates base^exp. Test with 2^8 (256 tickets possible).`,steps:[{explain:`Base case: any number to the power 0 is 1.`,code:`int power(int base, int exp) {
    if (exp == 0) return 1;`},{explain:`Recursive case: base^exp = base × base^(exp-1).`,code:`    return base * power(base, exp - 1);
}`},{explain:`Call and print.`,code:`cout << "2^8 = " << power(2, 8) << endl;`}],answer:`power(2,8) = 2×power(2,7) = 2×2×...×power(2,0) = 2×2×2×2×2×2×2×2×1 = 256`,answerCode:`#include <iostream>
using namespace std;
int power(int base, int exp) {
    if (exp == 0) return 1;
    return base * power(base, exp - 1);
}
int main() {
    cout << "2^8 = " << power(2, 8) << endl;
    return 0;
}`,insight:`Every recursive function needs a base case that returns without calling itself. Without if (exp==0) return 1, the function would recurse forever and crash with a stack overflow.`}},{id:`c15`,title:`Inheritance (OOP)`,form:4,lesson:`Inheritance allows a new class (child) to automatically receive all attributes and methods of an existing class (parent), then add its own unique features on top.

This models real-world hierarchies naturally:
Person leads to Student leads to Prefect.
BankAccount leads to SavingsAccount leads to PremiumSavingsAccount.

Syntax: class Student : public Person { ... };
The colon means inherits from. public means public members of Person remain public in Student.

What Student inherits from Person:
All public attributes like name and age.
All public methods like introduce().

What Student adds:
Its own new attributes like school and gpa.
Its own new methods like study().

Access specifiers in inheritance:
public members of parent — accessible in child and from outside.
protected members of parent — accessible in child but NOT from outside.
private members of parent — NOT accessible in child at all.

Method overriding: a child class can redefine a method from the parent to give it different behaviour. Add virtual in the parent to enable proper polymorphism.

Benefits of inheritance:
Code reuse: write common code once in parent class.
Extensibility: add new types without modifying existing code.
Consistency: all subclasses share the same interface.`,code:`#include <iostream>
#include <string>
using namespace std;

class Person {
public:
    string name;
    int age;
    void introduce() {
        cout << "Hi, I am " << name
             << ", aged " << age << endl;
    }
};

class Student : public Person {
public:
    string school;
    double gpa;
    void study() {
        cout << name << " studies at "
             << school << endl;
    }
};

int main() {
    Student s;
    s.name   = "Chilufya Mwale";
    s.age    = 16;
    s.school = "Kabulonga Girls, Lusaka";
    s.introduce(); // inherited from Person
    s.study();
    return 0;
}`,explanation:`Student inherits name, age, and introduce() from Person. It adds school and study(). s.introduce() works even though it's defined in Person — that's inheritance.`,question:{text:`Which method does Student inherit from Person?`,options:[`study()`,`school`,`introduce()`,`gpa`],answer:2,hint:`introduce() is defined in Person and inherited by Student automatically.`},q2:{text:`Can a child class access a private: field of its parent in C++?`,options:[`Yes — inheritance gives full access`,`No — use protected: instead`,`Yes — with the super keyword`,`Only in the same file`],answer:1,hint:`private members are hidden even from child classes. Use protected: to allow child access.`},worked:{scenario:`A school models students inheriting from a Person base class.`,problem:`Create Person with name and introduce(). Create Student extending Person with school and study(). Test with student at Munali Boys.`,steps:[{explain:`Define Person base class.`,code:`class Person { public: string name; void introduce(){cout<<"Hi, I am "<<name<<endl;} };`},{explain:`Define Student inheriting from Person.`,code:`class Student : public Person { public: string school; void study(){cout<<name<<" studies at "<<school<<endl;} };`},{explain:`Create and test.`,code:`Student s; s.name="Chilufya"; s.school="Munali Boys"; s.introduce(); s.study();`}],answer:`Hi, I am Chilufya / Chilufya studies at Munali Boys`,answerCode:`class Person{public: string name; void introduce(){cout<<"Hi, I am "<<name<<endl;}}; class Student:public Person{public: string school; void study(){cout<<name<<" studies at "<<school<<endl;}}; Student s; s.name="Chilufya"; s.school="Munali Boys"; s.introduce(); s.study();`,insight:`Student inherits all public members of Person automatically — name and introduce() are available without rewriting them.`},trace:[{line:12,explanation:`Student s — creates a Student object. Student inherits from Person, so it has name, age, school, gpa.`,vars:{"s.name":`?`,"s.school":`?`,"s.gpa":`?`},output:null},{line:13,explanation:`s.name = 'Chilufya' — sets inherited name field from Person.`,vars:{"s.name":`Chilufya`,"s.school":`?`,"s.gpa":`?`},output:null},{line:14,explanation:`s.age = 16 — sets inherited age field.`,vars:{"s.name":`Chilufya`,"s.age":16,"s.school":`?`},output:null},{line:15,explanation:`s.school = 'Kabulonga Girls' — sets Student's own field.`,vars:{"s.name":`Chilufya`,"s.age":16,"s.school":`Kabulonga Girls`},output:null},{line:16,explanation:`s.introduce() — inherited from Person. Uses s.name and s.age.`,vars:{},output:`Hi, I am Chilufya, aged 16`},{line:17,explanation:`s.study() — Student's own method. Uses both name and school.`,vars:{},output:`Hi, I am Chilufya, aged 16
Chilufya studies at Kabulonga Girls`}],q3:{text:`What syntax calls the parent constructor from a child class in C++?`,options:[`super()`,`parent()`,`base()`,`Child():Parent(){}`],answer:3,hint:`C++ uses initialiser list syntax: ChildClass(args):ParentClass(args){}`}},{id:`c16`,title:`Vectors (Dynamic Arrays)`,form:4,lesson:`A vector is C++ dynamic array — an array that can grow and shrink automatically as needed. Unlike regular arrays with fixed size declared at compile time, vectors resize themselves at runtime.

Include: #include <vector>

Declaration examples:
vector<int> scores; creates an empty vector.
vector<int> scores(10); creates a vector with 10 elements.
vector<int> scores = {78, 91, 55, 63}; creates with initial values.

Essential vector operations:
push_back(value) adds value to the END and increases size by 1.
pop_back() removes the LAST element and decreases size by 1.
size() returns the current number of elements.
at(index) accesses element with bounds checking — throws exception if out of bounds.
[index] accesses element without bounds checking — same risk as regular arrays.
empty() returns true if the vector contains no elements.
clear() removes all elements.

Iterating:
for (int i = 0; i < scores.size(); i++) cout << scores[i];
Modern C++ range-based for: for (int score : scores) cout << score;

Vector vs Array:
Array has fixed size, faster access, and simpler syntax.
Vector has dynamic size, is slightly slower, but safer and has more features.

When to use vectors: when you do not know in advance how many items you will have.`,code:`#include <iostream>
#include <vector>
#include <string>
using namespace std;
int main() {
    vector<string> squad;
    squad.push_back("Patson Daka");
    squad.push_back("Fashion Sakala");
    squad.push_back("Kings Kangwa");

    cout << "Chipolopolo Squad:" << endl;
    for (int i = 0; i < squad.size(); i++)
        cout << i+1 << ". " << squad[i] << endl;

    squad.push_back("Enock Mwepu");
    cout << "After addition: " << squad.size()
         << " players" << endl;
    squad.pop_back();
    cout << "After removal: " << squad.size()
         << " players" << endl;
    return 0;
}`,explanation:`push_back() adds to the end. pop_back() removes the last element. size() returns the current count. Unlike arrays, vectors resize automatically — no need to declare a fixed size.`,question:{text:`After push_back() three times then one more push_back() then pop_back(), what is squad.size()?`,options:[`2`,`3`,`4`,`5`],answer:1,hint:`3 + 1 - 1 = ?`},q2:{text:`What is the key advantage of vector over a regular array?`,options:[`Vectors are always faster`,`Vectors resize automatically`,`Vectors use less memory`,`Vectors hold multiple types`],answer:1,hint:`The main advantage: you don't declare a fixed size — vectors grow automatically.`},q3:{text:`Which method accesses the last element of a vector v safely?`,options:[`v.last()`,`v[-1]`,`v.back()`,`v[v.size()]`],answer:2,hint:`v.back() returns the last element. v[-1] is Python syntax — it doesn't work in C++.`},trace:[{line:4,explanation:`vector<string> squad — empty vector. Size = 0. It will grow automatically.`,vars:{squad:`[]`,size:0},output:null},{line:5,explanation:`squad.push_back('Daka') — adds to end. Size = 1.`,vars:{squad:`['Daka']`,size:1},output:null},{line:6,explanation:`push_back('Sakala'). Size = 2.`,vars:{squad:`['Daka','Sakala']`,size:2},output:null},{line:7,explanation:`push_back('Kangwa'). Size = 3.`,vars:{squad:`['Daka','Sakala','Kangwa']`,size:3},output:null},{line:8,explanation:`cout << squad.size() — prints 3.`,vars:{size:3},output:`3`},{line:9,explanation:`squad.pop_back() — removes last element ('Kangwa'). Size = 2.`,vars:{squad:`['Daka','Sakala']`,size:2},output:`3`},{line:10,explanation:`cout << squad[0] — index 0 is 'Daka'.`,vars:{},output:`3
Daka`}],worked:{scenario:`ECZ records 3 students' marks for 4 subjects in a 2D array.`,problem:`Store and print this mark sheet: Row 0 (Chanda): 78,85,91,74. Row 1 (Mwamba): 65,72,68,80. Calculate each student's average.`,steps:[{explain:`Declare and initialise the 2D array.`,code:`int marks[2][4] = {{78,85,91,74},{65,72,68,80}};`},{explain:`Use nested loops — outer for students, inner for subjects.`,code:`for (int r = 0; r < 2; r++) {
    int total = 0;
    for (int c = 0; c < 4; c++)
        total += marks[r][c];`},{explain:`Calculate and print each student's average.`,code:`    cout << "Student " << r << " avg: " << total/4.0 << endl;
}`}],answer:`Student 0 avg: 82.0 / Student 1 avg: 71.25`,answerCode:`#include <iostream>
using namespace std;
int main() {
    int marks[2][4]={{78,85,91,74},{65,72,68,80}};
    for(int r=0;r<2;r++){
        int total=0;
        for(int c=0;c<4;c++) total+=marks[r][c];
        cout<<"Student "<<r<<" avg: "<<total/4.0<<endl;
    }
    return 0;
}`,insight:`marks[r][c] uses two indices. First index is the row (student), second is the column (subject). marks[1][2] is row 1 (Mwamba), column 2 = 68.`}},{id:`c17`,title:`Linked Lists`,form:4,lesson:`A linked list is a data structure where each element called a node contains data AND a pointer to the next node. Unlike arrays where elements are stored consecutively, linked list nodes can be scattered anywhere in memory, connected by pointers.

Each node structure:
struct Node { int data; Node* next; };
The last node's next pointer is nullptr — this marks the end of the list.

Building a linked list:
Node* head = new Node{10, nullptr};
head->next = new Node{20, nullptr};
head->next->next = new Node{30, nullptr};

Traversal — always use a separate pointer, never move head:
Node* curr = head;
while (curr != nullptr) {
    cout << curr->data << " ";
    curr = curr->next;
}

Why NOT move head? If you do head = head->next, you lose the reference to the first node permanently and can never get back to the start of the list.

Linked list vs Array:
Array has fast random access (arr[5] is instant) and fixed size.
Linked list has slow access (must traverse from head) but dynamic size and efficient insertions.

The -> operator accesses a member through a pointer. curr->data is the same as (*curr).data.`,code:`#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {
    // Build list: 10 -> 20 -> 30
    Node* head = new Node{10, nullptr};
    head->next = new Node{20, nullptr};
    head->next->next = new Node{30, nullptr};

    // Traverse and print
    cout << "Mine shaft depths (m): ";
    Node* curr = head;
    while (curr != nullptr) {
        cout << curr->data << " ";
        curr = curr->next;
    }
    cout << endl;
    return 0;
}`,explanation:`Each Node holds data and a next pointer. new Node{} allocates memory. We traverse by following next pointers until nullptr (end of list). head points to the first node.`,question:{text:`What does nullptr represent in a linked list node?`,options:[`Zero value data`,`The head of the list`,`The end of the list (no next node)`,`An error`],answer:2,hint:`nullptr means 'points to nothing' — used to mark the last node.`},q2:{text:`What is the time complexity of accessing the 5th element of a linked list?`,options:[`O(1) — instant`,`O(n) — traverse from head`,`O(log n)`,`O(5) — fixed steps`],answer:1,hint:`No index exists — you must follow next pointers from head, visiting each node.`},worked:{scenario:`A simple linked list stores student IDs.`,problem:`Create nodes 10, 20, 30 as a linked list and traverse to print all values.`,steps:[{explain:`Define Node struct.`,code:`struct Node { int data; Node* next; };`},{explain:`Create nodes and link them.`,code:`Node* head=new Node{10,nullptr}; head->next=new Node{20,nullptr}; head->next->next=new Node{30,nullptr};`},{explain:`Traverse with a pointer.`,code:`Node* curr=head; while(curr){cout<<curr->data<<" "; curr=curr->next;}`}],answer:`Prints: 10 20 30`,answerCode:`struct Node{int data;Node* next;}; Node* head=new Node{10,nullptr}; head->next=new Node{20,nullptr}; head->next->next=new Node{30,nullptr}; Node* curr=head; while(curr){cout<<curr->data<<" "; curr=curr->next;}`,insight:`Always traverse with a separate curr pointer — if you move head forward, you lose the reference to the start of the list permanently.`},trace:[{line:3,explanation:`Node* head = new Node{10, nullptr} — allocates first node on heap. data=10, next=nullptr.`,vars:{head:`→Node(10,null)`},output:null},{line:4,explanation:`head->next = new Node{20, nullptr} — second node. head→10→20→null.`,vars:{head:`→10→20→null`},output:null},{line:5,explanation:`head->next->next = new Node{30, nullptr} — third node. head→10→20→30→null.`,vars:{head:`→10→20→30→null`},output:null},{line:6,explanation:`Node* curr = head — curr starts at head (node 10). We traverse with curr, not head.`,vars:{curr:`→10`},output:null},{line:7,explanation:`while(curr) — curr is not null. Print curr->data = 10. curr = curr->next → node 20.`,vars:{curr:`→20`},output:`10`},{line:7,explanation:`curr = node 20. Print 20. curr → node 30.`,vars:{curr:`→30`},output:`10 20`},{line:7,explanation:`curr = node 30. Print 30. curr = nullptr. while(nullptr) is false — loop exits.`,vars:{curr:`null`},output:`10 20 30`}],q3:{text:`In C++, what keyword allocates memory for a new linked list node at runtime?`,options:[`malloc`,`alloc`,`new`,`create`],answer:2,hint:`new Node{data, nullptr} allocates heap memory and returns a pointer to the new node.`}},{id:`c18`,title:`Templates`,form:4,lesson:`Templates allow you to write a function or class ONCE and have it work automatically with multiple different data types. Instead of writing separate functions for int, double, and string, you write one template and the compiler generates the appropriate version for each type used.

Function template syntax:
template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}

T is a placeholder type parameter. When you call findMax(450, 820), the compiler sees both are int, substitutes int for T, and generates the correct function automatically.

Type deduction: C++ automatically deduces T from the arguments.
findMax(450, 820) makes T become int.
findMax(3.14, 2.71) makes T become double.
findMax('A', 'Z') makes T become char.

Class templates work the same way:
template <typename T>
class Stack { T data[100]; int top; };
Stack<int> intStack;
Stack<string> stringStack;

The Standard Template Library (STL): C++ comes with rich pre-built templates including vector, list, map, and sort. These are production-quality implementations you can use directly.

Templates are powerful but can produce confusing error messages when types do not match. Always ensure operations used inside the template are supported by the types you pass.`,code:`#include <iostream>
using namespace std;

template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}

template <typename T>
void printArray(T arr[], int n) {
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    // Works for any type!
    cout << findMax(450, 820) << endl;    // ints
    cout << findMax(3.14, 2.71) << endl; // doubles
    cout << findMax('A', 'Z') << endl;   // chars

    int scores[] = {78, 91, 55, 63};
    printArray(scores, 4);
    return 0;
}`,explanation:`template <typename T> lets T represent any type. The compiler creates separate versions for int, double, and char automatically. This avoids writing the same function three times.`,question:{text:`What does findMax(450, 820) return?`,options:[`450`,`820`,`1270`,`135`],answer:1,hint:`findMax returns the larger of the two values.`},q2:{text:`What does typename T mean in template<typename T>?`,options:[`T is a variable`,`T is a placeholder for any data type`,`T must be an integer`,`T is a class`],answer:1,hint:`typename T declares T as a placeholder. The compiler substitutes the actual type at the call site.`},q3:{text:`You call findMax(3.14, 2.71). What type does T become?`,options:[`int`,`float`,`double`,`string`],answer:2,hint:`3.14 and 2.71 are double literals. The compiler deduces T=double automatically.`},trace:[{line:5,explanation:`findMax(450, 820) called. Compiler deduces T=int. Compares 450 > 820.`,vars:{T:`int`,a:450,b:820},output:null},{line:6,explanation:`450 > 820 is false → return b (820).`,vars:{T:`int`,returns:820},output:null},{line:17,explanation:`cout << findMax(450, 820) prints 820.`,vars:{},output:`820`},{line:18,explanation:`findMax(3.14, 2.71) — T=double. 3.14 > 2.71 TRUE → return 3.14.`,vars:{T:`double`,returns:3.14},output:`820
3.14`},{line:20,explanation:`printArray(scores, 4) — T=int. Loops and prints each element.`,vars:{T:`int`},output:`820
3.14
78 91 55 63`}],worked:{scenario:`A Zambian data analysis tool needs to find the maximum value in arrays of different types.`,problem:`Write a template function maxOf(a, b) that returns the larger value. Test with int, double, and char.`,steps:[{explain:`Define the template function with typename T as a placeholder.`,code:`template <typename T>
T maxOf(T a, T b) {
    return (a > b) ? a : b;
}`},{explain:`Call the function with different types — the compiler generates the right version.`,code:`cout << maxOf(450, 820) << endl;
cout << maxOf(3.14, 2.71) << endl;
cout << maxOf('Z', 'A') << endl;`}],answer:`820 / 3.14 / Z`,answerCode:`template <typename T>
T maxOf(T a, T b) { return (a>b)?a:b; }
int main(){
    cout<<maxOf(450,820)<<endl;
    cout<<maxOf(3.14,2.71)<<endl;
    cout<<maxOf('Z','A')<<endl;
    return 0;
}`,insight:`The compiler creates three separate functions: maxOf<int>, maxOf<double>, maxOf<char>. You write the logic once; the compiler handles the type-specific versions automatically.`}}]},Python:{color:`#27ae60`,accent:`#d4f5e1`,icon:`🟢`,topics:[{id:`py1`,title:`Introduction to Python`,form:1,lesson:`Python is one of the most popular programming languages in the world, used by Google, Netflix, NASA, and thousands of Zambian tech startups. It was created by Guido van Rossum in 1991 and named after the British comedy group Monty Python, not the snake.

What makes Python special for beginners:
Simple, readable syntax that resembles English.
No need to declare variable types in advance.
No need for a main() function or BEGIN and END blocks.
Runs code line by line (interpreted, not compiled).
Vast library of free tools for data, web, science, and AI.

Your first Python program is just one line: print("Hello, Zambia!")

Compared to Pascal which needs PROGRAM, BEGIN, and END, Python just runs.

Comments in Python use the # symbol. Everything after # on a line is ignored:
# This is a comment
print("This runs")  # This comment is at the end of a line

print() tips:
print("A", "B", "C") prints A B C with a space between each.
print("A", "B", sep="-") prints A-B using a custom separator.
print("No newline", end="") prevents the automatic newline.
print() with no arguments prints a blank line.

Python is the language of data science, machine learning, and automation — skills increasingly valuable in Zambia's growing digital economy.`,code:`# My first Python program
print("Muli bwanji! Welcome to Python!")
print("I study at Kabulonga Boys Secondary School")
print("Python is simple and powerful!")`,explanation:`print() outputs text. Lines starting with # are comments — Python ignores them. No semicolons or BEGIN/END needed!`,question:{text:`Chisomo wants to print 'Go Green Buffaloes!' in Python. Which line is correct?`,options:[`WriteLn('Go Green Buffaloes!');`,`cout << 'Go Green Buffaloes!';`,`print('Go Green Buffaloes!')`,`echo 'Go Green Buffaloes!'`],answer:2,hint:`Python uses print() to display output.`},q2:{text:`What does a line starting with # do in Python?`,options:[`Crashes the program`,`Prints a heading`,`Is a comment — Python ignores it`,`Imports a module`],answer:2,hint:`# marks a comment. Python skips it entirely — it is a note for the programmer.`},q3:{text:`print('Zambia','is','great') — what separator appears between words by default?`,options:[`Nothing`,`A comma`,`A space`,`A newline`],answer:2,hint:`print() uses sep=' ' (a space) by default between multiple arguments.`},trace:[{line:1,explanation:`# My first Python program — this is a comment. Python ignores it completely.`,vars:{},output:null},{line:2,explanation:`print('Muli bwanji! Welcome to Python!') — outputs the first line.`,vars:{},output:`Muli bwanji! Welcome to Python!`},{line:3,explanation:`print('I study at Kabulonga Boys Secondary') — outputs the second line.`,vars:{},output:`Muli bwanji! Welcome to Python!
I study at Kabulonga Boys Secondary`},{line:4,explanation:`print('Python is simple and powerful!') — third line. Program ends — no END. or return needed.`,vars:{},output:`Muli bwanji! Welcome to Python!
I study at Kabulonga Boys Secondary
Python is simple and powerful!`}],worked:{scenario:`A simple linked list stores student IDs for a dynamic registration queue.`,problem:`Create a linked list with nodes containing integer data. Add nodes with values 10, 20, 30. Traverse and print the list.`,steps:[{explain:`Define the Node struct with data and a pointer to the next node.`,code:`struct Node {
    int data;
    Node* next;
};`},{explain:`Create three nodes using new and link them.`,code:`Node* head = new Node{10, nullptr};
head->next  = new Node{20, nullptr};
head->next->next = new Node{30, nullptr};`},{explain:`Traverse using a pointer, printing each node's data.`,code:`Node* curr = head;
while (curr != nullptr) {
    cout << curr->data << " ";
    curr = curr->next;
}`}],answer:`Prints: 10 20 30`,answerCode:`#include <iostream>
using namespace std;
struct Node { int data; Node* next; };
int main(){
    Node* head=new Node{10,nullptr};
    head->next=new Node{20,nullptr};
    head->next->next=new Node{30,nullptr};
    Node* curr=head;
    while(curr!=nullptr){cout<<curr->data<<" "; curr=curr->next;}
    return 0;
}`,insight:`Always traverse with a separate curr pointer — never move head. If you do head = head->next, you lose the reference to the start of the list permanently.`}},{id:`py2`,title:`Variables & Input`,form:1,lesson:`Python handles variables differently from Pascal and C++. You do NOT need to declare a variable type — Python figures it out automatically from the value you assign. This is called dynamic typing.

Simply write: variableName = value
Python creates the variable and assigns the type automatically:
age = 16 means Python knows this is an integer.
score = 87.5 means Python knows this is a float.
name = "Chanda" means Python knows this is a string.
passed = True means Python knows this is a boolean.

The input() function ALWAYS returns a STRING — no matter what the user types. This is critical:
age = input("Enter age: ") makes age a STRING, even if the user types 25.
age = int(input("Enter age: ")) makes age an INTEGER.

Type conversion functions:
int("25") returns 25
float("3.14") returns 3.14
str(25) returns "25"

If conversion fails (for example int("hello")), Python raises a ValueError and the program crashes unless you handle the error.

Variable naming rules:
Can contain letters, numbers, and underscores.
Cannot start with a number.
Case sensitive: name and Name are different variables.
Use snake_case style: first_name, exam_score, total_marks.

Multiple assignment: a, b = 10, 20 assigns 10 to a and 20 to b in one line. This also enables elegant swapping: a, b = b, a`,code:`name   = input("Enter your name: ")
form   = int(input("Enter your form (1-4): "))
school = "Matero Boys Secondary, Lusaka"

print("Name:", name)
print("Form:", form)
grad_year = 2024 + (4 - form)
print("Completing Form 4 in:", grad_year)`,explanation:`int() converts the input string to a number. Variables are created simply by assignment. Python automatically infers the type.`,question:{text:`Ngoza is Form 2. Using 2024 + (4 - form), what year will she complete Form 4?`,options:[`2024`,`2025`,`2026`,`2027`],answer:2,hint:`2024 + (4 - 2) = ?`},q2:{text:`A user types '25' when asked for age. What type does input() return?`,options:[`int`,`float`,`str`,`number`],answer:2,hint:`input() ALWAYS returns a string, even if the user types a number.`},q3:{text:`What does int('abc') do in Python?`,options:[`Returns 0`,`Returns None`,`Raises ValueError`,`Converts to ASCII`],answer:2,hint:`'abc' cannot become an integer. Python raises ValueError: invalid literal for int().`},trace:[{line:1,explanation:`name = input('Enter your name: ') — input() always returns a STRING. User types 'Ngoza'.`,vars:{name:`Ngoza`},output:`Enter your name: Ngoza`},{line:2,explanation:`form = int(input('Enter your form: ')) — input returns '2' (string), int() converts it to 2.`,vars:{name:`Ngoza`,form:2},output:`Enter your name: Ngoza
Enter your form: 2`},{line:3,explanation:`school = 'Matero Boys Secondary, Lusaka' — simple string assignment.`,vars:{name:`Ngoza`,form:2,school:`Matero Boys...`},output:null},{line:5,explanation:`print('Name:', name) — prints the name.`,vars:{name:`Ngoza`},output:`Enter your name: Ngoza
Enter your form: 2
Name: Ngoza`},{line:6,explanation:`print('Form:', form) — prints form as integer.`,vars:{form:2},output:`...
Name: Ngoza
Form: 2`},{line:7,explanation:`grad_year = 2024 + (4 - form) → 2024 + (4-2) = 2026.`,vars:{form:2,grad_year:2026},output:null},{line:8,explanation:`print('Completing Form 4 in:', grad_year) — prints graduation year.`,vars:{grad_year:2026},output:`...
Form: 2
Completing Form 4 in: 2026`}],worked:{scenario:`A Zambian data analysis tool needs to find the maximum value in arrays of different types.`,problem:`Write a template function maxOf(a, b) that returns the larger value. Test with int, double, and char.`,steps:[{explain:`Define the template function with typename T as a placeholder.`,code:`template <typename T>
T maxOf(T a, T b) {
    return (a > b) ? a : b;
}`},{explain:`Call the function with different types — the compiler generates the right version.`,code:`cout << maxOf(450, 820) << endl;      // T=int
cout << maxOf(3.14, 2.71) << endl;    // T=double
cout << maxOf('Z', 'A') << endl;      // T=char`}],answer:`820 / 3.14 / Z`,answerCode:`#include <iostream>
using namespace std;
template <typename T>
T maxOf(T a, T b) { return (a>b)?a:b; }
int main(){
    cout<<maxOf(450,820)<<endl;
    cout<<maxOf(3.14,2.71)<<endl;
    cout<<maxOf('Z','A')<<endl;
    return 0;
}`,insight:`The compiler creates three separate functions: maxOf<int>, maxOf<double>, maxOf<char>. You write the logic once; the compiler handles the type-specific versions automatically.`}},{id:`py3`,title:`Conditions (if / elif / else)`,form:2,lesson:`Python uses if, elif, and else for decision-making. Python's syntax is unique because it uses INDENTATION (spaces) to define code blocks instead of curly braces or BEGIN and END.

The spacing at the start of each line is PART OF THE SYNTAX — not just for readability. Getting indentation wrong is a syntax error that prevents the program from running.

The standard pattern:
if condition:
    code that runs when True (must be indented 4 spaces)
elif another_condition:
    code that runs when first is False but this is True
else:
    code that runs when all above are False

Every if, elif, and else line MUST end with a colon. Missing the colon is the most common Python syntax error for beginners.

Python logical operators use English words:
and means both conditions must be true.
or means at least one must be true.
not reverses a boolean value.

Python comparison operators: == (equal), != (not equal), > (greater), < (less), >= (greater or equal), <= (less or equal)

f-strings are a clean way to embed variables in text:
print(f"Hello {name}, you scored {score}%")
The f before the quote and curly braces around variable names — Python replaces them with the actual values.`,code:`level = float(input("Enter water level in metres: "))

if level >= 108:
    status = "Flood Warning!"
elif level >= 95:
    status = "Peak Tourism Season"
elif level >= 70:
    status = "Normal – activities safe"
else:
    status = "Low Season"

print(f"Level: {level}m  |  Status: {status}")`,explanation:`elif is Python's 'else if'. Indentation defines which code belongs inside each block. f-strings use {curly braces} to embed variables.`,question:{text:`The Zambezi River at Victoria Falls measures 82 metres. What status appears?`,options:[`Flood Warning!`,`Peak Tourism Season`,`Normal – activities safe`,`Low Season`],answer:2,hint:`82 is ≥70 but not ≥95.`},q2:{text:`What is wrong with this Python code? if score >= 50 print('Pass')`,options:[`Nothing`,`Missing colon after condition`,`print needs brackets`,`score must be declared`],answer:1,hint:`Python if statements must end with a colon: if score >= 50:`},q3:{text:`In Python, what replaces C++'s && and || operators?`,options:[`& and |`,`AND and OR`,`and and or`,`&& and ||`],answer:2,hint:`Python uses English words: and, or, not — instead of &&, ||, !`},trace:[{line:1,explanation:`level = 82 — water level assigned.`,vars:{level:82},output:null},{line:2,explanation:`if level >= 108 — is 82 >= 108? FALSE. Skip this block.`,vars:{level:82,test:`82>=108 → False`},output:null},{line:4,explanation:`elif level >= 95 — is 82 >= 95? FALSE. Skip.`,vars:{level:82,test:`82>=95 → False`},output:null},{line:6,explanation:`elif level >= 70 — is 82 >= 70? TRUE. Enter this block.`,vars:{level:82,test:`82>=70 → True`},output:null},{line:7,explanation:`status = 'Normal – activities safe' — assigned.`,vars:{level:82,status:`Normal – activities safe`},output:null},{line:9,explanation:`print(f'Level: {level}m | Status: {status}') — f-string interpolates variables.`,vars:{level:82,status:`Normal – activities safe`},output:`Level: 82m | Status: Normal – activities safe`}],worked:{scenario:`A Form 1 student at Matero Boys wants to write their first Python program for a school project.`,problem:`Print three lines: 'ZamCode Academy', 'Learn Python the Zambian Way', and today's date as a string '2024-07-15'.`,steps:[{explain:`Each print() call outputs one line. Start with the app name.`,code:`print('ZamCode Academy')`},{explain:`Print the tagline.`,code:`print('Learn Python the Zambian Way')`},{explain:`Print the date as a plain string (no imports needed).`,code:`print('2024-07-15')`}],answer:`Outputs three lines exactly as specified. Python runs line by line, top to bottom.`,answerCode:`print('ZamCode Academy')
print('Learn Python the Zambian Way')
print('2024-07-15')`,insight:`Python needs no boilerplate — no PROGRAM, no main(), no includes. Just write print() and run. Each print() automatically moves to the next line.`}},{id:`py4`,title:`Loops (for & while)`,form:2,lesson:`Python has two main loop types: for and while. Python's for loop is more powerful than Pascal's because it can iterate over ANY sequence, not just a range of numbers.

THE FOR LOOP with range():
range(n) generates numbers 0, 1, 2 up to n-1.
range(a, b) generates a, a+1 up to b-1 (stops BEFORE b).
range(a, b, step) generates values with a custom step size.

for i in range(5): gives i the values 0, 1, 2, 3, 4
for i in range(1, 6): gives i the values 1, 2, 3, 4, 5
for i in range(0, 10, 2): gives i the values 0, 2, 4, 6, 8

The for loop can iterate directly over a list or string:
for name in ["Chanda", "Bupe", "Mwamba"]:
    print(name)

enumerate() gives both the index AND the value:
for i, name in enumerate(names, 1):
    print(f"{i}. {name}")

THE WHILE LOOP:
while condition:
    body that repeats while condition is True
Always ensure the condition will eventually become False.

break exits the loop immediately. continue skips the rest of this iteration.

The range trap: range(5) starts at 0 and goes to 4, not 5. If you want 1 to 5, use range(1, 6). This is one of the most common off-by-one errors in Python.`,code:`areas = ["Kabulonga","Chilenje","Matero","Woodlands"]

for i, area in enumerate(areas):
    hour = 6 + (i * 4)
    print(f"{area}: power cut at {hour:02d}:00hrs")

litres = 0
while litres < 100:
    litres += 25
    print(f"Tank: {litres}L")`,explanation:`enumerate() gives both index and value. {hour:02d} formats with a leading zero. while runs until the tank fills.`,question:{text:`How many times does the while loop run (starts at 0, adds 25, stops when ≥100)?`,options:[`3 times`,`4 times`,`5 times`,`6 times`],answer:1,hint:`25, 50, 75, 100 — count the steps.`},q2:{text:`What does range(2, 10, 2) produce?`,options:[`2,4,6,8,10`,`2,4,6,8`,`2,3,4,5,6,7,8,9`,`0,2,4,6,8`],answer:1,hint:`range(start, stop, step): starts at 2, steps by 2, stops BEFORE 10.`},q3:{text:`What does enumerate(['a','b','c'], 1) produce?`,options:[`(0,'a'),(1,'b'),(2,'c')`,`(1,'a'),(2,'b'),(3,'c')`,`['a','b','c']`,`[1,2,3]`],answer:1,hint:`enumerate(list, start) pairs each item with an index starting from start=1.`},trace:[{line:1,explanation:`litres = 0 — start with empty tank.`,vars:{litres:0},output:null},{line:3,explanation:`while litres < 100 — 0 < 100? TRUE. Enter loop.`,vars:{litres:0},output:null},{line:4,explanation:`litres = litres + 20 → 20.`,vars:{litres:20},output:null},{line:5,explanation:`print(f'Tank level: {litres}L') → prints 20L.`,vars:{litres:20},output:`Tank level: 20L`},{line:3,explanation:`20 < 100 TRUE. litres=40. Print 40L.`,vars:{litres:40},output:`Tank level: 20L
Tank level: 40L`},{line:3,explanation:`Continues: 60L, 80L, 100L. Then 100<100 FALSE — exit loop.`,vars:{litres:100},output:`Tank level: 20L
Tank level: 40L
Tank level: 60L
Tank level: 80L
Tank level: 100L`},{line:7,explanation:`print('Tank is full!') — after loop.`,vars:{litres:100},output:`Tank level: 20L
Tank level: 40L
Tank level: 60L
Tank level: 80L
Tank level: 100L
Tank is full!`}],worked:{scenario:`A school registration desk at Lusaka's Munali Girls records student information.`,problem:`Ask the user for their name and form number. Calculate graduation year as 2024 + (4 - form). Print a welcome message with the graduation year.`,steps:[{explain:`Use input() to get the name. No conversion needed — name stays as a string.`,code:`name = input('Enter your name: ')`},{explain:`Get the form number and convert to int immediately.`,code:`form = int(input('Enter your form (1-4): '))`},{explain:`Calculate graduation year and print with an f-string.`,code:`grad = 2024 + (4 - form)
print(f'Welcome {name}! You graduate in {grad}.')`}],answer:`Name='Chanda', form=2 → grad=2026. Prints: Welcome Chanda! You graduate in 2026.`,answerCode:`name = input('Enter your name: ')
form = int(input('Enter your form (1-4): '))
grad = 2024 + (4 - form)
print(f'Welcome {name}! You graduate in {grad}.')`,insight:`int() converts the string from input() to a number. Without it, 2024 + (4 - '2') would raise TypeError because you can't subtract a string from a number.`}},{id:`py5`,title:`Functions & Lists`,form:3,lesson:`FUNCTIONS in Python let you give a name to a block of code so you can run it any time by using that name. Functions make programs shorter, cleaner, and easier to maintain.

Defining a function:
def functionName(parameters):
    function body goes here — must be indented
    return value  (this line is optional)

The def keyword begins the definition. The function does NOT run when defined — it only runs when called.

Parameters and return values:
def greet(name):
    return f"Hello {name}!"
message = greet("Chanda")  # argument is Chanda
print(message)              # prints: Hello Chanda!

Default parameter values are used when no argument is provided:
def greet(name, times=2):
    print(name * times)
greet("Hi ")      # uses default: prints Hi Hi
greet("Hi ", 3)   # overrides: prints Hi Hi Hi

LISTS are Python's most versatile data structure — ordered and changeable:
marks = [78, 91, 55, 63, 88]
marks[0] = 78    # first element (0-based indexing)
marks[-1] = 88   # last element using negative indexing
marks[1:3]       # slice gives elements at index 1 and 2

List methods:
append(x) adds x to the end.
remove(x) removes the first occurrence of x.
sort() sorts the list in place.
len(list) gives the count of elements.
sum(list) gives the total of all elements.
max(list) and min(list) give the largest and smallest values.`,code:`squad = ["Patson Daka","Fashion Sakala","Kings Kangwa"]

def print_squad(team):
    print("=== Chipolopolo Squad ===")
    for i, p in enumerate(team, 1):
        print(f"  {i}. {p}")
    print(f"Total: {len(team)} players")

def add_player(team, name):
    team.append(name)
    print(f"{name} added!")

add_player(squad, "Enock Mwepu")
print_squad(squad)`,explanation:`def defines a function. .append() adds to a list. enumerate(list, 1) starts numbering from 1. len() returns the count.`,ecz:`Functions and lists appear together in almost every Python question. Expect: write a function that takes a list, processes it, and returns a result. Know append(), len(), and list indexing.`,question:{text:`After calling add_player(squad, 'Enock Mwepu'), how many players are in the squad?`,options:[`3`,`4`,`5`,`6`],answer:1,hint:`Squad started with 3, then one was added.`},q2:{text:`What does squad[-1] return if squad=['Daka','Sakala','Kangwa']?`,options:[`'Daka'`,`'Sakala'`,`'Kangwa'`,`IndexError`],answer:2,hint:`Negative indices count from the end. -1 is always the last element.`},q3:{text:`What is the difference between sorted(marks) and marks.sort()?`,options:[`Identical`,`sorted() returns new list; marks.sort() modifies original`,`marks.sort() is faster`,`sorted() only works on numbers`],answer:1,hint:`sorted() is non-destructive — returns new list. list.sort() modifies in place.`},trace:[{line:1,explanation:`squad = ['Daka', 'Sakala', 'Kangwa'] — list with 3 elements. Index 0,1,2.`,vars:{squad:`['Daka','Sakala','Kangwa']`,len:3},output:null},{line:3,explanation:`def add_player(team, name): — function defined but not called yet.`,vars:{},output:null},{line:6,explanation:`add_player(squad, 'Enock Mwepu') called. Inside: team.append('Enock Mwepu').`,vars:{squad:`['Daka','Sakala','Kangwa','Enock Mwepu']`,len:4},output:null},{line:7,explanation:`print(len(squad)) — length is now 4.`,vars:{len:4},output:`4`},{line:8,explanation:`print(squad[0]) — index 0 is still 'Daka'. append adds to end.`,vars:{squad_0:`Daka`},output:`4
Daka`},{line:9,explanation:`print(squad[-1]) — -1 is the last element = 'Enock Mwepu'.`,vars:{squad_last:`Enock Mwepu`},output:`4
Daka
Enock Mwepu`}],worked:{scenario:`A Kafue National Park monitoring system categorises water hole levels for rangers.`,problem:`Given water_level = 65, print: 'Critical — animals at risk' if < 30, 'Low — monitor closely' if < 60, 'Adequate' if < 90, else 'Full — optimal'.`,steps:[{explain:`Assign the water level variable.`,code:`water_level = 65`},{explain:`Chain conditions from lowest to highest threshold with if/elif/else.`,code:`if water_level < 30:
    print('Critical — animals at risk')
elif water_level < 60:
    print('Low — monitor closely')
elif water_level < 90:
    print('Adequate')`},{explain:`The else catches anything >= 90.`,code:`else:
    print('Full — optimal')`}],answer:`65 < 30 is False. 65 < 60 is False. 65 < 90 is True → prints 'Adequate'.`,answerCode:`water_level = 65
if water_level < 30:
    print('Critical — animals at risk')
elif water_level < 60:
    print('Low — monitor closely')
elif water_level < 90:
    print('Adequate')
else:
    print('Full — optimal')`,insight:`Python uses indentation (4 spaces) to define blocks — not BEGIN/END or braces. Every if/elif/else line must end with a colon (:). Missing the colon causes SyntaxError.`}},{id:`py6`,title:`Dictionaries`,form:3,lesson:`A dictionary is Python's key-value store. Instead of accessing data by a numbered index, you access it by a meaningful key — like looking up a word in a real dictionary.

Creating a dictionary:
student = {"name": "Chanda", "form": 3, "score": 87.5}

Accessing values:
student["name"] returns "Chanda"
student["score"] returns 87.5

Adding or updating:
student["province"] = "Lusaka"   adds a new key
student["score"] = 91.0          updates an existing key

Checking if a key exists:
if "name" in student returns True
if "age" in student returns False

Safe access with .get():
student.get("age", "Unknown") returns "Unknown" instead of crashing if the key is missing.

Iterating through a dictionary:
for key in student iterates over keys only.
for key, value in student.items() iterates over key-value pairs.
for value in student.values() iterates over values only.

Dictionary vs List:
List: ordered, accessed by position (index), allows duplicates.
Dictionary: accessed by key, keys must be unique.

When to use a dictionary: when your data has meaningful labels. Province populations, student records, word counts, settings — anything where you look up values by name rather than position.

Nested dictionaries: a class register might be a dictionary of student names where each value is another dictionary with marks, form, and province.`,code:`# Zambia province populations
provinces = {
    "Lusaka":     3_360_000,
    "Copperbelt": 2_280_000,
    "Eastern":    1_930_000,
    "Southern":   1_860_000,
}

provinces["Northern"] = 1_100_000

for province, pop in provinces.items():
    print(f"{province:12s}: {pop:,} people")`,explanation:`Dictionaries use meaningful keys (province names). .items() returns key-value pairs. {pop:,} formats numbers with commas.`,ecz:`Dictionaries are tested in Form 3-4. Common question: create a dictionary, add a key, loop through .items(), and access values by key. Know the difference between a list and a dictionary.`,question:{text:`How many provinces are in the dictionary after adding Northern?`,options:[`3`,`4`,`5`,`6`],answer:2,hint:`Started with 4, then one was added.`},q2:{text:`What does provinces.get('Eastern', 'Unknown') return if 'Eastern' is not in the dict?`,options:[`None`,`KeyError`,`'Unknown'`,`0`],answer:2,hint:`.get(key, default) returns the default value safely instead of raising KeyError.`},q3:{text:`Which method returns all key-value pairs from a dictionary?`,options:[`.keys()`,`.values()`,`.items()`,`.pairs()`],answer:2,hint:`.items() returns (key, value) pairs. Use it in: for k, v in d.items():`},trace:[{line:1,explanation:`provinces = {'Lusaka':3360000, 'Copperbelt':2280000} — dictionary with 2 key-value pairs.`,vars:{provinces:`{'Lusaka':3360000,'Copperbelt':2280000}`,len:2},output:null},{line:2,explanation:`provinces['Southern'] = 1860000 — adds a new key-value pair. Dict grows to 3.`,vars:{provinces:`{'Lusaka':3360000,'Copperbelt':2280000,'Southern':1860000}`,len:3},output:null},{line:3,explanation:`print(len(provinces)) — 3 keys now.`,vars:{len:3},output:`3`},{line:4,explanation:`for name, pop in provinces.items() — .items() yields (key, value) pairs. First: ('Lusaka', 3360000).`,vars:{name:`Lusaka`,pop:336e4},output:`3`},{line:5,explanation:`print(f'{name}: {pop:,}') — prints Lusaka with comma-formatted population.`,vars:{name:`Lusaka`,pop:336e4},output:`3
Lusaka: 3,360,000`},{line:4,explanation:`Next iteration: Copperbelt, then Southern.`,vars:{},output:`3
Lusaka: 3,360,000
Copperbelt: 2,280,000
Southern: 1,860,000`}],worked:{scenario:`A Lusaka market vendor tracks how many bags of mealie meal are sold each day for 5 days.`,problem:`Use a for loop with range() to print daily totals: day 1 sells 12 bags, each day sells 3 more than the previous.`,steps:[{explain:`Use range(1, 6) to get days 1–5.`,code:`for day in range(1, 6):`},{explain:`Calculate bags for each day: starts at 12, adds 3 per day.`,code:`    bags = 12 + (day - 1) * 3`},{explain:`Print formatted output.`,code:`    print(f'Day {day}: {bags} bags sold')`}],answer:`Day 1: 12 / Day 2: 15 / Day 3: 18 / Day 4: 21 / Day 5: 24`,answerCode:`for day in range(1, 6):
    bags = 12 + (day - 1) * 3
    print(f'Day {day}: {bags} bags sold')`,insight:`range(1, 6) produces 1,2,3,4,5 — stops BEFORE 6. range(6) would produce 0,1,2,3,4,5. The formula (day-1)*3 means day 1 adds 0, day 2 adds 3, day 3 adds 6, etc.`}},{id:`py7`,title:`File Handling`,form:4,lesson:`Files allow Python programs to save data permanently and read it back later. Without files, all variables disappear when the program ends.

The safest way to work with files is using the with statement, which AUTOMATICALLY closes the file even if an error occurs:

with open("filename.txt", "mode") as f:
    use f here
# file is automatically closed when the block ends

File modes:
"w" creates the file if it does not exist and ERASES it if it does.
"r" opens an existing file for reading (this is the default mode).
"a" appends to end without erasing anything.
"x" creates a new file and fails if the file already exists.

Writing:
with open("results.txt", "w") as f:
    f.write("Chanda: 88\\n")     # \\n adds a newline
    f.write("Mwamba: 72\\n")

Reading:
with open("results.txt", "r") as f:
    content = f.read()           # reads ENTIRE file as one string
    lines = f.readlines()        # reads all lines into a list
    for line in f:               # reads one line at a time
        print(line.strip())

The .strip() method removes the newline character at the end of each line read from a file.

Always use "w" mode carefully — it silently erases existing file contents. Use "a" if you want to add to existing data.`,code:`results = {
    "Nakamba Phiri": 78,
    "Chibwe Mutale": 45,
    "Monde Zulu":    91,
}

with open("results.txt", "w") as f:
    f.write("=== Form 4 Results ===\\n")
    for name, score in results.items():
        grade = "Pass" if score >= 50 else "Fail"
        f.write(f"{name}: {score}% - {grade}\\n")

with open("results.txt", "r") as f:
    print(f.read())`,explanation:`with open() handles files safely and closes them automatically. .items() loops through dictionary pairs. The ternary expression picks Pass or Fail.`,ecz:`File handling is a must-know for Form 4. Use with open() — examiners expect this. Know modes 'w', 'r', 'a'. Expect to write student data to a file and read it back.`,question:{text:`Which student's result will show 'Fail' in the saved file?`,options:[`Nakamba Phiri`,`Chibwe Mutale`,`Monde Zulu`,`All of them`],answer:1,hint:`A 'Fail' is score < 50. Which student scored below 50?`},q2:{text:`What mode string opens a file to ADD content without erasing existing data?`,options:[`'w'`,`'r'`,`'a'`,`'rw'`],answer:2,hint:`'a' mode appends — adds to the end without overwriting existing content.`},q3:{text:`Why should you always use 'with open()' instead of just 'open()'?`,options:[`It is faster`,`Automatically closes the file even if an error occurs`,`open() does not work in Python 3`,`Reads the whole file at once`],answer:1,hint:`The with block guarantees close() is called — even if an exception is raised inside.`},trace:[{line:1,explanation:`students = [('Chanda',88), ('Bupe',45), ('Mwamba',72)] — list of tuples.`,vars:{students:`3 records`},output:null},{line:2,explanation:`with open('results.csv','w') as f — opens file for writing. 'with' ensures close() is called automatically.`,vars:{file:`results.csv (open)`},output:null},{line:3,explanation:`f.write('Name,Score\\n') — writes the header line.`,vars:{file_content:`Name,Score`},output:null},{line:4,explanation:`for name, score in students: — iterates. First: name='Chanda', score=88.`,vars:{name:`Chanda`,score:88},output:null},{line:5,explanation:`f.write(f'{name},{score}\\n') — writes 'Chanda,88\\n'.`,vars:{file_content:`Name,Score\\nChanda,88`},output:null},{line:4,explanation:`Next: Bupe,45. Then Mwamba,72. With block ends — file automatically closed.`,vars:{file_content:`Name,Score\\nChanda,88\\nBupe,45\\nMwamba,72`},output:null},{line:7,explanation:`with open('results.csv','r') — reopen for reading. print(f.read()) reads all.`,vars:{},output:`Name,Score
Chanda,88
Bupe,45
Mwamba,72`}],worked:{scenario:`A football coach manages the Chipolopolo squad with a list and a helper function.`,problem:`Create a list with 3 players. Write a function add_player(squad, name) that appends the player. Add 'Enock Mwepu' and print the full squad.`,steps:[{explain:`Create the initial squad list.`,code:`squad = ['Daka', 'Sakala', 'Kangwa']`},{explain:`Define the function using def. list.append() adds to the end in place.`,code:`def add_player(team, name):
    team.append(name)`},{explain:`Call the function and print the updated squad.`,code:`add_player(squad, 'Enock Mwepu')
print(squad)
print(f'Squad size: {len(squad)}')`}],answer:`['Daka', 'Sakala', 'Kangwa', 'Enock Mwepu'] / Squad size: 4`,answerCode:`squad = ['Daka', 'Sakala', 'Kangwa']
def add_player(team, name):
    team.append(name)
add_player(squad, 'Enock Mwepu')
print(squad)
print(f'Squad size: {len(squad)}')`,insight:`Lists are passed by reference in Python — team inside the function IS the same list as squad outside. append() modifies it in place, so no return is needed.`}},{id:`py8`,title:`Exception Handling`,form:4,lesson:`Errors are a normal part of programming. Python has a structured way to handle them gracefully so your program does not crash — try and except blocks.

try:
    code that might cause an error
except ErrorType:
    code that runs if that error occurs
finally:
    code that ALWAYS runs, whether an error occurred or not

Without error handling:
age = int(input("Enter age: "))  crashes if user types hello

With error handling:
try:
    age = int(input("Enter age: "))
    print(f"You are {age} years old")
except ValueError:
    print("Please enter a number")

Common exception types:
ValueError when converting wrong type, for example int("hello").
ZeroDivisionError when dividing by zero.
FileNotFoundError when opening a file that does not exist.
IndexError when accessing a list index that does not exist.
KeyError when accessing a dictionary key that does not exist.

Always catch SPECIFIC exceptions. Bare except catches everything including Ctrl+C and memory errors, which hides real problems.

The finally block runs no matter what — useful for cleanup like closing files. The with open() statement handles cleanup automatically, which is why it is preferred.

Raising your own exceptions:
raise ValueError("Score must be between 0 and 100")`,code:`def divide(a, b):
    try:
        result = a / b
        print(f"{a} / {b} = {result:.2f}")
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
    except ValueError:
        print("Error: Invalid numbers.")
    finally:
        print("Calculation attempted.")

# Copperbelt yield calculator
divide(1000, 4)   # OK
divide(500, 0)    # Caught!`,explanation:`try runs the risky code. except catches specific error types. finally always runs. This prevents crashes and gives helpful error messages.`,ecz:`Exception handling appears in Form 4. Know try/except/finally. Common question: handle ZeroDivisionError or ValueError when converting input to int. Always use specific exception types.`,question:{text:`What is printed when divide(500, 0) is called?`,options:[`The program crashes`,`Error: Cannot divide by zero!`,`0.00`,`Nothing`],answer:1,hint:`Dividing by zero raises ZeroDivisionError — caught by the except block.`},q2:{text:`What is the purpose of the finally: block in try/except?`,options:[`Runs only if no error`,`Runs only if error occurs`,`Always runs whether or not an error occurred`,`Re-raises the exception`],answer:2,hint:`finally: runs no matter what — useful for cleanup like closing files.`},q3:{text:`What happens if you write except: with no exception type specified?`,options:[`Only catches ValueError`,`SyntaxError`,`Catches ALL exceptions including unexpected ones`,`Only catches RuntimeError`],answer:2,hint:`Bare except: catches everything — including typos in variable names (NameError). Always specify the type.`},trace:[{line:1,explanation:`def divide(a, b): — function defined.`,vars:{},output:null},{line:5,explanation:`divide(500, 0) called. a=500, b=0. Enters try block.`,vars:{a:500,b:0},output:null},{line:3,explanation:`result = 500 / 0 — ZeroDivisionError raised! Python immediately jumps out of try.`,vars:{a:500,b:0,error:`ZeroDivisionError`},output:null},{line:5,explanation:`except ZeroDivisionError: matches the error. Enters except block.`,vars:{},output:null},{line:6,explanation:`print('Error: Cannot divide by zero!') executes.`,vars:{},output:`Error: Cannot divide by zero!`},{line:7,explanation:`finally: always runs regardless. print('Done.') executes.`,vars:{},output:`Error: Cannot divide by zero!
Done.`}],worked:{scenario:`A Zambian geography app stores province populations for quick lookup.`,problem:`Create a dictionary with 3 provinces and populations. Add Northern Province. Print each province and its population using a loop.`,steps:[{explain:`Create the dictionary with province names as keys.`,code:`provinces = {
    'Lusaka': 3360000,
    'Copperbelt': 2280000,
    'Southern': 1860000
}`},{explain:`Add a new key-value pair for Northern Province.`,code:`provinces['Northern'] = 1200000`},{explain:`Loop through all entries using .items().`,code:`for province, pop in provinces.items():
    print(f'{province}: {pop:,} people')`}],answer:`Prints 4 lines with formatted populations (comma-separated numbers).`,answerCode:`provinces = {'Lusaka':3360000,'Copperbelt':2280000,'Southern':1860000}
provinces['Northern'] = 1200000
for province, pop in provinces.items():
    print(f'{province}: {pop:,} people')`,insight:`{pop:,} in an f-string formats the number with commas: 3360000 → 3,360,000. .items() returns (key, value) pairs — perfect for looping through a dictionary.`}},{id:`py9`,title:`List Comprehensions`,form:4,lesson:`A list comprehension is a compact, Pythonic way to create a new list by applying an expression to each item in an existing sequence, with optional filtering.

Traditional for loop approach:
passing = []
for mark in marks:
    if mark >= 50:
        passing.append(mark)

Equivalent list comprehension on one line:
passing = [mark for mark in marks if mark >= 50]

The general format is: [expression for item in iterable if condition]

The if condition is optional — leave it out to transform ALL items:
squared = [x**2 for x in range(10)]
doubled = [x*2 for x in marks]
upper_names = [n.upper() for n in names]

With filtering:
passing = [m for m in marks if m >= 50]
evens = [x for x in range(20) if x%2==0]

Nested comprehension to flatten a 2D list:
flat = [x for row in matrix for x in row]

List comprehension vs generator expression:
[x**2 for x in range(10)] creates the full list immediately and uses memory.
(x**2 for x in range(10)) is a lazy generator that computes one value at a time and uses very little memory.

Use comprehensions when the transformation is simple enough to read in one line. If the logic is complex, a regular for loop is clearer.`,code:`# Student marks at Evelyn Hone College
marks = [55, 78, 42, 91, 63, 38, 85]

# Traditional loop
passing = []
for m in marks:
    if m >= 50:
        passing.append(m)

# List comprehension (same result!)
passing2 = [m for m in marks if m >= 50]
scaled   = [round(m * 1.1, 1) for m in marks]

print("Passing:", passing2)
print("Scaled: ", scaled)`,explanation:`[m for m in marks if m >= 50] creates a list of only passing marks in one line. [round(m*1.1,1) for m in marks] gives everyone a 10% bonus.`,ecz:`List comprehensions are tested as a one-line alternative to a for loop. Expect: rewrite a for loop as a comprehension, or trace what [x*2 for x in range(5)] produces.`,question:{text:`What does [x*2 for x in [1, 2, 3]] produce?`,options:[`[1, 2, 3]`,`[2, 4, 6]`,`[1, 4, 9]`,`[2, 3, 4]`],answer:1,hint:`Multiply each element by 2: 1×2=2, 2×2=4, 3×2=6.`},q2:{text:`What does [x for x in range(10) if x % 2 == 0] produce?`,options:[`[1,3,5,7,9]`,`[0,2,4,6,8]`,`[0,1,2,3,4,5,6,7,8,9]`,`[2,4,6,8,10]`],answer:1,hint:`x%2==0 is True for even numbers. range(10) is 0-9. Even numbers: 0,2,4,6,8.`},q3:{text:`What is the difference between [x**2 for x in range(5)] and (x**2 for x in range(5))?`,options:[`No difference`,`[] creates list immediately; () creates lazy generator`,`() creates a tuple`,`[] is faster`],answer:1,hint:`[] is a list comprehension — all values computed now. () is a generator expression — lazy, one at a time.`},trace:[{line:1,explanation:`marks = [55, 78, 42, 91, 62] — original list.`,vars:{marks:`[55,78,42,91,62]`},output:null},{line:2,explanation:`passing = [m for m in marks if m >= 50] — evaluates each element: 55✓ 78✓ 42✗ 91✓ 62✓.`,vars:{passing:`[55,78,91,62]`},output:null},{line:3,explanation:`scaled = [m + 5 for m in passing] — adds 5 to each: 60,83,96,67.`,vars:{scaled:`[60,83,96,67]`},output:null},{line:4,explanation:`print(passing) — outputs the filtered list.`,vars:{passing:`[55,78,91,62]`},output:`[55, 78, 91, 62]`},{line:5,explanation:`print(scaled) — outputs the scaled list.`,vars:{scaled:`[60,83,96,67]`},output:`[55, 78, 91, 62]
[60, 83, 96, 67]`}],worked:{scenario:`A Form 4 teacher saves ECZ student results to a CSV file.`,problem:`Write student data (name, score, grade) to 'ecz.txt'. Read it back and print only students who passed (score >= 50).`,steps:[{explain:`Open file for writing and write a header plus 3 student records.`,code:`with open('ecz.txt', 'w') as f:
    f.write('Chanda,88,Pass
')
    f.write('Bupe,45,Fail
')
    f.write('Mwamba,72,Pass
')`},{explain:`Reopen for reading and process line by line.`,code:`with open('ecz.txt', 'r') as f:
    for line in f:`},{explain:`Split each line by comma and filter passing students.`,code:`        parts = line.strip().split(',')
        if parts[2] == 'Pass':
            print(f'{parts[0]}: {parts[1]}')`}],answer:`Prints: Chanda: 88 / Mwamba: 72 (Bupe is excluded as Fail)`,answerCode:`with open('ecz.txt','w') as f:
    f.write('Chanda,88,Pass
')
    f.write('Bupe,45,Fail
')
    f.write('Mwamba,72,Pass
')
with open('ecz.txt','r') as f:
    for line in f:
        parts = line.strip().split(',')
        if parts[2]=='Pass':
            print(f'{parts[0]}: {parts[1]}')`,insight:`.strip() removes the trailing newline character before .split(','). Without strip(), the last field would be 'Pass
' which would not equal 'Pass'.`}},{id:`py10`,title:`Tuples & Sets`,form:3,lesson:`Python has two more important collection types: tuples and sets.

TUPLES are ordered, IMMUTABLE collections. Once created, you cannot change the values.
lusaka = (-15.4166, 28.2833)    stores GPS coordinates
print(lusaka[0])                 prints -15.4166

Tuples use () brackets and you access them by index just like lists.

Why use tuples instead of lists? Immutability is the key:
GPS coordinates should not accidentally change.
RGB colour values like (255, 128, 0) should stay fixed.
Days of the week are constant.
Tuples can be dictionary keys — lists cannot.

Tuple unpacking:
lat, lon = (-15.4166, 28.2833)
x, y, z = (1, 2, 3)

SETS are unordered collections of UNIQUE values.
visited = {"Lusaka", "Copperbelt", "Southern"}
visited.add("Eastern")           adds a new item
visited.add("Lusaka")            does nothing — Lusaka is already present
print(len(visited))              prints 4 (Lusaka counted only once)

Sets automatically remove duplicates.

Set operations:
A | B gives the union — all items in either A or B.
A & B gives the intersection — items in BOTH A and B.
A - B gives the difference — items in A but not in B.

Use sets for: checking membership efficiently, removing duplicates from a list, and mathematical set operations.`,code:`# Tuple — fixed Zambia coordinates
lusaka_coords = (-15.4166, 28.2833)
print("Lusaka:", lusaka_coords)
print("Latitude:", lusaka_coords[0])

# Set — unique provinces visited
visited = {"Lusaka", "Copperbelt", "Lusaka", "Southern"}
print("Unique provinces:", visited)

# Set operations
copperbelt_towns = {"Ndola", "Kitwe", "Chingola"}
more_towns = {"Mufulira", "Kitwe", "Luanshya"}
all_towns = copperbelt_towns | more_towns   # union
common   = copperbelt_towns & more_towns   # intersection
print("All towns:", all_towns)
print("Common:  ", common)`,explanation:`Tuples use () and cannot be modified. Sets use {} and automatically remove duplicates. | gives all items from both sets (union). & gives only shared items (intersection).`,question:{text:`What does the visited set contain after adding 'Lusaka' twice?`,options:[`{'Lusaka','Lusaka','Copperbelt','Southern'}`,`{'Lusaka','Copperbelt','Southern'}`,`Error — duplicates not allowed`,`An empty set`],answer:1,hint:`Sets automatically discard duplicates. Lusaka appears only once.`},q2:{text:`Why can you use a tuple as a dictionary key but not a list?`,options:[`Tuples are smaller`,`Tuples are immutable so their hash never changes`,`Lists are unordered`,`Python convention only`],answer:1,hint:`Dictionary keys must be hashable (immutable). Lists can change so they cannot be hashed.`},worked:{scenario:`A Zambian travel tracker records visited provinces.`,problem:`Store Lusaka coords as a tuple. Create a set of visited provinces. Add Eastern. Print coord and province count.`,steps:[{explain:`Tuple for coordinates (immutable).`,code:`lusaka = (-15.4166, 28.2833)`},{explain:`Set auto-removes duplicates.`,code:`visited = {'Lusaka', 'Copperbelt', 'Lusaka', 'Southern'}`},{explain:`Add Eastern and print.`,code:`visited.add('Eastern'); print(lusaka); print(len(visited))`}],answer:`(-15.4166, 28.2833) / 4`,answerCode:`lusaka=(-15.4166,28.2833); visited={'Lusaka','Copperbelt','Lusaka','Southern'}; visited.add('Eastern'); print(lusaka); print(len(visited))`,insight:`The set starts with Lusaka appearing twice but auto-deduplicates to 3 items. After add('Eastern') it becomes 4 unique provinces.`},trace:[{line:1,explanation:`coords = (-15.4166, 28.2833) — tuple created. Tuples use () and are immutable.`,vars:{coords:`(-15.4166, 28.2833)`},output:null},{line:2,explanation:`lat, lon = coords — tuple unpacking. lat=-15.4166, lon=28.2833 in one line.`,vars:{lat:-15.4166,lon:28.2833},output:null},{line:3,explanation:`visited = {'Lusaka','Copperbelt','Lusaka','Southern'} — set created. Duplicate 'Lusaka' automatically removed.`,vars:{visited:`{'Lusaka','Copperbelt','Southern'}`,len:3},output:null},{line:4,explanation:`visited.add('Eastern') — adds new unique element.`,vars:{visited:`{'Lusaka','Copperbelt','Southern','Eastern'}`,len:4},output:null},{line:5,explanation:`print(len(visited)) — 4 unique elements.`,vars:{len:4},output:`4`},{line:6,explanation:`print(lat, lon) — prints the unpacked coordinates.`,vars:{lat:-15.4166,lon:28.2833},output:`4
-15.4166 28.2833`}],q3:{text:`What does {1,2,3} & {2,3,4} return?`,options:[`{1,2,3,4}`,`{2,3}`,`{1,4}`,`{1,2,3,2,3,4}`],answer:1,hint:`& is set intersection — returns only elements in BOTH sets.`}},{id:`py11`,title:`Classes & OOP`,form:4,lesson:`Python supports Object-Oriented Programming with the class keyword. OOP organises code around objects — data structures combining attributes (data) with methods (behaviour).

Defining a class:
class Student:
    def __init__(self, name, form, score):
        self.name = name
        self.form = form
        self.score = score

    def grade(self):
        if self.score >= 80: return "Distinction"
        elif self.score >= 65: return "Merit"
        elif self.score >= 50: return "Credit"
        else: return "Fail"

Key concepts:
__init__ is the constructor. It runs automatically when you create an object. The double underscores make it a special dunder method.
self refers to the current object. Every method must have self as its first parameter. Python passes it automatically when you call the method.
self.attribute = value creates an instance variable. Each object has its own separate copy.

Creating objects:
s1 = Student("Chileshe", 4, 87)
s2 = Student("Bupe", 3, 52)
print(s1.grade())    prints Distinction
print(s2.score)      prints 52

__str__ defines what print(object) displays:
def __str__(self):
    return f"{self.name}: {self.grade()}"

OOP principles: encapsulation bundles data and methods together. Inheritance with class Prefect(Student) allows a child class to inherit from a parent. Polymorphism lets different classes have methods with the same name.`,code:`class Student:
    def __init__(self, name, form, score):
        self.name  = name
        self.form  = form
        self.score = score

    def grade(self):
        if self.score >= 80:   return "Distinction"
        elif self.score >= 65: return "Merit"
        elif self.score >= 50: return "Credit"
        else:                  return "Fail"

    def __str__(self):
        return f"{self.name} (Form {self.form}): {self.grade()}"

# Students at Chifundo Secondary, Eastern Province
s1 = Student("Chileshe Mwamba", 4, 87)
s2 = Student("Bupe Zulu", 3, 52)
print(s1)
print(s2)
print("Score:", s1.score)`,explanation:`__init__ sets up the object's attributes. self.name stores the name for each object. __str__ defines what print(object) shows. Methods are called with object.method().`,ecz:`OOP with __init__ and self is a Form 4 exam staple. Expect: write a class, create an object, call a method. Know that self refers to the current object. __str__ for display is also tested.`,question:{text:`What grade does Bupe Zulu (score 52) receive?`,options:[`Distinction`,`Merit`,`Credit`,`Fail`],answer:2,hint:`52 is ≥50 but not ≥65. Which grade does that match?`},q2:{text:`What does 'self' refer to inside a Python class method?`,options:[`The class itself`,`The current object instance`,`The parent class`,`The return value`],answer:1,hint:`self is a reference to the specific object the method is being called on.`},q3:{text:`What is the purpose of __str__(self) in a Python class?`,options:[`Converts class to a string type`,`Defines what print(object) displays`,`It is the constructor`,`Deletes the object`],answer:1,hint:`__str__ is called automatically when you use print() or str() on an object.`},trace:[{line:1,explanation:`class Student: — blueprint defined. No object created yet.`,vars:{},output:null},{line:7,explanation:`s = Student('Bupe Zulu', 52) — __init__ called. self.name='Bupe Zulu', self.score=52.`,vars:{"s.name":`Bupe Zulu`,"s.score":52},output:null},{line:8,explanation:`s.get_grade() called. self.score=52. 52>=80? No. 52>=65? No. 52>=50? Yes → 'Credit'.`,vars:{"s.score":52,returns:`Credit`},output:null},{line:9,explanation:`print(s.name, '-', s.get_grade()) — prints name and grade.`,vars:{},output:`Bupe Zulu - Credit`},{line:10,explanation:`print(str(s)) calls __str__. Returns formatted string.`,vars:{},output:`Bupe Zulu - Credit
Student: Bupe Zulu, Score: 52, Grade: Credit`}],worked:{scenario:`A Zambian mobile money app must handle invalid inputs gracefully.`,problem:`Write a function safe_transfer(amount_str) that converts a string to float and returns it. If conversion fails, return 0.0 and print an error.`,steps:[{explain:`Define the function with a try block to attempt the conversion.`,code:`def safe_transfer(amount_str):
    try:
        amount = float(amount_str)
        return amount`},{explain:`Catch ValueError if the string is not a valid number.`,code:`    except ValueError:
        print(f'Error: "{amount_str}" is not a valid amount.')
        return 0.0`},{explain:`Test with both valid and invalid inputs.`,code:`print(safe_transfer('250.50'))
print(safe_transfer('abc'))`}],answer:`250.5 / Error: 'abc' is not a valid amount. / 0.0`,answerCode:`def safe_transfer(amount_str):
    try:
        return float(amount_str)
    except ValueError:
        print(f'Error: "{amount_str}" is not a valid amount.')
        return 0.0
print(safe_transfer('250.50'))
print(safe_transfer('abc'))`,insight:`Always use specific exception types (ValueError, ZeroDivisionError) rather than bare except. A bare except: would catch even KeyboardInterrupt when the user presses Ctrl+C.`}},{id:`py12`,title:`Recursion`,form:4,lesson:`Recursion is a technique where a function solves a problem by calling itself. Each call works on a smaller version of the problem until it reaches a base case — a simple situation that can be solved directly without further recursion.

The two rules of recursion:
1. BASE CASE: a condition that returns a value WITHOUT calling the function again
2. RECURSIVE CASE: calls the function with a simpler input, moving closer to the base case

def factorial(n):
    if n <= 1:          # base case
        return 1
    return n * factorial(n - 1)  # recursive case

Tracing factorial(4) step by step:
factorial(4) calls factorial(3) and waits
  factorial(3) calls factorial(2) and waits
    factorial(2) calls factorial(1) and waits
      factorial(1) returns 1 — BASE CASE reached
    factorial(2) returns 2 times 1 = 2
  factorial(3) returns 3 times 2 = 6
factorial(4) returns 4 times 6 = 24

Python limits recursion to 1000 calls by default to prevent infinite recursion from crashing the system.

Recursion vs iteration: any recursive function can be written as a loop. Recursion is more elegant for naturally recursive problems like trees and mathematical sequences, but loops use less memory.

Memoisation stores previously computed results to avoid recalculating them. Python's functools.lru_cache decorator adds memoisation automatically.`,code:`def factorial(n):
    if n <= 1:              # base case
        return 1
    return n * factorial(n - 1)  # recursive case

def countdown(n):
    if n == 0:
        print("Go Chipolopolo!")
        return
    print(f"Kickoff in {n}...")
    countdown(n - 1)

# Factorial: ways to arrange 5 Zambian provinces
print(f"5! = {factorial(5)}")
print(f"4! = {factorial(4)}")
countdown(3)`,explanation:`factorial(5) calls factorial(4), then factorial(3)... until factorial(1)=1. Results multiply back: 1×2×3×4×5=120. countdown decreases n each time until it hits 0.`,ecz:`Recursion in Python always uses factorial or Fibonacci as examples. Know: base case (if n<=1 return 1), recursive case (return n * factorial(n-1)). Expect to trace the call stack.`,question:{text:`What does factorial(4) return?`,options:[`4`,`8`,`24`,`16`],answer:2,hint:`4 × 3 × 2 × 1 = ?`},q2:{text:`What is Python's default recursion depth limit?`,options:[`100`,`1000`,`10000`,`Unlimited`],answer:1,hint:`Python's default is 1000 recursive calls. Raise with sys.setrecursionlimit(n).`},q3:{text:`What does memoisation do in recursive fibonacci()?`,options:[`Stores results so they aren't recalculated`,`Converts recursion to a loop`,`Limits recursion depth`,`Uses less memory`],answer:0,hint:`Without memoisation fibonacci(50) recalculates billions of values. Memoisation caches each result.`},trace:[{line:2,explanation:`factorial(4) called. n=4. Is n<=1? No. Must compute 4 * factorial(3).`,vars:{n:4,status:`waiting...`},output:null},{line:2,explanation:`factorial(3): 3<=1? No. Calls factorial(2).`,vars:{n:3,status:`waiting...`},output:null},{line:2,explanation:`factorial(2): 2<=1? No. Calls factorial(1).`,vars:{n:2,status:`waiting...`},output:null},{line:2,explanation:`factorial(1): 1<=1? YES — BASE CASE. return 1.`,vars:{n:1,returns:1},output:null},{line:2,explanation:`factorial(2) resumes: return 2 * 1 = 2.`,vars:{n:2,returns:2},output:null},{line:2,explanation:`factorial(3) resumes: return 3 * 2 = 6.`,vars:{n:3,returns:6},output:null},{line:2,explanation:`factorial(4) resumes: return 4 * 6 = 24.`,vars:{n:4,returns:24},output:null},{line:10,explanation:`print(f'4! = {factorial(4)}') → 4! = 24.`,vars:{},output:`4! = 24`}],worked:{scenario:`A school data analyst filters and transforms ECZ marks with one-liners.`,problem:`From marks [45, 78, 32, 91, 62, 55, 88], create two lists: one with only passing marks (>=50), and one with each passing mark converted to a letter grade (>=80='A', else 'B').`,steps:[{explain:`Original list.`,code:`marks = [45, 78, 32, 91, 62, 55, 88]`},{explain:`Filter to passing marks using a list comprehension with an if clause.`,code:`passing = [m for m in marks if m >= 50]
# [78, 91, 62, 55, 88]`},{explain:`Map passing marks to letter grades using a conditional expression.`,code:`grades = ['A' if m >= 80 else 'B' for m in passing]
# ['B', 'A', 'B', 'B', 'A']
print(passing)
print(grades)`}],answer:`[78, 91, 62, 55, 88] / ['B', 'A', 'B', 'B', 'A']`,answerCode:`marks = [45,78,32,91,62,55,88]
passing = [m for m in marks if m >= 50]
grades  = ['A' if m >= 80 else 'B' for m in passing]
print(passing)
print(grades)`,insight:`List comprehensions replace multi-line for loops with a single readable expression. [expr for item in iterable if condition] — the if part is optional filtering.`}},{id:`py13`,title:`Modules & Libraries`,form:4,lesson:`Python's strength comes partly from its huge library of pre-built modules — collections of functions and tools you can import and use immediately without writing everything from scratch.

Importing modules:
import math imports the whole module.
from math import sqrt imports only the sqrt function.
import math as m imports with an alias so you use m.sqrt instead.

Key built-in modules:

math:
math.sqrt(144) returns 12.0
math.pi returns 3.14159
math.ceil(4.2) returns 5 (round up)
math.floor(4.8) returns 4 (round down)
math.pow(2, 8) returns 256

random:
random.randint(1, 100) gives a random integer between 1 and 100 inclusive.
random.random() gives a random float between 0 and 1.
random.choice(["A","B","C"]) picks one random item from a list.
random.shuffle(my_list) shuffles the list in place.
random.sample(my_list, 5) picks 5 unique random items.

datetime:
from datetime import datetime
now = datetime.now() gives the current date and time.
now.year, now.month, now.day accesses individual components.
now.strftime("%d %B %Y") formats as 15 January 2025.

os:
os.getcwd() gives the current working directory.
os.listdir(".") lists files in the current directory.
os.path.exists("file.txt") checks if a file exists.`,code:`import math
import random
from datetime import datetime

# Math module — mine shaft depth
depth = 850  # metres, Nchanga Open Pit
print(f"Shaft depth: {depth}m")
print(f"Square root: {math.sqrt(depth):.2f}")
print(f"Pi: {math.pi:.4f}")

# Random — simulate ECZ exam question draw
questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
selected = random.sample(questions, 5)
print(f"Selected questions: {sorted(selected)}")

# Datetime
now = datetime.now()
print(f"Exam date: {now.strftime('%d %B %Y')}")`,explanation:`import math loads the math module. math.sqrt() computes square roots. random.sample() picks unique random items without repeating. datetime.now() gets the current date and time.`,question:{text:`Which module provides the random.sample() function?`,options:[`math`,`os`,`random`,`datetime`],answer:2,hint:`The function is called as random.sample() — the module name comes first.`},q2:{text:`What is the difference between 'import math' and 'from math import sqrt'?`,options:[`No difference`,`import math requires math.sqrt(); from math import sqrt lets you call sqrt() directly`,`from math import is slower`,`import math only imports sqrt`],answer:1,hint:`import math loads the module — use math.sqrt(). from math import sqrt brings sqrt directly into scope.`},q3:{text:`What does datetime.now().strftime('%d %B %Y') produce?`,options:[`A timestamp number`,`A formatted date string like '15 January 2025'`,`An error`,`The time in seconds`],answer:1,hint:`strftime formats a datetime. %d=day, %B=full month name, %Y=4-digit year.`},trace:[{line:1,explanation:`import math — loads the math module. math.sqrt, math.pi etc are now available.`,vars:{modules:[`math`]},output:null},{line:2,explanation:`import random — loads random module.`,vars:{modules:[`math`,`random`]},output:null},{line:5,explanation:`print(math.sqrt(144)) — math.sqrt(144) = 12.0.`,vars:{},output:`12.0`},{line:6,explanation:`print(math.pi) — pi constant from math module.`,vars:{},output:`12.0
3.141592653589793`},{line:7,explanation:`print(randint(1, 100)) — random integer between 1 and 100 (inclusive). Result varies.`,vars:{},output:`12.0
3.141592653589793
(random 1-100)`},{line:8,explanation:`print(choice(['Lusaka','Ndola','Kitwe'])) — randomly picks one city.`,vars:{},output:`12.0
3.141592...
(random)
(random city)`}],worked:{scenario:`A Zambian travel tracker records visited provinces and GPS coordinates.`,problem:`Store Lusaka's coordinates as a tuple. Create a set of visited provinces. Add 'Eastern' to the set. Print coordinates and unique province count.`,steps:[{explain:`Tuples use () and are immutable — good for fixed coordinates.`,code:`lusaka = (-15.4166, 28.2833)`},{explain:`Sets use {} and auto-remove duplicates. Add Lusaka twice to demonstrate.`,code:`visited = {'Lusaka', 'Copperbelt', 'Lusaka', 'Southern'}
# 'Lusaka' appears only once`},{explain:`Add Eastern Province and print stats.`,code:`visited.add('Eastern')
print(f'Coordinates: {lusaka}')
print(f'Provinces visited: {len(visited)}')`}],answer:`Coordinates: (-15.4166, 28.2833) / Provinces visited: 4`,answerCode:`lusaka = (-15.4166, 28.2833)
visited = {'Lusaka', 'Copperbelt', 'Lusaka', 'Southern'}
visited.add('Eastern')
print(f'Coordinates: {lusaka}')
print(f'Provinces visited: {len(visited)}')`,insight:`The set starts with {'Lusaka','Copperbelt','Lusaka','Southern'} — 4 items but duplicate Lusaka is removed automatically, giving 3. After add('Eastern') it's 4.`}},{id:`py14`,title:`Sorting & Searching`,form:4,lesson:`Sorting and searching are fundamental operations on collections. Python provides powerful, flexible tools for both.

SORTING:
sorted(iterable) returns a NEW sorted list, leaving the original unchanged.
list.sort() sorts the list IN PLACE, modifying the original, and returns None.

marks = [78, 45, 91, 63, 55]
sorted_marks = sorted(marks)    gives [45, 55, 63, 78, 91] — marks is unchanged.
marks.sort()                     now marks itself is sorted.

Descending order: sorted(marks, reverse=True) gives [91, 78, 63, 55, 45].

Sorting by a custom key using lambda:
students = [{"name":"Chanda","score":78}, {"name":"Bupe","score":91}]
sorted_by_score = sorted(students, key=lambda s: s["score"], reverse=True)
This puts Bupe (91) first then Chanda (78).

lambda is a mini function written inline. lambda s: s["score"] is equivalent to writing def f(s): return s["score"]

Python's sorting algorithm called Timsort is very efficient for real-world data.

SEARCHING:
Linear search: for item in data: if item == target

in operator for simple membership test: if "Lusaka" in provinces

index() method to find position: marks.index(91) returns the position of 91.

max() and min() with key:
top_student = max(students, key=lambda s: s["score"]) returns the student dict with the highest score.`,code:`# Zambian student exam results
students = [
    {"name": "Mwamba", "score": 78},
    {"name": "Chilufya", "score": 92},
    {"name": "Bwalya",  "score": 55},
    {"name": "Monde",   "score": 88},
]

# Sort by score descending (top to bottom)
ranked = sorted(students, key=lambda s: s["score"], reverse=True)
print("=== Rankings ===")
for i, s in enumerate(ranked, 1):
    print(f"{i}. {s['name']}: {s['score']}")

# Linear search — find a student
target = "Bwalya"
for s in students:
    if s["name"] == target:
        print(f"Found: {s['name']} scored {s['score']}")`,explanation:`sorted() with key=lambda sorts by a specific field. lambda s: s['score'] is a short function that returns the score for comparison. Linear search checks each item until found.`,ecz:`Sorting is tested with sorted() and list.sort(). Know the difference: sorted() returns a new list, .sort() modifies in place. Expect to sort a list of dictionaries by a key using lambda.`,question:{text:`After sorting by score descending, who appears first (rank 1)?`,options:[`Mwamba`,`Chilufya`,`Bwalya`,`Monde`],answer:1,hint:`The highest score is ranked 1. Who has the highest score?`},q2:{text:`What does max(students, key=lambda s: s['score']) return?`,options:[`The highest score number`,`The student dictionary with the highest score`,`A sorted list`,`The index of the top student`],answer:1,hint:`max() with key= returns the ITEM (the whole dictionary) for which the key is largest.`},q3:{text:`What is the time complexity of Python's built-in sorted() function?`,options:[`O(n)`,`O(n²) like bubble sort`,`O(n log n)`,`O(log n)`],answer:2,hint:`Python uses Timsort — an optimised O(n log n) algorithm, much faster than bubble sort's O(n²).`},trace:[{line:1,explanation:`students list with 3 dicts — each has name and score.`,vars:{students:`3 students`},output:null},{line:5,explanation:`ranked = sorted(students, key=lambda s: s['score'], reverse=True) — lambda extracts score. reverse=True = descending.`,vars:{sorted_scores:`92,88,72`},output:null},{line:6,explanation:`ranked is now [Chilufya:92, Mwamba:88, Bwalya:72].`,vars:{ranked:`[Chilufya,Mwamba,Bwalya]`},output:null},{line:7,explanation:`for i, s in enumerate(ranked, 1) — enumerate starts at 1 for rank display.`,vars:{i:1,s:`Chilufya:92`},output:null},{line:8,explanation:`print(f'{i}. {s[name]} - {s[score]}') — prints rank 1.`,vars:{},output:`1. Chilufya - 92`},{line:7,explanation:`Continues for rank 2 and 3.`,vars:{},output:`1. Chilufya - 92
2. Mwamba - 88
3. Bwalya - 72`}],worked:{scenario:`A school system models students with automatic grade calculation.`,problem:`Create a Student class with name and score. Add a grade() method returning 'Distinction' (>=80), 'Merit' (>=65), 'Credit' (>=50), or 'Fail'. Add __str__ for display. Test with Chileshe (score=87).`,steps:[{explain:`Define the class with __init__ to set attributes.`,code:`class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score`},{explain:`Add a grade method using if/elif/else.`,code:`    def grade(self):
        if self.score >= 80:   return 'Distinction'
        elif self.score >= 65: return 'Merit'
        elif self.score >= 50: return 'Credit'
        else:                  return 'Fail'`},{explain:`Add __str__ for clean printing, then test.`,code:`    def __str__(self):
        return f'{self.name}: {self.grade()}'
s = Student('Chileshe', 87)
print(s)`}],answer:`Chileshe: Distinction`,answerCode:`class Student:
    def __init__(self, name, score):
        self.name=name; self.score=score
    def grade(self):
        if self.score>=80: return 'Distinction'
        elif self.score>=65: return 'Merit'
        elif self.score>=50: return 'Credit'
        else: return 'Fail'
    def __str__(self): return f'{self.name}: {self.grade()}'
print(Student('Chileshe', 87))`,insight:`__str__ is called automatically when you print() an object. Without it, print(s) would display something like <__main__.Student object at 0x...> — not useful.`}},{id:`py15`,title:`Regular Expressions`,form:4,lesson:`Regular expressions (regex) are powerful patterns for searching, validating, and extracting text. They let you describe the PATTERN of text you are looking for, not just exact matches.

Python's re module provides regex functionality:
import re

Key functions:
re.match(pattern, string) checks if pattern matches at the START of string.
re.search(pattern, string) searches anywhere in string for a match.
re.findall(pattern, string) returns a list of ALL non-overlapping matches.
re.sub(pattern, replacement, string) replaces all matches with replacement.

Pattern building blocks:
. matches any single character.
\\d matches any digit (0-9).
\\w matches any word character (letters, digits, underscore).
\\s matches any whitespace character.
^ matches start of string and $ matches end of string.
+ means one or more, * means zero or more.
{n} means exactly n repetitions.
[abc] matches any of a, b, or c.

Zambian phone number pattern: ^0[679]\\d{8}$
This matches: starts with 0, then 6 or 7 or 9, then exactly 8 more digits, then end.

Why use regex?
Validate email addresses and phone numbers.
Extract all prices from a document.
Find all dates in a text file.
Replace all occurrences of a pattern.

Build patterns step by step and test each part separately. Regex is extremely powerful once mastered.`,code:`import re

# Validate Zambian phone numbers (e.g. 0971234567)
def validate_phone(number):
    pattern = r'^0[679]\\d{8}$'
    if re.match(pattern, number):
        return f"{number} is a valid Zambian number"
    return f"{number} is NOT valid"

# Test numbers
phones = ["0971234567", "0761234567", "1234567890", "097123"]
for p in phones:
    print(validate_phone(p))

# Extract all numbers from a text
text = "Call Airtel on 0977 123456 or MTN on 0961 654321"
numbers = re.findall(r'\\d{4}\\s\\d{6}', text)
print("Found:", numbers)`,explanation:`r'^0[679]\\d{8}$' matches strings starting with 0, then 6/7/9, then exactly 8 digits. re.match() checks from the start. re.findall() returns all matches in a string.`,question:{text:`Which of these matches the Zambian phone pattern ^0[679]\\d{8}$?`,options:[`1234567890`,`0971234567`,`097123`,`0812345678`],answer:1,hint:`Must start with 0, then 6, 7, or 9, then exactly 8 more digits.`},q2:{text:`What is the difference between re.match() and re.search()?`,options:[`Identical`,`re.match() only checks the start; re.search() looks anywhere`,`re.search() is faster`,`re.match() returns all matches`],answer:1,hint:`re.match() anchors to the start. re.search() scans the whole string for any match.`},q3:{text:`What does re.findall(r'\\d+', 'Order: 3 bags, 12 tins') return?`,options:[`'3 bags, 12 tins'`,`['3','12']`,`[3,12]`,`'3','12'`],answer:1,hint:`findall returns a list of all matches as strings. \\d+ matches one or more digits.`},trace:[{line:1,explanation:`import re — loads the regular expressions module.`,vars:{},output:null},{line:4,explanation:`pattern = r'^0[679]d{8}$' — r string prevents backslash escaping. ^ = start, 0 = literal, [679] = one of 6/7/9, d{8} = 8 digits, $ = end.`,vars:{pattern:`^0[679]d{8}$`},output:null},{line:5,explanation:`validate_phone('0971234567') called. re.match tests against pattern.`,vars:{number:`0971234567`},output:null},{line:6,explanation:`Match: 0✓ 9✓ (in [679]) 71234567✓ (8 digits). Pattern matches! Returns valid message.`,vars:{number:`0971234567`},output:`0971234567 is a valid Zambian number`},{line:5,explanation:`validate_phone('1234567890') — does not start with 0. Pattern fails.`,vars:{number:`1234567890`},output:`0971234567 is a valid Zambian number
1234567890 is NOT valid`},{line:9,explanation:`re.findall finds all matches of d{4}sd{6} in the text string.`,vars:{},output:`...
Found: ['0977 123456', '0961 654321']`}],worked:{scenario:`A Zambian admin system counts combinations — how many ways to arrange items.`,problem:`Write a recursive factorial(n) function. Use it to calculate how many ways 5 Zambian provinces can be ranked in a list.`,steps:[{explain:`Base case: factorial of 0 or 1 is 1.`,code:`def factorial(n):
    if n <= 1:
        return 1`},{explain:`Recursive case: n! = n × (n-1)!`,code:`    return n * factorial(n - 1)`},{explain:`Calculate and print 5! (arrangements of 5 provinces).`,code:`result = factorial(5)
print(f'Ways to rank 5 provinces: {result}')`}],answer:`5! = 5×4×3×2×1 = 120. Prints: Ways to rank 5 provinces: 120`,answerCode:`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
print(f'Ways to rank 5 provinces: {factorial(5)}')`,insight:`factorial(5) calls factorial(4), which calls factorial(3)... until factorial(1) returns 1. Then the chain unwinds: 2×1=2, 3×2=6, 4×6=24, 5×24=120.`}},{id:`py16`,title:`Lambda Functions`,form:4,lesson:`A lambda function is a small, anonymous function written in a single line. Anonymous means it has no name — it is defined and used in the same place.

Syntax: lambda parameters: expression

Regular function:
def square(x):
    return x ** 2

Equivalent lambda:
square = lambda x: x ** 2

They behave identically. But lambdas are most useful when you need a function just once, typically as an argument to another function.

Lambda with sorted():
students = [{"name":"Chanda","score":78}, {"name":"Bupe","score":91}]
sorted_students = sorted(students, key=lambda s: s["score"])

Lambda with filter() keeps items where the function returns True:
marks = [45, 78, 32, 91, 55]
passing = list(filter(lambda m: m >= 50, marks))  gives [78, 91, 55]

Lambda with map() applies the function to every item:
doubled = list(map(lambda x: x*2, marks))  doubles every value

Multi-parameter lambda:
add = lambda x, y: x + y
add(3, 5) returns 8

When to use lambda vs def:
Use lambda for short, simple, one-time-use functions as arguments.
Use def for anything more complex, functions called multiple times, or functions needing clear documentation.

Lambda limitation: can only contain a single expression — no multi-line logic.`,code:`# Sorting Zambian students by different criteria
students = [
    {"name": "Chanda",   "score": 88, "age": 17},
    {"name": "Mwamba",   "score": 72, "age": 16},
    {"name": "Thandiwe", "score": 95, "age": 18},
    {"name": "Bupe",     "score": 72, "age": 15},
]

# Sort by score descending
by_score = sorted(students, key=lambda s: s["score"], reverse=True)
print("By score:", [s["name"] for s in by_score])

# Sort by name alphabetically
by_name = sorted(students, key=lambda s: s["name"])
print("By name: ", [s["name"] for s in by_name])

# Filter only students scoring above 80
top = list(filter(lambda s: s["score"] > 80, students))
print("Top students:", [s["name"] for s in top])`,explanation:`lambda s: s['score'] is a short function returning the score field. filter() keeps only items where the lambda returns True. List comprehensions extract just the names for display.`,question:{text:`What does list(filter(lambda x: x > 3, [1,2,3,4,5])) return?`,options:[`[1,2,3]`,`[4,5]`,`[3,4,5]`,`[1,2]`],answer:1,hint:`filter keeps items where the condition is True. Which values are > 3?`},q2:{text:`What does list(map(lambda x: x**2, [1,2,3,4])) return?`,options:[`[1,2,3,4]`,`[2,4,6,8]`,`[1,4,9,16]`,`[1,4,27,256]`],answer:2,hint:`map() applies the function to every item. x**2 squares each: 1,4,9,16.`},q3:{text:`When should you use def instead of lambda?`,options:[`Always — lambda is never needed`,`When function needs multiple statements, a docstring, or will be reused`,`lambda is always faster`,`def is only for class methods`],answer:1,hint:`Lambda is for short one-expression throwaway functions. Use def for anything more complex.`},trace:[{line:1,explanation:`students list created with 4 dicts.`,vars:{students:`4 students`},output:null},{line:8,explanation:`sorted(..., key=lambda s: s['score'], reverse=True) — lambda extracts score for sorting. Descending.`,vars:{by_score:`[Thandiwe:95,Chanda:88,Mwamba:72,Bupe:72]`},output:null},{line:9,explanation:`print by_score names — Thandiwe first (95 highest).`,vars:{},output:`By score: ['Thandiwe', 'Chanda', 'Mwamba', 'Bupe']`},{line:11,explanation:`sorted by name alphabetically (default ASC). Lambda extracts s['name'].`,vars:{by_name:`[Bupe,Chanda,Mwamba,Thandiwe]`},output:`By score: ['Thandiwe', 'Chanda', 'Mwamba', 'Bupe']
By name:  ['Bupe', 'Chanda', 'Mwamba', 'Thandiwe']`},{line:14,explanation:`filter(lambda s: s['score']>80, students) — keeps only Thandiwe(95) and Chanda(88).`,vars:{top:`[Thandiwe,Chanda]`},output:`...
Top students: ['Thandiwe', 'Chanda']`}],worked:{scenario:`A Zambian school administrator needs today's date formatted for a letter header.`,problem:`Import the datetime module. Print today's date in the format: 'Monday, 15 January 2024'.`,steps:[{explain:`Import datetime from the datetime module.`,code:`from datetime import datetime`},{explain:`Get the current datetime and format it using strftime.`,code:`now = datetime.now()`},{explain:`Use strftime format codes: %A=full day name, %d=day, %B=full month, %Y=4-digit year.`,code:`formatted = now.strftime('%A, %d %B %Y')
print(formatted)`}],answer:`Prints something like: Monday, 15 January 2024 (actual date will vary)`,answerCode:`from datetime import datetime
now = datetime.now()
print(now.strftime('%A, %d %B %Y'))`,insight:`%A gives 'Monday', %a gives 'Mon'. %B gives 'January', %b gives 'Jan'. %Y gives '2024', %y gives '24'. The % codes are standardised across all programming languages.`}},{id:`py17`,title:`Generators & Iterators`,form:4,lesson:`A generator is a function that yields values one at a time, on demand, instead of computing and returning all values at once. This makes generators extremely memory-efficient for large datasets.

The yield keyword: when Python encounters yield, it pauses the function, returns the value, and remembers where it stopped. The next call resumes from that exact point.

def count_up(n):
    i = 1
    while i <= n:
        yield i    # pause here and return i
        i += 1

gen = count_up(5)
next(gen) returns 1
next(gen) returns 2

More naturally, use in a for loop:
for num in count_up(5):
    print(num)  prints 1, 2, 3, 4, 5

Generator vs regular function:
Regular function calculates ALL values and stores them all in memory at once.
Generator calculates ONE value at a time and stores only the current value.

Memory comparison:
[x**2 for x in range(1000000)] creates a list of 1 million values taking about 8MB.
(x**2 for x in range(1000000)) is a generator using only a few bytes regardless of size.

When to use generators:
Reading large files line by line.
Generating infinite sequences.
Any situation where you do not need all values at once.

Generator expressions use () instead of []: squares = (x**2 for x in range(10))`,code:`# Generator for Fibonacci sequence
def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a       # pause and return a
        a, b = b, a + b

print("Fibonacci up to 100:")
for n in fibonacci(100):
    print(n, end=" ")
print()

# Generator expression — squares of even ECZ marks
marks = [55, 78, 42, 91, 64, 38, 86]
even_squares = (m**2 for m in marks if m % 2 == 0)
print("Even mark squares:")
for val in even_squares:
    print(val, end=" ")`,explanation:`yield pauses the function and returns a value. On the next call, execution resumes from where it paused. (m**2 for m in marks if m % 2 == 0) is a generator expression — lazy, memory-efficient.`,question:{text:`What keyword makes a Python function a generator?`,options:[`return`,`generate`,`yield`,`next`],answer:2,hint:`yield pauses the function and returns a value without ending it.`},q2:{text:`What happens when you call a generator function?`,options:[`Runs and returns all values at once`,`Returns a generator object but runs NO code yet`,`Raises an error until next() is called`,`Runs only the first yield`],answer:1,hint:`Calling a generator function creates the generator object but executes no code until next() is called.`},q3:{text:`What is the memory advantage of (x**2 for x in range(1000000)) over [x**2 for x in range(1000000)]?`,options:[`No difference`,`Generator uses constant memory; list stores all 1M values at once`,`List is faster to iterate`,`Generators cannot handle large ranges`],answer:1,hint:`A list comprehension allocates all 1M values immediately. A generator computes one at a time using only a few bytes.`},trace:[{line:1,explanation:`def count_up(n): — generator function defined. The yield keyword makes it a generator.`,vars:{},output:null},{line:5,explanation:`gen = count_up(3) — calling the generator does NOT run any code. Returns a generator object.`,vars:{gen:`generator object (paused before line 1)`},output:null},{line:6,explanation:`next(gen) — resumes execution. i=1. 1<=3 TRUE. Hits yield 1 — pauses and returns 1.`,vars:{i:1},output:`1`},{line:7,explanation:`next(gen) — resumes after yield. i += 1 → i=2. yield 2 — pauses.`,vars:{i:2},output:`1
2`},{line:8,explanation:`next(gen) — i=3. yield 3.`,vars:{i:3},output:`1
2
3`},{line:6,explanation:`If next(gen) called again: i=4, 4<=3 FALSE, while exits. StopIteration raised.`,vars:{i:4,status:`StopIteration`},output:`1
2
3`}],worked:{scenario:`ECZ wants to rank the top 3 students nationally by average score.`,problem:`Sort this list of student dicts by score descending and print the top 3 with their rank.`,steps:[{explain:`Create the student list.`,code:`students = [
    {'name':'Chilufya','score':91},
    {'name':'Thandiwe','score':88},
    {'name':'Mwamba','score':76},
    {'name':'Bupe','score':95},
]`},{explain:`Sort descending using sorted() with a lambda key.`,code:`ranked = sorted(students, key=lambda s: s['score'], reverse=True)`},{explain:`Print top 3 with enumerate starting at 1.`,code:`for rank, s in enumerate(ranked[:3], 1):
    print(str(rank), s['name'], s['score'])`}],answer:`1. Bupe: 95 / 2. Chilufya: 91 / 3. Thandiwe: 88`,answerCode:`ranked=sorted(students,key=lambda s:s['score'],reverse=True)
for rank,s in enumerate(ranked[:3],1):
    print(str(rank), s['name'], s['score'])`,insight:`ranked[:3] slices the first 3 elements. enumerate(iterable, 1) pairs each element with a rank starting at 1 instead of the default 0.`}},{id:`py18`,title:`Decorators`,form:4,lesson:`A decorator is a function that wraps another function to add extra behaviour without modifying the original function's code. Decorators are applied using the @ syntax above a function definition.

Without decorator: greet = log_call(greet)
With decorator syntax:
@log_call
def greet(name):
    print(f"Hello {name}")
These two are identical. @ is syntactic shorthand.

Building a decorator step by step:
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)  # calls original function
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f}s")
        return result
    return wrapper

@timer
def slow_calculation():
    time.sleep(1)

*args and **kwargs allow the wrapper to accept any number of arguments and pass them through to the original function — making the decorator work with any function signature.

@functools.wraps(func) preserves the original function's name and documentation string.

Common decorator use cases:
@timer measures execution time.
@login_required checks if a user is authenticated (used in Django web framework).
@cache saves results to avoid recomputation.
@retry automatically retries failed operations.

Python web frameworks like Flask and Django use decorators extensively.`,code:`import time

def timer(func):
    """Decorator that measures execution time"""
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f}s")
        return result
    return wrapper

def log_call(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}...")
        return func(*args, **kwargs)
    return wrapper

@timer
@log_call
def calculate_mining_yield(tonnes, grade):
    """Simulate Copperbelt ore calculation"""
    return tonnes * grade * 0.85

result = calculate_mining_yield(5000, 0.023)
print(f"Copper yield: {result:.1f} tonnes")`,explanation:`@timer wraps calculate_mining_yield inside wrapper(). When you call calculate_mining_yield(), it actually runs wrapper() which times it. Multiple decorators stack — @timer runs outermost.`,question:{text:`In the decorator pattern, what does the inner wrapper function do?`,options:[`Defines the decorator`,`Replaces the original function`,`Adds extra behaviour around the original function call`,`Imports the module`],answer:2,hint:`wrapper() runs before and/or after calling the original function — adding timing, logging, etc.`},q2:{text:`Why add @functools.wraps(func) inside a decorator?`,options:[`Makes decorator faster`,`Preserves the original function's __name__ and docstring`,`Required for the decorator to work`,`Prevents infinite recursion`],answer:1,hint:`Without @functools.wraps the wrapped function loses its name and docstring — harder to debug.`},q3:{text:`What does @decorator mean when placed above a function definition?`,options:[`Imports the decorator`,`Shorthand for: function = decorator(function)`,`Calls the decorator immediately`,`Marks function as private`],answer:1,hint:`@decorator is syntactic sugar. Python replaces the function with decorator(function) — i.e. the wrapper.`},trace:[{line:1,explanation:`def log_call(func): — decorator factory defined.`,vars:{},output:null},{line:6,explanation:`@log_call above greet — equivalent to: greet = log_call(greet). greet is now wrapper.`,vars:{greet:`wrapper(original=greet)`},output:null},{line:9,explanation:`greet('Chanda') — actually calls wrapper('Chanda'). args=('Chanda',).`,vars:{args:`('Chanda',)`},output:null},{line:3,explanation:`print(f'Calling {func.__name__}') — func.__name__ is 'greet'.`,vars:{},output:`Calling greet`},{line:4,explanation:`result = func(*args) — calls ORIGINAL greet('Chanda'). Prints 'Hello Chanda'.`,vars:{},output:`Calling greet
Hello Chanda`},{line:5,explanation:`print('Done.') — after-code in wrapper.`,vars:{},output:`Calling greet
Hello Chanda
Done.`}],worked:{scenario:`A Zambian fintech validates phone numbers to prevent incorrect mobile money transfers.`,problem:`Write a function validate_phone(number) using re.match() that returns True if the number matches the Zambian pattern: starts with 096, 097, or 076, followed by exactly 7 digits.`,steps:[{explain:`Import re and define the pattern. ^ anchors to start, $ anchors to end.`,code:`import re
pattern = r'^0(96|97|76)d{7}$'`},{explain:`Write the validation function using re.match().`,code:`def validate_phone(number):
    return bool(re.match(pattern, number))`},{explain:`Test with valid and invalid numbers.`,code:`print(validate_phone('0971234567'))  # True
print(validate_phone('0812345678'))  # False (08x not valid)
print(validate_phone('09712345'))    # False (too short)`}],answer:`True / False / False`,answerCode:`import re
pattern = r'^0(96|97|76)d{7}$'
def validate_phone(n): return bool(re.match(pattern, n))
print(validate_phone('0971234567'))
print(validate_phone('0812345678'))
print(validate_phone('09712345'))`,insight:`(96|97|76) matches any of the three prefix options. d{7} requires exactly 7 digits. The $ at the end prevents '0971234567extra' from matching — the string must end exactly there.`}},{id:`py19`,title:`Data Analysis with Lists`,form:4,lesson:`Python's built-in functions make data analysis straightforward without needing any external libraries — perfect for Form 4 coursework and basic statistics.

Essential built-in functions for data:
len(data) gives the count of elements.
sum(data) gives the total of all values.
min(data) and max(data) give the smallest and largest values.
sorted(data) returns a sorted copy.
round(value, decimals) rounds to specified decimal places.

Calculating the mean (average):
mean = sum(data) / len(data)

Calculating the median (middle value):
sorted_data = sorted(data)
n = len(sorted_data)
if n % 2 == 0:  # even count
    median = (sorted_data[n//2 - 1] + sorted_data[n//2]) / 2
else:           # odd count
    median = sorted_data[n//2]

Calculating variance and standard deviation:
mean = sum(data) / len(data)
variance = sum((x - mean)**2 for x in data) / len(data)
std_dev = variance ** 0.5  # square root gives standard deviation

Counting frequencies manually:
frequency = {}
for item in data:
    frequency[item] = frequency.get(item, 0) + 1

Finding mode (most common value):
mode = max(frequency, key=frequency.get)

These techniques are used in real data analysis: processing copper production figures from Copperbelt mines, analysing rainfall data from the Zambia Meteorological Department, or calculating class averages for ECZ results.`,code:`# Zambia copper production data (thousand tonnes)
production = [820, 750, 910, 680, 870, 930, 760, 840]

total  = sum(production)
mean   = total / len(production)
minval = min(production)
maxval = max(production)
range_ = maxval - minval

# Median
srt = sorted(production)
n = len(srt)
if n % 2 == 0:
    median = (srt[n//2-1] + srt[n//2]) / 2
else:
    median = srt[n//2]

print(f"Total:  {total:,} kt")
print(f"Mean:   {mean:.1f} kt")
print(f"Median: {median:.1f} kt")
print(f"Range:  {range_} kt")
print(f"Best year: {maxval} kt")`,explanation:`sum()/len() gives the mean. sorted() lets us find the median by taking the middle value(s). n//2 is integer division. Range = max - min. This is the foundation of data science.`,question:{text:`What is the mean of [820, 750, 910, 680, 870, 930, 760, 840]?`,options:[`820`,`820.0`,`820.5`,`845`],answer:0,hint:`Sum = 6560, count = 8. 6560 / 8 = ?`},q2:{text:`Why is the median often more useful than the mean for salary data?`,options:[`Easier to calculate`,`One very high salary can pull the mean up but barely affects the median`,`Median is always smaller`,`Mean requires sorted data`],answer:1,hint:`The mean is sensitive to outliers. The median (middle value) is more representative of typical values.`},q3:{text:`What does sum((x-mean)**2 for x in data)/len(data) calculate?`,options:[`The mean`,`The range`,`The variance`,`The standard deviation`],answer:2,hint:`Variance = average squared distance from the mean. Standard deviation is its square root.`},trace:[{line:1,explanation:`production = [820,750,910,680,870,930,760,840] — list of 8 monthly values.`,vars:{production:`[820,750,...]`,n:8},output:null},{line:3,explanation:`mean = sum(production) / len(production) → 6560 / 8 = 820.0.`,vars:{mean:820},output:null},{line:4,explanation:`sorted_p = sorted(production) → [680,750,760,820,840,870,910,930].`,vars:{sorted_p:`[680,...,930]`},output:null},{line:5,explanation:`mid = 8//2 = 4. median = (sorted_p[3]+sorted_p[4])/2 = (820+840)/2 = 830.0.`,vars:{mid:4,median:830},output:null},{line:7,explanation:`print(f'Mean: {mean}') → 820.0.`,vars:{mean:820},output:`Mean: 820.0`},{line:8,explanation:`print(f'Median: {median}') → 830.0.`,vars:{median:830},output:`Mean: 820.0
Median: 830.0`},{line:9,explanation:`print(f'Max: {max(production)}') → 930.`,vars:{},output:`Mean: 820.0
Median: 830.0
Max: 930`},{line:10,explanation:`print(f'Min: {min(production)}') → 680.`,vars:{},output:`Mean: 820.0
Median: 830.0
Max: 930
Min: 680`}],worked:{scenario:`A school ranking system sorts students by multiple criteria using lambda functions.`,problem:`Sort students first by score descending, then alphabetically by name for ties. Print the sorted list.`,steps:[{explain:`Create student list with a tie in scores.`,code:`students = [
    ('Chanda', 78), ('Mwamba', 91),
    ('Bupe', 78),   ('Thandiwe', 65)
]`},{explain:`Use sorted() with a tuple key: (-score for desc, name for asc).`,code:`ranked = sorted(students, key=lambda s: (-s[1], s[0]))`},{explain:`Print the ranked list.`,code:`for i, (name, score) in enumerate(ranked, 1):
    print(f'{i}. {name}: {score}')`}],answer:`1. Mwamba: 91 / 2. Bupe: 78 / 3. Chanda: 78 / 4. Thandiwe: 65 (Bupe before Chanda alphabetically)`,answerCode:`students=[('Chanda',78),('Mwamba',91),('Bupe',78),('Thandiwe',65)]
ranked=sorted(students,key=lambda s:(-s[1],s[0]))
for i,(name,score) in enumerate(ranked,1):
    print(f'{i}. {name}: {score}')`,insight:`Using -s[1] sorts score descending (negating reverses the order). s[0] sorts name ascending. Tuple keys sort by first element, breaking ties with the second.`}},{id:`py20`,title:`Working with CSV Files`,form:4,lesson:`CSV (Comma-Separated Values) is one of the most common data formats in the world. Spreadsheet programs like Excel export data as CSV, and Python's csv module makes reading and writing CSV files easy.

A CSV file looks like this:
Name,Score,Grade
Chanda,88,Merit
Mwamba,72,Credit

Each line is a row. Values within each row are separated by commas.

Writing CSV using csv.writer:
import csv
data = [["Name","Score"], ["Chanda",88], ["Mwamba",72]]
with open("results.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(data)

newline="" is required on Windows to prevent extra blank lines between rows.

Reading CSV using csv.DictReader (the most useful approach):
with open("results.csv", "r") as f:
    reader = csv.DictReader(f)  # uses first row as column names
    for row in reader:
        print(row["Name"], row["Score"])

Important: csv.DictReader reads ALL values as STRINGS. Convert as needed:
int(row["Score"]) or float(row["Score"])

Reading CSV using csv.reader for raw index-based access:
for row in csv.reader(f):
    print(row[0], row[1])

CSV is used everywhere: ECZ results exported from databases, financial records, sensor data from water treatment plants, and population data from the Zambia Statistics Agency.`,code:`import csv

# Write student data to CSV
students = [
    ["Name",       "Score", "Grade"],
    ["Chanda",     88,      "Merit"],
    ["Mwamba",     72,      "Credit"],
    ["Thandiwe",   95,      "Distinction"],
    ["Bupe",       45,      "Fail"],
]

with open("students.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(students)
print("CSV saved.")

# Read back using DictReader
with open("students.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        if row["Grade"] != "Fail":
            print(f"{row['Name']}: {row['Score']}% ({row['Grade']})")`,explanation:`csv.writer.writerows() writes all rows at once. DictReader uses the first row as column headers, so you access fields by name (row['Name']) instead of index. newline='' prevents extra blank lines on Windows.`,question:{text:`Which csv class lets you access row fields by column name?`,options:[`csv.reader`,`csv.writer`,`csv.DictReader`,`csv.DictWriter`],answer:2,hint:`DictReader reads each row as a dictionary with column names as keys.`},q2:{text:`Why open CSV files with newline='' on Windows?`,options:[`Faster reading`,`Without it Python adds extra blank lines between every row`,`Enables UTF-8`,`Required for DictReader`],answer:1,hint:`On Windows csv handles its own line endings. newline='' prevents Python adding an extra \\r.`},q3:{text:`All values from csv.DictReader are strings. How do you use the score column for arithmetic?`,options:[`Works automatically`,`Wrap with int(): int(row['score'])`,`Use csv.NumberReader`,`Convert the whole file first`],answer:1,hint:`csv reads everything as text. Convert when needed: int(row['score']) or float(row['score']).`},trace:[{line:1,explanation:`students = [['Nakamba',88],['Chibwe',45],['Monde',73]] — list of lists.`,vars:{students:`3 rows`},output:null},{line:2,explanation:`with open('students.csv','w',newline='') as f — opens for writing. newline='' prevents extra blank lines on Windows.`,vars:{file:`students.csv (open)`},output:null},{line:3,explanation:`writer = csv.writer(f) — creates a CSV writer object.`,vars:{},output:null},{line:4,explanation:`writer.writerow(['Name','Score']) — writes the header row.`,vars:{file_content:`Name,Score`},output:null},{line:5,explanation:`writer.writerows(students) — writes all 3 data rows at once.`,vars:{file_content:`Name,Score\\nNakamba,88\\nChibwe,45\\nMonde,73`},output:null},{line:7,explanation:`with open(...,'r') — reopen for reading. csv.DictReader uses header row as keys.`,vars:{},output:null},{line:8,explanation:`First row: {'Name':'Nakamba','Score':'88'}. Note: '88' is a STRING — all CSV values are strings.`,vars:{row:`{'Name':'Nakamba','Score':'88'}`},output:`Nakamba: 88 → Pass`},{line:8,explanation:`Chibwe: score int('45')=45 < 50 → Fail. Monde: 73 → Pass.`,vars:{},output:`Nakamba: 88 → Pass
Chibwe: 45 → Fail
Monde: 73 → Pass`}],worked:{scenario:`A Zambia Statistics Agency tool generates copper production estimates without loading all data at once.`,problem:`Write a generator that yields monthly copper output estimates starting at 800 tonnes, increasing by 15 each month, for 6 months.`,steps:[{explain:`Define a generator function using yield.`,code:`def monthly_output(start, increase, months):
    output = start
    for _ in range(months):
        yield output
        output += increase`},{explain:`Use the generator in a for loop — it yields one value at a time.`,code:`for month, tonnes in enumerate(monthly_output(800, 15, 6), 1):
    print(f'Month {month}: {tonnes} tonnes')`}],answer:`Month 1: 800 / Month 2: 815 / Month 3: 830 / Month 4: 845 / Month 5: 860 / Month 6: 875`,answerCode:`def monthly_output(start, increase, months):
    output = start
    for _ in range(months):
        yield output
        output += increase
for month, tonnes in enumerate(monthly_output(800,15,6),1):
    print(f'Month {month}: {tonnes} tonnes')`,insight:`The generator computes each value only when requested. For 1 million months, a list would use megabytes of memory; the generator uses only a few bytes regardless of count.`}}]},SQL:{color:`#e74c3c`,accent:`#fde8e8`,icon:`🗄️`,topics:[{id:`sq1`,title:`Introduction to SQL`,form:3,lesson:`SQL (Structured Query Language, pronounced sequel) is the standard language for communicating with relational databases. Almost every major system that stores data — banks, hospitals, government departments, mobile money platforms, and schools — uses SQL behind the scenes.

A relational database stores data in TABLES structured like spreadsheets with rows and columns. Each table stores one type of entity: students, results, or payments. Tables are linked through shared columns called keys.

Why SQL matters in Zambia: Airtel Money and MTN MoMo store millions of transactions in SQL databases. The National Registration Card system uses databases. Hospital records, ZRA tax records, and ECZ results are all stored and queried using SQL.

The four core SQL operations are known as CRUD:
CREATE creates tables and inserts data.
READ queries and retrieves data using SELECT.
UPDATE modifies existing data.
DELETE removes data.

SQL is NOT case sensitive for keywords. By convention, keywords are written in UPPERCASE for readability.

SQL comments use -- for single lines:
-- This is a comment
SELECT * FROM students; -- retrieves all students

The semicolon ends each SQL statement.

Database management systems that use SQL include MySQL, PostgreSQL, SQLite (used in mobile apps), Microsoft SQL Server, and Oracle. The core SQL syntax is the same across all of them — a skill learnt once, used everywhere.`,code:`-- A simple SQL database for a Zambian school
-- Tables store data in rows and columns

CREATE TABLE students (
  id       INTEGER PRIMARY KEY,
  name     TEXT    NOT NULL,
  form     INTEGER,
  province TEXT
);

-- Insert a student
INSERT INTO students (id, name, form, province)
VALUES (1, 'Chanda Mutale', 3, 'Lusaka');

-- Read all students
SELECT * FROM students;`,explanation:`CREATE TABLE defines a new table and its columns. INSERT INTO adds a row. SELECT * FROM retrieves all rows. -- starts a comment in SQL.`,question:{text:`Which SQL statement is used to retrieve data from a table?`,options:[`INSERT`,`CREATE`,`SELECT`,`UPDATE`],answer:2,hint:`SELECT is the SQL command for reading/querying data from a table.`},q2:{text:`What does SELECT * FROM students mean?`,options:[`Delete all students`,`Select the first student`,`Select all columns and all rows from students`,`Select only the student named *`],answer:2,hint:`* means all columns. FROM students specifies the table. No WHERE clause means all rows.`},q3:{text:`Which SQL keyword prevents a column from storing NULL (empty) values?`,options:[`REQUIRED`,`NOT NULL`,`UNIQUE`,`PRIMARY`],answer:1,hint:`NOT NULL is a constraint that forces every row to have a value in that column.`},trace:[{line:1,explanation:`-- A simple SQL database — this is a SQL comment. The database ignores it.`,vars:{},output:null},{line:4,explanation:`CREATE TABLE students (...) — defines a new table with 4 columns. The table is now empty.`,vars:{table:`students (0 rows)`},output:null},{line:11,explanation:`INSERT INTO students VALUES (1,'Chanda Mutale',3,'Lusaka') — adds one row to the table.`,vars:{table:`students (1 row)`,row:`{id:1, name:'Chanda Mutale', form:3, province:'Lusaka'}`},output:null},{line:15,explanation:`SELECT * FROM students — * means all columns. No WHERE so all rows returned.`,vars:{},output:`id | name          | form | province
1  | Chanda Mutale | 3    | Lusaka`}],worked:{scenario:`The Zambia Statistics Agency analyses monthly rainfall across 6 stations.`,problem:`Given rainfall = [220, 180, 90, 20, 5, 45], calculate the mean, find the maximum, and count how many months had below-average rainfall.`,steps:[{explain:`Calculate the mean.`,code:`rainfall = [220, 180, 90, 20, 5, 45]
mean = sum(rainfall) / len(rainfall)
print(f'Mean: {mean:.1f}mm')`},{explain:`Find the maximum using max().`,code:`print(f'Max: {max(rainfall)}mm')`},{explain:`Count months below average using a list comprehension.`,code:`below = [m for m in rainfall if m < mean]
print(f'{len(below)} months below average')`}],answer:`Mean: 93.3mm / Max: 220mm / 4 months below average`,answerCode:`rainfall=[220,180,90,20,5,45]
mean=sum(rainfall)/len(rainfall)
print(f'Mean: {mean:.1f}mm')
print(f'Max: {max(rainfall)}mm')
below=[m for m in rainfall if m<mean]
print(f'{len(below)} months below average')`,insight:`:.1f in an f-string formats a float to 1 decimal place: 93.333... → 93.3. The list comprehension [m for m in rainfall if m < mean] creates a list of all below-average values.`}},{id:`sq2`,title:`SELECT & WHERE`,form:3,lesson:`The SELECT statement is the most important SQL command — it retrieves data from a database. You will write SELECT in almost every query you create.

Basic syntax:
SELECT column1, column2 FROM table_name;

SELECT * FROM students; uses the asterisk to mean all columns.
SELECT name, score FROM results; retrieves only the name and score columns.

THE WHERE CLAUSE filters which rows are returned. Without WHERE, you get every row in the table.

SELECT name, score FROM results WHERE score >= 50;
This returns only students who passed.

Comparison operators in WHERE:
= (equal) as in WHERE province = 'Lusaka'
<> or != (not equal) as in WHERE province <> 'Lusaka'
> (greater) as in WHERE score > 80
< (less) as in WHERE score < 50
>= (greater or equal) as in WHERE form >= 3

Combining conditions:
AND means both must be true:
SELECT * FROM students WHERE form = 4 AND province = 'Lusaka';

OR means at least one must be true:
SELECT * FROM students WHERE province = 'Lusaka' OR province = 'Copperbelt';

BETWEEN is a range check inclusive of both ends:
SELECT * FROM results WHERE score BETWEEN 50 AND 79;

LIKE is for pattern matching where % matches any sequence and _ matches exactly one character.
WHERE name LIKE 'Ch%' finds names starting with Ch.`,code:`-- Zambian student results database
-- Find all students who passed (score >= 50)
SELECT name, score
FROM results
WHERE score >= 50;

-- Find students from Copperbelt
SELECT name, school
FROM students
WHERE province = 'Copperbelt';

-- Find students between 60 and 80
SELECT name, score
FROM results
WHERE score BETWEEN 60 AND 80;`,explanation:`WHERE filters rows. score >= 50 keeps only passing students. province = 'Copperbelt' filters by text. BETWEEN 60 AND 80 is inclusive of both ends.`,ecz:`SELECT with WHERE is the most-tested SQL topic. Know: =, >, <, >=, <=, BETWEEN, LIKE. Expect to write a query filtering students by province or score. Common trap: = vs LIKE.`,question:{text:`Which clause filters rows in a SELECT statement?`,options:[`FROM`,`FILTER`,`WHERE`,`HAVING`],answer:2,hint:`WHERE comes after FROM and before ORDER BY. It specifies the condition rows must meet.`},q2:{text:`SELECT name FROM students WHERE province = 'Lusaka' — what does this return?`,options:[`All columns for all students`,`Only names of students from Lusaka`,`All students except those from Lusaka`,`The number of students in Lusaka`],answer:1,hint:`SELECT name picks only the name column. WHERE province='Lusaka' filters to only Lusaka students.`},q3:{text:`Which operator checks if a value falls within a range (inclusive)?`,options:[`IN`,`RANGE`,`BETWEEN`,`WITHIN`],answer:2,hint:`BETWEEN low AND high includes both endpoints. WHERE score BETWEEN 50 AND 79 returns 50, 51 ... 79.`},trace:[{line:2,explanation:`SELECT name, score — only these two columns will appear in results. Others are excluded.`,vars:{columns:[`name`,`score`]},output:null},{line:3,explanation:`FROM results — specifies which table to query.`,vars:{table:`results`},output:null},{line:4,explanation:`WHERE score >= 50 — database scans every row. Each row is tested: score >= 50?`,vars:{filter:`score >= 50`},output:null},{line:4,explanation:`Row: Chanda(88) → 88>=50 TRUE ✓. Row: Bupe(45) → 45>=50 FALSE ✗. Row: Mwamba(72) → TRUE ✓.`,vars:{matching:`Chanda, Mwamba`},output:null},{line:4,explanation:`Only matching rows returned.`,vars:{},output:`name    | score
Chanda  | 88
Mwamba  | 72`}],worked:{scenario:`A Zambian school stores end-of-year results in a CSV file and generates a pass/fail report.`,problem:`Write student data to 'results.csv' with columns name,score. Read it back and print each student with their grade (>=50=Pass, else Fail).`,steps:[{explain:`Import csv and write data with a header row.`,code:`import csv
students = [['Chanda',88],['Bupe',45],['Mwamba',72]]
with open('results.csv','w',newline='') as f:
    w=csv.writer(f)
    w.writerow(['name','score'])
    w.writerows(students)`},{explain:`Read back with DictReader to access columns by name.`,code:`with open('results.csv','r') as f:
    reader=csv.DictReader(f)
    for row in reader:`},{explain:`Convert score to int (DictReader returns strings) and determine grade.`,code:`        score=int(row['score'])
        grade='Pass' if score>=50 else 'Fail'
        print(f"{row['name']}: {score} — {grade}")`}],answer:`Chanda: 88 — Pass / Bupe: 45 — Fail / Mwamba: 72 — Pass`,answerCode:`import csv
students=[['Chanda',88],['Bupe',45],['Mwamba',72]]
with open('results.csv','w',newline='') as f:
    w=csv.writer(f); w.writerow(['name','score']); w.writerows(students)
with open('results.csv','r') as f:
    for row in csv.DictReader(f):
        score=int(row['score'])
        print(f"{row['name']}: {score} — {'Pass' if score>=50 else 'Fail'}")`,insight:`DictReader reads ALL values as strings. int(row['score']) converts '88' to 88 so comparison >=50 works. Forgetting this conversion causes TypeError: '>=' not supported between str and int.`}},{id:`sq3`,title:`ORDER BY & LIMIT`,form:3,lesson:`After retrieving data with SELECT and WHERE, you often want to control the ORDER results appear in, or limit HOW MANY rows are returned.

ORDER BY sorts the results:
SELECT name, score FROM results ORDER BY score;
This sorts ascending (lowest to highest) by default.

ASC means ascending from lowest to highest, A to Z (this is the default).
DESC means descending from highest to lowest, Z to A.

SELECT name, score FROM results ORDER BY score DESC;
Returns students with the highest scores first.

Ordering by multiple columns:
SELECT name, form, score FROM students ORDER BY form ASC, score DESC;
First sorts by form ascending, then within each form sorts by score descending.

LIMIT restricts how many rows are returned:
SELECT name, score FROM results ORDER BY score DESC LIMIT 5;
Returns only the top 5 students.

LIMIT is essential for showing top-N results, pagination, and sampling data.

DISTINCT removes duplicate values from results:
SELECT DISTINCT province FROM students;
Instead of showing Lusaka fifty times, it shows it only once.

Important: ORDER BY comes BEFORE LIMIT. The database first sorts all matching rows, THEN returns only the first n rows.`,code:`-- Rank students by score, highest first
SELECT name, score
FROM results
ORDER BY score DESC;

-- Top 3 students only
SELECT name, score
FROM results
ORDER BY score DESC
LIMIT 3;

-- Alphabetical list of provinces
SELECT DISTINCT province
FROM students
ORDER BY province ASC;`,explanation:`ORDER BY score DESC puts the highest scores first. LIMIT 3 returns only the top 3 rows. DISTINCT removes duplicate province names. ASC is the default direction.`,ecz:`ORDER BY and LIMIT appear in almost every SQL paper. Know: ASC (default) and DESC. LIMIT 5 with ORDER BY DESC gives the top 5. Expect to retrieve the top 3 students by score.`,question:{text:`Which keyword sorts results from highest to lowest?`,options:[`ORDER ASC`,`SORT DESC`,`ORDER BY DESC`,`DESCEND`],answer:2,hint:`ORDER BY column DESC sorts in descending (highest first) order.`},q2:{text:`SELECT name FROM students ORDER BY name ASC LIMIT 5 — what does this return?`,options:[`All students alphabetically`,`The last 5 students`,`The first 5 students alphabetically`,`5 random students`],answer:2,hint:`ORDER BY name ASC sorts A→Z. LIMIT 5 returns only the first 5 rows from that sorted list.`},q3:{text:`What does SELECT DISTINCT province FROM students return?`,options:[`All province values including duplicates`,`One row per unique province`,`The most common province`,`All provinces in alphabetical order`],answer:1,hint:`DISTINCT removes duplicate values. If 30 students are from Lusaka, Lusaka appears only once.`},trace:[{line:2,explanation:`SELECT name, score — two columns selected.`,vars:{},output:null},{line:3,explanation:`FROM results — from the results table.`,vars:{},output:null},{line:4,explanation:`ORDER BY score DESC — sorts all results by score, highest first.`,vars:{sorted:`[Chilufya:95, Chanda:88, Mwamba:72, Bupe:45]`},output:null},{line:5,explanation:`LIMIT 3 — returns only the first 3 rows from the sorted results.`,vars:{returned:`[Chilufya:95, Chanda:88, Mwamba:72]`},output:null},{line:5,explanation:`Bupe(45) is excluded — she is 4th place.`,vars:{},output:`name     | score
Chilufya | 95
Chanda   | 88
Mwamba   | 72`}],worked:{scenario:`A school database administrator at Matero Boys sets up a new student table.`,problem:`Create a students table with id (auto-increment primary key), name (required text), form (integer), and province (text). Insert one student: Chanda Mutale, Form 3, Lusaka.`,steps:[{explain:`CREATE TABLE with appropriate data types and constraints.`,code:`CREATE TABLE students (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  name     TEXT    NOT NULL,
  form     INTEGER,
  province TEXT
);`},{explain:`INSERT a row. Omit id since it auto-increments.`,code:`INSERT INTO students (name, form, province)
VALUES ('Chanda Mutale', 3, 'Lusaka');`},{explain:`Verify the insert with SELECT *.`,code:`SELECT * FROM students;`}],answer:`Table created. Row inserted with auto-id=1. SELECT shows: 1 | Chanda Mutale | 3 | Lusaka`,answerCode:`CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  form INTEGER,
  province TEXT
);
INSERT INTO students (name, form, province)
VALUES ('Chanda Mutale', 3, 'Lusaka');
SELECT * FROM students;`,insight:`When id is AUTOINCREMENT, you must omit it from the INSERT column list. The database assigns the next available integer automatically — no need to track it yourself.`}},{id:`sq4`,title:`INSERT, UPDATE & DELETE`,form:3,lesson:`While SELECT reads data, INSERT, UPDATE, and DELETE modify it. These commands change what is stored in your database.

INSERT adds a new row:
INSERT INTO students (name, form, province)
VALUES ('Bupe Zulu', 2, 'Southern');
You list the column names then provide matching values in the same order.

Insert multiple rows:
INSERT INTO students (name, form) VALUES
('Chanda', 3), ('Mwamba', 4), ('Thandiwe', 2);

UPDATE changes values in existing rows:
UPDATE students SET form = 3 WHERE name = 'Bupe Zulu';

SET specifies what to change. WHERE specifies which rows to change.
WITHOUT WHERE, EVERY row in the table is updated:
UPDATE students SET province = 'Lusaka'; — updates ALL students!

DELETE removes rows:
DELETE FROM students WHERE id = 5;

Without WHERE:
DELETE FROM students; — deletes EVERY student in the table!

The database will not ask for confirmation — it executes immediately.

Best practice: before running UPDATE or DELETE, first run the equivalent SELECT to see which rows will be affected. If the SELECT returns the right rows, then run the UPDATE or DELETE.

TRUNCATE TABLE tablename deletes all rows faster than DELETE without WHERE but cannot be reversed.`,code:`-- Add a new student
INSERT INTO students (name, form, province)
VALUES ('Bupe Zulu', 2, 'Southern');

-- Update Bupe's form after she moves up
UPDATE students
SET form = 3
WHERE name = 'Bupe Zulu';

-- Remove a student who left school
DELETE FROM students
WHERE id = 5;

-- DANGER: no WHERE = affects ALL rows!
-- DELETE FROM students;  -- deletes everyone!`,explanation:`INSERT adds a new row. UPDATE ... SET changes column values — WHERE limits which rows. DELETE removes rows — WHERE is critical. Without WHERE, UPDATE and DELETE affect every row.`,ecz:`INSERT, UPDATE, DELETE are always tested together. The most common exam trap: forgetting WHERE on UPDATE or DELETE wipes the entire table. Always explain what happens without WHERE.`,question:{text:`What happens if you run UPDATE students SET form = 4 with no WHERE clause?`,options:[`Updates only form 4 students`,`Updates the first student`,`Updates ALL students to form 4`,`Causes an error`],answer:2,hint:`Without WHERE, UPDATE applies the change to every single row in the table.`},q2:{text:`Which SQL command adds a new row to a table?`,options:[`ADD INTO`,`INSERT INTO`,`CREATE ROW`,`APPEND INTO`],answer:1,hint:`INSERT INTO table (columns) VALUES (values) adds a new row.`},q3:{text:`DELETE FROM students WHERE province = 'Eastern' — what does this do?`,options:[`Deletes the province column`,`Deletes only students from Eastern province`,`Deletes all students`,`Deletes the Eastern province row`],answer:1,hint:`DELETE FROM removes rows. WHERE province='Eastern' limits deletion to only those matching rows.`},trace:[{line:2,explanation:`INSERT INTO students (name,form,province) — specifying columns. id not listed so database auto-assigns it.`,vars:{},output:null},{line:3,explanation:`VALUES ('Bupe Zulu', 2, 'Southern') — new row added to the table.`,vars:{new_row:`{name:'Bupe Zulu', form:2, province:'Southern'}`},output:null},{line:6,explanation:`UPDATE students — will modify existing rows.`,vars:{},output:null},{line:7,explanation:`SET form = 3 — the new value to write.`,vars:{new_form:3},output:null},{line:8,explanation:`WHERE name = 'Bupe Zulu' — only rows matching this condition are updated. Without WHERE, ALL rows would be changed!`,vars:{updated:`Bupe Zulu: form 2 → 3`},output:null},{line:11,explanation:`DELETE FROM students WHERE id = 5 — removes only the row with id=5. One row deleted.`,vars:{deleted:`row id=5`},output:null}],worked:{scenario:`A school administrator needs a list of all Form 4 students from Lusaka province.`,problem:`Write a SELECT query that returns only the name and school columns for students where form=4 AND province='Lusaka', ordered by name.`,steps:[{explain:`Specify only the columns you need — not SELECT *.`,code:`SELECT name, school`},{explain:`Specify the table and filter conditions with WHERE. Use AND for multiple conditions.`,code:`FROM students
WHERE form = 4 AND province = 'Lusaka'`},{explain:`Sort the results alphabetically by name.`,code:`ORDER BY name ASC;`}],answer:`Returns only Form 4 Lusaka students, both conditions must be true, sorted A-Z by name.`,answerCode:`SELECT name, school
FROM students
WHERE form = 4 AND province = 'Lusaka'
ORDER BY name ASC;`,insight:`AND requires BOTH conditions to be true. OR would return form=4 students OR Lusaka students (a much larger result). Always specify only the columns you need — avoid SELECT * in production.`}},{id:`sq5`,title:`CREATE TABLE & Data Types`,form:3,lesson:`Before you can store data, you need to create tables. The CREATE TABLE statement defines the structure of a new table — its columns, data types, and constraints.

Basic syntax:
CREATE TABLE tableName (
    column1 dataType constraint,
    column2 dataType constraint
);

SQL data types:
INTEGER (also INT) stores whole numbers.
REAL or DECIMAL stores decimal numbers.
TEXT or VARCHAR(n) stores strings — VARCHAR(50) limits to 50 characters.
DATE stores date values in YYYY-MM-DD format.
BOOLEAN stores true or false.

Column constraints add rules:
PRIMARY KEY uniquely identifies each row. Only one per table. Cannot be NULL or duplicate.
NOT NULL means this column must always have a value.
UNIQUE means all values in this column must be different.
DEFAULT value means if no value is provided, use this default.
AUTOINCREMENT automatically generates the next integer.

FOREIGN KEY creates a link between tables:
FOREIGN KEY (student_id) REFERENCES students(id)
This means student_id must match an existing id in the students table. It prevents orphaned data — you cannot have a result for a student who does not exist.

Modifying existing tables:
ALTER TABLE students ADD COLUMN email TEXT;
ALTER TABLE students DROP COLUMN email;

Removing a table completely:
DROP TABLE students; permanently deletes the table AND all its data.`,code:`-- School database for Zambia
CREATE TABLE schools (
  id         INTEGER  PRIMARY KEY AUTOINCREMENT,
  name       TEXT     NOT NULL,
  province   TEXT     NOT NULL,
  pupils     INTEGER  DEFAULT 0,
  est_year   INTEGER,
  is_boarding BOOLEAN DEFAULT FALSE
);

-- Results table with a foreign key
CREATE TABLE results (
  id         INTEGER PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  subject    TEXT,
  score      REAL,
  year       INTEGER
);`,explanation:`PRIMARY KEY uniquely identifies each row. AUTOINCREMENT generates IDs automatically. NOT NULL prevents empty values. DEFAULT sets a value when none is provided. REFERENCES creates a foreign key link.`,ecz:`CREATE TABLE with data types is Form 3 core. Know: INTEGER, TEXT, REAL, PRIMARY KEY, NOT NULL. Expect to design a table for a school, hospital, or bank scenario.`,question:{text:`Which SQL constraint ensures every row has a unique identifier?`,options:[`NOT NULL`,`UNIQUE`,`PRIMARY KEY`,`FOREIGN KEY`],answer:2,hint:`PRIMARY KEY uniquely identifies each row — no two rows can have the same primary key value.`},q2:{text:`What does DEFAULT 0 do in a column definition?`,options:[`Sets the column to always be 0`,`Inserts 0 automatically when no value is provided`,`Makes 0 the maximum value`,`Prevents negative numbers`],answer:1,hint:`DEFAULT value is used automatically when INSERT does not provide a value for that column.`},q3:{text:`What is the purpose of REFERENCES students(id) in the results table?`,options:[`Copies data from students`,`Creates a foreign key — links student_id to the students table`,`Makes student_id a primary key`,`Joins the two tables automatically`],answer:1,hint:`REFERENCES creates a foreign key constraint — student_id must match an existing id in the students table.`},trace:[{line:2,explanation:`CREATE TABLE schools ( — starts defining the table structure.`,vars:{},output:null},{line:3,explanation:`id INTEGER PRIMARY KEY AUTOINCREMENT — each row gets a unique auto-generated ID.`,vars:{constraint:`PRIMARY KEY`},output:null},{line:4,explanation:`name TEXT NOT NULL — text column that cannot be empty.`,vars:{constraint:`NOT NULL`},output:null},{line:6,explanation:`pupils INTEGER DEFAULT 0 — if INSERT doesn't provide pupils, it defaults to 0.`,vars:{default:0},output:null},{line:8,explanation:`) — table definition complete. Table is created in the database, ready for data.`,vars:{table:`schools (0 rows, 6 columns)`},output:null},{line:11,explanation:`results table with REFERENCES students(id) — creates a foreign key. student_id must match an existing id in students.`,vars:{constraint:`FOREIGN KEY → students.id`},output:null}],worked:{scenario:`An ECZ analyst wants the top 5 highest-scoring students in a national exam.`,problem:`Write a query that returns the student name and score from a results table, sorted by score descending, limited to 5 rows.`,steps:[{explain:`Select the columns needed.`,code:`SELECT name, score`},{explain:`Sort by score from highest to lowest.`,code:`FROM results
ORDER BY score DESC`},{explain:`Restrict to just the top 5.`,code:`LIMIT 5;`}],answer:`Returns the 5 rows with the highest scores, highest first.`,answerCode:`SELECT name, score
FROM results
ORDER BY score DESC
LIMIT 5;`,insight:`ORDER BY must come before LIMIT. The database first sorts ALL rows, then takes the first 5. Without ORDER BY, LIMIT 5 returns any arbitrary 5 rows — not necessarily the top 5.`}},{id:`sq6`,title:`Aggregate Functions`,form:3,lesson:`Aggregate functions perform calculations across multiple rows and return a single summary value. They answer questions like: how many, what is the total, what is the average, and what is the highest.

The five core aggregate functions:
COUNT(*) counts the total number of rows.
COUNT(column) counts rows where column is NOT NULL.
SUM(column) adds up all values in the column.
AVG(column) calculates the arithmetic mean (ignores NULL values).
MAX(column) returns the largest value.
MIN(column) returns the smallest value.

Examples:
SELECT COUNT(*) AS total_students FROM results;
SELECT AVG(score) AS class_average FROM results;
SELECT MAX(score) AS top_score FROM results;
SELECT SUM(amount) AS fees_collected FROM payments WHERE term = 'Term1';

The AS keyword creates an alias — a readable name for the output column.

Using WHERE with aggregates:
SELECT AVG(score) FROM results WHERE subject = 'Mathematics';
This calculates the average specifically for Maths only.

Important: NULL values are IGNORED by most aggregate functions.
If scores are [80, NULL, 60, NULL, 90], AVG returns 76.67 (average of the three non-NULL values). COUNT(*) counts all 5 rows but COUNT(score) counts only 3.

Combining aggregates:
SELECT COUNT(*) AS total, ROUND(AVG(score),1) AS avg, MAX(score) AS highest FROM results;
ROUND(value, places) rounds the result to specified decimal places.`,code:`-- Zambia exam results analysis

-- How many students sat the exam?
SELECT COUNT(*) AS total_students
FROM results;

-- Average, highest, lowest scores
SELECT
  AVG(score) AS average,
  MAX(score) AS highest,
  MIN(score) AS lowest
FROM results;

-- Total fees collected this term
SELECT SUM(amount) AS total_fees
FROM payments
WHERE term = 'Term 1';`,explanation:`COUNT(*) counts all rows. AVG(), MAX(), MIN() work on a column. AS gives the result a readable alias name. SUM() with WHERE sums only matching rows.`,ecz:`Aggregate functions (COUNT, SUM, AVG, MAX, MIN) appear every year. Common question: find the average score, count students per province, or find the highest mark. Know how AS creates aliases.`,question:{text:`Which aggregate function returns the number of rows?`,options:[`SUM()`,`TOTAL()`,`COUNT()`,`NUM()`],answer:2,hint:`COUNT(*) counts all rows. COUNT(column) counts non-NULL values in that column.`},q2:{text:`SELECT AVG(score) FROM results WHERE subject = 'Maths' — what does this return?`,options:[`All maths scores`,`The highest maths score`,`The average score for maths only`,`The number of maths students`],answer:2,hint:`AVG() computes the average. WHERE subject='Maths' limits the calculation to maths rows only.`},q3:{text:`What does AS do in SELECT COUNT(*) AS total_students?`,options:[`Creates a new table`,`Filters the results`,`Gives the result column a readable name`,`Counts only distinct students`],answer:2,hint:`AS is an alias — it renames the output column from COUNT(*) to the friendlier name total_students.`},trace:[{line:2,explanation:`SELECT COUNT(*) AS total_students — COUNT(*) counts all rows regardless of NULL values.`,vars:{},output:null},{line:3,explanation:`FROM results — scans the whole results table.`,vars:{rows_scanned:150},output:null},{line:3,explanation:`COUNT(*) = 150. AS total_students renames the output column.`,vars:{total_students:150},output:`total_students
150`},{line:6,explanation:`SELECT AVG(score), MAX(score), MIN(score) — three aggregates computed in one query.`,vars:{},output:null},{line:7,explanation:`FROM results — all rows. AVG=68.4, MAX=98, MIN=22.`,vars:{avg:68.4,max:98,min:22},output:`average | highest | lowest
68.4    | 98      | 22`}],worked:{scenario:`A student transfers from Lusaka to Copperbelt and their province record needs updating.`,problem:`Update the province to 'Copperbelt' for the student named 'Bupe Zulu'. Then verify by selecting her record.`,steps:[{explain:`Use UPDATE...SET to change the value. Always include WHERE to target specific rows.`,code:`UPDATE students
SET province = 'Copperbelt'
WHERE name = 'Bupe Zulu';`},{explain:`Verify the change with a SELECT.`,code:`SELECT name, province
FROM students
WHERE name = 'Bupe Zulu';`}],answer:`UPDATE changes Bupe's province. SELECT confirms: Bupe Zulu | Copperbelt`,answerCode:`UPDATE students
SET province = 'Copperbelt'
WHERE name = 'Bupe Zulu';
SELECT name, province FROM students WHERE name = 'Bupe Zulu';`,insight:`NEVER run UPDATE without WHERE in production — it would change every row in the table. Test your WHERE clause with a SELECT first to confirm it targets the right rows.`}},{id:`sq7`,title:`GROUP BY & HAVING`,form:4,lesson:`GROUP BY divides table rows into groups based on a column's values, then applies an aggregate function to each group separately. This answers questions like: how many students per province, or what is the average score per subject.

Without GROUP BY:
SELECT COUNT(*) FROM students; gives one number — the total for everything.

With GROUP BY:
SELECT province, COUNT(*) AS total FROM students GROUP BY province;
This gives one row per province, each with its own count.

The HAVING clause filters GROUPS, just as WHERE filters ROWS:
WHERE runs BEFORE grouping and filters individual rows.
HAVING runs AFTER grouping and filters the grouped results.

You CANNOT use WHERE to filter by an aggregate value. Use HAVING:
SELECT province, COUNT(*) AS total
FROM students
GROUP BY province
HAVING total > 100;
This shows only provinces with more than 100 students.

The order of clauses matters:
SELECT then FROM then WHERE then GROUP BY then HAVING then ORDER BY then LIMIT

Real-world example:
SELECT province, COUNT(*) AS total, AVG(score) AS avg_score
FROM students s
JOIN results r ON s.id = r.student_id
GROUP BY province
ORDER BY avg_score DESC;

This joins students with results, groups by province, calculates count and average per province, then orders by best average first.`,code:`-- Count students per province
SELECT province, COUNT(*) AS num_students
FROM students
GROUP BY province;

-- Average score per subject
SELECT subject, ROUND(AVG(score), 1) AS avg_score
FROM results
GROUP BY subject
ORDER BY avg_score DESC;

-- Only provinces with more than 500 students
SELECT province, COUNT(*) AS total
FROM students
GROUP BY province
HAVING total > 500;`,explanation:`GROUP BY province creates one group per province. COUNT(*) counts rows in each group. HAVING filters groups after aggregation — here only provinces with more than 500 students appear.`,ecz:`GROUP BY and HAVING are Form 4 staples. Know: GROUP BY groups rows, HAVING filters groups (like WHERE but for aggregates). Common question: count students per province, show only provinces with more than 100 students.`,question:{text:`What does GROUP BY province do in a SELECT query?`,options:[`Sorts results by province`,`Creates one result row per unique province`,`Filters only one province`,`Joins provinces together`],answer:1,hint:`GROUP BY creates one output row per unique value in that column, combining all rows with the same value.`},q2:{text:`What is the difference between WHERE and HAVING?`,options:[`No difference`,`WHERE filters rows before grouping; HAVING filters groups after aggregation`,`HAVING is faster`,`WHERE works with aggregates; HAVING does not`],answer:1,hint:`WHERE runs before GROUP BY (filters raw rows). HAVING runs after GROUP BY (filters the grouped results).`},q3:{text:`SELECT subject, AVG(score) FROM results GROUP BY subject HAVING AVG(score) > 60 — what does HAVING do here?`,options:[`Shows only students scoring above 60`,`Shows only subjects where the class average exceeds 60`,`Filters individual scores above 60`,`Orders subjects by average`],answer:1,hint:`HAVING AVG(score) > 60 filters entire subject groups — only subjects whose average score is above 60 appear.`},trace:[{line:2,explanation:`SELECT province, COUNT(*) — for each group we'll see the province and its row count.`,vars:{},output:null},{line:3,explanation:`FROM students — all 1000 student rows.`,vars:{total_rows:1e3},output:null},{line:4,explanation:`GROUP BY province — database groups all rows by province. Creates one group per unique province.`,vars:{groups:[`Lusaka`,`Copperbelt`,`Southern`,`Eastern`,`...`]},output:null},{line:4,explanation:`COUNT(*) applied to each group: Lusaka=320, Copperbelt=280, Southern=150...`,vars:{},output:null},{line:5,explanation:`HAVING total > 500 — filters groups. Only Lusaka(320) and Copperbelt(280)... wait, none exceed 500 in this example.`,vars:{},output:`province    | num_students
Lusaka      | 320
Copperbelt  | 280`}],worked:{scenario:`A school database needs a results table linked to the students table.`,problem:`Create a results table with: id (PK), student_id (FK to students), subject (text, required), score (real), year (integer, default current year 2024).`,steps:[{explain:`Create the table with appropriate types.`,code:`CREATE TABLE results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL,`},{explain:`Add the remaining columns with constraints.`,code:`  subject TEXT NOT NULL,
  score   REAL,
  year    INTEGER DEFAULT 2024,`},{explain:`Add the foreign key reference and close the definition.`,code:`  FOREIGN KEY (student_id) REFERENCES students(id)
);`}],answer:`Table created with 5 columns. student_id is linked to students table. year defaults to 2024 if not provided.`,answerCode:`CREATE TABLE results (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL,
  subject    TEXT NOT NULL,
  score      REAL,
  year       INTEGER DEFAULT 2024,
  FOREIGN KEY (student_id) REFERENCES students(id)
);`,insight:`The FOREIGN KEY constraint prevents inserting a result with a student_id that doesn't exist in the students table. This enforces referential integrity — no orphaned results.`}},{id:`sq8`,title:`JOIN — Combining Tables`,form:4,lesson:`A JOIN combines rows from two or more tables based on a related column. This is what makes relational databases powerful — you store data efficiently in separate tables and bring it together when needed.

INNER JOIN returns only rows that have a MATCH in BOTH tables:
SELECT s.name, r.score
FROM students s
INNER JOIN results r ON s.id = r.student_id;

If a student has no results, they are excluded. If a result has no matching student, it is also excluded.

The ON clause specifies HOW the tables are related.
Table aliases like s and r shorten the query so you write s.name instead of students.name.

LEFT JOIN returns ALL rows from the LEFT table, plus matching rows from the right. Non-matching right-side columns show NULL:
SELECT s.name, r.score
FROM students s
LEFT JOIN results r ON s.id = r.student_id;
Students without results still appear — their score shows as NULL.

Joining three tables:
SELECT s.name, sub.subject_name, r.score
FROM students s
JOIN results r ON s.id = r.student_id
JOIN subjects sub ON r.subject_id = sub.id;

Common JOIN mistake: forgetting the ON clause creates a CARTESIAN PRODUCT — every student row paired with every result row, producing thousands of wrong combinations.`,code:`-- Students table has province_id
-- Provinces table has province names

-- INNER JOIN: only students with a known province
SELECT s.name, p.province_name
FROM students s
INNER JOIN provinces p ON s.province_id = p.id;

-- LEFT JOIN: all students, even those with no province set
SELECT s.name, p.province_name
FROM students s
LEFT JOIN provinces p ON s.province_id = p.id;

-- JOIN three tables: student, result, subject
SELECT s.name, sub.subject_name, r.score
FROM students s
JOIN results r   ON s.id = r.student_id
JOIN subjects sub ON r.subject_id = sub.id;`,explanation:`ON specifies the matching condition between tables. INNER JOIN excludes rows with no match. LEFT JOIN keeps all left-table rows and fills NULLs for missing right-table data. Aliases (s, p) shorten table names.`,ecz:`JOIN is the hardest and most rewarding SQL topic. INNER JOIN returns only matching rows. Know the ON clause. Expect: join students and results tables to show name and score together.`,question:{text:`What does INNER JOIN return?`,options:[`All rows from both tables`,`Only rows that have a match in both tables`,`All rows from the left table`,`All rows from the right table`],answer:1,hint:`INNER JOIN returns only rows where the ON condition matches in both tables. Non-matching rows are excluded.`},q2:{text:`When would you use LEFT JOIN instead of INNER JOIN?`,options:[`When you want fewer results`,`When you want all rows from the left table even if there is no match on the right`,`When both tables are identical`,`When you want to delete rows`],answer:1,hint:`LEFT JOIN keeps every row from the left table. Columns from the right table are NULL where no match exists.`},q3:{text:`SELECT s.name, r.score FROM students s JOIN results r ON s.id = r.student_id — what does ON specify?`,options:[`The column to sort by`,`The condition that links the two tables`,`The column to display`,`A filter like WHERE`],answer:1,hint:`ON s.id = r.student_id tells SQL how the two tables are related — match student id to result's student_id.`},trace:[{line:3,explanation:`FROM students s — students table, aliased as 's' to keep SQL shorter.`,vars:{},output:null},{line:4,explanation:`INNER JOIN provinces p ON s.province_id = p.id — for each student row, find the matching province row where IDs match.`,vars:{join:`s.province_id = p.id`},output:null},{line:4,explanation:`Student: Chanda, province_id=1. Province: id=1, name='Lusaka'. Match! Row included.`,vars:{},output:null},{line:4,explanation:`Student: Bupe, province_id=NULL. No match in provinces — INNER JOIN excludes this row.`,vars:{excluded:`Bupe (no province_id)`},output:null},{line:4,explanation:`INNER JOIN result: only students with a matching province appear.`,vars:{},output:`name    | province_name
Chanda  | Lusaka
Mwamba  | Copperbelt`}],worked:{scenario:`An ECZ analyst needs summary statistics for a national exam sitting.`,problem:`Write a query that returns the total number of students who sat an exam, the average score, and the highest and lowest scores from the results table.`,steps:[{explain:`Use multiple aggregate functions in one SELECT.`,code:`SELECT
  COUNT(*) AS total_students,`},{explain:`Add average, max, and min with aliases.`,code:`  ROUND(AVG(score), 1) AS average,
  MAX(score) AS highest,
  MIN(score) AS lowest`},{explain:`Specify the source table.`,code:`FROM results;`}],answer:`Returns one row with all four statistics: e.g. 850 | 67.3 | 98 | 22`,answerCode:`SELECT
  COUNT(*) AS total_students,
  ROUND(AVG(score), 1) AS average,
  MAX(score) AS highest,
  MIN(score) AS lowest
FROM results;`,insight:`All four aggregates compute in one pass — efficient. AS gives readable column names. ROUND(AVG(score), 1) formats the average to 1 decimal place.`}},{id:`sq9`,title:`Subqueries`,form:4,lesson:`A subquery is a SELECT statement nested inside another SQL statement. The inner query runs FIRST and its result is used by the outer query.

In WHERE clause to filter based on a calculated value:
SELECT name, score
FROM results
WHERE score > (SELECT AVG(score) FROM results);
The inner query calculates the class average. The outer query finds students who scored above it.

In WHERE with IN to filter against a list of values:
SELECT name FROM students
WHERE id IN (SELECT DISTINCT student_id FROM results);
Returns only students who have at least one result recorded.

In FROM clause to treat a query result as a table:
SELECT province, avg_score
FROM (
    SELECT province, AVG(score) AS avg_score
    FROM students s JOIN results r ON s.id = r.student_id
    GROUP BY province
) AS provincial_averages
WHERE avg_score > 70;

Correlated subqueries reference the outer query and run once for each outer row:
SELECT s.name
FROM students s
WHERE s.score = (SELECT MAX(score) FROM results WHERE subject = s.subject);
This finds the top scorer in each subject.

Subquery vs JOIN: both can often achieve the same result. JOINs are generally faster. Subqueries are sometimes more readable.`,code:`-- Find students who scored above the class average
SELECT name, score
FROM results
WHERE score > (
  SELECT AVG(score) FROM results
);

-- Find students who have submitted at least one result
SELECT name FROM students
WHERE id IN (
  SELECT DISTINCT student_id FROM results
);

-- Find the top scorer's name
SELECT name FROM students
WHERE id = (
  SELECT student_id FROM results
  ORDER BY score DESC
  LIMIT 1
);`,explanation:`The inner SELECT AVG(score) runs first and returns a number. The outer WHERE compares each score to that number. IN checks if a value appears in the subquery's results.`,ecz:`Subqueries appear in Form 4 papers. The most common: find students who scored above the class average using WHERE score > (SELECT AVG(score) FROM results). Inner query runs first.`,question:{text:`In a subquery, which part runs first?`,options:[`The outer query`,`The inner (nested) query`,`Both run simultaneously`,`The FROM clause`],answer:1,hint:`The inner query always executes first. Its result is then used by the outer query.`},q2:{text:`SELECT name FROM students WHERE id IN (SELECT student_id FROM results) — what does the IN subquery do?`,options:[`Joins the two tables`,`Returns a list of student_ids that the outer query checks against`,`Counts the results`,`Deletes non-matching students`],answer:1,hint:`IN (subquery) checks if id matches any value in the list returned by the subquery.`},q3:{text:`When is a subquery better than a JOIN?`,options:[`Always — subqueries are faster`,`When you only need data from one table but need to filter based on another`,`When displaying columns from both tables`,`Subqueries are never better`],answer:1,hint:`Use a subquery when you need to filter using values from another table but do not need to display that table's columns.`},trace:[{line:2,explanation:`Outer query: SELECT name, score FROM results WHERE score > (...)`,vars:{},output:null},{line:3,explanation:`Inner query runs FIRST: SELECT AVG(score) FROM results → returns 68.4.`,vars:{avg:68.4},output:null},{line:2,explanation:`Outer query now becomes: WHERE score > 68.4 — filters results.`,vars:{threshold:68.4},output:null},{line:2,explanation:`Rows where score > 68.4: Chanda(88)✓, Chilufya(95)✓, Mwamba(45)✗...`,vars:{},output:null},{line:2,explanation:`Returns all students who scored above the class average.`,vars:{},output:`name     | score
Chanda   | 88
Chilufya | 95`}],worked:{scenario:`An ECZ report needs to show the pass rate for each subject across all schools.`,problem:`Count total students and passing students (score>=50) per subject. Show only subjects with more than 100 students. Order by pass count descending.`,steps:[{explain:`Select subject, total count, and conditional sum for passes.`,code:`SELECT subject,
  COUNT(*) AS total,
  SUM(CASE WHEN score >= 50 THEN 1 ELSE 0 END) AS passed`},{explain:`Specify the table and group by subject.`,code:`FROM results
GROUP BY subject`},{explain:`Filter groups with HAVING and sort.`,code:`HAVING total > 100
ORDER BY passed DESC;`}],answer:`Returns one row per subject with >100 students, showing total and pass count, sorted by most passes first.`,answerCode:`SELECT subject,
  COUNT(*) AS total,
  SUM(CASE WHEN score>=50 THEN 1 ELSE 0 END) AS passed
FROM results
GROUP BY subject
HAVING total > 100
ORDER BY passed DESC;`,insight:`HAVING filters after grouping. WHERE filters before. You cannot use WHERE total > 100 because total is computed by GROUP BY — it doesn't exist yet when WHERE runs.`}},{id:`sq10`,title:`Indexes & Performance`,form:4,lesson:`An index is a separate data structure that the database maintains to speed up queries. Without an index, a query searching for students from Lusaka must scan EVERY row — called a full table scan. With an index on the province column, the database jumps directly to the Lusaka rows.

Think of an index like the index at the back of a textbook. Without it, you scan every page looking for a topic. With the index, you look up the page number directly.

Creating an index:
CREATE INDEX idx_province ON students(province);
CREATE INDEX idx_score ON results(score);

Unique index enforces uniqueness AND speeds up lookups:
CREATE UNIQUE INDEX idx_email ON students(email);
This prevents two students from having the same email address.

Composite index covers multiple columns together:
CREATE INDEX idx_subject_year ON results(subject, year);
Useful when queries filter on BOTH columns together.

Checking how a query uses indexes in SQLite:
EXPLAIN QUERY PLAN SELECT * FROM students WHERE province = 'Lusaka';
Output shows SEARCH USING INDEX if the index is used, or SCAN TABLE (slow) if not.

The trade-off of indexes:
Benefit: dramatically faster SELECT queries.
Cost: slower INSERT, UPDATE, DELETE because the index must also be updated.
Cost: additional storage space on disk.

Remove an index: DROP INDEX idx_province;`,code:`-- Create an index on province for faster filtering
CREATE INDEX idx_province
ON students(province);

-- Create a unique index (also enforces uniqueness)
CREATE UNIQUE INDEX idx_student_email
ON students(email);

-- Composite index on two columns
CREATE INDEX idx_subject_year
ON results(subject, year);

-- Check if a query uses an index (SQLite)
EXPLAIN QUERY PLAN
SELECT * FROM students WHERE province = 'Lusaka';`,explanation:`CREATE INDEX name ON table(column) creates the index. UNIQUE enforces no duplicates. Composite indexes cover queries filtering on multiple columns. EXPLAIN QUERY PLAN shows how SQLite executes a query.`,question:{text:`What is the main benefit of adding an index to a column?`,options:[`Reduces storage space`,`Speeds up SELECT queries that filter on that column`,`Makes INSERT faster`,`Prevents duplicate values`],answer:1,hint:`An index lets SQL find matching rows quickly without scanning the entire table.`},q2:{text:`What is the trade-off of adding many indexes to a table?`,options:[`Queries become slower`,`INSERT, UPDATE, DELETE slow down because indexes must also be updated`,`Tables use less storage`,`No trade-off — always beneficial`],answer:1,hint:`Every write operation must update all relevant indexes. Too many indexes hurts write performance.`},q3:{text:`CREATE UNIQUE INDEX idx_email ON students(email) — what extra constraint does UNIQUE add?`,options:[`Speeds up queries twice as fast`,`Ensures no two rows can have the same email value`,`Creates a primary key`,`Automatically sorts by email`],answer:1,hint:`UNIQUE on an index enforces that every value in that column must be different — like a PRIMARY KEY constraint.`},trace:[{line:2,explanation:`CREATE INDEX idx_province — tells the database to build a lookup structure on the province column.`,vars:{index:`building...`},output:null},{line:3,explanation:`ON students(province) — the index scans all rows and builds a sorted tree of province values → row pointers.`,vars:{index:`idx_province built`},output:null},{line:6,explanation:`CREATE UNIQUE INDEX idx_student_email — UNIQUE means the index also enforces no duplicate emails.`,vars:{index:`idx_student_email (unique)`},output:null},{line:10,explanation:`EXPLAIN QUERY PLAN — shows how the database executes the query. Without index: SCAN TABLE (slow). With index: SEARCH USING INDEX (fast).`,vars:{plan:`SEARCH USING INDEX idx_province`},output:`SEARCH TABLE students USING INDEX idx_province (province=?)`}],worked:{scenario:`A school report needs both student names and their exam scores — stored in separate tables.`,problem:`Write a query that returns each student's name and their Mathematics score by JOINing the students and results tables.`,steps:[{explain:`Select columns from both tables using table aliases.`,code:`SELECT s.name, r.score`},{explain:`JOIN the two tables on the matching ID columns.`,code:`FROM students s
INNER JOIN results r ON s.id = r.student_id`},{explain:`Filter to Mathematics only.`,code:`WHERE r.subject = 'Mathematics'
ORDER BY r.score DESC;`}],answer:`Returns name and maths score for every student who has a maths result, sorted by score.`,answerCode:`SELECT s.name, r.score
FROM students s
INNER JOIN results r ON s.id = r.student_id
WHERE r.subject = 'Mathematics'
ORDER BY r.score DESC;`,insight:`ON s.id = r.student_id is the join condition — it tells SQL how the tables relate. Without ON, you'd get a Cartesian product: every student paired with every result (thousands of wrong rows).`}},{id:`sq11`,title:`NULL Values`,form:3,lesson:`NULL in SQL means unknown or missing — it is NOT the same as zero, empty string, or FALSE. NULL is its own special state representing the absence of a value.

Why NULL exists: when a student is registered but their score is not yet recorded, the score should be NULL — not 0 (which would be a real failing score) and not an empty string.

The critical rule: you CANNOT compare NULL using equals.
WHERE province = NULL is WRONG — it never matches anything, even if province IS null.
WHERE province IS NULL is CORRECT — it finds rows with no province recorded.

Similarly:
WHERE province != NULL is WRONG.
WHERE province IS NOT NULL is CORRECT — finds rows with a province recorded.

NULL in arithmetic and comparisons:
5 + NULL equals NULL because unknown plus anything equals unknown.
NULL > 5 returns NULL — neither true nor false.
NULL = NULL returns NULL — two unknown things are not necessarily equal.

Aggregate functions and NULL:
COUNT(*) counts ALL rows including those with NULL in any column.
COUNT(score) counts only rows where score IS NOT NULL.
AVG, SUM, MAX, and MIN all IGNORE NULL values.

COALESCE(value, default) returns the first non-NULL argument:
SELECT name, COALESCE(province, 'Not recorded') AS province FROM students;
When province is NULL, this displays Not recorded instead.

IFNULL(value, default) is SQLite shorthand: IFNULL(score, 0) returns 0 if score is NULL.`,code:`-- Find students with no province recorded
SELECT name FROM students
WHERE province IS NULL;

-- Find students who DO have a province
SELECT name FROM students
WHERE province IS NOT NULL;

-- Replace NULL with a default using COALESCE
SELECT name,
  COALESCE(province, 'Unknown') AS province
FROM students;

-- NULL arithmetic always gives NULL
-- SELECT 5 + NULL  →  NULL`,explanation:`IS NULL checks for missing values — = NULL never works. IS NOT NULL finds rows with data. COALESCE(value, default) returns the first non-NULL argument — useful for display. Any arithmetic with NULL produces NULL.`,question:{text:`How do you correctly check if a column value is NULL in SQL?`,options:[`WHERE province = NULL`,`WHERE province == NULL`,`WHERE province IS NULL`,`WHERE province EQUALS NULL`],answer:2,hint:`NULL cannot be compared with =. You must use IS NULL or IS NOT NULL.`},q2:{text:`What does COALESCE(province, 'Unknown') return when province IS NULL?`,options:[`NULL`,`''`,`'Unknown'`,`An error`],answer:2,hint:`COALESCE returns the first non-NULL argument. If province is NULL, it returns 'Unknown'.`},q3:{text:`A column has values: 80, NULL, 60, NULL, 90. What does AVG(score) return?`,options:[`66 (including NULLs as 0)`,`76.67 (average of 80,60,90 — NULLs ignored)`,`NULL`,`An error`],answer:1,hint:`Aggregate functions like AVG() ignore NULL values. AVG(80,60,90) = 230/3 = 76.67.`},trace:[{line:2,explanation:`SELECT name FROM students WHERE province IS NULL — IS NULL checks for missing values. = NULL would never match anything.`,vars:{filter:`IS NULL`},output:null},{line:2,explanation:`Scans all rows. Returns only students where province was never set.`,vars:{},output:`name
Mwika Phiri
Susiku Banda`},{line:5,explanation:`SELECT name, COALESCE(province, 'Unknown') — for each row, if province is NULL return 'Unknown', else return province.`,vars:{},output:null},{line:5,explanation:`Chanda: province='Lusaka' → 'Lusaka'. Mwika: province=NULL → 'Unknown'.`,vars:{},output:`name    | province
Chanda  | Lusaka
Mwika   | Unknown`},{line:9,explanation:`5 + NULL — any arithmetic with NULL produces NULL. NULL represents unknown, not zero.`,vars:{result:`NULL`},output:`NULL`}],worked:{scenario:`A school wants to identify students who scored above the class average in Mathematics.`,problem:`Write a query using a subquery to find students whose Maths score is above the average Maths score.`,steps:[{explain:`The outer query selects name and score from results.`,code:`SELECT name, score
FROM results`},{explain:`WHERE filters using the result of an inner subquery.`,code:`WHERE subject = 'Mathematics'
AND score > (`},{explain:`The inner query calculates the average Maths score.`,code:`    SELECT AVG(score)
    FROM results
    WHERE subject = 'Mathematics'
);`}],answer:`Inner query runs first, returns e.g. 64.2. Outer query then finds all Maths scores above 64.2.`,answerCode:`SELECT name, score
FROM results
WHERE subject = 'Mathematics'
AND score > (
    SELECT AVG(score)
    FROM results
    WHERE subject = 'Mathematics'
);`,insight:`The subquery is in parentheses and runs first. Its single result (the average) is then used by the outer WHERE clause. This is more flexible than hardcoding a fixed threshold.`}},{id:`sq12`,title:`String Functions`,form:3,lesson:`SQL provides several built-in functions for manipulating text data stored in your tables. These let you transform, search, and extract text directly in your queries.

Case conversion:
UPPER(name) converts text to uppercase — 'chanda' becomes 'CHANDA'.
LOWER(name) converts to lowercase — 'CHANDA' becomes 'chanda'.
SELECT UPPER(name) AS name_upper FROM students;

Length:
LENGTH(string) returns the number of characters.
SELECT name, LENGTH(name) AS name_length FROM students ORDER BY name_length DESC;

Substring extraction:
SUBSTR(string, start, length) extracts a portion. In SQL, start=1 is the first character.
SUBSTR('Copperbelt', 1, 6) returns 'Copper'.
SUBSTR('Copperbelt', 7) returns 'belt' (from position 7 to end).

Find and replace:
REPLACE(string, find, replacement) replaces all occurrences.
REPLACE('Zambia (Africa)', '(Africa)', '') returns 'Zambia '.

Removing whitespace:
TRIM(string) removes leading and trailing spaces.
LTRIM and RTRIM remove only left or right spaces.

Pattern matching with LIKE:
% matches any sequence including empty.
_ matches exactly one character.
WHERE name LIKE 'Ch%' finds names starting with Ch.
WHERE name LIKE '%son' finds names ending with son.

These functions are especially useful for cleaning inconsistent data — converting all-caps names, stripping extra spaces, or standardising province names entered differently by different users.`,code:`-- Zambian student name operations

-- Convert names to uppercase
SELECT UPPER(name) AS name_upper FROM students;

-- Find students whose name starts with 'Ch'
SELECT name FROM students
WHERE name LIKE 'Ch%';

-- Find names containing 'Mwam'
SELECT name FROM students
WHERE name LIKE '%Mwam%';

-- Extract first 4 characters of province
SELECT SUBSTR(province, 1, 4) AS short_prov
FROM students;

-- Name length
SELECT name, LENGTH(name) AS name_len
FROM students
ORDER BY name_len DESC;`,explanation:`LIKE uses % as wildcard (any characters) and _ for one character. SUBSTR(string, start, length) extracts a substring — SQL uses 1-based indexing. LENGTH() counts characters including spaces.`,question:{text:`In SQL LIKE, what does the % wildcard match?`,options:[`Exactly one character`,`Any single digit`,`Any sequence of zero or more characters`,`Only letters`],answer:2,hint:`% matches any sequence of characters (including none). 'Ch%' matches Chanda, Chilufya, Chisomo, etc.`},q2:{text:`SELECT name FROM students WHERE name LIKE '_upe' — which name does this match?`,options:[`Chisomo`,`Bupe`,`Mwamba`,`Thandiwe`],answer:1,hint:`_ matches exactly one character. '_upe' matches any 4-letter name ending in 'upe' — like 'Bupe'.`},q3:{text:`What does SUBSTR('Copperbelt', 1, 6) return?`,options:[`'Copper'`,`'Copperb'`,`'belt'`,`'Copperbelt'`],answer:0,hint:`SUBSTR(string, start, length) — start at position 1, take 6 characters: C-o-p-p-e-r.`},trace:[{line:2,explanation:`SELECT UPPER(name) — converts every name to uppercase.`,vars:{},output:null},{line:2,explanation:`'Chanda Mutale' → 'CHANDA MUTALE'. Applied to every row.`,vars:{},output:`CHANDA MUTALE
BUPE ZULU
...`},{line:5,explanation:`WHERE name LIKE 'Ch%' — % matches any characters. 'Ch%' matches any name starting with Ch.`,vars:{pattern:`Ch%`},output:null},{line:5,explanation:`Chanda✓ Chilufya✓ Chisomo✓. Bupe✗ Mwamba✗.`,vars:{matches:`Chanda, Chilufya, Chisomo`},output:`Chanda
Chilufya
Chisomo`},{line:9,explanation:`SUBSTR('Copperbelt', 1, 6) — start at position 1, take 6 characters: C-o-p-p-e-r.`,vars:{result:`Copper`},output:`Copper`},{line:12,explanation:`LENGTH(name) — counts characters. 'Chanda'=6, 'Thandiwe'=8. ORDER BY name_len DESC puts longest names first.`,vars:{},output:`Thandiwe | 8
Chanda   | 6`}],worked:{scenario:`A large school database is slow when searching by province. An index will speed it up.`,problem:`Create an index on the province column of the students table. Then write the query that benefits from it.`,steps:[{explain:`Create a named index on the specific column.`,code:`CREATE INDEX idx_students_province
ON students(province);`},{explain:`Now run the query — the database uses the index automatically.`,code:`SELECT name, form
FROM students
WHERE province = 'Copperbelt'
ORDER BY name;`},{explain:`Check query plan to confirm index usage (SQLite).`,code:`EXPLAIN QUERY PLAN
SELECT name FROM students
WHERE province = 'Copperbelt';`}],answer:`Index created. Without index: full table scan (slow). With index: direct lookup (fast).`,answerCode:`CREATE INDEX idx_students_province ON students(province);
SELECT name, form FROM students
WHERE province = 'Copperbelt' ORDER BY name;
EXPLAIN QUERY PLAN SELECT name FROM students WHERE province='Copperbelt';`,insight:`An index is like a sorted book index — instead of reading every page (row), the database jumps to matching entries. Most beneficial on columns used frequently in WHERE clauses.`}},{id:`sq13`,title:`Views`,form:4,lesson:`A VIEW is a named, saved SELECT query stored in the database. When you query a view, the database runs the underlying SELECT and returns the results — the view always reflects the current state of the data.

Think of a view as a virtual table. It looks and behaves like a table (you can SELECT from it and join it with other tables), but it contains no data of its own.

Creating a view:
CREATE VIEW passing_students AS
SELECT s.name, r.subject, r.score
FROM students s
JOIN results r ON s.id = r.student_id
WHERE r.score >= 50;

Using the view exactly like a table:
SELECT * FROM passing_students WHERE subject = 'Mathematics';

Why use views?
Simplification: hide complex joins and conditions behind a simple name.
Security: show only certain columns — a teacher_public view without the salary column means nobody querying it can see salaries.
Consistency: business rules defined once and used everywhere.

The security example:
CREATE VIEW teacher_public AS
SELECT id, name, subject, school FROM teachers;
Nobody querying teacher_public can see salaries, even if they try.

Updating a view definition:
CREATE OR REPLACE VIEW passing_students AS
SELECT ... -- new definition

Removing a view:
DROP VIEW passing_students;
This removes only the view definition. The underlying tables are completely unaffected.`,code:`-- Create a view of passing students
CREATE VIEW passing_students AS
SELECT s.name, r.subject, r.score
FROM students s
JOIN results r ON s.id = r.student_id
WHERE r.score >= 50;

-- Query the view like a normal table
SELECT * FROM passing_students
WHERE subject = 'Mathematics';

-- View hiding sensitive salary column
CREATE VIEW teacher_public AS
SELECT id, name, subject, school
FROM teachers;
-- salary column is hidden from this view

-- Remove a view
DROP VIEW passing_students;`,explanation:`CREATE VIEW name AS SELECT... saves the query. Querying the view re-runs the SELECT against current data. The salary column in teachers is never exposed through teacher_public. DROP VIEW removes the view.`,question:{text:`What is a SQL VIEW?`,options:[`A copy of a table stored separately`,`A saved SELECT query that behaves like a virtual table`,`A type of index`,`A backup of the database`],answer:1,hint:`A VIEW is a stored query. It does not store data itself — it runs the query fresh each time you SELECT from it.`},q2:{text:`Why might you create a view that excludes the salary column from a teachers table?`,options:[`To speed up queries`,`To hide sensitive data from users who should not see it`,`Views always improve performance`,`To reduce storage`],answer:1,hint:`Views can restrict which columns are visible — a common security technique to hide sensitive fields.`},q3:{text:`If the underlying students table is updated, what happens to a view based on it?`,options:[`The view becomes outdated`,`The view automatically reflects the new data`,`The view must be recreated`,`The view is deleted`],answer:1,hint:`A view runs its SELECT query live. It always shows current data from the underlying tables.`},trace:[{line:2,explanation:`CREATE VIEW passing_students AS SELECT ... — saves the query. No data stored yet.`,vars:{view:`passing_students (defined)`},output:null},{line:7,explanation:`SELECT * FROM passing_students — database runs the saved SELECT query now, against current data.`,vars:{},output:null},{line:8,explanation:`WHERE subject = 'Mathematics' — applied on top of the view's own WHERE score>=50. Both conditions must be true.`,vars:{},output:`name    | subject     | score
Chanda  | Mathematics | 78
Mwamba  | Mathematics | 65`},{line:11,explanation:`CREATE VIEW teacher_public AS SELECT id,name,subject,school FROM teachers — salary column deliberately omitted.`,vars:{hidden:`salary column`},output:null},{line:14,explanation:`DROP VIEW passing_students — removes the view definition. The underlying tables are unaffected.`,vars:{view:`passing_students (dropped)`},output:null}],worked:{scenario:`A student record system has some missing province data. The admin needs to find and handle those gaps.`,problem:`Find all students with no province recorded. Then display all students, replacing NULL province with 'Not Recorded'.`,steps:[{explain:`Find NULL values using IS NULL — never use = NULL.`,code:`SELECT name
FROM students
WHERE province IS NULL;`},{explain:`Use COALESCE to replace NULLs with a default in SELECT.`,code:`SELECT name,
  COALESCE(province, 'Not Recorded') AS province
FROM students;`}],answer:`First query: students with no province. Second: all students with NULLs shown as 'Not Recorded'.`,answerCode:`-- Find students with missing province
SELECT name FROM students WHERE province IS NULL;

-- Display with fallback
SELECT name, COALESCE(province,'Not Recorded') AS province
FROM students;`,insight:`WHERE province = NULL never matches anything — NULL is not equal to NULL in SQL. Always use IS NULL or IS NOT NULL. COALESCE does not change the stored data — it only affects the display.`}},{id:`sq14`,title:`Transactions`,form:4,lesson:`A transaction groups multiple SQL operations into one atomic unit. Atomic means ALL operations succeed together, or ALL are undone together — there is no partial success.

Why transactions matter — the bank transfer problem:
Step 1: Deduct K500 from Chanda's account.
Step 2: Add K500 to Mwamba's account.

What if the system crashes after Step 1 but before Step 2? Without transactions, Chanda loses K500 and Mwamba never receives it. Money is destroyed.

With transactions, either BOTH steps complete or NEITHER does.

Transaction commands:
BEGIN TRANSACTION; starts the transaction.
COMMIT; makes all changes permanent.
ROLLBACK; undoes ALL changes since BEGIN TRANSACTION.

Example:
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 500 WHERE id = 101;
  UPDATE accounts SET balance = balance + 500 WHERE id = 202;
COMMIT;

If anything fails between BEGIN and COMMIT, run ROLLBACK to undo everything.

ACID properties — the four guarantees of a transaction:
Atomicity means all or nothing.
Consistency means the database moves from one valid state to another.
Isolation means concurrent transactions do not interfere with each other.
Durability means committed transactions survive system crashes.

When to use transactions: any operation involving multiple related changes such as transfers, bookings, and orders. Real systems use transactions constantly — every mobile money transfer is wrapped in a transaction.`,code:`-- Mobile money transfer at a Zambian fintech
-- Must debit sender AND credit receiver atomically

BEGIN TRANSACTION;

  UPDATE accounts
  SET balance = balance - 500
  WHERE account_id = 101;  -- debit Chanda

  UPDATE accounts
  SET balance = balance + 500
  WHERE account_id = 202;  -- credit Mwamba

COMMIT;  -- both succeeded — save changes

-- If anything went wrong:
-- ROLLBACK;  -- undo ALL changes`,explanation:`BEGIN TRANSACTION starts the transaction. COMMIT saves all changes permanently. ROLLBACK undoes all changes back to the BEGIN. Without transactions, a crash between the two UPDATEs would lose money.`,question:{text:`What does ROLLBACK do in a SQL transaction?`,options:[`Saves all changes permanently`,`Undoes all changes back to the last BEGIN TRANSACTION`,`Deletes the table`,`Starts a new transaction`],answer:1,hint:`ROLLBACK reverses all changes made since BEGIN TRANSACTION — as if they never happened.`},q2:{text:`Why are transactions essential for a mobile money transfer (debit + credit)?`,options:[`They make queries faster`,`They ensure both operations succeed or both are undone — preventing money being lost or created`,`They automatically log the transaction`,`They lock the table for other users`],answer:1,hint:`If a debit succeeds but the credit fails (e.g. power cut), a transaction ensures the debit is rolled back — keeping balances consistent.`},q3:{text:`What does COMMIT do?`,options:[`Cancels the transaction`,`Starts a new transaction`,`Permanently saves all changes made in the transaction`,`Creates a backup`],answer:2,hint:`COMMIT finalises the transaction — all changes become permanent and visible to other users.`},trace:[{line:1,explanation:`BEGIN TRANSACTION — starts a transaction. All following changes are tentative until COMMIT.`,vars:{transaction:`open`},output:null},{line:3,explanation:`UPDATE accounts SET balance = balance - 500 WHERE account_id = 101 — debits Chanda K500. Change is tentative.`,vars:{acc_101_balance:`K1500 → K1000 (tentative)`},output:null},{line:7,explanation:`UPDATE accounts SET balance = balance + 500 WHERE account_id = 202 — credits Mwamba K500. Also tentative.`,vars:{acc_202_balance:`K800 → K1300 (tentative)`},output:null},{line:10,explanation:`COMMIT — both changes are now permanent and visible to all users. Transaction closed.`,vars:{acc_101_balance:`K1000 (permanent)`,acc_202_balance:`K1300 (permanent)`,transaction:`committed`},output:null}],worked:{scenario:`A school wants to find all students whose names start with 'Ch' (common Zambian names like Chanda, Chilufya, Chisomo).`,problem:`Write a query to find all students whose name starts with 'Ch', then also show their name length, sorted by length ascending.`,steps:[{explain:`Use LIKE with % wildcard to match any characters after 'Ch'.`,code:`SELECT name,
  LENGTH(name) AS name_length`},{explain:`Filter names starting with Ch.`,code:`FROM students
WHERE name LIKE 'Ch%'`},{explain:`Sort by name length shortest to longest.`,code:`ORDER BY name_length ASC;`}],answer:`Returns Chanda(6), Chisomo(7), Chilufya(8) etc. ordered by name length.`,answerCode:`SELECT name, LENGTH(name) AS name_length
FROM students
WHERE name LIKE 'Ch%'
ORDER BY name_length ASC;`,insight:`'Ch%' matches any name starting with Ch — Chanda, Chileshe, Chombe etc. 'Ch_' (underscore) would match only 3-letter names starting with Ch. % = any number of chars, _ = exactly one.`}},{id:`sq15`,title:`SQL in Practice — Zambia Case Study`,form:4,lesson:`This final lesson brings together all SQL concepts to solve real data problems. SELECT, WHERE, ORDER BY, LIMIT, JOIN, GROUP BY, HAVING, aggregates, subqueries, and CASE — used together in the kind of queries that appear in real Zambian organisations.

ECZ-style scenario: analysing national Grade 12 exam results across provinces.

The database has:
students (id, name, province, school)
results (id, student_id, subject, score, year)

Query 1 — Top 5 students nationally by average score:
SELECT s.name, s.province, ROUND(AVG(r.score),1) AS avg_score
FROM students s
JOIN results r ON s.id = r.student_id
WHERE r.year = 2024
GROUP BY s.id, s.name, s.province
ORDER BY avg_score DESC
LIMIT 5;

Reading this query: JOIN links students to results. GROUP BY creates one group per student. AVG averages that student's scores. ORDER BY puts highest first. LIMIT 5 returns only the top five.

Query 2 — Pass rate per province:
SELECT s.province,
  COUNT(DISTINCT s.id) AS total_students,
  SUM(CASE WHEN r.score >= 50 THEN 1 ELSE 0 END) AS passed
FROM students s
JOIN results r ON s.id = r.student_id
GROUP BY s.province
ORDER BY passed DESC;

COUNT(DISTINCT s.id) ensures each student is counted once. The CASE WHEN expression converts each score to 1 (pass) or 0 (fail) for easy counting.`,code:`-- ECZ-style exam results database

-- Top 5 students nationally
SELECT s.name, s.province, AVG(r.score) AS avg_score
FROM students s
JOIN results r ON s.id = r.student_id
GROUP BY s.id
ORDER BY avg_score DESC
LIMIT 5;

-- Pass rate per province
SELECT s.province,
  COUNT(*) AS total,
  SUM(CASE WHEN r.score >= 50 THEN 1 ELSE 0 END) AS passed,
  ROUND(100.0 * SUM(CASE WHEN r.score >= 50 THEN 1 ELSE 0 END) / COUNT(*), 1) AS pass_rate
FROM students s
JOIN results r ON s.id = r.student_id
GROUP BY s.province
ORDER BY pass_rate DESC;`,explanation:`The first query JOINs students and results, groups by student, averages their scores, and returns the top 5. The second uses CASE WHEN inside SUM to count passes — a powerful pattern for conditional aggregation.`,question:{text:`In the top 5 students query, what does GROUP BY s.id do?`,options:[`Filters to only 5 students`,`Groups all results per student so AVG can be computed per person`,`Sorts students by ID`,`Joins the two tables`],answer:1,hint:`GROUP BY s.id creates one group per student. AVG(r.score) then averages all that student's subject scores.`},q2:{text:`What does CASE WHEN r.score >= 50 THEN 1 ELSE 0 END do inside SUM()?`,options:[`Returns 1 for every row`,`Returns 1 for passing scores and 0 for failing — SUM counts the passes`,`Filters out failing students`,`Calculates the average score`],answer:1,hint:`CASE WHEN turns a condition into a number (1=pass, 0=fail). SUM adds them up — giving a count of passing rows.`},q3:{text:`ROUND(100.0 * passed / total, 1) — why multiply by 100.0 instead of 100?`,options:[`No difference`,`100.0 forces decimal division; 100 with two integers would give integer division in some databases`,`100.0 is more accurate`,`It is a style convention only`],answer:1,hint:`In many SQL engines, integer/integer = integer (e.g. 3/4 = 0). Using 100.0 forces floating-point division so you get 75.0 instead of 0.`},trace:[{line:2,explanation:`SELECT s.name, s.province, AVG(r.score) — three columns: name, province, and computed average score.`,vars:{},output:null},{line:3,explanation:`FROM students s JOIN results r ON s.id = r.student_id — links each student to all their results.`,vars:{join:`students ↔ results`},output:null},{line:4,explanation:`GROUP BY s.id — groups all result rows per student so AVG can compute per-student average.`,vars:{groups:`one per student`},output:null},{line:5,explanation:`ORDER BY avg_score DESC LIMIT 5 — sorts by average descending, returns top 5 only.`,vars:{},output:`name       | province   | avg_score
Chilufya   | Lusaka     | 91.2
Thandiwe   | Copperbelt | 89.7
...`},{line:9,explanation:`CASE WHEN r.score>=50 THEN 1 ELSE 0 END — converts each result to 1 (pass) or 0 (fail). SUM counts passes.`,vars:{logic:`pass=1, fail=0`},output:null},{line:11,explanation:`ROUND(100.0 * passed / total, 1) — 100.0 forces float division. Rounded to 1 decimal.`,vars:{},output:`province    | total | passed | pass_rate
Lusaka      | 320   | 256    | 80.0
Copperbelt  | 280   | 218    | 77.9`}],worked:{scenario:`ECZ needs a province-level summary: total students and average score per province for the 2024 Grade 12 exam.`,problem:`Write a query joining students and results, grouping by province, showing province, student count, and average score. Sort by average descending.`,steps:[{explain:`Select the grouping column and two aggregates.`,code:`SELECT s.province,
  COUNT(DISTINCT s.id) AS students,
  ROUND(AVG(r.score), 1) AS avg_score`},{explain:`JOIN students to results and filter for 2024.`,code:`FROM students s
JOIN results r ON s.id = r.student_id
WHERE r.year = 2024`},{explain:`Group by province and sort by best average first.`,code:`GROUP BY s.province
ORDER BY avg_score DESC;`}],answer:`One row per province showing total unique students and their average score, best province first.`,answerCode:`SELECT s.province,
  COUNT(DISTINCT s.id) AS students,
  ROUND(AVG(r.score),1) AS avg_score
FROM students s
JOIN results r ON s.id=r.student_id
WHERE r.year=2024
GROUP BY s.province
ORDER BY avg_score DESC;`,insight:`COUNT(DISTINCT s.id) counts unique students — a student with 8 subjects would otherwise be counted 8 times. DISTINCT ensures each student is counted once per province.`}}]},HTML:{color:`#e44d26`,accent:`#fde8e0`,icon:`🌐`,topics:[{id:`h1`,title:`Introduction to HTML`,form:2,lesson:`HTML — HyperText Markup Language — is the foundation of every website you have ever visited. When you open a page in a browser, the browser downloads an HTML file and renders it as visual content on your screen.

HTML is NOT a programming language — it is a MARKUP language. You do not give instructions like calculate this or if this then that. Instead, you DESCRIBE and STRUCTURE content using tags.

A tag is a keyword wrapped in angle brackets. Most tags come in pairs with an opening tag and a closing tag that has a forward slash:
Opening tag: <h1>
Closing tag: </h1>
Content goes between them: <h1>Hello</h1>

Self-closing tags have no content and no closing tag: img, br, and hr are examples.

The HTML document structure — every HTML file follows the same skeleton:
1. DOCTYPE declaration tells the browser which HTML version.
2. The html element is the root element wrapping everything.
3. The head contains invisible metadata — title, character encoding, linked files.
4. The body contains the visible content of the page.

Character encoding: meta charset="UTF-8" tells the browser to use UTF-8 encoding — a standard that supports virtually every character in every language.

The browser reads your HTML from top to bottom and renders each element as it goes. Web development is one of the most in-demand skills in Zambia's growing digital economy. Every business, school, and government department needs a website.`,code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ZamCode School</title>
</head>
<body>
  <h1>Welcome to ZamCode Academy</h1>
  <p>Learn programming the Zambian way.</p>
  <p>Built for secondary school students across Zambia.</p>
</body>
</html>`,explanation:`DOCTYPE tells the browser this is HTML5. The head contains metadata not shown on the page. Everything inside body is visible. h1 is a large heading; p is a paragraph.`,question:{text:`Which HTML element contains the visible content of a web page?`,options:[`<head>`,`<meta>`,`<body>`,`<html>`],answer:2,hint:`The <body> element holds everything the user sees — text, images, buttons, and more.`},q2:{text:`What does the <!DOCTYPE html> declaration do?`,options:[`Creates the page title`,`Tells the browser this is HTML5`,`Links a CSS file`,`Defines the page language`],answer:1,hint:`DOCTYPE is not a tag — it is an instruction to the browser about which version of HTML to use.`},q3:{text:`Where should the page title (shown in the browser tab) be placed?`,options:[`Inside <body>`,`Inside <h1>`,`Inside <head> using <title>`,`At the top of <html>`],answer:2,hint:`<title> lives inside <head>. It sets the text shown in the browser tab, not on the page itself.`},worked:{scenario:`A student at Kabulonga Girls wants to create her first web page.`,problem:`Write a complete HTML page with title 'My School Page', a heading 'Kabulonga Girls Secondary School', and paragraph 'Founded in Lusaka, Zambia.'`,steps:[{explain:`Start with the HTML5 boilerplate.`,code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My School Page</title>
</head>`},{explain:`Add visible content inside body.`,code:`<body>
  <h1>Kabulonga Girls Secondary School</h1>
  <p>Founded in Lusaka, Zambia.</p>
</body>
</html>`}],answer:`A complete page with the correct structure, title in the tab, heading and paragraph visible.`,answerCode:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My School Page</title>
</head>
<body>
  <h1>Kabulonga Girls Secondary School</h1>
  <p>Founded in Lusaka, Zambia.</p>
</body>
</html>`,insight:`Every HTML page needs this same skeleton. The <head> is invisible setup; the <body> is what users see. Never put visible content inside <head>.`}},{id:`h2`,title:`Headings, Paragraphs & Text`,form:2,lesson:`Headings and paragraphs are the most basic building blocks of web content. HTML provides six levels of headings from h1 (most important, largest) to h6 (least important, smallest).

The heading hierarchy represents document structure, not just visual size:
h1 is the main page title — use only ONCE per page.
h2 marks major sections.
h3 marks sub-sections within h2.
h4, h5, and h6 are for deeply nested content.

Never skip levels — screen readers and search engines use heading hierarchy to understand your page structure.

Paragraphs: the p element wraps a paragraph of text. Paragraphs automatically add spacing above and below and each p starts on a new line in the rendered page.

Text formatting tags:
strong signals important content and also makes text bold.
em signals emphasis and also makes text italic.
br is a line break — starts a new line WITHOUT creating a new paragraph.
hr draws a horizontal dividing line.

The difference between strong and bold: strong carries semantic meaning — it tells screen readers this is important content. Bold styling is purely visual.

White space: HTML collapses multiple spaces and line breaks in your code into a single space. To display multiple spaces, use the non-breaking space entity.`,code:`<!DOCTYPE html>
<html><body>
  <h1>Zambia — Land of the Victoria Falls</h1>
  <h2>About Zambia</h2>
  <p>Zambia is a <strong>landlocked country</strong> in southern Africa.</p>
  <p>Its capital city is <em>Lusaka</em>, the largest city.</p>
  <h2>Key Facts</h2>
  <h3>Population</h3>
  <p>Approximately <strong>20 million</strong> people call Zambia home.</p>
  <hr>
  <p>Source: <em>Zambia Statistics Agency, 2024</em></p>
</body></html>`,explanation:`h1-h2-h3 create hierarchy. <strong> signals bold importance. <em> signals italic emphasis. <hr> draws a visual separator line across the page.`,question:{text:`Which heading tag creates the largest heading?`,options:[`<h6>`,`<h3>`,`<h1>`,`<heading>`],answer:2,hint:`h1 is the biggest. h6 is the smallest.`},q2:{text:`What is the difference between <strong> and <em>?`,options:[`No difference`,`<strong> makes text bold; <em> makes text italic`,`<em> makes text bold; <strong> makes it italic`,`Both are deprecated`],answer:1,hint:`<strong> = bold importance. <em> = italic emphasis.`},q3:{text:`You want a new line inside a paragraph without a new paragraph. Which tag?`,options:[`<nl>`,`<newline>`,`<br>`,`<p>`],answer:2,hint:`<br> is a self-closing line break. It starts a new line without the spacing a new <p> creates.`},worked:{scenario:`A student is building a Zambia geography page.`,problem:`Create a page about the Copperbelt with an h1, an h2 Location section with bold text, and an h2 Major Cities section with an italic note.`,steps:[{explain:`Set up the page and h1.`,code:`<!DOCTYPE html>
<html><body>
  <h1>Copperbelt Province</h1>`},{explain:`Add sections with formatted text.`,code:`  <h2>Location</h2>
  <p>The Copperbelt is in <strong>northern Zambia</strong>, bordering the DRC.</p>
  <h2>Major Cities</h2>
  <p>Ndola, Kitwe, and Chingola are the main urban centres.</p>
  <p><em>Source: Zambia Statistics Agency</em></p>
</body></html>`}],answer:`A structured page with heading hierarchy, bold and italic text.`,answerCode:`<!DOCTYPE html>
<html><body>
  <h1>Copperbelt Province</h1>
  <h2>Location</h2>
  <p>The Copperbelt is in <strong>northern Zambia</strong>, bordering the DRC.</p>
  <h2>Major Cities</h2>
  <p>Ndola, Kitwe, and Chingola are the main urban centres.</p>
  <p><em>Source: Zambia Statistics Agency</em></p>
</body></html>`,insight:`Use heading tags for structure, not to make text big. Screen readers and search engines use h1-h6 to understand your page. Never skip levels.`}},{id:`h3`,title:`Links & Navigation`,form:2,lesson:`Links are what make the web a WEB — the ability to click and navigate between pages, websites, and sections. The anchor tag creates hyperlinks.

The href attribute (Hypertext Reference) specifies where the link goes. The link text is what the user sees and clicks.

Three types of destinations:

1. External URLs are full web addresses including the protocol:
Always include https:// — without it, the browser treats it as a relative path on the same site.

2. Relative paths link to pages on the same website:
about.html is in the same folder.
pages/contact.html is in a subfolder.
../index.html goes up one folder level.

3. Page anchors jump to a specific section of the SAME page:
First add an id to the target element: id="contact"
Then link to it: href="#contact"

The target attribute controls how the link opens:
target="_blank" opens in a new browser tab — best for external sites.
No target attribute opens in the same tab — best for internal links.

The nav element wraps navigation links and tells browsers and screen readers that this group of links is the site navigation.

Link accessibility: always use descriptive link text. Click here tells screen reader users nothing. Download the Form 4 results PDF is much better and also improves search engine ranking.`,code:`<!DOCTYPE html>
<html><body>
  <h1>Zambian Resources</h1>
  <p>Visit the
    <a href="https://www.zra.org.zm" target="_blank">Zambia Revenue Authority</a>
    for tax information.
  </p>
  <p><a href="about.html">About this site</a></p>
  <p><a href="#provinces">See provinces below</a></p>
  <h2 id="provinces">Zambian Provinces</h2>
  <p>Zambia has 10 provinces...</p>
</body></html>`,explanation:`href sets the destination. target='_blank' opens in a new tab. Relative links like 'about.html' find files in the same folder. id='provinces' creates a jump target for #provinces.`,question:{text:`Which attribute of <a> specifies where the link goes?`,options:[`src`,`link`,`href`,`url`],answer:2,hint:`href stands for Hypertext Reference — it holds the URL or path the link points to.`},q2:{text:`What does target='_blank' do on a link?`,options:[`Opens in same tab`,`Opens in a new tab`,`Makes the link bold`,`Disables the link`],answer:1,hint:`_blank tells the browser to open the URL in a new tab, leaving the current page open.`},q3:{text:`A link should jump to a section with id='results' on the same page. What href?`,options:[`href='results'`,`href='#results'`,`href='id:results'`,`href='jump:results'`],answer:1,hint:`Use # followed by the id value. <a href='#results'> jumps to id='results' on the same page.`},worked:{scenario:`A student is building a navigation menu for a school website.`,problem:`Create a nav with three links: Home (index.html), About (about.html), and ECZ website opening in a new tab.`,steps:[{explain:`Create the page and nav.`,code:`<!DOCTYPE html>
<html><body>
  <h1>Munali Boys Secondary School</h1>
  <nav>`},{explain:`Add internal and external links.`,code:`    <a href="index.html">Home</a> |
    <a href="about.html">About</a> |
    <a href="https://www.exams.co.zm" target="_blank">ECZ Results</a>
  </nav>
</body></html>`}],answer:`Three links — two internal, one external opening in a new tab.`,answerCode:`<!DOCTYPE html>
<html><body>
  <h1>Munali Boys Secondary School</h1>
  <nav>
    <a href="index.html">Home</a> |
    <a href="about.html">About</a> |
    <a href="https://www.exams.co.zm" target="_blank">ECZ Results</a>
  </nav>
</body></html>`,insight:`Always use target='_blank' for external sites so users don't navigate away from your site. For internal pages, use relative paths like 'about.html'.`}},{id:`h4`,title:`Images`,form:2,lesson:`Images make web pages visually engaging and informative. The img tag embeds images — it is self-closing, meaning it has no closing tag.

The two required attributes:
src (source) specifies the path or URL to the image file. This can be a relative path like photos/victoria-falls.jpg or an absolute URL.
alt (alternative text) provides a description of the image. This is REQUIRED for accessibility:
Screen readers read alt text aloud for visually impaired users.
Displayed when the image fails to load due to a broken link or slow connection.
Used by search engines to understand image content.

Common image format types:
jpg and jpeg are for photos and complex images. They have smaller file size but slight quality loss.
png is for graphics, logos, and images needing transparency. Larger file size but no quality loss.
gif is for animated images but limited to 256 colours.
svg is vector graphics that scale to any size without losing quality — great for logos.
webp is a modern format with excellent quality and small file size.

Size control:
width="300" sets width in pixels and height scales automatically to maintain proportions.
Both width AND height specified can distort the image if proportions do not match.

CSS is better for sizing: style="width: 300px; height: auto;"

Image performance: large images slow down web pages significantly. Always resize images appropriately before using them in web pages.`,code:`<!DOCTYPE html>
<html><body>
  <h1>Victoria Falls</h1>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Victoria_Falls_1.jpg/320px-Victoria_Falls_1.jpg"
    alt="Victoria Falls, Livingstone, Zambia"
    width="320"
  >
  <p>Victoria Falls is one of the largest waterfalls in the world,
     located on the Zambezi River near Livingstone, Zambia.</p>
</body></html>`,explanation:`src points to the image. alt describes it for accessibility and as a fallback. Setting only width lets the browser scale height proportionally.`,question:{text:`Which attribute provides alternative text for an image?`,options:[`title`,`src`,`alt`,`desc`],answer:2,hint:`alt text is shown when the image fails to load and read aloud by screen readers.`},q2:{text:`Why is the alt attribute important?`,options:[`Makes images load faster`,`Required to display the image`,`Accessibility for screen readers and fallback if image fails`,`Sets the image size`],answer:2,hint:`alt serves two purposes: accessibility and fallback for broken links or slow connections.`},q3:{text:`An img has width='300' but no height. What happens?`,options:[`Displays as 300x300`,`Image is invisible`,`Displays at 300px wide, height scales proportionally`,`Error — height is required`],answer:2,hint:`If only width is set, height scales proportionally to maintain the original aspect ratio.`},worked:{scenario:`A student is building a Zambia tourism page with an image and caption.`,problem:`Add Zambia's flag image with alt text, width 200px, and a caption paragraph below.`,steps:[{explain:`Add the image tag with all attributes.`,code:`<img
  src="https://flagcdn.com/w320/zm.png"
  alt="Flag of Zambia — green with orange eagle"
  width="200"
>`},{explain:`Add a caption below.`,code:`<p><em>The flag of Zambia: green background with a soaring eagle.</em></p>`}],answer:`Image at 200px with proper alt text and caption below.`,answerCode:`<!DOCTYPE html>
<html><body>
  <h1>Zambia</h1>
  <img src="https://flagcdn.com/w320/zm.png" alt="Flag of Zambia — green with orange eagle" width="200">
  <p><em>The flag of Zambia: green background with a soaring eagle.</em></p>
</body></html>`,insight:`Never leave alt empty unless the image is purely decorative. Good alt text describes what the image shows — not just 'image' or the filename.`}},{id:`h5`,title:`Lists`,form:2,lesson:`Lists organise information into a structured format that is easy to scan and read. HTML provides two main types of lists.

UNORDERED LIST using ul creates bullet points. Use for features, ingredients, options, names, or items where order does not matter.

ORDERED LIST using ol creates numbered items. Use for steps, instructions, rankings, or procedures where order matters.

Both use the li (list item) element for each entry.

Changing the style of ordered lists with the type attribute:
type="1" gives numbers: 1, 2, 3 (this is the default)
type="A" gives uppercase letters: A, B, C
type="a" gives lowercase letters: a, b, c
type="I" gives uppercase Roman numerals: I, II, III
type="i" gives lowercase Roman numerals: i, ii, iii

Nested lists place a complete ul or ol inside an li element. The browser automatically indents nested lists to show the hierarchy. This is perfect for showing provinces and their districts, or topics and their subtopics.

DESCRIPTION LIST using dl is for term-definition pairs:
dt is the term being defined.
dd is the definition or description.

Example uses in Zambia:
Unordered: provinces of Zambia, subjects offered, school rules.
Ordered: steps to register for ECZ exams, instructions for a science experiment.
Description: a glossary of programming terms, an FAQ page.

The visual style of lists is controlled with CSS. HTML just provides the structure.`,code:`<!DOCTYPE html>
<html><body>
  <h1>Zambia Facts</h1>
  <h2>Provinces</h2>
  <ul>
    <li>Lusaka</li>
    <li>Copperbelt</li>
    <li>Southern</li>
    <li>Eastern</li>
  </ul>
  <h2>Steps to register for ECZ exams</h2>
  <ol>
    <li>Collect registration forms from your school</li>
    <li>Complete all personal details</li>
    <li>Submit forms with payment to the head teacher</li>
    <li>Receive your exam slip</li>
  </ol>
</body></html>`,explanation:`<ul> creates bullet points. <ol> creates numbers. Each <li> is one item. Nest a <ul> inside an <li> to create an indented sub-list.`,question:{text:`Which tag creates a numbered list?`,options:[`<ul>`,`<list>`,`<nl>`,`<ol>`],answer:3,hint:`ol = Ordered List — it automatically numbers each <li>.`},q2:{text:`You are listing steps to solve a problem. Use <ul> or <ol>?`,options:[`<ul> — order does not matter`,`<ol> — steps must be in order`,`Either works`,`Neither — use <p>`],answer:1,hint:`Use <ol> when order matters (steps, rankings). Use <ul> when order does not matter.`},q3:{text:`What tag is used for each item inside both <ul> and <ol>?`,options:[`<item>`,`<bullet>`,`<li>`,`<entry>`],answer:2,hint:`<li> = List Item. Used inside both <ul> and <ol>.`},worked:{scenario:`A Form 2 student is creating a revision guide page.`,problem:`Create a page with an unordered list of 3 cell organelles and an ordered list of 4 steps in mitosis.`,steps:[{explain:`Add the unordered list.`,code:`<h2>Cell Organelles</h2>
<ul>
  <li>Nucleus</li>
  <li>Mitochondria</li>
  <li>Ribosome</li>
</ul>`},{explain:`Add the ordered list.`,code:`<h2>Stages of Mitosis</h2>
<ol>
  <li>Interphase</li>
  <li>Prophase</li>
  <li>Metaphase</li>
  <li>Anaphase</li>
</ol>`}],answer:`Two lists — bullets for organelles, numbers for steps.`,answerCode:`<!DOCTYPE html>
<html><body>
  <h2>Cell Organelles</h2>
  <ul><li>Nucleus</li><li>Mitochondria</li><li>Ribosome</li></ul>
  <h2>Stages of Mitosis</h2>
  <ol><li>Interphase</li><li>Prophase</li><li>Metaphase</li><li>Anaphase</li></ol>
</body></html>`,insight:`Use <ul> vs <ol> based on meaning, not appearance. The visual style can always be changed with CSS later.`}},{id:`h6`,title:`Tables`,form:3,lesson:`Tables organise data into rows and columns — perfect for mark sheets, timetables, comparison charts, and any tabular information.

Core table tags:
table is the container for the entire table.
tr is a table row (horizontal).
th is a table header cell — bold and centred by default, with semantic meaning.
td is a table data cell for regular content.

Basic structure: a table contains tr elements. Each tr contains either th elements for header rows or td elements for data rows.

Semantic grouping elements are best practice:
thead groups the header rows.
tbody groups the data rows.
tfoot groups footer rows for summaries like totals.

These add no visual change by default but improve accessibility and allow CSS to style header and body rows separately.

Spanning cells:
colspan="2" makes the cell span 2 columns.
rowspan="3" makes the cell span 3 rows.

Table accessibility:
Always use th for header cells, not bold td.
Add scope="col" or scope="row" to th elements for complex tables.
Use the caption element to give the table a descriptive title.

When NOT to use tables: never use tables for page layout. Tables are only for tabular data. CSS Grid and Flexbox are the correct tools for layout.

A common ECZ question asks you to create a student results table with a header row showing Name, Subject, and Score, with appropriate use of th, td, thead, and tbody.`,code:`<!DOCTYPE html>
<html><body>
  <h1>Grade 12 Results — Lusaka Schools</h1>
  <table border="1">
    <thead>
      <tr>
        <th>School</th>
        <th>Province</th>
        <th>Pass Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Kabulonga Boys</td>
        <td>Lusaka</td>
        <td>94%</td>
      </tr>
      <tr>
        <td>Munali Boys</td>
        <td>Lusaka</td>
        <td>89%</td>
      </tr>
      <tr>
        <td>Matero Boys</td>
        <td>Lusaka</td>
        <td>82%</td>
      </tr>
    </tbody>
  </table>
</body></html>`,explanation:`<thead> and <tbody> group rows semantically. <th> creates bold header cells. border='1' adds a visible border for this demo.`,ecz:`Tables are tested every year in HTML papers. Know: table, tr, th, td, thead, tbody. Expect to create a results table with a header row. Common trap: confusing th (header) with td (data).`,question:{text:`Which tag creates a header cell in an HTML table?`,options:[`<td>`,`<tr>`,`<th>`,`<thead>`],answer:2,hint:`<th> = Table Header — bold and centred by default, distinguishing it from data cells.`},q2:{text:`What is the correct nesting order for a table row with two cells?`,options:[`<table><td><tr>...</tr></td></table>`,`<table><tr><td>...</td><td>...</td></tr></table>`,`<tr><table><td>...</td></table></tr>`,`<table><th><td>...</td></th></table>`],answer:1,hint:`Always: table > tr > td. The table contains rows, rows contain cells.`},q3:{text:`What is the purpose of <thead> and <tbody>?`,options:[`Required for table to work`,`Add styling automatically`,`Semantically group header rows from data rows`,`Create separate tables`],answer:2,hint:`Optional but best practice — helps screen readers and allows separate CSS styling.`},worked:{scenario:`A teacher wants an HTML table showing Form 3 exam scores.`,problem:`Create a table with columns: Student, Maths, English, Science. Add three students: Chanda(78,85,72), Mwamba(91,76,88), Bupe(65,90,71).`,steps:[{explain:`Set up the table with a header row.`,code:`<table border="1">
  <thead>
    <tr><th>Student</th><th>Maths</th><th>English</th><th>Science</th></tr>
  </thead>`},{explain:`Add data rows in tbody.`,code:`  <tbody>
    <tr><td>Chanda</td><td>78</td><td>85</td><td>72</td></tr>
    <tr><td>Mwamba</td><td>91</td><td>76</td><td>88</td></tr>
    <tr><td>Bupe</td><td>65</td><td>90</td><td>71</td></tr>
  </tbody>
</table>`}],answer:`A 4-column, 4-row table with bold headers and student data.`,answerCode:`<table border="1"><thead><tr><th>Student</th><th>Maths</th><th>English</th><th>Science</th></tr></thead><tbody><tr><td>Chanda</td><td>78</td><td>85</td><td>72</td></tr><tr><td>Mwamba</td><td>91</td><td>76</td><td>88</td></tr><tr><td>Bupe</td><td>65</td><td>90</td><td>71</td></tr></tbody></table>`,insight:`Always include a header row using <th>. It makes the table readable and is required for accessibility.`}},{id:`h7`,title:`Forms & Input`,form:3,lesson:`Forms are how users send information to a website — logging in, registering, searching, making payments, or submitting homework. Every interactive input on a website uses an HTML form.

The form element wraps all input elements:
action specifies the URL that processes the form data when submitted.
method specifies how the data is sent.
GET appends data to the URL as query parameters — visible in the browser address bar. Use for search forms.
POST sends data in the request body — invisible in URL. Use for passwords and sensitive data.

Input types controlled by the type attribute:
text is a single-line text field.
email validates email format automatically.
password masks characters as you type.
number accepts numbers only.
checkbox is a tick box allowing multiple selections.
radio is a circle button allowing only one selection from a group.
submit creates the submission button.
reset clears the form.

Labels: the for attribute on label must match the id attribute on the input. Clicking the label then focuses the input — important for mobile usability and accessibility.

Select dropdown: the select element contains option elements. Use value attributes on options to specify what gets sent to the server.

Textarea for multi-line text has rows and cols attributes to control its default size.

Required fields: adding the required attribute causes the browser to show an error if the field is empty when the user tries to submit.`,code:`<!DOCTYPE html>
<html><body>
  <h1>ZamCode Academy — Registration</h1>
  <form action="/register" method="POST">
    <label for="name">Full Name:</label><br>
    <input type="text" id="name" name="name" placeholder="e.g. Chanda Mutale"><br><br>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email"><br><br>
    <label for="form">School Form:</label><br>
    <select id="form" name="form">
      <option value="1">Form 1</option>
      <option value="2">Form 2</option>
      <option value="3">Form 3</option>
      <option value="4">Form 4</option>
    </select><br><br>
    <label><input type="checkbox" name="agree"> I agree to the terms</label><br><br>
    <input type="submit" value="Register Now">
  </form>
</body></html>`,explanation:`for='name' on the label links to id='name' on the input. placeholder shows hint text. <select> creates a dropdown. type='submit' creates the submit button.`,ecz:`Forms are a Form 3 ECZ favourite. Know: form, input types (text, email, password, submit), label with for attribute, and select dropdown. Expect to design a registration or login form.`,question:{text:`Which attribute links a <label> to its corresponding <input>?`,options:[`name`,`id`,`for`,`link`],answer:2,hint:`The for attribute on <label> must match the id attribute on the <input>.`},q2:{text:`What is the difference between method='GET' and method='POST'?`,options:[`No difference`,`GET sends data in the URL (visible); POST sends data in the request body (hidden)`,`POST is faster`,`GET is for files; POST is for text`],answer:1,hint:`GET appends data to the URL — visible and bookmarkable. POST sends data hidden in the request body — used for passwords.`},q3:{text:`Which input type should you use for a password field?`,options:[`type='text'`,`type='hidden'`,`type='secure'`,`type='password'`],answer:3,hint:`type='password' masks the characters as the user types.`},worked:{scenario:`A school is building an online homework submission form.`,problem:`Create a form with: a text input for name, a number input for form (1-4), a textarea for the answer, and a submit button.`,steps:[{explain:`Set up form and name input.`,code:`<form method="POST" action="/submit">
  <label for="sname">Student Name:</label><br>
  <input type="text" id="sname" name="name"><br><br>`},{explain:`Add form number and textarea.`,code:`  <label for="form">Form:</label><br>
  <input type="number" id="form" name="form" min="1" max="4"><br><br>
  <label for="hw">Homework Answer:</label><br>
  <textarea id="hw" name="answer" rows="4" cols="40"></textarea><br><br>`},{explain:`Add submit button.`,code:`  <input type="submit" value="Submit Homework">
</form>`}],answer:`A functional form with name, form number, textarea, and submit button.`,answerCode:`<form method="POST"><input type="text" placeholder="Name"> <input type="number" min="1" max="4" placeholder="Form"> <textarea rows="4"></textarea> <input type="submit" value="Submit"></form>`,insight:`Always use <label> with every input — it improves accessibility and makes the form easier to use on mobile.`}},{id:`h8`,title:`Semantic Elements`,form:3,lesson:`Semantic HTML uses tags that describe the PURPOSE and MEANING of content, not just its appearance. A div just means a block. A nav means navigation. A footer means page footer. This meaning is understood by browsers, search engines, and assistive technologies.

Why semantics matter:
SEO: Google reads semantic HTML to understand your page structure and ranks it accordingly.
Accessibility: screen readers navigate pages by landmark elements like nav, main, and header.
Maintainability: your code is self-documenting — any developer can read it and understand the layout.

The key semantic elements:
header is the page or section header. It usually contains the logo, site name, and main navigation.
nav contains navigation links. It can appear in the header or as a standalone sidebar.
main contains the primary content of the page. There should be only ONE main per page.
section is a thematic grouping of content and should have a heading inside.
article is self-contained content that makes sense on its own, like a blog post, news story, or lesson.
aside contains tangentially related content like a sidebar, related links, or advertisements.
footer is the page footer. It usually contains copyright, contact info, and secondary navigation.

Non-semantic elements still used for styling:
div is a block-level container with no semantic meaning.
span is an inline container with no semantic meaning.

The rule of thumb: if there is a semantic tag that describes what the content IS, use it. Fall back to div or span only when no semantic tag fits.`,code:`<!DOCTYPE html>
<html lang="en">
<head><title>ZamCode Academy</title></head>
<body>
  <header>
    <h1>ZamCode Academy</h1>
    <p>Learn Programming the Zambian Way</p>
  </header>
  <nav>
    <a href="/">Home</a> |
    <a href="/lessons">Lessons</a> |
    <a href="/about">About</a>
  </nav>
  <main>
    <section>
      <h2>Featured Lesson</h2>
      <article>
        <h3>Introduction to Python</h3>
        <p>Python is beginner-friendly and widely used...</p>
      </article>
    </section>
    <aside>
      <h3>Study Tip</h3>
      <p>Practice 20 minutes daily for best results.</p>
    </aside>
  </main>
  <footer>
    <p>&copy; 2024 ZamCode Academy — Lusaka, Zambia</p>
  </footer>
</body></html>`,explanation:`<header> holds the site banner. <nav> holds navigation links. <main> wraps primary content. <section> groups related content. <article> is self-contained. <aside> is supplementary. <footer> holds copyright info.`,question:{text:`Which semantic element should wrap the main navigation links?`,options:[`<menu>`,`<nav>`,`<links>`,`<header>`],answer:1,hint:`<nav> is specifically for navigation — it tells screen readers this section contains links to other pages.`},q2:{text:`What is the advantage of <article> over <div>?`,options:[`<article> loads faster`,`<article> is self-contained and makes sense on its own — better for SEO and screen readers`,`<article> adds styling`,`<div> is deprecated`],answer:1,hint:`<article> signals its content stands alone — a blog post, news story, or lesson.`},q3:{text:`Where should copyright information typically go?`,options:[`<header>`,`<aside>`,`<footer>`,`<nav>`],answer:2,hint:`<footer> is at the bottom and conventionally holds copyright notices and contact info.`},worked:{scenario:`A student is restructuring a school website to use semantic HTML.`,problem:`Rewrite using semantic tags: a banner with school name, navigation with 2 links, a main section with a news article, and a footer.`,steps:[{explain:`Replace banner div with header and nav.`,code:`<header>
  <h1>Sikombe Secondary School</h1>
</header>
<nav><a href="/">Home</a> | <a href="/news">News</a></nav>`},{explain:`Add main content and footer.`,code:`<main>
  <article>
    <h2>School reopens 8th January</h2>
    <p>All students report by 7:30am.</p>
  </article>
</main>
<footer><p>&copy; 2024 Sikombe Secondary School</p></footer>`}],answer:`A fully semantic page with header, nav, main, article, and footer.`,answerCode:`<!DOCTYPE html>
<html><body>
<header><h1>Sikombe Secondary School</h1></header>
<nav><a href="/">Home</a> | <a href="/news">News</a></nav>
<main><article><h2>School reopens 8th January</h2><p>All students report by 7:30am.</p></article></main>
<footer><p>&copy; 2024 Sikombe Secondary School</p></footer>
</body></html>`,insight:`Semantic HTML looks the same visually but is far more meaningful. Google ranks semantically correct pages higher. Screen readers navigate by landmarks like <nav> and <main>.`}},{id:`h9`,title:`Inline vs Block Elements`,form:3,lesson:`Every HTML element generates a rectangular box. Understanding whether an element is block-level or inline determines how elements flow on the page.

BLOCK ELEMENTS:
Start on a new line automatically.
Take up the full available width by default.
Can have width and height set in CSS.
Can contain other block or inline elements.

Examples of block elements: div, p, h1 through h6, ul, ol, li, table, section, article, header, footer, nav, main.

INLINE ELEMENTS:
Flow within text — they sit on the same line as surrounding content.
Only take up as much width as their content.
Cannot have explicit width or height set in CSS.
Should only contain other inline elements or text.

Examples of inline elements: span, a, strong, em, img, input, label, button.

Important rule: never put a block element inside an inline element.

The generic containers:
div is a block container used for grouping block elements or as a layout wrapper.
span is an inline container used for styling a portion of text within a paragraph.

CSS can change an element's display behaviour:
display: block makes any element behave as block.
display: inline makes any element behave as inline.
display: inline-block allows the element to flow inline but also accept width and height.
display: none completely hides the element and it takes no space.

Understanding block vs inline is essential for CSS layout — knowing why two elements appear on the same line or on different lines depends entirely on their display type.`,code:`<!DOCTYPE html>
<html><body>
  <!-- Block elements stack vertically -->
  <div style="background:#e8f4f8; padding:10px; margin:5px;">
    I am a block element (div)
  </div>
  <div style="background:#f8e8e8; padding:10px; margin:5px;">
    I am another block element
  </div>
  <!-- Inline elements flow within text -->
  <p>
    The
    <span style="color:green; font-weight:bold;">Copperbelt Province</span>
    produces most of Zambia's
    <span style="color:orange;">copper</span>
    exports.
  </p>
  <p>Visit <a href="#">Lusaka</a> and <a href="#">Livingstone</a>.</p>
</body></html>`,explanation:`Two <div> elements stack vertically — they are block-level. Two <span> elements flow within the paragraph — they are inline. Inline elements can be inside block elements but NOT vice versa.`,question:{text:`Which of these is an INLINE element?`,options:[`<div>`,`<p>`,`<span>`,`<section>`],answer:2,hint:`<span> is inline — it wraps content within a line without breaking it.`},q2:{text:`What happens when you place two <div> elements next to each other?`,options:[`They sit side by side`,`Each starts on a new line and takes full width`,`They overlap`,`They merge`],answer:1,hint:`Block elements always start on a new line. Use CSS flexbox to place them side by side.`},q3:{text:`You want to colour just the word 'Lusaka' red inside a paragraph. Which tag?`,options:[`<div>`,`<section>`,`<span>`,`<p>`],answer:2,hint:`<span> is an inline container — use it to style part of text without breaking the layout.`},worked:{scenario:`A student is marking up a Zambia facts paragraph with selective styling.`,problem:`Write a paragraph about Zambia where 'Lusaka' is bold and green, 'Victoria Falls' is italic and orange, without breaking the paragraph flow.`,steps:[{explain:`Wrap 'Lusaka' in a span.`,code:`<p>The capital city <span style="color:green;font-weight:bold;">Lusaka</span>`},{explain:`Wrap 'Victoria Falls' in a span.`,code:`  is near the famous
  <span style="color:orange;font-style:italic;">Victoria Falls</span>,
  one of the seven natural wonders.
</p>`}],answer:`A single paragraph with two styled spans — layout unchanged, selected words styled.`,answerCode:`<p>The capital city <span style="color:green;font-weight:bold;">Lusaka</span> is near the famous <span style="color:orange;font-style:italic;">Victoria Falls</span>, one of the seven natural wonders.</p>`,insight:`Use <span> for styling part of a line. Use <div> for grouping block sections. Never put a block element inside an inline element.`}},{id:`h10`,title:`HTML Entities & Special Characters`,form:3,lesson:`Certain characters have special meaning in HTML or cannot be typed easily on a keyboard. HTML entities provide a way to display these characters as text without confusing the browser.

Why entities are needed:
The < and > symbols define HTML tags — if you write them as text in your content, the browser treats them as tag delimiters. To show the literal characters, use &lt; for < and &gt; for >.
The & symbol starts all HTML entities — to show a literal & symbol, write &amp;

All HTML entities follow the same format: an ampersand, then a name, then a semicolon.

The essential HTML entities:
&lt; displays the less-than symbol.
&gt; displays the greater-than symbol.
&amp; displays the ampersand symbol.
&copy; displays the copyright symbol.
&reg; displays the registered trademark symbol.
&nbsp; displays a non-breaking space that prevents line wrapping at that point.
&quot; displays a double quote character.
&pound; displays the British pound sign.
&euro; displays the Euro sign.

Numeric entities use a number instead of a name. &#169; is the same as &copy;.

When to use &nbsp;:
Between a number and its unit (100&nbsp;km prevents 100 and km from appearing on separate lines).
To create multiple visible spaces (HTML collapses regular spaces into one).

In Zambia, entities are needed when building websites that display programming code examples, show legal copyright notices, or include mathematical symbols in science pages.`,code:`<!DOCTYPE html>
<html><body>
  <h1>HTML Entities Demo</h1>
  <!-- Show code examples as text -->
  <p>A paragraph tag looks like: &lt;p&gt;text&lt;/p&gt;</p>
  <!-- Copyright notice -->
  <p>&copy; 2024 ZamCode Academy. All rights reserved.</p>
  <!-- Ampersand in names -->
  <p>Ministry of Education &amp; Science</p>
  <!-- Non-breaking space -->
  <p>K&nbsp;500.00</p>
  <!-- Maths in text -->
  <p>Price &lt; K100: show discount</p>
</body></html>`,explanation:`&lt; and &gt; display < and > without the browser treating them as tags. &copy; renders ©. &nbsp; creates a space that does not wrap.`,question:{text:`How do you display < as visible text in HTML?`,options:[`\\<`,`<text>`,`&lt;`,`(less than)`],answer:2,hint:`&lt; is the HTML entity for the less-than sign. lt = less than.`},q2:{text:`What does &amp; display in the browser?`,options:[`&amp;`,`&`,`The word ampersand`,`Nothing`],answer:1,hint:`&amp; is the entity for the & character. Use it in text like Arts &amp; Crafts.`},q3:{text:`You want to show the HTML tag <strong> as code on the page. Which is correct?`,options:[`<strong>`,`<code><strong></code>`,`&lt;strong&gt;`,`[strong]`],answer:2,hint:`Replace < with &lt; and > with &gt; so the browser shows them as text.`},worked:{scenario:`A teacher wants to show HTML syntax examples on a tutorial page.`,problem:`Create a page showing three HTML tags as visible text: <h1>, <p>, and <img src='...'>`,steps:[{explain:`Use &lt; and &gt; to show each tag as text.`,code:`<p>Heading tag: &lt;h1&gt;text&lt;/h1&gt;</p>
<p>Paragraph tag: &lt;p&gt;content&lt;/p&gt;</p>`},{explain:`Show the img tag with its attribute.`,code:`<p>Image tag: &lt;img src=&quot;file.jpg&quot; alt=&quot;desc&quot;&gt;</p>`}],answer:`Three lines showing HTML tags as readable text rather than being parsed.`,answerCode:`<p>Heading tag: &lt;h1&gt;text&lt;/h1&gt;</p>
<p>Paragraph: &lt;p&gt;content&lt;/p&gt;</p>
<p>Image: &lt;img src=&quot;file.jpg&quot; alt=&quot;desc&quot;&gt;</p>`,insight:`Whenever you write tutorial content showing HTML, replace every < with &lt; and > with &gt;. Forgetting one will cause the browser to try to parse it as a real tag.`}},{id:`h11`,title:`Introduction to CSS`,form:3,lesson:`CSS (Cascading Style Sheets) controls the visual appearance of HTML — colours, fonts, sizes, spacing, layouts, and animations. Without CSS, websites are just plain black text on a white background.

The three ways to add CSS to HTML:

1. Inline CSS uses the style attribute on a single element. Good for quick testing but bad practice for real pages because it mixes content and presentation.

2. Internal CSS uses a style tag inside the head element. Good for single-page sites but styles only apply to that one HTML file.

3. External CSS uses a separate .css file linked with a link element. This is best practice for real projects — one CSS file styles all pages consistently. Change one file and every page updates.

CSS syntax — every rule has the same structure:
selector { property: value; }

selector identifies WHICH HTML elements to style.
property is WHAT aspect to change (color, font-size, background).
value is HOW to change it (red, 18px, or a hex colour code).

The cascade and specificity:
Multiple rules can apply to the same element. When they conflict, CSS follows specificity rules:
Inline style wins over ID selectors, which win over class selectors, which win over tag selectors.

The most important CSS properties to learn first:
color is text colour.
background-color is background fill colour.
font-size is text size using px, em, or rem units.
font-family is the typeface.
font-weight is bold or normal.
margin is space OUTSIDE the element.
padding is space INSIDE the element between content and border.
border is the visible outline around the element.
width and height control element dimensions.`,code:`<!DOCTYPE html>
<html>
<head>
  <title>Styled ZamCode Page</title>
  <style>
    body {
      background-color: #0d1b2a;
      color: #e2e8f0;
      font-family: 'Segoe UI', sans-serif;
    }
    h1 {
      color: #e8a020;
      text-align: center;
    }
    p {
      font-size: 16px;
      line-height: 1.8;
      max-width: 600px;
      margin: 0 auto;
    }
    .highlight {
      color: #27ae60;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Welcome to ZamCode Academy</h1>
  <p>
    Learning to code in
    <span class="highlight">Zambia</span>
    opens doors to the digital economy.
  </p>
</body></html>`,explanation:`The <style> block holds CSS rules. body{} styles the whole page. h1{} targets all h1 elements. .highlight{} is a class selector — applied using class='highlight' on any element.`,ecz:`CSS introduction is tested as internal CSS using the style tag. Know: selector { property: value; }. Expect to style a heading colour, paragraph font size, and background colour.`,question:{text:`What is the correct syntax for a CSS rule?`,options:[`selector: property = value`,`selector { property: value; }`,`property { selector: value; }`,`selector (property: value)`],answer:1,hint:`CSS: selector { property: value; } — colon separates property from value; semicolon ends each declaration.`},q2:{text:`What does a class selector look like in CSS?`,options:[`#myClass`,`myClass`,`*myClass`,`.myClass`],answer:3,hint:`Class selectors start with a dot: .myClass {} — applied in HTML as class='myClass'.`},q3:{text:`What is the advantage of external CSS over inline styles?`,options:[`External CSS is faster to type`,`External CSS in a .css file can style all pages — change one file, update the whole site`,`Inline styles are deprecated`,`External CSS only works with HTML5`],answer:1,hint:`One .css file linked to all pages — change a colour once and every page updates.`},worked:{scenario:`A student wants to style a Zambia facts page.`,problem:`Write CSS rules for: body with dark background (#0d1b2a) and white text, h1 with gold colour (#e8a020), a links with green (#27ae60).`,steps:[{explain:`Style the body element.`,code:`body {
  background-color: #0d1b2a;
  color: #ffffff;
  font-family: Arial, sans-serif;
}`},{explain:`Style h1 and a tags.`,code:`h1 { color: #e8a020; }
a  { color: #27ae60; }`}],answer:`Dark page with gold headings and green links.`,answerCode:`<style>
body{background-color:#0d1b2a;color:#ffffff;font-family:Arial,sans-serif;}
h1{color:#e8a020;}
a{color:#27ae60;}
</style>`,insight:`For a real multi-page site, move CSS to a separate style.css file and link it: <link rel='stylesheet' href='style.css'>. One file controls the look of all pages.`}},{id:`h12`,title:`CSS Colors, Fonts & Text`,form:3,lesson:`CSS gives you complete control over text appearance and colours throughout your page. Good typography and colour choices transform a plain page into a professional, readable experience.

COLOUR in CSS — four ways to specify colour:

Named colours include red, blue, green, white, black, navy, crimson, and gold.

Hex codes use a six-digit code with red, green, blue values in hexadecimal:
#000000 is black, #ffffff is white. Short form uses three digits: #f00 is pure red.

RGB function: rgb(red, green, blue) where each value is 0 to 255.
RGBA adds alpha for opacity: rgba(0, 0, 0, 0.5) is 50% transparent black.

HSL: hsl(hue, saturation%, lightness%) — often more intuitive for designers.

TEXT PROPERTIES:
font-family always lists fallback fonts. If the first font is not installed, the browser tries the next, then the generic family (sans-serif, serif, monospace).

font-size uses these common units:
px is fixed pixels (good for beginners).
em is relative to parent element's font size.
rem is relative to the root html font size — most consistent for responsive design.

font-weight: bold or 700 for bold text, normal or 400 for regular weight.

text-align: left, right, center, or justify.
text-decoration: none, underline, or line-through.
text-transform: uppercase, lowercase, or capitalize.
line-height: 1.6 sets space between lines — unitless values are recommended.
letter-spacing: 2px sets space between individual characters.

Google Fonts provides free web fonts you can import with a link element, then reference by name in your CSS.`,code:`<!DOCTYPE html>
<html>
<head>
<style>
  h1 {
    color: #e8a020;
    font-family: Georgia, serif;
    font-size: 36px;
    text-align: center;
    letter-spacing: 2px;
  }
  .intro {
    font-size: 18px;
    line-height: 1.9;
    color: #cbd5e1;
    font-style: italic;
  }
  .highlight {
    color: #27ae60;
    font-weight: 900;
    text-decoration: underline;
  }
  a { color: #3b82f6; text-decoration: none; }
  a:hover { text-decoration: underline; }
</style>
</head>
<body style="background:#0d1b2a; padding:20px;">
  <h1>Zambia</h1>
  <p class="intro">
    A country of <span class="highlight">10 provinces</span>,
    extraordinary wildlife, and the mighty
    <span class="highlight">Victoria Falls</span>.
  </p>
  <p><a href="#">Learn more about Zambia</a></p>
</body></html>`,explanation:`letter-spacing adds space between characters. line-height controls the gap between lines. text-decoration:none removes the default underline from links. :hover applies styles on mouseover.`,question:{text:`Which CSS property changes text colour?`,options:[`background-color`,`font-color`,`text-color`,`color`],answer:3,hint:`The property is simply 'color'. 'font-color' and 'text-color' do not exist.`},q2:{text:`What does font-weight: 900 do?`,options:[`Sets font size to 900px`,`Makes text very bold`,`Sets font to 900% of normal`,`Adds 900 letter-spacing`],answer:1,hint:`font-weight accepts 100-900. 900 is the heaviest weight available.`},q3:{text:`Which CSS removes the underline from links?`,options:[`font-decoration: none`,`underline: false`,`text-decoration: none`,`link-style: plain`],answer:2,hint:`text-decoration:none removes all decorations. Commonly used on <a> tags.`},worked:{scenario:`A student is styling the header of a school website.`,problem:`Style h1 with Zambia green (#27ae60), bold, 32px, centred. Style .tagline with italic, grey (#94a3b8), 15px, 1.6 line-height.`,steps:[{explain:`Write the h1 rule.`,code:`h1 {
  color: #27ae60;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
}`},{explain:`Write the .tagline rule.`,code:`.tagline {
  font-style: italic;
  color: #94a3b8;
  font-size: 15px;
  line-height: 1.6;
}`}],answer:`h1 styled in green, bold, large, centred. Tagline in italic light grey.`,answerCode:`<style>
h1{color:#27ae60;font-weight:bold;font-size:32px;text-align:center;}
.tagline{font-style:italic;color:#94a3b8;font-size:15px;line-height:1.6;}
</style>`,insight:`rem units (like 1.5rem) scale with the browser's base font size. Users who set larger browser fonts will see your text scale up — better accessibility.`}},{id:`h13`,title:`CSS Box Model`,form:4,lesson:`Every HTML element is a rectangular box. The CSS Box Model describes the four layers that make up this box — from innermost to outermost: content, padding, border, margin.

THE FOUR LAYERS:

CONTENT is the actual text, image, or child elements. Dimensions set by width and height.

PADDING is transparent space INSIDE the border, between content and border.
padding: 20px applies the same on all four sides.
padding: 10px 20px applies 10px to top and bottom, 20px to left and right.
padding: 5px 10px 15px 20px applies top, right, bottom, left in clockwise order.

BORDER is the visible outline around padding and content.
border: 2px solid #333 sets width, style, and colour.
border-radius: 10px rounds the corners. 50% makes a circle.

MARGIN is transparent space OUTSIDE the border, between this element and others.
margin: auto centres a block element horizontally when width is set.
margin: 0 auto applies no top and bottom margin and centres left and right — a very common technique.

Total element width = content width + left padding + right padding + left border + right border.

box-sizing: border-box changes the calculation so padding and border are INCLUDED in the width, not added to it. This is almost always what you want:
* { box-sizing: border-box; }

Understanding why an element is the wrong size or in the wrong position almost always comes back to the box model. When debugging layout, inspect margin, padding, and border first.`,code:`<!DOCTYPE html>
<html>
<head>
<style>
  .card {
    width: 280px;
    padding: 20px;
    border: 2px solid #e8a020;
    border-radius: 12px;
    margin: 16px auto;
    background-color: #1e293b;
    color: #e2e8f0;
  }
  .card h2 { color: #e8a020; margin: 0 0 8px 0; }
  .card p  { margin: 0; font-size: 14px; line-height: 1.7; }
</style>
</head>
<body style="background:#0d1b2a;">
  <div class="card">
    <h2>Pascal</h2>
    <p>A structured language ideal for learning programming fundamentals.</p>
  </div>
  <div class="card">
    <h2>Python</h2>
    <p>Clean syntax and powerful libraries for data and web development.</p>
  </div>
</body></html>`,explanation:`padding pushes content away from the border. margin pushes the element away from its neighbours. border-radius rounds the corners. margin: 16px auto centres the card horizontally.`,ecz:`The CSS box model is Form 4 core. Know: content → padding → border → margin from inside to outside. Expect to explain what each layer does and use margin:auto to centre an element.`,question:{text:`In the CSS box model, what is padding?`,options:[`Space outside the border`,`The border width`,`Space between content and border`,`The background colour area`],answer:2,hint:`Padding is the inner space — between the content and the border.`},q2:{text:`What is the difference between margin and padding?`,options:[`Identical`,`Margin is space outside; padding is space inside (between content and border)`,`Padding is outside; margin is inside`,`Margin adds a border; padding adds background colour`],answer:1,hint:`Padding = inside spacing. Margin = outside spacing between this element and its neighbours.`},q3:{text:`What does margin: 0 auto do on a block element with fixed width?`,options:[`Removes all margins`,`Sets top/bottom to 0 and horizontally centres the element`,`Sets left and right to auto px`,`Makes the element float`],answer:1,hint:`auto on left and right margins splits the remaining horizontal space equally — centring the element.`},worked:{scenario:`A student is styling a profile card for a school register.`,problem:`Create .profile-card with: white background, 16px padding, 1px solid grey border with 8px radius, 20px top/bottom margin, max-width 300px.`,steps:[{explain:`Define box model properties.`,code:`.profile-card {
  background: #ffffff;
  padding: 16px;
  border: 1px solid #94a3b8;
  border-radius: 8px;`},{explain:`Add spacing and sizing.`,code:`  margin: 20px auto;
  max-width: 300px;
}`}],answer:`A clean white card, 300px wide, centred, with rounded corners and even spacing.`,answerCode:`.profile-card{background:#ffffff;padding:16px;border:1px solid #94a3b8;border-radius:8px;margin:20px auto;max-width:300px;}`,insight:`Add box-sizing:border-box to prevent padding from making elements wider than their set width. Best practice: * { box-sizing: border-box; } at the top of all CSS.`}},{id:`h14`,title:`CSS Flexbox`,form:4,lesson:`Flexbox (Flexible Box Layout) is a CSS layout system that arranges elements in a row or column with automatic spacing and alignment. It solves layout problems that were previously very difficult with CSS.

To activate Flexbox, add display: flex to the CONTAINER:
.container { display: flex; }
The direct children become FLEX ITEMS and immediately arrange in a row.

Key container properties:

flex-direction controls which direction items flow:
row (default) goes left to right.
row-reverse goes right to left.
column goes top to bottom.
column-reverse goes bottom to top.

justify-content controls alignment along the MAIN axis (horizontal for row):
flex-start puts items at the start (default).
flex-end puts items at the end.
center centres the items.
space-between spreads items out with no space at edges.
space-around puts equal space around each item.
space-evenly puts equal space between all items and edges.

align-items controls alignment along the CROSS axis (vertical for row):
flex-start puts items at the top.
flex-end puts items at the bottom.
center centres items vertically — the most useful option.
stretch (default) makes items stretch to fill container height.

gap: 16px sets space between items without using margins.

flex-wrap: wrap allows items to wrap to the next line when they do not fit.

flex: 1 on an item makes it grow to fill available space. All items with flex: 1 share the space equally.

Centring with Flexbox:
.container { display: flex; justify-content: center; align-items: center; height: 100vh; }
This centres content both horizontally and vertically.`,code:`<!DOCTYPE html>
<html>
<head>
<style>
  body { background:#0d1b2a; font-family:sans-serif; padding:20px; }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1e293b;
    padding: 12px 20px;
    border-radius: 10px;
    margin-bottom: 24px;
  }
  nav h2 { color:#e8a020; margin:0; }
  nav a  { color:#94a3b8; text-decoration:none; margin-left:16px; }
  .cards {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
  .card {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 12px;
    padding: 20px;
    flex: 1;
    min-width: 150px;
    color: #e2e8f0;
    text-align: center;
  }
  .card span { font-size: 36px; display:block; margin-bottom:8px; }
</style>
</head>
<body>
  <nav>
    <h2>ZamCode</h2>
    <div>
      <a href="#">Lessons</a>
      <a href="#">Search</a>
      <a href="#">About</a>
    </div>
  </nav>
  <div class="cards">
    <div class="card"><span>🟡</span>Pascal</div>
    <div class="card"><span>🔵</span>C++</div>
    <div class="card"><span>🟢</span>Python</div>
    <div class="card"><span>🗄️</span>SQL</div>
  </div>
</body></html>`,explanation:`display:flex on nav makes children line up in a row. justify-content:space-between pushes children to opposite ends. flex:1 on cards makes each card grow equally. flex-wrap:wrap allows cards to wrap on small screens.`,ecz:`Flexbox is the most modern layout topic tested. Know: display:flex, justify-content (space-between, center), align-items, and gap. Expect to arrange navigation links or cards in a row.`,question:{text:`Which CSS property activates flexbox on a container?`,options:[`layout: flex`,`flex: enable`,`display: flex`,`position: flex`],answer:2,hint:`display:flex turns the element into a flex container.`},q2:{text:`What does justify-content: space-between do?`,options:[`Centres all items`,`Puts items at the end`,`First item at start, last at end, equal space between`,`Makes items equal width`],answer:2,hint:`space-between: first item flush left, last flush right, equal gaps between the rest.`},q3:{text:`A flex container has flex-wrap: wrap. Items cannot fit on one line. What happens?`,options:[`Items overflow`,`Items shrink to fit`,`Items wrap to the next line`,`Items are removed`],answer:2,hint:`flex-wrap:wrap allows flex items to flow onto multiple lines.`},worked:{scenario:`A student is building a footer with three equal columns.`,problem:`Use flexbox to arrange three divs side by side with equal spacing and 20px gap between them.`,steps:[{explain:`Create the footer container.`,code:`.footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 24px;
  background: #1e293b;
}`},{explain:`Create equal-width columns.`,code:`.footer-col {
  flex: 1;
  color: #94a3b8;
}
.footer-col h3 { color: #e8a020; }`}],answer:`Three equal columns side by side with 20px gaps.`,answerCode:`<style>.footer{display:flex;justify-content:space-between;gap:20px;padding:24px;background:#1e293b;}.footer-col{flex:1;color:#94a3b8;}.footer-col h3{color:#e8a020;}</style><div class="footer"><div class="footer-col"><h3>ZamCode</h3><p>Lusaka</p></div><div class="footer-col"><h3>Links</h3><p>Lessons</p></div><div class="footer-col"><h3>Contact</h3><p>info@zamcode.zm</p></div></div>`,insight:`flex:1 on each column means they each take an equal share of available width automatically. Add a 4th column and it adjusts to 25% automatically.`}},{id:`h15`,title:`Build a Zambian School Website`,form:4,lesson:`This final lesson brings together everything you have learned — HTML structure, semantic elements, tables, forms, links, images, CSS colours, typography, the box model, and Flexbox — to build a complete school website.

Planning before coding — every web project starts with a plan:
1. What pages are needed? (Home, About, Timetable, Contact)
2. What content goes on each page?
3. What is the colour scheme and font?
4. How will navigation work?

A Zambian school website typically needs:
Header with school name, logo, and navigation.
Hero section with a welcome message and school motto.
About section with the school's history and vision.
Features section highlighting key programmes.
Contact form for parents and students.
Footer with address, phone, and social media links.

CSS Custom Properties (variables) — define once, use everywhere:
:root { --primary: #1e3a5f; --accent: #e8a020; }
h1 { color: var(--primary); }
Change one variable and it updates everywhere instantly.

Responsive design with media queries:
@media (max-width: 600px) {
  nav { flex-direction: column; }
}
On screens narrower than 600px (mobile phones), the layout adjusts automatically.

Debugging CSS:
1. Open browser developer tools with F12 or right-click and Inspect.
2. Click an element to see its computed styles and box model.
3. Tick and untick properties to test changes without editing your file.

Web development is a skill you can start practising immediately — a text editor and a browser are all you need.`,code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Munali Academy — Lusaka</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; color: #1e293b; }
    nav {
      background: #1e3a5f;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 24px;
    }
    nav .logo { color: #f59e0b; font-size: 20px; font-weight: 800; }
    nav a { color: #cbd5e1; text-decoration: none; margin-left: 20px; font-size: 14px; }
    nav a:hover { color: #ffffff; }
    .hero {
      background: linear-gradient(135deg, #1e3a5f, #27ae60);
      color: white;
      text-align: center;
      padding: 60px 20px;
    }
    .hero h1 { font-size: 36px; margin-bottom: 12px; }
    .hero p  { font-size: 18px; opacity: 0.9; margin-bottom: 24px; }
    .hero a  { background:#f59e0b; color:#000; padding:12px 28px; border-radius:8px; text-decoration:none; font-weight:700; }
    .features { display:flex; gap:20px; flex-wrap:wrap; padding:40px 24px; max-width:960px; margin:0 auto; }
    .feature-card { flex:1; min-width:200px; background:white; border:1px solid #e2e8f0; border-radius:12px; padding:24px; text-align:center; }
    .feature-card .icon { font-size:36px; margin-bottom:12px; }
    .feature-card h3 { color:#1e3a5f; margin-bottom:8px; }
    .feature-card p  { color:#64748b; font-size:14px; }
    footer { background:#1e293b; color:#94a3b8; text-align:center; padding:20px; font-size:13px; }
  </style>
</head>
<body>
  <nav>
    <div class="logo">Munali Academy</div>
    <div>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Admissions</a>
      <a href="#">Contact</a>
    </div>
  </nav>
  <section class="hero">
    <h1>Excellence in Education</h1>
    <p>Serving the students of Lusaka since 1956</p>
    <a href="#">Apply for Admission</a>
  </section>
  <div class="features">
    <div class="feature-card">
      <div class="icon">📚</div>
      <h3>Strong Curriculum</h3>
      <p>ECZ-aligned syllabi from Form 1 through Form 4.</p>
    </div>
    <div class="feature-card">
      <div class="icon">💻</div>
      <h3>ICT Lab</h3>
      <p>Modern computer lab with internet access for all students.</p>
    </div>
    <div class="feature-card">
      <div class="icon">🏆</div>
      <h3>Top Results</h3>
      <p>94% Grade 12 pass rate in the 2023 ECZ examinations.</p>
    </div>
  </div>
  <footer>
    <p>&copy; 2024 Munali Academy, Lusaka, Zambia. All rights reserved.</p>
  </footer>
</body></html>`,explanation:`This page uses every concept covered: semantic HTML, flexbox layout, CSS box model, colour gradients, hover effects, and HTML entities. It is responsive thanks to flex-wrap.`,question:{text:`Which CSS rule makes all elements include padding and border in their width?`,options:[`display: box`,`box-sizing: border-box`,`width: include-all`,`padding: box`],answer:1,hint:`box-sizing:border-box prevents width from growing when padding or border is added.`},q2:{text:`What does the viewport meta tag do?`,options:[`Sets page background`,`Tells mobile browsers the page width matches device width`,`Links a CSS file`,`Sets page language`],answer:1,hint:`It prevents mobile browsers from zooming out to show a desktop-sized page.`},q3:{text:`What does linear-gradient(135deg, #1e3a5f, #27ae60) create?`,options:[`A solid colour`,`A diagonal gradient from dark blue to green`,`A horizontal gradient`,`An image background`],answer:1,hint:`linear-gradient(angle, colour1, colour2) creates a smooth colour transition. 135deg = diagonal.`},worked:{scenario:`The school website needs a contact form section between features and footer.`,problem:`Add a <section> with a contact form containing name, email, message textarea, and a submit button styled to match the page.`,steps:[{explain:`Create the section and heading.`,code:`<section style="padding:40px 24px;max-width:600px;margin:0 auto;">
  <h2 style="color:#1e3a5f;margin-bottom:20px;">Contact Us</h2>`},{explain:`Add name and email inputs.`,code:`  <form>
    <input type="text" placeholder="Your Name" style="width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;">
    <input type="email" placeholder="Email Address" style="width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;">`},{explain:`Add textarea and submit button.`,code:`    <textarea placeholder="Your message" rows="4" style="width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;"></textarea>
    <button style="background:#1e3a5f;color:white;padding:12px 24px;border:none;border-radius:8px;">Send Message</button>
  </form>
</section>`}],answer:`A styled contact form matching the page's design.`,answerCode:`<section style="padding:40px 24px;max-width:600px;margin:0 auto;"><h2 style="color:#1e3a5f;margin-bottom:20px;">Contact Us</h2><form><input type="text" placeholder="Name" style="width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;"><input type="email" placeholder="Email" style="width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;"><textarea rows="4" style="width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;"></textarea><button style="background:#1e3a5f;color:white;padding:12px 24px;border:none;border-radius:8px;">Send Message</button></form></section>`,insight:`When adding a new section, match the existing padding and border-radius conventions. Consistency is what makes a site look professionally designed.`}}]}},y=[{id:`bh1`,lang:`Pascal`,difficulty:`Easy`,title:`Missing END.`,code:`PROGRAM Hello;
BEGIN
  WriteLn('Welcome to Lusaka');
  WriteLn('Zambia rocks!');
END`,bugLine:5,hint:`Pascal programs must end with END. (with a full stop, not a semicolon)`,explanation:`Line 5 should be END. — a full stop closes the whole program. END; would only close an inner block.`},{id:`bh2`,lang:`Pascal`,difficulty:`Easy`,title:`Wrong assignment operator`,code:`PROGRAM Calc;
VAR x : Integer;
BEGIN
  x = 10;
  WriteLn(x);
END.`,bugLine:4,hint:`Pascal uses := for assignment, not =`,explanation:`Line 4 should be: x := 10; — Pascal uses := (colon-equals) for assignment. = is only used for comparison.`},{id:`bh3`,lang:`Pascal`,difficulty:`Medium`,title:`Semicolon before ELSE`,code:`PROGRAM Grade;
VAR m : Integer;
BEGIN
  m := 72;
  IF m >= 50 THEN
    WriteLn('Pass');
  ELSE
    WriteLn('Fail');
END.`,bugLine:6,hint:`There must be NO semicolon on the line before ELSE`,explanation:`Line 6: WriteLn('Pass') must not have a semicolon before ELSE. The semicolon ends the IF statement early, making ELSE an orphan.`},{id:`bh4`,lang:`C++`,difficulty:`Easy`,title:`Missing return statement`,code:`#include <iostream>
using namespace std;
int main() {
    cout << "Ndola Mining" << endl;
    cout << "Copperbelt Province" << endl;
}`,bugLine:6,hint:`int main() must return an integer value`,explanation:`Line 6: The closing brace should be preceded by return 0; — int main() is declared to return int, so it must return a value.`},{id:`bh5`,lang:`C++`,difficulty:`Easy`,title:`Wrong comparison operator`,code:`#include <iostream>
using namespace std;
int main() {
    int score = 75;
    if (score = 50)
        cout << "Pass" << endl;
    return 0;
}`,bugLine:5,hint:`= assigns a value. == compares two values`,explanation:`Line 5: if (score = 50) assigns 50 to score and is always true. It should be if (score == 50) to compare.`},{id:`bh6`,lang:`C++`,difficulty:`Medium`,title:`Missing break in switch`,code:`#include <iostream>
using namespace std;
int main() {
    int day = 1;
    switch(day) {
        case 1: cout << "Monday"; 
        case 2: cout << "Tuesday";
    }
    return 0;
}`,bugLine:6,hint:`Without break; execution falls through to the next case`,explanation:`Line 6 needs break; after cout << 'Monday'. Without it, both 'Monday' and 'Tuesday' print — this is called fall-through.`},{id:`bh7`,lang:`Python`,difficulty:`Easy`,title:`Missing colon on if`,code:`name = input("Enter name: ")
score = int(input("Enter score: "))
if score >= 50
    print("Pass")
else:
    print("Fail")`,bugLine:3,hint:`Python if statements must end with a colon`,explanation:`Line 3: if score >= 50 must end with a colon — if score >= 50: — Python uses colons instead of brackets to open blocks.`},{id:`bh8`,lang:`Python`,difficulty:`Easy`,title:`Wrong indentation`,code:`for i in range(5):
print(i)
print("Done")`,bugLine:2,hint:`Code inside a for loop must be indented`,explanation:`Line 2: print(i) must be indented with 4 spaces to be inside the loop. Without indentation Python sees it as outside the loop.`},{id:`bh9`,lang:`Python`,difficulty:`Medium`,title:`String not converted to int`,code:`name = input("Name: ")
age = input("Age: ")
next_year = age + 1
print(name, "will be", next_year)`,bugLine:3,hint:`input() always returns a string — you cannot add 1 to a string`,explanation:`Line 3: age is a string from input(). It must be converted first: age = int(input('Age: ')) — then age + 1 works correctly.`},{id:`bh10`,lang:`SQL`,difficulty:`Easy`,title:`Missing WHERE on DELETE`,code:`-- Remove student Bupe Zulu
DELETE FROM students
name = 'Bupe Zulu';`,bugLine:3,hint:`DELETE needs a WHERE clause to filter which rows to delete`,explanation:`Line 3 should be: WHERE name = 'Bupe Zulu'; — without WHERE, DELETE FROM students removes EVERY student in the table.`},{id:`bh11`,lang:`SQL`,difficulty:`Medium`,title:`NULL comparison error`,code:`SELECT name FROM students
WHERE province = NULL;`,bugLine:2,hint:`You cannot use = to check for NULL in SQL`,explanation:`Line 2: WHERE province = NULL never matches anything. NULL must be checked with IS NULL: WHERE province IS NULL;`},{id:`bh12`,lang:`HTML`,difficulty:`Easy`,title:`Missing alt attribute`,code:`<!DOCTYPE html>
<html><body>
  <h1>Zambia Wildlife</h1>
  <img src="elephant.jpg" width="300">
</body></html>`,bugLine:4,hint:`Every <img> tag must have an alt attribute for accessibility`,explanation:`Line 4 is missing alt='description'. Screen readers and broken image fallbacks depend on alt text. Add: alt='An elephant in Kafue National Park'`},{id:`bh13`,lang:`HTML`,difficulty:`Easy`,title:`Unclosed tag`,code:`<!DOCTYPE html>
<html><body>
  <p>Welcome to <strong>ZamCode Academy
  <p>Learn to code today!</p>
</body></html>`,bugLine:3,hint:`Every opening tag needs a matching closing tag`,explanation:`Line 3: <strong> is opened but never closed. It should be: <strong>ZamCode Academy</strong> — the unclosed tag makes all following text bold.`},{id:`bh14`,lang:`C++`,difficulty:`Hard`,title:`Off-by-one in loop bound`,code:`#include <iostream>
using namespace std;
int main() {
    int marks[5] = {78,91,55,63,88};
    int total = 0;
    for(int i=0; i<=5; i++)
        total += marks[i];
    cout << total << endl;
    return 0;
}`,bugLine:6,hint:`Array of size 5 has valid indices 0 to 4 only`,explanation:`Line 6: i<=5 accesses marks[5] which is out of bounds (valid: 0–4). Change to i<5. This reads one past the array — undefined behaviour that can corrupt memory.`},{id:`bh15`,lang:`Python`,difficulty:`Hard`,title:`Mutable default argument`,code:`def add_score(name, scores=[]):
    scores.append(name)
    return scores

print(add_score("Chanda"))
print(add_score("Mwamba"))`,bugLine:1,hint:`Default mutable arguments are shared across ALL calls — not reset each time`,explanation:`Line 1: scores=[] is created once when the function is defined and reused on every call. So the second call sees ['Chanda','Mwamba'], not just ['Mwamba']. Fix: use scores=None and create a fresh list inside.`},{id:`bh16`,lang:`Pascal`,difficulty:`Hard`,title:`Function result never assigned`,code:`PROGRAM Tax;
FUNCTION CalcTax(amount : Real) : Real;
BEGIN
  IF amount > 5000 THEN
    Result := (amount - 5000) * 0.25;
END;
BEGIN
  WriteLn(CalcTax(8000):0:2);
END.`,bugLine:4,hint:`A Pascal FUNCTION must assign to the function name in EVERY path — including when the IF is false`,explanation:`Line 4: if amount <= 5000 the IF is false and CalcTax is never assigned — it returns garbage. Add an ELSE clause: ELSE CalcTax := 0; to handle the case where no tax applies.`},{id:`bh17`,lang:`C++`,difficulty:`Hard`,title:`Integer division loses decimal`,code:`#include <iostream>
using namespace std;
int main() {
    int total = 361;
    int count = 5;
    double average = total / count;
    cout << average << endl;
    return 0;
}`,bugLine:6,hint:`When both operands are int, C++ performs integer division before assigning to double`,explanation:`Line 6: total/count is int/int = 72 (truncated), then 72 is stored in average. Fix: cast one operand: double average = (double)total / count; or use 5.0 instead of 5.`},{id:`bh18`,lang:`Python`,difficulty:`Hard`,title:`Loop modifies list being iterated`,code:`scores = [45, 78, 32, 91, 55]
for score in scores:
    if score < 50:
        scores.remove(score)
print(scores)`,bugLine:3,hint:`Removing items from a list while iterating over it skips elements`,explanation:`Line 3: removing from scores while the for loop iterates it causes elements to be skipped. When 45 is removed, 78 shifts to index 0 — 32 is never checked. Fix: iterate over a copy: for score in scores[:]`}],b=[{id:`mo1`,lang:`Pascal`,difficulty:`Easy`,code:`PROGRAM A;
BEGIN
  WriteLn('Zambia');
  WriteLn('Rocks');
END.`,options:[`Zambia
Rocks`,`ZAMBIA
ROCKS`,`Zambia Rocks`,`Rocks
Zambia`],answer:0,explanation:`WriteLn prints each string on its own line. Output is exactly the two strings in order.`},{id:`mo2`,lang:`Python`,difficulty:`Easy`,code:`x = 10
y = 3
print(x + y)
print(x - y)
print(x * y)`,options:[`13
7
30`,`7
13
30`,`13
7
13`,`30
7
13`],answer:0,explanation:`10+3=13, 10-3=7, 10*3=30. Each print() outputs on its own line.`},{id:`mo3`,lang:`C++`,difficulty:`Easy`,code:`#include <iostream>
using namespace std;
int main() {
    int a = 8, b = 3;
    cout << a / b << endl;
    cout << a % b << endl;
    return 0;
}`,options:[`2
3`,`2
2`,`3
2`,`2.67
2`],answer:1,explanation:`8/3 with integers = 2 (truncated, not 2.67). 8%3 = remainder = 2. Both print on separate lines.`},{id:`mo4`,lang:`SQL`,difficulty:`Easy`,code:`SELECT COUNT(*) FROM students
WHERE form = 3;

-- Table:
-- Chanda form=3
-- Mwamba form=2
-- Bupe   form=3
-- Ngoza  form=1
-- Monde  form=3`,options:[`5`,`2`,`1`,`3`],answer:3,explanation:`COUNT(*) counts rows WHERE form=3. Chanda, Bupe, and Monde are Form 3 — that is 3 rows.`},{id:`mo5`,lang:`Pascal`,difficulty:`Easy`,code:`PROGRAM B;
VAR i : Integer;
BEGIN
  FOR i := 3 DOWNTO 1 DO
    WriteLn(i);
END.`,options:[`1
2
3`,`3
2
1`,`3 2 1`,`1 2 3`],answer:1,explanation:`DOWNTO counts backwards from 3 to 1. WriteLn prints each on its own line: 3, then 2, then 1.`},{id:`mo6`,lang:`Python`,difficulty:`Medium`,code:`marks = [60, 45, 80, 72, 55]
passing = [m for m in marks if m >= 60]
print(len(passing))
print(sum(passing))`,options:[`3
212`,`5
312`,`3
192`,`2
140`],answer:0,explanation:`Passing marks (>=60): 60, 80, 72 — that is 3 values. sum = 60+80+72 = 212.`},{id:`mo7`,lang:`C++`,difficulty:`Medium`,code:`#include <iostream>
using namespace std;
int main() {
    int n = 1;
    while (n < 50) {
        n = n * 3;
    }
    cout << n << endl;
    return 0;
}`,options:[`27`,`54`,`81`,`48`],answer:2,explanation:`n: 1→3→9→27→81. At 81, condition 81<50 is FALSE so loop exits. Prints 81.`},{id:`mo8`,lang:`Pascal`,difficulty:`Medium`,code:`PROGRAM C;
VAR x, y : Integer;
BEGIN
  x := 4;
  y := x * x;
  x := y - x;
  WriteLn(x);
  WriteLn(y);
END.`,options:[`12
16`,`16
12`,`4
16`,`12
4`],answer:0,explanation:`x=4, y=4*4=16, x=16-4=12. WriteLn(x) prints 12 first, then WriteLn(y) prints 16.`},{id:`mo9`,lang:`SQL`,difficulty:`Medium`,code:`SELECT province, COUNT(*) AS total
FROM students
GROUP BY province
ORDER BY total DESC
LIMIT 1;

-- Data:
-- Lusaka: 320 students
-- Copperbelt: 280 students
-- Southern: 150 students`,options:[`Copperbelt 280`,`Southern 150`,`Lusaka 320`,`Lusaka 150`],answer:2,explanation:`GROUP BY counts per province. ORDER BY total DESC puts highest first. LIMIT 1 returns only Lusaka with 320 — the largest.`},{id:`mo10`,lang:`Python`,difficulty:`Medium`,code:`def greet(name, times=2):
    return (name + '! ') * times

print(greet('Chanda'))
print(greet('Bupe', 1))`,options:[`Chanda! Chanda! 
Bupe! `,`Chanda!
Bupe!`,`Chanda! 
Bupe! `,`Chanda!Chanda!
Bupe!`],answer:0,explanation:`greet('Chanda') uses default times=2: 'Chanda! ' repeated twice = 'Chanda! Chanda! '. greet('Bupe',1) = 'Bupe! ' once.`},{id:`mo11`,lang:`Python`,difficulty:`Hard`,code:`a = [1, 2, 3]
b = a
b.append(4)
print(a)
print(b)
print(a is b)`,options:[`[1,2,3]
[1,2,3,4]
False`,`[1,2,3,4]
[1,2,3,4]
True`,`[1,2,3]
[1,2,3,4]
True`,`[1,2,3,4]
[1,2,3]
False`],answer:1,explanation:`b = a makes b point to the SAME list, not a copy. Appending to b also changes a. Both print [1,2,3,4]. a is b is True because they are the identical object.`},{id:`mo12`,lang:`C++`,difficulty:`Hard`,code:`#include <iostream>
using namespace std;
int main() {
    int x = 5;
    cout << x++ << endl;
    cout << ++x << endl;
    cout << x   << endl;
    return 0;
}`,options:[`5
7
7`,`6
7
7`,`5
6
6`,`6
6
6`],answer:0,explanation:`x++ prints x THEN increments: prints 5, x becomes 6. ++x increments THEN prints: x becomes 7, prints 7. Final cout prints current x = 7.`},{id:`mo13`,lang:`Pascal`,difficulty:`Hard`,code:`PROGRAM D;
VAR i, total : Integer;
BEGIN
  total := 0;
  FOR i := 1 TO 5 DO
  BEGIN
    IF i MOD 2 = 0 THEN
      total := total + i;
  END;
  WriteLn(total);
END.`,options:[`15`,`9`,`6`,`10`],answer:2,explanation:`Loop i=1 to 5. MOD 2 = 0 means even. Even numbers: 2 and 4. total = 2+4 = 6. Odd numbers (1,3,5) are skipped.`},{id:`mo14`,lang:`Python`,difficulty:`Hard`,code:`def mystery(n):
    if n <= 0:
        return 0
    return n + mystery(n - 2)

print(mystery(6))`,options:[`12`,`21`,`6`,`9`],answer:0,explanation:`mystery(6) = 6+mystery(4) = 6+4+mystery(2) = 6+4+2+mystery(0) = 6+4+2+0 = 12. Sums even numbers from 6 down to 0.`},{id:`mo15`,lang:`C++`,difficulty:`Hard`,code:`#include <iostream>
using namespace std;
int main() {
    int arr[] = {3, 1, 4, 1, 5};
    int n = 5, swapped = 1;
    while (swapped) {
        swapped = 0;
        for (int i=0; i<n-1; i++)
            if (arr[i] > arr[i+1]) {
                int t=arr[i]; arr[i]=arr[i+1]; arr[i+1]=t;
                swapped = 1;
            }
    }
    cout << arr[0] << " " << arr[4] << endl;
    return 0;
}`,options:[`3 5`,`1 5`,`5 1`,`1 4`],answer:1,explanation:`Bubble sort runs on {3,1,4,1,5} giving sorted array {1,1,3,4,5}. arr[0]=1 (smallest), arr[4]=5 (largest). Output: 1 5.`}],x=Object.entries(v).flatMap(([e,t])=>t.topics.map(n=>({...n,language:e,langColor:t.color,langIcon:t.icon})));function S(){let e=(0,h.c)(395),[t,n]=(0,l.useState)(`home`),[r,i]=(0,l.useState)(null),[a,o]=(0,l.useState)(null),[s,c]=(0,l.useState)(null),[u,d]=(0,l.useState)(!1),[f,p]=(0,l.useState)(0),[m,S]=(0,l.useState)(0),[de,fe]=(0,l.useState)(!1),pe;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(pe={},e[0]=pe):pe=e[0];let[F,me]=(0,l.useState)(pe),he;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(he={},e[1]=he):he=e[1];let[ge,_e]=(0,l.useState)(he),[ve,ye]=(0,l.useState)(!1),[be,xe]=(0,l.useState)(`lesson`),[Se,Ce]=(0,l.useState)(0),[we,Te]=(0,l.useState)(!1),[Ee,De]=(0,l.useState)(``),[Oe,ke]=(0,l.useState)(typeof navigator<`u`?navigator.onLine:!0),[I,Ae]=(0,l.useState)(!0),[je,Me]=(0,l.useState)(1),[Ne,Pe]=(0,l.useState)(null),[Fe,Ie]=(0,l.useState)(null),Le;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(Le={bugHunt:{},matchOutput:{}},e[2]=Le):Le=e[2];let[L,Re]=(0,l.useState)(Le),[ze,Be]=(0,l.useState)(null),[Ve,He]=(0,l.useState)(null),[Ue,We]=(0,l.useState)(null),[Ge,Ke]=(0,l.useState)(!1),[qe,Je]=(0,l.useState)(null),[Ye,Xe]=(0,l.useState)(null),[Ze,Qe]=(0,l.useState)(null),[$e,et]=(0,l.useState)(!1),[tt,nt]=(0,l.useState)(!1),rt;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(rt=[],e[3]=rt):rt=e[3];let[it,at]=(0,l.useState)(rt),[ot,st]=(0,l.useState)(0),[R,ct]=(0,l.useState)(null),[lt,ut]=(0,l.useState)(!1),[,dt]=(0,l.useState)(0),[ft,pt]=(0,l.useState)(!1),[mt,ht]=(0,l.useState)(15),gt;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(gt=[],e[4]=gt):gt=e[4];let[_t,vt]=(0,l.useState)(gt),[z,yt]=(0,l.useState)(0),bt;e[5]!==Fe||e[6]!==ft||e[7]!==ot||e[8]!==it||e[9]!==lt||e[10]!==mt?(bt=()=>{if(Fe!==`speedquiz`||ft||lt||it.length===0)return;if(mt<=0){ut(!0),vt(e=>[...e,{question:it[ot],selected:null,correct:!1,timedOut:!0}]);return}let e=setTimeout(()=>ht(ue),1e3);return()=>clearTimeout(e)},e[5]=Fe,e[6]=ft,e[7]=ot,e[8]=it,e[9]=lt,e[10]=mt,e[11]=bt):bt=e[11];let xt;e[12]!==Fe||e[13]!==ft||e[14]!==ot||e[15]!==lt||e[16]!==mt?(xt=[Fe,ft,lt,mt,ot],e[12]=Fe,e[13]=ft,e[14]=ot,e[15]=lt,e[16]=mt,e[17]=xt):xt=e[17],(0,l.useEffect)(bt,xt);let St;e[18]===Symbol.for(`react.memo_cache_sentinel`)?(St=function(){let e=[];x.forEach(t=>{let n=[t.question];t.q2&&n.push(t.q2),t.q3&&n.push(t.q3),n.forEach(n=>e.push({...n,topicTitle:t.title,language:t.language,langColor:t.langColor}))}),at(e.sort(le).slice(0,10)),st(0),ct(null),ut(!1),dt(0),pt(!1),ht(15),vt([]),Ie(`speedquiz`)},e[18]=St):St=e[18];let Ct=St,wt;e[19]!==ot||e[20]!==it||e[21]!==R||e[22]!==lt?(wt=function(){if(lt)return;let e=it[ot],t=R===e.answer;ut(!0),t&&dt(P),vt(n=>[...n,{question:e,selected:R,correct:t,timedOut:!1}])},e[19]=ot,e[20]=it,e[21]=R,e[22]=lt,e[23]=wt):wt=e[23];let Tt=wt,Et;e[24]!==ot||e[25]!==it.length||e[26]!==_t?(Et=function(){let e=_t.filter(N).length;ot>=it.length-1?(pt(!0),yt(t=>Math.max(t,e))):(st(ce),ct(null),ut(!1),ht(15))},e[24]=ot,e[25]=it.length,e[26]=_t,e[27]=Et):Et=e[27];let Dt=Et,Ot;e[28]===je?Ot=e[29]:(Ot=e=>Math.round(e*je),e[28]=je,e[29]=Ot);let kt=Ot,B=I?{pageBg:`linear-gradient(135deg,#0d1b2a 0%,#1b2838 50%,#0d2137 100%)`,screenBg:`#0d1b2a`,cardBg:`rgba(255,255,255,0.04)`,cardBg2:`#1e293b`,inputBg:`#1e293b`,codeBg:`#0a0f16`,text:`#f1f5f9`,textMuted:`#94a3b8`,textFaint:`#475569`,textCode:`#e2e8f0`,border:`rgba(255,255,255,0.08)`,border2:`rgba(255,255,255,0.12)`,accent:`#e8a020`,toggleBg:`rgba(255,255,255,0.08)`,toggleIcon:`☀️`,toggleLabel:`Light mode`}:{pageBg:`linear-gradient(135deg,#e0f2fe 0%,#f0f9ff 50%,#dbeafe 100%)`,screenBg:`#f0f9ff`,cardBg:`rgba(30,58,138,0.05)`,cardBg2:`#ffffff`,inputBg:`#ffffff`,codeBg:`#1e3a5f`,text:`#0f172a`,textMuted:`#1e3a8a`,textFaint:`#3b82f6`,textCode:`#1e293b`,border:`rgba(30,58,138,0.15)`,border2:`rgba(30,58,138,0.25)`,accent:`#1e40af`,toggleBg:`rgba(30,58,138,0.1)`,toggleIcon:`🌙`,toggleLabel:`Dark mode`},At,jt;e[30]===Symbol.for(`react.memo_cache_sentinel`)?(At=()=>{let e=()=>ke(!0),t=()=>ke(!1);return window.addEventListener(`online`,e),window.addEventListener(`offline`,t),()=>{window.removeEventListener(`online`,e),window.removeEventListener(`offline`,t)}},jt=[],e[30]=At,e[31]=jt):(At=e[30],jt=e[31]),(0,l.useEffect)(At,jt);let Mt,Nt;e[32]===Symbol.for(`react.memo_cache_sentinel`)?(Mt=()=>{(async function(){try{let e=await Promise.race([window.storage.get(`zca_progress`),new Promise(se)]);if(e){let t=JSON.parse(e.value);t.completed&&me(t.completed),t.scores&&_e(t.scores),t.gameScores&&Re(t.gameScores),t.sqHighScore&&yt(t.sqHighScore),t.fontScale&&Me(t.fontScale),t.lastTopicId&&Pe(t.lastTopicId)}}catch{}Te(!0)})()},Nt=[],e[32]=Mt,e[33]=Nt):(Mt=e[32],Nt=e[33]),(0,l.useEffect)(Mt,Nt);let Pt,Ft;e[34]!==F||e[35]!==je||e[36]!==L||e[37]!==Ne||e[38]!==we||e[39]!==ge||e[40]!==z?(Pt=()=>{we&&(async function(){try{await Promise.race([window.storage.set(`zca_progress`,JSON.stringify({completed:F,scores:ge,gameScores:L,sqHighScore:z,fontScale:je,lastTopicId:Ne})),new Promise(oe)])}catch{}})()},Ft=[F,ge,we,L,z,je,Ne],e[34]=F,e[35]=je,e[36]=L,e[37]=Ne,e[38]=we,e[39]=ge,e[40]=z,e[41]=Pt,e[42]=Ft):(Pt=e[41],Ft=e[42]),(0,l.useEffect)(Pt,Ft);let[It,Lt]=(0,l.useState)(!1),Rt;e[43]!==F||e[44]!==ge?(Rt=async function(e){let t=v[e].topics.map(ae),n=Object.fromEntries(Object.entries(F).filter(e=>{let[n]=e;return!t.includes(n)})),r=Object.fromEntries(Object.entries(ge).filter(e=>{let[n]=e;return!t.includes(n)}));me(n),_e(r),Lt(!1)},e[43]=F,e[44]=ge,e[45]=Rt):Rt=e[45];let zt=Rt,V=r?v[r]:null,Bt=V?V.topics.map(e=>({...e,language:r,langColor:V.color,langIcon:V.icon})):[],Vt;e[46]===Symbol.for(`react.memo_cache_sentinel`)?(Vt=function(e){o(e),Pe(e.id),c(null),d(!1),p(0),S(0),fe(!1),ye(!1),Ce(0),xe(`lesson`),n(`lesson`)},e[46]=Vt):Vt=e[46];let Ht=Vt,Ut;e[47]===Symbol.for(`react.memo_cache_sentinel`)?(Ut=function(e){let t=[e.question];return e.q2&&t.push(e.q2),e.q3&&t.push(e.q3),t},e[47]=Ut):Ut=e[47];let Wt=Ut,Gt;e[48]!==s||e[49]!==f||e[50]!==m||e[51]!==a?(Gt=function(){if(s===null)return;let e=Wt(a),t=m+(s===e[f].answer?1:0);d(!0),S(t),f>=e.length-1&&(fe(!0),me(e=>({...e,[a.id]:!0})),_e(n=>({...n,[a.id]:t===e.length})))},e[48]=s,e[49]=f,e[50]=m,e[51]=a,e[52]=Gt):Gt=e[52];let Kt=Gt,qt;e[53]===Symbol.for(`react.memo_cache_sentinel`)?(qt=function(){p(M),c(null),d(!1),ye(!1)},e[53]=qt):qt=e[53];let Jt=qt,Yt;e[54]===Oe?Yt=e[55]:(Yt=Oe?null:(0,g.jsxs)(`div`,{style:{background:`#7c2d12`,borderBottom:`2px solid #ea580c`,padding:`9px 16px`,display:`flex`,alignItems:`center`,gap:10,fontFamily:`'Segoe UI',sans-serif`},children:[(0,g.jsx)(`span`,{style:{fontSize:16},children:`📡`}),(0,g.jsxs)(`div`,{style:{flex:1},children:[(0,g.jsx)(`span`,{style:{color:`#fed7aa`,fontWeight:700,fontSize:13},children:`No internet connection`}),(0,g.jsx)(`span`,{style:{color:`#fdba74`,fontSize:12,marginLeft:8},children:`Lessons still work — progress saves when you reconnect`})]})]}),e[54]=Oe,e[55]=Yt);let H=Yt;if(!we){let t;e[56]===H?t=e[57]:(t=H&&(0,g.jsx)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,zIndex:999},children:H}),e[56]=H,e[57]=t);let n,r,i,a,o;return e[58]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,g.jsx)(`div`,{style:{position:`relative`,marginBottom:4},children:(0,g.jsx)(`div`,{style:{width:72,height:72,borderRadius:20,background:`linear-gradient(135deg,#e8a020,#27ae60)`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 4px 24px rgba(232,160,32,0.4)`},children:(0,g.jsx)(`span`,{style:{fontFamily:`'Courier New',monospace`,fontWeight:900,fontSize:28,color:`#000`,letterSpacing:`-2px`},children:`</>`})})}),r=(0,g.jsx)(`div`,{style:{color:`#e8a020`,fontWeight:900,fontSize:24,letterSpacing:`-0.5px`},children:`ZamCode Academy`}),i=(0,g.jsx)(`div`,{style:{color:`#64748b`,fontSize:13},children:`Loading your progress…`}),a=(0,g.jsx)(`style`,{children:`@keyframes zca{0%,100%{opacity:.3}50%{opacity:1}}`}),o=(0,g.jsx)(`div`,{style:{display:`flex`,gap:8},children:[0,1,2].map(j)}),e[58]=n,e[59]=r,e[60]=i,e[61]=a,e[62]=o):(n=e[58],r=e[59],i=e[60],a=e[61],o=e[62]),(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:I?`linear-gradient(135deg,#0d1b2a,#1b2838)`:`linear-gradient(135deg,#e0f2fe,#dbeafe)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:16,fontFamily:`'Segoe UI',sans-serif`,color:B.text},children:[t,n,r,i,a,o]})}if(Fe===`hub`){let t;e[63]===L.bugHunt?t=e[64]:(t=Object.keys(L.bugHunt),e[63]=L.bugHunt,e[64]=t);let n=t.length,r;e[65]===L.matchOutput?r=e[66]:(r=Object.keys(L.matchOutput),e[65]=L.matchOutput,e[66]=r);let i=r.length,a;e[67]===L.bugHunt?a=e[68]:(a=Object.values(L.bugHunt).filter(Boolean),e[67]=L.bugHunt,e[68]=a);let o=a.length,s;e[69]===L.matchOutput?s=e[70]:(s=Object.values(L.matchOutput).filter(Boolean),e[69]=L.matchOutput,e[70]=s);let c=s.length,l,u,d,f;e[71]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,g.jsxs)(`div`,{style:{background:`linear-gradient(135deg,#4f46e5,#7c3aed)`,padding:`20px 18px 24px`},children:[(0,g.jsx)(`button`,{onClick:()=>{et(!1),Ie(null)},style:{background:`none`,border:`none`,color:`rgba(255,255,255,0.7)`,cursor:`pointer`,fontSize:14,padding:0,marginBottom:12},children:`← Back`}),(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,g.jsx)(`div`,{style:{fontSize:40},children:`🎮`}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h1`,{style:{margin:0,fontSize:26,fontWeight:900,color:`#fff`},children:`Games Zone`}),(0,g.jsx)(`p`,{style:{margin:0,color:`rgba(255,255,255,0.7)`,fontSize:13},children:`Challenge yourself — no pressure, just fun!`})]})]})]}),u={maxWidth:500,margin:`0 auto`,padding:`20px 18px`},d={marginBottom:14},f=()=>{Be(null),He(null),We(null),et(!1),Ie(`bughunt`)},e[71]=l,e[72]=u,e[73]=d,e[74]=f):(l=e[71],u=e[72],d=e[73],f=e[74]);let p,m,h,_,v;e[75]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,g.jsx)(`div`,{style:{height:5,background:`linear-gradient(90deg,#e74c3c,#f39c12)`}}),m={padding:`18px 20px`},h={display:`flex`,alignItems:`center`,gap:14,marginBottom:12},_=(0,g.jsx)(`div`,{style:{width:54,height:54,borderRadius:14,background:`linear-gradient(135deg,#e74c3c,#f39c12)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26},children:`🐛`}),v=(0,g.jsx)(`div`,{style:{fontWeight:800,fontSize:18},children:`Bug Hunt`}),e[75]=p,e[76]=m,e[77]=h,e[78]=_,e[79]=v):(p=e[75],m=e[76],h=e[77],_=e[78],v=e[79]);let x,S,C;e[80]===Symbol.for(`react.memo_cache_sentinel`)?(x={display:`flex`,gap:12,flexWrap:`wrap`},S=(0,g.jsxs)(`div`,{style:{background:`#e74c3c22`,borderRadius:8,padding:`6px 12px`,fontSize:12,color:`#e74c3c`,fontWeight:700},children:[`🐛 `,y.length,` challenges`]}),C={background:`#27ae6022`,borderRadius:8,padding:`6px 12px`,fontSize:12,color:`#27ae60`,fontWeight:700},e[80]=x,e[81]=S,e[82]=C):(x=e[80],S=e[81],C=e[82]);let w;e[83]===n?w=e[84]:(w=(0,g.jsxs)(`div`,{style:C,children:[`✅ `,n,` attempted`]}),e[83]=n,e[84]=w);let T;e[85]===Symbol.for(`react.memo_cache_sentinel`)?(T={background:`#f39c1222`,borderRadius:8,padding:`6px 12px`,fontSize:12,color:`#f39c12`,fontWeight:700},e[85]=T):T=e[85];let E;e[86]===o?E=e[87]:(E=(0,g.jsxs)(`div`,{style:T,children:[`🎯 `,o,` correct`]}),e[86]=o,e[87]=E);let D;e[88]!==w||e[89]!==E?(D=(0,g.jsxs)(`div`,{style:x,children:[S,w,E]}),e[88]=w,e[89]=E,e[90]=D):D=e[90];let O=I?`rgba(255,255,255,0.05)`:`rgba(0,0,0,0.04)`,ee;e[91]===O?ee=e[92]:(ee={marginTop:12,background:O,borderRadius:8,height:6,overflow:`hidden`},e[91]=O,e[92]=ee);let te=`${n/y.length*100}%`,k;e[93]===te?k=e[94]:(k=(0,g.jsx)(`div`,{style:{background:`linear-gradient(90deg,#e74c3c,#f39c12)`,height:`100%`,width:te,borderRadius:8,transition:`width 0.5s`}}),e[93]=te,e[94]=k);let A;e[95]!==ee||e[96]!==k?(A=(0,g.jsx)(`div`,{style:ee,children:k}),e[95]=ee,e[96]=k,e[97]=A):A=e[97];let ne;e[98]===Symbol.for(`react.memo_cache_sentinel`)?(ne=()=>{Je(null),Xe(null),Qe(null),nt(!1),Ie(`matchoutput`)},e[98]=ne):ne=e[98];let j,M,ae,oe,se;e[99]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,g.jsx)(`div`,{style:{height:5,background:`linear-gradient(90deg,#2e86de,#27ae60)`}}),M={padding:`18px 20px`},ae={display:`flex`,alignItems:`center`,gap:14,marginBottom:12},oe=(0,g.jsx)(`div`,{style:{width:54,height:54,borderRadius:14,background:`linear-gradient(135deg,#2e86de,#27ae60)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26},children:`🖥️`}),se=(0,g.jsx)(`div`,{style:{fontWeight:800,fontSize:18},children:`Match the Output`}),e[99]=j,e[100]=M,e[101]=ae,e[102]=oe,e[103]=se):(j=e[99],M=e[100],ae=e[101],oe=e[102],se=e[103]);let ce,N,P;e[104]===Symbol.for(`react.memo_cache_sentinel`)?(ce={display:`flex`,gap:12,flexWrap:`wrap`},N=(0,g.jsxs)(`div`,{style:{background:`#2e86de22`,borderRadius:8,padding:`6px 12px`,fontSize:12,color:`#2e86de`,fontWeight:700},children:[`🖥️ `,b.length,` puzzles`]}),P={background:`#27ae6022`,borderRadius:8,padding:`6px 12px`,fontSize:12,color:`#27ae60`,fontWeight:700},e[104]=ce,e[105]=N,e[106]=P):(ce=e[104],N=e[105],P=e[106]);let le;e[107]===i?le=e[108]:(le=(0,g.jsxs)(`div`,{style:P,children:[`✅ `,i,` attempted`]}),e[107]=i,e[108]=le);let ue;e[109]===Symbol.for(`react.memo_cache_sentinel`)?(ue={background:`#f39c1222`,borderRadius:8,padding:`6px 12px`,fontSize:12,color:`#f39c12`,fontWeight:700},e[109]=ue):ue=e[109];let de;e[110]===c?de=e[111]:(de=(0,g.jsxs)(`div`,{style:ue,children:[`🎯 `,c,` correct`]}),e[110]=c,e[111]=de);let fe;e[112]!==le||e[113]!==de?(fe=(0,g.jsxs)(`div`,{style:ce,children:[N,le,de]}),e[112]=le,e[113]=de,e[114]=fe):fe=e[114];let pe=I?`rgba(255,255,255,0.05)`:`rgba(0,0,0,0.04)`,F;e[115]===pe?F=e[116]:(F={marginTop:12,background:pe,borderRadius:8,height:6,overflow:`hidden`},e[115]=pe,e[116]=F);let me=`${i/b.length*100}%`,he;e[117]===me?he=e[118]:(he=(0,g.jsx)(`div`,{style:{background:`linear-gradient(90deg,#2e86de,#27ae60)`,height:`100%`,width:me,borderRadius:8,transition:`width 0.5s`}}),e[117]=me,e[118]=he);let ge;e[119]!==F||e[120]!==he?(ge=(0,g.jsx)(`div`,{style:F,children:he}),e[119]=F,e[120]=he,e[121]=ge):ge=e[121];let _e,ve,ye,be,xe;e[122]===Symbol.for(`react.memo_cache_sentinel`)?(_e=(0,g.jsx)(`div`,{style:{height:5,background:`linear-gradient(90deg,#7c3aed,#e8a020)`}}),ve={padding:`18px 20px`},ye={display:`flex`,alignItems:`center`,gap:14,marginBottom:12},be=(0,g.jsx)(`div`,{style:{width:54,height:54,borderRadius:14,background:`linear-gradient(135deg,#7c3aed,#e8a020)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26},children:`⚡`}),xe=(0,g.jsx)(`div`,{style:{fontWeight:800,fontSize:18},children:`Speed Quiz`}),e[122]=_e,e[123]=ve,e[124]=ye,e[125]=be,e[126]=xe):(_e=e[122],ve=e[123],ye=e[124],be=e[125],xe=e[126]);let Se,Ce,we;e[127]===Symbol.for(`react.memo_cache_sentinel`)?(Se={display:`flex`,gap:12,flexWrap:`wrap`},Ce=(0,g.jsx)(`div`,{style:{background:`#7c3aed22`,borderRadius:8,padding:`6px 12px`,fontSize:12,color:`#a78bfa`,fontWeight:700},children:`⚡ 10 random questions`}),we={background:`#e8a02022`,borderRadius:8,padding:`6px 12px`,fontSize:12,color:`#e8a020`,fontWeight:700},e[127]=Se,e[128]=Ce,e[129]=we):(Se=e[127],Ce=e[128],we=e[129]);let Te;return e[130]===z?Te=e[131]:(Te=(0,g.jsxs)(`div`,{style:Se,children:[Ce,(0,g.jsxs)(`div`,{style:we,children:[`🏆 Best: `,z,`/10`]})]}),e[130]=z,e[131]=Te),(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:B.screenBg,fontFamily:`'Segoe UI',sans-serif`,color:B.text,paddingBottom:48},children:[H,l,(0,g.jsxs)(`div`,{style:u,children:[(0,g.jsxs)(`div`,{style:d,children:[(0,g.jsxs)(`button`,{onClick:f,style:{width:`100%`,background:B.cardBg2,border:`2px solid #e74c3c33`,borderRadius:20,padding:0,cursor:`pointer`,textAlign:`left`,color:B.text,overflow:`hidden`,boxShadow:I?`0 4px 16px rgba(0,0,0,0.3)`:`0 4px 16px rgba(0,0,0,0.08)`},children:[p,(0,g.jsxs)(`div`,{style:m,children:[(0,g.jsxs)(`div`,{style:h,children:[_,(0,g.jsxs)(`div`,{children:[v,(0,g.jsx)(`div`,{style:{color:B.textMuted,fontSize:12,marginTop:2},children:`Find the error on the wrong line`})]})]}),D,A]})]}),n>0&&(0,g.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,alignItems:`center`,gap:8,marginTop:8,paddingRight:4},children:$e?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`span`,{style:{fontSize:12,color:`#e74c3c`,fontWeight:600},children:`Reset Bug Hunt?`}),(0,g.jsx)(`button`,{onClick:()=>{Re(ie),et(!1)},style:{background:`#e74c3c`,border:`none`,borderRadius:8,padding:`5px 12px`,color:`#fff`,fontSize:12,cursor:`pointer`,fontWeight:700},children:`Yes`}),(0,g.jsx)(`button`,{onClick:()=>et(!1),style:{background:`none`,border:`1px solid ${B.border2}`,borderRadius:8,padding:`5px 12px`,color:B.textFaint,fontSize:12,cursor:`pointer`},children:`No`})]}):(0,g.jsx)(`button`,{onClick:e=>{e.stopPropagation(),et(!0)},style:{background:`#e74c3c22`,border:`1px solid #e74c3c88`,borderRadius:8,padding:`5px 12px`,color:`#e74c3c`,cursor:`pointer`,fontSize:12,fontWeight:600},children:`↺ Reset progress`})})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`button`,{onClick:ne,style:{width:`100%`,background:B.cardBg2,border:`2px solid #2e86de33`,borderRadius:20,padding:0,cursor:`pointer`,textAlign:`left`,color:B.text,overflow:`hidden`,boxShadow:I?`0 4px 16px rgba(0,0,0,0.3)`:`0 4px 16px rgba(0,0,0,0.08)`},children:[j,(0,g.jsxs)(`div`,{style:M,children:[(0,g.jsxs)(`div`,{style:ae,children:[oe,(0,g.jsxs)(`div`,{children:[se,(0,g.jsx)(`div`,{style:{color:B.textMuted,fontSize:12,marginTop:2},children:`Read code — pick the correct output`})]})]}),fe,ge]})]}),i>0&&(0,g.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,alignItems:`center`,gap:8,marginTop:8,paddingRight:4},children:tt?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`span`,{style:{fontSize:12,color:`#e74c3c`,fontWeight:600},children:`Reset Match the Output?`}),(0,g.jsx)(`button`,{onClick:()=>{Re(re),nt(!1)},style:{background:`#e74c3c`,border:`none`,borderRadius:8,padding:`5px 12px`,color:`#fff`,fontSize:12,cursor:`pointer`,fontWeight:700},children:`Yes`}),(0,g.jsx)(`button`,{onClick:()=>nt(!1),style:{background:`none`,border:`1px solid ${B.border2}`,borderRadius:8,padding:`5px 12px`,color:B.textFaint,fontSize:12,cursor:`pointer`},children:`No`})]}):(0,g.jsx)(`button`,{onClick:e=>{e.stopPropagation(),nt(!0)},style:{background:`#e74c3c22`,border:`1px solid #e74c3c88`,borderRadius:8,padding:`5px 12px`,color:`#e74c3c`,cursor:`pointer`,fontSize:12,fontWeight:600},children:`↺ Reset progress`})})]}),(0,g.jsxs)(`button`,{onClick:Ct,style:{width:`100%`,background:B.cardBg2,border:`2px solid #7c3aed33`,borderRadius:20,padding:0,cursor:`pointer`,textAlign:`left`,color:B.text,marginTop:14,overflow:`hidden`,boxShadow:I?`0 4px 16px rgba(0,0,0,0.3)`:`0 4px 16px rgba(0,0,0,0.08)`},children:[_e,(0,g.jsxs)(`div`,{style:ve,children:[(0,g.jsxs)(`div`,{style:ye,children:[be,(0,g.jsxs)(`div`,{children:[xe,(0,g.jsx)(`div`,{style:{color:B.textMuted,fontSize:12,marginTop:2},children:`10 questions · 15 seconds each · exam mode`})]})]}),Te]})]}),(0,g.jsx)(`p`,{style:{color:B.textFaint,fontSize:12,textAlign:`center`,marginTop:20},children:`Games are separate from your lesson progress 🎮`})]})]})}if(Fe===`bughunt`){let t={Easy:`#27ae60`,Medium:`#e8a020`,Hard:`#e74c3c`},n={Pascal:`#e8a020`,"C++":`#2e86de`,Python:`#27ae60`,SQL:`#e74c3c`,HTML:`#e44d26`};if(!ze){let r={};y.forEach(e=>{r[e.lang]||(r[e.lang]=[]),r[e.lang].push(e)});let i,a;e[132]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,g.jsxs)(`div`,{style:{background:`linear-gradient(135deg,#e74c3c,#f39c12)`,padding:`20px 18px 22px`},children:[(0,g.jsx)(`button`,{onClick:()=>Ie(`hub`),style:{background:`none`,border:`none`,color:`rgba(255,255,255,0.8)`,cursor:`pointer`,fontSize:14,padding:0,marginBottom:12},children:`← Games Zone`}),(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,g.jsx)(`span`,{style:{fontSize:32},children:`🐛`}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h2`,{style:{margin:0,fontWeight:900,fontSize:22,color:`#fff`},children:`Bug Hunt`}),(0,g.jsx)(`p`,{style:{margin:0,color:`rgba(255,255,255,0.75)`,fontSize:13},children:`Tap the line with the bug!`})]})]})]}),a={maxWidth:500,margin:`0 auto`,padding:`18px 16px`},e[132]=i,e[133]=a):(i=e[132],a=e[133]);let o=Object.entries(r).map(e=>{let[r,i]=e;return(0,g.jsxs)(`div`,{style:{marginBottom:20},children:[(0,g.jsx)(`div`,{style:{fontSize:13,fontWeight:700,color:n[r]||`#888`,textTransform:`uppercase`,letterSpacing:1,marginBottom:10},children:r}),(0,g.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:i.map((e,i)=>{let a=L.bugHunt[e.id]!==void 0,o=L.bugHunt[e.id]===!0;return(0,g.jsxs)(`button`,{onClick:()=>{Be(e),He(null),We(null),Ke(!1)},style:{background:a?o?I?`#0f2e1a`:`#f0fdf4`:I?`#2e0e0e`:`#fef2f2`:B.cardBg2,border:`1.5px solid ${a?o?`#27ae60`:`#e74c3c`:(n[r]||`#444`)+`33`}`,borderRadius:12,padding:`12px 14px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:12,textAlign:`left`,color:B.text},children:[(0,g.jsx)(`div`,{style:{width:32,height:32,borderRadius:8,background:(n[r]||`#888`)+`22`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:800,fontSize:13,color:n[r]||`#888`,flexShrink:0},children:i+1}),(0,g.jsxs)(`div`,{style:{flex:1},children:[(0,g.jsx)(`div`,{style:{fontWeight:700,fontSize:14},children:e.title}),(0,g.jsx)(`div`,{style:{fontSize:11,color:t[e.difficulty]||`#888`,fontWeight:600,marginTop:2},children:e.difficulty})]}),(0,g.jsx)(`div`,{style:{fontSize:16},children:a?o?`✅`:`❌`:`›`})]},e.id)})})]},r)}),s;return e[134]===o?s=e[135]:(s=(0,g.jsx)(`div`,{style:a,children:o}),e[134]=o,e[135]=s),(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:B.screenBg,fontFamily:`'Segoe UI',sans-serif`,color:B.text,paddingBottom:48},children:[H,i,s]})}let r=ze.code.split(`
`),i,a,o,s;e[136]===Symbol.for(`react.memo_cache_sentinel`)?(i={background:`linear-gradient(135deg,#e74c3c,#f39c12)`,padding:`16px 18px 18px`},a=(0,g.jsx)(`button`,{onClick:()=>{Be(null),We(null),He(null)},style:{background:`none`,border:`none`,color:`rgba(255,255,255,0.8)`,cursor:`pointer`,fontSize:14,padding:0,marginBottom:10},children:`← All Levels`}),o={display:`flex`,alignItems:`center`,justifyContent:`space-between`},s={fontWeight:900,fontSize:18,color:`#fff`},e[136]=i,e[137]=a,e[138]=o,e[139]=s):(i=e[136],a=e[137],o=e[138],s=e[139]);let c;e[140]===ze.title?c=e[141]:(c=(0,g.jsxs)(`div`,{style:s,children:[`🐛 `,ze.title]}),e[140]=ze.title,e[141]=c);let l;e[142]===Symbol.for(`react.memo_cache_sentinel`)?(l={fontSize:12,color:`rgba(255,255,255,0.7)`,marginTop:2},e[142]=l):l=e[142];let u;e[143]!==ze.difficulty||e[144]!==ze.lang?(u=(0,g.jsxs)(`div`,{style:l,children:[ze.lang,` · `,ze.difficulty]}),e[143]=ze.difficulty,e[144]=ze.lang,e[145]=u):u=e[145];let d;e[146]!==c||e[147]!==u?(d=(0,g.jsxs)(`div`,{children:[c,u]}),e[146]=c,e[147]=u,e[148]=d):d=e[148];let f;e[149]===Ue?f=e[150]:(f=Ue&&(0,g.jsx)(`div`,{style:{fontSize:28},children:Ue===`correct`?`🏆`:`💪`}),e[149]=Ue,e[150]=f);let p;e[151]!==d||e[152]!==f?(p=(0,g.jsxs)(`div`,{style:i,children:[a,(0,g.jsxs)(`div`,{style:o,children:[d,f]})]}),e[151]=d,e[152]=f,e[153]=p):p=e[153];let m,h;e[154]===Symbol.for(`react.memo_cache_sentinel`)?(m={maxWidth:500,margin:`0 auto`,padding:`18px 16px`},h={marginBottom:14},e[154]=m,e[155]=h):(m=e[154],h=e[155]);let _=`1px solid ${Ue===`correct`?`#27ae6055`:`#334155`}`,v;e[156]===_?v=e[157]:(v={background:`#0a0f16`,borderRadius:14,overflow:`hidden`,border:_},e[156]=_,e[157]=v);let b,x,S;e[158]===Symbol.for(`react.memo_cache_sentinel`)?(b={background:`#1e293b`,padding:`8px 14px`,display:`flex`,gap:5},x=[`#e74c3c`,`#f39c12`,`#27ae60`].map(ne),S={color:`#64748b`,fontSize:11,marginLeft:6},e[158]=b,e[159]=x,e[160]=S):(b=e[158],x=e[159],S=e[160]);let C=ze.lang===`Pascal`?`program.pas`:ze.lang===`C++`?`main.cpp`:ze.lang===`Python`?`script.py`:ze.lang===`SQL`?`query.sql`:`index.html`,w;e[161]===C?w=e[162]:(w=(0,g.jsxs)(`div`,{style:b,children:[x,(0,g.jsx)(`span`,{style:S,children:C})]}),e[161]=C,e[162]=w);let T;e[163]!==ze.bugLine||e[164]!==Ue||e[165]!==Ve?(T=(e,t)=>{let n=t+1,r=n===ze.bugLine,i=Ve===n,a=`transparent`,o=`3px solid transparent`,s=`#94a3b8`;return Ue?r?(a=`#0f2e1a`,o=`3px solid #27ae60`,s=`#6ee7a0`):i&&!r&&(a=`#2e0e0e`,o=`3px solid #e74c3c`,s=`#fca5a5`):i&&(a=`#1e3a5f`,o=`3px solid #2e86de`,s=`#93c5fd`),(0,g.jsxs)(`button`,{onClick:()=>!Ue&&He(n),style:{display:`flex`,width:`100%`,alignItems:`stretch`,background:a,borderLeft:o,borderTop:`none`,borderRight:`none`,borderBottom:`none`,cursor:Ue?`default`:`pointer`,transition:`all 0.15s`,padding:0},children:[(0,g.jsx)(`span`,{style:{color:r&&Ue?`#27ae60`:`#334155`,width:34,textAlign:`right`,paddingRight:10,userSelect:`none`,fontSize:11,display:`flex`,alignItems:`center`,justifyContent:`flex-end`,flexShrink:0},children:n}),(0,g.jsx)(`span`,{style:{color:s,paddingLeft:4,paddingRight:14,paddingTop:5,paddingBottom:5,whiteSpace:`pre`,fontFamily:`'Courier New',monospace`,fontSize:12.5,lineHeight:1.7,textAlign:`left`},children:e||` `})]},t)},e[163]=ze.bugLine,e[164]=Ue,e[165]=Ve,e[166]=T):T=e[166];let E=r.map(T),D;e[167]!==v||e[168]!==w||e[169]!==E?(D=(0,g.jsxs)(`div`,{style:v,children:[w,E]}),e[167]=v,e[168]=w,e[169]=E,e[170]=D):D=e[170];let O;return e[171]!==ze.hint||e[172]!==Ue||e[173]!==I||e[174]!==Ge?(O=Ge&&!Ue&&(0,g.jsx)(`div`,{style:{background:I?`#1e293b`:`#eff6ff`,border:`1px solid #2563eb44`,borderRadius:12,padding:`11px 14px`,marginBottom:10},children:(0,g.jsxs)(`p`,{style:{margin:0,color:I?`#93c5fd`:`#1d4ed8`,fontSize:13},children:[`💡 `,(0,g.jsx)(`strong`,{children:`Hint:`}),` `,ze.hint]})}),e[171]=ze.hint,e[172]=Ue,e[173]=I,e[174]=Ge,e[175]=O):O=e[175],(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:B.screenBg,fontFamily:`'Segoe UI',sans-serif`,color:B.text,paddingBottom:48},children:[H,p,(0,g.jsxs)(`div`,{style:m,children:[(0,g.jsxs)(`div`,{style:h,children:[(0,g.jsx)(`div`,{style:{color:B.textFaint,fontSize:12,marginBottom:8,fontWeight:600},children:Ue?`The bug was on line:`:`👇 Tap the line that contains the bug:`}),D]}),!Ue&&(0,g.jsxs)(`div`,{style:{display:`flex`,gap:9,marginBottom:10},children:[(0,g.jsxs)(`button`,{onClick:()=>Ke(A),style:{background:B.cardBg2,border:`1px solid ${B.border2}`,borderRadius:12,padding:`13px 16px`,color:B.textMuted,cursor:`pointer`,fontSize:13,fontWeight:600,whiteSpace:`nowrap`},children:[`💡 `,Ge?`Hide Hint`:`Show Hint`]}),(0,g.jsx)(`button`,{onClick:()=>{if(Ve===null)return;let e=Ve===ze.bugLine;We(e?`correct`:`wrong`),Re(t=>({...t,bugHunt:{...t.bugHunt,[ze.id]:e}}))},disabled:Ve===null,style:{flex:1,background:Ve===null?`#334155`:`#e74c3c`,border:`none`,borderRadius:12,padding:`13px`,color:Ve===null?`#64748b`:`#fff`,fontWeight:700,fontSize:15,cursor:Ve===null?`default`:`pointer`},children:`🐛 That's the Bug!`})]}),O,Ue&&(0,g.jsxs)(`div`,{style:{background:Ue===`correct`?I?`#0f2e1a`:`#f0fdf4`:I?`#2e0e0e`:`#fef2f2`,border:`2px solid ${Ue===`correct`?`#27ae60`:`#e74c3c`}`,borderRadius:14,padding:16,marginBottom:12},children:[(0,g.jsx)(`p`,{style:{margin:`0 0 6px`,fontWeight:800,fontSize:16,color:Ue===`correct`?`#27ae60`:`#e74c3c`},children:Ue===`correct`?`✅ Correct! You found the bug!`:`❌ Not quite — the bug is highlighted in green`}),(0,g.jsx)(`p`,{style:{margin:0,color:B.text,fontSize:13,lineHeight:1.7},children:ze.explanation})]}),Ue&&(0,g.jsxs)(`div`,{style:{display:`flex`,gap:9},children:[(0,g.jsx)(`button`,{onClick:()=>{He(null),We(null)},style:{flex:1,background:B.cardBg2,border:`1px solid ${B.border2}`,borderRadius:10,padding:`11px`,color:B.text,fontWeight:600,fontSize:13,cursor:`pointer`},children:`🔁 Retry`}),(0,g.jsx)(`button`,{onClick:()=>{Be(null),He(null),We(null)},style:{flex:1,background:`linear-gradient(135deg,#e74c3c,#f39c12)`,border:`none`,borderRadius:10,padding:`11px`,color:`#fff`,fontWeight:700,fontSize:13,cursor:`pointer`},children:`All Levels →`})]})]})]})}if(Fe===`matchoutput`){let t={Pascal:`#e8a020`,"C++":`#2e86de`,Python:`#27ae60`,SQL:`#e74c3c`,HTML:`#e44d26`},n={Easy:`#27ae60`,Medium:`#e8a020`,Hard:`#e74c3c`};if(!qe){let r={};b.forEach(e=>{r[e.lang]||(r[e.lang]=[]),r[e.lang].push(e)});let i,a;e[176]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,g.jsxs)(`div`,{style:{background:`linear-gradient(135deg,#2e86de,#27ae60)`,padding:`20px 18px 22px`},children:[(0,g.jsx)(`button`,{onClick:()=>Ie(`hub`),style:{background:`none`,border:`none`,color:`rgba(255,255,255,0.8)`,cursor:`pointer`,fontSize:14,padding:0,marginBottom:12},children:`← Games Zone`}),(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,g.jsx)(`span`,{style:{fontSize:32},children:`🖥️`}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h2`,{style:{margin:0,fontWeight:900,fontSize:22,color:`#fff`},children:`Match the Output`}),(0,g.jsx)(`p`,{style:{margin:0,color:`rgba(255,255,255,0.75)`,fontSize:13},children:`Read the code — pick the right output!`})]})]})]}),a={maxWidth:500,margin:`0 auto`,padding:`18px 16px`},e[176]=i,e[177]=a):(i=e[176],a=e[177]);let o=Object.entries(r).map(e=>{let[r,i]=e;return(0,g.jsxs)(`div`,{style:{marginBottom:20},children:[(0,g.jsx)(`div`,{style:{fontSize:13,fontWeight:700,color:t[r]||`#888`,textTransform:`uppercase`,letterSpacing:1,marginBottom:10},children:r}),(0,g.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:i.map((e,i)=>{let a=L.matchOutput[e.id]!==void 0,o=L.matchOutput[e.id]===!0;return(0,g.jsxs)(`button`,{onClick:()=>{Je(e),Xe(null),Qe(null)},style:{background:a?o?I?`#0f2e1a`:`#f0fdf4`:I?`#2e0e0e`:`#fef2f2`:B.cardBg2,border:`1.5px solid ${a?o?`#27ae60`:`#e74c3c`:(t[r]||`#444`)+`33`}`,borderRadius:12,padding:`12px 14px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:12,textAlign:`left`,color:B.text},children:[(0,g.jsx)(`div`,{style:{width:32,height:32,borderRadius:8,background:(t[r]||`#888`)+`22`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:800,fontSize:13,color:t[r]||`#888`,flexShrink:0},children:i+1}),(0,g.jsxs)(`div`,{style:{flex:1},children:[(0,g.jsxs)(`div`,{style:{fontWeight:700,fontSize:14},children:[r,` Puzzle `,i+1]}),(0,g.jsx)(`div`,{style:{fontSize:11,color:n[e.difficulty]||`#888`,fontWeight:600,marginTop:2},children:e.difficulty})]}),(0,g.jsx)(`div`,{style:{fontSize:16},children:a?o?`✅`:`❌`:`›`})]},e.id)})})]},r)}),s;return e[178]===o?s=e[179]:(s=(0,g.jsx)(`div`,{style:a,children:o}),e[178]=o,e[179]=s),(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:B.screenBg,fontFamily:`'Segoe UI',sans-serif`,color:B.text,paddingBottom:48},children:[H,i,s]})}let r,i,a,o;e[180]===Symbol.for(`react.memo_cache_sentinel`)?(r={background:`linear-gradient(135deg,#2e86de,#27ae60)`,padding:`16px 18px 18px`},i=(0,g.jsx)(`button`,{onClick:()=>{Je(null),Xe(null),Qe(null)},style:{background:`none`,border:`none`,color:`rgba(255,255,255,0.8)`,cursor:`pointer`,fontSize:14,padding:0,marginBottom:10},children:`← All Puzzles`}),a={display:`flex`,alignItems:`center`,justifyContent:`space-between`},o={fontWeight:900,fontSize:18,color:`#fff`},e[180]=r,e[181]=i,e[182]=a,e[183]=o):(r=e[180],i=e[181],a=e[182],o=e[183]);let s;e[184]!==qe.difficulty||e[185]!==qe.lang?(s=(0,g.jsxs)(`div`,{style:o,children:[`🖥️ `,qe.lang,` · `,qe.difficulty]}),e[184]=qe.difficulty,e[185]=qe.lang,e[186]=s):s=e[186];let c;e[187]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,g.jsx)(`div`,{style:{fontSize:12,color:`rgba(255,255,255,0.7)`,marginTop:2},children:`What does this code print?`}),e[187]=c):c=e[187];let l;e[188]===s?l=e[189]:(l=(0,g.jsxs)(`div`,{children:[s,c]}),e[188]=s,e[189]=l);let u;e[190]===Ze?u=e[191]:(u=Ze&&(0,g.jsx)(`div`,{style:{fontSize:28},children:Ze===`correct`?`🏆`:`💪`}),e[190]=Ze,e[191]=u);let d;e[192]!==l||e[193]!==u?(d=(0,g.jsxs)(`div`,{style:r,children:[i,(0,g.jsxs)(`div`,{style:a,children:[l,u]})]}),e[192]=l,e[193]=u,e[194]=d):d=e[194];let f,p,m,h;e[195]===Symbol.for(`react.memo_cache_sentinel`)?(f={maxWidth:500,margin:`0 auto`,padding:`18px 16px`},p={background:`#0a0f16`,borderRadius:14,overflow:`hidden`,border:`1px solid #334155`,marginBottom:14},m=(0,g.jsxs)(`div`,{style:{background:`#1e293b`,padding:`8px 14px`,display:`flex`,gap:5},children:[[`#e74c3c`,`#f39c12`,`#27ae60`].map(k),(0,g.jsx)(`span`,{style:{color:`#64748b`,fontSize:11,marginLeft:6},children:`Read this code carefully 👀`})]}),h={margin:0,padding:`14px 16px`,color:`#e0f2fe`,fontFamily:`'Courier New',monospace`,fontSize:12.5,lineHeight:1.75,overflowX:`auto`},e[195]=f,e[196]=p,e[197]=m,e[198]=h):(f=e[195],p=e[196],m=e[197],h=e[198]);let _;e[199]===qe.code?_=e[200]:(_=(0,g.jsxs)(`div`,{style:p,children:[m,(0,g.jsx)(`pre`,{style:h,children:qe.code})]}),e[199]=qe.code,e[200]=_);let v;e[201]===Symbol.for(`react.memo_cache_sentinel`)?(v={display:`flex`,flexDirection:`column`,gap:9,marginBottom:14},e[201]=v):v=e[201];let y=qe.options.map((e,t)=>{let n=t===qe.answer,r=Ye===t,i=B.cardBg2,a=`1px solid ${B.border}`,o=B.text;return Ze?n?(i=I?`#0f2e1a`:`#f0fdf4`,a=`2px solid #27ae60`,o=I?`#6ee7a0`:`#166534`):r&&(i=I?`#2e0e0e`:`#fef2f2`,a=`2px solid #e74c3c`,o=I?`#fca5a5`:`#dc2626`):r&&(i=`#2e86de22`,a=`2px solid #2e86de`),(0,g.jsxs)(`button`,{onClick:()=>!Ze&&Xe(t),style:{background:i,border:a,borderRadius:12,padding:`12px 14px`,textAlign:`left`,color:o,cursor:Ze?`default`:`pointer`,display:`flex`,alignItems:`center`,gap:10,transition:`all 0.15s`},children:[(0,g.jsx)(`span`,{style:{width:26,height:26,borderRadius:`50%`,background:r&&!Ze?`#2e86de`:B.cardBg2,color:r&&!Ze?`#fff`:B.textMuted,border:`1px solid ${B.border2}`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:12,fontWeight:700,flexShrink:0},children:String.fromCharCode(65+t)}),(0,g.jsx)(`pre`,{style:{margin:0,fontFamily:`'Courier New',monospace`,fontSize:13,lineHeight:1.5,whiteSpace:`pre-wrap`},children:e})]},t)}),x;e[202]===y?x=e[203]:(x=(0,g.jsx)(`div`,{style:v,children:y}),e[202]=y,e[203]=x);let S;return e[204]!==qe.answer||e[205]!==qe.id||e[206]!==Ze||e[207]!==Ye?(S=!Ze&&(0,g.jsx)(`button`,{onClick:()=>{if(Ye===null)return;let e=Ye===qe.answer;Qe(e?`correct`:`wrong`),Re(t=>({...t,matchOutput:{...t.matchOutput,[qe.id]:e}}))},disabled:Ye===null,style:{width:`100%`,background:Ye===null?`#334155`:`#2e86de`,border:`none`,borderRadius:12,padding:`13px`,color:Ye===null?`#64748b`:`#fff`,fontWeight:700,fontSize:15,cursor:Ye===null?`default`:`pointer`,marginBottom:10},children:`That's the Output!`}),e[204]=qe.answer,e[205]=qe.id,e[206]=Ze,e[207]=Ye,e[208]=S):S=e[208],(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:B.screenBg,fontFamily:`'Segoe UI',sans-serif`,color:B.text,paddingBottom:48},children:[H,d,(0,g.jsxs)(`div`,{style:f,children:[_,(0,g.jsx)(`div`,{style:{color:B.textFaint,fontSize:12,fontWeight:600,marginBottom:10},children:Ze?`The correct output was:`:`👇 Which output does this code produce?`}),x,S,Ze&&(0,g.jsxs)(`div`,{style:{background:Ze===`correct`?I?`#0f2e1a`:`#f0fdf4`:I?`#2e0e0e`:`#fef2f2`,border:`2px solid ${Ze===`correct`?`#27ae60`:`#e74c3c`}`,borderRadius:14,padding:16,marginBottom:12},children:[(0,g.jsx)(`p`,{style:{margin:`0 0 6px`,fontWeight:800,fontSize:16,color:Ze===`correct`?`#27ae60`:`#e74c3c`},children:Ze===`correct`?`✅ Correct! Great code reading!`:`❌ Not quite — the correct answer is highlighted`}),(0,g.jsx)(`p`,{style:{margin:0,color:B.text,fontSize:13,lineHeight:1.7},children:qe.explanation})]}),Ze&&(0,g.jsxs)(`div`,{style:{display:`flex`,gap:9},children:[(0,g.jsx)(`button`,{onClick:()=>{Xe(null),Qe(null)},style:{flex:1,background:B.cardBg2,border:`1px solid ${B.border2}`,borderRadius:10,padding:`11px`,color:B.text,fontWeight:600,fontSize:13,cursor:`pointer`},children:`🔁 Retry`}),(0,g.jsx)(`button`,{onClick:()=>{Je(null),Xe(null),Qe(null)},style:{flex:1,background:`linear-gradient(135deg,#2e86de,#27ae60)`,border:`none`,borderRadius:10,padding:`11px`,color:`#fff`,fontWeight:700,fontSize:13,cursor:`pointer`},children:`All Puzzles →`})]})]})]})}if(Fe===`speedquiz`){let t=it.length,n=mt/15*100,r=mt>8?`#27ae60`:mt>4?`#e8a020`:`#e74c3c`;if(ft){let n;e[209]===_t?n=e[210]:(n=_t.filter(te),e[209]=_t,e[210]=n);let r=n.length,i=r>z,a;e[211]!==t||e[212]!==r?(a=Math.round(r/t*100),e[211]=t,e[212]=r,e[213]=a):a=e[213];let o=a,s,c;e[214]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,g.jsxs)(`div`,{style:{background:`linear-gradient(135deg,#7c3aed,#e8a020)`,padding:`20px 18px 22px`},children:[(0,g.jsx)(`div`,{style:{fontWeight:900,fontSize:22,color:`#fff`},children:`⚡ Speed Quiz — Results`}),(0,g.jsx)(`div`,{style:{color:`rgba(255,255,255,0.75)`,fontSize:13,marginTop:4},children:`10 questions · 15 seconds each`})]}),c={maxWidth:500,margin:`0 auto`,padding:`20px 16px`},e[214]=s,e[215]=c):(s=e[214],c=e[215]);let l=r>=7?I?`#0f2e1a`:`#f0fdf4`:r>=5?I?`#1a2010`:`#f7fee7`:I?`#2e0e0e`:`#fef2f2`,u=`2px solid ${r>=7?`#27ae60`:r>=5?`#86efac`:`#e74c3c`}`,d;e[216]!==l||e[217]!==u?(d={background:l,border:u,borderRadius:20,padding:`28px 20px`,textAlign:`center`,marginBottom:16},e[216]=l,e[217]=u,e[218]=d):d=e[218];let f;e[219]===Symbol.for(`react.memo_cache_sentinel`)?(f={fontSize:56,marginBottom:8},e[219]=f):f=e[219];let p=r>=7?`🏆`:r>=5?`🎉`:`📚`,m;e[220]===p?m=e[221]:(m=(0,g.jsx)(`div`,{style:f,children:p}),e[220]=p,e[221]=m);let h=r>=7?`#27ae60`:r>=5?`#4ade80`:`#e74c3c`,_;e[222]===h?_=e[223]:(_={fontSize:48,fontWeight:900,color:h},e[222]=h,e[223]=_);let v=r>=7?`#27ae60`:r>=5?I?`#86efac`:`#16a34a`:I?`#fca5a5`:`#dc2626`,y;e[224]===v?y=e[225]:(y={fontSize:16,fontWeight:700,color:v,marginTop:4},e[224]=v,e[225]=y);let b=r>=9?`Outstanding! ECZ material! 🌟`:r>=7?`Great work — exam ready!`:r>=5?`Good effort — keep revising!`:`Review your lessons and try again!`,x;e[226]!==y||e[227]!==b?(x=(0,g.jsx)(`div`,{style:y,children:b}),e[226]=y,e[227]=b,e[228]=x):x=e[228];let S;e[229]===i?S=e[230]:(S=i&&(0,g.jsx)(`div`,{style:{marginTop:10,fontSize:13,color:`#e8a020`,fontWeight:700},children:`🎯 New personal best!`}),e[229]=i,e[230]=S);let C;e[231]===Symbol.for(`react.memo_cache_sentinel`)?(C={marginTop:14,display:`flex`,gap:12,justifyContent:`center`},e[231]=C):C=e[231];let w=I?`rgba(255,255,255,0.08)`:`rgba(0,0,0,0.06)`,T;e[232]===w?T=e[233]:(T={background:w,borderRadius:10,padding:`8px 16px`},e[232]=w,e[233]=T);let E=I?`rgba(255,255,255,0.08)`:`rgba(0,0,0,0.06)`,D;e[234]===E?D=e[235]:(D={background:E,borderRadius:10,padding:`8px 16px`},e[234]=E,e[235]=D);let O=I?`rgba(255,255,255,0.08)`:`rgba(0,0,0,0.06)`,k;e[236]===O?k=e[237]:(k={background:O,borderRadius:10,padding:`8px 16px`},e[236]=O,e[237]=k);let A;e[238]===_t?A=e[239]:(A=_t.filter(ee),e[238]=_t,e[239]=A);let ne;e[240]===Symbol.for(`react.memo_cache_sentinel`)?(ne={display:`flex`,flexDirection:`column`,gap:8,marginBottom:20},e[240]=ne):ne=e[240];let re=_t.map((e,t)=>(0,g.jsxs)(`div`,{style:{background:e.correct?I?`#0f2e1a`:`#f0fdf4`:e.timedOut?I?`#1a1a2e`:`#f0f0ff`:I?`#2e0e0e`:`#fef2f2`,border:`1px solid ${e.correct?`#27ae6044`:e.timedOut?`#6366f144`:`#e74c3c44`}`,borderRadius:12,padding:`11px 14px`,display:`flex`,alignItems:`center`,gap:10},children:[(0,g.jsx)(`div`,{style:{width:28,height:28,borderRadius:`50%`,background:e.correct?`#27ae60`:e.timedOut?`#6366f1`:`#e74c3c`,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:800,fontSize:13,flexShrink:0},children:t+1}),(0,g.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,g.jsxs)(`div`,{style:{fontSize:12,fontWeight:600,color:B.text,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:[e.question.topicTitle,` · `,e.question.language]}),(0,g.jsx)(`div`,{style:{fontSize:11,color:B.textFaint,marginTop:2},children:e.correct?`✅ Correct`:e.timedOut?`⏰ Timed out`:`❌ Wrong`})]}),(0,g.jsx)(`div`,{style:{fontSize:16},children:e.correct?`✅`:e.timedOut?`⏰`:`❌`})]},t)),ie;e[241]===re?ie=e[242]:(ie=(0,g.jsx)(`div`,{style:ne,children:re}),e[241]=re,e[242]=ie);let j;e[243]===Symbol.for(`react.memo_cache_sentinel`)?(j={display:`flex`,gap:9},e[243]=j):j=e[243];let M,ae;return e[244]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,g.jsx)(`button`,{onClick:Ct,style:{flex:1,background:`linear-gradient(135deg,#7c3aed,#e8a020)`,border:`none`,borderRadius:12,padding:`13px`,color:`#fff`,fontWeight:700,fontSize:14,cursor:`pointer`},children:`⚡ Play Again`}),ae=()=>Ie(`hub`),e[244]=M,e[245]=ae):(M=e[244],ae=e[245]),(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:B.screenBg,fontFamily:`'Segoe UI',sans-serif`,color:B.text,paddingBottom:48},children:[H,s,(0,g.jsxs)(`div`,{style:c,children:[(0,g.jsxs)(`div`,{style:d,children:[m,(0,g.jsxs)(`div`,{style:_,children:[r,(0,g.jsxs)(`span`,{style:{fontSize:24,color:B.textMuted},children:[`/`,t]})]}),x,S,(0,g.jsxs)(`div`,{style:C,children:[(0,g.jsxs)(`div`,{style:T,children:[(0,g.jsxs)(`div`,{style:{fontSize:18,fontWeight:800,color:B.text},children:[o,`%`]}),(0,g.jsx)(`div`,{style:{fontSize:11,color:B.textFaint},children:`Score`})]}),(0,g.jsxs)(`div`,{style:D,children:[(0,g.jsx)(`div`,{style:{fontSize:18,fontWeight:800,color:B.text},children:z}),(0,g.jsx)(`div`,{style:{fontSize:11,color:B.textFaint},children:`Best ever`})]}),(0,g.jsxs)(`div`,{style:k,children:[(0,g.jsx)(`div`,{style:{fontSize:18,fontWeight:800,color:B.text},children:A.length}),(0,g.jsx)(`div`,{style:{fontSize:11,color:B.textFaint},children:`Timed out`})]})]})]}),(0,g.jsx)(`div`,{style:{color:B.textFaint,fontSize:12,fontWeight:700,textTransform:`uppercase`,letterSpacing:1,marginBottom:10},children:`Question Breakdown`}),ie,(0,g.jsxs)(`div`,{style:j,children:[M,(0,g.jsx)(`button`,{onClick:ae,style:{flex:1,background:B.cardBg2,border:`1px solid ${B.border2}`,borderRadius:12,padding:`13px`,color:B.text,fontWeight:600,fontSize:14,cursor:`pointer`},children:`← Games Zone`})]})]})]})}if(it.length===0)return null;let i=it[ot],a,o,s,c,l;e[246]===Symbol.for(`react.memo_cache_sentinel`)?(a={background:`linear-gradient(135deg,#7c3aed,#e8a020)`,padding:`14px 18px 16px`},o={display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:10},s=(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,g.jsx)(`button`,{onClick:()=>{at([]),st(0),ct(null),ut(!1),dt(0),pt(!1),ht(15),vt([]),Ie(`hub`)},style:{background:`rgba(0,0,0,0.25)`,border:`none`,borderRadius:20,padding:`4px 12px`,color:`rgba(255,255,255,0.85)`,cursor:`pointer`,fontSize:13,fontWeight:600},children:`✕ Quit`}),(0,g.jsx)(`div`,{style:{fontWeight:900,fontSize:16,color:`#fff`},children:`⚡ Speed Quiz`})]}),c={display:`flex`,alignItems:`center`,gap:8},l={background:`rgba(0,0,0,0.25)`,borderRadius:20,padding:`4px 12px`,color:`#fff`,fontSize:13,fontWeight:700},e[246]=a,e[247]=o,e[248]=s,e[249]=c,e[250]=l):(a=e[246],o=e[247],s=e[248],c=e[249],l=e[250]);let u=ot+1,d;e[251]!==t||e[252]!==u?(d=(0,g.jsxs)(`div`,{style:l,children:[u,`/`,t]}),e[251]=t,e[252]=u,e[253]=d):d=e[253];let f=mt<=4?`#e74c3c`:mt<=8?`#e8a020`:`rgba(0,0,0,0.25)`,p;e[254]===f?p=e[255]:(p={background:f,borderRadius:20,padding:`4px 12px`,color:`#fff`,fontSize:14,fontWeight:900,minWidth:44,textAlign:`center`,transition:`background 0.3s`},e[254]=f,e[255]=p);let m;e[256]!==mt||e[257]!==p?(m=(0,g.jsxs)(`div`,{style:p,children:[mt,`s`]}),e[256]=mt,e[257]=p,e[258]=m):m=e[258];let h;e[259]!==d||e[260]!==m?(h=(0,g.jsxs)(`div`,{style:o,children:[s,(0,g.jsxs)(`div`,{style:c,children:[d,m]})]}),e[259]=d,e[260]=m,e[261]=h):h=e[261];let _;e[262]===Symbol.for(`react.memo_cache_sentinel`)?(_={background:`rgba(0,0,0,0.25)`,borderRadius:999,height:6,overflow:`hidden`},e[262]=_):_=e[262];let v=`${n}%`,y;e[263]!==v||e[264]!==r?(y=(0,g.jsx)(`div`,{style:_,children:(0,g.jsx)(`div`,{style:{background:r,height:`100%`,width:v,borderRadius:999,transition:`width 1s linear, background 0.3s`}})}),e[263]=v,e[264]=r,e[265]=y):y=e[265];let b;e[266]!==h||e[267]!==y?(b=(0,g.jsxs)(`div`,{style:a,children:[h,y]}),e[266]=h,e[267]=y,e[268]=b):b=e[268];let x,S;e[269]===Symbol.for(`react.memo_cache_sentinel`)?(x={maxWidth:500,margin:`0 auto`,padding:`16px 16px`},S={display:`flex`,alignItems:`center`,gap:8,marginBottom:12},e[269]=x,e[270]=S):(x=e[269],S=e[270]);let C=(i.langColor||`#888`)+`22`,w=`1px solid ${i.langColor||`#888`}44`,T=i.langColor||`#888`,E;e[271]!==C||e[272]!==w||e[273]!==T?(E={background:C,border:w,borderRadius:8,padding:`4px 10px`,fontSize:11,color:T,fontWeight:700},e[271]=C,e[272]=w,e[273]=T,e[274]=E):E=e[274];let D;e[275]!==i.language||e[276]!==E?(D=(0,g.jsx)(`div`,{style:E,children:i.language}),e[275]=i.language,e[276]=E,e[277]=D):D=e[277];let O;e[278]===Symbol.for(`react.memo_cache_sentinel`)?(O={display:`flex`,flexDirection:`column`,gap:9,marginBottom:14},e[278]=O):O=e[278];let k=i.options.map((e,t)=>{let n=B.cardBg2,r=`1px solid ${B.border}`,a=B.text;return lt?t===i.answer?(n=I?`#0f2e1a`:`#f0fdf4`,r=`2px solid #27ae60`,a=I?`#6ee7a0`:`#166534`):t===R&&(n=I?`#2e0e0e`:`#fef2f2`,r=`2px solid #e74c3c`,a=I?`#fca5a5`:`#dc2626`):R===t&&(n=`#7c3aed22`,r=`2px solid #7c3aed`,a=I?`#c4b5fd`:`#5b21b6`),(0,g.jsxs)(`button`,{onClick:()=>{lt||ct(t)},style:{background:n,border:r,borderRadius:12,padding:`13px 14px`,textAlign:`left`,color:a,cursor:lt?`default`:`pointer`,display:`flex`,alignItems:`center`,gap:10,transition:`all 0.12s`},children:[(0,g.jsx)(`span`,{style:{width:26,height:26,borderRadius:`50%`,background:R===t&&!lt?`#7c3aed`:B.cardBg2,color:R===t&&!lt?`#fff`:B.textMuted,border:`1px solid ${B.border2}`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:12,fontWeight:700,flexShrink:0},children:String.fromCharCode(65+t)}),(0,g.jsx)(`span`,{style:{fontSize:kt(14)},children:e})]},t)}),A;return e[279]===k?A=e[280]:(A=(0,g.jsx)(`div`,{style:O,children:k}),e[279]=k,e[280]=A),(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:B.screenBg,fontFamily:`'Segoe UI',sans-serif`,color:B.text,paddingBottom:48},children:[H,b,(0,g.jsxs)(`div`,{style:x,children:[(0,g.jsxs)(`div`,{style:S,children:[D,(0,g.jsx)(`div`,{style:{fontSize:11,color:B.textFaint},children:i.topicTitle})]}),(0,g.jsx)(`div`,{style:{background:B.cardBg2,border:`1px solid ${B.border}`,borderRadius:16,padding:`16px 18px`,marginBottom:14},children:(0,g.jsx)(`p`,{style:{margin:0,color:B.text,fontSize:kt(15),lineHeight:1.75,fontWeight:500},children:i.text})}),A,lt?(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{style:{background:R===i.answer?I?`#0f2e1a`:`#f0fdf4`:I?`#2e0e0e`:`#fef2f2`,border:`2px solid ${R===i.answer?`#27ae60`:`#e74c3c`}`,borderRadius:12,padding:`12px 14px`,marginBottom:10},children:[(0,g.jsx)(`p`,{style:{margin:`0 0 4px`,fontWeight:800,fontSize:14,color:R===i.answer?`#27ae60`:`#e74c3c`},children:R===i.answer?`✅ Correct!`:`❌ Not quite — `+i.options[i.answer]+` was right`}),(0,g.jsx)(`p`,{style:{margin:0,color:B.textMuted,fontSize:12,lineHeight:1.6},children:i.hint})]}),(0,g.jsx)(`button`,{onClick:Dt,style:{width:`100%`,background:`linear-gradient(135deg,#7c3aed,#e8a020)`,border:`none`,borderRadius:12,padding:`14px`,color:`#fff`,fontWeight:700,fontSize:15,cursor:`pointer`},children:ot>=t-1?`See Results 🏆`:`Next Question → (${ot+2}/${t})`})]}):(0,g.jsx)(`button`,{onClick:()=>{R!==null&&Tt()},disabled:R===null,style:{width:`100%`,background:R===null?`#334155`:`linear-gradient(135deg,#7c3aed,#e8a020)`,border:`none`,borderRadius:12,padding:`14px`,color:R===null?`#64748b`:`#fff`,fontWeight:700,fontSize:15,cursor:R===null?`default`:`pointer`,transition:`all 0.2s`},children:`Submit Answer →`})]})]})}if(t===`home`&&!Fe){let t;e[281]===H?t=e[282]:(t=H&&(0,g.jsx)(`div`,{style:{width:`100%`,marginBottom:0},children:H}),e[281]=H,e[282]=t);let r,a,o;e[283]===Symbol.for(`react.memo_cache_sentinel`)?(r={width:`100%`,maxWidth:500,display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`16px 18px 0`},a=(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,g.jsx)(`div`,{style:{width:34,height:34,borderRadius:9,background:`linear-gradient(135deg,#e8a020,#27ae60)`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 2px 10px rgba(232,160,32,0.35)`},children:(0,g.jsx)(`span`,{style:{fontFamily:`'Courier New',monospace`,fontWeight:900,fontSize:13,color:`#000`,letterSpacing:`-1px`},children:`</>`})}),(0,g.jsx)(`span`,{style:{fontWeight:800,fontSize:17,background:`linear-gradient(90deg,#e8a020,#27ae60)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`},children:`ZamCode Academy`})]}),o=()=>Ae(O),e[283]=r,e[284]=a,e[285]=o):(r=e[283],a=e[284],o=e[285]);let s;e[286]===Symbol.for(`react.memo_cache_sentinel`)?(s={width:`100%`,maxWidth:500,padding:`14px 18px 0`},e[286]=s):s=e[286];let c=I?`linear-gradient(135deg,#1a2e1a,#0d2137)`:`linear-gradient(135deg,#1e3a5f,#134e2e)`,l;e[287]===c?l=e[288]:(l={borderRadius:20,background:c,padding:`22px 22px 20px`,position:`relative`,overflow:`hidden`},e[287]=c,e[288]=l);let u,d,f,p,m,h,y;e[289]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,g.jsx)(`div`,{style:{position:`absolute`,top:-30,right:-30,width:110,height:110,borderRadius:`50%`,background:`rgba(232,160,32,0.12)`}}),d=(0,g.jsx)(`div`,{style:{position:`absolute`,bottom:-20,right:50,width:70,height:70,borderRadius:`50%`,background:`rgba(39,174,96,0.15)`}}),f={position:`relative`},p=(0,g.jsx)(`h1`,{style:{fontSize:`clamp(22px,6vw,34px)`,fontWeight:900,margin:`0 0 4px`,color:`#fff`,letterSpacing:`-0.5px`,lineHeight:1.15},children:`Learn to Code`}),m=(0,g.jsx)(`p`,{style:{color:`rgba(255,255,255,0.6)`,fontSize:13,margin:`0 0 16px`,lineHeight:1.5},children:`Pascal · Python · C++ · SQL · HTML`}),h={display:`flex`,gap:20},y={icon:`📚`,val:x.length,label:`lessons`},e[289]=u,e[290]=d,e[291]=f,e[292]=p,e[293]=m,e[294]=h,e[295]=y):(u=e[289],d=e[290],f=e[291],p=e[292],m=e[293],h=e[294],y=e[295]);let b;e[296]===F?b=e[297]:(b=Object.keys(F),e[296]=F,e[297]=b);let S;e[298]===b.length?S=e[299]:(S={icon:`✅`,val:b.length,label:`done`},e[298]=b.length,e[299]=S);let C;e[300]===ge?C=e[301]:(C=Object.values(ge).filter(Boolean),e[300]=ge,e[301]=C);let w;e[302]===C.length?w=e[303]:(w={icon:`🏆`,val:C.length,label:`correct`},e[302]=C.length,e[303]=w);let T;e[304]!==S||e[305]!==w?(T=(0,g.jsxs)(`div`,{style:f,children:[p,m,(0,g.jsx)(`div`,{style:h,children:[y,S,w].map(D)})]}),e[304]=S,e[305]=w,e[306]=T):T=e[306];let E;e[307]!==l||e[308]!==T?(E=(0,g.jsx)(`div`,{style:s,children:(0,g.jsxs)(`div`,{style:l,children:[u,d,T]})}),e[307]=l,e[308]=T,e[309]=E):E=e[309];let ee,te;e[310]===Symbol.for(`react.memo_cache_sentinel`)?(ee={width:`100%`,maxWidth:500,padding:`12px 18px 0`},te=()=>{De(``),n(`search`)},e[310]=ee,e[311]=te):(ee=e[310],te=e[311]);let k,A;e[312]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,g.jsx)(`span`,{style:{fontSize:18},children:`🔍`}),A=(0,g.jsxs)(`span`,{style:{flex:1,textAlign:`left`},children:[`Search `,x.length,` lessons…`]}),e[312]=k,e[313]=A):(k=e[312],A=e[313]);let ne;e[314]===Symbol.for(`react.memo_cache_sentinel`)?(ne={width:`100%`,maxWidth:500,padding:`16px 18px 0`},e[314]=ne):ne=e[314];let re;e[315]===Symbol.for(`react.memo_cache_sentinel`)?(re={display:`flex`,flexDirection:`column`,gap:12},e[315]=re):re=e[315];let ie=_.map(e=>{let t=v[e],r=t.topics.filter(e=>F[e.id]).length,a=Math.round(r/t.topics.length*100),o={Pascal:`linear-gradient(135deg,#b8860b,#e8a020)`,"C++":`linear-gradient(135deg,#1565c0,#2e86de)`,Python:`linear-gradient(135deg,#1a6b3a,#27ae60)`,SQL:`linear-gradient(135deg,#8b1a1a,#e74c3c)`,HTML:`linear-gradient(135deg,#8b3a00,#e44d26)`};return(0,g.jsxs)(`button`,{onClick:()=>{i(e),n(`topics`)},style:{background:B.cardBg2,border:`1.5px solid ${t.color}33`,borderRadius:18,padding:0,cursor:`pointer`,textAlign:`left`,color:B.text,transition:`transform 0.15s, box-shadow 0.15s`,overflow:`hidden`,boxShadow:I?`0 2px 12px rgba(0,0,0,0.3)`:`0 2px 12px rgba(0,0,0,0.08)`},onMouseOver:e=>{e.currentTarget.style.transform=`translateY(-2px)`,e.currentTarget.style.boxShadow=I?`0 8px 24px rgba(0,0,0,0.4)`:`0 8px 24px rgba(0,0,0,0.14)`},onMouseOut:e=>{e.currentTarget.style.transform=`translateY(0)`,e.currentTarget.style.boxShadow=I?`0 2px 12px rgba(0,0,0,0.3)`:`0 2px 12px rgba(0,0,0,0.08)`},children:[(0,g.jsx)(`div`,{style:{height:4,background:o[e]||t.color}}),(0,g.jsxs)(`div`,{style:{padding:`16px 18px`,display:`flex`,alignItems:`center`,gap:14},children:[(0,g.jsx)(`div`,{style:{width:52,height:52,borderRadius:14,background:o[e]||t.color,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26,flexShrink:0,boxShadow:`0 4px 12px ${t.color}44`},children:t.icon}),(0,g.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:8},children:[(0,g.jsx)(`span`,{style:{fontWeight:800,fontSize:18,color:B.text},children:e}),r>0&&(0,g.jsxs)(`span`,{style:{fontSize:11,color:t.color,fontWeight:700},children:[a,`%`]})]}),(0,g.jsx)(`div`,{style:{color:B.textMuted,fontSize:12,marginTop:2,marginBottom:8},children:{Pascal:`Algorithms & logic — the foundation`,"C++":`Speed & power for serious coders`,Python:`The world's most popular language`,SQL:`Talk to databases like a pro`,HTML:`Build real websites from scratch`}[e]}),(0,g.jsx)(`div`,{style:{background:I?`rgba(255,255,255,0.07)`:`rgba(0,0,0,0.08)`,borderRadius:999,height:6,overflow:`hidden`},children:(0,g.jsx)(`div`,{style:{background:o[e]||t.color,height:`100%`,width:`${a}%`,borderRadius:999,transition:`width 0.5s`}})}),(0,g.jsxs)(`div`,{style:{fontSize:11,color:B.textFaint,marginTop:4},children:[r,`/`,t.topics.length,` lessons completed`]})]}),(0,g.jsx)(`div`,{style:{color:t.color,fontSize:22,fontWeight:300,flexShrink:0},children:`›`})]})]},e)}),j;e[316]===ie?j=e[317]:(j=(0,g.jsx)(`div`,{style:re,children:ie}),e[316]=ie,e[317]=j);let M,ae;e[318]===Symbol.for(`react.memo_cache_sentinel`)?(M={width:`100%`,maxWidth:500,padding:`16px 18px 0`},ae=()=>Ie(`hub`),e[318]=M,e[319]=ae):(M=e[318],ae=e[319]);let oe=I?`0 4px 20px rgba(0,0,0,0.4)`:`0 4px 20px rgba(0,0,0,0.12)`,se;e[320]===oe?se=e[321]:(se={width:`100%`,borderRadius:18,padding:0,cursor:`pointer`,border:`none`,overflow:`hidden`,boxShadow:oe,transition:`transform 0.15s, box-shadow 0.15s`},e[320]=oe,e[321]=se);let ce,N;e[322]===I?(ce=e[323],N=e[324]):(ce=e=>{e.currentTarget.style.transform=`translateY(-2px)`,e.currentTarget.style.boxShadow=I?`0 8px 28px rgba(0,0,0,0.5)`:`0 8px 28px rgba(0,0,0,0.18)`},N=e=>{e.currentTarget.style.transform=`translateY(0)`,e.currentTarget.style.boxShadow=I?`0 4px 20px rgba(0,0,0,0.4)`:`0 4px 20px rgba(0,0,0,0.12)`},e[322]=I,e[323]=ce,e[324]=N);let P;e[325]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,g.jsxs)(`div`,{style:{background:`linear-gradient(135deg,#4f46e5,#7c3aed)`,padding:`18px 20px`,display:`flex`,alignItems:`center`,gap:14},children:[(0,g.jsx)(`div`,{style:{width:52,height:52,borderRadius:14,background:`rgba(255,255,255,0.15)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26,flexShrink:0},children:`🎮`}),(0,g.jsxs)(`div`,{style:{flex:1,textAlign:`left`},children:[(0,g.jsx)(`div`,{style:{fontWeight:800,fontSize:17,color:`#fff`},children:`Games Zone`}),(0,g.jsx)(`div`,{style:{fontSize:12,color:`rgba(255,255,255,0.7)`,marginTop:2},children:`Bug Hunt · Match the Output · Speed Quiz`})]}),(0,g.jsx)(`div`,{style:{color:`rgba(255,255,255,0.6)`,fontSize:22},children:`›`})]}),e[325]=P):P=e[325];let le;return e[326]!==se||e[327]!==ce||e[328]!==N?(le=(0,g.jsx)(`div`,{style:M,children:(0,g.jsx)(`button`,{onClick:ae,style:se,onMouseOver:ce,onMouseOut:N,children:P})}),e[326]=se,e[327]=ce,e[328]=N,e[329]=le):le=e[329],(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:B.pageBg,fontFamily:`'Segoe UI',sans-serif`,color:B.text,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:`0 0 56px`},children:[t,(0,g.jsxs)(`div`,{style:r,children:[a,(0,g.jsxs)(`button`,{onClick:o,style:{background:B.toggleBg,border:`1px solid ${B.border2}`,borderRadius:20,padding:`6px 12px`,color:B.textMuted,cursor:`pointer`,fontSize:12,fontWeight:600,display:`flex`,alignItems:`center`,gap:5},children:[(0,g.jsx)(`span`,{children:B.toggleIcon}),(0,g.jsx)(`span`,{children:B.toggleLabel})]}),(0,g.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:3,background:B.toggleBg,border:`1px solid ${B.border2}`,borderRadius:20,padding:`4px 6px`},children:[{scale:.85,label:`A`,size:11},{scale:1,label:`A`,size:13},{scale:1.2,label:`A`,size:16}].map(e=>{let{scale:t,label:n,size:r}=e;return(0,g.jsx)(`button`,{onClick:()=>Me(t),style:{background:je===t?I?`rgba(255,255,255,0.15)`:`rgba(0,0,0,0.1)`:`transparent`,border:`none`,borderRadius:14,padding:`2px 7px`,color:je===t?B.text:B.textFaint,cursor:`pointer`,fontSize:r,fontWeight:je===t?800:500,lineHeight:1,transition:`all 0.15s`},children:n},t)})})]}),E,Ne&&(()=>{let e=x.find(e=>e.id===Ne);if(!e)return null;let t=F[Ne],n=v[e.language];return(0,g.jsx)(`div`,{style:{width:`100%`,maxWidth:500,padding:`12px 18px 0`},children:(0,g.jsxs)(`button`,{onClick:()=>Ht(e),style:{width:`100%`,background:B.cardBg2,border:`1.5px solid ${n.color}55`,borderRadius:14,padding:`12px 16px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:12,color:B.text,boxShadow:I?`none`:`0 2px 8px rgba(0,0,0,0.06)`,transition:`transform 0.15s, box-shadow 0.15s`},onMouseOver:e=>{e.currentTarget.style.transform=`translateY(-1px)`,e.currentTarget.style.boxShadow=`0 4px 14px ${n.color}33`},onMouseOut:e=>{e.currentTarget.style.transform=`translateY(0)`,e.currentTarget.style.boxShadow=I?`none`:`0 2px 8px rgba(0,0,0,0.06)`},children:[(0,g.jsx)(`div`,{style:{width:38,height:38,borderRadius:10,background:n.color+`22`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:18,flexShrink:0},children:t?`✅`:`▶️`}),(0,g.jsxs)(`div`,{style:{flex:1,textAlign:`left`,minWidth:0},children:[(0,g.jsx)(`div`,{style:{fontSize:11,fontWeight:700,color:n.color,textTransform:`uppercase`,letterSpacing:1,marginBottom:2},children:t?`Revisit last lesson`:`Continue where you left off`}),(0,g.jsxs)(`div`,{style:{fontSize:14,fontWeight:700,color:B.text,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:[e.language,` · `,e.title]})]}),(0,g.jsx)(`span`,{style:{color:n.color,fontSize:18},children:`›`})]})})})(),(0,g.jsx)(`div`,{style:ee,children:(0,g.jsxs)(`button`,{onClick:te,style:{width:`100%`,background:B.cardBg2,border:`1.5px solid ${B.border2}`,borderRadius:14,padding:`12px 16px`,color:B.textMuted,cursor:`pointer`,fontSize:14,display:`flex`,alignItems:`center`,gap:10,boxShadow:I?`none`:`0 2px 8px rgba(0,0,0,0.06)`},children:[k,A,(0,g.jsx)(`span`,{style:{fontSize:11,background:I?`rgba(255,255,255,0.07)`:`rgba(30,58,138,0.08)`,border:`1px solid ${B.border}`,borderRadius:6,padding:`2px 7px`,color:B.textFaint},children:`Search`})]})}),(0,g.jsxs)(`div`,{style:ne,children:[(0,g.jsx)(`div`,{style:{fontSize:12,fontWeight:700,textTransform:`uppercase`,letterSpacing:2,color:B.textFaint,marginBottom:12},children:`Pick a Language`}),j]}),le,(0,g.jsx)(`p`,{style:{color:B.textFaint,fontSize:11,marginTop:28,textAlign:`center`,padding:`0 16px`},children:`Built by Ndala for Zambian secondary school students and teachers`})]})}if(t===`search`){let t=Ee.toLowerCase().trim(),r=t.length<1?[]:x.filter(e=>e.title.toLowerCase().includes(t)||e.language.toLowerCase().includes(t)||e.lesson&&e.lesson.toLowerCase().includes(t)),i;e[330]===Symbol.for(`react.memo_cache_sentinel`)?(i={Pascal:`#e8a020`,"C++":`#2e86de`,Python:`#27ae60`,SQL:`#e74c3c`},e[330]=i):i=e[330];let a=i,o;e[331]===Symbol.for(`react.memo_cache_sentinel`)?(o={Pascal:`🟡`,"C++":`🔵`,Python:`🟢`,SQL:`🗄️`},e[331]=o):o=e[331];let s=o,c;e[332]===Symbol.for(`react.memo_cache_sentinel`)?(c=()=>n(`home`),e[332]=c):c=e[332];let l;e[333]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,g.jsx)(`span`,{style:{fontSize:18,flexShrink:0},children:`🔍`}),e[333]=l):l=e[333];let u;e[334]===Symbol.for(`react.memo_cache_sentinel`)?(u=e=>De(e.target.value),e[334]=u):u=e[334];let d;e[335]===Symbol.for(`react.memo_cache_sentinel`)?(d={maxWidth:600,margin:`0 auto`,padding:`16px 14px`},e[335]=d):d=e[335];let f=t.length<1&&(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{color:B.textFaint,fontSize:13,marginBottom:16},children:`Try searching for:`}),(0,g.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[`arrays`,`loops`,`functions`,`OOP`,`SELECT`,`recursion`,`files`,`sorting`,`strings`,`conditions`].map(e=>(0,g.jsx)(`button`,{onClick:()=>De(e),style:{background:B.cardBg,border:`1px solid ${B.border}`,borderRadius:20,padding:`6px 14px`,color:B.textMuted,cursor:`pointer`,fontSize:13},children:e},e))})]}),p=t.length>=1&&r.length===0&&(0,g.jsxs)(`div`,{style:{textAlign:`center`,padding:`48px 0`},children:[(0,g.jsx)(`div`,{style:{fontSize:36,marginBottom:12},children:`🔍`}),(0,g.jsxs)(`p`,{style:{color:B.textFaint,fontSize:14},children:[`No lessons found for `,(0,g.jsxs)(`strong`,{style:{color:B.textMuted},children:[`“`,Ee,`”`]})]}),(0,g.jsx)(`p`,{style:{color:B.textFaint,fontSize:12,marginTop:8},children:`Try a shorter keyword like “loop” or “class”`})]}),m=t.length>=1&&r.length>0&&(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`p`,{style:{color:B.textFaint,fontSize:12,marginBottom:12},children:[r.length,` lesson`,r.length===1?``:`s`,` found`]}),(0,g.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:9},children:r.map(e=>{let n=a[e.language],r=s[e.language],i=F[e.id],o=ge[e.id],c=e.title.toLowerCase().indexOf(t),l=c>=0?(0,g.jsxs)(g.Fragment,{children:[e.title.slice(0,c),(0,g.jsx)(`mark`,{style:{background:n+`44`,color:B.text,borderRadius:3,padding:`0 2px`},children:e.title.slice(c,c+t.length)}),e.title.slice(c+t.length)]}):e.title;return(0,g.jsxs)(`button`,{onClick:()=>Ht(e),style:{background:i?o?I?`#0f2e1a`:`#dcfce7`:I?`#2e0e0e`:`#fee2e2`:B.cardBg,border:`1.5px solid ${i?o?`#27ae60`:`#e74c3c`:n+`44`}`,borderRadius:13,padding:`13px 15px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:12,textAlign:`left`,color:B.text,width:`100%`},children:[(0,g.jsx)(`div`,{style:{width:36,height:36,borderRadius:9,background:n+`22`,border:`2px solid ${n}44`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:18,flexShrink:0},children:r}),(0,g.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,g.jsx)(`div`,{style:{fontWeight:700,fontSize:14},children:l}),(0,g.jsxs)(`div`,{style:{color:n,fontSize:11,marginTop:2,fontWeight:600},children:[e.language,` · Form `,e.form]})]}),(0,g.jsx)(`div`,{style:{fontSize:16},children:i?o?`✅`:`❌`:`›`})]},e.id)})})]}),h;return e[336]!==f||e[337]!==p||e[338]!==m?(h=(0,g.jsxs)(`div`,{style:d,children:[f,p,m]}),e[336]=f,e[337]=p,e[338]=m,e[339]=h):h=e[339],(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:B.screenBg,fontFamily:`'Segoe UI',sans-serif`,color:B.text,paddingBottom:48},children:[H,(0,g.jsxs)(`div`,{style:{background:B.cardBg2,borderBottom:`2px solid ${B.border}`,padding:`14px 16px`},children:[(0,g.jsx)(`button`,{onClick:c,style:{background:`none`,border:`none`,color:B.textMuted,cursor:`pointer`,fontSize:14,padding:0,marginBottom:12},children:`← Back`}),(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,background:B.inputBg,border:`1px solid ${B.border2}`,borderRadius:12,padding:`10px 14px`},children:[l,(0,g.jsx)(`input`,{autoFocus:!0,value:Ee,onChange:u,placeholder:`Search lessons, topics, keywords…`,style:{flex:1,background:`none`,border:`none`,outline:`none`,color:B.text,fontSize:15,fontFamily:`'Segoe UI',sans-serif`}}),Ee&&(0,g.jsx)(`button`,{onClick:()=>De(``),style:{background:`none`,border:`none`,color:B.textFaint,cursor:`pointer`,fontSize:16,padding:0,flexShrink:0},children:`✕`})]})]}),h]})}if(t===`topics`&&V){let t=V.color+`18`,i=`3px solid ${V.color}`,a;e[340]!==t||e[341]!==i?(a={background:t,borderBottom:i,padding:`18px 18px 16px`},e[340]=t,e[341]=i,e[342]=a):a=e[342];let o;e[343]===Symbol.for(`react.memo_cache_sentinel`)?(o=()=>n(`home`),e[343]=o):o=e[343];let s;e[344]===V.color?s=e[345]:(s=(0,g.jsx)(`button`,{onClick:o,style:{background:`none`,border:`none`,color:V.color,cursor:`pointer`,fontSize:14,padding:0,marginBottom:10},children:`← Back`}),e[344]=V.color,e[345]=s);let c,l,u;e[346]===Symbol.for(`react.memo_cache_sentinel`)?(c={display:`flex`,alignItems:`center`,justifyContent:`space-between`},l={display:`flex`,alignItems:`center`,gap:12},u={fontSize:34},e[346]=c,e[347]=l,e[348]=u):(c=e[346],l=e[347],u=e[348]);let d;e[349]===V.icon?d=e[350]:(d=(0,g.jsx)(`div`,{style:u,children:V.icon}),e[349]=V.icon,e[350]=d);let f;e[351]===V.color?f=e[352]:(f={margin:0,fontSize:26,fontWeight:800,color:V.color},e[351]=V.color,e[352]=f);let p;e[353]!==r||e[354]!==f?(p=(0,g.jsx)(`h2`,{style:f,children:r}),e[353]=r,e[354]=f,e[355]=p):p=e[355];let m;e[356]===Symbol.for(`react.memo_cache_sentinel`)?(m={display:`flex`,gap:8,alignItems:`center`},e[356]=m):m=e[356];let h;e[357]===Symbol.for(`react.memo_cache_sentinel`)?(h=()=>{De(``),n(`search`)},e[357]=h):h=e[357];let _;return e[358]===Symbol.for(`react.memo_cache_sentinel`)?(_={padding:`18px 14px`,display:`flex`,flexDirection:`column`,gap:10,maxWidth:600,margin:`0 auto`},e[358]=_):_=e[358],(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:B.screenBg,fontFamily:`'Segoe UI',sans-serif`,color:B.text,paddingBottom:48},children:[H,(0,g.jsxs)(`div`,{style:a,children:[s,(0,g.jsxs)(`div`,{style:c,children:[(0,g.jsxs)(`div`,{style:l,children:[d,(0,g.jsxs)(`div`,{children:[p,(0,g.jsxs)(`p`,{style:{margin:0,color:B.textFaint,fontSize:13},children:[Bt.length,` lessons available`]})]})]}),(0,g.jsxs)(`div`,{style:m,children:[Bt.some(e=>F[e.id])&&(It?(0,g.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,g.jsxs)(`span`,{style:{fontSize:12,color:`#e74c3c`,fontWeight:600},children:[`Reset `,r,`?`]}),(0,g.jsx)(`button`,{onClick:()=>zt(r),style:{background:`#e74c3c`,border:`none`,borderRadius:8,padding:`6px 11px`,color:`#fff`,fontSize:12,cursor:`pointer`,fontWeight:700},children:`Yes`}),(0,g.jsx)(`button`,{onClick:()=>Lt(!1),style:{background:`none`,border:`1px solid ${B.border2}`,borderRadius:8,padding:`6px 11px`,color:B.textFaint,fontSize:12,cursor:`pointer`},children:`No`})]}):(0,g.jsx)(`button`,{onClick:()=>Lt(!0),style:{background:`#e74c3c22`,border:`1px solid #e74c3c88`,borderRadius:8,padding:`6px 11px`,color:`#e74c3c`,cursor:`pointer`,fontSize:12,fontWeight:600},children:`↺ Reset`})),(0,g.jsx)(`button`,{onClick:h,style:{background:B.toggleBg,border:`1px solid ${B.border2}`,borderRadius:10,padding:`8px 12px`,color:B.textMuted,cursor:`pointer`,fontSize:14},children:`🔍`})]})]})]}),(0,g.jsx)(`div`,{style:_,children:Bt.map((e,t)=>{let n=F[e.id],r=ge[e.id];return(0,g.jsxs)(`button`,{onClick:()=>Ht(e),style:{background:n?r?I?`#0f2e1a`:`#dcfce7`:I?`#2e0e0e`:`#fee2e2`:B.cardBg,border:`1.5px solid ${n?r?`#27ae60`:`#e74c3c`:V.color+`33`}`,borderRadius:13,padding:`14px 16px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:12,textAlign:`left`,color:B.text,width:`100%`,transition:`all 0.15s`},children:[(0,g.jsx)(`div`,{style:{width:38,height:38,borderRadius:9,background:V.color+`22`,border:`2px solid ${V.color}44`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:800,fontSize:15,color:V.color,flexShrink:0},children:t+1}),(0,g.jsxs)(`div`,{style:{flex:1},children:[(0,g.jsx)(`div`,{style:{fontWeight:700,fontSize:kt(15)},children:e.title}),e.ecz&&(0,g.jsxs)(`div`,{style:{marginTop:4,display:`inline-flex`,alignItems:`center`,gap:4,background:`#e8a02022`,border:`1px solid #e8a02055`,borderRadius:6,padding:`2px 8px`},children:[(0,g.jsx)(`span`,{style:{fontSize:11},children:`💡`}),(0,g.jsx)(`span`,{style:{fontSize:11,color:`#e8a020`,fontWeight:700},children:`ECZ Exam`})]})]}),(0,g.jsx)(`div`,{style:{fontSize:17},children:n?r?`✅`:`❌`:`›`})]},e.id)})})]})}if(t===`lesson`&&a){let t=a,r=v[t.language],i=r.color+`18`,o=`3px solid ${r.color}`,l;e[359]!==i||e[360]!==o?(l={background:i,borderBottom:o,padding:`13px 14px`},e[359]=i,e[360]=o,e[361]=l):l=e[361];let h,_;e[362]===Symbol.for(`react.memo_cache_sentinel`)?(h={display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:8},_=()=>n(`topics`),e[362]=h,e[363]=_):(h=e[362],_=e[363]);let y;e[364]===r.color?y=e[365]:(y={background:`none`,border:`none`,color:r.color,cursor:`pointer`,fontSize:14,padding:0},e[364]=r.color,e[365]=y);let b;e[366]!==y||e[367]!==t.language?(b=(0,g.jsxs)(`button`,{onClick:_,style:y,children:[`← `,t.language,` Lessons`]}),e[366]=y,e[367]=t.language,e[368]=b):b=e[368];let D,O;e[369]===Symbol.for(`react.memo_cache_sentinel`)?(D={display:`flex`,alignItems:`center`,gap:3,background:`rgba(0,0,0,0.12)`,borderRadius:20,padding:`3px 5px`},O=[{scale:.85,size:11},{scale:1,size:13},{scale:1.2,size:16}],e[369]=D,e[370]=O):(D=e[369],O=e[370]);let ee;e[371]===je?ee=e[372]:(ee=(0,g.jsx)(`div`,{style:D,children:O.map(e=>{let{scale:t,size:n}=e;return(0,g.jsx)(`button`,{onClick:()=>Me(t),style:{background:je===t?`rgba(255,255,255,0.25)`:`transparent`,border:`none`,borderRadius:14,padding:`2px 7px`,color:je===t?`#fff`:`rgba(255,255,255,0.5)`,cursor:`pointer`,fontSize:n,fontWeight:je===t?800:500,lineHeight:1},children:`A`},t)})}),e[371]=je,e[372]=ee);let te;e[373]!==b||e[374]!==ee?(te=(0,g.jsxs)(`div`,{style:h,children:[b,ee]}),e[373]=b,e[374]=ee,e[375]=te):te=e[375];let k,A;e[376]===Symbol.for(`react.memo_cache_sentinel`)?(k={display:`flex`,alignItems:`center`,gap:10,marginBottom:12},A={fontSize:20},e[376]=k,e[377]=A):(k=e[376],A=e[377]);let ne;e[378]===r.icon?ne=e[379]:(ne=(0,g.jsx)(`span`,{style:A,children:r.icon}),e[378]=r.icon,e[379]=ne);let re;e[380]===Symbol.for(`react.memo_cache_sentinel`)?(re={display:`flex`,gap:7,flexWrap:`wrap`},e[380]=re):re=e[380];let ie;e[381]===Symbol.for(`react.memo_cache_sentinel`)?(ie={maxWidth:600,margin:`0 auto`,padding:`18px 14px`},e[381]=ie):ie=e[381];let j=be===`lesson`&&(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{style:{background:B.cardBg,border:`1px solid ${B.border}`,borderRadius:14,padding:18},children:[(0,g.jsx)(`h3`,{style:{color:r.color,margin:`0 0 12px`,fontSize:15},children:`📖 Theory`}),(0,g.jsx)(`p`,{style:{color:B.textCode,lineHeight:1.8,margin:0,whiteSpace:`pre-line`,fontSize:kt(14)},children:t.lesson})]}),(0,g.jsx)(`button`,{onClick:()=>xe(`code`),style:{marginTop:14,background:r.color,color:`#000`,border:`none`,borderRadius:10,padding:`12px 22px`,fontWeight:700,fontSize:14,cursor:`pointer`,width:`100%`},children:`See the Code Example →`}),t.ecz&&(0,g.jsxs)(`div`,{style:{marginTop:12,background:I?`#1c1408`:`#fffbeb`,border:`1px solid #e8a02055`,borderRadius:14,padding:`14px 16px`,display:`flex`,gap:10},children:[(0,g.jsx)(`span`,{style:{fontSize:20,flexShrink:0},children:`💡`}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`div`,{style:{color:`#e8a020`,fontWeight:700,fontSize:12,textTransform:`uppercase`,letterSpacing:1,marginBottom:5},children:`ECZ Exam Tip`}),(0,g.jsx)(`p`,{style:{margin:0,color:I?`#fcd34d`:`#92400e`,fontSize:kt(13),lineHeight:1.75},children:t.ecz})]})]})]}),M=be===`code`&&(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{style:{background:B.codeBg,border:`1px solid ${r.color}33`,borderRadius:14,overflow:`hidden`},children:[(0,g.jsxs)(`div`,{style:{background:r.color+`22`,padding:`9px 14px`,display:`flex`,alignItems:`center`,gap:7},children:[(0,g.jsx)(`div`,{style:{display:`flex`,gap:5},children:[`#e74c3c`,`#f39c12`,`#27ae60`].map(E)}),(0,g.jsx)(`span`,{style:{color:r.color,fontSize:12,fontWeight:600,marginLeft:4},children:t.language===`Pascal`?`program.pas`:t.language===`C++`?`main.cpp`:t.language===`HTML`?`index.html`:`script.py`})]}),(0,g.jsx)(`pre`,{style:{margin:0,padding:18,overflowX:`auto`,fontSize:kt(12),lineHeight:1.7,color:`#e0f2fe`,fontFamily:`'Courier New',monospace`},children:t.code})]}),(0,g.jsx)(`div`,{style:{background:r.color+`11`,border:`1px solid ${r.color}33`,borderRadius:12,padding:14,marginTop:12},children:(0,g.jsxs)(`p`,{style:{margin:0,color:B.textCode,fontSize:kt(13),lineHeight:1.7},children:[(0,g.jsx)(`strong`,{style:{color:r.color},children:`💡 Explanation:`}),` `,t.explanation]})}),(0,g.jsx)(`button`,{onClick:()=>xe(t.language===`HTML`?`preview`:`trace`),style:{marginTop:14,background:r.color,color:`#000`,border:`none`,borderRadius:10,padding:`12px 22px`,fontWeight:700,fontSize:14,cursor:`pointer`,width:`100%`},children:t.language===`HTML`?`👁️ See Preview →`:`🔍 Step Through →`})]}),ae=be===`preview`&&(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,g.jsxs)(`div`,{style:{background:B.cardBg,border:`1px solid ${r.color}33`,borderRadius:12,padding:`12px 16px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,g.jsx)(`span`,{style:{color:r.color,fontWeight:700,fontSize:13},children:`👁️ Live Preview`}),(0,g.jsx)(`span`,{style:{color:B.textFaint,fontSize:12},children:`Your HTML rendered in the browser`})]}),(0,g.jsxs)(`div`,{style:{background:`#ffffff`,borderRadius:12,overflow:`hidden`,border:`2px solid ${r.color}55`,minHeight:320},children:[(0,g.jsxs)(`div`,{style:{background:`#f1f5f9`,borderBottom:`1px solid #e2e8f0`,padding:`8px 12px`,display:`flex`,alignItems:`center`,gap:8},children:[(0,g.jsx)(`div`,{style:{display:`flex`,gap:5},children:[`#e74c3c`,`#f39c12`,`#27ae60`].map(T)}),(0,g.jsx)(`span`,{style:{color:`#64748b`,fontSize:11,fontFamily:`'Courier New',monospace`},children:`preview.html`})]}),(0,g.jsx)(`iframe`,{srcDoc:t.code,sandbox:`allow-same-origin`,style:{width:`100%`,border:`none`,display:`block`,minHeight:300,background:`#fff`},title:`Preview: ${t.title}`},t.id)]}),(0,g.jsx)(`div`,{style:{background:r.color+`11`,border:`1px solid ${r.color}33`,borderRadius:12,padding:`12px 16px`},children:(0,g.jsxs)(`p`,{style:{margin:0,color:B.textCode,fontSize:kt(13),lineHeight:1.7},children:[(0,g.jsx)(`strong`,{style:{color:r.color},children:`💡 Explanation:`}),` `,t.explanation]})}),(0,g.jsx)(`button`,{onClick:()=>xe(`quiz`),style:{background:r.color,color:`#000`,border:`none`,borderRadius:10,padding:`12px 22px`,fontWeight:700,fontSize:14,cursor:`pointer`,width:`100%`},children:`Try the Quiz →`})]}),oe;e[382]!==r.color||e[383]!==be||e[384]!==t.code||e[385]!==t.trace||e[386]!==Se?(oe=be===`trace`&&(()=>{let e=t.trace;if(!e||e.length===0)return(0,g.jsxs)(`div`,{style:{background:`rgba(255,255,255,0.04)`,border:`1px solid rgba(255,255,255,0.08)`,borderRadius:14,padding:24,textAlign:`center`},children:[(0,g.jsx)(`div`,{style:{fontSize:32,marginBottom:8},children:`🔍`}),(0,g.jsx)(`p`,{style:{color:`#64748b`,margin:0},children:`No trace available for this topic yet.`})]});let n=e[Se],i=Se===0,a=Se===e.length-1,o=Math.round((Se+1)/e.length*100);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,g.jsxs)(`div`,{style:{background:`rgba(255,255,255,0.04)`,border:`1px solid ${r.color}33`,borderRadius:12,padding:`12px 16px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,g.jsx)(`span`,{style:{color:r.color,fontWeight:700,fontSize:13},children:`🔍 Step-through Trace`}),(0,g.jsxs)(`span`,{style:{color:`#64748b`,fontSize:12},children:[`Step `,Se+1,` of `,e.length]})]}),(0,g.jsx)(`div`,{style:{background:`#1e293b`,borderRadius:999,height:6,overflow:`hidden`},children:(0,g.jsx)(`div`,{style:{background:r.color,height:`100%`,width:`${o}%`,borderRadius:999,transition:`width 0.3s ease`}})}),(0,g.jsxs)(`div`,{style:{background:`#0a0f16`,border:`1px solid ${r.color}33`,borderRadius:12,overflow:`hidden`},children:[(0,g.jsxs)(`div`,{style:{background:r.color+`22`,padding:`8px 14px`,display:`flex`,alignItems:`center`,gap:7},children:[(0,g.jsx)(`div`,{style:{display:`flex`,gap:5},children:[`#e74c3c`,`#f39c12`,`#27ae60`].map(w)}),(0,g.jsxs)(`span`,{style:{color:r.color,fontSize:12,fontWeight:600,marginLeft:4},children:[`Executing line `,n.line]})]}),(0,g.jsx)(`div`,{style:{padding:`12px 0`,fontFamily:`'Courier New',monospace`,fontSize:12.5,lineHeight:1.8},children:t.code.split(`
`).map((e,t)=>{let i=t+1,a=i===n.line;return(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`stretch`,background:a?r.color+`28`:`transparent`,borderLeft:a?`3px solid ${r.color}`:`3px solid transparent`,transition:`all 0.25s`},children:[(0,g.jsx)(`span`,{style:{color:a?r.color:`#334155`,width:36,textAlign:`right`,paddingRight:12,userSelect:`none`,fontSize:11,display:`flex`,alignItems:`center`,justifyContent:`flex-end`,flexShrink:0},children:i}),(0,g.jsx)(`span`,{style:{color:a?`#fff`:`#94a3b8`,paddingLeft:4,paddingRight:16,whiteSpace:`pre`},children:e})]},t)})})]}),(0,g.jsxs)(`div`,{style:{background:`rgba(255,255,255,0.04)`,border:`2px solid ${r.color}55`,borderRadius:12,padding:`14px 16px`},children:[(0,g.jsx)(`div`,{style:{color:r.color,fontWeight:700,fontSize:12,textTransform:`uppercase`,letterSpacing:1,marginBottom:8},children:`💬 What's happening`}),(0,g.jsx)(`p`,{style:{margin:0,color:`#e2e8f0`,fontSize:14,lineHeight:1.75},children:n.explanation})]}),n.vars&&Object.keys(n.vars).length>0&&(0,g.jsxs)(`div`,{style:{background:`#0d1f35`,border:`1px solid ${r.color}33`,borderRadius:12,padding:`12px 16px`},children:[(0,g.jsx)(`div`,{style:{color:r.color,fontWeight:700,fontSize:12,textTransform:`uppercase`,letterSpacing:1,marginBottom:10},children:`📦 Variables in memory`}),(0,g.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:Object.entries(n.vars).map(e=>{let[t,n]=e;return(0,g.jsxs)(`div`,{style:{background:`#162032`,border:`1px solid ${r.color}44`,borderRadius:8,padding:`6px 12px`,fontFamily:`'Courier New',monospace`},children:[(0,g.jsxs)(`span`,{style:{color:`#94a3b8`,fontSize:12},children:[t,` `]}),(0,g.jsx)(`span`,{style:{color:`#64748b`,fontSize:12},children:`= `}),(0,g.jsx)(`span`,{style:{color:r.color,fontWeight:700,fontSize:13},children:JSON.stringify(n)})]},t)})})]}),n.output!==void 0&&n.output!==null&&(0,g.jsxs)(`div`,{style:{background:`#020a0a`,border:`1px solid #27ae6044`,borderRadius:10,padding:`10px 14px`},children:[(0,g.jsx)(`div`,{style:{color:`#27ae60`,fontSize:11,fontWeight:700,textTransform:`uppercase`,letterSpacing:1,marginBottom:6},children:`▶ Output so far`}),(0,g.jsx)(`pre`,{style:{margin:0,color:`#6ee7a0`,fontFamily:`'Courier New',monospace`,fontSize:13,lineHeight:1.6},children:n.output})]}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:9,marginTop:4},children:[(0,g.jsx)(`button`,{onClick:()=>Ce(0),disabled:i,style:{background:i?`#0d1b2a`:`rgba(255,255,255,0.06)`,border:`1px solid ${i?`#1e293b`:`rgba(255,255,255,0.1)`}`,borderRadius:10,padding:`11px 14px`,color:i?`#334155`:`#94a3b8`,cursor:i?`default`:`pointer`,fontSize:18},children:`⏮`}),(0,g.jsx)(`button`,{onClick:()=>Ce(C),disabled:i,style:{background:i?`#0d1b2a`:`rgba(255,255,255,0.06)`,border:`1px solid ${i?`#1e293b`:`rgba(255,255,255,0.1)`}`,borderRadius:10,padding:`11px 18px`,color:i?`#334155`:`#94a3b8`,cursor:i?`default`:`pointer`,fontWeight:600,fontSize:13,flex:1},children:`← Prev`}),(0,g.jsx)(`button`,{onClick:()=>Ce(t=>Math.min(e.length-1,t+1)),disabled:a,style:{background:a?`#0d1b2a`:r.color,border:`none`,borderRadius:10,padding:`11px 18px`,color:a?`#334155`:`#000`,cursor:a?`default`:`pointer`,fontWeight:700,fontSize:13,flex:1},children:`Next →`}),(0,g.jsx)(`button`,{onClick:()=>Ce(e.length-1),disabled:a,style:{background:a?`#0d1b2a`:`rgba(255,255,255,0.06)`,border:`1px solid ${a?`#1e293b`:`rgba(255,255,255,0.1)`}`,borderRadius:10,padding:`11px 14px`,color:a?`#334155`:`#94a3b8`,cursor:a?`default`:`pointer`,fontSize:18},children:`⏭`})]}),a&&(0,g.jsx)(`button`,{onClick:()=>xe(`quiz`),style:{background:r.color,color:`#000`,border:`none`,borderRadius:10,padding:`12px 22px`,fontWeight:700,fontSize:14,cursor:`pointer`,width:`100%`},children:`Try the Quiz →`})]})})(),e[382]=r.color,e[383]=be,e[384]=t.code,e[385]=t.trace,e[386]=Se,e[387]=oe):oe=e[387];let se=be===`worked`&&(()=>{let e=t.worked;return e?(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,g.jsxs)(`div`,{style:{background:B.cardBg,border:`1px solid ${r.color}33`,borderRadius:12,padding:`13px 16px`},children:[(0,g.jsx)(`div`,{style:{color:r.color,fontWeight:700,fontSize:13,textTransform:`uppercase`,letterSpacing:1,marginBottom:6},children:`✏️ Worked Example`}),(0,g.jsx)(`p`,{style:{margin:0,color:B.text,fontSize:14,lineHeight:1.75},children:e.scenario})]}),(0,g.jsxs)(`div`,{style:{background:I?`#1a2535`:`#eff6ff`,border:`1px solid ${r.color}44`,borderRadius:12,padding:`13px 16px`},children:[(0,g.jsx)(`div`,{style:{color:r.color,fontWeight:700,fontSize:12,textTransform:`uppercase`,letterSpacing:1,marginBottom:8},children:`❓ Problem`}),(0,g.jsx)(`p`,{style:{margin:0,color:B.text,fontSize:14,lineHeight:1.75,fontWeight:500},children:e.problem})]}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,g.jsx)(`div`,{style:{color:r.color,fontWeight:700,fontSize:12,textTransform:`uppercase`,letterSpacing:1},children:`🧩 Solution — Step by Step`}),e.steps.map((e,t)=>(0,g.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`flex-start`},children:[(0,g.jsx)(`div`,{style:{width:28,height:28,borderRadius:`50%`,background:r.color,color:`#000`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:800,fontSize:13,flexShrink:0},children:t+1}),(0,g.jsxs)(`div`,{style:{flex:1,background:B.cardBg,border:`1px solid ${B.border}`,borderRadius:10,padding:`10px 13px`},children:[(0,g.jsx)(`p`,{style:{margin:`0 0 6px`,color:B.text,fontSize:13.5,lineHeight:1.7},children:e.explain}),e.code&&(0,g.jsx)(`pre`,{style:{margin:0,background:B.codeBg,borderRadius:8,padding:`10px 12px`,color:`#a5f3fc`,fontFamily:`'Courier New',monospace`,fontSize:12.5,lineHeight:1.6,overflowX:`auto`},children:e.code})]})]},t))]}),(0,g.jsxs)(`div`,{style:{background:I?`#0f2e1a`:`#f0fdf4`,border:`2px solid #27ae60`,borderRadius:12,padding:`13px 16px`},children:[(0,g.jsx)(`div`,{style:{color:`#27ae60`,fontWeight:700,fontSize:12,textTransform:`uppercase`,letterSpacing:1,marginBottom:8},children:`✅ Answer`}),(0,g.jsx)(`p`,{style:{margin:`0 0 10px`,color:I?`#bbf7d0`:`#166534`,fontSize:14,lineHeight:1.75},children:e.answer}),e.answerCode&&(0,g.jsx)(`pre`,{style:{margin:0,background:B.codeBg,borderRadius:8,padding:`10px 12px`,color:`#6ee7a0`,fontFamily:`'Courier New',monospace`,fontSize:12.5,lineHeight:1.6,overflowX:`auto`},children:e.answerCode})]}),(0,g.jsxs)(`div`,{style:{background:I?`#1a1230`:`#f5f3ff`,border:`1px solid #7c3aed55`,borderRadius:12,padding:`13px 16px`,display:`flex`,gap:10},children:[(0,g.jsx)(`span`,{style:{fontSize:18,flexShrink:0},children:`💡`}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`div`,{style:{color:`#7c3aed`,fontWeight:700,fontSize:12,textTransform:`uppercase`,letterSpacing:1,marginBottom:5},children:`Key Insight`}),(0,g.jsx)(`p`,{style:{margin:0,color:I?`#ddd6fe`:`#4c1d95`,fontSize:13.5,lineHeight:1.75},children:e.insight})]})]}),(0,g.jsx)(`button`,{onClick:()=>xe(`quiz`),style:{background:r.color,color:`#000`,border:`none`,borderRadius:10,padding:`12px 22px`,fontWeight:700,fontSize:14,cursor:`pointer`,width:`100%`},children:`Now Try the Quiz →`})]}):(0,g.jsxs)(`div`,{style:{background:B.cardBg,border:`1px solid ${B.border}`,borderRadius:14,padding:24,textAlign:`center`},children:[(0,g.jsx)(`div`,{style:{fontSize:32,marginBottom:8},children:`✏️`}),(0,g.jsx)(`p`,{style:{color:B.textFaint,margin:0},children:`No worked example for this topic yet.`})]})})(),ce=be===`quiz`&&(()=>{let e=Wt(t);if(de){let r=m===e.length,i=m>=Math.ceil(e.length/2),a=x.findIndex(e=>e.id===t.id),o=a>=0&&a<x.length-1?x[a+1]:null;return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,g.jsxs)(`div`,{style:{background:r?I?`#0f2e1a`:`#f0fdf4`:i?I?`#1a2010`:`#f7fee7`:I?`#2e0e0e`:`#fef2f2`,border:`2px solid ${r?`#27ae60`:i?`#86efac`:`#e74c3c`}`,borderRadius:16,padding:`24px 20px`,textAlign:`center`},children:[(0,g.jsx)(`div`,{style:{fontSize:48,marginBottom:8},children:r?`🏆`:i?`🎉`:`📚`}),(0,g.jsxs)(`div`,{style:{fontSize:28,fontWeight:900,color:r?`#27ae60`:i?`#4ade80`:`#e74c3c`,marginBottom:4},children:[m,`/`,e.length]}),(0,g.jsx)(`div`,{style:{fontSize:15,color:r?`#27ae60`:i?I?`#86efac`:`#16a34a`:I?`#fca5a5`:`#dc2626`,fontWeight:700,marginBottom:14},children:r?`Perfect score! Outstanding!`:i?`Good work — keep it up!`:`Review the lesson and try again!`}),(0,g.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:8,marginBottom:14},children:e.map((e,t)=>(0,g.jsx)(`div`,{style:{width:14,height:14,borderRadius:`50%`,background:t<m?`#27ae60`:I?`#334155`:`#cbd5e1`}},t))}),(0,g.jsx)(`div`,{style:{display:`flex`,gap:8,justifyContent:`center`,flexWrap:`wrap`},children:(0,g.jsx)(`span`,{style:{fontSize:12,color:`#27ae60`,background:I?`#0f2e1a`:`#f0fdf4`,border:`1px solid #27ae6044`,borderRadius:6,padding:`4px 10px`},children:`✓ Progress saved`})})]}),o&&i&&(0,g.jsxs)(`button`,{onClick:()=>Ht(o),style:{background:`linear-gradient(135deg, ${v[o.language].color}, ${v[o.language].color}cc)`,border:`none`,borderRadius:12,padding:`15px 18px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:12,textAlign:`left`,width:`100%`},children:[(0,g.jsx)(`div`,{style:{width:40,height:40,borderRadius:10,background:`rgba(0,0,0,0.2)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:20,flexShrink:0},children:v[o.language].icon}),(0,g.jsxs)(`div`,{style:{flex:1},children:[(0,g.jsx)(`div`,{style:{color:`rgba(0,0,0,0.6)`,fontSize:11,fontWeight:700,textTransform:`uppercase`,letterSpacing:1},children:`Next Lesson`}),(0,g.jsx)(`div`,{style:{color:`#000`,fontWeight:800,fontSize:15,marginTop:2},children:o.title}),(0,g.jsx)(`div`,{style:{color:`rgba(0,0,0,0.5)`,fontSize:11,marginTop:1},children:o.language})]}),(0,g.jsx)(`div`,{style:{color:`rgba(0,0,0,0.5)`,fontSize:22,fontWeight:700},children:`→`})]}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:9},children:[(0,g.jsx)(`button`,{onClick:()=>{p(0),S(0),fe(!1),c(null),d(!1),ye(!1)},style:{flex:1,background:B.cardBg,border:`1px solid ${B.border2}`,borderRadius:10,padding:`11px`,color:B.text,fontWeight:600,fontSize:13,cursor:`pointer`},children:`🔁 Retry`}),(0,g.jsx)(`button`,{onClick:()=>n(`topics`),style:{flex:1,background:B.cardBg,border:`1px solid ${B.border2}`,borderRadius:10,padding:`11px`,color:B.text,fontWeight:700,fontSize:13,cursor:`pointer`},children:`← Lessons`})]})]})}let i=e[f],a=f===0?{label:`Starter`,color:`#27ae60`}:f===1?{label:`Core`,color:`#e8a020`}:{label:`Challenge`,color:`#e74c3c`};return(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:14},children:[(0,g.jsx)(`div`,{style:{flex:1,background:I?`#1e293b`:`#dbeafe`,borderRadius:999,height:6,overflow:`hidden`},children:(0,g.jsx)(`div`,{style:{background:r.color,height:`100%`,width:`${f/e.length*100}%`,borderRadius:999,transition:`width 0.4s`}})}),(0,g.jsxs)(`span`,{style:{fontSize:12,color:B.textFaint,whiteSpace:`nowrap`},children:[`Q`,f+1,`/`,e.length]}),(0,g.jsx)(`span`,{style:{fontSize:11,color:a.color,background:a.color+`22`,border:`1px solid ${a.color}44`,borderRadius:6,padding:`2px 8px`,fontWeight:700},children:a.label})]}),(0,g.jsx)(`div`,{style:{background:B.cardBg,border:`1px solid ${B.border}`,borderRadius:14,padding:18,marginBottom:12},children:(0,g.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(0,g.jsx)(`span`,{style:{fontSize:20},children:`🇿🇲`}),(0,g.jsx)(`p`,{style:{margin:0,color:B.text,fontSize:14.5,lineHeight:1.7,fontWeight:500},children:i.text})]})}),(0,g.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:9},children:i.options.map((e,t)=>{let n=B.cardBg,a=`1px solid ${B.border}`,o=B.text;return u?t===i.answer?(n=I?`#0f2e1a`:`#f0fdf4`,a=`2px solid #27ae60`,o=I?`#6ee7a0`:`#166534`):t===s&&(n=I?`#2e0e0e`:`#fef2f2`,a=`2px solid #e74c3c`,o=I?`#fca5a5`:`#dc2626`):s===t&&(n=r.color+`22`,a=`2px solid ${r.color}`),(0,g.jsxs)(`button`,{onClick:()=>!u&&c(t),style:{background:n,border:a,borderRadius:10,padding:`12px 14px`,textAlign:`left`,color:o,cursor:u?`default`:`pointer`,fontSize:13.5,fontWeight:500,transition:`all 0.15s`,display:`flex`,alignItems:`center`,gap:9},children:[(0,g.jsx)(`span`,{style:{width:25,height:25,borderRadius:`50%`,background:s===t&&!u?r.color:B.cardBg,color:s===t&&!u?`#000`:B.textMuted,border:`1px solid ${B.border2}`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:11,fontWeight:700,flexShrink:0},children:String.fromCharCode(65+t)}),e]},t)})}),!u&&(0,g.jsxs)(`div`,{style:{marginTop:14,display:`flex`,gap:9},children:[(0,g.jsxs)(`button`,{onClick:()=>ye(!ve),style:{background:B.cardBg,border:`1px solid ${B.border}`,borderRadius:10,padding:`10px 16px`,color:B.textMuted,cursor:`pointer`,fontSize:13},children:[`💡 `,ve?`Hide`:`Hint`]}),(0,g.jsx)(`button`,{onClick:Kt,disabled:s===null,style:{flex:1,background:s===null?I?`#1e293b`:`#dbeafe`:r.color,border:`none`,borderRadius:10,padding:`11px 18px`,color:s===null?B.textFaint:`#000`,fontWeight:700,fontSize:14,cursor:s===null?`default`:`pointer`,transition:`all 0.2s`},children:`Submit Answer`})]}),ve&&!u&&(0,g.jsx)(`div`,{style:{marginTop:10,background:I?`#1e2d40`:`#eff6ff`,border:`1px solid #2563eb55`,borderRadius:10,padding:`11px 14px`},children:(0,g.jsxs)(`p`,{style:{margin:0,color:I?`#93c5fd`:`#1d4ed8`,fontSize:13},children:[`💡 `,(0,g.jsx)(`strong`,{children:`Hint:`}),` `,i.hint]})}),u&&(0,g.jsxs)(`div`,{style:{marginTop:12,background:s===i.answer?I?`#0f2e1a`:`#f0fdf4`:I?`#2e0e0e`:`#fef2f2`,border:`2px solid ${s===i.answer?`#27ae60`:`#e74c3c`}`,borderRadius:12,padding:14},children:[(0,g.jsx)(`p`,{style:{margin:`0 0 8px`,color:s===i.answer?`#27ae60`:`#e74c3c`,fontWeight:700,fontSize:14},children:s===i.answer?`✅ Correct!`:`❌ Not quite.`}),(0,g.jsxs)(`p`,{style:{margin:`0 0 12px`,color:B.text,fontSize:13,lineHeight:1.6},children:[(0,g.jsx)(`strong`,{children:`Explanation:`}),` `,i.hint]}),f<e.length-1?(0,g.jsx)(`button`,{onClick:Jt,style:{background:r.color,color:`#000`,border:`none`,borderRadius:10,padding:`10px 18px`,fontWeight:700,fontSize:13,cursor:`pointer`,width:`100%`},children:`Next Question →`}):(0,g.jsx)(`button`,{onClick:()=>fe(!0),style:{background:r.color,color:`#000`,border:`none`,borderRadius:10,padding:`10px 18px`,fontWeight:700,fontSize:13,cursor:`pointer`,width:`100%`},children:`See Results →`})]})]})})(),N;return e[388]!==j||e[389]!==M||e[390]!==ae||e[391]!==oe||e[392]!==se||e[393]!==ce?(N=(0,g.jsxs)(`div`,{style:ie,children:[j,M,ae,oe,se,ce]}),e[388]=j,e[389]=M,e[390]=ae,e[391]=oe,e[392]=se,e[393]=ce,e[394]=N):N=e[394],(0,g.jsxs)(`div`,{style:{minHeight:`100vh`,background:B.screenBg,fontFamily:`'Segoe UI',sans-serif`,color:B.text,paddingBottom:48},children:[H,(0,g.jsxs)(`div`,{style:l,children:[te,(0,g.jsxs)(`div`,{style:k,children:[ne,(0,g.jsx)(`div`,{children:(0,g.jsx)(`h2`,{style:{margin:0,fontSize:18,fontWeight:800,color:B.text},children:t.title})})]}),(0,g.jsx)(`div`,{style:re,children:(t.language===`HTML`?[[`lesson`,`📖 Lesson`],[`code`,`💻 Code`],[`preview`,`👁️ Preview`],[`worked`,`✏️ Example`],[`quiz`,`🎯 Quiz`]]:[[`lesson`,`📖 Lesson`],[`code`,`💻 Code`],[`trace`,`🔍 Trace`],[`worked`,`✏️ Example`],[`quiz`,`🎯 Quiz`]]).map(e=>{let[t,n]=e;return(0,g.jsx)(`button`,{onClick:()=>xe(t),style:{background:be===t?r.color:B.cardBg,color:be===t?`#000`:B.textMuted,border:`none`,borderRadius:8,padding:`9px 13px`,fontSize:13,fontWeight:600,cursor:`pointer`,transition:`all 0.15s`},children:n},t)})})]}),N]})}return null}function C(e){return Math.max(0,e-1)}function w(e){return(0,g.jsx)(`div`,{style:{width:10,height:10,borderRadius:`50%`,background:e}},e)}function T(e){return(0,g.jsx)(`div`,{style:{width:10,height:10,borderRadius:`50%`,background:e}},e)}function E(e){return(0,g.jsx)(`div`,{style:{width:11,height:11,borderRadius:`50%`,background:e}},e)}function D(e){return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`div`,{style:{fontSize:19,fontWeight:900,color:`#fff`,lineHeight:1},children:e.val}),(0,g.jsxs)(`div`,{style:{fontSize:11,color:`rgba(255,255,255,0.5)`,marginTop:3},children:[e.icon,` `,e.label]})]},e.label)}function O(e){return!e}function ee(e){return e.timedOut}function te(e){return e.correct}function k(e){return(0,g.jsx)(`div`,{style:{width:10,height:10,borderRadius:`50%`,background:e}},e)}function A(e){return!e}function ne(e){return(0,g.jsx)(`div`,{style:{width:10,height:10,borderRadius:`50%`,background:e}},e)}function re(e){return{...e,matchOutput:{}}}function ie(e){return{...e,bugHunt:{}}}function j(e){return(0,g.jsx)(`div`,{style:{width:10,height:10,borderRadius:`50%`,background:`#27ae60`,animation:`zca 1.2s ease-in-out ${e*.2}s infinite`}},e)}function M(e){return e+1}function ae(e){return e.id}function oe(e){return setTimeout(e,2e3)}function se(e,t){return setTimeout(()=>t(`timeout`),1500)}function ce(e){return e+1}function N(e){return e.correct}function P(e){return e+1}function le(){return Math.random()-.5}function ue(e){return e-1}(0,u.createRoot)(document.getElementById(`root`)).render((0,g.jsx)(l.StrictMode,{children:(0,g.jsx)(S,{})}));