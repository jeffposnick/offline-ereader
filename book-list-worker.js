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
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a"]; });


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trimResultTransformer__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__trimResultTransformer__["a"]; });


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inlineArrayTransformer__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__inlineArrayTransformer__["a"]; });


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stripIndentTransformer__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__stripIndentTransformer__["a"]; });


/***/ },
/* 4 */
/***/ function(module, exports) {

var core=module.exports={version:'2.4.0'};'number'==typeof __e&&(__e=core);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__replaceResultTransformer__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__replaceResultTransformer__["a"]; });


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var store=__webpack_require__(32)('wks'),uid=__webpack_require__(23),Symbol=__webpack_require__(10).Symbol,USE_SYMBOL='function'==typeof Symbol,$exports=module.exports=function(a){return store[a]||(store[a]=USE_SYMBOL&&Symbol[a]||(USE_SYMBOL?Symbol:uid)('Symbol.'+a))};$exports.store=store;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

module.exports=!__webpack_require__(14)(function(){return 7!=Object.defineProperty({},'a',{get:function(){return 7}}).a});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var global=__webpack_require__(10),core=__webpack_require__(4),ctx=__webpack_require__(27),hide=__webpack_require__(15),PROTOTYPE='prototype',$export=function(d,e,f){var p,q,r,g=d&$export.F,h=d&$export.G,i=d&$export.S,j=d&$export.P,k=d&$export.B,l=d&$export.W,m=h?core:core[e]||(core[e]={}),n=m[PROTOTYPE],o=h?global:i?global[e]:(global[e]||{})[PROTOTYPE];for(p in h&&(f=e),f)q=!g&&o&&void 0!==o[p],q&&p in m||(r=q?o[p]:f[p],m[p]=h&&'function'!=typeof o[p]?f[p]// bind timers to global for call from export context
:k&&q?ctx(r,global)// wrap global constructors for prevent change them in library
:l&&o[p]==r?function(x){var y=function(z,A,B){if(this instanceof x){switch(arguments.length){case 0:return new x;case 1:return new x(z);case 2:return new x(z,A);}return new x(z,A,B)}return x.apply(this,arguments)};return y[PROTOTYPE]=x[PROTOTYPE],y;// make static versions for prototype methods
}(r):j&&'function'==typeof r?ctx(Function.call,r):r,j&&((m.virtual||(m.virtual={}))[p]=r,d&$export.R&&n&&!n[p]&&hide(n,p,r)))};// type bitmap
$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128,module.exports=$export;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var anObject=__webpack_require__(13),IE8_DOM_DEFINE=__webpack_require__(96),toPrimitive=__webpack_require__(113),dP=Object.defineProperty;exports.f=__webpack_require__(7)?Object.defineProperty:function(b,c,d){if(anObject(b),c=toPrimitive(c,!0),anObject(d),IE8_DOM_DEFINE)try{return dP(b,c,d)}catch(f){/* empty */}if('get'in d||'set'in d)throw TypeError('Accessors not supported!');return'value'in d&&(b[c]=d.value),b};

/***/ },
/* 10 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports='undefined'!=typeof window&&window.Math==Math?window:'undefined'!=typeof self&&self.Math==Math?self:Function('return this')();'number'==typeof __g&&(__g=global);

/***/ },
/* 11 */
/***/ function(module, exports) {

var hasOwnProperty={}.hasOwnProperty;module.exports=function(a,b){return hasOwnProperty.call(a,b)};

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports=function(a){return'object'==typeof a?null!==a:'function'==typeof a};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var isObject=__webpack_require__(12);module.exports=function(a){if(!isObject(a))throw TypeError(a+' is not an object!');return a};

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports=function(a){try{return!!a()}catch(b){return!0}};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var dP=__webpack_require__(9),createDesc=__webpack_require__(20);module.exports=__webpack_require__(7)?function(a,b,c){return dP.f(a,b,createDesc(1,c))}:function(a,b,c){return a[b]=c,a};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__html__["a"]; });


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__splitStringTransformer__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__splitStringTransformer__["a"]; });


/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports=function(a){if(a==void 0)throw TypeError("Can't call method on  "+a);return a};

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports={};

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var shared=__webpack_require__(32)('keys'),uid=__webpack_require__(23);module.exports=function(a){return shared[a]||(shared[a]=uid(a))};

/***/ },
/* 22 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil=Math.ceil,floor=Math.floor;module.exports=function(a){return isNaN(a=+a)?0:(0<a?floor:ceil)(a)};

/***/ },
/* 23 */
/***/ function(module, exports) {

var id=0,px=Math.random();module.exports=function(a){return'Symbol('.concat(a===void 0?'':a,')_',(++id+px).toString(36))};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__removeNonPrintingValuesTransformer__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__removeNonPrintingValuesTransformer__["a"]; });


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__replaceSubstitutionTransformer__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__replaceSubstitutionTransformer__["a"]; });


