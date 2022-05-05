/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../images/battleshipBackground.gif */ "./images/battleshipBackground.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    display: grid;\n    text-align: center;\n    grid-template-columns: 1;\n    grid-template-rows: 1fr 2fr .25fr;\n    margin: 0;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size:100% 130vh;\n    background-repeat:no-repeat;\n    font-family: 'Bangers', cursive;\n    color: #233B48;\n}\n\n#startButton, #restartButton{    \n    display: flex;\n    width: max-content;\n    font-size: 2rem;\n    align-self: center;\n    margin: auto;\n    background-color: #FBC874;\n    border-radius: 5px;\n    border: none;\n    opacity: 0.7;\n    font-family: 'Bangers', cursive;\n}\n\n#startButton:hover, #restartButton:hover{\n    opacity: 0.2;\n}\n\nheader{\n    grid-area: 1 / 1 / span 1  /span 1;  \n    height: min-content; \n}\n\nmain{\n    grid-area: 2 / 1 / span 1  /span 1;\n    display:flex;    \n    margin: auto;\n    height: min-content;\n    align-items: center;\n    background-image: linear-gradient(75deg, #FBC874, #5794A6) ;    \n    opacity: 0.8;\n    border-radius: 5px;   \n}\n\nfooter{\n  grid-area: 3 / 1 / span 0  /span 0;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #3A6572;\n  opacity: 0.4;  \n  z-index: -1;\n}\n\n#title{\n    font-size: 4rem;\n}\n#playerBoard, #computerBoard {\n    display: flex; \n    flex-direction: row;\n    flex-grow: 0;\n    background-color: black;\n    opacity: 0.8;\n}\n.playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n    width: 2em;\n    height: 2em;    \n}\n.playerCellsDiv, .computerCellsDiv{\n    border: 1px solid white;\n}\n\n@media screen and (max-width: 815px) {\n    main {\n      flex-direction: column;\n      margin: none;\n      height: 115vh;\n      padding: none; \n      width: 80vw;\n    }\n\n    body{\n        background-repeat: repeat-y;\n        background-size: auto;\n        display: flex;\n        flex-direction: column;\n    }\n    footer{\n        z-index: 0;\n    }\n\n    .playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n        width: 1.5rem;\n        height: 1.5rem;    \n    }\n    #startButton, #restartButton{\n        font-size: 1rem;\n    }\n\n    #title{\n        font-size: 2rem;\n    } \n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;IAClB,wBAAwB;IACxB,iCAAiC;IACjC,SAAS;IACT,yDAAuD;IACvD,0BAA0B;IAC1B,2BAA2B;IAC3B,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,2DAA2D;IAC3D,YAAY;IACZ,kBAAkB;AACtB;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,OAAO;EACP,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,WAAW;AACb;;AAEA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI;MACE,sBAAsB;MACtB,YAAY;MACZ,aAAa;MACb,aAAa;MACb,WAAW;IACb;;IAEA;QACI,2BAA2B;QAC3B,qBAAqB;QACrB,aAAa;QACb,sBAAsB;IAC1B;IACA;QACI,UAAU;IACd;;IAEA;QACI,aAAa;QACb,cAAc;IAClB;IACA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;EACF","sourcesContent":["body{\n    display: grid;\n    text-align: center;\n    grid-template-columns: 1;\n    grid-template-rows: 1fr 2fr .25fr;\n    margin: 0;\n    background-image: url(/images/battleshipBackground.gif);\n    background-size:100% 130vh;\n    background-repeat:no-repeat;\n    font-family: 'Bangers', cursive;\n    color: #233B48;\n}\n\n#startButton, #restartButton{    \n    display: flex;\n    width: max-content;\n    font-size: 2rem;\n    align-self: center;\n    margin: auto;\n    background-color: #FBC874;\n    border-radius: 5px;\n    border: none;\n    opacity: 0.7;\n    font-family: 'Bangers', cursive;\n}\n\n#startButton:hover, #restartButton:hover{\n    opacity: 0.2;\n}\n\nheader{\n    grid-area: 1 / 1 / span 1  /span 1;  \n    height: min-content; \n}\n\nmain{\n    grid-area: 2 / 1 / span 1  /span 1;\n    display:flex;    \n    margin: auto;\n    height: min-content;\n    align-items: center;\n    background-image: linear-gradient(75deg, #FBC874, #5794A6) ;    \n    opacity: 0.8;\n    border-radius: 5px;   \n}\n\nfooter{\n  grid-area: 3 / 1 / span 0  /span 0;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #3A6572;\n  opacity: 0.4;  \n  z-index: -1;\n}\n\n#title{\n    font-size: 4rem;\n}\n#playerBoard, #computerBoard {\n    display: flex; \n    flex-direction: row;\n    flex-grow: 0;\n    background-color: black;\n    opacity: 0.8;\n}\n.playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n    width: 2em;\n    height: 2em;    \n}\n.playerCellsDiv, .computerCellsDiv{\n    border: 1px solid white;\n}\n\n@media screen and (max-width: 815px) {\n    main {\n      flex-direction: column;\n      margin: none;\n      height: 115vh;\n      padding: none; \n      width: 80vw;\n    }\n\n    body{\n        background-repeat: repeat-y;\n        background-size: auto;\n        display: flex;\n        flex-direction: column;\n    }\n    footer{\n        z-index: 0;\n    }\n\n    .playerCellsDiv, .playerRowDiv, .computerRowDiv .computerCellsDiv{    \n        width: 1.5rem;\n        height: 1.5rem;    \n    }\n    #startButton, #restartButton{\n        font-size: 1rem;\n    }\n\n    #title{\n        font-size: 2rem;\n    } \n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dependencies/frontEnd.js":
/*!**************************************!*\
  !*** ./src/dependencies/frontEnd.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoards": () => (/* binding */ createBoards)
/* harmony export */ });
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ "./src/dependencies/gameLoop.js");


//Global variables
let playersBoard = document.getElementById("playerBoard");
let computersBoard = document.getElementById("computerBoard");

