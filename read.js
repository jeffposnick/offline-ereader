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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon.png";

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "manifest.json";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
const columnGap = 40;
/* harmony export (immutable) */ exports["a"] = columnGap;

const bookListUrl = 'https://cdn.rawgit.com/gitenberg-dev/Second-Folio/master/Gitenberg%20Book%20List.csv';
/* harmony export (immutable) */ exports["b"] = bookListUrl;



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise_worker__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise_worker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_promise_worker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_idb_keyval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_idb_keyval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_idb_keyval__);



/* harmony default export */ exports["a"] = async (url, Worker) => {
  let value = await __WEBPACK_IMPORTED_MODULE_1_idb_keyval___default.a.get(url);
  if (!value) {
    const promiseWorker = new __WEBPACK_IMPORTED_MODULE_0_promise_worker___default.a(new Worker());
    value = await promiseWorker.postMessage(url);
    // Don't await here, so that we can return right away.
    __WEBPACK_IMPORTED_MODULE_1_idb_keyval___default.a.set(url, value);
  }
  return value;
};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  'use strict';
  var db;

  function getDB() {
    if (!db) {
      db = new Promise(function(resolve, reject) {
        var openreq = indexedDB.open('keyval-store', 1);

        openreq.onerror = function() {
          reject(openreq.error);
        };

        openreq.onupgradeneeded = function() {
          // First time setup: create an empty object store
          openreq.result.createObjectStore('keyval');
        };

        openreq.onsuccess = function() {
          resolve(openreq.result);
        };
      });
    }
    return db;
  }

  function withStore(type, callback) {
    return getDB().then(function(db) {
      return new Promise(function(resolve, reject) {
        var transaction = db.transaction('keyval', type);
        transaction.oncomplete = function() {
          resolve();
        };
        transaction.onerror = function() {
          reject(transaction.error);
        };
        callback(transaction.objectStore('keyval'));
      });
    });
  }

  var idbKeyval = {
    get: function(key) {
      var req;
      return withStore('readonly', function(store) {
        req = store.get(key);
      }).then(function() {
        return req.result;
      });
    },
    set: function(key, value) {
      return withStore('readwrite', function(store) {
        store.put(value, key);
      });
    },
    delete: function(key) {
      return withStore('readwrite', function(store) {
        store.delete(key);
      });
    },
    clear: function() {
      return withStore('readwrite', function(store) {
        store.clear();
      });
    },
    keys: function() {
      var keys = [];
      return withStore('readonly', function(store) {
        // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
        // And openKeyCursor isn't supported by Safari.
        (store.openKeyCursor || store.openCursor).call(store).onsuccess = function() {
          if (!this.result) return;
          keys.push(this.result.key);
          this.result.continue();
        };
      }).then(function() {
        return keys;
      });
    }
  };

  if (typeof module != 'undefined' && module.exports) {
    module.exports = idbKeyval;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return idbKeyval;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    self.idbKeyval = idbKeyval;
  }
}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var immediate = __webpack_require__(5);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && typeof obj === 'object' && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


/* istanbul ignore next */
var MyPromise = typeof Promise !== 'undefined' ? Promise : __webpack_require__(6);

var messageIds = 0;

function parseJsonSafely(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}

function onMessage(self, e) {
  var message = parseJsonSafely(e.data);
  if (!message) {
    // Ignore - this message is not for us.
    return;
  }
  var messageId = message[0];
  var error = message[1];
  var result = message[2];

  var callback = self._callbacks[messageId];

  if (!callback) {
    // Ignore - user might have created multiple PromiseWorkers.
    // This message is not for us.
    return;
  }

  delete self._callbacks[messageId];
  callback(error, result);
}

function PromiseWorker(worker) {
  var self = this;
  self._worker = worker;
  self._callbacks = {};

  worker.addEventListener('message', function (e) {
    onMessage(self, e);
  });
}

PromiseWorker.prototype.postMessage = function (userMessage) {
  var self = this;
  var messageId = messageIds++;

  var messageToSend = [messageId, userMessage];

  return new MyPromise(function (resolve, reject) {
    self._callbacks[messageId] = function (error, result) {
      if (error) {
        return reject(new Error(error.message));
      }
      resolve(result);
    };
    var jsonMessage = JSON.stringify(messageToSend);
    /* istanbul ignore if */
    if (typeof self._worker.controller !== 'undefined') {
      // service worker, use MessageChannels because e.source is broken in Chrome < 51:
      // https://bugs.chromium.org/p/chromium/issues/detail?id=543198
      var channel = new MessageChannel();
      channel.port1.onmessage = function (e) {
        onMessage(self, e);
      };
      self._worker.controller.postMessage(jsonMessage, [channel.port2]);
    } else {
      // web worker
      self._worker.postMessage(jsonMessage);
    }
  });
};

