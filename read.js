/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(){'use strict';function a(){return c||(c=new Promise(function(a,b){var c=indexedDB.open('keyval-store',1);c.onerror=function(){b(c.error)},c.onupgradeneeded=function(){c.result.createObjectStore('keyval')},c.onsuccess=function(){a(c.result)}})),c}function b(b,c){return a().then(function(a){return new Promise(function(d,e){var f=a.transaction('keyval',b);f.oncomplete=function(){d()},f.onerror=function(){e(f.error)},c(f.objectStore('keyval'))})})}var c,d={get:function(a){var c;return b('readonly',function(b){c=b.get(a)}).then(function(){return c.result})},set:function(a,c){return b('readwrite',function(b){b.put(c,a)})},delete:function(a){return b('readwrite',function(b){b.delete(a)})},clear:function(){return b('readwrite',function(a){a.clear()})},keys:function(){var a=[];return b('readonly',function(b){(b.openKeyCursor||b.openCursor).call(b).onsuccess=function(){this.result&&(a.push(this.result.key),this.result.continue())}}).then(function(){return a})}};'undefined'!=typeof module&&module.exports?module.exports=d: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return d}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):self.idbKeyval=d})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "manifest.json";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon.png";

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise_worker__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise_worker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_promise_worker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_idb_keyval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_idb_keyval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_idb_keyval__);
function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}/* harmony default export */ __webpack_exports__["a"] = ((()=>{var a=_asyncToGenerator(function*(a,b){let c=yield __WEBPACK_IMPORTED_MODULE_1_idb_keyval___default.a.get(a);if(!c){const d=new __WEBPACK_IMPORTED_MODULE_0_promise_worker___default.a(new b());c=yield d.postMessage(a),__WEBPACK_IMPORTED_MODULE_1_idb_keyval___default.a.set(a,c)}return c});return function(){return a.apply(this,arguments)}})());

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var MyPromise='undefined'==typeof Promise?__webpack_require__(5):Promise,messageIds=0;function parseJsonSafely(a){try{return JSON.parse(a)}catch(a){return!1}}function onMessage(a,b){var c=parseJsonSafely(b.data);if(c){var d=c[0],e=c[1],f=c[2],g=a._callbacks[d];g&&(delete a._callbacks[d],g(e,f))}}function PromiseWorker(a){var b=this;b._worker=a,b._callbacks={},a.addEventListener('message',function(a){onMessage(b,a)})}PromiseWorker.prototype.postMessage=function(a){var b=this,c=messageIds++,d=[c,a];return new MyPromise(function(a,e){b._callbacks[c]=function(b,c){return b?e(new Error(b.message)):void a(c)};var f=JSON.stringify(d);if('undefined'!=typeof b._worker.controller){var g=new MessageChannel;g.port1.onmessage=function(a){onMessage(b,a)},b._worker.controller.postMessage(f,[g.port2])}else b._worker.postMessage(f)})},module.exports=PromiseWorker;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var immediate=__webpack_require__(6);function INTERNAL(){}var handlers={},REJECTED=['REJECTED'],FULFILLED=['FULFILLED'],PENDING=['PENDING'];module.exports=Promise;function Promise(a){if('function'!=typeof a)throw new TypeError('resolver must be a function');this.state=PENDING,this.queue=[],this.outcome=void 0,a!==INTERNAL&&safelyResolveThenable(this,a)}Promise.prototype['catch']=function(a){return this.then(null,a)},Promise.prototype.then=function(a,b){if('function'!=typeof a&&this.state===FULFILLED||'function'!=typeof b&&this.state===REJECTED)return this;var c=new this.constructor(INTERNAL);if(this.state!==PENDING){var d=this.state===FULFILLED?a:b;unwrap(c,d,this.outcome)}else this.queue.push(new QueueItem(c,a,b));return c};function QueueItem(a,b,c){this.promise=a,'function'==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),'function'==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}QueueItem.prototype.callFulfilled=function(a){handlers.resolve(this.promise,a)},QueueItem.prototype.otherCallFulfilled=function(a){unwrap(this.promise,this.onFulfilled,a)},QueueItem.prototype.callRejected=function(a){handlers.reject(this.promise,a)},QueueItem.prototype.otherCallRejected=function(a){unwrap(this.promise,this.onRejected,a)};function unwrap(a,b,c){immediate(function(){var d;try{d=b(c)}catch(b){return handlers.reject(a,b)}d===a?handlers.reject(a,new TypeError('Cannot resolve promise with itself')):handlers.resolve(a,d)})}handlers.resolve=function(a,b){var c=tryCatch(getThen,b);if('error'===c.status)return handlers.reject(a,c.value);var d=c.value;if(d)safelyResolveThenable(a,d);else{a.state=FULFILLED,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},handlers.reject=function(a,b){a.state=REJECTED,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a};function getThen(a){var b=a&&a.then;if(a&&('object'==typeof a||'function'==typeof a)&&'function'==typeof b)return function(){b.apply(a,arguments)}}function safelyResolveThenable(a,b){function c(b){e||(e=!0,handlers.reject(a,b))}function d(b){e||(e=!0,handlers.resolve(a,b))}var e=!1,f=tryCatch(function(){b(d,c)});'error'===f.status&&c(f.value)}function tryCatch(a,b){var c={};try{c.value=a(b),c.status='success'}catch(a){c.status='error',c.value=a}return c}Promise.resolve=resolve;function resolve(a){return a instanceof this?a:handlers.resolve(new this(INTERNAL),a)}Promise.reject=reject;function reject(a){var b=new this(INTERNAL);return handlers.reject(b,a)}Promise.all=all;function all(a){function b(a,b){c.resolve(a).then(function(a){f[b]=a,++g!==d||e||(e=!0,handlers.resolve(j,f))},function(a){e||(e=!0,handlers.reject(j,a))})}var c=this;if('[object Array]'!==Object.prototype.toString.call(a))return this.reject(new TypeError('must be an array'));var d=a.length,e=!1;if(!d)return this.resolve([]);for(var f=Array(d),g=0,h=-1,j=new this(INTERNAL);++h<d;)b(a[h],h);return j}Promise.race=race;function race(a){function b(a){c.resolve(a).then(function(a){e||(e=!0,handlers.resolve(g,a))},function(a){e||(e=!0,handlers.reject(g,a))})}var c=this;if('[object Array]'!==Object.prototype.toString.call(a))return this.reject(new TypeError('must be an array'));var d=a.length,e=!1;if(!d)return this.resolve([]);for(var f=-1,g=new this(INTERNAL);++f<d;)b(a[f]);return g}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var scheduleDrain,Mutation=global.MutationObserver||global.WebKitMutationObserver;if(Mutation){var called=0,observer=new Mutation(nextTick),element=global.document.createTextNode('');observer.observe(element,{characterData:!0}),scheduleDrain=function(){element.data=called=++called%2}}else if(!global.setImmediate&&'undefined'!=typeof global.MessageChannel){var channel=new global.MessageChannel;channel.port1.onmessage=nextTick,scheduleDrain=function(){channel.port2.postMessage(0)}}else scheduleDrain='document'in global&&'onreadystatechange'in global.document.createElement('script')?function(){var a=global.document.createElement('script');a.onreadystatechange=function(){nextTick(),a.onreadystatechange=null,a.parentNode.removeChild(a),a=null},global.document.documentElement.appendChild(a)}:function(){setTimeout(nextTick,0)};var draining,queue=[];function nextTick(){draining=!0;for(var a,b,c=queue.length;c;){for(b=queue,queue=[],a=-1;++a<c;)b[a]();c=queue.length}draining=!1}module.exports=immediate;function immediate(a){1!==queue.push(a)||draining||scheduleDrain()}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g=function(){return this}();try{g=g||Function("return this")()||(1,eval)("this")}catch(a){"object"==typeof window&&(g=window)}module.exports=g;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (()=>{'serviceWorker'in navigator&&window.addEventListener('load',()=>{navigator.serviceWorker.register('service-worker.js')})});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const bookListUrl='https://cdn.rawgit.com/gitenberg-dev/Second-Folio/master/Gitenberg%20Book%20List.csv';
/* harmony export (immutable) */ __webpack_exports__["a"] = bookListUrl;
const columnGap=40;
/* harmony export (immutable) */ __webpack_exports__["b"] = columnGap;
const globalStateKey='global';
/* harmony export (immutable) */ __webpack_exports__["c"] = globalStateKey;


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manifest_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manifest_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__manifest_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_png__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icon_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ic_font_download_black_48px_svg__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ic_font_download_black_48px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ic_font_download_black_48px_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_read_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_read_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_read_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_deserialize_url_params__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_idb_or_worker__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_register_service_worker__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_state_manager__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_constants__ = __webpack_require__(9);
function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}const bookState=new __WEBPACK_IMPORTED_MODULE_8__lib_state_manager__["a" /* default */](location.href),globalState=new __WEBPACK_IMPORTED_MODULE_8__lib_state_manager__["a" /* default */](__WEBPACK_IMPORTED_MODULE_9__lib_constants__["c" /* globalStateKey */]),nextPage=()=>{const a=bookState.read('currentPage'),b=bookState.read('totalPages');a<b&&bookState.write('currentPage',a+1)},previousPage=()=>{const a=bookState.read('currentPage');1<a&&bookState.write('currentPage',a-1)},clickHandler=(a)=>{a.clientX>=window.innerWidth/2?nextPage():previousPage()},fontHandler=(a)=>{const b=a.target.selectedOptions[0].textContent;globalState.write('font-family',b)},keydownHandler=(a)=>{'ArrowLeft'===a.key?previousPage():'ArrowRight'===a.key&&nextPage()},onCurrentPageChanged=(a)=>{const b=document.querySelector('#text'),c=(a-1)*(b.clientWidth+__WEBPACK_IMPORTED_MODULE_9__lib_constants__["b" /* columnGap */]);document.querySelector('#text').style.transform=`translateX(-${c}px)`,document.querySelector('#currentPage').textContent=a},onTitleChanged=(a)=>{document.querySelector('#title').textContent=a,document.title=a},onStyleChanged=(a,b)=>{const c=document.querySelector('#text');c.style[b]=a,bookState.write('totalPages',Math.ceil(c.scrollWidth/(c.clientWidth+__WEBPACK_IMPORTED_MODULE_9__lib_constants__["b" /* columnGap */])))},onTotalPagesChanged=(a,b,c)=>{const d=bookState.read('currentPage');bookState.write('currentPage',Math.floor(d/(c||a)*a)),document.querySelector('#totalPages').textContent=a},calculateTotalPages=()=>{const a=document.querySelector('#text');bookState.write('totalPages',Math.ceil(a.scrollWidth/(a.clientWidth+__WEBPACK_IMPORTED_MODULE_9__lib_constants__["b" /* columnGap */])))};_asyncToGenerator(function*(){const a=Object(__WEBPACK_IMPORTED_MODULE_4__lib_deserialize_url_params__["a" /* default */])(location.search),b=a.get('url'),c=yield Object(__WEBPACK_IMPORTED_MODULE_5__lib_idb_or_worker__["a" /* default */])(b,__WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker___default.a),d=document.querySelector('#text');d.innerHTML=c,document.querySelector('#container').addEventListener('click',clickHandler),document.querySelector('#font').addEventListener('change',fontHandler),window.addEventListener('keydown',keydownHandler),bookState.listen('currentPage',onCurrentPageChanged),bookState.listen('title',onTitleChanged),bookState.listen('totalPages',onTotalPagesChanged),['font-family'].forEach(function(a){return globalState.listen(a,onStyleChanged)}),yield bookState.bootstrap({title:a.get('title'),currentPage:1}),calculateTotalPages()})(),Object(__WEBPACK_IMPORTED_MODULE_7__lib_register_service_worker__["a" /* default */])();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ic_font_download_black_48px.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "read.css";

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((a)=>new Map(a.substring(1).split('&').map(function(a){const b=a.split('='),c=decodeURIComponent(b[0]),d=decodeURIComponent(b[1]);return[c,d]})));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
	return new Worker(__webpack_require__.p + "markdown-to-html-worker.js");
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_idb_keyval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_idb_keyval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_idb_keyval__);
function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}class StateManager{constructor(a=location.href){this.propertyCallbacks={},this.state={},this.key=`state-${a}`}bootstrap(a={}){var b=this;return _asyncToGenerator(function*(){const c=yield __WEBPACK_IMPORTED_MODULE_0_idb_keyval___default.a.get(b.key),d=Object.assign({},a,c);Object.keys(d).forEach((()=>{var a=_asyncToGenerator(function*(a){yield b.write(a,d[a])});return function(){return a.apply(this,arguments)}})())})()}read(a){return this.state[a]}write(a,b){var c=this;return _asyncToGenerator(function*(){const d=c.state[a];c.state[a]=b,yield __WEBPACK_IMPORTED_MODULE_0_idb_keyval___default.a.set(c.key,c.state),a in c.propertyCallbacks&&c.propertyCallbacks[a].forEach(function(c){return c(b,a,d)})})()}listen(a,b){a in this.propertyCallbacks||(this.propertyCallbacks[a]=[]),this.propertyCallbacks[a].push(b)}}
/* harmony export (immutable) */ __webpack_exports__["a"] = StateManager;


/***/ })
/******/ ]);