//Displays chosen board on DOM
function displayBoard(boardToDisplay) {
  //draw board
  for (let index = 0; index < boardToDisplay.board.length; index++) {
    //element is each row
    const element = boardToDisplay.board[index];
    //create a div for the row
    let col = document.createElement("div");
    // row.className = 'row';
    if (boardToDisplay === _gameLoop__WEBPACK_IMPORTED_MODULE_0__.computerBoard) {
      col.setAttribute("class", "computerRowDiv");
    } else {
      col.setAttribute("class", "playerColDiv");
    }
    //create the columns
    for (let i = 0; i < element.length; i++) {
      let column = document.createElement("div");
      if (boardToDisplay === _gameLoop__WEBPACK_IMPORTED_MODULE_0__.computerBoard) {
        column.setAttribute("id", `c[ ${i}, ${element[index]} ]`);
        column.onclick = () => (0,_gameLoop__WEBPACK_IMPORTED_MODULE_0__.playerTurn)(`${i}`, `${element[index]}`);
        
        column.setAttribute("class", "computerCellsDiv");
      } else {
        column.setAttribute("id", `[ ${i}, ${element[index]} ]`);
        column.setAttribute("class", "playerCellsDiv");
      }
      
      column.innerText = "";
      col.appendChild(column);
    }
    //append to dom
    if (boardToDisplay === _gameLoop__WEBPACK_IMPORTED_MODULE_0__.computerBoard) {
      computersBoard.appendChild(col);
    } else {
      playersBoard.appendChild(col);
    }
  }

  //render each ship on the board
  boardToDisplay.shipArray.forEach((element) => {
    //get the ships coordinates
    let coordArray = element.coordinates;
    //go through each coordinate, set the DOM value (same as coords) to red as the ship is placed there
    coordArray.forEach((item) => {
      if (boardToDisplay === _gameLoop__WEBPACK_IMPORTED_MODULE_0__.computerBoard) {
        document.getElementById(
          `c[ ${item[0]}, ${item[1]} ]`
        ).style.backgroundColor = "red";
        //do nothing - uncomment to see computer board placement
      } else {
        document.getElementById(
          `[ ${item[0]}, ${item[1]} ]`
        ).style.backgroundColor = "red";
      }
    });
  });

  //render missed shots on the board
  boardToDisplay.missedShots.forEach((element) => {
    if (boardToDisplay === _gameLoop__WEBPACK_IMPORTED_MODULE_0__.computerBoard) {
      let id = `c[ ${element[0]}, ${element[1]} ]`;
      document.getElementById(id).style.backgroundColor = "grey";
    } else {
      let id = `[ ${element[0]}, ${element[1]} ]`;
      document.getElementById(id).style.backgroundColor = "grey";
    }
  });

  //render hit shots on the board
  let square;
  //go through each ship on the board
  boardToDisplay.shipArray.forEach((element) => {
    for (let index = 0; index < element.lengthArray.length; index++) {
      //go through the 1/0 values on the ships length (0 means hit)
      const value = element.lengthArray[index];
      if (value == 0) {
        square = element.coordinates[index];
        if (boardToDisplay === _gameLoop__WEBPACK_IMPORTED_MODULE_0__.computerBoard) {
          document.getElementById(
            `c[ ${square[0]}, ${square[1]} ]`
          ).style.backgroundColor = "green";
        } else {
          //assign coordinate values to 'square'
          document.getElementById(
            `[ ${square[0]}, ${square[1]} ]`
          ).style.backgroundColor = "green";
        }
      }
    }
  });
}

function createBoards() {  
  playersBoard.innerHTML = "";
  computersBoard.innerHTML = "";
  displayBoard(_gameLoop__WEBPACK_IMPORTED_MODULE_0__.computerBoard);
  displayBoard(_gameLoop__WEBPACK_IMPORTED_MODULE_0__.playerBoard);
}



/***/ }),

/***/ "./src/dependencies/gameBoard.js":
/*!***************************************!*\
  !*** ./src/dependencies/gameBoard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard)
/* harmony export */ });
//gameboard factory
const gameBoard = () =>{
    //2d array 10x10
    //access values like a grid board[1][1] will be 1
    let board = [...Array(10)].map(x => [0,1,2,3,4,5,6,7,8,9])
    //create an array of ship names, so can determine which one is hit
    let shipArray = []
    //bool value for determining if all ships on board are sunk
    let allShipsSunk = false;
    //array holding all the ship coordinates
    let allShipCoords = [];
    //array holding all the missed shots
    let missedShots = [];

    //clash ship bool for random placement
    let anyShipClash = false;

    //function to place the ship on the gameboard
    function placeShip(ShipName, alignment, positionRow, positionCol)
    // function placeShip(ShipName, alignment)
    {
        // //code to randomise board placement
        // let positionRow = Math.floor(Math.random() * 10);
        // let positionCol = Math.floor(Math.random() * 10);

        //if the alignment is horizontal and the length of the alignment + ship length is less than 10 (length of board)
        if (alignment == 'horizontal' && (positionCol + ShipName.ShipLength < 10) ) {  
            //first check there are no clashes with ships already on board       
            let shipClash = false;
            allShipCoords.forEach(element => 
                { 
                    if ((positionRow == element[0]) && (positionCol == element[1])) 
                    {
                        shipClash = true;
                        // anyShipClash = true;
                    } 
                    // else{anyShipClash = false}
                });
            for (let index = 0; index < ShipName.ShipLength; index++) {
                if (shipClash)               
                {                    
                    // return false;
                    // anyShipClash = true;
                    alert('Ship overlaps with another')
                    break;
                }
                else{
                //update the ships coordinate array
                ShipName.coordinates.push([positionRow,(positionCol + index)]) 
                // return true;
                //update gameboard array
                board[positionRow][positionCol + index] = ShipName; 
                // anyShipClash = false;
                }                    
            }
            //then push this object to shipArray as a record of ships on board
            shipArray.push(ShipName);
            //then push all coordinates of this ship to allShipCoords      
            ShipName.coordinates.forEach(element => {allShipCoords.push(element);});
        }
        //if the alignment is vertical and the length of the alignment + ship length is less than 10 (length of board)
        else if (alignment == 'vertical' && (positionRow + ShipName.ShipLength < 10)) {
            //first check there are no clashes with ships already on board       
            let shipClash = false;
            allShipCoords.forEach(element => 
                { 
                    if ((positionRow == element[0]) && (positionCol == element[1])) 
                    {
                        shipClash = true;
                        // anyShipClash = true;
                    } 
                    // else{anyShipClash = false}
                });
            for (let index = 0; index < ShipName.ShipLength; index++) 
            {
                if (shipClash)               
                {
                    // anyShipClash = true;
                    // return false;
                    alert('Ship overlaps with another')
                    break;
                }
                else
                {
                //update the ships coordinate array
                ShipName.coordinates.push([(positionRow + index),positionCol]);
                anyShipClash = false;
                shipArray.push(ShipName);
                ShipName.coordinates.forEach(element => {allShipCoords.push(element);});   
                // return true;
                }     
            } 
                  
        }
        //validation for if ships are not placed in the right spot
        else{
            // anyShipClash = true;
            alert('Bad ship placement')
        }
    }
    
    //receiveAttack function takes a pair
    // of coordinates, determines whether or not the attack hit a ship
    // and then sends the ‘hit’ function to the correct ship, 
    //or records the coordinates of the missed shot.
    function receiveAttack(positionRow, positionCol)
    {               
        //bool value if the attack coordinates hit a ship
        let thisIsAHit = false;
        //value for hit ship
        let shipHit;
        //value for index of the ship that has been hit
        let hitIndex;
        allShipCoords.forEach(element => 
        {            
            //each object in the ship array has array of coords
            if ( (positionRow == element[0]) && (positionCol == element[1])) 
            {   //this is a hit - send hit to correct ship                    
                //determine which ship was hit and where
                //loop through all ship objects on board
                for (let index = 0; index < shipArray.length; index++) 
                {
                    //loop within the objects coordinates array
                    for (let i = 0; i < shipArray[index].coordinates.length; i++) 
                    {
                        //coordinate for this loop
                        const coord = shipArray[index].coordinates[i];
                        if((coord[0] == positionRow) && (coord[1] == positionCol) )
                        {
                            //shipHit is the ship object
                            shipHit = shipArray[index];
                            //make hit index position of the coordinates in the array
                            hitIndex = i;
                        }
                    }                
                }
                //call the hit function
                shipHit.hit(hitIndex);
                thisIsAHit = true;                
            }        
        });    
        if (!thisIsAHit) {
            //this is a miss. record missed coordinates so they can be rendered in frontEnd.js
            missedShots.push([positionRow, positionCol]);
        } 
    }


    //Gameboards should be able to report whether or not all of their ships have been sunk.
    function checkIfAllShipsSunk()
    {
        //create bool
        allShipsSunk = true;

        //array to store true/false values into
        let checkForSinkageArray = [];

        //shipArray has list of ship objects, check each for if they are sunk
        shipArray.forEach(element => {
            let isSunk = element.isSunk()
            checkForSinkageArray.push(isSunk)
        });
        checkForSinkageArray.forEach(element => {
            if (element == false) {
                allShipsSunk = false;
            }
        });

        //check each value of shipArray.sunk 
        //if they are all 
        return allShipsSunk;
    }       

return {board, allShipCoords, placeShip, receiveAttack, shipArray, checkIfAllShipsSunk, missedShots, anyShipClash}
}




