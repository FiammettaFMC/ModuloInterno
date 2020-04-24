define(["@grafana/data","@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./panels/PredictionPanel/module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./panels/PredictionPanel/editorView.tsx":
/*!***********************************************!*\
  !*** ./panels/PredictionPanel/editorView.tsx ***!
  \***********************************************/
/*! exports provided: EditorView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorView", function() { return EditorView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strategies_strategies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strategies/strategies */ "./panels/PredictionPanel/strategies/strategies.ts");
/* harmony import */ var utils_Predictor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/Predictor */ "./utils/Predictor.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








var EditorView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditorView, _super);

  function EditorView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  EditorView.prototype.importPredictor = function (target) {
    var _this = this;

    var reader = new FileReader();

    if (target.files == null) {
      throw new Error('File not selected');
    }

    reader.readAsText(target.files[0]);

    reader.onload = function (event) {
      var _a, _b;

      try {
        _this.props.options.predictor = utils_Predictor__WEBPACK_IMPORTED_MODULE_4__["Predictor"].fromJSON((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.toString());
      } catch (e) {
        alert(e);
      }

      _this.render();
    };
  };

  EditorView.prototype.render = function () {
    var _this = this;

    var algorithm = this.props.options.predictor.getAlgorithm();
    var Config;

    if (_strategies_strategies__WEBPACK_IMPORTED_MODULE_3__["configs"][algorithm]) {
      Config = _strategies_strategies__WEBPACK_IMPORTED_MODULE_3__["configs"][algorithm];
    } else {
      Config = _typeof(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelOptionsGrid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelOptionsGroup"], {
      title: "Import predictor"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "input gf-input gf-file",
      type: "file",
      name: "Import",
      id: "import",
      onChange: function onChange(event) {
        return _this.importPredictor(event.target);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Config, {
      data: this.props.data,
      options: this.props.options
    })));
  };

  return EditorView;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/model.ts":
/*!*****************************************!*\
  !*** ./panels/PredictionPanel/model.ts ***!
  \*****************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var utils_Predicted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/Predicted */ "./utils/Predicted.ts");
/* harmony import */ var _strategies_strategies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strategies/strategies */ "./panels/PredictionPanel/strategies/strategies.ts");




var Model =
/** @class */
function () {
  function Model() {}

  Model.prototype.setData = function (data) {
    this.data = data;
  };

  Model.prototype.setPredictor = function (predictor) {
    this.predictor = predictor;

    if (!_strategies_strategies__WEBPACK_IMPORTED_MODULE_2__["strategies"][predictor.getAlgorithm()]) {
      throw Error('Wrong algorithm');
    }

    this.strategy = _strategies_strategies__WEBPACK_IMPORTED_MODULE_2__["strategies"][predictor.getAlgorithm()];
  };

  Model.prototype.predict = function () {
    var _a;

    if (!this.data || !this.predictor) {
      throw Error('Predictor not found');
    }

    this.predicted = (_a = this.strategy) === null || _a === void 0 ? void 0 : _a.predict(this.data, this.predictor, this.predictor.getOpt());

    if (!this.predicted || this.predicted.size() < 1) {
      throw Error('Data not predicted');
    }

    return this.predicted.getAt(this.predicted.size() - 1).value;
  };

  Model.prototype.saveToInflux = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var it, meas;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (!this.predicted) {
          throw Error('data.predicted not found');
        }

        it = new utils_Predicted__WEBPACK_IMPORTED_MODULE_1__["PredIterator"](this.predicted);

        while (meas = it.next()) {
          $.post({
            url: 'http://localhost:8086/write?db=telegraf',
            data: 'prediction value=' + meas.value + ' ' + meas.time + '000000'
          });
        }

        return [2
        /*return*/
        ];
      });
    });
  };

  return Model;
}();



/***/ }),

/***/ "./panels/PredictionPanel/module.ts":
/*!******************************************!*\
  !*** ./panels/PredictionPanel/module.ts ***!
  \******************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panelController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panelController */ "./panels/PredictionPanel/panelController.tsx");
/* harmony import */ var _editorView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editorView */ "./panels/PredictionPanel/editorView.tsx");
/* harmony import */ var utils_Predictor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/Predictor */ "./utils/Predictor.ts");




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_panelController__WEBPACK_IMPORTED_MODULE_1__["PanelController"]).setDefaults({
  predictor: new utils_Predictor__WEBPACK_IMPORTED_MODULE_3__["Predictor"]('', [])
}).setEditor(_editorView__WEBPACK_IMPORTED_MODULE_2__["EditorView"]);

