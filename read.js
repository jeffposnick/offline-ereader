/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
const bookListUrl='https://cdn.rawgit.com/gitenberg-dev/Second-Folio/master/Gitenberg%20Book%20List.csv';
/* harmony export (immutable) */ exports["c"] = bookListUrl;
const columnGap=40;
/* harmony export (immutable) */ exports["b"] = columnGap;
const globalStateKey='global';
/* harmony export (immutable) */ exports["a"] = globalStateKey;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise_worker__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise_worker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_promise_worker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_idb_keyval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_idb_keyval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_idb_keyval__);
function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}return info.done?void resolve(value):Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}return step('next')})}}/* harmony default export */ exports["a"] = (()=>{var _ref=_asyncToGenerator(function*(a,b){let c=yield __WEBPACK_IMPORTED_MODULE_1_idb_keyval___default.a.get(a);if(!c){const d=new __WEBPACK_IMPORTED_MODULE_0_promise_worker___default.a(new b());c=yield d.postMessage(a),__WEBPACK_IMPORTED_MODULE_1_idb_keyval___default.a.set(a,c)}return c});return function(_x,_x2){return _ref.apply(this,arguments)}})();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = ()=>{'serviceWorker'in navigator&&window.addEventListener('load',()=>{navigator.serviceWorker.register('service-worker.js')})};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon.png";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "manifest.json";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(){'use strict';function a(){return c||(c=new Promise(function(e,f){var g=indexedDB.open('keyval-store',1);g.onerror=function(){f(g.error)},g.onupgradeneeded=function(){g.result.createObjectStore('keyval')},g.onsuccess=function(){e(g.result)}})),c}function b(e,f){return a().then(function(g){return new Promise(function(h,i){var j=g.transaction('keyval',e);j.oncomplete=function(){h()},j.onerror=function(){i(j.error)},f(j.objectStore('keyval'))})})}var c,d={get:function(e){var f;return b('readonly',function(g){f=g.get(e)}).then(function(){return f.result})},set:function(e,f){return b('readwrite',function(g){g.put(f,e)})},delete:function(e){return b('readwrite',function(f){f.delete(e)})},clear:function(){return b('readwrite',function(e){e.clear()})},keys:function(){var e=[];return b('readonly',function(f){(f.openKeyCursor||f.openCursor).call(f).onsuccess=function(){this.result&&(e.push(this.result.key),this.result.continue())}}).then(function(){return e})}};'undefined'!=typeof module&&module.exports?module.exports=d: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return d}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):self.idbKeyval=d})();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var Mutation=global.MutationObserver||global.WebKitMutationObserver,scheduleDrain;if(Mutation){var called=0,observer=new Mutation(nextTick),element=global.document.createTextNode('');observer.observe(element,{characterData:!0}),scheduleDrain=function(){element.data=called=++called%2}}else if(!global.setImmediate&&'undefined'!=typeof global.MessageChannel){var channel=new global.MessageChannel;channel.port1.onmessage=nextTick,scheduleDrain=function(){channel.port2.postMessage(0)}}else scheduleDrain='document'in global&&'onreadystatechange'in global.document.createElement('script')?function(){// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
var a=global.document.createElement('script');a.onreadystatechange=function(){nextTick(),a.onreadystatechange=null,a.parentNode.removeChild(a),a=null},global.document.documentElement.appendChild(a)}:function(){setTimeout(nextTick,0)};var draining,queue=[];//named nextTick for less confusing stack traces
function nextTick(){draining=!0;for(var a,b,c=queue.length;c;){for(b=queue,queue=[],a=-1;++a<c;)b[a]();c=queue.length}draining=!1}module.exports=immediate;function immediate(a){1!==queue.push(a)||draining||scheduleDrain()}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var immediate=__webpack_require__(6);/* istanbul ignore next */function INTERNAL(){}var handlers={},REJECTED=['REJECTED'],FULFILLED=['FULFILLED'],PENDING=['PENDING'];module.exports=Promise;function Promise(a){if('function'!=typeof a)throw new TypeError('resolver must be a function');this.state=PENDING,this.queue=[],this.outcome=void 0,a!==INTERNAL&&safelyResolveThenable(this,a)}Promise.prototype['catch']=function(a){return this.then(null,a)},Promise.prototype.then=function(a,b){if('function'!=typeof a&&this.state===FULFILLED||'function'!=typeof b&&this.state===REJECTED)return this;var c=new this.constructor(INTERNAL);if(this.state!==PENDING){var d=this.state===FULFILLED?a:b;unwrap(c,d,this.outcome)}else this.queue.push(new QueueItem(c,a,b));return c};function QueueItem(a,b,c){this.promise=a,'function'==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),'function'==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}QueueItem.prototype.callFulfilled=function(a){handlers.resolve(this.promise,a)},QueueItem.prototype.otherCallFulfilled=function(a){unwrap(this.promise,this.onFulfilled,a)},QueueItem.prototype.callRejected=function(a){handlers.reject(this.promise,a)},QueueItem.prototype.otherCallRejected=function(a){unwrap(this.promise,this.onRejected,a)};function unwrap(a,b,c){immediate(function(){var d;try{d=b(c)}catch(f){return handlers.reject(a,f)}d===a?handlers.reject(a,new TypeError('Cannot resolve promise with itself')):handlers.resolve(a,d)})}handlers.resolve=function(a,b){var c=tryCatch(getThen,b);if('error'===c.status)return handlers.reject(a,c.value);var d=c.value;if(d)safelyResolveThenable(a,d);else{a.state=FULFILLED,a.outcome=b;for(var f=-1,g=a.queue.length;++f<g;)a.queue[f].callFulfilled(b)}return a},handlers.reject=function(a,b){a.state=REJECTED,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a};function getThen(a){// Make sure we only access the accessor once as required by the spec
var b=a&&a.then;if(a&&'object'==typeof a&&'function'==typeof b)return function(){b.apply(a,arguments)}}function safelyResolveThenable(a,b){function c(h){f||(f=!0,handlers.reject(a,h))}function d(h){f||(f=!0,handlers.resolve(a,h))}// Either fulfill, reject or reject with error
var f=!1,g=tryCatch(function(){b(d,c)});'error'===g.status&&c(g.value)}function tryCatch(a,b){var c={};try{c.value=a(b),c.status='success'}catch(d){c.status='error',c.value=d}return c}Promise.resolve=resolve;function resolve(a){return a instanceof this?a:handlers.resolve(new this(INTERNAL),a)}Promise.reject=reject;function reject(a){var b=new this(INTERNAL);return handlers.reject(b,a)}Promise.all=all;function all(a){function b(l,m){c.resolve(l).then(function(o){g[m]=o,++h!==d||f||(f=!0,handlers.resolve(k,g))},function(n){f||(f=!0,handlers.reject(k,n))})}var c=this;if('[object Array]'!==Object.prototype.toString.call(a))return this.reject(new TypeError('must be an array'));var d=a.length,f=!1;if(!d)return this.resolve([]);for(var g=Array(d),h=0,j=-1,k=new this(INTERNAL);++j<d;)b(a[j],j);return k}Promise.race=race;function race(a){function b(j){c.resolve(j).then(function(k){f||(f=!0,handlers.resolve(h,k))},function(k){f||(f=!0,handlers.reject(h,k))})}var c=this;if('[object Array]'!==Object.prototype.toString.call(a))return this.reject(new TypeError('must be an array'));var d=a.length,f=!1;if(!d)return this.resolve([]);for(var g=-1,h=new this(INTERNAL);++g<d;)b(a[g]);return h}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */var MyPromise='undefined'==typeof Promise?__webpack_require__(7):Promise,messageIds=0;function parseJsonSafely(a){try{return JSON.parse(a)}catch(b){return!1}}function onMessage(a,b){var c=parseJsonSafely(b.data);if(c){var d=c[0],f=c[1],g=c[2],h=a._callbacks[d];h&&(delete a._callbacks[d],h(f,g))}}function PromiseWorker(a){var b=this;b._worker=a,b._callbacks={},a.addEventListener('message',function(c){onMessage(b,c)})}PromiseWorker.prototype.postMessage=function(a){var b=this,c=messageIds++,d=[c,a];return new MyPromise(function(f,g){b._callbacks[c]=function(j,k){return j?g(new Error(j.message)):void f(k)};var h=JSON.stringify(d);/* istanbul ignore if */if('undefined'!=typeof b._worker.controller){// service worker, use MessageChannels because e.source is broken in Chrome < 51:
// https://bugs.chromium.org/p/chromium/issues/detail?id=543198
var i=new MessageChannel;i.port1.onmessage=function(j){onMessage(b,j)},b._worker.controller.postMessage(h,[i.port2])}else b._worker.postMessage(h)})},module.exports=PromiseWorker;