/***/ }),

/***/ "./src/dependencies/gameLoop.js":
/*!**************************************!*\
  !*** ./src/dependencies/gameLoop.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerBoard": () => (/* binding */ computerBoard),
/* harmony export */   "gamePlay": () => (/* binding */ gamePlay),
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard),
/* harmony export */   "playerTurn": () => (/* binding */ playerTurn)
/* harmony export */ });
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/dependencies/shipFactory.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/dependencies/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/dependencies/player.js");
/* harmony import */ var _frontEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontEnd */ "./src/dependencies/frontEnd.js");





//create boards
let playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
let computerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();

//create players
let player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)("Player1", computerBoard);
let player2COMP = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)("Player2COMP", playerBoard);


function gamePlay(){

//create player ships
let playerBattleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4, 'battleship');
let playerPatrol = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(2, 'patrol');
let playerSubmarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3, 'submarine');
let playerDestroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4, 'destroyer');
let playerCarrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(5, 'carrier');

//create computer ships
let computerBattleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4, 'battleship');
let computerPatrol = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(2, 'patrol');
let computerSubmarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3, 'submarine');
let computerDestroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4, 'destroyer');
let computerCarrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(5, 'carrier');

    // playerBoard.anyShipClash = true;
    //     while (playerBoard.anyShipClash) {
    //         playerBoard.placeShip(playerBattleship, 'vertical');
    //         playerBoard.placeShip(playerPatrol, 'horizontal');
    //         playerBoard.placeShip(playerSubmarine, 'vertical');
    //         playerBoard.placeShip(playerDestroyer, 'horizontal');
    //         playerBoard.placeShip(playerCarrier, 'horizontal');
    //     }


        
        
        playerBoard.placeShip(playerBattleship, 'vertical', 3,3 );
        playerBoard.placeShip(playerPatrol, 'horizontal', 0,3 );
        playerBoard.placeShip(playerSubmarine, 'vertical', 3,6 );
        playerBoard.placeShip(playerDestroyer, 'horizontal', 8,1);
        playerBoard.placeShip(playerCarrier, 'horizontal', 9,1 );
        
       
        
        
        

        
        
        // do {
            computerBoard.placeShip(computerBattleship, 'vertical', 3,3 );
            computerBoard.placeShip(computerPatrol, 'horizontal', 0,3 );
            computerBoard.placeShip(computerSubmarine, 'vertical', 3,6 );
            computerBoard.placeShip(computerDestroyer, 'horizontal', 8,1);
            computerBoard.placeShip(computerCarrier, 'horizontal', 9,1 );
        //     computerBoard.placeShip(computerBattleship, 'vertical');
        //     computerBoard.placeShip(computerPatrol, 'horizontal');
        //     computerBoard.placeShip(computerSubmarine, 'vertical');
        //     computerBoard.placeShip(computerDestroyer, 'horizontal');
        //     computerBoard.placeShip(computerCarrier, 'horizontal');
        // } while (computerBoard.anyShipClash);
        
        

(0,_frontEnd__WEBPACK_IMPORTED_MODULE_3__.createBoards)();
}

function playerTurn(row, col)
{
    player1.takeTurn(row, col); 

    //immediately after, the computer takes a turn - for testing anyway
    let col2 = Math.floor(Math.random() * 10);
    let row2 = Math.floor(Math.random() * 10);
    player2COMP.takeTurn(col2, row2);  


    //check if all ships sunk
    let gameoverPlayer = playerBoard.checkIfAllShipsSunk();
    let gameoverComputer = computerBoard.checkIfAllShipsSunk()

    if (gameoverPlayer) {
        alert("Computer wins!");
        location.reload();
    }
    if (gameoverComputer) {
        alert("Player wins!");
        location.reload();
    }
}




/***/ }),

/***/ "./src/dependencies/player.js":
/*!************************************!*\
  !*** ./src/dependencies/player.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _frontEnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontEnd */ "./src/dependencies/frontEnd.js");

const { receiveAttack } = __webpack_require__(/*! ./gameBoard */ "./src/dependencies/gameBoard.js");


const player = (name, enemyGameboard) =>
{   
    //label with a name
    let playerName = name;
    let gameBoardAttackBoard = enemyGameboard;
    let turn = false;
    let computerTurnsTaken = [];

    function takeTurn(aRow, aCol){
    if (playerName == 'computer') {

        //need to randomise plays
        let col = Math.floor(Math.random() * 10);
        let row = Math.floor(Math.random() * 10);
        //bool for if the guess has been taken already in game
        let guessTaken = false;
        //check the previous guesses, if it has been taken go to while loop
        computerTurnsTaken.forEach(element => {
            if (element[0] == row && element[1] == col) {
                guessTaken = true;
            }
        });
        //loop through until a guess isnt taken
        while (guessTaken) {
            col = Math.floor(Math.random() * 10);
            row = Math.floor(Math.random() * 10);
            computerTurnsTaken.forEach(element => {
                if (element[0] == row && element[1] == col) {
                    guessTaken = true;
                }
            });
        }
        //once the coordinates are valid, push them to the guesses taken array for validation
        computerTurnsTaken.push([row, col]);

        //the board to attack is the players board
        gameBoardAttackBoard.receiveAttack(row, col);

    }
    else
    {
        //not a computer
        gameBoardAttackBoard.receiveAttack(aRow, aCol)
        //the board to attack is the computers board        
        ;(0,_frontEnd__WEBPACK_IMPORTED_MODULE_0__.createBoards)();
    }
}
return{takeTurn}

}



/***/ }),

/***/ "./src/dependencies/shipFactory.js":
/*!*****************************************!*\
  !*** ./src/dependencies/shipFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
const shipFactory = (length, name) =>{
  //define length of ship
  let ShipLength = length;
  let ShipName = name;
  //create an array of the length, representing a ship
  let lengthArray = [];
  lengthArray = [...Array(ShipLength)].map(x => 1);   
  //array for coordinates to be held
  let coordinates = [];
  //define hit function
  function hit(num)
  {
    //mark num as hit
    lengthArray[num] = 0;  
  }  
  //determine if sunk
  function isSunk()
  {
    let sunk = true;
    lengthArray.forEach(element => {
      if (element == 1) {
        sunk = false;
      }      
    });
    return sunk;
  }
  return{ShipLength, ShipName, lengthArray, hit, isSunk, coordinates}
}



/***/ }),

/***/ "./images/battleshipBackground.gif":
/*!*****************************************!*\
  !*** ./images/battleshipBackground.gif ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d56f14bbdd9b1d2dc29f.gif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dependencies_gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependencies/gameLoop */ "./src/dependencies/gameLoop.js");
/* harmony import */ var _dependencies_frontEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependencies/frontEnd */ "./src/dependencies/frontEnd.js");