/***/ }),

/***/ "./panels/PredictionPanel/panelController.tsx":
/*!****************************************************!*\
  !*** ./panels/PredictionPanel/panelController.tsx ***!
  \****************************************************/
/*! exports provided: PanelController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelController", function() { return PanelController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/Data */ "./utils/Data.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./panels/PredictionPanel/model.ts");
/* harmony import */ var _panelView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panelView */ "./panels/PredictionPanel/panelView.tsx");






var PanelController =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PanelController, _super);

  function PanelController(props) {
    var _this = _super.call(this, props) || this;

    _this.paused = false;
    _this.model = new _model__WEBPACK_IMPORTED_MODULE_3__["Model"]();
    return _this;
  }

  PanelController.prototype.setData = function () {
    var d = utils_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].fromSeries(this.props.data.series);
    this.model.setData(d);
    /*
    let log = "";
    d.series.forEach(element => {
        if (element[0] != null && element[1] != null)
            log += element[0] + ", " + element[1] + "\n";
    });
    console.log(log);
    */
  };

  PanelController.prototype.setPredictor = function () {
    this.model.setPredictor(this.props.options.predictor);
  };

  PanelController.prototype.predict = function () {
    this.lastValue = this.model.predict();
  };

  PanelController.prototype.saveToInflux = function () {
    this.model.saveToInflux();
  };

  PanelController.prototype.pause = function () {
    this.paused = true;
  };

  PanelController.prototype.start = function () {
    this.paused = false;
  };

  PanelController.prototype.updatePrediction = function () {
    this.setData();
    this.setPredictor();
    this.predict();
    this.saveToInflux();
  };

  PanelController.prototype.render = function () {
    var _this = this;

    if (!this.paused) {
      this.updatePrediction();
    }

    var predictor = this.props.options.predictor;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_panelView__WEBPACK_IMPORTED_MODULE_4__["PanelView"], {
      algorithm: predictor.getAlgorithm(),
      coefficients: predictor.getCoefficients(),
      opt: predictor.getOpt(),
      lastValue: this.lastValue,
      pause: function pause() {
        return _this.pause();
      },
      start: function start() {
        return _this.start();
      }
    }));
  };

  return PanelController;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/panelView.tsx":
/*!**********************************************!*\
  !*** ./panels/PredictionPanel/panelView.tsx ***!
  \**********************************************/
/*! exports provided: PanelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelView", function() { return PanelView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var PanelView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PanelView, _super);

  function PanelView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.pause = function () {
      _this.props.pause();

      if (_this.btn_stop) {
        _this.btn_stop.hidden = true;
      }

      if (_this.btn_start) {
        _this.btn_start.hidden = false;
      }
    };

    _this.start = function () {
      _this.props.start();

      if (_this.btn_stop) {
        _this.btn_stop.hidden = false;
      }

      if (_this.btn_start) {
        _this.btn_start.hidden = true;
      }
    };

    return _this;
  }

  PanelView.prototype.componentDidMount = function () {
    this.btn_stop = document.getElementById('btn_stop');
    this.btn_start = document.getElementById('btn_start');
  };

  PanelView.prototype.render = function () {
    var _a = this.props,
        algorithm = _a.algorithm,
        coefficients = _a.coefficients,
        opt = _a.opt,
        lastValue = _a.lastValue;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", null, "- Algorithm: ", algorithm + '\n', "- Coefficients: ", coefficients + '\n', opt != null ? '- Options: ' + JSON.stringify(opt) + '\n' : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, lastValue), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      id: "btn_stop",
      className: "btn btn-danger",
      onClick: this.pause
    }, 'Stop'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      id: "btn_start",
      className: "btn btn-success",
      onClick: this.start,
      hidden: true
    }, 'Start')));
  };

  return PanelView;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/strategies/RL/configRL.tsx":
/*!***********************************************************!*\
  !*** ./panels/PredictionPanel/strategies/RL/configRL.tsx ***!
  \***********************************************************/
/*! exports provided: ConfigRL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigRL", function() { return ConfigRL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interfaces_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/config */ "./panels/PredictionPanel/strategies/interfaces/config.ts");