/***/ },
/* 26 */
/***/ function(module, exports) {

var toString={}.toString;module.exports=function(a){return toString.call(a).slice(8,-1)};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction=__webpack_require__(91);module.exports=function(d,e,f){return(aFunction(d),void 0===e)?d:1===f?function(g){return d.call(e,g)}:2===f?function(g,h){return d.call(e,g,h)}:3===f?function(g,h,i){return d.call(e,g,h,i)}:function()/* ...args */{return d.apply(e,arguments)}};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var isObject=__webpack_require__(12),document=__webpack_require__(10).document// in old IE typeof document.createElement is 'object'
,is=isObject(document)&&isObject(document.createElement);module.exports=function(a){return is?document.createElement(a):{}};

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports='constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

var dP=__webpack_require__(9),anObject=__webpack_require__(13),getKeys=__webpack_require__(108);module.exports=__webpack_require__(7)?Object.defineProperties:function(b,c){anObject(b);for(var g,d=getKeys(c),e=d.length,f=0;e>f;)dP.f(b,g=d[f++],c[g]);return b};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var def=__webpack_require__(9).f,has=__webpack_require__(11),TAG=__webpack_require__(6)('toStringTag');module.exports=function(a,b,c){a&&!has(a=c?a:a.prototype,TAG)&&def(a,TAG,{configurable:!0,value:b})};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var global=__webpack_require__(10),SHARED='__core-js_shared__',store=global[SHARED]||(global[SHARED]={});module.exports=function(a){return store[a]||(store[a]={})};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(97),defined=__webpack_require__(18);module.exports=function(a){return IObject(defined(a))};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger=__webpack_require__(22),min=Math.min;module.exports=function(a){return 0<a?min(toInteger(a),9007199254740991):0;// pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined=__webpack_require__(18);module.exports=function(a){return Object(defined(a))};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* unused harmony reexport TemplateTag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trimResultTransformer__ = __webpack_require__(1);
/* unused harmony reexport trimResultTransformer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stripIndentTransformer__ = __webpack_require__(3);
/* unused harmony reexport stripIndentTransformer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__replaceResultTransformer__ = __webpack_require__(5);
/* unused harmony reexport replaceResultTransformer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__replaceSubstitutionTransformer__ = __webpack_require__(25);
/* unused harmony reexport replaceSubstitutionTransformer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inlineArrayTransformer__ = __webpack_require__(2);
/* unused harmony reexport inlineArrayTransformer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splitStringTransformer__ = __webpack_require__(17);
/* unused harmony reexport splitStringTransformer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__removeNonPrintingValuesTransformer__ = __webpack_require__(24);
/* unused harmony reexport removeNonPrintingValuesTransformer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__commaLists__ = __webpack_require__(52);
/* unused harmony reexport commaLists */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__commaListsAnd__ = __webpack_require__(54);
/* unused harmony reexport commaListsAnd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commaListsOr__ = __webpack_require__(56);
/* unused harmony reexport commaListsOr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__html__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_11__html__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__codeBlock__ = __webpack_require__(50);
/* unused harmony reexport codeBlock */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__source__ = __webpack_require__(78);
/* unused harmony reexport source */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__safeHtml__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_14__safeHtml__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__oneLine__ = __webpack_require__(61);
/* unused harmony reexport oneLine */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__oneLineTrim__ = __webpack_require__(71);
/* unused harmony reexport oneLineTrim */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__oneLineCommaLists__ = __webpack_require__(63);
/* unused harmony reexport oneLineCommaLists */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__oneLineCommaListsOr__ = __webpack_require__(67);
/* unused harmony reexport oneLineCommaListsOr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__oneLineCommaListsAnd__ = __webpack_require__(65);
/* unused harmony reexport oneLineCommaListsAnd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__inlineLists__ = __webpack_require__(59);
/* unused harmony reexport inlineLists */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__oneLineInlineLists__ = __webpack_require__(69);
/* unused harmony reexport oneLineInlineLists */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__stripIndent__ = __webpack_require__(80);
/* unused harmony reexport stripIndent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__stripIndents__ = __webpack_require__(83);
/* unused harmony reexport stripIndents */
// core
// transformers
// tags


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

(function(e,f){ true?module.exports=f():'function'==typeof define&&define.amd?define(f):e.CSVParser=f()})(this,function(){'use strict';// util
// code snippets from https://github.com/moment/moment
function e(A,B){return new Date(Date.UTC(A,B+1,0)).getUTCDate()}function f(A,B,C,D,E,F){return B&&(0>B||11<B)||C&&(0>C||C>e(A,B))||D&&(0>D||24<D||24===D&&(0!==E||0!==F))||E&&(0>E||59<E)||F&&(0>F||59<F)}function g(A){return+A+(68<+A?1900:2e3)}// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function h(A){return k(A.replace('\\','').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(B,C,D,E,F){return C||D||E||F}))}function k(A){return A.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&')}// export
function l(A,B){return'NaD'!==m(A,B)}function m(A,B){A=''+A;let C=/(\[[^\[]*\])|(\\)?(yyyy|yy|mm|m|dd|d|HH|H|MM|M|SS|S|.)/g,D=B.match(C)||[],E=0,F=0,G=0,H=null,I=null,J=null,K;//let formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|mm?m?m?|Do|DDDo|dd?d?d?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|yyyy|yy|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
for(let L=0;L<D.length;L++){let M=D[L];K='d'===M||'m'===M||'H'===M||'M'===M||'S'===M?/\d\d?/:'dd'===M||'mm'===M||'yy'===M||'HH'===M||'MM'===M||'SS'===M?/\d\d/:'yyyy'===M?/\d{4}/:new RegExp(h(M));let N=(A.match(K)||[])[0];if(N){// don't parse dates within text strings
let O=A.substr(0,A.indexOf(N));if(0<O.length)return'NaD';A=A.slice(A.indexOf(N)+N.length),'S'===M||'SS'===M?E=+N:'M'===M||'MM'===M?F=+N:'H'===M||'HH'===M?G=+N:'d'===M||'dd'===M?H=+N:'m'===M||'mm'===M?I=+N-1:'yy'===M?J=g(N):'yyyy'===M&&(J=2===N.length?g(N):+N)}}return null===J||null===I||null===H||f(J,I,H,G,F,E)?'NaD':new Date(Date.UTC(J,I,H,G,F,E))}function o(A){A=A.trim();let B=A.split(',').length-1;if(1<B)return'.';// '123,456,789' or '123,456,789.12'
if(0<=A.indexOf(' '))return',';// '123 456'
if(0<=A.indexOf('\u060C'))return'.';// '123،456'
if(0<=A.indexOf('\''))return'.';// '123\'456'
let C=A.split('.').length-1;if(1==B&&1==C){// '123,456.789' or '1.234,45'
let D=A.lastIndexOf(','),E=A.lastIndexOf('.');if(E>D)return'.';return','}if(1==B+C){let D=A.indexOf(','),E=A.indexOf('.'),F=A.length;if(-1!==D&&4!=F-D)return',';if(-1!==E&&4!=F-E)return'.'}return'ambiguous'}// default delimiter '.'
function p(A){for(let B=0;B<A.length;B++)for(let C=0;C<A[B].length;C++)if(/^[0-9.,' ،-]+$/.test(A[B][C])){let D=o(A[B][C]);if('ambiguous'!==D)return D}return'.'}function q(A,B){for(let C in B)'object'==typeof B[C]?'undefined'!=typeof A[C]&&q(A[C],B[C]):A[C]=B[C];return A}function u(A,B){function C(H){// search for next line or EOF
return 0===H||A[H-1]===B.lineEnding||1<H&&'\r\n'===B.lineEnding&&'\r'===A[H-2]&&'\n'===A[H-1]}function D(H){// search for next line or EOF
for(;H!==G&&A[H]!==B.lineEnding&&('\r\n'!==B.lineEnding||'\r'!==A[H]||'\n'!==A[H+1]);H++);return H}B=q({delimiter:',',lineEnding:'\n',comment:'#',maxRows:0,maxColumns:{numberOfColumns:-1,cutRemaining:!1}},B);let E=[],F=[],G=A.length;if(0===G)return E;loop1:for(let H=0,I=0,J=0,K=0;;I++){if(I>=G){F.push(A.substring(H,I)),0<F.length&&E.push(F);break}if(A[I]===B.delimiter){if(K++,K===B.maxColumns.numberOfColumns){if(B.maxColumns.cutRemaining?(F.push(A.substring(H,I)),I=D(I)):(I=D(I),F.push(A.substring(H,I))),E.push(F),F=[],K=0,J++,I===G||J===B.maxRows)break;// EOF or max rows
'\r\n'===B.lineEnding&&(I=I+1)}else F.push(A.substring(H,I));H=I+1;continue}if(A[I]===B.lineEnding||'\r\n'===B.lineEnding&&'\r'===A[I]&&'\n'===A[I+1]){if(F.push(A.substring(H,I)),E.push(F),F=[],K=0,J++,J===B.maxRows)break;'\r\n'===B.lineEnding&&(I=I+1),H=I+1;continue}if(C(I)&&A[I]===B.comment){// search for next line or EOF
if(I=D(I),I===G)break;// EOF
'\r\n'===B.lineEnding&&(I=I+1),H=I+1;continue}if('"'===A[I])// first quote of quoted field, or misplaced quote
if(C(I)||A[I-1]===B.delimiter){H=I=I+1;// search for closing quote
loop2:for(;;I++){if(I===G){F.push(A.substring(H,I)),E.push(F);break loop1}if('"'===A[I]){if(I===G-1){F.push(A.substring(H,I).replace(/""/g,'"')),E.push(F);break loop1}if('"'===A[I+1]){I=I+1;continue}if(A[I+1]===B.delimiter){if(K++,K===B.maxColumns.numberOfColumns){if(B.maxColumns.cutRemaining?(F.push(A.substring(H,I).replace(/""/g,'"')),I=D(I)):(I=D(I),F.push(A.substring(H,'"'===A[I-1]?I-1:I).replace(/""/g,'"').replace(/","/g,','))),E.push(F),F=[],K=0,J++,I===G||J===B.maxRows)break loop1;'\r\n'===B.lineEnding&&(I=I+1)}else F.push(A.substring(H,I).replace(/""/g,'"')),I=I+1;H=I+1;break}if(A[I+1]===B.lineEnding||'\r\n'===B.lineEnding&&'\r'===A[I+1]&&'\n'===A[I+2]){if(F.push(A.substring(H,I).replace(/""/g,'"')),E.push(F),F=[],K=0,J++,J===B.maxRows)break loop1;'\r\n'===B.lineEnding&&(I=I+1),I=I+1,H=I+1;break}}}}else if(A[I+1]===B.delimiter||I===G-1){if(I=I+1,K++,K===B.maxColumns.numberOfColumns){if(B.maxColumns.cutRemaining?(F.push(A.substring(H,I)),I=D(I)):(I=D(I),F.push(A.substring(H,I))),E.push(F),F=[],K=0,J++,I===G||J===B.maxRows)break;// EOF or max rows
'\r\n'===B.lineEnding&&(I=I+1)}else F.push(A.substring(H,I));H=I+1;continue}}return E}function v(A,B){let C=[',',';','\t','|',y,z],D=[];for(let E=0;E<C.length;E++){let F=u(A,{delimiter:C[E],lineEnding:B,maxRows:10}),G=0,H=0,I=1e3,J=!1,K=!1;//console.log(example);
for(let L=0;L<F.length;L++)// skip empty rows
if(''!==F[L]){let M=F[L].length;G+=M,J||(J=!0,H=F[L].length),K||(K=!0,I=Math.abs(H-M))}D.push([H,I,G,E])}//console.log(res);
// order by (max fields first row - desc) (difference first second row - asc) (max fields - desc)
return D.sort(function(E,F){let G=E[0],H=F[0],I=E[1],J=F[1],K=E[2],L=F[2];return G<H?1:G>H?-1:I<J?-1:I>J?1:K<L?1:K>L?-1:0}),C[D[0][3]]}function w(A){A=A.substr(0,1048576),A=A.replace(/"[^"]*"/g,'');// replace all quoted fields
//console.log(data);
let B=A.split('\n'),C=A.split('\r'),D=A.split('\r\n'),E=[{type:'\n',data:B,length:B.length-D.length},{type:'\r',data:C,length:C.length-D.length},{type:'\r\n',data:D,length:D.length-1}];//console.log(arr);
// use first occurrence
return E.sort(function(F,G){return G.length-F.length}),0==E[0].length?'\n':E[0].length==E[1].length?E[0].data[0].length<=E[1].data[0].length?E[0].type:E[1].type:E[0].type;// default, no line breaks
}function x(A){// some formats according to https://en.wikipedia.org/wiki/Date_format_by_country
let B=['dd.mm.yy','d.m.yy','dd.mm.yyyy','d.m.yyyy','dd/mm/yy','d/m/yy','dd/mm/yyyy','d/m/yyyy','dd-mm-yy','d-m-yy','dd-mm-yyyy','d-m-yyyy','yyyy-mm-dd','yy-mm-dd','yyyy/mm/dd','yy/mm/dd','yyyy mm dd','mm/dd/yy','m/d/yy','mm/dd/yyyy','m/d/yyyy'];for(let C of B)if(l(A,C))return{date:!0,value:m(A,C)};return{date:!1,value:A}}const y=String.fromCharCode(30),z=String.fromCharCode(31);return function(B,C){C=q({delimiter:'auto',lineEnding:'auto',comment:'#',convertToTypes:{convert:!1,decimalDelimiter:'auto',dateFormat:'yyyy-mm-dd'},skipEmptyLines:!1,maxRows:0,maxColumns:{numberOfColumns:-1,cutRemaining:!1},header:'auto'},C),'auto'===C.lineEnding&&(C.lineEnding=w(B)),'auto'===C.delimiter&&(C.delimiter=v(B,C.lineEnding));let D=u(B,C);if(C.skipEmptyLines)for(let F=0;F<D.length;F++)1===D[F].length&&''===D[F][0]&&D.splice(F--,1);if(C.convertToTypes.convert){'auto'===C.convertToTypes.decimalDelimiter&&(C.convertToTypes.decimalDelimiter=p(D));let F;F='.'===C.convertToTypes.decimalDelimiter?/[,' ،]/g:/[\.' ،]/g;for(let G=0;G<D.length;G++)for(let H=0;H<D[G].length;H++){let I=D[G][H];if('true'===I||'TRUE'===I)D[G][H]=!0;else if('false'===I||'FALSE'===I)D[G][H]=!1;else if(l(I,C.convertToTypes.dateFormat))D[G][H]=m(I,C.convertToTypes.dateFormat);else if(/[0-9]{2}\.[0-9]{2}\./.test(I));else if(I=I.replace(F,''),I=I.replace(C.convertToTypes.decimalDelimiter,'.'),I.endsWith('-')&&(I='-'+I.substring(0,I.length-1)),''!==I&&!isNaN(+I))D[G][H]=+I;else;}}let E=[];if(1===D.length&&(C.header=0),'auto'===C.header){let F=[],G=0;for(let L=0,M=0;L<D.length;L++){if(0===L&&(G=D[L].length),D[L].length===G){// only use rows with the same number of columns like the first row
let N=[];for(let O=0;O<D[L].length;O++)N.push(D[L][O]);F.push(N),M++}if(20==M)break;// no more than 20 rows are used for detection
}if(!C.convertToTypes.convert){let L=/[,' ،.]/g;for(let M=0;M<F.length;M++)for(let N=0;N<F[M].length;N++){let O=F[M][N];if('true'===O||'TRUE'===O)F[M][N]=!0;else if('false'===O||'FALSE'===O)F[M][N]=!1;else if(/[0-9]{2}\.[0-9]{2}\./.test(O));else if(O=x(O),O.date)F[M][N]=O.value;else if(O=O.value,O=O.replace(L,''),O.endsWith('-')&&(O='-'+O.substring(0,O.length-1)),''!==O&&!isNaN(+O))F[M][N]=+O;else;}}let H=0,I=F.length,J=I?F[0].length:0,K=0;for(let L=0;L<J;L++){let M=0;for(let N=0;N<I&&'string'==typeof F[N][L];N++)M+=1;0<M&&M!==I&&(K+=1,H+=M)}K&&(H/=K),H=Math.round(H),C.header=H}return C.header&&(!0===C.header&&(C.header=1),E=D.slice(0,C.header),D.splice(0,C.header)),{options:C,data:D,header:E}}});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var isPromise=__webpack_require__(121);function parseJsonSafely(a){try{return JSON.parse(a)}catch(b){return!1}}function registerPromiseWorker(a){function b(f,g,h,i){function j(k){'function'==typeof self.postMessage?self.postMessage(k):f.ports[0].postMessage(k)}h?('undefined'!=typeof console&&'error'in console&&console.error('Worker caught an error:',h),j(JSON.stringify([g,{message:h.message}]))):j(JSON.stringify([g,null,i]))}function c(f,g){try{return{res:f(g)}}catch(h){return{err:h}}}function d(f,g,h,i){var j=c(g,i);j.err?b(f,h,j.err):isPromise(j.res)?j.res.then(function(k){b(f,h,null,k)},function(k){b(f,h,k)}):b(f,h,null,j.res)}self.addEventListener('message',function(g){var h=parseJsonSafely(g.data);if(h){var i=h[0],j=h[1];'function'==typeof a?d(g,a,i,j):b(g,i,new Error('Please pass a function into register().'))}})}module.exports=registerPromiseWorker;

/***/ },
/* 39 */
/***/ function(module, exports) {

(function(a){'use strict';function b(z){if('string'!=typeof z&&(z=z+''),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(z))throw new TypeError('Invalid character in header field name');return z.toLowerCase()}function c(z){return'string'!=typeof z&&(z=z+''),z}// Build a destructive iterator for the value list
function d(z){var A={next:function(){var B=z.shift();return{done:void 0===B,value:B}}};return t.iterable&&(A[Symbol.iterator]=function(){return A}),A}function f(z){this.map={},z instanceof f?z.forEach(function(A,B){this.append(B,A)},this):z&&Object.getOwnPropertyNames(z).forEach(function(A){this.append(A,z[A])},this)}function g(z){return z.bodyUsed?Promise.reject(new TypeError('Already read')):void(z.bodyUsed=!0)}function h(z){return new Promise(function(A,B){z.onload=function(){A(z.result)},z.onerror=function(){B(z.error)}})}function j(z){var A=new FileReader,B=h(A);return A.readAsArrayBuffer(z),B}function k(z){var A=new FileReader,B=h(A);return A.readAsText(z),B}function l(z){var A=new Uint8Array(z),B=Array(A.length);for(var C=0;C<A.length;C++)B[C]=String.fromCharCode(A[C]);return B.join('')}function m(z){if(z.slice)return z.slice(0);var A=new Uint8Array(z.byteLength);return A.set(new Uint8Array(z)),A.buffer}function n(){return this.bodyUsed=!1,this._initBody=function(z){if(this._bodyInit=z,!z)this._bodyText='';else if('string'==typeof z)this._bodyText=z;else if(t.blob&&Blob.prototype.isPrototypeOf(z))this._bodyBlob=z;else if(t.formData&&FormData.prototype.isPrototypeOf(z))this._bodyFormData=z;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(z))this._bodyText=z.toString();else if(t.arrayBuffer&&t.blob&&v(z))this._bodyArrayBuffer=m(z.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else if(t.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(z)||w(z)))this._bodyArrayBuffer=m(z);else throw new Error('unsupported BodyInit type');this.headers.get('content-type')||('string'==typeof z?this.headers.set('content-type','text/plain;charset=UTF-8'):this._bodyBlob&&this._bodyBlob.type?this.headers.set('content-type',this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(z)&&this.headers.set('content-type','application/x-www-form-urlencoded;charset=UTF-8'))},t.blob&&(this.blob=function(){var z=g(this);if(z)return z;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error('could not read FormData body as blob');else return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?g(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(j)}),this.text=function(){var z=g(this);if(z)return z;if(this._bodyBlob)return k(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error('could not read FormData body as text');else return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(q)}),this.json=function(){return this.text().then(JSON.parse)},this}// HTTP methods whose capitalization should be normalized
function o(z){var A=z.toUpperCase();return-1<x.indexOf(A)?A:z}function p(z,A){A=A||{};var B=A.body;if('string'==typeof z)this.url=z;else{if(z.bodyUsed)throw new TypeError('Already read');this.url=z.url,this.credentials=z.credentials,A.headers||(this.headers=new f(z.headers)),this.method=z.method,this.mode=z.mode,B||null==z._bodyInit||(B=z._bodyInit,z.bodyUsed=!0)}if(this.credentials=A.credentials||this.credentials||'omit',(A.headers||!this.headers)&&(this.headers=new f(A.headers)),this.method=o(A.method||this.method||'GET'),this.mode=A.mode||this.mode||null,this.referrer=null,('GET'===this.method||'HEAD'===this.method)&&B)throw new TypeError('Body not allowed for GET or HEAD requests');this._initBody(B)}function q(z){var A=new FormData;return z.trim().split('&').forEach(function(B){if(B){var C=B.split('='),D=C.shift().replace(/\+/g,' '),E=C.join('=').replace(/\+/g,' ');A.append(decodeURIComponent(D),decodeURIComponent(E))}}),A}function r(z){var A=new f;return z.split('\r\n').forEach(function(B){var C=B.split(':'),D=C.shift().trim();if(D){var E=C.join(':').trim();A.append(D,E)}}),A}function s(z,A){A||(A={}),this.type='default',this.status='status'in A?A.status:200,this.ok=200<=this.status&&300>this.status,this.statusText='statusText'in A?A.statusText:'OK',this.headers=new f(A.headers),this.url=A.url||'',this._initBody(z)}if(!a.fetch){var t={searchParams:'URLSearchParams'in a,iterable:'Symbol'in a&&'iterator'in Symbol,blob:'FileReader'in a&&'Blob'in a&&function(){try{return new Blob,!0}catch(z){return!1}}(),formData:'FormData'in a,arrayBuffer:'ArrayBuffer'in a};if(t.arrayBuffer)var u=['[object Int8Array]','[object Uint8Array]','[object Uint8ClampedArray]','[object Int16Array]','[object Uint16Array]','[object Int32Array]','[object Uint32Array]','[object Float32Array]','[object Float64Array]'],v=function(z){return z&&DataView.prototype.isPrototypeOf(z)},w=ArrayBuffer.isView||function(z){return z&&-1<u.indexOf(Object.prototype.toString.call(z))};f.prototype.append=function(z,A){z=b(z),A=c(A);var B=this.map[z];this.map[z]=B?B+','+A:A},f.prototype['delete']=function(z){delete this.map[b(z)]},f.prototype.get=function(z){return z=b(z),this.has(z)?this.map[z]:null},f.prototype.has=function(z){return this.map.hasOwnProperty(b(z))},f.prototype.set=function(z,A){this.map[b(z)]=c(A)},f.prototype.forEach=function(z,A){for(var B in this.map)this.map.hasOwnProperty(B)&&z.call(A,this.map[B],B,this)},f.prototype.keys=function(){var z=[];return this.forEach(function(A,B){z.push(B)}),d(z)},f.prototype.values=function(){var z=[];return this.forEach(function(A){z.push(A)}),d(z)},f.prototype.entries=function(){var z=[];return this.forEach(function(A,B){z.push([B,A])}),d(z)},t.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);var x=['DELETE','GET','HEAD','OPTIONS','POST','PUT'];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},n.call(p.prototype),n.call(s.prototype),s.prototype.clone=function(){return new s(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},s.error=function(){var z=new s(null,{status:0,statusText:''});return z.type='error',z};var y=[301,302,303,307,308];s.redirect=function(z,A){if(-1===y.indexOf(A))throw new RangeError('Invalid status code');return new s(null,{status:A,headers:{location:z}})},a.Headers=f,a.Request=p,a.Response=s,a.fetch=function(z,A){return new Promise(function(B,C){var D=new p(z,A),E=new XMLHttpRequest;E.onload=function(){var F={status:E.status,statusText:E.statusText,headers:r(E.getAllResponseHeaders()||'')};F.url='responseURL'in E?E.responseURL:F.headers.get('X-Request-URL');var G='response'in E?E.response:E.responseText;B(new s(G,F))},E.onerror=function(){C(new TypeError('Network request failed'))},E.ontimeout=function(){C(new TypeError('Network request failed'))},E.open(D.method,D.url,!0),'include'===D.credentials&&(E.withCredentials=!0),'responseType'in E&&t.blob&&(E.responseType='blob'),D.headers.forEach(function(F,G){E.setRequestHeader(G,F)}),E.send('undefined'==typeof D._bodyInit?null:D._bodyInit)})},a.fetch.polyfill=!0}})('undefined'==typeof self?this:self);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

module.exports={"default":__webpack_require__(86),__esModule:!0};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

module.exports={"default":__webpack_require__(87),__esModule:!0};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

module.exports={"default":__webpack_require__(88),__esModule:!0};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

module.exports={"default":__webpack_require__(89),__esModule:!0};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

module.exports={"default":__webpack_require__(90),__esModule:!0};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=!0,exports.default=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=!0;var _defineProperty=__webpack_require__(43),_defineProperty2=_interopRequireDefault(_defineProperty);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=function(){function a(b,c){for(var d=0;d<c.length;d++){var e=c[d];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),(0,_defineProperty2.default)(b,e.key,e)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=!0;var _defineProperties=__webpack_require__(42),_defineProperties2=_interopRequireDefault(_defineProperties),_freeze=__webpack_require__(44),_freeze2=_interopRequireDefault(_freeze);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=function(a,b){return(0,_freeze2.default)((0,_defineProperties2.default)(a,{raw:{value:(0,_freeze2.default)(b)}}))};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=!0;var _from=__webpack_require__(40),_from2=_interopRequireDefault(_from);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return(0,_from2.default)(a)};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/**
 * @class TemplateTag
 * @classdesc Consumes a pipeline of composeable transformer plugins and produces a template tag.
 */var _templateObject=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(['',''],['','']),TemplateTag=function(){/**
   * constructs a template tag
   * @constructs TemplateTag
   * @param  {...Object} [...transformers] - an array or arguments list of transformers
   * @return {Function}                    - a template tag
   */function a(){for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];// return an ES2015 template tag
return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this,a),c.length&&Array.isArray(c[0])&&(c=c[0]),this.transformers=c.map(function(e){return'function'==typeof e?e():e}),this.tag.bind(this)}/**
   * Applies all transformers to a template literal tagged with this method.
   * If a function is passed as the first argument, assumes the function is a template tag
   * and applies it to the template, returning a template tag.
   * @param  {(Function|Array<String>)} args[0] - Either a template tag or an array containing template strings separated by identifier
   * @param  {...*} [args[1]]                   - Optional list of substitution values.
   * @return {(String|Function)}                - Either an intermediary tag function or the results of processing the template.
   */return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(a,[{key:'tag',value:function(){for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];// if the first argument passed is a function, assume it is a template tag and return
// an intermediary tag that processes the template using the aforementioned tag, passing the
// result to our tag
return'function'==typeof d[0]?this.interimTag.bind(this,d.shift()):this.transformEndResult(d.shift().reduce(this.processSubstitutions.bind(this,d)));// else, return a transformed end result of processing the template with our tag
}/**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */},{key:'interimTag',value:function(c,d){for(var e=arguments.length,f=Array(2<e?e-2:0),g=2;g<e;g++)f[g-2]=arguments[g];return this.tag(_templateObject,c.apply(void 0,[d].concat(f)))}/**
     * Performs bulk processing on the tagged template, transforming each substitution and then
     * concatenating the resulting values into a string.
     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
     * @param  {String}   resultSoFar   - this iteration's result string so far
     * @param  {String}   remainingPart - the template chunk after the current substitution
     * @return {String}                 - the result of joining this iteration's processed substitution with the result
     */},{key:'processSubstitutions',value:function(c,d,e){var f=this.transformSubstitution(c.shift(),d);return d+f+e}/**
     * When a substitution is encountered, iterates through each transformer and applies the transformer's
     * `onSubstitution` method to the substitution.
     * @param  {*}      substitution - The current substitution
     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
     * @return {*}                   - The final result of applying all substitution transformations.
     */},{key:'transformSubstitution',value:function(c,d){return this.transformers.reduce(function(f,g){return g.onSubstitution?g.onSubstitution(f,d):f},c)}/**
     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
     * template literal after all substitutions have finished processing.
     * @param  {String} endResult - The processed template, just before it is returned from the tag
     * @return {String}           - The final results of processing each transformer
     */},{key:'transformEndResult',value:function(c){return this.transformers.reduce(function(e,f){return f.onEndResult?f.onEndResult(e):e},c)}}]),a}();/* harmony default export */ exports["a"] = TemplateTag;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html__ = __webpack_require__(16);
/* unused harmony reexport default */


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__ = __webpack_require__(1);
var commaLists=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__["a" /* default */])({separator:','}),__WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__["a" /* default */],__WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = commaLists;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commaLists__ = __webpack_require__(51);
/* unused harmony reexport default */


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__ = __webpack_require__(1);
var commaListsAnd=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__["a" /* default */])({separator:',',conjunction:'and'}),__WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__["a" /* default */],__WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = commaListsAnd;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commaListsAnd__ = __webpack_require__(53);
/* unused harmony reexport default */


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__ = __webpack_require__(1);
var commaListsOr=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__["a" /* default */])({separator:',',conjunction:'or'}),__WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__["a" /* default */],__WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = commaListsOr;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commaListsOr__ = __webpack_require__(55);
/* unused harmony reexport default */


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splitStringTransformer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__removeNonPrintingValuesTransformer__ = __webpack_require__(24);
var html=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__splitStringTransformer__["a" /* default */])('\n'),__WEBPACK_IMPORTED_MODULE_5__removeNonPrintingValuesTransformer__["a" /* default */],__WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__["a" /* default */],__WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__["a" /* default */],__WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__["a" /* default */]);/* harmony default export */ exports["a"] = html;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var defaults={separator:'',conjunction:'',serial:!1},inlineArrayTransformer=function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:defaults;return{onSubstitution:function(d,e){// only operate on arrays
if(Array.isArray(d)){var f=b.separator,g=b.conjunction,h=b.serial,i=e.match(/(\s+)$/);// join each item in the array into a string where each item is separated by separator
// be sure to maintain indentation
// if conjunction is set, replace the last separator with conjunction
if(d=i?d.join(f+i[1]):d.join(f+' '),g){var j=d.lastIndexOf(f);d=d.substr(0,j)+(h?f:'')+' '+g+d.substr(j+1)}}return d}}};/**
 * Converts an array substitution to a string containing a list
 * @param  {String} [opts.separator = ''] - the character that separates each item
 * @param  {String} [opts.conjunction = '']  - replace the last separator with this
 * @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
 *
 * @return {Object}                     - a TemplateTag transformer
 *//* harmony default export */ exports["a"] = inlineArrayTransformer;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inlineLists__ = __webpack_require__(60);
/* unused harmony reexport default */


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__ = __webpack_require__(1);
var inlineLists=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__["a" /* default */],__WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__["a" /* default */],__WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = inlineLists;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__oneLine__ = __webpack_require__(62);
/* unused harmony reexport default */


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trimResultTransformer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replaceResultTransformer__ = __webpack_require__(5);
var oneLine=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__replaceResultTransformer__["a" /* default */])(/(?:\s+)/g,' '),__WEBPACK_IMPORTED_MODULE_1__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = oneLine;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__oneLineCommaLists__ = __webpack_require__(64);
/* unused harmony reexport default */


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inlineArrayTransformer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__replaceResultTransformer__ = __webpack_require__(5);
var oneLineCommaLists=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__inlineArrayTransformer__["a" /* default */])({separator:','}),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__replaceResultTransformer__["a" /* default */])(/(?:\s+)/g,' '),__WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = oneLineCommaLists;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__oneLineCommaListsAnd__ = __webpack_require__(66);
/* unused harmony reexport default */


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inlineArrayTransformer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__replaceResultTransformer__ = __webpack_require__(5);
var oneLineCommaListsAnd=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__inlineArrayTransformer__["a" /* default */])({separator:',',conjunction:'and'}),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__replaceResultTransformer__["a" /* default */])(/(?:\s+)/g,' '),__WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = oneLineCommaListsAnd;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__oneLineCommaListsOr__ = __webpack_require__(68);
/* unused harmony reexport default */


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inlineArrayTransformer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__replaceResultTransformer__ = __webpack_require__(5);
var oneLineCommaListsOr=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__inlineArrayTransformer__["a" /* default */])({separator:',',conjunction:'or'}),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__replaceResultTransformer__["a" /* default */])(/(?:\s+)/g,' '),__WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = oneLineCommaListsOr;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__oneLineInlineLists__ = __webpack_require__(70);
/* unused harmony reexport default */


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inlineArrayTransformer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__replaceResultTransformer__ = __webpack_require__(5);
var oneLineInlineLists=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__inlineArrayTransformer__["a" /* default */],__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__replaceResultTransformer__["a" /* default */])(/(?:\s+)/g,' '),__WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = oneLineInlineLists;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__oneLineTrim__ = __webpack_require__(72);
/* unused harmony reexport default */


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trimResultTransformer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replaceResultTransformer__ = __webpack_require__(5);
var oneLineTrim=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__replaceResultTransformer__["a" /* default */])(/(?:\n\s+)/g,''),__WEBPACK_IMPORTED_MODULE_1__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = oneLineTrim;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan__);
var isValidValue=function(b){return null!=b&&!__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan___default()(b)&&'boolean'!=typeof b},removeNonPrintingValuesTransformer=function(){return{onSubstitution:function(c){return Array.isArray(c)?c.filter(isValidValue):isValidValue(c)?c:''}}};/* harmony default export */ exports["a"] = removeNonPrintingValuesTransformer;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
 * @param  {*}               replaceWith - the replacement value
 * @return {Object}                      - a TemplateTag transformer
 */var replaceResultTransformer=function(b,c){return{onEndResult:function(e){if(null==b||null==c)throw new Error('replaceResultTransformer requires at least 2 arguments.');return e.replace(b,c)}}};/* harmony default export */ exports["a"] = replaceResultTransformer;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var replaceSubstitutionTransformer=function(b,c){return{onSubstitution:function(e){if(null==b||null==c)throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');// Do not touch if null or undefined
return null==e?e:e.toString().replace(b,c)}}};/* harmony default export */ exports["a"] = replaceSubstitutionTransformer;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__safeHtml__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__safeHtml__["a"]; });


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splitStringTransformer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__replaceSubstitutionTransformer__ = __webpack_require__(25);
var safeHtml=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__splitStringTransformer__["a" /* default */])('\n'),__WEBPACK_IMPORTED_MODULE_2__inlineArrayTransformer__["a" /* default */],__WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__["a" /* default */],__WEBPACK_IMPORTED_MODULE_3__trimResultTransformer__["a" /* default */],__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__replaceSubstitutionTransformer__["a" /* default */])(/&/g,'&amp;'),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__replaceSubstitutionTransformer__["a" /* default */])(/</g,'&lt;'),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__replaceSubstitutionTransformer__["a" /* default */])(/>/g,'&gt;'),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__replaceSubstitutionTransformer__["a" /* default */])(/"/g,'&quot;'),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__replaceSubstitutionTransformer__["a" /* default */])(/'/g,'&#x27;'),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__replaceSubstitutionTransformer__["a" /* default */])(/`/g,'&#x60;'));/* harmony default export */ exports["a"] = safeHtml;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html__ = __webpack_require__(16);
/* unused harmony reexport default */


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var splitStringTransformer=function(b){return{onSubstitution:function(d){if(null!=b&&'string'==typeof b)'string'==typeof d&&d.includes(b)&&(d=d.split(b));else throw new Error('You need to specify a string character to split by.');return d}}};/* harmony default export */ exports["a"] = splitStringTransformer;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stripIndent__ = __webpack_require__(81);
/* unused harmony reexport default */


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__ = __webpack_require__(1);
var stripIndent=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__["a" /* default */],__WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = stripIndent;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/**
 * strips indentation from a template literal
 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return {Object}                  - a TemplateTag transformer
 */var stripIndentTransformer=function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'initial';return{onEndResult:function(d){if('initial'===b){// remove the shortest leading indentation from each line
var e=d.match(/^[ \t]*(?=\S)/gm);// return early if there's nothing to strip
if(null===e)return d;var f=Math.min.apply(Math,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(e.map(function(h){return h.length}))),g=new RegExp('^[ \\t]{'+f+'}','gm');d=0<f?d.replace(g,''):d}else if('all'===b)d=d.split('\n').map(function(h){return h.trimLeft()}).join('\n');else throw new Error('Unknown type: '+b);return d}}};/* harmony default export */ exports["a"] = stripIndentTransformer;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stripIndents__ = __webpack_require__(84);
/* unused harmony reexport default */


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TemplateTag__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__ = __webpack_require__(1);
var stripIndents=new __WEBPACK_IMPORTED_MODULE_0__TemplateTag__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stripIndentTransformer__["a" /* default */])('all'),__WEBPACK_IMPORTED_MODULE_2__trimResultTransformer__["a" /* default */]);/* unused harmony default export */ var _unused_webpack_default_export = stripIndents;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * TemplateTag transformer that trims whitespace on the end result of a tagged template
 * @param  {String} side = '' - The side of the string to trim. Can be 'left' or 'right'
 * @return {Object}           - a TemplateTag transformer
 */var trimResultTransformer=function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'';return{onEndResult:function(d){// uppercase the first letter of side value
if(b=b.toLowerCase(),'left'===b||'right'===b)b=b.charAt(0).toUpperCase()+b.slice(1);else if(''!==b)throw new Error('Side not supported: '+b);return d['trim'+b]()}}};/* harmony default export */ exports["a"] = trimResultTransformer;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(120),__webpack_require__(115),module.exports=__webpack_require__(4).Array.from;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(116),module.exports=__webpack_require__(4).Number.isNaN;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(117);var $Object=__webpack_require__(4).Object;module.exports=function(b,c){return $Object.defineProperties(b,c)};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(118);var $Object=__webpack_require__(4).Object;module.exports=function(b,c,d){return $Object.defineProperty(b,c,d)};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(119),module.exports=__webpack_require__(4).Object.freeze;