module.exports = PromiseWorker;

/***/ },
/* 8 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ic_font_download_black_48px.svg";

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "read.css";

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

module.exports = function() {
	return new Worker(__webpack_require__.p + "markdown-to-html-worker.js");
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = search => {
  return new Map(search.substring(1).split('&').map(function(keyValuePair) {
    const splits = keyValuePair.split('=');
    const key = decodeURIComponent(splits[0]);
    const value = decodeURIComponent(splits[1]);

    return [key, value];
  }));
};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
class StateManager {
  constructor() {
    this.propertyCallbacks = {};
  }

  read(property) {
    return this[property];
  }

  write(property, newValue) {
    const oldValue = this[property];
    this[property] = newValue;
    if (property in this.propertyCallbacks) {
      this.propertyCallbacks[property].forEach(callback => callback(newValue, property, oldValue));
    }
  }

  listen(property, callback) {
    if (!(property in this.propertyCallbacks)) {
      this.propertyCallbacks[property] = [];
    }
    this.propertyCallbacks[property].push(callback);
  }
}
/* harmony export (immutable) */ exports["a"] = StateManager;



/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manifest_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manifest_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__manifest_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_png__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icon_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ic_font_download_black_48px_svg__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ic_font_download_black_48px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ic_font_download_black_48px_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_read_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_read_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_read_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_deserialize_url_params__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_idb_or_worker__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_state_manager__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_constants__ = __webpack_require__(2);











const state = new __WEBPACK_IMPORTED_MODULE_7__lib_state_manager__["a" /* default */]();

const nextPage = () => {
  const currentPage = state.read('currentPage');
  const totalPages = state.read('totalPages');

  if (currentPage < totalPages) {
    state.write('currentPage', currentPage + 1);
  }
};

const previousPage = () => {
  const currentPage = state.read('currentPage');

  if (currentPage > 1) {
    state.write('currentPage', currentPage - 1);
  }
};

const clickHandler = event => {
  if (event.clientX >= (window.innerWidth / 2)) {
    nextPage();
  } else {
    previousPage();
  }
};

const fontHandler = event => {
  const font = event.target.selectedOptions[0].textContent;
  state.write('font-family', font);
};

const onCurrentPageChanged = currentPage => {
  const textElement = document.querySelector('#text');
  const translateOffset = (currentPage - 1) * (textElement.clientWidth + __WEBPACK_IMPORTED_MODULE_8__lib_constants__["a" /* columnGap */]);
  document.querySelector('#text').style.transform = `translateX(-${translateOffset}px)`;
};

const onTitleChanged = title => {
  document.querySelector('#title').textContent = title;
  document.title = title;
};

const onStyleChanged = (styleValue, styleName) => {
  const textElement = document.querySelector('#text');
  textElement.style[styleName] = styleValue;
  state.write('totalPages', Math.ceil(textElement.scrollWidth / (textElement.clientWidth + __WEBPACK_IMPORTED_MODULE_8__lib_constants__["a" /* columnGap */])));
};

const onTotalPagesChanged = (newTotalPages, _, oldTotalPages) => {
  const currentPage = state.read('currentPage');
  const percentageRead = currentPage / (oldTotalPages || newTotalPages);
  state.write('currentPage', percentageRead * newTotalPages);
};

const calculateTotalPages = () => {
  const textElement = document.querySelector('#text');
  state.write('totalPages', Math.ceil(textElement.scrollWidth / (textElement.clientWidth + __WEBPACK_IMPORTED_MODULE_8__lib_constants__["a" /* columnGap */])));
};

(async () => {
  const urlParams = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_deserialize_url_params__["a" /* default */])(location.search);
  const url = urlParams.get('url');

  const bookHtml = await __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_idb_or_worker__["a" /* default */])(url, __WEBPACK_IMPORTED_MODULE_6__lib_workers_markdown_to_html_worker___default.a);

  const textElement = document.querySelector('#text');
  textElement.innerHTML = bookHtml;

  document.querySelector('#container').addEventListener('click', clickHandler);
  document.querySelector('#font').addEventListener('change', fontHandler);

  state.listen('currentPage', onCurrentPageChanged);
  state.listen('title', onTitleChanged);
  state.listen('totalPages', onTotalPagesChanged);
  ['font-family', 'line-height'].forEach(styleName => state.listen(styleName, onStyleChanged));

  state.write('title', urlParams.get('title'));
  state.write('currentPage', 1);

  calculateTotalPages();
})();


/***/ }
/******/ ]);