var ConfigRL =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfigRL, _super);

  function ConfigRL() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ConfigRL.prototype.getSeriesNames = function () {
    return this.props.data.series.map(function (serie) {
      return serie.name || 'unknown';
    });
  };

  ConfigRL.prototype.renderQueryOptions = function () {
    var e_1, _a;

    var seriesName = this.getSeriesNames();
    var opt = this.props.options.predictor.getOpt();
    var options = [];

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(seriesName.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var i = _c.value;
        options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: i,
          selected: opt.toPredict === i
        }, seriesName[i]));
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return options;
  };

  ConfigRL.prototype.setToPredict = function (value) {
    this.props.options.predictor.setOpt({
      toPredict: Number.parseInt(value, 10)
    });
    this.render();
  };

  ConfigRL.prototype.render = function () {
    var _this = this;

    var predictor = this.props.options.predictor;

    if (!this.props.options.predictor.getOpt()) {
      this.props.options.predictor.setOpt({
        toPredict: 0
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelOptionsGroup"], {
      title: "RL"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, predictor.getPredFun() ? 'Function: ' + predictor.getPredFun() : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-10",
      style: {
        display: 'inline-block'
      }
    }, ' ', "y (value to predict)", ' '), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-select-wrapper width-10",
      style: {
        display: 'inline-block'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      className: "input-small gf-form-input",
      onChange: function onChange(event) {
        return _this.setToPredict(event.target.value);
      }
    }, this.renderQueryOptions())));
  };

  return ConfigRL;
}(_interfaces_config__WEBPACK_IMPORTED_MODULE_3__["Config"]);



/***/ }),

/***/ "./panels/PredictionPanel/strategies/RL/strategyRL.ts":
/*!************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/RL/strategyRL.ts ***!
  \************************************************************/
/*! exports provided: StrategyRL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyRL", function() { return StrategyRL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var utils_Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/Data */ "./utils/Data.ts");
/* harmony import */ var utils_Predicted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/Predicted */ "./utils/Predicted.ts");




var StrategyRL =
/** @class */
function () {
  function StrategyRL() {}

  StrategyRL.prototype.predict = function (data, predictor, options) {
    if (!options || !options.toPredict) {
      options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        toPredict: 0
      });
    }

    var base = 1 - options.toPredict; //the other one

    var coeff = predictor.getCoefficients();

    var f = function f(x) {
      return x ? x * coeff[0] + coeff[1] : 0;
    };

    var predicted = new utils_Predicted__WEBPACK_IMPORTED_MODULE_2__["Predicted"]();

    if (!data) {
      throw Error('Data not found');
    }

    var it = new utils_Data__WEBPACK_IMPORTED_MODULE_1__["DataIterator"](data);
    var val;

    while (val = it.next()) {
      predicted.addValue(f(base === 0 ? val.a : val.b), val.time);
    }

    return predicted;
  };

  return StrategyRL;
}();



/***/ }),

/***/ "./panels/PredictionPanel/strategies/SVM/configSVM.tsx":
/*!*************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/SVM/configSVM.tsx ***!
  \*************************************************************/
/*! exports provided: ConfigSVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigSVM", function() { return ConfigSVM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interfaces_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/config */ "./panels/PredictionPanel/strategies/interfaces/config.ts");





var ConfigSVM =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfigSVM, _super);

  function ConfigSVM() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ConfigSVM.prototype.getSeriesNames = function () {
    return this.props.data.series.map(function (serie) {
      return serie.name || 'unknown';
    });
  };

  ConfigSVM.prototype.renderQueryOptions = function () {
    var e_1, _a;

    var seriesName = this.getSeriesNames();
    var opt = this.props.options.predictor.getOpt();
    var options = [];

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(seriesName.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var i = _c.value;
        options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: i,
          selected: opt.firstQuery === i
        }, seriesName[i]));
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return options;
  };

  ConfigSVM.prototype.setFirstQuery = function (value) {
    this.props.options.predictor.setOpt({
      firstQuery: Number.parseInt(value, 10)
    });
    this.render();
  };

  ConfigSVM.prototype.render = function () {
    var _this = this;

    var predictor = this.props.options.predictor;

    if (!predictor.getOpt()) {
      predictor.setOpt({
        firstQuery: 0
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelOptionsGroup"], {
      title: "SVM"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, predictor.getPredFun() ? 'Function: ' + predictor.getPredFun() : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-10",
      style: {
        display: 'inline-block'
      }
    }, ' ', "x1 (first query)", ' '), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-select-wrapper width-10",
      style: {
        display: 'inline-block'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      className: "input-small gf-form-input",
      onChange: function onChange(event) {
        return _this.setFirstQuery(event.target.value);
      }
    }, this.renderQueryOptions())));
  };

  return ConfigSVM;
}(_interfaces_config__WEBPACK_IMPORTED_MODULE_3__["Config"]);