/***/ },
/* 91 */
/***/ function(module, exports) {

module.exports=function(a){if('function'!=typeof a)throw TypeError(a+' is not a function!');return a};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(33),toLength=__webpack_require__(34),toIndex=__webpack_require__(112);module.exports=function(a){return function(b,c,d){var h,e=toIObject(b),f=toLength(e.length),g=toIndex(d,f);// Array#includes uses SameValueZero equality algorithm
if(a&&c!=c){for(;f>g;)if(h=e[g++],h!=h)return!0;// Array#toIndex ignores holes, Array#includes - not
}else for(;f>g;g++)if((a||g in e)&&e[g]===c)return a||g||0;return!a&&-1}};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof=__webpack_require__(26),TAG=__webpack_require__(6)('toStringTag')// ES3 wrong here
,ARG='Arguments'==cof(function(){return arguments}()),tryGet=function(a,b){try{return a[b]}catch(c){/* empty */}};// fallback for IE11 Script Access Denied error
module.exports=function(a){var b,c,d;return a===void 0?'Undefined':null===a?'Null'// @@toStringTag case
:'string'==typeof(c=tryGet(b=Object(a),TAG))?c// builtinTag case
:ARG?cof(b)// ES3 arguments fallback
:'Object'==(d=cof(b))&&'function'==typeof b.callee?'Arguments':d};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var $defineProperty=__webpack_require__(9),createDesc=__webpack_require__(20);module.exports=function(a,b,c){b in a?$defineProperty.f(a,b,createDesc(0,c)):a[b]=c};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

module.exports=__webpack_require__(10).document&&document.documentElement;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

module.exports=!__webpack_require__(7)&&!__webpack_require__(14)(function(){return 7!=Object.defineProperty(__webpack_require__(28)('div'),'a',{get:function(){return 7}}).a});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(26);module.exports=Object('z').propertyIsEnumerable(0)?Object:function(a){return'String'==cof(a)?a.split(''):Object(a)};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators=__webpack_require__(19),ITERATOR=__webpack_require__(6)('iterator'),ArrayProto=Array.prototype;module.exports=function(a){return a!==void 0&&(Iterators.Array===a||ArrayProto[ITERATOR]===a)};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject=__webpack_require__(13);module.exports=function(a,b,c,d){try{return d?b(anObject(c)[0],c[1]):b(c);// 7.4.6 IteratorClose(iterator, completion)
}catch(g){var f=a['return'];throw void 0!==f&&anObject(f.call(a)),g}};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var create=__webpack_require__(105),descriptor=__webpack_require__(20),setToStringTag=__webpack_require__(31),IteratorPrototype={};// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype,__webpack_require__(6)('iterator'),function(){return this}),module.exports=function(a,b,c){a.prototype=create(IteratorPrototype,{next:descriptor(1,c)}),setToStringTag(a,b+' Iterator')};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var LIBRARY=__webpack_require__(103),$export=__webpack_require__(8),redefine=__webpack_require__(110),hide=__webpack_require__(15),has=__webpack_require__(11),Iterators=__webpack_require__(19),$iterCreate=__webpack_require__(100),setToStringTag=__webpack_require__(31),getPrototypeOf=__webpack_require__(106),ITERATOR=__webpack_require__(6)('iterator'),BUGGY=!([].keys&&'next'in[].keys())// Safari has buggy iterators w/o `next`
,FF_ITERATOR='@@iterator',KEYS='keys',VALUES='values',returnThis=function(){return this};module.exports=function(a,b,c,d,e,f,g){$iterCreate(c,b,d);var q,r,s,h=function(t){return!BUGGY&&t in l?l[t]:t===KEYS?function(){return new c(this,t)}:t===VALUES?function(){return new c(this,t)}:function(){return new c(this,t)}},i=b+' Iterator',j=e==VALUES,k=!1,l=a.prototype,m=l[ITERATOR]||l[FF_ITERATOR]||e&&l[e],n=m||h(e),o=e?j?h('entries'):n:void 0,p='Array'==b?l.entries||m:m;// Fix native
if(p&&(s=getPrototypeOf(p.call(new a)),s!==Object.prototype&&(setToStringTag(s,i,!0),!LIBRARY&&!has(s,ITERATOR)&&hide(s,ITERATOR,returnThis))),j&&m&&m.name!==VALUES&&(k=!0,n=function(){return m.call(this)}),(!LIBRARY||g)&&(BUGGY||k||!l[ITERATOR])&&hide(l,ITERATOR,n),Iterators[b]=n,Iterators[i]=returnThis,e)if(q={values:j?n:h(VALUES),keys:f?n:h(KEYS),entries:o},g)for(r in q)r in l||redefine(l,r,q[r]);else $export($export.P+$export.F*(BUGGY||k),b,q);return q};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

var ITERATOR=__webpack_require__(6)('iterator'),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR]();riter['return']=function(){SAFE_CLOSING=!0},Array.from(riter,function(){throw 2})}catch(a){/* empty */}module.exports=function(a,b){if(!b&&!SAFE_CLOSING)return!1;var c=!1;try{var d=[7],f=d[ITERATOR]();f.next=function(){return{done:c=!0}},d[ITERATOR]=function(){return f},a(d)}catch(g){/* empty */}return c};