/***/ },
/* 9 */
/***/ function(module, exports) {

var g=function(){return this}();// This works in non-strict mode
try{g=g||Function("return this")()||(1,eval)("this")}catch(a){"object"==typeof window&&(g=window)}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = a=>{return new Map(a.substring(1).split('&').map(function(b){const c=b.split('='),d=decodeURIComponent(c[0]),e=decodeURIComponent(c[1]);return[d,e]}))};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_idb_keyval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_idb_keyval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_idb_keyval__);
function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}return info.done?void resolve(value):Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}return step('next')})}}class StateManager{constructor(a=location.href){this.propertyCallbacks={},this.state={},this.key=`state-${a}`}bootstrap(a={}){var _this=this;return _asyncToGenerator(function*(){const b=yield __WEBPACK_IMPORTED_MODULE_0_idb_keyval___default.a.get(_this.key),c=Object.assign({},a,b);Object.keys(c).forEach((()=>{var _ref=_asyncToGenerator(function*(d){yield _this.write(d,c[d])});return function(_x){return _ref.apply(this,arguments)}})())})()}read(a){return this.state[a]}write(a,b){var _this2=this;return _asyncToGenerator(function*(){const c=_this2.state[a];_this2.state[a]=b,yield __WEBPACK_IMPORTED_MODULE_0_idb_keyval___default.a.set(_this2.key,_this2.state),a in _this2.propertyCallbacks&&_this2.propertyCallbacks[a].forEach(function(d){return d(b,a,c)})})()}listen(a,b){a in this.propertyCallbacks||(this.propertyCallbacks[a]=[]),this.propertyCallbacks[a].push(b)}}
/* harmony export (immutable) */ exports["a"] = StateManager;