/***/ }),

/***/ "./panels/PredictionPanel/strategies/SVM/strategySVM.ts":
/*!**************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/SVM/strategySVM.ts ***!
  \**************************************************************/
/*! exports provided: StrategySVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategySVM", function() { return StrategySVM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var utils_Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/Data */ "./utils/Data.ts");
/* harmony import */ var utils_Predicted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/Predicted */ "./utils/Predicted.ts");




var StrategySVM =
/** @class */
function () {
  function StrategySVM() {}

  StrategySVM.prototype.predict = function (data, predictor, options) {
    if (!options || !options.firstQuery) {
      options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        firstQuery: 0
      });
    }

    var coeff = predictor.getCoefficients();
    var first = options.firstQuery;

    var f = function f(x1, x2) {
      return x1 * coeff[0] + x2 * coeff[1] + coeff[2];
    };

    var predicted = new utils_Predicted__WEBPACK_IMPORTED_MODULE_2__["Predicted"]();

    if (!data) {
      throw Error('Data not found');
    }

    var it = new utils_Data__WEBPACK_IMPORTED_MODULE_1__["DataIterator"](data);
    var val;

    while (val = it.next()) {
      var v = first === 0 ? f(val.a, val.b) : f(val.b, val.a);
      var cls = v === 0 ? 0 : v > 0 ? 1 : -1; //classification 1 / -1

      predicted.addValue(cls, val.time);
    }

    return predicted;
  };

  return StrategySVM;
}();



/***/ }),

/***/ "./panels/PredictionPanel/strategies/interfaces/config.ts":
/*!****************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/interfaces/config.ts ***!
  \****************************************************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Config =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Config, _super);

  function Config() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Config;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/strategies/strategies.ts":
/*!*********************************************************!*\
  !*** ./panels/PredictionPanel/strategies/strategies.ts ***!
  \*********************************************************/
/*! exports provided: strategies, configs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strategies", function() { return strategies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configs", function() { return configs; });
/* harmony import */ var _RL_strategyRL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RL/strategyRL */ "./panels/PredictionPanel/strategies/RL/strategyRL.ts");
/* harmony import */ var _SVM_strategySVM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVM/strategySVM */ "./panels/PredictionPanel/strategies/SVM/strategySVM.ts");
/* harmony import */ var _RL_configRL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RL/configRL */ "./panels/PredictionPanel/strategies/RL/configRL.tsx");
/* harmony import */ var _SVM_configSVM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVM/configSVM */ "./panels/PredictionPanel/strategies/SVM/configSVM.tsx");




var strategies = {
  RL: new _RL_strategyRL__WEBPACK_IMPORTED_MODULE_0__["StrategyRL"](),
  SVM: new _SVM_strategySVM__WEBPACK_IMPORTED_MODULE_1__["StrategySVM"]()
};
var configs = {
  RL: _RL_configRL__WEBPACK_IMPORTED_MODULE_2__["ConfigRL"],
  SVM: _SVM_configSVM__WEBPACK_IMPORTED_MODULE_3__["ConfigSVM"]
};

/***/ }),

/***/ "./utils/Data.ts":
/*!***********************!*\
  !*** ./utils/Data.ts ***!
  \***********************/
/*! exports provided: Data, DataIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataIterator", function() { return DataIterator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/**
 * Project: Predire in Grafana
 * File: Data.ts
 * Author: Federico Carboni
 * Created: 2020-04-15
 * Version: 0.1
 * -----------------------------------------------------------------------------------------
 * Copyright 2020 ProApesGroup.
 * Licensed under the MIT License. See LICENSE in the project root for license informations.
 * -----------------------------------------------------------------------------------------
 * Changelog:
 * 0.1 - Writing Data class for incpsulation of measured data.
 */