/***/ },
/* 103 */
/***/ function(module, exports) {

module.exports=!0;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

var META=__webpack_require__(23)('meta'),isObject=__webpack_require__(12),has=__webpack_require__(11),setDesc=__webpack_require__(9).f,id=0,isExtensible=Object.isExtensible||function(){return!0},FREEZE=!__webpack_require__(14)(function(){return isExtensible(Object.preventExtensions({}))}),setMeta=function(a){setDesc(a,META,{value:{i:'O'+ ++id,// object ID
w:{}// weak collections IDs
}})},fastKey=function(a,b){// return primitive with prefix
if(!isObject(a))return'symbol'==typeof a?a:('string'==typeof a?'S':'P')+a;if(!has(a,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(a))return'F';// not necessary to add metadata
if(!b)return'E';// add missing metadata
setMeta(a)}return a[META].i},getWeak=function(a,b){if(!has(a,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(a))return!0;// not necessary to add metadata
if(!b)return!1;// add missing metadata
setMeta(a)}return a[META].w},onFreeze=function(a){return FREEZE&&meta.NEED&&isExtensible(a)&&!has(a,META)&&setMeta(a),a},meta=module.exports={KEY:META,NEED:!1,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze};// add metadata on freeze-family methods calling

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject=__webpack_require__(13),dPs=__webpack_require__(30),enumBugKeys=__webpack_require__(29),IE_PROTO=__webpack_require__(21)('IE_PROTO'),Empty=function(){/* empty */},PROTOTYPE='prototype',createDict=function(){// Thrash, waste and sodomy: IE GC bug
var e,a=__webpack_require__(28)('iframe'),b=enumBugKeys.length,c='<',d='>';for(a.style.display='none',__webpack_require__(95).appendChild(a),a.src='javascript:',e=a.contentWindow.document,e.open(),e.write(c+'script'+d+'document.F=Object'+c+'/script'+d),e.close(),createDict=e.F;b--;)delete createDict[PROTOTYPE][enumBugKeys[b]];return createDict()};// Create object with fake `null` prototype: use iframe Object with cleared prototype
module.exports=Object.create||function(b,c){var d;return null===b?d=createDict():(Empty[PROTOTYPE]=anObject(b),d=new Empty,Empty[PROTOTYPE]=null,d[IE_PROTO]=b),void 0===c?d:dPs(d,c)};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has=__webpack_require__(11),toObject=__webpack_require__(35),IE_PROTO=__webpack_require__(21)('IE_PROTO'),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(a){return a=toObject(a),has(a,IE_PROTO)?a[IE_PROTO]:'function'==typeof a.constructor&&a instanceof a.constructor?a.constructor.prototype:a instanceof Object?ObjectProto:null};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

var has=__webpack_require__(11),toIObject=__webpack_require__(33),arrayIndexOf=__webpack_require__(92)(!1),IE_PROTO=__webpack_require__(21)('IE_PROTO');module.exports=function(a,b){var f,c=toIObject(a),d=0,e=[];for(f in c)f!=IE_PROTO&&has(c,f)&&e.push(f);// Don't enum bug & hidden keys
for(;b.length>d;)has(c,f=b[d++])&&(~arrayIndexOf(e,f)||e.push(f));return e};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(107),enumBugKeys=__webpack_require__(29);module.exports=Object.keys||function(b){return $keys(b,enumBugKeys)};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export=__webpack_require__(8),core=__webpack_require__(4),fails=__webpack_require__(14);module.exports=function(a,b){var c=(core.Object||{})[a]||Object[a],d={};d[a]=b(c),$export($export.S+$export.F*fails(function(){c(1)}),'Object',d)};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

module.exports=__webpack_require__(15);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

var toInteger=__webpack_require__(22),defined=__webpack_require__(18);// true  -> String#at
// false -> String#codePointAt
module.exports=function(c){return function(d,e){var j,k,f=defined(d)+'',g=toInteger(e),h=f.length;return 0>g||g>=h?c?'':void 0:(j=f.charCodeAt(g),55296>j||56319<j||g+1===h||56320>(k=f.charCodeAt(g+1))||57343<k?c?f.charAt(g):j:c?f.slice(g,g+2):(j-55296<<10)+(k-56320)+65536)}};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

var toInteger=__webpack_require__(22),max=Math.max,min=Math.min;module.exports=function(a,b){return a=toInteger(a),0>a?max(a+b,0):min(a,b)};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(12);// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(a,b){if(!isObject(a))return a;var c,d;if(b&&'function'==typeof(c=a.toString)&&!isObject(d=c.call(a)))return d;if('function'==typeof(c=a.valueOf)&&!isObject(d=c.call(a)))return d;if(!b&&'function'==typeof(c=a.toString)&&!isObject(d=c.call(a)))return d;throw TypeError('Can\'t convert object to primitive value')};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

var classof=__webpack_require__(93),ITERATOR=__webpack_require__(6)('iterator'),Iterators=__webpack_require__(19);module.exports=__webpack_require__(4).getIteratorMethod=function(a){if(a!=void 0)return a[ITERATOR]||a['@@iterator']||Iterators[classof(a)]};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var ctx=__webpack_require__(27),$export=__webpack_require__(8),toObject=__webpack_require__(35),call=__webpack_require__(99),isArrayIter=__webpack_require__(98),toLength=__webpack_require__(34),createProperty=__webpack_require__(94),getIterFn=__webpack_require__(114);$export($export.S+$export.F*!__webpack_require__(102)(function(a){Array.from(a)}),'Array',{// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(b/*, mapfn = undefined, thisArg = undefined*/){var j,k,l,m,c=toObject(b),d='function'==typeof this?this:Array,e=arguments.length,f=1<e?arguments[1]:void 0,g=void 0!==f,h=0,i=getIterFn(c);// if object isn't iterable or it's array with default iterator - use simple case
if(g&&(f=ctx(f,2<e?arguments[2]:void 0,2)),void 0!=i&&!(d==Array&&isArrayIter(i)))for(m=i.call(c),k=new d;!(l=m.next()).done;h++)createProperty(k,h,g?call(m,f,[l.value,h],!0):l.value);else for(j=toLength(c.length),k=new d(j);j>h;h++)createProperty(k,h,g?f(c[h],h):c[h]);return k.length=h,k}});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export=__webpack_require__(8);$export($export.S,'Number',{isNaN:function(b){return b!=b}});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

