/*!
 * TOAST UI Grid
 * @version 4.6.1 | Tue Oct 15 2019
 * @author NHN. FE Development Lab
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tui-date-picker"), require("tui-pagination"));
	else if(typeof define === 'function' && define.amd)
		define(["tui-date-picker", "tui-pagination"], factory);
	else if(typeof exports === 'object')
		exports["Grid"] = factory(require("tui-date-picker"), require("tui-pagination"));
	else
		root["tui"] = root["tui"] || {}, root["tui"]["Grid"] = factory(root["tui"]["DatePicker"], root["tui"]["Pagination"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__33__, __WEBPACK_EXTERNAL_MODULE__104__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var CUSTOM_LF_SUBCHAR = '___tui_grid_lf___';
var CUSTOM_CR_SUBCHAR = '___tui_grid_cr___';
var LF = '\n';
var CR = '\r';
var CUSTOM_LF_REGEXP = new RegExp(CUSTOM_LF_SUBCHAR, 'g');
var CUSTOM_CR_REGEXP = new RegExp(CUSTOM_CR_SUBCHAR, 'g');
function shallowEqual(o1, o2) {
    for (var key in o1) {
        if (o1[key] !== o2[key]) {
            return false;
        }
    }
    for (var key in o2) {
        if (!(key in o1)) {
            return false;
        }
    }
    return true;
}
exports.shallowEqual = shallowEqual;
function arrayEqual(a1, a2) {
    if (a1.length !== a2.length) {
        return false;
    }
    for (var i = 0, len = a1.length; i < len; i += 1) {
        if (a1[i] !== a2[i]) {
            return false;
        }
    }
    return true;
}
exports.arrayEqual = arrayEqual;
function sum(nums) {
    return nums.reduce(function (acc, num) { return acc + num; }, 0);
}
exports.sum = sum;
function pipe(initVal) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.reduce(function (acc, fn) { return fn(acc); }, initVal);
}
exports.pipe = pipe;
function includes(arr, searchItem, searchIndex) {
    if (typeof searchIndex === 'number' && arr[searchIndex] !== searchItem) {
        return false;
    }
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (item === searchItem) {
            return true;
        }
    }
    return false;
}
exports.includes = includes;
// eslint-disable-next-line consistent-return
function find(predicate, arr) {
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var item = arr_2[_i];
        if (predicate(item)) {
            return item;
        }
    }
}
exports.find = find;
function findProp(propName, value, arr) {
    return find(function (item) { return item[propName] === value; }, arr);
}
exports.findProp = findProp;
function some(predicate, arr) {
    return !!find(predicate, arr);
}
exports.some = some;
function someProp(propName, value, arr) {
    return !!findProp(propName, value, arr);
}
exports.someProp = someProp;
function findIndex(predicate, arr) {
    for (var i = 0, len = arr.length; i < len; i += 1) {
        if (predicate(arr[i])) {
            return i;
        }
    }
    return -1;
}
exports.findIndex = findIndex;
function findPropIndex(propName, value, arr) {
    return findIndex(function (item) { return item[propName] === value; }, arr);
}
exports.findPropIndex = findPropIndex;
function findIndexes(predicate, arr) {
    return arr.reduce(function (acc, v, idx) { return (predicate(v) ? acc.concat([idx]) : acc); }, []);
}
exports.findIndexes = findIndexes;
function findPrevIndex(arr, predicate) {
    var index = findIndex(predicate, arr);
    var positiveIndex = index <= 0 ? 0 : index - 1;
    return index >= 0 ? positiveIndex : arr.length - 1;
}
exports.findPrevIndex = findPrevIndex;
function findOffsetIndex(offsets, targetOffset) {
    return findPrevIndex(offsets, function (offset) { return offset > targetOffset; });
}
exports.findOffsetIndex = findOffsetIndex;
function mapProp(propName, arr) {
    return arr.map(function (item) { return item[propName]; });
}
exports.mapProp = mapProp;
function deepMergedCopy(targetObj, obj) {
    var resultObj = tslib_1.__assign({}, targetObj);
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var prop = _a[_i];
        if (resultObj.hasOwnProperty(prop) && typeof resultObj[prop] === 'object') {
            if (Array.isArray(obj[prop])) {
                resultObj[prop] = obj[prop];
            }
            else {
                resultObj[prop] = deepMergedCopy(resultObj[prop], obj[prop]);
            }
        }
        else {
            resultObj[prop] = obj[prop];
        }
    }
    return resultObj;
}
exports.deepMergedCopy = deepMergedCopy;
function assign(targetObj, obj) {
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var prop = _a[_i];
        if (targetObj.hasOwnProperty(prop) && typeof targetObj[prop] === 'object') {
            if (Array.isArray(obj[prop])) {
                targetObj[prop] = obj[prop];
            }
            else {
                assign(targetObj[prop], obj[prop]);
            }
        }
        else {
            targetObj[prop] = obj[prop];
        }
    }
}
exports.assign = assign;
function removeArrayItem(targetItem, arr) {
    var targetIdx = findIndex(function (item) { return item === targetItem; }, arr);
    arr.splice(targetIdx, 1);
    return arr;
}
exports.removeArrayItem = removeArrayItem;
function createMapFromArray(arr, propName) {
    var resultMap = {};
    arr.forEach(function (item) {
        var key = String(item[propName]);
        resultMap[key] = item;
    });
    return resultMap;
}
exports.createMapFromArray = createMapFromArray;
function isFunction(obj) {
    return typeof obj === 'function';
}
exports.isFunction = isFunction;
function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}
exports.isObject = isObject;
function forEachObject(fn, obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            fn(obj[key], key, obj);
        }
    }
}
exports.forEachObject = forEachObject;
function hasOwnProp(obj, key) {
    return obj.hasOwnProperty(key);
}
exports.hasOwnProp = hasOwnProp;
function encodeHTMLEntity(html) {
    var entities = {
        '"': 'quot',
        '&': 'amp',
        '<': 'lt',
        '>': 'gt',
        "'": '#39'
    };
    return html.replace(/[<>&"']/g, function (match) { return "&" + entities[match] + ";"; });
}
exports.encodeHTMLEntity = encodeHTMLEntity;
function setDefaultProp(obj, key, defValue) {
    if (typeof obj[key] === 'undefined') {
        obj[key] = defValue;
    }
}
exports.setDefaultProp = setDefaultProp;
/**
 * Returns a number whose value is limited to the given range.
 * @param value - A number to force within given min-max range
 * @param min - The lower boundary of the output range
 * @param max - The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @example
 *      // limit the output of this computation to between 0 and 255
 *      value = clamp(value, 0, 255);
 */
function clamp(value, min, max) {
    var _a;
    if (min > max) {
        _a = [min, max], max = _a[0], min = _a[1];
    }
    return Math.max(min, Math.min(value, max));
}
exports.clamp = clamp;
function range(end) {
    var arr = [];
    for (var i = 0; i < end; i += 1) {
        arr.push(i);
    }
    return arr;
}
exports.range = range;
function last(arr) {
    return arr[arr.length - 1];
}
exports.last = last;
function isBlank(value) {
    if (typeof value === 'string') {
        return !value.length;
    }
    return typeof value === 'undefined' || value === null;
}
exports.isBlank = isBlank;
function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.isUndefined = isUndefined;
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
function isBoolean(value) {
    return typeof value === 'boolean';
}
exports.isBoolean = isBoolean;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
/**
 * check the emptiness(included null) of object or array. if obj parameter is null or undefind, return true
 * @param obj - target object or array
 * @returns the emptiness of obj
 */
function isEmpty(obj) {
    return (isNull(obj) ||
        isUndefined(obj) ||
        (!isUndefined(obj.length) && obj.length === 0) ||
        Object.keys(obj).length === 0);
}
exports.isEmpty = isEmpty;
function fromArray(value) {
    return Array.prototype.slice.call(value);
}
exports.fromArray = fromArray;
function convertToNumber(value) {
    if (typeof value === 'number' || isNaN(value) || isBlank(value)) {
        return value;
    }
    return Number(value);
}
exports.convertToNumber = convertToNumber;
function debounce(fn, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            timeout = -1;
            if (!immediate) {
                fn.apply(void 0, args);
            }
        };
        var callNow = immediate && !timeout;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = window.setTimeout(later, wait);
        if (callNow) {
            fn.apply(void 0, args);
        }
    };
}
exports.debounce = debounce;
function pruneObject(obj) {
    var pruned = {};
    forEachObject(function (value, key) {
        if (!isUndefined(value) && !isNull(value)) {
            pruned[key] = value;
        }
    }, obj);
    return pruned;
}
exports.pruneObject = pruneObject;
function omit(obj) {
    var propNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        propNames[_i - 1] = arguments[_i];
    }
    var resultMap = {};
    for (var key in obj) {
        if (hasOwnProp(obj, key) && !includes(propNames, key)) {
            resultMap[key] = obj[key];
        }
    }
    return resultMap;
}
exports.omit = omit;
function uniq(arr) {
    return arr.filter(function (name, index) { return arr.indexOf(name) === index; });
}
exports.uniq = uniq;
function startsWith(str, targetStr) {
    return targetStr.slice(0, str.length) === str;
}
exports.startsWith = startsWith;
function endsWith(str, targetStr) {
    var index = targetStr.lastIndexOf(str);
    return index !== -1 && index + str.length === targetStr.length;
}
exports.endsWith = endsWith;
function removeDoubleQuotes(text) {
    if (text.match(CUSTOM_LF_REGEXP)) {
        return text.substring(1, text.length - 1).replace(/""/g, '"');
    }
    return text;
}
function replaceNewlineToSubchar(text) {
    return text.replace(/"([^"]|"")*"/g, function (value) {
        return value.replace(LF, CUSTOM_LF_SUBCHAR).replace(CR, CUSTOM_CR_SUBCHAR);
    });
}
function convertTextToData(text) {
    // Each newline cell data is wrapping double quotes in the text and
    // newline characters should be replaced with substitution characters temporarily
    // before spliting the text by newline characters.
    text = replaceNewlineToSubchar(text);
    return text.split(/\r?\n/).map(function (row) {
        return row.split('\t').map(function (column) {
            return removeDoubleQuotes(column)
                .replace(CUSTOM_LF_REGEXP, LF)
                .replace(CUSTOM_CR_REGEXP, CR);
        });
    });
}
exports.convertTextToData = convertTextToData;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var CLS_PREFIX = 'tui-grid-';
exports.dataAttr = {
    ROW_KEY: 'data-row-key',
    COLUMN_NAME: 'data-column-name',
    COLUMN_INDEX: 'data-column-index',
    GRID_ID: 'data-grid-id'
};
function cls() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        var className = void 0;
        if (Array.isArray(name_1)) {
            className = name_1[0] ? name_1[1] : null;
        }
        else {
            className = name_1;
        }
        if (className) {
            result.push("" + CLS_PREFIX + className);
        }
    }
    return result.join(' ');
}
exports.cls = cls;
function hasClass(el, className) {
    return el.className.split(' ').indexOf(cls(className)) !== -1;
}
exports.hasClass = hasClass;
function findParentByTagName(el, tagName) {
    var currentEl = el;
    while (currentEl && currentEl.tagName.toLowerCase() !== tagName) {
        currentEl = currentEl.parentElement;
    }
    return currentEl;
}
exports.findParentByTagName = findParentByTagName;

function findParent(el, className) {
    var currentEl = el;
    while (currentEl && !hasClass(currentEl, className)) {
        currentEl = currentEl.parentElement;
    }
    return currentEl;
}
exports.findParent = findParent;
function getCellAddress(el) {
    var cellElement = findParentByTagName(el, 'td');
    if (!cellElement) {
        return null;
    }
    var rowKey = Number(cellElement.getAttribute(exports.dataAttr.ROW_KEY));
    var columnName = cellElement.getAttribute(exports.dataAttr.COLUMN_NAME);
    return { rowKey: rowKey, columnName: columnName };
}
exports.getCellAddress = getCellAddress;
/**
 * create style element and append it into the head element.
 * @param {String} id - element id
 * @param {String} cssString - css string
 */
function appendStyleElement(id, cssString) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = id;
    style.appendChild(document.createTextNode(cssString));
    document.getElementsByTagName('head')[0].appendChild(style);
}
exports.appendStyleElement = appendStyleElement;
function setCursorStyle(type) {
    document.body.style.cursor = type;
}
exports.setCursorStyle = setCursorStyle;
function getCoordinateWithOffset(pageX, pageY) {
    var pageXWithOffset = pageX - window.pageXOffset;
    var pageYWithOffset = pageY - window.pageYOffset;
    return [pageXWithOffset, pageYWithOffset];
}
exports.getCoordinateWithOffset = getCoordinateWithOffset;
function setDataInSpanRange(value, data, colspanRange, rowspanRange) {
    var startColspan = colspanRange[0], endColspan = colspanRange[1];
    var startRowspan = rowspanRange[0], endRowspan = rowspanRange[1];
    for (var rowIdx = startRowspan; rowIdx < endRowspan; rowIdx += 1) {
        for (var columnIdx = startColspan; columnIdx < endColspan; columnIdx += 1) {
            data[rowIdx][columnIdx] = startRowspan === rowIdx && startColspan === columnIdx ? value : ' ';
        }
    }
}
function convertTableToData(rows) {
    var data = [];
    var colspanRange, rowspanRange;
    for (var index = 0; index < rows.length; index += 1) {
        data[index] = [];
    }
    common_1.fromArray(rows).forEach(function (tr, rowIndex) {
        var columnIndex = 0;
        common_1.fromArray(tr.cells).forEach(function (td) {
            var text = td.textContent || td.innerText;
            while (data[rowIndex][columnIndex]) {
                columnIndex += 1;
            }
            colspanRange = [columnIndex, columnIndex + (td.colSpan || 1)];
            rowspanRange = [rowIndex, rowIndex + (td.rowSpan || 1)];
            setDataInSpanRange(text, data, colspanRange, rowspanRange);
            columnIndex = colspanRange[1];
        });
    });
    return data;
}
exports.convertTableToData = convertTableToData;
function isSupportWindowClipboardData() {
    return !!window.clipboardData;
}
exports.isSupportWindowClipboardData = isSupportWindowClipboardData;
function setClipboardSelection(node) {
    if (node) {
        var range = document.createRange();
        var selection = window.getSelection();
        selection.removeAllRanges();
        range.selectNodeContents(node);
        selection.addRange(range);
    }
}
exports.setClipboardSelection = setClipboardSelection;


/***/ }),
/* 3 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

function applyRef(ref, value) {
  if (ref != null) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p;
	while (p = items.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		applyRef(old, null);
		applyRef(value, node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.shift()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	applyRef(component.__ref, component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.push(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	applyRef(component.__ref, null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

function createRef() {
	return {};
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	createRef: createRef,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.mjs.map


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var observable_1 = __webpack_require__(5);
function connect(selector) {
    return function (WrappedComponent) {
        var _a;
        return _a = /** @class */ (function (_super) {
                tslib_1.__extends(class_1, _super);
                function class_1() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                class_1.prototype.setStateUsingSelector = function (ownProps) {
                    if (selector) {
                        this.setState(selector(this.context.store, ownProps));
                    }
                };
                class_1.prototype.componentWillMount = function () {
                    var _this = this;
                    if (selector) {
                        this.unobserve = observable_1.observe(function () {
                            _this.setStateUsingSelector(_this.props);
                        });
                    }
                };
                class_1.prototype.componentWillReceiveProps = function (nextProps) {
                    this.setStateUsingSelector(nextProps);
                };
                class_1.prototype.componentWillUnmount = function () {
                    if (this.unobserve) {
                        this.unobserve();
                    }
                };
                class_1.prototype.render = function () {
                    var _a = this, props = _a.props, state = _a.state;
                    var dispatch = this.context.dispatch;
                    return preact_1.h(WrappedComponent, tslib_1.__assign({}, props, state, { dispatch: dispatch }));
                };
                return class_1;
            }(preact_1.Component)),
            _a.displayName = "Connect:" + WrappedComponent.name,
            _a;
    };
}
exports.connect = connect;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var generateObserverId = (function () {
    var lastId = 0;
    return function () {
        lastId += 1;
        return "@observer" + lastId;
    };
})();
// store all observer info
var observerInfoMap = {};
// observerId stack for managing recursive observing calls
var observerIdStack = [];
function callObserver(observerId) {
    observerIdStack.push(observerId);
    observerInfoMap[observerId].fn();
    observerIdStack.pop();
}
function setValue(storage, observerIdSet, key, value) {
    if (storage[key] !== value) {
        storage[key] = value;
        Object.keys(observerIdSet).forEach(function (observerId) {
            callObserver(observerId);
        });
    }
}
function isObservable(resultObj) {
    return common_1.isObject(resultObj) && common_1.hasOwnProp(resultObj, '__storage__');
}
exports.isObservable = isObservable;
function observe(fn) {
    var observerId = generateObserverId();
    observerInfoMap[observerId] = { fn: fn, targetObserverIdSets: [] };
    callObserver(observerId);
    // return unobserve function
    return function () {
        observerInfoMap[observerId].targetObserverIdSets.forEach(function (idSet) {
            delete idSet[observerId];
        });
    };
}
exports.observe = observe;
function observable(obj) {
    if (isObservable(obj)) {
        throw new Error('Target object is already Reactive');
    }
    if (Array.isArray(obj)) {
        throw new Error('Array object cannot be Reactive');
    }
    var storage = {};
    var propObserverIdSetMap = {};
    var resultObj = {};
    Object.defineProperties(resultObj, {
        __storage__: { value: storage },
        __propObserverIdSetMap__: { value: propObserverIdSetMap }
    });
    Object.keys(obj).forEach(function (key) {
        var getter = (Object.getOwnPropertyDescriptor(obj, key) || {}).get;
        var observerIdSet = (propObserverIdSetMap[key] = {});
        Object.defineProperty(resultObj, key, {
            configurable: true,
            get: function () {
                var observerId = common_1.last(observerIdStack);
                if (observerId && !observerIdSet[observerId]) {
                    observerIdSet[observerId] = true;
                    observerInfoMap[observerId].targetObserverIdSets.push(observerIdSet);
                }
                return storage[key];
            }
        });
        if (typeof getter === 'function') {
            observe(function () {
                var value = getter.call(resultObj);
                setValue(storage, observerIdSet, key, value);
            });
        }
        else {
            storage[key] = obj[key];
            Object.defineProperty(resultObj, key, {
                set: function (value) {
                    setValue(storage, observerIdSet, key, value);
                }
            });
        }
    });
    return resultObj;
}
exports.observable = observable;
function notify(obj, key) {
    if (isObservable(obj)) {
        Object.keys(obj.__propObserverIdSetMap__[key]).forEach(function (observerId) {
            callObserver(observerId);
        });
    }
}
exports.notify = notify;
function getOriginObject(obj) {
    var result = {};
    common_1.forEachObject(function (value, key) {
        result[key] = isObservable(value) ? getOriginObject(value) : value;
    }, obj.__storage__);
    return common_1.isEmpty(result) ? obj : result;
}
exports.getOriginObject = getOriginObject;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var common_1 = __webpack_require__(0);
var instance_1 = __webpack_require__(7);
var rowSpan_1 = __webpack_require__(9);
var column_1 = __webpack_require__(21);
function getCellAddressByIndex(_a, rowIndex, columnIndex) {
    var data = _a.data, column = _a.column;
    return {
        rowKey: data.filteredViewData[rowIndex].rowKey,
        columnName: column.visibleColumns[columnIndex].name
    };
}
exports.getCellAddressByIndex = getCellAddressByIndex;
function isEditableCell(data, column, rowIndex, columnName) {
    var disabled = data.disabled, filteredViewData = data.filteredViewData;
    var _a = filteredViewData[rowIndex].valueMap[columnName], rowDisabled = _a.disabled, editable = _a.editable;
    return !column_1.isHiddenColumn(column, columnName) && editable && !disabled && !rowDisabled;
}
exports.isEditableCell = isEditableCell;
function getCheckedRows(_a) {
    var data = _a.data;
    return data.rawData.filter(function (_a) {
        var _attributes = _a._attributes;
        return _attributes.checked;
    });
}
exports.getCheckedRows = getCheckedRows;
function getConditionalRows(_a, conditions) {
    var data = _a.data;
    var rawData = data.rawData;
    if (common_1.isFunction(conditions)) {
        return rawData.filter(conditions);
    }
    var result = rawData;
    Object.keys(conditions).forEach(function (key) {
        result = result.filter(function (row) { return row[key] === conditions[key]; });
    });
    return result;
}
exports.getConditionalRows = getConditionalRows;
function findIndexByRowKey(data, column, id, rowKey, filtered) {
    if (filtered === void 0) { filtered = true; }
    if (common_1.isUndefined(rowKey) || common_1.isNull(rowKey)) {
        return -1;
    }
    var filteredRawData = data.filteredRawData, rawData = data.rawData, sortState = data.sortState, pageOptions = data.pageOptions;
    var perPage = common_1.isEmpty(pageOptions) ? Number.MAX_SAFE_INTEGER : pageOptions.perPage;
    var targetData = filtered ? filteredRawData : rawData;
    var dataManager = instance_1.getDataManager(id);
    var hasAppendedData = dataManager ? dataManager.isModifiedByType('CREATE') : false;
    if (!rowSpan_1.isRowSpanEnabled(sortState) || column.keyColumnName || hasAppendedData) {
        return common_1.findPropIndex('rowKey', rowKey, targetData) % perPage;
    }
    var start = 0;
    var end = targetData.length - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        var comparedRowKey = targetData[mid].rowKey;
        if (rowKey > comparedRowKey) {
            start = mid + 1;
        }
        else if (rowKey < comparedRowKey) {
            end = mid - 1;
        }
        else {
            return mid % perPage;
        }
    }
    return -1;
}
exports.findIndexByRowKey = findIndexByRowKey;
function findRowByRowKey(data, column, id, rowKey) {
    return data.filteredRawData[findIndexByRowKey(data, column, id, rowKey)];
}
exports.findRowByRowKey = findRowByRowKey;
function getFilterStateWithOperator(data, column) {
    var allColumnMap = column.allColumnMap;
    var filters = data.filters;
    if (filters) {
        filters = filters.map(function (filter) {
            if (filter.state.length > 1) {
                var columnName = filter.columnName;
                var operator = allColumnMap[columnName].filter.operator;
                return tslib_1.__assign({}, filter, { operator: operator });
            }
            return filter;
        });
    }
    return filters;
}
exports.getFilterStateWithOperator = getFilterStateWithOperator;
function getUniqColumnData(targetData, columnName) {
    return common_1.uniq(common_1.mapProp(columnName, targetData));
}
exports.getUniqColumnData = getUniqColumnData;
function isSortable(sortState, column, columnName) {
    if (columnName === 'sortKey') {
        return true;
    }
    var _a = column.allColumnMap[columnName], sortable = _a.sortable, hidden = _a.hidden;
    return sortState.useClient && !hidden && sortable;
}
exports.isSortable = isSortable;
function isInitialSortState(_a) {
    var columns = _a.columns;
    return columns.length === 1 && columns[0].columnName === 'sortKey';
}
exports.isInitialSortState = isInitialSortState;
function getRowHeight(row, defaultRowHeight) {
    var _a = row._attributes, height = _a.height, tree = _a.tree;
    var rowHeight = tree && tree.hidden ? 0 : height;
    return common_1.isNumber(rowHeight) ? rowHeight : defaultRowHeight;
}
exports.getRowHeight = getRowHeight;
function getLoadingState(rawData) {
    return rawData.length ? 'DONE' : 'EMPTY';
}
exports.getLoadingState = getLoadingState;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var currentId = 0;
var instanceMap = {};
function generateId() {
    currentId += 1;
    return currentId;
}
function register(instance) {
    var id = generateId();
    if (!common_1.isObject(instanceMap[id])) {
        instanceMap[id] = {};
    }
    instanceMap[id].grid = instance;
    return id;
}
exports.register = register;
function registerDataSources(id, dataProvider, dataManager, paginationManager) {
    instanceMap[id].dataProvider = dataProvider;
    instanceMap[id].dataManager = dataManager;
    instanceMap[id].paginationManager = paginationManager;
}
exports.registerDataSources = registerDataSources;
function getInstance(id) {
    return instanceMap[id].grid;
}
exports.getInstance = getInstance;
function getDataProvider(id) {
    return instanceMap[id].dataProvider;
}
exports.getDataProvider = getDataProvider;
function getDataManager(id) {
    return instanceMap[id].dataManager;
}
exports.getDataManager = getDataManager;
function getPaginationManager(id) {
    return instanceMap[id].paginationManager;
}
exports.getPaginationManager = getPaginationManager;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isRowHeader(columnName) {
    return ['_number', '_checked'].indexOf(columnName) > -1;
}
exports.isRowHeader = isRowHeader;
function isRowNumColumn(columnName) {
    return columnName === '_number';
}
exports.isRowNumColumn = isRowNumColumn;
function isCheckboxColumn(columnName) {
    return columnName === '_checked';
}
exports.isCheckboxColumn = isCheckboxColumn;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var selection_1 = __webpack_require__(12);
function getMainRowSpan(columnName, rowSpan, data) {
    var mainRow = rowSpan.mainRow, mainRowKey = rowSpan.mainRowKey;
    if (mainRow) {
        return rowSpan;
    }
    var mainRowIndex = common_1.findPropIndex('rowKey', mainRowKey, data);
    return data[mainRowIndex].rowSpanMap[columnName];
}
function getRowSpanRange(rowRange, colRange, visibleColumns, data) {
    var startColumnIndex = colRange[0], endColumnIndex = colRange[1];
    var startRowIndex = rowRange[0], endRowIndex = rowRange[1];
    for (var index = startColumnIndex; index <= endColumnIndex; index += 1) {
        var rawData = data.rawData;
        var startRowSpanMap = rawData[startRowIndex].rowSpanMap;
        var endRowSpanMap = rawData[endRowIndex].rowSpanMap;
        var columnName = visibleColumns[index].name;
        // get top row index of topmost rowSpan
        if (startRowSpanMap[columnName]) {
            var mainRowKey = startRowSpanMap[columnName].mainRowKey;
            var topRowSpanIndex = common_1.findPropIndex('rowKey', mainRowKey, rawData);
            startRowIndex = startRowIndex > topRowSpanIndex ? topRowSpanIndex : startRowIndex;
        }
        // get bottom row index of bottommost rowSpan
        if (endRowSpanMap[columnName]) {
            var _a = endRowSpanMap[columnName], mainRowKey = _a.mainRowKey, spanCount = _a.spanCount;
            var bottomRowSpanIndex = common_1.findPropIndex('rowKey', mainRowKey, rawData) + spanCount - 1;
            endRowIndex = endRowIndex < bottomRowSpanIndex ? bottomRowSpanIndex : endRowIndex;
        }
    }
    return startRowIndex !== rowRange[0] || endRowIndex !== rowRange[1]
        ? getRowSpanRange([startRowIndex, endRowIndex], colRange, visibleColumns, data)
        : [startRowIndex, endRowIndex];
}
function getMaxRowSpanRange(rowRange, colRange, visibleColumns, focusRowIndex, data) {
    var sortedColRange = selection_1.getSortedRange(colRange);
    var endRowIndex = rowRange[1];
    var startRowIndex = rowRange[0];
    // if start row index is different from focused index,
    // change start row index to focused row index for getting proper row range
    startRowIndex =
        !common_1.isNull(focusRowIndex) && startRowIndex !== focusRowIndex ? focusRowIndex : startRowIndex;
    var sortedRowRange = selection_1.getSortedRange([startRowIndex, endRowIndex]);
    var _a = getRowSpanRange(sortedRowRange, sortedColRange, visibleColumns, data), startRowSpanIndex = _a[0], endRowSpanIndex = _a[1];
    return startRowIndex > endRowIndex
        ? [endRowSpanIndex, startRowSpanIndex]
        : [startRowSpanIndex, endRowSpanIndex];
}
exports.getMaxRowSpanRange = getMaxRowSpanRange;
function getRowRangeWithRowSpan(rowRange, colRange, visibleColumnsWithRowHeader, rowIndex, data) {
    if (isRowSpanEnabled(data.sortState)) {
        return getMaxRowSpanRange(rowRange, colRange, visibleColumnsWithRowHeader, rowIndex, data);
    }
    return rowRange;
}
exports.getRowRangeWithRowSpan = getRowRangeWithRowSpan;
function getVerticalPosWithRowSpan(columnName, rowSpan, rowCoords, data) {
    var mainRowSpan = getMainRowSpan(columnName, rowSpan, data);
    var mainRowIndex = common_1.findPropIndex('rowKey', mainRowSpan.mainRowKey, data);
    var spanCount = mainRowSpan.spanCount;
    var top = rowCoords.offsets[mainRowIndex];
    var bottom = top;
    for (var count = 0; count < spanCount; count += 1) {
        bottom += rowCoords.heights[mainRowIndex + count];
    }
    return [top, bottom];
}
exports.getVerticalPosWithRowSpan = getVerticalPosWithRowSpan;
function getRowSpan(rowIndex, columnName, data) {
    var rowSpanMap = data[rowIndex].rowSpanMap;
    return rowSpanMap[columnName];
}
exports.getRowSpan = getRowSpan;
/*
 * get top row index of specific rowSpan cell
 */
function getRowSpanTopIndex(rowIndex, columnName, data) {
    var rowSpan = getRowSpan(rowIndex, columnName, data);
    if (!rowSpan) {
        return rowIndex;
    }
    return common_1.findPropIndex('rowKey', rowSpan.mainRowKey, data);
}
exports.getRowSpanTopIndex = getRowSpanTopIndex;
/*
 * get bottom row index of specific rowSpan cell
 */
function getRowSpanBottomIndex(rowIndex, columnName, data) {
    var rowSpan = getRowSpan(rowIndex, columnName, data);
    if (!rowSpan) {
        return rowIndex;
    }
    var mainRowIndex = common_1.findPropIndex('rowKey', rowSpan.mainRowKey, data);
    return mainRowIndex + rowSpan.spanCount - 1;
}
exports.getRowSpanBottomIndex = getRowSpanBottomIndex;
function getRowSpanByRowKey(rowKey, columnName, data) {
    var rowIndex = common_1.findPropIndex('rowKey', rowKey, data);
    if (rowIndex === -1) {
        return null;
    }
    return getRowSpan(rowIndex, columnName, data) || null;
}
exports.getRowSpanByRowKey = getRowSpanByRowKey;
/*
 * get max rowSpan count in all columns that have rowSpan
 */
function getMaxRowSpanCount(rowIndex, data) {
    var rowSpanMap = data[rowIndex].rowSpanMap;
    if (common_1.isEmpty(rowSpanMap)) {
        return 0;
    }
    return Object.keys(rowSpanMap).reduce(function (acc, columnName) { return Math.max(acc, rowSpanMap[columnName].spanCount); }, 0);
}
exports.getMaxRowSpanCount = getMaxRowSpanCount;
function isRowSpanEnabled(sortState) {
    return sortState.columns[0].columnName === 'sortKey';
}
exports.isRowSpanEnabled = isRowSpanEnabled;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var instance_1 = __webpack_require__(7);
var eventBusMap = {};
function createEventBus(id) {
    var listenersMap = {};
    eventBusMap[id] = {
        on: function (eventName, func) {
            var listeners = listenersMap[eventName];
            listenersMap[eventName] = listeners ? listeners.concat([func]) : [func];
        },
        off: function (eventName, func) {
            var listeners = listenersMap[eventName];
            if (listeners) {
                if (func) {
                    listenersMap[eventName] = common_1.removeArrayItem(func, listeners);
                }
                else {
                    delete listenersMap[eventName];
                }
            }
        },
        trigger: function (eventName, gridEvent) {
            if (listenersMap[eventName]) {
                var instance = instance_1.getInstance(id);
                gridEvent.setInstance(instance);
                listenersMap[eventName].forEach(function (func) {
                    func(gridEvent);
                });
            }
        }
    };
    return eventBusMap[id];
}
exports.createEventBus = createEventBus;
function getEventBus(id) {
    return eventBusMap[id];
}
exports.getEventBus = getEventBus;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(2);
var common_1 = __webpack_require__(0);
var column_1 = __webpack_require__(8);
function getTargetInfo(nativeEvent) {
    var targetType = 'etc';
    var target = nativeEvent.target;
    var cell = dom_1.findParentByTagName(target, 'td');
    var rowKey, columnName;
    if (cell) {
        var address = dom_1.getCellAddress(cell);
        if (address) {
            rowKey = address.rowKey;
            columnName = address.columnName;
            targetType = column_1.isRowHeader(address.columnName) ? 'rowHeader' : 'cell';
        }
        else {
            targetType = 'dummy';
        }
    }
    else {
        cell = dom_1.findParentByTagName(target, 'th');
        if (cell) {
            columnName = cell.getAttribute(dom_1.dataAttr.COLUMN_NAME);
            targetType = 'columnHeader';
        }
    }
    return common_1.pruneObject({
        nativeEvent: nativeEvent,
        targetType: targetType,
        rowKey: rowKey,
        columnName: columnName
    });
}
/**
 * Event class for public event of Grid
 * @module event/gridEvent
 * @param {Object} data - Event data for handler
 */
var GridEvent = /** @class */ (function () {
    function GridEvent(_a) {
        if (_a === void 0) { _a = {}; }
        var event = _a.event, props = tslib_1.__rest(_a, ["event"]);
        this.stopped = false;
        if (event) {
            this.assignData(getTargetInfo(event));
        }
        if (props) {
            this.assignData(props);
        }
    }
    /**
     * Stops propogation of this event.
     * @memberof event/gridEvent
     */
    GridEvent.prototype.stop = function () {
        this.stopped = true;
    };
    GridEvent.prototype.isStopped = function () {
        return this.stopped;
    };
    GridEvent.prototype.assignData = function (data) {
        common_1.assign(this, data);
    };
    GridEvent.prototype.setInstance = function (instance) {
        common_1.assign(this, { instance: instance });
    };
    return GridEvent;
}());
exports.default = GridEvent;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var column_1 = __webpack_require__(21);
function sortByVisibleColumns(visibleColumnsWithRowHeader, childNames) {
    var result = [];
    visibleColumnsWithRowHeader.forEach(function (column) {
        if (common_1.includes(childNames, column.name)) {
            result.push(column.name);
        }
    });
    return result;
}
function getLeafChildColumnNames(complexHeaderColumns, name) {
    var column = common_1.findProp('name', name, complexHeaderColumns);
    if (!column) {
        return [name];
    }
    var result = [];
    column.childNames.forEach(function (childName) {
        if (column_1.isParentColumnHeader(complexHeaderColumns, childName)) {
            result = result.concat(getLeafChildColumnNames(complexHeaderColumns, childName));
        }
        else {
            result = result.concat([childName]);
        }
    });
    return result;
}
exports.getLeafChildColumnNames = getLeafChildColumnNames;
function getChildColumnRange(visibleColumnsWithRowHeader, complexHeaderColumns, name) {
    var unsortedChildNames = getLeafChildColumnNames(complexHeaderColumns, name);
    var childNames = sortByVisibleColumns(visibleColumnsWithRowHeader, unsortedChildNames);
    var startIndex = common_1.findPropIndex('name', childNames[0], visibleColumnsWithRowHeader);
    var endIndex = common_1.findPropIndex('name', childNames[childNames.length - 1], visibleColumnsWithRowHeader);
    return [startIndex, endIndex];
}
exports.getChildColumnRange = getChildColumnRange;
function getSortedRange(range) {
    return range[0] > range[1] ? [range[1], range[0]] : range;
}
exports.getSortedRange = getSortedRange;
function isSameInputRange(inp1, inp2) {
    if (common_1.isNull(inp1) || common_1.isNull(inp2)) {
        return inp1 === inp2;
    }
    return (inp1.column[0] === inp2.column[0] &&
        inp1.column[1] === inp2.column[1] &&
        inp1.row[0] === inp2.row[0] &&
        inp1.row[1] === inp2.row[1]);
}
exports.isSameInputRange = isSameInputRange;
function getSelectionRange(range, pageOptions) {
    if (!common_1.isEmpty(pageOptions)) {
        var row = range.row, column = range.column;
        var perPage = pageOptions.perPage, page = pageOptions.page;
        var prevPageRowCount = (page - 1) * perPage;
        return {
            row: [row[0] - prevPageRowCount, row[1] - prevPageRowCount],
            column: column
        };
    }
    return range;
}
exports.getSelectionRange = getSelectionRange;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var observable_1 = __webpack_require__(5);
var column_1 = __webpack_require__(8);
var common_1 = __webpack_require__(0);
var listItemText_1 = __webpack_require__(51);
var tree_1 = __webpack_require__(19);
var dom_1 = __webpack_require__(2);
var data_1 = __webpack_require__(6);
var dataCreationKey = '';
function generateDataCreationKey() {
    dataCreationKey = "@dataKey" + Date.now();
    return dataCreationKey;
}
exports.generateDataCreationKey = generateDataCreationKey;
function getCellDisplayValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return String(value);
}
function getFormattedValue(props, formatter, defaultValue, relationListItems) {
    var value;
    if (formatter === 'listItemText') {
        value = listItemText_1.listItemText(props, relationListItems);
    }
    else if (typeof formatter === 'function') {
        value = formatter(props);
    }
    else if (typeof formatter === 'string') {
        value = formatter;
    }
    else {
        value = defaultValue;
    }
    var strValue = getCellDisplayValue(value);
    if (strValue && props.column.escapeHTML) {
        return common_1.encodeHTMLEntity(strValue);
    }
    return strValue;
}
function getRelationCbResult(fn, relationParams) {
    var result = common_1.isFunction(fn) ? fn(relationParams) : null;
    return common_1.isUndefined(result) ? null : result;
}
function getEditable(fn, relationParams) {
    var result = getRelationCbResult(fn, relationParams);
    return result === null ? true : result;
}
function getDisabled(fn, relationParams) {
    var result = getRelationCbResult(fn, relationParams);
    return result === null ? false : result;
}
function getListItems(fn, relationParams) {
    return getRelationCbResult(fn, relationParams);
}
function getRowHeaderValue(row, columnName) {
    if (column_1.isRowNumColumn(columnName)) {
        return row._attributes.rowNum;
    }
    if (column_1.isCheckboxColumn(columnName)) {
        return row._attributes.checked;
    }
    return '';
}
function getValidationCode(value, validation) {
    var invalidStates = [];
    if (!validation) {
        return invalidStates;
    }
    var required = validation.required, dataType = validation.dataType, min = validation.min, max = validation.max, regExp = validation.regExp, validatorFn = validation.validatorFn;
    if (required && common_1.isBlank(value)) {
        invalidStates.push('REQUIRED');
    }
    if (validatorFn && !validatorFn(value)) {
        invalidStates.push('VALIDATOR_FN');
    }
    if (dataType === 'string' && !common_1.isString(value)) {
        invalidStates.push('TYPE_STRING');
    }
    if (regExp && common_1.isString(value) && !regExp.test(value)) {
        invalidStates.push('REGEXP');
    }
    var numberValue = common_1.convertToNumber(value);
    if (dataType === 'number' && !common_1.isNumber(numberValue)) {
        invalidStates.push('TYPE_NUMBER');
    }
    if (min && common_1.isNumber(numberValue) && numberValue < min) {
        invalidStates.push('MIN');
    }
    if (max && common_1.isNumber(numberValue) && numberValue > max) {
        invalidStates.push('MAX');
    }
    return invalidStates;
}
function createRowSpan(mainRow, rowKey, count, spanCount) {
    return { mainRow: mainRow, mainRowKey: rowKey, count: count, spanCount: spanCount };
}
exports.createRowSpan = createRowSpan;
function createViewCell(row, column, relationMatched, relationListItems) {
    if (relationMatched === void 0) { relationMatched = true; }
    var name = column.name, formatter = column.formatter, editor = column.editor, validation = column.validation;
    var value = column_1.isRowHeader(name) ? getRowHeaderValue(row, name) : row[name];
    if (!relationMatched) {
        value = '';
    }
    var formatterProps = { row: row, column: column, value: value };
    var _a = row._attributes, disabled = _a.disabled, checkDisabled = _a.checkDisabled, classNameAttr = _a.className;
    var columnClassName = common_1.isUndefined(classNameAttr.column[name]) ? [] : classNameAttr.column[name];
    var classList = classNameAttr.row.concat(columnClassName);
    var className = (common_1.isEmpty(row.rowSpanMap[name])
        ? classList
        : classList.filter(function (clsName) { return clsName !== dom_1.cls('row-hover'); })).join(' ');
    return {
        editable: !!editor,
        className: className,
        disabled: column_1.isCheckboxColumn(name) ? checkDisabled : disabled,
        invalidStates: getValidationCode(value, validation),
        formattedValue: getFormattedValue(formatterProps, formatter, value, relationListItems),
        value: value
    };
}
function createRelationViewCell(name, row, columnMap, valueMap) {
    var _a = valueMap[name], editable = _a.editable, disabled = _a.disabled, value = _a.value;
    var _b = columnMap[name].relationMap, relationMap = _b === void 0 ? {} : _b;
    Object.keys(relationMap).forEach(function (targetName) {
        var _a = relationMap[targetName], editableCallback = _a.editable, disabledCallback = _a.disabled, listItemsCallback = _a.listItems;
        var relationCbParams = { value: value, editable: editable, disabled: disabled, row: row };
        var targetEditable = getEditable(editableCallback, relationCbParams);
        var targetDisabled = getDisabled(disabledCallback, relationCbParams);
        var targetListItems = getListItems(listItemsCallback, relationCbParams) || [];
        var targetValue = row[targetName];
        var targetEditor = columnMap[targetName].editor;
        var targetEditorOptions = targetEditor && targetEditor.options;
        var relationMatched = common_1.isFunction(listItemsCallback)
            ? common_1.someProp('value', targetValue, targetListItems)
            : true;
        var cellData = createViewCell(row, columnMap[targetName], relationMatched, targetListItems);
        if (!targetEditable) {
            cellData.editable = false;
        }
        if (targetDisabled) {
            cellData.disabled = true;
        }
        // should set the relation list to relationListItemMap for preventing to share relation list in other rows
        if (targetEditorOptions) {
            targetEditorOptions.relationListItemMap = targetEditorOptions.relationListItemMap || {};
            targetEditorOptions.relationListItemMap[row.rowKey] = targetListItems;
        }
        valueMap[targetName] = cellData;
    });
}
function createViewRow(row, columnMap, rawData, treeColumnName, treeIcon) {
    var rowKey = row.rowKey, sortKey = row.sortKey, rowSpanMap = row.rowSpanMap, uniqueKey = row.uniqueKey;
    var initValueMap = {};
    Object.keys(columnMap).forEach(function (name) {
        initValueMap[name] = null;
    });
    var valueMap = observable_1.observable(initValueMap);
    var __unobserveFns__ = [];
    Object.keys(columnMap).forEach(function (name) {
        var _a = columnMap[name], related = _a.related, relationMap = _a.relationMap;
        // add condition expression to prevent to call watch function recursively
        if (!related) {
            __unobserveFns__.push(observable_1.observe(function () {
                valueMap[name] = createViewCell(row, columnMap[name]);
            }));
        }
        if (relationMap && Object.keys(relationMap).length) {
            __unobserveFns__.push(observable_1.observe(function () {
                createRelationViewCell(name, row, columnMap, valueMap);
            }));
        }
    });
    return tslib_1.__assign({ rowKey: rowKey,
        sortKey: sortKey,
        uniqueKey: uniqueKey,
        rowSpanMap: rowSpanMap,
        valueMap: valueMap,
        __unobserveFns__: __unobserveFns__ }, (treeColumnName && { treeInfo: tree_1.createTreeCellInfo(rawData, row, treeIcon) }));
}
exports.createViewRow = createViewRow;
function getAttributes(row, index, lazyObservable) {
    var defaultAttr = {
        rowNum: index + 1,
        checked: false,
        disabled: false,
        checkDisabled: false,
        className: {
            row: [],
            column: {}
        }
    };
    if (row._attributes) {
        if (common_1.isBoolean(row._attributes.disabled) && common_1.isUndefined(row._attributes.checkDisabled)) {
            row._attributes.checkDisabled = row._attributes.disabled;
        }
        if (!common_1.isUndefined(row._attributes.className)) {
            row._attributes.className = tslib_1.__assign({ row: [], column: {} }, row._attributes.className);
        }
    }
    var attributes = tslib_1.__assign({}, defaultAttr, row._attributes);
    return lazyObservable ? attributes : observable_1.observable(attributes);
}
function createMainRowSpanMap(rowSpan, rowKey) {
    var mainRowSpanMap = {};
    if (!rowSpan) {
        return mainRowSpanMap;
    }
    Object.keys(rowSpan).forEach(function (columnName) {
        var spanCount = rowSpan[columnName];
        mainRowSpanMap[columnName] = createRowSpan(true, rowKey, spanCount, spanCount);
    });
    return mainRowSpanMap;
}
function createSubRowSpan(prevRowSpanMap) {
    var subRowSpanMap = {};
    Object.keys(prevRowSpanMap).forEach(function (columnName) {
        var prevRowSpan = prevRowSpanMap[columnName];
        var mainRowKey = prevRowSpan.mainRowKey, count = prevRowSpan.count, spanCount = prevRowSpan.spanCount;
        if (spanCount > 1 - count) {
            var subRowCount = count >= 0 ? -1 : count - 1;
            subRowSpanMap[columnName] = createRowSpan(false, mainRowKey, subRowCount, spanCount);
        }
    });
    return subRowSpanMap;
}
function createRowSpanMap(row, rowSpan, prevRow) {
    var rowKey = row.rowKey;
    var mainRowSpanMap = {};
    var subRowSpanMap = {};
    if (!common_1.isEmpty(rowSpan)) {
        mainRowSpanMap = createMainRowSpanMap(rowSpan, rowKey);
    }
    if (prevRow) {
        var prevRowSpanMap = prevRow.rowSpanMap;
        if (!common_1.isEmpty(prevRowSpanMap)) {
            subRowSpanMap = createSubRowSpan(prevRowSpanMap);
        }
    }
    return tslib_1.__assign({}, mainRowSpanMap, subRowSpanMap);
}
function createRawRow(row, index, defaultValues, options) {
    if (options === void 0) { options = {}; }
    // this rowSpan variable is attribute option before creating rowSpanDataMap
    var rowSpan;
    var keyColumnName = options.keyColumnName, prevRow = options.prevRow, _a = options.lazyObservable, lazyObservable = _a === void 0 ? false : _a;
    if (row._attributes) {
        rowSpan = row._attributes.rowSpan;
    }
    row.rowKey = keyColumnName ? row[keyColumnName] : index;
    row.sortKey = common_1.isNumber(row.sortKey) ? row.sortKey : index;
    row.uniqueKey = dataCreationKey + "-" + row.rowKey;
    row._attributes = getAttributes(row, index, lazyObservable);
    row._attributes.rowSpan = rowSpan;
    row.rowSpanMap = createRowSpanMap(row, rowSpan, prevRow);
    defaultValues.forEach(function (_a) {
        var name = _a.name, value = _a.value;
        common_1.setDefaultProp(row, name, value);
    });
    return (lazyObservable ? row : observable_1.observable(row));
}
exports.createRawRow = createRawRow;
function createData(data, column, lazyObservable, prevRows) {
    if (lazyObservable === void 0) { lazyObservable = false; }
    generateDataCreationKey();
    var defaultValues = column.defaultValues, allColumnMap = column.allColumnMap, _a = column.treeColumnName, treeColumnName = _a === void 0 ? '' : _a, _b = column.treeIcon, treeIcon = _b === void 0 ? true : _b;
    var keyColumnName = lazyObservable ? column.keyColumnName : 'rowKey';
    var rawData;
    if (treeColumnName) {
        rawData = tree_1.createTreeRawData(data, defaultValues, keyColumnName, lazyObservable);
    }
    else {
        rawData = data.map(function (row, index, rows) {
            return createRawRow(row, index, defaultValues, {
                keyColumnName: keyColumnName,
                prevRow: prevRows ? prevRows[index] : rows[index - 1],
                lazyObservable: lazyObservable
            });
        });
    }
    var viewData = rawData.map(function (row) {
        return lazyObservable
            ? { rowKey: row.rowKey, sortKey: row.sortKey, uniqueKey: row.uniqueKey }
            : createViewRow(row, allColumnMap, rawData, treeColumnName, treeIcon);
    });
    return { rawData: rawData, viewData: viewData };
}
exports.createData = createData;
function applyFilterToRawData(rawData, filters) {
    var data = rawData;
    if (filters) {
        data = filters.reduce(function (acc, filter) {
            var conditionFn = filter.conditionFn, columnName = filter.columnName;
            return acc.filter(function (row) { return conditionFn(row[columnName]); });
        }, rawData);
    }
    return data;
}
function create(_a) {
    var data = _a.data, column = _a.column, userPageOptions = _a.pageOptions, useClientSort = _a.useClientSort, disabled = _a.disabled, id = _a.id;
    var _b = createData(data, column, true), rawData = _b.rawData, viewData = _b.viewData;
    var sortState = {
        useClient: useClientSort,
        columns: [
            {
                columnName: 'sortKey',
                ascending: true
            }
        ]
    };
    var pageOptions = common_1.isEmpty(userPageOptions)
        ? {}
        : tslib_1.__assign({ useClient: false, page: 1, perPage: 20 }, userPageOptions, { totalCount: userPageOptions.useClient ? rawData.length : userPageOptions.totalCount });
    return observable_1.observable({
        disabled: disabled,
        rawData: rawData,
        viewData: viewData,
        sortState: sortState,
        pageOptions: pageOptions,
        checkedAllRows: rawData.length ? !rawData.some(function (row) { return !row._attributes.checked; }) : false,
        filters: null,
        loadingState: rawData.length ? 'DONE' : 'EMPTY',
        get filteredRawData() {
            return this.filters ? applyFilterToRawData(this.rawData, this.filters) : this.rawData;
        },
        get filteredIndex() {
            var _this = this;
            if (this.filters) {
                return this.filteredRawData.map(function (row) {
                    return data_1.findIndexByRowKey(_this, column, id, row.rowKey, false);
                });
            }
            return null;
        },
        get filteredViewData() {
            var _this = this;
            return this.filters ? this.filteredIndex.map(function (index) { return _this.viewData[index]; }) : this.viewData;
        },
        get pageRowRange() {
            var start = 0;
            var end = rawData.length;
            if (this.pageOptions.useClient) {
                var _a = this.pageOptions, page = _a.page, perPage = _a.perPage;
                var pageRowLastIndex = page * perPage;
                start = (page - 1) * perPage;
                end = pageRowLastIndex < end ? pageRowLastIndex : end;
            }
            return [start, end];
        }
    });
}
exports.create = create;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var clipboard_1 = __webpack_require__(24);
var common_1 = __webpack_require__(0);
var data_1 = __webpack_require__(13);
var observable_1 = __webpack_require__(5);
var selection_1 = __webpack_require__(15);
var eventBus_1 = __webpack_require__(10);
var gridEvent_1 = tslib_1.__importDefault(__webpack_require__(11));
var instance_1 = __webpack_require__(7);
var tree_1 = __webpack_require__(25);
var rowSpan_1 = __webpack_require__(9);
var focus_1 = __webpack_require__(16);
var tree_2 = __webpack_require__(19);
var sort_1 = __webpack_require__(26);
var data_2 = __webpack_require__(6);
var summary_1 = __webpack_require__(27);
var filter_1 = __webpack_require__(28);
var column_1 = __webpack_require__(8);
var dom_1 = __webpack_require__(2);
var renderState_1 = __webpack_require__(36);
var mouse_1 = __webpack_require__(37);
var selection_2 = __webpack_require__(12);
var viewport_1 = __webpack_require__(29);
function updateRowSpanWhenAppend(data, prevRow, extendPrevRowSpan) {
    var prevRowSpanMap = prevRow.rowSpanMap;
    if (common_1.isEmpty(prevRowSpanMap)) {
        return;
    }
    Object.keys(prevRowSpanMap).forEach(function (columnName) {
        var prevRowSpan = prevRowSpanMap[columnName];
        if (prevRowSpan) {
            var count = prevRowSpan.count, keyRow = prevRowSpan.mainRow, mainRowKey = prevRowSpan.mainRowKey;
            var mainRow = keyRow ? prevRow : common_1.findProp('rowKey', mainRowKey, data);
            var mainRowSpan = mainRow.rowSpanMap[columnName];
            var startOffset = keyRow || extendPrevRowSpan ? 1 : -count + 1;
            // keep rowSpan state when appends row in the middle of rowSpan
            if (mainRowSpan.spanCount > startOffset) {
                mainRowSpan.count += 1;
                mainRowSpan.spanCount += 1;
                updateSubRowSpan(data, mainRow, columnName, 1, mainRowSpan.spanCount);
            }
        }
    });
}
function updateRowSpanWhenRemove(data, removedRow, nextRow, keepRowSpanData) {
    var removedRowSpanMap = removedRow.rowSpanMap;
    if (common_1.isEmpty(removedRowSpanMap)) {
        return;
    }
    Object.keys(removedRowSpanMap).forEach(function (columnName) {
        var removedRowSpan = removedRowSpanMap[columnName];
        var count = removedRowSpan.count, keyRow = removedRowSpan.mainRow, mainRowKey = removedRowSpan.mainRowKey;
        var mainRow, spanCount;
        if (keyRow) {
            mainRow = nextRow;
            spanCount = count - 1;
            if (spanCount > 1) {
                var mainRowSpan = mainRow.rowSpanMap[columnName];
                mainRowSpan.mainRowKey = mainRow.rowKey;
                mainRowSpan.mainRow = true;
            }
            if (keepRowSpanData) {
                mainRow[columnName] = removedRow[columnName];
            }
        }
        else {
            mainRow = common_1.findProp('rowKey', mainRowKey, data);
            spanCount = mainRow.rowSpanMap[columnName].spanCount - 1;
        }
        if (spanCount > 1) {
            var mainRowSpan = mainRow.rowSpanMap[columnName];
            mainRowSpan.count = spanCount;
            mainRowSpan.spanCount = spanCount;
            updateSubRowSpan(data, mainRow, columnName, 1, spanCount);
        }
        else {
            delete mainRow.rowSpanMap[columnName];
        }
    });
}
function updateSubRowSpan(data, mainRow, columnName, startOffset, spanCount) {
    var mainRowIndex = common_1.findPropIndex('rowKey', mainRow.rowKey, data);
    for (var offset = startOffset; offset < spanCount; offset += 1) {
        var row = data[mainRowIndex + offset];
        row.rowSpanMap[columnName] = data_1.createRowSpan(false, mainRow.rowKey, -offset, spanCount);
    }
}
function setValue(store, rowKey, columnName, value) {
    var column = store.column, data = store.data, id = store.id;
    var rawData = data.rawData, sortState = data.sortState, filters = data.filters;
    var targetRow = data_2.findRowByRowKey(data, column, id, rowKey);
    if (!targetRow || targetRow[columnName] === value) {
        return;
    }
    var targetColumn = common_1.findProp('name', columnName, column.visibleColumns);
    var gridEvent = new gridEvent_1.default({ rowKey: rowKey, columnName: columnName, value: value });
    if (targetColumn && targetColumn.onBeforeChange) {
        targetColumn.onBeforeChange(gridEvent);
    }
    if (gridEvent.isStopped()) {
        return;
    }
    if (targetRow) {
        var rowSpanMap = targetRow.rowSpanMap;
        var columns = sortState.columns;
        var prevValue = targetRow[columnName];
        var index = common_1.findPropIndex('columnName', columnName, columns);
        targetRow[columnName] = value;
        if (index !== -1) {
            sort_1.sort(store, columnName, columns[index].ascending, true, false);
        }
        if (filters) {
            var columnFilter = common_1.findProp('columnName', columnName, filters);
            if (columnFilter) {
                var conditionFn = columnFilter.conditionFn, state = columnFilter.state;
                filter_1.filter(store, columnName, conditionFn, state);
            }
        }
        summary_1.updateSummaryValueByCell(store, columnName, { prevValue: prevValue, value: value });
        instance_1.getDataManager(id).push('UPDATE', targetRow);
        if (!common_1.isEmpty(rowSpanMap) && rowSpanMap[columnName] && rowSpan_1.isRowSpanEnabled(sortState)) {
            var spanCount = rowSpanMap[columnName].spanCount;
            var mainRowIndex = data_2.findIndexByRowKey(data, column, id, rowKey);
            // update sub rows value
            for (var count = 1; count < spanCount; count += 1) {
                rawData[mainRowIndex + count][columnName] = value;
                instance_1.getDataManager(id).push('UPDATE', rawData[mainRowIndex + count]);
            }
        }
    }
    if (targetColumn && targetColumn.onAfterChange) {
        gridEvent = new gridEvent_1.default({ rowKey: rowKey, columnName: columnName, value: value });
        targetColumn.onAfterChange(gridEvent);
    }
}
exports.setValue = setValue;
function isUpdatableRowAttr(name, checkDisabled, allDisabled) {
    return !(name === 'checked' && (checkDisabled || allDisabled));
}
exports.isUpdatableRowAttr = isUpdatableRowAttr;
function setRowAttribute(_a, rowKey, attrName, value) {
    var data = _a.data, column = _a.column, id = _a.id;
    var disabled = data.disabled;
    var targetRow = data_2.findRowByRowKey(data, column, id, rowKey);
    if (targetRow && isUpdatableRowAttr(attrName, targetRow._attributes.checkDisabled, disabled)) {
        targetRow._attributes[attrName] = value;
    }
}
exports.setRowAttribute = setRowAttribute;
function setAllRowAttribute(_a, attrName, value) {
    var data = _a.data;
    data.rawData.forEach(function (row) {
        if (isUpdatableRowAttr(attrName, row._attributes.checkDisabled, data.disabled)) {
            row._attributes[attrName] = value;
        }
    });
}
exports.setAllRowAttribute = setAllRowAttribute;
function setColumnValues(store, columnName, value, checkCellState) {
    if (checkCellState === void 0) { checkCellState = false; }
    // @TODO Check Cell State
    store.data.rawData.forEach(function (targetRow) {
        targetRow[columnName] = value;
    });
    summary_1.updateSummaryValueByColumn(store, columnName, { value: value });
}
exports.setColumnValues = setColumnValues;
function check(store, rowKey) {
    var _a = store.column, allColumnMap = _a.allColumnMap, _b = _a.treeColumnName, treeColumnName = _b === void 0 ? '' : _b;
    var data = store.data, id = store.id;
    var filteredRawData = data.filteredRawData;
    var eventBus = eventBus_1.getEventBus(id);
    var gridEvent = new gridEvent_1.default({ rowKey: rowKey });
    /**
     * Occurs when a checkbox in row header is checked
     * @event Grid#check
     * @property {number | string} rowKey - rowKey of the checked row
     * @property {Grid} instance - Current grid instance
     */
    eventBus.trigger('check', gridEvent);
    setRowAttribute(store, rowKey, 'checked', true);
    setCheckedAllRows(store, !filteredRawData.some(function (row) { return !row._attributes.checked; }));
    if (allColumnMap[treeColumnName]) {
        tree_1.changeTreeRowsCheckedState(store, rowKey, true);
    }
}
exports.check = check;
function uncheck(store, rowKey) {
    var id = store.id, column = store.column;
    var allColumnMap = column.allColumnMap, _a = column.treeColumnName, treeColumnName = _a === void 0 ? '' : _a;
    var eventBus = eventBus_1.getEventBus(id);
    var gridEvent = new gridEvent_1.default({ rowKey: rowKey });
    /**
     * Occurs when a checkbox in row header is unchecked
     * @event Grid#uncheck
     * @property {number | string} rowKey - rowKey of the unchecked row
     * @property {Grid} instance - Current grid instance
     */
    eventBus.trigger('uncheck', gridEvent);
    setRowAttribute(store, rowKey, 'checked', false);
    setCheckedAllRows(store, false);
    if (allColumnMap[treeColumnName]) {
        tree_1.changeTreeRowsCheckedState(store, rowKey, false);
    }
}
exports.uncheck = uncheck;
function checkAll(store) {
    var id = store.id;
    setAllRowAttribute(store, 'checked', true);
    setCheckedAllRows(store, true);
    var eventBus = eventBus_1.getEventBus(id);
    var gridEvent = new gridEvent_1.default();
    /**
     * Occurs when a checkbox in header is checked(checked all checkbox in row header)
     * @event Grid#checkAll
     * @property {Grid} instance - Current grid instance
     */
    eventBus.trigger('checkAll', gridEvent);
}
exports.checkAll = checkAll;
function uncheckAll(store) {
    var id = store.id;
    setAllRowAttribute(store, 'checked', false);
    setCheckedAllRows(store, false);
    var eventBus = eventBus_1.getEventBus(id);
    var gridEvent = new gridEvent_1.default();
    /**
     * Occurs when a checkbox in header is unchecked(unchecked all checkbox in row header)
     * @event Grid#uncheckAll
     * @property {Grid} instance - Current grid instance
     */
    eventBus.trigger('uncheckAll', gridEvent);
}
exports.uncheckAll = uncheckAll;
function applyPasteDataToRawData(store, pasteData, indexToPaste) {
    var data = store.data, column = store.column, id = store.id;
    var filteredRawData = data.filteredRawData, filteredViewData = data.filteredViewData;
    var visibleColumnsWithRowHeader = column.visibleColumnsWithRowHeader;
    var _a = indexToPaste.row, startRowIndex = _a[0], endRowIndex = _a[1], _b = indexToPaste.column, startColumnIndex = _b[0], endColumnIndex = _b[1];
    var columnNames = common_1.mapProp('name', visibleColumnsWithRowHeader);
    for (var rowIdx = 0; rowIdx + startRowIndex <= endRowIndex; rowIdx += 1) {
        var pasted = false;
        var rawRowIndex = rowIdx + startRowIndex;
        for (var columnIdx = 0; columnIdx + startColumnIndex <= endColumnIndex; columnIdx += 1) {
            var name_1 = columnNames[columnIdx + startColumnIndex];
            if (filteredViewData.length && data_2.isEditableCell(data, column, rawRowIndex, name_1)) {
                pasted = true;
                filteredRawData[rawRowIndex][name_1] = pasteData[rowIdx][columnIdx];
            }
        }
        if (pasted) {
            instance_1.getDataManager(id).push('UPDATE', filteredRawData[rawRowIndex]);
        }
    }
}
function paste(store, pasteData) {
    var selection = store.selection, id = store.id, data = store.data;
    var pageOptions = data.pageOptions;
    var originalRange = selection.originalRange;
    if (originalRange) {
        pasteData = clipboard_1.copyDataToRange(originalRange, pasteData);
    }
    var rangeToPaste = clipboard_1.getRangeToPaste(store, pasteData);
    applyPasteDataToRawData(store, pasteData, rangeToPaste);
    selection_1.changeSelectionRange(selection, selection_2.getSelectionRange(rangeToPaste, pageOptions), id);
}
exports.paste = paste;
function setDisabled(store, disabled) {
    store.data.disabled = disabled;
}
exports.setDisabled = setDisabled;
function setRowDisabled(store, disabled, rowKey, withCheckbox) {
    var data = store.data, column = store.column, id = store.id;
    var row = data_2.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        row._attributes.disabled = disabled;
        if (withCheckbox) {
            row._attributes.checkDisabled = disabled;
        }
    }
}
exports.setRowDisabled = setRowDisabled;
function setRowCheckDisabled(store, disabled, rowKey) {
    var data = store.data, column = store.column, id = store.id;
    var row = data_2.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        row._attributes.checkDisabled = disabled;
    }
}
exports.setRowCheckDisabled = setRowCheckDisabled;
function updateSortKey(data, at) {
    var rawData = data.rawData, viewData = data.viewData;
    for (var idx = 0; idx < rawData.length; idx += 1) {
        if (rawData[idx].sortKey >= at) {
            rawData[idx].sortKey += 1;
        }
        if (viewData[idx].sortKey >= at) {
            viewData[idx].sortKey += 1;
        }
    }
    rawData[at].sortKey = at;
    viewData[at].sortKey = at;
}
function appendRow(store, row, options) {
    var data = store.data, column = store.column, rowCoords = store.rowCoords, dimension = store.dimension, id = store.id;
    var rawData = data.rawData, viewData = data.viewData, sortState = data.sortState, pageOptions = data.pageOptions, pageRowRange = data.pageRowRange;
    var heights = rowCoords.heights;
    var defaultValues = column.defaultValues, allColumnMap = column.allColumnMap;
    var _a = options.at, at = _a === void 0 ? rawData.length : _a;
    var prevRow = rawData[at - 1];
    var emptyData = column.allColumns
        .filter(function (_a) {
        var name = _a.name;
        return !column_1.isRowHeader(name);
    })
        .reduce(function (acc, _a) {
        var _b;
        var name = _a.name;
        return (tslib_1.__assign({}, acc, (_b = {}, _b[name] = '', _b)));
    }, {});
    var index = Math.max.apply(Math, [-1].concat(common_1.mapProp('rowKey', rawData))) + 1;
    var rawRow = data_1.createRawRow(tslib_1.__assign({}, emptyData, row), index, defaultValues);
    var viewRow = data_1.createViewRow(rawRow, allColumnMap, rawData);
    rawData.splice(at, 0, rawRow);
    viewData.splice(at, 0, viewRow);
    heights.splice(at, 0, data_2.getRowHeight(rawRow, dimension.rowHeight));
    if (pageOptions.useClient) {
        var currentPageDataLength = pageRowRange[1] - pageRowRange[0];
        if (currentPageDataLength === pageOptions.perPage) {
            heights.pop();
        }
        data.pageOptions = tslib_1.__assign({}, pageOptions, { totalCount: pageOptions.totalCount + 1 });
    }
    if (at !== rawData.length) {
        updateSortKey(data, at);
    }
    if (!rowSpan_1.isRowSpanEnabled(sortState)) {
        var _b = sortState.columns[0], columnName = _b.columnName, ascending = _b.ascending;
        sort_1.sort(store, columnName, ascending);
    }
    if (prevRow && rowSpan_1.isRowSpanEnabled(sortState)) {
        updateRowSpanWhenAppend(rawData, prevRow, options.extendPrevRowSpan || false);
    }
    instance_1.getDataManager(id).push('CREATE', rawRow);
    observable_1.notify(data, 'rawData');
    observable_1.notify(data, 'viewData');
    observable_1.notify(data, 'filteredRawData');
    observable_1.notify(data, 'filteredViewData');
    observable_1.notify(rowCoords, 'heights');
    summary_1.updateSummaryValueByRow(store, rawRow, true);
    setLoadingState(store, 'DONE');
}
exports.appendRow = appendRow;
function removeRow(store, rowKey, options) {
    var data = store.data, rowCoords = store.rowCoords, id = store.id, focus = store.focus, column = store.column;
    var rawData = data.rawData, viewData = data.viewData, sortState = data.sortState, pageOptions = data.pageOptions;
    var rowIdx = data_2.findIndexByRowKey(data, column, id, rowKey);
    if (rowIdx === -1) {
        return;
    }
    var nextRow = rawData[rowIdx + 1];
    var removedRow = rawData.splice(rowIdx, 1)[0];
    viewData.splice(rowIdx, 1);
    rowCoords.heights.splice(rowIdx, 1);
    if (pageOptions.useClient) {
        data.pageOptions = tslib_1.__assign({}, pageOptions, { totalCount: pageOptions.totalCount - 1 });
    }
    if (nextRow && rowSpan_1.isRowSpanEnabled(sortState)) {
        updateRowSpanWhenRemove(rawData, removedRow, nextRow, options.keepRowSpanData || false);
    }
    if (!common_1.someProp('rowKey', focus.rowKey, rawData)) {
        focus.navigating = false;
        focus_1.changeFocus(store, null, null, id);
        if (focus.editingAddress && focus.editingAddress.rowKey === rowKey) {
            focus.editingAddress = null;
        }
    }
    instance_1.getDataManager(id).push('DELETE', removedRow);
    observable_1.notify(data, 'rawData');
    observable_1.notify(data, 'viewData');
    observable_1.notify(data, 'filteredRawData');
    observable_1.notify(data, 'filteredViewData');
    observable_1.notify(rowCoords, 'heights');
    summary_1.updateSummaryValueByRow(store, removedRow, false);
    setLoadingState(store, data_2.getLoadingState(rawData));
}
exports.removeRow = removeRow;
function clearData(store) {
    var data = store.data, id = store.id, rowCoords = store.rowCoords;
    data.rawData.forEach(function (row) {
        instance_1.getDataManager(id).push('DELETE', row);
    });
    focus_1.initFocus(store);
    selection_1.initSelection(store);
    sort_1.initSortState(data);
    filter_1.initFilter(store);
    rowCoords.heights = [];
    data.rawData = [];
    data.viewData = [];
    if (data.pageOptions.useClient) {
        data.pageOptions = tslib_1.__assign({}, data.pageOptions, { totalCount: 0 });
    }
    summary_1.updateAllSummaryValues(store);
    setLoadingState(store, 'EMPTY');
    setCheckedAllRows(store, false);
}
exports.clearData = clearData;
function resetData(store, inputData) {
    var data = store.data, column = store.column, dimension = store.dimension, rowCoords = store.rowCoords, id = store.id;
    var _a = data_1.createData(inputData, column, true), rawData = _a.rawData, viewData = _a.viewData;
    var rowHeight = dimension.rowHeight;
    focus_1.initFocus(store);
    selection_1.initSelection(store);
    sort_1.initSortState(data);
    filter_1.initFilter(store);
    rowCoords.heights = rawData.map(function (row) { return data_2.getRowHeight(row, rowHeight); });
    data.viewData = viewData;
    data.rawData = rawData;
    summary_1.updateAllSummaryValues(store);
    setLoadingState(store, data_2.getLoadingState(rawData));
    if (data.pageOptions.useClient) {
        data.pageOptions = tslib_1.__assign({}, data.pageOptions, { totalCount: rawData.length });
    }
    setCheckedAllRows(store, false);
    // @TODO need to execute logic by condition
    instance_1.getDataManager(id).setOriginData(inputData);
    instance_1.getDataManager(id).clearAll();
}
exports.resetData = resetData;
function addRowClassName(store, rowKey, className) {
    var data = store.data, column = store.column, id = store.id;
    var row = data_2.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        var rowClassMap = row._attributes.className.row;
        var isExist = common_1.includes(rowClassMap, className);
        if (!isExist) {
            rowClassMap.push(className);
            observable_1.notify(row._attributes, 'className');
        }
    }
}
exports.addRowClassName = addRowClassName;
function removeRowClassName(store, rowKey, className) {
    var data = store.data, column = store.column, id = store.id;
    var row = data_2.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        common_1.removeArrayItem(className, row._attributes.className.row);
        observable_1.notify(row._attributes, 'className');
    }
}
exports.removeRowClassName = removeRowClassName;
function addRowHoverClassByPosition(store, viewInfo) {
    var hoveredRowKey = store.renderState.hoveredRowKey, filteredRawData = store.data.filteredRawData, _a = store.viewport, scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
    var rowIndex = mouse_1.findRowIndexByPosition(store, tslib_1.__assign({}, viewInfo, { scrollLeft: scrollLeft,
        scrollTop: scrollTop }));
    var rowKey = filteredRawData[rowIndex].rowKey;
    if (hoveredRowKey !== rowKey) {
        removeRowClassName(store, hoveredRowKey, dom_1.cls('row-hover'));
        renderState_1.setHoveredRowKey(store, rowKey);
        addRowClassName(store, rowKey, dom_1.cls('row-hover'));
    }
}
exports.addRowHoverClassByPosition = addRowHoverClassByPosition;
function addCellClassName(store, rowKey, columnName, className) {
    var data = store.data, column = store.column, id = store.id;
    var row = data_2.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        var columnClassMap = row._attributes.className.column;
        if (common_1.isUndefined(columnClassMap[columnName])) {
            columnClassMap[columnName] = [className];
        }
        else {
            var isExist = common_1.includes(columnClassMap[columnName], className);
            if (!isExist) {
                columnClassMap[columnName].push(className);
            }
        }
        observable_1.notify(row._attributes, 'className');
    }
}
exports.addCellClassName = addCellClassName;
function removeCellClassName(store, rowKey, columnName, className) {
    var data = store.data, column = store.column, id = store.id;
    var row = data_2.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        var columnClassMap = row._attributes.className.column;
        if (common_1.isUndefined(columnClassMap[columnName])) {
            return;
        }
        common_1.removeArrayItem(className, columnClassMap[columnName]);
        observable_1.notify(row._attributes, 'className');
    }
}
exports.removeCellClassName = removeCellClassName;
function setPagination(_a, pageOptions) {
    var data = _a.data;
    data.pageOptions = pageOptions;
}
exports.setPagination = setPagination;
function movePage(store, page) {
    var _a;
    var data = store.data, rowCoords = store.rowCoords, dimension = store.dimension;
    data.pageOptions.page = page;
    observable_1.notify(data, 'pageOptions');
    rowCoords.heights = (_a = data.rawData).slice.apply(_a, data.pageRowRange).map(function (row) { return data_2.getRowHeight(row, dimension.rowHeight); });
    selection_1.initSelection(store);
    focus_1.initFocus(store);
    viewport_1.setScrollTop(store, 0);
    setCheckedAllRows(store, false);
}
exports.movePage = movePage;
function getDataToBeObservable(acc, row, index, treeColumnName) {
    if (treeColumnName && row._attributes.tree.hidden) {
        return acc;
    }
    if (!observable_1.isObservable(row)) {
        acc.rows.push(row);
        acc.targetIndexes.push(index);
    }
    return acc;
}
function createOriginData(data, rowRange, treeColumnName) {
    var start = rowRange[0], end = rowRange[1];
    return data.rawData
        .slice(start, end)
        .reduce(function (acc, row, index) {
        return getDataToBeObservable(acc, row, index + start, treeColumnName);
    }, {
        rows: [],
        targetIndexes: []
    });
}
function createFilteredOriginData(data, rowRange, treeColumnName) {
    var start = rowRange[0], end = rowRange[1];
    return data
        .filteredIndex.slice(start, end)
        .reduce(function (acc, rowIndex) {
        return getDataToBeObservable(acc, data.rawData[rowIndex], rowIndex, treeColumnName);
    }, { rows: [], targetIndexes: [] });
}
function createObservableData(_a, allRowRange) {
    var column = _a.column, data = _a.data, viewport = _a.viewport, id = _a.id;
    if (allRowRange === void 0) { allRowRange = false; }
    var rowRange = allRowRange ? [0, data.rawData.length] : viewport.rowRange;
    var treeColumnName = column.treeColumnName;
    var originData = data.filters
        ? createFilteredOriginData(data, rowRange, treeColumnName)
        : createOriginData(data, rowRange, treeColumnName);
    if (!originData.rows.length) {
        return;
    }
    if (treeColumnName) {
        changeToObservableTreeData(column, data, originData, id);
    }
    else {
        changeToObservableData(column, data, originData);
    }
    observable_1.notify(data, 'rawData');
    observable_1.notify(data, 'viewData');
    observable_1.notify(data, 'filteredRawData');
    observable_1.notify(data, 'filteredViewData');
}
exports.createObservableData = createObservableData;
function changeToObservableData(column, data, originData) {
    var targetIndexes = originData.targetIndexes, rows = originData.rows;
    // prevRows is needed to create rowSpan
    var prevRows = targetIndexes.map(function (targetIndex) { return data.rawData[targetIndex - 1]; });
    var _a = data_1.createData(rows, column, false, prevRows), rawData = _a.rawData, viewData = _a.viewData;
    for (var index = 0, end = rawData.length; index < end; index += 1) {
        var targetIndex = targetIndexes[index];
        data.rawData[targetIndex] = rawData[index];
        data.viewData[targetIndex] = viewData[index];
    }
}
function changeToObservableTreeData(column, data, originData, id) {
    var rows = originData.rows;
    var rawData = data.rawData, viewData = data.viewData;
    var allColumnMap = column.allColumnMap, treeColumnName = column.treeColumnName, treeIcon = column.treeIcon;
    // create new creation key for updating the observe function of hoc component
    data_1.generateDataCreationKey();
    rows.forEach(function (row) {
        var parentRow = data_2.findRowByRowKey(data, column, id, row._attributes.tree.parentRowKey);
        var rawRow = tree_2.createTreeRawRow(row, column.defaultValues, parentRow || null);
        var viewRow = data_1.createViewRow(row, allColumnMap, rawData, treeColumnName, treeIcon);
        var foundIndex = data_2.findIndexByRowKey(data, column, id, rawRow.rowKey);
        rawData[foundIndex] = rawRow;
        viewData[foundIndex] = viewRow;
    });
}
function setLoadingState(_a, state) {
    var data = _a.data;
    data.loadingState = state;
}
exports.setLoadingState = setLoadingState;
function setCheckedAllRows(_a, checked) {
    var data = _a.data;
    data.checkedAllRows = checked;
}
exports.setCheckedAllRows = setCheckedAllRows;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var common_1 = __webpack_require__(0);
var eventBus_1 = __webpack_require__(10);
var selection_1 = __webpack_require__(12);
var gridEvent_1 = tslib_1.__importDefault(__webpack_require__(11));
var rowSpan_1 = __webpack_require__(9);
function changeSelectionRange(selection, inputRange, id) {
    if (!selection_1.isSameInputRange(selection.inputRange, inputRange)) {
        selection.inputRange = inputRange;
        var eventBus = eventBus_1.getEventBus(id);
        var gridEvent = new gridEvent_1.default({ range: selection.rangeWithRowHeader });
        /**
         * Occurs when selecting cells
         * @event Grid#selection
         * @property {Object} range - Range of selection
         * @property {Array} range.start - Info of start cell (ex: [rowKey, columnName])
         * @property {Array} range.end - Info of end cell (ex: [rowKey, columnName])
         * @property {Grid} instance - Current grid instance
         */
        eventBus.trigger('selection', gridEvent);
    }
}
exports.changeSelectionRange = changeSelectionRange;
function setSelection(store, range) {
    var _a;
    var selection = store.selection, data = store.data, _b = store.column, visibleColumnsWithRowHeader = _b.visibleColumnsWithRowHeader, rowHeaderCount = _b.rowHeaderCount, id = store.id;
    var viewData = data.viewData;
    var rowLength = viewData.length;
    var columnLength = visibleColumnsWithRowHeader.length;
    var startRowIndex = common_1.clamp(range.start[0], 0, rowLength - 1);
    var endRowIndex = common_1.clamp(range.end[0], 0, rowLength - 1);
    var startColumnIndex = common_1.clamp(range.start[1] + rowHeaderCount, rowHeaderCount, columnLength - 1);
    var endColumnIndex = common_1.clamp(range.end[1] + rowHeaderCount, rowHeaderCount, columnLength - 1);
    _a = rowSpan_1.getRowRangeWithRowSpan([startRowIndex, endRowIndex], [startColumnIndex, endColumnIndex], visibleColumnsWithRowHeader, null, data), startRowIndex = _a[0], endRowIndex = _a[1];
    var inputRange = {
        row: [startRowIndex, endRowIndex],
        column: [startColumnIndex, endColumnIndex]
    };
    changeSelectionRange(selection, inputRange, id);
}
exports.setSelection = setSelection;
function initSelection(store) {
    store.selection.inputRange = null;
}
exports.initSelection = initSelection;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var gridEvent_1 = tslib_1.__importDefault(__webpack_require__(11));
var eventBus_1 = __webpack_require__(10);
var data_1 = __webpack_require__(6);
var focus_1 = __webpack_require__(71);
var rowSpan_1 = __webpack_require__(9);
var data_2 = __webpack_require__(13);
var observable_1 = __webpack_require__(5);
var data_3 = __webpack_require__(14);
var common_1 = __webpack_require__(0);
var tree_1 = __webpack_require__(19);
var column_1 = __webpack_require__(21);
var render_1 = __webpack_require__(72);
function makeObservable(store, rowKey) {
    var data = store.data, column = store.column, id = store.id;
    var rawData = data.rawData, viewData = data.viewData;
    var allColumnMap = column.allColumnMap, treeColumnName = column.treeColumnName, treeIcon = column.treeIcon;
    var foundIndex = data_1.findIndexByRowKey(data, column, id, rowKey, false);
    var rawRow = rawData[foundIndex];
    if (observable_1.isObservable(rawRow)) {
        return;
    }
    if (treeColumnName) {
        var parentRow = data_1.findRowByRowKey(data, column, id, rawRow._attributes.tree.parentRowKey);
        rawData[foundIndex] = tree_1.createTreeRawRow(rawRow, column.defaultValues, parentRow || null);
        viewData[foundIndex] = data_2.createViewRow(rawData[foundIndex], allColumnMap, rawData, treeColumnName, treeIcon);
    }
    else {
        rawData[foundIndex] = data_2.createRawRow(rawRow, foundIndex, column.defaultValues);
        viewData[foundIndex] = data_2.createViewRow(rawData[foundIndex], allColumnMap, rawData);
    }
    observable_1.notify(data, 'rawData');
    observable_1.notify(data, 'viewData');
}
function startEditing(store, rowKey, columnName) {
    var data = store.data, focus = store.focus, column = store.column, id = store.id;
    var filteredRawData = data.filteredRawData;
    var foundIndex = data_1.findIndexByRowKey(data, column, id, rowKey);
    if (foundIndex === -1) {
        return;
    }
    // makes the data observable to judge editable, disable of the cell;
    makeObservable(store, rowKey);
    if (!data_1.isEditableCell(data, column, foundIndex, columnName)) {
        return;
    }
    var eventBus = eventBus_1.getEventBus(id);
    var gridEvent = new gridEvent_1.default({
        rowKey: rowKey,
        columnName: columnName,
        value: filteredRawData[foundIndex][columnName]
    });
    /**
     * Occurs when editing the cell is started
     * @event Grid#editingStart
     * @property {number} rowKey - rowKey of the target cell
     * @property {number} columnName - columnName of the target cell
     * @property {number | string | boolean | null | undefined} value - value of the editing cell
     * @property {Grid} instance - Current grid instance
     */
    eventBus.trigger('editingStart', gridEvent);
    if (!gridEvent.isStopped()) {
        render_1.forceSyncRendering(function () {
            focus.forcedDestroyEditing = false;
            focus.navigating = false;
            focus.editingAddress = { rowKey: rowKey, columnName: columnName };
        });
    }
}
exports.startEditing = startEditing;
function finishEditing(_a, rowKey, columnName, value) {
    var focus = _a.focus, id = _a.id;
    var eventBus = eventBus_1.getEventBus(id);
    var gridEvent = new gridEvent_1.default({ rowKey: rowKey, columnName: columnName, value: value });
    /**
     * Occurs when editing the cell is finished
     * @event Grid#editingFinish
     * @property {number} rowKey - rowKey of the target cell
     * @property {number} columnName - columnName of the target cell
     * @property {number | string | boolean | null | undefined} value - value of the editing cell
     * @property {Grid} instance - Current grid instance
     */
    eventBus.trigger('editingFinish', gridEvent);
    if (!gridEvent.isStopped()) {
        if (focus_1.isEditingCell(focus, rowKey, columnName)) {
            render_1.forceSyncRendering(function () {
                focus.editingAddress = null;
                focus.navigating = true;
            });
        }
    }
}
exports.finishEditing = finishEditing;
function changeFocus(store, rowKey, columnName, id) {
    var data = store.data, focus = store.focus, column = store.column;
    if (focus_1.isFocusedCell(focus, rowKey, columnName) ||
        (columnName && column_1.isHiddenColumn(column, columnName))) {
        return;
    }
    var rawData = data.rawData, sortState = data.sortState;
    var eventBus = eventBus_1.getEventBus(id);
    var gridEvent = new gridEvent_1.default({
        rowKey: rowKey,
        columnName: columnName,
        prevColumnName: focus.columnName,
        prevRowKey: focus.rowKey
    });
    /**
     * Occurs when focused cell is about to change
     * @event Grid#focusChange
     * @property {number} rowKey - rowKey of the target cell
     * @property {number} columnName - columnName of the target cell
     * @property {number} prevRowKey - rowKey of the currently focused cell
     * @property {number} prevColumnName - columnName of the currently focused cell
     * @property {Grid} instance - Current grid instance
     */
    eventBus.trigger('focusChange', gridEvent);
    if (!gridEvent.isStopped()) {
        var focusRowKey = rowKey;
        if (rowKey && columnName && rowSpan_1.isRowSpanEnabled(sortState)) {
            var rowSpan = rowSpan_1.getRowSpanByRowKey(rowKey, columnName, rawData);
            if (rowSpan) {
                focusRowKey = rowSpan.mainRowKey;
            }
        }
        focus.prevColumnName = focus.columnName;
        focus.prevRowKey = focus.rowKey;
        focus.columnName = columnName;
        focus.rowKey = focusRowKey;
    }
}
exports.changeFocus = changeFocus;
function initFocus(_a) {
    var focus = _a.focus;
    focus.editingAddress = null;
    focus.navigating = false;
    focus.rowKey = null;
    focus.columnName = null;
    focus.prevRowKey = null;
    focus.prevColumnName = null;
}
exports.initFocus = initFocus;
function saveAndFinishEditing(store, rowKey, columnName, value) {
    var data = store.data, column = store.column, focus = store.focus, id = store.id;
    var foundIndex = data_1.findIndexByRowKey(data, column, id, rowKey);
    if (!focus_1.isEditingCell(focus, rowKey, columnName) || foundIndex === -1) {
        return;
    }
    // makes the data observable to judge editable, disable of the cell;
    makeObservable(store, rowKey);
    if (!data_1.isEditableCell(data, column, foundIndex, columnName)) {
        return;
    }
    if (common_1.isUndefined(value)) {
        render_1.forceSyncRendering(function () {
            focus.forcedDestroyEditing = true;
            focus.editingAddress = null;
            focus.navigating = true;
        });
        return;
    }
    data_3.setValue(store, rowKey, columnName, value);
    finishEditing(store, rowKey, columnName, value);
}
exports.saveAndFinishEditing = saveAndFinishEditing;
function setFocusInfo(store, rowKey, columnName, navigating) {
    var focus = store.focus, id = store.id;
    focus.navigating = navigating;
    changeFocus(store, rowKey, columnName, id);
}
exports.setFocusInfo = setFocusInfo;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FILTER_DEBOUNCE_TIME = 50;
exports.TREE_INDENT_WIDTH = 22;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
exports.keyNameMap = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    27: 'esc',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    67: 'c',
    86: 'v',
    32: 'space',
    33: 'pageUp',
    34: 'pageDown',
    36: 'home',
    35: 'end',
    46: 'del'
};
exports.keyboardEventTypeMap = {
    move: 'move',
    edit: 'edit',
    remove: 'remove',
    select: 'select',
    clipboard: 'clipboard'
};
exports.keyboardEventCommandMap = {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
    pageUp: 'pageUp',
    pageDown: 'pageDown',
    firstColumn: 'firstColumn',
    lastColumn: 'lastColumn',
    currentCell: 'currentCell',
    nextCell: 'nextCell',
    prevCell: 'prevCell',
    firstCell: 'firstCell',
    lastCell: 'lastCell',
    all: 'all',
    copy: 'copy',
    paste: 'paste'
};
/**
 * K-V object for matching keystroke and event command
 * K: keystroke (order : ctrl -> shift -> keyName)
 * V: [key event type, command]
 * @type {Object}
 * @ignore
 */
exports.keyStrokeCommandMap = {
    up: ['move', 'up'],
    down: ['move', 'down'],
    left: ['move', 'left'],
    right: ['move', 'right'],
    pageUp: ['move', 'pageUp'],
    pageDown: ['move', 'pageDown'],
    home: ['move', 'firstColumn'],
    end: ['move', 'lastColumn'],
    enter: ['edit', 'currentCell'],
    space: ['edit', 'currentCell'],
    tab: ['edit', 'nextCell'],
    backspace: ['remove'],
    del: ['remove'],
    'shift-tab': ['edit', 'prevCell'],
    'shift-up': ['select', 'up'],
    'shift-down': ['select', 'down'],
    'shift-left': ['select', 'left'],
    'shift-right': ['select', 'right'],
    'shift-pageUp': ['select', 'pageUp'],
    'shift-pageDown': ['select', 'pageDown'],
    'shift-home': ['select', 'firstColumn'],
    'shift-end': ['select', 'lastColumn'],
    'ctrl-a': ['select', 'all'],
    'ctrl-c': ['clipboard', 'copy'],
    'ctrl-v': ['clipboard', 'paste'],
    'ctrl-home': ['move', 'firstCell'],
    'ctrl-end': ['move', 'lastCell'],
    'ctrl-shift-home': ['select', 'firstCell'],
    'ctrl-shift-end': ['select', 'lastCell']
};
/**
 * Returns the keyStroke string
 * @param {Event} ev - Keyboard event
 * @returns {String}
 * @ignore
 */
function getKeyStrokeString(ev) {
    var keys = [];
    var keyCode = ev.keyCode, ctrlKey = ev.ctrlKey, metaKey = ev.metaKey, shiftKey = ev.shiftKey;
    if (ctrlKey || metaKey) {
        keys.push('ctrl');
    }
    if (shiftKey) {
        keys.push('shift');
    }
    if (keyCode in exports.keyNameMap) {
        keys.push(exports.keyNameMap[keyCode]);
    }
    return keys.join('-');
}
exports.getKeyStrokeString = getKeyStrokeString;
function keyEventGenerate(ev) {
    var keyStroke = getKeyStrokeString(ev);
    var commandInfo = exports.keyStrokeCommandMap[keyStroke];
    return commandInfo
        ? {
            type: commandInfo[0],
            command: commandInfo[1]
        }
        : {};
}
exports.keyEventGenerate = keyEventGenerate;
function isNonPrintableKey(keyCode) {
    var keys = [
        'shift',
        'ctrl',
        'esc',
        'left',
        'up',
        'right',
        'down',
        'pageUp',
        'pageDown',
        'end',
        'home'
    ];
    var key = exports.keyNameMap[keyCode];
    return common_1.includes(keys, key);
}
exports.isNonPrintableKey = isNonPrintableKey;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var util_1 = __webpack_require__(52);
var data_1 = __webpack_require__(13);
var tree_1 = __webpack_require__(20);
var observable_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var constant_1 = __webpack_require__(17);
var treeRowKey = -1;
function generateTreeRowKey() {
    // @TODO í‚¤ ì œë„ˆë ˆì´í„° ì¶”ê°€
    treeRowKey += 1;
    return treeRowKey;
}
function addChildRowKey(row, rowKey) {
    var tree = row._attributes.tree;
    if (tree && !common_1.includes(tree.childRowKeys, rowKey)) {
        tree.childRowKeys.push(rowKey);
    }
}
function insertChildRowKey(row, rowKey, offset) {
    var tree = row._attributes.tree;
    if (tree && !common_1.includes(tree.childRowKeys, rowKey)) {
        tree.childRowKeys.splice(offset, 0, rowKey);
    }
}
function getTreeCellInfo(rawData, row, useIcon) {
    var depth = tree_1.getDepth(rawData, row);
    var indentWidth = depth * constant_1.TREE_INDENT_WIDTH;
    if (useIcon) {
        indentWidth += constant_1.TREE_INDENT_WIDTH;
    }
    return {
        depth: depth,
        indentWidth: indentWidth,
        leaf: tree_1.isLeaf(row),
        expanded: tree_1.isExpanded(row)
    };
}
function createTreeRawRow(row, defaultValues, parentRow, options) {
    if (options === void 0) { options = { lazyObservable: false }; }
    var childRowKeys = [];
    if (row._attributes && row._attributes.tree) {
        childRowKeys = row._attributes.tree.childRowKeys;
    }
    var keyColumnName = options.keyColumnName, offset = options.offset, _a = options.lazyObservable, lazyObservable = _a === void 0 ? false : _a;
    // generate new tree rowKey when row doesn't have rowKey
    var targetTreeRowKey = util_1.isUndefined(row.rowKey) ? generateTreeRowKey() : Number(row.rowKey);
    var rawRow = data_1.createRawRow(row, targetTreeRowKey, defaultValues, {
        keyColumnName: keyColumnName,
        lazyObservable: lazyObservable
    });
    var rowKey = rawRow.rowKey;
    var defaultAttributes = {
        parentRowKey: parentRow ? parentRow.rowKey : null,
        childRowKeys: childRowKeys,
        hidden: parentRow ? !tree_1.isExpanded(parentRow) || tree_1.isHidden(parentRow) : false
    };
    if (parentRow) {
        if (!util_1.isUndefined(offset)) {
            insertChildRowKey(parentRow, rowKey, offset);
        }
        else {
            addChildRowKey(parentRow, rowKey);
        }
    }
    var tree = tslib_1.__assign({}, defaultAttributes, ((Array.isArray(row._children) || childRowKeys.length) && {
        expanded: !!row._attributes.expanded
    }));
    rawRow._attributes.tree = lazyObservable ? tree : observable_1.observable(tree);
    return rawRow;
}
exports.createTreeRawRow = createTreeRawRow;
function flattenTreeData(data, defaultValues, parentRow, options) {
    var flattenedRows = [];
    data.forEach(function (row) {
        var rawRow = createTreeRawRow(row, defaultValues, parentRow, options);
        flattenedRows.push(rawRow);
        if (Array.isArray(row._children)) {
            if (row._children.length) {
                flattenedRows.push.apply(flattenedRows, flattenTreeData(row._children, defaultValues, rawRow, options));
            }
        }
    });
    return flattenedRows;
}
exports.flattenTreeData = flattenTreeData;
function createTreeRawData(data, defaultValues, keyColumnName, lazyObservable) {
    if (lazyObservable === void 0) { lazyObservable = false; }
    // only reset the rowKey on lazy observable data
    if (lazyObservable) {
        treeRowKey = -1;
    }
    return flattenTreeData(data, defaultValues, null, { keyColumnName: keyColumnName, lazyObservable: lazyObservable });
}
exports.createTreeRawData = createTreeRawData;
function createTreeCellInfo(rawData, row, useIcon, lazyObservable) {
    if (lazyObservable === void 0) { lazyObservable = false; }
    var treeCellInfo = getTreeCellInfo(rawData, row, useIcon);
    var treeInfo = lazyObservable ? treeCellInfo : observable_1.observable(treeCellInfo);
    if (!lazyObservable) {
        observable_1.observe(function () {
            treeInfo.expanded = tree_1.isExpanded(row);
            treeInfo.leaf = tree_1.isLeaf(row);
        });
    }
    return treeInfo;
}
exports.createTreeCellInfo = createTreeCellInfo;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(5);
var data_1 = __webpack_require__(6);
var common_1 = __webpack_require__(0);
function getParentRow(store, rowKey, plainObj) {
    var data = store.data, column = store.column, id = store.id;
    var row = data_1.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        var parentRowKey = getParentRowKey(row);
        var parentRow = data_1.findRowByRowKey(data, column, id, parentRowKey);
        if (parentRow) {
            return plainObj ? observable_1.getOriginObject(parentRow) : parentRow;
        }
    }
    return null;
}
exports.getParentRow = getParentRow;
function getChildRows(store, rowKey, plainObj) {
    var data = store.data, column = store.column, id = store.id;
    var row = data_1.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        var childRowKeys = getChildRowKeys(row);
        return childRowKeys.map(function (childRowKey) {
            var childRow = data_1.findRowByRowKey(data, column, id, childRowKey);
            return plainObj ? observable_1.getOriginObject(childRow) : childRow;
        });
    }
    return [];
}
exports.getChildRows = getChildRows;
function getAncestorRows(store, rowKey) {
    var data = store.data, column = store.column, id = store.id;
    var rawData = data.rawData;
    var row = data_1.findRowByRowKey(data, column, id, rowKey);
    var ancestorRows = [];
    if (row) {
        traverseAncestorRows(rawData, row, function (parentRow) {
            ancestorRows.unshift(observable_1.getOriginObject(parentRow));
        });
    }
    return ancestorRows;
}
exports.getAncestorRows = getAncestorRows;
function getDescendantRows(store, rowKey) {
    var data = store.data, column = store.column, id = store.id;
    var rawData = data.rawData;
    var row = data_1.findRowByRowKey(data, column, id, rowKey);
    var childRows = [];
    if (row) {
        traverseDescendantRows(rawData, row, function (childRow) {
            childRows.push(observable_1.getOriginObject(childRow));
        });
    }
    return childRows;
}
exports.getDescendantRows = getDescendantRows;
function getStartIndexToAppendRow(store, parentRow, offset) {
    var data = store.data, column = store.column, id = store.id;
    var rawData = data.rawData;
    var startIdx;
    if (parentRow) {
        if (offset) {
            var childRowKeys = getChildRowKeys(parentRow);
            var prevChildRowKey = childRowKeys[offset - 1];
            var prevChildRowIdx = data_1.findIndexByRowKey(data, column, id, prevChildRowKey);
            var descendantRowsCount = getDescendantRows(store, prevChildRowKey).length;
            startIdx = prevChildRowIdx + descendantRowsCount + 1;
        }
        else {
            startIdx = data_1.findIndexByRowKey(data, column, id, parentRow.rowKey) + 1;
            if (common_1.isUndefined(offset)) {
                startIdx += getDescendantRows(store, parentRow.rowKey).length;
            }
        }
    }
    else {
        startIdx = common_1.isUndefined(offset) ? rawData.length : offset;
    }
    return startIdx;
}
exports.getStartIndexToAppendRow = getStartIndexToAppendRow;
function getParentRowKey(row) {
    var tree = row._attributes.tree;
    return tree && tree.parentRowKey !== row.rowKey ? tree.parentRowKey : null;
}
exports.getParentRowKey = getParentRowKey;
function getChildRowKeys(row) {
    var tree = row._attributes.tree;
    return tree ? tree.childRowKeys.slice() : [];
}
exports.getChildRowKeys = getChildRowKeys;
function isHidden(row) {
    var tree = row._attributes.tree;
    return !!(tree && tree.hidden);
}
exports.isHidden = isHidden;
function isLeaf(row) {
    var tree = row._attributes.tree;
    return !!tree && !tree.childRowKeys.length && common_1.isUndefined(tree.expanded);
}
exports.isLeaf = isLeaf;
function isExpanded(row) {
    var tree = row._attributes.tree;
    return !!(tree && tree.expanded);
}
exports.isExpanded = isExpanded;
function isRootChildRow(row) {
    var tree = row._attributes.tree;
    return !!tree && common_1.isNull(tree.parentRowKey);
}
exports.isRootChildRow = isRootChildRow;
function getDepth(rawData, row) {
    var parentRow = row;
    var depth = 0;
    do {
        depth += 1;
        parentRow = common_1.findProp('rowKey', getParentRowKey(parentRow), rawData);
    } while (parentRow);
    return depth;
}
exports.getDepth = getDepth;
function traverseAncestorRows(rawData, row, iteratee) {
    var parentRowKey = getParentRowKey(row);
    var parentRow;
    while (!common_1.isNull(parentRowKey)) {
        parentRow = common_1.findProp('rowKey', parentRowKey, rawData);
        iteratee(parentRow);
        parentRowKey = parentRow ? getParentRowKey(parentRow) : null;
    }
}
exports.traverseAncestorRows = traverseAncestorRows;
function traverseDescendantRows(rawData, row, iteratee) {
    var childRowKeys = getChildRowKeys(row);
    var rowKey, childRow;
    while (childRowKeys.length) {
        rowKey = childRowKeys.shift();
        childRow = common_1.findProp('rowKey', rowKey, rawData);
        iteratee(childRow);
        if (childRow) {
            childRowKeys = childRowKeys.concat(getChildRowKeys(childRow));
        }
    }
}
exports.traverseDescendantRows = traverseDescendantRows;
function getRootParentRow(rawData, row) {
    var rootParentRow = row;
    do {
        var parentRow = common_1.findProp('rowKey', getParentRowKey(rootParentRow), rawData);
        if (!parentRow) {
            break;
        }
        rootParentRow = parentRow;
    } while (rootParentRow);
    return rootParentRow;
}
exports.getRootParentRow = getRootParentRow;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
function isParentColumnHeader(complexHeaderColumns, name) {
    return !!complexHeaderColumns.length && common_1.some(function (item) { return item.name === name; }, complexHeaderColumns);
}
exports.isParentColumnHeader = isParentColumnHeader;
function isHiddenColumn(column, columnName) {
    return column.allColumnMap[columnName].hidden;
}
exports.isHiddenColumn = isHiddenColumn;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
exports.filterSelectOption = {
    number: {
        eq: '=',
        lt: '<',
        gt: '>',
        lte: '<=',
        gte: '>=',
        ne: '!='
    },
    text: {
        contain: 'Contains',
        eq: 'Equals',
        ne: 'Not equals',
        start: 'Starts with',
        end: 'Ends with'
    },
    date: {
        eq: 'Equals',
        ne: 'Not equals',
        after: 'After',
        afterEq: 'After or Equal',
        before: 'Before',
        beforeEq: 'Before or Equal'
    }
};
function getUnixTime(value) {
    return parseInt((new Date(String(value)).getTime() / 1000).toFixed(0), 10);
}
exports.getUnixTime = getUnixTime;
function getPredicateWithType(code, type, inputValue) {
    var convertFn = {
        number: Number,
        text: String,
        select: String,
        date: getUnixTime
    }[type];
    return code === 'eq'
        ? function (cellValue) { return convertFn(cellValue) === convertFn(inputValue); }
        : function (cellValue) { return convertFn(cellValue) !== convertFn(inputValue); };
}
function getFilterConditionFn(code, inputValue, type) {
    switch (code) {
        case 'eq':
        case 'ne':
            return getPredicateWithType(code, type, inputValue);
        case 'lt':
            return function (cellValue) { return Number(cellValue) < Number(inputValue); };
        case 'gt':
            return function (cellValue) { return Number(cellValue) > Number(inputValue); };
        case 'lte':
            return function (cellValue) { return Number(cellValue) <= Number(inputValue); };
        case 'gte':
            return function (cellValue) { return Number(cellValue) >= Number(inputValue); };
        case 'contain':
            return function (cellValue) {
                return common_1.isString(cellValue) && common_1.isString(inputValue) && cellValue.indexOf(inputValue) !== -1;
            };
        case 'start':
            return function (cellValue) {
                return common_1.isString(cellValue) && common_1.isString(inputValue) && common_1.startsWith(inputValue, cellValue);
            };
        case 'end':
            return function (cellValue) {
                return common_1.isString(cellValue) && common_1.isString(inputValue) && common_1.endsWith(inputValue, cellValue);
            };
        case 'after':
            return function (cellValue) { return getUnixTime(cellValue) > getUnixTime(inputValue); };
        case 'afterEq':
            return function (cellValue) { return getUnixTime(cellValue) >= getUnixTime(inputValue); };
        case 'before':
            return function (cellValue) { return getUnixTime(cellValue) < getUnixTime(inputValue); };
        case 'beforeEq':
            return function (cellValue) { return getUnixTime(cellValue) <= getUnixTime(inputValue); };
        default:
            throw new Error('code not available.');
    }
}
exports.getFilterConditionFn = getFilterConditionFn;
function composeConditionFn(fns, operator) {
    return function (value) {
        return fns.reduce(function (acc, fn) {
            return operator === 'OR' ? acc || fn(value) : acc && fn(value);
        }, operator !== 'OR');
    };
}
exports.composeConditionFn = composeConditionFn;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var observable_1 = __webpack_require__(5);
var column_1 = __webpack_require__(8);
var common_1 = __webpack_require__(0);
var default_1 = __webpack_require__(56);
var manager_1 = __webpack_require__(57);
var rowHeaderInput_1 = __webpack_require__(62);
var DEF_ROW_HEADER_INPUT = '<input type="checkbox" name="_checked" />';
var ROW_HEADER = 40;
var COLUMN = 50;
var rowHeadersMap = {
    rowNum: '_number',
    checkbox: '_checked'
};
function createBuiltInEditorOptions(editorType, options) {
    var editInfo = manager_1.editorMap[editorType];
    return {
        type: editInfo[0],
        options: tslib_1.__assign({}, editInfo[1], options)
    };
}
function createEditorOptions(editor) {
    if (common_1.isFunction(editor)) {
        return { type: editor };
    }
    if (common_1.isString(editor)) {
        return createBuiltInEditorOptions(editor);
    }
    if (common_1.isObject(editor)) {
        return common_1.isString(editor.type)
            ? createBuiltInEditorOptions(editor.type, editor.options)
            : editor;
    }
    return null;
}
function createRendererOptions(renderer) {
    if (common_1.isObject(renderer) && !common_1.isFunction(renderer) && common_1.isFunction(renderer.type)) {
        return renderer;
    }
    return { type: default_1.DefaultRenderer };
}
function createTreeInfo(treeColumnOptions, name) {
    if (treeColumnOptions && treeColumnOptions.name === name) {
        var _a = treeColumnOptions.useIcon, useIcon = _a === void 0 ? true : _a;
        return { tree: { useIcon: useIcon } };
    }
    return null;
}
function createRelationMap(relations) {
    var relationMap = {};
    relations.forEach(function (relation) {
        var editable = relation.editable, disabled = relation.disabled, listItems = relation.listItems, _a = relation.targetNames, targetNames = _a === void 0 ? [] : _a;
        targetNames.forEach(function (targetName) {
            relationMap[targetName] = {
                editable: editable,
                disabled: disabled,
                listItems: listItems
            };
        });
    });
    return relationMap;
}
function createHeaderAlignInfo(name, alignInfo) {
    var columnsAlign = alignInfo.columnsAlign, defaultAlign = alignInfo.align, defaultVAlign = alignInfo.valign;
    var columnOption = common_1.findProp('name', name, columnsAlign);
    var headerAlign = columnOption && columnOption.align ? columnOption.align : defaultAlign;
    var headerVAlign = columnOption && columnOption.valign ? columnOption.valign : defaultVAlign;
    return {
        headerAlign: headerAlign,
        headerVAlign: headerVAlign
    };
}
function createColumnFilterOption(filter) {
    var defaultOption = {
        type: common_1.isObject(filter) ? filter.type : filter,
        showApplyBtn: false,
        showClearBtn: false
    };
    if (common_1.isString(filter)) {
        if (filter === 'select') {
            return tslib_1.__assign({}, defaultOption, { operator: 'OR' });
        }
    }
    if (common_1.isObject(filter)) {
        return tslib_1.__assign({}, defaultOption, filter);
    }
    return defaultOption;
}
exports.createColumnFilterOption = createColumnFilterOption;
function createRelationColumns(relations) {
    var relationColumns = [];
    relations.forEach(function (relation) {
        var _a = relation.targetNames, targetNames = _a === void 0 ? [] : _a;
        targetNames.forEach(function (targetName) {
            relationColumns.push(targetName);
        });
    });
    return relationColumns;
}
exports.createRelationColumns = createRelationColumns;
// eslint-disable-next-line max-params
function createColumn(column, columnOptions, relationColumns, gridCopyOptions, treeColumnOptions, alignInfo) {
    var name = column.name, header = column.header, width = column.width, minWidth = column.minWidth, align = column.align, hidden = column.hidden, resizable = column.resizable, editor = column.editor, renderer = column.renderer, relations = column.relations, sortable = column.sortable, sortingType = column.sortingType, copyOptions = column.copyOptions, validation = column.validation, formatter = column.formatter, onBeforeChange = column.onBeforeChange, onAfterChange = column.onAfterChange, whiteSpace = column.whiteSpace, ellipsis = column.ellipsis, valign = column.valign, defaultValue = column.defaultValue, escapeHTML = column.escapeHTML, ignored = column.ignored, filter = column.filter;
    var editorOptions = createEditorOptions(editor);
    var rendererOptions = createRendererOptions(renderer);
    var filterOptions = filter ? createColumnFilterOption(filter) : null;
    var _a = createHeaderAlignInfo(name, alignInfo), headerAlign = _a.headerAlign, headerVAlign = _a.headerVAlign;
    return observable_1.observable(tslib_1.__assign({ name: name,
        escapeHTML: escapeHTML, header: header || name, hidden: Boolean(hidden), resizable: common_1.isUndefined(resizable) ? Boolean(columnOptions.resizable) : Boolean(resizable), align: align || 'left', fixedWidth: typeof width === 'number', copyOptions: tslib_1.__assign({}, gridCopyOptions, copyOptions), baseWidth: (width === 'auto' ? 0 : width) || 0, minWidth: minWidth || columnOptions.minWidth || COLUMN, relationMap: createRelationMap(relations || []), related: common_1.includes(relationColumns, name), sortable: sortable, sortingType: sortingType || 'asc', validation: validation ? tslib_1.__assign({}, validation) : {}, renderer: rendererOptions, formatter: formatter,
        onBeforeChange: onBeforeChange,
        onAfterChange: onAfterChange,
        whiteSpace: whiteSpace,
        ellipsis: ellipsis,
        valign: valign,
        defaultValue: defaultValue,
        ignored: ignored }, (!!editorOptions && { editor: editorOptions }), createTreeInfo(treeColumnOptions, name), { headerAlign: headerAlign,
        headerVAlign: headerVAlign, filter: filterOptions }));
}
exports.createColumn = createColumn;
function createRowHeader(data, alignInfo) {
    var rowHeader = common_1.isString(data)
        ? { name: rowHeadersMap[data] }
        : tslib_1.__assign({ name: rowHeadersMap[data.type] }, common_1.omit(data, 'type'));
    var name = rowHeader.name, header = rowHeader.header, align = rowHeader.align, valign = rowHeader.valign, renderer = rowHeader.renderer, width = rowHeader.width, minWidth = rowHeader.minWidth;
    var baseMinWith = common_1.isNumber(minWidth) ? minWidth : ROW_HEADER;
    var baseWidth = (width === 'auto' ? baseMinWith : width) || baseMinWith;
    var rowNumColumn = column_1.isRowNumColumn(name);
    var defaultHeader = rowNumColumn ? 'No. ' : DEF_ROW_HEADER_INPUT;
    var rendererOptions = renderer || {
        type: rowNumColumn ? default_1.DefaultRenderer : rowHeaderInput_1.RowHeaderInputRenderer
    };
    var _a = createHeaderAlignInfo(name, alignInfo), headerAlign = _a.headerAlign, headerVAlign = _a.headerVAlign;
    return observable_1.observable({
        name: name,
        header: header || defaultHeader,
        hidden: false,
        resizable: false,
        align: align || 'center',
        valign: valign || 'middle',
        renderer: createRendererOptions(rendererOptions),
        fixedWidth: true,
        baseWidth: baseWidth,
        escapeHTML: false,
        minWidth: baseMinWith,
        headerAlign: headerAlign,
        headerVAlign: headerVAlign
    });
}
function createComplexHeaderColumns(column, alignInfo) {
    var header = column.header, name = column.name, childNames = column.childNames, sortable = column.sortable, sortingType = column.sortingType;
    var _a = createHeaderAlignInfo(name, alignInfo), headerAlign = _a.headerAlign, headerVAlign = _a.headerVAlign;
    return observable_1.observable({
        header: header,
        name: name,
        childNames: childNames,
        sortable: sortable,
        sortingType: sortingType,
        headerAlign: headerAlign,
        headerVAlign: headerVAlign
    });
}
function create(_a) {
    var columns = _a.columns, columnOptions = _a.columnOptions, rowHeaders = _a.rowHeaders, copyOptions = _a.copyOptions, keyColumnName = _a.keyColumnName, treeColumnOptions = _a.treeColumnOptions, complexColumns = _a.complexColumns, align = _a.align, valign = _a.valign, columnsAlign = _a.columnsAlign;
    var relationColumns = columns.reduce(function (acc, _a) {
        var relations = _a.relations;
        acc = acc.concat(createRelationColumns(relations || []));
        return acc.filter(function (columnName, idx) { return acc.indexOf(columnName) === idx; });
    }, []);
    var headerAlignInfo = { columnsAlign: columnsAlign, align: align, valign: valign };
    var rowHeaderInfos = rowHeaders.map(function (rowHeader) { return createRowHeader(rowHeader, headerAlignInfo); });
    var columnInfos = columns.map(function (column) {
        return createColumn(column, columnOptions, relationColumns, copyOptions, treeColumnOptions, headerAlignInfo);
    });
    var allColumns = rowHeaderInfos.concat(columnInfos);
    var treeColumnName = treeColumnOptions.name, _b = treeColumnOptions.useIcon, treeIcon = _b === void 0 ? true : _b, _c = treeColumnOptions.useCascadingCheckbox, treeCascadingCheckbox = _c === void 0 ? true : _c;
    var complexHeaderColumns = complexColumns.map(function (column) {
        return createComplexHeaderColumns(column, headerAlignInfo);
    });
    return observable_1.observable(tslib_1.__assign({ keyColumnName: keyColumnName,
        allColumns: allColumns,
        complexHeaderColumns: complexHeaderColumns,
        headerAlignInfo: headerAlignInfo, frozenCount: columnOptions.frozenCount || 0, dataForColumnCreation: {
            copyOptions: copyOptions,
            columnOptions: columnOptions,
            treeColumnOptions: treeColumnOptions,
            relationColumns: relationColumns,
            rowHeaders: rowHeaderInfos
        }, get allColumnMap() {
            return common_1.createMapFromArray(this.allColumns, 'name');
        },
        get rowHeaderCount() {
            return rowHeaderInfos.length;
        },
        get visibleColumns() {
            return this.allColumns.slice(this.rowHeaderCount).filter(function (_a) {
                var hidden = _a.hidden;
                return !hidden;
            });
        },
        get visibleColumnsWithRowHeader() {
            return this.allColumns.filter(function (_a) {
                var hidden = _a.hidden;
                return !hidden;
            });
        },
        get visibleColumnsBySide() {
            return {
                L: this.visibleColumns.slice(0, this.frozenCount),
                R: this.visibleColumns.slice(this.frozenCount)
            };
        },
        get visibleColumnsBySideWithRowHeader() {
            var frozenLastIndex = this.rowHeaderCount + this.frozenCount;
            return {
                L: this.visibleColumnsWithRowHeader.slice(0, frozenLastIndex),
                R: this.visibleColumnsWithRowHeader.slice(frozenLastIndex)
            };
        },
        get defaultValues() {
            return this.allColumns
                .filter(function (_a) {
                var defaultValue = _a.defaultValue;
                return Boolean(defaultValue);
            })
                .map(function (_a) {
                var name = _a.name, defaultValue = _a.defaultValue;
                return ({ name: name, value: defaultValue });
            });
        },
        get visibleFrozenCount() {
            return this.visibleColumnsBySideWithRowHeader.L.length;
        },
        get validationColumns() {
            return this.allColumns.filter(function (_a) {
                var validation = _a.validation;
                return !!validation;
            });
        },
        get ignoredColumns() {
            return this.allColumns.filter(function (_a) {
                var ignored = _a.ignored;
                return ignored;
            }).map(function (_a) {
                var name = _a.name;
                return name;
            });
        } }, (treeColumnName && { treeColumnName: treeColumnName, treeIcon: treeIcon, treeCascadingCheckbox: treeCascadingCheckbox })));
}
exports.create = create;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
function getCustomValue(customValue, value, rowAttrs, column) {
    return typeof customValue === 'function' ? customValue(value, rowAttrs, column) : customValue;
}
function getTextWithCopyOptionsApplied(valueMap, rawData, column) {
    var text = valueMap.value;
    var copyOptions = column.copyOptions, editor = column.editor;
    var editorOptions = editor && editor.options;
    // priority: customValue > useListItemText > useFormattedValue > original Data
    if (copyOptions) {
        if (copyOptions.customValue) {
            text = getCustomValue(copyOptions.customValue, valueMap.value, rawData, column);
        }
        else if (copyOptions.useListItemText && editorOptions) {
            var listItems_1 = editorOptions.listItems;
            var value = valueMap.value;
            var valueList = [value];
            var result_1 = [];
            if (typeof value === 'string') {
                valueList = value.split(',');
            }
            valueList.forEach(function (val) {
                var listItem = common_1.find(function (item) { return item.value === val; }, listItems_1);
                result_1.push(listItem ? listItem.text : val);
            });
            text = result_1.join(',');
        }
        else if (copyOptions.useFormattedValue) {
            text = "" + valueMap.formattedValue;
        }
    }
    if (typeof text === 'undefined' || text === null) {
        return '';
    }
    return String(text);
}
function getValueToString(store) {
    var visibleColumnsWithRowHeader = store.column.visibleColumnsWithRowHeader, _a = store.focus, rowIndex = _a.rowIndex, columnName = _a.columnName, totalColumnIndex = _a.totalColumnIndex, _b = store.data, filteredViewData = _b.filteredViewData, filteredRawData = _b.filteredRawData;
    if (rowIndex === null || columnName === null || totalColumnIndex === null) {
        return '';
    }
    var valueMap = filteredViewData[rowIndex].valueMap[columnName];
    return getTextWithCopyOptionsApplied(valueMap, filteredRawData, visibleColumnsWithRowHeader[totalColumnIndex]);
}
function getValuesToString(store) {
    var originalRange = store.selection.originalRange, visibleColumnsWithRowHeader = store.column.visibleColumnsWithRowHeader, _a = store.data, filteredViewData = _a.filteredViewData, filteredRawData = _a.filteredRawData;
    if (!originalRange) {
        return '';
    }
    var _b = originalRange, row = _b.row, column = _b.column;
    var rowList = filteredViewData.slice(row[0], row[1] + 1);
    var columnInRange = visibleColumnsWithRowHeader.slice(column[0], column[1] + 1);
    return rowList
        .map(function (_a) {
        var valueMap = _a.valueMap;
        return columnInRange
            .map(function (_a, index) {
            var name = _a.name;
            return getTextWithCopyOptionsApplied(valueMap[name], filteredRawData, visibleColumnsWithRowHeader[index]);
        })
            .join('\t');
    })
        .join('\n');
}
function getRangeToPaste(store, pasteData) {
    var originalRange = store.selection.originalRange, _a = store.focus, totalColumnIndex = _a.totalColumnIndex, originalRowIndex = _a.originalRowIndex, visibleColumnsWithRowHeader = store.column.visibleColumnsWithRowHeader, viewData = store.data.viewData;
    var startRowIndex, startColumnIndex;
    if (originalRange) {
        startRowIndex = originalRange.row[0];
        startColumnIndex = originalRange.column[0];
    }
    else {
        startRowIndex = originalRowIndex;
        startColumnIndex = totalColumnIndex;
    }
    var endRowIndex = Math.min(pasteData.length + startRowIndex, viewData.length) - 1;
    var endColumnIndex = Math.min(pasteData[0].length + startColumnIndex, visibleColumnsWithRowHeader.length) - 1;
    return {
        row: [startRowIndex, endRowIndex],
        column: [startColumnIndex, endColumnIndex]
    };
}
exports.getRangeToPaste = getRangeToPaste;
function copyDataToRange(range, pasteData) {
    var rowLength = range.row[1] - range.row[0] + 1;
    var colLength = range.column[1] - range.column[0] + 1;
    var dataRowLength = pasteData.length;
    var dataColLength = pasteData[0].length;
    var rowDupCount = Math.floor(rowLength / dataRowLength) - 1;
    var colDupCount = Math.floor(colLength / dataColLength) - 1;
    var result = pasteData.slice();
    for (var i = 0; i < rowDupCount; i += 1) {
        pasteData.forEach(function (row) {
            result.push(row.slice(0));
        });
    }
    result.forEach(function (row) {
        var rowData = row.slice(0);
        for (var i = 0; i < colDupCount; i += 1) {
            row.push.apply(row, rowData);
        }
    });
    return result;
}
exports.copyDataToRange = copyDataToRange;
function getText(store) {
    var selection = store.selection, _a = store.focus, rowIndex = _a.rowIndex, columnName = _a.columnName;
    if (selection.range) {
        return getValuesToString(store);
    }
    if (rowIndex !== null && columnName !== null) {
        return getValueToString(store);
    }
    return '';
}
exports.getText = getText;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var data_1 = __webpack_require__(13);
var data_2 = __webpack_require__(6);
var observable_1 = __webpack_require__(5);
var instance_1 = __webpack_require__(7);
var data_3 = __webpack_require__(14);
var tree_1 = __webpack_require__(20);
var eventBus_1 = __webpack_require__(10);
var gridEvent_1 = tslib_1.__importDefault(__webpack_require__(11));
var tree_2 = __webpack_require__(19);
var common_1 = __webpack_require__(0);
function changeExpandedAttr(row, expanded) {
    var tree = row._attributes.tree;
    if (tree) {
        row._attributes.expanded = expanded;
        tree.expanded = expanded;
    }
}
function changeHiddenAttr(row, hidden) {
    var tree = row._attributes.tree;
    if (tree) {
        tree.hidden = hidden;
    }
}
function expand(store, row, recursive) {
    var rowKey = row.rowKey;
    var eventBus = eventBus_1.getEventBus(store.id);
    var gridEvent = new gridEvent_1.default({ rowKey: rowKey });
    /**
     * Occurs when the row having child rows is expanded
     * @event Grid#expand
     * @type {module:event/gridEvent}
     * @property {number|string} rowKey - rowKey of the expanded row
     * @property {Grid} instance - Current grid instance
     */
    eventBus.trigger('expand', gridEvent);
    if (gridEvent.isStopped()) {
        return;
    }
    var data = store.data, rowCoords = store.rowCoords, dimension = store.dimension, column = store.column, id = store.id, viewport = store.viewport;
    var heights = rowCoords.heights;
    changeExpandedAttr(row, true);
    var childRowKeys = tree_1.getChildRowKeys(row);
    childRowKeys.forEach(function (childRowKey) {
        var childRow = data_2.findRowByRowKey(data, column, id, childRowKey);
        if (!childRow) {
            return;
        }
        changeHiddenAttr(childRow, false);
        if (!tree_1.isLeaf(childRow) && (tree_1.isExpanded(childRow) || recursive)) {
            expand(store, childRow, recursive);
        }
        var index = data_2.findIndexByRowKey(data, column, id, childRowKey);
        heights[index] = data_2.getRowHeight(childRow, dimension.rowHeight);
    });
    if (childRowKeys.length) {
        observable_1.notify(rowCoords, 'heights');
        observable_1.notify(viewport, 'rowRange');
    }
}
function collapse(store, row, recursive) {
    var rowKey = row.rowKey;
    var eventBus = eventBus_1.getEventBus(store.id);
    var gridEvent = new gridEvent_1.default({ rowKey: rowKey });
    /**
     * Occurs when the row having child rows is collapsed
     * @event Grid#collapse
     * @type {module:event/gridEvent}
     * @property {number|string} rowKey - rowKey of the collapsed row
     * @property {Grid} instance - Current grid instance
     */
    eventBus.trigger('collapse', gridEvent);
    if (gridEvent.isStopped()) {
        return;
    }
    var data = store.data, rowCoords = store.rowCoords, column = store.column, id = store.id;
    var heights = rowCoords.heights;
    changeExpandedAttr(row, false);
    var childRowKeys = tree_1.getChildRowKeys(row);
    childRowKeys.forEach(function (childRowKey) {
        var childRow = data_2.findRowByRowKey(data, column, id, childRowKey);
        if (!childRow) {
            return;
        }
        changeHiddenAttr(childRow, true);
        if (!tree_1.isLeaf(childRow)) {
            if (recursive) {
                collapse(store, childRow, recursive);
            }
            else {
                tree_1.getDescendantRows(store, childRowKey).forEach(function (_a) {
                    var descendantRowKey = _a.rowKey;
                    var index = data_2.findIndexByRowKey(data, column, id, descendantRowKey);
                    heights[index] = 0;
                });
            }
        }
        var index = data_2.findIndexByRowKey(data, column, id, childRowKey);
        heights[index] = 0;
    });
    observable_1.notify(rowCoords, 'heights');
}
function setCheckedState(disabled, row, state) {
    if (row && data_3.isUpdatableRowAttr('checked', row._attributes.checkDisabled, disabled)) {
        row._attributes.checked = state;
    }
}
function changeAncestorRowsCheckedState(store, rowKey) {
    var data = store.data, column = store.column, id = store.id;
    var rawData = data.rawData, disabled = data.disabled;
    var row = data_2.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        tree_1.traverseAncestorRows(rawData, row, function (parentRow) {
            var childRowKeys = tree_1.getChildRowKeys(parentRow);
            var checkedChildRows = childRowKeys.filter(function (childRowKey) {
                var childRow = data_2.findRowByRowKey(data, column, id, childRowKey);
                return !!childRow && childRow._attributes.checked;
            });
            var checked = childRowKeys.length === checkedChildRows.length;
            setCheckedState(disabled, parentRow, checked);
        });
    }
}
function changeDescendantRowsCheckedState(store, rowKey, state) {
    var data = store.data, column = store.column, id = store.id;
    var rawData = data.rawData, disabled = data.disabled;
    var row = data_2.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        tree_1.traverseDescendantRows(rawData, row, function (childRow) {
            setCheckedState(disabled, childRow, state);
        });
    }
}
function removeChildRowKey(row, rowKey) {
    var tree = row._attributes.tree;
    if (tree) {
        common_1.removeArrayItem(rowKey, tree.childRowKeys);
        observable_1.notify(tree, 'childRowKeys');
    }
}
function removeExpandedAttr(row) {
    var tree = row._attributes.tree;
    if (tree) {
        delete tree.expanded;
        observable_1.notify(tree, 'expanded');
    }
}
exports.removeExpandedAttr = removeExpandedAttr;
function expandByRowKey(store, rowKey, recursive) {
    var data = store.data, column = store.column, id = store.id;
    var row = data_2.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        expand(store, row, recursive);
    }
}
exports.expandByRowKey = expandByRowKey;
function expandAll(store) {
    store.data.rawData.forEach(function (row) {
        if (tree_1.isRootChildRow(row) && !tree_1.isLeaf(row)) {
            expand(store, row, true);
        }
    });
}
exports.expandAll = expandAll;
function collapseByRowKey(store, rowKey, recursive) {
    var data = store.data, column = store.column, id = store.id;
    var row = data_2.findRowByRowKey(data, column, id, rowKey);
    if (row) {
        collapse(store, row, recursive);
    }
}
exports.collapseByRowKey = collapseByRowKey;
function collapseAll(store) {
    store.data.rawData.forEach(function (row) {
        if (tree_1.isRootChildRow(row) && !tree_1.isLeaf(row)) {
            collapse(store, row, true);
        }
    });
}
exports.collapseAll = collapseAll;
function changeTreeRowsCheckedState(store, rowKey, state) {
    var _a = store.column, treeColumnName = _a.treeColumnName, treeCascadingCheckbox = _a.treeCascadingCheckbox;
    if (treeColumnName && treeCascadingCheckbox) {
        changeDescendantRowsCheckedState(store, rowKey, state);
        changeAncestorRowsCheckedState(store, rowKey);
    }
}
exports.changeTreeRowsCheckedState = changeTreeRowsCheckedState;
function appendTreeRow(store, row, options) {
    var data = store.data, column = store.column, rowCoords = store.rowCoords, dimension = store.dimension, id = store.id;
    var rawData = data.rawData, viewData = data.viewData;
    var defaultValues = column.defaultValues, allColumnMap = column.allColumnMap, treeColumnName = column.treeColumnName, treeIcon = column.treeIcon;
    var heights = rowCoords.heights;
    var parentRowKey = options.parentRowKey, offset = options.offset;
    var parentRow = data_2.findRowByRowKey(data, column, id, parentRowKey);
    var startIdx = tree_1.getStartIndexToAppendRow(store, parentRow, offset);
    var rawRows = tree_2.flattenTreeData([row], defaultValues, parentRow, {
        keyColumnName: column.keyColumnName,
        offset: offset
    });
    rawData.splice.apply(rawData, [startIdx, 0].concat(rawRows));
    var viewRows = rawRows.map(function (rawRow) {
        return data_1.createViewRow(rawRow, allColumnMap, rawData, treeColumnName, treeIcon);
    });
    viewData.splice.apply(viewData, [startIdx, 0].concat(viewRows));
    var rowHeights = rawRows.map(function (rawRow) { return data_2.getRowHeight(rawRow, dimension.rowHeight); });
    heights.splice.apply(heights, [startIdx, 0].concat(rowHeights));
    rawRows.forEach(function (rawRow) {
        instance_1.getDataManager(id).push('CREATE', rawRow);
    });
    observable_1.notify(data, 'rawData');
    observable_1.notify(data, 'viewData');
    observable_1.notify(data, 'filteredRawData');
    observable_1.notify(data, 'filteredViewData');
    observable_1.notify(rowCoords, 'heights');
}
exports.appendTreeRow = appendTreeRow;
function removeTreeRow(store, rowKey) {
    var data = store.data, rowCoords = store.rowCoords, id = store.id, column = store.column;
    var rawData = data.rawData, viewData = data.viewData;
    var heights = rowCoords.heights;
    var parentRow = tree_1.getParentRow(store, rowKey);
    if (parentRow) {
        removeChildRowKey(parentRow, parentRow.rowKey);
        if (!tree_1.getChildRowKeys(parentRow).length) {
            removeExpandedAttr(parentRow);
        }
    }
    var startIdx = data_2.findIndexByRowKey(data, column, id, rowKey);
    var endIdx = tree_1.getDescendantRows(store, rowKey).length + 1;
    var removedRows = rawData.splice(startIdx, endIdx);
    viewData.splice(startIdx, endIdx);
    heights.splice(startIdx, endIdx);
    for (var i = removedRows.length - 1; i >= 0; i -= 1) {
        instance_1.getDataManager(id).push('DELETE', removedRows[i]);
    }
    observable_1.notify(data, 'rawData');
    observable_1.notify(data, 'viewData');
    observable_1.notify(data, 'filteredRawData');
    observable_1.notify(data, 'filteredViewData');
    observable_1.notify(rowCoords, 'heights');
}
exports.removeTreeRow = removeTreeRow;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var common_1 = __webpack_require__(0);
var observable_1 = __webpack_require__(5);
var sort_1 = __webpack_require__(73);
var eventBus_1 = __webpack_require__(10);
var gridEvent_1 = tslib_1.__importDefault(__webpack_require__(11));
var data_1 = __webpack_require__(14);
var data_2 = __webpack_require__(6);
function sortData(store) {
    // makes all data observable to sort the data properly;
    data_1.createObservableData(store, true);
    var data = store.data, id = store.id;
    var columns = data.sortState.columns, orgRawData = data.rawData, orgViewData = data.viewData;
    var rawData = orgRawData.slice();
    var viewData = orgViewData.slice();
    var options = columns.slice();
    if (columns.length !== 1 || columns[0].columnName !== 'sortKey') {
        // Columns that are not sorted by sortState must be sorted by sortKey
        options.push({ columnName: 'sortKey', ascending: true });
    }
    rawData.sort(sort_1.sortRawData(options));
    viewData.sort(sort_1.sortViewData(options));
    if (!common_1.arrayEqual(rawData, orgRawData)) {
        data.rawData = rawData;
        data.viewData = viewData;
    }
    var eventBus = eventBus_1.getEventBus(id);
    var gridEvent = new gridEvent_1.default({ sortState: data.sortState });
    /**
     * Occurs when sorting.
     * @event Grid#sort
     * @property {number} sortState - sort state
     * @property {Grid} instance - Current grid instance
     */
    eventBus.trigger('sort', gridEvent);
}
function notifySortState(data) {
    if (!data.sortState.columns.length) {
        initSortState(data);
        return;
    }
    observable_1.notify(data, 'sortState');
}
function toggleSortAscending(data, columnName, ascending, sortingType, cancelable) {
    var sortState = data.sortState;
    var index = common_1.findPropIndex('columnName', columnName, sortState.columns);
    var defaultAscending = sortingType === 'asc';
    if (defaultAscending === ascending && cancelable) {
        data.sortState.columns.splice(index, 1);
    }
    else {
        data.sortState.columns[index].ascending = ascending;
    }
}
function changeSingleSortState(data, columnName, ascending, sortingType, cancelable) {
    var sortState = data.sortState;
    var columns = sortState.columns;
    var sortedColumn = { columnName: columnName, ascending: ascending };
    if (columns.length === 1 && columns[0].columnName === columnName) {
        toggleSortAscending(data, columnName, ascending, sortingType, cancelable);
    }
    else {
        data.sortState.columns = [sortedColumn];
    }
    notifySortState(data);
}
function changeMultiSortState(data, columnName, ascending, sortingType, cancelable) {
    var sortedColumn = { columnName: columnName, ascending: ascending };
    var sortState = data.sortState;
    var columns = sortState.columns;
    var index = common_1.findPropIndex('columnName', columnName, columns);
    if (index === -1) {
        data.sortState.columns = data_2.isInitialSortState(sortState)
            ? [sortedColumn]
            : columns.concat([sortedColumn]);
    }
    else {
        toggleSortAscending(data, columnName, ascending, sortingType, cancelable);
    }
    notifySortState(data);
}
function changeSortState(_a, columnName, ascending, withCtrl, cancelable) {
    var data = _a.data, column = _a.column;
    if (cancelable === void 0) { cancelable = true; }
    if (columnName === 'sortKey') {
        initSortState(data);
    }
    else {
        var sortingType = column.allColumnMap[columnName].sortingType;
        if (withCtrl) {
            changeMultiSortState(data, columnName, ascending, sortingType, cancelable);
        }
        else {
            changeSingleSortState(data, columnName, ascending, sortingType, cancelable);
        }
    }
}
exports.changeSortState = changeSortState;
function sort(store, columnName, ascending, withCtrl, cancelable) {
    if (withCtrl === void 0) { withCtrl = false; }
    if (cancelable === void 0) { cancelable = true; }
    var data = store.data, column = store.column;
    var sortState = data.sortState;
    if (!data_2.isSortable(sortState, column, columnName)) {
        return;
    }
    changeSortState(store, columnName, ascending, withCtrl, cancelable);
    sortData(store);
}
exports.sort = sort;
function unsort(store, columnName) {
    if (columnName === void 0) { columnName = 'sortKey'; }
    var data = store.data, column = store.column;
    var sortState = data.sortState;
    if (!data_2.isSortable(sortState, column, columnName)) {
        return;
    }
    if (columnName === 'sortKey') {
        initSortState(data);
    }
    else {
        var index = common_1.findPropIndex('columnName', columnName, data.sortState.columns);
        if (index !== -1) {
            data.sortState.columns.splice(index, 1);
            notifySortState(data);
        }
    }
    sortData(store);
}
exports.unsort = unsort;
function initSortState(data) {
    data.sortState.columns = [{ columnName: 'sortKey', ascending: true }];
    observable_1.notify(data, 'sortState');
}
exports.initSortState = initSortState;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var summary_1 = __webpack_require__(35);
var common_1 = __webpack_require__(0);
var summary_2 = __webpack_require__(34);
function setSummaryColumnContent(_a, columnName, columnContent) {
    var summary = _a.summary, data = _a.data;
    var rawData = data.rawData;
    var castedColumnContent = summary_1.castToSummaryColumnContent(columnContent);
    var content = summary_1.extractSummaryColumnContent(castedColumnContent, null);
    summary.summaryColumnContents[columnName] = content;
    summary.summaryValues[columnName] = summary_2.createSummaryValue(content, columnName, rawData);
}
exports.setSummaryColumnContent = setSummaryColumnContent;
function updateSummaryValue(_a, columnName, type, options) {
    var summary = _a.summary;
    var content = summary.summaryColumnContents[columnName];
    if (content && content.useAutoSummary) {
        var summaryValue = summary.summaryValues[columnName];
        var prevValue = Number(options.prevValue) || 0;
        var value = Number(options.value) || 0;
        var cntVariation = options.appended ? 1 : -1;
        var sum = summaryValue.sum, min = summaryValue.min, max = summaryValue.max, cnt = summaryValue.cnt;
        if (type === 'UPDATE_COLUMN') {
            sum = value * cnt;
            min = value;
            max = value;
        }
        else if (type === 'UPDATE_CELL') {
            sum = sum - prevValue + value;
        }
        else {
            cnt += cntVariation;
            sum = sum + cntVariation * value;
        }
        var avg = sum / cnt;
        min = Math.min(value, min);
        max = Math.max(value, max);
        summary.summaryValues[columnName] = { sum: sum, avg: avg, min: min, max: max, cnt: cnt };
    }
}
exports.updateSummaryValue = updateSummaryValue;
function updateSummaryValueByCell(store, columnName, options) {
    updateSummaryValue(store, columnName, 'UPDATE_CELL', options);
}
exports.updateSummaryValueByCell = updateSummaryValueByCell;
function updateSummaryValueByColumn(store, columnName, options) {
    updateSummaryValue(store, columnName, 'UPDATE_COLUMN', options);
}
exports.updateSummaryValueByColumn = updateSummaryValueByColumn;
function updateSummaryValueByRow(store, row, appended) {
    var summary = store.summary, column = store.column;
    var summaryColumns = column.allColumns.filter(function (_a) {
        var name = _a.name;
        return !!summary.summaryColumnContents[name];
    });
    summaryColumns.forEach(function (_a) {
        var name = _a.name;
        updateSummaryValue(store, name, 'UPDATE_ROW', { value: row[name], appended: appended });
    });
}
exports.updateSummaryValueByRow = updateSummaryValueByRow;
function updateAllSummaryValues(_a) {
    var summary = _a.summary, data = _a.data, column = _a.column;
    var rawData = data.rawData;
    var summaryColumns = column.allColumns.filter(function (_a) {
        var name = _a.name;
        return !!summary.summaryColumnContents[name];
    });
    summaryColumns.forEach(function (_a) {
        var name = _a.name;
        summary.summaryValues[name] = summary_2.createSummaryValue(summary.summaryColumnContents[name], name, rawData);
    });
}
exports.updateAllSummaryValues = updateAllSummaryValues;
function addColumnSummaryValues(_a) {
    var summary = _a.summary, data = _a.data, column = _a.column;
    if (!common_1.isEmpty(summary)) {
        var defaultContent = summary.defaultContent;
        var castedDefaultContent_1 = summary_1.castToSummaryColumnContent(defaultContent || '');
        var rawData_1 = data.rawData;
        column.allColumns.forEach(function (_a) {
            var name = _a.name;
            var orgSummaryContent = summary.summaryColumnContents[name];
            if (!orgSummaryContent) {
                var content = summary_1.extractSummaryColumnContent(null, castedDefaultContent_1);
                summary.summaryColumnContents[name] = content;
                summary.summaryValues[name] = summary_2.createSummaryValue(content, name, rawData_1);
            }
            else {
                summary.summaryValues[name] = summary_2.createSummaryValue(orgSummaryContent, name, rawData_1);
            }
        });
    }
}
exports.addColumnSummaryValues = addColumnSummaryValues;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var observable_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var filter_1 = __webpack_require__(22);
var data_1 = __webpack_require__(6);
var column_1 = __webpack_require__(23);
var viewport_1 = __webpack_require__(29);
var selection_1 = __webpack_require__(15);
var focus_1 = __webpack_require__(16);
var eventBus_1 = __webpack_require__(10);
var gridEvent_1 = tslib_1.__importDefault(__webpack_require__(11));
function initLayerAndScrollAfterFiltering(store) {
    var rowCoords = store.rowCoords, data = store.data, dimension = store.dimension;
    rowCoords.heights = data.filteredRawData.map(function (row) { return data_1.getRowHeight(row, dimension.rowHeight); });
    viewport_1.setScrollTop(store, 0);
    selection_1.initSelection(store);
    focus_1.initFocus(store);
}
function setActiveFilterOperator(store, operator) {
    var column = store.column, filterLayerState = store.filterLayerState;
    var activeFilterState = filterLayerState.activeFilterState;
    var columnInfo = column.allColumnMap[activeFilterState.columnName];
    var columnFilterOption = columnInfo.filter;
    activeFilterState.operator = operator;
    if (!columnFilterOption.showApplyBtn) {
        columnFilterOption.operator = operator;
        applyActiveFilterState(store);
    }
}
exports.setActiveFilterOperator = setActiveFilterOperator;
function toggleSelectAllCheckbox(store, checked) {
    var column = store.column, filterLayerState = store.filterLayerState, data = store.data;
    var activeFilterState = filterLayerState.activeFilterState;
    var columnName = activeFilterState.columnName;
    var columnInfo = column.allColumnMap[columnName];
    if (checked) {
        var columnData = data_1.getUniqColumnData(data.rawData, columnName);
        activeFilterState.state = columnData.map(function (value) { return ({ code: 'eq', value: value }); });
    }
    else {
        activeFilterState.state = [];
    }
    if (!columnInfo.filter.showApplyBtn) {
        applyActiveFilterState(store);
    }
}
exports.toggleSelectAllCheckbox = toggleSelectAllCheckbox;
function setActiveSelectFilterState(store, value, checked) {
    var column = store.column, filterLayerState = store.filterLayerState;
    var activeFilterState = filterLayerState.activeFilterState;
    var columnName = filterLayerState.activeColumnAddress.name;
    var columnInfo = column.allColumnMap[columnName];
    if (checked) {
        activeFilterState.state.push({ value: value, code: 'eq' });
    }
    else {
        var index = common_1.findPropIndex('value', value, activeFilterState.state);
        activeFilterState.state.splice(index, 1);
    }
    if (!columnInfo.filter.showApplyBtn) {
        applyActiveFilterState(store);
    }
    else {
        observable_1.notify(filterLayerState, 'activeFilterState');
    }
}
exports.setActiveSelectFilterState = setActiveSelectFilterState;
function setActiveColumnAddress(store, address) {
    var data = store.data, column = store.column, filterLayerState = store.filterLayerState;
    var filters = data.filters, filteredRawData = data.filteredRawData;
    filterLayerState.activeColumnAddress = address;
    if (!address) {
        filterLayerState.activeFilterState = null;
        return;
    }
    var columnName = address.name;
    var _a = column.allColumnMap[columnName].filter, type = _a.type, operator = _a.operator;
    var initialState = [];
    if (filters) {
        var prevFilter = common_1.findProp('columnName', columnName, filters);
        if (prevFilter) {
            initialState = prevFilter.state;
        }
    }
    if (type === 'select' && !initialState.length) {
        var columnData = data_1.getUniqColumnData(filteredRawData, columnName);
        initialState = columnData.map(function (value) { return ({ code: 'eq', value: value }); });
    }
    filterLayerState.activeFilterState = {
        columnName: columnName,
        type: type,
        operator: operator,
        state: initialState
    };
}
exports.setActiveColumnAddress = setActiveColumnAddress;
function applyActiveFilterState(store) {
    var filterLayerState = store.filterLayerState, data = store.data;
    var columnName = filterLayerState.activeColumnAddress.name;
    var _a = filterLayerState.activeFilterState, state = _a.state, type = _a.type, operator = _a.operator;
    var validState = state.filter(function (item) { return String(item.value).length; });
    if (type !== 'select' && !validState.length) {
        unfilter(store, columnName);
        return;
    }
    filterLayerState.activeFilterState.state = validState;
    if (type === 'select') {
        var columnData = data_1.getUniqColumnData(data.rawData, columnName);
        if (columnData.length === state.length) {
            unfilter(store, columnName);
            return;
        }
    }
    var fns = validState.map(function (_a) {
        var code = _a.code, value = _a.value;
        return filter_1.getFilterConditionFn(code, value, type);
    });
    filter(store, columnName, filter_1.composeConditionFn(fns, operator), state);
}
exports.applyActiveFilterState = applyActiveFilterState;
function clearActiveFilterState(store) {
    var filterLayerState = store.filterLayerState;
    var activeFilterState = filterLayerState.activeFilterState;
    activeFilterState.state = [];
    unfilter(store, activeFilterState.columnName);
}
exports.clearActiveFilterState = clearActiveFilterState;
function setActiveFilterState(store, state, filterIndex) {
    var column = store.column, filterLayerState = store.filterLayerState;
    var columnName = filterLayerState.activeColumnAddress.name;
    var columnInfo = column.allColumnMap[columnName];
    filterLayerState.activeFilterState.state[filterIndex] = state;
    if (!columnInfo.filter.showApplyBtn) {
        applyActiveFilterState(store);
    }
    else {
        observable_1.notify(filterLayerState, 'activeFilterState');
    }
}
exports.setActiveFilterState = setActiveFilterState;
function filter(store, columnName, conditionFn, state) {
    var data = store.data, column = store.column, id = store.id;
    var columnFilterInfo = column.allColumnMap[columnName].filter;
    if (!columnFilterInfo) {
        return;
    }
    var filters = data.filters || [];
    var type = columnFilterInfo.type;
    var columnFilter = common_1.findProp('columnName', columnName, filters);
    if (columnFilter) {
        columnFilter.conditionFn = conditionFn;
        columnFilter.state = state;
    }
    else {
        data.filters = filters.concat({ columnName: columnName, type: type, conditionFn: conditionFn, state: state });
    }
    observable_1.notify(data, 'filters');
    var eventBus = eventBus_1.getEventBus(id);
    var gridEvent = new gridEvent_1.default({ filterState: data.filters });
    /**
     *Â OccursÂ whenÂ filtering
     *Â @eventÂ Grid#filter
     *Â @propertyÂ {Grid}Â instanceÂ -Â CurrentÂ gridÂ instance
     *Â @propertyÂ {Object}Â filterStateÂ -Â filterState
     */
    eventBus.trigger('filter', gridEvent);
    initLayerAndScrollAfterFiltering(store);
}
exports.filter = filter;
function unfilter(store, columnName) {
    var data = store.data;
    var filters = data.filters;
    if (filters) {
        var filterIndex = common_1.findPropIndex('columnName', columnName, filters);
        if (filterIndex >= 0) {
            filters.splice(filterIndex, 1);
            if (!filters.length) {
                data.filters = null;
            }
        }
        observable_1.notify(data, 'filters');
        initLayerAndScrollAfterFiltering(store);
    }
}
exports.unfilter = unfilter;
function setFilter(store, columnName, filterOpt) {
    var column = store.column;
    var filterOptions = column_1.createColumnFilterOption(filterOpt);
    var index = common_1.findPropIndex('name', columnName, column.allColumns);
    if (index !== -1) {
        if (column.allColumns[index].filter) {
            unfilter(store, columnName);
        }
        column.allColumns[index].filter = filterOptions;
        observable_1.notify(column, 'allColumns');
    }
}
exports.setFilter = setFilter;
function initFilter(store) {
    var filterLayerState = store.filterLayerState, data = store.data;
    filterLayerState.activeFilterState = null;
    filterLayerState.activeColumnAddress = null;
    data.filters = null;
}
exports.initFilter = initFilter;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var viewport_1 = __webpack_require__(74);
function setScrollPosition(viewport, changedScrollTop, changedScrollLeft) {
    if (changedScrollLeft !== null) {
        viewport.scrollLeft = changedScrollLeft;
    }
    if (changedScrollTop !== null) {
        viewport.scrollTop = changedScrollTop;
    }
}
function setScrollToFocus(store) {
    var _a = store.focus, cellPosRect = _a.cellPosRect, side = _a.side, viewport = store.viewport;
    if (cellPosRect === null || side === null) {
        return;
    }
    var _b = viewport_1.getChangedScrollPosition(store, side), changedScrollLeft = _b[0], changedScrollTop = _b[1];
    setScrollPosition(viewport, changedScrollTop, changedScrollLeft);
}
exports.setScrollToFocus = setScrollToFocus;
function setScrollToSelection(store) {
    var _a = store.columnCoords, widths = _a.widths, columnOffsets = _a.offsets, _b = store.rowCoords, heights = _b.heights, rowOffsets = _b.offsets, inputRange = store.selection.inputRange, viewport = store.viewport;
    if (!inputRange) {
        return;
    }
    var rowIndex = inputRange.row[1];
    var columnIndex = inputRange.column[1];
    var cellSide = columnIndex > widths.L.length - 1 ? 'R' : 'L';
    var rightSideColumnIndex = columnIndex < widths.L.length ? widths.L.length : columnIndex - widths.L.length;
    var left = columnOffsets[cellSide][rightSideColumnIndex];
    var right = left + widths[cellSide][rightSideColumnIndex];
    var top = rowOffsets[rowIndex];
    var bottom = top + heights[rowIndex];
    var cellPosRect = { left: left, right: right, top: top, bottom: bottom };
    var _c = viewport_1.getChangedScrollPosition(store, cellSide, cellPosRect), changedScrollLeft = _c[0], changedScrollTop = _c[1];
    setScrollPosition(viewport, changedScrollTop, changedScrollLeft);
}
exports.setScrollToSelection = setScrollToSelection;
function setScrollLeft(_a, scrollLeft) {
    var viewport = _a.viewport;
    viewport.scrollLeft = scrollLeft;
}
exports.setScrollLeft = setScrollLeft;
function setScrollTop(_a, scrollTop) {
    var viewport = _a.viewport;
    viewport.scrollTop = scrollTop;
}
exports.setScrollTop = setScrollTop;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var dom_1 = __webpack_require__(2);
var ColGroupComp = /** @class */ (function (_super) {
    tslib_1.__extends(ColGroupComp, _super);
    function ColGroupComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColGroupComp.prototype.render = function (_a) {
        var _b;
        var columns = _a.columns, widths = _a.widths, borderWidth = _a.borderWidth;
        var attrs = (_b = {}, _b[dom_1.dataAttr.COLUMN_NAME] = name, _b);
        return (preact_1.h("colgroup", null, columns.map(function (_a, idx) {
            var name = _a.name;
            return (preact_1.h("col", tslib_1.__assign({ key: name }, attrs, { style: { width: widths[idx] + borderWidth } })));
        })));
    };
    return ColGroupComp;
}(preact_1.Component));
exports.ColGroup = hoc_1.connect(function (_a, _b) {
    var _c;
    var columnCoords = _a.columnCoords, viewport = _a.viewport, dimension = _a.dimension, column = _a.column;
    var side = _b.side, useViewport = _b.useViewport;
    return ({
        widths: useViewport && side === 'R'
            ? (_c = columnCoords.widths[side]).slice.apply(_c, viewport.colRange) : columnCoords.widths[side],
        columns: useViewport && side === 'R'
            ? viewport.columns
            : column.visibleColumnsBySideWithRowHeader[side],
        borderWidth: dimension.cellBorderWidth
    });
})(ColGroupComp);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var messages = {
    en: {
        display: {
            noData: 'No data.',
            loadingData: 'Loading data.',
            resizeHandleGuide: 'You can change the width of the column by mouse drag, and initialize the width by double-clicking.'
        },
        net: {
            confirmCreate: 'Are you sure you want to create {{count}} data?',
            confirmUpdate: 'Are you sure you want to update {{count}} data?',
            confirmDelete: 'Are you sure you want to delete {{count}} data?',
            confirmModify: 'Are you sure you want to modify {{count}} data?',
            noDataToCreate: 'No data to create.',
            noDataToUpdate: 'No data to update.',
            noDataToDelete: 'No data to delete.',
            noDataToModify: 'No data to modify.',
            failResponse: 'An error occurred while requesting data.\nPlease try again.'
        }
    },
    ko: {
        display: {
            noData: 'ë°ì´í„°ê°€ ì¡´ìž¬í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤.',
            loadingData: 'ë°ì´í„°ë¥¼ ë¶ˆëŸ¬ì˜¤ëŠ” ì¤‘ìž…ë‹ˆë‹¤.',
            resizeHandleGuide: 'ë§ˆìš°ìŠ¤ ë“œëž˜ê·¸í•˜ì—¬ ì»¬ëŸ¼ ë„ˆë¹„ë¥¼ ì¡°ì •í•  ìˆ˜ ìžˆê³ , ë”ë¸” í´ë¦­ìœ¼ë¡œ ì»¬ëŸ¼ ë„ˆë¹„ë¥¼ ì´ˆê¸°í™”í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.'
        },
        net: {
            confirmCreate: '{{count}}ê±´ì˜ ë°ì´í„°ë¥¼ ìƒì„±í•˜ê² ìŠµë‹ˆê¹Œ?',
            confirmUpdate: '{{count}}ê±´ì˜ ë°ì´í„°ë¥¼ ìˆ˜ì •í•˜ê² ìŠµë‹ˆê¹Œ?',
            confirmDelete: '{{count}}ê±´ì˜ ë°ì´í„°ë¥¼ ì‚­ì œí•˜ê² ìŠµë‹ˆê¹Œ?',
            confirmModify: '{{count}}ê±´ì˜ ë°ì´í„°ë¥¼ ì²˜ë¦¬í•˜ê² ìŠµë‹ˆê¹Œ?',
            noDataToCreate: 'ìƒì„±í•  ë°ì´í„°ê°€ ì—†ìŠµë‹ˆë‹¤.',
            noDataToUpdate: 'ìˆ˜ì •í•  ë°ì´í„°ê°€ ì—†ìŠµë‹ˆë‹¤.',
            noDataToDelete: 'ì‚­ì œí•  ë°ì´í„°ê°€ ì—†ìŠµë‹ˆë‹¤.',
            noDataToModify: 'ì²˜ë¦¬í•  ë°ì´í„°ê°€ ì—†ìŠµë‹ˆë‹¤.',
            failResponse: 'ë°ì´í„° ìš”ì²­ ì¤‘ì— ì—ëŸ¬ê°€ ë°œìƒí•˜ì˜€ìŠµë‹ˆë‹¤.\në‹¤ì‹œ ì‹œë„í•˜ì—¬ ì£¼ì‹œê¸° ë°”ëžë‹ˆë‹¤.'
        }
    }
};
var messageMap = {};
/**
 * Flatten message map
 * @param {object} data - Messages
 * @returns {object} Flatten message object (key format is 'key.subKey')
 * @ignore
 */
function flattenMessageMap(data) {
    if (data === void 0) { data = {}; }
    var obj = {};
    var newKey;
    Object.keys(data).forEach(function (key) {
        var keyWithType = key;
        var groupMessages = data[keyWithType];
        Object.keys(groupMessages).forEach(function (subKey) {
            newKey = key + "." + subKey;
            obj[newKey] = groupMessages[subKey];
        });
    });
    return obj;
}
/**
 * Replace text
 * @param {string} text - Text including handlebar expression
 * @param {Object} values - Replaced values
 * @returns {string} Replaced text
 */
function replaceText(text, values) {
    return text
        ? text.replace(/\{\{(\w*)\}\}/g, function (_, prop) { return (values.hasOwnProperty(prop) ? values[prop] : ''); })
        : '';
}
exports.default = {
    /**
     * Set messages
     * @param {string} localeCode - Code to set locale messages and
     *     this is the language or language-region combination. (ex: en-US)
     * @param {object} [data] - Messages using in Grid
     */
    setLanguage: function (localeCode, data) {
        var localeMessages = messages[localeCode];
        if (!localeMessages && !data) {
            throw new Error('You should set messages to map the locale code.');
        }
        var newData = flattenMessageMap(data);
        if (localeMessages) {
            var originData = flattenMessageMap(localeMessages);
            messageMap = tslib_1.__assign({}, originData, newData);
        }
        else {
            messageMap = newData;
        }
    },
    /**
     * Get message
     * @param {string} key - Key to find message (ex: 'net.confirmCreate')
     * @param {object} [replacements] - Values to replace string
     * @returns {string} Message
     */
    get: function (key, replacements) {
        if (replacements === void 0) { replacements = {}; }
        var message = messageMap[key];
        return replaceText(message, replacements);
    }
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
function getListItems(props) {
    var _a = props.columnInfo.editor.options, listItems = _a.listItems, relationListItemMap = _a.relationListItemMap;
    if (!common_1.isEmpty(relationListItemMap) && Array.isArray(relationListItemMap[props.rowKey])) {
        return relationListItemMap[props.rowKey];
    }
    return listItems;
}
exports.getListItems = getListItems;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__33__;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(5);
var summary_1 = __webpack_require__(35);
var common_1 = __webpack_require__(0);
function createSummaryValue(content, columnName, rawData) {
    if (content && content.useAutoSummary) {
        var columnValues = rawData.map(function (row) { return row[columnName]; });
        return summary_1.calculate(columnValues);
    }
    return { sum: 0, min: 0, max: 0, avg: 0, cnt: 0 };
}
exports.createSummaryValue = createSummaryValue;
function create(_a) {
    var column = _a.column, data = _a.data, summary = _a.summary;
    var summaryColumnContents = {};
    var summaryValues = {};
    var orgColumnContent = summary.columnContent, defaultContent = summary.defaultContent;
    if (Object.keys(summary).length) {
        var castedDefaultContent_1 = summary_1.castToSummaryColumnContent(defaultContent || '');
        var columnContent_1 = orgColumnContent || {};
        var rawData_1 = data.rawData;
        var summaryColumns = Object.keys(columnContent_1).filter(function (columnName) { return !common_1.someProp('name', columnName, column.allColumns); });
        var targetColumns = column.allColumns.map(function (col) { return col.name; }).concat(summaryColumns);
        targetColumns.forEach(function (columnName) {
            var castedColumnContent = summary_1.castToSummaryColumnContent(columnContent_1[columnName]);
            var content = summary_1.extractSummaryColumnContent(castedColumnContent, castedDefaultContent_1);
            summaryColumnContents[columnName] = content;
            summaryValues[columnName] = createSummaryValue(content, columnName, rawData_1);
        });
        summaryColumnContents = observable_1.observable(summaryColumnContents);
        summaryValues = observable_1.observable(summaryValues);
    }
    return { summaryColumnContents: summaryColumnContents, summaryValues: summaryValues, defaultContent: defaultContent };
}
exports.create = create;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function calculate(values) {
    var cnt = values.length;
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < cnt; i += 1) {
        var value = Number(values[i]);
        if (isNaN(value)) {
            value = 0;
        }
        sum += value;
        if (min > value) {
            min = value;
        }
        if (max < value) {
            max = value;
        }
    }
    if (!cnt) {
        max = min = avg = 0;
    }
    else {
        avg = sum / cnt;
    }
    return { sum: sum, min: min, max: max, avg: avg, cnt: cnt };
}
exports.calculate = calculate;
function castToSummaryColumnContent(content) {
    if (!content) {
        return null;
    }
    return typeof content === 'string'
        ? { template: content, useAutoSummary: false }
        : {
            template: content.template,
            useAutoSummary: typeof content.useAutoSummary === 'undefined' ? true : content.useAutoSummary
        };
}
exports.castToSummaryColumnContent = castToSummaryColumnContent;
function extractSummaryColumnContent(content, defaultContent) {
    var summaryColumnContent = null;
    if (content) {
        summaryColumnContent = content;
    }
    else if (!content && defaultContent) {
        summaryColumnContent = defaultContent;
    }
    return summaryColumnContent;
}
exports.extractSummaryColumnContent = extractSummaryColumnContent;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(5);
function setHoveredRowKey(_a, rowKey) {
    var renderState = _a.renderState;
    renderState.hoveredRowKey = rowKey;
}
exports.setHoveredRowKey = setHoveredRowKey;
function setCellHeight(_a, columnName, rowIndex, height, defaultRowHeight) {
    var renderState = _a.renderState;
    var cellHeightMap = renderState.cellHeightMap;
    if (!cellHeightMap[rowIndex]) {
        cellHeightMap[rowIndex] = {};
    }
    cellHeightMap[rowIndex][columnName] = Math.max(height, defaultRowHeight);
}
exports.setCellHeight = setCellHeight;
function removeCellHeight(_a, rowIndex) {
    var renderState = _a.renderState;
    var cellHeightMap = renderState.cellHeightMap;
    delete cellHeightMap[rowIndex];
}
exports.removeCellHeight = removeCellHeight;
function refreshRowHeight(store, rowIndex, rowHeight) {
    var data = store.data, rowCoords = store.rowCoords, renderState = store.renderState;
    var cellHeightMap = renderState.cellHeightMap;
    var cellHeights = cellHeightMap[rowIndex];
    var highestHeight = Object.keys(cellHeights).reduce(function (acc, columnName) { return Math.max(acc, cellHeights[columnName]); }, -1);
    if (rowHeight !== highestHeight) {
        data.rawData[rowIndex]._attributes.height = highestHeight;
        rowCoords.heights[rowIndex] = highestHeight;
        observable_1.notify(rowCoords, 'heights');
    }
}
exports.refreshRowHeight = refreshRowHeight;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
function getTotalColumnOffsets(widths, cellBorderWidth) {
    var totalWidths = widths.L.concat(widths.R);
    var offsets = [0];
    for (var i = 1, len = totalWidths.length; i < len; i += 1) {
        offsets.push(offsets[i - 1] + totalWidths[i - 1] + cellBorderWidth);
    }
    return offsets;
}
function getScrolledPosition(_a, dimension, leftSideWidth) {
    var pageX = _a.pageX, pageY = _a.pageY, scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
    var _b = getPositionFromBodyArea(pageX, pageY, dimension), bodyPositionX = _b.x, bodyPositionY = _b.y;
    var scrollX = bodyPositionX > leftSideWidth ? scrollLeft : 0;
    var scrolledPositionX = bodyPositionX + scrollX;
    var scrolledPositionY = bodyPositionY + scrollTop;
    return {
        x: scrolledPositionX,
        y: scrolledPositionY
    };
}
function judgeOverflow(_a, _b) {
    var containerX = _a.x, containerY = _a.y;
    var bodyHeight = _b.bodyHeight, bodyWidth = _b.bodyWidth;
    var overflowY = 0;
    var overflowX = 0;
    if (containerY < 0) {
        overflowY = -1;
    }
    else if (containerY > bodyHeight) {
        overflowY = 1;
    }
    if (containerX < 0) {
        overflowX = -1;
    }
    else if (containerX > bodyWidth) {
        overflowX = 1;
    }
    return {
        x: overflowX,
        y: overflowY
    };
}
function getPositionFromBodyArea(pageX, pageY, dimension) {
    var offsetLeft = dimension.offsetLeft, offsetTop = dimension.offsetTop, tableBorderWidth = dimension.tableBorderWidth, cellBorderWidth = dimension.cellBorderWidth, headerHeight = dimension.headerHeight, summaryHeight = dimension.summaryHeight, summaryPosition = dimension.summaryPosition;
    var adjustedSummaryHeight = summaryPosition === 'top' ? summaryHeight : 0;
    return {
        x: pageX - offsetLeft,
        y: pageY -
            (offsetTop + headerHeight + adjustedSummaryHeight + cellBorderWidth + tableBorderWidth)
    };
}
function getOverflowFromMousePosition(pageX, pageY, bodyWidth, dimension) {
    var bodyHeight = dimension.bodyHeight;
    var _a = getPositionFromBodyArea(pageX, pageY, dimension), x = _a.x, y = _a.y;
    return judgeOverflow({ x: x, y: y }, { bodyWidth: bodyWidth, bodyHeight: bodyHeight });
}
exports.getOverflowFromMousePosition = getOverflowFromMousePosition;
function getColumnNameRange(store, dragStartData, dragData, elementInfo) {
    var allColumns = store.column.allColumns;
    var scrollTop = elementInfo.scrollTop, scrollLeft = elementInfo.scrollLeft;
    var startPageX = dragStartData.pageX, startPageY = dragStartData.pageY;
    var endPageX = dragData.pageX, endPageY = dragData.pageY;
    var startViewInfo = { pageX: startPageX, pageY: startPageY, scrollTop: scrollTop, scrollLeft: scrollLeft };
    var endViewInfo = { pageX: endPageX, pageY: endPageY, scrollTop: scrollTop, scrollLeft: scrollLeft };
    var startColumnIndex = findColumnIndexByPosition(store, startViewInfo);
    var endColumnIndex = findColumnIndexByPosition(store, endViewInfo);
    var startColumnName = allColumns[startColumnIndex].name;
    var endColumnName = allColumns[endColumnIndex].name;
    return [startColumnName, endColumnName];
}
exports.getColumnNameRange = getColumnNameRange;
function findColumnIndexByPosition(store, viewInfo) {
    var dimension = store.dimension, columnCoords = store.columnCoords;
    var widths = columnCoords.widths, areaWidth = columnCoords.areaWidth;
    var totalColumnOffsets = getTotalColumnOffsets(widths, dimension.cellBorderWidth);
    var scrolledPosition = getScrolledPosition(viewInfo, dimension, areaWidth.L);
    return common_1.findOffsetIndex(totalColumnOffsets, scrolledPosition.x);
}
exports.findColumnIndexByPosition = findColumnIndexByPosition;
function findRowIndexByPosition(store, viewInfo) {
    var dimension = store.dimension, columnCoords = store.columnCoords, rowCoords = store.rowCoords;
    var areaWidth = columnCoords.areaWidth;
    var scrolledPosition = getScrolledPosition(viewInfo, dimension, areaWidth.L);
    return common_1.findOffsetIndex(rowCoords.offsets, scrolledPosition.y);
}
exports.findRowIndexByPosition = findRowIndexByPosition;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function setWidth(_a, width, autoWidth) {
    var dimension = _a.dimension;
    dimension.autoWidth = autoWidth;
    dimension.width = width;
}
exports.setWidth = setWidth;
function setHeight(_a, height) {
    var dimension = _a.dimension;
    var headerHeight = dimension.headerHeight, summaryHeight = dimension.summaryHeight, tableBorderWidth = dimension.tableBorderWidth;
    dimension.bodyHeight = height - headerHeight - summaryHeight - tableBorderWidth;
}
exports.setHeight = setHeight;
function setBodyHeight(_a, bodyHeight) {
    var dimension = _a.dimension;
    dimension.autoHeight = false;
    dimension.bodyHeight = Math.max(bodyHeight, dimension.minBodyHeight);
}
exports.setBodyHeight = setBodyHeight;
function setOffsetTop(store, offsetTop) {
    store.dimension.offsetTop = offsetTop;
}
exports.setOffsetTop = setOffsetTop;
function setOffsetLeft(store, offsetLeft) {
    store.dimension.offsetLeft = offsetLeft;
}
exports.setOffsetLeft = setOffsetLeft;
function setHeaderHeight(store, height) {
    store.dimension.headerHeight = height;
}
exports.setHeaderHeight = setHeaderHeight;
function refreshLayout(store, containerEl, parentEl) {
    var dimension = store.dimension;
    var autoWidth = dimension.autoWidth, fitToParentHeight = dimension.fitToParentHeight;
    var clientHeight = containerEl.clientHeight, clientWidth = containerEl.clientWidth, scrollTop = containerEl.scrollTop, scrollLeft = containerEl.scrollLeft;
    var _a = containerEl.getBoundingClientRect(), top = _a.top, left = _a.left;
    setOffsetTop(store, top + scrollTop);
    setOffsetLeft(store, left + scrollLeft);
    setWidth(store, clientWidth, autoWidth);
    if (fitToParentHeight && parentEl && parentEl.clientHeight !== clientHeight) {
        setHeight(store, parentEl.clientHeight);
    }
}
exports.refreshLayout = refreshLayout;
function setAutoBodyHeight(_a) {
    var dimension = _a.dimension, rowCoords = _a.rowCoords;
    var totalRowHeight = rowCoords.totalRowHeight;
    var autoHeight = dimension.autoHeight, scrollXHeight = dimension.scrollXHeight, minBodyHeight = dimension.minBodyHeight;
    if (autoHeight) {
        dimension.bodyHeight = Math.max(totalRowHeight + scrollXHeight, minBodyHeight);
    }
}
exports.setAutoBodyHeight = setAutoBodyHeight;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var colGroup_1 = __webpack_require__(30);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var columnResizer_1 = __webpack_require__(78);
var instance_1 = __webpack_require__(7);
var column_1 = __webpack_require__(8);
var column_2 = __webpack_require__(21);
var complexHeader_1 = __webpack_require__(79);
var headerCheckbox_1 = __webpack_require__(40);
var sortingButton_1 = __webpack_require__(41);
var sortingOrder_1 = __webpack_require__(42);
var filterButton_1 = __webpack_require__(80);
var HeaderAreaComp = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderAreaComp, _super);
    function HeaderAreaComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startSelectedName = null;
        _this.handleDblClick = function (ev) {
            ev.stopPropagation();
        };
        _this.handleMouseMove = function (ev) {
            var _a = dom_1.getCoordinateWithOffset(ev.pageX, ev.pageY), pageX = _a[0], pageY = _a[1];
            _this.props.dispatch('dragMoveHeader', { pageX: pageX, pageY: pageY }, _this.startSelectedName);
        };
        _this.handleMouseDown = function (ev) {
            var _a = _this.props, dispatch = _a.dispatch, complexHeaderColumns = _a.complexHeaderColumns;
            var name = ev.target.getAttribute('data-column-name');
            var parentHeader = column_2.isParentColumnHeader(complexHeaderColumns, name);
            var target = ev.target;
            if (dom_1.findParent(target, 'cell-row-header') ||
                dom_1.hasClass(target, 'btn-sorting') ||
                dom_1.hasClass(target, 'btn-filter')) {
                return;
            }
            _this.startSelectedName = name;
            dispatch('mouseDownHeader', name, parentHeader);
            document.addEventListener('mousemove', _this.handleMouseMove);
            document.addEventListener('mouseup', _this.clearDocumentEvents);
            document.addEventListener('selectstart', _this.handleSelectStart);
        };
        _this.clearDocumentEvents = function () {
            _this.props.dispatch('dragEnd');
            dom_1.setCursorStyle('');
            document.removeEventListener('mousemove', _this.handleMouseMove);
            document.removeEventListener('mouseup', _this.clearDocumentEvents);
            document.removeEventListener('selectstart', _this.handleSelectStart);
        };
        _this.handleSelectStart = function (ev) {
            ev.preventDefault();
        };
        return _this;
    }
    HeaderAreaComp.prototype.isSelected = function (index) {
        var columnSelectionRange = this.props.columnSelectionRange;
        if (!columnSelectionRange) {
            return false;
        }
        var start = columnSelectionRange[0], end = columnSelectionRange[1];
        return index >= start && index <= end;
    };
    HeaderAreaComp.prototype.componentDidUpdate = function () {
        this.el.scrollLeft = this.props.scrollLeft;
    };
    HeaderAreaComp.prototype.render = function () {
        var _this = this;
        var _a = this.props, columns = _a.columns, headerHeight = _a.headerHeight, cellBorderWidth = _a.cellBorderWidth, side = _a.side, complexHeaderColumns = _a.complexHeaderColumns;
        var headerHeightStyle = { height: headerHeight + cellBorderWidth };
        return (preact_1.h("div", { class: dom_1.cls('header-area'), style: headerHeightStyle, ref: function (el) {
                _this.el = el;
            } },
            preact_1.h("table", { class: dom_1.cls('table'), onMouseDown: this.handleMouseDown },
                preact_1.h(colGroup_1.ColGroup, { side: side, useViewport: false }),
                complexHeaderColumns.length ? (preact_1.h(complexHeader_1.ComplexHeader, { side: side })) : (preact_1.h("tbody", null,
                    preact_1.h("tr", { style: headerHeightStyle, onDblClick: this.handleDblClick }, columns.map(function (_a, index) {
                        var name = _a.name, header = _a.header, sortable = _a.sortable, textAlign = _a.headerAlign, verticalAlign = _a.headerVAlign, sortingType = _a.sortingType, filter = _a.filter;
                        return (preact_1.h("th", { key: name, "data-column-name": name, style: { textAlign: textAlign, verticalAlign: verticalAlign }, class: dom_1.cls('cell', 'cell-header', [!column_1.isRowHeader(name) && _this.isSelected(index), 'cell-selected'], [column_1.isRowHeader(name), 'cell-row-header']) },
                            column_1.isCheckboxColumn(name) ? preact_1.h(headerCheckbox_1.HeaderCheckbox, null) : header,
                            !!sortable && preact_1.h(sortingButton_1.SortingButton, { columnName: name, sortingType: sortingType }),
                            !!sortable && preact_1.h(sortingOrder_1.SortingOrder, { columnName: name }),
                            !!filter && preact_1.h(filterButton_1.FilterButton, { columnName: name })));
                    }))))),
            preact_1.h(columnResizer_1.ColumnResizer, { side: side })));
    };
    return HeaderAreaComp;
}(preact_1.Component));
exports.HeaderArea = hoc_1.connect(function (store, _a) {
    var side = _a.side;
    var _b = store.column, visibleColumnsBySideWithRowHeader = _b.visibleColumnsBySideWithRowHeader, complexHeaderColumns = _b.complexHeaderColumns, _c = store.dimension, headerHeight = _c.headerHeight, cellBorderWidth = _c.cellBorderWidth, rangeBySide = store.selection.rangeBySide, viewport = store.viewport, id = store.id;
    return {
        headerHeight: headerHeight,
        cellBorderWidth: cellBorderWidth,
        columns: visibleColumnsBySideWithRowHeader[side],
        scrollLeft: side === 'L' ? 0 : viewport.scrollLeft,
        dataProvider: instance_1.getDataProvider(id),
        columnSelectionRange: rangeBySide && rangeBySide[side].column ? rangeBySide[side].column : null,
        complexHeaderColumns: complexHeaderColumns
    };
})(HeaderAreaComp);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var HeaderCheckboxComp = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderCheckboxComp, _super);
    function HeaderCheckboxComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (ev) {
            var target = ev.target;
            var dispatch = _this.props.dispatch;
            if (target.checked) {
                dispatch('checkAll');
            }
            else {
                dispatch('uncheckAll');
            }
        };
        return _this;
    }
    HeaderCheckboxComp.prototype.componentDidMount = function () {
        this.setCheckboxState();
    };
    HeaderCheckboxComp.prototype.componentDidUpdate = function () {
        this.setCheckboxState();
    };
    HeaderCheckboxComp.prototype.setCheckboxState = function () {
        var _a = this.props, checkedAllRows = _a.checkedAllRows, disabled = _a.disabled;
        var input = this.el.querySelector('input[name=_checked]');
        if (input) {
            input.checked = checkedAllRows;
            input.disabled = disabled;
        }
    };
    HeaderCheckboxComp.prototype.render = function () {
        var _this = this;
        return (preact_1.h("span", { ref: function (el) {
                _this.el = el;
            }, dangerouslySetInnerHTML: { __html: this.props.header }, onChange: this.handleChange }));
    };
    return HeaderCheckboxComp;
}(preact_1.Component));
exports.HeaderCheckbox = hoc_1.connect(function (store) {
    var _a = store.data, checkedAllRows = _a.checkedAllRows, disabled = _a.disabled, allColumnMap = store.column.allColumnMap;
    return {
        header: allColumnMap._checked.header,
        checkedAllRows: checkedAllRows,
        disabled: disabled
    };
})(HeaderCheckboxComp);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var instance_1 = __webpack_require__(7);
var common_1 = __webpack_require__(0);
var SortingButtonComp = /** @class */ (function (_super) {
    tslib_1.__extends(SortingButtonComp, _super);
    function SortingButtonComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (ev) {
            var target = ev.target;
            var withCtrl = ev.ctrlKey || ev.metaKey;
            if (!dom_1.hasClass(target, 'btn-sorting')) {
                return;
            }
            var _a = _this.props, dispatch = _a.dispatch, sortState = _a.sortState, dataProvider = _a.dataProvider;
            var th = dom_1.findParent(target, 'cell');
            var targetColumnName = th.getAttribute('data-column-name');
            var targetAscending = _this.props.defaultAscending;
            if (sortState) {
                var columns = sortState.columns;
                var index = common_1.findPropIndex('columnName', targetColumnName, columns);
                targetAscending = index !== -1 ? !columns[index].ascending : targetAscending;
            }
            if (sortState.useClient) {
                dispatch('sort', targetColumnName, targetAscending, withCtrl);
            }
            else {
                dispatch('changeSortState', targetColumnName, targetAscending, withCtrl);
                var data = {
                    sortColumn: targetColumnName,
                    sortAscending: targetAscending
                };
                dataProvider.readData(1, data, true);
            }
        };
        return _this;
    }
    SortingButtonComp.prototype.render = function () {
        var _a = this.props, active = _a.active, ascending = _a.ascending;
        return (preact_1.h("a", { class: dom_1.cls('btn-sorting', [active, ascending ? 'btn-sorting-up' : 'btn-sorting-down']), onClick: this.handleClick }));
    };
    return SortingButtonComp;
}(preact_1.Component));
exports.SortingButton = hoc_1.connect(function (store, props) {
    var sortState = store.data.sortState, id = store.id;
    var columnName = props.columnName, _a = props.sortingType, sortingType = _a === void 0 ? 'asc' : _a;
    var columns = sortState.columns;
    var index = common_1.findPropIndex('columnName', columnName, columns);
    var ascending = index !== -1 ? columns[index].ascending : true;
    return {
        sortState: sortState,
        ascending: ascending,
        dataProvider: instance_1.getDataProvider(id),
        defaultAscending: sortingType === 'asc',
        active: index !== -1
    };
})(SortingButtonComp);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var common_1 = __webpack_require__(0);
var SortingOrderComp = /** @class */ (function (_super) {
    tslib_1.__extends(SortingOrderComp, _super);
    function SortingOrderComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortingOrderComp.prototype.render = function () {
        var _a = this.props, order = _a.order, showOrder = _a.showOrder;
        return showOrder && preact_1.h("span", { style: { color: '#bbb', fontWeight: 100 } }, order);
    };
    return SortingOrderComp;
}(preact_1.Component));
exports.SortingOrder = hoc_1.connect(function (store, props) {
    var columns = store.data.sortState.columns;
    var columnName = props.columnName;
    var order = common_1.findPropIndex('columnName', columnName, columns) + 1;
    var showOrder = !!order && columns.length > 1;
    return {
        order: order,
        showOrder: showOrder
    };
})(SortingOrderComp);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var bodyRows_1 = __webpack_require__(81);
var colGroup_1 = __webpack_require__(30);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var focusLayer_1 = __webpack_require__(87);
var selectionLayer_1 = __webpack_require__(88);
var common_1 = __webpack_require__(0);
// only updates when these props are changed
// for preventing unnecessary rendering when scroll changes
var PROPS_FOR_UPDATE = [
    'bodyHeight',
    'totalRowHeight',
    'offsetLeft',
    'offsetTop',
    'totalColumnWidth'
];
// Minimum distance (pixel) to detect if user wants to drag when moving mouse with button pressed.
var MIN_DISTANCE_FOR_DRAG = 10;
var BodyAreaComp = /** @class */ (function (_super) {
    tslib_1.__extends(BodyAreaComp, _super);
    function BodyAreaComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dragStartData = {
            pageX: null,
            pageY: null
        };
        _this.handleScroll = function (ev) {
            var _a = ev.srcElement, scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
            var dispatch = _this.props.dispatch;
            dispatch('setScrollTop', scrollTop);
            if (_this.props.side === 'R') {
                dispatch('setScrollLeft', scrollLeft);
            }
        };
        _this.handleMouseDown = function (ev) {
            if (!_this.el || ev.target === _this.el) {
                return;
            }
            var el = _this.el;
            var shiftKey = ev.shiftKey;
            var _a = dom_1.getCoordinateWithOffset(ev.pageX, ev.pageY), pageX = _a[0], pageY = _a[1];
            var scrollTop = el.scrollTop, scrollLeft = el.scrollLeft;
            var _b = _this.props, side = _b.side, dispatch = _b.dispatch;
            var _c = el.getBoundingClientRect(), top = _c.top, left = _c.left;
            _this.boundingRect = { top: top, left: left };
            dispatch('mouseDownBody', tslib_1.__assign({ scrollTop: scrollTop, scrollLeft: scrollLeft, side: side }, _this.boundingRect), { pageX: pageX, pageY: pageY, shiftKey: shiftKey });
            _this.dragStartData = { pageX: pageX, pageY: pageY };
            dom_1.setCursorStyle('default');
            document.addEventListener('mousemove', _this.handleMouseMove);
            document.addEventListener('mouseup', _this.clearDocumentEvents);
            document.addEventListener('selectstart', _this.handleSelectStart);
        };
        _this.moveEnoughToTriggerDragEvent = function (current) {
            var dx = Math.abs(_this.dragStartData.pageX - current.pageX);
            var dy = Math.abs(_this.dragStartData.pageY - current.pageY);
            var movedDistance = Math.round(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));
            return movedDistance >= MIN_DISTANCE_FOR_DRAG;
        };
        _this.handleSelectStart = function (ev) {
            ev.preventDefault();
        };
        _this.handleMouseMove = function (ev) {
            var _a = dom_1.getCoordinateWithOffset(ev.pageX, ev.pageY), pageX = _a[0], pageY = _a[1];
            if (_this.moveEnoughToTriggerDragEvent({ pageX: pageX, pageY: pageY })) {
                var _b = _this, el = _b.el, boundingRect = _b.boundingRect, props = _b.props;
                var _c = el, scrollTop = _c.scrollTop, scrollLeft = _c.scrollLeft;
                var side = props.side, dispatch = props.dispatch;
                dispatch('dragMoveBody', _this.dragStartData, { pageX: pageX, pageY: pageY }, tslib_1.__assign({ scrollTop: scrollTop, scrollLeft: scrollLeft, side: side }, boundingRect));
            }
        };
        _this.clearDocumentEvents = function () {
            _this.dragStartData = { pageX: null, pageY: null };
            _this.props.dispatch('dragEnd');
            dom_1.setCursorStyle('');
            document.removeEventListener('mousemove', _this.handleMouseMove);
            document.removeEventListener('mouseup', _this.clearDocumentEvents);
            document.removeEventListener('selectstart', _this.handleSelectStart);
        };
        return _this;
    }
    BodyAreaComp.prototype.shouldComponentUpdate = function (nextProps) {
        var currProps = this.props;
        return common_1.some(function (propName) { return nextProps[propName] !== currProps[propName]; }, PROPS_FOR_UPDATE);
    };
    BodyAreaComp.prototype.componentWillReceiveProps = function (nextProps) {
        var scrollTop = nextProps.scrollTop, scrollLeft = nextProps.scrollLeft;
        this.el.scrollTop = scrollTop;
        this.el.scrollLeft = scrollLeft;
    };
    BodyAreaComp.prototype.render = function (_a) {
        var _this = this;
        var side = _a.side, bodyHeight = _a.bodyHeight, totalRowHeight = _a.totalRowHeight, totalColumnWidth = _a.totalColumnWidth, scrollXHeight = _a.scrollXHeight, offsetTop = _a.offsetTop, offsetLeft = _a.offsetLeft, dummyRowCount = _a.dummyRowCount, scrollX = _a.scrollX, scrollY = _a.scrollY, cellBorderWidth = _a.cellBorderWidth;
        var overflowX = scrollX ? 'scroll' : 'hidden';
        var overflowY = scrollY ? 'scroll' : 'hidden';
        var areaStyle = { overflowX: overflowX, overflowY: overflowY, height: bodyHeight };
        var tableContainerStyle = {
            top: offsetTop,
            left: offsetLeft,
            height: dummyRowCount ? bodyHeight - scrollXHeight : '',
            overflow: dummyRowCount ? 'hidden' : 'visible'
        };
        var containerStyle = {
            width: totalColumnWidth,
            height: totalRowHeight + cellBorderWidth
        };
        return (preact_1.h("div", { class: dom_1.cls('body-area'), style: areaStyle, onScroll: this.handleScroll, onMouseDown: this.handleMouseDown, ref: function (el) {
                _this.el = el;
            } },
            preact_1.h("div", { class: dom_1.cls('body-container'), style: containerStyle },
                preact_1.h("div", { class: dom_1.cls('table-container'), style: tableContainerStyle },
                    preact_1.h("table", { class: dom_1.cls('table') },
                        preact_1.h(colGroup_1.ColGroup, { side: side, useViewport: true }),
                        preact_1.h(bodyRows_1.BodyRows, { side: side }))),
                preact_1.h("div", { class: dom_1.cls('layer-selection'), style: "display: none;" }),
                preact_1.h(focusLayer_1.FocusLayer, { side: side }),
                preact_1.h(selectionLayer_1.SelectionLayer, { side: side }))));
    };
    return BodyAreaComp;
}(preact_1.Component));
exports.BodyArea = hoc_1.connect(function (store, _a) {
    var side = _a.side;
    var columnCoords = store.columnCoords, rowCoords = store.rowCoords, dimension = store.dimension, viewport = store.viewport;
    var totalRowHeight = rowCoords.totalRowHeight;
    var totalColumnWidth = columnCoords.totalColumnWidth;
    var bodyHeight = dimension.bodyHeight, scrollXHeight = dimension.scrollXHeight, scrollX = dimension.scrollX, scrollY = dimension.scrollY, cellBorderWidth = dimension.cellBorderWidth;
    var offsetLeft = viewport.offsetLeft, offsetTop = viewport.offsetTop, scrollTop = viewport.scrollTop, scrollLeft = viewport.scrollLeft, dummyRowCount = viewport.dummyRowCount;
    return {
        bodyHeight: bodyHeight,
        totalRowHeight: totalRowHeight,
        offsetTop: offsetTop,
        scrollTop: scrollTop,
        totalColumnWidth: totalColumnWidth[side],
        offsetLeft: side === 'L' ? 0 : offsetLeft,
        scrollLeft: side === 'L' ? 0 : scrollLeft,
        scrollXHeight: scrollXHeight,
        dummyRowCount: dummyRowCount,
        scrollX: scrollX,
        scrollY: scrollY,
        cellBorderWidth: cellBorderWidth
    };
})(BodyAreaComp);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var colGroup_1 = __webpack_require__(30);
var summaryBodyRow_1 = __webpack_require__(89);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var SummaryAreaComp = /** @class */ (function (_super) {
    tslib_1.__extends(SummaryAreaComp, _super);
    function SummaryAreaComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleScroll = function (ev) {
            var scrollLeft = ev.srcElement.scrollLeft;
            var _a = _this.props, dispatch = _a.dispatch, side = _a.side;
            if (side === 'R') {
                dispatch('setScrollLeft', scrollLeft);
            }
        };
        return _this;
    }
    SummaryAreaComp.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.el) {
            this.el.scrollLeft = nextProps.scrollLeft;
        }
    };
    SummaryAreaComp.prototype.render = function (_a) {
        var _this = this;
        var height = _a.height, columns = _a.columns, side = _a.side;
        var tableStyle = { height: height };
        return (height > 0 && (preact_1.h("div", { class: dom_1.cls('summary-area'), onScroll: this.handleScroll, ref: function (el) {
                _this.el = el;
            } },
            preact_1.h("table", { class: dom_1.cls('table'), style: tableStyle },
                preact_1.h(colGroup_1.ColGroup, { side: side, useViewport: false }),
                preact_1.h(summaryBodyRow_1.SummaryBodyRow, { columns: columns })))));
    };
    return SummaryAreaComp;
}(preact_1.Component));
exports.SummaryArea = hoc_1.connect(function (store, _a) {
    var side = _a.side;
    var column = store.column, dimension = store.dimension, viewport = store.viewport;
    var summaryHeight = dimension.summaryHeight;
    var scrollLeft = viewport.scrollLeft;
    return {
        height: summaryHeight,
        columns: column.visibleColumnsBySideWithRowHeader[side],
        scrollLeft: scrollLeft
    };
})(SummaryAreaComp);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isEdge() {
    var rEdge = /Edge\/(\d+)\./;
    return rEdge.exec(window.navigator.userAgent);
}
exports.isEdge = isEdge;
function isMobile() {
    return /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}
exports.isMobile = isMobile;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var i18n_1 = tslib_1.__importDefault(__webpack_require__(31));
var confirmMessageMap = {
    CREATE: 'net.confirmCreate',
    UPDATE: 'net.confirmUpdate',
    DELETE: 'net.confirmDelete',
    MODIFY: 'net.confirmModify'
};
var alertMessageMap = {
    CREATE: 'net.noDataToCreate',
    UPDATE: 'net.noDataToUpdate',
    DELETE: 'net.noDataToDelete',
    MODIFY: 'net.noDataToModify'
};
function getConfirmMessage(type, count) {
    return i18n_1.default.get(confirmMessageMap[type], { count: String(count) });
}
exports.getConfirmMessage = getConfirmMessage;
function getAlertMessage(type) {
    return i18n_1.default.get(alertMessageMap[type]);
}
exports.getAlertMessage = getAlertMessage;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var common_1 = __webpack_require__(0);
var observable_1 = __webpack_require__(5);
var paramNameMap = {
    CREATE: 'createdRows',
    UPDATE: 'updatedRows',
    DELETE: 'deletedRows'
};
function getDataWithOptions(targetRows, options) {
    if (options === void 0) { options = {}; }
    var _a = options.checkedOnly, checkedOnly = _a === void 0 ? false : _a, _b = options.withRawData, withRawData = _b === void 0 ? false : _b, _c = options.rowKeyOnly, rowKeyOnly = _c === void 0 ? false : _c, _d = options.ignoredColumns, ignoredColumns = _d === void 0 ? [] : _d;
    var rows = targetRows.map(function (row) { return observable_1.getOriginObject(row); });
    if (checkedOnly) {
        rows = rows.filter(function (row) { return row._attributes.checked; });
    }
    if (ignoredColumns.length) {
        rows = rows.map(function (row) { return common_1.omit.apply(void 0, [row].concat(ignoredColumns)); });
    }
    if (!withRawData) {
        rows = rows.map(function (row) { return common_1.omit(row, '_attributes'); });
    }
    if (rowKeyOnly) {
        return rows.map(function (row) { return row.rowKey; });
    }
    return rows;
}
exports.getDataWithOptions = getDataWithOptions;
function createManager() {
    var originData = [];
    var dataMap = {
        CREATE: [],
        UPDATE: [],
        DELETE: []
    };
    var splice = function (type, rowKey, row) {
        var index = common_1.findIndex(function (createdRow) { return createdRow.rowKey === rowKey; }, dataMap[type]);
        if (index !== -1) {
            if (common_1.isUndefined(row)) {
                dataMap[type].splice(index, 1);
            }
            else {
                dataMap[type].splice(index, 1, row);
            }
        }
    };
    var spliceAll = function (rowKey, row) {
        splice('CREATE', rowKey, row);
        splice('UPDATE', rowKey, row);
        splice('DELETE', rowKey, row);
    };
    return {
        // only for restore
        setOriginData: function (data) {
            originData = data.map(function (row) { return (tslib_1.__assign({}, row)); });
        },
        getOriginData: function () {
            return originData;
        },
        getModifiedData: function (type, options) {
            var _a;
            return _a = {}, _a[paramNameMap[type]] = getDataWithOptions(dataMap[type], options), _a;
        },
        getAllModifiedData: function (options) {
            var _this = this;
            return Object.keys(dataMap)
                .map(function (key) { return _this.getModifiedData(key, options); })
                .reduce(function (acc, data) { return (tslib_1.__assign({}, acc, data)); }, {});
        },
        isModified: function () {
            return !!(dataMap.CREATE.length || dataMap.UPDATE.length || dataMap.DELETE.length);
        },
        isModifiedByType: function (type) {
            return !!dataMap[type].length;
        },
        push: function (type, row) {
            var rowKey = row.rowKey;
            if (type === 'UPDATE' || type === 'DELETE') {
                splice('UPDATE', rowKey);
                // if the row was already registered in createdRows,
                // would update it in createdRows and not add it to updatedRows or deletedRows
                if (common_1.someProp('rowKey', rowKey, dataMap.CREATE)) {
                    if (type === 'UPDATE') {
                        splice('CREATE', rowKey, row);
                    }
                    else {
                        splice('CREATE', rowKey);
                    }
                    return;
                }
            }
            if (!common_1.someProp('rowKey', rowKey, dataMap[type])) {
                dataMap[type].push(row);
            }
        },
        clear: function (rowsMap) {
            Object.keys(rowsMap).forEach(function (key) {
                var rows = rowsMap[key];
                rows.forEach(function (row) {
                    spliceAll(common_1.isObject(row) ? row.rowKey : row);
                });
            });
        },
        clearAll: function () {
            dataMap.CREATE = [];
            dataMap.UPDATE = [];
            dataMap.DELETE = [];
        }
    };
}
exports.createManager = createManager;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tslib_1 = __webpack_require__(1);
var grid_1 = tslib_1.__importDefault(__webpack_require__(49));
__webpack_require__(120);
grid_1.default.setLanguage('en');
module.exports = grid_1.default;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var create_1 = __webpack_require__(50);
var root_1 = __webpack_require__(75);
var preact_1 = __webpack_require__(3);
var create_2 = __webpack_require__(105);
var manager_1 = tslib_1.__importDefault(__webpack_require__(110));
var instance_1 = __webpack_require__(7);
var i18n_1 = tslib_1.__importDefault(__webpack_require__(31));
var clipboard_1 = __webpack_require__(24);
var validation_1 = __webpack_require__(114);
var dom_1 = __webpack_require__(2);
var common_1 = __webpack_require__(0);
var observable_1 = __webpack_require__(5);
var eventBus_1 = __webpack_require__(10);
var data_1 = __webpack_require__(6);
var column_1 = __webpack_require__(8);
var serverSideDataProvider_1 = __webpack_require__(115);
var modifiedDataManager_1 = __webpack_require__(47);
var message_1 = __webpack_require__(46);
var paginationManager_1 = __webpack_require__(118);
var tree_1 = __webpack_require__(20);
var rowSpan_1 = __webpack_require__(9);
var googleAnalytics_1 = __webpack_require__(119);
var filter_1 = __webpack_require__(22);
/* eslint-disable */
if (false) {}
/* eslint-enable */
/**
 * Grid public API
 * @param {Object} options
 *      @param {HTMLElement} el - The target element to create grid.
 *      @param {Array|Object} [options.data] - Grid data for making rows. When using the data source, sets to object.
 *      @param {Object} [options.pageOptions={}] The object for the pagination options with the data source.
 *      @param {Object} [options.header] - Options object for header.
 *      @param {number} [options.header.height=40] - The height of the header area.
 *      @param {Array} [options.header.complexColumns] - This options creates new parent headers of the multiple columns
 *          which includes the headers of spcified columns, and sets up the hierarchy.
 *      @param {string|number} [options.width='auto'] - Options for grid width.
 *      @param {string|number} [options.rowHeight] - The height of each rows. The default value is 'auto',
 *          the height of each rows expands to dom's height. If set to number, the height is fixed.
 *      @param {number} [options.minRowHeight=40] - The minimum height of each rows. When this value is larger than
 *          the row's height, it set to the row's height.
 *      @param {string|number} [options.bodyHeight] - The height of body area. The default value is 'auto',
 *          the height of body area expands to total height of rows. If set to 'fitToParent', the height of the grid
 *          will expand to fit the height of parent element. If set to number, the height is fixed.
 *      @param {number} [options.minBodyHeight=minRowHeight] - The minimum height of body area. When this value
 *          is larger than the body's height, it set to the body's height.
 *      @param {Object} [options.columnOptions] - Option object for all columns
 *      @param {number} [options.columnOptions.minWidth=50] - Minimum width of each columns
 *      @param {boolean} [options.columnOptions.resizable=true] - If set to true, resize-handles of each columns
 *          will be shown.
 *      @param {number} [options.columnOptions.frozenCount=0] - The number of frozen columns.
 *          The columns indexed from 0 to this value will always be shown on the left side.
 *          {@link Grid#setFrozenColumnCount} can be used for setting this value dynamically.
 *      @param {number} [options.columnOptions.frozenBorderWidth=1] - The value of frozen border width.
 *          When the frozen columns are created by "frozenCount" option, the frozen border width set.
 *      @param {Object} [options.treeColumnOptions] - Option object for the tree column.
 *      @param {string} [options.treeColumnOptions.name] - The name of column that makes tree column.
 *      @param {boolean} [options.treeColumnOptions.useIcon=true] - If set to true, the folder or file icon is created on
 *          the left side of the tree cell data.
 *      @param {boolean} [options.treeColumnOptions.useCascadingCheckbox] - If set to true, a cascading relationship is
 *          created in the checkbox between parent and child rows.
 *      @param {Object} [options.copyOptions] - Option object for clipboard copying
 *      @param {boolean} [options.copyOptions.useFormattedValue] - Whether to use formatted values or original values
 *          as a string to be copied to the clipboard
 *      @param {boolean} [options.copyOptions.useListItemText] - Copy select or checkbox cell values to 'text'
 *          rather than 'value' of the listItem option.
 *      @param {string|function} [options.copyOptions.customValue] - Copy text with 'formatter' in cell.
 *      @param {boolean} [options.useClientSort=true] - If set to true, sorting will be executed by client itself
 *          without server.
 *      @param {string} [options.editingEvent='dblclick'] - If set to 'click', editable cell in the view-mode will be
 *          changed to edit-mode by a single click.
 *      @param {boolean} [options.scrollX=true] - Specifies whether to show horizontal scrollbar.
 *      @param {boolean} [options.scrollY=true] - Specifies whether to show vertical scrollbar.
 *      @param {boolean} [options.showDummyRows=false] - If set to true, empty area will be filled with dummy rows.
 *      @param {string} [options.keyColumnName] - The name of the column to be used to identify each rows.
 *          If not specified, unique value for each rows will be created internally.
 *      @param {boolean} [options.heightResizable=false] - If set to true, a handle for resizing height will be shown.
 *      @param {Object} [options.pagination=null] - Options for tui.Pagination.
 *          If set to null or false, pagination will not be used.
 *      @param {string} [options.selectionUnit='cell'] - The unit of selection on Grid. ('cell', 'row')
 *      @param {Array} [options.rowHeaders] - Options for making the row header. The row header content is number of
 *          each row or input element. The value of each item is enable to set string type. (ex: ['rowNum', 'checkbox'])
 *          @param {string} [options.rowHeaders.type] - The type of the row header. ('rowNum', 'checkbox')
 *          @param {string} [options.rowHeaders.header] - The header of the row header.
 *          @param {number} [options.rowHeaders.width] - The width of the row header column. The unit is pixel.
 *              If this value isn't set, the column's width sets to default value.
 *          @param {string} [options.rowHeaders.align=left] - Horizontal alignment of the row header content.
 *              Available values are 'left', 'center', 'right'.
 *          @param {string} [options.rowHeaders.valign=middle] - Vertical alignment of the row header content.
 *              Available values are 'top', 'middle', 'bottom'.
 *          @param {function} [options.rowHeaders.renderer] - Sets the custom renderer to customize the header content.
 *      @param {Array} options.columns - The configuration of the grid columns.
 *          @param {string} options.columns.name - The name of the column.
 *          @param {boolean} [options.columns.ellipsis=false] - If set to true, ellipsis will be used
 *              for overflowing content.
 *          @param {string} [options.columns.align=left] - Horizontal alignment of the column content.
 *              Available values are 'left', 'center', 'right'.
 *          @param {string} [options.columns.valign=middle] - Vertical alignment of the column content.
 *              Available values are 'top', 'middle', 'bottom'.
 *          @param {string} [options.columns.className] - The name of the class to be used for all cells of
 *              the column.
 *          @param {string} [options.columns.header] - The header of the column to be shown on the header.
 *          @param {number} [options.columns.width] - The width of the column. The unit is pixel. If this value
 *              isn't set, the column's width is automatically resized.
 *          @param {number} [options.columns.minWidth=50] - The minimum width of the column. The unit is pixel.
 *          @param {boolean} [options.columns.hidden] - If set to true, the column will not be shown.
 *          @param {boolean} [options.columns.resizable] - If set to false, the width of the column
 *              will not be changed.
 *          @param {Object} [options.columns.validation] - The options to be used for validation.
 *              Validation is executed whenever data is changed or the {@link Grid#validate} is called.
 *          @param {boolean} [options.columns.validation.required=false] - If set to true, the data of the column
 *              will be checked to be not empty.
 *          @param {number|string} [options.columns.validation.dataType='string'] - Specifies the type of the cell value.
 *              Available types are 'string' and 'number'.
 *          @param {string} [options.columns.defaultValue] - The default value to be shown when the column
 *              doesn't have a value.
 *          @param {function|string} [options.columns.formatter] - The function that formats the value of the cell.
 *              The return value of the function will be shown as the value of the cell. If set to 'listItemText',
 *              the value will be shown the text.
 *          @param {boolean} [options.columns.escapeHTML=true] - If set to true, the value of the cell
 *              will be encoded as HTML entities.
 *          @param {boolean} [options.columns.ignored=false] - If set to true, the value of the column will be
 *               ignored when setting up the list of modified rows.
 *          @param {boolean} [options.columns.sortable=false] - If set to true, sort button will be shown on
 *              the right side of the column header, which executes the sort action when clicked.
 *          @param {string} [options.columns.sortingType='asc'] - If set to 'desc', will execute descending sort initially
 *              when sort button is clicked.
 *          @param {function} [options.columns.onBeforeChange] - The function that will be
 *              called before changing the value of the cell. If stop() method in event object is called,
 *              the changing will be canceled.
 *          @param {function} [options.columns.onAfterChange] - The function that will be
 *              called after changing the value of the cell.
 *          @param {Object} [options.columns.editor] - The object for configuring editing UI.
 *              @param {string|function} [options.columns.editor.type='text'] - The string value that specifies
 *                  the type of the editing UI. Available values are 'text', 'password', 'select', 'radio', 'checkbox'.
 *                  When using the custom editor, sets to the customized renderer constructor.
 *              @param {Object} [options.columns.editor.options] - Option object using editor
 *                  @param {Array} [options.columns.editor.options.listItems] - Specifies the option items for the
 *                       'select', 'radio', 'checkbox' type. The item of the array must contain properties named
 *                       'text' and 'value'. (e.g. [{text: 'option1', value: 1}, {...}])
 *              @param {Object} [options.columns.copyOptions] - Option object for clipboard copying.
 *                  This option is column specific, and overrides the global copyOptions.
 *              @param {boolean} [options.columns.copyOptions.useFormattedValue] - Whether to use
 *                  formatted values or original values as a string to be copied to the clipboard
 *              @param {boolean} [options.columns.copyOptions.useListItemText] - Whether to use
 *                  concatenated text or original values as a string to be copied to the clipboard
 *              @param {function} [options.columns.copyOptions.customValue] - Whether to use
 *                  customized value from "customValue" callback or original values as a string to be copied to the clipboard
 *          @param {Array} [options.columns.relations] - Specifies relation between this and other column.
 *              @param {Array} [options.columns.relations.targetNames] - Array of the names of target columns.
 *              @param {function} [options.columns.relations.disabled] - If returns true, target columns
 *                  will be disabled.
 *              @param {function} [options.columns.relations.editable] - If returns true, target columns
 *                  will be editable.
 *              @param {function} [options.columns.relations.listItems] - The function whose return
 *                  value specifies the option list for the 'select', 'radio', 'checkbox' type.
 *                  The options list of target columns will be replaced with the return value of this function.
 *          @param {string} [options.columns.whiteSpace='nowrap'] - If set to 'normal', the text line is broken
 *              by fitting to the column's width. If set to 'pre', spaces are preserved and the text is braken by
 *              new line characters. If set to 'pre-wrap', spaces are preserved, the text line is broken by
 *              fitting to the column's width and new line characters. If set to 'pre-line', spaces are merged,
 *              the text line is broken by fitting to the column's width and new line characters.
 *      @param {Object} [options.summary] - The object for configuring summary area.
 *          @param {number} [options.summary.height] - The height of the summary area.
 *          @param {string} [options.summary.position='bottom'] - The position of the summary area. ('bottom', 'top')
 *          @param {(string|Object)} [options.summary.defaultContent]
 *              The configuring of summary cell for every column.
 *              This options can be overriden for each column by columnContent options.
 *              If type is string, the value is used as HTML of summary cell for every columns
 *              without auto-calculation.
 *              @param {boolean} [options.summary.defaultContent.useAutoSummary=true]
 *                  If set to true, the summary value of every column is served as a parameter to the template
 *                  function whenever data is changed.
 *              @param {function} [options.summary.defaultContent.template] - Template function which returns the
 *                  content(HTML) of the column of the summary. This function takes an K-V object as a parameter
 *                  which contains a summary values keyed by 'sum', 'avg', 'min', 'max' and 'cnt'.
 *          @param {Object} [options.summary.columnContent]
 *              The configuring of summary cell for each column.
 *              Sub options below are keyed by each column name.
 *              If type of value of this object is string, the value is used as HTML of summary cell for
 *              the column without auto-calculation.
 *              @param {boolean} [options.summary.columnContent.useAutoSummary=true]
 *                  If set to true, the summary value of each column is served as a parameter to the template
 *                  function whenever data is changed.
 *              @param {function} [options.summary.columnContent.template] - Template function which returns the
 *                  content(HTML) of the column of the summary. This function takes an K-V object as a parameter
 *                  which contains a summary values keyed by 'sum', 'avg', 'min', 'max' and 'cnt'.
 *      @param {boolean} [options.usageStatistics=true] Send the hostname to google analytics.
 *          If you do not want to send the hostname, this option set to false.
 *      @param {function} [options.onGridMounted] - The function that will be called after rendering the grid.
 *      @param {function} [options.onGridBeforeDestroy] - The function that will be called before destroying the grid.
 */
var Grid = /** @class */ (function () {
    function Grid(options) {
        var el = options.el, _a = options.usageStatistics, usageStatistics = _a === void 0 ? true : _a, onGridMounted = options.onGridMounted, onGridBeforeDestroy = options.onGridBeforeDestroy;
        var id = instance_1.register(this);
        var store = create_1.createStore(id, options);
        var dispatch = create_2.createDispatcher(store);
        var eventBus = eventBus_1.createEventBus(id);
        var dataProvider = serverSideDataProvider_1.createProvider(store, dispatch, options.data);
        var dataManager = modifiedDataManager_1.createManager();
        var paginationManager = paginationManager_1.createPaginationManager();
        this.el = el;
        this.store = store;
        this.dispatch = dispatch;
        this.eventBus = eventBus;
        this.dataProvider = dataProvider;
        this.dataManager = dataManager;
        this.paginationManager = paginationManager;
        this.usageStatistics = usageStatistics;
        if (this.usageStatistics) {
            googleAnalytics_1.sendHostname();
        }
        instance_1.registerDataSources(id, dataProvider, dataManager, paginationManager);
        if (!manager_1.default.isApplied()) {
            manager_1.default.apply('default');
        }
        if (Array.isArray(options.data)) {
            this.dataManager.setOriginData(options.data);
        }
        this.gridEl = preact_1.render(preact_1.h(root_1.Root, { store: store, dispatch: dispatch, rootElement: el, onGridMounted: onGridMounted, onGridBeforeDestroy: onGridBeforeDestroy }), el);
    }
    /**
     * Apply theme to all grid instances with the preset options of a given name.
     * @static
     * @param {string} presetName - preset theme name. Available values are 'default', 'striped' and 'clean'.
     * @param {Object} [extOptions] - if exist, extend preset options with this object.
     *     @param {Object} [extOptions.outline] - Styles for the table outline.
     *         @param {string} [extOptions.outline.border] - Color of the table outline.
     *         @param {boolean} [extOptions.outline.showVerticalBorder] - Whether vertical outlines of
     *             the table are visible.
     *     @param {Object} [extOptions.selection] - Styles for a selection layer.
     *         @param {string} [extOptions.selection.background] - Background color of a selection layer.
     *         @param {string} [extOptions.selection.border] - Border color of a selection layer.
     *     @param {Object} [extOptions.scrollbar] - Styles for scrollbars.
     *         @param {string} [extOptions.scrollbar.border] - Border color of scrollbars.
     *         @param {string} [extOptions.scrollbar.background] - Background color of scrollbars.
     *         @param {string} [extOptions.scrollbar.emptySpace] - Color of extra spaces except scrollbar.
     *         @param {string} [extOptions.scrollbar.thumb] - Color of thumbs in scrollbars.
     *         @param {string} [extOptions.scrollbar.active] - Color of arrows(for IE) or
     *              thumb:hover(for other browsers) in scrollbars.
     *     @param {Object} [extOptions.frozenBorder] - Styles for a frozen border.
     *         @param {string} [extOptions.frozenBorder.border] - Border color of a frozen border.
     *     @param {Object} [extOptions.area] - Styles for the table areas.
     *         @param {Object} [extOptions.area.header] - Styles for the header area in the table.
     *             @param {string} [extOptions.area.header.background] - Background color of the header area
     *                 in the table.
     *             @param {string} [extOptions.area.header.border] - Border color of the header area
     *                 in the table.
     *         @param {Object} [extOptions.area.body] - Styles for the body area in the table.
     *             @param {string} [extOptions.area.body.background] - Background color of the body area
     *                 in the table.
     *         @param {Object} [extOptions.area.summary] - Styles for the summary area in the table.
     *             @param {string} [extOptions.area.summary.background] - Background color of the summary area
     *                 in the table.
     *             @param {string} [extOptions.area.summary.border] - Border color of the summary area
     *                 in the table.
     *     @param {Object} [extOptions.row] - Styles for the table rows.
     *         @param {Object} [extOptions.row.even] - Styles for even row.
     *             @param {string} [extOptions.row.even.background] - background color of even row.
     *             @param {string} [extOptions.row.even.text] - text color of even row.
     *         @param {Object} [extOptions.row.odd] - Styles for odd row.
     *             @param {string} [extOptions.row.odd.background] - background color of cells in odd row.
     *             @param {string} [extOptions.row.odd.text] - text color of odd row.
     *         @param {Object} [extOptions.row.dummy] - Styles of dummy row.
     *             @param {string} [extOptions.row.dummy.background] - background color of dummy row.
     *         @param {Object} [extOptions.row.hover] - Styles of hovered row.
     *             @param {string} [extOptions.row.hover.background] - background color of hovered row.
     *     @param {Object} [extOptions.cell] - Styles for the table cells.
     *         @param {Object} [extOptions.cell.normal] - Styles for normal cells.
     *             @param {string} [extOptions.cell.normal.background] - Background color of normal cells.
     *             @param {string} [extOptions.cell.normal.border] - Border color of normal cells.
     *             @param {string} [extOptions.cell.normal.text] - Text color of normal cells.
     *             @param {boolean} [extOptions.cell.normal.showVerticalBorder] - Whether vertical borders of
     *                 normal cells are visible.
     *             @param {boolean} [extOptions.cell.normal.showHorizontalBorder] - Whether horizontal borders of
     *                 normal cells are visible.
     *         @param {Object} [extOptions.cell.header] - Styles for header cells.
     *             @param {string} [extOptions.cell.header.background] - Background color of header cells.
     *             @param {string} [extOptions.cell.header.border] - border color of header cells.
     *             @param {string} [extOptions.cell.header.text] - text color of header cells.
     *             @param {boolean} [extOptions.cell.header.showVerticalBorder] - Whether vertical borders of
     *                 header cells are visible.
     *             @param {boolean} [extOptions.cell.header.showHorizontalBorder] - Whether horizontal borders of
     *                 header cells are visible.
     *         @param {Object} [extOptions.cell.selectedHeader] - Styles for selected header cells.
     *             @param {string} [extOptions.cell.selectedHeader.background] - background color of selected header cells.
     *         @param {Object} [extOptions.cell.rowHeader] - Styles for row's header cells.
     *             @param {string} [extOptions.cell.rowHeader.background] - Background color of row's header cells.
     *             @param {string} [extOptions.cell.rowHeader.border] - border color of row's header cells.
     *             @param {string} [extOptions.cell.rowHeader.text] - text color of row's header cells.
     *             @param {boolean} [extOptions.cell.rowHeader.showVerticalBorder] - Whether vertical borders of
     *                 row's header cells are visible.
     *             @param {boolean} [extOptions.cell.rowHeader.showHorizontalBorder] - Whether horizontal borders of
     *                 row's header cells are visible.
     *         @param {Object} [extOptions.cell.selectedRowHeader] - Styles for selected row's header cells.
     *             @param {string} [extOptions.cell.selectedRowHeader.background] - background color of selected row's haed cells.
     *         @param {Object} [extOptions.cell.summary] - Styles for cells in the summary area.
     *             @param {string} [extOptions.cell.summary.background] - Background color of cells in the summary area.
     *             @param {string} [extOptions.cell.summary.border] - border color of cells in the summary area.
     *             @param {string} [extOptions.cell.summary.text] - text color of cells in the summary area.
     *             @param {boolean} [extOptions.cell.summary.showVerticalBorder] - Whether vertical borders of
     *                 cells in the summary area are visible.
     *             @param {boolean} [extOptions.cell.summary.showHorizontalBorder] - Whether horizontal borders of
     *                 cells in the summary area are visible.
     *         @param {Object} [extOptions.cell.focused] - Styles for a focused cell.
     *             @param {string} [extOptions.cell.focused.background] - background color of a focused cell.
     *             @param {string} [extOptions.cell.focused.border] - border color of a focused cell.
     *         @param {Object} [extOptions.cell.focusedInactive] - Styles for a inactive focus cell.
     *             @param {string} [extOptions.cell.focusedInactive.border] - border color of a inactive focus cell.
     *         @param {Object} [extOptions.cell.required] - Styles for required cells.
     *             @param {string} [extOptions.cell.required.background] - background color of required cells.
     *             @param {string} [extOptions.cell.required.text] - text color of required cells.
     *         @param {Object} [extOptions.cell.editable] - Styles for editable cells.
     *             @param {string} [extOptions.cell.editable.background] - background color of the editable cells.
     *             @param {string} [extOptions.cell.editable.text] - text color of the selected editable cells.
     *         @param {Object} [extOptions.cell.disabled] - Styles for disabled cells.
     *             @param {string} [extOptions.cell.disabled.background] - background color of disabled cells.
     *             @param {string} [extOptions.cell.disabled.text] - text color of disabled cells.
     *         @param {Object} [extOptions.cell.invalid] - Styles for invalid cells.
     *             @param {string} [extOptions.cell.invalid.background] - background color of invalid cells.
     *             @param {string} [extOptions.cell.invalid.text] - text color of invalid cells.
     *         @param {Object} [extOptions.cell.currentRow] - Styles for cells in a current row.(deprecated since version 4.4.0)
     *             @param {string} [extOptions.cell.currentRow.background] - background color of cells in a current row.
     *             @param {string} [extOptions.cell.currentRow.text] - text color of cells in a current row.
     *         @param {Object} [extOptions.cell.evenRow] - Styles for cells in even rows.(deprecated since version 4.4.0)
     *             @param {string} [extOptions.cell.evenRow.background] - background color of cells in even rows.
     *             @param {string} [extOptions.cell.evenRow.text] - text color of cells in even rows.
     *         @param {Object} [extOptions.cell.oddRow] - Styles for cells in even rows.(deprecated since version 4.4.0)
     *             @param {string} [extOptions.cell.oddRow.background] - background color of cells in odd rows.
     *             @param {string} [extOptions.cell.oddRow.text] - text color of cells in odd rows.
     *         @param {Object} [extOptions.cell.dummy] - Styles for dummy cells.(deprecated since version 4.4.0)
     *             @param {string} [extOptions.cell.dummy.background] - background color of dummy cells.
     * @example
     * var Grid = tui.Grid; // or require('tui-grid')
     *
     * Grid.applyTheme('striped', {
     *     grid: {
     *         border: '#aaa',
     *         text: '#333'
     *     },
     *     cell: {
     *         disabled: {
     *             text: '#999'
     *         }
     *     }
     * });
     */
    Grid.applyTheme = function (presetName, extOptions) {
        manager_1.default.apply(presetName, extOptions);
    };
    /**
     * Set language
     * @static
     * @param {string} localeCode - Code to set locale messages and
     *     this is the language or language-region combination (ex: en-US)
     * @param {Object} [data] - Messages using in Grid
     * @example
     * var Grid = tui.Grid; // or require('tui-grid')
     *
     * Grid.setLanguage('en'); // default and set English
     * Grid.setLanguage('ko'); // set Korean
     * Grid.setLanguage('en-US', { // set new language
     *      display: {
     *          noData: 'No data.',
     *          loadingData: 'Loading data.',
     *          resizeHandleGuide: 'You can change the width of the column by mouse drag, ' +
     *                              'and initialize the width by double-clicking.'
     *      },
     *      net: {
     *          confirmCreate: 'Are you sure you want to create {{count}} data?',
     *          confirmUpdate: 'Are you sure you want to update {{count}} data?',
     *          confirmDelete: 'Are you sure you want to delete {{count}} data?',
     *          confirmModify: 'Are you sure you want to modify {{count}} data?',
     *          noDataToCreate: 'No data to create.',
     *          noDataToUpdate: 'No data to update.',
     *          noDataToDelete: 'No data to delete.',
     *          noDataToModify: 'No data to modify.',
     *          failResponse: 'An error occurred while requesting data.\nPlease try again.'
     *      }
     * });
     */
    Grid.setLanguage = function (localeCode, data) {
        i18n_1.default.setLanguage(localeCode, data);
    };
    /**
     * Sets the width of the dimension.
     * @param {number} width - The width of the dimension
     */
    Grid.prototype.setWidth = function (width) {
        this.dispatch('setWidth', width, false);
    };
    /**
     * Sets the height of the dimension.
     * @param {number} height - The height of the dimension
     */
    Grid.prototype.setHeight = function (height) {
        this.dispatch('setHeight', height);
    };
    /**
     * Sets the height of body-area.
     * @param {number} bodyHeight - The number of pixel
     */
    Grid.prototype.setBodyHeight = function (bodyHeight) {
        this.dispatch('setBodyHeight', bodyHeight);
    };
    /**
     * Sets options for header.
     * @param {Object} options - Options for header
     * @param {number} [options.height] -  The height value
     * @param {Array} [options.complexColumns] - The complex columns info
     */
    Grid.prototype.setHeader = function (_a) {
        var height = _a.height, complexColumns = _a.complexColumns;
        if (height) {
            this.dispatch('setHeaderHeight', height);
        }
        if (complexColumns) {
            this.dispatch('setComplexHeaderColumns', complexColumns);
        }
    };
    /**
     * Sets the count of frozen columns.
     * @param {number} count - The count of columns to be frozen
     */
    Grid.prototype.setFrozenColumnCount = function (count) {
        this.dispatch('setFrozenColumnCount', count);
    };
    /**
     * Hides columns
     * @param {...string} arguments - Column names to hide

     */
    Grid.prototype.hideColumn = function (columnName) {
        this.dispatch('hideColumn', columnName);
    };
    /**
     * Shows columns
     * @param {...string} arguments - Column names to show
     */
    Grid.prototype.showColumn = function (columnName) {
        this.dispatch('showColumn', columnName);
    };
    /**
     * Selects cells or rows by range
     * @param {Object} range - Selection range
     *     @param {Array} [range.start] - Index info of start selection (ex: [rowIndex, columnIndex])
     *     @param {Array} [range.end] - Index info of end selection (ex: [rowIndex, columnIndex])
     */
    Grid.prototype.setSelectionRange = function (range) {
        this.dispatch('setSelection', range);
    };
    /**
     * Returns data of currently focused cell
     * @returns {number|string} rowKey - The unique key of the row
     * @returns {string} columnName - The name of the column
     * @returns {string} value - The value of the cell
     */
    Grid.prototype.getFocusedCell = function () {
        var _a = this.store.focus, columnName = _a.columnName, rowKey = _a.rowKey;
        var value = null;
        if (rowKey !== null && columnName !== null) {
            value = this.getValue(rowKey, columnName);
        }
        return { rowKey: rowKey, columnName: columnName, value: value };
    };
    /**
     * Removes focus from the focused cell.
     */
    Grid.prototype.blur = function () {
        // @TODO: save previous ì´í›„ ì¶”ê°€ í•„ìš”.
        this.dispatch('setFocusInfo', null, null, false);
    };
    /**
     * Focus to the cell identified by given rowKey and columnName.
     * @param {Number|String} rowKey - rowKey
     * @param {String} columnName - columnName
     * @param {Boolean} [setScroll=false] - if set to true, move scroll position to focused position
     * @returns {Boolean} true if focused cell is changed
     */
    Grid.prototype.focus = function (rowKey, columnName, setScroll) {
        var _this = this;
        this.dispatch('setFocusInfo', rowKey, columnName, true);
        if (setScroll) {
            // Use setTimeout to wait until the DOM element is actually mounted or updated.
            // For example, when expands the tree row at bottom of the grid area with scroll,
            // grid needs to wait for mounting the expanded tree DOM element to detect the accurate scrolling position.
            setTimeout(function () {
                _this.dispatch('setScrollToFocus');
            });
        }
        // @TODO: radio buttonì¸ì§€ í™•ì¸, radio ë²„íŠ¼ì¸ ê²½ìš° ì²´í¬í•´ì£¼ê¸°
        return true;
    };
    /**
     * Focus to the cell identified by given rowIndex and columnIndex.
     * @param {Number} rowIndex - rowIndex
     * @param {Number} columnIndex - columnIndex
     * @param {boolean} [setScroll=false] - if set to true, scroll to focused cell
     * @returns {Boolean} true if success
     */
    Grid.prototype.focusAt = function (rowIndex, columnIndex, isScrollable) {
        var _a = data_1.getCellAddressByIndex(this.store, rowIndex, columnIndex), rowKey = _a.rowKey, columnName = _a.columnName;
        if (!common_1.isUndefined(rowKey) && columnName) {
            return this.focus(rowKey, columnName, isScrollable);
        }
        return false;
    };
    /**
     * Makes view ready to get keyboard input.
     */
    Grid.prototype.activateFocus = function () {
        this.dispatch('setNavigating', true);
    };
    /**
     * Sets focus on the cell at the specified index of row and column and starts to edit.
     * @param {number|string} rowKey - The unique key of the row
     * @param {string} columnName - The name of the column
     * @param {boolean} [setScroll=false] - If set to true, the view will scroll to the cell element.
     */
    Grid.prototype.startEditing = function (rowKey, columnName, setScroll) {
        if (this.focus(rowKey, columnName, setScroll)) {
            this.dispatch('startEditing', rowKey, columnName);
        }
    };
    /**
     * Sets focus on the cell at the specified index of row and column and starts to edit.
     * @param {number|string} rowIndex - The index of the row
     * @param {string} columnIndex - The index of the column
     * @param {boolean} [setScroll=false] - If set to true, the view will scroll to the cell element.
     */
    Grid.prototype.startEditingAt = function (rowIndex, columnIndex, setScroll) {
        var _a = data_1.getCellAddressByIndex(this.store, rowIndex, columnIndex), rowKey = _a.rowKey, columnName = _a.columnName;
        this.startEditing(rowKey, columnName, setScroll);
    };
    /**
     * Sets the value of the cell identified by the specified rowKey and columnName and finish editing the cell.
     * @param {number|string} rowKey - The unique key of the row
     * @param {string} columnName - The name of the column
     * @param {string} value - The value of editing result
     */
    Grid.prototype.finishEditing = function (rowKey, columnName, value) {
        // @TODO: change grid API name(finishEditing -> saveAndFinishEditing)
        this.dispatch('saveAndFinishEditing', rowKey, columnName, value);
    };
    /**
     * Sets the value of the cell identified by the specified rowKey and columnName.
     * @param {number|string} rowKey - The unique key of the row
     * @param {string} columnName - The name of the column
     * @param {number|string} value - The value to be set
     */
    Grid.prototype.setValue = function (rowKey, columnName, value) {
        this.dispatch('setValue', rowKey, columnName, value);
    };
    /**
     * Returns the value of the cell identified by the rowKey and columnName.
     * @param {number|string} rowKey - The unique key of the target row.
     * @param {string} columnName - The name of the column
     * @param {boolean} [isOriginal] - It set to true, the original value will be return.
     * @returns {number|string} - The value of the cell
     */
    Grid.prototype.getValue = function (rowKey, columnName) {
        var _a = this.store, data = _a.data, column = _a.column, id = _a.id;
        var targetRow = data_1.findRowByRowKey(data, column, id, rowKey);
        // @TODO: isOriginal ì²˜ë¦¬ original ê°œë… ì¶”ê°€ë˜ë©´ í•„ìš”(getOriginal)
        if (targetRow) {
            return targetRow[columnName];
        }
        return null;
    };
    /**
     * Sets the all values in the specified column.
     * @param {string} columnName - The name of the column
     * @param {number|string} columnValue - The value to be set
     * @param {boolean} [checkCellState=true] - If set to true, only editable and not disabled cells will be affected.
     */
    Grid.prototype.setColumnValues = function (columnName, columnValue, checkCellState) {
        this.dispatch('setColumnValues', columnName, columnValue, checkCellState);
    };
    /**
     * Returns the HTMLElement of the cell identified by the rowKey and columnName.
     * @param {number|string} rowKey - The unique key of the row
     * @param {string} columnName - The name of the column
     * @returns {HTMLElement} - The HTMLElement of the cell element
     */
    Grid.prototype.getElement = function (rowKey, columnName) {
        return this.el.querySelector("." + dom_1.cls('cell') + "[" + dom_1.dataAttr.ROW_KEY + "=\"" + rowKey + "\"][" + dom_1.dataAttr.COLUMN_NAME + "=\"" + columnName + "\"]");
    };
    /**
     * Sets the HTML string of given column summary.
     * The type of content is the same as the options.summary.columnContent of the constructor.
     * @param {string} columnName - column name
     * @param {string|object} columnContent - HTML string or options object.
     */
    Grid.prototype.setSummaryColumnContent = function (columnName, columnContent) {
        this.dispatch('setSummaryColumnContent', columnName, columnContent);
    };
    /**
     * Returns the values of given column summary.
     * If the column name is not specified, all values of available columns are returned.
     * The shape of returning object looks like the example below.
     * @param {string} [columnName] - column name
     * @returns {Object}
     * @example
     * {
     *     sum: 1000,
     *     avg: 200,
     *     max: 300,
     *     min: 50,
     *     cnt: 5
     * }
     */
    Grid.prototype.getSummaryValues = function (columnName) {
        var summary = this.store.summary;
        var content = summary.summaryColumnContents[columnName];
        if (content && content.useAutoSummary) {
            return summary.summaryValues[columnName];
        }
        return null;
    };
    /**
     * Returns a list of the column model.
     * @returns {Array} - A list of the column model.
     */
    Grid.prototype.getColumns = function () {
        return this.store.column.allColumns
            .filter(function (_a) {
            var name = _a.name;
            return !column_1.isRowHeader(name);
        })
            .map(function (column) { return observable_1.getOriginObject(column); });
    };
    /**
     * Sets the list of column model.
     * @param {Array} columns - A new list of column model
     */
    Grid.prototype.setColumns = function (columns) {
        this.dispatch('setColumns', columns);
    };
    /**
     * Set columns title
     * @param {Object} columnsMap - columns map to be change
     * @example
     * {
     *      columnName1: 'title1',
     *      columnName2: 'title2',
     *      columnName3: 'title3'
     * }
     */
    Grid.prototype.setColumnHeaders = function (columnsMap) {
        this.dispatch('changeColumnHeadersByName', columnsMap);
    };
    /**
     * Resets the width of each column by using initial setting of column models.
     */
    Grid.prototype.resetColumnWidths = function (widths) {
        this.dispatch('resetColumnWidths', widths);
    };
    /**
     * Returns a list of all values in the specified column.
     * @param {string} columnName - The name of the column
     * @returns {(Array|string)} - A List of all values in the specified column. (or JSON string of the list)
     */
    Grid.prototype.getColumnValues = function (columnName) {
        return common_1.mapProp(columnName, this.store.data.rawData);
    };
    /**
     * Returns the index of the column indentified by the column name.
     * @param {string} columnName - The unique key of the column
     * @returns {number} - The index of the column
     */
    Grid.prototype.getIndexOfColumn = function (columnName) {
        return common_1.findPropIndex('name', columnName, this.store.column.allColumns.filter(function (_a) {
            var name = _a.name;
            return !column_1.isRowHeader(name);
        }));
    };
    /**
     * Checks the row identified by the specified rowKey.
     * @param {number|string} rowKey - The unique key of the row
     */
    Grid.prototype.check = function (rowKey) {
        this.dispatch('check', rowKey);
    };
    /**
     * Unchecks the row identified by the specified rowKey.
     * @param {number|string} rowKey - The unique key of the row
     */
    Grid.prototype.uncheck = function (rowKey) {
        this.dispatch('uncheck', rowKey);
    };
    /**
     * Checks all rows.
     */
    Grid.prototype.checkAll = function () {
        this.dispatch('checkAll');
    };
    /**
     * Unchecks all rows.
     */
    Grid.prototype.uncheckAll = function () {
        this.dispatch('uncheckAll');
    };
    /**
     * Returns a list of the rowKey of checked rows.
     * @returns {Array.<string|number>} - A list of the rowKey.
     */
    Grid.prototype.getCheckedRowKeys = function () {
        return data_1.getCheckedRows(this.store).map(function (_a) {
            var rowKey = _a.rowKey;
            return rowKey;
        });
    };
    /**
     * Returns a list of the checked rows.
     * @returns {Array.<object>} - A list of the checked rows.
     */
    Grid.prototype.getCheckedRows = function () {
        return data_1.getCheckedRows(this.store).map(function (row) { return observable_1.getOriginObject(row); });
    };
    /**
     * Finds rows by conditions
     * @param {Object|Function} conditions - object (key: column name, value: column value) or
     *     function that check the value and returns true/false result to find rows
     * @returns {Array} Row list
     * @example <caption>Conditions type is object.</caption>
     * grid.findRows({
     *     artist: 'Birdy',
     *     price: 10000
     * });
     * @example <caption>Conditions type is function.</caption>
     * grid.findRows((row) => {
     *     return (/b/ig.test(row.artist) && row.price > 10000);
     * });
     */
    Grid.prototype.findRows = function (conditions) {
        return data_1.getConditionalRows(this.store, conditions);
    };
    /**
     * Sorts all rows by the specified column.
     * @param {string} columnName - The name of the column to be used to compare the rows
     * @param {boolean} [ascending] - Whether the sort order is ascending.
     *        If not specified, use the negative value of the current order.
     * @param {boolean} [multiple] - Whether using multiple sort
     */
    Grid.prototype.sort = function (columnName, ascending, multiple) {
        this.dispatch('sort', columnName, ascending, multiple, false);
    };
    /**
     * If the parameter exists, unsort only column with columnName. If not exist, unsort all rows
     * @param {string} [columnName] - The name of the column to be used to compare the rows
     */
    Grid.prototype.unsort = function (columnName) {
        this.dispatch('unsort', columnName);
    };
    /**
     * Gets state of the sorted column in rows
     * @returns {{columns: [{columnName: string, ascending: boolean}], useClient: boolean}} Sorted column's state
     */
    Grid.prototype.getSortState = function () {
        return this.store.data.sortState;
    };
    /**
     * Copy to clipboard
     */
    Grid.prototype.copyToClipboard = function () {
        var clipboard = document.querySelector("." + dom_1.cls('clipboard'));
        clipboard.innerHTML = clipboard_1.getText(this.store);
        if (dom_1.isSupportWindowClipboardData()) {
            dom_1.setClipboardSelection(clipboard.childNodes[0]);
        }
        // Accessing the clipboard is a security concern on chrome
        document.execCommand('copy');
    };
    /*
     * Validates all data and returns the result.
     * Return value is an array which contains only rows which have invalid cell data.
     * @returns {Array.<Object>} An array of error object
     * @example
     * // return value example
     * [
     *     {
     *         rowKey: 1,
     *         errors: [
     *             {
     *                 columnName: 'c1',
     *                 errorCode: 'REQUIRED'
     *             },
     *             {
     *                 columnName: 'c2',
     *                 errorCode: 'REQUIRED'
     *             }
     *         ]
     *     },
     *     {
     *         rowKey: 3,
     *         errors: [
     *             {
     *                 columnName: 'c2',
     *                 errorCode: 'REQUIRED'
     *             }
     *         ]
     *     }
     * ]
     */
    Grid.prototype.validate = function () {
        return validation_1.getInvalidRows(this.store);
    };
    /**
     * Enables all rows.
     */
    Grid.prototype.enable = function () {
        this.dispatch('setDisabled', false);
    };
    /**
     * Disables all rows.
     */
    Grid.prototype.disable = function () {
        this.dispatch('setDisabled', true);
    };
    /**
     * Disables the row identified by the rowkey.
     * @param {number|string} rowKey - The unique key of the target row
     * @param {boolean} [withCheckbox] - change including checkbox. The default value is 'true'
     */
    Grid.prototype.disableRow = function (rowKey, withCheckbox) {
        if (withCheckbox === void 0) { withCheckbox = true; }
        this.dispatch('setRowDisabled', true, rowKey, withCheckbox);
    };
    /**
     * Enables the row identified by the rowKey.
     * @param {number|string} rowKey - The unique key of the target row
     * @param {boolean} [withCheckbox] - change including checkbox. The default value is 'true'
     */
    Grid.prototype.enableRow = function (rowKey, withCheckbox) {
        if (withCheckbox === void 0) { withCheckbox = true; }
        this.dispatch('setRowDisabled', false, rowKey, withCheckbox);
    };
    /**
     * Disables the row identified by the specified rowKey to not be able to check.
     * @param {number|string} rowKey - The unique keyof the row.
     */
    Grid.prototype.disableRowCheck = function (rowKey) {
        this.dispatch('setRowCheckDisabled', true, rowKey);
    };
    /**
     * Enables the row identified by the rowKey to be able to check.
     * @param {number|string} rowKey - The unique key of the row
     */
    Grid.prototype.enableRowCheck = function (rowKey) {
        this.dispatch('setRowCheckDisabled', false, rowKey);
    };
    /**
     * Inserts the new row with specified data to the end of table.
     * @param {Object} [row] - The data for the new row
     * @param {Object} [options] - Options
     * @param {number} [options.at] - The index at which new row will be inserted
     * @param {boolean} [options.extendPrevRowSpan] - If set to true and the previous row at target index
     *        has a rowspan data, the new row will extend the existing rowspan data.
     * @param {boolean} [options.focus] - If set to true, move focus to the new row after appending
     * @param {number|string} [options.parentRowKey] - Deprecated: Tree row key of the parent which appends given rows
     */
    Grid.prototype.appendRow = function (row, options) {
        if (row === void 0) { row = {}; }
        if (options === void 0) { options = {}; }
        var treeColumnName = this.store.column.treeColumnName;
        if (treeColumnName) {
            var offset = options.at, focus_1 = options.focus, parentRowKey = options.parentRowKey;
            this.dispatch('appendTreeRow', row, { offset: offset, focus: focus_1, parentRowKey: parentRowKey });
        }
        else {
            this.dispatch('appendRow', row, options);
        }
        if (options.focus) {
            var rowIdx = common_1.isUndefined(options.at) ? this.getRowCount() - 1 : options.at;
            this.focusAt(rowIdx, 0);
        }
    };
    /**
     * Inserts the new row with specified data to the beginning of table.
     * @param {Object} [row] - The data for the new row
     * @param {Object} [options] - Options
     * @param {boolean} [options.focus] - If set to true, move focus to the new row after appending
     */
    Grid.prototype.prependRow = function (row, options) {
        if (options === void 0) { options = {}; }
        this.appendRow(row, tslib_1.__assign({}, options, { at: 0 }));
    };
    /**
     * Removes the row identified by the specified rowKey.
     * @param {number|string} rowKey - The unique key of the row
     * @param {boolean} [options.removeOriginalData] - If set to true, the original data will be removed.
     * @param {boolean} [options.keepRowSpanData] - If set to true, the value of the merged cells will not be
     *     removed although the target is first cell of them.
     */
    Grid.prototype.removeRow = function (rowKey, options) {
        if (options === void 0) { options = {}; }
        var treeColumnName = this.store.column.treeColumnName;
        if (treeColumnName) {
            this.removeTreeRow(rowKey);
        }
        else {
            this.dispatch('removeRow', rowKey, options);
        }
    };
    /**
     * Returns the object that contains all values in the specified row.
     * @param {number|string} rowKey - The unique key of the target row
     * @returns {Object} - The object that contains all values in the row.
     */
    Grid.prototype.getRow = function (rowKey) {
        return this.getRowAt(this.getIndexOfRow(rowKey));
    };
    /**
     * Returns the object that contains all values in the row at specified index.
     * @param {number} rowIdx - The index of the row
     * @returns {Object} - The object that contains all values in the row.
     */
    Grid.prototype.getRowAt = function (rowIdx) {
        var row = this.store.data.rawData[rowIdx];
        return row ? observable_1.getOriginObject(row) : null;
    };
    /**
     * Returns the index of the row indentified by the rowKey.
     * @param {number|string} rowKey - The unique key of the row
     * @returns {number} - The index of the row
     */
    Grid.prototype.getIndexOfRow = function (rowKey) {
        var _a = this.store, data = _a.data, column = _a.column, id = _a.id;
        return data_1.findIndexByRowKey(data, column, id, rowKey);
    };
    /**
     * Returns a list of all rows.
     * @returns {Array} - A list of all rows
     */
    Grid.prototype.getData = function () {
        return this.store.data.rawData.map(function (row) { return observable_1.getOriginObject(row); });
    };
    /**
     * Returns the total number of the rows.
     * @returns {number} - The total number of the rows
     */
    Grid.prototype.getRowCount = function () {
        return this.store.data.rawData.length;
    };
    /**
     * Removes all rows.
     */
    Grid.prototype.clear = function () {
        this.dispatch('clearData');
    };
    /**
     * Replaces all rows with the specified list. This will not change the original data.
     * @param {Array} data - A list of new rows
     */
    Grid.prototype.resetData = function (data) {
        this.dispatch('resetData', data);
    };
    /**
     * Adds the specified css class to cell element identified by the rowKey and className
     * @param {number|string} rowKey - The unique key of the row
     * @param {string} columnName - The name of the column
     * @param {string} className - The css class name to add
     */
    Grid.prototype.addCellClassName = function (rowKey, columnName, className) {
        this.dispatch('addCellClassName', rowKey, columnName, className);
    };
    /**
     * Adds the specified css class to all cell elements in the row identified by the rowKey
     * @param {number|string} rowKey - The unique key of the row
     * @param {string} className - The css class name to add
     */
    Grid.prototype.addRowClassName = function (rowKey, className) {
        this.dispatch('addRowClassName', rowKey, className);
    };
    /**
     * Removes the specified css class from the cell element indentified by the rowKey and columnName.
     * @param {number|string} rowKey - The unique key of the row
     * @param {string} columnName - The name of the column
     * @param {string} className - The css class name to be removed
     */
    Grid.prototype.removeCellClassName = function (rowKey, columnName, className) {
        this.dispatch('removeCellClassName', rowKey, columnName, className);
    };
    /**
     * Removes the specified css class from all cell elements in the row identified by the rowKey.
     * @param {number|string} rowKey - The unique key of the row
     * @param {string} className - The css class name to be removed
     */
    Grid.prototype.removeRowClassName = function (rowKey, className) {
        this.dispatch('removeRowClassName', rowKey, className);
    };
    Grid.prototype.on = function (eventName, fn) {
        this.eventBus.on(eventName, fn);
    };
    Grid.prototype.off = function (eventName, fn) {
        this.eventBus.off(eventName, fn);
    };
    /**
     * Returns an instance of tui.Pagination.
     * @returns {tui.Pagination}
     */
    Grid.prototype.getPagination = function () {
        return this.paginationManager.getPagination();
    };
    /**
     * Set number of rows per page and reload current page
     * @param {number} perPage - Number of rows per page
     */
    Grid.prototype.setPerPage = function (perPage) {
        var pagination = this.getPagination();
        if (pagination) {
            var pageOptions = this.store.data.pageOptions;
            if (pageOptions.useClient) {
                this.dispatch('setPagination', tslib_1.__assign({}, pageOptions, { perPage: perPage, page: 1 }));
            }
            else {
                this.readData(1, { perPage: perPage });
            }
        }
    };
    /**
     * Returns true if there are at least one row modified.
     * @returns {boolean} - True if there are at least one row modified.
     */
    Grid.prototype.isModified = function () {
        return this.dataManager.isModified();
    };
    /**
     * Returns the object that contains the lists of changed data compared to the original data.
     * The object has properties 'createdRows', 'updatedRows', 'deletedRows'.
     * @param {Object} [options] Options
     *     @param {boolean} [options.checkedOnly=false] - If set to true, only checked rows will be considered.
     *     @param {boolean} [options.withRawData=false] - If set to true, the data will contains
     *         the row data for internal use.
     *     @param {boolean} [options.rowKeyOnly=false] - If set to true, only keys of the changed
     *         rows will be returned.
     *     @param {Array} [options.ignoredColumns] - A list of column name to be excluded.
     * @returns {{createdRows: Array, updatedRows: Array, deletedRows: Array}} - Object that contains the result list.
     */
    Grid.prototype.getModifiedRows = function (options) {
        if (options === void 0) { options = {}; }
        var ignoredColumns = options.ignoredColumns;
        var originIgnoredColumns = this.store.column.ignoredColumns;
        options.ignoredColumns = Array.isArray(ignoredColumns)
            ? ignoredColumns.concat(originIgnoredColumns)
            : originIgnoredColumns;
        return this.dataManager.getAllModifiedData(options);
    };
    /**
     * Requests 'readData' to the server. The last requested data will be extended with new data.
     * @param {Number} page - Page number
     * @param {Object} data - Data(parameters) to send to the server
     * @param {Boolean} resetData - If set to true, last requested data will be ignored.
     */
    Grid.prototype.readData = function (page, data, resetData) {
        this.dataProvider.readData(page, data, resetData);
    };
    /**
     * Send request to server to sync data
     * @param {String} requestType - 'createData|updateData|deleteData|modifyData'
     * @param {object} options - Options
     *      @param {String} [options.url] - URL to send the request
     *      @param {boolean} [options.hasDataParam=true] - Whether the row-data to be included in the request param
     *      @param {boolean} [options.checkedOnly=true] - Whether the request param only contains checked rows
     *      @param {boolean} [options.modifiedOnly=true] - Whether the request param only contains modified rows
     *      @param {boolean} [options.showConfirm=true] - Whether to show confirm dialog before sending request
     *      @param {boolean} [options.withCredentials=false] - Use withCredentials flag of XMLHttpRequest for ajax requests if true
     */
    Grid.prototype.request = function (requestType, options) {
        if (options === void 0) { options = {}; }
        this.dataProvider.request(requestType, options);
    };
    /**
     * Requests 'readData' with last requested data.
     */
    Grid.prototype.reloadData = function () {
        this.dataProvider.reloadData();
    };
    /**
     * Restores the data to the original data.
     * (Original data is set by {@link Grid#resetData|resetData}
     */
    Grid.prototype.restore = function () {
        this.resetData(this.dataManager.getOriginData());
    };
    /*
     * Inserts the new tree row with specified data.
     * @param {Object} [row] - The tree data for the new row
     * @param {Object} [options] - Options
     * @param {number|string} [options.parentRowKey] - Tree row key of the parent which appends given rows
     * @param {number} [options.offset] - The offset value to insert new tree row
     * @param {boolean} [options.focus] - If set to true, move focus to the new tree row after appending
     */
    Grid.prototype.appendTreeRow = function (row, options) {
        if (row === void 0) { row = {}; }
        if (options === void 0) { options = {}; }
        var treeColumnName = this.store.column.treeColumnName;
        var parentRowKey = options.parentRowKey;
        if (!treeColumnName || common_1.isUndefined(parentRowKey)) {
            return;
        }
        this.dispatch('appendTreeRow', row, options);
        if (options.focus) {
            var offset = options.offset;
            var childRows = tree_1.getChildRows(this.store, parentRowKey);
            if (childRows.length) {
                var rowKey = (common_1.isUndefined(offset)
                    ? childRows[childRows.length - 1]
                    : childRows[offset]).rowKey;
                var rowIdx = this.getIndexOfRow(rowKey);
                this.focusAt(rowIdx, 0);
            }
        }
    };
    /**
     * Removes the tree row identified by the specified rowKey.
     * @param {number|string} rowKey - The unique key of the row
     */
    Grid.prototype.removeTreeRow = function (rowKey) {
        var treeColumnName = this.store.column.treeColumnName;
        if (treeColumnName) {
            this.dispatch('removeTreeRow', rowKey);
        }
    };
    /**
     * Expands tree row.
     * @param {number|string} rowKey - The unique key of the row
     * @param {boolean} recursive - true for recursively expand all descendant
     */
    Grid.prototype.expand = function (rowKey, recursive) {
        this.dispatch('expandByRowKey', rowKey, recursive);
    };
    /**
     * Expands all tree row.
     */
    Grid.prototype.expandAll = function () {
        this.dispatch('expandAll');
    };
    /**
     * Expands tree row.
     * @param {number|string} rowKey - The unique key of the row
     * @param {boolean} recursive - true for recursively expand all descendant
     */
    Grid.prototype.collapse = function (rowKey, recursive) {
        this.dispatch('collapseByRowKey', rowKey, recursive);
    };
    /**
     * Collapses all tree row.
     */
    Grid.prototype.collapseAll = function () {
        this.dispatch('collapseAll');
    };
    /**
     * Gets the parent of the row which has the given row key.
     * @param {number|string} rowKey - The unique key of the row
     * @returns {Object} - the parent row
     */
    Grid.prototype.getParentRow = function (rowKey) {
        return tree_1.getParentRow(this.store, rowKey, true);
    };
    /**
     * Gets the children of the row which has the given row key.
     * @param {number|string} rowKey - The unique key of the row
     * @returns {Array.<Object>} - the children rows
     */
    Grid.prototype.getChildRows = function (rowKey) {
        return tree_1.getChildRows(this.store, rowKey, true);
    };
    /**
     * Gets the ancestors of the row which has the given row key.
     * @param {number|string} rowKey - The unique key of the row
     * @returns {Array.<TreeRow>} - the ancestor rows
     */
    Grid.prototype.getAncestorRows = function (rowKey) {
        return tree_1.getAncestorRows(this.store, rowKey);
    };
    /**
     * Gets the descendants of the row which has the given row key.
     * @param {number|string} rowKey - The unique key of the row
     * @returns {Array.<Object>} - the descendant rows
     */
    Grid.prototype.getDescendantRows = function (rowKey) {
        return tree_1.getDescendantRows(this.store, rowKey);
    };
    /**
     * Gets the depth of the row which has the given row key.
     * @param {number|string} rowKey - The unique key of the row
     * @returns {number} - the depth
     */
    Grid.prototype.getDepth = function (rowKey) {
        var _a = this.store, data = _a.data, column = _a.column, id = _a.id;
        var rawData = data.rawData;
        var row = data_1.findRowByRowKey(data, column, id, rowKey);
        return row ? tree_1.getDepth(rawData, row) : 0;
    };
    /**
     * Returns the rowspan data of the cell identified by the rowKey and columnName.
     * @param {number|string} rowKey - The unique key of the row
     * @param {string} columnName - The name of the column
     * @returns {Object} - Row span data
     */
    Grid.prototype.getRowSpanData = function (rowKey, columnName) {
        return rowSpan_1.getRowSpanByRowKey(rowKey, columnName, this.store.data.rawData);
    };
    /**
     * reset original data to current data.
     * (Original data is set by {@link Grid#resetData|resetData}
     */
    Grid.prototype.resetOriginData = function () {
        this.dataManager.setOriginData(this.getData());
    };
    /** Removes all checked rows.
     * @param {boolean} [showConfirm] - If set to true, confirm message will be shown before remove.
     * @returns {boolean} - True if there's at least one row removed.
     */
    Grid.prototype.removeCheckedRows = function (showConfirm) {
        var _this = this;
        var rowKeys = this.getCheckedRowKeys();
        var confirmMessage = message_1.getConfirmMessage('DELETE', rowKeys.length);
        if (rowKeys.length > 0 && (!showConfirm || confirm(confirmMessage))) {
            rowKeys.forEach(function (rowKey) {
                _this.removeRow(rowKey);
            });
            return true;
        }
        return false;
    };
    /**
     * Refresh the layout view. Use this method when the view was rendered while hidden.
     */
    Grid.prototype.refreshLayout = function () {
        var containerEl = this.el.querySelector("." + dom_1.cls('container'));
        var parentElement = this.el.parentElement;
        this.dispatch('refreshLayout', containerEl, parentElement);
    };
    /**
     * Destroys the instance.
     */
    Grid.prototype.destroy = function () {
        preact_1.render('', this.el, this.gridEl);
        for (var key in this) {
            if (common_1.hasOwnProp(this, key)) {
                delete this[key];
            }
        }
    };
    /**
     * set column filter
     * @param {string} columnName - columnName
     * @param {string | FilterOpt} filterOpt - filter type
     */
    Grid.prototype.setFilter = function (columnName, filterOpt) {
        this.dispatch('setFilter', columnName, filterOpt);
    };
    /**
     * get filter state
     * @returns {Array.<FilterState>} - filter state
     */
    Grid.prototype.getFilterState = function () {
        var _a = this.store, data = _a.data, column = _a.column;
        return data_1.getFilterStateWithOperator(data, column);
    };
    /**
     * trigger filter
     * @param {string} columnName - column name to filter
     * @param {Array.<FilterState>} state - filter state
     * @example
     * grid.filter('name', [{code: 'eq', value: 3}, {code: 'eq', value: 4}]);
     */
    Grid.prototype.filter = function (columnName, state) {
        var filter = this.store.column.allColumnMap[columnName].filter;
        if (filter) {
            var type_1 = filter.type;
            var conditionFn = state.map(function (_a) {
                var code = _a.code, value = _a.value;
                return filter_1.getFilterConditionFn(code, value, type_1);
            });
            this.dispatch('filter', columnName, filter_1.composeConditionFn(conditionFn), state);
        }
    };
    /**
     * remove filter
     * @param {string} columnName - column name to unfilter
     */
    Grid.prototype.unfilter = function (columnName) {
        this.dispatch('unfilter', columnName);
    };
    return Grid;
}());
exports.default = Grid;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(5);
var data_1 = __webpack_require__(13);
var column_1 = __webpack_require__(23);
var dimension_1 = __webpack_require__(63);
var viewport_1 = __webpack_require__(64);
var columnCoords_1 = __webpack_require__(65);
var rowCoords_1 = __webpack_require__(66);
var focus_1 = __webpack_require__(67);
var summary_1 = __webpack_require__(34);
var selection_1 = __webpack_require__(68);
var renderState_1 = __webpack_require__(69);
var filterLayerState_1 = __webpack_require__(70);
var data_2 = __webpack_require__(14);
var dimension_2 = __webpack_require__(38);
function createStore(id, options) {
    var el = options.el, width = options.width, rowHeight = options.rowHeight, bodyHeight = options.bodyHeight, heightResizable = options.heightResizable, minRowHeight = options.minRowHeight, minBodyHeight = options.minBodyHeight, _a = options.columnOptions, columnOptions = _a === void 0 ? {} : _a, keyColumnName = options.keyColumnName, _b = options.rowHeaders, rowHeaders = _b === void 0 ? [] : _b, _c = options.copyOptions, copyOptions = _c === void 0 ? {} : _c, _d = options.summary, summaryOptions = _d === void 0 ? {} : _d, _e = options.selectionUnit, selectionUnit = _e === void 0 ? 'cell' : _e, _f = options.showDummyRows, showDummyRows = _f === void 0 ? false : _f, _g = options.editingEvent, editingEvent = _g === void 0 ? 'dblclick' : _g, _h = options.tabMode, tabMode = _h === void 0 ? 'moveAndEdit' : _h, scrollX = options.scrollX, scrollY = options.scrollY, _j = options.useClientSort, useClientSort = _j === void 0 ? true : _j, _k = options.pageOptions, pageOptions = _k === void 0 ? {} : _k, _l = options.treeColumnOptions, treeColumnOptions = _l === void 0 ? { name: '' } : _l, _m = options.header, header = _m === void 0 ? {} : _m, _o = options.disabled, disabled = _o === void 0 ? false : _o;
    var frozenBorderWidth = columnOptions.frozenBorderWidth;
    var summaryHeight = summaryOptions.height, summaryPosition = summaryOptions.position;
    var _p = header.height, headerHeight = _p === void 0 ? 40 : _p, _q = header.complexColumns, complexColumns = _q === void 0 ? [] : _q, _r = header.align, align = _r === void 0 ? 'center' : _r, _s = header.valign, valign = _s === void 0 ? 'middle' : _s, _t = header.columns, columnsAlign = _t === void 0 ? [] : _t;
    var column = column_1.create({
        columns: options.columns,
        columnOptions: columnOptions,
        rowHeaders: rowHeaders,
        copyOptions: copyOptions,
        keyColumnName: keyColumnName,
        treeColumnOptions: treeColumnOptions,
        complexColumns: complexColumns,
        align: align,
        valign: valign,
        columnsAlign: columnsAlign
    });
    var data = data_1.create({
        data: Array.isArray(options.data) ? options.data : [],
        column: column,
        pageOptions: pageOptions,
        useClientSort: useClientSort,
        disabled: disabled,
        id: id
    });
    var dimension = dimension_1.create({
        column: column,
        width: width,
        domWidth: el.clientWidth,
        rowHeight: rowHeight,
        bodyHeight: bodyHeight,
        minBodyHeight: minBodyHeight,
        minRowHeight: minRowHeight,
        heightResizable: heightResizable,
        frozenBorderWidth: frozenBorderWidth,
        summaryHeight: summaryHeight,
        summaryPosition: summaryPosition,
        scrollX: scrollX,
        scrollY: scrollY,
        headerHeight: headerHeight
    });
    var columnCoords = columnCoords_1.create({ column: column, dimension: dimension });
    var rowCoords = rowCoords_1.create({ data: data, dimension: dimension });
    var viewport = viewport_1.create({
        data: data,
        column: column,
        dimension: dimension,
        rowCoords: rowCoords,
        columnCoords: columnCoords,
        showDummyRows: showDummyRows
    });
    var focus = focus_1.create({
        data: data,
        column: column,
        columnCoords: columnCoords,
        rowCoords: rowCoords,
        editingEvent: editingEvent,
        tabMode: tabMode,
        id: id
    });
    var summary = summary_1.create({ column: column, data: data, summary: summaryOptions });
    var selection = selection_1.create({
        selectionUnit: selectionUnit,
        columnCoords: columnCoords,
        column: column,
        dimension: dimension,
        rowCoords: rowCoords,
        data: data
    });
    var filterLayerState = filterLayerState_1.create();
    var renderState = renderState_1.create();
    var store = observable_1.observable({
        id: id,
        data: data,
        column: column,
        dimension: dimension,
        columnCoords: columnCoords,
        rowCoords: rowCoords,
        viewport: viewport,
        focus: focus,
        summary: summary,
        selection: selection,
        renderState: renderState,
        filterLayerState: filterLayerState
    });
    // manual observe to resolve circular references
    observable_1.observe(function () {
        dimension_2.setAutoBodyHeight(store);
    });
    // makes the data observable as changes viewport
    observable_1.observe(function () {
        data_2.createObservableData(store);
    });
    return store;
}
exports.createStore = createStore;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
function getListItemText(listItems, value) {
    var item = common_1.findProp('value', value, listItems);
    return item ? item.text : '';
}
function listItemText(_a, relationListItems) {
    var column = _a.column, value = _a.value;
    var type = column.editor.options.type;
    var listItems = column.editor.options.listItems;
    if (Array.isArray(relationListItems)) {
        listItems = relationListItems;
    }
    if (type === 'checkbox') {
        return String(value)
            .split(',')
            .map(getListItemText.bind(null, listItems))
            .filter(function (text) { return Boolean(text); })
            .join(',');
    }
    return getListItemText(listItems, value);
}
exports.listItemText = listItemText;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(54);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(55);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(53)))

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(2);
var DefaultRenderer = /** @class */ (function () {
    function DefaultRenderer(props) {
        var el = document.createElement('div');
        var _a = props.columnInfo, ellipsis = _a.ellipsis, whiteSpace = _a.whiteSpace;
        el.className = dom_1.cls('cell-content');
        if (ellipsis) {
            el.style.textOverflow = 'ellipsis';
        }
        if (whiteSpace) {
            el.style.whiteSpace = whiteSpace;
        }
        this.el = el;
        this.render(props);
    }
    DefaultRenderer.prototype.getElement = function () {
        return this.el;
    };
    DefaultRenderer.prototype.render = function (props) {
        this.el.innerHTML = "" + props.formattedValue;
    };
    return DefaultRenderer;
}());
exports.DefaultRenderer = DefaultRenderer;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var text_1 = __webpack_require__(58);
var checkbox_1 = __webpack_require__(59);
var select_1 = __webpack_require__(60);
var datePicker_1 = __webpack_require__(61);
exports.editorMap = {
    text: [text_1.TextEditor, { type: 'text' }],
    password: [text_1.TextEditor, { type: 'password' }],
    checkbox: [checkbox_1.CheckboxEditor, { type: 'checkbox' }],
    radio: [checkbox_1.CheckboxEditor, { type: 'radio' }],
    select: [select_1.SelectEditor],
    datePicker: [datePicker_1.DatePickerEditor]
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(2);
var common_1 = __webpack_require__(0);
var TextEditor = /** @class */ (function () {
    function TextEditor(props) {
        var el = document.createElement('input');
        var options = props.columnInfo.editor.options;
        el.className = dom_1.cls('content-text');
        el.type = options.type;
        el.value = String(common_1.isUndefined(props.value) || common_1.isNull(props.value) ? '' : props.value);
        this.el = el;
    }
    TextEditor.prototype.getElement = function () {
        return this.el;
    };
    TextEditor.prototype.getValue = function () {
        return this.el.value;
    };
    TextEditor.prototype.mounted = function () {
        this.el.select();
    };
    return TextEditor;
}());
exports.TextEditor = TextEditor;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var editor_1 = __webpack_require__(32);
var CheckboxEditor = /** @class */ (function () {
    function CheckboxEditor(props) {
        var _this = this;
        var name = 'tui-grid-check-input';
        var el = document.createElement('fieldset');
        var type = props.columnInfo.editor.options.type;
        var listItems = editor_1.getListItems(props);
        listItems.forEach(function (_a) {
            var text = _a.text, value = _a.value;
            var id = name + "-" + value;
            el.appendChild(_this.createCheckbox(value, name, id, type));
            el.appendChild(_this.createLabel(text, id));
        });
        this.el = el;
        this.setValue(props.value);
    }
    CheckboxEditor.prototype.createLabel = function (text, id) {
        var label = document.createElement('label');
        label.innerText = text;
        label.setAttribute('for', id);
        return label;
    };
    CheckboxEditor.prototype.createCheckbox = function (value, name, id, inputType) {
        var input = document.createElement('input');
        input.type = inputType;
        input.id = id;
        input.name = name;
        input.value = String(value);
        input.setAttribute('data-value-type', 'string');
        return input;
    };
    CheckboxEditor.prototype.getFirstInput = function () {
        return this.el.querySelector('input');
    };
    CheckboxEditor.prototype.getElement = function () {
        return this.el;
    };
    CheckboxEditor.prototype.setValue = function (value) {
        var _this = this;
        String(value)
            .split(',')
            .forEach(function (inputValue) {
            var input = _this.el.querySelector("input[value=\"" + inputValue + "\"]");
            if (input) {
                input.checked = true;
            }
        });
    };
    CheckboxEditor.prototype.getValue = function () {
        var checkedInputs = this.el.querySelectorAll('input:checked');
        var checkedValues = [];
        for (var i = 0, len = checkedInputs.length; i < len; i += 1) {
            checkedValues.push(checkedInputs[i].value);
        }
        return checkedValues.join(',');
    };
    CheckboxEditor.prototype.mounted = function () {
        var firstInput = this.getFirstInput();
        if (firstInput) {
            firstInput.focus();
        }
    };
    return CheckboxEditor;
}());
exports.CheckboxEditor = CheckboxEditor;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var editor_1 = __webpack_require__(32);
var SelectEditor = /** @class */ (function () {
    function SelectEditor(props) {
        var _this = this;
        var el = document.createElement('select');
        var listItems = editor_1.getListItems(props);
        listItems.forEach(function (_a) {
            var text = _a.text, value = _a.value;
            el.appendChild(_this.createOptions(text, value));
        });
        el.value = String(props.value);
        this.el = el;
    }
    SelectEditor.prototype.createOptions = function (text, value) {
        var option = document.createElement('option');
        option.setAttribute('value', String(value));
        option.innerText = text;
        return option;
    };
    SelectEditor.prototype.getElement = function () {
        return this.el;
    };
    SelectEditor.prototype.getValue = function () {
        return this.el.value;
    };
    SelectEditor.prototype.mounted = function () {
        this.el.focus();
    };
    return SelectEditor;
}());
exports.SelectEditor = SelectEditor;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var tui_date_picker_1 = tslib_1.__importDefault(__webpack_require__(33));
var dom_1 = __webpack_require__(2);
var common_1 = __webpack_require__(0);
var DatePickerEditor = /** @class */ (function () {
    function DatePickerEditor(props) {
        this.el = this.createWrapper();
        this.inputEl = this.createInputElement();
        var datepickerInputContainer = document.createElement('div');
        datepickerInputContainer.className = dom_1.cls('datepicker-input-container');
        datepickerInputContainer.appendChild(this.inputEl);
        this.el.appendChild(datepickerInputContainer);
        var calendarWrapper = this.createCalendarWrapper();
        var usageStatistics = props.grid.usageStatistics, columnInfo = props.columnInfo, value = props.value;
        var options = tslib_1.__assign({ showIcon: true }, columnInfo.editor.options);
        if (options.showIcon) {
            var icon = this.createIcon();
            this.inputEl.className = dom_1.cls('datepicker-input');
            datepickerInputContainer.appendChild(icon);
        }
        var date = common_1.isUndefined(value) || common_1.isNull(value) ? '' : new Date();
        var format = 'yyyy-MM-dd';
        if (options.format) {
            format = options.format;
            delete options.format;
        }
        if (common_1.isNumber(value) || common_1.isString(value)) {
            date = new Date(value);
        }
        var defaultOptions = {
            date: date,
            type: 'date',
            input: {
                element: this.inputEl,
                format: format
            },
            usageStatistics: usageStatistics
        };
        this.datePickerEl = new tui_date_picker_1.default(calendarWrapper, common_1.deepMergedCopy(defaultOptions, options));
    }
    DatePickerEditor.prototype.createWrapper = function () {
        var el = document.createElement('div');
        el.className = dom_1.cls('layer-datepicker');
        return el;
    };
    DatePickerEditor.prototype.createInputElement = function () {
        var inputEl = document.createElement('input');
        inputEl.className = dom_1.cls('content-text');
        inputEl.type = 'text';
        return inputEl;
    };
    DatePickerEditor.prototype.createCalendarWrapper = function () {
        var calendarWrapper = document.createElement('div');
        calendarWrapper.style.marginTop = '-4px';
        this.el.appendChild(calendarWrapper);
        return calendarWrapper;
    };
    DatePickerEditor.prototype.createIcon = function () {
        var icon = document.createElement('i');
        icon.className = dom_1.cls('date-icon');
        return icon;
    };
    DatePickerEditor.prototype.getElement = function () {
        return this.el;
    };
    DatePickerEditor.prototype.getValue = function () {
        return this.inputEl.value;
    };
    DatePickerEditor.prototype.mounted = function () {
        this.inputEl.select();
        this.datePickerEl.open();
    };
    DatePickerEditor.prototype.beforeDestroy = function () {
        this.datePickerEl.destroy();
    };
    return DatePickerEditor;
}());
exports.DatePickerEditor = DatePickerEditor;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(2);
var RowHeaderInputRenderer = /** @class */ (function () {
    function RowHeaderInputRenderer(props) {
        var el = document.createElement('div');
        var input = document.createElement('input');
        var grid = props.grid, rowKey = props.rowKey, disabled = props.disabled, allDisabled = props.allDisabled;
        el.className = dom_1.cls('row-header-checkbox');
        input.type = 'checkbox';
        input.name = '_checked';
        input.disabled = allDisabled || disabled;
        input.addEventListener('change', function () {
            if (input.checked) {
                grid.check(rowKey);
            }
            else {
                grid.uncheck(rowKey);
            }
        });
        el.appendChild(input);
        this.el = el;
        this.input = input;
        this.render(props);
    }
    RowHeaderInputRenderer.prototype.getElement = function () {
        return this.el;
    };
    RowHeaderInputRenderer.prototype.render = function (props) {
        var value = props.value, allDisabled = props.allDisabled, disabled = props.disabled;
        this.input.checked = Boolean(value);
        this.input.disabled = allDisabled || disabled;
    };
    return RowHeaderInputRenderer;
}());
exports.RowHeaderInputRenderer = RowHeaderInputRenderer;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
function create(_a) {
    var column = _a.column, _b = _a.width, width = _b === void 0 ? 'auto' : _b, domWidth = _a.domWidth, _c = _a.rowHeight, rowHeight = _c === void 0 ? 40 : _c, _d = _a.bodyHeight, bodyHeight = _d === void 0 ? 'auto' : _d, _e = _a.minRowHeight, minRowHeight = _e === void 0 ? 40 : _e, _f = _a.minBodyHeight, minBodyHeight = _f === void 0 ? 130 : _f, _g = _a.frozenBorderWidth, frozenBorderWidth = _g === void 0 ? 1 : _g, _h = _a.heightResizable, heightResizable = _h === void 0 ? false : _h, _j = _a.scrollX, scrollX = _j === void 0 ? true : _j, _k = _a.scrollY, scrollY = _k === void 0 ? true : _k, _l = _a.summaryHeight, summaryHeight = _l === void 0 ? 0 : _l, _m = _a.summaryPosition, summaryPosition = _m === void 0 ? 'bottom' : _m, _o = _a.headerHeight, headerHeight = _o === void 0 ? 40 : _o;
    var bodyHeightVal = typeof bodyHeight === 'number' ? bodyHeight : 0;
    return observable_1.observable({
        offsetLeft: 0,
        offsetTop: 0,
        width: width === 'auto' ? domWidth : width,
        autoWidth: width === 'auto',
        minBodyHeight: minBodyHeight,
        bodyHeight: Math.max(bodyHeightVal, minBodyHeight),
        autoHeight: bodyHeight === 'auto',
        heightResizable: heightResizable,
        fitToParentHeight: bodyHeight === 'fitToParent',
        minRowHeight: minRowHeight,
        rowHeight: common_1.isNumber(rowHeight) ? Math.max(rowHeight, minRowHeight) : minRowHeight,
        autoRowHeight: rowHeight === 'auto',
        scrollX: scrollX,
        scrollY: scrollY,
        summaryHeight: summaryHeight,
        summaryPosition: summaryPosition,
        headerHeight: headerHeight,
        scrollbarWidth: 17,
        tableBorderWidth: 1,
        cellBorderWidth: 1,
        get scrollYWidth() {
            return this.scrollY ? this.scrollbarWidth : 0;
        },
        get scrollXHeight() {
            return this.scrollX ? this.scrollbarWidth : 0;
        },
        get frozenBorderWidth() {
            var visibleColumnsBySide = column.visibleColumnsBySide;
            var visibleLeftColumnCount = visibleColumnsBySide.L.length;
            return visibleLeftColumnCount > 0 ? frozenBorderWidth : 0;
        },
        get contentsWidth() {
            var columnLen = column.visibleColumnsWithRowHeader.length;
            var totalBorderWidth = columnLen * this.cellBorderWidth;
            return this.width - this.scrollYWidth - this.frozenBorderWidth - totalBorderWidth;
        }
    });
}
exports.create = create;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var rowSpan_1 = __webpack_require__(9);
function findIndexByPosition(offsets, position) {
    var rowOffset = common_1.findIndex(function (offset) { return offset > position; }, offsets);
    return rowOffset === -1 ? offsets.length - 1 : rowOffset - 1;
}
function calculateRange(scrollPos, totalSize, offsets, data, rowCalculation) {
    // safari uses negative scroll position for bouncing effect
    scrollPos = Math.max(scrollPos, 0);
    var start = findIndexByPosition(offsets, scrollPos);
    var end = findIndexByPosition(offsets, scrollPos + totalSize) + 1;
    var rawData = data.rawData, sortState = data.sortState, pageOptions = data.pageOptions, pageRowRange = data.pageRowRange;
    if (rowCalculation && pageOptions.useClient) {
        start = pageRowRange[0], end = pageRowRange[1];
    }
    if (rawData.length && rowCalculation && rowSpan_1.isRowSpanEnabled(sortState)) {
        var maxRowSpanCount = rowSpan_1.getMaxRowSpanCount(start, rawData);
        var topRowSpanIndex = start - maxRowSpanCount;
        return [topRowSpanIndex >= 0 ? topRowSpanIndex : 0, end];
    }
    return [start, end];
}
function getCachedRange(cachedRange, newRange) {
    if (cachedRange && common_1.arrayEqual(cachedRange, newRange)) {
        return cachedRange;
    }
    return newRange;
}
function create(_a) {
    var data = _a.data, column = _a.column, dimension = _a.dimension, rowCoords = _a.rowCoords, columnCoords = _a.columnCoords, showDummyRows = _a.showDummyRows;
    return observable_1.observable({
        scrollLeft: 0,
        scrollTop: 0,
        scrollPixelScale: 40,
        get maxScrollLeft() {
            var scrollbarWidth = dimension.scrollbarWidth, cellBorderWidth = dimension.cellBorderWidth;
            var areaWidth = columnCoords.areaWidth, widths = columnCoords.widths;
            var totalRWidth = 0;
            widths.R.forEach(function (width) {
                totalRWidth += width + cellBorderWidth;
            });
            return totalRWidth - areaWidth.R + scrollbarWidth;
        },
        get maxScrollTop() {
            var bodyHeight = dimension.bodyHeight, scrollbarWidth = dimension.scrollbarWidth;
            var totalRowHeight = rowCoords.totalRowHeight;
            return totalRowHeight - bodyHeight + scrollbarWidth;
        },
        // only for right side columns
        get colRange() {
            var range = calculateRange(this.scrollLeft, columnCoords.areaWidth.R, columnCoords.offsets.R, data);
            return getCachedRange(this.__storage__.colRange, range);
        },
        // only for right side columns
        get columns() {
            var _a;
            return (_a = column.visibleColumnsBySideWithRowHeader.R).slice.apply(_a, this.colRange);
        },
        get offsetLeft() {
            return columnCoords.offsets.R[this.colRange[0]];
        },
        get rowRange() {
            var range = calculateRange(this.scrollTop, dimension.bodyHeight, rowCoords.offsets, data, true);
            return getCachedRange(this.__storage__.rowRange, range);
        },
        get rows() {
            var _a;
            return (_a = data.filteredViewData).slice.apply(_a, this.rowRange);
        },
        get offsetTop() {
            return rowCoords.offsets[this.rowRange[0] - data.pageRowRange[0]];
        },
        get dummyRowCount() {
            var rowHeight = dimension.rowHeight, bodyHeight = dimension.bodyHeight, scrollXHeight = dimension.scrollXHeight, cellBorderWidth = dimension.cellBorderWidth;
            var totalRowHeight = rowCoords.totalRowHeight;
            var adjustedRowHeight = rowHeight + cellBorderWidth;
            var adjustedBodyHeight = bodyHeight - scrollXHeight;
            if (showDummyRows && totalRowHeight < adjustedBodyHeight) {
                return Math.ceil((adjustedBodyHeight - totalRowHeight) / adjustedRowHeight) + 1;
            }
            return 0;
        }
    });
}
exports.create = create;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
function distributeExtraWidthEqually(extraWidth, targetIdxes, widths) {
    var targetLen = targetIdxes.length;
    var avgValue = Math.round(extraWidth / targetLen);
    var errorValue = avgValue * targetLen - extraWidth; // to correct total width
    var result = widths.slice();
    targetIdxes.forEach(function (idx) {
        result[idx] += avgValue;
    });
    if (targetLen) {
        result[targetIdxes[targetLen - 1]] -= errorValue;
    }
    return result;
}
function fillEmptyWidth(contentWidth, widths) {
    var remainTotalWidth = contentWidth - common_1.sum(widths);
    var emptyIndexes = common_1.findIndexes(function (width) { return !width; }, widths);
    return distributeExtraWidthEqually(remainTotalWidth, emptyIndexes, widths);
}
function applyMinimumWidth(minWidths, widths) {
    return widths.map(function (width, index) { return Math.max(width, minWidths[index]); });
}
function reduceExcessColumnWidthSub(totalRemainWidth, availableList, widths) {
    var avgValue = Math.round(totalRemainWidth / availableList.length);
    var newAvailableList = [];
    availableList.forEach(function (_a) {
        var index = _a[0], width = _a[1];
        // note that totalRemainWidth and avgValue are negative number.
        if (width < Math.abs(avgValue)) {
            totalRemainWidth += width;
            widths[index] -= width;
        }
        else {
            newAvailableList.push([index, width]);
        }
    });
    // call recursively until all available width are less than average
    if (availableList.length > newAvailableList.length) {
        return reduceExcessColumnWidthSub(totalRemainWidth, newAvailableList, widths);
    }
    var columnIndexes = availableList.map(function (_a) {
        var index = _a[0];
        return index;
    });
    return distributeExtraWidthEqually(totalRemainWidth, columnIndexes, widths);
}
function adjustWidths(minWidths, fixedFlags, availableWidth, fitToReducedTotal, widths) {
    var columnLength = widths.length;
    var totalExtraWidth = availableWidth - common_1.sum(widths);
    var fixedCount = fixedFlags.filter(Boolean).length;
    var fixedIndexes = common_1.findIndexes(function (v) { return !v; }, fixedFlags);
    if (totalExtraWidth > 0 && columnLength > fixedCount) {
        return distributeExtraWidthEqually(totalExtraWidth, fixedIndexes, widths);
    }
    if (fitToReducedTotal && totalExtraWidth < 0) {
        var availableWidthInfos = fixedIndexes.map(function (index) { return [index, widths[index] - minWidths[index]]; });
        return reduceExcessColumnWidthSub(totalExtraWidth, availableWidthInfos, widths);
    }
    return widths;
}
function calculateWidths(columns, cellBorderWidth, contentsWidth) {
    var baseWidths = columns.map(function (_a) {
        var baseWidth = _a.baseWidth;
        return (baseWidth ? baseWidth - cellBorderWidth : 0);
    });
    var minWidths = columns.map(function (_a) {
        var minWidth = _a.minWidth;
        return minWidth - cellBorderWidth;
    });
    var fixedFlags = common_1.mapProp('fixedWidth', columns);
    return common_1.pipe(baseWidths, fillEmptyWidth.bind(null, contentsWidth), applyMinimumWidth.bind(null, minWidths), adjustWidths.bind(null, minWidths, fixedFlags, contentsWidth, true));
}
function calculateOffsets(widths, borderWidth) {
    var offsets = [0];
    for (var i = 1, len = widths.length; i < len; i += 1) {
        offsets[i] = offsets[i - 1] + widths[i - 1] + borderWidth;
    }
    return offsets;
}
function create(_a) {
    var column = _a.column, dimension = _a.dimension;
    return observable_1.observable({
        get widths() {
            var visibleColumnsWithRowHeader = column.visibleColumnsWithRowHeader, visibleFrozenCount = column.visibleFrozenCount;
            var widths = calculateWidths(visibleColumnsWithRowHeader, dimension.cellBorderWidth, dimension.contentsWidth);
            return {
                L: widths.slice(0, visibleFrozenCount),
                R: widths.slice(visibleFrozenCount)
            };
        },
        get offsets() {
            return {
                L: calculateOffsets(this.widths.L, dimension.cellBorderWidth),
                R: calculateOffsets(this.widths.R, dimension.cellBorderWidth)
            };
        },
        get areaWidth() {
            var visibleFrozenCount = column.visibleFrozenCount;
            var width = dimension.width, frozenBorderWidth = dimension.frozenBorderWidth, cellBorderWidth = dimension.cellBorderWidth;
            var leftAreaWidth = 0;
            if (visibleFrozenCount) {
                var leftBorderWidth = (visibleFrozenCount + 1) * cellBorderWidth;
                leftAreaWidth = common_1.sum(this.widths.L) + leftBorderWidth;
            }
            return {
                L: leftAreaWidth - frozenBorderWidth,
                R: width - leftAreaWidth
            };
        },
        get totalColumnWidth() {
            return {
                L: common_1.last(this.offsets.L) + common_1.last(this.widths.L),
                R: common_1.last(this.offsets.R) + common_1.last(this.widths.R)
            };
        }
    });
}
exports.create = create;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var data_1 = __webpack_require__(6);
function create(_a) {
    var _b;
    var data = _a.data, dimension = _a.dimension;
    var rowHeight = dimension.rowHeight;
    var pageOptions = data.pageOptions, pageRowRange = data.pageRowRange;
    return observable_1.observable({
        heights: pageOptions.useClient
            ? (_b = data.filteredRawData).slice.apply(_b, pageRowRange).map(function (row) { return data_1.getRowHeight(row, rowHeight); })
            : data.filteredRawData.map(function (row) { return data_1.getRowHeight(row, rowHeight); }),
        get offsets() {
            var offsets = [0];
            var heights = this.heights;
            for (var i = 1, len = heights.length; i < len; i += 1) {
                offsets[i] = offsets[i - 1] + heights[i - 1];
            }
            return offsets;
        },
        get totalRowHeight() {
            return this.heights.length ? common_1.last(this.offsets) + common_1.last(this.heights) : 0;
        }
    });
}
exports.create = create;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(5);
var common_1 = __webpack_require__(0);
var rowSpan_1 = __webpack_require__(9);
var data_1 = __webpack_require__(6);
function create(_a) {
    var column = _a.column, data = _a.data, rowCoords = _a.rowCoords, columnCoords = _a.columnCoords, editingEvent = _a.editingEvent, tabMode = _a.tabMode, id = _a.id;
    return observable_1.observable({
        rowKey: null,
        columnName: null,
        prevRowKey: null,
        prevColumnName: null,
        editingAddress: null,
        editingEvent: editingEvent,
        navigating: false,
        forcedDestroyEditing: false,
        tabMode: tabMode,
        get side() {
            if (this.columnName === null) {
                return null;
            }
            return common_1.someProp('name', this.columnName, column.visibleColumnsBySideWithRowHeader.R)
                ? 'R'
                : 'L';
        },
        get columnIndex() {
            var _a = this, columnName = _a.columnName, side = _a.side;
            return columnName === null || side === null
                ? null
                : common_1.findPropIndex('name', columnName, column.visibleColumnsBySideWithRowHeader[side]);
        },
        get totalColumnIndex() {
            var visibleColumnsBySideWithRowHeader = column.visibleColumnsBySideWithRowHeader;
            var _a = this, columnIndex = _a.columnIndex, side = _a.side;
            if (columnIndex === null) {
                return columnIndex;
            }
            return side === 'R' ? columnIndex + visibleColumnsBySideWithRowHeader.L.length : columnIndex;
        },
        get rowIndex() {
            var rowKey = this.rowKey;
            return rowKey === null ? null : data_1.findIndexByRowKey(data, column, id, rowKey);
        },
        get originalRowIndex() {
            var rowIndex = this.rowIndex;
            var pageOptions = data.pageOptions;
            if (rowIndex === null) {
                return null;
            }
            if (!common_1.isEmpty(pageOptions)) {
                var perPage = pageOptions.perPage, page = pageOptions.page;
                return rowIndex + (page - 1) * perPage;
            }
            return rowIndex;
        },
        get cellPosRect() {
            var _a = this, columnIndex = _a.columnIndex, rowIndex = _a.rowIndex, side = _a.side, columnName = _a.columnName, rowKey = _a.rowKey;
            var filteredRawData = data.filteredRawData, sortState = data.sortState;
            if (columnIndex === null || rowIndex === null || side === null || columnName === null) {
                return null;
            }
            var left = columnCoords.offsets[side][columnIndex];
            var right = left + columnCoords.widths[side][columnIndex];
            var top = rowCoords.offsets[rowIndex];
            var bottom = top + rowCoords.heights[rowIndex];
            var rowSpan = rowSpan_1.getRowSpanByRowKey(rowKey, columnName, filteredRawData);
            if (rowSpan_1.isRowSpanEnabled(sortState) && rowSpan) {
                var verticalPos = rowSpan_1.getVerticalPosWithRowSpan(columnName, rowSpan, rowCoords, filteredRawData);
                return { left: left, right: right, top: verticalPos[0], bottom: verticalPos[1] };
            }
            return { left: left, right: right, top: top, bottom: bottom };
        }
    });
}
exports.create = create;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var observable_1 = __webpack_require__(5);
var selection_1 = __webpack_require__(12);
var common_1 = __webpack_require__(0);
function getOwnSideColumnRange(columnRange, side, visibleFrozenCount) {
    var _a = columnRange.map(function (columnIdx) { return columnIdx; }), start = _a[0], end = _a[1];
    if (side === 'L' && start < visibleFrozenCount) {
        return [start, Math.min(end, visibleFrozenCount - 1)];
    }
    if (side === 'R' && end >= visibleFrozenCount) {
        return [Math.max(start, visibleFrozenCount) - visibleFrozenCount, end - visibleFrozenCount];
    }
    return null;
}
function getVerticalStyles(rowRange, rowOffsets, rowHeights) {
    var top = rowOffsets[rowRange[0]];
    var bottom = rowOffsets[rowRange[1]] + rowHeights[rowRange[1]];
    return { top: top, height: bottom - top };
}
function getHorizontalStyles(columnRange, columnWidths, side, cellBorderWidth) {
    var left = 0;
    var width = 0;
    if (!columnRange) {
        return { left: left, width: width };
    }
    var widths = columnWidths[side];
    var startIndex = columnRange[0];
    var endIndex = Math.min(columnRange[1], widths.length - 1);
    for (var i = 0; i <= endIndex; i += 1) {
        if (i < startIndex) {
            left += widths[i] + cellBorderWidth;
        }
        else {
            width += widths[i] + cellBorderWidth;
        }
    }
    width -= cellBorderWidth;
    return { left: left, width: width };
}
function create(_a) {
    var selectionUnit = _a.selectionUnit, rowCoords = _a.rowCoords, columnCoords = _a.columnCoords, columnInfo = _a.column, dimension = _a.dimension, data = _a.data;
    return observable_1.observable({
        inputRange: null,
        unit: selectionUnit,
        type: 'cell',
        intervalIdForAutoScroll: null,
        get range() {
            if (!this.inputRange) {
                return null;
            }
            var columnWidths = columnCoords.widths;
            var row = selection_1.getSortedRange(this.inputRange.row);
            var column = selection_1.getSortedRange(this.inputRange.column);
            if (this.unit === 'row') {
                var endColumnIndex = columnWidths.L.length + columnWidths.R.length - 1;
                column = [0, endColumnIndex];
            }
            return { row: row, column: column };
        },
        get rangeBySide() {
            if (!this.range) {
                return null;
            }
            var visibleFrozenCount = columnInfo.visibleFrozenCount;
            var _a = this.range, column = _a.column, row = _a.row;
            return {
                L: { row: row, column: getOwnSideColumnRange(column, 'L', visibleFrozenCount) },
                R: { row: row, column: getOwnSideColumnRange(column, 'R', visibleFrozenCount) }
            };
        },
        get rangeAreaInfo() {
            if (!this.rangeBySide) {
                return null;
            }
            var cellBorderWidth = dimension.cellBorderWidth;
            var rowOffsets = rowCoords.offsets, rowHeights = rowCoords.heights;
            var columnWidths = columnCoords.widths;
            var _a = this.rangeBySide, leftRange = _a.L, rightRange = _a.R;
            var leftSideStyles = null;
            var rightSideStyles = null;
            if (leftRange.column) {
                leftSideStyles = tslib_1.__assign({}, getVerticalStyles(leftRange.row, rowOffsets, rowHeights), getHorizontalStyles(leftRange.column, columnWidths, 'L', cellBorderWidth));
            }
            if (rightRange.column) {
                rightSideStyles = tslib_1.__assign({}, getVerticalStyles(rightRange.row, rowOffsets, rowHeights), getHorizontalStyles(rightRange.column, columnWidths, 'R', cellBorderWidth));
            }
            return {
                L: leftSideStyles,
                R: rightSideStyles
            };
        },
        get rangeWithRowHeader() {
            if (!this.range) {
                return null;
            }
            var rowHeaderCount = columnInfo.rowHeaderCount;
            var _a = this.range, row = _a.row, column = _a.column;
            var columnStartIndex = Math.max(column[0] - rowHeaderCount, 0);
            var columnEndIndex = Math.max(column[1] - rowHeaderCount, 0);
            return {
                row: row,
                column: [columnStartIndex, columnEndIndex]
            };
        },
        get originalRange() {
            if (!this.range) {
                return null;
            }
            var pageOptions = data.pageOptions;
            var _a = this.range, row = _a.row, column = _a.column;
            if (!common_1.isEmpty(pageOptions)) {
                var perPage = pageOptions.perPage, page = pageOptions.page;
                var prevPageRowCount = perPage * (page - 1);
                return {
                    row: [row[0] + prevPageRowCount, row[1] + prevPageRowCount],
                    column: column
                };
            }
            return this.range;
        }
    });
}
exports.create = create;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function create() {
    return { hoveredRowKey: null, cellHeightMap: {} };
}
exports.create = create;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(5);
function create() {
    return observable_1.observable({ activeColumnAddress: null, activeFilterState: null });
}
exports.create = create;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFocusedCell(focus, rowKey, columnName) {
    return rowKey === focus.rowKey && columnName === focus.columnName;
}
exports.isFocusedCell = isFocusedCell;
function isEditingCell(focus, rowKey, columnName) {
    var editingAddress = focus.editingAddress;
    return !!(editingAddress &&
        editingAddress.rowKey === rowKey &&
        editingAddress.columnName === columnName);
}
exports.isEditingCell = isEditingCell;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(3);
function forceSyncRendering(fn) {
    preact_1.options.debounceRendering = function (f) { return f(); };
    fn();
    delete preact_1.options.debounceRendering;
}
exports.forceSyncRendering = forceSyncRendering;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
function compare(valueA, valueB) {
    var isBlankA = common_1.isBlank(valueA);
    var isBlankB = common_1.isBlank(valueB);
    var numberA = common_1.convertToNumber(valueA);
    var numberB = common_1.convertToNumber(valueB);
    var result = 0;
    if (isBlankA && !isBlankB) {
        result = -1;
    }
    else if (!isBlankA && isBlankB) {
        result = 1;
    }
    else if (numberA < numberB) {
        result = -1;
    }
    else if (numberA > numberB) {
        result = 1;
    }
    return result;
}
exports.compare = compare;
function getComparators(columns) {
    var comparators = [];
    columns.forEach(function (column) {
        var columnName = column.columnName, ascending = column.ascending;
        comparators.push({
            name: columnName,
            comparator: ascending
                ? compare
                : function (valueA, valueB) { return -compare(valueA, valueB); }
        });
    });
    return comparators;
}
function sortRawData(columns) {
    var comparators = getComparators(columns);
    return function (rowA, rowB) {
        for (var _i = 0, comparators_1 = comparators; _i < comparators_1.length; _i++) {
            var _a = comparators_1[_i], columnName = _a.name, comparator = _a.comparator;
            var result = 0;
            result = comparator(rowA[columnName], rowB[columnName]);
            if (result) {
                return result;
            }
        }
        return 0;
    };
}
exports.sortRawData = sortRawData;
function sortViewData(columns) {
    var comparators = getComparators(columns);
    return function (rowA, rowB) {
        for (var _i = 0, comparators_2 = comparators; _i < comparators_2.length; _i++) {
            var _a = comparators_2[_i], columnName = _a.name, comparator = _a.comparator;
            var result = 0;
            var valueA = columnName === 'sortKey' ? rowA.sortKey : rowA.valueMap[columnName].value;
            var valueB = columnName === 'sortKey' ? rowB.sortKey : rowB.valueMap[columnName].value;
            result = comparator(valueA, valueB);
            if (result) {
                return result;
            }
        }
        return 0;
    };
}
exports.sortViewData = sortViewData;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getHorizontalScrollPosition(rightSideWidth, cellPosRect, scrollLeft, tableBorderWidth) {
    var left = cellPosRect.left, right = cellPosRect.right;
    if (left < scrollLeft) {
        return left;
    }
    if (right > scrollLeft + rightSideWidth - tableBorderWidth) {
        return right - rightSideWidth + tableBorderWidth;
    }
    return null;
}
function getVerticalScrollPosition(height, cellPosRect, scrollTop, tableBorderWidth) {
    var top = cellPosRect.top, bottom = cellPosRect.bottom;
    if (top < scrollTop) {
        return top + tableBorderWidth;
    }
    if (bottom > scrollTop + height) {
        return bottom - height + tableBorderWidth;
    }
    return null;
}
function getChangedScrollPosition(store, side, changedCellPosRect) {
    var _a = store.dimension, bodyHeight = _a.bodyHeight, scrollXHeight = _a.scrollXHeight, scrollYWidth = _a.scrollYWidth, tableBorderWidth = _a.tableBorderWidth, areaWidth = store.columnCoords.areaWidth, focusedCellPostRect = store.focus.cellPosRect, viewport = store.viewport;
    var scrollLeft = viewport.scrollLeft, scrollTop = viewport.scrollTop;
    var cellPosRect = changedCellPosRect || focusedCellPostRect;
    var changedScrollLeft = side === 'R'
        ? getHorizontalScrollPosition(areaWidth.R - scrollYWidth, cellPosRect, scrollLeft, tableBorderWidth)
        : null;
    var changedScrollTop = getVerticalScrollPosition(bodyHeight - scrollXHeight, cellPosRect, scrollTop, tableBorderWidth);
    return [changedScrollLeft, changedScrollTop];
}
exports.getChangedScrollPosition = getChangedScrollPosition;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var container_1 = __webpack_require__(76);
var gridEvent_1 = tslib_1.__importDefault(__webpack_require__(11));
var common_1 = __webpack_require__(0);
var instance_1 = __webpack_require__(7);
var Root = /** @class */ (function (_super) {
    tslib_1.__extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.getChildContext = function () {
        return {
            store: this.props.store,
            dispatch: this.props.dispatch
        };
    };
    Root.prototype.componentDidMount = function () {
        var _a = this.props, onGridMounted = _a.onGridMounted, store = _a.store;
        var gridEvent = new gridEvent_1.default();
        gridEvent.setInstance(instance_1.getInstance(store.id));
        if (common_1.isFunction(onGridMounted)) {
            setTimeout(function () {
                /**
                 * Occurs when the grid is mounted on DOM
                 * @event Grid#onGridMounted
                 * @property {Grid} instance - Current grid instance
                 */
                onGridMounted(gridEvent);
            });
        }
    };
    Root.prototype.componentWillUnmount = function () {
        var _a = this.props, onGridBeforeDestroy = _a.onGridBeforeDestroy, store = _a.store;
        var gridEvent = new gridEvent_1.default();
        gridEvent.setInstance(instance_1.getInstance(store.id));
        if (common_1.isFunction(onGridBeforeDestroy)) {
            /**
             * Occurs before the grid is detached from DOM
             * @event Grid#onGridBeforeDestroy
             * @property {Grid} instance - Current grid instance
             */
            onGridBeforeDestroy(gridEvent);
        }
    };
    Root.prototype.render = function () {
        return preact_1.h(container_1.Container, { rootElement: this.props.rootElement });
    };
    return Root;
}(preact_1.Component));
exports.Root = Root;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var leftSide_1 = __webpack_require__(77);
var rightSide_1 = __webpack_require__(91);
var stateLayer_1 = __webpack_require__(92);
var editingLayer_1 = __webpack_require__(93);
var filterLayer_1 = __webpack_require__(95);
var heightResizeHandle_1 = __webpack_require__(101);
var clipboard_1 = __webpack_require__(102);
var pagination_1 = __webpack_require__(103);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var eventBus_1 = __webpack_require__(10);
var gridEvent_1 = tslib_1.__importDefault(__webpack_require__(11));
var browser_1 = __webpack_require__(45);
var common_1 = __webpack_require__(0);
var keyboard_1 = __webpack_require__(18);
var DOUBLE_TAP_DURATION = 200;
var TAP_THRESHOLD = 10;
var ContainerComp = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerComp, _super);
    function ContainerComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchEvent = {
            start: false,
            move: false,
            eventInfo: {
                pageX: -1,
                pageY: -1,
                timestamp: 0
            }
        };
        _this.handleTouchStart = function () {
            if (!_this.el || !browser_1.isMobile()) {
                return;
            }
            _this.touchEvent.start = true;
        };
        _this.handleTouchMove = function () {
            if (!_this.el || !browser_1.isMobile() || !_this.touchEvent.start) {
                return;
            }
            _this.touchEvent.move = true;
        };
        _this.getCellRowKey = function (elem) {
            var address = dom_1.getCellAddress(elem);
            if (address) {
                return address.rowKey;
            }
            return null;
        };
        _this.handleTouchEnd = function (event) {
            if (!_this.el || !browser_1.isMobile()) {
                return;
            }
            var timeStamp = event.timeStamp;
            var _a = event.changedTouches[0], pageX = _a.pageX, pageY = _a.pageY;
            var _b = _this.touchEvent, eventInfo = _b.eventInfo, start = _b.start, move = _b.move;
            if (start && !move) {
                var prevPageX = eventInfo.pageX, prevPageY = eventInfo.pageY, prevTimestamp = eventInfo.timestamp;
                if (timeStamp - prevTimestamp <= DOUBLE_TAP_DURATION) {
                    if (Math.abs(prevPageX - pageX) <= TAP_THRESHOLD &&
                        Math.abs(prevPageY - pageY) <= TAP_THRESHOLD) {
                        _this.startEditing(event.target);
                    }
                }
                else {
                    eventInfo.pageX = pageX;
                    eventInfo.pageY = pageY;
                    eventInfo.timestamp = timeStamp;
                }
            }
            _this.touchEvent.start = false;
            _this.touchEvent.move = false;
        };
        _this.handleMouseover = function (event) {
            var _a = _this.props, eventBus = _a.eventBus, dispatch = _a.dispatch, hoveredRowKey = _a.hoveredRowKey;
            var gridEvent = new gridEvent_1.default({ event: event });
            var rowKey = _this.getCellRowKey(event.target);
            if (!common_1.isNull(rowKey)) {
                dispatch('removeRowClassName', hoveredRowKey, dom_1.cls('row-hover'));
                if (hoveredRowKey !== rowKey) {
                    dispatch('setHoveredRowKey', rowKey);
                    dispatch('addRowClassName', rowKey, dom_1.cls('row-hover'));
                }
            }
            /**
             * Occurs when a mouse pointer is moved onto the Grid.
             * The properties of the event object include the native MouseEvent object.
             * @event Grid#mouseover
             * @property {Event} nativeEvent - Event object
             * @property {string} targetType - Type of event target
             * @property {number} rowKey - rowKey of the target cell
             * @property {string} columnName - columnName of the target cell
             * @property {Grid} instance - Current grid instance
             */
            eventBus.trigger('mouseover', gridEvent);
        };
        _this.handleClick = function (event) {
            var _a = _this.props, eventBus = _a.eventBus, editingEvent = _a.editingEvent;
            var gridEvent = new gridEvent_1.default({ event: event });
            /**
             * Occurs when a mouse button is clicked on the Grid.
             * The properties of the event object include the native event object.
             * @event Grid#click
             * @property {Event} nativeEvent - Event object
             * @property {string} targetType - Type of event target
             * @property {number} rowKey - rowKey of the target cell
             * @property {string} columnName - columnName of the target cell
             * @property {Grid} instance - Current grid instance
             */
            eventBus.trigger('click', gridEvent);
            if (!gridEvent.isStopped() && editingEvent === 'click') {
                _this.startEditing(event.target);
            }
        };
        _this.handleMouseout = function (event) {
            var _a = _this.props, eventBus = _a.eventBus, dispatch = _a.dispatch, hoveredRowKey = _a.hoveredRowKey;
            var gridEvent = new gridEvent_1.default({ event: event });
            if (!common_1.isNull(hoveredRowKey)) {
                dispatch('removeRowClassName', hoveredRowKey, dom_1.cls('row-hover'));
                dispatch('setHoveredRowKey', null);
            }
            /**
             * Occurs when a mouse pointer is moved off from the Grid.
             * The event object has all properties copied from the native MouseEvent.
             * @event Grid#mouseout
             * @property {Event} nativeEvent - Event object
             * @property {string} targetType - Type of event target
             * @property {number | string} rowKey - rowKey of the target cell
             * @property {string} columnName - columnName of the target cell
             * @property {Grid} instance - Current grid instance
             */
            eventBus.trigger('mouseout', gridEvent);
        };
        _this.handleMouseDown = function (event) {
            if (!_this.el) {
                return;
            }
            var _a = _this.props, dispatch = _a.dispatch, editing = _a.editing, eventBus = _a.eventBus, filtering = _a.filtering;
            var el = _this.el;
            var gridEvent = new gridEvent_1.default({ event: event });
            /**
             * Occurs when a mouse button is downed on the Grid.
             * The event object has all properties copied from the native MouseEvent.
             * @event Grid#mousedown
             * @property {Event} nativeEvent - Event object
             * @property {string} targetType - Type of event target
             * @property {number | string} rowKey - rowKey of the target cell
             * @property {string} columnName - columnName of the target cell
             * @property {Grid} instance - Current grid instance
             */
            eventBus.trigger('mousedown', gridEvent);
            if (!gridEvent.isStopped()) {
                dispatch('setNavigating', true);
                if (!editing && !filtering) {
                    event.preventDefault();
                }
                var _b = el.getBoundingClientRect(), top_1 = _b.top, left = _b.left;
                dispatch('setOffsetTop', top_1 + el.scrollTop);
                dispatch('setOffsetLeft', left + el.scrollLeft);
            }
        };
        _this.handleDblClick = function (event) {
            if (!_this.el || browser_1.isMobile()) {
                return;
            }
            var _a = _this.props, eventBus = _a.eventBus, editingEvent = _a.editingEvent;
            var gridEvent = new gridEvent_1.default({ event: event });
            /**
             * Occurs when a mouse button is double clicked on the Grid.
             * The properties of the event object include the native event object.
             * @event Grid#dblclick
             * @property {Event} nativeEvent - Event object
             * @property {string} targetType - Type of event target
             * @property {number} rowKey - rowKey of the target cell
             * @property {string} columnName - columnName of the target cell
             * @property {Grid} instance - Current grid instance
             */
            eventBus.trigger('dblclick', gridEvent);
            if (!gridEvent.isStopped() && editingEvent === 'dblclick') {
                _this.startEditing(event.target);
            }
        };
        _this.handleDocumentKeyDown = function (ev) {
            var keyName = keyboard_1.keyNameMap[ev.keyCode];
            if (keyName === 'esc') {
                _this.props.dispatch('setActiveColumnAddress', null);
            }
        };
        _this.handleDocumentMouseDown = function (ev) {
            var _a = _this.props, dispatch = _a.dispatch, filtering = _a.filtering;
            if (filtering) {
                var target = ev.target;
                if (!dom_1.findParent(target, 'btn-filter') && !dom_1.findParent(target, 'filter-container')) {
                    dispatch('setActiveColumnAddress', null);
                }
            }
        };
        _this.syncWithDOMWidth = function () {
            _this.props.dispatch('refreshLayout', _this.el, _this.props.rootElement.parentElement);
        };
        return _this;
    }
    ContainerComp.prototype.startEditing = function (eventTarget) {
        var dispatch = this.props.dispatch;
        var address = dom_1.getCellAddress(eventTarget);
        if (address) {
            var rowKey = address.rowKey, columnName = address.columnName;
            dispatch('startEditing', rowKey, columnName);
        }
    };
    ContainerComp.prototype.componentDidMount = function () {
        if (this.props.autoWidth) {
            window.addEventListener('resize', this.syncWithDOMWidth);
            // In Preact, the componentDidMount is called before the DOM elements are actually mounted.
            // https://github.com/preactjs/preact/issues/648
            // Use setTimeout to wait until the DOM element is actually mounted
            window.setTimeout(this.syncWithDOMWidth, 0);
        }
        document.addEventListener('mousedown', this.handleDocumentMouseDown);
        document.addEventListener('keydown', this.handleDocumentKeyDown);
    };
    ContainerComp.prototype.componentWillUnmount = function () {
        if (this.props.autoWidth) {
            window.removeEventListener('resize', this.syncWithDOMWidth);
        }
    };
    ContainerComp.prototype.shouldComponentUpdate = function (nextProps) {
        if (this.props.autoWidth && nextProps.autoWidth) {
            return false;
        }
        return true;
    };
    ContainerComp.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, summaryHeight = _b.summaryHeight, summaryPosition = _b.summaryPosition, heightResizable = _b.heightResizable, gridId = _b.gridId, width = _b.width, autoWidth = _b.autoWidth, scrollXHeight = _b.scrollXHeight, showLeftSide = _b.showLeftSide, scrollX = _b.scrollX, scrollY = _b.scrollY;
        var style = { width: autoWidth ? '100%' : width };
        var attrs = (_a = {}, _a[dom_1.dataAttr.GRID_ID] = gridId, _a);
        return (preact_1.h("div", tslib_1.__assign({}, attrs, { style: style, class: dom_1.cls('container', [showLeftSide, 'show-lside-area']), onMouseDown: this.handleMouseDown, onDblClick: this.handleDblClick, onClick: this.handleClick, onMouseOut: this.handleMouseout, onMouseOver: this.handleMouseover, onTouchStart: this.handleTouchStart, onTouchMove: this.handleTouchMove, onTouchEnd: this.handleTouchEnd, ref: function (el) {
                _this.el = el;
            } }),
            preact_1.h("div", { class: dom_1.cls('content-area', [!!summaryHeight, summaryPosition === 'top' ? 'has-summary-top' : 'has-summary-bottom'], [!scrollX, 'no-scroll-x'], [!scrollY, 'no-scroll-y']) },
                preact_1.h(leftSide_1.LeftSide, null),
                preact_1.h(rightSide_1.RightSide, null),
                preact_1.h("div", { class: dom_1.cls('border-line', 'border-line-top') }),
                preact_1.h("div", { class: dom_1.cls('border-line', 'border-line-left') }),
                preact_1.h("div", { class: dom_1.cls('border-line', 'border-line-right') }),
                preact_1.h("div", { class: dom_1.cls('border-line', 'border-line-bottom'), style: { bottom: scrollXHeight } })),
            heightResizable && preact_1.h(heightResizeHandle_1.HeightResizeHandle, null),
            preact_1.h(stateLayer_1.StateLayer, null),
            preact_1.h(editingLayer_1.EditingLayer, null),
            preact_1.h(clipboard_1.Clipboard, null),
            preact_1.h(pagination_1.Pagination, null),
            preact_1.h(filterLayer_1.FilterLayer, null)));
    };
    return ContainerComp;
}(preact_1.Component));
exports.ContainerComp = ContainerComp;
exports.Container = hoc_1.connect(function (_a) {
    var id = _a.id, dimension = _a.dimension, focus = _a.focus, columnCoords = _a.columnCoords, data = _a.data, filterLayerState = _a.filterLayerState, renderState = _a.renderState;
    return ({
        gridId: id,
        width: dimension.width,
        autoWidth: dimension.autoWidth,
        editing: !!focus.editingAddress,
        filtering: !!filterLayerState.activeColumnAddress,
        scrollXHeight: dimension.scrollX ? dimension.scrollbarWidth : 0,
        fitToParentHeight: dimension.fitToParentHeight,
        summaryHeight: dimension.summaryHeight,
        summaryPosition: dimension.summaryPosition,
        heightResizable: dimension.heightResizable,
        showLeftSide: !!columnCoords.areaWidth.L,
        disabled: data.disabled,
        editingEvent: focus.editingEvent,
        viewData: data.viewData,
        eventBus: eventBus_1.getEventBus(id),
        scrollX: dimension.scrollX,
        scrollY: dimension.scrollY,
        hoveredRowKey: renderState.hoveredRowKey
    });
})(ContainerComp);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var headerArea_1 = __webpack_require__(39);
var bodyArea_1 = __webpack_require__(43);
var summaryArea_1 = __webpack_require__(44);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var LeftSideComp = /** @class */ (function (_super) {
    tslib_1.__extends(LeftSideComp, _super);
    function LeftSideComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeftSideComp.prototype.render = function (_a) {
        var width = _a.width, scrollX = _a.scrollX;
        var style = { width: width, display: 'block' };
        var summaryPosition = this.props.summaryPosition;
        return (preact_1.h("div", { class: dom_1.cls('lside-area'), style: style },
            preact_1.h(headerArea_1.HeaderArea, { side: "L" }),
            summaryPosition === 'top' && preact_1.h(summaryArea_1.SummaryArea, { side: "L" }),
            preact_1.h(bodyArea_1.BodyArea, { side: "L" }),
            summaryPosition === 'bottom' && preact_1.h(summaryArea_1.SummaryArea, { side: "L" }),
            scrollX && preact_1.h("div", { class: dom_1.cls('scrollbar-left-bottom') })));
    };
    return LeftSideComp;
}(preact_1.Component));
exports.LeftSide = hoc_1.connect(function (_a) {
    var columnCoords = _a.columnCoords, dimension = _a.dimension;
    return ({
        width: columnCoords.areaWidth.L,
        scrollX: dimension.scrollX,
        summaryPosition: dimension.summaryPosition
    });
})(LeftSideComp);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var WIDTH = 7;
var HALF_WIDTH = 3;
var ColumnResizerComp = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnResizerComp, _super);
    function ColumnResizerComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dragStartX = -1;
        _this.draggingWidth = -1;
        _this.draggingIndex = -1;
        _this.handleMouseDown = function (ev, index) {
            _this.draggingIndex = index;
            _this.draggingWidth = _this.props.widths[index];
            _this.dragStartX = ev.pageX;
            dom_1.setCursorStyle('col-resize');
            document.addEventListener('mousemove', _this.handleMouseMove);
            document.addEventListener('mouseup', _this.clearDocumentEvents);
            document.addEventListener('selectstart', _this.handleSelectStart);
        };
        _this.handleSelectStart = function (ev) {
            ev.preventDefault();
        };
        _this.handleMouseMove = function (ev) {
            var width = _this.draggingWidth + ev.pageX - _this.dragStartX;
            var side = _this.props.side;
            _this.props.dispatch('setColumnWidth', side, _this.draggingIndex, width);
        };
        _this.clearDocumentEvents = function () {
            dom_1.setCursorStyle('');
            document.removeEventListener('mousemove', _this.handleMouseMove);
            document.removeEventListener('mouseup', _this.clearDocumentEvents);
            document.removeEventListener('selectstart', _this.handleSelectStart);
        };
        return _this;
    }
    ColumnResizerComp.prototype.componentWillUnmount = function () {
        this.clearDocumentEvents();
    };
    ColumnResizerComp.prototype.renderHandle = function (index) {
        var _this = this;
        var _a;
        var _b = this.props, columns = _b.columns, offsets = _b.offsets, cellBorderWidth = _b.cellBorderWidth, widths = _b.widths;
        var _c = columns[index], name = _c.name, resizable = _c.resizable;
        if (!resizable) {
            return null;
        }
        var offset = offsets[index];
        var width = widths[index];
        var attrs = (_a = {},
            _a[dom_1.dataAttr.COLUMN_INDEX] = index,
            _a[dom_1.dataAttr.COLUMN_NAME] = name,
            _a);
        return (preact_1.h("div", tslib_1.__assign({ class: dom_1.cls('column-resize-handle'), title: '' }, attrs, { style: {
                height: 33,
                width: WIDTH,
                left: offset + width + cellBorderWidth - HALF_WIDTH
            }, onMouseDown: function (ev) { return _this.handleMouseDown(ev, index); } })));
    };
    ColumnResizerComp.prototype.render = function (_a) {
        var _this = this;
        var columns = _a.columns;
        return (preact_1.h("div", { class: dom_1.cls('column-resize-container'), style: "display: block; margin-top: -35px; height: 35px;" }, columns.map(function (_, index) { return _this.renderHandle(index); })));
    };
    return ColumnResizerComp;
}(preact_1.Component));
exports.ColumnResizer = hoc_1.connect(function (_a, _b) {
    var column = _a.column, columnCoords = _a.columnCoords, dimension = _a.dimension;
    var side = _b.side;
    return ({
        widths: columnCoords.widths[side],
        offsets: columnCoords.offsets[side],
        cellBorderWidth: dimension.cellBorderWidth,
        columns: column.visibleColumnsBySideWithRowHeader[side]
    });
})(ColumnResizerComp);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var dom_1 = __webpack_require__(2);
var column_1 = __webpack_require__(8);
var hoc_1 = __webpack_require__(4);
var common_1 = __webpack_require__(0);
var headerCheckbox_1 = __webpack_require__(40);
var sortingButton_1 = __webpack_require__(41);
var sortingOrder_1 = __webpack_require__(42);
var selection_1 = __webpack_require__(12);
var ComplexHeaderComp = /** @class */ (function (_super) {
    tslib_1.__extends(ComplexHeaderComp, _super);
    function ComplexHeaderComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexHeaderComp.prototype.getColumnHierarchy = function (column, mergedComplexColumns) {
        var _this = this;
        var complexHeaderColumns = this.props.complexHeaderColumns;
        var complexColumns = mergedComplexColumns || [];
        if (column) {
            complexColumns.push(column);
            if (complexHeaderColumns) {
                complexHeaderColumns.forEach(function (complexHeaderColumn) {
                    var childNames = complexHeaderColumn.childNames;
                    if (childNames) {
                        var index = common_1.findIndex(function (name) { return column.name === name; }, childNames);
                        if (index !== -1) {
                            _this.getColumnHierarchy(complexHeaderColumn, complexColumns);
                        }
                    }
                });
            }
        }
        return complexColumns;
    };
    ComplexHeaderComp.prototype.getHierarchyMaxRowCount = function (hierarchies) {
        var lengths = [0].concat(hierarchies.map(function (value) { return value.length; }));
        return Math.max.apply(Math, lengths);
    };
    ComplexHeaderComp.prototype.isSelected = function (name) {
        var _a = this.props, columnSelectionRange = _a.columnSelectionRange, columns = _a.columns, complexHeaderColumns = _a.complexHeaderColumns;
        if (!columnSelectionRange) {
            return false;
        }
        var selectionStart = columnSelectionRange[0], selectionEnd = columnSelectionRange[1];
        var _b = selection_1.getChildColumnRange(columns, complexHeaderColumns, name), columnStart = _b[0], columnEnd = _b[1];
        return (columnStart >= selectionStart &&
            columnStart <= selectionEnd &&
            columnEnd >= selectionStart &&
            columnEnd <= selectionEnd);
    };
    ComplexHeaderComp.prototype.createTableHeaderComponent = function (column, height, colspan, rowspan) {
        var name = column.name, header = column.header, sortable = column.sortable, textAlign = column.headerAlign, verticalAlign = column.headerVAlign, sortingType = column.sortingType;
        return (preact_1.h("th", tslib_1.__assign({ key: name, "data-column-name": name, class: dom_1.cls('cell', 'cell-header', [!column_1.isRowHeader(name) && this.isSelected(name), 'cell-selected'], [column_1.isRowHeader(name), 'cell-row-header']) }, !!colspan && { colspan: colspan }, !!rowspan && { rowspan: rowspan }, { style: { height: height, textAlign: textAlign, verticalAlign: verticalAlign } }),
            column_1.isCheckboxColumn(name) ? preact_1.h(headerCheckbox_1.HeaderCheckbox, null) : header,
            !!sortable && preact_1.h(sortingButton_1.SortingButton, { columnName: name, sortingType: sortingType }),
            !!sortable && preact_1.h(sortingOrder_1.SortingOrder, { columnName: name })));
    };
    ComplexHeaderComp.prototype.render = function () {
        var _this = this;
        var _a = this.props, columns = _a.columns, headerHeight = _a.headerHeight, cellBorderWidth = _a.cellBorderWidth;
        var hierarchies = columns.map(function (column) { return _this.getColumnHierarchy(column).reverse(); });
        var maxRowCount = this.getHierarchyMaxRowCount(hierarchies);
        var rows = new Array(maxRowCount);
        var columnNames = new Array(maxRowCount);
        var colspans = [];
        var rowHeight = (maxRowCount ? Math.floor((headerHeight - 1) / maxRowCount) : 0) - 1;
        var rowspan = 1;
        var height;
        hierarchies.forEach(function (hierarchy, i) {
            var length = hierarchies[i].length;
            var curHeight = 0;
            hierarchy.forEach(function (column, j) {
                var columnName = column.name;
                rowspan = length - 1 === j && maxRowCount - length + 1 > 1 ? maxRowCount - length + 1 : 1;
                height = rowHeight * rowspan;
                if (j === length - 1) {
                    height = headerHeight - curHeight - 2;
                }
                else {
                    curHeight += height + 1;
                }
                if (columnNames[j] === columnName) {
                    rows[j].pop();
                    colspans[j] += 1;
                }
                else {
                    colspans[j] = 1;
                }
                columnNames[j] = columnName;
                rows[j] = rows[j] || [];
                rows[j].push(_this.createTableHeaderComponent(column, height + cellBorderWidth, colspans[j], rowspan));
            });
        });
        return (preact_1.h("tbody", null, rows.map(function (row, index) { return (preact_1.h("tr", { key: "complex-header-" + index }, row)); })));
    };
    return ComplexHeaderComp;
}(preact_1.Component));
exports.ComplexHeader = hoc_1.connect(function (store, _a) {
    var side = _a.side;
    var _b = store.column, rowHeaderCount = _b.rowHeaderCount, visibleColumnsBySideWithRowHeader = _b.visibleColumnsBySideWithRowHeader, complexHeaderColumns = _b.complexHeaderColumns, _c = store.dimension, headerHeight = _c.headerHeight, cellBorderWidth = _c.cellBorderWidth, rangeBySide = store.selection.rangeBySide;
    return {
        headerHeight: headerHeight,
        cellBorderWidth: cellBorderWidth,
        columns: visibleColumnsBySideWithRowHeader[side],
        complexHeaderColumns: complexHeaderColumns,
        columnSelectionRange: rangeBySide && rangeBySide[side].column ? rangeBySide[side].column : null,
        rowHeaderCount: rowHeaderCount
    };
})(ComplexHeaderComp);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var common_1 = __webpack_require__(0);
var DISTANCE_FROM_ICON_TO_LAYER = 9;
var FilterButtonComp = /** @class */ (function (_super) {
    tslib_1.__extends(FilterButtonComp, _super);
    function FilterButtonComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isActiveFilter = function () {
            var _a = _this.props, filters = _a.filters, columnName = _a.columnName;
            return filters ? common_1.someProp('columnName', columnName, filters) : false;
        };
        _this.handleClick = function (ev) {
            var target = ev.target;
            if (!dom_1.hasClass(target, 'btn-filter')) {
                return;
            }
            var _a = _this.props, activeColumnAddress = _a.activeColumnAddress, columnName = _a.columnName, dispatch = _a.dispatch, offsetLeft = _a.offsetLeft;
            if (!activeColumnAddress || activeColumnAddress.name !== columnName) {
                var left = target.getBoundingClientRect().left - offsetLeft - DISTANCE_FROM_ICON_TO_LAYER;
                dispatch('setActiveColumnAddress', { name: columnName, left: left });
            }
        };
        return _this;
    }
    FilterButtonComp.prototype.render = function () {
        return (preact_1.h("a", { class: dom_1.cls('btn-filter', [this.isActiveFilter(), 'btn-filter-active']), onClick: this.handleClick }));
    };
    return FilterButtonComp;
}(preact_1.Component));
exports.FilterButton = hoc_1.connect(function (store, _a) {
    var columnName = _a.columnName;
    return ({
        activeColumnAddress: store.filterLayerState.activeColumnAddress,
        filters: store.data.filters,
        columnName: columnName,
        offsetLeft: store.dimension.offsetLeft
    });
})(FilterButtonComp);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var bodyRow_1 = __webpack_require__(82);
var bodyDummyRow_1 = __webpack_require__(86);
var common_1 = __webpack_require__(0);
var hoc_1 = __webpack_require__(4);
var BodyRowsComp = /** @class */ (function (_super) {
    tslib_1.__extends(BodyRowsComp, _super);
    function BodyRowsComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BodyRowsComp.prototype.shouldComponentUpdate = function (nextProps) {
        return !common_1.shallowEqual(nextProps, this.props);
    };
    BodyRowsComp.prototype.render = function (_a) {
        var rows = _a.rows, rowIndexOffset = _a.rowIndexOffset, columns = _a.columns, dummyRowCount = _a.dummyRowCount;
        var columnNames = columns.map(function (_a) {
            var name = _a.name;
            return name;
        });
        return (preact_1.h("tbody", null,
            rows.map(function (row, index) { return (preact_1.h(bodyRow_1.BodyRow, { key: row.uniqueKey, rowIndex: index + rowIndexOffset, viewRow: row, columns: columns })); }),
            common_1.range(dummyRowCount).map(function (index) { return (preact_1.h(bodyDummyRow_1.BodyDummyRow, { key: "dummy-" + index, index: rows.length + index, columnNames: columnNames })); })));
    };
    return BodyRowsComp;
}(preact_1.Component));
exports.BodyRows = hoc_1.connect(function (_a, _b) {
    var viewport = _a.viewport, column = _a.column, data = _a.data;
    var side = _b.side;
    return ({
        rowIndexOffset: viewport.rowRange[0] - data.pageRowRange[0],
        rows: viewport.rows,
        columns: side === 'L' ? column.visibleColumnsBySideWithRowHeader.L : viewport.columns,
        dummyRowCount: viewport.dummyRowCount
    });
})(BodyRowsComp);


/***/ }),

/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var dom_1 = __webpack_require__(2);
var common_1 = __webpack_require__(0);
var rowSpanCell_1 = __webpack_require__(83);
var ROW_HEIGHT_DEBOUNCE_TIME = 10;
var BodyRowComp = /** @class */ (function (_super) {
    tslib_1.__extends(BodyRowComp, _super);
    function BodyRowComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // This debounced function is aimed to wait until setTimeout(.., 0) calls
        // from the all child BodyCell components is made.
        // 10ms is just an approximate number. (smaller than 10ms might be safe enough)
        _this.updateRowHeightDebounced = common_1.debounce(function () {
            var _a = _this.props, dispatch = _a.dispatch, rowIndex = _a.rowIndex, rowHeight = _a.rowHeight;
            dispatch('refreshRowHeight', rowIndex, rowHeight);
        }, ROW_HEIGHT_DEBOUNCE_TIME);
        return _this;
    }
    BodyRowComp.prototype.componentWillUnmount = function () {
        var _a = this.props, rowIndex = _a.rowIndex, autoRowHeight = _a.autoRowHeight, dispatch = _a.dispatch;
        if (autoRowHeight) {
            dispatch('removeCellHeight', rowIndex);
        }
    };
    BodyRowComp.prototype.render = function (_a) {
        var _this = this;
        var rowIndex = _a.rowIndex, viewRow = _a.viewRow, columns = _a.columns, rowHeight = _a.rowHeight, autoRowHeight = _a.autoRowHeight;
        var isOddRow = rowIndex % 2 === 0;
        return (rowHeight > 0 && (preact_1.h("tr", { style: { height: rowHeight }, class: dom_1.cls([isOddRow, 'row-odd'], [!isOddRow, 'row-even'], [!rowHeight, 'row-hidden']) }, columns.map(function (columnInfo) {
            // Pass row object directly instead of passing value of it only,
            // so that BodyCell component can watch the change of value using selector function.
            return (preact_1.h(rowSpanCell_1.RowSpanCell, { key: columnInfo.name, viewRow: viewRow, columnInfo: columnInfo, refreshRowHeight: autoRowHeight ? _this.updateRowHeightDebounced : null }));
        }))));
    };
    return BodyRowComp;
}(preact_1.Component));
exports.BodyRow = hoc_1.connect(function (_a, _b) {
    var rowCoords = _a.rowCoords, dimension = _a.dimension;
    var rowIndex = _b.rowIndex;
    return ({
        rowHeight: rowCoords.heights[rowIndex],
        autoRowHeight: dimension.autoRowHeight,
        cellBorderWidth: dimension.cellBorderWidth
    });
})(BodyRowComp);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var bodyCell_1 = __webpack_require__(84);
var RowSpanCellComp = /** @class */ (function (_super) {
    tslib_1.__extends(RowSpanCellComp, _super);
    function RowSpanCellComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowSpanCellComp.prototype.render = function () {
        var _a = this.props, columnInfo = _a.columnInfo, refreshRowHeight = _a.refreshRowHeight, rowSpan = _a.rowSpan, enableRowSpan = _a.enableRowSpan, viewRow = _a.viewRow;
        var rowSpanAttr = null;
        if (enableRowSpan && rowSpan) {
            if (!rowSpan.mainRow) {
                return null;
            }
            rowSpanAttr = { rowSpan: rowSpan.spanCount };
        }
        return (preact_1.h(bodyCell_1.BodyCell, { viewRow: viewRow, columnInfo: columnInfo, refreshRowHeight: refreshRowHeight, rowSpanAttr: rowSpanAttr }));
    };
    return RowSpanCellComp;
}(preact_1.Component));
exports.RowSpanCellComp = RowSpanCellComp;
exports.RowSpanCell = hoc_1.connect(function (_a, _b) {
    var data = _a.data;
    var viewRow = _b.viewRow, columnInfo = _b.columnInfo;
    var sortState = data.sortState;
    var rowSpan = (viewRow.rowSpanMap && viewRow.rowSpanMap[columnInfo.name]) || null;
    var enableRowSpan = sortState.columns[0].columnName === 'sortKey';
    return { rowSpan: rowSpan, enableRowSpan: enableRowSpan };
})(RowSpanCellComp);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var treeCellContents_1 = __webpack_require__(85);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var instance_1 = __webpack_require__(7);
var column_1 = __webpack_require__(8);
var data_1 = __webpack_require__(6);
var BodyCellComp = /** @class */ (function (_super) {
    tslib_1.__extends(BodyCellComp, _super);
    function BodyCellComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMouseMove = function (ev) {
            var _a = dom_1.getCoordinateWithOffset(ev.pageX, ev.pageY), pageX = _a[0], pageY = _a[1];
            _this.props.dispatch('dragMoveRowHeader', { pageX: pageX, pageY: pageY });
        };
        _this.handleMouseDown = function (name, rowKey) {
            if (!column_1.isRowNumColumn(name)) {
                return;
            }
            _this.props.dispatch('mouseDownRowHeader', rowKey);
            document.addEventListener('mousemove', _this.handleMouseMove);
            document.addEventListener('mouseup', _this.clearDocumentEvents);
            document.addEventListener('selectstart', _this.handleSelectStart);
        };
        _this.clearDocumentEvents = function () {
            _this.props.dispatch('dragEnd');
            dom_1.setCursorStyle('');
            document.removeEventListener('mousemove', _this.handleMouseMove);
            document.removeEventListener('mouseup', _this.clearDocumentEvents);
            document.removeEventListener('selectstart', _this.handleSelectStart);
        };
        _this.handleSelectStart = function (ev) {
            ev.preventDefault();
        };
        return _this;
    }
    BodyCellComp.prototype.componentDidMount = function () {
        var _a = this.props, grid = _a.grid, rowKey = _a.rowKey, rowIndex = _a.rowIndex, renderData = _a.renderData, columnInfo = _a.columnInfo, refreshRowHeight = _a.refreshRowHeight, allDisabled = _a.disabled, defaultRowHeight = _a.defaultRowHeight, dispatch = _a.dispatch;
        // eslint-disable-next-line new-cap
        this.renderer = new columnInfo.renderer.type(tslib_1.__assign({ grid: grid,
            rowKey: rowKey,
            columnInfo: columnInfo }, renderData, { allDisabled: allDisabled }));
        var rendererEl = this.renderer.getElement();
        this.el.appendChild(rendererEl);
        if (this.renderer.mounted) {
            this.renderer.mounted(this.el);
        }
        if (refreshRowHeight) {
            // In Preact, the componentDidMount is called before the DOM elements are actually mounted.
            // https://github.com/preactjs/preact/issues/648
            // Use setTimeout to wait until the DOM element is actually mounted
            //  - If the width of grid is 'auto' actual width of grid is calculated from the
            //    Container component using setTimeout(fn, 0)
            //  - Delay 16ms for defer the function call later than the Container component.
            window.setTimeout(function () {
                var height = rendererEl.clientHeight;
                dispatch('setCellHeight', columnInfo.name, rowIndex, height, defaultRowHeight);
                refreshRowHeight(height);
            }, 16);
        }
    };
    BodyCellComp.prototype.componentWillReceiveProps = function (nextProps) {
        if ((this.props.renderData !== nextProps.renderData ||
            this.props.disabled !== nextProps.disabled) &&
            this.renderer &&
            this.renderer.render) {
            var grid = nextProps.grid, rowKey = nextProps.rowKey, rowIndex = nextProps.rowIndex, renderData = nextProps.renderData, columnInfo = nextProps.columnInfo, refreshRowHeight = nextProps.refreshRowHeight, defaultRowHeight = nextProps.defaultRowHeight, allDisabled = nextProps.disabled, dispatch = nextProps.dispatch;
            this.renderer.render(tslib_1.__assign({ grid: grid,
                rowKey: rowKey,
                columnInfo: columnInfo }, renderData, { allDisabled: allDisabled }));
            if (refreshRowHeight) {
                var height = this.renderer.getElement().clientHeight;
                dispatch('setCellHeight', columnInfo.name, rowIndex, height, defaultRowHeight);
                refreshRowHeight(height);
            }
        }
    };
    BodyCellComp.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, rowKey = _b.rowKey, _c = _b.renderData, disabled = _c.disabled, editable = _c.editable, invalidStates = _c.invalidStates, className = _c.className, _d = _b.columnInfo, align = _d.align, valign = _d.valign, name = _d.name, _e = _d.validation, validation = _e === void 0 ? {} : _e, allDisabled = _b.disabled, treeInfo = _b.treeInfo, selectedRow = _b.selectedRow, rowSpanAttr = _b.rowSpanAttr;
        var style = tslib_1.__assign({ textAlign: align }, (valign && { verticalAlign: valign }));
        var attrs = (_a = {},
            _a[dom_1.dataAttr.ROW_KEY] = String(rowKey),
            _a[dom_1.dataAttr.COLUMN_NAME] = name,
            _a);
        var classNames = dom_1.cls('cell', 'cell-has-input', [editable, 'cell-editable'], [column_1.isRowHeader(name), 'cell-row-header'], [validation.required || false, 'cell-required'], [!!invalidStates.length, 'cell-invalid'], [disabled || allDisabled, 'cell-disabled'], [!!treeInfo, 'cell-has-tree'], [column_1.isRowHeader(name) && selectedRow, 'cell-selected']) + " " + className;
        return treeInfo ? (preact_1.h("td", tslib_1.__assign({}, attrs, { style: style, class: classNames }),
            preact_1.h("div", { class: dom_1.cls('tree-wrapper-relative') },
                preact_1.h("div", { class: dom_1.cls('tree-wrapper-valign-center'), style: { paddingLeft: treeInfo.indentWidth }, ref: function (el) {
                        _this.el = el;
                    } },
                    preact_1.h(treeCellContents_1.TreeCellContents, { treeInfo: treeInfo, rowKey: rowKey }))))) : (preact_1.h("td", tslib_1.__assign({}, attrs, rowSpanAttr, { style: style, class: classNames, ref: function (el) {
                _this.el = el;
            }, onMouseDown: function () { return _this.handleMouseDown(name, rowKey); } })));
    };
    return BodyCellComp;
}(preact_1.Component));
exports.BodyCellComp = BodyCellComp;
exports.BodyCell = hoc_1.connect(function (_a, _b) {
    var id = _a.id, column = _a.column, data = _a.data, selection = _a.selection, dimension = _a.dimension;
    var viewRow = _b.viewRow, columnInfo = _b.columnInfo;
    var rowKey = viewRow.rowKey, valueMap = viewRow.valueMap, treeInfo = viewRow.treeInfo;
    var treeColumnName = column.treeColumnName;
    var disabled = data.disabled;
    var grid = instance_1.getInstance(id);
    var range = selection.range;
    var columnName = columnInfo.name;
    var rowIndex = data_1.findIndexByRowKey(data, column, id, rowKey);
    var defaultRowHeight = dimension.rowHeight;
    return tslib_1.__assign({ grid: grid,
        rowKey: rowKey,
        rowIndex: rowIndex,
        disabled: disabled,
        columnInfo: columnInfo,
        defaultRowHeight: defaultRowHeight, renderData: (valueMap && valueMap[columnName]) || { invalidStates: [] } }, (columnName === treeColumnName ? { treeInfo: treeInfo } : null), { selectedRow: range ? rowIndex >= range.row[0] && rowIndex <= range.row[1] : false });
})(BodyCellComp);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var constant_1 = __webpack_require__(17);
var TreeCellContentsComp = /** @class */ (function (_super) {
    tslib_1.__extends(TreeCellContentsComp, _super);
    function TreeCellContentsComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (ev) {
            ev.stopPropagation();
            var _a = _this.props, dispatch = _a.dispatch, rowKey = _a.rowKey;
            var target = ev.target;
            if (dom_1.findParent(target, 'tree-button-collapse')) {
                dispatch('expandByRowKey', rowKey, false);
            }
            else if (dom_1.findParent(target, 'tree-button-expand')) {
                dispatch('collapseByRowKey', rowKey, false);
            }
        };
        return _this;
    }
    TreeCellContentsComp.prototype.getIndentComponent = function (depth, leaf) {
        var indentItem = [];
        for (var i = 0, len = depth; i < len; i += 1) {
            indentItem.push(preact_1.h("span", { class: dom_1.cls('tree-depth') }, i === len - 1 && !leaf && (preact_1.h("button", { class: dom_1.cls('btn-tree'), style: { left: i * constant_1.TREE_INDENT_WIDTH }, onClick: this.handleClick },
                preact_1.h("i", null)))));
        }
        return indentItem;
    };
    TreeCellContentsComp.prototype.render = function () {
        var _a = this.props, depth = _a.depth, indentWidth = _a.indentWidth, leaf = _a.leaf, expanded = _a.expanded, useIcon = _a.useIcon;
        return (preact_1.h("div", { class: dom_1.cls('tree-extra-content', [!leaf && expanded, 'tree-button-expand'], [!leaf && !expanded, 'tree-button-collapse']) },
            this.getIndentComponent(depth, leaf),
            useIcon && (preact_1.h("span", { class: dom_1.cls('tree-icon'), style: { left: indentWidth - constant_1.TREE_INDENT_WIDTH } },
                preact_1.h("i", null)))));
    };
    return TreeCellContentsComp;
}(preact_1.Component));
exports.TreeCellContentsComp = TreeCellContentsComp;
exports.TreeCellContents = hoc_1.connect(function (_a, _b) {
    var column = _a.column;
    var treeInfo = _b.treeInfo, rowKey = _b.rowKey;
    var _c = column.treeIcon, useIcon = _c === void 0 ? true : _c;
    var depth = treeInfo.depth, indentWidth = treeInfo.indentWidth, leaf = treeInfo.leaf, _d = treeInfo.expanded, expanded = _d === void 0 ? false : _d;
    return {
        rowKey: rowKey,
        depth: depth,
        indentWidth: indentWidth,
        leaf: leaf,
        expanded: expanded,
        useIcon: useIcon
    };
})(TreeCellContentsComp);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var dom_1 = __webpack_require__(2);
var column_1 = __webpack_require__(8);
var BodyDummyRowComp = function (_a) {
    var columnNames = _a.columnNames, rowHeight = _a.rowHeight, index = _a.index;
    var isOddRow = index % 2 === 0;
    return (preact_1.h("tr", { style: { height: rowHeight }, class: dom_1.cls([isOddRow, 'row-odd'], [!isOddRow, 'row-even']) }, columnNames.map(function (name) {
        var _a;
        var attrs = (_a = {}, _a[dom_1.dataAttr.COLUMN_NAME] = name, _a);
        return (preact_1.h("td", tslib_1.__assign({}, attrs, { key: index, class: dom_1.cls('cell', 'cell-dummy', [column_1.isRowHeader(name), 'cell-row-header']) })));
    })));
};
exports.BodyDummyRow = hoc_1.connect(function (_a) {
    var rowHeight = _a.dimension.rowHeight;
    return ({
        rowHeight: rowHeight
    });
})(BodyDummyRowComp);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var FocusLayerComp = /** @class */ (function (_super) {
    tslib_1.__extends(FocusLayerComp, _super);
    function FocusLayerComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FocusLayerComp.prototype.render = function () {
        var _a = this.props, active = _a.active, cellPosRect = _a.cellPosRect, cellBorderWidth = _a.cellBorderWidth;
        if (cellPosRect === null) {
            return null;
        }
        var top = cellPosRect.top, left = cellPosRect.left, right = cellPosRect.right, bottom = cellPosRect.bottom;
        var height = bottom - top;
        var width = right - left;
        var leftStyle = {
            top: top,
            left: left,
            width: cellBorderWidth,
            height: height + cellBorderWidth
        };
        var topStyle = {
            top: top === 0 ? cellBorderWidth : top,
            left: left,
            width: width + cellBorderWidth,
            height: cellBorderWidth
        };
        var rightStyle = {
            top: top,
            left: left + width,
            width: cellBorderWidth,
            height: height + cellBorderWidth
        };
        var bottomStyle = {
            top: top + height,
            left: left,
            width: width + cellBorderWidth,
            height: cellBorderWidth
        };
        return (preact_1.h("div", { class: dom_1.cls('layer-focus', [!active, 'layer-focus-deactive']) },
            preact_1.h("div", { class: dom_1.cls('layer-focus-border'), style: leftStyle }),
            preact_1.h("div", { class: dom_1.cls('layer-focus-border'), style: topStyle }),
            preact_1.h("div", { class: dom_1.cls('layer-focus-border'), style: rightStyle }),
            preact_1.h("div", { class: dom_1.cls('layer-focus-border'), style: bottomStyle })));
    };
    return FocusLayerComp;
}(preact_1.Component));
exports.FocusLayer = hoc_1.connect(function (_a, _b) {
    var focus = _a.focus, dimension = _a.dimension;
    var side = _b.side;
    var cellPosRect = focus.cellPosRect, editingAddress = focus.editingAddress, navigating = focus.navigating;
    return {
        active: !!editingAddress || navigating,
        cellPosRect: side === focus.side ? cellPosRect : null,
        cellBorderWidth: dimension.cellBorderWidth
    };
})(FocusLayerComp);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var SelectionLayerComp = /** @class */ (function (_super) {
    tslib_1.__extends(SelectionLayerComp, _super);
    function SelectionLayerComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMouseMove = function (ev) {
            var dispatch = _this.props.dispatch;
            var pageX = ev.pageX, pageY = ev.pageY;
            dispatch('addRowHoverClassByPosition', { pageX: pageX, pageY: pageY });
        };
        return _this;
    }
    SelectionLayerComp.prototype.render = function () {
        var styles = this.props.styles;
        return (preact_1.h("div", { onMouseMove: this.handleMouseMove }, !!styles && preact_1.h("div", { class: dom_1.cls('layer-selection'), style: styles })));
    };
    return SelectionLayerComp;
}(preact_1.Component));
exports.SelectionLayer = hoc_1.connect(function (_a, _b) {
    var rangeAreaInfo = _a.selection.rangeAreaInfo, renderState = _a.renderState;
    var side = _b.side;
    var styles = rangeAreaInfo && rangeAreaInfo[side];
    var hoveredRowKey = renderState.hoveredRowKey;
    return { styles: styles, hoveredRowKey: hoveredRowKey };
})(SelectionLayerComp);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var summaryBodyCell_1 = __webpack_require__(90);
var common_1 = __webpack_require__(0);
var SummaryBodyRow = /** @class */ (function (_super) {
    tslib_1.__extends(SummaryBodyRow, _super);
    function SummaryBodyRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SummaryBodyRow.prototype.shouldComponentUpdate = function (nextProps) {
        if (common_1.shallowEqual(nextProps, this.props)) {
            return false;
        }
        return true;
    };
    SummaryBodyRow.prototype.render = function (_a) {
        var columns = _a.columns;
        var columnNames = columns.map(function (_a) {
            var name = _a.name;
            return name;
        });
        return (preact_1.h("tbody", null,
            preact_1.h("tr", null, columnNames.map(function (name) { return (preact_1.h(summaryBodyCell_1.SummaryBodyCell, { key: name, columnName: name })); }))));
    };
    return SummaryBodyRow;
}(preact_1.Component));
exports.SummaryBodyRow = SummaryBodyRow;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var dom_1 = __webpack_require__(2);
var common_1 = __webpack_require__(0);
var hoc_1 = __webpack_require__(4);
var column_1 = __webpack_require__(8);
var SummaryBodyCellComp = /** @class */ (function (_super) {
    tslib_1.__extends(SummaryBodyCellComp, _super);
    function SummaryBodyCellComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getTemplate = function () {
            var _a = _this.props, content = _a.content, summaryValue = _a.summaryValue, columnName = _a.columnName;
            if (!content || column_1.isRowHeader(columnName)) {
                return '';
            }
            var template = content.template;
            return typeof template === 'string' ? template : template(summaryValue);
        };
        return _this;
    }
    SummaryBodyCellComp.prototype.shouldComponentUpdate = function (nextProps) {
        if (common_1.shallowEqual(nextProps, this.props)) {
            return false;
        }
        return true;
    };
    SummaryBodyCellComp.prototype.render = function () {
        var _a;
        var columnName = this.props.columnName;
        var attrs = (_a = {}, _a[dom_1.dataAttr.COLUMN_NAME] = columnName, _a);
        var template = this.getTemplate();
        return (preact_1.h("td", tslib_1.__assign({ class: dom_1.cls('cell', 'cell-summary'), dangerouslySetInnerHTML: { __html: template } }, attrs)));
    };
    return SummaryBodyCellComp;
}(preact_1.Component));
exports.SummaryBodyCellComp = SummaryBodyCellComp;
exports.SummaryBodyCell = hoc_1.connect(function (_a, _b) {
    var summary = _a.summary;
    var columnName = _b.columnName;
    var summaryColumnContents = summary.summaryColumnContents, summaryValues = summary.summaryValues;
    var content = summaryColumnContents[columnName];
    var summaryValue = summaryValues[columnName];
    return { content: content, summaryValue: summaryValue };
})(SummaryBodyCellComp);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var dom_1 = __webpack_require__(2);
var bodyArea_1 = __webpack_require__(43);
var headerArea_1 = __webpack_require__(39);
var summaryArea_1 = __webpack_require__(44);
var hoc_1 = __webpack_require__(4);
var RightSideComp = /** @class */ (function (_super) {
    tslib_1.__extends(RightSideComp, _super);
    function RightSideComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RightSideComp.prototype.renderScrollbarYInnerBorder = function () {
        var _a = this.props, cornerTopHeight = _a.cornerTopHeight, bodyHeight = _a.bodyHeight, scrollXHeight = _a.scrollXHeight;
        var style = {
            top: cornerTopHeight,
            height: bodyHeight - scrollXHeight
        };
        return preact_1.h("div", { class: dom_1.cls('scrollbar-y-inner-border'), style: style });
    };
    RightSideComp.prototype.renderScrollbarRightTop = function () {
        var style = { height: this.props.cornerTopHeight };
        return preact_1.h("div", { class: dom_1.cls('scrollbar-right-top'), style: style });
    };
    RightSideComp.prototype.renderScrollbarYOuterBorder = function () {
        return preact_1.h("div", { class: dom_1.cls('scrollbar-y-outer-border') });
    };
    RightSideComp.prototype.renderScrollbarRightBottom = function () {
        var style = { height: this.props.cornerBottomHeight };
        return preact_1.h("div", { class: dom_1.cls('scrollbar-right-bottom'), style: style });
    };
    RightSideComp.prototype.renderScrollbarFrozenBorder = function () {
        var _a = this.props, scrollXHeight = _a.scrollXHeight, frozenBorderWidth = _a.frozenBorderWidth, cellBorderWidth = _a.cellBorderWidth;
        var style = {
            height: scrollXHeight,
            width: frozenBorderWidth,
            marginLeft: -(frozenBorderWidth + cellBorderWidth)
        };
        return preact_1.h("div", { class: dom_1.cls('scrollbar-frozen-border'), style: style });
    };
    RightSideComp.prototype.renderFrozenBorder = function () {
        var frozenBorderWidth = this.props.frozenBorderWidth;
        var style = {
            marginLeft: -frozenBorderWidth,
            width: frozenBorderWidth
        };
        return preact_1.h("div", { class: dom_1.cls('frozen-border'), style: style });
    };
    RightSideComp.prototype.render = function () {
        var _a = this.props, marginLeft = _a.marginLeft, width = _a.width, summaryPosition = _a.summaryPosition, scrollY = _a.scrollY;
        var style = {
            display: 'block',
            marginLeft: marginLeft,
            width: width
        };
        return (preact_1.h("div", { class: dom_1.cls('rside-area'), style: style },
            preact_1.h(headerArea_1.HeaderArea, { side: "R" }),
            summaryPosition === 'top' && preact_1.h(summaryArea_1.SummaryArea, { side: "R" }),
            preact_1.h(bodyArea_1.BodyArea, { side: "R" }),
            summaryPosition === 'bottom' && preact_1.h(summaryArea_1.SummaryArea, { side: "R" }),
            scrollY && this.renderScrollbarYInnerBorder(),
            scrollY && this.renderScrollbarYOuterBorder(),
            scrollY && this.renderScrollbarRightTop(),
            this.renderScrollbarRightBottom(),
            this.renderScrollbarFrozenBorder(),
            this.renderFrozenBorder()));
    };
    return RightSideComp;
}(preact_1.Component));
exports.RightSide = hoc_1.connect(function (_a) {
    var dimension = _a.dimension, columnCoords = _a.columnCoords;
    var scrollbarWidth = dimension.scrollbarWidth, scrollX = dimension.scrollX, scrollY = dimension.scrollY, summaryHeight = dimension.summaryHeight, headerHeight = dimension.headerHeight, cellBorderWidth = dimension.cellBorderWidth, tableBorderWidth = dimension.tableBorderWidth, bodyHeight = dimension.bodyHeight, summaryPosition = dimension.summaryPosition, frozenBorderWidth = dimension.frozenBorderWidth;
    var cornerTopHeight = headerHeight;
    var cornerBottomHeight = scrollX ? scrollbarWidth : 0;
    if (scrollY && summaryHeight) {
        if (summaryPosition === 'top') {
            cornerTopHeight += summaryHeight + tableBorderWidth;
        }
        else {
            cornerBottomHeight += summaryHeight;
        }
    }
    var scrollXHeight = scrollX ? scrollbarWidth : 0;
    var width = columnCoords.areaWidth.R;
    var marginLeft = columnCoords.areaWidth.L + frozenBorderWidth;
    if (marginLeft && !frozenBorderWidth) {
        marginLeft -= cellBorderWidth;
        width += cellBorderWidth;
    }
    return {
        width: width,
        marginLeft: marginLeft,
        cornerTopHeight: cornerTopHeight,
        cornerBottomHeight: cornerBottomHeight,
        scrollXHeight: scrollXHeight,
        bodyHeight: bodyHeight,
        cellBorderWidth: cellBorderWidth,
        frozenBorderWidth: frozenBorderWidth,
        summaryPosition: summaryPosition,
        scrollX: scrollX,
        scrollY: scrollY
    };
})(RightSideComp);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var i18n_1 = tslib_1.__importDefault(__webpack_require__(31));
var common_1 = __webpack_require__(0);
var StateLayerComp = /** @class */ (function (_super) {
    tslib_1.__extends(StateLayerComp, _super);
    function StateLayerComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateLayerComp.prototype.shouldComponentUpdate = function (nextProps) {
        return !common_1.shallowEqual(nextProps, this.props);
    };
    StateLayerComp.prototype.render = function (_a) {
        var loadingState = _a.loadingState, top = _a.top, height = _a.height, left = _a.left, right = _a.right;
        var display = loadingState === 'DONE' ? 'none' : 'block';
        var layerStyle = { display: display, top: top, height: height, left: left, right: right };
        var message = null;
        if (loadingState === 'EMPTY') {
            message = i18n_1.default.get('display.noData');
        }
        else if (loadingState === 'LOADING') {
            message = i18n_1.default.get('display.loadingData');
        }
        return (preact_1.h("div", { class: dom_1.cls('layer-state'), style: layerStyle },
            preact_1.h("div", { class: dom_1.cls('layer-state-content') },
                preact_1.h("p", null, message),
                loadingState === 'LOADING' && preact_1.h("div", { class: dom_1.cls('layer-state-loading') }))));
    };
    return StateLayerComp;
}(preact_1.Component));
exports.StateLayer = hoc_1.connect(function (_a) {
    var data = _a.data, dimension = _a.dimension;
    var headerHeight = dimension.headerHeight, bodyHeight = dimension.bodyHeight, cellBorderWidth = dimension.cellBorderWidth, tableBorderWidth = dimension.tableBorderWidth, scrollXHeight = dimension.scrollXHeight, scrollYWidth = dimension.scrollYWidth;
    return {
        loadingState: data.loadingState,
        top: headerHeight + cellBorderWidth + 1,
        height: bodyHeight - scrollXHeight - tableBorderWidth,
        left: 0,
        right: scrollYWidth
    };
})(StateLayerComp);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var editingLayerInner_1 = __webpack_require__(94);
var EditingLayerComp = /** @class */ (function (_super) {
    tslib_1.__extends(EditingLayerComp, _super);
    function EditingLayerComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditingLayerComp.prototype.render = function (_a) {
        var editingAddress = _a.editingAddress;
        if (!editingAddress) {
            return null;
        }
        var rowKey = editingAddress.rowKey, columnName = editingAddress.columnName;
        return preact_1.h(editingLayerInner_1.EditingLayerInner, { rowKey: rowKey, columnName: columnName });
    };
    return EditingLayerComp;
}(preact_1.Component));
exports.EditingLayerComp = EditingLayerComp;
exports.EditingLayer = hoc_1.connect(function (_a) {
    var editingAddress = _a.focus.editingAddress;
    return ({
        editingAddress: editingAddress
    });
})(EditingLayerComp);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var dom_1 = __webpack_require__(2);
var hoc_1 = __webpack_require__(4);
var keyboard_1 = __webpack_require__(18);
var instance_1 = __webpack_require__(7);
var common_1 = __webpack_require__(0);
var data_1 = __webpack_require__(6);
/**
 * Process of unmounting the Editing layer
 * 1. In case of controlling by the keyMap
 * - Step 1: call the handleKeyDown method.
 * - Step 2: dispath the finishEditing.
 * - Step 3: occur the editingFinish event and editingAdress will be 'null'.
 * - Step 4: call the componentWillUnmount lifecycle method.
 * - Step 5: the layer is unmounted.
 *
 * 2. In case of controlling by clicking another cell
 * - Step 1: call the componentWillReceiveProps lifecycle method.
 * - Step 2: dispath the finishEditing.
 * - Step 3: occur the editingFinish event and editingAddress will be 'null'.
 * - Step 4: call the componentWillUnmount lifecycle method.
 * - Step 5: the layer is unmounted.
 *
 * 3. In case of controlling by finishEditing grid API with value parameter.
 *    (ex. grid.finishEditing(0, 'columnName', 'someValue');)
 * - Step 1: dispath the saveAndFinishEditing.
 * - Step 2: call the finishEditing function in dispatch/focus.ts
 * - Step 3: occur the editingFinish event and editingAddress will be 'null'.
 * - Step 4: call the componentWillUnmount lifecycle method.
 * - Step 5: the layer is unmounted.
 *
 * 4. In case of controlling by finishEditing grid API with 'undefined' value parameter.
 *    (ex. grid.finishEditing(0, 'columnName');)
 * - Step 1: dispath the saveAndFinishEditing.
 * - Step 2: editingAddress will be 'null'.
 * - Step 3: call the componentWillUnmount lifecycle method.
 * - Step 4: dispath the finishEditing(due to forcedDestroyEditing prop is 'true').
 * - Step 5: occur the editingFinish event(editingAddress is already 'null').
 * - Step 6: the layer is unmounted.
 */
var EditingLayerInnerComp = /** @class */ (function (_super) {
    tslib_1.__extends(EditingLayerInnerComp, _super);
    function EditingLayerInnerComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleKeyDown = function (ev) {
            var keyName = keyboard_1.getKeyStrokeString(ev);
            switch (keyName) {
                case 'enter':
                    _this.finishEditing(true);
                    break;
                case 'esc':
                    _this.finishEditing(false);
                    break;
                case 'tab':
                    _this.moveTabFocus(ev, 'nextCell');
                    break;
                case 'shift-tab':
                    _this.moveTabFocus(ev, 'prevCell');
                    break;
                default:
                // do nothing;
            }
        };
        return _this;
    }
    EditingLayerInnerComp.prototype.moveTabFocus = function (ev, command) {
        var dispatch = this.props.dispatch;
        ev.preventDefault();
        dispatch('moveTabFocus', command);
        dispatch('setScrollToFocus');
    };
    EditingLayerInnerComp.prototype.finishEditing = function (save) {
        if (this.editor) {
            var _a = this.props, dispatch = _a.dispatch, rowKey = _a.rowKey, columnName = _a.columnName;
            var value = this.editor.getValue();
            if (save) {
                dispatch('setValue', rowKey, columnName, value);
            }
            dispatch('finishEditing', rowKey, columnName, value);
        }
    };
    EditingLayerInnerComp.prototype.componentDidMount = function () {
        var _a = this.props, grid = _a.grid, rowKey = _a.rowKey, columnInfo = _a.columnInfo, value = _a.value, width = _a.width;
        var EditorClass = columnInfo.editor.type;
        var editorProps = { grid: grid, rowKey: rowKey, columnInfo: columnInfo, value: value };
        var cellEditor = new EditorClass(editorProps);
        var editorEl = cellEditor.getElement();
        if (editorEl && this.contentEl) {
            this.contentEl.appendChild(editorEl);
            this.editor = cellEditor;
            var editorWidth = editorEl.getBoundingClientRect().width;
            if (editorWidth > width) {
                var CELL_PADDING_WIDTH = 10;
                this.contentEl.style.width = editorWidth + CELL_PADDING_WIDTH + "px";
            }
            if (common_1.isFunction(cellEditor.mounted)) {
                cellEditor.mounted();
            }
        }
    };
    EditingLayerInnerComp.prototype.componentWillUnmount = function () {
        if (this.props.forcedDestroyEditing) {
            this.finishEditing(true);
        }
        if (this.editor && this.editor.beforeDestroy) {
            this.editor.beforeDestroy();
        }
    };
    EditingLayerInnerComp.prototype.componentWillReceiveProps = function (nextProps) {
        var _a = this.props, prevFocusedColumnName = _a.focusedColumnName, prevFocusedRowKey = _a.focusedRowKey;
        var focusedColumnName = nextProps.focusedColumnName, focusedRowKey = nextProps.focusedRowKey;
        if (focusedColumnName !== prevFocusedColumnName || focusedRowKey !== prevFocusedRowKey) {
            this.finishEditing(true);
        }
    };
    EditingLayerInnerComp.prototype.render = function () {
        var _this = this;
        var _a = this.props, top = _a.top, left = _a.left, width = _a.width, height = _a.height, contentHeight = _a.contentHeight;
        var lineHeight = contentHeight + "px";
        var styles = { top: top, left: left, width: width, height: height, lineHeight: lineHeight };
        return (preact_1.h("div", { style: styles, class: dom_1.cls('layer-editing', 'cell-content', 'cell-content-editor'), onKeyDown: this.handleKeyDown, ref: function (el) {
                _this.contentEl = el;
            } }));
    };
    return EditingLayerInnerComp;
}(preact_1.Component));
exports.EditingLayerInnerComp = EditingLayerInnerComp;
exports.EditingLayerInner = hoc_1.connect(function (store, _a) {
    var rowKey = _a.rowKey, columnName = _a.columnName;
    var data = store.data, column = store.column, id = store.id, focus = store.focus, viewport = store.viewport, dimension = store.dimension, columnCoords = store.columnCoords;
    var cellPosRect = focus.cellPosRect, side = focus.side, focusedColumnName = focus.columnName, focusedRowKey = focus.rowKey, forcedDestroyEditing = focus.forcedDestroyEditing;
    var filteredViewData = data.filteredViewData, sortState = data.sortState;
    var state = {
        grid: instance_1.getInstance(id),
        sortState: sortState,
        focusedColumnName: focusedColumnName,
        focusedRowKey: focusedRowKey,
        forcedDestroyEditing: forcedDestroyEditing
    };
    if (common_1.isNull(cellPosRect)) {
        return state;
    }
    var cellBorderWidth = dimension.cellBorderWidth, tableBorderWidth = dimension.tableBorderWidth, headerHeight = dimension.headerHeight, width = dimension.width, frozenBorderWidth = dimension.frozenBorderWidth;
    var scrollLeft = viewport.scrollLeft, scrollTop = viewport.scrollTop;
    var areaWidth = columnCoords.areaWidth;
    var allColumnMap = column.allColumnMap;
    var top = cellPosRect.top, left = cellPosRect.left, right = cellPosRect.right, bottom = cellPosRect.bottom;
    var cellWidth = right - left + cellBorderWidth;
    var cellHeight = bottom - top + cellBorderWidth;
    var offsetTop = headerHeight - scrollTop + tableBorderWidth;
    var offsetLeft = Math.min(areaWidth.L - scrollLeft, width - right);
    var targetRow = filteredViewData[data_1.findIndexByRowKey(data, column, id, rowKey)];
    var value, filter;
    if (targetRow) {
        value = targetRow.valueMap[columnName].value;
    }
    if (data.filters) {
        filter = common_1.findProp('columnName', columnName, data.filters);
    }
    return tslib_1.__assign({}, state, { left: left + (side === 'L' ? 0 : offsetLeft + frozenBorderWidth), top: top + offsetTop, width: cellWidth, height: cellHeight, contentHeight: cellHeight - 2 * cellBorderWidth, columnInfo: allColumnMap[columnName], value: value,
        filter: filter });
})(EditingLayerInnerComp);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var filterLayerInner_1 = __webpack_require__(96);
var FilterLayerComp = /** @class */ (function (_super) {
    tslib_1.__extends(FilterLayerComp, _super);
    function FilterLayerComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterLayerComp.prototype.render = function (_a) {
        var activeColumnAddress = _a.activeColumnAddress, activeFilterState = _a.activeFilterState;
        return (activeColumnAddress &&
            activeFilterState && (preact_1.h(filterLayerInner_1.FilterLayerInner, { columnAddress: activeColumnAddress, filterState: activeFilterState })));
    };
    return FilterLayerComp;
}(preact_1.Component));
exports.FilterLayerComp = FilterLayerComp;
exports.FilterLayer = hoc_1.connect(function (_a) {
    var filterLayerState = _a.filterLayerState;
    var activeColumnAddress = filterLayerState.activeColumnAddress, activeFilterState = filterLayerState.activeFilterState;
    return { activeColumnAddress: activeColumnAddress, activeFilterState: activeFilterState };
})(FilterLayerComp);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var dom_1 = __webpack_require__(2);
var textFilter_1 = __webpack_require__(97);
var datePickerFilter_1 = __webpack_require__(98);
var filterOperator_1 = __webpack_require__(99);
var selectFilter_1 = __webpack_require__(100);
var common_1 = __webpack_require__(0);
var FilterLayerInnerComp = /** @class */ (function (_super) {
    tslib_1.__extends(FilterLayerInnerComp, _super);
    function FilterLayerInnerComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderFilter = function (index) {
            var _a = _this.props, columnAddress = _a.columnAddress, filterState = _a.filterState, columnInfo = _a.columnInfo;
            var type = columnInfo.filter.type;
            switch (type) {
                case 'text':
                case 'number':
                    return (preact_1.h(textFilter_1.TextFilter, { columnAddress: columnAddress, filterState: filterState, filterIndex: index }));
                case 'date':
                    return (preact_1.h(datePickerFilter_1.DatePickerFilter, { columnAddress: columnAddress, filterState: filterState, filterIndex: index }));
                case 'select':
                    return preact_1.h(selectFilter_1.SelectFilter, { columnAddress: columnAddress, filterState: filterState });
                default:
                    return null;
            }
        };
        return _this;
    }
    FilterLayerInnerComp.prototype.render = function () {
        var _a = this.props, columnAddress = _a.columnAddress, columnInfo = _a.columnInfo, renderSecondFilter = _a.renderSecondFilter, dispatch = _a.dispatch, currentColumnActive = _a.currentColumnActive, filterState = _a.filterState;
        var _b = columnInfo.filter, showApplyBtn = _b.showApplyBtn, showClearBtn = _b.showClearBtn;
        var left = columnAddress.left;
        return (preact_1.h("div", { className: dom_1.cls('filter-container'), style: { left: left } },
            preact_1.h("div", null,
                preact_1.h("span", { className: dom_1.cls('btn-filter', [currentColumnActive, 'btn-filter-active'], 'filter-icon') }),
                preact_1.h("a", { className: dom_1.cls('btn-close'), onClick: function () {
                        dispatch('setActiveColumnAddress', null);
                    } })),
            this.renderFilter(0),
            renderSecondFilter && preact_1.h(filterOperator_1.FilterOperator, { filterState: filterState }),
            renderSecondFilter && this.renderFilter(1),
            preact_1.h("div", { className: dom_1.cls('filter-btn-container') },
                showClearBtn && (preact_1.h("button", { className: dom_1.cls('filter-btn', 'filter-btn-clear'), onClick: function () {
                        dispatch('clearActiveFilterState');
                    } }, "Clear")),
                showApplyBtn && (preact_1.h("button", { className: dom_1.cls('filter-btn', 'filter-btn-apply'), onClick: function () {
                        dispatch('applyActiveFilterState');
                    } }, "Apply")))));
    };
    return FilterLayerInnerComp;
}(preact_1.Component));
exports.FilterLayerInnerComp = FilterLayerInnerComp;
exports.FilterLayerInner = hoc_1.connect(function (store, _a) {
    var columnAddress = _a.columnAddress, filterState = _a.filterState;
    var data = store.data, column = store.column;
    var filters = data.filters;
    var allColumnMap = column.allColumnMap;
    var currentColumnActive = !!filters && common_1.some(function (item) { return item.columnName === columnAddress.name; }, filters);
    var renderSecondFilter = !!(filterState.type !== 'select' &&
        filterState.operator &&
        filterState.state[0] &&
        filterState.state[0].value.length);
    return {
        columnInfo: allColumnMap[columnAddress.name],
        columnAddress: columnAddress,
        filters: filters,
        renderSecondFilter: renderSecondFilter,
        currentColumnActive: currentColumnActive
    };
})(FilterLayerInnerComp);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var dom_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(22);
var common_1 = __webpack_require__(0);
var keyboard_1 = __webpack_require__(18);
var constant_1 = __webpack_require__(17);
var TextFilterComp = /** @class */ (function (_super) {
    tslib_1.__extends(TextFilterComp, _super);
    function TextFilterComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getPreviousValue = function () {
            var _a = _this.props, filterIndex = _a.filterIndex, filterState = _a.filterState;
            var state = filterState.state;
            var code = 'eq';
            var value = '';
            if (state.length && state[filterIndex]) {
                var _b = state[filterIndex], prevCode = _b.code, prevValue = _b.value;
                code = prevCode;
                value = String(prevValue);
            }
            return { value: value, code: code };
        };
        _this.handleChange = common_1.debounce(function (ev) {
            var dispatch = _this.props.dispatch;
            var keyCode = ev.keyCode;
            if (keyboard_1.isNonPrintableKey(keyCode)) {
                return;
            }
            var keyName = keyboard_1.keyNameMap[keyCode];
            if (keyName === 'enter') {
                dispatch('applyActiveFilterState');
            }
            else {
                var filterIndex = _this.props.filterIndex;
                var value = _this.inputEl.value;
                var code = _this.selectEl.value;
                dispatch('setActiveFilterState', { value: value, code: code }, filterIndex);
            }
        }, constant_1.FILTER_DEBOUNCE_TIME);
        return _this;
    }
    TextFilterComp.prototype.render = function () {
        var _this = this;
        var columnInfo = this.props.columnInfo;
        var _a = this.getPreviousValue(), code = _a.code, value = _a.value;
        var selectOption = filter_1.filterSelectOption[columnInfo.filter.type];
        return (preact_1.h("div", null,
            preact_1.h("div", { className: dom_1.cls('filter-dropdown') },
                preact_1.h("select", { ref: function (ref) {
                        _this.selectEl = ref;
                    }, onChange: this.handleChange }, Object.keys(selectOption).map(function (key) {
                    return (preact_1.h("option", { value: key, key: key, selected: code === key }, selectOption[key]));
                }))),
            preact_1.h("input", { ref: function (ref) {
                    _this.inputEl = ref;
                }, type: "text", className: dom_1.cls('filter-input'), onKeyUp: this.handleChange, value: value })));
    };
    return TextFilterComp;
}(preact_1.Component));
exports.TextFilter = hoc_1.connect(function (store, _a) {
    var filterIndex = _a.filterIndex, columnAddress = _a.columnAddress, filterState = _a.filterState;
    var column = store.column, data = store.data;
    var allColumnMap = column.allColumnMap;
    var filters = data.filters;
    return {
        columnInfo: allColumnMap[columnAddress.name],
        columnAddress: columnAddress,
        filterIndex: filterIndex,
        filters: filters,
        filterState: filterState
    };
})(TextFilterComp);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var tui_date_picker_1 = tslib_1.__importDefault(__webpack_require__(33));
var hoc_1 = __webpack_require__(4);
var instance_1 = __webpack_require__(7);
var dom_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(22);
var common_1 = __webpack_require__(0);
var keyboard_1 = __webpack_require__(18);
var constant_1 = __webpack_require__(17);
var DatePickerFilterComp = /** @class */ (function (_super) {
    tslib_1.__extends(DatePickerFilterComp, _super);
    function DatePickerFilterComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createDatePicker = function () {
            var _a = _this.props, columnInfo = _a.columnInfo, grid = _a.grid;
            var options = columnInfo.filter.options;
            var usageStatistics = grid.usageStatistics;
            var value = _this.getPreviousValue().value;
            var date;
            var format = 'yyyy/MM/dd';
            if (options) {
                if (options.format) {
                    format = options.format;
                    delete options.format;
                }
            }
            if (common_1.isString(value) && value.length) {
                date = new Date(value);
            }
            var defaultOptions = {
                date: date,
                type: 'date',
                input: {
                    element: _this.inputEl,
                    format: format
                },
                usageStatistics: usageStatistics
            };
            _this.datePickerEl = new tui_date_picker_1.default(_this.calendarWrapper, common_1.deepMergedCopy(defaultOptions, options || {}));
            _this.datePickerEl.on('change', _this.handleChange);
        };
        _this.handleKeyUp = common_1.debounce(function (ev) {
            var keyCode = ev.keyCode;
            var keyName = keyboard_1.keyNameMap[keyCode];
            var dispatch = _this.props.dispatch;
            if (keyboard_1.isNonPrintableKey(keyCode)) {
                return;
            }
            if (keyName === 'enter') {
                dispatch('applyActiveFilterState');
            }
            else {
                _this.handleChange();
            }
        }, constant_1.FILTER_DEBOUNCE_TIME);
        _this.handleChange = function () {
            var dispatch = _this.props.dispatch;
            var filterIndex = _this.props.filterIndex;
            var value = _this.inputEl.value;
            var code = _this.selectEl.value;
            dispatch('setActiveFilterState', { value: value, code: code }, filterIndex);
        };
        _this.getPreviousValue = function () {
            var _a = _this.props, filterIndex = _a.filterIndex, filterState = _a.filterState;
            var state = filterState.state;
            var code = 'eq';
            var value = '';
            if (state.length && state[filterIndex]) {
                var _b = state[filterIndex], prevCode = _b.code, prevValue = _b.value;
                code = prevCode;
                value = String(prevValue);
            }
            return { value: value, code: code };
        };
        return _this;
    }
    DatePickerFilterComp.prototype.componentDidMount = function () {
        this.createDatePicker();
    };
    DatePickerFilterComp.prototype.componentWillUnmount = function () {
        this.datePickerEl.destroy();
    };
    DatePickerFilterComp.prototype.render = function () {
        var _this = this;
        var columnInfo = this.props.columnInfo;
        var options = columnInfo.filter.options;
        var showIcon = !(options && options.showIcon === false);
        var selectOption = filter_1.filterSelectOption.date;
        var _a = this.getPreviousValue(), value = _a.value, code = _a.code;
        return (preact_1.h("div", null,
            preact_1.h("div", { className: dom_1.cls('filter-dropdown') },
                preact_1.h("select", { ref: function (ref) {
                        _this.selectEl = ref;
                    }, onChange: this.handleChange }, Object.keys(selectOption).map(function (key) {
                    return (preact_1.h("option", { value: key, key: key, selected: code === key }, selectOption[key]));
                }))),
            preact_1.h("div", { className: dom_1.cls('datepicker-input-container') },
                preact_1.h("input", { ref: function (ref) {
                        _this.inputEl = ref;
                    }, type: "text", className: dom_1.cls('filter-input', [showIcon, 'datepicker-input']), onKeyUp: this.handleKeyUp, value: value }),
                showIcon && preact_1.h("i", { className: dom_1.cls('date-icon') })),
            preact_1.h("div", { ref: function (ref) {
                    _this.calendarWrapper = ref;
                }, style: { marginTop: '-4px' } })));
    };
    return DatePickerFilterComp;
}(preact_1.Component));
exports.DatePickerFilter = hoc_1.connect(function (store, _a) {
    var filterIndex = _a.filterIndex, columnAddress = _a.columnAddress, filterState = _a.filterState;
    var column = store.column, id = store.id, data = store.data;
    var allColumnMap = column.allColumnMap;
    var filters = data.filters;
    return {
        grid: instance_1.getInstance(id),
        columnInfo: allColumnMap[columnAddress.name],
        columnAddress: columnAddress,
        filterIndex: filterIndex,
        filters: filters,
        filterState: filterState
    };
})(DatePickerFilterComp);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var dom_1 = __webpack_require__(2);
var FilterOperatorComp = /** @class */ (function (_super) {
    tslib_1.__extends(FilterOperatorComp, _super);
    function FilterOperatorComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChangeOperator = function (ev) {
            var value = ev.target.value;
            _this.props.dispatch('setActiveFilterOperator', value);
        };
        return _this;
    }
    FilterOperatorComp.prototype.render = function () {
        var operator = this.props.operator;
        return (preact_1.h("div", { className: dom_1.cls('filter-comparator-container') },
            preact_1.h("div", { className: dom_1.cls('filter-comparator') },
                preact_1.h("input", { type: "radio", name: "filterOperator", value: "AND", id: "AND", checked: operator === 'AND', onChange: this.handleChangeOperator }),
                preact_1.h("label", { for: "AND" }),
                preact_1.h("span", null, "AND")),
            preact_1.h("div", { className: dom_1.cls('filter-comparator') },
                preact_1.h("input", { type: "radio", id: "OR", name: "filterOperator", value: "OR", checked: operator === 'OR', onChange: this.handleChangeOperator }),
                preact_1.h("label", { for: "OR" }),
                preact_1.h("span", null, "OR"))));
    };
    return FilterOperatorComp;
}(preact_1.Component));
exports.FilterOperator = hoc_1.connect(function (_, _a) {
    var filterState = _a.filterState;
    return ({
        operator: filterState.operator || 'AND'
    });
})(FilterOperatorComp);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var instance_1 = __webpack_require__(7);
var dom_1 = __webpack_require__(2);
var common_1 = __webpack_require__(0);
var data_1 = __webpack_require__(6);
var constant_1 = __webpack_require__(17);
var SelectFilterComp = /** @class */ (function (_super) {
    tslib_1.__extends(SelectFilterComp, _super);
    function SelectFilterComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            searchInput: ''
        };
        _this.handleChange = common_1.debounce(function (ev) {
            var dispatch = _this.props.dispatch;
            var _a = ev.target, id = _a.id, checked = _a.checked;
            dispatch('setActiveSelectFilterState', id, checked);
        }, constant_1.FILTER_DEBOUNCE_TIME);
        _this.toggleAllColumnCheckbox = common_1.debounce(function (ev) {
            var checked = ev.target.checked;
            _this.props.dispatch('toggleSelectAllCheckbox', checked);
        }, constant_1.FILTER_DEBOUNCE_TIME);
        _this.searchColumnData = common_1.debounce(function (ev) {
            var value = ev.target.value;
            _this.setState({ searchInput: value });
        }, constant_1.FILTER_DEBOUNCE_TIME);
        return _this;
    }
    SelectFilterComp.prototype.render = function () {
        var _this = this;
        var _a = this.props, columnData = _a.columnData, isAllSelected = _a.isAllSelected;
        var searchInput = this.state.searchInput;
        var data = searchInput.length
            ? columnData.filter(function (item) { return String(item.value).indexOf(searchInput) !== -1; })
            : columnData;
        return (preact_1.h("div", { className: dom_1.cls('filter-list-container') },
            preact_1.h("input", { type: "text", className: dom_1.cls('filter-input'), placeholder: "Search...", onKeyUp: this.searchColumnData, value: searchInput ? String(searchInput) : '' }),
            preact_1.h("li", { className: dom_1.cls('filter-list-item') },
                preact_1.h("input", { type: "checkbox", id: "filter_select_all", value: "select_all", onChange: this.toggleAllColumnCheckbox, checked: isAllSelected }),
                preact_1.h("label", { for: "filter_select_all" }),
                preact_1.h("span", null, "Select All")),
            preact_1.h("ul", { className: dom_1.cls('filter-list') }, data.map(function (item) {
                var value = item.value, checked = item.checked;
                var text = String(value);
                return (preact_1.h("li", { className: dom_1.cls('filter-list-item', [checked, 'filter-list-item-checked']), key: text },
                    preact_1.h("input", { type: "checkbox", id: text, checked: checked, onChange: _this.handleChange }),
                    preact_1.h("label", { for: text }),
                    preact_1.h("span", null, value)));
            }))));
    };
    return SelectFilterComp;
}(preact_1.Component));
exports.SelectFilter = hoc_1.connect(function (store, _a) {
    var columnAddress = _a.columnAddress, filterState = _a.filterState;
    var column = store.column, id = store.id, data = store.data;
    var filters = data.filters, rawData = data.rawData;
    var allColumnMap = column.allColumnMap;
    var state = filterState.state;
    var columnName = columnAddress.name;
    var uniqueColumnData = data_1.getUniqColumnData(rawData, columnName);
    var columnData = uniqueColumnData.map(function (value) { return ({
        value: value,
        checked: common_1.some(function (item) { return value === item.value; }, state)
    }); });
    return {
        grid: instance_1.getInstance(id),
        columnData: columnData,
        columnInfo: allColumnMap[columnName],
        columnAddress: columnAddress,
        filters: filters,
        isAllSelected: state.length === uniqueColumnData.length
    };
})(SelectFilterComp);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var dom_1 = __webpack_require__(2);
var HeightResizeHandleComp = /** @class */ (function (_super) {
    tslib_1.__extends(HeightResizeHandleComp, _super);
    function HeightResizeHandleComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dragStartY = -1;
        _this.dragStartBodyHeight = -1;
        _this.handleMouseDown = function (ev) {
            _this.dragStartY = ev.pageY;
            _this.dragStartBodyHeight = _this.props.bodyHeight;
            dom_1.setCursorStyle('row-resize');
            document.addEventListener('mousemove', _this.handleMouseMove);
            document.addEventListener('mouseup', _this.clearDocumentEvents);
            document.addEventListener('selectstart', _this.handleSelectStart);
        };
        _this.handleSelectStart = function (ev) {
            ev.preventDefault();
        };
        _this.handleMouseMove = function (ev) {
            var distance = ev.pageY - _this.dragStartY;
            _this.props.dispatch('setBodyHeight', _this.dragStartBodyHeight + distance);
        };
        _this.clearDocumentEvents = function () {
            dom_1.setCursorStyle('');
            document.removeEventListener('mousemove', _this.handleMouseMove);
            document.removeEventListener('mouseup', _this.clearDocumentEvents);
            document.removeEventListener('selectstart', _this.handleSelectStart);
        };
        return _this;
    }
    HeightResizeHandleComp.prototype.render = function () {
        return (preact_1.h("div", { class: dom_1.cls('height-resize-handle'), onMouseDown: this.handleMouseDown },
            preact_1.h("button", null,
                preact_1.h("span", null))));
    };
    return HeightResizeHandleComp;
}(preact_1.Component));
exports.HeightResizeHandle = hoc_1.connect(function (_a) {
    var dimension = _a.dimension;
    return ({
        bodyHeight: dimension.bodyHeight
    });
})(HeightResizeHandleComp);


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var hoc_1 = __webpack_require__(4);
var dom_1 = __webpack_require__(2);
var keyboard_1 = __webpack_require__(18);
var browser_1 = __webpack_require__(45);
var clipboard_1 = __webpack_require__(24);
var common_1 = __webpack_require__(0);
var KEYDOWN_LOCK_TIME = 10;
var ClipboardComp = /** @class */ (function (_super) {
    tslib_1.__extends(ClipboardComp, _super);
    function ClipboardComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLocked = false;
        _this.lock = function () {
            _this.isLocked = true;
            setTimeout(_this.unlock.bind(_this), KEYDOWN_LOCK_TIME);
        };
        /**
         * Unlock
         * @private
         */
        _this.unlock = function () {
            _this.isLocked = false;
        };
        _this.onBlur = function () {
            _this.props.dispatch('setNavigating', false);
        };
        _this.dispatchKeyboardEvent = function (type, command) {
            var dispatch = _this.props.dispatch;
            switch (type) {
                case 'move':
                    dispatch('selectionEnd');
                    dispatch('moveFocus', command);
                    dispatch('setScrollToFocus');
                    break;
                case 'edit':
                    dispatch('editFocus', command);
                    dispatch('setScrollToFocus');
                    break;
                case 'select':
                    dispatch('moveSelection', command);
                    dispatch('setScrollToSelection');
                    break;
                case 'remove':
                    dispatch('removeContent');
                    break;
                /*
                 * Call directly because of timing issues
                 * - Step 1: When the keys(ctrl+c) are downed on grid, 'clipboard' is triggered.
                 * - Step 2: When 'clipboard' event is fired,
                 *           all browsers append copied data and focus to contenteditable element and
                 *           IE browsers set selection for triggering 'copy' event.
                 * - Step 3: Finally, when 'copy' event is fired on browsers,
                 *           setting copied data to ClipboardEvent.clipboardData or window.clipboardData(IE).
                 */
                case 'clipboard': {
                    if (!_this.el) {
                        return;
                    }
                    var store = _this.context.store;
                    _this.el.innerHTML = clipboard_1.getText(store);
                    if (dom_1.isSupportWindowClipboardData()) {
                        dom_1.setClipboardSelection(_this.el[0].childNodes[0]);
                    }
                    break;
                }
                default:
                    break;
            }
        };
        /**
         * Event handler for the keydown event
         * @param {Event} ev - Event
         * @private
         */
        _this.onKeyDown = function (ev) {
            if (_this.isLocked) {
                ev.preventDefault();
                return;
            }
            var _a = keyboard_1.keyEventGenerate(ev), type = _a.type, command = _a.command;
            if (!type) {
                return;
            }
            _this.lock();
            if (type !== 'clipboard') {
                ev.preventDefault();
            }
            if (!(type === 'clipboard' && command === 'paste')) {
                _this.dispatchKeyboardEvent(type, command);
            }
        };
        _this.onCopy = function (ev) {
            if (!_this.el) {
                return;
            }
            var text = _this.el.innerHTML;
            if (dom_1.isSupportWindowClipboardData()) {
                window.clipboardData.setData('Text', text);
            }
            else if (ev.clipboardData) {
                ev.clipboardData.setData('text/plain', text);
            }
            ev.preventDefault();
        };
        _this.onPaste = function (ev) {
            var clipboardData = ev.clipboardData || window.clipboardData;
            if (!clipboardData) {
                return;
            }
            if (!browser_1.isEdge() && !dom_1.isSupportWindowClipboardData()) {
                ev.preventDefault();
                _this.pasteInOtherBrowsers(clipboardData);
            }
            else {
                _this.pasteInMSBrowser(clipboardData);
            }
        };
        return _this;

    }
    ClipboardComp.prototype.isClipboardFocused = function () {
        return document.hasFocus() && document.activeElement === this.el;
    };
    /**
     * Paste copied data in other browsers (chrome, safari, firefox)
     * [if] condition is copying from ms-excel,
     * [else] condition is copying from the grid or the copied data is plain text.
     */
    ClipboardComp.prototype.pasteInOtherBrowsers = function (clipboardData) {
        if (!this.el) {
            return;
        }
        var el = this.el;
        var html = clipboardData.getData('text/html');
        var data;
        if (html && html.indexOf('table') !== -1) {
            // step 1: Append copied data on contenteditable element to parsing correctly table data.
            el.innerHTML = html;
            // step 2: Make grid data from cell data of appended table element.
            var rows = el.querySelector('tbody').rows;
            data = dom_1.convertTableToData(rows);
            // step 3: Empty contenteditable element to reset.
            el.innerHTML = '';
        }
        else {
            data = common_1.convertTextToData(clipboardData.getData('text/plain'));
        }
        this.props.dispatch('paste', data);
    };
    /**
     * Paste copied data in MS-browsers (IE, edge)
     */
    ClipboardComp.prototype.pasteInMSBrowser = function (clipboardData) {
        var _this = this;
        var data = common_1.convertTextToData(clipboardData.getData('Text'));
        setTimeout(function () {
            if (!_this.el) {
                return;
            }
            var el = _this.el;
            if (el.querySelector('table')) {
                var rows = el.querySelector('tbody').rows;
                data = dom_1.convertTableToData(rows);
            }
            _this.props.dispatch('paste', data);
            el.innerHTML = '';
        }, 0);
    };
    ClipboardComp.prototype.componentDidUpdate = function () {
        var _this = this;
        setTimeout(function () {
            var _a = _this.props, navigating = _a.navigating, editing = _a.editing, filtering = _a.filtering;
            if (_this.el &&
                navigating &&
                !filtering &&
                !editing &&
                !_this.isClipboardFocused() &&
                !browser_1.isMobile()) {
                _this.el.focus();
            }
        });
    };
    ClipboardComp.prototype.render = function () {
        var _this = this;
        return (preact_1.h("div", { class: dom_1.cls('clipboard'), onBlur: this.onBlur, onKeyDown: this.onKeyDown, onCopy: this.onCopy, onPaste: this.onPaste, contentEditable: true, ref: function (el) {
                _this.el = el;
            } }));
    };
    return ClipboardComp;
}(preact_1.Component));
exports.Clipboard = hoc_1.connect(function (_a) {
    var focus = _a.focus, filterLayerState = _a.filterLayerState;
    return ({
        navigating: focus.navigating,
        editing: !!focus.editingAddress,
        filtering: !!filterLayerState.activeColumnAddress
    });
})(ClipboardComp);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preact_1 = __webpack_require__(3);
var tui_pagination_1 = tslib_1.__importDefault(__webpack_require__(104));
var hoc_1 = __webpack_require__(4);
var dom_1 = __webpack_require__(2);
var common_1 = __webpack_require__(0);
var instance_1 = __webpack_require__(7);
var PaginationComp = /** @class */ (function (_super) {
    tslib_1.__extends(PaginationComp, _super);
    function PaginationComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationComp.prototype.shouldComponentUpdate = function (nextProps) {
        return !common_1.shallowEqual(this.props.pageOptions, nextProps.pageOptions);
    };
    PaginationComp.prototype.componentDidMount = function () {
        if (!this.el) {
            return;
        }
        this.createPagination();
    };
    PaginationComp.prototype.componentWillReceiveProps = function (nextProps) {
        if (!this.el || !this.tuiPagination) {
            return;
        }
        var pageOptions = nextProps.pageOptions;
        var totalCount = pageOptions.totalCount, page = pageOptions.page, perPage = pageOptions.perPage;
        if (!common_1.isNumber(totalCount) || !common_1.isNumber(page) || !common_1.isNumber(perPage)) {
            return;
        }
        if (this.props.pageOptions.perPage !== perPage ||
            this.props.pageOptions.totalCount !== totalCount) {
            this.tuiPagination.setItemsPerPage(perPage);
            this.tuiPagination.reset(totalCount);
        }
        if (this.tuiPagination.getCurrentPage() !== page) {
            this.removeEventListener();
            this.tuiPagination.movePageTo(page);
            this.addEventListener();
        }
    };
    PaginationComp.prototype.componentWillUnmount = function () {
        if (this.tuiPagination) {
            this.removeEventListener();
        }
    };
    PaginationComp.prototype.createPagination = function () {
        var _a = this.props, pageOptions = _a.pageOptions, paginationHolder = _a.paginationHolder, usageStatistics = _a.grid.usageStatistics;
        var totalCount = pageOptions.totalCount, perPage = pageOptions.perPage, page = pageOptions.page;
        var options = {
            totalItems: totalCount,
            itemsPerPage: perPage,
            page: page,
            usageStatistics: usageStatistics
        };
        this.tuiPagination = new tui_pagination_1.default(this.el, options);
        this.addEventListener();
        paginationHolder.setPagination(this.tuiPagination);
    };
    PaginationComp.prototype.addEventListener = function () {
        var _a = this.props, dataProvider = _a.dataProvider, pageOptions = _a.pageOptions, dispatch = _a.dispatch;
        this.tuiPagination.on('beforeMove', function (evt) {
            var currentPage = evt.page;
            if (pageOptions.useClient) {
                dispatch('movePage', currentPage);
            }
            else {
                dataProvider.readData(currentPage);
            }
        });
    };
    PaginationComp.prototype.removeEventListener = function () {
        this.tuiPagination.off('beforeMove');
    };
    PaginationComp.prototype.render = function (_a) {
        var _this = this;
        var pageOptions = _a.pageOptions;
        return (!common_1.isEmpty(pageOptions) && (preact_1.h("div", { ref: function (el) {
                _this.el = el;
            }, class: "tui-pagination " + dom_1.cls('pagination') })));
    };
    return PaginationComp;
}(preact_1.Component));
exports.Pagination = hoc_1.connect(function (_a) {
    var id = _a.id, data = _a.data;
    return ({
        pageOptions: data.pageOptions,
        dataProvider: instance_1.getDataProvider(id),
        paginationHolder: instance_1.getPaginationManager(id),
        grid: instance_1.getInstance(id)
    });
})(PaginationComp);


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__104__;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var viewport = tslib_1.__importStar(__webpack_require__(29));
var dimension = tslib_1.__importStar(__webpack_require__(38));
var data = tslib_1.__importStar(__webpack_require__(14));
var column = tslib_1.__importStar(__webpack_require__(106));
var keyboard = tslib_1.__importStar(__webpack_require__(107));
var mouse = tslib_1.__importStar(__webpack_require__(109));
var focus = tslib_1.__importStar(__webpack_require__(16));
var summary = tslib_1.__importStar(__webpack_require__(27));
var selection = tslib_1.__importStar(__webpack_require__(15));
var renderState = tslib_1.__importStar(__webpack_require__(36));
var tree = tslib_1.__importStar(__webpack_require__(25));
var sort = tslib_1.__importStar(__webpack_require__(26));
var filter = tslib_1.__importStar(__webpack_require__(28));
var dispatchMap = tslib_1.__assign({}, viewport, dimension, data, column, mouse, focus, keyboard, summary, selection, renderState, tree, sort, filter);
function createDispatcher(store) {
    return function dispatch(fname) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // @ts-ignore
        dispatchMap[fname].apply(dispatchMap, [store].concat(args));
    };
}
exports.createDispatcher = createDispatcher;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var column_1 = __webpack_require__(23);
var data_1 = __webpack_require__(13);
var gridEvent_1 = tslib_1.__importDefault(__webpack_require__(11));
var eventBus_1 = __webpack_require__(10);
var focus_1 = __webpack_require__(16);
var summary_1 = __webpack_require__(27);
var observable_1 = __webpack_require__(5);
var sort_1 = __webpack_require__(26);
var filter_1 = __webpack_require__(28);
var selection_1 = __webpack_require__(15);
var common_1 = __webpack_require__(0);
function setFrozenColumnCount(_a, count) {
    var column = _a.column;
    column.frozenCount = count;
}
exports.setFrozenColumnCount = setFrozenColumnCount;
function setColumnWidth(_a, side, index, width) {
    var column = _a.column, id = _a.id;
    var columnItem = column.visibleColumnsBySideWithRowHeader[side][index];
    var eventBus = eventBus_1.getEventBus(id);
    var gridEvent = new gridEvent_1.default({ columnName: columnItem.name, width: width });
    /**
     * Occurs when column is resized
     * @event Grid#columnResize
     * @property {number} columnName - columnName of the target cell
     * @property {number} width - width of the resized column
     * @property {Grid} instance - Current grid instance
     */
    eventBus.trigger('columnResize', gridEvent);
    if (!gridEvent.isStopped()) {
        columnItem.baseWidth = width;
        columnItem.fixedWidth = true;
    }
}
exports.setColumnWidth = setColumnWidth;
function setColumns(store, optColumns) {
    var column = store.column, data = store.data;
    var _a = column.dataForColumnCreation, columnOptions = _a.columnOptions, copyOptions = _a.copyOptions, treeColumnOptions = _a.treeColumnOptions, rowHeaders = _a.rowHeaders;
    var relationColumns = optColumns.reduce(function (acc, _a) {
        var _b = _a.relations, relations = _b === void 0 ? [] : _b;
        return acc.concat(column_1.createRelationColumns(relations)).filter(function (columnName, index) {
            var foundIndex = acc.indexOf(columnName);
            return foundIndex === -1 || foundIndex === index;
        });
    }, []);
    var columnInfos = optColumns.map(function (optColumn) {
        return column_1.createColumn(optColumn, columnOptions, relationColumns, copyOptions, treeColumnOptions, column.headerAlignInfo);
    });
    var dataCreationKey = data_1.generateDataCreationKey();
    column.allColumns = rowHeaders.concat(columnInfos);
    var allColumnMap = column.allColumnMap, treeColumnName = column.treeColumnName, treeIcon = column.treeIcon;
    data.viewData.forEach(function (viewRow) {
        if (Array.isArray(viewRow.__unobserveFns__)) {
            viewRow.__unobserveFns__.forEach(function (fn) { return fn(); });
        }
    });
    data.rawData = data.rawData.map(function (row) {
        row.uniqueKey = dataCreationKey + "-" + row.rowKey;
        return row;
    });
    data.viewData = data.rawData.map(function (row) {
        return observable_1.isObservable(row)
            ? data_1.createViewRow(row, allColumnMap, data.rawData, treeColumnName, treeIcon)
            : { rowKey: row.rowKey, sortKey: row.sortKey, uniqueKey: row.uniqueKey };
    });
    focus_1.initFocus(store);
    selection_1.initSelection(store);
    filter_1.initFilter(store);
    sort_1.unsort(store);
    summary_1.addColumnSummaryValues(store);
}
exports.setColumns = setColumns;
function resetColumnWidths(_a, widths) {
    var column = _a.column;
    column.visibleColumns.forEach(function (columnInfo, idx) {
        columnInfo.baseWidth = widths[idx];
    });
}
exports.resetColumnWidths = resetColumnWidths;
function hideColumn(store, columnName) {
    var columnItem = store.column.allColumnMap[columnName];
    var focusedColumnName = store.focus.columnName;
    if (focusedColumnName === columnName) {
        focus_1.initFocus(store);
    }
    selection_1.initSelection(store);
    filter_1.unfilter(store, columnName);
    sort_1.unsort(store, columnName);
    if (columnItem) {
        columnItem.hidden = true;
    }
}
exports.hideColumn = hideColumn;
function showColumn(_a, columnName) {
    var column = _a.column;
    var columnItem = column.allColumnMap[columnName];
    if (columnItem) {
        columnItem.hidden = false;
    }
}
exports.showColumn = showColumn;
function setComplexHeaderColumns(store, complexHeaderColumns) {
    store.column.complexHeaderColumns = complexHeaderColumns;
}
exports.setComplexHeaderColumns = setComplexHeaderColumns;
function changeColumnHeadersByName(_a, columnsMap) {
    var column = _a.column;
    var complexHeaderColumns = column.complexHeaderColumns, allColumnMap = column.allColumnMap;
    Object.keys(columnsMap).forEach(function (columnName) {
        var col = allColumnMap[columnName];
        if (col) {
            col.header = columnsMap[columnName];
        }
        if (complexHeaderColumns.length) {
            var complexCol = common_1.findProp('name', columnName, complexHeaderColumns);
            if (complexCol) {
                complexCol.header = columnsMap[columnName];
            }
        }
    });
    observable_1.notify(column, 'allColumns');
}
exports.changeColumnHeadersByName = changeColumnHeadersByName;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var keyboard_1 = __webpack_require__(108);
var focus_1 = __webpack_require__(16);
var selection_1 = __webpack_require__(15);
var column_1 = __webpack_require__(8);
var rowSpan_1 = __webpack_require__(9);
var data_1 = __webpack_require__(6);
function moveFocus(store, command) {
    var focus = store.focus, data = store.data, visibleColumnsWithRowHeader = store.column.visibleColumnsWithRowHeader, id = store.id;
    var filteredViewData = data.filteredViewData;
    var rowIndex = focus.rowIndex, columnIndex = focus.totalColumnIndex;
    if (rowIndex === null || columnIndex === null) {
        return;
    }
    var _a = keyboard_1.getNextCellIndex(store, command, [rowIndex, columnIndex]), nextRowIndex = _a[0], nextColumnIndex = _a[1];
    var nextColumnName = visibleColumnsWithRowHeader[nextColumnIndex].name;
    if (!column_1.isRowHeader(nextColumnName)) {
        focus.navigating = true;
        focus_1.changeFocus(store, filteredViewData[nextRowIndex].rowKey, nextColumnName, id);
    }
}
exports.moveFocus = moveFocus;
function editFocus(store, command) {
    var focus = store.focus, data = store.data, column = store.column, id = store.id;
    var rowKey = focus.rowKey, columnName = focus.columnName;
    if (rowKey === null || columnName === null) {
        return;
    }
    var foundIndex = data_1.findIndexByRowKey(data, column, id, rowKey);
    if (command === 'currentCell' && data_1.isEditableCell(data, column, foundIndex, columnName)) {
        focus.navigating = false;
        focus.editingAddress = { rowKey: rowKey, columnName: columnName };
    }
    else if (command === 'nextCell' || command === 'prevCell') {
        // move prevCell or nextCell by tab keyMap
        moveTabFocus(store, command);
    }
}
exports.editFocus = editFocus;
function moveTabFocus(store, command) {
    var focus = store.focus, data = store.data, column = store.column, id = store.id;
    var visibleColumnsWithRowHeader = column.visibleColumnsWithRowHeader;
    var rowKey = focus.rowKey, columnName = focus.columnName, rowIndex = focus.rowIndex, columnIndex = focus.totalColumnIndex;
    if (rowKey === null || columnName === null || rowIndex === null || columnIndex === null) {
        return;
    }
    var _a = keyboard_1.getNextCellIndex(store, command, [rowIndex, columnIndex]), nextRowIndex = _a[0], nextColumnIndex = _a[1];
    var nextRowKey = data.filteredRawData[nextRowIndex].rowKey;
    var nextColumnName = visibleColumnsWithRowHeader[nextColumnIndex].name;
    if (!column_1.isRowHeader(nextColumnName)) {
        focus.navigating = true;
        focus_1.changeFocus(store, nextRowKey, nextColumnName, id);
        if (focus.tabMode === 'moveAndEdit' &&
            data_1.isEditableCell(data, column, nextRowIndex, nextColumnName)) {
            setTimeout(function () {
                focus.navigating = false;
                focus.editingAddress = { rowKey: nextRowKey, columnName: nextColumnName };
            });
        }
    }
}
exports.moveTabFocus = moveTabFocus;
function moveSelection(store, command) {
    var _a;
    var selection = store.selection, focus = store.focus, data = store.data, _b = store.column, visibleColumnsWithRowHeader = _b.visibleColumnsWithRowHeader, rowHeaderCount = _b.rowHeaderCount, id = store.id;
    var filteredViewData = data.filteredViewData, sortState = data.sortState;
    var focusRowIndex = focus.rowIndex, totalFocusColumnIndex = focus.totalColumnIndex;
    var currentInputRange = selection.inputRange;
    if (focusRowIndex === null || totalFocusColumnIndex === null) {
        return;
    }
    if (!currentInputRange) {
        currentInputRange = selection.inputRange = {
            row: [focusRowIndex, focusRowIndex],
            column: [totalFocusColumnIndex, totalFocusColumnIndex]
        };
    }
    var rowLength = filteredViewData.length;
    var columnLength = visibleColumnsWithRowHeader.length;
    var rowStartIndex = currentInputRange.row[0];
    var rowIndex = currentInputRange.row[1];
    var columnStartIndex = currentInputRange.column[0];
    var columnIndex = currentInputRange.column[1];
    var nextCellIndexes;
    if (command === 'all') {
        rowStartIndex = 0;
        columnStartIndex = rowHeaderCount;
        nextCellIndexes = [rowLength - 1, columnLength - 1];
    }
    else {
        nextCellIndexes = keyboard_1.getNextCellIndex(store, command, [rowIndex, columnIndex]);
        if (rowSpan_1.isRowSpanEnabled(sortState)) {
            nextCellIndexes = keyboard_1.getNextCellIndexWithRowSpan(store, command, rowIndex, [columnStartIndex, columnIndex], nextCellIndexes);
        }
    }
    var nextRowIndex = nextCellIndexes[0], nextColumnIndex = nextCellIndexes[1];
    var nextColumnName = visibleColumnsWithRowHeader[nextColumnIndex].name;
    var startRowIndex = rowStartIndex;
    var endRowIndex = nextRowIndex;
    if (command !== 'all') {
        _a = rowSpan_1.getRowRangeWithRowSpan([startRowIndex, endRowIndex], [columnStartIndex, nextColumnIndex], visibleColumnsWithRowHeader, focus.rowIndex, data), startRowIndex = _a[0], endRowIndex = _a[1];
    }
    if (!column_1.isRowHeader(nextColumnName)) {
        var inputRange = {
            row: [startRowIndex, endRowIndex],
            column: [columnStartIndex, nextColumnIndex]
        };
        selection_1.changeSelectionRange(selection, inputRange, id);
    }
}
exports.moveSelection = moveSelection;
function removeContent(store) {
    var visibleColumnsWithRowHeader = store.column.visibleColumnsWithRowHeader, data = store.data;
    var rawData = data.rawData;
    var removeRange = keyboard_1.getRemoveRange(store);
    if (!removeRange) {
        return;
    }
    var _a = removeRange.column, columnStart = _a[0], columnEnd = _a[1], _b = removeRange.row, rowStart = _b[0], rowEnd = _b[1];
    visibleColumnsWithRowHeader
        .slice(columnStart, columnEnd + 1)
        .filter(function (_a) {
        var editor = _a.editor;
        return !!editor;
    })
        .forEach(function (_a) {
        var name = _a.name;
        rawData.slice(rowStart, rowEnd + 1).forEach(function (row) {
            row[name] = '';
        });
    });
}
exports.removeContent = removeContent;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var rowSpan_1 = __webpack_require__(9);
var selection_1 = __webpack_require__(12);
function getPrevRowIndex(rowIndex, heights) {
    var index = rowIndex;
    while (index > 0) {
        index -= 1;
        if (heights[index]) {
            break;
        }
    }
    return index;
}
function getNextRowIndex(rowIndex, heights) {
    var index = rowIndex;
    while (index < heights.length - 1) {
        index += 1;
        if (heights[index]) {
            break;
        }
    }
    return index;
}
function getNextCellIndex(store, command, _a) {
    var rowIndex = _a[0], columnIndex = _a[1];
    var data = store.data, _b = store.column, visibleColumnsWithRowHeader = _b.visibleColumnsWithRowHeader, rowHeaderCount = _b.rowHeaderCount, heights = store.rowCoords.heights;
    var viewData = data.viewData, sortState = data.sortState, filteredRawData = data.filteredRawData, filteredViewData = data.filteredViewData;
    var columnName = visibleColumnsWithRowHeader[columnIndex].name;
    var lastRow = filteredRawData.length - 1 === rowIndex;
    var lastColumn = visibleColumnsWithRowHeader.length - 1 === columnIndex;
    var firstRow = rowIndex === 0;
    var firstColumn = columnIndex === rowHeaderCount;
    switch (command) {
        case 'up':
            if (rowSpan_1.isRowSpanEnabled(sortState)) {
                rowIndex = rowSpan_1.getRowSpanTopIndex(rowIndex, columnName, filteredRawData);
            }
            rowIndex = getPrevRowIndex(rowIndex, heights);
            break;
        case 'down':
            if (rowSpan_1.isRowSpanEnabled(sortState)) {
                rowIndex = rowSpan_1.getRowSpanBottomIndex(rowIndex, columnName, filteredRawData);
            }
            rowIndex = getNextRowIndex(rowIndex, heights);
            break;
        case 'left':
            columnIndex -= 1;
            break;
        case 'right':
            columnIndex += 1;
            break;
        case 'firstCell':
            columnIndex = rowHeaderCount;
            rowIndex = 0;
            break;
        case 'lastCell':
            columnIndex = visibleColumnsWithRowHeader.length - 1;
            rowIndex = viewData.length - 1;
            break;
        case 'pageUp': {
            rowIndex = 0;
            break;
        }
        case 'pageDown': {
            rowIndex = viewData.length - 1;
            break;
        }
        case 'firstColumn':
            columnIndex = rowHeaderCount;
            break;
        case 'lastColumn':
            columnIndex = visibleColumnsWithRowHeader.length - 1;
            break;
        case 'nextCell':
            if (lastRow && lastColumn) {
                break;
            }
            if (lastColumn) {
                if (rowSpan_1.isRowSpanEnabled(sortState)) {
                    rowIndex = rowSpan_1.getRowSpanBottomIndex(rowIndex, columnName, filteredRawData);
                }
                rowIndex = getNextRowIndex(rowIndex, heights);
                columnIndex = rowHeaderCount;
            }
            else {
                columnIndex += 1;
            }
            break;
        case 'prevCell':
            if (firstRow && firstColumn) {
                break;
            }
            if (firstColumn) {
                if (rowSpan_1.isRowSpanEnabled(sortState)) {
                    rowIndex = rowSpan_1.getRowSpanTopIndex(rowIndex, columnName, filteredRawData);
                }
                rowIndex = getPrevRowIndex(rowIndex, heights);
                columnIndex = visibleColumnsWithRowHeader.length - 1;
            }
            else {
                columnIndex -= 1;
            }
            break;
        default:
            break;
    }
    rowIndex = common_1.clamp(rowIndex, 0, filteredViewData.length - 1);
    columnIndex = common_1.clamp(columnIndex, 0, visibleColumnsWithRowHeader.length - 1);
    return [rowIndex, columnIndex];
}
exports.getNextCellIndex = getNextCellIndex;
function getRemoveRange(store) {
    var focus = store.focus, selection = store.selection;
    var totalColumnIndex = focus.totalColumnIndex, originalRowIndex = focus.originalRowIndex;
    var originalRange = selection.originalRange;
    if (originalRange) {
        return originalRange;
    }
    if (!common_1.isNull(totalColumnIndex) && !common_1.isNull(originalRowIndex)) {
        return {
            column: [totalColumnIndex, totalColumnIndex],
            row: [originalRowIndex, originalRowIndex]
        };
    }
    return null;
}
exports.getRemoveRange = getRemoveRange;
function getNextCellIndexWithRowSpan(store, command, currentRowIndex, columnRange, cellIndexes) {
    var rowIndex = cellIndexes[0];
    var columnIndex = cellIndexes[1];
    var _a = selection_1.getSortedRange(columnRange), startColumnIndex = _a[0], endColumnIndex = _a[1];
    for (var index = startColumnIndex; index <= endColumnIndex; index += 1) {
        var nextRowIndex = getNextCellIndex(store, command, [currentRowIndex, index])[0];
        if ((command === 'up' && nextRowIndex < rowIndex) ||
            (command === 'down' && nextRowIndex > rowIndex)) {
            rowIndex = nextRowIndex;
        }
    }
    return [rowIndex, columnIndex];
}
exports.getNextCellIndexWithRowSpan = getNextCellIndexWithRowSpan;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var column_1 = __webpack_require__(8);
var focus_1 = __webpack_require__(16);
var selection_1 = __webpack_require__(15);
var rowSpan_1 = __webpack_require__(9);
var selection_2 = __webpack_require__(12);
var data_1 = __webpack_require__(6);
var mouse_1 = __webpack_require__(37);
function stopAutoScroll(selection) {
    var intervalIdForAutoScroll = selection.intervalIdForAutoScroll;
    if (intervalIdForAutoScroll !== null) {
        clearInterval(intervalIdForAutoScroll);
        selection.intervalIdForAutoScroll = null;
    }
}
function isAutoScrollable(overflowX, overflowY) {
    return !(overflowX === 0 && overflowY === 0);
}
function adjustScrollLeft(overflowX, viewport) {
    var scrollPixelScale = viewport.scrollPixelScale, scrollLeft = viewport.scrollLeft, maxScrollLeft = viewport.maxScrollLeft;
    if (overflowX < 0) {
        viewport.scrollLeft = Math.max(0, scrollLeft - scrollPixelScale);
    }
    else if (overflowX > 0) {
        viewport.scrollLeft = Math.min(maxScrollLeft, scrollLeft + scrollPixelScale);
    }
}
function adjustScrollTop(overflowY, viewport) {
    var scrollTop = viewport.scrollTop, maxScrollTop = viewport.maxScrollTop, scrollPixelScale = viewport.scrollPixelScale;
    if (overflowY < 0) {
        viewport.scrollTop = Math.max(0, scrollTop - scrollPixelScale);
    }
    else if (overflowY > 0) {
        viewport.scrollTop = Math.min(maxScrollTop, scrollTop + scrollPixelScale);
    }
}
function adjustScroll(viewport, overflow) {
    if (overflow.x) {
        adjustScrollLeft(overflow.x, viewport);
    }
    if (overflow.y) {
        adjustScrollTop(overflow.y, viewport);
    }
}
function setScrolling(_a, bodyWidth, selection, dimension, viewport) {
    var pageX = _a.pageX, pageY = _a.pageY;
    var overflow = mouse_1.getOverflowFromMousePosition(pageX, pageY, bodyWidth, dimension);
    stopAutoScroll(selection);
    if (isAutoScrollable(overflow.x, overflow.y)) {
        selection.intervalIdForAutoScroll = setInterval(adjustScroll.bind(null, viewport, overflow));
    }
}
function setNavigating(_a, navigating) {
    var focus = _a.focus;
    focus.navigating = navigating;
}
exports.setNavigating = setNavigating;
function selectionEnd(_a) {
    var selection = _a.selection;
    selection.inputRange = null;
}
exports.selectionEnd = selectionEnd;
function updateSelection(store, dragData) {
    var _a;
    var viewport = store.viewport, selection = store.selection, column = store.column, id = store.id, data = store.data, focus = store.focus;
    var scrollTop = viewport.scrollTop, scrollLeft = viewport.scrollLeft;
    var pageX = dragData.pageX, pageY = dragData.pageY;
    var curInputRange = selection.inputRange;
    var visibleColumnsWithRowHeader = column.visibleColumnsWithRowHeader;
    var startRowIndex, startColumnIndex, endRowIndex;
    var viewInfo = { pageX: pageX, pageY: pageY, scrollTop: scrollTop, scrollLeft: scrollLeft };
    var endColumnIndex = mouse_1.findColumnIndexByPosition(store, viewInfo);
    endRowIndex = mouse_1.findRowIndexByPosition(store, viewInfo);
    if (curInputRange === null) {
        var totalColumnIndex = focus.totalColumnIndex, rowIndex = focus.rowIndex;
        startColumnIndex = totalColumnIndex;
        startRowIndex = rowIndex;
    }
    else {
        startRowIndex = curInputRange.row[0];
        startColumnIndex = curInputRange.column[0];
    }
    if (startColumnIndex < 0 || endColumnIndex < 0 || startRowIndex < 0 || endRowIndex < 0) {
        return;
    }
    _a = rowSpan_1.getRowRangeWithRowSpan([startRowIndex, endRowIndex], [startColumnIndex, endColumnIndex], visibleColumnsWithRowHeader, store.focus.rowIndex, data), startRowIndex = _a[0], endRowIndex = _a[1];
    var inputRange = {
        row: [startRowIndex, endRowIndex],
        column: [startColumnIndex, endColumnIndex]
    };
    selection_1.changeSelectionRange(selection, inputRange, id);
}
function dragMoveBody(store, dragStartData, dragData, elementInfo) {
    var dimension = store.dimension, columnCoords = store.columnCoords, selection = store.selection, viewport = store.viewport;
    var areaWidth = columnCoords.areaWidth;
    var _a = mouse_1.getColumnNameRange(store, dragStartData, dragData, elementInfo), startColumnName = _a[0], endColumnName = _a[1];
    if (!column_1.isRowHeader(startColumnName) && !column_1.isRowHeader(endColumnName)) {
        updateSelection(store, dragData);
        setScrolling(dragData, areaWidth.L + areaWidth.R, selection, dimension, viewport);
    }
}
exports.dragMoveBody = dragMoveBody;
function dragEnd(_a) {
    var selection = _a.selection;
    stopAutoScroll(selection);
}
exports.dragEnd = dragEnd;
function mouseDownBody(store, elementInfo, eventInfo) {
    var data = store.data, column = store.column, columnCoords = store.columnCoords, rowCoords = store.rowCoords, id = store.id;
    var filteredRawData = data.filteredRawData;
    if (!filteredRawData.length) {
        return;
    }
    var pageX = eventInfo.pageX, pageY = eventInfo.pageY, shiftKey = eventInfo.shiftKey;
    var visibleColumnsBySideWithRowHeader = column.visibleColumnsBySideWithRowHeader;
    var side = elementInfo.side, scrollLeft = elementInfo.scrollLeft, scrollTop = elementInfo.scrollTop, left = elementInfo.left, top = elementInfo.top;
    var offsetLeft = pageX - left + scrollLeft;
    var offsetTop = pageY - top + scrollTop;
    var rowIndex = common_1.findOffsetIndex(rowCoords.offsets, offsetTop);
    var columnIndex = common_1.findOffsetIndex(columnCoords.offsets[side], offsetLeft);
    var columnName = visibleColumnsBySideWithRowHeader[side][columnIndex].name;
    if (!column_1.isRowHeader(columnName)) {
        if (shiftKey) {
            var dragData = { pageX: pageX, pageY: pageY };
            updateSelection(store, dragData);
        }
        else {
            selectionEnd(store);
            focus_1.changeFocus(store, filteredRawData[rowIndex].rowKey, columnName, id);
        }
    }
}
exports.mouseDownBody = mouseDownBody;
function mouseDownHeader(store, name, parentHeader) {
    var _a;
    var data = store.data, selection = store.selection, id = store.id, column = store.column, rowCoords = store.rowCoords;
    var filteredRawData = data.filteredRawData;
    if (!filteredRawData.length) {
        return;
    }
    var visibleColumnsWithRowHeader = column.visibleColumnsWithRowHeader, complexHeaderColumns = column.complexHeaderColumns;
    var endRowIndex = rowCoords.heights.length - 1;
    var startColumnIndex, endColumnIndex, columnName;
    if (parentHeader) {
        _a = selection_2.getChildColumnRange(visibleColumnsWithRowHeader, complexHeaderColumns, name), startColumnIndex = _a[0], endColumnIndex = _a[1];
        columnName = visibleColumnsWithRowHeader[startColumnIndex].name;
    }
    else {
        startColumnIndex = endColumnIndex = common_1.findPropIndex('name', name, visibleColumnsWithRowHeader);
        columnName = name;
    }
    var inputRange = {
        row: [0, endRowIndex],
        column: [startColumnIndex, endColumnIndex]
    };
    focus_1.changeFocus(store, filteredRawData[0].rowKey, columnName, id);
    selection_1.changeSelectionRange(selection, inputRange, id);
}
exports.mouseDownHeader = mouseDownHeader;
function dragMoveHeader(store, dragData, startSelectedName) {
    var dimension = store.dimension, viewport = store.viewport, columnCoords = store.columnCoords, selection = store.selection, column = store.column, id = store.id;
    var scrollTop = viewport.scrollTop, scrollLeft = viewport.scrollLeft;
    var areaWidth = columnCoords.areaWidth;
    var visibleColumnsWithRowHeader = column.visibleColumnsWithRowHeader, complexHeaderColumns = column.complexHeaderColumns;
    var pageX = dragData.pageX, pageY = dragData.pageY;
    var curInputRange = selection.inputRange;
    if (common_1.isNull(curInputRange)) {
        return;
    }
    var _a = selection_2.getChildColumnRange(visibleColumnsWithRowHeader, complexHeaderColumns, startSelectedName), startColumnIdx = _a[0], endColumnIdx = _a[1];
    var viewInfo = { pageX: pageX, pageY: pageY, scrollTop: scrollTop, scrollLeft: scrollLeft };
    var columnIndex = mouse_1.findColumnIndexByPosition(store, viewInfo);
    var rowIndex = curInputRange.row[1];
    if (columnIndex < startColumnIdx) {
        startColumnIdx = columnIndex;
    }
    if (columnIndex > endColumnIdx) {
        endColumnIdx = columnIndex;
    }
    if (columnIndex >= 0) {
        var inputRange = {
            row: [0, rowIndex],
            column: [startColumnIdx, endColumnIdx]
        };
        selection_1.changeSelectionRange(selection, inputRange, id);
        setScrolling(dragData, areaWidth.L + areaWidth.R, selection, dimension, viewport);
    }
}
exports.dragMoveHeader = dragMoveHeader;
function mouseDownRowHeader(store, rowKey) {
    var selection = store.selection, id = store.id, column = store.column, data = store.data;
    var visibleColumnsWithRowHeader = column.visibleColumnsWithRowHeader, rowHeaderCount = column.rowHeaderCount;
    var rowIndex = data_1.findIndexByRowKey(data, column, id, rowKey);
    var endColumnIndex = visibleColumnsWithRowHeader.length - 1;
    var _a = rowSpan_1.getRowRangeWithRowSpan([rowIndex, rowIndex], [rowHeaderCount, endColumnIndex], visibleColumnsWithRowHeader, null, data), startRowIndex = _a[0], endRowIndex = _a[1];
    var inputRange = {
        row: [startRowIndex, endRowIndex],
        column: [rowHeaderCount, endColumnIndex]
    };
    focus_1.changeFocus(store, data.rawData[rowIndex].rowKey, visibleColumnsWithRowHeader[rowHeaderCount].name, id);
    selection_1.changeSelectionRange(selection, inputRange, id);
}
exports.mouseDownRowHeader = mouseDownRowHeader;
function dragMoveRowHeader(store, dragData) {
    var _a;
    var viewport = store.viewport, selection = store.selection, id = store.id, data = store.data, column = store.column;
    var scrollTop = viewport.scrollTop, scrollLeft = viewport.scrollLeft;
    var visibleColumnsWithRowHeader = column.visibleColumnsWithRowHeader, rowHeaderCount = column.rowHeaderCount;
    var pageX = dragData.pageX, pageY = dragData.pageY;
    var curInputRange = selection.inputRange;
    if (curInputRange === null) {
        return;
    }
    var viewInfo = { pageX: pageX, pageY: pageY, scrollTop: scrollTop, scrollLeft: scrollLeft };
    var columnIndex = curInputRange.column[1];
    var startRowIndex = curInputRange.row[0];
    var endRowIndex = mouse_1.findRowIndexByPosition(store, viewInfo);
    _a = rowSpan_1.getRowRangeWithRowSpan([startRowIndex, endRowIndex], [rowHeaderCount, columnIndex], visibleColumnsWithRowHeader, null, data), startRowIndex = _a[0], endRowIndex = _a[1];
    var inputRange = {
        row: [startRowIndex, endRowIndex],
        column: [rowHeaderCount, columnIndex]
    };
    selection_1.changeSelectionRange(selection, inputRange, id);
}
exports.dragMoveRowHeader = dragMoveRowHeader;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var preset_1 = __webpack_require__(111);
var common_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(2);
var styleGen = tslib_1.__importStar(__webpack_require__(112));
var STYLE_ELEMENT_ID = 'tui-grid-theme-style';
var presetOptions = {
    default: preset_1.presetDefault,
    striped: preset_1.striped,
    clean: preset_1.clean
};
var styleGenMethodMap = {
    outline: styleGen.outline,
    frozenBorder: styleGen.frozenBorder,
    scrollbar: styleGen.scrollbar,
    heightResizeHandle: styleGen.heightResizeHandle,
    pagination: styleGen.pagination,
    selection: styleGen.selection
};
var styleGenAreaMethodMap = {
    header: styleGen.headerArea,
    body: styleGen.bodyArea,
    summary: styleGen.summaryArea
};
var styleGenRowMethodMap = {
    odd: styleGen.rowOdd,
    even: styleGen.rowEven,
    dummy: styleGen.rowDummy,
    hover: styleGen.rowHover
};
var styleGenCellMethodMap = {
    normal: styleGen.cell,
    editable: styleGen.cellEditable,
    header: styleGen.cellHeader,
    rowHeader: styleGen.cellRowHeader,
    summary: styleGen.cellSummary,
    required: styleGen.cellRequired,
    disabled: styleGen.cellDisabled,
    invalid: styleGen.cellInvalid,
    selectedHeader: styleGen.cellSelectedHeader,
    selectedRowHeader: styleGen.cellSelectedRowHeader,
    focused: styleGen.cellFocused,
    focusedInactive: styleGen.cellFocusedInactive,
    // deprecate
    oddRow: styleGen.rowOdd,
    evenRow: styleGen.rowEven,
    currentRow: styleGen.cellCurrentRow,
    dummy: styleGen.rowDummy
};
function buildCssString(options) {
    var area = options.area, cell = options.cell, row = options.row;
    var styles = [];
    Object.keys(styleGenMethodMap).forEach(function (key) {
        var keyWithType = key;
        var value = options[keyWithType];
        if (value) {
            var fn = styleGen[keyWithType];
            styles.push(fn(value));
        }
    });
    if (area) {
        Object.keys(styleGenAreaMethodMap).forEach(function (key) {
            var keyWithType = key;
            var value = area[keyWithType];
            if (value) {
                var fn = styleGenAreaMethodMap[keyWithType];
                styles.push(fn(value));
            }
        });
    }
    if (cell) {
        Object.keys(styleGenCellMethodMap).forEach(function (key) {
            var keyWithType = key;
            var value = cell[keyWithType];
            if (value) {
                var fn = styleGenCellMethodMap[keyWithType];
                styles.push(fn(value));
            }
        });
    }
    if (row) {
        // Written later to override the row style in cell style
        Object.keys(styleGenRowMethodMap).forEach(function (key) {
            var keyWithType = key;
            var value = row[keyWithType];
            if (value) {
                var fn = styleGenRowMethodMap[keyWithType];
                styles.push(fn(value));
            }
        });
    }

    return styles.join('');
}
function setDocumentStyle(options) {
    var cssString = buildCssString(options);
    var elem = document.getElementById(STYLE_ELEMENT_ID);
    if (elem && elem.parentNode) {
        elem.parentNode.removeChild(elem);
    }
    dom_1.appendStyleElement(STYLE_ELEMENT_ID, cssString);
}
exports.default = {
    /**
     * Creates a style element using theme options identified by given name,
     * and appends it to the document.
     * @param themeName - preset theme name
     * @param extOptions - if exist, extend preset theme options with it.
     */
    apply: function (themeName, extOptions) {
        var options = presetOptions[themeName];
        if (!options) {
            options = presetOptions['default'];
        }
        if (extOptions) {
            options = common_1.deepMergedCopy(options, extOptions);
        }
        setDocumentStyle(options);
    },
    /**
     * Returns whether the style of a theme is applied.
     */
    isApplied: function () {
        return !!document.getElementById(STYLE_ELEMENT_ID);
    }
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
exports.presetDefault = {
    selection: {
        background: '#00A9ff',
        border: '#00a9ff'
    },
    heightResizeHandle: {
        border: '#fff',
        background: '#fff'
    },
    pagination: {
        border: 'transparent',
        background: 'transparent'
    },
    scrollbar: {
        border: '#eee',
        background: '#fff',
        emptySpace: '#f9f9f9',
        thumb: '#ddd',
        active: '#ddd'
    },
    outline: {
        border: '#aaa',
        showVerticalBorder: false
    },
    frozenBorder: {
        border: '#aaa'
    },
    area: {
        header: {
            border: '#ccc',
            background: '#fff'
        },
        body: {
            background: '#fff'
        },
        summary: {
            border: '#eee',
            background: '#fff'
        }
    },
    cell: {
        normal: {
            background: '#f4f4f4',
            border: '#eee',
            text: '#333',
            showVerticalBorder: false,
            showHorizontalBorder: true
        },
        header: {
            background: '#fff',
            border: '#eee',
            text: '#222',
            showVerticalBorder: true,
            showHorizontalBorder: true
        },
        rowHeader: {
            background: '#fff',
            border: '#eee',
            text: '#333',
            showVerticalBorder: false,
            showHorizontalBorder: true
        },
        summary: {
            background: '#fff',
            border: '#eee',
            text: '#333',
            showVerticalBorder: false
        },
        selectedHeader: {
            background: '#e5f6ff'
        },
        selectedRowHeader: {
            background: '#e5f6ff'
        },
        focused: {
            border: '#00a9ff'
        },
        focusedInactive: {
            border: '#aaa'
        },
        required: {
            background: '#fffdeb'
        },
        editable: {
            background: '#fff'
        },
        disabled: {
            background: '#f9f9f9',
            text: '#c1c1c1'
        },
        dummy: {
            background: '#fff'
        },
        invalid: {
            background: '#ffe5e5'
        },
        evenRow: {},
        oddRow: {},
        currentRow: {}
    },
    rowHover: {
        background: 'none'
    }
};
exports.clean = common_1.deepMergedCopy(exports.presetDefault, {
    outline: {
        border: '#eee',
        showVerticalBorder: false
    },
    frozenBorder: {
        border: '#ddd'
    },
    area: {
        header: {
            border: '#eee',
            background: '#f9f9f9'
        },
        body: {
            background: '#fff'
        },
        summary: {
            border: '#fff',
            background: '#fff'
        }
    },
    cell: {
        normal: {
            background: '#fff',
            border: '#eee',
            showVerticalBorder: false,
            showHorizontalBorder: false
        },
        header: {
            background: '#f9f9f9',
            border: '#eee',
            showVerticalBorder: true,
            showHorizontalBorder: true
        },
        rowHeader: {
            border: '#eee',
            showVerticalBorder: false,
            showHorizontalBorder: false
        }
    }
});
exports.striped = common_1.deepMergedCopy(exports.presetDefault, {
    outline: {
        border: '#eee',
        showVerticalBorder: false
    },
    frozenBorder: {
        border: '#ccc'
    },
    area: {
        header: {
            border: '#fff',
            background: '#eee'
        },
        body: {
            background: '#fff'
        },
        summary: {
            border: '#fff',
            background: '#fff'
        }
    },
    cell: {
        normal: {
            background: '#fff',
            border: '#fff',
            showVerticalBorder: false,
            showHorizontalBorder: false
        },
        header: {
            background: '#eee',
            border: '#fff',
            showVerticalBorder: true,
            showHorizontalBorder: true
        },
        rowHeader: {
            border: '#fff',
            showVerticalBorder: false,
            showHorizontalBorder: false
        },
        oddRow: {
            background: '#fff'
        },
        evenRow: {
            background: '#f4f4f4'
        }
    }
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(2);
var cssRuleBuilder_1 = __webpack_require__(113);
function bgTextRuleString(className, options) {
    var background = options.background, text = options.text;
    return cssRuleBuilder_1.createClassRule(className)
        .bg(background)
        .text(text)
        .build();
}
function bgBorderRuleString(className, options) {
    var background = options.background, border = options.border;
    return cssRuleBuilder_1.createClassRule(className)
        .bg(background)
        .border(border)
        .build();
}
function outline(options) {
    var border = options.border, showVerticalBorder = options.showVerticalBorder;
    var borderTopRule = cssRuleBuilder_1.createClassRule('border-line-top').bg(border);
    var borderBottomRule = cssRuleBuilder_1.createNestedClassRule(' .', ['no-scroll-x', 'border-line-bottom']).bg(border);
    var rules = [borderTopRule, borderBottomRule];
    var borderLeftRule, borderRightRule;
    if (showVerticalBorder) {
        borderLeftRule = cssRuleBuilder_1.createClassRule('border-line-left').bg(border);
        borderRightRule = cssRuleBuilder_1.createNestedClassRule(' .', ['no-scroll-y', 'border-line-right']).bg(border);
        rules = rules.concat([borderLeftRule, borderRightRule]);
    }
    return cssRuleBuilder_1.buildAll(rules);
}
exports.outline = outline;
function frozenBorder(options) {
    return cssRuleBuilder_1.createClassRule('frozen-border')
        .bg(options.border)
        .build();
}
exports.frozenBorder = frozenBorder;
function scrollbar(options) {
    var border = options.border, emptySpace = options.emptySpace;
    var webkitScrollbarRules = cssRuleBuilder_1.createWebkitScrollbarRules("." + dom_1.cls('container'), options);
    var ieScrollbarRule = cssRuleBuilder_1.createIEScrollbarRule("." + dom_1.cls('container'), options);
    var xInnerBorderRule = cssRuleBuilder_1.createClassRule('border-line-bottom').bg(border);
    var xOuterBorderRule = cssRuleBuilder_1.createClassRule('content-area').border(border);
    var yInnerBorderRule = cssRuleBuilder_1.createClassRule('scrollbar-y-inner-border').bg(border);
    var yOuterBorderRule = cssRuleBuilder_1.createClassRule('scrollbar-y-outer-border').bg(border);
    var spaceRightTopRule = cssRuleBuilder_1.createClassRule('scrollbar-right-top')
        .bg(emptySpace)
        .border(border);
    var spaceRightBottomRule = cssRuleBuilder_1.createClassRule('scrollbar-right-bottom')
        .bg(emptySpace)
        .border(border);
    var spaceLeftBottomRule = cssRuleBuilder_1.createClassRule('scrollbar-left-bottom')
        .bg(emptySpace)
        .border(border);
    var frozenBorderRule = cssRuleBuilder_1.createClassRule('scrollbar-frozen-border')
        .bg(emptySpace)
        .border(border);
    return cssRuleBuilder_1.buildAll(webkitScrollbarRules.concat([
        ieScrollbarRule,
        xInnerBorderRule,
        xOuterBorderRule,
        yInnerBorderRule,
        yOuterBorderRule,
        spaceRightTopRule,
        spaceRightBottomRule,
        spaceLeftBottomRule,
        frozenBorderRule
    ]));
}
exports.scrollbar = scrollbar;
function heightResizeHandle(options) {
    return bgBorderRuleString('height-resize-handle', options);
}
exports.heightResizeHandle = heightResizeHandle;
function pagination(options) {
    return bgBorderRuleString('pagination', options);
}
exports.pagination = pagination;
function selection(options) {
    return bgBorderRuleString('layer-selection', options);
}
exports.selection = selection;
function headerArea(options) {
    return cssRuleBuilder_1.createClassRule('header-area')
        .bg(options.background)
        .border(options.border)
        .build();
}
exports.headerArea = headerArea;
function bodyArea(options) {
    return cssRuleBuilder_1.createClassRule('body-area')
        .bg(options.background)
        .build();
}
exports.bodyArea = bodyArea;
function summaryArea(options) {
    var border = options.border, background = options.background;
    var contentAreaRule = cssRuleBuilder_1.createClassRule('summary-area')
        .bg(background)
        .border(border);
    var bodyAreaRule = cssRuleBuilder_1.createNestedClassRule(' .', ['has-summary-top', 'body-area']).border(border);
    return cssRuleBuilder_1.buildAll([contentAreaRule, bodyAreaRule]);
}
exports.summaryArea = summaryArea;
function cell(options) {
    return cssRuleBuilder_1.createClassRule('cell')
        .bg(options.background)
        .border(options.border)
        .borderWidth(options)
        .text(options.text)
        .build();
}
exports.cell = cell;
function cellHeader(options) {
    var background = options.background, border = options.border, text = options.text;
    var tableRule = cssRuleBuilder_1.createNestedClassRule(' .', [
        'show-lside-area',
        'lside-area',
        'header-area',
        'table'
    ]).verticalBorderStyle(options, 'right');
    var cellRule = cssRuleBuilder_1.createClassRule('cell-header')
        .bg(background)
        .border(border)
        .borderWidth(options)
        .text(text);
    return cssRuleBuilder_1.buildAll([tableRule, cellRule]);
}
exports.cellHeader = cellHeader;
function cellRowHeader(options) {
    var background = options.background, border = options.border, text = options.text;
    var tableRule = cssRuleBuilder_1.createNestedClassRule(' .', [
        'show-lside-area',
        'lside-area',
        'body-area',
        'table'
    ]).verticalBorderStyle(options, 'right');
    var cellRule = cssRuleBuilder_1.createClassRule('cell-row-header')
        .bg(background)
        .border(border)
        .borderWidth(options)
        .text(text);
    return cssRuleBuilder_1.buildAll([tableRule, cellRule]);
}
exports.cellRowHeader = cellRowHeader;
function cellSummary(options) {
    var background = options.background, border = options.border, text = options.text;
    var tableRule = cssRuleBuilder_1.createNestedClassRule(' .', [
        'show-lside-area',
        'lside-area',
        'summary-area',
        'table'
    ]).verticalBorderStyle(options, 'right');
    var cellRule = cssRuleBuilder_1.createClassRule('cell-summary')
        .bg(background)
        .border(border)
        .borderWidth(options)
        .text(text);
    return cssRuleBuilder_1.buildAll([tableRule, cellRule]);
}
exports.cellSummary = cellSummary;
function rowEven(options) {
    return cssRuleBuilder_1.create('.tui-grid-row-even>td')
        .bg(options.background)
        .build();
}
exports.rowEven = rowEven;
function rowOdd(options) {
    return cssRuleBuilder_1.create('.tui-grid-row-odd>td')
        .bg(options.background)
        .build();
}
exports.rowOdd = rowOdd;
function rowHover(options) {
    return cssRuleBuilder_1.createNestedClassRule('.', ['row-hover', 'cell'])
        .bg(options.background)
        .build();
}
exports.rowHover = rowHover;
function rowDummy(options) {
    return bgTextRuleString('cell-dummy', options);
}
exports.rowDummy = rowDummy;
function cellSelectedHeader(options) {
    return cssRuleBuilder_1.createNestedClassRule('.', ['cell-header', 'cell-selected'])
        .bg(options.background)
        .text(options.text)
        .build();
}
exports.cellSelectedHeader = cellSelectedHeader;
function cellSelectedRowHeader(options) {
    return cssRuleBuilder_1.createNestedClassRule('.', ['cell-row-header', 'cell-selected'])
        .bg(options.background)
        .text(options.text)
        .build();
}
exports.cellSelectedRowHeader = cellSelectedRowHeader;
function cellFocused(options) {
    var border = options.border;
    var focusLayerRule = cssRuleBuilder_1.createClassRule('layer-focus-border').bg(border);
    var editingLayerRule = cssRuleBuilder_1.createClassRule('layer-editing').border(border);
    return cssRuleBuilder_1.buildAll([focusLayerRule, editingLayerRule]);
}
exports.cellFocused = cellFocused;
function cellFocusedInactive(options) {
    return cssRuleBuilder_1.createNestedClassRule(' .', ['layer-focus-deactive', 'layer-focus-border'])
        .bg(options.border)
        .build();
}
exports.cellFocusedInactive = cellFocusedInactive;
function cellEditable(options) {
    return bgTextRuleString('cell-editable', options);
}
exports.cellEditable = cellEditable;
function cellRequired(options) {
    return bgTextRuleString('cell-required', options);
}
exports.cellRequired = cellRequired;
function cellDisabled(options) {
    return bgTextRuleString('cell-disabled', options);
}
exports.cellDisabled = cellDisabled;
function cellInvalid(options) {
    return bgTextRuleString('cell-invalid', options);
}
exports.cellInvalid = cellInvalid;
function cellCurrentRow(options) {
    return bgTextRuleString('cell-current-row', options);
}
exports.cellCurrentRow = cellCurrentRow;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(2);
var common_1 = __webpack_require__(0);
/**
 * create css rule string and returns it
 * @module {theme/cssBuilder}
 * @param selector - css selector
 * @param property - css property
 * @param  value - css value
 * @ignore
 */
var CSSRuleBuilder = /** @class */ (function () {
    function CSSRuleBuilder(selector) {
        this.selector = '';
        this.propValues = [];
        this.init(selector);
    }
    CSSRuleBuilder.prototype.init = function (selector) {
        if (!(typeof selector === 'string') || !selector) {
            throw new Error('The Selector must be a string and not be empty.');
        }
        this.selector = selector;
        this.propValues = [];
    };
    /**
     * Add a set of css property and value.
     * @param property - css property
     * @param  value - css value
     */
    CSSRuleBuilder.prototype.add = function (property, value) {
        if (value) {
            this.propValues.push(property + ":" + value);
        }
        return this;
    };
    /**
     * Shortcut for add('border-color', value)
     */
    CSSRuleBuilder.prototype.border = function (value) {
        return this.add('border-color', value);
    };
    /**
     * Add a border-width style to the rule.
     * @param options - visible options
     * @param [options.showVerticalBorder] - whether the vertical border is visible
     * @param [options.showHorizontalBorder] - whether the horizontal border is visible
     */
    CSSRuleBuilder.prototype.borderWidth = function (options) {
        var vertical = options.showVerticalBorder;
        var horizontal = options.showHorizontalBorder;
        var value;
        if (common_1.isBoolean(vertical)) {
            value = vertical ? '1px' : '0';
            this.add('border-left-width', value).add('border-right-width', value);
        }
        if (common_1.isBoolean(horizontal)) {
            value = horizontal ? '1px' : '0';
            this.add('border-top-width', value).add('border-bottom-width', value);
        }
        return this;
    };
    /**
     * Add a vertical border style to the rule.
     * @param options - visible options
     * @param [options.showVerticalBorder] - whether the vertical border is visible
     * @param position - Position of the vertical border ('right' or 'left')
     */
    CSSRuleBuilder.prototype.verticalBorderStyle = function (options, position) {
        var vertical = options.showVerticalBorder;
        var value;
        if (common_1.isBoolean(vertical) && position) {
            value = vertical ? 'solid' : 'hidden';
            this.add("border-" + position + "-style", value);
        }
        return this;
    };
    /**
     * Shortcut for add('background-color', value)
     */
    CSSRuleBuilder.prototype.bg = function (value) {
        return this.add('background-color', value);
    };
    /**
     * Shortcut for add('color', value)
     */
    CSSRuleBuilder.prototype.text = function (value) {
        return this.add('color', value);
    };
    /**
     * Create a CSS rule string with a selector and prop-values.
     */
    CSSRuleBuilder.prototype.build = function () {
        var result = '';
        if (this.propValues.length) {
            result = this.selector + "{" + this.propValues.join(';') + "}";
        }
        return result;
    };
    return CSSRuleBuilder;
}());
/**
 * Creates new Builder instance.
 */
function create(selector) {
    return new CSSRuleBuilder(selector);
}
exports.create = create;
/**
 * Creates a new Builder instance with a class name selector.
 */
function createClassRule(className) {
    return create("." + dom_1.cls(className));
}
exports.createClassRule = createClassRule;
/**
 * Creates a new Builder instance with a nested class name.
 * @param selector - selector to compose class names
 * @param classNames - classNames
 */
function createNestedClassRule(selector, classNames) {
    return create("." + classNames.map(function (className) { return dom_1.cls(className); }).join(selector));
}
exports.createNestedClassRule = createNestedClassRule;
/**
 * Creates an array of new Builder instances for the -webkit-scrollbar styles.
 */
function createWebkitScrollbarRules(selector, options) {
    return [
        create(selector + " ::-webkit-scrollbar").bg(options.background),
        create(selector + " ::-webkit-scrollbar-thumb").bg(options.thumb),
        create(selector + " ::-webkit-scrollbar-thumb:hover").bg(options.active)
    ];
}
exports.createWebkitScrollbarRules = createWebkitScrollbarRules;
/**
 * Creates a builder instance for the IE scrollbar styles.
 */
function createIEScrollbarRule(selector, options) {
    var bgProps = [
        'scrollbar-3dlight-color',
        'scrollbar-darkshadow-color',
        'scrollbar-track-color',
        'scrollbar-shadow-color'
    ];
    var thumbProps = ['scrollbar-face-color', 'scrollbar-highlight-color'];
    var ieScrollbarRule = create(selector);
    bgProps.forEach(function (prop) {
        ieScrollbarRule.add(prop, options.background);
    });
    thumbProps.forEach(function (prop) {
        ieScrollbarRule.add(prop, options.thumb);
    });
    ieScrollbarRule.add('scrollbar-arrow-color', options.active);
    return ieScrollbarRule;
}
exports.createIEScrollbarRule = createIEScrollbarRule;
/**
 * Build all rules and returns the concatenated string.
 */
function buildAll(rules) {
    return rules
        .map(function (rule) {
        return rule.build();
    })
        .join('');
}
exports.buildAll = buildAll;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__(14);
function getInvalidRows(store) {
    // makes all data observable to sort the data properly;
    data_1.createObservableData(store, true);
    var data = store.data, column = store.column;
    var invalidRows = [];
    data.viewData.forEach(function (_a) {
        var rowKey = _a.rowKey, valueMap = _a.valueMap;
        var invalidColumns = column.validationColumns.filter(function (_a) {
            var name = _a.name;
            return !!valueMap[name].invalidStates.length;
        });
        if (invalidColumns.length) {
            var errors = invalidColumns.map(function (_a) {
                var name = _a.name;
                return ({
                    columnName: name,
                    errorCode: valueMap[name].invalidStates
                });
            });
            invalidRows.push({ rowKey: rowKey, errors: errors });
        }
    });
    return invalidRows;
}
exports.getInvalidRows = getInvalidRows;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var tree_1 = __webpack_require__(25);
var tree_2 = __webpack_require__(20);
var common_1 = __webpack_require__(0);
var gridAjax_1 = tslib_1.__importDefault(__webpack_require__(116));
var eventBus_1 = __webpack_require__(10);
var instance_1 = __webpack_require__(7);
var message_1 = __webpack_require__(46);
var modifiedDataManager_1 = __webpack_require__(47);
var data_1 = __webpack_require__(6);
var ServerSideDataProvider = /** @class */ (function () {
    function ServerSideDataProvider(store, dispatch, dataSource) {
        var _this = this;
        this.handleSuccessReadData = function (response) {
            var result = response.result, data = response.data;
            if (!result || common_1.isUndefined(data)) {
                return;
            }
            _this.dispatch('resetData', data.contents);
            if (data.pagination && !common_1.isEmpty(_this.store.data.pageOptions)) {
                _this.dispatch('setPagination', tslib_1.__assign({}, data.pagination, { perPage: _this.lastRequiredData.perPage }));
            }
        };
        this.handleSuccessReadTreeData = function (response) {
            var result = response.result, data = response.data;
            if (!result || common_1.isUndefined(data)) {
                return;
            }
            var parentRowKey = _this.lastRequiredData.parentRowKey;
            var _a = _this.store, column = _a.column, id = _a.id;
            data.contents.forEach(function (row) {
                _this.dispatch('appendTreeRow', row, {
                    parentRowKey: parentRowKey
                });
            });
            var row = data_1.findRowByRowKey(_this.store.data, column, id, parentRowKey);
            if (row && !tree_2.getChildRowKeys(row).length) {
                tree_1.removeExpandedAttr(row);
            }
        };
        var api = dataSource.api, _a = dataSource.initialRequest, initialRequest = _a === void 0 ? true : _a, _b = dataSource.withCredentials, withCredentials = _b === void 0 ? false : _b;
        this.initialRequest = initialRequest;
        this.api = api;
        this.withCredentials = withCredentials;
        this.lastRequiredData = { perPage: store.data.pageOptions.perPage };
        this.store = store;
        this.dispatch = dispatch;
        if (this.initialRequest) {
            this.readData(1);
        }
    }
    ServerSideDataProvider.prototype.createRequestOptions = function (options) {
        if (options === void 0) { options = {}; }
        var defaultOptions = {
            checkedOnly: false,
            modifiedOnly: true,
            showConfirm: true,
            withCredentials: this.withCredentials
        };
        return tslib_1.__assign({}, defaultOptions, options);
    };
    ServerSideDataProvider.prototype.createRequestParams = function (type, options) {
        var checkedOnly = options.checkedOnly, modifiedOnly = options.modifiedOnly;
        var ignoredColumns = this.store.column.ignoredColumns;
        var manager = instance_1.getDataManager(this.store.id);
        if (modifiedOnly) {
            return type === 'MODIFY'
                ? manager.getAllModifiedData({ checkedOnly: checkedOnly, ignoredColumns: ignoredColumns })
                : manager.getModifiedData(type, { checkedOnly: checkedOnly, ignoredColumns: ignoredColumns });
        }
        return { rows: modifiedDataManager_1.getDataWithOptions(this.store.data.rawData, { checkedOnly: checkedOnly, ignoredColumns: ignoredColumns }) };
    };
    ServerSideDataProvider.prototype.readData = function (page, data, resetData) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (resetData === void 0) { resetData = false; }
        if (!this.api) {
            return;
        }
        var _a = this, api = _a.api, withCredentials = _a.withCredentials, store = _a.store;
        var treeColumnName = store.column.treeColumnName;
        var pageOptions = store.data.pageOptions;
        var perPage = pageOptions.perPage;
        var _b = api.readData, method = _b.method, url = _b.url;
        var dataWithType = data;
        // assign request params
        var params = resetData
            ? tslib_1.__assign({ perPage: perPage }, dataWithType, { page: page }) : tslib_1.__assign({}, this.lastRequiredData, dataWithType, { page: page });
        var handleSuccessReadData = this.handleSuccessReadData;
        if (treeColumnName && !common_1.isUndefined(dataWithType.parentRowKey)) {
            handleSuccessReadData = this.handleSuccessReadTreeData;
            delete params.page;
            delete params.perPage;
        }
        this.lastRequiredData = params;
        var callback = function () { return _this.dispatch('setLoadingState', data_1.getLoadingState(store.data.rawData)); };
        var request = new gridAjax_1.default({
            method: method,
            url: url,
            params: params,
            callback: handleSuccessReadData,
            preCallback: callback,
            postCallback: callback,
            withCredentials: withCredentials,
            eventBus: eventBus_1.getEventBus(this.store.id)
        });
        this.dispatch('setLoadingState', 'LOADING');
        request.open();
        request.send();
    };
    ServerSideDataProvider.prototype.createData = function (url, method, options) {
        this.send({ url: url, method: method, options: options, requestTypeCode: 'CREATE' });
    };
    ServerSideDataProvider.prototype.updateData = function (url, method, options) {
        this.send({ url: url, method: method, options: options, requestTypeCode: 'UPDATE' });
    };
    ServerSideDataProvider.prototype.deleteData = function (url, method, options) {
        this.send({ url: url, method: method, options: options, requestTypeCode: 'DELETE' });
    };
    ServerSideDataProvider.prototype.modifyData = function (url, method, options) {
        this.send({ url: url, method: method, options: options, requestTypeCode: 'MODIFY' });
    };
    ServerSideDataProvider.prototype.request = function (requestType, options) {
        var url = options.url, method = options.method;
        if (this.api && common_1.isObject(this.api[requestType])) {
            url = url || this.api[requestType].url;
            method = method || this.api[requestType].method;
        }
        if (!url || !method) {
            throw new Error('url and method should be essential for request.');
        }
        var requestOptions = this.createRequestOptions(options);
        this[requestType](url, method, requestOptions);
    };
    ServerSideDataProvider.prototype.reloadData = function () {
        this.readData(this.lastRequiredData.page || 1);
    };
    ServerSideDataProvider.prototype.send = function (sendOptions) {
        var _this = this;
        var url = sendOptions.url, method = sendOptions.method, options = sendOptions.options, requestTypeCode = sendOptions.requestTypeCode;
        var _a = this.store, id = _a.id, data = _a.data;
        var manager = instance_1.getDataManager(id);
        var params = this.createRequestParams(requestTypeCode, options);
        if (!options.showConfirm || this.confirm(requestTypeCode, this.getCount(params))) {
            var withCredentials = options.withCredentials;
            var callback = function () { return _this.dispatch('setLoadingState', data_1.getLoadingState(data.rawData)); };
            var request = new gridAjax_1.default({
                method: method,
                url: url,
                params: params,
                callback: function () { return manager.clear(params); },
                preCallback: callback,
                postCallback: callback,
                withCredentials: common_1.isUndefined(withCredentials) ? this.withCredentials : withCredentials,
                eventBus: eventBus_1.getEventBus(id)
            });
            this.dispatch('setLoadingState', 'LOADING');
            request.open();
            request.send();
        }
    };
    ServerSideDataProvider.prototype.getCount = function (rowsMap) {
        return Object.keys(rowsMap).reduce(function (acc, key) { return acc + rowsMap[key].length; }, 0);
    };
    // @TODO need to options for custom conrifm UI
    ServerSideDataProvider.prototype.confirm = function (type, count) {
        return count ? confirm(message_1.getConfirmMessage(type, count)) : alert(message_1.getAlertMessage(type));
    };
    return ServerSideDataProvider;
}());
function createProvider(store, dispatch, data) {
    if (!Array.isArray(data) && common_1.isObject(data)) {
        return new ServerSideDataProvider(store, dispatch, data);
    }
    // dummy instance
    var providerErrorFn = function () {
        throw new Error('cannot execute server side API. for using this API, have to set dataSource');
    };
    return {
        createData: providerErrorFn,
        updateData: providerErrorFn,
        deleteData: providerErrorFn,
        modifyData: providerErrorFn,
        request: providerErrorFn,
        readData: providerErrorFn,
        reloadData: providerErrorFn
    };
}
exports.createProvider = createProvider;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var encoder_1 = __webpack_require__(117);
var gridEvent_1 = tslib_1.__importDefault(__webpack_require__(11));
var GridAjax = /** @class */ (function () {
    function GridAjax(options) {
        var _this = this;
        this.shouldEncode = function () {
            return _this.method === 'GET' || _this.method === 'DELETE';
        };
        this.handleReadyStateChange = function () {
            var _a = _this, xhr = _a.xhr, callback = _a.callback, eventBus = _a.eventBus, preCallback = _a.preCallback, postCallback = _a.postCallback;
            if (xhr.readyState !== XMLHttpRequest.DONE) {
                return;
            }
            preCallback();
            var gridEvent = new gridEvent_1.default({ xhr: xhr });
            /**
             * Occurs when the response is received from the server
             * @event Grid#response
             * @type {module:event/gridEvent}
             * @property {XmlHttpRequest} xhr - XmlHttpRequest
             * @property {Grid} instance - Current grid instance
             */
            eventBus.trigger('response', gridEvent);
            if (gridEvent.isStopped()) {
                return;
            }
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.result) {
                    /**
                     * Occurs after the response event, if the result is true
                     * @event Grid#successResponse
                     * @type {module:event/gridEvent}
                     * @property {XmlHttpRequest} xhr - XmlHttpRequest
                     * @property {Grid} instance - Current grid instance
                     */
                    eventBus.trigger('successResponse', gridEvent);
                }
                else if (!response.result) {
                    /**
                     * Occurs after the response event, if the result is false
                     * @event Grid#failResponse
                     * @type {module:event/gridEvent}
                     * @property {XmlHttpRequest} xhr - XmlHttpRequest
                     * @property {Grid} instance - Current grid instance
                     */
                    eventBus.trigger('failResponse', gridEvent);
                }
                if (gridEvent.isStopped()) {
                    return;
                }
                callback(response);
            }
            else {
                /**
                 * Occurs after the response event, if the response is Error
                 * @event Grid#errorResponse
                 * @type {module:event/gridEvent}
                 * @property {XmlHttpRequest} xhr - XmlHttpRequest
                 * @property {Grid} instance - Current grid instance
                 */
                eventBus.trigger('errorResponse', gridEvent);
            }
            postCallback();
        };
        var method = options.method, url = options.url, withCredentials = options.withCredentials, _a = options.params, params = _a === void 0 ? {} : _a, _b = options.callback, callback = _b === void 0 ? function () { } : _b, _c = options.preCallback, preCallback = _c === void 0 ? function () { } : _c, _d = options.postCallback, postCallback = _d === void 0 ? function () { } : _d, eventBus = options.eventBus;
        this.method = method.toUpperCase();
        this.url = url;
        this.params = params;
        this.callback = callback;
        this.preCallback = preCallback;
        this.postCallback = postCallback;
        this.eventBus = eventBus;
        this.xhr = new XMLHttpRequest();
        this.xhr.withCredentials = withCredentials;
    }
    GridAjax.prototype.open = function () {
        var _a = this, method = _a.method, url = _a.url, params = _a.params, xhr = _a.xhr, shouldEncode = _a.shouldEncode;
        if (shouldEncode()) {
            xhr.open(method, url + "?" + encoder_1.encodeParams(params));
        }
        else {
            xhr.open(method, url);
            // @TODO neeto to application/json content-type options and custom options(authorization, custom header etc..)
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhr.onreadystatechange = this.handleReadyStateChange;
    };
    GridAjax.prototype.send = function () {
        var _a = this, url = _a.url, method = _a.method, xhr = _a.xhr, shouldEncode = _a.shouldEncode, eventBus = _a.eventBus, preCallback = _a.preCallback;
        var options = {
            url: url,
            method: method,
            withCredentials: xhr.withCredentials,
            params: this.params
        };
        var gridEvent = new gridEvent_1.default({ options: options });
        /**
         * Occurs before the http request is sent
         * @event Grid#beforeRequest
         * @type {module:event/gridEvent}
         * @property {Grid} instance - Current grid instance
         */
        eventBus.trigger('beforeRequest', gridEvent);
        if (gridEvent.isStopped()) {
            preCallback();
            return;
        }
        var params = shouldEncode() ? null : encoder_1.encodeParams(this.params, true);
        xhr.send(params);
    };
    return GridAjax;
}());
exports.default = GridAjax;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var ENCODED_SPACE = '%20';
var ENCODED_LEFT_BRACKET = '%5B';
function encodeWithSpace(value, hasBody) {
    var regExp = new RegExp(ENCODED_SPACE, 'g');
    return hasBody ? encodeURIComponent(value).replace(regExp, '+') : encodeURIComponent(value);
}
function encodeParamKey(key, hasBody) {
    return key.indexOf(ENCODED_LEFT_BRACKET) !== -1 ? key : encodeWithSpace(key, hasBody);
}
function encodeObjParamKey(key, subKey, hasBody) {
    var encodedKey = encodeParamKey(key, hasBody);
    return "" + encodedKey + encodeURIComponent('[') + subKey + encodeURIComponent(']');
}
function getEncodedData(name, subKey, value, hasBody) {
    var encodedKey = encodeObjParamKey(name, subKey, hasBody);
    var valueWithType = Array.isArray(value) ? value[subKey] : value[subKey];
    return encodeFormData(encodedKey, valueWithType, hasBody);
}
function encodeFormData(key, value, hasBody) {
    if (common_1.isUndefined(value) || common_1.isNull(value) || value === '') {
        return '';
    }
    var encodedDataList = [];
    if (Array.isArray(value)) {
        for (var index = 0; index < value.length; index += 1) {
            var encodedData = getEncodedData(key, index, value, hasBody);
            encodedDataList = encodedData !== '' ? encodedDataList.concat(encodedData) : encodedDataList;
        }
    }
    else if (common_1.isObject(value)) {
        Object.keys(value).forEach(function (subKey) {
            var valueWithType = value;
            var encodedData = getEncodedData(key, subKey, valueWithType, hasBody);
            encodedDataList = encodedData !== '' ? encodedDataList.concat(encodedData) : encodedDataList;
        });
    }
    else {
        var encodedKey = encodeParamKey(key, hasBody);
        var encodedValue = common_1.isString(value) ? encodeWithSpace(value, hasBody) : value;
        if (encodedValue !== '') {
            encodedDataList.push(encodedKey + "=" + encodedValue);
        }
    }
    return encodedDataList;
}
function encodeParams(params, hasBody) {
    if (hasBody === void 0) { hasBody = false; }
    if (!params) {
        return '';
    }
    var encodedDataList = Object.keys(params).reduce(function (acc, name) {
        var value = params[name];
        return value !== '' ? acc.concat(encodeFormData(name, value, hasBody)) : acc;
    }, []);
    return encodedDataList.join('&');
}
exports.encodeParams = encodeParams;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createPaginationManager() {
    var pagination = null;
    return {
        setPagination: function (targetPagination) {
            pagination = targetPagination;
        },
        getPagination: function () {
            return pagination;
        }
    };
}
exports.createPaginationManager = createPaginationManager;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MS_7_DAYS = 7 * 24 * 60 * 60 * 1000;
function isExpired(date) {
    var now = new Date().getTime();
    return now - date > MS_7_DAYS;
}
function imagePing(url, trackingInfo) {
    var queryString = Object.keys(trackingInfo)
        .map(function (id, index) {
        var idWithType = id;
        return "" + (index ? '&' : '') + idWithType + "=" + trackingInfo[idWithType];
    })
        .join('');
    var trackingElement = document.createElement('img');
    trackingElement.src = url + "?" + queryString;
    trackingElement.style.display = 'none';
    document.body.appendChild(trackingElement);
    document.body.removeChild(trackingElement);
    return trackingElement;
}
function sendHostname() {
    var hostname = location.hostname;
    var applicationKeyForStorage = "TOAST UI grid for " + hostname + ": Statistics";
    var date = window.localStorage.getItem(applicationKeyForStorage);
    if (date && !isExpired(Number(date))) {
        return;
    }
    window.localStorage.setItem(applicationKeyForStorage, String(new Date().getTime()));
    setTimeout(function () {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            imagePing('https://www.google-analytics.com/collect', {
                v: 1,
                t: 'event',
                tid: 'UA-129951906-1',
                cid: hostname,
                dp: hostname,
                dh: 'grid',
                el: 'grid',
                ec: 'use'
            });
        }
    }, 1000);
}
exports.sendHostname = sendHostname;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
});