let startButton = document.getElementById('startButton');
startButton.onclick = () => (0,_dependencies_gameLoop__WEBPACK_IMPORTED_MODULE_1__.gamePlay)();
document.getElementById('restartButton').onclick = () => location.reload();
// startButton.addEventListener("click", gamePlay)
//call the game loop function
(0,_dependencies_frontEnd__WEBPACK_IMPORTED_MODULE_2__.createBoards)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvZGVwZW5kZW5jaWVzL2Zyb250RW5kLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9kZXBlbmRlbmNpZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy8uL3NyYy9kZXBlbmRlbmNpZXMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzLy4vc3JjL2RlcGVuZGVuY2llcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcGpzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXBqcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9pbWFnZXMvYmF0dGxlc2hpcEJhY2tncm91bmQuZ2lmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAuMjVmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMzB2aDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogIzIzM0I0ODtcXG59XFxuXFxuI3N0YXJ0QnV0dG9uLCAjcmVzdGFydEJ1dHRvbnsgICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCQzg3NDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXG59XFxuXFxuI3N0YXJ0QnV0dG9uOmhvdmVyLCAjcmVzdGFydEJ1dHRvbjpob3ZlcntcXG4gICAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyBzcGFuIDEgIC9zcGFuIDE7ICBcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDsgXFxufVxcblxcbm1haW57XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyBzcGFuIDEgIC9zcGFuIDE7XFxuICAgIGRpc3BsYXk6ZmxleDsgICAgXFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCAjRkJDODc0LCAjNTc5NEE2KSA7ICAgIFxcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgICBcXG59XFxuXFxuZm9vdGVye1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIHNwYW4gMCAgL3NwYW4gMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTY1NzI7XFxuICBvcGFjaXR5OiAwLjQ7ICBcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4jdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuI3BsYXllckJvYXJkLCAjY29tcHV0ZXJCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcbi5wbGF5ZXJDZWxsc0RpdiwgLnBsYXllclJvd0RpdiwgLmNvbXB1dGVyUm93RGl2IC5jb21wdXRlckNlbGxzRGl2eyAgICBcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07ICAgIFxcbn1cXG4ucGxheWVyQ2VsbHNEaXYsIC5jb21wdXRlckNlbGxzRGl2e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODE1cHgpIHtcXG4gICAgbWFpbiB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBtYXJnaW46IG5vbmU7XFxuICAgICAgaGVpZ2h0OiAxMTV2aDtcXG4gICAgICBwYWRkaW5nOiBub25lOyBcXG4gICAgICB3aWR0aDogODB2dztcXG4gICAgfVxcblxcbiAgICBib2R5e1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgZm9vdGVye1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgfVxcblxcbiAgICAucGxheWVyQ2VsbHNEaXYsIC5wbGF5ZXJSb3dEaXYsIC5jb21wdXRlclJvd0RpdiAuY29tcHV0ZXJDZWxsc0RpdnsgICAgXFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07ICAgIFxcbiAgICB9XFxuICAgICNzdGFydEJ1dHRvbiwgI3Jlc3RhcnRCdXR0b257XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI3RpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9IFxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsU0FBUztJQUNULHlEQUF1RDtJQUN2RCwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJEQUEyRDtJQUMzRCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtNQUNFLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osYUFBYTtNQUNiLGFBQWE7TUFDYixXQUFXO0lBQ2I7O0lBRUE7UUFDSSwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7UUFDYixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgLjI1ZnI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9pbWFnZXMvYmF0dGxlc2hpcEJhY2tncm91bmQuZ2lmKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTMwdmg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgZm9udC1mYW1pbHk6ICdCYW5nZXJzJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICMyMzNCNDg7XFxufVxcblxcbiNzdGFydEJ1dHRvbiwgI3Jlc3RhcnRCdXR0b257ICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkM4NzQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XFxufVxcblxcbiNzdGFydEJ1dHRvbjpob3ZlciwgI3Jlc3RhcnRCdXR0b246aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gc3BhbiAxICAvc3BhbiAxOyAgXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7IFxcbn1cXG5cXG5tYWlue1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gc3BhbiAxICAvc3BhbiAxO1xcbiAgICBkaXNwbGF5OmZsZXg7ICAgIFxcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg3NWRlZywgI0ZCQzg3NCwgIzU3OTRBNikgOyAgICBcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgXFxufVxcblxcbmZvb3RlcntcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyBzcGFuIDAgIC9zcGFuIDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E2NTcyO1xcbiAgb3BhY2l0eTogMC40OyAgXFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuI3RpdGxle1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcbiNwbGF5ZXJCb2FyZCwgI2NvbXB1dGVyQm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG4ucGxheWVyQ2VsbHNEaXYsIC5wbGF5ZXJSb3dEaXYsIC5jb21wdXRlclJvd0RpdiAuY29tcHV0ZXJDZWxsc0RpdnsgICAgXFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMmVtOyAgICBcXG59XFxuLnBsYXllckNlbGxzRGl2LCAuY29tcHV0ZXJDZWxsc0RpdntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxNXB4KSB7XFxuICAgIG1haW4ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgbWFyZ2luOiBub25lO1xcbiAgICAgIGhlaWdodDogMTE1dmg7XFxuICAgICAgcGFkZGluZzogbm9uZTsgXFxuICAgICAgd2lkdGg6IDgwdnc7XFxuICAgIH1cXG5cXG4gICAgYm9keXtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIGZvb3RlcntcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgIH1cXG5cXG4gICAgLnBsYXllckNlbGxzRGl2LCAucGxheWVyUm93RGl2LCAuY29tcHV0ZXJSb3dEaXYgLmNvbXB1dGVyQ2VsbHNEaXZ7ICAgIFxcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMS41cmVtOyAgICBcXG4gICAgfVxcbiAgICAjc3RhcnRCdXR0b24sICNyZXN0YXJ0QnV0dG9ue1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICN0aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfSBcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQsIHBsYXllclR1cm4gfSBmcm9tIFwiLi9nYW1lTG9vcFwiO1xuXG4vL0dsb2JhbCB2YXJpYWJsZXNcbmxldCBwbGF5ZXJzQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckJvYXJkXCIpO1xubGV0IGNvbXB1dGVyc0JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlckJvYXJkXCIpO1xuXG4vL0Rpc3BsYXlzIGNob3NlbiBib2FyZCBvbiBET01cbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZChib2FyZFRvRGlzcGxheSkge1xuICAvL2RyYXcgYm9hcmRcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvYXJkVG9EaXNwbGF5LmJvYXJkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIC8vZWxlbWVudCBpcyBlYWNoIHJvd1xuICAgIGNvbnN0IGVsZW1lbnQgPSBib2FyZFRvRGlzcGxheS5ib2FyZFtpbmRleF07XG4gICAgLy9jcmVhdGUgYSBkaXYgZm9yIHRoZSByb3dcbiAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XG4gICAgaWYgKGJvYXJkVG9EaXNwbGF5ID09PSBjb21wdXRlckJvYXJkKSB7XG4gICAgICBjb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb21wdXRlclJvd0RpdlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGxheWVyQ29sRGl2XCIpO1xuICAgIH1cbiAgICAvL2NyZWF0ZSB0aGUgY29sdW1uc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpZiAoYm9hcmRUb0Rpc3BsYXkgPT09IGNvbXB1dGVyQm9hcmQpIHtcbiAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBjWyAke2l9LCAke2VsZW1lbnRbaW5kZXhdfSBdYCk7XG4gICAgICAgIGNvbHVtbi5vbmNsaWNrID0gKCkgPT4gcGxheWVyVHVybihgJHtpfWAsIGAke2VsZW1lbnRbaW5kZXhdfWApO1xuICAgICAgICBcbiAgICAgICAgY29sdW1uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29tcHV0ZXJDZWxsc0RpdlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgWyAke2l9LCAke2VsZW1lbnRbaW5kZXhdfSBdYCk7XG4gICAgICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBsYXllckNlbGxzRGl2XCIpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb2x1bW4uaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgIGNvbC5hcHBlbmRDaGlsZChjb2x1bW4pO1xuICAgIH1cbiAgICAvL2FwcGVuZCB0byBkb21cbiAgICBpZiAoYm9hcmRUb0Rpc3BsYXkgPT09IGNvbXB1dGVyQm9hcmQpIHtcbiAgICAgIGNvbXB1dGVyc0JvYXJkLmFwcGVuZENoaWxkKGNvbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllcnNCb2FyZC5hcHBlbmRDaGlsZChjb2wpO1xuICAgIH1cbiAgfVxuXG4gIC8vcmVuZGVyIGVhY2ggc2hpcCBvbiB0aGUgYm9hcmRcbiAgYm9hcmRUb0Rpc3BsYXkuc2hpcEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvL2dldCB0aGUgc2hpcHMgY29vcmRpbmF0ZXNcbiAgICBsZXQgY29vcmRBcnJheSA9IGVsZW1lbnQuY29vcmRpbmF0ZXM7XG4gICAgLy9nbyB0aHJvdWdoIGVhY2ggY29vcmRpbmF0ZSwgc2V0IHRoZSBET00gdmFsdWUgKHNhbWUgYXMgY29vcmRzKSB0byByZWQgYXMgdGhlIHNoaXAgaXMgcGxhY2VkIHRoZXJlXG4gICAgY29vcmRBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoYm9hcmRUb0Rpc3BsYXkgPT09IGNvbXB1dGVyQm9hcmQpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgYGNbICR7aXRlbVswXX0sICR7aXRlbVsxXX0gXWBcbiAgICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAvL2RvIG5vdGhpbmcgLSB1bmNvbW1lbnQgdG8gc2VlIGNvbXB1dGVyIGJvYXJkIHBsYWNlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgYFsgJHtpdGVtWzBdfSwgJHtpdGVtWzFdfSBdYFxuICAgICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vcmVuZGVyIG1pc3NlZCBzaG90cyBvbiB0aGUgYm9hcmRcbiAgYm9hcmRUb0Rpc3BsYXkubWlzc2VkU2hvdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xuICAgICAgbGV0IGlkID0gYGNbICR7ZWxlbWVudFswXX0sICR7ZWxlbWVudFsxXX0gXWA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpZCA9IGBbICR7ZWxlbWVudFswXX0sICR7ZWxlbWVudFsxXX0gXWA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XG4gICAgfVxuICB9KTtcblxuICAvL3JlbmRlciBoaXQgc2hvdHMgb24gdGhlIGJvYXJkXG4gIGxldCBzcXVhcmU7XG4gIC8vZ28gdGhyb3VnaCBlYWNoIHNoaXAgb24gdGhlIGJvYXJkXG4gIGJvYXJkVG9EaXNwbGF5LnNoaXBBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQubGVuZ3RoQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAvL2dvIHRocm91Z2ggdGhlIDEvMCB2YWx1ZXMgb24gdGhlIHNoaXBzIGxlbmd0aCAoMCBtZWFucyBoaXQpXG4gICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQubGVuZ3RoQXJyYXlbaW5kZXhdO1xuICAgICAgaWYgKHZhbHVlID09IDApIHtcbiAgICAgICAgc3F1YXJlID0gZWxlbWVudC5jb29yZGluYXRlc1tpbmRleF07XG4gICAgICAgIGlmIChib2FyZFRvRGlzcGxheSA9PT0gY29tcHV0ZXJCb2FyZCkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgYGNbICR7c3F1YXJlWzBdfSwgJHtzcXVhcmVbMV19IF1gXG4gICAgICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9hc3NpZ24gY29vcmRpbmF0ZSB2YWx1ZXMgdG8gJ3NxdWFyZSdcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgIGBbICR7c3F1YXJlWzBdfSwgJHtzcXVhcmVbMV19IF1gXG4gICAgICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZHMoKSB7ICBcbiAgcGxheWVyc0JvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbXB1dGVyc0JvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIGRpc3BsYXlCb2FyZChjb21wdXRlckJvYXJkKTtcbiAgZGlzcGxheUJvYXJkKHBsYXllckJvYXJkKTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUJvYXJkcyB9O1xuIiwiLy9nYW1lYm9hcmQgZmFjdG9yeVxuY29uc3QgZ2FtZUJvYXJkID0gKCkgPT57XG4gICAgLy8yZCBhcnJheSAxMHgxMFxuICAgIC8vYWNjZXNzIHZhbHVlcyBsaWtlIGEgZ3JpZCBib2FyZFsxXVsxXSB3aWxsIGJlIDFcbiAgICBsZXQgYm9hcmQgPSBbLi4uQXJyYXkoMTApXS5tYXAoeCA9PiBbMCwxLDIsMyw0LDUsNiw3LDgsOV0pXG4gICAgLy9jcmVhdGUgYW4gYXJyYXkgb2Ygc2hpcCBuYW1lcywgc28gY2FuIGRldGVybWluZSB3aGljaCBvbmUgaXMgaGl0XG4gICAgbGV0IHNoaXBBcnJheSA9IFtdXG4gICAgLy9ib29sIHZhbHVlIGZvciBkZXRlcm1pbmluZyBpZiBhbGwgc2hpcHMgb24gYm9hcmQgYXJlIHN1bmtcbiAgICBsZXQgYWxsU2hpcHNTdW5rID0gZmFsc2U7XG4gICAgLy9hcnJheSBob2xkaW5nIGFsbCB0aGUgc2hpcCBjb29yZGluYXRlc1xuICAgIGxldCBhbGxTaGlwQ29vcmRzID0gW107XG4gICAgLy9hcnJheSBob2xkaW5nIGFsbCB0aGUgbWlzc2VkIHNob3RzXG4gICAgbGV0IG1pc3NlZFNob3RzID0gW107XG5cbiAgICAvL2NsYXNoIHNoaXAgYm9vbCBmb3IgcmFuZG9tIHBsYWNlbWVudFxuICAgIGxldCBhbnlTaGlwQ2xhc2ggPSBmYWxzZTtcblxuICAgIC8vZnVuY3Rpb24gdG8gcGxhY2UgdGhlIHNoaXAgb24gdGhlIGdhbWVib2FyZFxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChTaGlwTmFtZSwgYWxpZ25tZW50LCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpXG4gICAgLy8gZnVuY3Rpb24gcGxhY2VTaGlwKFNoaXBOYW1lLCBhbGlnbm1lbnQpXG4gICAge1xuICAgICAgICAvLyAvL2NvZGUgdG8gcmFuZG9taXNlIGJvYXJkIHBsYWNlbWVudFxuICAgICAgICAvLyBsZXQgcG9zaXRpb25Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIC8vIGxldCBwb3NpdGlvbkNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgICAvL2lmIHRoZSBhbGlnbm1lbnQgaXMgaG9yaXpvbnRhbCBhbmQgdGhlIGxlbmd0aCBvZiB0aGUgYWxpZ25tZW50ICsgc2hpcCBsZW5ndGggaXMgbGVzcyB0aGFuIDEwIChsZW5ndGggb2YgYm9hcmQpXG4gICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnICYmIChwb3NpdGlvbkNvbCArIFNoaXBOYW1lLlNoaXBMZW5ndGggPCAxMCkgKSB7ICBcbiAgICAgICAgICAgIC8vZmlyc3QgY2hlY2sgdGhlcmUgYXJlIG5vIGNsYXNoZXMgd2l0aCBzaGlwcyBhbHJlYWR5IG9uIGJvYXJkICAgICAgIFxuICAgICAgICAgICAgbGV0IHNoaXBDbGFzaCA9IGZhbHNlO1xuICAgICAgICAgICAgYWxsU2hpcENvb3Jkcy5mb3JFYWNoKGVsZW1lbnQgPT4gXG4gICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgaWYgKChwb3NpdGlvblJvdyA9PSBlbGVtZW50WzBdKSAmJiAocG9zaXRpb25Db2wgPT0gZWxlbWVudFsxXSkpIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQ2xhc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW55U2hpcENsYXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZXthbnlTaGlwQ2xhc2ggPSBmYWxzZX1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBTaGlwTmFtZS5TaGlwTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBDbGFzaCkgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBhbnlTaGlwQ2xhc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU2hpcCBvdmVybGFwcyB3aXRoIGFub3RoZXInKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSB0aGUgc2hpcHMgY29vcmRpbmF0ZSBhcnJheVxuICAgICAgICAgICAgICAgIFNoaXBOYW1lLmNvb3JkaW5hdGVzLnB1c2goW3Bvc2l0aW9uUm93LChwb3NpdGlvbkNvbCArIGluZGV4KV0pIFxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIC8vdXBkYXRlIGdhbWVib2FyZCBhcnJheVxuICAgICAgICAgICAgICAgIGJvYXJkW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbCArIGluZGV4XSA9IFNoaXBOYW1lOyBcbiAgICAgICAgICAgICAgICAvLyBhbnlTaGlwQ2xhc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdGhlbiBwdXNoIHRoaXMgb2JqZWN0IHRvIHNoaXBBcnJheSBhcyBhIHJlY29yZCBvZiBzaGlwcyBvbiBib2FyZFxuICAgICAgICAgICAgc2hpcEFycmF5LnB1c2goU2hpcE5hbWUpO1xuICAgICAgICAgICAgLy90aGVuIHB1c2ggYWxsIGNvb3JkaW5hdGVzIG9mIHRoaXMgc2hpcCB0byBhbGxTaGlwQ29vcmRzICAgICAgXG4gICAgICAgICAgICBTaGlwTmFtZS5jb29yZGluYXRlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge2FsbFNoaXBDb29yZHMucHVzaChlbGVtZW50KTt9KTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIHRoZSBhbGlnbm1lbnQgaXMgdmVydGljYWwgYW5kIHRoZSBsZW5ndGggb2YgdGhlIGFsaWdubWVudCArIHNoaXAgbGVuZ3RoIGlzIGxlc3MgdGhhbiAxMCAobGVuZ3RoIG9mIGJvYXJkKVxuICAgICAgICBlbHNlIGlmIChhbGlnbm1lbnQgPT0gJ3ZlcnRpY2FsJyAmJiAocG9zaXRpb25Sb3cgKyBTaGlwTmFtZS5TaGlwTGVuZ3RoIDwgMTApKSB7XG4gICAgICAgICAgICAvL2ZpcnN0IGNoZWNrIHRoZXJlIGFyZSBubyBjbGFzaGVzIHdpdGggc2hpcHMgYWxyZWFkeSBvbiBib2FyZCAgICAgICBcbiAgICAgICAgICAgIGxldCBzaGlwQ2xhc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIGFsbFNoaXBDb29yZHMuZm9yRWFjaChlbGVtZW50ID0+IFxuICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zaXRpb25Sb3cgPT0gZWxlbWVudFswXSkgJiYgKHBvc2l0aW9uQ29sID09IGVsZW1lbnRbMV0pKSBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcENsYXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFueVNoaXBDbGFzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2V7YW55U2hpcENsYXNoID0gZmFsc2V9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgU2hpcE5hbWUuU2hpcExlbmd0aDsgaW5kZXgrKykgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBDbGFzaCkgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFueVNoaXBDbGFzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NoaXAgb3ZlcmxhcHMgd2l0aCBhbm90aGVyJylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy91cGRhdGUgdGhlIHNoaXBzIGNvb3JkaW5hdGUgYXJyYXlcbiAgICAgICAgICAgICAgICBTaGlwTmFtZS5jb29yZGluYXRlcy5wdXNoKFsocG9zaXRpb25Sb3cgKyBpbmRleCkscG9zaXRpb25Db2xdKTtcbiAgICAgICAgICAgICAgICBhbnlTaGlwQ2xhc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaGlwQXJyYXkucHVzaChTaGlwTmFtZSk7XG4gICAgICAgICAgICAgICAgU2hpcE5hbWUuY29vcmRpbmF0ZXMuZm9yRWFjaChlbGVtZW50ID0+IHthbGxTaGlwQ29vcmRzLnB1c2goZWxlbWVudCk7fSk7ICAgXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSAgICAgXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLy92YWxpZGF0aW9uIGZvciBpZiBzaGlwcyBhcmUgbm90IHBsYWNlZCBpbiB0aGUgcmlnaHQgc3BvdFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy8gYW55U2hpcENsYXNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGFsZXJ0KCdCYWQgc2hpcCBwbGFjZW1lbnQnKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB0YWtlcyBhIHBhaXJcbiAgICAvLyBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXBcbiAgICAvLyBhbmQgdGhlbiBzZW5kcyB0aGUg4oCYaGl04oCZIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAsIFxuICAgIC8vb3IgcmVjb3JkcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1pc3NlZCBzaG90LlxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKVxuICAgIHsgICAgICAgICAgICAgICBcbiAgICAgICAgLy9ib29sIHZhbHVlIGlmIHRoZSBhdHRhY2sgY29vcmRpbmF0ZXMgaGl0IGEgc2hpcFxuICAgICAgICBsZXQgdGhpc0lzQUhpdCA9IGZhbHNlO1xuICAgICAgICAvL3ZhbHVlIGZvciBoaXQgc2hpcFxuICAgICAgICBsZXQgc2hpcEhpdDtcbiAgICAgICAgLy92YWx1ZSBmb3IgaW5kZXggb2YgdGhlIHNoaXAgdGhhdCBoYXMgYmVlbiBoaXRcbiAgICAgICAgbGV0IGhpdEluZGV4O1xuICAgICAgICBhbGxTaGlwQ29vcmRzLmZvckVhY2goZWxlbWVudCA9PiBcbiAgICAgICAgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9lYWNoIG9iamVjdCBpbiB0aGUgc2hpcCBhcnJheSBoYXMgYXJyYXkgb2YgY29vcmRzXG4gICAgICAgICAgICBpZiAoIChwb3NpdGlvblJvdyA9PSBlbGVtZW50WzBdKSAmJiAocG9zaXRpb25Db2wgPT0gZWxlbWVudFsxXSkpIFxuICAgICAgICAgICAgeyAgIC8vdGhpcyBpcyBhIGhpdCAtIHNlbmQgaGl0IHRvIGNvcnJlY3Qgc2hpcCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9kZXRlcm1pbmUgd2hpY2ggc2hpcCB3YXMgaGl0IGFuZCB3aGVyZVxuICAgICAgICAgICAgICAgIC8vbG9vcCB0aHJvdWdoIGFsbCBzaGlwIG9iamVjdHMgb24gYm9hcmRcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcEFycmF5Lmxlbmd0aDsgaW5kZXgrKykgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvL2xvb3Agd2l0aGluIHRoZSBvYmplY3RzIGNvb3JkaW5hdGVzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEFycmF5W2luZGV4XS5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29vcmRpbmF0ZSBmb3IgdGhpcyBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZCA9IHNoaXBBcnJheVtpbmRleF0uY29vcmRpbmF0ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigoY29vcmRbMF0gPT0gcG9zaXRpb25Sb3cpICYmIChjb29yZFsxXSA9PSBwb3NpdGlvbkNvbCkgKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2hpcEhpdCBpcyB0aGUgc2hpcCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwSGl0ID0gc2hpcEFycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21ha2UgaGl0IGluZGV4IHBvc2l0aW9uIG9mIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY2FsbCB0aGUgaGl0IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgc2hpcEhpdC5oaXQoaGl0SW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXNJc0FIaXQgPSB0cnVlOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9KTsgICAgXG4gICAgICAgIGlmICghdGhpc0lzQUhpdCkge1xuICAgICAgICAgICAgLy90aGlzIGlzIGEgbWlzcy4gcmVjb3JkIG1pc3NlZCBjb29yZGluYXRlcyBzbyB0aGV5IGNhbiBiZSByZW5kZXJlZCBpbiBmcm9udEVuZC5qc1xuICAgICAgICAgICAgbWlzc2VkU2hvdHMucHVzaChbcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sXSk7XG4gICAgICAgIH0gXG4gICAgfVxuXG5cbiAgICAvL0dhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcmVwb3J0IHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGVpciBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cbiAgICBmdW5jdGlvbiBjaGVja0lmQWxsU2hpcHNTdW5rKClcbiAgICB7XG4gICAgICAgIC8vY3JlYXRlIGJvb2xcbiAgICAgICAgYWxsU2hpcHNTdW5rID0gdHJ1ZTtcblxuICAgICAgICAvL2FycmF5IHRvIHN0b3JlIHRydWUvZmFsc2UgdmFsdWVzIGludG9cbiAgICAgICAgbGV0IGNoZWNrRm9yU2lua2FnZUFycmF5ID0gW107XG5cbiAgICAgICAgLy9zaGlwQXJyYXkgaGFzIGxpc3Qgb2Ygc2hpcCBvYmplY3RzLCBjaGVjayBlYWNoIGZvciBpZiB0aGV5IGFyZSBzdW5rXG4gICAgICAgIHNoaXBBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGlzU3VuayA9IGVsZW1lbnQuaXNTdW5rKClcbiAgICAgICAgICAgIGNoZWNrRm9yU2lua2FnZUFycmF5LnB1c2goaXNTdW5rKVxuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tGb3JTaW5rYWdlQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYWxsU2hpcHNTdW5rID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vY2hlY2sgZWFjaCB2YWx1ZSBvZiBzaGlwQXJyYXkuc3VuayBcbiAgICAgICAgLy9pZiB0aGV5IGFyZSBhbGwgXG4gICAgICAgIHJldHVybiBhbGxTaGlwc1N1bms7XG4gICAgfSAgICAgICBcblxucmV0dXJuIHtib2FyZCwgYWxsU2hpcENvb3JkcywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBzaGlwQXJyYXksIGNoZWNrSWZBbGxTaGlwc1N1bmssIG1pc3NlZFNob3RzLCBhbnlTaGlwQ2xhc2h9XG59XG5cbmV4cG9ydCB7Z2FtZUJvYXJkfTtcbiIsImltcG9ydCB7c2hpcEZhY3Rvcnl9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuaW1wb3J0IHtnYW1lQm9hcmR9IGZyb20gJy4vZ2FtZUJvYXJkJztcbmltcG9ydCB7cGxheWVyfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQge2NyZWF0ZUJvYXJkc30gZnJvbSAnLi9mcm9udEVuZCdcblxuLy9jcmVhdGUgYm9hcmRzXG5sZXQgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmQoKTtcbmxldCBjb21wdXRlckJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbi8vY3JlYXRlIHBsYXllcnNcbmxldCBwbGF5ZXIxID0gcGxheWVyKFwiUGxheWVyMVwiLCBjb21wdXRlckJvYXJkKTtcbmxldCBwbGF5ZXIyQ09NUCA9IHBsYXllcihcIlBsYXllcjJDT01QXCIsIHBsYXllckJvYXJkKTtcblxuXG5mdW5jdGlvbiBnYW1lUGxheSgpe1xuXG4vL2NyZWF0ZSBwbGF5ZXIgc2hpcHNcbmxldCBwbGF5ZXJCYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoNCwgJ2JhdHRsZXNoaXAnKTtcbmxldCBwbGF5ZXJQYXRyb2wgPSBzaGlwRmFjdG9yeSgyLCAncGF0cm9sJyk7XG5sZXQgcGxheWVyU3VibWFyaW5lID0gc2hpcEZhY3RvcnkoMywgJ3N1Ym1hcmluZScpO1xubGV0IHBsYXllckRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KDQsICdkZXN0cm95ZXInKTtcbmxldCBwbGF5ZXJDYXJyaWVyID0gc2hpcEZhY3RvcnkoNSwgJ2NhcnJpZXInKTtcblxuLy9jcmVhdGUgY29tcHV0ZXIgc2hpcHNcbmxldCBjb21wdXRlckJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSg0LCAnYmF0dGxlc2hpcCcpO1xubGV0IGNvbXB1dGVyUGF0cm9sID0gc2hpcEZhY3RvcnkoMiwgJ3BhdHJvbCcpO1xubGV0IGNvbXB1dGVyU3VibWFyaW5lID0gc2hpcEZhY3RvcnkoMywgJ3N1Ym1hcmluZScpO1xubGV0IGNvbXB1dGVyRGVzdHJveWVyID0gc2hpcEZhY3RvcnkoNCwgJ2Rlc3Ryb3llcicpO1xubGV0IGNvbXB1dGVyQ2FycmllciA9IHNoaXBGYWN0b3J5KDUsICdjYXJyaWVyJyk7XG5cbiAgICAvLyBwbGF5ZXJCb2FyZC5hbnlTaGlwQ2xhc2ggPSB0cnVlO1xuICAgIC8vICAgICB3aGlsZSAocGxheWVyQm9hcmQuYW55U2hpcENsYXNoKSB7XG4gICAgLy8gICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQmF0dGxlc2hpcCwgJ3ZlcnRpY2FsJyk7XG4gICAgLy8gICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyUGF0cm9sLCAnaG9yaXpvbnRhbCcpO1xuICAgIC8vICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclN1Ym1hcmluZSwgJ3ZlcnRpY2FsJyk7XG4gICAgLy8gICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyRGVzdHJveWVyLCAnaG9yaXpvbnRhbCcpO1xuICAgIC8vICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckNhcnJpZXIsICdob3Jpem9udGFsJyk7XG4gICAgLy8gICAgIH1cblxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckJhdHRsZXNoaXAsICd2ZXJ0aWNhbCcsIDMsMyApO1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyUGF0cm9sLCAnaG9yaXpvbnRhbCcsIDAsMyApO1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyU3VibWFyaW5lLCAndmVydGljYWwnLCAzLDYgKTtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckRlc3Ryb3llciwgJ2hvcml6b250YWwnLCA4LDEpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQ2FycmllciwgJ2hvcml6b250YWwnLCA5LDEgKTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBkbyB7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlckJhdHRsZXNoaXAsICd2ZXJ0aWNhbCcsIDMsMyApO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJQYXRyb2wsICdob3Jpem9udGFsJywgMCwzICk7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlclN1Ym1hcmluZSwgJ3ZlcnRpY2FsJywgMyw2ICk7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlckRlc3Ryb3llciwgJ2hvcml6b250YWwnLCA4LDEpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJDYXJyaWVyLCAnaG9yaXpvbnRhbCcsIDksMSApO1xuICAgICAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJCYXR0bGVzaGlwLCAndmVydGljYWwnKTtcbiAgICAgICAgLy8gICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyUGF0cm9sLCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJTdWJtYXJpbmUsICd2ZXJ0aWNhbCcpO1xuICAgICAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJEZXN0cm95ZXIsICdob3Jpem9udGFsJyk7XG4gICAgICAgIC8vICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChjb21wdXRlckNhcnJpZXIsICdob3Jpem9udGFsJyk7XG4gICAgICAgIC8vIH0gd2hpbGUgKGNvbXB1dGVyQm9hcmQuYW55U2hpcENsYXNoKTtcbiAgICAgICAgXG4gICAgICAgIFxuXG5jcmVhdGVCb2FyZHMoKTtcbn1cblxuZnVuY3Rpb24gcGxheWVyVHVybihyb3csIGNvbClcbntcbiAgICBwbGF5ZXIxLnRha2VUdXJuKHJvdywgY29sKTsgXG5cbiAgICAvL2ltbWVkaWF0ZWx5IGFmdGVyLCB0aGUgY29tcHV0ZXIgdGFrZXMgYSB0dXJuIC0gZm9yIHRlc3RpbmcgYW55d2F5XG4gICAgbGV0IGNvbDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbGV0IHJvdzIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcGxheWVyMkNPTVAudGFrZVR1cm4oY29sMiwgcm93Mik7ICBcblxuXG4gICAgLy9jaGVjayBpZiBhbGwgc2hpcHMgc3Vua1xuICAgIGxldCBnYW1lb3ZlclBsYXllciA9IHBsYXllckJvYXJkLmNoZWNrSWZBbGxTaGlwc1N1bmsoKTtcbiAgICBsZXQgZ2FtZW92ZXJDb21wdXRlciA9IGNvbXB1dGVyQm9hcmQuY2hlY2tJZkFsbFNoaXBzU3VuaygpXG5cbiAgICBpZiAoZ2FtZW92ZXJQbGF5ZXIpIHtcbiAgICAgICAgYWxlcnQoXCJDb21wdXRlciB3aW5zIVwiKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIGlmIChnYW1lb3ZlckNvbXB1dGVyKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxheWVyIHdpbnMhXCIpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7Z2FtZVBsYXksIHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkLCBwbGF5ZXJUdXJufTtcbiIsIlxuY29uc3QgeyByZWNlaXZlQXR0YWNrIH0gPSByZXF1aXJlKFwiLi9nYW1lQm9hcmRcIik7XG5pbXBvcnQge2NyZWF0ZUJvYXJkc30gZnJvbSAnLi9mcm9udEVuZCdcblxuY29uc3QgcGxheWVyID0gKG5hbWUsIGVuZW15R2FtZWJvYXJkKSA9PlxueyAgIFxuICAgIC8vbGFiZWwgd2l0aCBhIG5hbWVcbiAgICBsZXQgcGxheWVyTmFtZSA9IG5hbWU7XG4gICAgbGV0IGdhbWVCb2FyZEF0dGFja0JvYXJkID0gZW5lbXlHYW1lYm9hcmQ7XG4gICAgbGV0IHR1cm4gPSBmYWxzZTtcbiAgICBsZXQgY29tcHV0ZXJUdXJuc1Rha2VuID0gW107XG5cbiAgICBmdW5jdGlvbiB0YWtlVHVybihhUm93LCBhQ29sKXtcbiAgICBpZiAocGxheWVyTmFtZSA9PSAnY29tcHV0ZXInKSB7XG5cbiAgICAgICAgLy9uZWVkIHRvIHJhbmRvbWlzZSBwbGF5c1xuICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAvL2Jvb2wgZm9yIGlmIHRoZSBndWVzcyBoYXMgYmVlbiB0YWtlbiBhbHJlYWR5IGluIGdhbWVcbiAgICAgICAgbGV0IGd1ZXNzVGFrZW4gPSBmYWxzZTtcbiAgICAgICAgLy9jaGVjayB0aGUgcHJldmlvdXMgZ3Vlc3NlcywgaWYgaXQgaGFzIGJlZW4gdGFrZW4gZ28gdG8gd2hpbGUgbG9vcFxuICAgICAgICBjb21wdXRlclR1cm5zVGFrZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50WzBdID09IHJvdyAmJiBlbGVtZW50WzFdID09IGNvbCkge1xuICAgICAgICAgICAgICAgIGd1ZXNzVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy9sb29wIHRocm91Z2ggdW50aWwgYSBndWVzcyBpc250IHRha2VuXG4gICAgICAgIHdoaWxlIChndWVzc1Rha2VuKSB7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBjb21wdXRlclR1cm5zVGFrZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFswXSA9PSByb3cgJiYgZWxlbWVudFsxXSA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3Vlc3NUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9vbmNlIHRoZSBjb29yZGluYXRlcyBhcmUgdmFsaWQsIHB1c2ggdGhlbSB0byB0aGUgZ3Vlc3NlcyB0YWtlbiBhcnJheSBmb3IgdmFsaWRhdGlvblxuICAgICAgICBjb21wdXRlclR1cm5zVGFrZW4ucHVzaChbcm93LCBjb2xdKTtcblxuICAgICAgICAvL3RoZSBib2FyZCB0byBhdHRhY2sgaXMgdGhlIHBsYXllcnMgYm9hcmRcbiAgICAgICAgZ2FtZUJvYXJkQXR0YWNrQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG5cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgLy9ub3QgYSBjb21wdXRlclxuICAgICAgICBnYW1lQm9hcmRBdHRhY2tCb2FyZC5yZWNlaXZlQXR0YWNrKGFSb3csIGFDb2wpXG4gICAgICAgIC8vdGhlIGJvYXJkIHRvIGF0dGFjayBpcyB0aGUgY29tcHV0ZXJzIGJvYXJkICAgICAgICBcbiAgICAgICAgY3JlYXRlQm9hcmRzKCk7XG4gICAgfVxufVxucmV0dXJue3Rha2VUdXJufVxuXG59XG5cbmV4cG9ydCB7cGxheWVyfTsiLCJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgsIG5hbWUpID0+e1xuICAvL2RlZmluZSBsZW5ndGggb2Ygc2hpcFxuICBsZXQgU2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgbGV0IFNoaXBOYW1lID0gbmFtZTtcbiAgLy9jcmVhdGUgYW4gYXJyYXkgb2YgdGhlIGxlbmd0aCwgcmVwcmVzZW50aW5nIGEgc2hpcFxuICBsZXQgbGVuZ3RoQXJyYXkgPSBbXTtcbiAgbGVuZ3RoQXJyYXkgPSBbLi4uQXJyYXkoU2hpcExlbmd0aCldLm1hcCh4ID0+IDEpOyAgIFxuICAvL2FycmF5IGZvciBjb29yZGluYXRlcyB0byBiZSBoZWxkXG4gIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAvL2RlZmluZSBoaXQgZnVuY3Rpb25cbiAgZnVuY3Rpb24gaGl0KG51bSlcbiAge1xuICAgIC8vbWFyayBudW0gYXMgaGl0XG4gICAgbGVuZ3RoQXJyYXlbbnVtXSA9IDA7ICBcbiAgfSAgXG4gIC8vZGV0ZXJtaW5lIGlmIHN1bmtcbiAgZnVuY3Rpb24gaXNTdW5rKClcbiAge1xuICAgIGxldCBzdW5rID0gdHJ1ZTtcbiAgICBsZW5ndGhBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT0gMSkge1xuICAgICAgICBzdW5rID0gZmFsc2U7XG4gICAgICB9ICAgICAgXG4gICAgfSk7XG4gICAgcmV0dXJuIHN1bms7XG4gIH1cbiAgcmV0dXJue1NoaXBMZW5ndGgsIFNoaXBOYW1lLCBsZW5ndGhBcnJheSwgaGl0LCBpc1N1bmssIGNvb3JkaW5hdGVzfVxufVxuXG5leHBvcnQge3NoaXBGYWN0b3J5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2FtZVBsYXkgfSBmcm9tICcuL2RlcGVuZGVuY2llcy9nYW1lTG9vcCc7XG5pbXBvcnQge2NyZWF0ZUJvYXJkc30gZnJvbSAnLi9kZXBlbmRlbmNpZXMvZnJvbnRFbmQnXG5cblxubGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QnV0dG9uJyk7XG5zdGFydEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gZ2FtZVBsYXkoKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0QnV0dG9uJykub25jbGljayA9ICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpO1xuLy8gc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVQbGF5KVxuLy9jYWxsIHRoZSBnYW1lIGxvb3AgZnVuY3Rpb25cbmNyZWF0ZUJvYXJkcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==