/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "read.css";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ic_font_download_black_48px.svg";

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

module.exports = function() {
	return new Worker(__webpack_require__.p + "markdown-to-html-worker.js");
};

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manifest_json__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manifest_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__manifest_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_png__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icon_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ic_font_download_black_48px_svg__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ic_font_download_black_48px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ic_font_download_black_48px_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_read_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_read_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_read_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_deserialize_url_params__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_idb_or_worker__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_register_service_worker__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_state_manager__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_constants__ = __webpack_require__(0);
function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}return info.done?void resolve(value):Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}return step('next')})}}const bookState=new __WEBPACK_IMPORTED_MODULE_8__lib_state_manager__["a" /* default */](location.href),globalState=new __WEBPACK_IMPORTED_MODULE_8__lib_state_manager__["a" /* default */](__WEBPACK_IMPORTED_MODULE_9__lib_constants__["a" /* globalStateKey */]),nextPage=()=>{const a=bookState.read('currentPage'),b=bookState.read('totalPages');a<b&&bookState.write('currentPage',a+1)},previousPage=()=>{const a=bookState.read('currentPage');1<a&&bookState.write('currentPage',a-1)},clickHandler=a=>{a.clientX>=window.innerWidth/2?nextPage():previousPage()},fontHandler=a=>{const b=a.target.selectedOptions[0].textContent;globalState.write('font-family',b)},keydownHandler=a=>{'ArrowLeft'===a.key?previousPage():'ArrowRight'===a.key&&nextPage()},onCurrentPageChanged=a=>{const b=document.querySelector('#text'),c=(a-1)*(b.clientWidth+__WEBPACK_IMPORTED_MODULE_9__lib_constants__["b" /* columnGap */]);document.querySelector('#text').style.transform=`translateX(-${c}px)`,document.querySelector('#currentPage').textContent=a},onTitleChanged=a=>{document.querySelector('#title').textContent=a,document.title=a},onStyleChanged=(a,b)=>{const c=document.querySelector('#text');c.style[b]=a,bookState.write('totalPages',Math.ceil(c.scrollWidth/(c.clientWidth+__WEBPACK_IMPORTED_MODULE_9__lib_constants__["b" /* columnGap */])))},onTotalPagesChanged=(a,b,c)=>{const d=bookState.read('currentPage');bookState.write('currentPage',Math.floor(d/(c||a)*a)),document.querySelector('#totalPages').textContent=a},calculateTotalPages=()=>{const a=document.querySelector('#text');bookState.write('totalPages',Math.ceil(a.scrollWidth/(a.clientWidth+__WEBPACK_IMPORTED_MODULE_9__lib_constants__["b" /* columnGap */])))};_asyncToGenerator(function*(){const a=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_deserialize_url_params__["a" /* default */])(location.search),b=a.get('url'),c=yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_idb_or_worker__["a" /* default */])(b,__WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker___default.a),d=document.querySelector('#text');d.innerHTML=c,document.querySelector('#container').addEventListener('click',clickHandler),document.querySelector('#font').addEventListener('change',fontHandler),window.addEventListener('keydown',keydownHandler),bookState.listen('currentPage',onCurrentPageChanged),bookState.listen('title',onTitleChanged),bookState.listen('totalPages',onTotalPagesChanged),['font-family'].forEach(function(e){return globalState.listen(e,onStyleChanged)}),yield bookState.bootstrap({title:a.get('title'),currentPage:1}),calculateTotalPages()})(),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_register_service_worker__["a" /* default */])();

/***/ }
/******/ ]);