var $export=__webpack_require__(8);// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S+$export.F*!__webpack_require__(7),'Object',{defineProperties:__webpack_require__(30)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

var $export=__webpack_require__(8);// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S+$export.F*!__webpack_require__(7),'Object',{defineProperty:__webpack_require__(9).f});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject=__webpack_require__(12),meta=__webpack_require__(104).onFreeze;__webpack_require__(109)('freeze',function(a){return function(c){return a&&isObject(c)?a(meta(c)):c}});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var $at=__webpack_require__(111)(!0);// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(101)(String,'String',function(a){this._t=a+'',this._i=0},function(){var c,a=this._t,b=this._i;return b>=a.length?{value:void 0,done:!0}:(c=$at(a,b),this._i+=c.length,{value:c,done:!1})});

/***/ },
/* 121 */
/***/ function(module, exports) {

module.exports=isPromise;function isPromise(a){return!!a&&('object'==typeof a||'function'==typeof a)&&'function'==typeof a.then}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_csvparser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_csvparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_csvparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_promise_worker_register__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_promise_worker_register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_promise_worker_register__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_common_tags__ = __webpack_require__(36);
function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}return info.done?void resolve(value):Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}return step('next')})}}const rawGitURL=(a,b,c='master')=>{const d=new URL(a);return`https://cdn.rawgit.com${d.pathname}/${c}/${b}`};__WEBPACK_IMPORTED_MODULE_2_promise_worker_register___default()((()=>{var _ref=_asyncToGenerator(function*(a){const b=yield fetch(a),c=yield b.text(),d=__WEBPACK_IMPORTED_MODULE_1_js_csvparser___default()(c),e=d.data.map(function(f){if(f[5]){const g=f[5].match(/(\d+)$/);if(g)return{title:f[0],author:f[1],url:rawGitURL(f[5],`${g[1]}.txt`)}}}).filter(function(f){return f&&f.title&&f.author&&f.url});return __WEBPACK_IMPORTED_MODULE_3_common_tags__["a" /* html */]`
    ${e.map(function(f){return __WEBPACK_IMPORTED_MODULE_3_common_tags__["b" /* safeHtml */]`
        <a class="book"
           title="${f.title} by ${f.author}"
           href="read.html?url=${encodeURIComponent(f.url)}&title=${encodeURIComponent(f.title)}">
          <div class="title">${f.title}</div>
          <div class="author">${f.author}</div>
        </a>`})}
  `});return function(_x){return _ref.apply(this,arguments)}})());

/***/ }
/******/ ]);