var Data =
/** @class */
function () {
  function Data() {
    this.data = [];
  }

  Data.prototype.addValues = function (a, b, time) {
    this.data.push([a, b, time]);
  };

  Data.prototype.clear = function () {
    this.data = [];
  };

  Data.prototype.getAt = function (index) {
    return {
      a: this.data[index][0],
      b: this.data[index][1],
      time: this.data[index][2]
    };
  };

  Data.prototype.size = function () {
    return this.data.length;
  };

  Data.fromSeries = function (series) {
    var e_1, _a;

    if (!series[0] || !series[1]) {
      throw Error('Set at least 2 query before');
    }

    var time = series[0].fields[1].values.toArray();
    var s = []; // [ [valA, valA ...] [valB, valB ...] ]

    series.forEach(function (serie) {
      s.push(serie.fields[0].values.toArray());
    });
    var data = new Data();

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(time.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var i = _c.value;
        data.addValues(s[0][i], s[1][i], time[i]);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return data;
  };

  return Data;
}();



var DataIterator =
/** @class */
function () {
  function DataIterator(data) {
    this.index = 0;
    this.data = data;
  }

  DataIterator.prototype.next = function () {
    return this.index < this.data.size() ? this.data.getAt(this.index++) : null;
  };

  return DataIterator;
}();



/***/ }),

/***/ "./utils/Predicted.ts":
/*!****************************!*\
  !*** ./utils/Predicted.ts ***!
  \****************************/
/*! exports provided: Predicted, PredIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Predicted", function() { return Predicted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredIterator", function() { return PredIterator; });
/**
 * Project: Predire in Grafana
 * File: Predicted.ts
 * Author: Federico Carboni
 * Created: 2020-04-15
 * Version: 0.1
 * -----------------------------------------------------------------------------------------
 * Copyright 2020 ProApesGroup.
 * Licensed under the MIT License. See LICENSE in the project root for license informations.
 * -----------------------------------------------------------------------------------------
 * Changelog:
 * 0.1 - Writing Predicted class for incpsulation of predicted data.
 */
var Predicted =
/** @class */
function () {
  function Predicted() {
    this.predicted = [];
  }

  Predicted.prototype.addValue = function (value, time) {
    this.predicted.push([value, time]);
  };

  Predicted.prototype.clear = function () {
    this.predicted = [];
  };

  Predicted.prototype.getAt = function (index) {
    return {
      value: this.predicted[index][0],
      time: this.predicted[index][1]
    };
  };

  Predicted.prototype.size = function () {
    return this.predicted.length;
  };

  return Predicted;
}();



var PredIterator =
/** @class */
function () {
  function PredIterator(predicted) {
    this.index = 0;
    this.predicted = predicted;
  }

  PredIterator.prototype.next = function () {
    return this.index < this.predicted.size() ? this.predicted.getAt(this.index++) : null;
  };

  return PredIterator;
}();



/***/ }),

/***/ "./utils/Predictor.ts":
/*!****************************!*\
  !*** ./utils/Predictor.ts ***!
  \****************************/
/*! exports provided: Predictor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Predictor", function() { return Predictor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/**
 * Project: Predire in Grafana
 * File: Predictor.ts
 * Author: Federico Carboni
 * Created: 2020-04-16
 * Version: 0.1
 * -----------------------------------------------------------------------------------------
 * Copyright 2020 ProApesGroup.
 * Licensed under the MIT License. See LICENSE in the project root for license informations.
 * -----------------------------------------------------------------------------------------
 * Changelog:
 * 0.1 - Writing Predictor class for incpsulation of pred info.
 */


var Predictor =
/** @class */
function () {
  function Predictor(algorithm, coefficients, predFun, opt) {
    this.algorithm = algorithm;
    this.coefficients = coefficients;
    this.predFun = predFun;
    this.opt = opt;
  }

  Predictor.prototype.getAlgorithm = function () {
    return this.algorithm;
  };

  Predictor.prototype.getCoefficients = function () {
    return this.coefficients;
  };

  Predictor.prototype.getPredFun = function () {
    return this.predFun;
  };

  Predictor.prototype.getOpt = function () {
    return this.opt;
  };

  Predictor.prototype.setOpt = function (opt) {
    this.opt = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.opt), opt);
  };

  Predictor.fromJSON = function (str) {
    if (!str) {
      throw Error('No file found');
    }

    var predictor = JSON.parse(str);

    if (!predictor.algorithm || !predictor.coefficients) {
      throw Error('Error reading file');
    }

    return predictor;
  };

  return Predictor;
}();



/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map